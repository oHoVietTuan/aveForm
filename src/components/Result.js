import React from 'react'
import Alert from 'react-bootstrap/Alert'

export default class Result extends React.Component{
    render(){
        return(
            <Alert variant='primary'>
                {this.props.value} {this.props.duration}
            </Alert>
        )
    }
}