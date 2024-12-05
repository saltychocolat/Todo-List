let DomItems = getDom();


function getDom(){
    let createProjectBtn = document.querySelector(".createProject");
    let dialog = document.querySelector(".dialog");
    let form = document.querySelector("form");
    let projects = document.querySelector(".projects")
    let submitFormBtn = document.querySelector(".submitForm");
    let projectsTitle  = document.querySelector(".projectsTitle");
    let projectFormTitle = document.querySelector("#projectFormTitle")
    return {createProjectBtn:createProjectBtn,dialog:dialog,form:form,projects:projects,projectFormTitle:projectFormTitle,
    submitFormBtn:submitFormBtn,projectsTitle:projectsTitle};
}

function closeDialog(){
    DomItems.projectFormTitle.value="";
    DomItems.dialog.classList.add("hide");
}


export {getDom,closeDialog}