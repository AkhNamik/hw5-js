import React from "react"
import { Link } from "react-router-dom"
import s from "./Navigation.module.css"
import * as routes from "../../routes"

const Navigation = () => {
  return (
    <nav>
      <ul className={s.nav_elements}>
        <li>
          <Link to={`${routes.HOME}${routes.MAIN}`}>Main</Link>
        </li>
        <li>
          <Link to={`${routes.HOME}${routes.USER_PROFILE}`}>User Profile</Link>
        </li>
      </ul>
    </nav>
    
  )
}

export default React.memo(Navigation)
