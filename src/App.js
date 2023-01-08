import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Login from "./router/Login";
import Main from "./router/Main"
import FooterMake from "./footer/FooterMake";

function App() {
    return (
    <BrowserRouter>
      <div className="App">
          <header className="App-header">
                  <Link className="Left-header" to="/">시험지</Link>
                  <Link className="Right-header" to="/login">로그인</Link>
          </header>

          <body className="App-body">
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/login/*" element={<Login/>}/>
              </Routes>
          </body>

          <footer className="App-footer">
              {FooterMake.footerItemMake("제작", "https://github.com/PersesTitan", "PersesTitan")}
              {FooterMake.footerItemMake("프로젝트", "https://github.com/Shabi-Project", "Shabi", "https://avatars.githubusercontent.com/Shabi-project")}
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;