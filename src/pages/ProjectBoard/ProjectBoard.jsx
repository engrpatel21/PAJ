import React from 'react';
// import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import TaskCard from '../../components/TaskCard/TaskCard'
import TaskCardEM from '../../components/TaskCard(EMode)/TaskCard(EMode)'
import { Grid, Divider, Icon, Button } from 'semantic-ui-react'
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
                    <TaskCard/>
                    <TaskCardEM/>
                    </Grid.Column>
                    <Grid.Column>
                <h1>Completed:</h1>
                <TaskCard />
            </Grid.Column>
            <Grid.Column>
                <h1>Backlog:</h1>
                <TaskCard />
                <TaskCard/>
                <TaskCardEM/>
                <br></br>
                <br></br>
                <div>
                <Grid>
                <Grid.Column textAlign="center">
                    <Button size='massive' color='blue'>
                        <Grid.Column textAlign="center">
                            <Icon name='plus'/>
                        </Grid.Column>
                    </Button>
                </Grid.Column>
                </Grid>
                </div>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </>
)


export default ProjectBoard;