import { Route, Switch } from "react-router";
import Manage_Address from "../ManageAddress/Manage_Address";
import Error from "../Error"
import Gift from "../Gift-Card/Gift";
import Profile from "../Profile/Profile";
import Dashboard from "../Dashboard/Dashboard";
import Admin_setting from "../Setting/Admin_setting";
import Setting from "../Setting/Setting";
const FrameExample=()=>{
return(
    <Switch>     
    <Route exact path="/"><Dashboard/></Route>
    <Route exact path="/gift"><Gift/></Route>
    <Route exact path="/manage-address"><Manage_Address/></Route>
    <Route exact path="/translations"><Admin_setting/></Route>
    <Route exact path="/profile"><Profile/></Route> 
    <Route exact path="/setting"><Setting/></Route>   
    <Route component={Error}/>    
   </Switch>     
)
}
export default FrameExample