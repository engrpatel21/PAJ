import React from 'react';

// import ProjectBoard from '../../pages/ProjectBoard/ProjectBoard'
import FeatureCard from '../../components/FeatureCard/FeatureCard'
import { Grid, Divider } from 'semantic-ui-react'
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
                    <FeatureCard/>
                    </Grid.Column>
                    <Grid.Column>
                <h1>Completed:</h1>
                <FeatureCard />
            </Grid.Column>
            <Grid.Column>
                <h1>Backlog:</h1>
                <FeatureCard />
                <FeatureCard/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </>
)


export default ProjectBoard;