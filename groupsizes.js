const prompt = require('prompt-sync')({sigint: true});

let classSize = Number(prompt("Enter class size: "));


/*

7 = 1 group of 3 and 2 groups of 2

14 = 4 groups of 3 and 1 group of 2

18 = 6 groups of 3 and 0 groups of 2 //evenly divisible by 3

19 = 5 groups of 3 and 2 groups of 2 //remainder 1

20 = 6 groups of 3 and 1 group of 2 //remainder 2

*/

/*

15 = 5 groups of 3 and 0 groups of 2  //evenly divisible by 3
classSize % 3 === 0; 
to get the amount of groups:
classSize / 3; => 15/3 = 5;

16 = 4 groups of 3 and 2 groups of 2 //remainder 1
classSize % 3 === 1 //16 % 3 = 1
to get the amount of groups
classSize -= 4 //takes into account our 2 groups of 2 
classSize / 3; classSize / 3; to get groups of 3

16 - 4 = 12 (2 groups of 2)
12 / 3 = 4; (4 groups of 3)


17 = 5 groups of 3 and 1 group of 2 //remainder 2
classSize % 3 === 2; 17 % 3 = 2
to get the amount of groups:
classSize -= 2 //takes into account our 1 group of 2
classSize / 3; to get groups of 3

17 - 2 = 15 (1 group of 2) //we subtracted to, to account for our 1 group of 2
15 / 3 = 5 (5 groups of 3)

*/

let groupsOf3 = 0;
let groupsOf2 = 0;

//evenly divisible
if (classSize % 3 === 0){ 
    groupsOf3 = classSize/3;
    // groupsOf2 = 0;
}

//remainder 1
if (classSize % 3 === 1){ 
    classSize -= 4;
    groupsOf2 = 2;
    groupsOf3 = classSize / 3;
}

//remainder 2
if (classSize % 3 === 2){ 
    classSize -= 2;
    groupsOf2 = 1;
    groupsOf3 = classSize / 3;  
}

console.log("Groups of 3: " + groupsOf3);
console.log("Groups of 2: " + groupsOf2);














