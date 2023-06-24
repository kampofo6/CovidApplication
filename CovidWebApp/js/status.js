var ulElement = document.createElement("ul");

window.onload = function(){
    displayID();
}


function displayID(){
    for (let i = 1; i < localStorage.length; i++) {
        var vaccineData = JSON.parse(localStorage.getItem(i));
    
        document.getElementById("keylist").innerHTML+=
        '<li class="li-vac">' + vaccineData.id + "</li>" + "<hr>";



let livac = document.querySelectorAll(".li-vac");
livac.forEach(row => {
    row.addEventListener('click', function() {
        var vaccineData = JSON.parse(localStorage.getItem(row.innerHTML));
        var dataList = document.getElementById("datalist");
        dataList.innerHTML = '';
        dataList.innerHTML +=
                `
                <h4>Details</h4>
                <li class= "det-style">ID: ${vaccineData.id}</li> ` + 
                `<li class= "det-style">Date: ${vaccineData.date}</li> ` +
                `<li class= "det-style">ICU-UNVAC: ${vaccineData.icu_unvac}</li>` +
                `<li class= "det-style">ICU-PART-VAC: ${vaccineData.icu_partial_vac}</li>` +
                `<li class= "det-style">ICU-FULL-VAC: ${vaccineData.icu_full_vac}</li> ` +
                `<li class= "det-style">NONICU-UNVAC: ${vaccineData.nonicu_unvac}</li> ` +
                `<li class= "det-style">NONICU-PART-VAC: ${vaccineData.nonicu_partial_vac}</li> `+
                `<li class= "det-style">NONICU-FULL-VAC: ${vaccineData.nonicu_full_vac}</li> 
                `
    });
});

}
}



