class Button {
constructor(){
    this.tittle = createElement('h2')
    this.spiderr = createButton('Spiderman'); 
    this.wanda = createButton('Scarlet Witch');
    this.iron = createButton('Ironman');
    this.dr = createButton('Dr.Strange');
}
dislplay(){
   this.tittle.html("Marvel Universe");
   this.tittle.position(400,750);

   this.spiderr.position(20,700);
   this.wanda.position(70,700);
   this.ant.position(120,700);
   this.iron.position(170,700);
   this.dr.position(220,700);

   this.spiderr.mousePressedOver(()=>{
       background("yellow"); 
       s1.dislplay();
       s1.position(20,650);
       s2.dislplay();
       s1.position(30,650);
       s3.dislplay();
       s3.position(40,650)
       s4.dislplay();
       s4.position(20,665);
       s5.dislplay();
       s5.position(30,665);
       s6.dislplay();
       s6.position(40,665);
       text("There have been atleast 15 actors before Tom Holland who played the role spiderman. The top 3 were Tom Holland, Andrew Garfeild and Tobey Maguire. My favorite has always been Tom Holland.",20,350);

   })
   this.wanda.mousePressedOver(()=>{
    background("yellow"); 
    w.dislplay();
    w.position(20,650);
    w1.dislplay();
    w1.position(30,650);
    w2.dislplay();
    w2.position(40,650)
    w3.dislplay();
    w3.position(20,665);
    w4.dislplay();
    w4.position(30,665);
    w5.dislplay();
    w5.position(40,665);
    text("Wanda Maximoroff was also present in X-men. She has the power to control chaos magic and intially hated Tony Stark, aka : Ironman. She fell in love with Vision",20,350);
})


}
}