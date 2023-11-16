import React, { useState } from "react";
import "./Navbar.css";
import logo from "../logo.svg";

function Navbar({ searchTerm }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    searchTerm(text);
  };
  return (
    <>
      <nav>
        <div className="logo__text">
          <a href="/" className="logo__text">
            <img src={logo} alt="logo" />
            <h2>Video app</h2>
          </a>
        </div>
        <form onSubmit={submit}>
          <div className="input__field">
            <input
              type="text"
              placeholder="Search"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </nav>
    </>
  );
}

export default Navbar;
