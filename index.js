const names = ["Lisa", "Kaitlin", "Jan"];
const event = ["surprise"];

function writeCards(names, event) {
    const messagesArray = []
    for (let i = 0; i < names.length; i++) {
        console.log(i)
        let greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messagesArray[i] = greeting;
    }
    
    return messagesArray;
}

function countDown(number) {
    let i = 0;
    while (number >= 0) {
        i++;
        console.log(number);
        number--;
    }

}

writeCards(names, event);
console.log(writeCards(names, event));
console.log(countDown(10));
console.log(countDown(4));// Code your solutions in this file
