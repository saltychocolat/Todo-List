
import { compareAsc, format } from "date-fns";
import {init,getId,getList,setId,setList,setProjects,getProjects} from "./localStorage";
import {renderTask,renderTasks,editProject,deleteProject,createItem,deleteItem,createProject,renderProjects,submitProjectForm } from "./Methods";
import {getDom,closeDialog,createForm} from "./DomMethods";

import "../css/dialog.css";
import "../css/sidebar.css";
import "../css/styles.css";
import "../css/content.css"

import screwIconPath from "../../icons/screwdriver-wrench-solid.svg";
import editIconPath from "../../icons/edit.svg";
import trashIconPath from "../../icons/trash-solid.svg";   

let lasttarget = null;
const actionMap = {
    delete: (target) => deleteProject(target.parentElement.id),
    deleteTask:(target)=>{
        deleteTask(target.parentElement.id,lasttarget)
        renderTasks(lasttarget);
    },
    closeForm: closeDialog,
    cancelForm: closeDialog,
    createProject: (target  ) => createForm("add",target),
    editImg: (target) => createForm("edit",target),
    createTask:(target)=>{
        createForm("task",target)
    },
    submitProjectForm: () => {
        submitProjectForm();
        renderProjects();
    },
    editProjectForm:(target)=>{
        editProject();
        renderTasks(target)
    },
    submitTaskForm:()=>{
        submitTaskForm();
        renderTasks(lasttarget);
    },
    buttonTask:(target)=>{
        lasttarget = target;
        renderTasks(target)
    },

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

function submitTaskForm(){

    let title = document.querySelector("#projectInputTitle");
    let description = document.querySelector("#description");
    let dueDate = document.querySelector("#dueDate");
    let priority = document.querySelector("#priority");
    createItem(title.value,description.value,dueDate.value,priority.value,false,lasttarget.id);
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

init();


renderProjects();