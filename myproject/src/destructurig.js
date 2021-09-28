// const [a , b ,...restOfTheValue] = [1,23,,4,6,7,8,]
// console.log(restOfTheValue[2]);

// const myFun =({x,y}) =>{
//     console.log(x);
//     console.log(y);
// }
// const obj ={x:123,y:"hello"}
// myFun(obj)

var color = ['pink', 'blue', 'red']
var printColor = (c1, c2, c3, c4) => {
    console.log(c1, c2, c3, c4);
}

printColor(...color)