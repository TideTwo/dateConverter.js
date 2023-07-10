function dateConvert(date) {
  function multiplierCalc(multipliers, amount) {
    let calculated = 1;
    for (let index = 0; index < amount; index++) {
      calculated *= multipliers[index];
    }
    return calculated;
  }
  const multipliers = [1000, 60, 60, 24, 7];
  const weeks = date / multiplierCalc(multipliers, 5);
  const weeksMS = Math.floor(weeks) * multiplierCalc(multipliers, 5);
  const days = (date - weeksMS) / multiplierCalc(multipliers, 4);
  const daysMS = Math.floor(days) * multiplierCalc(multipliers, 4);
  const hours = (date - weeksMS - daysMS) / multiplierCalc(multipliers, 3);
  const hoursMS = Math.floor(hours) * multiplierCalc(multipliers, 3);
  const minutes = (date - weeksMS - daysMS - hoursMS) / multiplierCalc(multipliers, 2);
  const minutesMS = Math.floor(minutes) * multiplierCalc(multipliers, 2);
  const seconds = (date - weeksMS - daysMS - hoursMS - minutesMS) / multiplierCalc(multipliers, 1);
  return [Math.floor(weeks), Math.floor(days), Math.floor(hours), Math.floor(minutes), Math.floor(seconds)];
}

// Usage:
//1. have date (1 week 10 hrs 12sec) (in this example)
const date = new Date(604800000 + 36000000 + 12000);
//2. convert to separate units (weeks,days,hours,minutes,seconds)
const convertedDate = dateConvert(date);
console.log(convertedDate); //result = [1,0,10,0,12]
export default dateConvert;
