"use strict";(self.webpackChunknew_infra_labs_docs=self.webpackChunknew_infra_labs_docs||[]).push([[307],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||k[m]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1819:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},i="Infra Labs IaaS \u67b6\u69cb",p={unversionedId:"architecture/iaas",id:"architecture/iaas",title:"Infra Labs IaaS \u67b6\u69cb",description:"TODO:",source:"@site/docs/architecture/iaas.md",sourceDirName:"architecture",slug:"/architecture/iaas",permalink:"/docs/architecture/iaas",draft:!1,editUrl:"https://github.com/cloud-native-taiwan/Infra-Labs-Docs/tree/main/docs/architecture/iaas.md",tags:[],version:"current",frontMatter:{},sidebar:"architecture",previous:{title:"Infra Labs \u7db2\u8def\u67b6\u69cb",permalink:"/docs/architecture/network"}},o={},s=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u786c\u9ad4",id:"\u786c\u9ad4",level:2},{value:"\u8edf\u9ad4",id:"\u8edf\u9ad4",level:2},{value:"Ansible",id:"ansible",level:3},{value:"OpenStack",id:"openstack",level:3},{value:"Ceph",id:"ceph",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"infra-labs-iaas-\u67b6\u69cb"},"Infra Labs IaaS \u67b6\u69cb"),(0,n.kt)("p",null,"TODO:"),(0,n.kt)("ul",{className:"contains-task-list"},(0,n.kt)("li",{parentName:"ul",className:"task-list-item"},(0,n.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","\u52a0\u4e0a\u4e00\u4e9b\u6bd4\u8f03\u7279\u6b8a\u8a2d\u5b9a\u7684\u4ecb\u7d39")),(0,n.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,n.kt)("p",null,"\u76ee\u524d Infra Labs \u900f\u904e OpenStack \u548c Ceph \u4f86\u63d0\u4f9b Infrastructure as a Service (IaaS) \u670d\u52d9\u3002\u672c\u7bc7\u6703\u4ecb\u7d39\u4f7f\u7528\u7684 OpenStack \u5c08\u6848\u4ee5\u53ca Ceph \u7684\u67b6\u69cb\u3002"),(0,n.kt)("p",null,"\u8a2d\u5b9a\u6a94\u4ee5\u53ca\u4e00\u4e9b Ansible Script \u5c07\u516c\u958b\u65bc ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cloud-native-taiwan/Infra-Labs-Config"},"Infra-Labs-Config repository"),"\u3002"),(0,n.kt)("h2",{id:"\u786c\u9ad4"},"\u786c\u9ad4"),(0,n.kt)("p",null,"Infra Labs \u4f7f\u7528\u4e86 3 \u53f0\u4f3a\u670d\u5668\u7528\u65bc\u63d0\u4f9b IaaS \u670d\u52d9\uff0c\u898f\u683c\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"CPU: 2","*","Intel Xeon Gold 6230R"),(0,n.kt)("li",{parentName:"ul"},"RAM: 12","*","32GB DDR4 2933Mhz ECC RDIMM"),(0,n.kt)("li",{parentName:"ul"},"NIC: ",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"on board 4*1G"),(0,n.kt)("li",{parentName:"ul"},"Mellanox ConnectX-4 100G"))),(0,n.kt)("li",{parentName:"ul"},"Disk",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Boot Disk: 2","*","Intel 730 240GB or 2","*"," Sandisk CloudSpeed Eco Gen II 480GB"),(0,n.kt)("li",{parentName:"ul"},"Ceph SSD: Samsung NGSFF PM983 3.84TB"),(0,n.kt)("li",{parentName:"ul"},"Ceph HDD: Toshiba MQ04AB 5400rpm 4TB")))),(0,n.kt)("p",null,"\u6b64\u4e09\u53f0\u4e3b\u6a5f\u4e0a\u904b\u884c\u4e86\u6240\u6709 OpenStack \u548c Ceph \u670d\u52d9\u3002"),(0,n.kt)("h2",{id:"\u8edf\u9ad4"},"\u8edf\u9ad4"),(0,n.kt)("h3",{id:"ansible"},"Ansible"),(0,n.kt)("p",null,"Ansible \u88ab\u7528\u4f86\u505a\u4e00\u4e9b OS \u5b89\u88dd\u5f8c\u7684\u8a2d\u5b9a\uff0c\u5982\u5b89\u88dd\u4e00\u4e9b\u5fc5\u8981\u8edf\u9ad4\u3001\u7db2\u5361\u7684\u8a2d\u5b9a\u7b49\u7b49\u3002"),(0,n.kt)("h3",{id:"openstack"},"OpenStack"),(0,n.kt)("p",null,"Infra Labs \u6240\u4f7f\u7528\u7684 OpenStack \u670d\u52d9\u6709\uff1a"),(0,n.kt)("p",null,"\u7528\u65bc\u90e8\u5c6c\u4e3b\u6a5f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/bifrost/latest/"},"Bifrost")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/kolla/latest/"},"Kolla")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/kolla-ansible/latest/"},"Kolla-Ansible")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/diskimage-builder/latest/"},"Diskimage-builder"))),(0,n.kt)("p",null,"\u7528\u65bc\u63d0\u4f9b\u670d\u52d9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/nova/latest/"},"Nova")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/neutron/latest/"},"Neutron")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/keystone/latest/"},"Keystone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/glance/latest/"},"Glance")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/heat/latest/"},"Heat")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/cinder/latest/"},"Cinder")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/swift/latest/"},"Swift")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/designate/latest/"},"Designate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/octavia/latest/"},"Octavia")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/placement/latest/"},"Placement")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.openstack.org/horizon/latest/"},"Horizon"))),(0,n.kt)("p",null,"\u5176\u4ed6 OpenStack \u6240\u9700\u5143\u4ef6\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://mariadb.org/"},"MariaDB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.rabbitmq.com/"},"RabbitMQ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/acassen/keepalived"},"Keepalived")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://www.haproxy.org/"},"HAProxy"))),(0,n.kt)("p",null,"\u8a73\u7d30\u8a2d\u5b9a\u6a94\u5728\u7686\u6703\u516c\u958b\u81f3\u6b64 Repo\u3002"),(0,n.kt)("h3",{id:"ceph"},"Ceph"),(0,n.kt)("p",null,"Ceph \u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ceph.com/en/latest/cephadm/index.html"},"Cephadm")," \u90e8\u5c6c\uff0c\u5f8c\u7aef\u7db2\u8def\u4f7f\u7528 100G \u7db2\u5361\u3002"),(0,n.kt)("p",null,"\u63d0\u4f9b\u7684\u670d\u52d9\u6709\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RBD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7d66 Nova, Cinder, Glance \u4f5c\u70ba\u5132\u5b58\u5f8c\u7aef\u3002"))),(0,n.kt)("li",{parentName:"ul"},"RGW",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u7d66 Swift \u4f5c\u70ba\u5132\u5b58\u5f8c\u7aef\uff0c\u4e26\u4e14\u900f\u904e Keystone \u8a8d\u8b49\u63d0\u4f9b S3 Compatible API\u3002 ")))),(0,n.kt)("p",null,"\u76ee\u524d Crush Rule \u5206\u70ba\u5169\u7a2e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"replicated_nvme",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 NVMe SSD \u4f5c\u70ba\u5132\u5b58\u5a92\u4ecb"))),(0,n.kt)("li",{parentName:"ul"},"replicated_sata_ssd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 SATA SSD \u4f5c\u70ba\u5132\u5b58\u5a92\u4ecb")))))}u.isMDXComponent=!0}}]);