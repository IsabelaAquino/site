import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";



export default function Routes() {
  return (
    <Switch>
        {/* <Route path="/login" exact component={Logout} />
        <Route path="/sair" exact component={Logout} />
        <Route path="/gu-login/:token" exact component={GuLogin} /> */
      }
        <Route path="/" exact component={Home} />
        <Route path="/contato" exact component={Contato} />
        
    </Switch>
  )
}
