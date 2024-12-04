
import {init,getId,getList,setId,setList,setProjects,getProjects} from "./localStorage";
import {getDom,closeDialog} from "./DomMethods"
import screwIconPath from "../icons/screwdriver-wrench-solid.svg";
import editIconPath from "../icons/edit.svg";
import trashIconPath from "../icons/trash-solid.svg";   



let DomItems = getDom();


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
    constructor(name,todo){
        this.name = name;
        this.todo = todo
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
function createProject(name,todo){
    let project = new todoProject(name,todo); 
    let projects = getProjects();

    projects.push({name:project.name,todo:project.todo})

    setProjects(projects);
}
function renderProjects(){
    let projects = getProjects();
    for(let i=0;i<projects.length;i++){
        let item = projects[i];

        let btn = document.createElement("button");
        btn.classList.add("buttonTask");
        let textNode = document.createTextNode(item.name);

        let screw = document.createElement("img");
        screw.classList.add("screw");
        screw.src = screwIconPath;

        let edit = document.createElement("img");
        edit.classList.add("edit");
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


export {createItem,deleteItem,createProject,renderProjects};