$(document).ready(function(){
    $(".button").hover(function(){
      $(".dropdown").slideToggle();
      $('#dropdownid a').click(function(){
        let val=$(this).data('value');
        $('#buttonid').text(val);
      });
    });
  //If the Order button is selected then the options the user chose
  //is locked out. The notes portion will show and appear message if the user
  //presses enter.
    $('#notes').keyup(function(){
        if($(this).val().toLowerCase().indexOf('vegan') != -1){
          alert('This product contains dairy!');
        }
    });
    $("#orderButton").click(function(){
      $("#quantityID").replaceWith("Thank you for your order! Below are your details...");
      $('#orderButton').hide();
      $("#quantitySelect").each(function(element){
        $(this).attr('disabled','disabled')
      });
      $("#Plain").each(function(element){
        $(this).attr('disabled','disabled')
      });
      $("#Cherry").each(function(element){
        $(this).attr('disabled','disabled')
      });
      $("#Chocolate").each(function(element){
        $(this).attr('disabled','disabled')
      });
      $('#notes').keyup(function(){
        if($(this).val().toLowerCase().indexOf('vegan') != -1){
          alert('This product contains dairy!');
        }
      });
    });
  });

  let eventHandler = function( event ) {
    /* do stuff */
    }
    $(function() {
    $(".foo").click(eventHandler);
    });