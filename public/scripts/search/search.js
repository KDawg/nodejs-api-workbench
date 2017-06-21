$(function() {

  $('#go-search').on('click', function() {
    const userAccount = $('#user-account').val().toLowerCase();
    const url = `/search?user=${userAccount}`;

    window.location = url;
  });
});
