import axios from "axios";
import { useState,useEffect } from "react";
const Profile_page = ()=>{
  var UrlHttp ="http://127.0.0.1:8000/api";
  const check = 1;
  var abc;
  const [edit, setEdit] = useState(false);
  const [fetchField, setFetchField]=useState([]);   // data access in webpage
  const [fetchlabel, setFetchLabel]=useState([]);   // label access in webpage
  const url=window.location.hostname;
  const [fields, setData] = useState([]);
const [state,setState]=useState({  
  fname:"",
  lname:"",    
  email:"",
  });
  const onchangeInput = (e, index) =>{       
    const {name, value}=e.target;  
    setData((preValue)=>{   
      return{
        ...preValue,
        [name]:value,
      }
    })
  }

const handleChange=(e)=>{   
const {name, value} = e.target;
setState((preValue)=>{  console.log(preValue);return{...preValue,[name]:value,}})}
const handleSubmit= async (e)=>{
  e.preventDefault();
  const data = {
      shop_url:url,
      fname:state.fname,
      lname:state.lname,        
      email:state.email,
      fields:fields,    
  }
  console.log(data);
  // console.log(JSON.stringify(data));    
axios.post('http://127.0.0.1:8000/api/profile', data).then(res =>{
     if(res.data.status === 200){
         alert(res.data.message);
         setState("");
         setData("");

     }
 });
}   
 useEffect(()=>{
  axios.get(`${UrlHttp}/get-customer`).then(res=>{
  });   
  
  axios.get(`${UrlHttp}/label-setting`).then(res=>{
    if(res.data.status === 200){
      setFetchLabel(res.data.data);          
    }
  });
  axios.get(`${UrlHttp}/demo`).then(res=>{
    if(res.data.status === 200){
      setFetchField(res.data.filed);          
    }
  }); 
 },[]);

 var display=fetchField.map((item)=>{  
    if(item.store_url== url){     
          return (                         
                <div className="col-75">
                <label for={item.id}>{item.label}</label>
                <input type={item.field} 
                 id={item.id}
                 name={`${item.label}${item.id}`}                                                         
                 onChange={(val)=>{onchangeInput(val)}}                    
                 value={fields[`${item.label}${item.id}`]}            
                 placeholder={`Enter ${item.label}`}/>                       
                </div>     
          )
    }
 });
 var labelDisplay = fetchlabel.map((item)=>{  
  if(item.store_url== url){ 
    abc = check+1         
        return (  
          <>
        <div className="col-75">
      <label for="fname">{item.fname}</label>
        <input type="text" id="fname" name="fname" value={state.fname} onChange={handleChange} placeholder={item.fname}/>
      </div> 
      <div className="col-75">
      <label for="lname">{item.lname}</label>
        <input type="text" id="lname" name="lname" value={state.lname} onChange={handleChange} placeholder={item.lname}/>
      </div>          
      <div className="col-75">
      <label for="email">{item.email}</label>
        <input disabled type="email" id="email" name="email" value={state.email} onChange={handleChange} placeholder={item.email}/>
      </div> 
          </>                                 
        )
  }
});
 return(
<div>
<h3 className="user-info-edit">Personal Information <button className="button-edit" onClick={()=>setEdit(!edit)}>{edit?"Cancel":"Edit"}</button></h3>
    <form onSubmit = {handleSubmit}>
       <div className="row">     
       {
              abc == 2?      
              labelDisplay       
              :          
              <>
        <div className="col-75">
      <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" value={state.fname} onChange={handleChange} placeholder="First Name"/>
      </div> 
      <div className="col-75">
      <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" value={state.lname} onChange={handleChange} placeholder="Last Name"/>
      </div>          
      <div className="col-75">
      <label for="email">Email</label>
        <input disabled type="email" id="email" name="email" value={state.email} onChange={handleChange} placeholder="Email"/>
      </div> 
          </>              
              }    
      {display}       
    </div>      
    { edit?
      <div>   
        <input type="submit" value="Save"/>
      </div>
      :null}
  </form>  
</div>
 )
}
export default Profile_page