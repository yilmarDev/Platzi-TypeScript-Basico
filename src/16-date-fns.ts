import { subDays, format } from "date-fns";

const date = new Date(1988, 1, 5);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');


console.log('RTA: ', rta);
console.log('STR: ', str);
