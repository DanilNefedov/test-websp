$(function () {
    $("#datepicker").datepicker({
        dateFormat: "dd_mm_yy",
        prevText: "", 
        nextText: "",
        showOtherMonths: true, 
        selectOtherMonths: true,
        beforeShowDay: function(date) {
            var today = new Date();
            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                return [true, 'ui-datepicker-today'];
            }
            if (date.getDay() === 0) {
                console.log(date.getDay())
                return [true, 'bg-gray-day'];
            }
            return [true, ''];
        }
    });

    $("#clearDateFrom").click(function() {
        $("#datepicker").val("");
    });

    $("#openDateFrom").click(function() {
        $("#datepicker").datepicker("show");
    });





    $("#datepickerTo").datepicker({
        dateFormat: "dd_mm_yy",
        prevText: "", 
        nextText: "",
        showOtherMonths: true, 
        selectOtherMonths: true,
        beforeShowDay: function(date) {
            var today = new Date();
            if (date.getDate() === today.getDate() &&
                date.getMonth() === today.getMonth() &&
                date.getFullYear() === today.getFullYear()) {
                return [true, 'ui-datepicker-today'];
            }
            if (date.getDay() === 0) {
                console.log(date.getDay())
                return [true, 'bg-gray-day'];
            }
            return [true, ''];
        }
    });

    $("#clearDateTo").click(function() {
        $("#datepickerTo").val("");
    });

    $("#openDateTo").click(function() {
        $("#datepickerTo").datepicker("show");
    });

})



