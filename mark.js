// Text Highlighting
$(function() {
    var mark = function() {

        // Read the keyword
        var keyword = $("input[name='keyword']").val();

        // Remove previous marked elements and mark
        // the new keyword inside the context
        $(".body").unmark({
            done: function() {
                $(".body").mark(keyword);
            }
        });
    };

    $("input[name='keyword']").on("input", mark);
});

