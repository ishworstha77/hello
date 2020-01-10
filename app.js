/*console.log('hello world')
let a=30,b=20;
console.log(a+b);
var firstmale ="ishwor"
console.log(firstmale.length)
firstmale[1]='s';
console.log(firstmale)
var arr=[20,3,4,50,9]
jpt= arr.sort((a,b) => a-b);
console.log(jpt)
  function add(){
      for(var i=0;i<5;i++){
      console.log(i)
  }
  console.log(i)}
  add();*/

  var user =[
      {id:1, name:'ram', age:20},
      {id:2, name:'shayam', age:22},
      {id:3, name:'hari', age:21} ];
//   user.forEach(function(user,ram,alldata){
    //   console.log(user);
    //   console.log(ram)
    //   console.log(alldata);
//   })

  var alluser=user.map(function(user,index,alldata){
      return alldata;

  })
  console.log(alluser)
//   console.log(user)

var filterdata =user.filter(function(data){
    return data.age!==21;
})
console.log(filterdata)



var arr1=[ 1,3] 
var arr2=[4,5,6,...arr1]
console.log(arr2)

var arr=[1,2,5,2,7];
[a,b,c,d,e]=arr;
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(a)

var a,b;
[a=20,b]=[, ,40]
console.log(a)




