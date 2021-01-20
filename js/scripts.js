var serverIpAddress = 'https://api.mcsrvstat.us/2/play.craftbu.com';
var discordGuild = 'https://discordapp.com/api/guilds/690019838445486121/widget.json'; //You need to have Server Widget Enabled

$(window).load(function() {
    $("#loading__main").fadeOut("fast");
    })
    
    setTimeout(function() { $('#loading__main').fadeOut('fast'); }, 3000);
    

$(function() {
    $('#loading__main').prependTo('body');
    $('#extrainfo').prependTo('.body-wrap-2');
    $('header').prependTo('.body-wrap-2');

});
$( document ).ready(function() {
    getDiscordUsers();
    getOnlinePlayers();
    getServerStatus();

});
        var discord_status = false;
        function getDiscordUsers() {
            $.getJSON(discordGuild, function(json) {
                discord_status = true;
                $('.dinfo b').html(json['members'].length)

            });
        }

        function getOnlinePlayers() {
            $.getJSON(serverIpAddress, function(json) {
                if (json.online !== "error") {
                    $("#online").html('<i class="fas fa-users"></i> ' + json.players.online);
                } else {
                    $("#online").html('<i class="fas fa-spinner fa-spin"></i>');
                }

                setTimeout(getOnlinePlayers, 5000);
            });
        }
        function getServerStatus() {
            $.getJSON(serverIpAddress, function(json) {
                if (json.online) {
                    $(".sst").html('Online <i class="fas fa-bolt"></i>').css("color", "#e51836");
                } else {
                    $(".sst").html('Offline <i class="fas fa-times"></i>').css("color", "#d03a3a");
                }
                
                
                if (json.hostname !== "") {
                    $(".ssv").html('Supports 1.10 - 1.16.5 <i class="fas fa-code-branch"></i>').css("color", "#e51836");
                } else {
                    $(".ssv").html('Unknown <i class="fas fa-exclamation-triangle"></i>').css("color", "#d03a3a");
                }


                setTimeout(getServerStatus, 5000);
            });
        }
        
        setTimeout(function() {
            if (!discord_status) {
                $('.dinfo b').html('<i class="fas fa-spinner fa-spin"></i>');
            }
        }, 5000);
    $(function() {
      var ip = new Clipboard('#ip');
    
            ip.on("success", function() {
                $('#ip p').html("IP has been successfully copied!");
    
                setTimeout(function() {
                    $('#ip p').html("Click to copy IP address!");
                }, 3000);
    
      });
    });

function mobileMenu() {
  var x = document.getElementById("top");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/
$(document).ready(function() {
var elem = document.querySelector('.m-p-g');

document.addEventListener('DOMContentLoaded', function() {
    var gallery = new MaterialPhotoGallery(elem);
});
});