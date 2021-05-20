/* var str = "002_10-05-2021_How_google_made_huge_bucks"
console.log(`serial:${str.substr(0,3)} date:${str.substr(4,10)} title:${str.substr(15)}`) */
var url = "https://api.github.com/repos/hamberg1/md_blog/contents/contents"

fetch(url)
.then(re=>re.json())
.then(jl=>{
	jl.reverse().forEach(item=>{
		var str = item.name
		console.log(`serial:${str.substr(0,3)} date:${str.substr(4,10)} title:${str.substr(15).replace(".md", "")}`)
		var div1= document.createElement("DIV")
		div1.className = "card w-100" 
		div1.innerHTML = `<div id = "coo" class="card-body" ><h5 class="card-title">${str.substr(15).replace(".md","")}</h5><p class="card-text">${str.substr(4,10)}</p> </div>`;
		document.getElementById("plo").appendChild(div1); 
	})
})
var direct = (param)=>{
	document.getElementById("plo").innerHTML = "";
	var node = document.createElement("ZERO-MD");
	node.src = param
	document.getElementById("plo").appendChild(node)
}
