let x = 12312.42423;
function son(kirit) {
    let a = kirit.toString().split(".");
    let c = a[0];
    let d = a[1];
    d.split("");
    let e = c + "." + (d[0] + d[1]);
    if (d[2] > 5) {
        let y = c + "." +(d[0] + (Number(d[1]) + Number(1)));
        return y;
    } else {
        return e;
    }
}
console.log(son(x));