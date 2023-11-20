window.onload = function () {
    initPascal(10);
}

var initPascal = function (n) {

    var pascalDiv = document.getElementById('pascal');

    for (var sor = 0; sor < n; sor++) {
        var ujsorDiv = document.createElement('div');
        ujsorDiv.classList.add('sor');
        pascalDiv.appendChild(ujsorDiv);

        for (var oszlop = 0;  oszlop <= sor;  oszlop++) {
            var ujelemdiv = document.createElement('div');
            ujelemdiv.classList.add('elem');
            ujelemdiv.innerText = faktorialis(sor)/(faktorialis(oszlop)*faktorialis(sor-oszlop));
            ujsorDiv.appendChild(ujelemdiv);
        }
    }
}

var faktorialis = function (n) {
    er = 1;

    for (var i = 1; i <= n; i++) {
        er *= i;
    }

    return er;
}