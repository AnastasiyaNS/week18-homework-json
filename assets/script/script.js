const form=document.forms.formList;
const button=document.getElementById('btnClear')
const taskList=document.getElementById('taskList')
const taskFull=document.getElementById('taskListFull')

document.addEventListener('DOMContentLoaded', function(){
    let name=localStorage.getItem('name');
    if (name !=null){
        document.getElementById('taskList').innerHTML +=`<div class="newlist"><input type="checkbox" name=${name} class="check"><label for="${name}" class="checkbox">${name}</label></div>`;
        button.disabled=false;
        taskFull.innerText = null;
    } else {
        taskFull.innerText="Нет задач";}
    });

    // добавление новой задачи
    function addTask(task) {
        let textName = task.replace(/\s/g, "");
    document.getElementById(
        "taskList"
    ).innerHTML += `<div class = "list"><input type="checkbox" name="${textName}" class = "check" />
        <label for="${textName}" class = "checkbox" >${task}</label></div>`;
    
    localStorage.setItem("name", task);
    localStorage.setItem("checkbox", false);
    
    button.disabled = false;
    }

      // кнопка Добавить 
function checkMessage() {
let task = document.getElementById("task").value;
if (task === "") {
    return;
} else {
    taskFull.innerText = null;
    addTask(task);
}
}
   // кнопка Очистить
function checkReset() {
    form.reset();
    localStorage.clear();
}

  // Выбрать (чекбокс)
taskList.addEventListener("click", (event) => {
    
    if (event.target.classList.contains("check")) {
    let checkbox = event.target.checked;
 
    localStorage.setItem("name", event.target.name);
    localStorage.setItem("checkbox", checkbox);
    }
});