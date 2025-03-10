
import { compareAsc, format } from "date-fns";
import {init,getId,getList,setId,setList,setProjects,getProjects, getTemp, setTemp} from "./localStorage";
import {editTask,editTaskForm,deleteTask,submitTaskForm,renderTask,renderTasks,editProject,deleteProject,createItem,deleteItem,createProject,renderProjects,submitProjectForm,renderCategory} from "./Methods";
import {getDom,closeDialog,createForm} from "./DomMethods";

import "../css/dialog.css";
import "../css/sidebar.css";
import "../css/styles.css";
import "../css/content.css"

import screwIconPath from "../../icons/screwdriver-wrench-solid.svg";
import editIconPath from "../../icons/edit.svg";
import trashIconPath from "../../icons/trash-solid.svg";   

let lasttarget = null;
let callback = null;
const actionMap = {
    deleteProject: (target) => deleteProject(target.parentElement.id),
    deleteTask:(target)=>{
        deleteTask(target.parentElement.id,lasttarget)
        callback();
    },
    closeForm: closeDialog,
    cancelForm: closeDialog,
    createProject: (target) => createForm("add",target),
    submitProjectForm: () => {
        submitProjectForm();
        renderProjects();
        
    },

    createTask:(target)=>{
        createForm("task",target)
    },

    //icon edit
    editProject: (target) => createForm("edit",target),
    editTask:(target)=>{
        let temp = getTemp();
        temp.itemId = target.parentElement.id;
        setTemp(temp);
        editTask(target.parentElement.id,lasttarget);
    },
    
    //buton edit din form
    editProjectForm:()=>{
        editProject();
        callback();
    },
    editTaskForm:()=>{
        editTaskForm(getTemp().itemId,lasttarget);
        callback();
    },
    submitTaskForm:()=>{
        submitTaskForm(lasttarget);
        renderTasks(lasttarget);
    },
    buttonTask:(target)=>{
        lasttarget = target;
        callback = ()=> renderTasks(target);
        renderTasks(target)
    },
    buttonCategory:(target)=>{
        callback = ()=> renderCategory(target);
        renderCategory(target);
    }

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



init();


renderProjects();