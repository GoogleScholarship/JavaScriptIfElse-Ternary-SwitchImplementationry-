var num = 60;
var test;
while (num >=0){
  test = testy(num);
  console.log(test);
  num--;
}

function testy (num) {
  switch(num) {
    case 50:return ("Orbiter transfers from ground to internal power");
    case 31:return ("Ground launch sequencer is go for auto sequence start");
    case 16:return ("Activate launch pad sound suppression system");
    case 10:return ("Main engine start");
    case 6: return ("Solid rocket booster ignition and liftoff!");
    case 0: return ("Solid rocket booster ignition and liftoff!");
    default: return ("T-"+num+" seconds");
  }
}
