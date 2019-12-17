let form = document.forms.nutrition;
let sex = form.sex.value;
let level = form.level.value;
go.onclick = function() {
    let level = form.level.value;
    if (sex == "male" && level == "little") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = (6.23 * weight) + (12.7 * height) - (6.8 * age) + 66;
        console.log(BMR)
        let totalcalories = (BMR * 1.2);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "male" && level == "lightly") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        // console.log(weight)
        // console.log(height)
        // console.log(age)
        let BMR = (6.23 * weight) + (12.7 * height) - (6.8 * age) + 66;
        // console.log(BMR)
        let totalcalories = (BMR * 1.375);
        console.log(totalcalories)
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "male" && level == "moderately") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = (6.23 * weight) + (12.7 * height) - (6.8 * age) + 66;
        console.log(BMR)
        let totalcalories = (BMR * 1.55);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "male" && level == "very_active") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = (6.23 * weight) + (12.7 * height) - (6.8 * age) + 66;
        console.log(BMR)
        let totalcalories = (BMR * 1.725);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "male" && level == "extra_active") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = (6.23 * weight) + (12.7 * height) - (6.8 * age) + 66;
        console.log(BMR)
        let totalcalories = (BMR * 1.9);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "female" && level == "little") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
        console.log(BMR)
        let totalcalories = (BMR * 1.2);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "female" && level == "lightly") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
        console.log(BMR)
        let totalcalories = (BMR * 1.375);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "female" && level == "moderately") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
        console.log(BMR)
        let totalcalories = (BMR * 1.55);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "female" && level == "very_active") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
        console.log(BMR)
        let totalcalories = (BMR * 1.725);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
    if (sex == "female" && level == "extra_active") {
        let weight = form.weight.value;
        let height = form.height.value;
        let age = form.age.value;
        console.log("running")
        console.log(weight)
        console.log(height)
        console.log(age)
        let BMR = 655 + (4.3 * weight) + (4.7 * height) - (4.7 * age);
        console.log(BMR)
        let totalcalories = (BMR * 1.9);
        document.getElementById("totalcalories").textContent = totalcalories;
        let protien = (totalcalories * .2);
        document.getElementById("protien").textContent = protien;
        let carbs = (totalcalories * .5)
        document.getElementById("carbs").textContent = carbs;
        let fats = (totalcalories * .3)
        document.getElementById("fats").textContent = fats;
        let gramsp = (protien / 7.72)
        document.getElementById("gramsp").textContent = gramsp;
        let gramsc = (carbs / 7.72)
        document.getElementById("gramsc").textContent = gramsc;
        let gramsf = (fats / 7.72)
        document.getElementById("gramsf").textContent = gramsf;
    }
}


// document.addEventListener("DOMContentLoaded", ready);