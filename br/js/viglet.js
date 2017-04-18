$.getJSON("https://api.github.com/users/openviglet/events", function (data) {
    var items = [];
    $.each(data, function (i, item) {
        $.each(item.payload.commits, function (i2, item2) {
            var formats = ['YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DDTHH:mm:ssZ'];
            var momentDate = moment(item.created_at, formats).locale('pt').fromNow();
            $('#turingfeed').append($('<div style="margin-top:10px">').html('<a style="color:black" target="_blank" href="' + item2.url.replace("https://api.github.com/repos/openviglet/developers/commits/", "https://github.com/openviglet/developers/commit/") + '">' + item2.message.replace(/\n/g, "<br>") + '</a>')).append($('<small>').html('<a href="' + item.actor.url + '" target="_blank" >' + item.actor.display_login + '</a>' + " - " + momentDate));
        });
    });
});
