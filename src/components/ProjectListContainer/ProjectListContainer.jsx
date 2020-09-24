import React, {Component} from 'react'
import { Grid, Card, Message } from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import { Link } from 'react-router-dom'

class ProjectListContainer extends Component {
    state = {
      userProjects: [],
    };
    async componentDidMount(){
        const userProjects = await userApi.getUserProjects(this.props.user)
        this.setState({userProjects})
    }

    render() {
        const {user} = this.props
        return (
            <>
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
            </>
        )
    }
}

export default ProjectListContainer