import React from 'react';
import {Card, Button} from 'semantic-ui-react'

const FeatureCard = () => {
    return ( 
        <>
            <Card.Group centered items>
            <Card>
                <Card.Content>
                    <Card.Header>Placeholder Project</Card.Header>
                    <Card.Meta>Head of Project Here</Card.Meta>
                    <Card.Description>
                    Specific project objectives will go <strong>IN THIS AREA</strong>
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
 
export default FeatureCard;