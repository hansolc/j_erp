import {
    BrowserRouter,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import Login from './pages/Login';
import Service from './pages/Service';

function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/service">
                    <Service></Service>
                </Route>
                <Route exact path="/">
                    <Login></Login>
                </Route>
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;