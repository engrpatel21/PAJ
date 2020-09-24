import React, {Component} from 'react'
import { Grid, Card, Message, Divider} from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import { Link } from 'react-router-dom'

class AllUserProjects extends Component {
    state = {
      userProjects: [],
    };
    async componentDidMount(){
        const userProjects = await userApi.getAllUserProjects()
        this.setState({userProjects})
    }

    render() {
        const {user} = this.props
        return (
            <>
            <h1>Message Board Page</h1>
            <Divider>
            </Divider>
                <Grid centered columns={2} divided>
                    <Grid.Row>
                        
                            <Grid.Column width={3}>
                                <Message floating>
                                    {this.state.userProjects.map((project)=>
                                        <div key={project._id}>
                                            <Card color='black'>
                                            <Link
                                                to={{
                                                pathname: `/projectdetails/${project._id}`
                                                }}
                                                >
                                                {project.name ? project.name : 'Link to Project'}
                                            </Link>
                                            </Card>
                                            <br></br>
                                        </div>
                                    )}
                                </Message>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </>
        )
    }
}

export default AllUserProjects