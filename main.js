var start;

for (var num = 60; num >=0; num--){
  start =
    (num === 50) ? console.log("Orbiter transfers from ground to internal power"):
      (num === 31) ? console.log("Ground launch sequencer is go for auto sequence start"):
        (num === 16) ? console.log("Activate launch pad sound suppression system"):
          (num === 10) ? console.log("Activate main engine hydrogen burnoff system"):
            (num === 6)  ? console.log ("Main engine start"):
              (num === 0) ? console.log("Solid rocket booster ignition and liftoff!"):
                console.log("T-"+num+" seconds");
}


