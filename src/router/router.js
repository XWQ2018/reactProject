import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

/* 引入组件 */
import Home from "@/components/Home";
import Detail from "@/components/Detail";


const baseRouter = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
        </Switch>
    </HashRouter>
)

export default baseRouter;