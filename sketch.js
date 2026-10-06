let xMax = 400;
let yMax = 600;

let xsquare = xMax/2;
let ysquare = yMax*0.6;

let xbarchetta = 100;
let ybarchetta = 320;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(230, 127,80);
  
push();
  
   //parte bassa della finestra
 fill(250,216,178); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 rectMode(CENTER);//lo faccio partire dal centro
 rect(xsquare, ysquare-60,250, 380);//coordinate x, coordinate y e misura del lato

   //prova del davanzale
 fill(200, 127,80); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 rectMode(CENTER);//lo faccio partire dal centro
 rect(xsquare, ysquare+110, 250, 40, 0);

 fill(150, 127,80); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 triangle(xsquare-125, ysquare+130, xsquare-125, ysquare+90, xsquare-110, ysquare+90);

pop();

push();
  
    //lago
 fill(0,206,209); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 rectMode(CENTER);//lo faccio partire dal centro
 rect(xsquare, ysquare+50, 250, 80, 0);

  //prova dell'uso di loop for per le lineette dell'acqua 
 stroke(0, 140, 160); 
 strokeWeight(1.5);   

 for (let i = 0; i < 20; i++) {

  
  let lx = xsquare - 100 + ((i * 39) % (210)); //distribuzione delle righette sulla x
  
  
  let ly = ysquare + 25 + ((i * 73) % 70); //distirbuzione delle    righette sulla y 
  
  
  line(lx, ly, lx + 12, ly); // dimensioni delle righette
}
  
pop();

    
push();
  
   //montagne 

 fill(4,37,9); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 triangle(xsquare+125, ysquare-15, xsquare-125, ysquare-35, xsquare-55, ysquare-115);

 fill(9,66,23); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 triangle(xsquare+125, ysquare+15, xsquare-90, ysquare+15, xsquare+20, ysquare-130);

 fill(85,107,47); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 triangle(xsquare-125, ysquare+15, xsquare-25, ysquare+15, xsquare-125, ysquare-130);

 fill(46,139,87); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 triangle(xsquare+125, ysquare+15, xsquare-45, ysquare+15, xsquare+125, ysquare-130);

pop();

push();
  
  //prova barca

 fill(139,69,19);
 stroke();
 strokeWeight();
 rectMode(CENTER);
 rect(xbarchetta-25, ybarchetta+80, 45,25);

 fill(139,69,19);
 stroke();
 strokeWeight();
 triangle(xbarchetta-3, ybarchetta+93, xbarchetta-3, ybarchetta+67.5, xbarchetta+15, ybarchetta+67.5);

 fill(139,69,19);
 stroke();
 strokeWeight();
 triangle(xbarchetta-47, ybarchetta+93, xbarchetta-67.5, ybarchetta+67.5, xbarchetta-47.5, ybarchetta+67.5);

 fill(255,99,71);
 stroke();
 strokeWeight();
 triangle(xbarchetta-40, ybarchetta+67.5, xbarchetta-40, ybarchetta+15, xbarchetta-10, ybarchetta+67.5);

pop();
  
   //prospettiva verticale
 fill(150,127,80);
 stroke();
 strokeWeight();
 rectMode(CENTER);
 rect(xsquare-117.5, ysquare-80, 15, 340)

  
   //sole

 fill(228,174,30); //riempimento
 stroke(); //bordo
 strokeWeight(0); //spessore del bordo
 ellipse(xsquare-50, ysquare-180, 50, 50);

   //per coprire la barchetta nei lati 

 fill(230, 127,80);
 stroke();
 strokeWeight();
 rectMode(CENTER);
 rect(xsquare-162.5, ysquare+15, 75,90);
  
 fill(230, 127,80);
 stroke();
 strokeWeight();
 rectMode(CENTER);
 rect(xsquare+162.7, ysquare+15, 75,90);

  //per creare il loop: quando la x della barchetta supera i 400 px della canvas, torna in posizione iniziale a 80
  //sennò si poteva usare xbarchetta = (xbarchetta+1)%(xMax+120);
xbarchetta = xbarchetta +1
  if (xbarchetta>400) {
    xbarchetta = 80
  }
}
