import React ,{useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu,setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen,setIsProfileDropDownOpen]=useState(false);

  const handleMenuClick=(index)=>{
    setSelectedMenu(index);
  };

  const handleProfileClick=(index)=>{
    setIsProfileDropDownOpen(!isProfileDropdownOpen);
  };
 const menuClass="menu";
 const activeMenuClass="menu selected";


  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="non" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to="/" onclick={()=>handleMenuClick(0)}> 
          
            <p className={selectedMenu===0 ? activeMenuClass:menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
          <Link style={{textDecoration:"none"}} to="/orders" onclick={()=>handleMenuClick(1)}> 
          
          <p className={selectedMenu===1 ? activeMenuClass:menuClass}>Orders</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/holdings" onclick={()=>handleMenuClick(2)}> 
          
          <p className={selectedMenu===2 ? activeMenuClass:menuClass}>Holdings</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/positions" onclick={()=>handleMenuClick(3)}> 
          
          <p className={selectedMenu===3 ? activeMenuClass:menuClass}>Positions</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/funds" onclick={()=>handleMenuClick(4)}> 
          
          <p className={selectedMenu===4 ? activeMenuClass:menuClass}>funds</p>
          </Link>
          </li>
          <li>
          <Link style={{textDecoration:"none"}} to="/apps" onclick={()=>handleMenuClick(6)}> 
          
          <p className={selectedMenu=== 6 ? activeMenuClass:menuClass}>Apps</p>
          </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onclick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen}
      </div>
    </div>
  );
};

export default Menu;
