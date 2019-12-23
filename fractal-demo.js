
// single line commentflskafolsdk

window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
       

   context.translate((width / 2), height /2);


    var p0 = {
                x: 0, y: -321
            },
        p1 = {
                x: 278, y: 160
            },
        p2 = {
                x: -278, y: 160
            };
var x = 0,
    fractalD = 1;


window.requestAnimationFrame(function spin() {
    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();
    fractalD += .01;
    
    // context.rotate(Math.PI / 180 );

        fractal(p0, p1, p2, fractalD );

    

    function fractal(p0, p1, p2, lim){
        if(lim > 0){
            const s =  2 ;
            // (1 + (Math.random() * 1));
            var pA = {
                    x: (p0.x + p1.x) / s,
                    y: (p0.y + p1.y) / s
                },
                pB = {
                    x: (p1.x + p2.x) / s,
                    y: (p1.y + p2.y) / s
                }, 
                pC = {
                    x: (p2.x + p0.x) / s,
                    y: (p2.y + p0.y) / s
                };
                fractal(p0, pA, pC, lim - 1);
                fractal(pA, p1, pB, lim - 1);
                fractal(pC, pB, p2, lim - 1);
    
            } 
            else {
               (drawTri(p0, p1, p2));
            }
    }


    
 
         function drawTri(p0, p1, p2) {
             var m = 1; 
             //(2 + Math.random() / 6); 
        context.beginPath(); 
        context.moveTo(p0.x * m, p0.y * m);
        context.lineTo(p1.x * m, p1.y * m);
        context.lineTo(p2.x * m, p2.y * m);
        context.fillStyle = "white";
        // context.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 70%)';
        context.fill();
           
    } 
     
     
setTimeout(window.requestAnimationFrame,5, (spin));  
})      
}

