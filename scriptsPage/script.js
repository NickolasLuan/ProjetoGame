$(document).ready(function () {
    setTimeout(function () {
        $('.loading').hide();
        $('.about-message').fadeIn(1000);
        $('.card-update').fadeIn(1000);
        $('.update-information').fadeIn(1000);
    }, 500);

    openModal();
});


function openModal() {
    $('.update-link-modal').click(function(event) {
        event.preventDefault();
        this.blur(); 
        $.get(this.href, function(html) {
          $(html).appendTo('body').modal();
        });
      });
}