/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function hideMenu() {
    var menu = document.getElementById('myLinks')
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}


// Team //

$(document).ready(function () {
    // $(".cf_onclick").click(function () {
    //     $(".cf2 img.top").toggleClass("transparent");
    //     // this.toggleClass("transparent");
    //     $('.team-about').show()


    // });

    $(".cf_onclick").click(function () {
        $(".cf2 img.top1").toggleClass("transparent");
        // this.toggleClass("transparent");
        $('.team-about').show()




    });

    $("#cf_onclick").click(function () {
        timesClicked++;
        var timesClicked = 0;
        if (timesClicked > 1) {
            //run second function
        } else {
            $(".cf2 img.1").toggleClass("transparent");
            $('.team-about').hide()
            //run first function
        }

    })


});

$(document).ready(function () {
    $('.team-about').hide();
});