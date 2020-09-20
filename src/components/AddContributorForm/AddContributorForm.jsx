import React, { Component } from 'react';
import { Button, Form, Header, Segment} from 'semantic-ui-react'

class AddFeatureForm extends Component {
    state = { 
        contributorFormData: {
           contributor: ''
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
            <Header>This is a controlled portal</Header>
            <p>Portals have tons of great callback functions to hook into.</p>
            <p>To close, simply click the close button or click away</p>
            <Form ref={this.formRef} onSubmit={this.handleSubmitContributor}>
            <Form.Group>
                <Form.Input
                placeholder='enter email address'
                name='contributor'
                value={this.state.contributorFormData.contributor}
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