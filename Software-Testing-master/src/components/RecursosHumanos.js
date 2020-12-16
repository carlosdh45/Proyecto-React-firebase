import React,{useState,useEffect} from "react";
import RecursoHumanoFormulario from "./RecursoHumanoFormulario";
import firebaseDb from "../firebase";
import { AuthContext } from "../auth";
import * as firebase from 'firebase';

class Page extends React.Component{
  render(){
    return(
<div>
  <h1>{this.context.user && this.context.user.email} </h1>
</div>

    );
  }
}
const logout = async ()=>{
  await firebase.auth().signOut();
}

const RecursosHumanos=()=>{

var[tareaObjects,setTareaObjects] = useState({})
var[currentId,setCurrentId] = useState('')

useEffect(()=>{
  firebaseDb.child('tareas/recursos-humanos').on('value',snapshot =>{
    if(snapshot.val()!=null)
    setTareaObjects({
      ...snapshot.val()
    })
    else
    setTareaObjects({
     
    })
  })
},[]) // similar a componenteDidMount

  const addOrEdit = obj=>{
    if(currentId=='')
firebaseDb.child('tareas/recursos-humanos').push(
  obj,
  err =>{
    if(err)
    console.log(err)
    else
    setCurrentId('')
  }
)
else
firebaseDb.child(`tareas/recursos-humanos/${currentId}`).set(
  obj,
  err =>{
    if(err)
    console.log(err)
    else
    setCurrentId('')
  }
)
  }
  const onDelete = key =>{
    if(window.confirm('¿Esta seguro de eliminar la tarea?')){
      firebaseDb.child(`tareas/recursos-humanos/${key}`).remove(
        err =>{
          if(err)
          console.log(err)
          else
          setCurrentId('')
        }
      )
    }
  }
    return( 
        <>
        <Page/>
        <button onClick={logout} >Cerrar Sesion</button>
        <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center">Registrar Tareas de Recursos Humanos</h1>
  </div>
</div>
 <div className="row">
 <div className="col-md-5">
     <RecursoHumanoFormulario {...({addOrEdit, currentId, tareaObjects})}/>
 </div>
 <div className="col-md-7">
    <table className="table table-borderless table-stripped">
      <thead className="thead-light">
        <tr>
          <th>Descripcion</th>
          <th>Ejecutable</th>
          <th>Encargado</th>
          <th>Status</th>
          <th>Observacion</th>
          <th>Acciones</th>
          <th>Incidencia</th>
          <th>Evidencia</th>
        </tr>
      </thead>
      <tbody>
        {
Object.keys(tareaObjects).map(id=>{
  return<tr key={id}>
    <td>{tareaObjects[id].descripcion}</td>
    <td>{tareaObjects[id].ejecutable}</td>
    <td>{tareaObjects[id].encargado}</td>
    <td>{tareaObjects[id].status}</td>
    <td>{tareaObjects[id].observacion}</td>
    <td>
      <a className="btn text-primary" onClick={ () => {setCurrentId(id) } } >
      <i className="fas fa-pencil-alt"></i>
      </a> 
      <a className="btn text-danger" onClick={()=>{onDelete(id)}}>
      <i className="fas fa-trash-alt"></i>
      </a> 
      </td>
      <td>{tareaObjects[id].incidencia}</td>
      <td>
      <img width="200" src={tareaObjects[id].image} /></td>
  </tr>
})

        }
      </tbody>
    </table>
 </div>
</div>
</>
    );
}
Page.contextType= AuthContext;
export default RecursosHumanos;