import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';
import SearchBar from './components/search_bar';
import TicketList from './components/ticket_list';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { licensePlate: null, tickets: [], selectedTicket: null, loadingTickets: false };
  }

  ticketSearch(licensePlate) {
    this.setState({licensePlate, loadingTickets: true })
    Axios.get(`https://data.cityofnewyork.us/resource/uvbq-3m68.json?plate=${licensePlate}`)
      .then(res => {
        this.setState({ tickets: res.data, loadingTickets: false })
      })
      .catch(function (error) {
        this.setState({ loadingTickets: false })
        console.log(error);
      });
  }

  resetSelectedTicket() {
    this.setState({selectedTicket: null});
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          onSearchEnter={(licensePlate) => this.ticketSearch(licensePlate)}
          resetSelectedTicket={() => this.resetSelectedTicket()}/>
        <TicketList
          licensePlate={this.state.licensePlate}
          loadingTickets={this.state.loadingTickets}
          tickets={this.state.tickets}
          selectedTicket={this.state.selectedTicket}
          onTicketSelect={(selectedTicket) => this.setState({selectedTicket})}
        />
      </div>
    );
  }
}

export default App;
