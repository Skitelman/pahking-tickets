import React, { Component } from 'react';
import TicketDetail from './ticket_detail';

class TicketListItem extends Component {
  constructor(props) {
    super(props)
  }

  isSelectedTicket() {
    const selected = this.props.selectedTicket === this.props.ticket;
    return selected;
  }

  isActive() {
    const active = this.isSelectedTicket() ? 'active' : '';
    return active;
  }

  render () {
    const {ticket, onTicketSelect, selectedTicket } = this.props;
    return (
      <div>
        <div
          className={`list-group-item list-group-item-action ${this.isActive()} ticket-list-item`}
          onClick={() => onTicketSelect(ticket)}>
          {ticket.violation}
        </div>
        { this.isSelectedTicket() &&
          <div className={`list-group-item list-group-item-action ticket-list-item`}>
            <TicketDetail ticket={selectedTicket} />
          </div>
        }
      </div>
    );
  }
}

export default TicketListItem;
