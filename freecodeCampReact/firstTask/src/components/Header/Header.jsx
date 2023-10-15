import React from "react";
import reactLogo from '../../assets/react.svg'
import './Header.css'
const Header = () => {
  return (
    <>
      <div className="alignment">
        <div className="inside1">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <h1>ReactFacts</h1>
        </div>
        <div className="inside2">
          <h2>React Course - Project 1</h2>
        </div>
      </div>
    </>
  );
};

export default Header;
