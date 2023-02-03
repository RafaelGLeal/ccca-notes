/*
exports.calc = function (dist: any, d: Date) {
  if (d.getHours() >= 22) {
    return dist * 3.9;
  } else {
    //sunday
    if (d.getDay() === 0) {
      return dist * 2.9;
    } else {
      return dist * 2.1;
    }
  }
};

*/
const OVERNIGHT_RATE = 3.9;
const SUNDAY_RATE = 2.9;
const NORMAL_RATE = 2.1;
const istOvernight = (date: Date) => date.getHours() <= 22;
const isSunday = (date: Date) => date.getDay() === 0;

export function calculateRide(distance: number, date: Date): number {
  if (distance < 0) throw new Error("Valor inválido");
  if (istOvernight(date)) return distance * OVERNIGHT_RATE;
  if (isSunday(date)) return distance * SUNDAY_RATE;
  return distance * NORMAL_RATE;
}
