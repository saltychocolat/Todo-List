
import { compareAsc, format } from "date-fns";
import {init,getId,getList,setId,setList,setProjects,getProjects} from "./localStorage";
import {editProject,deleteProject,createItem,deleteItem,createProject,renderProjects,submitProjectForm } from "./Methods";
import {getDom,closeDialog,createForm} from "./DomMethods";

import "../css/dialog.css";
import "../css/sidebar.css";
import "../css/styles.css";
import "../css/content.css"

import screwIconPath from "../../icons/screwdriver-wrench-solid.svg";
import editIconPath from "../../icons/edit.svg";
import trashIconPath from "../../icons/trash-solid.svg";   


const actionMap = {
    delete: (target) => deleteProject(target.parentElement.id),
    closeForm: closeDialog,
    cancelForm: closeDialog,
    createProject: (target  ) => createForm("add",target),
    editImg: (target) => createForm("edit",target),
    submitProjectForm: (target) => {
        switch(target.textContent){
            case "Add":
                submitProjectForm();
                renderProjects();
                break;
            case "Edit":
                editProject();
                break;
        }
    },
    buttonTask:(target)=>renderTasks(target)

};





document.addEventListener("click", function(event) {
    const target = event.target;

    // Prevent default behavior for buttons
    if (target.tagName === "BUTTON") {
        event.preventDefault();
    }

    // Find the matching action and execute it
    for (const className in actionMap) {
        if (target.classList.contains(className)) {
            actionMap[className](target); // Pass target if needed
            break;
        }
    }
});

function renderTasks(target){
    let DomItems = getDom();
    DomItems.content.remove();

    let content = document.createElement("div");
    content.classList.add("content");
    
    let contentTitle = document.createElement("div");
    contentTitle.classList.add("contentTitle");


    let tasksHeader = document.createElement("div");
    tasksHeader.classList.add("tasksHeader");

    let tasksTitle = document.createElement("div");
    tasksTitle.classList.add("tasksTitle");

    let createTask = document.createElement("button");
    createTask.classList.add("createTask");
    createTask.textContent = "+";

    let targetid = target.id;
    let projects = getProjects();
    let todo=null;



    for(let i=0;i<projects.length;i++){
        if(projects[i].id==targetid){
            todo = projects[i].todo;
            contentTitle.textContent=projects[i].name;
            tasksTitle.textContent= `Tasks(${projects[i].todo.length})`


        }
    }

    tasksHeader.appendChild(tasksTitle);
    tasksHeader.appendChild(createTask);

    content.appendChild(contentTitle);
    content.appendChild(tasksHeader);
    if(todo){
        for(let i=0;i<todo.length;i++)
            renderTask(todo[i],content);

    }
    DomItems.wrapper.appendChild(content);

}

function renderTask(task,content){
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("taskDiv");

    let taskDivText = document.createElement("div");
    taskDivText.textContent = task.title;


    let dueDate = document.createElement("div");
    dueDate.classList.add("dueDate");
    dueDate.textContent = task.dueDate;

    let editTask = document.createElement("img");
    editTask.classList.add("editTask");
    editTask.src =  screwIconPath;

    let deleteTask = document.createElement("img");
    deleteTask.classList.add("deleteTask");
    deleteTask.src = trashIconPath;


    taskDiv.appendChild(taskDivText);
    taskDiv.appendChild(dueDate);
    taskDiv.appendChild(editTask);
    taskDiv.appendChild(deleteTask);

    content.appendChild(taskDiv);
}



init();


renderProjects();