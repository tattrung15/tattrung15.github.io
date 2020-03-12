function reset1() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';
}

function reset2() {
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
}

function reset3() {
    document.getElementById('n').value = '';
}

function submit1(){
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);
    let res = document.getElementById('res1');
    let x1, x2;

    if(a == 0){
        if(b != 0){
            x1 = -c/b;
            res.innerHTML = `x = ${x1}`;
        } else {
            if(c == 0){
                res.innerHTML = "Phương trình vô số nghiệm";
            } else {
                res.innerHTML = "Phương trình vô nghiệm";
            }
        }
    } else {
        let d = b*b - 4*a*c;
        if(d < 0){
            res.innerHTML = "Phương trình vô nghiệm";
        }
        if(d == 0){
            res.innerHTML = `x1 = x2 = ${-b/(2*a)} `;
        } else {
            res.innerHTML = `x<sub>1</sub> = ${(- b + Math.sqrt(d))/(2*a)} , x<sub>2</sub> = ${(- b - Math.sqrt(d))/(2*a)}`;
        }
        
    }
}

function submit2(){
    let month = parseInt(document.getElementById('month').value);
    let year = parseInt(document.getElementById('year').value);
    let res = document.getElementById('res2');

    switch(month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8: 
        case 10:
        case 12:
            res.innerText = `Tháng ${month} có 31 ngày`;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            res.innerText = `Tháng ${month} có 30 ngày`;
            break;
        case 2:
            res.innerText = `Tháng 2 năm ${year} có ${year % 4 == 0 ? 29 : 28} ngày`;
            break;
    }
}

function checkSNT(n){
    if(n <= 1) return false;
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n%i == 0) return false;
    }
    return true;
}

function submit3(){
    let n = parseInt(document.getElementById('n').value);
    let res = document.getElementById('res3');
    let s = '';

    for(let i = 2; i <= n; i++){
        if(checkSNT(i)){
            s += `${i} `;
        }
    }
    if(s.length > 0){
        res.innerHTML = s;
    } else {
        res.innerHTML = -1;
    }
}