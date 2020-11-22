import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"
import LoginPage from "./components/LoginPage"
import Main from "./components/Main"
import Navigation from "./components/Navigation"
import UserProfile from "./components/UserProfile"
import * as routes from "./routes"
import store from "./store" 
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path={routes.HOME} component={Navigation} />
        <Switch>
          <Route path={routes.LOGIN_PAGE} component={LoginPage} />
          <Route path={`${routes.HOME}${routes.MAIN}`} component={Main} />
          <Route path={`${routes.HOME}${routes.USER_PROFILE}`} component={UserProfile} />
          <Redirect exact to={routes.LOGIN_PAGE} from="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}
export default App
