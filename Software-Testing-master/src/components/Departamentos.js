import React,{useState,useEffect} from "react";
import '../App.css';
import { Redirect } from "react-router";



const Departamentos=()=>{

    return(
        
        <>
        <form>
        <div className="form-group">
        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/recursos-humanos">Caja</a></button>
         </div>
        </div>

        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/Lacteos">Registrar Productos</a></button>
        </div>

        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/contabilidad">Departamentos de productos</a></button>
        </div>


        <div class = "bottondiv">
        <button class = "deptbottons" type="button"><a class="nav-link" href="http://localhost:3000/logistica">Logistica</a></button>
        </div>

        </form>
        </>
    )
}
export default Departamentos;