// Harvest t1 loc's in under 500 symbols
// Syntax: script {t: #s.some_corp.loc }
// Use with targets from ada.fullsec { npc: true }
// By nlight

function z(c, a)
{
	var _ = (c, p) => { c.forEach(p) }, // loop utility method
		x = a.t.call,
		r = x({}), // first call to get method names
		k = /d with ([a-z]+):/.exec(r)[1], // extract command key
		j = /y with [a-z]+:"([a-z]+)"/.exec(r)[1], // extract special command
		o = / \"([a-z_]*)\"/g, // extract commands
		n = [], // list of commands
		p = /y ([a-zA-Z_]*) an/, // password regex
		v, // password
		x = [], // project names
		b = [], // results
		q = {},
		z = [/ject]*) /, /e for ([a-z_0-9.]+)\. /, /on ([a-z()0-9_]+) pr/] // project name patterns
	
	while(c = o.exec(r)) n.push(c[1])
	
	
	_(n, c => { // for each command
		q[k] = c
		r = x(q) // run the script
		
		if((typeof r)[0]!="s") // if we get an array parse the individual items for projects
			_(r, q => _(z, z => {
				o = z.exec(q)
				if(o) x.push(o[1])
			}))
		else { // if we get a single item parse it for passwords
			o = p.exec(r)
			if(o) v = o[1]
		}
	})
	
	_(x, h => { // for each project
		p = {project: h, password: v, pass: v, p: v}
		p[k] = j
		r = x(p) // call the script to get the npc locs
		_(r, g => { // for each npc loc push it in the results array
			b.push(g)
		})
	})
	
	return b
}

/* < 500 minified
function(e,a){for(var c,p=(e,a)=>{e.forEach(a)},r=a.t.call,o=r({}),s=/d with ([a-z]+):/.exec(o)[1],t=/y with [a-z]+:"([a-z]+)"/.exec(o)[1],h=/ \"([a-z_]*)\"/g,f=[],n=/y ([a-zA-Z_]*) an/,r=[],u=[],x={},_=[/ject]*) /,/e for ([a-z_0-9.]+)\. /,/on ([a-z()0-9_]+) pr/];e=h.exec(o);)f.push(e[1]);return p(f,e=>{x[s]=e,"s"!=(typeof(o=r(x)))[0]?p(o,e=>p(_,a=>{(h=a.exec(e))&&r.push(h[1])})):(h=n.exec(o))&&(c=h[1])}),p(r,e=>{(n={project:e,password:c,pass:c,p:c})[s]=t,p(o=r(n),e=>{u.push(e)})}),u}
*/