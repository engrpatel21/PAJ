import React, { Component } from 'react';
import { Table, Button, Portal, Divider, Segment,Popup, Grid, Container} from 'semantic-ui-react'
import AddFeatureForm from '../../components/AddFeatureForm/AddFeatureForm'
import * as featureApi from '../../services/featureService'


class FeatureDetails extends Component {
    state = { 
        addFeature: false,
        editFeature: false,
        features: [],
        editFeatureForm: {}
    }
           
    renderEditFeature = (feature) =>{
        this.setState({
            editFeature: !this.state.editFeature,
            editFeatureForm: {...feature}
        })
    }

    renderAddFeature = () => {
        this.setState({addFeature: !this.state.addFeature})
    }

    async componentDidMount(){
        const features = await featureApi.getAllFeatures(this.props.projectId)
        this.setState({features})
    }

    handleAddFeature = async featureData => {
        const feature = await featureApi.createFeature(this.props.projectId, featureData)
        this.setState({features: [...this.state.features, feature]})
    }

    handleUpdateFeature = async (featureId, featureData) => {
        const updatedFeature = await featureApi.updateFeature(featureId, featureData)
        this.setState({features: this.state.features.map(f => f._id === updatedFeature._id ? updatedFeature : f)})
    }

    handleDeleteFeature = async featureId => {
        await featureApi.deleteFeature(featureId)
        this.setState({ features: this.state.features.filter( f => f._id !== featureId)})
    }

    render() { 
        const {addFeature, features, editFeature, editFeatureForm} = this.state 
        return ( 
            <>
            <Grid>
                <Grid.Column>
                    <Container style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} fluid text>
                    <Table striped selectable collapsing >
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
                            {features.length ? features.map((feature,idx) =>
                        
                                    <Table.Row key={idx} >
                                    <Table.Cell >{feature.feature}</Table.Cell>
                                    <Table.Cell >{feature.description}</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell ><Button onClick={()=>this.renderEditFeature(feature)} icon='edit'/></Table.Cell>
                                    <Table.Cell  key={`delete-${idx}`}><Button onClick={()=>this.handleDeleteFeature(feature._id)} icon='eraser'/></Table.Cell>
                               
                                </Table.Row>
                                )  : ''}
                        </Table.Body>
                    </Table>
                    </Container>
                </Grid.Column>
            </Grid>
            <Portal  open={editFeature}>
                <>
                    <AddFeatureForm 
                        editFeature={editFeature}
                        renderEditFeature={this.renderEditFeature}
                        feature={editFeatureForm}
                        updateFeature={this.handleUpdateFeature}
                    />
                </>
            </Portal>
            <div>
                <Grid>
                    <Grid.Column style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}} textalign="center">
                        <Popup content="Click to add a Feature" 
                            trigger={<Button onClick={this.renderAddFeature} 
                                size='tiny' 
                                color='blue' 
                                icon='plus'
                                content='Feature'
                                disabled={addFeature}
                                />} 
                            /> 
                        </Grid.Column>
                </Grid>
            </div>
            <Portal onClose={this.renderAddFeature} open={addFeature} >
                <AddFeatureForm 
                    addFeature={addFeature}
                    renderAddFeature={this.renderAddFeature}
                    handleAddFeature={this.handleAddFeature}
                />
            </Portal>
                
        </>
         );
    }
}
 
export default FeatureDetails;


