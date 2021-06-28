import React from "react";
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => (
    <nav>
      <div className="nav-wrapper teal darken-3 px1">
        <a href="/" className="brand-logo">React Todolist</a>
        <ul className="right hide-on-med-and-down">
          <li><NavLink to="/">Список дел</NavLink></li>
          <li><NavLink to="/users">Пользователи</NavLink></li>
          <li><NavLink to="/about">Информация</NavLink></li>
        </ul>
      </div>
    </nav>
)