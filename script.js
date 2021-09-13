const switchCheckBox = document.querySelector(".switch-checkbox");
const appWrapper = document.querySelector(".app-wrapper");

// Change Background and Colour 
function ChangeBackgroundAndColour(e){
    console.log(e)
    if(e.target.checked){
        document.documentElement.setAttribute("data-theme", "dark");
        // appWrapper.style.backgroundColor = "hsl(230, 17%, 14%)";
        // appWrapper.style.color = "hsl(0, 0%, 100%)";
    } else {
        document.documentElement.setAttribute("data-theme", "light");

        // appWrapper.style.backgroundColor = "hsl(0, 0%, 100%)";
    }
    
}

// Event Listener
switchCheckBox.addEventListener('change', ChangeBackgroundAndColour);