import React from 'react';
import { Message, Icon, Divider, Segment, Image } from 'semantic-ui-react'
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
        <Message icon>
        <Icon name='crosshairs' loading />
        <p className="about">
        PA-J (Pronounced page), is a practical and feature-rich project management platform. If you are tired of complex and costly project management solutions, PA-J is the platform for that you need.
        </p>
        </Message>
    </Segment>
    )

export default LandingPage;
