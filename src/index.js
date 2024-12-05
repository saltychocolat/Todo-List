
import { compareAsc, format } from "date-fns";
import {init,getId,getList,setId,setList,setProjects,getProjects} from "./localStorage";
import { createItem,deleteItem,createProject,renderProjects,submitForm } from "./Methods";
import {getDom,closeDialog} from "./DomMethods";

import "./styles.css";
import "./sidebar.css";
import "./dialog.css";


let DomItems  = getDom();

document.addEventListener("click",function(event){
    let target = event.target;
    if(target.tagName=="BUTTON")
        event.preventDefault();
    if(target.classList.contains("closeForm") ||target.classList.contains("cancelForm"))
        closeDialog();
})

DomItems.createProjectBtn.addEventListener("click",function(){
    DomItems.dialog.classList.remove("hide");
})

DomItems.submitFormBtn.addEventListener("click",function(){
    submitForm();
    renderProjects();
})

init();
createProject("Ana",[]);

renderProjects();