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
      jsonpCallback: 'guns_callback',
        success: function (data) {
            console.log(data);
            var json = data;
            $.each(json, function(index, value){
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
              var stats_rpm_css = (stats_rpm/900)*100;
              // var stats_range = json[index].stats.Range;
              // var stats_range = json[index].stats.Range;
               // var id = json[index].id;
               // var name = json[index].name;
               // var desc = json[index].description;
               // var video = json[index].video;
               $('.last-container').append(`<div class="row">

                   <div class="col-lg-2 col-md-4 col-sm-4 col-4 pic-name">
                     <img src="${picture}">
                     <p>${name}</p>
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
                       <div class="stat-fill" style="width: ${stats_impact}%">Impact</div>
                       <span class="stat-value">${stats_impact}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_range}%">Range</div>
                       <span class="stat-value">${stats_range}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_stability}%">Stability</div>
                       <span class="stat-value">${stats_stability}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_magazine}%">Magazine</div>
                       <span class="stat-value">${stats_magazine}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_reload}%">Reload speed</div>
                       <span class="stat-value">${stats_reload}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_handling}%">Handling</div>
                       <span class="stat-value">${stats_handling}</span>
                     </div>
                     <div class="stat">
                       <div class="stat-fill" style="width: ${stats_rpm_css}%"> RPM </div>
                       <span class="stat-value">${stats_rpm}</span>
                     </div>
                   </div>
                   <div class="d-lg-none d-xl-none col-md-12 col-sm-12 col-12 show-switch show-perks"></div>
                   <div class="col-lg-3 col-md-12 col-sm-12 col-xs-12 perks">
                     <div class="perks-container">
                       <div class="perk-clmn">
                         <div class="perk-wrap"
                           data-name='Rapid-Fire Frame'
                           data-desc='Deeper ammo reserves. Slightly faster reload when magazine is empty.'>
                         <img class="perk" src="./assets/images/icon_rapid_fire_frame.png" alt=""></div>
                       </div>
                       <div class="perk-clmn">
                         <div class="perk-wrap"
                           data-name='Corkscrew Rifling'
                           data-desc='Balanced barrel. • Slightly increases range and stability • Slightly increases handling speed'>
                         <img class="perk" src="./assets/images/icon_corkscrew_rifling.png" alt=""></div>
                         <div class="perk-wrap"
                           data-name='Fluted Barrel'
                           data-desc='Ultra-light barrel. • Greatly increases handling speed • Slightly increases stability'>
                         <img class="perk" src="./assets/images/icon_fluted_barrel.png" alt=""></div>
                         <div class="perk-wrap recommended"
                           data-name='Hammer-Forged Rifling'
                           data-desc='Durable ranged barrel. • Increases range'>
                         <img class="perk" src="./assets/images/icon_hammer_forged_rifling.png" alt=""></div>
                       </div>
                       <div class="perk-clmn">
                         <div class="perk-wrap"
                           data-name='Accurized Rounds'
                           data-desc='This weapon can fire longer distances. • Increases range'>
                         <img class="perk" src="./assets/images/icon_accurized_rounds.png" alt=""></div>
                         <div class="perk-wrap recommended"
                           data-name='Flared Magwell'
                           data-desc='Optimized for fast reloading. • Slightly increases stability • Greatly increases reload speed'>
                         <img class="perk" src="./assets/images/icon_flared_magwell.png" alt=""></div>
                       </div>
                       <div class="perk-clmn">
                         <div class="perk-wrap"
                           data-name='Under Pressure'
                           data-desc='Improved stability and accuracy as the magazine gets lower.'>
                         <img class="perk" src="./assets/images/icon_under_pressure.png" alt=""></div>
                       </div>
                     </div>

                   </div>
                   <div class="d-lg-none d-xl-none col-md-12 col-sm-12 col-12 show-switch show-links"></div>
                   <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 links">
                     <p class="description">Solid midrange auto-rifle, highest RPM in its class, fast reload, murza seal of approval</p>
                     <a href="https://db.destinytracker.com/d2/en/items/3762467079-valakadyn">destinytracker.com</a>
                     <a href="https://destinysets.com/data/3762467079">destinysets.com</a>
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
