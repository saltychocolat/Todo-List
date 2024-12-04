let DomItems = getDom();


function getDom(){
    let createProjectBtn = document.querySelector(".createProject");
    let dialog = document.querySelector(".dialog");
    let form = document.querySelector("form");
    let projects = document.querySelector(".projects")
    return {createProjectBtn:createProjectBtn,dialog:dialog,form:form,projects:projects};
}

function closeDialog(){
    DomItems.dialog.classList.add("hide");
}

export {getDom,closeDialog}