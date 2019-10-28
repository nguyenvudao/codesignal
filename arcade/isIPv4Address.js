/**
 * An IP address is a numerical label assigned to each device (e.g., computer, printer)
 * participating in a computer network
 * that uses the Internet Protocol for communication.
 * There are two versions of the Internet protocol,
 * and thus two versions of addresses. One of them is the IPv4 address.
Given a string, find out if it satisfies the IPv4 address naming rules.
 */

function isIPv4Address(inputString) {
  const octet = '(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]?|0)';
  const regex = new RegExp(`^${octet}\\.${octet}\\.${octet}\\.${octet}$`);
  return regex.test(inputString);
}

const inputString = '172.16.254.1';
console.log(isIPv4Address(inputString));
