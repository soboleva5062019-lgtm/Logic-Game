let cardList = document.querySelectorAll (".card")
for (let index = 0; index < cardList.length; index++) {
  
  let card = cardList[index];
  
  card.onclick = function () {
    if (card.dataset.status === "true") {
      card.innerText = "✅";
    } else {
      card.innerText = "❌";
    }
  };
}
  