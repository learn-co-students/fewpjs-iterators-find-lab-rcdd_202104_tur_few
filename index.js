const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (array) => {
  let search = array.find(win => win.result === 'W');
  if(search) search = search.year;
  return search;
}