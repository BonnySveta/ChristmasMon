$(document).ready(function() {
    $('#fullpage__holder').fullpage({

        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
            if (slideAnchor == 'slide1') {
                $('.slide-hand').addClass('hand-animated');
            } else {
                $('.slide-hand').removeClass('hand-animated');
            }
            if (slideAnchor == 'slide3') {
                $('.slide-candy').addClass('candy-animated');
            } else {
                $('.slide-candy').removeClass('candy-animated');
            }
            if (slideAnchor == 'slide2') {
                $('.slide-zoom').addClass('zoom-animated');
            } else {
                $('.slide-zoom').removeClass('zoom-animated');
            }
        },

        afterLoad: function(anchorLink, index) {
            if (index == 2) {
                $('.slide-hand').addClass('hand-animated');
            } else {
                $('.slide-hand').removeClass('hand-animated');
            }
            if (index == 3) {
                $('.slide-candy').removeClass('candy-animated');
            }
        },

        onLeave: function(index, nextIndex, direction) {

            if (index == 3 && direction == 'up') {
                setTimeout(function() {
                    $('.slide-candy').addClass('candy-animated');
                }, 1000);
            }
        }
    });

    $('#slides').bind('wheel', function(e) {
        e.stopPropagation();

        var mark = null
        $(e.target).parents().map(function() {

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
    var menus = document.getElementsByClassName('hamburger-menu');


    [].forEach.call(menus, function(m) {

        if (m.classList.open) {
            m.addEventListener('click', function() {
                m.classList.toggle('open');
            });
        } else {
            m.removeEventListener('click', function() {
                m.classList.toggle('open');
            });
        }

    });
});