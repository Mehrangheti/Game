
let user= document.querySelectorAll('.image');
let cpu= document.querySelectorAll('.image-cpu');

for(let i=0; i <= user.length - 1; i++) {
    user[i].addEventListener('click', (e) =>{
    hidden(i);
      let cpuRandom= Number( Math.floor((Math.random()*10)/4));
      cpu[cpuRandom].classList.remove('hidden');
      gamelogic(i,cpuRandom);

    });
}

function hidden(i){
    for(let j=0; j <= user.length - 1; j++) {
        if(j != i) {
            user[j].classList.add('hidden');
    }
}    document.querySelector('.btn').addEventListener('click' , () =>{
    for(let i=0; i <= user.length - 1; i++) {
        user[i].classList.remove('hidden');
        cpu[i].classList.add('hidden');
      }
})
      
}


function gamelogic(user,cpu) {
    const use = document.querySelector('#user-point');
    const cp = document.querySelector('#cpu-point');
    
      if(user !== cpu) {
        if(user==0) {
            if(cpu==1){
                use.textContent = Number(use.textContent) + 1;
            }else{
                cp.textContent = Number(cp.textContent) + 1;
            }
        }
        if (user==1){
           if(cpu==0) {
                cp.innerHTML = Number(cp.innerHTML) + 1;
           } else {
                use.innerHTML = Number(use.innerHTML) + 1;
           }
        }
         if(user==2) {
            if(cpu==0){
                use.innerHTML = Number(use.innerHTML) + 1;
            } else {
                cp.innerHTML = Number(cp.innerHTML) + 1;

            }
         }    
    } 
}
