import React, { Component } from 'react';
import {Item, Image} from 'semantic-ui-react'

class ProjectNameCard extends Component {
    state = {  }
    render() { 
        const {project} = this.props
        return ( 
            <Item>
            <Item.Image size='tiny' src='https://picsum.photos/200/300' />
      
            <Item.Content>
              <Item.Header style={{fontSize: '3rem'}}>{project.name}</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                {project.desription}
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>      
         );
    }
}
 
export default ProjectNameCard;