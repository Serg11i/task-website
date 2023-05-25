var romanToInt = function(s) {
    let res = 0;
    let a = s.replace("XL", " 40 ").replaceAll("CD", " 400 ").replaceAll("D"," 500 ").replaceAll("XC", " 90 ").replaceAll("CM", " 900 ").replaceAll("M", " 1000 ").replaceAll("C", " 100 ")
    .replaceAll("L", " 50 ").replaceAll("IX", " 9 ").replaceAll("X", " 10 ").replaceAll("IV"," 4 ").replaceAll("I", "  1")
    .replaceAll("V", " 5 ").split(' ')
    .map ((h)=> 
    {
        if (h === " "){
            h = 0
        }
         res += Number(h)
    })

    console.log(res);
}
romanToInt("MCMXCIV")