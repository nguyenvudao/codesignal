/*

Ticket numbers usually consist of an even number of digits.
A ticket number is considered lucky if the sum of the first half of
the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

*/

const isLucky = (ticket) => {
  const strTicket = ticket.toString();
  const ticketLength = (strTicket.length) / 2;
  let firstTicket = 0;
  let lastTicket = 0;
  for (let i = 0; i < ticketLength; i++) {
    firstTicket += parseInt(strTicket[i], 10);
  }
  for (let i = ticketLength; i < strTicket.length; i++) {
    lastTicket += parseInt(strTicket[i], 10);
  }
  return firstTicket === lastTicket;
};

console.log(isLucky(134008));
// const ticket = 1230;
// console.log(ticket.toString().length);

// isLucky(1230);