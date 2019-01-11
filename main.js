let gen = new Generator();

$(() => {
    $.get("krycijmena.txt", (data) => {
        gen.LoadArray(data);
        $("#tableHolder").html(gen.GenerateTable());
    });

    console.log("done");
})

function changeColor(object) {

    if (object.style.backgroundColor == "red") {
        object.style.backgroundColor = "blue";
    } else if (object.style.backgroundColor == "blue") {
        object.style.backgroundColor = "white";
    } else object.style.backgroundColor = "red";
}