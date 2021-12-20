window.addEventListener("load", function (): void {
/* Konstante für Eingabefeld*/
    const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
    let toDoCount: number = 0;
    let openCount: number = 0;
    let doneCount: number = 0;


    
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.keyCode == 13) {
            createToDo();
            clearInput();
        }
    });
    
    /* Counter für Anzahl ToDos*/
    function counter(): void {
        document.querySelector("#counterToDo").innerHTML = String(toDoCount) + " in total";
    }

    function openCounter():void {
        document.querySelector("#counterOpen").innerHTML = String(openCount) + " in total";
    }

    function doneCounter():void {
    document.querySelector("#counterDone").innerHTML = String(doneCount) + " in total";
    }
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput(): void {
        input.value = "";
    }
    
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo(): void {
        toDoCount++;
        openCount++;
        updateCounter();
        updateOpenCounter();
        updatedoneCounter();
        counter();
    
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
            toDoCount--;
            counter();
        });
    
    }
    
    });