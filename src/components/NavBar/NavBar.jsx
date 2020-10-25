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
      <>
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
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
              >
              </Menu.Item>
              {this.props.user ? <>
              
              <Menu.Item 
               as={Link}
               to='/users'
               name='All Users'
               active={activeItem === 'All Users'}
               onClick={this.handleItemClick}
              
              ></Menu.Item>

              <Menu.Item
               as={Link}
               to='/allprojects'
               name='All Projects'
               active={activeItem === 'All Projects'}
               onClick={this.handleItemClick}
              ></Menu.Item>

              <Menu.Item
               as={Link}
               to='/createproject'
               name='Create Project'
               active={activeItem === 'Create Project'}
               onClick={this.handleItemClick}
              ></Menu.Item>

              <Menu.Item 
              as={Link}
              to='/profile'
              name='Profile'
              active={activeItem === 'Profile'}
              onClick={this.handleItemClick}
              ></Menu.Item>

              <Menu.Item 
              as={Link}
              to='/staff'
              name='Staff'
              active={activeItem === 'Staff'}
              onClick={this.handleItemClick}
              ></Menu.Item>
            
            <Menu.Item
            as={Link}
            to='/'
            name='Log out'
            active={activeItem === 'Log out'}
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
                active={activeItem === 'Log in'}
                onClick={this.handleItemClick}
                inverted={!fixed}>
                  Log in
                </Button>
                <Button 
                 as={Link}
                 to='/signup'
                 name='Sign Up'
                 active={activeItem === 'Sign Up'}
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
    </>

    )
  }
}







export default NavBar;