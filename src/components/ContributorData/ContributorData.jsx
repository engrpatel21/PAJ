import React from 'react';
import {Grid, Table, Container, Portal, Popup, Checkbox, Button, Divider} from 'semantic-ui-react'
import AddContributorForm from '../AddContributorForm/AddContributorForm'


const ContributorData = ({contributors, handleDeleteContributor, handleUpdateAdminStatus, renderAddContributor, addContributor, handelAddContributor}) => {
    return ( 
        <>
            <Grid centered>
                <Grid.Column >
                    <Container text fluid style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Table striped selectable collapsing  >
                 <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>User</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell >Admin</Table.HeaderCell>
                        <Table.HeaderCell>Remove</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            <Table.Body>
                {contributors.map((contributor,idx) =>
                     <Table.Row key={idx}  >
                     <Table.Cell collapsing>{contributor.user ? contributor.user.name : 'loading'}</Table.Cell>
                     <Table.Cell collapsing>{contributor.user ? contributor.user.email: 'notloading'}</Table.Cell>
                     <Table.Cell collapsing><Checkbox toggle onChange={()=>handleUpdateAdminStatus(contributor.isAdmin, idx)} checked={contributor.isAdmin}/></Table.Cell>
                     <Table.Cell collapsing key={`delete-${idx}`}><Button onClick={()=>handleDeleteContributor(contributor._id, contributor.user._id)} icon='eraser'/></Table.Cell>
                 </Table.Row>
                    ) }
            </Table.Body>
            </Table>
                    </Container>
                </Grid.Column>
            </Grid>
            
            <div>
                <Grid>
                    <Grid.Column textAlign="center">
                            <Popup content="Click to add a Contributors" 
                            trigger={<Button onClick={renderAddContributor} 
                                size='tiny' 
                                color='blue' 
                                icon='plus'
                                content='Contributor'
                                disabled={addContributor}
                                />} 
                            />
                    </Grid.Column>
                </Grid>       
            </div>
                <Portal onClose={renderAddContributor} open={addContributor} >
                        <AddContributorForm 
                            renderAddContributor={renderAddContributor}
                            handelAddContributor={handelAddContributor}
                        />
                </Portal>
        </>
        
     );
}
 
export default ContributorData;