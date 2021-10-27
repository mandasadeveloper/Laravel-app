import { Button, FormLayout,TextField,Form,Heading, Card } from "@shopify/polaris";
import axios from "axios";
import {useEffect, useState} from "react";
const LeftSidebar = () =>{
    const check = 1;
    var abc;
    const store_url = shopDomain;
    const [state, setState] = useState({
      profile:"",
      address:"",
      gift:"",
      coupons:"",
    }); 
    
    const [fetchField, setFetchField]=useState([]);   // data access in webpage
    let UrlHttp ="http://127.0.0.1:8000/api";
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
    const handleChange=(name,value)=>{   
      setState((preValue)=>{return{...preValue,[name]:value,}})}
    
    const Post = (path,id,data)=>{
        axios.post(`${UrlHttp}/${path}-update/${id}`, data).then(res =>{
          if(res.data.status === 200){           
           setState("");
           getData();
          }
      });
    }
    
    // left sidebar navigation update
    const profile_Update = (e,id) =>{  //profile update
    e.preventDefault();
    const data = { profile:state.profile}
    Post("profile",id,data);
    }
    
    const address_Update = (e,id) =>{  //address update
    e.preventDefault();
    const data = { address:state.address}
    Post("address",id,data);
    }
    
    const gift_Update = (e,id) =>{  //gift update
    e.preventDefault();
    const data = {gift:state.gift}
    Post("gift",id,data);
    }
    
    const coupons_Update = (e,id) =>{ //coupons update
    e.preventDefault();
    const data = {coupons:state.coupons}
    Post("coupons",id,data);
    }
            const Insert = (e) =>{
              e.preventDefault();
              const data = {   
                profile:state.profile,
                address:state.address, 
                gift:state.gift,
                coupons:state.coupons,
                store_url:store_url                 
              }        
              axios.post(`${UrlHttp}/insert-sidebar`, data).then(res =>{
                     if(res.data.status === 200){
                      alert(res.data.message); 
                      setState('');
                      getData();                   
                     }
                 });
              }
    
    var update=fetchField.map((item,i)=>{     
         if(item.store_url === store_url && item.id){  
          abc = check+1  
          return (
            <div key={item.id}>                   
           <Form>                                    
                    <TextField                                                                 
                        label={`Defaults to: the sidebar name is ${item.admin_profile}.`}
                        name="profile"
                        type="text"   
                        placeholder={`Defaults to: the sidebar name is ${item.admin_profile}.`}               
                        value={state.profile}
                        onChange = {(value)=>handleChange('profile',value)}
                        connectedRight={<Button submit onClick={(e)=> profile_Update(e, item.id)}>Update</Button>}                       
                       />
                        </Form>
                        <Form>
                         <TextField                                      
                         label={`Defaults to: the sidebar name is ${item.admin_address}.`}
                         name="address"
                         type="text"
                         placeholder={`Defaults to: the sidebar name is ${item.admin_address}.`}               
                        value={state.address}
                        onChange = {(value)=>handleChange('address',value)}
                         connectedRight={<Button submit onClick={(e)=> address_Update(e, item.id)}>Update</Button>   }                                                  
                         />  
                          </Form>
                          <Form>                                                               
                    <TextField                                                                 
                         label={`Defaults to: the sidebar name is ${item.admin_gift}.`}
                         name="gift"
                         type="text"
                         placeholder={`Defaults to: the sidebar name is ${item.admin_gift}.`}               
                         value={state.gift}
                        onChange = {(value)=>handleChange('gift',value)}
                         connectedRight={<Button submit onClick={(e)=> gift_Update(e, item.id)}>Update</Button>   }                       
                       />
                        </Form>
                        <Form>
                         <TextField                                      
                         label={`Defaults to: the sidebar name is ${item.admin_coupons}.`}
                         name="coupons"
                         type="text"
                         placeholder={`Defaults to: the sidebar name is ${item.admin_coupons}.`}               
                         value={state.coupons}
                         onChange = {(value)=>handleChange('coupons',value)}
                         connectedRight={<Button submit onClick={(e)=> coupons_Update(e, item.id)}>Update</Button>   }                       
                         />                                                                                                                                                                              
            </Form>      
            </div>
           )
         }
    });
    var insert =(
      <Form>
      <FormLayout>
                  <input              
                  value={store_url}                                    
                  name="store_url"
                  type="hidden"                    
                  />             
               <TextField                                                                 
                  label="The sidebar name is Profile Information"
                  placeholder="Defaults to: the sidebar name is Profile Information."
                  name="profile"
                  type="text"                        
                  value={state.profile}
                  onChange = {(value)=>handleChange('profile',value)}
                  />
                    <TextField                                      
                     label="The sidebar name is Management Address"
                     placeholder="Defaults to: the sidebar name is Management Address."
                    type="text"
                    name="address"                   
                    value={state.address}
                    onChange = {(value)=>handleChange('address',value)}                           
                    />                                              
               <TextField                                                                 
                     label="The sidebar name is Gift Cards"
                     placeholder="Defaults to: the sidebar name is Gift Cards."
                    type="text"
                    name="gift"                     
                    value={state.gift}
                    onChange = {(value)=>handleChange('gift',value)}
                  />
                    <TextField                                      
                     label="The sidebar name is My Coupons"
                     placeholder="Defaults to: the sidebar name is My Coupons."
                    type="text"
                    name = "coupons"                     
                    value={state.coupons}
                    onChange = {(value)=>handleChange('coupons',value)} 
                    connectedRight={<Button submit onClick={(e)=>Insert(e)}>Update</Button> }                       
                    />                                                                                                                                                                  
            </FormLayout>     
      </Form>              
    )
    
    return(
       <Card title = "Left Sidebar">  
       <Card.Section>           
        { abc == 2?
          update:          
          insert
        }  
        </Card.Section>      
       </Card>
    )
}
export default LeftSidebar