import { useState } from "react"
import "./Navbar.css"
import { NavLink,Outlet } from 'react-router-dom'
import {shopping,line} from '../../constant/constant'

const Navbar = () =>{
    const[manuopen, setmanuopen]=useState(false)
    return(
        <div>
           <div className="hadding9">
            <div className="novbar_3">
                <span><img className="shopping" src={shopping} alt="shopping" /></span>
                <span ><NavLink to="/">Vishal_Cart</NavLink></span>
            </div>
            
            <div >
            <div className="main3" onClick={() =>{
                setmanuopen(!manuopen)
            }}>
                <img className="line" src={line} alt="line" />
            </div>
           <ul className={manuopen?"open":""}>
            <li className="novbar_1">
                <span className="novbar2"><NavLink to="/"> Home </NavLink></span>
                <span className="novbar2"><NavLink to="/shop"> Shop </NavLink></span>
                <span className="novbar2"><NavLink to="/blog">Blog </NavLink> </span>
                <span className="novbar2"><NavLink to="/about"> About </NavLink></span>
                <span className="novbar2"><NavLink to="/contact"> Contact </NavLink></span>
                <span className="novbar2"><NavLink to="create"> Create Account </NavLink></span>
                <span className="novbar2"><NavLink to="/logIn"> Cart </NavLink></span>
               
            </li>
            </ul>
           
            </div>
           </div>
           <main>
            <Outlet />
          </main>
        </div>
    )
}
export default Navbar