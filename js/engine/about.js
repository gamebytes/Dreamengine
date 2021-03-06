/**
* Author
 @Inateno / http://inateno.com / http://dreamirl.com

* ContributorsList
 @Inateno

***
* about
 about the engine, the game, the author
**/
define( [ 'DE.CONFIG' ],
function( CONFIG )
{
  var about = {};
  
  about.DEName = "about";
  about.version= "0.1.0";
  about.gameName    = "DreamGame";
  about.gameVersion = "0.1.0";
  about.gameAuthor  = "Dreamirl";
  
  about.set = function( values )
  {
    values = values || {};
    about.gameName    = values.gameName || about.gameName;
    about.gameVersion = values.gameVersion || about.gameVersion;
    about.gameAuthor  = values.gameAuthor || about.gameAuthor;
  };
  
  CONFIG.debug.log( "about loaded", 3 );
  return about;
} );