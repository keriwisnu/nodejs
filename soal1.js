//test github
module.exports = exports = function soal01(req, res, next) {
  let n = req.params.n; //request parameter n
  totalBaris = 10;
  totalKolom = n;

  this.SetArray = function() { //setArray nama fungsinya
    let Array2D = [];
    for (let baris = 0; baris < totalBaris; baris++) {
      Array2D.push([]); //harus ada, untuk membuat array kosongnya
      let y = 0;
      if (baris == 0) {
        let a = 65;
        for (let kolom = 0; kolom < totalKolom; kolom++) {
          Array2D[baris][kolom] = String.fromCharCode(a);
          a = a + 1;
        }
      } else if (baris == 1) {
        let a = 65;
        for (let kolom = 0; kolom < totalKolom; kolom++) {
          if (kolom % 2 == 1) {
            Array2D[baris][kolom] = kolom + 1;
          } else Array2D[baris][kolom] = String.fromCharCode(a);
          a = a + 1;
        }
      }
    }
    return Array2D
  };

  var ResultArray2D = SetArray(); //asign fungsinya

  /* var sama let, sama" untuk variabel hanya saja let bersifat private dan var yg global */
  var html = `<style> 
    table {
        border-collapse: collapse;
        font-family: arial, sans-serif;
        font-size: 10pt;
        border: 1px solid black;        
    }
    td {
        width: 25px;
        height: 25px;
        background-color: whitesmoke;
        text-align: center;
        align-content: middle;
        border: 1px solid black;
    }
    tr {

    }
    </style>`;
  html +=
    "<h1>logic 1 soal 7 - 8 dengan kolom banyak kolom " + totalKolom + " </h1>";
  html += "<table>";

  for (let baris = 0; baris < ResultArray2D.length; baris++) {
    html += "<tr>";
    for (let kolom = 0; kolom < ResultArray2D[baris].length; kolom++) {
      html += "<td>";
      html += ResultArray2D[baris][kolom];
      html += "</td>";
    }
    html += "</tr>";
  }
  html += "</table>";

  res.writeHead(200, {
    "Content-Length": Buffer.byteLength(html),
    "Content-Type": "text/html"
  });
  res.write(html);
  res.end();
};