(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{97225:function(e,n,t){"use strict";var r=t(75582),o=t(12691),i=t.n(o),c=t(82684),l=t(83455),u=t(34376),a=t(60328),s=t(47999),d=t(67971),p=t(10919),f=t(93348),h=t(62609),g=t(86673),b=t(87815),m=t(19711),v=t(82531),j=t(10503),x=t(49125),y=t(45838),w=t(96510),Z=t(66653),O=t(28598);n.Z=function(e){var n=e.fetchPipelineSchedules,t=e.highlightRowOnHover,o=e.includeCreatedAtColumn,k=e.includePipelineColumn,P=e.pipeline,_=e.pipelineSchedules,C=e.selectedSchedule,E=e.setSelectedSchedule,I=e.stickyHeader,T=null===P||void 0===P?void 0:P.uuid,A=(0,u.useRouter)(),S=(0,c.useRef)({}),B=(0,c.useState)(null),D=B[0],N=B[1],H=(0,c.useState)(0),R=H[0],V=H[1],L=(0,c.useState)(0),M=L[0],z=L[1],q=(0,l.Db)((function(e){return v.ZP.pipeline_schedules.useUpdate(e.id)({pipeline_schedule:e})}),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(){n()},onErrorCallback:function(e){var n=e.error,t=n.errors,r=n.message;console.log(t,r)}})}}),F=(0,r.Z)(q,1)[0],U=(0,l.Db)((function(e){return v.ZP.pipeline_schedules.useDelete(e)()}),{onSuccess:function(e){return(0,w.wD)(e,{callback:function(){n(),T?A.push("/pipelines/[pipeline]/triggers","/pipelines/".concat(T,"/triggers")):n()}})}}),W=(0,r.Z)(U,1)[0],Y=[{label:function(){return""},uuid:"action"},{uuid:"Status"},{uuid:"Type"},{uuid:"Name"},{uuid:"Frequency"},{uuid:"Runs"},{uuid:"Latest run status"},{uuid:"Logs"},{label:function(){return""},uuid:"edit/delete"}],Q=[null,1,1,3,1,null,null,null,null];return k&&(Y.splice(2,0,{uuid:"Pipeline"}),Q.splice(2,0,2)),o&&(Y.splice(3,0,{uuid:"Created at"}),Q.splice(3,0,null)),(0,O.jsx)(y.cl,{overflowVisible:!0,children:0===_.length?(0,O.jsx)(g.Z,{px:3,py:1,children:(0,O.jsx)(m.ZP,{bold:!0,default:!0,monospace:!0,muted:!0,children:"No triggers available"})}):(0,O.jsx)(b.Z,{columnFlex:Q,columns:Y,highlightRowOnHover:t,isSelectedRow:function(e){return _[e].id===(null===C||void 0===C?void 0:C.id)},onClickRow:E?function(e){return null===E||void 0===E?void 0:E(_[e])}:null,rowVerticalPadding:6,rows:_.map((function(e,n){var t,r=e.id,l=e.created_at,u=e.pipeline_runs_count,b=e.pipeline_uuid,v=e.last_pipeline_run_status,y=e.name,w=e.schedule_interval,P=e.status,_=T||b;S.current[r]=(0,c.createRef)();var C=[(0,O.jsx)(a.Z,{iconOnly:!0,noBackground:!0,noBorder:!0,noPadding:!0,onClick:function(n){(0,Z.j)(n),F({id:e.id,status:f.fq.ACTIVE===P?f.fq.INACTIVE:f.fq.ACTIVE})},children:f.fq.ACTIVE===P?(0,O.jsx)(j.dz,{muted:!0,size:2*x.iI}):(0,O.jsx)(j.Py,{default:!0,size:2*x.iI})},"toggle_trigger_".concat(n)),(0,O.jsx)(m.ZP,{default:f.fq.INACTIVE===P,monospace:!0,success:f.fq.ACTIVE===P,children:P},"trigger_status_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:null===(t=f.Z4[e.schedule_type])||void 0===t?void 0:t.call(f.Z4)},"trigger_type_".concat(n)),(0,O.jsx)(i(),{as:"/pipelines/".concat(_,"/triggers/").concat(r),href:"/pipelines/[pipeline]/triggers/[...slug]",passHref:!0,children:(0,O.jsx)(p.Z,{bold:!0,onClick:function(e){(0,Z.j)(e),A.push("/pipelines/[pipeline]/triggers/[...slug]","/pipelines/".concat(_,"/triggers/").concat(r))},sameColorAsText:!0,children:y})},"trigger_name_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:w},"trigger_frequency_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:u},"trigger_run_count_".concat(n)),(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:v||"N/A"},"latest_run_status_".concat(n)),(0,O.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return A.push("/pipelines/".concat(_,"/logs?pipeline_schedule_id[]=").concat(r))},children:(0,O.jsx)(j.B4,{default:!0,size:2*x.iI})},"logs_button_".concat(n)),(0,O.jsxs)(d.Z,{children:[(0,O.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){return A.push("/pipelines/".concat(_,"/triggers/").concat(r,"/edit"))},title:"Edit",children:(0,O.jsx)(j.I8,{default:!0,size:2*x.iI})}),(0,O.jsx)(g.Z,{mr:1}),(0,O.jsx)(a.Z,{default:!0,iconOnly:!0,noBackground:!0,onClick:function(){var e,n,t,o;N(r),V((null===(e=S.current[r])||void 0===e||null===(n=e.current)||void 0===n?void 0:n.offsetTop)||0),z((null===(t=S.current[r])||void 0===t||null===(o=t.current)||void 0===o?void 0:o.offsetLeft)||0)},ref:S.current[r],title:"Delete",children:(0,O.jsx)(j.rF,{default:!0,size:2*x.iI})}),(0,O.jsx)(s.Z,{onClickOutside:function(){return N(null)},open:D===r,children:(0,O.jsx)(h.Z,{danger:!0,left:(M||0)-286,onCancel:function(){return N(null)},onClick:function(){N(null),W(r)},title:"Are you sure you want to delete the trigger ".concat(y,"?"),top:(R||0)-(n<=1?40:96),width:40*x.iI})})]},"edit_delete_buttons_".concat(n))];return k&&C.splice(2,0,(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:_},"pipeline_name_".concat(n))),o&&C.splice(3,0,(0,O.jsx)(m.ZP,{default:!0,monospace:!0,children:l},"created_at_".concat(n))),C})),stickyHeader:I,uuid:"pipeline-triggers"})})}},51099:function(e,n,t){"use strict";t.d(n,{Q:function(){return s}});t(82684);var r=t(60328),o=t(67971),i=t(86673),c=t(10503),l=t(73899),u=t(49125),a=t(28598),s=22;n.Z=function(e){var n=e.page,t=e.maxPages,s=e.onUpdate,d=e.totalPages,p=[],f=t;if(f>d)p=Array.from({length:d},(function(e,n){return n}));else{var h=Math.floor(f/2),g=n-h;n+h>=d?(g=d-f+2,f-=2):n-h<=0?(g=0,f-=2):(f-=4,g=n-Math.floor(f/2)),p=Array.from({length:f},(function(e,n){return n+g}))}return(0,a.jsx)(a.Fragment,{children:d>0&&(0,a.jsxs)(o.Z,{alignItems:"center",children:[(0,a.jsx)(r.Z,{disabled:0===n,onClick:function(){return s(n-1)},children:(0,a.jsx)(c.Hd,{size:1.5*u.iI,stroke:"#AEAEAE"})}),!p.includes(0)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){return s(0)},borderLess:!0,noBackground:!0,children:1})},0),!p.includes(1)&&(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0)]}),p.map((function(e){return(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){e!==n&&s(e)},notClickable:e===n,backgroundColor:e===n&&l.a$,borderLess:!0,noBackground:!0,children:e+1})},e)})),!p.includes(d-1)&&(0,a.jsxs)(a.Fragment,{children:[!p.includes(d-2)&&(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(r.Z,{notClickable:!0,noBackground:!0,noPadding:!0,children:"..."})},0),(0,a.jsx)(i.Z,{ml:1,children:(0,a.jsx)(r.Z,{onClick:function(){return s(d-1)},borderLess:!0,noBackground:!0,children:d})},d-1)]}),(0,a.jsx)(i.Z,{ml:1}),(0,a.jsx)(r.Z,{disabled:n===d-1,onClick:function(){return s(n+1)},children:(0,a.jsx)(c.Kw,{size:1.5*u.iI,stroke:"#AEAEAE"})})]})})}},45838:function(e,n,t){"use strict";t.d(n,{GZ:function(){return d},Vq:function(){return a},cE:function(){return p},cl:function(){return l},kA:function(){return u}});var r=t(9518),o=t(23831),i=t(37391),c=t(49125),l=r.default.div.withConfig({displayName:"indexstyle__TableContainerStyle",componentId:"sc-1wzfyed-0"})(["position:relative;overflow:auto;"," "," ",""],i.w5,(function(e){return e.minHeight&&"\n    min-height: ".concat(e.minHeight,"px;\n  ")}),(function(e){return e.overflowVisible&&"\n    overflow: visible;\n  "})),u=r.default.table.withConfig({displayName:"indexstyle__TableStyle",componentId:"sc-1wzfyed-1"})(["contain:size;width:100%;",""],(function(e){return(e.columnBorders||e.borderCollapseSeparate)&&"\n    border-collapse: separate;\n  "})),a=r.default.tr.withConfig({displayName:"indexstyle__TableRowStyle",componentId:"sc-1wzfyed-2"})([""," ",""],(function(e){return e.highlightOnHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||o.Z.interactive).rowHoverBackground,";\n    }\n  ")}),(function(e){return!e.noHover&&"\n    &:hover {\n      background: ".concat((e.theme.interactive||o.Z.interactive).rowHoverBackground,";\n      cursor: pointer;\n    }\n  ")})),s=(0,r.css)(["text-overflow:ellipsis;white-space:nowrap;"," "," "," "," "," ",""],(function(e){return!e.alignTop&&"\n    vertical-align: middle;\n  "}),(function(e){return e.alignTop&&"\n    vertical-align: top;\n  "}),(function(e){return!e.noBorder&&"\n    border-bottom: 1px solid ".concat((e.theme.borders||o.Z.borders).light,";\n  ")}),(function(e){return e.compact&&"\n    padding: ".concat(c.iI/2,"px ").concat(c.iI,"px;\n  ")}),(function(e){return!e.compact&&"\n    padding: ".concat(c.iI,"px ").concat(2*c.iI,"px;\n  ")}),(function(e){return e.maxWidth&&"\n    max-width: ".concat(e.maxWidth,";\n  ")})),d=r.default.th.withConfig({displayName:"indexstyle__TableHeadStyle",componentId:"sc-1wzfyed-3"})([""," "," "," ",""],s,(function(e){return e.columnBorders&&"\n    border: 1px solid ".concat((e.theme.borders||o.Z.borders).light,";\n    border-right: none;\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||o.Z.borders).light,";\n  ")}),(function(e){return e.sticky&&"\n    background-color: ".concat((e.theme||o.Z).background.panel,";\n    border-bottom: 1px solid ").concat((e.theme.borders||o.Z.borders).medium,";\n    z-index: 2;\n    position: sticky;\n    top: 0;\n\n    &:first-child {\n      left: 0;\n      z-index: 2;\n    }\n  ")})),p=r.default.td.withConfig({displayName:"indexstyle__TableDataStyle",componentId:"sc-1wzfyed-4"})([""," "," "," "," "," "," ",""],s,(function(e){return e.rowVerticalPadding&&"\n    padding-top: ".concat(e.rowVerticalPadding,"px;\n    padding-bottom: ").concat(e.rowVerticalPadding,"px;\n  ")}),(function(e){return e.columnBorders&&"\n    border-left: 1px solid ".concat((e.theme.borders||o.Z.borders).light,";\n  ")}),(function(e){return e.columnBorders&&e.last&&"\n    border-right: 1px solid ".concat((e.theme.borders||o.Z.borders).light,";\n  ")}),(function(e){return e.stickyFirstColumn&&"\n    background-color: ".concat((e.theme||o.Z).background.panel,";\n    z-index: 1;\n    position: sticky;\n    left: 0;\n  ")}),(function(e){return e.selected&&"\n    background-color: ".concat((e.theme.interactive||o.Z.interactive).activeBorder,";\n  ")}),(function(e){return e.wrapColumns&&"\n    white-space: break-spaces;\n  "}))},87815:function(e,n,t){"use strict";var r=t(82394),o=t(12691),i=t.n(o),c=t(82684),l=t(67971),u=t(10919),a=t(86673),s=t(19711),d=t(46261),p=t(45838),f=t(28598);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.alignTop,t=e.borderCollapseSeparate,r=e.buildLinkProps,o=e.columnBorders,h=e.columnFlex,b=e.columnMaxWidth,m=e.columns,v=void 0===m?[]:m,j=e.compact,x=e.highlightRowOnHover,y=e.isSelectedRow,w=e.noBorder,Z=e.noHeader,O=e.onClickRow,k=e.rows,P=e.rowVerticalPadding,_=e.stickyFirstColumn,C=e.stickyHeader,E=e.uuid,I=e.wrapColumns,T=(0,c.useMemo)((function(){return h.reduce((function(e,n){return e+(n||0)}),0)}),h),A=(0,c.useCallback)((function(e){if(h[e]){var n=Math.round(h[e]/T*100);return"".concat(n,"%")}return null}),[]),S=(0,c.useMemo)((function(){return null===k||void 0===k?void 0:k.map((function(e,t){var l=null===r||void 0===r?void 0:r(t),a=e.map((function(r,i){return(0,f.jsx)(p.cE,{alignTop:n,columnBorders:o,compact:j,last:i===e.length-1,maxWidth:null===b||void 0===b?void 0:b(i),noBorder:w,rowVerticalPadding:P,selected:null===y||void 0===y?void 0:y(t),stickyFirstColumn:_&&0===i,width:A(i),wrapColumns:I,children:r},"".concat(E,"-row-").concat(t,"-cell-").concat(i))})),s=(0,f.jsx)(p.Vq,{highlightOnHover:x,noHover:!(l||O),onClick:O?function(){return O(t)}:null,children:a},"".concat(E,"-row-").concat(t));return l?(0,c.createElement)(i(),g(g({},l),{},{key:"".concat(E,"-row-link-").concat(t),passHref:!0}),(0,f.jsx)(u.Z,{fullWidth:!0,noHoverUnderline:!0,noOutline:!0,style:{display:"table-row-group"},verticalAlignContent:!0,children:s})):s}))}),[n,r,A,b,v,j,y,w,O,k]);return(0,f.jsxs)(p.kA,{borderCollapseSeparate:t,columnBorders:o,children:[(null===v||void 0===v?void 0:v.length)>=1&&!Z&&(0,f.jsx)(p.Vq,{noHover:!0,children:v.map((function(e,n){return(0,f.jsx)(p.GZ,{columnBorders:o,compact:j,last:n===v.length-1,noBorder:w,sticky:C,children:(0,f.jsxs)(l.Z,{alignItems:"center",children:[(0,f.jsx)(s.ZP,{bold:!0,leftAligned:!0,monospace:!0,muted:!0,children:e.label?e.label():e.uuid}),e.tooltipMessage&&(0,f.jsx)(a.Z,{ml:"4px",children:(0,f.jsx)(d.Z,{appearBefore:!0,label:(0,f.jsx)(s.ZP,{leftAligned:!0,children:e.tooltipMessage}),lightBackground:!0,primary:!0})})]})},"".concat(E,"-col-").concat(e.uuid,"-").concat(n))}))}),S]})}},93348:function(e,n,t){"use strict";t.d(n,{TR:function(){return d},U5:function(){return u},Xm:function(){return i},Z4:function(){return s},fq:function(){return l},kJ:function(){return a}});var r,o,i,c=t(82394);!function(e){e.API="api",e.EVENT="event",e.TIME="time"}(i||(i={}));var l,u,a,s=(r={},(0,c.Z)(r,i.API,(function(){return"API"})),(0,c.Z)(r,i.EVENT,(function(){return"event"})),(0,c.Z)(r,i.TIME,(function(){return"schedule"})),r);!function(e){e.ACTIVE="active",e.INACTIVE="inactive"}(l||(l={})),function(e){e.ONCE="@once",e.HOURLY="@hourly",e.DAILY="@daily",e.WEEKLY="@weekly",e.MONTHLY="@monthly"}(u||(u={})),function(e){e.CREATED_AT="created_at",e.NAME="name",e.PIPELINE="pipeline_uuid",e.STATUS="status",e.TYPE="schedule_type"}(a||(a={}));var d=(o={},(0,c.Z)(o,a.CREATED_AT,"Created at"),(0,c.Z)(o,a.NAME,"Name"),(0,c.Z)(o,a.PIPELINE,"Pipeline"),(0,c.Z)(o,a.STATUS,"Status"),(0,c.Z)(o,a.TYPE,"Type"),o)},55378:function(e,n,t){"use strict";var r=t(82394),o=t(26304),i=t(82684),c=t(9518),l=t(69898),u=t(31969),a=t(49125),s=t(28598),d=["beforeIcon","children","label","placeholder"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var h=c.default.select.withConfig({displayName:"Select__SelectStyle",componentId:"sc-q6ezu2-0"})(["",' background-image:url("data:image/svg+xml;utf8,','");background-repeat:no-repeat;background-position:-webkit-calc(100% - ',"px) center;background-position:calc(100% - ","px) center;padding-right:","px;&:hover{cursor:pointer;}"," "," "," ",""],l.p,"\n  <svg width='12' height='12' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>\n    <path\n      clip-rule='evenodd'\n      d='M8.0015 11.7109L14.0022 5.71017L12.588 4.29597L7.99485 8.88914L3.40754 4.34482L2 5.76567L8.0015 11.7109Z'\n      fill='%23B4B8C0'\n      fill-rule='evenodd'\n    />\n  </svg>",a.iI,a.iI,2.5*a.iI,(function(e){return!e.hasContent&&!e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).muted,";\n  ")}),(function(e){return e.backgroundColor&&"\n    background-color: ".concat(e.backgroundColor,";\n  ")}),(function(e){return e.color&&"\n    color: ".concat(e.color,";\n  ")}),(function(e){return e.showPlaceholder&&"\n    color: ".concat((e.theme.content||u.Z.content).inverted,";\n  ")})),g=function(e,n){var t=e.beforeIcon,r=e.children,i=e.label,c=e.placeholder,u=(0,o.Z)(e,d);return(0,s.jsx)(l.Z,f(f({},u),{},{beforeIcon:t,input:(0,s.jsxs)(h,f(f({},u),{},{children:[(i||c)&&(0,s.jsx)("option",{disabled:!0,selected:!0,value:"",children:i||c}),r]})),label:i,placeholder:c,ref:n,setContentOnMount:!0,showLabelRequirement:function(e){return!!e.content}}))};n.Z=i.forwardRef(g)},46756:function(e,n,t){"use strict";t.r(n);var r=t(77837),o=t(82394),i=t(75582),c=t(38860),l=t.n(c),u=t(82684),a=t(34376),s=t(70434),d=t(67971),p=t(51099),f=t(41788),h=t(55378),g=t(86673),b=t(19711),m=t(97225),v=t(82531),j=t(93348),x=t(49125),y=t(33766),w=t(59e3),Z=t(28598);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function P(){var e=(0,a.useRouter)(),n=(0,w.iV)(),t=null!==n&&void 0!==n&&n.page?n.page:0,r=(null===n||void 0===n?void 0:n.order_by)||j.kJ.CREATED_AT,o={_limit:p.Q,_offset:t*p.Q,order_by:r},c=v.ZP.pipeline_schedules.list(o,{refreshInterval:7500,revalidateOnFocus:!0}),l=c.data,f=c.mutate,O=(0,u.useMemo)((function(){return(null===l||void 0===l?void 0:l.pipeline_schedules)||[]}),[l]),P=(0,u.useMemo)((function(){var e;return(null===l||void 0===l||null===(e=l.metadata)||void 0===e?void 0:e.count)||[]}),[l]);return(0,Z.jsxs)(s.Z,{title:"Triggers",uuid:"triggers/index",children:[(0,Z.jsx)(g.Z,{mx:2,my:1,children:(0,Z.jsxs)(d.Z,{alignItems:"center",children:[(0,Z.jsx)(b.ZP,{bold:!0,default:!0,large:!0,children:"Sort runs by:"}),(0,Z.jsx)(g.Z,{mr:1}),(0,Z.jsx)(h.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(e){e.preventDefault(),(0,y.u)({order_by:e.target.value,page:0})},paddingRight:4*x.iI,placeholder:"Select column",value:r||j.kJ.CREATED_AT,children:Object.entries(j.TR).map((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];return(0,Z.jsx)("option",{value:t,children:r},t)}))})]})}),(0,Z.jsx)(m.Z,{fetchPipelineSchedules:f,highlightRowOnHover:!0,includeCreatedAtColumn:!0,includePipelineColumn:!0,pipelineSchedules:O,stickyHeader:!0}),(0,Z.jsx)(g.Z,{p:2,children:(0,Z.jsx)(p.Z,{maxPages:9,onUpdate:function(t){var r=Number(t),o=k(k({},n),{},{page:r>=0?r:0});e.push("/triggers","/triggers?".concat((0,w.uM)(o)))},page:Number(t),totalPages:Math.ceil(P/p.Q)})})]})}P.getInitialProps=(0,r.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),n.default=(0,f.Z)(P)},33766:function(e,n,t){"use strict";t.d(n,{u:function(){return s}});var r=t(75582),o=t(82394),i=t(34376),c=t.n(i),l=t(59e3);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,o.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.replaceParams,i=t.pushHistory,u=o?{}:(0,l.iV)();n=window.location.pathname;var s=i?c().push:c().replace,d=a(a({},u),e);Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),t=n[0],o=n[1];"undefined"!==typeof o&&null!==o||delete d[t]}));var p=(0,l.uM)(d);p.length>=1&&(p="?".concat(p));var f="".concat(n.split("?")[0]).concat(p);return s(c().router.pathname,f,{shallow:!0})}},59733:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/triggers",function(){return t(46756)}])}},function(e){e.O(0,[3850,9767,6579,434,9898,9774,2888,179],(function(){return n=59733,e(e.s=n);var n}));var n=e.O();_N_E=n}]);