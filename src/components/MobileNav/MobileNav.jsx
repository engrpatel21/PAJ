import React, { Component } from 'react'
import {   Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,} from 'semantic-ui-react'

 

class MobileNav extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state
    const { activeItem } = this.state
    const { fixed } = this.state

    return (
      <Segment as={Sidebar.Pushable} at='mobile'>
        <Sidebar.Pushable>
          <Sidebar
            as={Menu}
            animation='overlay'
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={sidebarOpened}
          >
            <Menu.Item 
              as={Link}
              to='/'
              name='Home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
              >
              </Menu.Item>
              
              
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
            to='/'
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.props.handleLogout}
            />
          </Sidebar>
        
          

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              
              <Container>
                <Menu inverted pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
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
              
      
                </Menu>
              </Container>
            </Segment>

            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Segment>
    )
  }
}

export default MobileNav;