// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}



function writeCards(names,event){
    const new_arr=[];
    for(let i = 0 ; i < names.length ; i++){
        let msg = `Thank you, ${names[i]}, for the wonderful surprise gift!`
        new_arr.push(msg);
    }
    return new_arr;
    }

function countDown(number){
    while(number>=0){
        console.log(number--);
    }
}