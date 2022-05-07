import React from "react";
import styled from "styled-components";
import { links } from "./../../utils/constants";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const index = () => {
  return (
    <Wrapper className="gradient-blue">
      <div className="wrapper nav-center">
        <Link className="logo" to="/">
          <img
            src="https://racharlasrikanth.netlify.app/static/media/logo.aa78497e534416d460cb8eac1661bee4.svg"
            alt="logo"
          />
        </Link>
        <div className="nav-links">
          <ul>
            {links.map((eachLink) => {
              return (
                <li key={eachLink.id}>
                  <NavLink
                    className={(navData) =>
                      navData.isActive
                        ? "nav_link active small-title-small"
                        : "nav_link small-title-small"
                    }
                    to={eachLink.url}
                  >
                    {eachLink.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <button className="mobile-ham-burger">
          <FaBars />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100px;

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .logo {
    max-width: 80px;
  }
  .nav-links ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;

    li .nav_link {
      position: relative;
      color: var(--clr-white);
      transition: var(--transition);
      letter-spacing: 1px;
      text-transform: capitalize;

      &::before {
        content: "";
        width: 0%;
        position: absolute;
        height: 1.5px;
        left: 0;
        bottom: -4px;
        transition: var(--transition);
        background: var(--clr-white);
      }

      &.active::before,
      &:hover::before {
        width: 100%;
      }
    }
  }

  .nav-links {
    display: none;
  }

  .mobile-ham-burger {
    width: 30px;
    height: 30px;
    border: none;
    background: transparent;
    color: var(--clr-white);
    cursor: pointer;
    transition: var(--transition);

    &:hover {
      color: var(--secondary-clr-base);
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  @media (min-width: 769px) {
    .logo {
      max-width: 120px;
    }
    .nav-links {
      display: flex;
    }
    .mobile-ham-burger {
      display: none;
    }
  }
`;

export default index;
