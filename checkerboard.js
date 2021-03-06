//background color must be white

window.onload = function() {

    //INITIAL VARIABLE DECLERATIONS

	let canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        
		width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,

        size = 20,                           //determins size of each square
        columnLimit = ((width/size) + 1),   //how many columns in the grid
        rowLimit = ((height/size) + 2),    //how many rows in the grid
        columnCycles = 0,                 //handles if too many columns of squares have been made on a row
        rowsCycles = 0,                 //handles if too many rows of squares have been made on the grid
        startWithWhite = true,           //switches from true to flase for each row to make sure the pattern is alike to a checker/chess board


        originx = 0, originy = 0,

        p1 = {x: originx, y: originy}, p2 = {x: size, y: originy}, p3 = {x: size, y: size}, p4 = {x: originx, y: size},
        squares = [];

        // console.log(lim);

        //ANIMATION CYCLE

        context.fillStyle = "white";

        // context.save() //saves the context at 0,0 (upper left corner) to go back to for each new line

        animate()
        function animate() {
            
            create_grid()
            console.log('test');
            
            return
            // setTimeout(window.requestAnimationFrame, 10, (clear))
            // setTimeout(window.requestAnimationFrame, 0, (animate))
        }

        // FUNCTIONS

        function clear() { 
            context.save();
            context.setTransform(1, 0, 0, 1, 0, 0);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.restore();
        }


        function create_square(p1,p2,p3,p4) {

            let square = {
                p1, p2, p3, p4
            };

            squares.push(square);

            context.beginPath();
            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);
            context.lineTo(p3.x, p3.y);
            context.lineTo(p4.x, p4.y);
            context.lineTo(p1.x,p1.y);

            if (startWithWhite) {
                context.fill();
                startWithWhite = false;
            } else {
                startWithWhite = true;
            }
            

        }

        function create_row(){
            

            while (columnCycles < columnLimit) {
                create_square(p1,p2,p3,p4);
                context.translate(size, originy);
                columnCycles++
            }

            columnCycles = 0
            
        }

        function create_grid() {

            context.save()

            while (rowsCycles < rowLimit) {
                context.save()
                create_row()
                context.restore()
                context.translate(originx,size);
                rowsCycles++
            }


            context.restore()

        }

       


}