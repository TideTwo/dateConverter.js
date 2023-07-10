function dateConvert(date) {
  const weeks = date / (1000 * 60 * 60 * 24 * 7);
  const weeksMS = Math.floor(weeks) * (1000 * 60 * 60 * 24 * 7);
  const days = (date - weeksMS) / (1000 * 60 * 60 * 24);
  const daysMS = Math.floor(days) * (1000 * 60 * 60 * 24);
  const hours = (date - weeksMS - daysMS) / (1000 * 60 * 60);
  const hoursMS = Math.floor(hours) * (1000 * 60 * 60);
  const minutes = (date - weeksMS - daysMS - hoursMS) / (1000 * 60);
  const minutesMS = Math.floor(minutes) * 1000 * 60;
  const seconds = (date - weeksMS - daysMS - hoursMS - minutesMS) / 1000;
  return [Math.floor(weeks), Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(seconds)];
}

// Usage:
//1. have date (1 week 10 hrs 12sec) (in this example)
const date = new Date(604800000 + 36000000 + 12000);
//2. convert to separate units (weeks,days,hours,minutes,seconds)
const convertedDate = dateConvert(date);
console.log(convertedDate); //result = [1,0,10,0,12]
export default dateConvert;
