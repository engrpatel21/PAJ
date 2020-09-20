import React, { Component } from 'react';
import {Item, Con, Container} from 'semantic-ui-react'

class ProjectNameCard extends Component {
    state = {  }
    render() { 
        const {project} = this.props
        return ( 
            <Item>
            <Item.Image size='tiny' src='https://picsum.photos/200/300' />
      
            <Item.Content>
              <Item.Header style={{fontSize: '3rem', height: '4rem', margin: '0 0'}}>
           
                  {project.name}
          
                  </Item.Header>
                  
              <Item.Meta>Description</Item.Meta>
              <Item.Description style={{fontSize: '1.5rem', margin: '0 0'}}>
                {project.description}
              </Item.Description>
            </Item.Content>
          </Item>      
         );
    }
}
 
export default ProjectNameCard;