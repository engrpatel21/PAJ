import React from 'react'
import { List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const ContributorsList = ({contributor}) => {
    console.log(contributor)
    return ( 
    <List>
        {contributor.map((contributor, idx) =>
        <List.Item 
        as={Link} 
        to={{pathname: '/', state: {contributor}}} 
        key={contributor._id}
        >
        {contributor.contributor ? contributor.contributor : `Contributor ${idx}`}
        </List.Item>
       
        )}
        </List>
     );
}
 
export default ContributorsList;