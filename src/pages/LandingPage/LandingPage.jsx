import React from 'react';
import { Grid, Image } from 'semantic-ui-react'
import logo from './logo.png';

const LandingPage = (props) => {
    return (
        <>
        <Grid verticalAlign='middle' columns={2} centered>
            <Grid.Column>
                <Image src = {logo} />
            </Grid.Column>
        </Grid>
        <h1>Landing Page</h1>
        <div>
            Welcome to PA-J (Pronounced page), a practical and feature-rich project management platform.
        </div>
        <br></br>
        <div>
        <a href="/projectboard">To Project Board (Temporary)</a>
        </div>
        <br></br>
        <div>
        <a href="/projectdetails">To Project Details (Temporary)</a>
        </div>

        {/* <h1>To Project Board (Temp)</h1>
            {this.props.projectBoard.map((projectboard) =>
            <div key={projectboard._id}>
                <Link
                to={{
                    pathname: "/projectboard",
                    state: { projectboard }
                    }}
                >
                {projectboard.name}
                </Link><br></br>
                </div>
            )} */}
        </>
    )
}

export default LandingPage;
