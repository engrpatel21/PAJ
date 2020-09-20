import React from 'react'
import { List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const FeatureDetails = ({features, projectId}) => {
    console.log('infeatures', projectId)
    return ( 
       
    <List>
        {features.map((feature, idx) =>
        <List.Item 
        as={Link} 
        to={{pathname: `/projectboard/${projectId}/${feature._id}`}} 
        key={feature._id}
        >
        {feature.feature ? feature.feature : `Feature ${idx}`}
        </List.Item>
       
        )}
        </List>
     );
}
 
export default FeatureDetails;