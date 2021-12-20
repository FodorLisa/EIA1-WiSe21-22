namespace Aufgabe10{ 

// Arbeiten mit Interfaces für bessere Performance
 interface TodoInterface {
    text: string;
    checked: boolean;
}

 var todosArray: TodoInterface[] = [
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
 var inputDOMElement: HTMLInputElement; 
 var addButtonDOMElement: HTMLElement;
 var todosDOMElement: HTMLElement;
 // Hinzufügen Variablen Counter und Sprachsteuerung
 var counterDOMElement: HTMLElement;
 var openDOMElement: HTMLElement;
 var doneDOMElement: HTMLElement;
 var artyomOn: boolean = false;


 window.addEventListener("load", function(): void {

    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
   
    addButtonDOMElement.addEventListener("click", function(): void {
        addTodo(inputDOMElement.value);
    });

 
    drawListToDOM();
});

 function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosArray.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");


        todo.innerHTML =  "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                            + todosArray[index].text +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
 
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
         
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
        
        //Localstorage:
        const key: string = inputDOMElement.value;
        const storageValue: string = inputDOMElement.value;
        localStorage.setItem(key, storageValue);
    }

    updateCounter();
}
//Anlegen von Variablen done und OpenTask für Counter 
 var done: number = 1;
 var openTask: number = 2;

//Funktion für Variablen
 function updateCounter(): void {
    counterDOMElement.innerHTML = todosArray.length;
    openDOMElement.innerHTML = openTask + " tasks open";
    doneDOMElement.innerHTML = done + " tasks done";
}

 function addTodo(text: string): void {
    if (inputDOMElement.value != "") {
        todosArray.unshift({
            text: inputDOMElement.value,
            checked: false
        });
     
        inputDOMElement.value = "";

        openTask ++;
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
 function toggleCheckState(index: number): void {

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
 function deleteTodo(index: number): void {
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