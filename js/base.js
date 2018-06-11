$(document).ready(function() {
  $(".container-fluid").on('click', '.show-stats', function(){
    console.log('xyu`');
    $(this).next().toggle();
  });

  $(".container-fluid").on('click','.show-perks', function(){
    $(this).next().toggle();
  });

  $(".container-fluid").on('click', '.show-links', function(){
    $(this).next().toggle();
  });

  $.ajax({
      url: "guns.jsonp",
      type: 'POST',
      crossDomain: true,
      dataType: 'jsonp',
      accepts: 'application/jsonp',
      jsonpCallback: 'guns_callback',
        success: function (data) {
            console.log(data);
            var json = data;
            $.each(json, function(index, value){
              var type = json[index].type;
              if (type == 'rocket_launchers' || type == 'grenade_launchers' ){
                    var text_impact = 'Blast Radius';
                    var text_range = 'Velocity';
                    var text_stability = 'Stability';
                    var text_mag = 'Magazine';
                    var text_reload = 'Reload Speed';
                    var text_handling = 'Handling';
                } else if (type == 'swords'){
                    var text_impact = 'Swing Speed';
                    var text_range = 'Impact';
                    var text_stability = 'Range';
                    var text_mag = 'Efficiency';
                    var text_reload = 'Defense';
                    var text_handling = 'Ammo Capacity';
                } else {
                    var text_impact = 'Impact';
                    var text_range = 'Range';
                    var text_stability = 'Stability';
                    var text_mag = 'Magazine';
                    var text_reload = 'Reload Speed';
                    var text_handling = 'Handling';
                };

              var name = json[index].name;
              var picture = json[index].picture;
              var tier = json[index].tier;
              var spec = json[index].specialization;
              var role = json[index].role;
              var rarity_type = json[index].rarity[0];
              var rarity_rarity = json[index].rarity[1];
              var rarity_source = json[index].rarity[2];
              var stats_impact = json[index].stats.Impact;
              var stats_range = json[index].stats.Range;
              var stats_stability = json[index].stats.Stability;
              var stats_magazine = json[index].stats.Magazine;
              var stats_reload = json[index].stats.Reload_speed;
              var stats_handling = json[index].stats.Handling;
              var stats_rpm = json[index].stats.RPM;
              var stats_rpm_css = (stats_rpm/1000)*100;
              var perks = json[index].perks;
              var perks_html = '<div class="perks-container">';
              //console.log(perks);
               $.each(perks, function(index, value){
                  //console.log(perks[index]);
                  perks_html += '<div class="perk-clmn">';
                  var perks2 = perks[index];
                 $.each(perks2, function(i, value){
                   //console.log(perks2[i].name);
                   if (perks2[i].recommended) var recommended = 'recommended';
                   perks_html += `<div class="perk-wrap ${recommended}"
                     data-name='${perks2[i].name}'
                     data-desc='${perks2[i].description}'>
                   <img class="perk" src="${perks2[i].icon}" alt=""></div>`;
                   //console.log(perks_html);
                 });
                 perks_html += '</div>';
               });

              var description = json[index].links.description;
              var dt_link = json[index].links.destinytracker;
              // var stats_range = json[index].stats.Range;
              // var stats_range = json[index].stats.Range;
               // var id = json[index].id;
               // var name = json[index].name;
               // var desc = json[index].description;
               // var video = json[index].video;
               $('.' + type).append(`<div class="row">

                   <div class="col-lg-2 col-md-4 col-sm-4 col-4 pic-name">
                     <img src="${picture}">
                     <p id="name">${name}</p>
                   </div>
                   <div class="col-lg-1 col-md-4 col-sm-4 col-4 tier">
                     <p class="tier-${tier}">Tier ${tier}</p>
                     <p class="specialization">${role}</p>
                   </div>
                   <div class="col-lg-1 col-md-4 col-sm-4 col-4 rarity">
                     <p class="wep-type">${rarity_type}</p>
                     <p class="${rarity_rarity.slice(0, -1).toLowerCase()}">${rarity_rarity}</p>
                     <p class="source">${rarity_source}</p>
                   </div>
                   <div class="d-lg-none d-xl-none col-md-12 col-sm-12 col-12 show-switch show-stats"></div>
                   <div class="col-lg-3 col-md-12 col-sm-12 col-12 stats">
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_impact}%">${text_impact}</div>
                       <span class="stat-value">${stats_impact}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_range}%">${text_range}</div>
                       <span class="stat-value">${stats_range}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_stability}%">${text_stability}</div>
                       <span class="stat-value">${stats_stability}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_magazine}%">${text_mag}</div>
                       <span class="stat-value">${stats_magazine}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_reload}%">${text_reload}</div>
                       <span class="stat-value">${stats_reload}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_handling}%">${text_handling}</div>
                       <span class="stat-value">${stats_handling}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_rpm_css}%"> RPM </div>
                       <span class="stat-value">${stats_rpm}</span>
                     </div>
                   </div>
                   <div class="d-lg-none d-xl-none col-md-12 col-sm-12 col-12 show-switch show-perks"></div>
                   <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 perks">
                     ${perks_html}
                     </div>

                   </div>
                   <div class="d-lg-none d-xl-none col-md-12 col-sm-12 col-12 show-switch show-links"></div>
                   <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 links">
                     <p class="description">${description}</p>
                     <a href="${dt_link}">destinytracker.com</a>

                   </div>

                 </div>`);
            });
     }});

  $(".container-fluid").on('mouseenter', '.perk-wrap', function(){
    var title = $(this).data('name');
    var description = $(this).data('desc');
    $(this).append(`<div class='perk-tooltip'><h5>${title}</h5>${description}</div>`);
  });
  $(".container-fluid").on('mouseleave', '.perk-wrap', function(){
    $(this).find('.perk-tooltip').remove();
  });

    $(".container-fluid").on('mouseleave', '.perk-tooltip', function(){
      $(this).remove();
    });

  $('.gun-search').on('keyup', function(){
    if ($(this).val().length > 2) {
      console.log('its > 2');
      console.log($(this).val().length);
      var searchTerm = $(this).val().toLowerCase();
      console.log("find(name) is: " + $(this).find('#name'));
      console.log("find(name).val is: " + $(this).find('#name').val().prop('outerHTML'));
      console.log("find(name).val.tolower is: " + $(this).find('#name').val().toLowerCase());
      $('.container-fluid').each(function(){
        if ($(this).find('#name').val().toLowerCase() == searchTerm) {
          console.log($(this).find('#name').val().toLowerCase());
          console.log(searchTerm);
          $(this).hide();
        }
      });
    } else {
      console.log('its too short');
      console.log($(this).val().length);
    };

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
