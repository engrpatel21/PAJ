import React,{ useState} from 'react';
import {Card, Image, Button} from 'semantic-ui-react'

const CardComp = ({task, deleteTask}) => {
    const [editForm, setEditFrom] = useState({name: '', content: ''})
    
    return ( 

        <Card>
        <Image  wrapped ui={false} />
        <Card.Content>
          <Card.Header>{task.name}</Card.Header>
          <Card.Meta>
            <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            {task.content}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <Button content='delete' onClick={()=>deleteTask(task._id, task.taskStatus)}/>
     
        </Card.Content>
      </Card>
    );
}
 
export default CardComp;