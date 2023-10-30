function calculateCGPA() {
    var ct1 = parseFloat(document.getElementById("ct1").value);
    var ct2 = parseFloat(document.getElementById("ct2").value);
    var ct3 = parseFloat(document.getElementById("ct3").value);
    var universityExam = parseFloat(document.getElementById("universityExam").value);

    var totalMarks = ct1 + ct2 + ct3 + universityExam;
    var percentage = (totalMarks / 400) * 100;

    var cgpa;
    if (percentage > 90) {
        cgpa = 10;
    } else if (percentage > 80) {
        cgpa = 9;
    } else if (percentage > 60) {
        cgpa = 8;
    } else if (percentage > 50) {
        cgpa = 7;
    } else if (percentage > 40) {
        cgpa = 6;
    } else {
        cgpa = 5;
    }

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "Percentage: " + percentage.toFixed(2) + "%<br>";
    resultElement.innerHTML += "CGPA: " + cgpa;
}