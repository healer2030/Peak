/**
 * JS for Peak Airlines
 * @author: Somtochukwu Nwagbata
 * 
 * 1. Date picker configuration
 * 2. Autocomplete text field
 */

//Date and selectize plugins
$(document).ready(function () {
    $("input[type=radio][name=flightType]").change(function () {
        if (this.value != "round-trip") {
            //change date element attributes and show datepicker
            $("#f-return").attr("disabled", true);
            $("#d-return").css("display", "none");
            $("#f-return").css("display", "none");
            $('#f-return').datepicker().value("");
            //$("#f-return").val('');

        }
        else {
            $("#f-return").attr("disabled", false);
            $("#d-return").css("display", "block");
            $("#f-return").css("display", "block");
            $('#f-return').datepicker().value("");
            //$("#f-return").val('');
        }
    })


    var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

    $('#f-depart').datepicker({

        modal: true,
        header: true,
        footer: true,
        minDate: today,
        maxDate: function () {
            var date = new Date();
            date.setDate(date.getDate() + 365);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        }
    });

    $('#f-return').datepicker({

        modal: true,
        header: true,
        footer: true,
        minDate: function () {
            if ($('#f-depart').datepicker().value() == null) {
                return today;
            }
            return $('#f-depart').datepicker().value();
        },
        maxDate: function () {
            var date = new Date();
            date.setDate(date.getDate() + 365);
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        }
    });


    $('#f-depart').keydown(function (e) {
        e.preventDefault();
    });
    $('#f-return').keydown(function (e) {
        e.preventDefault();
    });

    $('#f-to').selectize({ sortField: 'text' });
    $('#f-from').selectize({ sortField: 'text' });
    $('#f-froms').selectize({ sortField: 'text' });
    $('#f-tos').selectize({ sortField: 'text' });


    //From Verification
    (function () {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()


});

