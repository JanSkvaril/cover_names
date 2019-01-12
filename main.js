let gen = new Generator();

$(() => {
    $.get("krycijmena.txt", (data) => {
        gen.LoadArray(data);
        seed = GetURLParameter("key");
        console.log(seed);
        $("#tableKey").text(seed);
        $("#tableHolder").html(gen.GenerateTable(seed));
    });

    console.log("done");
})

function changeColor(object) {

    if (object.classList == "red") {
        object.classList = "blue";
    } else if (object.classList == "blue") {
        object.classList = "white";
    } else if (object.classList == "white") {
        object.classList = "purple";
    } else object.classList = "red";


}

let seed = 1;


function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return parseInt(sParameterName[1]);

        }
    }

    return parseInt(Math.random() * 10000);
}