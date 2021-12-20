window.addEventListener("load", function (): void {
/* Konstante für Eingabefeld*/
    const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
    let index: number = 0;
    
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.keyCode == 13) {
            createToDo();
            clearInput();
        }
    });
    
    var done: number = 1;
    var openTask: number = 2;

    /* Counter für Anzahl ToDos*/
    var inputDOMElement: HTMLInputElement; 
    var addButtonDOMElement: HTMLElement;
    var todosDOMElement: HTMLElement;
    // Hinzufügen Variablen Counter und Sprachsteuerung
    var counterDOMElement: HTMLElement;
    var openDOMElement: HTMLElement;
    var doneDOMElement: HTMLElement;
    var artyomOn: boolean = false;
   
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
   
    addButtonDOMElement.addEventListener("click", function(): void {
        addTodo(inputDOMElement.value);
    });
    function counter(): void {
        document.querySelector("#counterToDo").innerHTML = String(index);
        openDOMElement.innerHTML = openTask + " tasks open";
        doneDOMElement.innerHTML = done + " tasks done";
    }
    
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput(): void {
        input.value = "";
    }
    
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo(): void {
        index++;
        counter();
    
        var artyomOn: boolean = false;
        let wrapper: HTMLElement = document.getElementById("wrapIt");
        let placeHolder: HTMLDivElement = document.createElement("div");
        let checkbox: HTMLInputElement = document.createElement("input");
        let label: HTMLElement = document.createElement("label");
        let trashButton: HTMLElement = document.createElement("i");
        
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
    
        trashButton.addEventListener("click", function (): void {
            wrapper.removeChild(placeHolder);
            index--;
            counter();
        });
        addButtonDOMElement.addEventListener("click", function(): void {
            todo(inputDOMElement.value);
        });
    
    }
    window.addEventListener("load", function(): void {
        const artyom: any = new Artyom();
        artyom.addCommands({
            smart: true,
            indexes: ["Erstelle Aufgabe *"],
            action: function (i: any, wildcard: string): void {
            artyomOn = true;
                todo(wildcard);
            }
        });
    
        document.querySelector("#record").addEventListener("click", function(): void {
            artyom.dontObey();
            artyom.initialize({
                lang: "de-DE"
            });
            setTimeout(function (): void {
                artyom.obey();
            },         8000);
            startArtyom();
        });
        function startArtyom(): void {
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