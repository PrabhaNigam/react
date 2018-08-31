import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      username: '',
      id: '',
      mobile: '',
      address: '',
      purpose: '',
      date: ''
    }
  }

  logIn = (event) => {
    event.preventDefault()
    this.setState({
      isLoggedIn: true
    })
  }

  logOut = (event) => {
    event.preventDefault()
    this.setState({
      isLoggedIn: false,
      username: '',
      id: '',
      mobile: '',
      address: '',
      purpose: '',
      date: ''
    })
  }

  usernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  idChange = (event) => {
    this.setState({
      id: event.target.value
    })
  }
  mobileChange = (event) => {
    this.setState({
      mobile: event.target.value
    })
  }
  addressChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  purposeChange = (event) => {
    this.setState({
      purpose: event.target.value
    })
  }
  dateChange = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  render() {
    return (
      <div className='App'>       
        <h2>Customer Registration form</h2>
        <div className='LoggedOut'>
          <form onSubmit={this.logIn}>
            <center>
              <table border="1">
                <input type='text'placeholder='Username' value={this.state.username} onChange={this.usernameChange} required /> <br />
                <input type='email' placeholder='Email id' value={this.state.id} onChange={this.idChange} required /> <br />
                <input type='text' placeholder='Mobile Number' value={this.state.mobile} onChange={this.mobileChange} required /> <br />
                <input type='text'placeholder='Address'value={this.state.address} onChange={this.addressChange} required /> <br />
                <input type='text'placeholder='Purpose Of Visit' value={this.state.purpose} onChange={this.purposeChange} required /> <br />
                <input type='date' placeholder='date Of Visit' value={this.state.date} onChange={this.dateChange} required /> <br />
                <input type="submit" class="btn btn-success" value="Add" />
              </table>
            </center>
          </form>
        </div>

        <div>
          <h2>Customers Visit Information</h2>
          Name: <strong>{this.state.username}</strong><br />
          Email Id: <strong>{this.state.id}</strong><br />
          Mobile Number: <strong>{this.state.mobile}</strong><br />
          Address: <strong>{this.state.address}</strong><br />
          Description/Purpose: <strong>{this.state.purpose}</strong><br />
          Date Of Visit: <strong>{this.state.date}</strong><br />
          <input type="submit" onClick={this.logOut} value="Delete" />
        </div>
      </div>
    );
  }
}

export default App;