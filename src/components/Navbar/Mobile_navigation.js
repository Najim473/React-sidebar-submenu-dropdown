import './Mobile_navigation.css'
import { menuList } from './Navbar_data'
import './Mobile_navigation.css'
import SubMenu from './SubMenu'
import './Mobile_navigation.css'
function Mobile_navigation() {
  return (
    <div className="sidebar-main-container">
      {menuList.map((item, index) => {
        return (
          <>
            <SubMenu item={item} key={index} />
          </>
        )
      })}
    </div>
  )
}

export default Mobile_navigation