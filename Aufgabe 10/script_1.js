var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", function () {
        /* Konstante für Eingabefeld*/
        const input = document.getElementById("toDo");
        const wrapper = document.getElementById("todoWrapper");
        let countertoDo = 0;
        let openCounter = 1;
        let doneCounter = 0;
        document.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                createToDo();
                clearInput();
            }
        });
        /* Counter für Anzahl ToDos*/
        function counter() {
            document.querySelector("#counterToDo").innerHTML = String(countertoDo) + " in total";
        }
        function counter1() {
            document.querySelector("#openCounter").innerHTML = String(openCounter) + " in total";
        }
        function counter2() {
            document.querySelector("#doneCounter").innerHTML = String(doneCounter) + " in total";
        }
        /* Aufgabe wenn auf Trash Button gedrückt wird*/
        function clearInput() {
            input.value = "";
        }
        /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
        function createToDo() {
            countertoDo++;
            openCounter++;
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
                countertoDo--;
                counter();
            });
        }
    });
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script_1.js.map