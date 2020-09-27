import React, { Component } from 'react';
import { Button, Form, Header, Segment} from 'semantic-ui-react'

class AddFeatureForm extends Component {
    state = { 
        contributorFormData: {
           user: ''
        }
     }
     
     handleSubmitContributor = e => {
         e.preventDefault()
         this.props.renderAddContributor()
         this.props.handelAddContributor(this.state.contributorFormData)
     }

     handleChangeContributor = e => {
        const contributorFormData = {...this.state.contributorFormData, [e.target.name]: e.target.value};
        this.setState({
         contributorFormData
        });
     }
     formRef = React.createRef()
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
            <Header>Add users who will help you complete this project</Header>
            <p>Enter the user's email that was used to sign up to PAJ</p>
            <Form ref={this.formRef} onSubmit={this.handleSubmitContributor}>
            <Form.Group>
                <Form.Input
                placeholder='Enter Email Address'
                name='user'
                value={this.state.contributorFormData.user}
                onChange={this.handleChangeContributor}
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
              onClick={this.props.renderAddContributor}
            />
          </Segment>
         );
    }
}
 
export default AddFeatureForm;