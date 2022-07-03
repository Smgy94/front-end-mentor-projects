function validation() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Good Job! That's a real email address.";
        text.style.color = "#00ff00";
         document.getElementById("email").style.outline = "";
    }
    else {
          form.classList.remove("valid");
           form.classList.add("invalid");
           text.innerHTML = "Please provide a valid email";
        text.style.color = "#f96262";
        document.getElementById("email").style.outline = "2px solid #f96262";
    }

    if (email == "") {
        form.classList.remove("valid");
        form.classList.remove("invalid");
        text.innerHTML = "good job";
        text.style.color = "#00ff00";
         document.getElementById("email").style.outline = "";
    }
}