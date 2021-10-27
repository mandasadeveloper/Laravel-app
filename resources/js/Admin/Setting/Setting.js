import { Layout,Card,ResourceList,TextStyle, Avatar, Page, } from "@shopify/polaris";
import { Link} from "react-router-dom";
export default function Setting(){  
    return(  
        <Page title="Setting">
        <Layout>
  <Layout.Section oneThird>
    <Card>      
      <Card.Section>
        <ResourceList          
          items={[
            {
              id: 1,
              url: '/translations',
              name: 'Translations ',
              sku: 'Profile and other messages that might need translation',             
              media: (<Avatar/>),
            },        
          ]}
          renderItem={(item) => {
            const {id,url,name, sku, media} = item;
            return (
              <ResourceList.Item
                id={id}               
                media={media}              
              >
               <Link to={url} className="Link">
               <h3>
                  <TextStyle variation="strong">{name}</TextStyle>
                </h3>
                <div>{sku}</div></Link>          
              </ResourceList.Item>
            );
          }}
        />
      </Card.Section>
    </Card>
  </Layout.Section>
</Layout>         
        </Page>    
     );

}