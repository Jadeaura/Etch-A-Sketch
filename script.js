$(document).ready(function() {
    blueBox = $('#container');
    
    gridInit = function(size) {
        var i = 0;
        var padding = 20;
        
        if(typeof newGridSize != 'undefined') {
            padding = 320/newGridSize;
        }
        
        while(i < size) {
            var j = 0;
            blueBox.append($('<div>').css("padding", padding));
            while(j < size - 1) {
                blueBox.last().append($('<div>').css("padding", padding));
                j++;
            }
            blueBox.append($('<br>'));
            i++;
        }
        
        blueBox.find($('div')).on('mouseenter', function() {
        $(this).addClass('hover');
        });
    }
   
    gridInit(16);
    
});

newGrid = function() {
    newGridSize = prompt('What size grid do you want?');
    $('div div').remove();
    gridInit(newGridSize);
}