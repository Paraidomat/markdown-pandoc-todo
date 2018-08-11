$(document).ready(function(){
    //TOC Stuff
    $("nav").click(function(){
        $( this ).find("ul").slideToggle();
    });

    //Heading Stuff
    $("h2").nextUntil("h1, h2").slideUp();
    //$("h2").nextUntil("h2").slideUp();
    $("h2").click(function(){
        $( this ).nextUntil("h2").slideToggle();
    });
});

