// Nora Jaafar 11/6/2024
var fullName = "Nora Jaafar";
console.log(fullName);
document.getElementById("p1").textContent = fullName;

var desiredSalary = "$5,000,000,000";
console.log(desiredSalary);
document.getElementById("p2").textContent = desiredSalary;

var veteranStatus = "I am not a veteran";
console.log(veteranStatus);
document.getElementById("p3").textContent = veteranStatus;

let friends = ["Sandra", " William", " Theodore"];
console.log("My friends are ", friends);
document.getElementById("p4").textContent = friends;

let friendSalaries = [" $60,000", " $70,000", " $80,000"];
console.log("Sandra, William and Theodore want to make ", friendSalaries);
document.getElementById("p5").textContent = friendSalaries;

let friendInfo = {
    firstName: "Karen",
    lastName: "Johnson",
    karenSalary: "$90,000"
};
console.log("Friend's info:", friendInfo);
document.getElementById("p6").textContent = friendInfo.firstName;