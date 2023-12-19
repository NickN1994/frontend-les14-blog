import React from 'react';
import './Navigation.css';
import {Link, NavLink} from "react-router-dom";
import logoSmall from '../../assets/logo-small.png'

function Navigation() {
    return (
        <div className="outer-container-nav">
            <nav>
                <div className="logo">
                <img src={logoSmall} alt="logo in het klein" className="logo"/>
                    <h2>BlOgventure</h2>
                </div>
                <ul>
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                    </li>
                    <li><NavLink to="/blogs"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Blogs</NavLink>
                    </li>
                    <li><NavLink to="/new-blog"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>New
                        Blog</NavLink></li>
                </ul>

            </nav>
        </div>
    )

}

export default Navigation;

