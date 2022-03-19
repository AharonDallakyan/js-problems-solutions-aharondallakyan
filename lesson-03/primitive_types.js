
function  sum(a,b,c){
  return a + b + c
}
function mul(a,b){
  return a * b
}
function div(a ,b){
  return a/b
}
function sub(a,b,c){
  return  a - b -c
}
function  copyTheValue(arg){
  let name = arg;
  let admin = name;
   console.log(admin)
  return admin;
}
function calcMod(arg){

  let i = arg;
  let n = i++ % 5;
  console.log(i);
  console.log(n)
  return n
}
function swap1(x,y){
  let a = x;
  let b = y;
  a = a + b
  b = a - b
  a = a - b
  return a.toString()+ "|" + b.toString()
}
function swap2(x,y){
  let a = x;
  let b = y;
  let temp;
  temp = a
  a = b
  b = temp
  return a.toString()+ "|" + b.toString()
}
module.exports = {sum,mul,div,sub,copyTheValue,calcMod,swap1,swap2};
