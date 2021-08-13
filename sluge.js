  $('#title').keyup(function(){
    $('#sluge').val($(this).val().toLowerCase().split(',').join('').replace(/\s/g,"-"));
  });