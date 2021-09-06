var hapus;
var nilaiawal;
var persen;
var tampilan;
var hasil;


hapus = () => {
    document.getElementById("output").innerHTML="0";
    document.getElementById("tandaHasil").innerHTML="";
}

nilaiawal = () => {
    var nilai = document.getElementById("output").innerHTML;
    if (nilai=="0") {
        nilai = " "
        document.getElementById("output").innerHTML=nilai;
    }
}

tampilan = (tampil) => {
    nilaiawal()
    document.getElementById("output").innerHTML+=tampil;
}

persen = () => {
    nilaiawal()
    var nilai = document.getElementById("output").innerHTML;
    nilai = nilai/100;
    document.getElementById("output").innerHTML=nilai;
}

hasil = () => {
    nilaiawal()
    var hitung = document.getElementById("output").innerHTML;
    var hasil = eval(hitung);
    document.getElementById("output").innerHTML=hasil;
    var tanda = (hasil < 0) ? "Nilai Negatif" : "Nilai Positif";
    document.getElementById("tandaHasil").innerHTML=tanda;
}