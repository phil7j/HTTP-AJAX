import React, { Component } from 'react'
import './App.css';
import FriendsList from './components/FriendsList';
import axios from 'axios';

class App extends Component {
  state = {
    friends: [],
    formClass: 'hidden'
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
    console.log(this.state.formHidden)
  }

  render() {
    return (
    <div className="App">
      <h1>Friends List</h1>
      <button className="togglebutton" onClick={this.toggleForm}>Add Friend Now!!</button>
      <form className={this.state.formClass}><input placeholder="Name" />
      <input placeholder="Age" />
      <input placeholder="E-mail" />
      <button>Add</button>
      </form>
      <FriendsList friends={this.state.friends}/>
    </div>
    )
};
}

export default App;
