import React from 'react'
import { Switch, Route } from "react-router-dom";
import Topbar from '../components/Topbar';
import AddWordPage from './AddWordPage';
import Homepage from './HomePage';

const Mainpage = () => {
    return (
        <div>
            <Topbar />
            <Switch>
                <Route path='/add-word'>
                    <AddWordPage />
                </Route>

                <Route path='/'>
                    <Homepage />
                </Route>
            </Switch>
        </div>
    )
}

export default Mainpage
