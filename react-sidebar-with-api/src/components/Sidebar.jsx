import React, { Children, useState } from 'react'
import {FaBars, FaBell, FaCommentAlt, FaRegChartBar, FaShoppingBag, FaTh, FaThList, FaUserAlt,} from "react-icons/fa"
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const menuItems =[
        {
            path:'/',
            name:'Dashboard',
            icon:<FaTh />
        },
        {
            path:'/about',
            name:'About',
            icon:<FaUserAlt />
        },
        {
            path:'/analytics',
            name:'Analytics',
            icon:<FaRegChartBar />
        },
        {
            path:'/comments',
            name:'Comments',
            icon:<FaCommentAlt />
        },
        {
            path:'/notifications',
            name:'Notifications',
            icon:<FaBell />
        },
        {
            path:'/product',
            name:'Product',
            icon:<FaShoppingBag />
        },
        {
            path:'/productlist',
            name:'Product List',
            icon:<FaThList />
        },
    ]
  return (
    <>
    <div className="container1">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItems.map((item, index)=>(
                    <NavLink to={item.path} key={index} className='link' activeclassname='active'>
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
    </>
  )
}

export default Sidebar