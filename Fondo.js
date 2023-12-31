// Get the canvas node and the drawing context
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

var w,h,ypos;
w = canvas.width = window.innerWidth;
h = canvas.height = window.innerHeight;


function matrix () {
  // Draw a semitransparent black rectangle on top of previous drawing
  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  // Set color to green and font to 15pt monospace in the drawing context
  ctx.fillStyle = '#12732A';
  ctx.font = '15pt monospace';

  // for each column put a random character at the end
  ypos.forEach((y, ind) => {
    // generate a random character
    const text = String.fromCharCode(Math.random() * 128);

    // x coordinate of the column, y coordinate is already given
    const x = ind * 20;
    // render the character at (x, y)
    ctx.fillText(text, x, y);

    // randomly reset the end of the column if it's at least 100px high
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    // otherwise just move the y coordinate for the column 20px down,
    else ypos[ind] = y + 20;
  });
}

window.addEventListener('resize', function(event) {
  // Código a ejecutar cuando la página cambia de tamaño
  Init()
});

function Init() {
   w = canvas.width = window.innerWidth;
   h = canvas.height = window.innerHeight;


  // draw a black rectangle of width and height same as that of the canvas
  ctx.fillStyle = '#0D0D0D';
  ctx.fillRect(0, 0, w, h);

  const cols = Math.floor(w / 20) + 1;
  ypos = Array(cols).fill(0);
}

// render the animation at 20 FPS.
Init()
console.log(ypos)

// render the animation at 20 FPS.
setInterval(matrix, 50);