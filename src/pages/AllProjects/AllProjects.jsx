import React, {Component} from 'react'
import { Card, Divider} from 'semantic-ui-react'
import * as userApi from "../../services/userService";
import SearchBar from '../../components/SearchBar/SearchBar'
import { Link } from 'react-router-dom'
import "./AllProjects.css";

class AllUserProjects extends Component {
    state = {
      userProjects: [],
      // Added for search.
      searchField: ''
    };
    async componentDidMount(){
        const userProjects = await userApi.getAllUserProjects()
        this.setState({userProjects})
    }

    render() {
        // Added searchField for search.
        const {userProjects, searchField} = this.state
        // Added for search.
        const filteredProjects = userProjects.filter(project =>(
            project.name.toLowerCase().includes(searchField.toLowerCase())
        ))
        return (
            <>
            <body style={{
            backgroundColor:'#1b1c1d',
            height:'950px'
             }}>
            <Divider>
            </Divider>  
            <SearchBar 
                    handleChange={(e) => this.setState({searchField: e.target.value})
                    }/>
            <br></br>
            <div className='ProjectList-grid'>
                {filteredProjects.map((project)=>
                    <div key={project._id}>
                        <Link
                        style={{
                            color: 'white'
                            }}
                            to={{
                            pathname: `/projectdetails/${project._id}`
                            }}
                            >
                        {project.isPublic ?  '': ''}
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
                        <h3>
                            {project.name ? project.name : 'Link to Project'}
                        </h3>
                        Project Description:
                        <br></br>
                        {project.description}
                        
                        </Card>
                        </Link>
                        <br></br>
                    </div>  
                )}
            </div>
            </body>
            </>                  
        )
    }
}

export default AllUserProjects