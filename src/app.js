function generateCard() {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  const suitIndex = Math.floor(Math.random() * suits.length);
  const valueIndex = Math.floor(Math.random() * values.length);

  const suit = suits[suitIndex];
  const value = values[valueIndex];

  const cardEl = document.getElementById("card");
  const topSuit = document.getElementById("top-suit");
  const bottomSuit = document.getElementById("bottom-suit");
  const cardValue = document.getElementById("card-value");


  cardEl.className = "card";
 
  const suitClass = ["♥","♦"].includes(suit) ? suit === "♥" ? "heart" : "diamond"
                  : suit === "♣" ? "club" : "spade";
  cardEl.classList.add(suitClass);

  topSuit.textContent = suit;
  bottomSuit.textContent = suit;
  cardValue.textContent = value;
}