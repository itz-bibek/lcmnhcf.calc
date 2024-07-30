function calculate() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);

    var hcf = calculateHCF(num1, num2);
    var lcm = (num1 * num2) / hcf;

    document.getElementById('result').innerHTML = 'HCF is ' + hcf + '<br>LCM is ' +lcm;
}

function calculateHCF(x, y) {
    while (y) {
        var t = y;
        y = x % y;
        x = t;
    }
    return x;
}