import React, { Component } from 'react';
import TicketListItem from './ticket_list_item';

class TicketList extends Component {
  constructor(props) {
    super(props)
  }

  ticketItems() {
    const ticketItems = this.props.tickets.map((ticket) => {
      return (
        <TicketListItem
          onTicketSelect={this.props.onTicketSelect}
          key={ticket.summons_number}
          ticket={ticket}
          selectedTicket={this.props.selectedTicket}
        />
      );
    });
    return ticketItems;
  }

  render() {
    if (this.props.loadingTickets) {
      return <div>Loading Tickets ...</div>
    }
    if (!this.props.licensePlate) {
      return <div></div>;
    }
    if (this.props.tickets.length === 0) {
      return <h3> No tickets for {this.props.licensePlate}</h3>
    }
    return (
      <div className="ticket-list">
        <h3 className="ticket-list-header">Tickets for {this.props.licensePlate}</h3>
        <div className="list-group">{this.ticketItems()}</div>
      </div>
    );
  }
}

export default TicketList;
