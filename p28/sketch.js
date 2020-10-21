const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  connection;

function preload()
{
	boyImage = loadImage("images/boy.png")
	treeImage = loadImage("images/tree.png")
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,690,1200,20);
	stone = new Stone(150,570,20)
	//tree = new Tree(600,400,500,600);
	mango1 = new Mango(400,300,30);
	mango2 = new Mango(450,320,20);
	mango3 = new Mango(500,290,30);
	mango4 = new Mango(470,300,20);
	mango5= new Mango(540,200,25);
	mango6 = new Mango(470,260,10);
	mango7 = new Mango(490,230,15);
	mango8 = new Mango(600,300,30);
	mango9 = new Mango(450,320,20);
	mango10 = new Mango(650,190,30);
	mango11 = new Mango(770,300,20);
	mango12= new Mango(740,340,30);
	mango13 = new Mango(670,290,10);
	mango14 = new Mango(590,160,15)
	mango15= new Mango(740,280,30);
	mango16 = new Mango(690,260,25);
	mango17 = new Mango(590,230,15);
	mango18 = new Mango(680,300,30);
	mango19 = new Mango(650,320,20);
	connection = new Connection(stone.body,{x:150,y:570});

	Engine.run(engine);
  
}


function draw() {
  
  background(200,200,255);
  fill("white");
  textSize(30);
  text("press space to try again",50,50);
 //display tree,boy and mangoes
  disp_etc();
  ground.display();
  stone.display();
  
  knockMango();
  drawSprites();
 
}


function mouseDragged(){

	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	//connection.launch();
	setTimeout(()=>{connection.launch();},100);
}

function keyPressed(){
	if(keyCode==32){
		Body.setPosition(stone.body,{x:150,y:570})
		connection.attach(stone.body);

	}

}

function disp_etc(){
	//display boy and tree
	push();
	imageMode(CENTER);
	image(boyImage,200,630,150,250);
	image(treeImage,600,400,500,600);
	pop();
	//display all mangoes
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();
	mango10.display();
	mango11.display();
	mango12.display();
	mango13.display();
	mango14.display();
	mango15.display();
	mango16.display();
	mango17.display();
	mango18.display();
	mango19.display();
}

function knockMango(){
    if(collides(stone,mango1)){
		Body.setStatic(mango1.body,false);
	}
	if(collides(stone,mango2)){
		Body.setStatic(mango2.body,false);
	}
	if(collides(stone,mango3)){
		Body.setStatic(mango3.body,false);
	}
	if(collides(stone,mango4)){
		Body.setStatic(mango4.body,false);
	}
	if(collides(stone,mango5)){
		Body.setStatic(mango5.body,false);
	}
	if(collides(stone,mango6)){
		Body.setStatic(mango6.body,false);
	}
	if(collides(stone,mango7)){
		Body.setStatic(mango7.body,false);
	}
	if(collides(stone,mango8)){
		Body.setStatic(mango8.body,false);
	}
	if(collides(stone,mango9)){
		Body.setStatic(mango9.body,false);
	}
	if(collides(stone,mango10)){
		Body.setStatic(mango10.body,false);
	}
	if(collides(stone,mango11)){
		Body.setStatic(mango11.body,false);
	}
	if(collides(stone,mango12)){
		Body.setStatic(mango12.body,false);
	}
	if(collides(stone,mango13)){
		Body.setStatic(mango13.body,false);
	}
	if(collides(stone,mango14)){
		Body.setStatic(mango14.body,false);
	}

	if(collides(stone,mango15)){
		Body.setStatic(mango15.body,false);
	}
	if(collides(stone,mango16)){
		Body.setStatic(mango16.body,false);
	}
	if(collides(stone,mango17)){
		Body.setStatic(mango17.body,false);
	}
	if(collides(stone,mango18)){
		Body.setStatic(mango18.body,false);
	}
	if(collides(stone,mango19)){
		Body.setStatic(mango19.body,false);
	}
}

function collides(objA,objB){

	if( Math.abs(objA.body.position.x-objB.body.position.x)<=objA.radius+objB.radius &&  Math.abs(objA.body.position.y-objB.body.position.y)<=objA.radius+objB.radius){
		return true;
	}
	else{
		return false;
	}
}