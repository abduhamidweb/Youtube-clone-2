import React from "react";
import ListSidebar from "../ComponentaListSidebar/ListSidebar";
import ListFormat from "../ListFormat/ListFormat";
import logo from "../../assets/images/Papaya.png"
import menu from "../../assets/images/menu.png"
import "./index.scss";
import { useState } from "react";
const Sidebar = () => {
  const [width, setWidth] = useState(248);
  const [check, setCheck] = useState(true)
  
  const handleClick = () => {
    if (width === 70) {
      setWidth(248);
      setCheck(true)
    } else {
      setCheck(false)
      setWidth(70)
      
    }
  };
  const divStyle = {
    width: `${width}px`
  };
  return (
    <>
      <div className="section-wrapper" style={divStyle}>
        <button className="bg-transparent border-0 p-3" onClick={handleClick}><img src={menu} alt="" /></button>
        {check && <a href="#"><img src={logo} alt="" /></a>}
          <ListSidebar
            sectionClassName="Section-Pages"
          SectionComponent={<ListFormat check={check} />}
          />

        </div>
    </>
  );
};

export default Sidebar;
