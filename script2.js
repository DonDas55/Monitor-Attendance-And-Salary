if(sessionStorage.getItem("admin") !== "true"){

window.location.href = "login.html"

}



function saveToGoogleSheet(){

const data = {
worker: qs('workerSelect').selectedOptions[0].text,
month: qs('monthYear').textContent,
workDays: qs('workDays').value,
festivalDays: qs('festivalDays').value,
otHours: qs('otHours').value,
gross: qs('gross').textContent,
net: qs('net').textContent,
bonus: qs('bonus').textContent
};

fetch("https://script.google.com/macros/s/AKfycbyUyoutVBzTWGIke1dHEsPnur6XdvzpJoY9jSlj0nrqHhBtpvjg0l60AfT3nP_KeRnL/exec",{
method:"POST",
body:JSON.stringify(data)
})
.then(res=>res.text())
.then(msg=>alert("Saved to Google Sheet"));

}