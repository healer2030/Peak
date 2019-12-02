/**
 * JS for Peak Airlines
 * @author: Somtochukwu Nwagbata
 * 
 * 1. Date picker configuration
 * 2. Autocomplete text field
 */


//Change date input on flightType change
$(document).ready(function () {
    var flightType; //= document.getElementsByName("flightType");
    var fFrom; //= document.getElementById("f-from");
    var fTo; //= document.getElementById("f-to");
    var pCount;//= document.getElementById("f-travellers");
    //console.log(document.getElementById("#f-date").selectedDates[0]);
    // on flightType change configuration


    $('#f-to').selectize({sortField: 'text'});
    $('#f-from').selectize({sortField: 'text'});
    $('#f-froms').selectize({sortField: 'text'});
    $('#f-tos').selectize({sortField: 'text'});
});


