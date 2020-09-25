import React, {Component} from 'react'
import { Grid, Card, Message, Divider} from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import { Link } from 'react-router-dom'
import "./AllProjects.css";

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
            <h1>All Projects Page</h1>
            <Divider>
            </Divider>
            <div className='ProjectList-grid'>
                {this.state.userProjects.map((project)=>
                    <div key={project._id}>
                        <Card 
                            style={{
                                height:'100px',
                                width: '300px',
                                color:'white',
                                textShadow:'#1b1c1d 2px 2px',
                                fontSize:'20px',
                                textAlign:'center',
                                fontWeight: 'bold',
                                backgroundColor:'cornflowerblue',
                                boxShadow:'grey 2px 2px',
                                marginBottom:'20px',
                                display:'flex',
                                flexFlow:'column nowrap',
                                justifyContent:'center',
                                }}               
                        >
                        <h3><Link
                        style={{
                            color: 'white'
                            }}
                            to={{
                            pathname: `/projectdetails/${project._id}`
                            }}
                            >
                            {project.name ? project.name : 'Link to Project'}
                        </Link></h3>
                        Project Description:
                        <br></br>
                        {project.description}
                        </Card>
                        <br></br>
                    </div>  
                )}
            </div>
            </>                  
        )
    }
}

export default AllUserProjects

// style={{
//     width: '100%',
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gridGap: '10px',
//     justifyItems: 'center',
//     margin:'10px 20px 200px',
//     padding: '110px'
// }}