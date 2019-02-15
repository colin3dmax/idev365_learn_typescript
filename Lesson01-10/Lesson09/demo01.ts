// let deck = {
//     suits:["hearts","spades","clubs","diamonds"],
//     cards:Array(52),
//     createCardPicker:function(){
//         return ()=>{
//             let pickedCard = Math.floor(Math.random()*52)
//             let pickedSuit = Math.floor(pickedCard/13)
//             return { suit:this.suits[pickedSuit],card:pickedCard}
//         }
//     }
// }

// let cardPicker = deck.createCardPicker()
// let pickedCard = cardPicker()
// console.log("cards:"+pickedCard.card+" of "+pickedCard.suit)