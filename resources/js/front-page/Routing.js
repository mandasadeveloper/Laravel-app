import { Route, Switch } from "react-router";
import Profile_page from "./Profile";
import ManageAddress from "./Manage_address";
import GiftCards from "./Gift_cards";
import MyCoupons from "./My_coupons";

const Routing=()=>{
return(
    <Switch>
    <Route exact path="/profile"><Profile_page/></Route>  
    <Route path="/manage-address"><ManageAddress/></Route>  
    <Route path="/gift-cards"><GiftCards/></Route>
    <Route path="/coupons"><MyCoupons/></Route>
   </Switch>     
)
}
export default Routing