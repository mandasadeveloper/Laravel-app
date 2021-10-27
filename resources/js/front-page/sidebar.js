import axios from "axios";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import Routing from "./Routing";
export default function Slidebar() {  
  const [fetchField, setFetchField]=useState([]);   // data access in webpage
  const check = 1;
  var abc;
  let UrlHttp ="http://127.0.0.1:8000/api";
  const url=window.location.hostname;
  useEffect(()=>{     
  getData(); 
  },[]);
 const getData =()=>{
   axios.get(`${UrlHttp}/sidebar`).then(res=>{
     if(res.data.status === 200){
       setFetchField(res.data.data);             
     }
   });   
 }
 
  var display=fetchField.map((item,i)=>{    
      if(item.store_url === url){  
        abc = check+1     
        return (
          <div key={item.id}>
            <li><Link to ="/profile">{item.admin_profile}</Link></li>        
            <li><Link to ="/manage-address">{item.admin_address}</Link></li>        
            <li><Link to ="/gift-cards">{item.admin_gift}</Link></li>        
            <li><Link to ="/coupons">{item.admin_coupons}</Link></li>                         
          </div>
         )
      }
  });
    return (
      <div className="content-container">
      <div id="left-panel" className="left-nav-wrapper">
          <ul className="navigation-panel">                   
          
              {
              abc == 2?      
              display       
              :          
              <>
              <li><Link to ="/profile">Profile Information</Link></li>        
              <li><Link to ="/manage-address">Manage Address</Link></li>        
              <li><Link to ="/gift-cards">Gift Cards</Link></li>        
              <li><Link to ="/coupons">My Coupons</Link></li> 
              </>
              }                             
          </ul>         
      </div>
      <div className="right-content-wrapper container">
        <Routing/>             
      </div>
  </div>
    );
  }