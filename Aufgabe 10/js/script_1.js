window.addEventListener("load", function () {
    /* Konstante für Eingabefeld*/
    const input = document.getElementById("toDo");
    let toDoCount = 0;
    let openCount = 0;
    let doneCount = 0;
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            createToDo();
            clearInput();
        }
    });
    /* Counter für Anzahl ToDos*/
    function counter() {
        document.querySelector("#counterToDo").innerHTML = String(toDoCount) + " in total";
    }
    function openCounter() {
        document.querySelector("#counterOpen").innerHTML = String(openCount) + " in total";
    }
    function doneCounter() {
        document.querySelector("#counterDone").innerHTML = String(doneCount) + " in total";
    }
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput() {
        input.value = "";
    }
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo() {
        toDoCount++;
        openCount++;
        updateCounter();
        updateOpenCounter();
        updatedoneCounter();
        counter();
        let wrapper = document.getElementById("wrapIt");
        let placeHolder = document.createElement("div");
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        let trashButton = document.createElement("i");
        placeHolder.className = "placeHolder";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        label.innerHTML = input.value;
        label.className = "divLabel";
        wrapper.appendChild(placeHolder);
        placeHolder.appendChild(checkbox);
        placeHolder.appendChild(label);
        trashButton.className = "far fa-trash-alt";
        placeHolder.appendChild(trashButton);
        trashButton.addEventListener("click", function () {
            wrapper.removeChild(placeHolder);
            toDoCount--;
            counter();
        });
    }
});
//# sourceMappingURL=script_1.js.map