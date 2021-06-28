import React from 'react';
import {Navbar} from "./components/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {TodosPage} from "./pages/todosPage";
import {AboutPage} from "./pages/aboutUs";
import {UserList} from "./pages/users";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <div className={"container"}>
        <Switch>
          <Route component={TodosPage} path={"/"} exact/>
          <Route component={AboutPage} path={"/about"} exact/>
          <Route component={UserList} path={"/users"}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
