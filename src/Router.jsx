import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Oh404 from './Pages/404';
import About from './Pages/About';
import Love from './Pages/Love';
import Sad from './Pages/Sad';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route path="/love" component={Love} />
                <Route path="/sad" component={Sad} />

                <Route component={Oh404} />
            </Switch>
        </BrowserRouter>
    )
}