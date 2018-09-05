$(document).ready(function(){
    // TOC Stuff
    $("a").click(function(){
        $("h2").nextUntil("h1, h2").slideUp();

        var target = $( this ).attr('href');
        $(target).nextUntil("h1, h2").slideToggle();
    });

    $("nav").click(function(){
        $( this ).find("ul").slideToggle();
    });

    // Heading Stuff
    $("h2").nextUntil("h1, h2").slideUp();
    $("h2").click(function(){
        $( this ).nextUntil("h1, h2").slideToggle();
    });

    // Buttons
    $("#expandall").click(function(){
        $("h2").nextUntil("h1, h2").slideDown();
        $("nav").find("ul").slideDown();
    });
    $("#collapseall").click(function(){
        $("h2").nextUntil("h1, h2").slideUp();
        $("nav").find("ul").slideUp();
    });
});
