import React,{useState,useEffect} from "react";
import '../App.css';
import { Redirect } from "react-router";



const Departamentos=()=>{

    return(
        
        <>
        <form>
        <div className="form-group">
        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/recursos-humanosIncidencias">Recursos Humanos</a></button>
         </div>
        </div>

        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/ventasIncidencias">Ventas</a></button>
        </div>


        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/contabilidadIncidencias">Contabilidad</a></button>
        </div>


        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/logisticaIncidencias">Logistica</a></button>
        </div>

        </form>
        </>
    )
}
export default Departamentos;