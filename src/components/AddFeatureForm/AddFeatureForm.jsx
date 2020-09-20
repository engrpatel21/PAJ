import React, { Component } from 'react';
import { Button, Form, Header, Segment} from 'semantic-ui-react'

class AddFeatureForm extends Component {
    state = { 
        featureFormData: {
            feature: '',
            description: ''
        }
     }
     
     handleSubmitFeatures = e => {
         e.preventDefault()
         this.props.renderAddFeature()
         this.props.handleAddFeature(this.state.featureFormData)
     }

     handleChangeFeatures = e => {
        const featureFormData = {...this.state.featureFormData, [e.target.name]: e.target.value};
        this.setState({
         featureFormData
        });
     }
    render() { 
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
            <Form ref={this.formRef} onSubmit={this.handleSubmitFeatures}>
          <Form.Group>
            <Form.Input
              placeholder='Feature Name'
              name='feature'
              value={this.state.featureFormData.feature}
              onChange={this.handleChangeFeatures}
            />
            </Form.Group>
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
              content='Close Portal'
              negative
              onClick={this.props.renderAddFeature}
            />
          </Segment>
         );
    }
}
 
export default AddFeatureForm;