import React from 'react'
import { Button, Table} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'



const ContributorsList = ({contributors, handleDeleteContributor}) => {
    let history = useHistory()
    const handleRedirect = userId => {
        history.push(`/profile/${userId}`)
    } 

    return ( 

        <Table striped selectable collapsing>
             <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>User</Table.HeaderCell>
                    <Table.HeaderCell>Email</Table.HeaderCell>
                    <Table.HeaderCell>Remove</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
        <Table.Body>
            {contributors? contributors.map((contributor,idx) =>
                 <Table.Row key={idx} >
                 <Table.Cell onClick={()=> handleRedirect(`${contributor.contributor._id}`)}key={contributor.contributor._idx} >{contributor.contributor.name}</Table.Cell>
                 <Table.Cell onClick={()=> handleRedirect(`${contributor.contributor_id}`)} key={contributor.contributor.email}>{contributor.contributor.email}</Table.Cell>
                 <Table.Cell key={`delete-${idx}`}><Button onClick={()=>handleDeleteContributor(contributor._id, contributor.contributor._id)}  icon='eraser'/></Table.Cell>
             </Table.Row>
                )  : ''}
        </Table.Body>
        </Table>
       
     );
}
 
export default ContributorsList;


