import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { AuthContext } from './AuthContext';
import { MenuData } from './MenuData';

function Navbar() {
  const { isLoggedIn } = useContext(AuthContext);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  console.log(MenuData);

  return (
    <nav className='NavbarItems'>
      <h1 className='logo'>
        PZ 
      </h1>
      <div className='menu-icons' onClick={handleClick}>
        <i>{clicked ? <AiOutlineClose className='icones'/> : <AiOutlineMenu className='icones'/>}</i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"} >
        {MenuData.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className={item.cName}>
              {item.icon} {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
