
import {init,getId,getList,setId,setList,setProjects,getProjects, getTemp} from "./localStorage";
import {getDom,closeDialog,createForm} from "./DomMethods"
import screwIconPath from "../../icons/screwdriver-wrench-solid.svg";
import editIconPath from "../../icons/edit.svg";
import trashIconPath from "../../icons/trash-solid.svg";   
import { format, compareAsc } from "date-fns";





class todoItem{
    constructor(itemId,title,description,dueDate,priority,hasDone,projectId){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.hasDone = hasDone;
        this.projectId = projectId;
        this.itemId = itemId;
    }

}
class todoProject{
    constructor(id,name,todo){
        this.id = id;
        this.name = name;
        this.todo = todo;
    }   
}

//item

function createItem(title,description,dueDate,priority,hasDone,project){
    

    let projects  = getProjects();

    for(let i=0;i<projects.length;i++){
        if(projects[i].id == project){
            projects[i].todo.push(new todoItem(projects[i].todo.length,title,description,dueDate,priority,hasDone,projects[i].id));

        }
    }
    setProjects(projects);
}

function deleteItem(id){
    let todoList = getList();
    for(let i=0;i<todoList.length;i++){
        if(todoList[i].id ==id){
            todoList.splice(i,1);
        }
    }
    setList(todoList);
}


//project
function createProject(id,name,todo){
    let project = new todoProject(id,name,todo); 
    let projects = getProjects();

    projects.push({id:id,name:project.name,todo:project.todo})

    setProjects(projects);
}

function deleteProject(id){
    let projects  = getProjects();
    for(let i=0;i<projects.length;i++){
        if(projects[i].id ==id){
            projects.splice(i,1);
        }
    }
    setProjects(projects);
    renderProjects();
}

function renderProjects(){
    let DomItems = getDom();
    let projects = getProjects();
    let children  = DomItems.projects.children;
    let projectsTitle = DomItems.projectsTitle;
    projectsTitle.textContent = `Projects(${projects.length})`;

    let len = children.length;

    if(len>1){
        for(let i=1;i<len;i++){
            if(children[children.length-1].classList.contains("buttonTask"))
                children[children.length-1].remove();
        }
    }

    for(let i=0;i<projects.length;i++){
        let item = projects[i];

        let btn = document.createElement("button");
        btn.classList.add("buttonTask");
        btn.id = item.id;

        let textNode = document.createTextNode(item.name);

        let screw = document.createElement("img");
        screw.classList.add("screw");
        screw.src = screwIconPath;

        let edit = document.createElement("img");
        edit.classList.add("editProject");
        edit.src = editIconPath;

        let bin = document.createElement("img");
        bin.classList.add("deleteProject");
        bin.src = trashIconPath;

        btn.append(screw);
        btn.append(textNode)
        btn.append(edit);
        btn.append(bin);
        DomItems.projects.appendChild(btn);
    }
}

function editProject(){
    let DomItems = getDom();
    let projects = getProjects();

    for(let i =0;i<projects.length;i++){
        if(projects[i].id == getTemp().ProjectId){
            projects[i].name = DomItems.projectInputTitle.value;
        }
    }
    setProjects(projects);
    renderProjects();
    closeDialog();
}

function submitProjectForm(){
    let DomItems = getDom();
    let title = DomItems.projectInputTitle;
    let id = getId();
    title = title.value;

    createProject(id,title,[]);
    setId(++id);
    closeDialog();
}


//task
function submitTaskForm(lasttarget){

    let title = document.querySelector("#projectInputTitle");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#dueDate");
    let priority = document.querySelector("#priority");
    createItem(title.value,description.value,format(new Date(dueDate.value), "MM/dd/yyyy"),priority.value,false,lasttarget.id);
    closeDialog();
}
function deleteTask(itemId,lasttarget){
    let projects = getProjects();
    for(let i=0;i<projects.length;i++){
        if(projects[i].id==lasttarget.id ){
            for(let j=0;j<projects[i].todo.length;j++)
                if(projects[i].todo[j].itemId == itemId){
                    projects[i].todo.splice(j,1);
                }
        }
    }
    setProjects(projects);

}
function editTask(itemId,lasttarget){
    let projects = getProjects();
    for(let i=0;i<projects.length;i++){
        if(projects[i].id == lasttarget.id){
            for(let j=0;j<projects[i].todo.length;j++){
                if(projects[i].todo[j].itemId == itemId){
                    createForm('editTask',projects[i].todo[j]);
                }
            }
        }
    }
}
function editTaskForm(itemId,lasttarget){
    let title = document.querySelector("#projectInputTitle");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#dueDate");
    let priority = document.querySelector("#priority");
    let projects = getProjects();
    for(let i=0;i<projects.length;i++){
        if(projects[i].id == lasttarget.id){
            for(let j=0;j<projects[i].todo.length;j++){
                if(projects[i].todo[j].itemId == itemId){
                    projects[i].todo[j].title = title.value;
                    projects[i].todo[j].description = description.value;
                    projects[i].todo[j].dueDate = format(new Date(dueDate.value), "MM/dd/yyyy");
                    projects[i].todo[j].priority = priority.value;
                    setProjects(projects);
                }
            }
        }
    }
    closeDialog();
}


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
    taskDiv.id = task.itemId;

    let taskDivText = document.createElement("div");
    taskDivText.textContent = task.title;

    let priority = document.createElement("div");
    priority.classList.add("priority");
    priority.textContent = task.priority;

    let description = document.createElement("div");
    description.classList.add("description");
    description.textContent = task.description;

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
    taskDiv.appendChild(description);
    taskDiv.appendChild(priority);
    taskDiv.appendChild(dueDate);
    taskDiv.appendChild(editTask);
    taskDiv.appendChild(deleteTask);

    content.appendChild(taskDiv);
}


export {editTaskForm,editTask,deleteTask,renderTask,renderTasks,editProject,createItem,deleteItem,deleteProject,createProject,renderProjects,submitProjectForm,submitTaskForm};