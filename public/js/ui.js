function showSlide(slide, element){
  var html =  '<section class="bcg" id="'+slide.letter+'" data-type="background" data-speed="10" class="pages">' +
                '<div class="row">'+
                  '<div class="large-6 columns letter">'+
                    '<img src="./public/images/'+slide.letter+"/"+slide.letterImg+'">'+
                      '<span>'+slide.title+'</span>'+
                  '</div>'+
                  '<hr>'
                '</div>'+
                '<div class="row">';

          for(var i in slide.images){
            html = html+'<div class="row card-container">'+
                          '<div class="large-12 large-centered columns card">'+
                            '<div class="small-4 columns polaroid front" id="'+slide.images[i].english+'">'+
                              '<img src="'+slide.images[i].src+'">'+
                            '</div>'+
                            '<div class="small-4 columns polaroid back">'+
                              "back"+
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

