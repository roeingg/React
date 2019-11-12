import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, NavLink, BrowserRouter as Router, Switch, } from 'react-router-dom'
import App from './App'
import Users from './users'
import Contact from './contact'
import Notfound from './notfound'
const routing = (
  <Router>

    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <NavLink exact activeClassName="active" to="/">
                  Home
          </NavLink>
                <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <NavLink activeClassName="active" to="/users">
                  Users
          </NavLink>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <NavLink activeClassName="active" to="/contact">
                  Contact
          </NavLink>
              </a>
            </li>
          </ul>
        </div>

      </nav>

      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch>

    </div>

  </Router>
)
ReactDOM.render(routing, document.getElementById('root'))