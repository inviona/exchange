let a = document.getElementById('leke');
let b = document.getElementById('euro');
let c = document.getElementById('dollar');
let d = document.getElementById('fr')
let konvert = document.getElementById('konvert');

konvert.addEventListener('click', function(){
    a= Number(a.value);  
    if (isNaN(a) || a <= 0 || a == null){
        alert('Please enter a valid Value')
}
else{
    let ndryshe = a/106.35;
    b.value = '€' + ndryshe;

    let tjeter = a/97.38;
    c.value = '$' + tjeter;

    let franga = a/108.83;
    d.value = 'CHf ' + franga;
}
}
)

