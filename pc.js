let reset = document.querySelector('.but');
reset.addEventListener('click',()=>{
    location.reload();
});
let arr = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
  ];
let pc = [1,2,3,4,5,6,7,8,9];
let btn = document.querySelectorAll('.box');
btn.forEach((b)=>{
    b.addEventListener('click',async (event)=>{
    b.innerText = 'X';
    b.disabled = true;
    if(pc.length != 0)
    pc = pc.filter((item) => item != b.value);
    console.log(b.value);
    console.log(pc);

    if(checkwinner() === ''){
    //await pcmove();
     setTimeout(()=>{
           pcmove();
     },500);
    }
    });
});

function pcmove(){
    //return new Promise((resolve,reject)=>{
    //setTimeout(()=>{
        let move = Math.floor(Math.random() * pc.length);
        console.log(move);
        if(pc.length != 0){
        let position = document.querySelector('#box'+`${pc[move]}`);
        position.disabled = true;
        position.innerText = '0';
        pc = pc.filter((item) => item != pc[move]);
        }
        console.log(pc);
        checkwinner();
    //},500);
    //});
}

function checkwinner(){
    for(let i of arr){
        let p0 = btn[i[0]].innerText;
        let p1 = btn[i[1]].innerText;
        let p2 = btn[i[2]].innerText;
        if(p0 !== '' && p1 !== '' && p2 !== ''){
          if(p0 === p1 && p1 === p2){
            console.log("winner : ",p0);
            showwinner(p0);
            return p0;
          }
        }
       }
    return '';
}

function showwinner(char){
    let result = document.querySelector('.result');
    result.innerText = "Winner is "+char;
    result.style.display = 'block';
    btn.forEach((b)=>{
      b.disabled = true;
    });
  }
