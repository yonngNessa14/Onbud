$(document).ready(function () { 
    $('.form-btn').on('click', function (e) {
        e.preventDefault();
        if ($('form').hasClass('d-none')) {
            $('form').removeClass('d-none');
        }
    });
});