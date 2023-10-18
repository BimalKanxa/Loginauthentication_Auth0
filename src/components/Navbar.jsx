import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';

const Button = styled.button`
    background-color: #3498db;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    background-color: #217dbb;
  }
`

function NavBar() {
    const { logout } = useAuth0();
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    console.log("Current user : ", user)
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            {/* <i className="fas fa-code">   </i> CS Coder<i className="fas fa-code"></i> */}
            <h3>Cs Coder</h3>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
         
          
            
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links homeLink"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>

           

              {isAuthenticated &&  ( <li className="nav-links"> welcome, {user.nickname}  </li>)}
   
     
    
           {isAuthenticated?  (<li><Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button></li>) : ( <Button onClick={() => loginWithRedirect()}>Log In</Button>
           )}
            
           
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;