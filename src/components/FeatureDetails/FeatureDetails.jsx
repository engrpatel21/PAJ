import React, { Component } from 'react';
import { Table, Button, Portal} from 'semantic-ui-react'
import AddFeatureForm from '../../components/AddFeatureForm/AddFeatureForm'



class FeatureDetails extends Component {
    state = { 
        editFeature: false
    }

    renderEditFeature = () => {
        this.setState({editFeature: !this.state.editFeature})
    }

    render() { 
        const {features, projectId, handleDeleteFeature, history, handleUpdateFeature, owner, contributors} = this.props
        const handleRedirect = featureId => {
        history.push(`/projectboard/${projectId}/${featureId}`)
    } 
        return ( 
            <Table striped selectable collapsing>
            <Table.Header>
               <Table.Row>
                   <Table.HeaderCell>Feature</Table.HeaderCell>
                   <Table.HeaderCell>Description</Table.HeaderCell>
                   <Table.HeaderCell>Lead Developer</Table.HeaderCell>
                   <Table.HeaderCell>Edit</Table.HeaderCell>
                   <Table.HeaderCell>Remove</Table.HeaderCell>
               </Table.Row>
           </Table.Header>
       <Table.Body>
           {features? features.map((feature,idx) =>
       
                <Table.Row key={idx} >
                <Table.Cell onClick={()=> handleRedirect(feature._id)}>{feature.feature}</Table.Cell>
                <Table.Cell onClick={()=> handleRedirect(feature._id)} key={feature._id}>{feature.description}</Table.Cell>
                <Table.Cell>{feature.lead.name}</Table.Cell>
                <Table.Cell ><Button onClick={this.renderEditFeature} icon='edit'/></Table.Cell>
                <Table.Cell onClick={()=> handleDeleteFeature(feature._id)} key={`delete-${idx}`}><Button icon='eraser'/></Table.Cell>
                <Portal  open={this.state.editFeature} >
                        <AddFeatureForm 
                            renderEditFeature={this.renderEditFeature}
                            handleUpdateFeature={handleUpdateFeature}
                            editFeature={this.state.editFeature}
                            feature={feature}
                            owner={owner}
                            contributors={contributors}
                        />
                    </Portal>
            </Table.Row>
   
    
               )  : 'run this'}
       </Table.Body>
       </Table>
         );
    }
}
 
export default FeatureDetails;


