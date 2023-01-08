import React, {Component} from "react";
import './App.css';
import {BrowserRouter, Link, Routes, Route} from "react-router-dom";
import Login from "./router/Login";
import Main from "./router/Main"

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
              <tr>
                  <th>제작</th>
                  <td><a href="https://github.com/PersesTitan">PersesTitan</a></td>
              </tr>
              <tr>
                  <th>프로젝트</th>
                  <td>
                      <a href="https://github.com/Shabi-Project">
                      Shabi
                      <img src="https://avatars.githubusercontent.com/Shabi-project" alt="/"/>
                      </a>
                  </td>
              </tr>
          </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
