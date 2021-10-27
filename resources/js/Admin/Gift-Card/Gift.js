import { Button, FormLayout,Page,TextField,Form } from "@shopify/polaris";
import { useCallback, useState} from "react";
export default function Gift(){   
        const [fname, setPassword] = useState('');       
        const [email, setEmail] = useState('');    
        const handleSubmit = useCallback((_event) => {
          setEmail('');        
          setPassword('');  
                          
        }, []);                 
        const handleEmailChange = useCallback((value) => setEmail(value), []);
        const handlePasswordChange = useCallback((value) => setPassword(value), []);
         
        return (
         <Page       
         title="Gift"   
         >     
         <br/>   
        <Form onSubmit={handleSubmit}>       
            <FormLayout>                 
              <TextField
                value={email}
                onChange={handleEmailChange}
                label="Email"
                type="email"               
              />           
               <TextField
                value={fname}
                onChange={handlePasswordChange}
                label="Password"
                type="password"               
              />                                                                
              <Button submit>Save</Button>
            </FormLayout>
          </Form>
         </Page>
        );
}