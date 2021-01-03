// from data.js
var tableData = data;

// select tbody
tbody = d3.select("tbody")
console.log("Hola")

// loop through table using object entries
function displayData(something) {
    tbody.text("")
    something.forEach(function (ET_sighting) {
        new_tr = tbody.append("tr")
        Object.entries(ET_sighting).forEach(function ([key, value]) {
            new_td = new_tr.append("td").text(value)
        })
    }
    )
}

displayData(tableData)

console.log("Hola2")

//select the submit botton
var submit = d3.select("#submit");

submit.on("click", function () {
    console.log("Hola3")

    //Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var dateInput = d3.select("#datetime");
    var cityInput = d3.select("#city");
    var stateInput = d3.select("#state");
    var countryInput = d3.select("#country");
    var shapeInput = d3.select("#shape");

    //Get the value property of the input element
    console.log(dateInput.property("value"));
    console.log(cityInput.property("value"));
    console.log(stateInput.property("value"));
    console.log(countryInput.property("value"));
    console.log(shapeInput.property("value"));

    //create a variable which filters the table if a user enters only some information in so that it will still work

    var filtered = tableData.filter(aliens_sighting => {
        return (ET_sighting.datetime === dateInput.property("value") || !dateInput.proptery("value")) &&
            (ET_sighting.city === cityInput.property("value") || !cityInput.proptery("value")) &&
            (ET_sighting.state === stateInput.property("value") || !stateInput.proptery("value")) &&
            (ET_sighting.country === countryInput.property("value") || !countryInput.proptery("value")) &&
            (ET_sighting.shape === shapeInput.property("value") || !shapeInput.proptery("value"))
    })


    //run the filtered entries through the displayData function to update the table
    displayData(filtered);


});

var filterInputs = d3.selectAll(".form-control");

//Clears input fields and input object
function clearEntries() {
    filters = {};

    //Sets every input field to empty
    filterInputs._group[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select("#" + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
//Clear button on click clears fields
clearButton.on("click", function () {

    //Keeps page from regreshing completely, only want the table to refresh
    d3.event.preventDefault();
    //Clears input fileds
    clearEntries()
});



