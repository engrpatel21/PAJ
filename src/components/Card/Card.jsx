import React from 'react';
import {Card, Image, Button} from 'semantic-ui-react'

const CardComp = ({task, deleteTask}) => {
    return ( 

        <Card>
        <Image  wrapped ui={false} />
        <Card.Content>
          <Card.Header>{task.content}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button content='delete' onClick={()=>deleteTask(task._id, task.taskStatus)}/>
     
        </Card.Content>
      </Card>
    );
}
 
export default CardComp;