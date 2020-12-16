import React,{useState,useEffect} from "react";
import '../App.css';

const VentaIncidenciaFormulario=(props)=>{
const initialFieldValues ={
    descripcion:'',
    ejecutable:'',
    encargado:'',
    status:'',
    observacion:'',
    incidencia:''
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
    return( 
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-tasks"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Descripcion" name="descripcion"
                value={values.descripcion}
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

                <input className="form-control" placeholder="Ejecutable" name="ejecutable"
                value={values.ejecutable}
                onChange={handleInputChange}
                />
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-male"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Encargado" name="encargado"
                value={values.encargado}
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

                {/* <input className="form-control" placeholder="Status" name="status"
                value={values.status}
                onChange={handleInputChange}
                /> */}
                <select required className="form-control"  name="status" value={values.status}
                onChange={handleInputChange}>
                    
    <option  value="" disabled  hidden>Status</option>
  <option  >En Proceso</option>
  <option >Necesita Informacion</option>
  <option >Solucion Propuesta</option>
  <option >Finalizado</option>
</select>
            </div>

            <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-eye"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Observacion" name="observacion"
                value={values.observacion}
                onChange={handleInputChange}
                />
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-exclamation-triangle"></i>

                </div>
                </div>

                <input className="form-control" placeholder="Incidencia" name="incidencia"
                value={values.incidencia}
                onChange={handleInputChange}
                />
            </div>
            </div>
            <div className="form-group">
                    <input type="submit" value={props.currentId==''? "Guardar":"Actualizar"} className="btn btn-primary btn-block"/>
            </div>
        </form>
    );
}

export default VentaIncidenciaFormulario;