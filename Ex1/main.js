$(document).ready(function(){
   'use strict';

   paper.install(window);
   paper.setup(document.getElementById('mainCanvas'));

   // c = Shape.Circle(200,200,50);
   // c.fillColor = 'green';
   console.log('main.js loaded');

   // var c;
   // for(var x=25; x<400; x+=50){
   //    for(var y=25; y<400; y+=50){
   //       c = Shape.Circle(x, y, 20);
   //       c.fillColor = 'green';
   //    }
   // }

   var c;
   var text;
   var tool;
   c = Shape.Circle(200, 200, 100);
   c.fillColor = 'black';
   text = new PointText(200,205);
   text.justification = 'center';
   text.fillColor = 'white';
   text.fontSize = 25;
   text.content = "hello world";


   tool = new Tool();
   tool.onMouseDown = function(event){
      c = Shape.Circle(event.point, 20);
      c.fillColor = 'green';
   }

   paper.view.draw();

});


