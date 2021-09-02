//protos
block=document.querySelector('.block');
ship=document.querySelector('.ship');
ship_style=getComputedStyle(ship);
block_style=getComputedStyle(block);
var play=document.querySelector('.play');
var score=document.querySelector('.score');
var score_head=document.querySelector('.score-head');

//docs
document.querySelector('.doge-up').addEventListener('click',()=>{
    document.querySelector('.ship').classList.add('change');
    
})

document.querySelector('.doge-down').addEventListener('click',()=>{
    document.querySelector('.ship').classList.remove('change');
})

//variables

var pos=690;
var count=0;
var diff;
var mov=0;
var pos_tracker;



//appending protos
var button_2=document.createElement('button');
button_2.className='try-btn';
button_2.innerHTML="Try Again";


var detail=document.createElement('div');
detail.className='score-card';


//insertion of protos



var insertion_between=document.querySelector('.container');
var insertion_before=document.querySelector('.ship');
insertion_between.insertBefore(detail,insertion_before);
insertion_between.insertBefore(button_2,insertion_before);
//disabling protos

block.style.display='none';
ship.style.display='none';
play.style.display='';
detail.style.display='none';
button_2.style.display='none';

//try again

button_2.addEventListener('click',()=>{
    button_2.style.display='none';
    detail.style.display='none';
    score_head.style.display='';
    block.style.display='';
    block.style.marginTop='160px';
    block.style.marginLeft='690px';
    ship.style.display='';
    score.innerHTML=0;
    
    count=0;
    game();
})

play.addEventListener('click',()=>{
    block.style.display='';
ship.style.display='';
play.style.display='none';
block.style.marginTop='160px';
block.style.marginLeft='690px';

button_2.style.display='none';


game(); 
})

function game(){
    items_refined=[];
    for(var i=0;i<90;i++){
        var num_refined=Math.floor(Math.random()*10);
        items_refined[i]=num_refined;
    }
    
    t=setInterval(move,50);
}

