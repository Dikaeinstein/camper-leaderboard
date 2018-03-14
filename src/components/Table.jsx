import React, { Component } from 'react';
import axios from 'axios';
import TableHead from './TableHead';
import TableBody from './TableBody';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campers: [],
    };
    this.campersRecent = [];
    this.campersAlltime = [];
    this.handleClick = this.handleClick.bind(this);
    this.urlRecent = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';
    this.urlAlltime = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
  }

  componentDidMount() {
    this.getRecentCampers();
    this.getAlltimeCampers();
  }

  getRecentCampers() {
    axios.get(this.urlRecent)
      .then((res) => {
        this.campersRecent = res.data.sort((a, b) => b.recent - a.recent);
        if (this.state.campers.length === 0) {
          this.setState({ campers: this.campersRecent });
        }
      })
      .catch(() => undefined);
  }

  getAlltimeCampers() {
    axios.get(this.urlAlltime)
      .then((res) => {
        this.campersAlltime = res.data.sort((a, b) => b.alltime - a.alltime);
      })
      .catch(() => undefined);
  }

  handleClick(campers) {
    if (campers === 'recent') {
      this.setState({ campers: this.campersRecent });
    } else {
      this.setState({ campers: this.campersAlltime });
    }
  }

  render() {
    return (
      <table
        className="table table-striped table-bordered table-dark mt-5"
      >
        <TableHead onClick={this.handleClick} />
        <TableBody campers={this.state.campers} />
      </table>
    );
  }
}

export default Table;
