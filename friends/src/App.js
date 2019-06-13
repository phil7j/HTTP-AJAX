import React, { Component } from 'react'
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
    formClass: 'hidden',
    friend: {
      name: '',
      age: '',
      email: ''
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(response => this.setState({friends: response.data}))
    .catch(err => console.log(err))

  }

  toggleForm = e => {
    const css = (this.state.formClass === 'hidden') ? 'show' : 'hidden'
    this.setState( {
      formClass: css
    })
  }

  changeHandler = e => {
    this.setState({friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value
    }})

  }

  addFriend = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/friends', this.state.friend)
    .then( res => this.setState(
      {friends: res.data,
        friend: {
        name: '',
      age: '',
      email: '',
      id: ''
      }})
    )
    .catch( err =>  console.log(err)
    )
  }

  deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res => this.setState({friends: res.data}))
    .catch(err => console.log(err))
  }

  editFriend = e => {
    e.preventDefault()
    axios.put(`http://localhost:5000/friends/${this.state.friend.id}`, this.state.friend)
    .then( res => this.setState(
      {friends: res.data,
        friend: {
        name: '',
      age: '',
      email: '',
      id: ''
      }})
    )
    .catch( err =>  console.log(err)
    )
  }

    editForm = data => {
      this.setState({friend: {
        ...data
      }})
    }

  render() {
    return (
    <div className="App">
      <h1>Friends List</h1>
      <button className="togglebutton" onClick={this.toggleForm}>Add Friend Now!!</button>
      <form className={this.state.formClass}>
      <input onChange={this.changeHandler} value={this.state.friend.name} name="name" placeholder="Name" />
      <input onChange={this.changeHandler} value={this.state.friend.age} name="age" placeholder="Age" />
      <input onChange={this.changeHandler} value={this.state.friend.email} name="email" placeholder="E-mail" />
      <button onClick={this.addFriend}>Add</button>
      <button onClick={this.editFriend}>Update</button>
      </form>
      <FriendsList delete={this.deleteFriend} friends={this.state.friends} editForm={this.editForm}/>
    </div>
    )
};
}

export default App;
