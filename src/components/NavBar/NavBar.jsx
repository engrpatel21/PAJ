import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted>
        <Menu.Item
          as={Link}
          to='/'
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />

        {this.props.user ? <>
          <Menu.Item
          as={Link}
          to='/projectboard'
          name='project board'
          active={activeItem === 'project board'}
          onClick={this.handleItemClick}
        />
          <Menu.Item
          as={Link}
          to='/projectdetails'
          name='project details'
          active={activeItem === 'project details'}
          onClick={this.handleItemClick}
        />
         <Menu.Item
          as={Link}
          to='/'
          name='logout'
          active={activeItem === 'logout'}
          onClick={this.props.handleLogout}
        />
      
         </> 
        : 
        <> 
        <Menu.Item
          as={Link}
          to='/login'
          name='login'
          active={activeItem === 'login'}
          onClick={this.handleItemClick}
        />
        
        </>}
       
      </Menu>
    )
  }
}
export default NavBar;