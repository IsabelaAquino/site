import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import Produtos from "./pages/produto/Produtos";
import Produto from "./pages/produto/Produto";



export default function Routes() {
  return (
    <Switch classeName="body">
        {/* <Route path="/login" exact component={Logout} />
        <Route path="/sair" exact component={Logout} />
        <Route path="/gu-login/:token" exact component={GuLogin} /> */
      }
        <Route path="/" exact component={Home} />
        <Route path="/contato" exact component={Contato} />
        <Route path="/produtos" exact component={Produtos} />
        <Route path="/produto/:id" exact component={Produto} />
        
    </Switch>
  )
}
