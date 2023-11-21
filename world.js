(function () {
    let countryLookupButton;
    let cityLookupButton;
    let httpRequest;
    let phpResponse;
    let searchfield;

    window.onload = function () {
        initializeVariables();
        addEventListeners();
    };

    function initializeVariables() {
        searchfield = document.getElementById("country");
        phpResponse = document.getElementById("result");
        countryLookupButton = document.getElementById("lookupco");
        cityLookupButton = document.getElementById("lookupci");
    }

    function addEventListeners() {
        countryLookupButton.addEventListener("click", function () {
            sendHttpRequest("world.php?country=" + searchfield.value);
        });

        cityLookupButton.addEventListener("click", function () {
            sendHttpRequest("world.php?city=" + searchfield.value);
        });
    }

    function sendHttpRequest(url) {
        httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = showResponse;
        httpRequest.open("GET", url);
        httpRequest.send();
    }

    function showResponse() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                phpResponse.textContent = httpRequest.responseText;
                phpResponse.innerHTML = phpResponse.textContent;
            } else {
                alert("Invalid request.");
            }
        }
    }
})();
