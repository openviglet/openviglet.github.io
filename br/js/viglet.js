	$.get("https://viglet.ai/github/atom/turing", function (data) {
	    var $XML = $(data);
	    $XML.find("entry").each(function () {
	        var $this = $(this)
	            , item = {
	                title: $this.find("title").text()
	                , link: $this.find("link").attr("href")
	                , description: $this.find("description").text()
	                , pubDate: $this.find("updated").text()
	                , authorName: $this.find("author").find("name").text()
                    , authorUri: $this.find("author").find("uri").text()
                
                    
	            };
	        var formats = ['YYYY-MM-DDTHH:mm:ssZ', 'YYYY-MM-DDTHH:mm:ssZ'];
	        var date = new Date(item.pubDate);
	        var strDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
	        var momentDate = moment(item.pubDate, formats).locale('en').fromNow();
	        $('#turingfeed').append($('<div style="margin-top:10px">').html('<a style="color:black" href="' + item.link + '">' + item.title.replace(/\n/g, "<br>") + '</a>')).append($('<small>').html('<a href="' + item.authorUri + '" target="_blank" >' + item.authorName + '</a>' +
	            " - " + momentDate ));
	    });
	});