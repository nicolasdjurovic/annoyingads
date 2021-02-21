
    
// $('.virusXpert').on('mouseover', function() {
    
//     $('.virusXpertContainer').css('display', 'block');
//     $('.virusXpertContainer').css('position', 'relative');
//     $('.virusXpert').css('display', 'block');
//     $('.virusXpert').css('position', 'absolute');
    
//     var windowWidth = window.innerWidth;
//     var windowHeight = window.innerHeight;
//     var randPosX = Math.floor((Math.random() * windowWidth));
//     var randPosY = Math.floor((Math.random() * windowHeight));
    
//     $('.virusXpert').css('left', randPosX);
//     $('.virusXpert').css('top', randPosY);

// });

var audio = $('.cackleAudio');

$(document).ready(function(){
    animateDiv('.virusXpert');
    function makeNewPosition(){
        
        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 320;
        var w = $(window).width() - 320;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        return [nh,nw];    
        
    }
    
    function animateDiv(myclass){
        var newq = makeNewPosition();
        $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
          animateDiv(myclass);        
        });
        
    };

    $('.virusXpert').on('click', function() {
        
        $('.virusXpert').stop();
        $('.VX').hide();
        $('.smokeGif').show();
        $('.cackleAudio') [0] .play();
        

        // if ($('.virusXpert').stop() == $('.virusXpert').stop()) {
        //     setTimeout(function() {
        //     $('.virusXpert').start();
        //         // $('.VX').show();
        //     }, 1000);

        // }

    }); 

});


