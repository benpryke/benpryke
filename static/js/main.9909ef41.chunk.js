(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),s=(n(17),n(1)),l=n(2),c=n(5),m=n(3),u=n(4),h=n(6),d=n(9),p=n(10),g=n.n(p),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,a=e.style;return i.a.createElement("section",{className:g()("banner",Object(d.a)({},t,t)),style:a},i.a.createElement("div",{className:"banner-content"},n))}}]),t}(i.a.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.url,a=e.icon;return i.a.createElement("a",{href:n,className:"social-button"},i.a.createElement("i",{className:a}),t)}}]),t}(a.Component),y=function(){return i.a.createElement(f,{name:"LinkedIn",icon:"fab fa-linkedin",url:"https://linkedin.com/in/benjaminpryke"})},w=function(){return i.a.createElement(f,{name:"Twitter",icon:"fab fa-twitter",url:"https://twitter.com/BenjaminPryke"})},v=function(){return i.a.createElement(f,{name:"GitHub",icon:"fab fa-github",url:"https://github.com/benpryke"})},E=function(){return i.a.createElement(f,{name:"Stack Overflow",icon:"fab fa-stack-overflow",url:"https://stackoverflow.com/users/604687/ninjakannon"})},j=function(){return i.a.createElement(f,{name:"Instagram",icon:"fab fa-instagram",url:"https://www.instagram.com/gym_ninja_ben"})},k=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={top:0,height:t.MAX_HEIGHT},n.handleScroll=n.handleScroll.bind(Object(h.a)(Object(h.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.scrollListener=document.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("scroll",this.scrollListener)}},{key:"handleScroll",value:function(){var e=window.scrollY;this.setState({top:e<t.SCROLL_CUTOFF?e:t.SCROLL_CUTOFF,height:e<t.SCROLL_CUTOFF?t.MAX_HEIGHT-e:t.MAX_HEIGHT-t.SCROLL_CUTOFF})}},{key:"render",value:function(){var e=this.props,n=e.name,a=e.headshot,r=.8*this.state.height,o=this.state.top/t.SCROLL_CUTOFF,s=25+100*(t.INIT_GREETING_WIDTH-.25)*(1-o),l=-100*(1-o);return i.a.createElement(b,{className:"hero",style:{top:-t.SCROLL_CUTOFF}},i.a.createElement("div",{className:"hero-content",style:{marginTop:this.state.top}},i.a.createElement("img",{src:a,alt:n,style:{width:r,height:r}}),i.a.createElement("div",{className:"conversation",style:{height:this.state.height}},i.a.createElement("div",{className:"greeting speech-bubble",style:{width:s+"%",marginTop:l}},i.a.createElement("p",null,"Hi, I'm ",n)),i.a.createElement("div",{className:"action speech-bubble"},i.a.createElement("p",null,"Continue the conversation"),i.a.createElement("div",null,i.a.createElement(y,null),i.a.createElement(w,null))))))}}]),t}(i.a.Component);k.MAX_HEIGHT=500,k.MIN_HEIGHT=100,k.SCROLL_CUTOFF=k.MAX_HEIGHT-k.MIN_HEIGHT,k.INIT_GREETING_WIDTH=.5;var O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.body,a=e.imgSrc;return i.a.createElement(b,{className:"paragraph"},i.a.createElement("div",{className:"paragraph-header"},i.a.createElement("h2",null,t),!!a&&i.a.createElement("img",{src:a,alt:t})),n.match(/[^\r\n]+/g).map(function(e,t){return i.a.createElement("p",{key:t},e)}))}}]),t}(i.a.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(b,{className:"showcase"},i.a.createElement("h2",null,this.props.title),i.a.createElement("div",{className:"showpieces"},this.props.children))}}]),t}(i.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.thumbnail,a=e.description,r=e.url;return i.a.createElement("a",{href:r},i.a.createElement("div",{className:"showpiece"},i.a.createElement("img",{src:n,alt:t}),i.a.createElement("h3",null,t),i.a.createElement("p",null,a)))}}]),t}(i.a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(b,{className:"footer"},i.a.createElement("footer",null,i.a.createElement(y,null),i.a.createElement(w,null),i.a.createElement(v,null),i.a.createElement(E,null),i.a.createElement(j,null)))}}]),t}(a.Component),T=(n(18),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"app"},i.a.createElement(k,{name:"Benjamin Pryke",headshot:"headshot.jpg"}),i.a.createElement(O,{title:"Story",body:"I'm a highly driven full stack developer living and breathing the tech and FinTech startup worlds with a background in computer science and machine learning. I'm super excited by nascent and growth-phase companies, especially those using machine learning, as I'm motivated by being at the creative edge of new solutions.\nWorking in fast-paced startups has been perfect because I highly value diversity in my tasks and the freedom to make my own decisions and take ownership. I try to add value by understanding the bigger picture and actively engaging with projects at every level from roadmapping and architectural decisions, implementation minutiae and refactoring, to client demos and teaching. Right now, I mostly code with Python and React as these tools typically provide the most efficient and powerful routes to getting things done.\nI still remember how I felt at 11 years old when my dad brought home a gigantic, discarded Windows 98 PC from work, so it's no surprise that less than a year later I had started programming. My teenage creative energy expenditure on Flash games, websites and physics simulations ultimately culminated in a Master's degree in Computer Science from Bristol University. From there I dove straight into a PhD in machine and deep learning at the University of Edinburgh before leaving to co-found a profitable boutique investment fund utilising that PhD skillset to find inefficiencies in niche markets. Realising both the long time horizon it would take to build reputation enough to obtain significant funding and the limitations of not being surrounded by other developers, I moved happily to London to join the FinTech startup Beacon.\nOutside my primary work schedule, I make sure to push myself and learn in other ways such as writing data science articles, training gymnastics, and meeting others from the startup community to discuss the incredible things they're doing."}),i.a.createElement(I,{title:"Published Articles"},i.a.createElement(N,{name:"Advanced Jupyter Notebooks: A Tutorial",thumbnail:"article-jupyter-advanced.jpg",description:"Popular with serious Jupyter users, this is an adventure through scripted execution, reporting pipelines, working with databases, and much more",url:"https://www.dataquest.io/blog/advanced-jupyter-notebooks-tutorial/"}),i.a.createElement(N,{name:"Jupyter Notebook for Beginners: A Tutorial",thumbnail:"article-jupyter-beginners.jpg",description:"Exploring the basics of creating a Jupyter Notebook, the important terminology, and how easily notebooks can be shared and published online",url:"https://www.dataquest.io/blog/jupyter-notebook-tutorial/"}),i.a.createElement(N,{name:"Understanding SettingwithCopyWarning in pandas",thumbnail:"article-settingwithcopywarning.png",description:"A deep dive into everything there is to know about the most common (and most misunderstood) warning in pandas",url:"https://www.dataquest.io/blog/settingwithcopywarning/"})),i.a.createElement(O,{title:"Financial Developer at Beacon",imgSrc:"beacon-logo.jpg",body:"Beacon Platform is a multi-award-winning FinTech start-up with international offices headquartered in New York, and in September 2017 I joined the London office. I assumed a client-facing full stack dev role developing core IP and integrated web apps, engaging in consulting projects, and providing leadership to more junior colleagues.\nMy responsibilities keep me constantly engaged in the balance of simultaneous projects, client communications, enhancement and support requests, code reviews, demos, discussions, interviews, etc, and we primarily use Python, React/JavaScript, CSS/LESS, Git, with Jira for agile project management.\nEarly on, I took joint-ownership of Glint, an incredibly cool key full stack UI project with total visibility internally and externally. Contributing heavily to its growth, working closely with management, and teaching, supporting, managing, working with and learning from the junior members of the team we hired to take Glint further has acted as a reflection of full product development.\nMy role thankfully permits the freedom to work with and move between multiple internal/external teams, self-direct and prioritise, and engage management at all levels. I am also lucky enough to be able to learn from the incredibly smart, driven group of individuals that make Beacon."}),i.a.createElement(I,{title:"Gymnastics around the world"},i.a.createElement(N,{name:"Berlin",thumbnail:"gym-berlin.jpg",description:"A lot of my shots require many takes before I'm satisfied, but in this case one evening by the river at East Side Gallery I got a nice blur effect from snapping a still from a video of the action instead",url:"https://www.instagram.com/p/BVHQRdGha1B/"}),i.a.createElement(N,{name:"Skopje",thumbnail:"gym-skopje.jpg",description:"Handstands are a favourite of mine, especially when a back flip is not possible. I took this in a park in Macedonia's capital, much to the interest of several onlooking kids",url:"https://www.instagram.com/p/BU5DbhNhkEN/"}),i.a.createElement(N,{name:"Budapest",thumbnail:"gym-budapest.jpg",description:"I try to find the right place to do a back flip in every country I visit. When shooting in popular locations, like this one in front of the Hungarian Parliament Building, you have to wait for just the right moment every single take",url:"https://www.instagram.com/p/BU97_sIBoZX/"})),i.a.createElement(C,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,1,2]]]);
//# sourceMappingURL=main.9909ef41.chunk.js.map