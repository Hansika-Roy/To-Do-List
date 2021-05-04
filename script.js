const addToDoBtn = document.getElementById('addTodo');
const toDoContainer = document.getElementById('toDoContainer');
const inputField = document.getElementById('inputField');
const form = document.getElementById('form')

form.addEventListener('submit', insert);

function insert(){
  var paragraph = document.createElement('p')
  if(inputField.value==''){
    alert('Enter the task')
  }else{
    paragraph.innerText=`${inputField.value}`;
    inputField.focus()
  }
  toDoContainer.appendChild(paragraph);
  inputField.value='';
  
  paragraph.addEventListener('click', function(){
    paragraph.style.textDecoration='line-through white'
  })

  paragraph.addEventListener('dblclick', function(){
    toDoContainer.removeChild(paragraph)
  })
}