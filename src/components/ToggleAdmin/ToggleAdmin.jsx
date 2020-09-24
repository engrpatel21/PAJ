import React from 'react';
import {Checkbox} from 'semantic-ui-react'

const ToggleAdmin = ({contributor, handleUpdateContributor}) => {
    const renderChangeAdmin =() => {
        contributor.isAdmin = !contributor.isAdmin
        handleUpdateContributor(contributor._id, contributor)
    }
    return ( 
        <Checkbox onChange={renderChangeAdmin} checked={contributor.isAdmin} toggle/>
     );
}
 
export default ToggleAdmin;