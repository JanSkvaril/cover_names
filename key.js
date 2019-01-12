function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

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

let colors = [9, 8, 1];

let seed = 100;

function createBoard() {
    let b = new Array(5);
    for (let i = 0; i < b.length; i++) {
        b[i] = new Array(5);
        for (let y = 0; y < b[i].length; y++) {
            b[i][y] = "white";
        }

    }
    let pass = true;

    fillBoardWith(b, "blue", 9);
    fillBoardWith(b, "red", 8);
    fillBoardWith(b, "black", 1);
    //b = fillBoardWith(b, "red", 9);
    //fillBoardWith(b, "black", 1);
    return b;
}

function fillBoardWith(board, color, times) {
    let b = board;
    for (let iter = 0; iter < times; iter++) {
        do {
            let x = Math.round(random(seed++) * 4);
            let y = Math.round(random(seed++) * 4);
            if (b[x][y] == "white") {
                pass = true;
                b[x][y] = color;
            } else pass = false;
        } while (!pass)

    }
    return b;
}

function GenerateTable() {
    let board = createBoard();
    let table = "<table>";
    for (let i = 0; i < 5; i++) {
        table += "<tr>";
        for (let y = 0; y < 5; y++) {
            table += '<td class="' + board[i][y] + '">';
            table += gen.GetRandom();
            table += "</td>"

        }
        table += "</tr>"
    }
    table += "</table>";
    return table;
}
let gen = new Generator();
$(() => {
    $.get("krycijmena.txt", (data) => {
        gen.LoadArray(data);
        seed = GetURLParameter("key");
        gen.seed = GetURLParameter("bkey");
        document.getElementById("tableHolder").innerHTML = GenerateTable();
    });

    console.log("done");
})