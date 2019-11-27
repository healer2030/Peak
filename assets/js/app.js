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
    $("input[type=radio][name=flightType]").change(function () {
        if (this.value == "round-trip") {
            date = $('#f-date').datepicker({
                language: 'en',
                minDate: new Date(),
                range: true,
                multipleDatesSeparator: " ⁠— "
            })
            //change date element attributes and show datepicker
            $("#f-date").attr("disabled", false);
            $("#f-date").attr("placeholder", "Depart ⁠— Return");
            $("#f-date").val('');
            
            date.show();
        }
        else {
            date = $('#f-date').datepicker({
                language: 'en',
                minDate: new Date(),
                range: false
            })
            //change date element attributes and show datepicker
            $("#f-date").attr("disabled", false);
            $("#f-date").attr("placeholder", "Departure date");
            $("#f-date").val('');
           
            date.show();
        }
    })
    date = $('#s-date').datepicker({
        language: 'en',
        minDate: new Date(),
        range: false
    })
    date.show();
    date.blur();

    $('#f-to').selectize({sortField: 'text'});
    $('#f-from').selectize({sortField: 'text'});
    $('#f-froms').selectize({sortField: 'text'});
    $('#f-tos').selectize({sortField: 'text'});
});


