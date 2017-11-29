$('#fullpage').fullpage({
    anchors: ['page1', 'page2', 'page3', 'page4'],
    sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
});

$(document).ready(function() {
    $('#slides').bind('wheel', function(e) {
        e.stopPropagation();

        var mark = null
        $(e.target).parents().map(function() {
            console.log($(this).attr("data-slide"))

            if (!mark) {
                mark = $(this).attr("data-slide")
            }
        })

        if (e.originalEvent.wheelDelta < 0 || e.originalEvent.deltaY > 0) {
            //scroll down
            if (mark === "end") {
                $.fn.fullpage.moveSectionDown();
            } else {
                $.fn.fullpage.moveSlideRight();
            }
        } else {
            //scroll up 
            if (mark === "start") {
                $.fn.fullpage.moveSectionUp();
            } else {
                $.fn.fullpage.moveSlideLeft();
            }
        }
    });
});