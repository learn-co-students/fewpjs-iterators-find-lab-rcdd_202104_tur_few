const testVar = {}

function testFunc() {
  return "hi"
}
  
function superbowlWin(Array){
let f = Array.find(elemnt => elemnt.result === 'W')
if(f) f = f.year;
return f;
}