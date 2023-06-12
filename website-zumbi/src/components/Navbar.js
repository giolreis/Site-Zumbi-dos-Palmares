import {Component} from 'react';
import { MenuData } from './MenuData';
import "./Navbar.css"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from 'react-router-dom';

class Navbar extends Component{
    state = {clicked: false};
    handleClick =()=>{
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
            <nav className='NavbarItems'>
                <h1 className='logo'>
                    PZ 
                </h1>
                <div className='menu-icons' onClick={this.handleClick}>
                    <i >{this.state.clicked ? <AiOutlineClose className='icones'/> : <AiOutlineMenu className='icones'/>}</i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"} >
                    {MenuData.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link to={item.url} className={item.cName}>{item.icon} {item.title}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar
