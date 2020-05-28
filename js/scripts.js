var serverIpAddress = 'https://mcapi.us/server/status?ip=play.quaranteen.university';
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
                if (json.status !== "error") {
                    $("#online").html('<i class="fas fa-users"></i> ' + json.players.now);
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
                
                
                if (json.server.name !== "") {
                    $(".ssv").html('Supports 1.10 - 1.15.2 <i class="fas fa-code-branch"></i>').css("color", "#e51836");
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
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}