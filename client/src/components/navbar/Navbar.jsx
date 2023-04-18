import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./Navbar.scss"

const Navbar = () => {

  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const {pathname} = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(
    () => {

      window.addEventListener("scroll", isActive);
      return () => {
        window.removeEventListener("scroll", isActive);
      };
    }, []
  );

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className='container'>
        <div className='logo'>
          <Link to='/' className='link'>
          <span className='text'>Esc MatriX</span>
          </Link>
          <span className='dot'>.</span>
        </div>
        <div className='links'>
          <span>Esc MatriX Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className='user' onClick={()=>setOpen(!open)}>
              <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' alt='empty' />
              <span>{currentUser?.username}</span>
              {open && <div className='options'>
                {
                  currentUser?.isSeller && (
                    <>
                      <Link className='link' to="/gigs">Gigs</Link>
                      <Link className='link' to="/add">Add New Gig</Link>
                    </>
                  )
                }
                <Link className='link' to="orders">Orders</Link>
                <Link className='link' to="messages">Messages</Link>
                <Link className='link' to="/">Logout</Link>
              </div>}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className='menu'>
            <Link className='link menuLink' to="/">
              Graphics and Design
            </Link>
            <Link className='link' to="/">
              Video and Animation
            </Link>
            <Link className='link' to="/">
              Writing and Translation
            </Link>
            <Link className='link' to="/">
              AI services
            </Link>
            <Link className='link' to="/">
              Digital Marketing
            </Link>
            <Link className='link' to="/">
              Music and Audio
            </Link>
            <Link className='link' to="/">
              Programming and Tech
            </Link>
            <Link className='link' to="/">
              Business
            </Link>
            <Link className='link' to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar