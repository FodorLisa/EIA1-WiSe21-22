//Aufgabe A
interface Student {
    name: string;
    age: number;
    food: string[];
    studiengang: string;
    currentLocation: string;
}

let listeVonPersonen: Student[] = [
    {
    name: "Lisa",
    age: 28,
    food: ["Lasagne", "Brezel", "Nudeln"],
    studiengang: "MKB1",
    currentLocation: "Brigachtal"
},
{
    name: "Anja",
    age: 30,
    food: ["Lasagne", "Brezel", "Nudeln"],
    studiengang: "MKB1",
    currentLocation: "Waldkirch"
},
{
    name: "Vivien",
    age: 24,
    food: ["Lasagne", "Brezel", "Nudeln"],
    studiengang: "MKB1",
    currentLocation: "Furtwangen"
}
];
//Aufgabe B
for (let index:number = 0; index < listeVonPersonen.length; index++) {
    console.log( listeVonPersonen[index].name);
}

//Aufgabe C
let nums : number [] = [24, 55, 87, 795,5 ,6 ];

let sum: number = 0;

for (let index: number = 0; index < nums.length; index++) {
    sum += nums[index];
}
console.log(sum);