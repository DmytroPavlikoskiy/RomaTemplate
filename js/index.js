$(".close, .nope").on('click', function () {
    $('.modal').addClass('hidden');
    $('.modal-bg').addClass('hidden');
    $('body').addClass('hidden');
})

$(".open").on('click', function () {
    $('.body').removeClass('hidden');
    $('.modal-bg').removeClass('hidden');
    $('.modal').removeClass('hidden');
})