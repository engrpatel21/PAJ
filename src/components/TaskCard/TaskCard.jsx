import React from 'react';
import {Card, Button, Icon, Grid} from 'semantic-ui-react'

const TaskCard = () => {
    return ( 
        <>
            <Card.Group centered items>
            <Card>
                <Card.Content>
                    <Card.Header>Placeholder Project
                        <Grid.Column floated='right'>
                            <Icon name='edit' />
                        </Grid.Column>
                    </Card.Header>
                    <Card.Meta>Head of Project Here</Card.Meta>
                    <Card.Description>
                    Specific project objectives will go <strong>IN THIS AREA</strong>
                        <Grid.Column floated='right'>
                            <Icon name='edit' />
                        </Grid.Column>
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