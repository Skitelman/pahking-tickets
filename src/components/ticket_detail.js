import React from 'react';

const TicketDetail = ({ticket}) => {
  if (!ticket) {
    return <div></div>;
  }
  return (
    <div>
      <p className="lead">
        Violation occured at {ticket.violation_time} on {ticket.issue_date}
      </p>
      <p>
        Fined ${ticket.fine_amount} (amount paid ${ticket.payment_amount}).
      </p>
      { ticket.violation_status &&
        <p>
          {ticket.violation_status}
        </p>
      }
      <p>
        <a href={ticket.summons_image} target="_blank">View full ticket here</a>
      </p>
    </div>
  );
}

export default TicketDetail;
