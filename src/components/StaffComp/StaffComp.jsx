import React from 'react'
import { Container, Divider, Grid, Image, Segment, Item, Label, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import P from './P.JPG'
import A from './A.JPG'
import J from './J.jpeg'




const StaffComp = (props) => {
        return ( 
            <body style={{
                backgroundColor:'#1b1c1d'
              }}>
    <Container style={{
        backgroundColor:'#1b1c1d'
      }}> 
    <Segment>
        <Grid>
        <Item>
        <Image src={props.user.email === 'j@j.com' ? J :  props.user.email === '12@12.com' ? P :  props.user.email === 'gundam@rx.com' ? A : ''} size='medium' avatar floated='left' verticalAlign='middle'
        />
        
        <Item.Content>
        <Item.Header><h1>{''}</h1></Item.Header>
        <Item.Meta>
        </Item.Meta>
        <Item.Description style={{
            
        }}> <h3>
        {props.user.email === 'j@j.com' ? props.user.bio :  props.user.email === '12@12.com' ? props.user.bio :  props.user.email === 'gundam@rx.com' ? props.user.bio : ''}
    </h3>
    </Item.Description>
    <Item.Extra>
    <Label>Super Cool Guy</Label>
          <Label icon='globe' content='Well Rounded' />
          <Button primary floated='right' 
          as={Link}
          to={{pathname: `/profile/${props.user._id}`}}
          >
            Go to Profile
            <Icon name='right chevron' />
          </Button>
        </Item.Extra>
        
        </Item.Content>
        </Item>

    </Grid>

    <Divider hidden>

    </Divider>
    </Segment>
    </Container>
    </body>
     );
    }
    
    export default StaffComp