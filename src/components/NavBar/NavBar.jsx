import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {  Menu } from 'semantic-ui-react'

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
          to='/users'
          name='users page'
          active={activeItem === 'users page'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/createproject'
          name='create project'
          active={activeItem === 'create project'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/profile'
          name='profile'
          active={activeItem === 'profile'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          as={Link}
          to='/messagepage'
          name='Message Board'
          active={activeItem === 'create project'}
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
        <Menu.Item
          as={Link}
          to='/signup'
          name='signup'
          active={activeItem === 'signup'}
          onClick={this.handleItemClick}
        />
        
        </>}
       
      </Menu>
    )
  }
}
export default NavBar;