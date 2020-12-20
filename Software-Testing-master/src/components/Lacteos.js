import React,{useState,useEffect} from "react";
import LacteosFormulario from "./LacteosFormulario";
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

const Lacteos=()=>{

var[tareaObjects,setTareaObjects] = useState({})
var[currentId,setCurrentId] = useState('')

useEffect(()=>{
  firebaseDb.child('tareas/Productos').on('value',snapshot =>{
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
firebaseDb.child('tareas/Productos').push(
  obj,
  err =>{
    if(err)
    console.log(err)
    else
    setCurrentId('')
  }
)
else
firebaseDb.child(`tareas/Productos/${currentId}`).set(
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
      firebaseDb.child(`tareas/Productos/${key}`).remove(
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
    <h1 className="display-4 text-center">Registrar Productos</h1>
  </div>
</div>
 <div className="row">
 <div className="col-md-5">
     <LacteosFormulario {...({addOrEdit, currentId, tareaObjects})}/>
 </div>
 <div className="col-md-7">
    <table className="table table-borderless table-stripped">
      <thead className="thead-light">
        <tr>
          <th>Producto</th>
          <th>Existencia</th>
          <th>Id</th>
          <th>Estado</th>
          <th>Ingreso</th>
          <th>Editar</th>
          <th>Departamento</th>
          <th>Imagen</th>
        </tr>
      </thead>
      <tbody>
        {
Object.keys(tareaObjects).map(id=>{
  return<tr key={id}>
    <td>{tareaObjects[id].Producto}</td>
    <td>{tareaObjects[id].Existencia}</td>
    <td>{tareaObjects[id].Id}</td>
    <td>{tareaObjects[id].Estado}</td>
    <td>{tareaObjects[id].Ingreso}</td>
    <td>
      <a className="btn text-primary" onClick={ () => {setCurrentId(id) } } >
      <i className="fas fa-pencil-alt"></i>
      </a> 
      <a className="btn text-danger" onClick={()=>{onDelete(id)}}>
      <i className="fas fa-trash-alt"></i>
      </a> 
      </td>
      <td>{tareaObjects[id].Departamento}</td>
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
export default Lacteos;