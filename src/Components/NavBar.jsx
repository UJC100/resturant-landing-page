import React, { useState } from 'react'
import Logo from '../Assets/Logo.svg'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

const NavBar = () => {

    const [menu, setMenu] = useState(false);
    const menuOptions = [
        {
            text: 'Home',
            icon: <HomeIcon/>
        },
        {
            text: 'About',
            icon: <InfoIcon/>
        },
        {
            text: 'Testimonials',
            icon: <CommentRoundedIcon/>
        },
        {
            text: 'Contact',
            icon: <PhoneRoundedIcon/>
        },
        {
            text: 'Cart',
            icon: <ShoppingCartRoundedIcon/>
        },
    ]

    const mappedMenuItem = menuOptions.map(items => {
        return <a href="" >{items.text}</a>
    })

  return (
    <nav>
              <img src={Logo} alt="business logo" className='business-logo'/>
              <div className='links-in-nav'>
              {mappedMenuItem}
              <BsCart2 size={'30px'} />
              <button className='booking-button'>Booking Now</button>
              </div>
        
    </nav>
  )
}

export default NavBar