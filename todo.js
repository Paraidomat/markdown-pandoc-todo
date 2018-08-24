$(document).ready(function(){
    //TOC Stuff
    $("a").click(function(){
        console.log("Slide everything up");
        $("h2").nextUntil("h1, h2").slideUp();

        console.log("Get clicked Target and slideToggle it!");
        var target = $( this ).attr('href');
        $(target).nextUntil("h1, h2").slideToggle();

        console.log("Everything is done!");
    });

    $("nav").click(function(){
        console.log(this);
        $( this ).find("ul").slideToggle();
    });

    //Heading Stuff
    $("h2").nextUntil("h1, h2").slideUp();
    //$("h2").nextUntil("h2").slideUp();
    $("h2").click(function(){
        $( this ).nextUntil("h1, h2").slideToggle();
    });
});
