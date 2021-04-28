import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <header className="nav-bar">
        <span className="nav__title">🌜 Habit Tracker 🌛 </span>
        <span className="nav__count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
