import React from 'react'
import { Button, Table} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'



const ContributorsList = ({contributors}) => {
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
                 <Table.Row key={idx} onClick={()=> handleRedirect(`${contributor._id}`)}>
                 <Table.Cell key={contributor.contributor._idx} >{contributor.contributor.name}</Table.Cell>
                 <Table.Cell key={contributor.contributor.email}>{contributor.contributor.email}</Table.Cell>
                 <Table.Cell key={`delete-${idx}`}><Button  content='Remove User' icon='eraser'/></Table.Cell>
             </Table.Row>
                )  : 'run this'}
        </Table.Body>
        </Table>
       
     );
}
 
export default ContributorsList;


