exports.handler = async event => {
  const subject = event.queryStringParameters.name || 'direct'
  //const url = "https://api.github.com/repos/hamberg1/md_blog_production/contents/contents";
  var ksm = (subject!= 'direct')? `<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
	<script type="module" src="https://cdn.jsdelivr.net/gh/zerodevx/zero-md@2/dist/zero-md.min.js"></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="./styles.css">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans&family=Inter:wght@600&display=swap" rel="stylesheet">
	<link href="https://minimal-post.netlify.app/styles.css" rel="stylesheet">
	</head>
	<body style="background: #292a2d";>
	<nav class="navbar navbar-inverse" style="background: #252627;
    border-bottom: solid;
    border-bottom-color: #252627">
	<div class="container-fluid">
	<div id ="nav_head" class="navbar-header" style="
    font-weight: bold;
	font-size: 27px;
	color: #a9a9b3;"> 
	The New Blog 
    </div>
    <ul class="nav navbar-nav">
		<button id="share" type="button" class="btn btn-secondary" >
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share" viewBox="0 0 16 16">
    <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"></path>
    </svg>
    </button>
    </ul>
	
    
	</div>
	</nav>
	<div id="art1">
	<zero-md src="https://raw.githubusercontent.com/hamberg1/md_blog_production/main/contents/${subject}">
	<template><link rel="stylesheet" href="https://minimal-post.netlify.app/styles.css"></template>
	</zero-md>
	</div> 


	<script>

	</script>

	<script>
	if(window.innerWidth >= 800){
				document.getElementById("nav_head").style = "font-weight: bold;font-size: 27px;color: #a9a9b3;margin-left: 5%;"
			}
	document.getElementById("nav_head").onclick = () =>{
		window.location = window.origin;
	}
	</script>
	</body>

	</html>`:`<html><head></head><body><script>window.location = window.origin </script></body></html>`
  return {
    statusCode: 200,
    body: ksm
  }
}
