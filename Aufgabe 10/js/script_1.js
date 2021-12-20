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
    var done = 1;
    var openTask = 2;
    /* Counter für Anzahl ToDos*/
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    // Hinzufügen Variablen Counter und Sprachsteuerung
    var counterDOMElement;
    var openDOMElement;
    var doneDOMElement;
    var artyomOn = false;
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", function () {
        addTodo(inputDOMElement.value);
    });
    function counter() {
        document.querySelector("#counterToDo").innerHTML = String(index);
        openDOMElement.innerHTML = openTask + " tasks open";
        doneDOMElement.innerHTML = done + " tasks done";
    }
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput() {
        input.value = "";
    }
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo() {
        index++;
        counter();
        var artyomOn = false;
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
        addButtonDOMElement.addEventListener("click", function () {
            todo(inputDOMElement.value);
        });
    }
    window.addEventListener("load", function () {
        const artyom = new Artyom();
        artyom.addCommands({
            smart: true,
            indexes: ["Erstelle Aufgabe *"],
            action: function (i, wildcard) {
                artyomOn = true;
                todo(wildcard);
            }
        });
        document.querySelector("#record").addEventListener("click", function () {
            artyom.dontObey();
            artyom.initialize({
                lang: "de-DE"
            });
            setTimeout(function () {
                artyom.obey();
            }, 8000);
            startArtyom();
        });
        function startArtyom() {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                speed: 1
            });
        }
    });
});
//# sourceMappingURL=script_1.js.map