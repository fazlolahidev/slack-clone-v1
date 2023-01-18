export const timestampToDate = (timeSt) => {
  const time = timeSt.data().timestamp;

  const fullDate = time.toDate();
  const shortDate = fullDate.toDateString();
  const shortTime = fullDate.toLocaleTimeString();

  return {shortDate, shortTime, fullDate}
}