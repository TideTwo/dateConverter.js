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
  let unitsMS = [0, 0, 0, 0, 0];
  units[0] = date / mulCalc(multipliers, 5);
  unitsMS[0] = Math.floor(units[0]) * mulCalc(multipliers, 5);
  units[1] = (date - unitsMS[0]) / mulCalc(multipliers, 4);
  unitsMS[1] = Math.floor(units[1]) * mulCalc(multipliers, 4);
  units[2] = (date - unitsMS[0] - unitsMS[1]) / mulCalc(multipliers, 3);
  unitsMS[2] = Math.floor(units[2]) * mulCalc(multipliers, 3);
  units[3] = (date - unitsMS[0] - unitsMS[1] - unitsMS[2]) / mulCalc(multipliers, 2);
  unitsMS[3] = Math.floor(units[3]) * mulCalc(multipliers, 2);
  units[4] = (date - unitsMS[0] - unitsMS[1] - unitsMS[2] - unitsMS[3]) / mulCalc(multipliers, 1);
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
