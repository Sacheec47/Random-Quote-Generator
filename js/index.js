$(document).ready(function(){
  $("#button1").hover(function(){
    $(this).css("background-color", x );
  });
  $("#button1").on("click",changeColorQuote) 
});

//defining a global variable x for random colors and setting initial color.
var x = "#672E3B";
var y;
var author;
//A callback function to generate a new quote and a color.
function changeColorQuote(){
  
 
//Using getJASON to retreive data.
  $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&callback=", function(result){
    //Quotes transition animation.
      $("h4").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
    // Cap quote text lenght to 120 characters.    
    var z = 121;
    author = result[Math.floor(Math.random()*31)].title;
    while (z > 120){
     y = result[Math.floor(Math.random()*40)].content;
     z = y.length; 
    }
    
    //Updating different properties on button click.    
    $("#text").html(y);
    $("#text").css("font-size","25px");
    $("#initialMessage").text("");
    $("#authorid").html("~ " + author + " ~");
    //$("h5").css("font-size","17px");   
    
          }); 
  });
 
    //Generate random colors
    var hexArrayGenerator = [];
    
    hexArrayGenerator.push(Math.floor(Math.random() * 10));
    hexArrayGenerator.push(Math.floor(Math.random() * 10));
    hexArrayGenerator.push(Math.floor(Math.random() * 10));
    x = "#" + hexArrayGenerator.join("");
    $("body").animate({backgroundColor: x, color: x}, 1000);
    $("#button1").animate({backgroundColor: x}, 1000);
    $("#button2").animate({backgroundColor: x}, 1000);
    $("h1").animate({color: x}, 1000);
     
};

//Tweeting the generated code.
$(document).ready(function(){
  
  $("#button2").hover(function(){
    $(this).css("background-color", x );
  });
  
  $("#button2").on("click", function(){
    var tweetArray = ['https://twitter.com/intent/tweet?text='];
    //var slicedY =(y.slice(3,(y.length - 5)));
    tweetArray.push($("#message").text());
    var tweetString = (tweetArray.join(""));
    //tweetString = tweetString.replace(/&#8217;/gi,"%27");
    tweetString = tweetString.replace(/;/gi,"%3B");
    $("#tweet").attr("href",tweetString + "%0A~ " + author + ' ~');
  })
})
