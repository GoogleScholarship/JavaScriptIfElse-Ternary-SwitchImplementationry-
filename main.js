var start;

for (var num = 60; num >=0; num--){
  start =
    (num === 50) ? ("Orbiter transfers from ground to internal power"):
      (num === 31) ? ("Ground launch sequencer is go for auto sequence start"):
        (num === 16) ? ("Activate launch pad sound suppression system"):
          (num === 10) ? ("Activate main engine hydrogen burnoff system"):
            (num === 6)  ? ("Main engine start"):
              (num === 0) ? ("Solid rocket booster ignition and liftoff!"):
                (start) ? console.log(start) : "";
                console.log("T-"+num+" seconds");
}
