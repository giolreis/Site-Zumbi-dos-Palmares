import { AiOutlineHome, AiOutlineHeart, AiOutlineContacts } from 'react-icons/ai';
import { MdLogin } from 'react-icons/md';
import { BiExit } from 'react-icons/bi';

export const MenuData = [
    {
        title: "Home",
        url: "/",
        cName: "nav-links",
        icon: <AiOutlineHome className='icones'/>,    
    },
    {
        title: "Favoritos",
        url: "/favoritos",
        cName: "nav-links",
        icon: <AiOutlineHeart className='icones'/>,    
    },
    {
        title: "Contato",
        url: "/contato",
        cName: "nav-links",
        icon: <AiOutlineContacts className='icones'/>,    
    },
    {
        title: "Login",
        url: "/login",
        cName: "nav-links",
        icon: <MdLogin className='icones'/>,    
    },
    {
        title: "Sair",
        url: "/sair",
        cName: "nav-links",
        icon: <BiExit className='icones'/>,    
    },
]