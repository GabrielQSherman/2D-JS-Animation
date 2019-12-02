window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;


         context.translate((width / 2) -300 , (height / 2) + 300);

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
        
        if (time < 777) {
            time++

        } else {
            time = 1;
        };

        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.restore();
        context.rotate(-.003);
        context.strokeStyle = 'hsl(' + (time/5) + ', 100%, 70%)';


        for (let i = 0; i < time; i++) {
           
            var p1 = {
                x: -500 + (Math.sin(i) * 720),
                y: -500 - (Math.cos(i) * 720),
            },
                p2 = {
                x: 500 + (Math.sin(i) * 720),
                y: -500 - (Math.cos(i) * 720),
            },
                p3 = {
                x: 500 + (Math.sin(i) * 720),
                y: 500 - (Math.cos(i) * 720),
            },
                p4 = {
                x: -500 + (Math.sin(i) * 720),
                y:  500 - (Math.cos(i) * 720),
            };

            createSquare(p1,p2,p3,p4);

        }

        setTimeout(window.requestAnimationFrame, 44, (render));
        
    }

};