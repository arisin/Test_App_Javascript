// JavaScript Document

//twitter
twttr.anywhere(function(t){
    if(t.isConnected()){
      console.info("isConnected === true");
      var u = t.currentUser;
      console.dir(u);
      var name      = u.data('screen_name');
      var desc      = u.data('description');
      var image     = u.data('profile_image_url');
      var image_tag = '<img src="' + image + '">';
      var e = document.getElementById('user');
      e.innerHTML = 'Logged in as ' + image_tag + ' ' + name;
      e.innerHTML += '<br>' + desc;
    }else{
      console.log("isConnected !== false");
      t('#t_line').connectButton();
    }
	//TweetBox
	t('#t_box').tweetBox({
		height: 100,
      	width: 400,
		label:"今なにしてる？",
      	defaultContent: "ツイートする"
	});
 });
//タイムライン表示
var twitter_id = 'arisinn'; //表示したいtwitter ID
var twitter_count = 10; //表示数
var twitter_elem_id = 'twitter_data';

window.onload = function(){
	get_timeline();
	
	var t_aupdate = setInterval(function(){
		get_timeline();
		console.log("++++++++");
	},5000);

};

var get_timeline = function() {
	var url = 'http://twitter.com/statuses/user_timeline/'
				+ twitter_id
				+ '.json?callback=twitterCallback&count='
				+ twitter_count;
	var script = document.createElement('script');
	script.setAttribute('src', url);
	document.body.appendChild(script);
};

function twitterCallback(obj){
	var html = "";
	for(var i=0 ; i<twitter_count && i<obj.length ; i++){
		html += "<li><a href='http://twitter.com/" + twitter_id + "/status/"
		+ obj[i].id + "'>" + obj[i].text + "</a></li>";
	}
	document.getElementById('t_line').innerHTML = html;
}

