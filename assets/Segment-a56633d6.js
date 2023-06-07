import{r as g,a as f,u as V,G as v,s as C,b as I,c as S,d as x,l as R,o as l,e as c,f as a,F as y,g as k,t as _,h as $,n as w,i as j,j as B}from"./index-8b3eaec4.js";const F=()=>{const h=g(f.currentUser),p=V();return{googleSignIn:()=>{const t=new v;C(f,t).then(d=>{v.credentialFromResult(d).accessToken;const i=d.user;i.value=i,p.push({name:"home"})}).catch(d=>{console.log(d)})},setUser:t=>{t.value=t},user:h}},U={class:"min-h-screen py-20 text-white bg-gray-800"},z=a("h1",{class:"text-2xl font-bold text-center"},null,-1),G={class:"max-w-md mx-auto mt-5 space-y-5 text-center"},M={class:"text-xl"},N={class:"mt-5 space-y-5"},P=["onClick"],T={class:"flex justify-between w-full p-2 font-semibold border border-gray-700 rounded-md shadow"},q=a("p",{class:"opacity-0"},"ok ",-1),A={class:"absolute left-2"},D={class:"absolute right-2"},E=a("p",{class:"opacity-0"},"ok ",-1),L={class:"absolute left-2"},O={key:0,class:"space-x-5"},H={__name:"Segment",setup(h){const{user:p}=I(F()),m=S(),u=g([]);x.get(`/polls/segment/${m.params.id}`).then(n=>{u.value=n.data.map(s=>{const o=s.options.reduce((e,r)=>e+r.votes,0);return s.options=s.options.map(e=>(e.percentage=Math.round(e.votes/o*100)||0,e)),s.options.sort((e,r)=>r.percentage-e.percentage),s.isVoted=!!s.voters.includes(p.value.uid),s})});const t=g(null),d=(n,s,o)=>{t.value={pollId:n,optionId:s,userId:o}},b=()=>{x.post("/vote",t.value).then(n=>{t.value=null})},i=R("http://localhost:3000");return i.on("connect",()=>{console.log("connected")}),i.on("votes",n=>{const s=n.options.reduce((e,r)=>e+r.votes,0);n.options=n.options.map(e=>(e.percentage=Math.round(e.votes/s*100)||0,e)),n.options.sort((e,r)=>r.percentage-e.percentage);const o=u.value.findIndex(e=>n._id===e._id);u.value[o]=n}),(n,s)=>(l(),c("div",U,[z,a("div",G,[(l(!0),c(y,null,k(u.value,o=>(l(),c("div",{key:o.id,class:"w-full p-5 border border-dashed rounded-2xl"},[a("h2",M,_(o.question),1),a("div",N,[(l(!0),c(y,null,k(o.options,e=>(l(),c("div",{class:"relative border border-gray-900 rounded-md cursor-pointer",key:e._id,onClick:r=>d(o._id,e._id,$(p).uid)},[o.isVoted?(l(),c("div",{key:0,class:w("bg-emerald-500 rounded-md "),style:j({width:e.percentage+"%"})},[a("button",T,[q,a("div",A,_(e.text),1),a("h1",D,_(e.percentage)+"% ",1)])],4)):(l(),c("button",{key:1,class:w(`flex justify-between w-full p-2 font-semibold border border-gray-700 rounded-md shadow ${t.value&&t.value.pollId==o._id&&e._id==t.value.optionId?"bg-emerald-500":""}`)},[E,a("div",L,_(e.text),1)],2))],8,P))),128)),!o.isVoted&&t.value?(l(),c("div",O,[a("button",{class:"button_g bg-emerald-500",onClick:b},"Confirm"),a("button",{class:"bg-red-500 button_g",onClick:s[0]||(s[0]=e=>t.value=null)},"Cancel")])):B("",!0)])]))),128))])]))}};export{H as default};
