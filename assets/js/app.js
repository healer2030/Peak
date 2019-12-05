/**
 * JS for Peak Airlines
 * @author: Somtochukwu Nwagbata
 * 
 * 1. Date picker configuration
 * 2. Autocomplete text field
 */

//Date and selectize plugins
$(document).ready(function () {
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
        minDate: function(){
            if($('#f-depart').datepicker().value() == null){
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


    $('#f-depart').keydown(function(e){
        e.preventDefault();
    });
    $('#f-return').keydown(function(e){
        e.preventDefault();
    });

    $('#f-to').selectize({ sortField: 'text' });
    $('#f-from').selectize({ sortField: 'text' });
    $('#f-froms').selectize({ sortField: 'text' });
    $('#f-tos').selectize({ sortField: 'text' });

});

