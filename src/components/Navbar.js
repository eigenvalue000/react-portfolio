import React from 'react';


function Navbar({ currentPage, handlePageChange }) {
  return (
        <div className="nav-menu">
          <a href="/">Page 0</a>
          <a href="/page1">Page 1</a>
        </div>
  );
}

export default Navbar;
