
var check = function() {
    if(new Date(document.getElementById("end").value) == null || new Date(document.getElementById("start").value == null)){
        document.getElementById("message").innerHTML = 'Please enter a valid date.';
    }else{
        const answer = ( new Date(document.getElementById("end").value) - new Date(document.getElementById("start").value))/(1000 * 60 * 60 * 24);
        document.getElementById("message").innerHTML = 'The difference is ' + answer + ' days';

    }
    
    
    
}
