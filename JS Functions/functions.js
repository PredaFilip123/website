function sing()
{
    console.log("ROW");
    console.log("ROW");   
    console.log("ROW");
    console.log("YOUR BOAT");   
}

function greet(name)
{
    console.log(`Bună, ${name}.`);
}

function rant(message)
{
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}

function repeat(str, reps)
{
    for(let i=1;i<=reps;i++)
    console.log(str)
}

function isSnakeEyes(die1, die2)
{
    if(die1)
    console.log('Snake Eyes!');
    else console.log('Not Snake Eyes!');
}

function add(x, y)
{
    let sum = x + y;
    return sum;
}

function capitalize(cap)
{
    let firstLetter = cap.slice(0,1).toUpperCase();
    let cap1 = firstLetter+cap.slice(1,cap.length);
    return cap1;
}

console.log(capitalize("eggplant"));

