namespace Aufgabe10{

declare var Artyom: any;

window.addEventListener("load", function (): void {
    /* Konstante für Eingabefeld*/
        const input: HTMLInputElement = (document.getElementById("toDo") as HTMLInputElement);
        const wrapper: HTMLElement = document.getElementById("todoWrapper");


        let countertoDo: number = 0;
        let openCounter: number = 1;
        let doneCounter: number = 0;
        
        document.addEventListener("keydown", function (event: KeyboardEvent): void { 
            if (event.key === "Enter") {
                createToDo();
                clearInput();
            }
        });
        
        /* Counter für Anzahl ToDos*/
        function counter(): void {
            document.querySelector("#counterToDo").innerHTML = String(countertoDo) + " in total";
        }

        function counter1(): void {
            document.querySelector("#openCounter").innerHTML = String(openCounter) + " in total";
        }

        function counter2(): void {
            document.querySelector("#doneCounter").innerHTML = String(doneCounter) + " in total";
        }
        
        /* Aufgabe wenn auf Trash Button gedrückt wird*/
        function clearInput(): void {
            input.value = "";
        }
        
        /* To Do erstellen mit Anzeige Trash-Button, Checkbox und ToDo */
        function createToDo(): void {
            countertoDo++;
            openCounter++;
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
                countertoDo--;
                counter();
            });
        
        }
        
        });
        
window.addEventListener("load", function(): void {
            const artyom: any = new Artyom();
            artyom.addCommands({
                smart: true,
                indexes: ["Erstelle Aufgabe *"],
                action: function (i: any, wildcard: string): void {
                    artyomOn = true;
                    addTodo(wildcard);
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
    }