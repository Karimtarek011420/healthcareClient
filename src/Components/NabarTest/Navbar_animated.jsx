import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import './Navbar_animated.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LogoutModal from '../LogoutModal';

const Navbar_animated = (props) => {
  const user = useSelector(selectUser);
  const isLoggedIn = user?.loggedin;
  const name = user?.fname;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isEventspage, setIsEventspage] = useState(props.page); // Initialize directly with props.page
  const [navbar, setNavbar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const changebg = () => {
      if (window.Y >= 600) {
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  };

  // Setup scroll event listener
  useEffect(() => {
      window.addEventListener('scroll', changebg);
      return () => {
          window.removeEventListener('scroll', changebg); // Cleanup event listener on unmount
      };
  }, []);

  const toggleNavbar = () => {
      setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      <nav className={!isEventspage ? "navbar " : "navbar navcolor"}>
      <div className="container-fluid">
        <div className="logo_home_nav">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="img-navbar ms-2 w-100 h-100"
            />
          </Link>
        </div>

        <ul className=" madie list-unstyled d-flex mx-2 justify-content-center align-items-center">
          <li>
            <button
              className="navbar-toggler mx-2 text-white border-0"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end menulist"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title fw-semibold" id="offcanvasDarkNavbarLabel">
                  Menu
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li>
                    <Link
                      to="/"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Home&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; About&nbsp;
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/#board"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Board Members&nbsp;
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/agenda"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Event's Calender&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/membership"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Become a Member&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vclub"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Volunteer Club&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Contact us&nbsp;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {isLoggedIn ? (
            <>
              <li className="mx-2">
              <FontAwesomeIcon 
                icon={faUser} 
                style={{ cursor: "pointer" }} 
                className="text-white"
              />                
              <span className="text-white px-1" style={{ cursor: "pointer" }}>
                  {name}
              </span>
              </li>
              <li>
                <li class="dropdown">
                  <Link to="#" class="dropdown-toggle text-white"></Link>
                  <ul class="dropdown-menu">
                    <li className='coll_list-item'>
                      <Link style={{ fontSize: "16px", color:'#012572'  }} to="/myaccount">
                      &nbsp;&nbsp;My account&nbsp;  
                      </Link>
                    </li>
                    <li className='coll_list-item'>
                      <Link style={{ fontSize: "16px", color:'#012572' }} to="/cal">
                      &nbsp;&nbsp;My Calendar&nbsp;  
                     
                      </Link>
                    </li>
                    <li className='coll_list-item'>
                      <Link style={{ fontSize: "16px", color:'#012572'  }} onClick={handleOpen}>
                      &nbsp;&nbsp;Logout&nbsp;  
                      </Link>
                    </li>
                  </ul>
                </li>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
    <LogoutModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
    </>
  );
}

export default Navbar_animated;
