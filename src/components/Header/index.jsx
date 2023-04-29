import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/image/Logo-cinetag-branco 1.png";
import style from "./style.module.scss";
import { listNav } from "./listNav";
const Header = () => {
  return (
    <header className={style.header}>
      <Link to="/">
        <img className={style.header__logo} src={logo} alt="imagem do logotipo da cinetag" />
      </Link>

      <nav className={style.menu}>
        <ul className={style.menuList}>
          {listNav.map((list) => {
            return (
              <li className={style.menuList__item} key={list.id}>
                <NavLink
                  className={({ isActive }) =>
                    `${style.menuList__link} 
                    ${
                      isActive ? style.menuList__active : ""
                    }`
                  }
                  to={list.path}
                >
                  {list.link}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
