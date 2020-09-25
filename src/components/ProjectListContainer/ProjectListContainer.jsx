import React, {Component} from 'react'
import { Grid, Card, Message, Icon } from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import { Link } from 'react-router-dom'
import './ProjectListContainer'

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
            <Grid.Column width={3} style={{
                width: '100%',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gridGap: '10px',
                justifyItems: 'center',
                margin:'10px 20px 200px',
                padding: '-110px',
                left:'200px'

            }}>
            {this.state.userProjects.map((project)=>
                <div key={project._id}>
                    <Card
                    className='container' 
                    style={{
                        height:'100px',
                        color:'seashell',
                        textShadow:'#1b1c1d 2px 2px',
                        fontSize:'20px',
                        textAlign:'center',
                        fontWeight: 'bold',
                        backgroundColor:'cornflowerblue',
                        boxShadow:'gray 2px 2px',
                        marginBottom:'20px',
                        display:'flex',
                        flexFlow:'column nowrap',
                        justifyContent:'center',
                        opacity:'.8',
                        bottom: '100px',
                        left:'200px'
                        }} 
                        as={Link}
                        to={{
                        pathname: `/projectdetails/${project._id}`
                        }}
                        >
                        {project.name ? project.name : 'Link to Project'}
                        <Icon disabled name='users' 
                        style={{
                            position:'absolute',
                            top:'70px',
                            left:'7px'
                        }}
                        />
                            
                    </Card>
                        <br></br>
                </div>
                    )}
            </Grid.Column>
            </>
        )
    }
}

export default ProjectListContainer