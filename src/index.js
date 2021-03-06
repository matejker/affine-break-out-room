import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './index.css';
import App from './App';
import Story from './Story';
import Theory from './Theory';

export const Index = () => {

    return (
        <Router>
            <h1>Affine Break Out Room</h1>
            <menu>
                <li><Link to="/affine-break-out-room/">Home</Link></li>
                <li><Link to="/affine-break-out-room/story">Story</Link></li>
                <li><Link to="/affine-break-out-room/theory">Theory</Link></li>
            </menu>
            <Switch>
                <Route path="/affine-break-out-room/story" component={Story} />
                <Route path="/affine-break-out-room/theory" component={Theory} />
                <Route path="/affine-break-out-room/" component={App} />
            </Switch>
            <footer>
                &copy; Matej Kerekrety 2021
            </footer>
        </Router>
    );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.getElementById('root')
);
