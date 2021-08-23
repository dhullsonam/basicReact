const todos = [
    {name:"sonam",salary:8000000}
]

function addTodo(newTodo){
    return[...todos,{newTodo}]

}
const newTodo = addTodo({user:"hffds"})
console.log(newTodo);