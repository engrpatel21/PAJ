import React from 'react';
import {Card, Button, Input} from 'semantic-ui-react'

const TaskCardEM = () => {
    return ( 
        <>
            <Card.Group centered items>
            <Card>
                <Card.Content>
                    <Card.Header>
                        <Input size='mini' focus placeholder='Edit Project Name'  />
                    </Card.Header>
                    <Card.Meta>Head of Project Here</Card.Meta>
                    <Card.Description>
                    <Input size='mini' focus placeholder='Edit Project Objective(s)'  />
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='blue'>
                        CONFIRM
                    </Button>
                    <Button basic color='grey'>
                        CANCEL
                    </Button>
                    </div>
                </Card.Content>
            </Card>
            </Card.Group>
        </>

     );
}
 
export default TaskCardEM;