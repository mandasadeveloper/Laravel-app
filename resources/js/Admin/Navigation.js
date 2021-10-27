import { Navigation} from "@shopify/polaris"
import {
    ProductsMajor,
    HomeMajor,
    OrdersMajor,
    SettingsMinor
  } from '@shopify/polaris-icons';
  import { Link } from "react-router-dom";
const Nav = () =>{
    return(
            <Navigation location="/">
            <Navigation.Section
              items={[
                {                          
                  label: (<Link to="/" className="Link">Dashboard</Link>),
                  icon: HomeMajor,
                },
                {                          
                  label: (<Link to="/profile" className="Link">Profile Information</Link>),
                  icon: HomeMajor,
                },
                {                                             
                  disabled: false,                     
                  label:(<Link to="/gift" className="Link">Gift Cart</Link>),
                  icon: ProductsMajor,            
                },
                {                      
                  icon: OrdersMajor,        
                  label:(<Link to="/manage-address" className="Link">Manage-address</Link>),    
                },   
                {                      
                  icon: SettingsMinor,        
                  label:(<Link to="/setting" className="Link">Setting</Link>),    
                },           
              ]}
            />
          </Navigation>
    )
}
export default Nav