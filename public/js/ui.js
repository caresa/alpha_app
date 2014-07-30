function showSlide(slide, element){
  console.log(element);
  console.log(slide);

  var html =  '<section class="bcg" id="'+slide.letter+'" data-type="background" data-speed="10" class="pages">' +
                '<div class="row">'+
                  '<div class="large-6 columns letter">'+
                    '<img src="./public/images/'+slide.letter+"/"+slide.letterImg+'">'+
                      '<span>'+slide.title+'</span>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="large-12 large-centered columns pic-holder">';

    for(var i in slide.images){
      html = html+'<div class="small-4 columns polaroid">'+
                    '<img src="'+slide.images[i].src+'">'+
                  '</div>';
    }

    html = html+'</div></div></section>';

  $(element).append(html);
};

