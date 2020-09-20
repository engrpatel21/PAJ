import React from 'react'
import { Table, Button} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'



const FeatureDetails = ({features, projectId}) => {
    let history = useHistory()
    const handleRedirect = featureId => {
        history.push(`/projectboard/${projectId}/${featureId}`)
    } 
    return ( 

        <Table striped selectable collapsing>
        <Table.Header>
           <Table.Row>
               <Table.HeaderCell>Feature</Table.HeaderCell>
               <Table.HeaderCell>Description</Table.HeaderCell>
               <Table.HeaderCell>Remove</Table.HeaderCell>
           </Table.Row>
       </Table.Header>
   <Table.Body>
       {features? features.map((feature,idx) =>
            <Table.Row key={idx} >
            <Table.Cell onClick={()=> handleRedirect(feature._id)} key={`feature-${idx}`} >{feature.feature}</Table.Cell>
            <Table.Cell onClick={()=> handleRedirect(feature._id)} key={feature._id}>{feature.description}</Table.Cell>
            <Table.Cell key={`delete-${idx}`}><Button icon='eraser'/></Table.Cell>
        </Table.Row>
           )  : 'run this'}
   </Table.Body>
   </Table>
       
  
     );
}
 
export default FeatureDetails;
