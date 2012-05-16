// JavaScript Document
//Twitter Test 2

var op = { consumerKey : 'W5E7eOsx4sDT2jKlBHZz9Q', consumerSecret : 'Vi9LjYHABjme22TPrJ2coJv0rBKiTqlhK2u5sMw'};

var oauth = OAuth(op);

request = new XMLHttpRequest();

oauth.get('http://witter.com/oauth/request_token',
  // success
  function(data) {
    console.dir(data);
    request.open('GET','http://twitter.com/oauth/authorize?'+data.text,'true');
	request.onreadystatechange = processRespons;
	request.send("");
    requestParams = data.text
  },
  // fail!
  function(data) { console.dir(data) }
);
function processRespons(){
	console.log(request);
	if(request.readyState == 4){
		if(request.status == 200 || request.status == 201){
			//レクエスト処理
			console.log(request.responseText);
		}else{
			//エラー処理
		}
	}
}