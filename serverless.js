exports.handler = async event => {
  const subject = event.queryStringParameters.serial || 'World'
  const url = "https://api.github.com/repos/hamberg1/md_blog/contents/contents";
  const key 
  fetch(url)
  .then(re=>re.json())
  .then(jl=>{
	key = jl.find(o => o.name.includes(subject));

	console.log(key);
	})
  return {
    statusCode: 200,
    body: `</h1> ${key}</h1>`
  }
}