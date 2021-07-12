import axios from "axios";
import React, { useEffect, useState } from "react";
import LineIcon from "react-lineicons";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [information, setInformation] = useState("");
  const [navigationToggler, setNavigationToggler] = useState(false);

  const handleNavigationToggler = () => {
    setNavigationToggler(!navigationToggler);
  };

  useEffect(() => {
    axios.get("/api/information").then(response => {
      setInformation(response.data);
    });
  }, []);

  return (
    <nav className={navigationToggler ? "mi-header is-visible" : "mi-header"}>
      <button
        type="button"
        onClick={handleNavigationToggler}
        className="mi-header-toggler"
      >
        {!navigationToggler ? (
          <LineIcon name="menu" />
        ) : (
          <LineIcon name="close" />
        )}
      </button>
      <div className="mi-header-inner">
        <div className="mi-header-image">
          <Link to="/">
            <img src={information.brandImage} alt="brandimage" />
          </Link>
        </div>

        <ul className="mi-header-menu">
          <li>
            <NavLink exact to="/">
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <span>About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume">
              <span>Team</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolios">
              <span>Portfolios</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/blogs">
              <span>Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
        <p className="mi-header-copyright">
          &copy; {new Date().getFullYear()}{" "}
          <b>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://blafoi.netlify.app/"
            >
              BitLads Software
            </a>
          </b>
        </p>
      </div>
    </nav>
  );
}

export default Header;
