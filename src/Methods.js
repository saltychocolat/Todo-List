
import {init,getId,getList,setId,setList,setProjects,getProjects, getTemp} from "./localStorage";
import {getDom,closeDialog} from "./DomMethods"
import screwIconPath from "../icons/screwdriver-wrench-solid.svg";
import editIconPath from "../icons/edit.svg";
import trashIconPath from "../icons/trash-solid.svg";   






class todoItem{
    constructor(title,description,dueDate,priority,hasDone,project){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.hasDone = hasDone;
        this.project = project;
    }

}
class todoProject{
    constructor(id,name,todo){
        this.id = id;
        this.name = name;
        this.todo = todo;
    }   
}


function createItem(title,description,dueDate,priority,hasDone,project){
    
    let item = new todoItem(title,description,dueDate,priority,hasDone,project);

    let todoList = getList();
    let id = getId();

    todoList.push({id:id,item:item});

    setList(todoList);
    setId(++id);
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
function createProject(id,name,todo){
    let project = new todoProject(id,name,todo); 
    let projects = getProjects();

    projects.push({id:id,name:project.name,todo:project.todo})

    setProjects(projects);
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
        edit.classList.add("editImg");
        edit.src = editIconPath;

        let bin = document.createElement("img");
        bin.classList.add("delete");
        bin.src = trashIconPath;

        btn.append(screw);
        btn.append(textNode)
        btn.append(edit);
        btn.append(bin);
        DomItems.projects.appendChild(btn);
    }
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

export {editProject,createItem,deleteItem,deleteProject,createProject,renderProjects,submitProjectForm,};