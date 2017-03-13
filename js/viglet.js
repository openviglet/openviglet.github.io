	$.get("https://bitbucket.org/sumware/viglet-turing/rss?token=0cce26757ed49fa69e894668377cffc6", function (data) {
	    var $XML = $(data);
	    $XML.find("item").each(function () {
	        var $this = $(this)
	            , item = {
	                title: $this.find("title").text()
	                , link: $this.find("link").text()
	                , description: $this.find("description").text()
	                , pubDate: $this.find("pubDate").text()
	                , author: $this.find("author").text()
	            };
	        var formats = [
														'ddd, DD MMM YYYY HH:mm:ss ZZ'
														, 'ddd, DD MMM YY HH:mm:ss ZZ'];
	        var date = new Date(item.pubDate);
	        var strDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
	        var momentDate = moment(item.pubDate, formats).locale('pt').fromNow();
	        $('#turingfeed').append($('<div style="margin-top:20px">').html(item.title.replace(/\n/g,"<br>"))).append($('<small>').html(momentDate));
	    });
	});