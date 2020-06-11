// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[];
  let newstr;
  for (let i=0;i<musicians.length;i++){
    newstr=`${musicians[i]} plays ${instruments[i]}`
    arr.push(newstr)
  }
  return arr
}
function johnLennonFacts(facts){
  let newstr;
  let arr=[]
  while (let i<facts.length){
    newstr=facts[i]+"!!!";
    arr.push(newstr)
    i++
  }
  return arr
}

function iLoveTheBeatles(number){

}
