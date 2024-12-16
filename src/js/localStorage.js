function init(){
    let id = 0;
    let todoList = [];
    let projects = [{id:0,name:"My Homework",todo:[]}];
    let temp = {ProjectId:null};
    localStorage.setItem("todoList",JSON.stringify(todoList));
    localStorage.setItem("id",JSON.stringify(++id));
    localStorage.setItem("projects",JSON.stringify(projects));
    localStorage.setItem("temp",JSON.stringify(temp));
}

function getId(){
    let id = localStorage.getItem("id");
    return JSON.parse(id);
}
function getList(){
    let todoList = localStorage.getItem("todoList")
    return JSON.parse(todoList);
}
function getProjects(){
    let projects = localStorage.getItem("projects")
    return JSON.parse(projects);
}
function setId(id){
    localStorage.setItem("id",JSON.stringify(id));
}
function setList(todoList){
    localStorage.setItem("todoList",JSON.stringify(todoList));
}
function setProjects(projects){
    localStorage.setItem("projects",JSON.stringify(projects));
}

function getTemp(){
    let temp = localStorage.getItem("temp");
    return JSON.parse(temp);
}

function setTemp(temp){
    localStorage.setItem("temp",JSON.stringify(temp));
}

export {init,getId,getList,setId,setList,setProjects,getProjects,getTemp,setTemp};