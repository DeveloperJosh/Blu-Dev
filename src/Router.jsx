import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Oh404 from './Pages/404';
import About from './Pages/About';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/about" component={About} />
                <Route component={Oh404} />
            </Switch>
        </BrowserRouter>
    )
}