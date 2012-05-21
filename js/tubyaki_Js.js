// JavaScript Document

//facebook
//get_page_information();

/*
window.fbAsyncInit = function() {
    FB.init({
      appId      : '264932516939250', // App ID
//      channelUrl : 'http://www.facebook.com/home.php', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Additional initialization code here
};

/*
function get_page_information(){
	FB.api('/FacebookJapan/posts', { limit: 3 }, function(response) {
			for (var i=0, l=response.data.length; i<l; i++) {
			var post = response.data[i];
			
			if (post.message) {
				document.getElementById('fb-root').innerHTML += post.message+"<br />";
				console.log(post.message);
			} else if (post.attachment && post.attachment.name) {
				document.getElementById('fb-root').innerHTML +=　"Attachment:" + post.attachment.name+"<br />";
			}
		}
	});
}//*/

/*
FB.getLoginStatus(function(response) {
	if (response.session) {
		document.getElementById('login').innerHTML='<a href="#" onclick="FB.logout();">Logout</a><br/>';
		get_user_information();
	} else {
		document.getElementById('login').innerHTML
			='<fb:login-button show-faces="true" width="200"'
			+ ' max-rows="1" perms="user_likes, friends_likes">'
			+ '</fb:login-button>';
			FB.XFBML.parse();
	}
});
//*/

twttr.anywhere(function(t){
    if(t.isConnected()){
      console.info("isConnected === true");
      var u = t.currentUser;
      console.dir(u);
      var name      = u.data('screen_name');
      var desc      = u.data('description');
      var image     = u.data('profile_image_url');
      var image_tag = '<img src="' + image + '">';
      var e = document.getElementById('login');
      e.innerHTML = 'Logged in as ' + image_tag + ' ' + name;
      e.innerHTML += '<br>' + desc;
    }else{
      console.log("isConnected !== false");
      t('#fb-root').connectButton();
    }
	//TweetBox
	t('#t_box').tweetBox({
		height: 100,
      	width: 400,
      	defaultContent: "<YOUR DEFAULT TWEETBOX CONTENT HERE>"
	});
  });