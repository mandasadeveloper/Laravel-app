import { Button, FormLayout,Page,TextField,Form } from "@shopify/polaris";
import { useCallback } from "react";
import { useState } from "react";
import { Link} from "react-router-dom";
export default function Manage_Address(){   
        const [fname, setFname] = useState('');
        const [lname, setLname] = useState('');        
        const [email, setEmail] = useState('');  
        const handleSubmit = useCallback((_event) => {
          setEmail('');        
          setFname('');  
          setLname('');                       
        }, []);                 
        const handleEmailChange = useCallback((value) => setEmail(value), []);
        const handleFnameChange = useCallback((value) => setFname(value), []);
        const handleLnameChange = useCallback((value) => setLname(value), []);            
        return (
         <Page
         primaryAction={<Link to="/"><h2>Back</h2></Link>}  
         title="Manage Address"   
         >     
         <br/>   
        <Form onSubmit={handleSubmit}>       
            <FormLayout>                
                               
              <TextField
                value={fname}
                onChange={handleFnameChange}
                label="First Name"
                type="text"               
              />
              <TextField
                value={lname}
                onChange={handleLnameChange}
                label="Last Name"
                type="text"               
              />
              
              <TextField
                value={email}
                onChange={handleEmailChange}
                label="Email"
                type="email"               
              />                                                                           
              <Button submit>Submit</Button>
            </FormLayout>
          </Form>
         </Page>
        );
}