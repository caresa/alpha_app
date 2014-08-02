function showSlide(slide, element){
  var html =  '<section class="bcg" id="'+slide.letter+'" data-type="background" data-speed="10" class="pages">' +
                '<div class="row">'+
                  '<div class="large-6 columns letter">'+
                    '<img src="./public/images/'+slide.letter+"/"+slide.letterImg+'">'+
                      '<span>'+slide.title+'</span>'+
                  '</div>'+
                  // '<div class="small-2 columns language">'+
                  //   '<span>french</span>'+
                  // '</div>'+
                  // '<div class="small-2 columns language">'+
                  //   '<span>french</span>'+
                  // '</div>'+
                  // '<div class="small-2 columns language">'+
                  //   '<span>french</span>'+
                  // '</div>'+
                  '<hr>'
                '</div>'+
                '<div class="large-12 large-centered row">';

                  for(var i in slide.images){
                    html = html+'<div id="'+slide.images[i].english+'" class="card-container columns small-4">'+
                                  '<div class="card">'+
                                    '<div class="front">'+
                                      '<img src="'+slide.images[i].src+'">'+
                                    '</div>'+
                                    '<div class="back">'+
                                      '<p class="text">'+
                                      "&nbsp;"+
                                      '</p>' +
                                    '</div>'+
                                  '</div>'+
                                '</div>';
                  }

    html = html+'</div>'+
                  '<div class="row">'+
                    '<div class="large-12 large-centered columns languages">'+
                      '<div class="small-4 columns langOne">'+
                        '<span id="spa">Spanish</span>'+
                      '</div>'+
                      '<div class="small-4 columns langTwo">'+
                        '<span id="fra">French</span>'+
                      '</div>'+
                      '<div class="small-4 columns langThree">'+
                        '<span id="ita">Italian</span>'+
                      '</div>'+
                    '</div>'+
                  // '</div>'+
                '</section>';

  $(element).append(html);
};

