
import { compareAsc, format } from "date-fns";
import {init,getId,getList,setId,setList,setProjects,getProjects} from "./localStorage";
import {editProject,deleteProject,createItem,deleteItem,createProject,renderProjects,submitProjectForm } from "./Methods";
import {getDom,closeDialog,createForm} from "./DomMethods";

import "./styles.css";
import "./sidebar.css";
import "./dialog.css";


const actionMap = {
    delete: (target) => deleteProject(target.parentElement.textContent),
    closeForm: closeDialog,
    cancelForm: closeDialog,
    createProject: (target  ) => createForm("add",target),
    editImg: (target) => createForm("edit",target),
    submitProjectForm: (target) => {
        switch(target.textContent){
            case "Add":
                submitProjectForm();
                renderProjects();
                break;
            case "Edit":
                editProject();
                break;
        }
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
createProject("Ana",["2"]);

renderProjects();