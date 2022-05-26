// Implementation of stack using 2 queue

let q1 = []
let q2 = []

function push(x){
    q1.push(x);
}

function pop(){
    while(q1.length != 1){
        q2.push(q1[0])
        q1.shift();
    }
    console.log(`pop ${q1[0]}`);
    q1.shift();
    let temp = q1;
    q1 = q2;
    q2 = temp;
}

push(10);
push(20);
pop();
push(31)
pop()