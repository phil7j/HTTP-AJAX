import React, { Component } from 'react'
import Friend from './Friend'

export class FriendsList extends Component {
    render() {
        return (
            <div className="list">
                {this.props.friends.map( friend => {
                    return <Friend key={friend.id} friend={friend} delete={this.props.delete} editForm={this.props.editForm} />
                })}
            </div>
        )
    }
}

export default FriendsList
