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
            <li><Link to="/experience/second/hs">花儿与少年</Link></li>
            <li><Link to="/experience/second/cy">唱游天下</Link></li>
            <li><Link to="/experience/second/tl">天籁之战</Link></li>
            <li><Link to="/experience/second/hy">旅途的花样</Link></li>
            <li><Link to="/experience/second/gs">歌手2018</Link></li>
        </ul>
        {routes.map((route, i) => (
            <SubRoutes key={i} {...route}/>
        ))}
    </div>
);
const Hs = () => (
    <div>
        <hr/>
        <h3>花儿与少年</h3>
    </div>
);
const Cy = () => (
    <div>
        <hr/>
        <h3>唱游天下</h3>
    </div>
);
const Tl = () => (
    <div>
        <hr/>
        <h3>天籁之战一、二季</h3>
    </div>
);
const Hy = () => (
    <div>
        <hr/>
        <h3>旅途的花样</h3>
    </div>
);
const Gs = () => (
    <div>
        <hr/>
        <h3>歌手2018</h3>
    </div>
);

const SubRoutes = (route) => (
    <Route path={route.path} render={props => (
        <route.component {...props} routes={route.routes}/>
    )}/>
);

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
                component: Hs
            },
            {
                path: '/experience/second/cy',
                component: Cy
            },
            {
                path: '/experience/second/tl',
                component: Tl
            },
            {
                path: '/experience/second/hy',
                component: Hy
            },
            {
                path: '/experience/second/gs',
                component: Gs
            }
        ]
    }
];

export default Experience;