$(document).ready(function(){
    var strNextUntil = "h1, h2, .footnotes";
    // TOC Stuff
    $("a").click(function(){
        $("h2").nextUntil(strNextUntil).slideUp();
        $("script").hide();

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
        $("script").hide();
    });

    // Buttons
    $("#expandall").click(function(){
        $("h2").nextUntil(strNextUntil).slideDown();
        $("nav").find("ul").slideDown();
        $("script").hide();
    });
    $("#collapseall").click(function(){
        $("h2").nextUntil(strNextUntil).slideUp();
        $("nav").find("ul").slideUp();
    });
});
