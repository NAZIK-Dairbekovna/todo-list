const input = document.querySelector('.add-btn') 
const ul = document.querySelector('.lest-group') 
const removeBtn = document.querySelector('.remove-btn') 

localStorage.setItem('task', JSON.stringify([{id:1, title: 'go to school', isDone: false}, {id:2, title: 'go to office', isDone: false}]))
console.log(JSON.parse(localStorage.getItem('task')));