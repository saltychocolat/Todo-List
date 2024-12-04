function init(){
    let id = 0;
    let todoList = [];
    let projects = [];
    localStorage.setItem("todoList",JSON.stringify(todoList));
    localStorage.setItem("id",JSON.stringify(id));
    localStorage.setItem("projects",JSON.stringify(projects));
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

export {init,getId,getList,setId,setList,setProjects,getProjects};