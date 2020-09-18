import React from 'react';
import { Divider, Segment, Image } from 'semantic-ui-react'
import logo from './logo.png';
import "./LandingPage.css"

const LandingPage = () => (
    <Segment>
        <h1>Welcome to PA-J</h1>
        <Divider>
        </Divider>
        <Image src={logo} size='large' centered />
        <Divider horizontal>
            About PAJ
        </Divider>
        <p className="about">
        Welcome to PA-J (Pronounced page), a practical and feature-rich project management platform.
        </p>
    </Segment>
    )

export default LandingPage;
