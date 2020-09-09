/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
var balx = 50;
var baly = 50;
var speedx = 1;
var speedy = 1;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  
  fill(100, 100, 255);
  background("blue")
  // teken een cirkel
  ellipse(balx,baly,80,80);
  balx= balx +1;
  baly = baly+1;

  if (balx >= 1280) {
      speedx = speedx *-1;
  }

  if(baly >= 720) {
      speedy = speedy *-1;
  }
}
