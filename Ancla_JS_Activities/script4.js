
var check = function() {
    const startDate = new Date(document.getElementById("start").value);
    const endDate = new Date(document.getElementById("end").value);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        document.getElementById("message").style.color = 'red';
        document.getElementById("message").innerHTML = 'Please enter valid dates.';
        return;
    }

    const difference = (endDate - startDate) / (1000 * 60 * 60 * 24);
    document.getElementById("message").innerHTML = `The difference is ${difference} days.`;
}
