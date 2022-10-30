var cvs = document.getElementById('canvas');
var ctx = cvs.getContext("2d");

// load images 

 var bird  = new Image();
 var bg = new Image();
 var fg  = new Image();
 var pipNorth  = new Image();
 var pipSouth = new Image();

bird.src = "bird.png";
bg.src = "bg.png";
fg.src = "fg.png";
pipNorth.src = "northpip.png";
pipSouth.src = "southpip.png";

// somne variables
var gap = 120 ;
var constant = pipNorth.height+gap;

 var bx = 50 ;
 var by = 100 ; 

 var gravity = 1.5;
 var score = 0 ;
   

   // on kew down  
  document.addEventListener("keyup",moveup);
 function moveup(){
 	by -= 30;

 }

 // pip coodintets 
    var pipe = [];
    pipe[0] ={
    	x: cvs.width,
    	y:0
    }

// draw image 

function draw(){
	ctx.drawImage(bg,0,0);
	for (var i = 0; i < pipe.length; i++) {
		ctx.drawImage(pipNorth,pipe[i].x,pipe[i].y);
		ctx.drawImage(pipSouth,pipe[i].x,pipe[i].y+constant);
        pipe[i].x--;
        if ( pipe[i].x ==188){
        	pipe.push({
        		x: cvs.width,
        		y: Math.floor(Math.random()*pipNorth.height)-
        		pipNorth.height
        	});
			}
			
			if(bx+bird.width >= pipe[i].x && bx <= pipe[i].x + pipNorth.width
				&&(by <= pipe[i].y + pipSouth.height || by+bird.height >=pipe[i].y+constant)
				|| (by + bird.height >= cvs.height-fg.height)) {
					alert("Game Over .Your Score is:"+ score)
					location.reload();
				}

			if(pipe[i].x == 1 ){
				score ++ 
			}
        }

	
	ctx.drawImage(fg,0,cvs.height-fg.height);
    ctx.drawImage(bird,bx,by);
    by +=gravity;
   

    ctx.fillstyle = "#000";
    ctx.font = "20px Cooper Black  ";
    ctx.fillText("Score : " +score,10, 20)
   
    requestAnimationFrame(draw);
}

draw();