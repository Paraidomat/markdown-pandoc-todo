$(document).ready(function(){
    var strNextUntil = "h1, h2, .footnotes";
    // TOC Stuff
    $("a").click(function(){
        $("h2").nextUntil(strNextUntil).slideUp();

        var target = $( this ).attr('href');
        $(target).nextUntil(strNextUntil).slideToggle();
    });

    $("nav").click(function(){
        $( this ).find("ul").slideToggle();
    });

    // Heading Stuff
    $("h2").nextUntil(strNextUntil).slideUp();
    $("h2").click(function(){
        $( this ).nextUntil(strNextUntil).slideToggle();
    });

    // Buttons
    $("#expandall").click(function(){
        $("h2").nextUntil(strNextUntil).slideDown();
        $("nav").find("ul").slideDown();
    });
    $("#collapseall").click(function(){
        $("h2").nextUntil(strNextUntil).slideUp();
        $("nav").find("ul").slideUp();
    });
});
