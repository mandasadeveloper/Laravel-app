import { Button, FormLayout,Page,TextField,Form, ButtonGroup,Select, Icon } from "@shopify/polaris";
import {useEffect,useState} from "react";
import axios from "axios";
import {
  MobileCancelMajor
} from '@shopify/polaris-icons'; 
const Profile = () => { 
  const store_url = shopDomain;
  const [fields, setData] = useState([]); 
  const [state,setState]=useState({  
    fname:"",
    lname:"",    
    email:"",
    label:"",
    field:"",
    });
const onchangeInput = (name,value) =>{           
setData((preValue)=>{return{...preValue,[name]:value}})}

const handleChange=(name,value)=>{   
setState((preValue)=>{return{...preValue,[name]:value,}})}

const [formValues, setFormValues] = useState([{}]); //hooks for increment and decrement 
function addFormFields(){setFormValues([...formValues,{}])} 
const removeFormFields = (i) => {
let newFormValues = [...formValues];
newFormValues.splice(i, 1);
setFormValues(newFormValues)
} 

//for add new filed and label
const fieldDelete= async (e, id)=>{     //delete filed
e.preventDefault();
axios.delete(`${UrlHttp}/delete/${id}`).then(res =>{
getData();
});
}
function addTextFields(e){                   //create new input filed
e.preventDefault();
if(state.field!="" && state.label!=""){
const dataField = {
field:state.field,
label:state.label,
store_url:store_url,
}
axios.post(`${UrlHttp}/field`, dataField).then(res =>{
if(res.data.status === 200){          
getData();
}
});
} 
}
 const [fetchField, setFetchField]=useState([]);   // data access in webpage
 useEffect(()=>{
 getData();
 },[]);
const getData =()=>{
  axios.get(`${UrlHttp}/demo`).then(res=>{
    if(res.data.status === 200){
      setFetchField(res.data.filed);          
    }
  });  
}
 var display=fetchField.map((item,i)=>{  
    if(item.store_url== store_url){     
          return (              
          <TextField    
          key={item.id}                                 
          onChange={(val)=>{onchangeInput(`${item.label}${item.id}`,val)}}         
          name={item.id}
          value={fields[`${item.label}${item.id}`]}            
          type={item.field} 
          label={item.label}
          placeholder={`Enter ${item.label}`}       
          connectedRight={<Button onClick={(e)=> fieldDelete(e, item.id)}><Icon source={MobileCancelMajor}/></Button>}     
          />            
          )
    }
 });

const options = [
  {label: 'Input', value: 'text'},
  {label: 'Email', value: 'email'},
  {label: 'Date', value: 'date'},  
  {label: 'URL', value: 'url'},  
  {label: 'Textarea', value: 'textarea'},
];

const handleSubmit= async (e)=>{
    e.preventDefault();
    const data = {
        shop_url:store_url,
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

return (
         <Page                                 
         title="Profile"      
         >                             
        <Form onSubmit={handleSubmit}>       
            <FormLayout>                                 
            <TextField           
                value={state.fname}
                onChange={(val)=>handleChange("fname",val)}
                placeholder="Enter first name"
                label ="First name"
                name="fname"            
                type="text"               
                />                 
              <TextField             
                value={state.lname}
                onChange={(val)=>handleChange("lname",val)}
                placeholder="Enter last name"
                label="Last Name"
                name="lname"
                type="text"               
              />                                                             
              <TextField  
                disabled                         
                value={state.email}
                onChange={(val)=>handleChange("email",val)}
                placeholder="Email"
                label=" Email"
                name="email"
                type="email"                               
              />  
              {display}              
              {formValues.map((element, index) => (
            <div key={index}>
              {
              index ? 
              <>
              <FormLayout>
               <FormLayout.Group condensed>
               <Select
                  label="Select field type"
                  options={options}
                  onChange={(val)=>handleChange("field",val)}   
                  value={state.field}
                  name="field"
                  />
                    <TextField              
                    value={state.label}
                    onChange={(val)=>handleChange("label",val)}   
                    label="Field label"
                    name="label"
                    type="text"
                    connectedRight={<Button onClick={()=>removeFormFields()}><Icon source={MobileCancelMajor}/></Button>}                   
                    />                    
                  </FormLayout.Group>                                                                         
                <ButtonGroup>                 
                <Button onClick={addTextFields}>Create</Button> 
                </ButtonGroup>
                </FormLayout>
                </>
                : null
              }
            </div>
          ))}                               
            <ButtonGroup>             
              <Button onClick={() => addFormFields()}>Add Field</Button>                                                                      
              <Button submit>Submit</Button>
              </ButtonGroup>
            </FormLayout>
          </Form>
         </Page>
    );
}
export default Profile

