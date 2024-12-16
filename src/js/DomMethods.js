import {init,getId,getList,setId,setList,setProjects,getProjects,getTemp,setTemp} from "./localStorage";

let DomItems = getDom();


function getDom(){
    let contentTitle = document.querySelector(".contentTitle");
    let content = document.querySelector(".content");
    let wrapper = document.querySelector(".wrapper");
    let createProjectBtn = document.querySelector(".createProject");
    let dialog = document.querySelector(".dialog");
    let form = document.querySelector("form");
    let projects = document.querySelector(".projects")
    let submitProjectFormBtn = document.querySelector(".submitProjectForm");
    let projectsTitle  = document.querySelector(".projectsTitle");
    let projectInputTitle = document.querySelector("#projectInputTitle");
    let projectFormTitle = document.querySelector(".projectFormTitle")
    let editForm = document.querySelector("#edit")
    return {contentTitle:contentTitle,content:content,wrapper:wrapper,createProjectBtn:createProjectBtn,dialog:dialog,form:form,projects:projects,projectInputTitle:projectInputTitle,
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


    switch (mode){
        case "add":
            projectFormTitle.textContent="Add Project";
            submitProjectForm.textContent="Add";
            submitProjectForm.classList.add("submitProjectForm");

            formHeader.appendChild(projectFormTitle);
            formHeader.appendChild(closeForm);
        
            formButtons.appendChild(cancelForm);
            formButtons.appendChild(submitProjectForm);
        
            form.appendChild(formHeader);
            form.appendChild(label);
            form.appendChild(projectInputTitle);
            form.appendChild(formButtons);
        
            break;
        case "edit":
            let temp = getTemp();
            temp.ProjectId = target.parentElement.id;
            setTemp(temp)
            projectInputTitle.value = target.parentElement.textContent;
            projectFormTitle.textContent="Edit Project";
            submitProjectForm.textContent="Edit";
            submitProjectForm.classList.add("editProjectForm");

            formHeader.appendChild(projectFormTitle);
            formHeader.appendChild(closeForm);
        
            formButtons.appendChild(cancelForm);
            formButtons.appendChild(submitProjectForm);
        
            form.appendChild(formHeader);
            form.appendChild(label);
            form.appendChild(projectInputTitle);
            form.appendChild(formButtons);
            break;
        
        case "task":
            projectFormTitle.textContent="Add Task";
            submitProjectForm.textContent="Add Task";
            submitProjectForm.classList.add("submitTaskForm");

            let label2 = document.createElement("label");
            label2.classList.add("label");
            label2.textContent = "Description";
            label.appendChild(label2);
            let description = document.createElement("input");
            description.type = "text";
            description.id = "description";

            let label3 = document.createElement("label");
            label3.classList.add("label");
            label3.textContent = "Due Date:";
            let dueDate = document.createElement("input");
            dueDate.type = "text";
            dueDate.id = "dueDate";

            let label4 = document.createElement("label");
            label4.classList.add("label");
            label4.textContent = "Priority:";
            let priority = document.createElement("input");
            priority.type = "text";
            priority.id = "priority";
            


            formHeader.appendChild(projectFormTitle);
            formHeader.appendChild(closeForm);
        
            formButtons.appendChild(cancelForm);
            formButtons.appendChild(submitProjectForm);
        
            form.appendChild(formHeader);

            form.appendChild(label);
            form.appendChild(projectInputTitle);

            form.appendChild(label2);
            form.appendChild(description);

            form.appendChild(label3);
            form.appendChild(dueDate);

            form.appendChild(label4);
            form.appendChild(priority);

            form.appendChild(formButtons);
        
            break;

    }

   
    dialog.appendChild(form);

    document.body.appendChild(dialog);


}

export {getDom,closeDialog,createForm}