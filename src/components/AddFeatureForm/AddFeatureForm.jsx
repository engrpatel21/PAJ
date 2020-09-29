import React, { Component } from 'react';
import { Button, Form, Header, Segment} from 'semantic-ui-react'



class AddFeatureForm extends Component {
  state = { 
      featureFormData: this.props.feature ? this.props.feature : {
          feature: '',
          description: '',
      },
      featureId: ''
  }
     
  handleSubmitFeature = e =>{
    e.preventDefault()
    this.props.renderAddFeature()
    this.props.handleAddFeature(this.state.featureFormData)
  } 
     

  handleChangeFeatures = e => {
      const featureFormData = {...this.state.featureFormData, [e.target.name]: e.target.value};
      this.setState({
        featureFormData,
      });
    };

  handleUpdateFeature = e =>{
    e.preventDefault()
    this.props.renderEditFeature()
    this.props.updateFeature(this.state.featureFormData._id, this.state.featureFormData)
  }
  handleSelectChange=(e,{value})=>{
    const featureFormData = {...this.state.featureFormData }
    featureFormData.lead = value
    this.setState({featureFormData})
  }

    

     
    //  pushOptions = () => {
    //   const options = [
    //     {
    //       key: this.props.owner._id,
    //       text: this.props.owner.name,
    //       value: this.props.owner._id,
    //       image: { avatar: true, src: 'https://picsum.photos/200.jpg' }
    //     }
    //   ]
      
    //   if(this.props.contributors.length > 0){
    //     this.props.contributors.forEach(contributor =>
        
    //       options.push({
    //         key: contributor.contributor._id,
    //         text: contributor.contributor.name,
    //         value: contributor.contributor._id,
    //         image: { avatar: true, src: 'https://picsum.photos/200.jpg' },
    //       })
    //     )

    //   }
  
   
    //     return options
    //  }
    
    render() { 
        const {renderAddFeature, renderEditFeature, editFeature} = this.props
      
        return ( 
            <Segment
            style={{
              left: '40%',
              position: 'fixed',
              top: '20%',
              zIndex: 1000,
            }}
          >
            <Header>Add Project Features</Header>
            <p>Add Project features and its description here.</p>
            <p>Click on the feature link to after adding the feature to compose stories for the feature.</p>
            <p>You can asign your contributors to be in charge of a feature.</p>
            <Form ref={this.formRef} onSubmit={this.props.editFeature? this.handleUpdateFeature : this.handleSubmitFeature}>
          <Form.Group>
            <Form.Input
              placeholder='Feature Name'
              name='feature'
              value={this.state.featureFormData.feature}
              onChange={this.handleChangeFeatures}
            />
            </Form.Group>
            {/* <Form.Dropdown
               placeholder='Select Friend'
               fluid
               selection
               onChange={this.handleSelectChange}
               value={this.state.featureFormData.lead}
              
            
            /> */}
            <Form.Group> 
            <Form.TextArea
              id='form-textarea-control-opinion'
              placeholder='Add a description'
              label='Description'
              name='description'
              value={this.state.featureFormData.description}
              onChange={this.handleChangeFeatures}
            />
            </Form.Group>
            
            <Form.Group>
            <Form.Button type='submit' content='Submit' 
            />
          </Form.Group>
        </Form>
            <Button
              content='Close'
              icon='x'
              negative
              onClick={editFeature? renderEditFeature :renderAddFeature}
              floated='right'
            />
          </Segment>
         );
    }
}
 
export default AddFeatureForm;