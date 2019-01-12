class Generator {
    LoadArray(txt) {
        this.words = txt.split("\n");
        this.used = [];
        console.log(this.words);
        this.seed = 1;
    }
    GenerateTable(seed) {
        this.seed = seed;
        let table = "<table>";
        for (let i = 0; i < 5; i++) {
            table += "<tr>";
            for (let y = 0; y < 5; y++) {
                table += '<td onClick="changeColor(this)">'
                table += this.GetRandom();
                table += "</td>"

            }
            table += "</tr>"
        }
        table += "</table>";
        return table;
    }
    GetRandom() {
        let pass = true;
        let num;
        do {
            pass = true;
            num = Math.round(random(this.seed++) * (this.words.length - 1));
            for (let i = 0; i < this.used.length; i++) {
                if (this.used[i] == num) {
                    pass = false;
                }
            }
        } while (!pass);
        this.used.push(num);
        return this.words[num];
    }
}

function random(seed) {
    var x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}