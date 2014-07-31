jQuery(document).ready(function ($) {
    var language = 'spa';
    var letter = 0;
    //loop over slides and call showSlide to append img to body
    for(var i in slides){
        var slide = slides[i];
        showSlide(slide, 'body')
    }

    $('.languages span').on('click', function(){
       lang = this.id;
       setLanguage(lang);
    });

    function setLanguage(lang){
        language = lang;
    };
    //click listener to make api call
    $('.polaroid').on('click', function(){
       translate(this.id, language);
       $(".card-container").flip(options);
       console.log('a');
    });

    $(document).on('keyup', function(e){
        e.preventDefault();

        letter = slideIndex(e.which);
        if(letter === false) {
            return;
        }

        letter = slides[letter].letter;

        console.log(letter);
        console.log($('#'+letter).offset());

        $('html, body').animate({
            scrollTop: $('#'+letter).offset().top
        }, 2000);
    });


    //initialise Stellar.js
//     $(window).stellar();


//     //Cache some variables
//     var links = $('.navigation').find('li');
//     slide = $('.slide');
//     button = $('.button');
//     mywindow = $(window);
//     htmlbody = $('html,body');


//     //Setup waypoints plugin
//     slide.waypoint(function (event, direction) {

//         //cache the variable of the data-slide attribute associated with each slide
//         dataslide = $(this).attr('data-slide');

//         //If the user scrolls up change the navigation link that has the same data-slide attribute as the slide to active and
//         //remove the active class from the previous navigation link
//         if (direction === 'down') {
//             $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').prev().removeClass('active');
//         }
//         // else If the user scrolls down change the navigation link that has the same data-slide attribute as the slide to active and
//         //remove the active class from the next navigation link
//         else {
//             $('.navigation li[data-slide="' + dataslide + '"]').addClass('active').next().removeClass('active');
//         }

//     });

//     //waypoints doesnt detect the first slide when user scrolls back up to the top so we add this little bit of code, that removes the class
//     //from navigation link slide 2 and adds it to navigation link slide 1.
//     mywindow.scroll(function () {
//         if (mywindow.scrollTop() == 0) {
//             $('.navigation li[data-slide="1"]').addClass('active');
//             $('.navigation li[data-slide="2"]').removeClass('active');
//         }
//     });

//     Create a function that will be passed a slide number and then will scroll to that slide using jquerys animate. The Jquery
//     easing plugin is also used, so we passed in the easing method of 'easeInOutQuint' which is available throught the plugin.
//     function goToByScroll(dataslide) {
//         htmlbody.animate({
//             scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
//         }, 2000, 'easeInOutQuint');
//     }


//     //When the user clicks on the navigation links, get the data-slide attribute value of the link and pass that variable to the goToByScroll function
//     links.click(function (e) {
//         e.preventDefault();
//         dataslide = $(this).attr('data-slide');
//         goToByScroll(dataslide);
//     });

//     //When the user clicks on the button, get the get the data-slide attribute value of the button and pass that variable to the goToByScroll function
//     button.click(function (e) {
//         e.preventDefault();
//         dataslide = $(this).attr('data-slide');
//         goToByScroll(dataslide);

//     });

});

function translate(englishWord, language) {
    var request = $.ajax({
        url: "http://glosbe.com/gapi/translate?from=eng&dest="+language+"&format=json&phrase="+englishWord+"&pretty=true",
        type: "GET",
        dataType: "jsonp"
    });

    request.done(function( data ) {
        console.log(data);
        expolreObj = {
            english: data.phrase,
            translation: data.tuc[0].phrase.text,
            usages: {}
        };

        if(data.tuc[0].meanings !== undefined) {
            for (var i in data.tuc[0].meanings) {
                var meanings = data.tuc[0].meanings[i];

                if(expolreObj.usages[meanings.language] === undefined) {
                    expolreObj.usages[meanings.language] = meanings.text;
                }
            }
        }

        console.log(expolreObj);
    });

    request.fail(function( jqXHR, textStatus ) {
        alert( "Request failed: " + textStatus );
    });
};

function slideIndex(code) {
  if(code >= 65 && code <= 90) {
    return(code - 65);
  }
  else if(code >= 97 && code <= 122) {
    return (code - 97);
  }

  return false;
};



var options = {
       alwaysOneDirection: 'false', //values: 'true' or 'false', indicates if flipping card always in one direction
       direction: 'tb', //values: 'lr' (left to right), 'tb'(top to bottom), 'rl' and 'bt'
       speed: '500ms', //specify animation duration
       timingfunction: 'ease', //built-in timing function list (see it below) or customized cubic-beizer
       onflipping: function(dir, transDir) //this event will be triggered before animation
       {
           //dir is direction e.g. 'lr', 'tb'
           //transDir means transforming from front to back (value: 'fb') or back to front (value: 'bf')
           console.log("onflipping event");
       },
       onflipped: function(dir, transDir) //this event will be triggered after animation
       {
           //dir is direction e.g. 'lr', 'tb'
           //transDir means transforming from front to back (value: 'fb') or back to front (value: 'bf')
           console.log("onflipped event");
       }
}
