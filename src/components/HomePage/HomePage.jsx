import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
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
  Visibility,
  Item
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const HomepageHeading = ({ mobile }) => (
  
  <Container text>
    <Header
      as='h1'
      content='Welcome to PAJ'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
        size:'cover'
      }}
      />
    <Header
      as='h2'
      content='Project Assistance Journal'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
      />
    <Divider/>
    <Button primary size='huge'>
      
      <Link
      to='/signup'
      style={{
        color: 'whitesmoke'
      }}
      >Get Started</Link>
      <Icon name='right arrow' />
    </Button>
    <Divider hidden/>
    <Container>
    <Item.Header as={Link} to='/login' style={{color:'white'}} hover='true'>Log in</Item.Header>
    </Container>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}


class DesktopContainer extends Component {
  state = {}
  
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  
  render() {
    const { children } = this.props
    const { fixed } = this.state
    
    return (
     <div>
      <Segment greaterthan='mobile'>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
          >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em', 
            backgroundImage: `url(${'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fi.imgur.com%2F5vuODQQ.jpg'})`,
            backgroundSize: 'cover',
            
            
          }}
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
                
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Segment>
      </div>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}
  
  handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
  handleToggle = () => this.setState({ sidebarOpened: true })
  
  render() {
    
    
    return (
      <Segment as={Sidebar.Pushable} at='mobile'>
              <Container>
                
              </Container>
              <HomepageHeading mobile />
            </Segment>
      )
    }
  }
  
  MobileContainer.propTypes = {
    children: PropTypes.node,
  }
  
  const ResponsiveContainer = ({ children }) => (
    
    <>
 
    {DesktopContainer ?
    <DesktopContainer>{children}</DesktopContainer>
    :
    <MobileContainer>{children}</MobileContainer>
  }

  </>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (

  <ResponsiveContainer>
    
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Companies and Companions
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            We aim to deliver a tool that will help individuals collaborate on projects to achieve maximum productivity, on an easy to use platform.
              
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Meet our Founding Fathers
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Here at PAJ we are ever so grateful for the people that started this company. We are proud of thier hard work and dedication that compelled them to conquer their goals and create PAJ.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='https://images.unsplash.com/photo-1523427373578-fa4bbfc4389a?ixlib=rb-1.2.1&ixid=eyJhcH' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge' as={Link} to='/staff'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' />
              <b>Sergio</b> General Assembley SEI Graduate
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Breaking The Mold, Melding Your Teams
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          This platform is built with community in mind. We set out to create a space where individuals can collaborate and create. Here at PAJ we are passionate about team-work and growth, so we hope this tool will enhance the way you create.
        </p>
       

        <Divider
       
        >
          
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Did We Tell You About Our Project Boards?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          This is truly the highlight of what we do here at PAJ. Our project Boards are second to none. From the incredible ingenuity to our attention to detail we have created a product so user friendly that it instantly becomes the go to tool for productivity.
        </p>
        
      </Container>
    </Segment>

    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as={Link} to='/staff'>Meet the Team</List.Item>
                <List.Item as={Link} to='/login'>Log in</List.Item>
                <List.Item as={Link} to='/signup'>Sign Up</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as={Link} to='/createproject'>Get Started</List.Item>
                <List.Item as={Link} to='/profile'>Profile</List.Item>
                <List.Item as={Link} to='/users'>All Users</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Thank you for using PAJ today
              </Header>
              <p>
                "You are one step closer to your reaching your goals" -Julio
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>

)

export default HomepageLayout