$(document).ready(function() {
  $('.show-stats').on('click', function(){
    $(this).next().toggle();
  });

  $('.show-perks').on('click', function(){
    $(this).next().toggle();
  });

  $('.show-links').on('click', function(){
    $(this).next().toggle();
  });

  $.ajax({
      url: "guns.jsonp",
      type: 'POST',
      crossDomain: true,
      dataType: 'jsonp',
      accepts: 'application/jsonp',
      jsonpCallback: 'callback',
        success: function (data) {
            console.log(data);
            // var json = data;
            // var localstorage = JSON.parse(localStorage.getItem('nodes'));
            // $.each(json, function(index, value){
            //    var id = json[index].id;
            //    var name = json[index].name;
            //    var desc = json[index].description;
            //    var video = json[index].video;
            //    if (localstorage.includes(id)) {
            //      var target = '.sn-completed';
            //      var checked = 'checked';
            //      var completed = "1123";
            //    } else {
            //      var target = '.sn-in-progress';
            //      var checked = '';
            //      var completed = "131123";
            //    };
            //
            //    $(target).append(
            //      `<div id="${id}" class="row justify-content-center">
            //        <div class="col-lg-1 col-md-1 col-sm-1 col-12 sn-check"><input type="checkbox" ${checked} data-id="${id}"></div>
            //        <div class="col-lg-3 col-md-5 col-sm-5 col-12 sn-name"><span class="align-middle">${name}</span></div>
            //        <div class="col-lg-2 col-md-2 col-sm-2 col-12 sn-desc"><span class="align-middle">${desc}</span></div>
            //        <div class="col-lg-2 col-md-2 col-sm-2 col-12 sn-vid"><span class="align-middle"><a target="_blank" href="${video}">Video</a></span></div>
            //      </div>`);
            // });
     }});

  $(".perk-wrap").on('mouseenter', function(){
    var title = $(this).data('name');
    var description = $(this).data('desc');
    $(this).append(`<div class='perk-tooltip'><h5>${title}</h5>${description}</div>`);
  });
  $(".perk-wrap").on('mouseleave', function(){
    $(this).find('.perk-tooltip').remove();
  });

    $(".perk-tooltip").on('mouseenter', function(){
      $(this).remove();
    });

  // $(".perk-wrap").tooltip({
  //     items: ".perk-wrap",
  //     track: true,
  //     content: function() {
  //       var title = $(this).data('name');
  //       var description = $(this).data('desc');
  //       var content = `<h4>${title}</h4>`;
        // if ( element.hasClass('perk-wrap') ) {
        //   var text = element.text();
        //   return "<img class='map' alt='" + text +
        //     "' src='http://maps.google.com/maps/api/staticmap?" +
        //     "zoom=11&size=350x350&maptype=terrain&sensor=false&center=" +
        //     text + "'>";
        // }
        // if ( element.is( "[title]" ) ) {
        //   return element.attr( "title" );
        // }
        // if ( element.is( "img" ) ) {
        //   return element.attr( "alt" );
  //     }
  // });
});
