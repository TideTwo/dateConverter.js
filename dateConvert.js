function dateConvert(date) {
  function mulCalc(multipliers, level) {
    let calculated = 1;
    for (let index = 0; index < level; index++) {
      calculated *= multipliers[index];
    }
    return calculated;
  }
  const multipliers = [1000, 60, 60, 24, 7];
  let units = [0, 0, 0, 0, 0];
  let accumulatedMS = 0;
  units[0] = date / mulCalc(multipliers, 5);
  accumulatedMS += Math.floor(units[0]) * mulCalc(multipliers, 5);
  units[1] = (date - accumulatedMS) / mulCalc(multipliers, 4);
  accumulatedMS += Math.floor(units[1]) * mulCalc(multipliers, 4);
  units[2] = (date - accumulatedMS) / mulCalc(multipliers, 3);
  accumulatedMS += Math.floor(units[2]) * mulCalc(multipliers, 3);
  units[3] = (date - accumulatedMS) / mulCalc(multipliers, 2);
  accumulatedMS += Math.floor(units[3]) * mulCalc(multipliers, 2);
  units[4] = (date - accumulatedMS) / mulCalc(multipliers, 1);
  return units.map((unit) => {
    return Math.floor(unit);
  });
}

// Usage:
//1. have date (1 week 10 hrs 12sec) (in this example)
const date = new Date(604800000 + 36000000 + 12000);
//2. convert to separate units (weeks,days,hours,minutes,seconds)
const convertedDate = dateConvert(date);
console.log(convertedDate); //result = [1,0,10,0,12]
export default dateConvert;
