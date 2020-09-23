import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react'


class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { activeItem } = this.state
    const { children } = this.props
    const { fixed } = this.state
   
    return (
      <Segment greaterThan='mobile'>
      <Visibility
        once={false}
        onBottomPassed={this.showFixedMenu}
        onBottomPassedReverse={this.hideFixedMenu}
      >
        <Segment
          inverted
          textAlign='center'
          style={{ minHeight: 50, padding: '1em 0em' }}
          vertical
        >
          
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size='large'
            
          >
            <Container>
              <Menu.Item 
              as={Link}
              to='/'
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              >
              </Menu.Item>
              {this.props.user ? <>
              
              <Menu.Item 
               as={Link}
               to='/users'
               name='All Users'
               active={activeItem === 'users page'}
               onClick={this.handleItemClick}
              
              >
                
              </Menu.Item>
              <Menu.Item
               as={Link}
               to='/createproject'
               name='Create Project'
               active={activeItem === 'create project'}
               onClick={this.handleItemClick}
              ></Menu.Item>

              <Menu.Item 
              as={Link}
              to='/profile'
              name='Profile'
              active={activeItem === 'profile'}
              onClick={this.handleItemClick}
              ></Menu.Item>

              <Menu.Item 
              as={Link}
              to='/staff'
              name='Staff'
              active={activeItem === 'staff'}
              onClick={this.handleItemClick}
              ></Menu.Item>
            
            <Menu.Item
            as={Link}
            to='/'
            name='Log out'
            active={activeItem === 'logout'}
            onClick={this.props.handleLogout}
            />
            </> 
            :
            <>
              <Menu.Item position='right'>
                <Button 
                as={Link}
                to='/login'
                name='Log in'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
                inverted={!fixed}>
                  Log in
                </Button>
                <Button 
                 as={Link}
                 to='/signup'
                 name='Sign Up'
                 active={activeItem === 'signup'}
                 onClick={this.handleItemClick} 
                 inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                   Sign up
                </Button>
              </Menu.Item>
              </>
                }
            </Container>
          </Menu>  
        </Segment>
      </Visibility>
      {children}
    </Segment>

    )
  }
}







export default NavBar;