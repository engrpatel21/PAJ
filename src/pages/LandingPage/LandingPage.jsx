import React from 'react';
import { Divider, Segment, Image } from 'semantic-ui-react'
import logo from './logo.png';

const LandingPage = () => (
    <Segment>
        <Image src={logo} size='xxlarge' centered />
        <p>
        Welcome to PA-J (Pronounced page), a practical and feature-rich project management platform.
        </p>
    </Segment>
    )

export default LandingPage;
