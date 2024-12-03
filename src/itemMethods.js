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
export {createItem,deleteItem};