let gen = new Generator();

$(() => {
    $.get("krycijmena.txt", (data) => {
        gen.LoadArray(data);
        $("#tableHolder").html(gen.GenerateTable());
    });

    console.log("done");
})

function changeColor(object) {

    if (object.classList == "red") {
        object.classList = "blue";
    } else if (object.classList == "blue") {
        object.classList = "white";
    } else object.classList = "red";


}