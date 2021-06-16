github = new Github;
ui = new UI;

const userInput = document.getElementById("search-user");

userInput.addEventListener("keyup", (e) => {
    if(userInput !== ""){
        const userText = e.target.value;
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === "Not Found") {

            } else {
                ui.showProfile(data.profile);
            }
        }) 
    } else {
        ui.clearProfile();
    }
})