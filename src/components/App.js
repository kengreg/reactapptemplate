import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//getting the component created by me
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";

function App(){
    return (
        <BrowserRouter>
        {/* BrowserRouter solo puede tener un hijo, o sea que necesitas poner un div o algun tag que le haga wrap a las rutas para solucionar el problema sin embargo esto te metera el contenido y recargara por lo cual usa switch, al route tienes que ponerle "exact" para que no recarge o tome la primera ruta que tenga algo compatible independientemente que no sea toda la ruta. */}
            <Switch>
            <Route exact path="/badges" component={Badges} />
            <Route exact path="/badges/new" component={BadgeNew} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;