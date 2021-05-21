/* var str = "002_10-05-2021_How_google_made_huge_bucks"
console.log(`serial:${str.substr(0,3)} date:${str.substr(4,10)} title:${str.substr(15)}`) */
var url = "https://api.github.com/repos/hamberg1/md_blog_production/contents/contents"

fetch(url)
.then(re=>re.json())
.then(jl=>{
	jl.reverse().forEach(item=>{
		var str = item.name
		/* console.log(`serial:${str.substr(0,3)} date:${str.substr(4,10)} title:${str.substr(15).replace(".md", "")}`) */
		var div0 = document.createElement("A")
		div0.id = "test1"
		div0.onclick = () =>{
			document.getElementById("plo").innerHTML = ""
			var node = document.createElement("ZERO-MD");
			node.src = item.download_url
			node.innerHTML = `<template><link rel="stylesheet" href="./styles.css"></template>`;
			document.getElementById("art1").appendChild(node)
			if(window.innerWidth >= 800){
				document.getElementById("nav_head").style = "font-weight: bold;font-size: 27px;color: #a9a9b3;margin-left: 5%;"
			}
		}
		var div1= document.createElement("DIV")
		div1.className = "card w-100" 
		div1.innerHTML = `<div id = "coo" class="card-body" ><h5 class="card-title">${str.substr(15).replace(".md","").replace(/_/g, " ")}</h5><p class="card-text">${str.substr(4,10)}</p> </div>`;
		div0.appendChild(div1)
		document.getElementById("plo").appendChild(div0); 
	})
})

document.getElementById("nav_head").onclick = () =>{
	location.reload()
}
