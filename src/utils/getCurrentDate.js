const getCurrentDate = (isoString) => {
  const date = new Date(isoString);

  const monnthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate(); // Day of month [1-31]
  const month = monnthNames[date.getMonth()]; // month name[Month number [0-11]]
  const year = date.getFullYear(); // Year number 2024

  const formattedDate = `${day} ${month} ${year}`;

  return formattedDate;
};

export default getCurrentDate;
