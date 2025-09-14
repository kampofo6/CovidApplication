const xhttp = new XMLHttpRequest();

xhttp.open("GET", "/dataFiles/profile.json", true);

xhttp.onreadystatechange = function() {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
        var profile = JSON.parse(xhttp.responseText);

        document.querySelector("header h2:nth-of-type(2)").textContent = "Assignment #2 / " + profile.name + " / " + profile.student_number;
        document.querySelector("footer h4").textContent = profile.login_name + " / " + profile.campus;
    }
};

xhttp.send();

class Vaccine{ 
    constructor(id, date,
         icu_unvac, icu_partial_vac,
          icu_full_vac, nonicu_unvac, 
          nonicu_partial_vac, nonicu_full_vac, stdId){

            this.id=id; 
            this.date=date; 
            this.icu_unvac=icu_unvac; 
            this.icu_partial_vac=icu_partial_vac; 
            this.icu_full_vac=icu_full_vac; 
            this.nonicu_unvac= nonicu_unvac;
            this.nonicu_partial_vac= nonicu_partial_vac;
            this.nonicu_full_vac = nonicu_full_vac;
            this.stdId = stdId;
            var stdId = 991655245;
    }
}

let vaccine = new Vaccine();

function fetchVaccine() {
    let fError = '';

    // Use absolute path from root
    fetch('/dataFiles/vaccine.json')
        .then(response => {
            if (!response.ok) {
                console.error(`Response - ${response.status} ${response.statusText}`);
                fError = true;
                throw new Error("Request failed");
            }
            return response.text();
        })
        .then(data => {
            if (!fError) {
                let json_data = JSON.parse(data);
                
                for (let i of json_data.records) {
                    vaccine.id = i[0];
                    vaccine.date = i[1];
                    vaccine.icu_unvac = i[2];
                    vaccine.icu_partial_vac= i[3];
                    vaccine.icu_full_vac = i[4];
                    vaccine.nonicu_unvac = i[5];
                    vaccine.nonicu_partial_vac = i[6];
                    vaccine.nonicu_full_vac = i[7];

                   var myVaccine = JSON.stringify(vaccine);

                   localStorage.setItem(vaccine.id, myVaccine)
                }
            }
            else {
                console.log("there's an error!");
            }
        })
        .catch(error => {
            console.error(error);
            
        });

        var userMessage = document.getElementById('message');
        userMessage.innerHTML = 'Saved to local storage!'
}

function retrieveVaccine(){
    window.location ="/pages/status.html";
}