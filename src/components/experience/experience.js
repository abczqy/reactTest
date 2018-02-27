import React from 'react';
import './experience.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const First = () => (
    <div>
        <h2>快乐男声——全国总冠军</h2>
        <p>2013年9月27日</p>
    </div>
);
const Second = ({ routes }) => (
    <div>
        <header><h2>Second</h2></header>
        <ul>
            <li><Link to={{pathname: "/experience/second/hs", state: {name: "花儿与少年"}}}>花儿与少年</Link></li>
            <li><Link to={{pathname: "/experience/second/cy", state: {name: "唱游天下"}}}>唱游天下</Link></li>
            <li><Link to={{pathname: "/experience/second/tl", state: {name: "天籁之战第一、二季"}}}>天籁之战</Link></li>
            <li><Link to={{pathname: "/experience/second/hy", state: {name: "旅途的花样"}}}>旅途的花样</Link></li>
            <li><Link to={{pathname: "/experience/second/gs", state: {name: "歌手2018"}}}>歌手2018</Link></li>
        </ul>
        {routes.map((route, i) => (
            <SubRoutes key={i} {...route}/>
        ))}
    </div>
);

const Jm = (props) => {
    return (<div>
        <hr/>
        <h3>{props.location.state.name}</h3>
    </div>)
};

const SubRoutes = (route) => {
    return (
        <Route path={route.path} render={props => (
            <route.component {...props} routes={route.routes}/>
        )}/>
    )
};

const Experience = () => (
    <Router>
        <div className="experience">
            <header>
                <h2>HCY</h2>
            </header>
            <ul>
                <li><Link to="/experience/first">出道</Link></li>
                <li><Link to="/experience/second">综艺</Link></li>
            </ul>
            <hr/>
            {routes.map((route, i) => (
                <SubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
);

const routes = [
    {
        path: '/experience/first',
        component: First
    },
    {
        path: '/experience/second',
        component: Second,
        routes: [
            {
                path: '/experience/second/hs',
                component: Jm
            },
            {
                path: '/experience/second/cy',
                component: Jm
            },
            {
                path: '/experience/second/tl',
                component: Jm
            },
            {
                path: '/experience/second/hy',
                component: Jm
            },
            {
                path: '/experience/second/gs',
                component: Jm
            }
        ]
    }
];

export default Experience;