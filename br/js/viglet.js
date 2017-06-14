$.getJSON("https://api.github.com/users/openviglet/events", function (data) {
    var items = [];
    $.each(data, function (i, item) {
        $.each(item.payload.commits, function (i2, item2) {
            var formats = ['YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DDTHH:mm:ssZ'];
            var momentDate = moment(item.created_at, formats).locale('pt').fromNow();
            $('#turingfeed').append($('<div style="margin-top:10px">').html($('<a target="_blank" style="font-size:small" href=https://github.com/' + item.repo.name + '>').html(item.repo.name.replace("openviglet/", "")))).append($('<div>').html('<a style="color:black" target="_blank" href="' + item2.url.replace("https://api.github.com/repos/openviglet/", "https://github.com/openviglet/").replace("commits", "commit") + '">' + item2.message.replace(/\n/g, "<br>") + '</a>')).append($('<small>').html('<a href="https://github.com/' + item.actor.login + '" target="_blank" >' + item.actor.display_login + '</a>' + " - " + momentDate));
        });
    });
});
$('body').scrollspy({
    target: '.navbar-default'
})
var currentFullYear = new Date().getFullYear();
$('#footerMessage').html("© " + currentFullYear + " Viglet");
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0]
        , t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o), m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-25716774-3', 'auto');
ga('send', 'pageview');