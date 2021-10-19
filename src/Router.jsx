import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import About from './About';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Router exact path="/" component={App} />
                <Router exact path="/about" component={About} />
            </Switch>
        </BrowserRouter>
    )
}