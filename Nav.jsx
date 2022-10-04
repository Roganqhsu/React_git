import React from 'react';
import {NavLink,Link,useNavigate} from 'react-router-dom';

const Nav=()=>{
    const Navigation=useNavigate();
    const NavLinkStyle=({isActive}) =>{
        return {
        
            fontWeight:isActive?'800':'500',
            color:isActive?'green':'blue'    
        }
    }
    const LinkStyle={
        fontWeight:'800'   
    }
    return(
    <div style={{backgroundColor:'#d6d6d6',padding:"32px 16px"}}>
    {/*純連接 */}
    <Link to='/' style={LinkStyle}>Home</Link>
    <Link to='about' style={LinkStyle}> About</Link>
    
    {/* 導覽列可用active */}
    <NavLink style={NavLinkStyle} exact to='/' >Home</NavLink>
    <NavLink style={NavLinkStyle} exact to='/about' >About</NavLink>
    
    {/* Navigation */}
    <button onClick={()=>Navigation('Shopping')}>Shopping</button>
    
    {/*  */}
    <NavLink to='Products'>Products</NavLink>

    </div>
    )
}
export default Nav;