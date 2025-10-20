import React from "react";
import "./Header.css";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";

const Header = ({ onRemoveRandomPreview }) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault(); // 이동 잠시 막기
    onRemoveRandomPreview();

    // 액션 디스패치 후 직접 네비게이트
    navigate("/");
  };
  return (
    <div>
      <header className="header">
        <div className="title">편레시피</div>
        <nav className="nav">
          <NavLink to="/" className="nav-link" onClick={handleClick}>
            랜덤 뽑기
          </NavLink>
          <NavLink to="/notice" className="nav-link">
            게시판
          </NavLink>
          <NavLink to="/mypage" className="nav-link">
            마이페이지
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
