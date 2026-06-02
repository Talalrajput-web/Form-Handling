function calculatePercentage() {
    const obtmarksref = document.getElementById("obtainedmarks");
    const totalmarksref = document.getElementById("totalmarks");

    const obtainedmarks = Number(obtmarksref.value);
    const totalmarks = Number(totalmarksref.value);


    const percentage = (obtainedmarks / totalmarks) * 100;

    const perref = document.querySelector("#percentage");
    perref.innerHTML = percentage;


}

function calculatebmi() {
    const weightref = document.getElementById("weight");
    const heightref = document.getElementById("height");

    const weight = Number(weightref.value);
    const height = Number(heightref.value);

    const bmi = weight / (height * height);
    console.log(bmi);

    const bmoref = document.querySelector("#bmi");
    bmoref.innerHTML = bmi;
}


//rendom number
const passvocabulator = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

console.log(Math.random() * 12);
console.log(Math.floor(Math.random() * 12));

const index = Math.floor(Math.random() * 5);
const names = ["Ali", "Ahmed", "Hassan", "Hussain", "Zain"];
console.log(names[index]);

let password = "";
for (let i = 0; i < 8; i++) {  
    const passindex = Math.floor(Math.random() * 61);
    password = password + passvocabulator[passindex];

}
console.log(password);


