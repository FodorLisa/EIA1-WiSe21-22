window.addEventListener("load", function () {
    const artyom = new Artyom();
    /* Konstante für Eingabefeld*/
    const input = document.getElementById("toDo");
    let index = 0;
    let open = 0;
    let done = 0;
    document.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            createToDo(input.value);
            clearInput();
        }
    });
    /* Counter für Anzahl ToDos*/
    function counter() {
        document.querySelector("#counterToDo").innerHTML = String(index);
        document.querySelector("#counterOpen").innerHTML = String(open);
        document.querySelector("#counterDone").innerHTML = String(done);
    }
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput() {
        input.value = "";
    }
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo(aufgabe) {
        index++;
        open++;
        counter();
        let wrapper = document.getElementById("wrapIt");
        let placeHolder = document.createElement("div");
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        let trashButton = document.createElement("i");
        placeHolder.className = "placeHolder";
        checkbox.type = "checkbox";
        checkbox.className = "checkBox";
        label.innerHTML = aufgabe;
        label.className = "divLabel";
        wrapper.appendChild(placeHolder);
        placeHolder.appendChild(checkbox);
        placeHolder.appendChild(label);
        trashButton.className = "far fa-trash-alt";
        placeHolder.appendChild(trashButton);
        trashButton.addEventListener("click", function () {
            wrapper.removeChild(placeHolder);
            index--;
            if (checkbox.checked) {
                done--;
            }
            else {
                open--;
            }
            counter();
        });
        checkbox.addEventListener("click", function () {
            if (checkbox.checked) {
                done++;
                open--;
            }
            else {
                done--;
                open++;
            }
            counter();
        });
    }
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            createToDo(wildcard);
        }
    });
    function startContinuousArtyom() {
        console.log('start');
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    document.querySelector("#artyom").addEventListener('click', function () {
        startContinuousArtyom();
        document.querySelector("#artyom").disabled = true;
    });
});
//# sourceMappingURL=script.js.map