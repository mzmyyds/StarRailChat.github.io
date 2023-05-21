document.addEventListener('DOMContentLoaded', function() {
      var content = document.getElementById('fullscreen');
	  content.style.display="unset";
	  console.log("加载中");
    });

    window.addEventListener('load', function() {
		console.log("加载完毕");
		var content = document.getElementById('fullscreen');
		content.style.display="none";
    });