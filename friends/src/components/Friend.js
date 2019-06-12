import React, { Component } from 'react'

export class Friend extends Component {
    render() {
        return (
            <div className="friendCard">
                <h3>{this.props.friend.name}</h3>
                <p>Age: {this.props.friend.age}</p>
                <p>E-mail: {this.props.friend.email}</p>
            </div>
        )
    }
}

export default Friend
