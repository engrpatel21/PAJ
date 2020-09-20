import React from 'react';
import {Card, Button, Icon, Grid} from 'semantic-ui-react'

const TaskCard = ({task}) => {
    console.log(task)
    return ( 
        <>
            <Card.Group centered >
            <Card>
                <Card.Content>
                    <Card.Header>{task ? task.name : 'not loading'}
                        <Grid.Column floated='right'>
                            <Icon name='edit' />
                        </Grid.Column>
                    </Card.Header>
                    <Card.Meta>Head of Project Here</Card.Meta>
                    <Card.Description>
                    {task ? task.content : 'not loading'}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        DETAILS
                    </Button>
                    <Button basic color='red'>
                        DELETE
                    </Button>
                    </div>
                </Card.Content>
            </Card>
            </Card.Group>
        </>

     );
}
 
export default TaskCard;