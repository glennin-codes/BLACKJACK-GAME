  
  let player={
    name:"Glen",
    chips: 145

  }

    let cards=[]
    let sum=0
    let hasblackjack=false
    let isAlive=false
    let message=""
    let messageEl=document.getElementById("message-el")
    let  sumEl=document.getElementById("sum-el")
    let  cardEl=document.getElementById("card-el")
    let playerEl=document.getElementById("player-el")

    playerEl.textContent= player.name+": $"+player.chips
    function getrandomnum(){
        let randomNum = Math.floor(Math.random()*13)+1
      if ( randomNum===1) {
        return 11
      }else if( randomNum >10){
        return 10
    }else{
      return randomNum
    }
  }

            function startGame(){
              isAlive=true
              let firstcard=getrandomnum()
              let secondcard=getrandomnum()
                cards=[firstcard,secondcard]
              sum=firstcard+secondcard
                renderGame()
            }
      function renderGame() {
        sumEl.textContent= "Sum: " + sum
       cardEl.textContent="Cards: "
        for(let i=0; i<cards.length;i++){
          cardEl.textContent +=   cards[i] +" "
        } 
        if (sum <= 20) {
             
              message="Do you want to draw a new card?"
          }else if(sum== 21){
             message="You've got a blackjack!"
             hasblackjack=true 
          }else{
              message="You're out of the game!"
              isAlive=false
          }
          messageEl.textContent=message
         
        }
        function newcard() {
          if (isAlive===true && hasblackjack===false) {
            
            let card=getrandomnum()
            sum+=card
            cards.push(card)
            renderGame()
               
          }else{

          }
        }
        
        
        
        
         
          




           
           