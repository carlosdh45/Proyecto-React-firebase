import React,{useState,useEffect} from "react";
import '../App.css';
import { Redirect } from "react-router";



const Departamentos=()=>{

    return(
        
        <>
        <form>
        <div className="form-group">
        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/recursos-humanos">Recursos Humanos</a></button>
         </div>
        </div>

        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/ventas">Ventas</a></button>
        </div>


        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/contabilidad">Contabilidad</a></button>
        </div>


        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/logistica">Logistica</a></button>
        </div>

        </form>
        </>
    )
}
export default Departamentos;