function init(){
    let id = 0;
    let todoList = [];
    localStorage.setItem("todoList",JSON.stringify(todoList));
    localStorage.setItem("id",JSON.stringify(id));
}

function getId(){
    let id = localStorage.getItem("id");
    return JSON.parse(id);
}
function getList(){
    let todoList = localStorage.getItem("todoList")
    return JSON.parse(todoList);
}
function setId(id){
    localStorage.setItem("id",JSON.stringify(id));
}
function setList(todoList){
    localStorage.setItem("todoList",JSON.stringify(todoList));
}

export {init,getId,getList,setId,setList};