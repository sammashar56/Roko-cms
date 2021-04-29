import React from 'react';
import Home from "./components/home";
import Addclient from "./components/addclient";
import Login1 from "./components/login";
import Updateclient from './components/editSeller';
import ProtectedRoutes from './components/protctedRoutes'
import Sellertable from "./components/tables"
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from 'react-notifications';
import { Switch, Route } from "react-router";
import Sellercard from './components/sellerCard'
import InterestedSeller from './components/interested'
import {BrowserRouter as Router} from 'react-router-dom';
import History from './components/History'


class  App extends React.Component {
 render() {
    return (
      <div>
        <Router History= {History}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <ProtectedRoutes exact path="/add" component={Addclient} />
          <ProtectedRoutes exact path="/sellers/:seller_id" component={Updateclient} />
          <protectedRoutes exact path="/seller/interested" component={InterestedSeller}/>
          <Route exact path="/login" component={Login1} />
          <ProtectedRoutes exact path="/thrifter/:seller_id" component={Sellercard} />
          {/* <ProtectedRoutes exact path="/sellers/:seller_id" component={Updateclient} /> */}
          <ProtectedRoutes exact path='/sellers' component={Sellertable} />
        </Switch>
        </Router>
        <NotificationContainer/>
      </div>
    )
  }
}

export default App
