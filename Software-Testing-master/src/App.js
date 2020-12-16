import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tareas from './components/Tareas';
import Ventas from './components/Ventas';
import RecursosHumanos from './components/RecursosHumanos';
import Contabilidad from './components/Contabilidad';
import Logistica from './components/Logistica';
import Incidencias from './components/Incidencias';
import RecursosHumanosIncidencias from './components/RecursosHumanosIncidencias';
import VentasIncidencias from './components/VentasIncidencias';
import ContabilidadIncidencias from './components/ContabilidadIncidencias';
import LogisticaIncidencias from './components/LogisticaIncidencias';
import Dankmemes from './components/Reports';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from './login';
import {AuthContextProvider} from './auth';
import GuardRoute from './guardRoute';
import Root from './root'; 
import Departamentos from './components/Departamentos';
import DepartamentosIncidencias from './components/DepartamentosIncidencias';

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Root>
    <Switch>
        <GuardRoute type="public" path="/login" component={Login} />
        <GuardRoute type="private" path="/tareas" component={Tareas} />
        <GuardRoute type="private" path="/ventas" exact component={Ventas} />
        <GuardRoute type="private" path="/recursos-humanos" exact component={RecursosHumanos} />
        <GuardRoute type="private" path="/contabilidad" exact component={Contabilidad} />
        <GuardRoute type="private" path="/logistica" exact component={Logistica} />
        <GuardRoute type="private" path="/recursos-humanosIncidencias" exact component={RecursosHumanosIncidencias} />
        <GuardRoute type="private" path="/ventasIncidencias" exact component={VentasIncidencias} />
        <GuardRoute type="private" path="/contabilidadIncidencias" exact component={ContabilidadIncidencias} />
        <GuardRoute type="private" path="/logisticaIncidencias" exact component={LogisticaIncidencias} />
        <GuardRoute type="private" path="/reports" component={Dankmemes} />
        <GuardRoute type="private" path="/incidencias" component={Incidencias} />
        <GuardRoute type="private" path="/Departamentos" component={Departamentos} />
        <GuardRoute type="private" path="/DepartamentosIncidencias" component={DepartamentosIncidencias} />
        <Redirect from="/" to="/Departamentos" />

  </Switch>
  </Root>
  </AuthContextProvider>
  </BrowserRouter>
  );
}

export default App;
