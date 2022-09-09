import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Mobile_navigation.css'
const SubMenu = ({ item }) => {
    const [submenu, setSubmenu] = useState(false);
    const showSubMenu = () => setSubmenu(!submenu);
    return (
        <>
            <Link to={item.path} className='mobile-Sidebar-container-link' onClick={item.subMenu && showSubMenu}>
                <span className='mobile-sidebar-text'>{item.title}</span>
                <div>
                    {item.subMenu && submenu
                        ? item.iconOpened
                        : item.subMenu
                            ? item.iconClosed
                            : null}
                </div>
            </Link>
            {submenu &&
                item.subMenu.map((item, index) => {
                    return <Link to={item.path} className='mobile-sub-menu-link' key={index}>
                        <span className='mobile-sidebar-text'>{item.title}</span>
                    </Link>
                })}
        </>
    )
}

export default SubMenu