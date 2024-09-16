document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector(".task-input");
    const taskContainer = document.querySelector(".task-container");

    const tasks = [];

    inputField.addEventListener("change", addTaskList);

    function addTaskList(e) {
        tasks.push({
            value: e.target.value.trim(),
            isCompleted: false,
        });
        e.target.value = "";

        displayInPage();
    }

    function displayInPage() {
        taskContainer.innerHTML = "";
        tasks.forEach((listObj, index) => {
            renderListObject(listObj, index);
        });
        //----->edit event
        document.querySelectorAll(".edit").forEach((editButton) => {
            editButton.addEventListener("click", editEvent);
        });

        //----->delete event
        document.querySelectorAll(".delete").forEach((deleteButton) => {
            deleteButton.addEventListener("click", deleteEvent);
        });

        //----->complete event
        document.querySelectorAll(".complete").forEach((completeButton) => {
            completeButton.addEventListener("click", completeEvent);
        });
    }
    function renderListObject(listObj, index) {
        const listItem = document.createElement("li");
        listItem.classList.add("task-list");
        if (listObj.isCompleted) {
            listItem.classList.add("isCompleted");
        }
        listItem.id = index;
        listItem.textContent = listObj.value;

        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
        editBtn.textContent = "Edit";
        const completeBtn = document.createElement("button");
        completeBtn.classList.add("complete");
        completeBtn.textContent = "Complete";
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");
        deleteBtn.textContent = "Delete";

        buttons.append(editBtn, completeBtn, deleteBtn);

        listItem.append(buttons);

        taskContainer.append(listItem);
    }

    function editEvent(e) {
        //accessing the selected list item
        const listItem = e.target.closest(".task-list");

        if (tasks[Number(listItem.id)].isCompleted === false) {
            const newValue = prompt("update the task list");
            if (newValue) {
                //updating the element in tasks array
                tasks[Number(listItem.id)].value = newValue;
                //re-render
                displayInPage();
            }
        }
    }

    function deleteEvent(e) {
        //accessing the selected list item
        const listItem = e.target.closest(".task-list");
        //converting the index in number
        const index = Number(listItem.id);
        //removing the element from tasks array
        tasks.splice(index, 1);
        //re-render
        displayInPage();
    }

    function completeEvent(e) {
        const listItem = e.target.closest(".task-list");
        listItem.classList.toggle("isCompleted");
        const index = Number(listItem.id);

        tasks[index].isCompleted = tasks[index].isCompleted ? false : true;

        //re-render page
        displayInPage();
    }

    //-------> all task event
    document.querySelector(".allBtn").addEventListener("click", () => {
        displayInPage();
    });

    //-------->all completed task event
    document.querySelector(".completedBtn").addEventListener("click", () => {
        taskContainer.innerHTML = "";
        tasks.forEach((listObj, index) => {
            if (listObj.isCompleted === true) {
                renderListObject(listObj, index);
            }
        });
        //----->edit event
        document.querySelectorAll(".edit").forEach((editButton) => {
            editButton.addEventListener("click", editEvent);
        });

        //----->delete event
        document.querySelectorAll(".delete").forEach((deleteButton) => {
            deleteButton.addEventListener("click", deleteEvent);
        });

        //-----> complete event
        document.querySelectorAll(".complete").forEach((completeButton) => {
            completeButton.addEventListener("click", completeEvent);
        });
    });

    //-------->all pending task event
    document.querySelector(".pendingBtn").addEventListener("click", () => {
        taskContainer.innerHTML = "";
        tasks.forEach((listObj, index) => {
            if (listObj.isCompleted === false) {
                renderListObject(listObj, index);
            }
        });
        //----->edit event
        document.querySelectorAll(".edit").forEach((editButton) => {
            editButton.addEventListener("click", editEvent);
        });

        //----->delete event
        document.querySelectorAll(".delete").forEach((deleteButton) => {
            deleteButton.addEventListener("click", deleteEvent);
        });

        //----->complete event
        document.querySelectorAll(".complete").forEach((completeButton) => {
            completeButton.addEventListener("click", completeEvent);
        });
    });
});
