$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

$(document).ready(function() {
    $('#slides').bind('mousewheel', function(e) {
        e.stopPropagation();
        if (e.originalEvent.wheelDelta < 0) {
            //scroll down
            if (e.target.innerText === "Two 4") {
                $.fn.fullpage.moveSectionDown();
            } else {
                $.fn.fullpage.moveSlideRight();
            }
        } else {
            //scroll up 
            if (e.target.innerText === "Two 1") {
                $.fn.fullpage.moveSectionUp();
            } else {
                $.fn.fullpage.moveSlideLeft();
            }

        }
    });
});