/**
 * JS for Peak Airlines
 * @author: Somtochukwu Nwagbata
 * 
 * 1. Date picker configuration
 */


//Change date input on flightType change
$(document).ready(function () {
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
            date.clear();
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
            date.clear();
            date.show();
        }
    })
});


