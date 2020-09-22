import React from 'react'
import { Image, Segment } from 'semantic-ui-react'
import P from './P.JPG'
import A from './A.JPG'
import J from './J.jpeg'

const Staff = () => (
    <Segment>
        <Image src={P} size='medium' circular />
        <Image src={A} size='medium' circular />
        <Image src={J} size='medium' circular />

    </Segment>
      )

export default Staff