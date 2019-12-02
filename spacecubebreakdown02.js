window.onload = function () {
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = this.innerWidth, //this refers to window
        height = canvas.height = this.innerHeight,
        time = 0;


         context.translate((width / 2) -150 , (height / 2) + 100);

        context.strokeStyle = "white";

        function createSquare(p1,p2,p3,p4) {
            context.strokeStyle = 'hsl(' + (Math.random() * 360) + ', 100%, 70%)';
            context.beginPath()
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.stroke();

            context.strokeStyle = 'hsl(' + (Math.random() * 360) + ', 100%, 70%)';
            context.beginPath()
            context.moveTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
            context.stroke();

            context.strokeStyle = 'hsl(' + (Math.random() * 360) + ', 100%, 70%)';
            context.beginPath()
            context.moveTo(p3.x, p3.y);
            context.lineTo(p4.x, p4.y);
            context.stroke();
            
            context.strokeStyle = 'hsl(' + (Math.random() * 360) + ', 100%, 70%)';
            context.beginPath()
            context.moveTo(p4.x, p4.y);
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
        context.rotate(.003);
        


        for (let i = 0; i < (time/5); i++) {
           
            var p1 = {
                x: -200 + (Math.sin(i) * time),
                y: -200 - (Math.cos(i) * time),
            },
                p2 = {
                x: 200 + (Math.sin(i) * time),
                y: -200 - (Math.cos(i) * time),
            },
                p3 = {
                x: 200 + (Math.sin(i) * time),
                y: 200 - (Math.cos(i) * time),
            },
                p4 = {
                x: -200 + (Math.sin(i) * time),
                y:  200 - (Math.cos(i) * time),
            };

            createSquare(p1,p2,p3,p4);

        }
        

        setTimeout(window.requestAnimationFrame, 10, (render));
        
    }

};