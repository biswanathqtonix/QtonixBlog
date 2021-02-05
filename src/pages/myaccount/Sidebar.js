import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="card">
                                    <div className="card-body">
                                    <ul class="nav flex-column">
                                        <li class="nav-item">
                                            <NavLink className="nav-link" activeClassName="activesidenav" exact to="/myaccount">Dashboard</NavLink>
                                        </li>
                                        <li class="nav-item">
                                            <NavLink className="nav-link" activeClassName="activesidenav" exact to="/myaccount/edit">Edit Account</NavLink>
                                        </li>
                                    </ul>
                                    </div>
                                </div>
    )
}
