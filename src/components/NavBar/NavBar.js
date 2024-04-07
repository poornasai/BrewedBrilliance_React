import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useEffect, useState } from "react";
import navIcon1 from "./navbarImages/nav-icon1.svg";
import navIcon2 from "./navbarImages/nav-icon2.svg";
import navIcon3 from "./navbarImages/nav-icon3.svg";
import "./NavBarStyles.css";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");

  //when user scrolls, we need to change the color of the background
  //so track the scroll here

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        //scrollY means, scrolled Y-position , means vertically down for 50px
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //onClick on any navigation bar text, then setting Active Link

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#about"
              className={
                activeLink === "about" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#shop"
              className={
                activeLink === "shop" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("shop")}
            >
              Discover Brews
            </Nav.Link>
            <Nav.Link
              href="#ourblends"
              className={
                activeLink === "ourblends"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("ourblends")}
            >
              Our Blends
            </Nav.Link>
            <Nav.Link
              href="#brewPrep"
              className={
                activeLink === "brewPrep" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("brewPrep")}
            >
              Brewcraft Mastery
            </Nav.Link>
            <div className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="#">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
              <button
                className="letsconnect"
                onClick={() => console.log("connect")}
              >
                <span>Let 's Connect</span>
              </button>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
