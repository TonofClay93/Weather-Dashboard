var apiKey = "28520b03acf80c2f7c2187a997b3f75d";

var city = "";
$("button").on("click", function () {

    var weaterContent = $("#get-weather")
    var running = weaterContent.val()
    city = running

    var dataURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey;

    $.ajax({
        url: dataURL,
        method: "GET"
    }).then(function (response) { 
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;
        var temp = tempF.toFixed(2)

        // print in HTML
        $(".city").html("<h2>Today in " + city + "</h2>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F): " + temp);

    });

    var fiveDayURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

    $.ajax({
        url: fiveDayURL,
        method: "GET"
    }).then(function (responseTwo) {

        // Converts the temperature
        var tempOneF = (responseTwo.list[4].main.temp - 273.15) * 1.80 + 32;
        var tempOne = tempOneF.toFixed(2);

        var tempTwoF = (responseTwo.list[12].main.temp - 273.15) * 1.80 + 32;
        var tempTwo = tempTwoF.toFixed(2);

        var tempThreeF = (responseTwo.list[20].main.temp - 273.15) * 1.80 + 32;
        var tempThree = tempThreeF.toFixed(2);

        var tempFourF = (responseTwo.list[28].main.temp - 273.15) * 1.80 + 32;
        var tempFour = tempFourF.toFixed(2);

        var tempFiveF = (responseTwo.list[36].main.temp - 273.15) * 1.80 + 32;
        var tempFive = tempFiveF.toFixed(2);

        $("#day-1").html("<h6>" + responseTwo.list[4].dt_txt + "</h6>")
        $("#day-1").append("<p>" + "Temp: " + tempOne + "</p>")
        $("#day-1").append("<p>" + "Humidity: " + responseTwo.list[4].main.humidity + "</p>")

        $("#day-2").html("<h6>" + responseTwo.list[12].dt_txt + "</h6>")
        $("#day-2").append("<p>" + "Temp: " + tempTwo + "</p>")
        $("#day-2").append("<p>" + "Humidity: " + responseTwo.list[12].main.humidity + "</p>")

        $("#day-3").html("<h6>" + responseTwo.list[20].dt_txt + "</h6>")
        $("#day-3").append("<p>" + "Temp: " + tempThree + "</p>")
        $("#day-3").append("<p>" + "Humidity: " + responseTwo.list[20].main.humidity + "</p>")

        $("#day-4").html("<h6>" + responseTwo.list[28].dt_txt + "</h6>")
        $("#day-4").append("<p>" + "Temp: " + tempFour + "</p>")
        $("#day-4").append("<p>" + "Humidity: " + responseTwo.list[28].main.humidity + "</p>")

        $("#day-5").html("<h6>" + responseTwo.list[36].dt_txt + "</h6>")
        $("#day-5").append("<p>" + "Temp: " + tempFive + "</p>")
        $("#day-5").append("<p>" + "Humidity: " + responseTwo.list[36].main.humidity + "</p>")

    });


})