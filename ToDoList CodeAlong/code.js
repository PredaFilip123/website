/*const testScores =
{
    Keenan: 80,
    Damon: 67,
    Kim: 89,
    Shawn: 91,
    Marlon: 72,
    Dwayme: 77,
    Nadia: 83,
    Elvira: 97,
    Diedre: 81,
    Vonnie: 60
}

for (let person in testScores) 
{
    console.log(`${person} scored ${testScores[person]}`);
}

let total=0;
let scores = Object.values(testScores);//*variabila memoreaza fiecare element din lista testScores
for(let score of scores)
{
    total+=score;
}
console.log(`The average is ${total/scores.length}`);
*/
//!O MINI-APLICATIE TO DO IN BROWSER FOLOSIND INTRODUCERI DE LA TASTATURA PRIN FUNCTIA PROMPT
//*functia prompt introduce in variabila sau in consola orice input de la tastatura
let message = prompt("What would you like to do?");
const todos = ["Get Milk", "Do homework"];

while(message !== "quit" && message!=="q")
{
    if(message === "list")
    {
        console.log("******************");
        for(let i = 0; i < todos.length; i++)
        {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("******************");
    }
    else if(message === "new")
    {
        const newToDo = prompt("What is the new to do?");
        todos.push(newToDo);//!se 'impinge' elementul inserat prin prompt in lista
        console.log(`${newToDo} added to the list`);
    }
    else if(message === "delete")
    {
        const number = parseInt(prompt("What number would you like to delete?"));//parseInt transforma o variabila de tip string in numar(Int)
        if(!Number.isNaN(number))//!Number.isNan verifica daca ce a fost introdus este numar sau caracter
        {
        const deleted = todos.splice(number,1);
        console.log(`You deleted ${deleted[0]}`);
        }
        else
        {
        console.log("Unknown command");
        }
    }
    message = prompt("What would you like to do?");
}
console.log("Have a good day");


