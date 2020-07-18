import React, { Component } from "react";
import Header from '../header/Header';
import Table from '../table/Table';
import Search from '../search/Search';
import '../container/Container.css';





let flag = 0;


class Container extends Component {
  constructor(props) {
    super(props)
    this.state = { friends: props.friends, permfriends: props.friends, flag, search: "", friendSearch: "" }

  }

  firstHandleClick = (e) => {
    e.preventDefault();
    console.log(this.state.flag);
    if (this.state.flag === 0 || this.state.flag === -1) {
      this.setState({
        flag: 1,
        friends: this.state.permfriends.sort((a, b) => a.firstName.localeCompare(b.firstName))
      })
      
    } else if (this.state.flag === 1) {
      this.setState({
        flag: -1,
        friends: this.state.permfriends.sort((a, b) => b.firstName.localeCompare(a.firstName))
      })
      
    }
  }

  lastHandleClick = (e) => {
    e.preventDefault();
    console.log(this.state.flag);
    if (this.state.flag === 0 || this.state.flag === -1) {
      this.setState({
        flag: 1,
        friends: this.state.permfriends.sort((a, b) => a.lastName.localeCompare(b.lastName))
      })
      
    } else if (this.state.flag === 1) {
      this.setState({
        flag: -1,
        friends: this.state.permfriends.sort((a, b) => b.lastName.localeCompare(a.lastName))
      })
      
    }
  }

  phoneHandleClick = (e) => {
    e.preventDefault();
    console.log(this.state.flag);
    if (this.state.flag === 0 || this.state.flag === -1) {
      this.setState({
        flag: 1,
        friends: this.state.permfriends.sort((a, b) => a.phoneNumber - b.phoneNumber)
      })
      
    } else if (this.state.flag === 1) {
      this.setState({
        flag: -1,
        friends: this.state.permfriends.sort((a, b) => b.phoneNumber - a.phoneNumber)
      })
      
    }
  }

  searchHandleClick = (e) => {
    e.preventDefault();
    const friendSearch = this.state.permfriends.filter(friend => (friend.lastName.toLowerCase() === this.state.search.toLowerCase()))
    console.log(friendSearch)
    this.setState({
      friends: friendSearch
    })
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }



  render() {
    return (
      <>
        <center>
          <Search
            handleInputChange={this.handleInputChange}
            searchHandleClick={this.searchHandleClick}
          />
        </center>
        <table className="friend-table">
          <Header
            firstHandleClick={this.firstHandleClick}
            lastHandleClick={this.lastHandleClick}
            phoneHandleClick={this.phoneHandleClick} />
          <Table friends={this.state.friends} />
        </table>
      </>
    );

  }
}

export default Container;