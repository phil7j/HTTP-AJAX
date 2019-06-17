import React, { Component } from 'react'

export class Friend extends Component {
    render() {
        return (
            <div className="friendCard">
                <h3>{this.props.friend.name}</h3>
                <p>Age: {this.props.friend.age}</p>
                <p>E-mail: {this.props.friend.email}</p>
                <button onClick={() => this.props.editForm(this.props.friend)}>Edit</button>
                <button onClick={() => this.props.delete(this.props.friend.id)}>Delete</button>
            </div>
        )
    }
}

export default Friend
