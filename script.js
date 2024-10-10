function attempt() {
    var loggedin = false;
    var attempt = 3;
    
    // Get the input fields
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("pass");

    while (!loggedin && attempt > 0) {
        // Get values from the input fields
        var userName = emailField.value; // Use the email as the username
        var passWord = passwordField.value;

        // Check if both username and password are entered
        if (userName === "" || passWord === "") {
            alert("Please enter both email and password.");
            return; // Exit the function if either field is empty
        }

        // Check for valid login
        if (userName === "xyz1234@dlsud.edu.ph" && passWord === "yourPassword") { // Change yourPassword to the actual password
            loggedin = true;
            alert('Success');
        } else {
            attempt--; // Decrementing by one.
            alert("You have " + attempt + " attempt(s) left;");
            if (attempt === 0) {
                alert('You are blocked');
                playJumpscare(); // Call jumpscare function when blocked
            }
        }
    }
}


function playJumpscare() {
    var jumpscareAudio = document.getElementById("jumpscare");
    var jumpscareAudio2 = document.getElementById("jumpscare2");
    var popupImage = document.getElementById("popupImage");
    var effect = document.getElementById("effect"); // Ensure this element is correctly referenced

    jumpscareAudio.volume = 1;
    jumpscareAudio2.volume = 0.2;
    jumpscareAudio.play();
    jumpscareAudio2.play();

    popupImage.style.display = "block"; // Show the popup image
    setTimeout(function() {
        popupImage.style.display = "none"; // Hide the popup image after 1 second
    }, 1000);

    effect.style.display = "block"; // Show the effect
    setTimeout(function() {
        effect.style.display = "none"; // Hide the effect after 1 second
    }, 1000);
}
