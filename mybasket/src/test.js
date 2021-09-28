// console.log(typeof undefined);
// console.log(typeof null);


// let text = 'I am sonam \'dhull\' welcome\n sona \bhello \n dd\r carrier return \t hsdjsdfj \v vertical tabular  nf,edhfl'
// console.log(text);

// var count  = 0 ;
// while(count++<10){
//     console.log("count"+count);
// }
// console.log(count);
// var cou  = 0 ;
// while(++cou<10){
//     console.log("count"+cou);
// }

// let x = 10;
// // x= +x;
// x = x
// console.log(x);    //output 10

// var a = 4;
// a = -a; // -4
// console.log(a);
// a = +a; // -4
// console.log(a);

// let t = true
// console.log(-t);
// var i =0
// for(; '';
// )
// var istFun = function(){
//     return function(){
//     console.log("doing something");
// }
// }
// // istFun()()
// istFun()

// var msg1 = {
//         to :98302903,
//         msg :"how are you",
//         delevered : true,
//         read:false,
//         from :475764865846

// }

// for (item in msg1){
//     console.log(item);
// }


// function Songs(id, name, duration){
//     this.id =id,
//     this.name = name,
// //     this.duration = duration
// //     this.completeDetails = function(){
// //         return this.id + "" +this.name + " " + this.duration
// //     }
// //     this.play = function(){
// //         console.log(this.name +"song is playing");
// //     }
// // }

// // var mySong

// // let obj  = {
// //     0 : "test"
// // }
// // console.log(obj[0]);
// // console.log(obj["0"]);


// let myProduct = [{
//     name: "face wash",
//     price: 200,
//     organic: true
// }]

// for(i in myProduct){
//     console.log(i);
// }


// var array1 = [4,5,6,8,9,0]
// array1.forEach(element => {
//     console.log(element);
// });

// console.log(myProduct.organic);


// var demo = array1.map(myfunction)


// function myfunction(i){
//    console.log(i*10);
// }

// myProduct.map(getFullDetails)

// // function getFullDetails(ii){
// //     console.log(ii.name,ii.price,ii.organic);
// // }

// // for(ex of array1){
// //     console.log(ex);
// // }
// // array2 = [2,4,[2,5],9,7,8]
// // for(rr of array2){
// //     console.log("array : " + rr);
// // }


// // function init() {
// //     var name = "sonam";
// //     function displayName() {
// //         console.log(name);
// //     }
// //     displayName()
// // }

// // init()

// // function makeAdder(x) {
// //     return function (y) {
// //         return x + y
// //     }
// // }

// // var add5 = makeAdder(5)
// // var add10 = makeAdder(10)

// // console.log(add5(2));
// // console.log(add10(2));
// // console.log(makeAdder(4)(7));

// var counter = (
//     function(){
//         var privateCounter = 0
//         function changeBy(val) {
//             privateCounter +=val;
//         }
//         return {
//             increment: function(){
//                 changeBy(1)
//             },
//             decrement : function() {
//                 changeBy(-1)
//             },
//             value: function(){
//                 return privateCounter;
//             }
//         }
//     }
// )();

// console.log(counter.value());
// counter.increment()
// counter.increment()
// console.log((counter.value()));
// counter.decrement()
// console.log(counter.value());



//  let x =10 

// if(true) {
//     console.log(x);
// }
// if(10==10){
//     var x=100
//     console.log(x);
// }
// console.log(x);

// let greeting = "say hi"
// let time = 4

// if(time>3){
//     var hello ="say hello";
//     console.log(hello);
// }
// console.log(hello);
setInterval(()=>console.log("hello sonam"),3000)
