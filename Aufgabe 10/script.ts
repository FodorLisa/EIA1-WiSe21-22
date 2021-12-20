declare var Artyom: any;

window.addEventListener("load", function (): void {
    const artyom: any = new Artyom();

/* Konstante für Eingabefeld*/
    const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
    let index: number = 0;
    let open: number = 0;
    let done: number = 0;
    
    document.addEventListener("keydown", function (event: KeyboardEvent): void { 
        if (event.keyCode == 13) {
            createToDo(input.value);
            clearInput();
        }
    });
    
    /* Counter für Anzahl ToDos*/
    function counter(): void {
        document.querySelector("#counterToDo").innerHTML = String(index);
        document.querySelector("#counterOpen").innerHTML = String(open);
        document.querySelector("#counterDone").innerHTML = String(done);
    }
    
    /* Aufgabe wenn auf Trash Button gedrückt wird*/
    function clearInput(): void {
        input.value = "";
    }
    
    /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
    function createToDo(aufgabe: string): void {
        index++;
        open++;
        counter();
    
        let wrapper: HTMLElement = document.getElementById("wrapIt");
        let placeHolder: HTMLDivElement = document.createElement("div");
        let checkbox: HTMLInputElement = document.createElement("input");
        let label: HTMLElement = document.createElement("label");
        let trashButton: HTMLElement = document.createElement("i");
          
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
    
        trashButton.addEventListener("click", function (): void {
            wrapper.removeChild(placeHolder);
            index--;
            if(checkbox.checked) {
                done--;
            } else {
                open--;
            }
            counter();
        });

        checkbox.addEventListener("click", function(): void {
            if(checkbox.checked) {
                done++;
                open--;
            } else {
                done--;
                open++;
            }
            counter();
        })
    
    }
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            createToDo(wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        console.log('start')
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }

    document.querySelector("#artyom").addEventListener('click', function () {
        startContinuousArtyom();
        (document.querySelector("#artyom") as HTMLButtonElement).disabled = true;
    })
    
    });