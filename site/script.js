let list = document.getElementById("list")
let listitem = ""
let donebutton = ""
let deletebutton = ""
function addTask(){
    let newTask = document.getElementById("newtask")
    if (newTask.value.length > 0){
        listitem = document.createElement("li")
        listitem.innerHTML = newTask.value
        donebutton = document.createElement("input")
        donebutton.setAttribute("type", "button")
        donebutton.setAttribute("value", "D")
        donebutton.setAttribute("class", "taskdone")
        donebutton.setAttribute("onclick", "completeTask(this)")
        deletebutton = document.createElement("input")
        deletebutton.setAttribute("type", "button")
        deletebutton.setAttribute("value", "X")
        deletebutton.setAttribute("class", "removetaskbutton")
        deletebutton.setAttribute("onclick", "removeTask(this)")
        list.appendChild(listitem)
        listitem.appendChild(donebutton) 
        listitem.appendChild(deletebutton)
    } else {
        alert("Write a task to be add!!!")
    }
}

function completeTask(button){
    let liElement = button.parentElement
    let liStyle = window.getComputedStyle(liElement)
    let textDecoration = liStyle.textDecoration
    if(textDecoration == "none solid rgb(0, 0, 0)"){
        liElement.setAttribute("style", "text-decoration: line-through")
    } else{
        liElement.setAttribute("style", "text-decoration: none;")
    }
}

function removeTask(button){
    let liElement = button.parentElement
    let list = liElement.parentElement
    list.removeChild(liElement)
}


