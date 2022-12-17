function checkForWords(string, names) {
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (string.includes(name)) {
            console.log(`Matched ${name}`);
        } else {
            console.log("No match");
          }
        }
      }
      let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
      let dog_names = ["Max","HAS","PuRple","dog"]
      checkForWords(dog_string, dog_names);



function removeEvenIndices(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
          }
        }
        return arr;
      }

      let arr = ["Max","Baseball","Reboot","Goku","Trunks","Rodger", "hi", "no", "wasuuup", "yes" ];
      console.log(removeEvenIndices(arr));

// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}

// Area or Perimeter 
const areaOrPerimeter = function(l , w) {
  if (l === w) {
    return l * w;
} else {
    return 2 * (l + w);
  }
};
