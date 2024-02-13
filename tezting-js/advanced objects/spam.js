function checkSpam(str) {
    if(str == "viagra" || "XXX") return true;

    else return false;
}

console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);
console.log(checkSpam("this is an XXX viagra"));