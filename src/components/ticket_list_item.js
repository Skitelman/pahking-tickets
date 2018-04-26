import React from 'react';
import TicketDetail from './ticket_detail';


const TicketListItem = ({ticket, selectedTicket, onTicketSelect}) => {
  const active = selectedTicket === ticket ? 'active' : '';

  return (
    <div>
      <div
        className={`list-group-item list-group-item-action ${active} ticket-list-item`}
        onClick={() => onTicketSelect(ticket)}>
        {ticket.violation}
      </div>
      { selectedTicket === ticket &&
        <div className={`list-group-item list-group-item-action ticket-list-item`}>
          <TicketDetail ticket={selectedTicket} />
        </div>
      }
    </div>
  );
};

export default TicketListItem;
