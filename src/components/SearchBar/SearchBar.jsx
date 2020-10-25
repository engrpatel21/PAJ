import React from 'react'
import { Input, Grid } from 'semantic-ui-react'

const SearchBox = (props) => {
    return(
        <Grid>
            <Grid.Column textAlign="center">
                <Input 
                    huge icon='search' 
                    focus 
                    placeholder='Search Here...' 
                    type='text' 
                    value ={null}
                    onChange={props.handleChange}
                    />
            </Grid.Column>
        </Grid>
                    
    )
}

export default SearchBox