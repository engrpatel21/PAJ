import React, { Component } from 'react';
import {  Divider, Loader} from 'semantic-ui-react'
import * as contributorApi from '../../services/contributorService'
import FeatureDetails from '../FeatureDetails/FeatureDetails'
import ContributorData from '../ContributorData/ContributorData'

class ContributorsList extends Component {
    state = { 
        contributors: null,
        addContributor: false
    }

    renderAddContributor = () => {
        this.setState({addContributor: !this.state.addContributor})
    }

    async componentDidMount(){
        const contributors = await contributorApi.getContributors(this.props.projectId)
        this.setState({contributors})
    }

    handelAddContributor = async contributorData => {
        const contributor = await contributorApi.addContributor(this.props.projectId, contributorData)
        this.setState({contributors: [...this.state.contributors, contributor]},
            ()=>this.props.history.push(`/projectdetails/${this.props.projectId}`))
    }

    handleDeleteContributor = async(contributorId, userId) => {
        await contributorApi.deleteContributor(this.props.projectId, contributorId, userId)
        this.setState({ contributors: this.state.contributors.filter(c=> c._id !== contributorId)},
         ()=> this.props.history.push(`/projectdetails/${this.props.projectId}`))
    }

    handleUpdateAdminStatus = async (currentStatus, idx) => {
        let contributor = this.state.contributors[idx]
        contributor.isAdmin = !currentStatus
        const updatedContributor = await contributorApi.updateContributor(contributor._id, contributor)
        this.setState({contributors: this.state.contributors.map(c => c._id === updatedContributor._id ? updatedContributor : c)})
    }

    render() { 
        const {contributors} = this.state
        const {projectId, user, history} = this.props
        return ( 
            <>
            { contributors ? 
                <>
                    <ContributorData 
                        contributors={contributors}
                        handleDeleteContributor={this.handleDeleteContributor}
                        handleUpdateAdminStatus={this.handleUpdateAdminStatus}
                        handelAddContributor={this.handelAddContributor}
                        renderAddContributor={this.renderAddContributor}
                        addContributor={this.state.addContributor}
                        />
                    <Divider horizontal><h3>Feature List</h3></Divider>
                    <FeatureDetails projectId={projectId} user={user} contributors={contributors} history={history}/>
                </>        
                :
                <Loader active inline='centered' />
            }
            
           </>
         );
    }
}
 
export default ContributorsList;


/* just in case
  {/* <Grid centered>
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
                {contributors.length ? contributors.map((contributor,idx) =>
                     <Table.Row key={idx}  >
                     <Table.Cell collapsing>{contributor.user ? contributor.user.name : 'loading'}</Table.Cell>
                     <Table.Cell collapsing>{contributor.user ? contributor.user.email: 'notloading'}</Table.Cell>
                     <Table.Cell collapsing><Checkbox toggle onChange={()=>this.handleUpdateAdminStatus(contributor.isAdmin, idx)} checked={contributor.isAdmin}/></Table.Cell>
                     <Table.Cell collapsing key={`delete-${idx}`}><Button onClick={()=>this.handleDeleteContributor(contributor._id, contributor.user._id)} icon='eraser'/></Table.Cell>
                 </Table.Row>
                    )  : <Table.Row></Table.Row>}
            </Table.Body>
            </Table>
                    </Container>
                </Grid.Column>
            </Grid>
            
            <div>
                <Grid>
                    <Grid.Column textAlign="center">
                            <Popup content="Click to add a Contributors" 
                            trigger={<Button onClick={this.renderAddContributor} 
                                size='tiny' 
                                color='blue' 
                                icon='plus'
                                content='Contributor'
                                disabled={this.state.addContributor}
                                />} 
                            />
                    </Grid.Column>
                </Grid>       
            </div>
                <Portal onClose={this.renderAddContributor} open={this.state.addContributor} >
                        <AddContributorForm 
                            renderAddContributor={this.renderAddContributor}
                            handelAddContributor={this.handelAddContributor}
                        />
                </Portal> */
            