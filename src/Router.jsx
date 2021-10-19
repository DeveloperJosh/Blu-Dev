import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Router exact path="/" component={App} />
            </Switch>
        </BrowserRouter>
    )
}