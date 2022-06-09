import disco from '../assets/disco-dice.png'; 

const Navbar = () => {
    return(
        <nav className="level">
            <p id="nav-sub" className="level-item has-text-centered">
                <span className="image is-48x48 mr-2">
                    <img src={disco} alt="" />
                </span>
                Username
            </p>
            <p id="nav-title" className="level-item has-text-centered">
                Disco at the Dungeon
            </p>
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
                                <p className="has-text-left">Logout</p>
                            </div>
                            <div className="dropdown-item">
                                <p className="has-text-left">Delete Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </p>
        </nav>
    ); 
}; 

export default Navbar; 
  

