//Erik

const out = (...str) => console.log(...str);


function showType(lst) {
  out("Starter udskrivning");
  for (const obj of lst) {
    out(obj + " er af typen: " + typeof obj);
  }
}

let b;
let d = null;
const arr = [d, b, 1, [2.2, 1, "hej"], "test", 3 < 4, {"obj": "1"}];
//arr.forEach(showType);
showType(arr);
