$('.page.mainPage').show();

$('.page-link').click(function () {
    $('.page').hide();
    $('.page.' + this.dataset.page).show();
});