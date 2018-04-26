import React from 'react';
import TicketListItem from './ticket_list_item';

const TicketList = ({licensePlate, tickets, selectedTicket, onTicketSelect}) => {
  if (!licensePlate) {
    return <div></div>;
  }
  if (tickets.length === 0) {
    return <h3> No tickets for {licensePlate}</h3>
  }

  const ticketItems = tickets.map((ticket) => {
    return (
      <TicketListItem
        onTicketSelect={onTicketSelect}
        key={ticket.summons_number}
        ticket={ticket}
        selectedTicket={selectedTicket}
      />
    );
  });

  return (
    <div className="ticket-list">
      <h3 className="ticket-list-header">Tickets for {licensePlate}</h3>
      <div className="list-group">{ticketItems}</div>
    </div>
  );
};

export default TicketList;
