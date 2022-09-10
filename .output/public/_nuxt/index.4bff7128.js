import{h as u,o,a as i,b as t,e as m,I as p,O as y,L as n,u as f,F as h,i as g,K as k,M as v,c as x}from"./entry.3171d619.js";import{u as B}from"./datetimeutils.5104e842.js";import{_ as w}from"./SectionContent.vue_vue_type_script_setup_true_lang.1fa65146.js";import{q as S}from"./query.925ee722.js";import"./_plugin-vue_export-helper.a1a6add7.js";import"./json.d3f53d30.js";import"./utils.a28adc5d.js";const A={"aria-labelledby":"episode-5-title",class:"py-10 sm:py-12"},C={class:"lg:px-8"},V={class:"lg:max-w-4xl"},D={class:"mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"},I={class:"flex flex-col items-start"},M={id:"episode-5-title",class:"mt-2 text-lg font-bold text-slate-900"},N={datetime:"2022-02-24T00:00:00.000Z",class:"order-first font-mono text-sm leading-7 text-slate-500"},T={class:"mt-1 text-base leading-7 text-slate-700"},q={class:"mt-4 flex items-center gap-4"},F=t("svg",{"aria-hidden":"true",viewBox:"0 0 10 10",fill:"none",class:"h-2.5 w-2.5 fill-current"},[t("path",{d:"M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"})],-1),L=t("span",{class:"ml-3","aria-hidden":"true"},"Read More",-1),R=t("span",{"aria-hidden":"true",class:"text-sm font-bold text-slate-400"},"/ ",-1),Z=u({__name:"ItemBlog",props:{title:{type:String,default:"default title"},description:{type:String,default:"default description"},tags:{type:Array,default:[]},date:{type:String,default:"2022-09-07"},path:{type:String}},setup(e){const{formatDate:a}=B();return(l,c)=>{const d=k;return o(),i("article",A,[t("div",C,[t("div",V,[t("div",D,[t("div",I,[t("h2",M,[m(d,{to:e.path},{default:p(()=>[y(n(e.title),1)]),_:1},8,["to"])]),t("time",N,n(f(a)(e.date)),1),t("p",T,n(e.description)+".",1),t("div",q,[m(d,{to:e.path,class:"flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900","aria-label":"Read more about"+e.title},{default:p(()=>[F,L]),_:1},8,["to","aria-label"]),R,(o(!0),i(h,null,g(e.tags,(_,r)=>(o(),i("a",{key:r,class:"flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900","aria-label":"Tags"},"#"+n(_),1))),128))])])])])])])}}}),J=u({__name:"index",async setup(e){let a,l;const c=([a,l]=v(()=>S("blogs").find()),a=await a,l(),a);return console.log(c),(d,_)=>{const r=Z,b=w;return o(),x(b,{title:"Blogs"},{default:p(()=>[(o(!0),i(h,null,g(f(c),(s,$)=>(o(),x(r,{date:s.publishedAt,title:s.title,key:s.slug,description:s.description,tags:s.tags,path:"/blogs/"+s.slug},null,8,["date","title","description","tags","path"]))),128))]),_:1})}}});export{J as default};