import React from 'react'
import { List} from 'semantic-ui-react'
import {Link} from 'react-router-dom'



const ContributorsList = ({contributors}) => {
    return ( 
    <List>
        {contributors ? contributors.map(contributor =>
         <List.Item 
         as={Link} 
         to={{pathname: `/profile/${contributor._id}`}} 
         key={contributor._id}
         >
         {contributor.name ? contributor.name : `notloading`}
         </List.Item>
       
        ): 'not loading'}
       </List>
     );
}
 
export default ContributorsList;