const QS = (element) => document.querySelector(element);

window.addEventListener("load", function() {

    let $menu = QS("#menu");
    let $more_info = QS("#more-info");

    $menu.addEventListener("mouseover", function() {
        $more_info.style.display = "flex";
    });

    $more_info.addEventListener("mouseover", function() {
        $more_info.style.display = "flex";
    });

    $menu.addEventListener("mouseout", function() {
        $more_info.style.display = "none";
    });
    
    $more_info.addEventListener("mouseout", function() {
        $more_info.style.display = "none";
    });



    }
)