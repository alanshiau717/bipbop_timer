$("div").on('click','[data-editable]',(function() {
    var $el = $(this);    
    var $input = $('<input/>').val( $el.text() );
    $el.replaceWith( $input );
    $($input).select()
    var save = function(){
      console.log('saved')
      var $p = $('<div class="item" data-editable/>').text( $input.val() );
      $input.replaceWith( $p );
    };
      $input.keypress(function(e){
        if (e.keyCode == 13) {
          save()
        }
      })
    
    $input.one('blur', save).focus();
  }))



  $("div").on('click','[time-editable]',(function() {
    // var time = $(this).text();
    // var time = time.split(":");
    // var time = {
    //   "hour": time[0],
    //   "minute": time[1]
    // }

    var $el = $(this);    
    var parent = $el.parent()
    console.log(parent.html())
    var $input = $('<input/>').val( $el.text() );
    $el.replaceWith( $input );
    console.log(parent.html())
    // $($input).select()
    parent.append(":")
    parent.append($('<input/>').val( "hi" ))
    console.log(parent.html())
    var save = function(){
      console.log('saved')
      var $p = $('<div class="item" time-editable/>').text( $input.val() );
      $input.replaceWith( $p );
    };
      $input.keypress(function(e){
        if (e.keyCode == 13) {
          save()
        }
      })
    
    $input.one('blur', save).focus();
  }))