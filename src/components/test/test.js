import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

// Some folks find value in a centralized route config.
// A route config is just data. React is great at mapping
// data into components, and <Route> is a component.

////////////////////////////////////////////////////////////
// first our route components

const Sandwiches = () => <h2>Sandwiches</h2>

const Tacos = ({ routes }) => (
    <div>
        <h2>Tacos</h2>
        <ul>
            <li><Link to="/test/tacos/bus">Bus</Link></li>
            <li><Link to="/test/tacos/cart">Cart</Link></li>
        </ul>

        {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route}/>
        ))}
    </div>
)

const Bus = () => <h3>Bus</h3>
const Cart = () => <h3>Cart</h3>

////////////////////////////////////////////////////////////
// then our route config
const routes = [
    { path: '/test/sandwiches',
        component: Sandwiches
    },
    { path: '/test/tacos',
        component: Tacos,
        routes: [
            { path: '/test/tacos/bus',
                component: Bus
            },
            { path: '/test/tacos/cart',
                component: Cart
            }
        ]
    }
]

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
)

const Test = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/test/tacos">Tacos</Link></li>
                <li><Link to="/test/sandwiches">Sandwiches</Link></li>
            </ul>

            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route}/>
            ))}
        </div>
    </Router>
)

export default Test