import React from "react"
import { Link } from "react-router-dom"
import s from "./LoginPage.module.css"
import * as routes from "../../routes"
const Login = () => {
  return (
    <div className={s.container}>
      <div className={s.login_page}>
        <h1>Login Page</h1>
        <input type="text" placeholder="Введите логин" />
        <input type="text" placeholder="Введите пароль" />
        <Link to={routes.HOME}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  )
}
export default React.memo(Login)
