import React from "react";

export const Navbar: React.FC = () => (
    <nav>
      <div className="nav-wrapper teal darken-3 px1">
        <a href="/" className="brand-logo">React Todolist</a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">Список дел</a></li>
          <li><a href="/">Информация</a></li>
        </ul>
      </div>
    </nav>
)