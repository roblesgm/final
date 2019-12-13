// Things I need to do to make this thing Work
// - Use the formula on the Daily nutrients and calories website
// - Adjust the question on the form to fit the data needed for the formula
// - look at macronutrients website to get ideas for various food groups
// - Ask charlie about the next page thing
// - Use css to make the website actually look good

if () {
    sex == male
    level == "in the gym most days";
    66.47 + ( 13.75 * weight) + ( 5.003 * height) - ( 6.755 * age) == RMR;
    (RMR * .4) + RMR == totalcalories;
}
// else () {
//     655.1 + ( 9.563 * weight) + ( 1.850 * height) - ( 4.676 * age) == calories 
// }

go.onclick = function() {
    
}

function openPage(pageName, elemt, color) {
    let i, tabcontent, tablinks;
    console.log (pageName);
    tabcontent = document.getElementsByClassName("tabcontent")
    for (i = 0; i < tablinks.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink")
    for (i = 0; i < tablinks.length; i++) {
        tabcontent[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elemt.style.backgroundColor = color;
}
document.getElementById("defaultOpen").click();
(function () {
    new FORM({
        id: "form"
    })
})();
document.addEventListener("DOMContentLoaded", ready);