import React from 'react';
import './App.css';
import Content from './components/content/content';
import Experience from './components/experience/experience';
import Pictures from './components/pictures/pictures';
import Messages from './components/messages/messages';
import { BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const App = ()=>(
    <Router>
        <Route render={({ location }) => (
            <div>
                <Route exact path="/" render={() => (
                    <Redirect to="/content"/>
                )} />
                <nav className="nav">
                    <header className="all-header">TEST</header>
                    <ul>
                        <li><NavLink exact to="/content">content</NavLink></li>
                        <li><NavLink to="/experience">experience</NavLink></li>
                        <li><NavLink to="/pictures">pictures</NavLink></li>
                        <li><NavLink to="/messages">messages</NavLink></li>
                    </ul>
                    <div className="clear"></div>
                </nav>
                <div className="cont">
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}>
                        <div key={location.pathname} className="content">
                            <Route exact path="/content" component={Content} />
                            <Route path="/experience" component={Experience} />
                            <Route path="/pictures" component={Pictures} />
                            <Route path="/messages" component={Messages} />
                        </div>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )}/>
    </Router>
);

export default App;
