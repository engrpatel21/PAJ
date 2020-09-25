import React from 'react'
import { Divider, Grid, Icon, Image, Card, Message, Button } from 'semantic-ui-react'
import ProjectUsersCard from '../ProjectUsersCard/ProjectUsersCard'

const UsersProfile = (props, mobile) => {
    const {usersInfo} = props
    const handleAddFriend =(e) => {
        e.preventDefault()
        props.addFriend({friends: usersInfo._id})
    }

    return ( 
    
         <body style={{
        backgroundColor:'#1b1c1d'}}>
        <Grid celled style={{
          height:'910px',
        }}>
          <Grid.Row >
            <Grid.Column width={5}>
            <Card style={{
              bottom:'5px',
              left: '150px',
              
            }}>
              <Image src={usersInfo.avatar} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{usersInfo.name}
                <Grid.Column floated='right' width={5}>
                    <Button onClick={handleAddFriend} icon='user plus'/>
                   
                  </Grid.Column></Card.Header>
                <Card.Meta>
                </Card.Meta>
                <Card.Description>
                  {usersInfo.bio ? usersInfo.bio : 'Spicy jalapeno bacon ipsum dolor amet shank jerky shoulder sed incididunt ad. Nisi alcatra short loin ut. Nisi short ribs dolor proident bresaola veniam. Sirloin meatball pariatur eu turducken short ribs do laboris adipisicing. Elit dolor bresaola tri-tip landjaeger, officia flank pork drumstick cow meatloaf t-bone kielbasa aliquip. Voluptate occaecat boudin, flank ut landjaeger kielbasa cupim ut tempor ex alcatra venison. Reprehenderit in kielbasa excepteur deserunt pork loin.'
                  }
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
      
              </Card.Content>
            </Card>
            
            </Grid.Column>
            <Grid.Column width={3}>
              
              <ProjectUsersCard projects={usersInfo.projects ? usersInfo.projects : ''}/>
            
               
              
            
            </Grid.Column>
          </Grid.Row>
        </Grid> 
        </body>
        
     );
}
 
export default UsersProfile;