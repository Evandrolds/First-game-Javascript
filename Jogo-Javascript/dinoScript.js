const personagem = document.querySelector('.personagem');
const background_image = document.querySelector('.background_image');
console.log(background_image);
let isJumping = false;
let position = 0;

function handleKeyUp(event){
   if(event.keyCode === 32){
      if(!isJumping){
      jump();
      }
   }
}
 function jump(){
    isJumping = true;
    
    let upInterval = setInterval(() => { // setTimeOut
        if(position >= 150){ //Jump height
           clearInterval(upInterval);

           // Down
         let downInterval = setInterval(() =>{
             if(position <= 20){
            clearInterval(downInterval);
            isJumping = false;
         }else{
            position -= 20;
            personagem.style.bottom = position + 'px';
         }
        }, 20);
    }else{
       // Up
position += 20;
personagem.style.bottom = position + 'px';
   }
  },20);
}
function createEnemy(){
   const enemy = document.createElement('div');
   let enemyPosition = 1600;
   let randomTime = Math.random() * 6000;
   
   enemy.classList.add('enemy');
   enemy.style.left = 1600 + 'px';
   background_image.appendChild(enemy);

   let leftInterval = setInterval(() => {
      if(enemyPosition < -60){
         clearInterval(leftInterval);
        background_image.removeChild(enemy);
        
            }else if(enemyPosition > 0 && enemyPosition < 60 && position < 60){
               //Game over
               clearInterval(leftInterval);
               document.body.innerHTML = '<h1 class="game-over"> Game Over (Pressione F5 para Jogar Novamente!) </h1>';
            }else{
         enemyPosition -= 10; // Enimy speed
         enemy.style.left = enemyPosition + 'px';
      }
   },20);
   setTimeout(createEnemy,randomTime);
}
createEnemy();
document.addEventListener('keyup',handleKeyUp);
