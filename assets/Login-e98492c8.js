import{u as i,o as l,e as d,f as c,k as g,G as a,s as h,d as u,a as m}from"./index-ba48f210.js";const p={class:"container flex items-center justify-center min-h-[80vh] mx-auto"},f=c("img",{width:"48",height:"48",src:"https://img.icons8.com/color/48/google-logo.png",alt:"google-logo"},null,-1),x={__name:"Login",setup(_){const n=i(),r=()=>{const s=new a;s.addScope("https://www.googleapis.com/auth/contacts.readonly"),h(m,s).then(e=>{a.credentialFromResult(e).accessToken;const o=e.user;o&&u.post("/auth/user",{uid:o.uid,email:o.email,name:o.displayName,photo:o.photoURL}).then(t=>{t.data.success?(localStorage.setItem("voteuser",JSON.stringify(t.data.user)),n.push({name:"home"})):n.push({name:"register"})}).catch(t=>{console.log(t)})}).catch(e=>{e.code,e.message,e.customData.email,a.credentialFromError(e)})};return(s,e)=>(l(),d("div",p,[c("div",{class:"flex flex-col space-y-2"},[c("button",{onClick:r,class:"flex items-center gap-3 p-3 font-bold bg-gray-100 border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 hover:border-gray-300"},[f,g(" Login With Google ")])])]))}};export{x as default};
