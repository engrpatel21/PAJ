import React from 'react'
import { Container, Divider, Grid, Image, Segment, Item, Label, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import P from './P.JPG'
import A from './A.JPG'
import J from './J.jpeg'




const StaffComp = (props) => {
    
    
    // {props.user.email.map((user)=>
        
    //     )}
        return ( 
    <Container>
    <Segment>
        <Grid>
        <Item>
        <Image src={props.user.email === 'j@j.com' ? J :  props.user.email === '12@12.com' ? P :  props.user.email === 'gundam@rx.com' ? A : ''} size='medium' avatar floated='left' verticalAlign='middle'/>
        <div>{props.user.email}</div>
        <Item.Content>
        <Item.Header><h1>{''}</h1></Item.Header>
        <Item.Meta>
          <span>Purple Unicorn</span>
        </Item.Meta>
        <Item.Description> <h3>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
      facete scriptorem, est autem aliquip detraxit at. </h3>
      <h3>
      Usu ocurreret
      referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
      electram, eos choro alterum definiebas in. </h3>
      
      <h3>Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
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
     );
    }
    
    export default StaffComp