window.addEventListener("load", function () {
    /* Konstante für Eingabefeld*/
    const input = document.getElementById("toDo");
    let index = 0;
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            createToDo();
            clearInput();
        }
    });
    /* Counter für Anzahl ToDos*/
    function counter() {
        document.querySelector("#counterToDo").innerHTML = String(index);
    }
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput() {
        input.value = "";
    }
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo() {
        index++;
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
            index--;
            counter();
        });
    }
});
//# sourceMappingURL=script.js.map