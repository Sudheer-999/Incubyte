import { Component } from "react";
import "./index.css";
import { RxHamburgerMenu } from "react-icons/rx";

class Navbar extends Component {
  state = { isClicked: false };

  onToggle = () => {
    this.setState((prevState) => ({ isClicked: !prevState.isClicked }));
  };

  render() {
    const { isClicked } = this.state;

    const activeClass = isClicked ? "active" : "inactive";

    return (
      <div>
        <div className="nav-container">
          <h4 className="nav-head">Incubyte</h4>
          <div className="nav-options">
            <a href="#about" className="link-text">
              <p className="nav-option">About Us</p>
            </a>
            <a href="#expertise" className="link-text">
              <p className="nav-option">Our Expertise</p>
            </a>
            <a href="#stories" className="link-text">
              <p className="nav-option">Success Stories</p>
            </a>
            <a href="#contact" className="link-text">
              <p className="nav-option">Contact Us</p>
            </a>
          </div>
          <div className="menu-icon" onClick={this.onToggle}>
            <RxHamburgerMenu />
          </div>
        </div>

        <div className={activeClass} id="can">
          <a href="#about" className="link-text">
            <p className="nav-option">About Us</p>
          </a>
          <a href="#expertise" className="link-text">
            <p className="nav-option">Our Expertise</p>
          </a>
          <a href="#stories" className="link-text">
            <p className="nav-option">Success Stories</p>
          </a>
          <a href="#contact" className="link-text">
            <p className="nav-option">Contact Us</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
