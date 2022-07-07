// TODO: add code here
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
            // Access the JSON in the response
            response.json().then( function(json) {
             
             
             for(let index = 0; index < json.length; index++){
             const div = document.getElementById("container");   
             div.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                     <ul>
                        <li>Astronaut: ${json[index].firstName} ${json[index].lastName}</li>
                        <li>Hours in Space: ${json[index].hoursInSpace}</li>
                        <li>Active: ${json[index].active}</li>
                        <li>Skills: ${json[index].skills}</li>
                        
                     </ul>
                     </div>
                     <img class="avatar" src="${json[index].picture}">
                    
                </div>
                `;
                }
            });
         });
});