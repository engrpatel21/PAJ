import React from 'react'
import { List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const ContributorsList = ({contributor}) => {
    return ( 
    <List>
       
        <List.Item 
        as={Link} 
        to={{pathname: '/', state: {contributor}}} 
        key={contributor._id}
        >
        {contributor.name ? contributor.name : `notloading`}
        </List.Item>
       
        </List>
     );
}
 
export default ContributorsList;