import React from 'react';
import { Link } from "react-router-dom"
// import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import { Grid, Image, Card, Button, Divider } from 'semantic-ui-react'
import "./ProjectBoard.css";

const ProjectBoard = () => (
    <>
    <h1>Project Board Page</h1>
    <Divider>
    </Divider>
    <Grid columns={3} divided>
        <Grid.Row>
            <Grid.Column>
                <h1>To-Do:</h1>
                <Card.Group centered items>
                    <Card>
                        <Card.Content>
                            <Card.Header>Placeholder Project</Card.Header>
                            <Card.Meta>Head of Project Here</Card.Meta>
                            <Card.Description>
                            Specific project objectives will go <strong>IN THIS AREA</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                DETAILS
                            </Button>
                            <Button basic color='red'>
                                DELETE
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
                    </Grid.Column>
                    <Grid.Column>
                <h1>Completed:</h1>
                <Card.Group centered items>
                    <Card>
                        <Card.Content>
                            <Card.Header>Placeholder Project</Card.Header>
                            <Card.Meta>Head of Project Here</Card.Meta>
                            <Card.Description>
                            Specific project objectives will go <strong>IN THIS AREA</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                DETAILS
                            </Button>
                            <Button basic color='red'>
                                DELETE
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid.Column>
            <Grid.Column>
                <h1>Backlog:</h1>
                <Card.Group centered items>
                    <Card>
                        <Card.Content>
                            <Card.Header>Placeholder Project</Card.Header>
                            <Card.Meta>Head of Project Here</Card.Meta>
                            <Card.Description>
                            Specific project objectives will go <strong>IN THIS AREA</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                DETAILS
                            </Button>
                            <Button basic color='red'>
                                DELETE
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
                <Card.Group centered items>
                    <Card>
                        <Card.Content>
                            <Card.Header>Placeholder Project</Card.Header>
                            <Card.Meta>Head of Project Here</Card.Meta>
                            <Card.Description>
                            Specific project objectives will go <strong>IN THIS AREA</strong>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <div className='ui two buttons'>
                            <Button basic color='green'>
                                DETAILS
                            </Button>
                            <Button basic color='red'>
                                DELETE
                            </Button>
                            </div>
                        </Card.Content>
                    </Card>
                </Card.Group>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </>
)


export default ProjectBoard;