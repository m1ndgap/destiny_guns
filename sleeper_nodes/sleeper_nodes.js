$(document).ready(function() {
  // $(function(){
  //        $.getJSON('sleeper_nodes.json',function(data){
  //            console.log('success');
  //            alert(data[0].id);
  //            $.each(data.id,function(i,ide){
  //                $('ul').append('<li>'+ide.firstName+' '+ide.lastName+'</li>');
  //            });
  //        }).error(function(){
  //            console.log('error');
  //        });
  //    });

  $('.sn-check').on('click', 'input', function(){
    var row = $(this).closest('.row')

    if(row.hasClass('.completed-node')) {
      row.appendTo('.sn-in-progress');
      row.removeClass('.completed-node');
      }
      else {
      row.appendTo('.sn-completed');
      row.addClass('.completed-node');
      }
  });
});
