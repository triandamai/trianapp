import{h as q,t as g,v as S,l as b,m as C}from"./entry.40dc4b8e.js";import{u as $}from"./asyncData.f3722d0f.js";import{h as k}from"./json.6079773e.js";import{q as m}from"./query.8960fcff.js";import"./utils.a3cb95a2.js";const x=q({props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:n,where:i,sort:l,limit:o,skip:s,locale:f,find:d}=g(a),p=S(()=>t.value.includes("/_")),{data:h,refresh:v}=await $(`content-query-${k(a)}`,()=>{let e;return t.value?e=m(t.value):e=m(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),i.value&&(e=e.where(i.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),s.value&&(e=e.skip(s.value)),f.value&&(e=e.where({_locale:f.value})),d.value==="one"?e.findOne():d.value==="surround"?t.value?e.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()},"$4SxX7Zuw4E");return{isPartial:p,data:h,refresh:v}},render(a){var y;const t=b(),{data:r,refresh:n,isPartial:i,path:l,only:o,without:s,where:f,sort:d,limit:p,skip:h,locale:v,find:e}=a,u={path:l,only:o,without:s,where:f,sort:d,limit:p,skip:h,locale:v,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(r._type&&r._type==="markdown"&&!((y=r==null?void 0:r.body)!=null&&y.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:i,props:u,...this.$attrs}):((c,w)=>C("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:c,data:w},null,2)))("default",{data:r,props:u,isPartial:i})}});export{x as default};
