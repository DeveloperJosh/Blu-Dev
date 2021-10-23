import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Oh404 from './Pages/404';
import About from './Pages/About';
import Order from './Pages/Store';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Router path="/store" component={Order} />
                <Route component={Oh404} />
            </Switch>
        </BrowserRouter>
    )
}