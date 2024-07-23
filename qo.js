const todos=['1','2','3','4'];
todos.push('5');
let a= todos.pop()
todos.push(a)
todos[10]='10'
todos.splice(5,5)
console.log(todos.length)
console.log(todos)
console.log(todos.indexOf('3'))