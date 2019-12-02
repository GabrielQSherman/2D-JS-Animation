window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;


         context.translate((width / 2) -150 , (height / 2) + 100);

        context.strokeStyle = "white";

        function createSquare(p1,p2,p3,p4) {
            context.beginPath()
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
            context.lineTo(p4.x, p4.y);
            context.lineTo(p1.x, p1.y);
            context.stroke();
            
        };
        
    render();

    function render() {
        
        if (time < 2000) {
            time++

        } else {
            time = 1;
        };

        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        context.rotate(.007);
        context.strokeStyle = 'hsl(' + (time*3) + ', 100%, 70%)';


        for (let i = 0; i < (time/2); i++) {
           
            var p1 = {
                x: -444 + (Math.sin(i) * time),
                y: -444 - (Math.cos(i) * time),
            },
                p2 = {
                x: 444 + (Math.sin(i) * time),
                y: -444 - (Math.cos(i) * time),
            },
                p3 = {
                x: 444 + (Math.sin(i) * time),
                y: 444 - (Math.cos(i) * time),
            },
                p4 = {
                x: -444 + (Math.sin(i) * time),
                y:  444 - (Math.cos(i) * time),
            };

            createSquare(p1,p2,p3,p4);

        }
        

        setTimeout(window.requestAnimationFrame, 0, (render));
        
    }

};