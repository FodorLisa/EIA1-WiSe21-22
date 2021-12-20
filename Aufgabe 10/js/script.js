var Aufgabe10;
(function (Aufgabe10) {
    var todosArray = [
        {
            text: "Lorem",
            checked: true
        },
        {
            text: "Ipsum",
            checked: false
        },
        {
            text: "Dolor",
            checked: false
        }
    ];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    // Hinzufügen Variablen Counter und Sprachsteuerung
    var counterDOMElement;
    var openDOMElement;
    var doneDOMElement;
    var artyomOn = false;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#inputTodo");
        addButtonDOMElement = document.querySelector("#addButton");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        openDOMElement = document.querySelector("#open");
        doneDOMElement = document.querySelector("#done");
        addButtonDOMElement.addEventListener("click", function () {
            addTodo(inputDOMElement.value);
        });
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        for (let index = 0; index < todosArray.length; index++) {
            let todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosArray[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
            //Localstorage:
            const key = inputDOMElement.value;
            const storageValue = inputDOMElement.value;
            localStorage.setItem(key, storageValue);
        }
        updateCounter();
    }
    //Anlegen von Variablen done und OpenTask für Counter 
    var done = 1;
    var openTask = 2;
    //Funktion für Variablen
    function updateCounter() {
        counterDOMElement.innerHTML = todosArray.length;
        openDOMElement.innerHTML = openTask + " tasks open";
        doneDOMElement.innerHTML = done + " tasks done";
    }
    function addTodo(text) {
        if (inputDOMElement.value != "") {
            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });
            inputDOMElement.value = "";
            openTask++;
            drawListToDOM();
        }
        if (artyomOn == true) {
            todosArray.unshift({
                text: text,
                checked: false
            });
            artyomOn = false;
            openTask++;
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        if (todosArray[index].checked == true) {
            todosArray[index].checked = false;
            done--;
            openTask++;
        }
        else if (todosArray[index].checked == false) {
            todosArray[index].checked = true;
            done++;
            openTask--;
        }
        drawListToDOM();
    }
    function deleteTodo(index) {
        if (todosArray[index].checked == true) {
            done--;
        }
        else if (todosArray[index].checked == false) {
            openTask--;
        }
        todosArray.splice(index, 1);
        drawListToDOM();
    }
    //Einbinden von Artyom in ToDo Liste
    window.addEventListener("load", function () {
        const artyom = new Artyom();
        artyom.addCommands({
            smart: true,
            indexes: ["Erstelle Aufgabe *"],
            action: function (i, wildcard) {
                artyomOn = true;
                addTodo(wildcard);
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
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map