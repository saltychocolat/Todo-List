import {init,getId,getList,setId,setList,setProjects,getProjects,getTemp,setTemp} from "./localStorage";

let DomItems = getDom();


function getDom(){
    let createProjectBtn = document.querySelector(".createProject");
    let dialog = document.querySelector(".dialog");
    let form = document.querySelector("form");
    let projects = document.querySelector(".projects")
    let submitProjectFormBtn = document.querySelector(".submitProjectForm");
    let projectsTitle  = document.querySelector(".projectsTitle");
    let projectInputTitle = document.querySelector("#projectInputTitle");
    let projectFormTitle = document.querySelector(".projectFormTitle")
    let editForm = document.querySelector("#edit")
    return {createProjectBtn:createProjectBtn,dialog:dialog,form:form,projects:projects,projectInputTitle:projectInputTitle,
        submitProjectFormBtn:submitProjectFormBtn,projectsTitle:projectsTitle,editForm:editForm,projectFormTitle:projectFormTitle};
}

function closeDialog(){
    DomItems = getDom();
    DomItems.projectInputTitle.value="";
    DomItems.dialog.remove();
}

function createForm(mode,target){
    let dialog = document.createElement("dialog");
    let form = document.createElement("form");
    dialog.classList.add("dialog");

    let formHeader =  document.createElement("div");
    formHeader.classList.add("formHeader");

    let projectFormTitle = document.createElement("div");
    projectFormTitle.classList.add("projectFormTitle");

    let closeForm = document.createElement("button");
    closeForm.classList.add("closeForm");
    closeForm.textContent = "X";

    let label = document.createElement("div");
    label.classList.add("label");
    label.textContent = "Title:";

    let projectInputTitle = document.createElement("input");
    projectInputTitle.id =  "projectInputTitle";
    projectInputTitle.type = "text";

    let formButtons = document.createElement("formButtons");
    formButtons.classList.add("formButtons");

    let cancelForm = document.createElement("button");
    cancelForm.classList.add("cancelForm");
    cancelForm.textContent = "Cancel";

    let submitProjectForm = document.createElement("button");
    submitProjectForm.classList.add("submitProjectForm");


    switch (mode){
        case "add":
            projectFormTitle.textContent="Add Project";
            submitProjectForm.textContent="Add";
            break;
        case "edit":
            let temp = getTemp();
            temp.name = target.parentElement.textContent;
            setTemp(temp)
            projectInputTitle.value = target.parentElement.textContent;
            projectFormTitle.textContent="Edit Project";
            submitProjectForm.textContent="Edit";

    }

    formHeader.appendChild(projectFormTitle);
    formHeader.appendChild(closeForm);

    formButtons.appendChild(cancelForm);
    formButtons.appendChild(submitProjectForm);

    form.appendChild(formHeader);
    form.appendChild(label);
    form.appendChild(projectInputTitle);
    form.appendChild(formButtons);

    dialog.appendChild(form);

    document.body.appendChild(dialog);


}

export {getDom,closeDialog,createForm}