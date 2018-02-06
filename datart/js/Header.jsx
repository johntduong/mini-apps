// @flow

import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">
          website
        </Link>
      </h1>
    </header>
  );
};

export default Header;
