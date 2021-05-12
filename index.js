const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
];






function superbowlWin(record){
  let year;
  
  
  record.find(obj => {
  
  
  if (obj.result === "W"){
    year = obj.year
   
  } else {
    return undefined
  }
  
})
return year
};



superbowlWin(record);
