import React, { Component } from 'react';
import {Checkbox, Table} from 'semantic-ui-react'

class ToggleProject extends Component {
    state = { 
        project: this.props.project? this.props.project : 'nt'
     }
    
    renderCheckBox = () =>{
        this.props.project.isPublic = !this.props.project.isPublic
        this.props.handleUpdateProject(this.props.project._id, this.props.project)
        
    }

    render() {
     
        return (    
        <Table>
            <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing style={{paddingTop: '1rem'}}>
                        <Checkbox toggle onClick={this.renderCheckBox} checked={this.props.project.isPublic}/>
                    </Table.Cell>
                    <Table.Cell style={{fontSize: '1.2rem', padding: '0 0'}}>
                        Your your project is set to {!this.props.project.isPublic? 'Private' : 'Public' }
                    </Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table> );
    }
}
 
export default ToggleProject;