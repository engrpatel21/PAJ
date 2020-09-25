import React, { Component } from 'react';
import {Item, Button, Form} from 'semantic-ui-react'

class ProjectNameCard extends Component {
    state = { 
      projectFromData: this.props.project ? this.props.project : '',
      isEdit: false
     }

     renderEdit = () => {
       this.setState({isEdit: !this.state.isEdit})
     }
    render() { 
        const {project} = this.props
        return ( 

          <>
          {this.state.isEdit ? 
          
          <Form>
             <Item>
            <Item.Image size='tiny' src='https://picsum.photos/200/300' />
      
            <Item.Content>
              <Item.Header style={{fontSize: '2.4rem', height: '4rem', margin: '0 0'}}>
           
                  <Form.Input
                    value={this.state.projectFromData.name}
                  />

             
           
                  </Item.Header>
                  
              <Item.Meta>Description</Item.Meta>
              <Item.Description style={{fontSize: '1.5rem', margin: '0 0'}}>
                <Form.Input 
                  value={this.state.projectFromData.description}
                />
                {project.description}
                <Button icon='check' content='Submit' floated='right' size='tiny' onClick={this.renderEdit}/>
              </Item.Description>
            </Item.Content>
          </Item>      


          </Form>
          
          
          :    
          
          
          <Item>
            <Item.Image size='tiny' src='https://picsum.photos/200/300' />
      
            <Item.Content>
              <Item.Header style={{fontSize: '2.4rem', height: '4rem', margin: '0 0'}}>
           
                  {project.name}
           
                  </Item.Header>
                  
              <Item.Meta>Description</Item.Meta>
              <Item.Description style={{fontSize: '1.5rem', margin: '0 0'}}>
                {project.description}
                <Button icon='edit' content='edit' floated='right' size='tiny' onClick={this.renderEdit} />
              </Item.Description>
            </Item.Content>
          </Item>    }



          </>
           
         );
    }
}
 
export default ProjectNameCard;