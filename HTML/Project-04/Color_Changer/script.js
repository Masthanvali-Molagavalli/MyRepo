const body = document.querySelector('body');
const bg_colors = ['red','green','blue','yellow','pink','purple'];

function ChangeColor()
{
    let num = Math.random();
    console.log("Random number",num);

    let len = bg_colors.length;
    console.log("colors List Length", len);

    let index = num*len;
    console.log("Multiply Random Number and colors length", index);

    let int_index = parseInt(index);
    console.log("integer Rounded", int_index);
    body.style.background = bg_colors[int_index];
}
const text_colors = ["white","black","blue","red"];
function ChangeTextColor(){
    const text = document.getElementById('text');
    const color_index = parseInt(Math.random() * text_colors.length);
    text.style.color = text_colors[color_index];
}