//Create variables here
var dog, dogIm, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dogIm.loadImage("images/dogImg.png");
  happyDog.loadImage("images/dogImg1.png");


}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  
  dog=createSprite(200,200,20,20);
  dog.addImage(dogIm);
  dog.addImage(happyDog)

  foodStock=database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46,139,87);

if(keyWentDown(UP_ARROW)){

writeStock(foodS);
dog.addImage(happyDog)
}


  drawSprites();
  //add styles here

  textSize(40)
  stroke(50)
  text("Press The UP_ARROW Key To Feed The Dog Milk!", 200,10);

  textSize(30)
  fill("red")
  stroke(100);
  text(foodStock, 20, 20);

}

function readStock(data){

foodS=data.val();


}

function writeStock(x){

database.ref('/').update({
  Food:x
})


}