function move(){
    detail.innerHTML="Score: "+count;
    if(count===0){
        if(items_refined[count]%2==0){
            mov+=10;
            diff=pos-mov;
            pos_tracker=diff;
            block.style.marginLeft=diff+'px';
            block.style.marginTop='50px';
            if(pos_tracker===130 && ship_style.marginTop==='50px'){  
                clearInterval(t);
            block.style.display='none';
          ship.style.display='none';
          detail.style.display='';
          button_2.style.display='';
          button_2.innerHTML='Try Again';
          score_head.style.display='none';
          mov=0;
          detail.innerHTML="Score: "+count;
          diff=pos;
          }
            }
          else{
            mov+=10;
            diff=pos-mov;
            pos_tracker=diff;
            block.style.marginLeft=diff+'px';
            block.style.marginTop='160px';
            if(pos_tracker===130 && ship_style.marginTop==='160px'){  
                clearInterval(t);
            block.style.display='none';
          ship.style.display='none';
          detail.style.display='';
          button_2.style.display='';
          button_2.innerHTML='Try Again';
          score_head.style.display='none';
          mov=0;
          detail.innerHTML="Score: "+count;
          diff=pos;
          }
       } 
           }
        
    
    
        
    
    if(diff<100){
        count++;
        mov=0;
        block.style.marginLeft='690px';
        score.innerHTML=count;
        diff=pos;
        
    }
    if(count===1){
           
        if(items_refined[count]%2==0){
            mov+=10;
            diff=pos-mov;
            pos_tracker=diff;
            block.style.marginLeft=diff+'px';
            block.style.marginTop='50px';
            if(pos_tracker===130 && ship_style.marginTop==='50px'){  
                clearInterval(t);
            block.style.display='none';
          ship.style.display='none';
          detail.style.display='';
          button_2.style.display='';
          button_2.innerHTML='Try Again';
          score_head.style.display='none';
          mov=0;
          detail.innerHTML="Score: "+count;
          diff=pos;
          }
            }
          else{
            mov+=10;
            diff=pos-mov;
            pos_tracker=diff;
            block.style.marginLeft=diff+'px';
            block.style.marginTop='160px';
            if(pos_tracker===130 && ship_style.marginTop==='160px'){  
                clearInterval(t);
            block.style.display='none';
          ship.style.display='none';
          detail.style.display='';
          button_2.style.display='';
          button_2.innerHTML='Try Again';
          score_head.style.display='none';
          mov=0;
          detail.innerHTML="Score: "+count;
          diff=pos;
          }
       }
    }
    if(count===2){
      if(items_refined[count]%2==0){
        mov+=10;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=10;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
    if(count===3){
        if(items_refined[count]%2==0){
            mov+=15;
            diff=pos-mov;
            pos_tracker=diff;
            block.style.marginLeft=diff+'px';
            block.style.marginTop='50px';
            if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
                clearInterval(t);
            block.style.display='none';
          ship.style.display='none';
          detail.style.display='';
          button_2.style.display='';
          button_2.innerHTML='Try Again';
          score_head.style.display='none';
          mov=0;
          detail.innerHTML="Score: "+count;
          diff=pos;
          }
            }
          else{
            mov+=15;
            diff=pos-mov;
            pos_tracker=diff;
            block.style.marginLeft=diff+'px';
            block.style.marginTop='160px';
            if(pos_tracker>=110 && pos_tracker <=130 && ship_style.marginTop==='160px'){  
                clearInterval(t);
            block.style.display='none';
          ship.style.display='none';
          detail.style.display='';
          button_2.style.display='';
          button_2.innerHTML='Try Again';
          score_head.style.display='none';
          mov=0;
          detail.innerHTML="Score: "+count;
          diff=pos;
          }
       }
    }
if(count===4){
    if(items_refined[count]%2==0){
        mov+=15;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=15;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===5){
    if(items_refined[count]%2==0){
        mov+=15;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=15;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===6){
    if(items_refined[count]%2==0){
        mov+=15;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=15;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===7){
    if(items_refined[count]%2==0){
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===8){
    if(items_refined[count]%2==0){
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===9){
    if(items_refined[count]%2==0){
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}

if(count===10){
    if(items_refined[count]%2==0){
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===11){
    if(items_refined[count]%2==0){
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
 if(count===12){
    if(items_refined[count]%2==0){
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=20;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
 }
 if(count===13){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
 }
 if(count===14){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
 }
if(count===15){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
 }
 if(count===16){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===17){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===18){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===19){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===20){
    if(items_refined[count]%2==0){
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=25;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=140 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===21){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===22){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===23){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===24){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===25){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===26){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===27){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===28){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===29){
    if(items_refined[count]%2==0){
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=30;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===30){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===31){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===32){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===33){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===34){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===35){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===36){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===37){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===38){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===39){
    if(items_refined[count]%2==0){
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=35;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===40){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===41){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===42){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===43){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===44){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===45){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===46){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}if(count===47){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===48){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===49){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   } 
}
if(count===50){
if(items_refined[count]%2==0){
    mov+=40;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker===130 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=40;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker===130 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===51){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===52){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===53){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===54){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===55){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===56){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===57){
    if(items_refined[count]%2==0){
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker===130 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=40;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker===130 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===58){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===59){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===60){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===61){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===62){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===63){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===64){
    if(items_refined[count]%2==0){
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=45;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===65){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===66){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===67){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===68){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===69){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===70){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===71){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===72){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===73){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===74){
    if(items_refined[count]%2==0){
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='50px';
        if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
        }
      else{
        mov+=50;
        diff=pos-mov;
        pos_tracker=diff;
        block.style.marginLeft=diff+'px';
        block.style.marginTop='160px';
        if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
            clearInterval(t);
        block.style.display='none';
      ship.style.display='none';
      detail.style.display='';
      button_2.style.display='';
      button_2.innerHTML='Try Again';
      score_head.style.display='none';
      mov=0;
      detail.innerHTML="Score: "+count;
      diff=pos;
      }
   }
}
if(count===75){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===76){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===77){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===78){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===79){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===80){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===81){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===82){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===83){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===84){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===85){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===86){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===87){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}

if(count===88){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}
if(count===89){
  if(items_refined[count]%2==0){
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='50px';
    if(pos_tracker>=110 && pos_tracker<=150 && ship_style.marginTop==='50px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
    }
  else{
    mov+=50;
    diff=pos-mov;
    pos_tracker=diff;
    block.style.marginLeft=diff+'px';
    block.style.marginTop='160px';
    if(pos_tracker>=110 && pos_tracker <=150 && ship_style.marginTop==='160px'){  
        clearInterval(t);
    block.style.display='none';
  ship.style.display='none';
  detail.style.display='';
  button_2.style.display='';
  button_2.innerHTML='Try Again';
  score_head.style.display='none';
  mov=0;
  detail.innerHTML="Score: "+count;
  diff=pos;
  }
}
}

    if(count===90){
        clearInterval(t);
        block.style.display='none';
        ship.style.display='none';
        detail.style.display='';
        button_2.style.display='';
        score_head.style.display='none';
        detail.innerHTML="Superb \n Level 1 Completed \nLevel 2 coming soon";
    
        button_2.innerHTML="play again";
        count=0;
        score.innerHTML=count;
}
}





 
