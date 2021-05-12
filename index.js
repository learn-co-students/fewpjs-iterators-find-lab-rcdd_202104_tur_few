const testVar = {}

function testFunc() {
  return "hi"
}


const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]


function superbowlWin(record){

  let year
  let undef

  record.find(function(arr){
    if(arr.result === "W"){
      year = arr.year
    }
    else{
      undef = undefined
      return undef
    }
  })
  return year
}

superbowlWin(record)