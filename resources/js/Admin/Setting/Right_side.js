import { Button, FormLayout,TextField,Form,Heading, Card } from "@shopify/polaris";
import axios from "axios";
import {useEffect, useState} from "react";
const RightSide = () =>{
    const check = 1;
    var abc;
    const store_url = shopDomain;
    const [state, setState] = useState({
      fname:"",
      lname:"", 
      email:"",
    }); 
    
    const [fetchField, setFetchField]=useState([]);   // data access in webpage
    useEffect(()=>{
    getData();
    },[]);
    const getData =()=>{
     axios.get(`${UrlHttp}/label-setting`).then(res=>{
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
    
    // left label navigation update
    const fname_Update = (e,id) =>{  //fname update
    e.preventDefault();
    const data = { fname:state.fname}
    Post("fname",id,data);
    }
    
    const lname_Update = (e,id) =>{  //lname update
    e.preventDefault();
    const data = { lname:state.lname}
    Post("lname",id,data);
    }
     
    const email_Update = (e,id) =>{ //email update
    e.preventDefault();
    const data = {email:state.email}
    Post("email",id,data);
    }
            const Insert = (e) =>{
              e.preventDefault();
              const data = {   
                fname:state.fname,
                lname:state.lname,                
                email:state.email,
                store_url:store_url                 
              }        
              axios.post(`${UrlHttp}/insert-label`, data).then(res =>{
                     if(res.data.status === 200){                    
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
                        label={`${item.fname}.`}
                        name="fname"
                        type="text"   
                        placeholder={`Defaults to:${item.fname}.`}               
                        value={state.fname}
                        onChange = {(value)=>handleChange('fname',value)}
                        connectedRight={<Button submit onClick={(e)=> fname_Update(e, item.id)}>Update</Button>}                       
                       />
                        </Form>
                        <Form>
                         <TextField                                      
                         label={`${item.lname}.`}
                         name="lname"
                         type="text"
                         placeholder={`Defaults to:${item.lname}.`}               
                        value={state.lname}
                        onChange = {(value)=>handleChange('lname',value)}
                         connectedRight={<Button submit onClick={(e)=> lname_Update(e, item.id)}>Update</Button>   }                                                  
                         />  
                          </Form>
                        <Form>
                         <TextField                                      
                         label={`${item.email}.`}
                         name="email"
                         type="text"
                         placeholder={`Defaults to:${item.email}.`}               
                         value={state.email}
                         onChange = {(value)=>handleChange('email',value)}
                         connectedRight={<Button submit onClick={(e)=> email_Update(e, item.id)}>Update</Button>   }                       
                         />                                                                                                                                                                              
            </Form>                 
            </div>
           )
         }
    });
    var insert =(
        <Form>
        <FormLayout>
      <TextField                                                                 
               label="First Name"
               placeholder="Defaults to: First Name."
               type="text"
               name="fname"
               value={state.fname}
               onChange = {(value)=>handleChange('fname',value)}                                     
            />
            <TextField                                                                 
               label="Last Name"
               placeholder="Defaults to: Last Name."
               type="text"   
               name="lname"
               value={state.lname}
               onChange = {(value)=>handleChange('lname',value)}                                  
            />
            <TextField                                                                 
               label="Email"
               placeholder="Defaults to: Email."
               type="email"  
               name="email"
               value={state.email}
               onChange = {(value)=>handleChange('email',value)}
              connectedRight={<Button submit onClick={(e)=>Insert(e)}>Update</Button> }                                                          
            />
            </FormLayout>
        </Form>         
    )
    
    return(
       <Card title="Profile">  
       <Card.Section>      
        { abc == 2?
          update:          
          insert
        }  
        </Card.Section>
       </Card>
    )
}
export default RightSide

