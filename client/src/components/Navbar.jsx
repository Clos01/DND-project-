import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client'
import { QUERY_ME_BASIC } from '../utils/queries'
import disco from '../images/disco-dice.png'; 

const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

const Navbar = () => {
    const { loading, data } = useQuery(QUERY_ME_BASIC);

    if (loading) {
        return <div>Loading...</div>
    };

    return(
        <nav className="level">
            {Auth.loggedIn() ? (
            <p id="nav-sub" className="level-item has-text-centered">
                <span className="image is-48x48 mr-2">
                    <img src={disco} alt="" />
                </span>
               <Link to={'/'} className='has-text-white'>{data.me.username}</Link>
            </p>
            ):(<div className='level-item mr-6' ></div>)}
            

            <p id="nav-title" className="level-item has-text-centered">
                Disco at the Dungeon
            </p>

            {Auth.loggedIn() ? (
                <p className="level-item has-text-centered">
                    <div className="dropdown is-hoverable">
                        <div className="dropdown-trigger">
                            <button id="acct-btn" className="button is-small" aria-haspopup="true" aria-controls="dropdown-menu4">
                                <span>Account Settings</span>
                            </button>
                        </div>
                        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <a href='/' onClick={logout} className="has-text-left">Logout</a>
                                </div>
                                <div className="dropdown-item">
                                    <a href='/' className="has-text-left">Delete Account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </p>
                ) :
                (
                <>
                <div className='level-item'>
                    <Link className='has-text-white' to="/login">Login</Link>
                </div>
                </>
                )
            }
        </nav>
    ); 
}; 

export default Navbar; 