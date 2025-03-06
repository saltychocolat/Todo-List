// Importarea funcțiilor din modulul 'localStorage' pentru gestionarea stării locale
import {init,getId,getList,setId,setList,setProjects,getProjects,getTemp,setTemp} from "./localStorage";
import { format, compareAsc ,parse} from "date-fns";

// Obținerea referințelor DOM pentru elementele HTML relevante
let DomItems = getDom();

// Funcție care returnează obiectul cu referințe la diverse elemente DOM
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

    // Returnează un obiect cu referințele obținute
    return {contentTitle:contentTitle,content:content,wrapper:wrapper,createProjectBtn:createProjectBtn,dialog:dialog,form:form,projects:projects,projectInputTitle:projectInputTitle,
        submitProjectFormBtn:submitProjectFormBtn,projectsTitle:projectsTitle,editForm:editForm,projectFormTitle:projectFormTitle};
}

// Funcție pentru închiderea unui dialog și resetarea valorii câmpului de titlu
function closeDialog(){
    DomItems = getDom();  // Actualizează referințele DOM
    DomItems.projectInputTitle.value="";  // Resetează câmpul de titlu
    DomItems.dialog.remove();  // Îndepărtează dialogul din DOM
}

// Funcție pentru a crea un formular, care poate fi de mai multe tipuri: "add", "edit", sau "task"
function createForm(mode,target){
    let dialog = document.createElement("dialog");
    let form = document.createElement("form");
    dialog.classList.add("dialog");

    // Crearea unui header pentru formular
    let formHeader =  document.createElement("div");
    formHeader.classList.add("formHeader");

    let projectFormTitle = document.createElement("div");
    projectFormTitle.classList.add("projectFormTitle");

    let closeForm = document.createElement("button");
    closeForm.classList.add("closeForm");
    closeForm.textContent = "X";  // Butonul de închidere a formularului

    let label = document.createElement("div");
    label.classList.add("label");
    label.textContent = "Title:";  // Eticheta pentru câmpul de titlu

    let projectInputTitle = document.createElement("input");
    projectInputTitle.id =  "projectInputTitle";
    projectInputTitle.type = "text";  // Câmpul de introducere a titlului

    let formButtons = document.createElement("formButtons");
    formButtons.classList.add("formButtons");

    let cancelForm = document.createElement("button");
    cancelForm.classList.add("cancelForm");
    cancelForm.textContent = "Cancel";  // Butonul de anulare a formularului

    let submitProjectForm = document.createElement("button");  // Butonul de trimitere a formularului

    let label2,label3,label4,description,priority,dueDate,option,low,medium,high;

    // Se alege tipul formularului în funcție de 'mode'
    switch (mode){
        case "add":
            projectFormTitle.textContent="Add Project";  // Setează titlul formularului
            submitProjectForm.textContent="Add";  // Eticheta butonului
            submitProjectForm.classList.add("submitProjectForm");

            // Adăugarea elementelor în formular
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
            let temp = getTemp();  // Obține informațiile temporare
            temp.ProjectId = target.parentElement.id;  // Setează ID-ul proiectului
            setTemp(temp)  // Salvează informațiile temporare
            projectInputTitle.value = target.parentElement.textContent;  // Setează titlul în câmpul de input
            projectFormTitle.textContent="Edit Project";  // Titlul formularului pentru editare
            submitProjectForm.textContent="Edit";  // Eticheta butonului de editare
            submitProjectForm.classList.add("editProjectForm");

            // Adăugarea elementelor în formular
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
            projectFormTitle.textContent="Add Task";  // Titlul formularului pentru adăugarea unei sarcini
            submitProjectForm.textContent="Add Task";  // Eticheta butonului pentru adăugarea unei sarcini
            submitProjectForm.classList.add("submitTaskForm");

            // Crearea câmpurilor suplimentare pentru detaliile sarcinii
            label2 = document.createElement("label");
            label2.classList.add("label");
            label2.textContent = "Description";  // Eticheta pentru descriere
            label.appendChild(label2);
            description = document.createElement("input");
            description.type = "text";
            description.id = "description";  // Câmpul de descriere
            description.required= true;

            label3 = document.createElement("label");
            label3.classList.add("label");
            label3.textContent = "Due Date:";  // Eticheta pentru data scadentă
            dueDate = document.createElement("input");
            dueDate.type = "date";
            dueDate.id = "dueDate";  // Câmpul pentru data scadentă
            dueDate.required = true;
            let today = new Date().toISOString().split("T")[0]; // Gets YYYY-MM-DD
            dueDate.value = today;
           

            label4 = document.createElement("label");
            label4.classList.add("label");
            label4.textContent = "Priority:";  // Eticheta pentru prioritate
            priority = document.createElement("select");
            priority.id = "priority";  // Câmpul pentru prioritate

            option = document.createElement("option");
            option.value ="Low";
            option.textContent = "Low";
            priority.append(option);
            option = document.createElement("option");
            option.value ="Medium";
            option.textContent = "Medium";
            priority.append(option);
            option = document.createElement("option");
            option.value ="High";
            option.textContent = "High";
            priority.append(option);
            

            // Adăugarea elementelor în formular
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
        case "editTask":
            projectFormTitle.textContent="Edit Task";  // Titlul formularului pentru adăugarea unei sarcini
            submitProjectForm.textContent="Edit Task";  // Eticheta butonului pentru adăugarea unei sarcini
            submitProjectForm.classList.add("editTaskForm");

            projectInputTitle.value = target.title;

            // Crearea câmpurilor suplimentare pentru detaliile sarcinii
            label2 = document.createElement("label");
            label2.classList.add("label");
            label2.textContent = "Description";  // Eticheta pentru descriere
            label.appendChild(label2);
            description = document.createElement("input");
            description.type = "text";
            description.id = "description";  // Câmpul de descriere
            description.required= true;
            description.value = target.description;

            label3 = document.createElement("label");
            label3.classList.add("label");
            label3.textContent = "Due Date:";  // Eticheta pentru data scadentă
            dueDate = document.createElement("input");
            dueDate.type = "date";
            dueDate.id = "dueDate";  // Câmpul pentru data scadentă
            dueDate.required = true;
            let obj = parse(target.dueDate,"MM/dd/yyyy",new Date());
            dueDate.value = format(obj,"yyyy-MM-dd");

            label4 = document.createElement("label");
            label4.classList.add("label");
            label4.textContent = "Priority:";  // Eticheta pentru prioritate
            priority = document.createElement("select");
            priority.id = "priority";  // Câmpul pentru prioritate

            low = document.createElement("option");
            low.value ="Low";
            low.textContent = "Low";
            priority.append(low);
            medium = document.createElement("option");
            medium.value ="Medium";
            medium.textContent = "Medium";
            priority.append(medium);
            high = document.createElement("option");
            high.value ="High";
            high.textContent = "High";
            priority.append(high);
            
            switch(target.priority){
                case "Low":
                    low.selected =true;
                    break;
                case "Medium":
                    medium.selected=true;
                    break;
                case "High":
                    high.selected=true;
                    break;
            }

            // Adăugarea elementelor în formular
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

    // Adăugarea formularului în dialog
    dialog.appendChild(form);
    // Adăugarea dialogului în corpul documentului
    document.body.appendChild(dialog);
}

// Exportarea funcțiilor pentru a fi utilizate în alte fișiere
export {getDom,closeDialog,createForm}
