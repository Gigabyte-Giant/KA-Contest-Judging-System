var KA_API = require("../backend/ka_api.js");

var createContestHolder = function(contestData) {
    // Begin Column Root
    var contestHolder = $("<div>")
        .addClass("col").addClass("s12").addClass("m6")
        .append(
            // Begin Card Root
            $("<div>").addClass("card")
                // Begin Card Image
                .append(
                    $("<div>").addClass("card-image")
                        .append(
                            $("<img>").attr("src", "http://newlitfromeurope.org/wp-content/uploads/2015/05/placeholder1.gif")
                        )
                        .append(
                            $("<span>").addClass("card-title").addClass("amber").addClass("lighten-2")
                                .text("Contest: Some contest")
                        )
                )
                // End Card Image
                // Begin Card Content
                .append(
                    $("<div>").addClass("card-content")
                        .append(
                            $("<p>").text("This is the description for some contest...")
                        )
                )
                // End Card Content
                // Begin Card Action
                .append(
                    $("<div>").addClass("card-action").addClass("center")
                        .append(
                            $("<a>").attr("href", "javascript:void(0)").text("All Entries")
                        )
                        .append(
                            $("<a>").attr("href", "javascript:void(0)").text("Leaderboard")
                        )
                )
                // End Card Action
            // End Card Root
        )
    // End Column Root

    return contestHolder;
};

var setupPage = function() {
    for (var i = 0; i < 7; i++) {
        $(".row").append(createContestHolder({}));
    }
};

setupPage();
