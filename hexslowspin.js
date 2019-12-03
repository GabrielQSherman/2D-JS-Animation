window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0,
        size;


         context.translate((width / 2) , (height / 2) );
         context.rotate(.265);

        context.strokeStyle = "white";

        function createHex(originX, originY, sideL) {
            // context.save();
            // context.setTransform(1, 0, 0, 1, 0, 0);

            context.beginPath()
            

            for (let i = 0; i < 6; i++) {
                // context.save();
                // context.rotate(.3);               
                // context.rotate(.5);
                context.moveTo(originX + sideL, originY + sideL);
                
                context.rotate(Math.PI / 3)
                context.lineTo(originX + sideL, originY + sideL);
                
                context.stroke();
                // context.restore()


                
            }

            // let p1x = originX + sideL, p1y = originY + sideL;
            // context.rotate(2.0943951023931954923084289221863);

            // context.lineTo(p1x, p1y);

            // let p2x = p1x + sideL, p2y = p1x + sideL;
            // context.rotate(2.0943951023931954923084289221863);

            // context.lineTo(p2x, p2y);
            // context.lineTo(p3.x, p3.y);
            // context.lineTo(p4.x, p4.y);
            // context.lineTo(p1.x, p1.y);
            // context.stroke();

            // context.restore()
            
        };

        //test just one 
        // createHex(100,100,400);
        
    render();

    size = 1000;

    function render() {
        
        if (time < 500) {
            time++

        } else {
            time = 1;
        };

        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        // context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        // context.rotate(.003);
        context.strokeStyle = 'hsl(' + (time) + ', 100%, 70%)';


      createHex(size, 0, time);
      size -= 1;

        

        setTimeout(window.requestAnimationFrame, 0, (render));
        
    }

};