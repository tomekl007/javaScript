/*Here's a practical example: suppose we wish to add some buttons to a page 
that adjust the text-size. One way of doing this is to specify the font-size
 of the body element in pixels, then set the size of the other elements on 
 the page (such as headers) using the relative em unit:*/

body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
}
 
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.2em;
}
//Our interactive text size buttons can change the font-size property of 
//the body element, and the adjustments will be picked up by other elements 
//on the page thanks to the relative units.

//Here's the JavaScript:

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
 
var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);
//size12, size14 and size16 are now functions which will resize the body text to 12, 14, and 16 pixels, respectively. We can attach them to buttons (in this case links) as follows:


document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

<a href="#" id="size-12">12</a>
<a href="#" id="size-14">14</a>
<a href="#" id="size-16">16</a> 