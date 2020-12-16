import React,{useState,useEffect} from "react";
import '../App.css';
import firebase from 'firebase';

const LacteosFormulario=(props)=>{
const initialFieldValues ={
    Producto:'',
    Existencia:'',
    Id:'',
    Estado:'',
    Ingreso:'',
    Editar:'',
    image:[]
}   

var [values, setValues]= useState(initialFieldValues)

useEffect(()=>{
if(props.currentId=='')
setValues({
    ... initialFieldValues
})
else
setValues({
    ... props.tareaObjects[props.currentId]
})
}
,[props.currentId, props.tareaObjects])

const handleInputChange= e => {
    var {name, value}=e.target
    setValues({
        ...values,
        [name]:value
    })
}
const handleFormSubmit= e =>{
    e.preventDefault();
    props.addOrEdit(values)
}
const handleUpload=e=>{
    var {name}=e.target
    const file = e.target.files[0];
    const storageRef = firebase.storage().ref(`/fotos/${file.name}`);
    
    const task = storageRef.put(file);
   
    

    task.on('state_changed',  () =>  storageRef.getDownloadURL().then(url =>  {
        const record = {
         
          image: url
        };
        setValues({
            ...values,
            [name]:url
        })
    }));
  
  }
    return( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-tasks"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Producto" name="Producto"
                value={values.Producto}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-laptop"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Existencia" name="Existencia"
                value={values.Existencia}
                onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-male"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Id" name="Id"
                value={values.Id}
                onChange={handleInputChange}
                />
            </div>
            </div>
            
            <div className="form-row">
            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-thermometer-half"></i>

                </div>
                </div>

                {/* <input className="form-control" placeholder="Estado" name="Estado"
                value={values.Estado}
                onChange={handleInputChange}
                /> */}
                <select required className="form-control"  name="Estado" value={values.Estado}
                onChange={handleInputChange}>
                    
    <option  value="" disabled  hidden>Estado</option>
  <option  >Exitoso</option>
  <option >En Proceso</option>
  <option >Fallido</option>
  <option >Esperando Correcion</option>
</select>
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-eye"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Ingreso" name="Ingreso"
                value={values.Ingreso}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-exclamation-triangle"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Departamento" name="Departamento"
                value={values.Departamento}
                onChange={handleInputChange}
                />
            </div>
            <div className="input-group mb-3">
  <div className="input-group-prepend">
    <span className="input-group-text">Imagen</span>
  </div>
  <div className="custom-file">
  <input type="file" className="custom-file-input" id="inputGroupFile01" onChange={handleUpload} name="image"/>
    <label className="custom-file-label" >Elegir Imagen</label>
  </div>
 
</div>
<div className="text-center">
<img name="image" width="320" className="rounded" src={values.image} onChange={handleInputChange} />
</div>  
            </div>
            <div className="form-group">
                    <input type="submit" value={props.currentId==''? "Guardar":"Actualizar"} className="btn btn-primary btn-block"/>
                    

            </div>
        </form>
    );
}

export default LacteosFormulario;

