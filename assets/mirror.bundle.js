(()=>{var Q0=Object.create;var iu=Object.defineProperty;var j0=Object.getOwnPropertyDescriptor;var tm=Object.getOwnPropertyNames;var em=Object.getPrototypeOf,nm=Object.prototype.hasOwnProperty;var Bt=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};var im=(n,t,e,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of tm(t))!nm.call(n,r)&&r!==e&&iu(n,r,{get:()=>t[r],enumerable:!(i=j0(t,r))||i.enumerable});return n};var ru=(n,t,e)=>(e=n!=null?Q0(em(n)):{},im(t||!n||!n.__esModule?iu(e,"default",{value:n,enumerable:!0}):e,n));var $f=Bt((hA,Jf)=>{"use strict";"use restrict";Jf.exports=Zf;function Zf(n){this.roots=new Array(n),this.ranks=new Array(n);for(var t=0;t<n;++t)this.roots[t]=t,this.ranks[t]=0}var hl=Zf.prototype;Object.defineProperty(hl,"length",{get:function(){return this.roots.length}});hl.makeSet=function(){var n=this.roots.length;return this.roots.push(n),this.ranks.push(0),n};hl.find=function(n){for(var t=n,e=this.roots;e[n]!==n;)n=e[n];for(;e[t]!==n;){var i=e[t];e[t]=n,t=i}return n};hl.link=function(n,t){var e=this.find(n),i=this.find(t);if(e!==i){var r=this.ranks,s=this.roots,a=r[e],o=r[i];a<o?s[e]=i:o<a?s[i]=e:(s[i]=e,++r[e])}}});var Js=Bt(we=>{"use strict";"use restrict";var sh=32;we.INT_BITS=sh;we.INT_MAX=2147483647;we.INT_MIN=-1<<sh-1;we.sign=function(n){return(n>0)-(n<0)};we.abs=function(n){var t=n>>sh-1;return(n^t)-t};we.min=function(n,t){return t^(n^t)&-(n<t)};we.max=function(n,t){return n^(n^t)&-(n<t)};we.isPow2=function(n){return!(n&n-1)&&!!n};we.log2=function(n){var t,e;return t=(n>65535)<<4,n>>>=t,e=(n>255)<<3,n>>>=e,t|=e,e=(n>15)<<2,n>>>=e,t|=e,e=(n>3)<<1,n>>>=e,t|=e,t|n>>1};we.log10=function(n){return n>=1e9?9:n>=1e8?8:n>=1e7?7:n>=1e6?6:n>=1e5?5:n>=1e4?4:n>=1e3?3:n>=100?2:n>=10?1:0};we.popCount=function(n){return n=n-(n>>>1&1431655765),n=(n&858993459)+(n>>>2&858993459),(n+(n>>>4)&252645135)*16843009>>>24};function Kf(n){var t=32;return n&=-n,n&&t--,n&65535&&(t-=16),n&16711935&&(t-=8),n&252645135&&(t-=4),n&858993459&&(t-=2),n&1431655765&&(t-=1),t}we.countTrailingZeros=Kf;we.nextPow2=function(n){return n+=n===0,--n,n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n+1};we.prevPow2=function(n){return n|=n>>>1,n|=n>>>2,n|=n>>>4,n|=n>>>8,n|=n>>>16,n-(n>>>1)};we.parity=function(n){return n^=n>>>16,n^=n>>>8,n^=n>>>4,n&=15,27030>>>n&1};var Zs=new Array(256);(function(n){for(var t=0;t<256;++t){var e=t,i=t,r=7;for(e>>>=1;e;e>>>=1)i<<=1,i|=e&1,--r;n[t]=i<<r&255}})(Zs);we.reverse=function(n){return Zs[n&255]<<24|Zs[n>>>8&255]<<16|Zs[n>>>16&255]<<8|Zs[n>>>24&255]};we.interleave2=function(n,t){return n&=65535,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t&=65535,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1};we.deinterleave2=function(n,t){return n=n>>>t&1431655765,n=(n|n>>>1)&858993459,n=(n|n>>>2)&252645135,n=(n|n>>>4)&16711935,n=(n|n>>>16)&65535,n<<16>>16};we.interleave3=function(n,t,e){return n&=1023,n=(n|n<<16)&4278190335,n=(n|n<<8)&251719695,n=(n|n<<4)&3272356035,n=(n|n<<2)&1227133513,t&=1023,t=(t|t<<16)&4278190335,t=(t|t<<8)&251719695,t=(t|t<<4)&3272356035,t=(t|t<<2)&1227133513,n|=t<<1,e&=1023,e=(e|e<<16)&4278190335,e=(e|e<<8)&251719695,e=(e|e<<4)&3272356035,e=(e|e<<2)&1227133513,n|e<<2};we.deinterleave3=function(n,t){return n=n>>>t&1227133513,n=(n|n>>>2)&3272356035,n=(n|n>>>4)&251719695,n=(n|n>>>8)&4278190335,n=(n|n>>>16)&1023,n<<22>>22};we.nextCombination=function(n){var t=n|n-1;return t+1|(~t&-~t)-1>>>Kf(n)+1}});var td=Bt((fA,jf)=>{"use strict";function Qf(n,t,e){var i=n[e]|0;if(i<=0)return[];var r=new Array(i),s;if(e===n.length-1)for(s=0;s<i;++s)r[s]=t;else for(s=0;s<i;++s)r[s]=Qf(n,t,e+1);return r}function Xy(n,t){var e,i;for(e=new Array(n),i=0;i<n;++i)e[i]=t;return e}function qy(n,t){switch(typeof t>"u"&&(t=0),typeof n){case"number":if(n>0)return Xy(n|0,t);break;case"object":if(typeof n.length=="number")return Qf(n,t,0);break}return[]}jf.exports=qy});var id=Bt(ul=>{"use strict";ul.byteLength=Zy;ul.toByteArray=$y;ul.fromByteArray=jy;var Hn=[],yn=[],Yy=typeof Uint8Array<"u"?Uint8Array:Array,ah="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Wi=0,ed=ah.length;Wi<ed;++Wi)Hn[Wi]=ah[Wi],yn[ah.charCodeAt(Wi)]=Wi;var Wi,ed;yn[45]=62;yn[95]=63;function nd(n){var t=n.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=n.indexOf("=");e===-1&&(e=t);var i=e===t?0:4-e%4;return[e,i]}function Zy(n){var t=nd(n),e=t[0],i=t[1];return(e+i)*3/4-i}function Jy(n,t,e){return(t+e)*3/4-e}function $y(n){var t,e=nd(n),i=e[0],r=e[1],s=new Yy(Jy(n,i,r)),a=0,o=r>0?i-4:i,l;for(l=0;l<o;l+=4)t=yn[n.charCodeAt(l)]<<18|yn[n.charCodeAt(l+1)]<<12|yn[n.charCodeAt(l+2)]<<6|yn[n.charCodeAt(l+3)],s[a++]=t>>16&255,s[a++]=t>>8&255,s[a++]=t&255;return r===2&&(t=yn[n.charCodeAt(l)]<<2|yn[n.charCodeAt(l+1)]>>4,s[a++]=t&255),r===1&&(t=yn[n.charCodeAt(l)]<<10|yn[n.charCodeAt(l+1)]<<4|yn[n.charCodeAt(l+2)]>>2,s[a++]=t>>8&255,s[a++]=t&255),s}function Ky(n){return Hn[n>>18&63]+Hn[n>>12&63]+Hn[n>>6&63]+Hn[n&63]}function Qy(n,t,e){for(var i,r=[],s=t;s<e;s+=3)i=(n[s]<<16&16711680)+(n[s+1]<<8&65280)+(n[s+2]&255),r.push(Ky(i));return r.join("")}function jy(n){for(var t,e=n.length,i=e%3,r=[],s=16383,a=0,o=e-i;a<o;a+=s)r.push(Qy(n,a,a+s>o?o:a+s));return i===1?(t=n[e-1],r.push(Hn[t>>2]+Hn[t<<4&63]+"==")):i===2&&(t=(n[e-2]<<8)+n[e-1],r.push(Hn[t>>10]+Hn[t>>4&63]+Hn[t<<2&63]+"=")),r.join("")}});var rd=Bt(oh=>{oh.read=function(n,t,e,i,r){var s,a,o=r*8-i-1,l=(1<<o)-1,c=l>>1,u=-7,f=e?r-1:0,d=e?-1:1,v=n[t+f];for(f+=d,s=v&(1<<-u)-1,v>>=-u,u+=o;u>0;s=s*256+n[t+f],f+=d,u-=8);for(a=s&(1<<-u)-1,s>>=-u,u+=i;u>0;a=a*256+n[t+f],f+=d,u-=8);if(s===0)s=1-c;else{if(s===l)return a?NaN:(v?-1:1)*(1/0);a=a+Math.pow(2,i),s=s-c}return(v?-1:1)*a*Math.pow(2,s-i)};oh.write=function(n,t,e,i,r,s){var a,o,l,c=s*8-r-1,u=(1<<c)-1,f=u>>1,d=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=i?0:s-1,x=i?1:-1,M=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(o=isNaN(t)?1:0,a=u):(a=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-a))<1&&(a--,l*=2),a+f>=1?t+=d/l:t+=d*Math.pow(2,1-f),t*l>=2&&(a++,l/=2),a+f>=u?(o=0,a=u):a+f>=1?(o=(t*l-1)*Math.pow(2,r),a=a+f):(o=t*Math.pow(2,f-1)*Math.pow(2,r),a=0));r>=8;n[e+v]=o&255,v+=x,o/=256,r-=8);for(a=a<<r|o,c+=r;c>0;n[e+v]=a&255,v+=x,a/=256,c-=8);n[e+v-x]|=M*128}});var Md=Bt(Jr=>{"use strict";var lh=id(),Yr=rd(),sd=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Jr.Buffer=it;Jr.SlowBuffer=sM;Jr.INSPECT_MAX_BYTES=50;var fl=2147483647;Jr.kMaxLength=fl;it.TYPED_ARRAY_SUPPORT=tM();!it.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function tM(){try{let n=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(n,t),n.foo()===42}catch{return!1}}Object.defineProperty(it.prototype,"parent",{enumerable:!0,get:function(){if(it.isBuffer(this))return this.buffer}});Object.defineProperty(it.prototype,"offset",{enumerable:!0,get:function(){if(it.isBuffer(this))return this.byteOffset}});function ti(n){if(n>fl)throw new RangeError('The value "'+n+'" is invalid for option "size"');let t=new Uint8Array(n);return Object.setPrototypeOf(t,it.prototype),t}function it(n,t,e){if(typeof n=="number"){if(typeof t=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return fh(n)}return cd(n,t,e)}it.poolSize=8192;function cd(n,t,e){if(typeof n=="string")return nM(n,t);if(ArrayBuffer.isView(n))return iM(n);if(n==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n);if(Wn(n,ArrayBuffer)||n&&Wn(n.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Wn(n,SharedArrayBuffer)||n&&Wn(n.buffer,SharedArrayBuffer)))return hh(n,t,e);if(typeof n=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=n.valueOf&&n.valueOf();if(i!=null&&i!==n)return it.from(i,t,e);let r=rM(n);if(r)return r;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof n[Symbol.toPrimitive]=="function")return it.from(n[Symbol.toPrimitive]("string"),t,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof n)}it.from=function(n,t,e){return cd(n,t,e)};Object.setPrototypeOf(it.prototype,Uint8Array.prototype);Object.setPrototypeOf(it,Uint8Array);function hd(n){if(typeof n!="number")throw new TypeError('"size" argument must be of type number');if(n<0)throw new RangeError('The value "'+n+'" is invalid for option "size"')}function eM(n,t,e){return hd(n),n<=0?ti(n):t!==void 0?typeof e=="string"?ti(n).fill(t,e):ti(n).fill(t):ti(n)}it.alloc=function(n,t,e){return eM(n,t,e)};function fh(n){return hd(n),ti(n<0?0:dh(n)|0)}it.allocUnsafe=function(n){return fh(n)};it.allocUnsafeSlow=function(n){return fh(n)};function nM(n,t){if((typeof t!="string"||t==="")&&(t="utf8"),!it.isEncoding(t))throw new TypeError("Unknown encoding: "+t);let e=ud(n,t)|0,i=ti(e),r=i.write(n,t);return r!==e&&(i=i.slice(0,r)),i}function ch(n){let t=n.length<0?0:dh(n.length)|0,e=ti(t);for(let i=0;i<t;i+=1)e[i]=n[i]&255;return e}function iM(n){if(Wn(n,Uint8Array)){let t=new Uint8Array(n);return hh(t.buffer,t.byteOffset,t.byteLength)}return ch(n)}function hh(n,t,e){if(t<0||n.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(n.byteLength<t+(e||0))throw new RangeError('"length" is outside of buffer bounds');let i;return t===void 0&&e===void 0?i=new Uint8Array(n):e===void 0?i=new Uint8Array(n,t):i=new Uint8Array(n,t,e),Object.setPrototypeOf(i,it.prototype),i}function rM(n){if(it.isBuffer(n)){let t=dh(n.length)|0,e=ti(t);return e.length===0||n.copy(e,0,0,t),e}if(n.length!==void 0)return typeof n.length!="number"||mh(n.length)?ti(0):ch(n);if(n.type==="Buffer"&&Array.isArray(n.data))return ch(n.data)}function dh(n){if(n>=fl)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+fl.toString(16)+" bytes");return n|0}function sM(n){return+n!=n&&(n=0),it.alloc(+n)}it.isBuffer=function(t){return t!=null&&t._isBuffer===!0&&t!==it.prototype};it.compare=function(t,e){if(Wn(t,Uint8Array)&&(t=it.from(t,t.offset,t.byteLength)),Wn(e,Uint8Array)&&(e=it.from(e,e.offset,e.byteLength)),!it.isBuffer(t)||!it.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let i=t.length,r=e.length;for(let s=0,a=Math.min(i,r);s<a;++s)if(t[s]!==e[s]){i=t[s],r=e[s];break}return i<r?-1:r<i?1:0};it.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};it.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(t.length===0)return it.alloc(0);let i;if(e===void 0)for(e=0,i=0;i<t.length;++i)e+=t[i].length;let r=it.allocUnsafe(e),s=0;for(i=0;i<t.length;++i){let a=t[i];if(Wn(a,Uint8Array))s+a.length>r.length?(it.isBuffer(a)||(a=it.from(a)),a.copy(r,s)):Uint8Array.prototype.set.call(r,a,s);else if(it.isBuffer(a))a.copy(r,s);else throw new TypeError('"list" argument must be an Array of Buffers');s+=a.length}return r};function ud(n,t){if(it.isBuffer(n))return n.length;if(ArrayBuffer.isView(n)||Wn(n,ArrayBuffer))return n.byteLength;if(typeof n!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof n);let e=n.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&e===0)return 0;let r=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return uh(n).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return yd(n).length;default:if(r)return i?-1:uh(n).length;t=(""+t).toLowerCase(),r=!0}}it.byteLength=ud;function aM(n,t,e){let i=!1;if((t===void 0||t<0)&&(t=0),t>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,t>>>=0,e<=t))return"";for(n||(n="utf8");;)switch(n){case"hex":return gM(this,t,e);case"utf8":case"utf-8":return dd(this,t,e);case"ascii":return pM(this,t,e);case"latin1":case"binary":return mM(this,t,e);case"base64":return fM(this,t,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return vM(this,t,e);default:if(i)throw new TypeError("Unknown encoding: "+n);n=(n+"").toLowerCase(),i=!0}}it.prototype._isBuffer=!0;function Xi(n,t,e){let i=n[t];n[t]=n[e],n[e]=i}it.prototype.swap16=function(){let t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)Xi(this,e,e+1);return this};it.prototype.swap32=function(){let t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)Xi(this,e,e+3),Xi(this,e+1,e+2);return this};it.prototype.swap64=function(){let t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)Xi(this,e,e+7),Xi(this,e+1,e+6),Xi(this,e+2,e+5),Xi(this,e+3,e+4);return this};it.prototype.toString=function(){let t=this.length;return t===0?"":arguments.length===0?dd(this,0,t):aM.apply(this,arguments)};it.prototype.toLocaleString=it.prototype.toString;it.prototype.equals=function(t){if(!it.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t?!0:it.compare(this,t)===0};it.prototype.inspect=function(){let t="",e=Jr.INSPECT_MAX_BYTES;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"};sd&&(it.prototype[sd]=it.prototype.inspect);it.prototype.compare=function(t,e,i,r,s){if(Wn(t,Uint8Array)&&(t=it.from(t,t.offset,t.byteLength)),!it.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(e===void 0&&(e=0),i===void 0&&(i=t?t.length:0),r===void 0&&(r=0),s===void 0&&(s=this.length),e<0||i>t.length||r<0||s>this.length)throw new RangeError("out of range index");if(r>=s&&e>=i)return 0;if(r>=s)return-1;if(e>=i)return 1;if(e>>>=0,i>>>=0,r>>>=0,s>>>=0,this===t)return 0;let a=s-r,o=i-e,l=Math.min(a,o),c=this.slice(r,s),u=t.slice(e,i);for(let f=0;f<l;++f)if(c[f]!==u[f]){a=c[f],o=u[f];break}return a<o?-1:o<a?1:0};function fd(n,t,e,i,r){if(n.length===0)return-1;if(typeof e=="string"?(i=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,mh(e)&&(e=r?0:n.length-1),e<0&&(e=n.length+e),e>=n.length){if(r)return-1;e=n.length-1}else if(e<0)if(r)e=0;else return-1;if(typeof t=="string"&&(t=it.from(t,i)),it.isBuffer(t))return t.length===0?-1:ad(n,t,e,i,r);if(typeof t=="number")return t=t&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(n,t,e):Uint8Array.prototype.lastIndexOf.call(n,t,e):ad(n,[t],e,i,r);throw new TypeError("val must be string, number or Buffer")}function ad(n,t,e,i,r){let s=1,a=n.length,o=t.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(n.length<2||t.length<2)return-1;s=2,a/=2,o/=2,e/=2}function l(u,f){return s===1?u[f]:u.readUInt16BE(f*s)}let c;if(r){let u=-1;for(c=e;c<a;c++)if(l(n,c)===l(t,u===-1?0:c-u)){if(u===-1&&(u=c),c-u+1===o)return u*s}else u!==-1&&(c-=c-u),u=-1}else for(e+o>a&&(e=a-o),c=e;c>=0;c--){let u=!0;for(let f=0;f<o;f++)if(l(n,c+f)!==l(t,f)){u=!1;break}if(u)return c}return-1}it.prototype.includes=function(t,e,i){return this.indexOf(t,e,i)!==-1};it.prototype.indexOf=function(t,e,i){return fd(this,t,e,i,!0)};it.prototype.lastIndexOf=function(t,e,i){return fd(this,t,e,i,!1)};function oM(n,t,e,i){e=Number(e)||0;let r=n.length-e;i?(i=Number(i),i>r&&(i=r)):i=r;let s=t.length;i>s/2&&(i=s/2);let a;for(a=0;a<i;++a){let o=parseInt(t.substr(a*2,2),16);if(mh(o))return a;n[e+a]=o}return a}function lM(n,t,e,i){return dl(uh(t,n.length-e),n,e,i)}function cM(n,t,e,i){return dl(MM(t),n,e,i)}function hM(n,t,e,i){return dl(yd(t),n,e,i)}function uM(n,t,e,i){return dl(SM(t,n.length-e),n,e,i)}it.prototype.write=function(t,e,i,r){if(e===void 0)r="utf8",i=this.length,e=0;else if(i===void 0&&typeof e=="string")r=e,i=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(i)?(i=i>>>0,r===void 0&&(r="utf8")):(r=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let s=this.length-e;if((i===void 0||i>s)&&(i=s),t.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let a=!1;for(;;)switch(r){case"hex":return oM(this,t,e,i);case"utf8":case"utf-8":return lM(this,t,e,i);case"ascii":case"latin1":case"binary":return cM(this,t,e,i);case"base64":return hM(this,t,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return uM(this,t,e,i);default:if(a)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),a=!0}};it.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function fM(n,t,e){return t===0&&e===n.length?lh.fromByteArray(n):lh.fromByteArray(n.slice(t,e))}function dd(n,t,e){e=Math.min(n.length,e);let i=[],r=t;for(;r<e;){let s=n[r],a=null,o=s>239?4:s>223?3:s>191?2:1;if(r+o<=e){let l,c,u,f;switch(o){case 1:s<128&&(a=s);break;case 2:l=n[r+1],(l&192)===128&&(f=(s&31)<<6|l&63,f>127&&(a=f));break;case 3:l=n[r+1],c=n[r+2],(l&192)===128&&(c&192)===128&&(f=(s&15)<<12|(l&63)<<6|c&63,f>2047&&(f<55296||f>57343)&&(a=f));break;case 4:l=n[r+1],c=n[r+2],u=n[r+3],(l&192)===128&&(c&192)===128&&(u&192)===128&&(f=(s&15)<<18|(l&63)<<12|(c&63)<<6|u&63,f>65535&&f<1114112&&(a=f))}}a===null?(a=65533,o=1):a>65535&&(a-=65536,i.push(a>>>10&1023|55296),a=56320|a&1023),i.push(a),r+=o}return dM(i)}var od=4096;function dM(n){let t=n.length;if(t<=od)return String.fromCharCode.apply(String,n);let e="",i=0;for(;i<t;)e+=String.fromCharCode.apply(String,n.slice(i,i+=od));return e}function pM(n,t,e){let i="";e=Math.min(n.length,e);for(let r=t;r<e;++r)i+=String.fromCharCode(n[r]&127);return i}function mM(n,t,e){let i="";e=Math.min(n.length,e);for(let r=t;r<e;++r)i+=String.fromCharCode(n[r]);return i}function gM(n,t,e){let i=n.length;(!t||t<0)&&(t=0),(!e||e<0||e>i)&&(e=i);let r="";for(let s=t;s<e;++s)r+=wM[n[s]];return r}function vM(n,t,e){let i=n.slice(t,e),r="";for(let s=0;s<i.length-1;s+=2)r+=String.fromCharCode(i[s]+i[s+1]*256);return r}it.prototype.slice=function(t,e){let i=this.length;t=~~t,e=e===void 0?i:~~e,t<0?(t+=i,t<0&&(t=0)):t>i&&(t=i),e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),e<t&&(e=t);let r=this.subarray(t,e);return Object.setPrototypeOf(r,it.prototype),r};function Be(n,t,e){if(n%1!==0||n<0)throw new RangeError("offset is not uint");if(n+t>e)throw new RangeError("Trying to access beyond buffer length")}it.prototype.readUintLE=it.prototype.readUIntLE=function(t,e,i){t=t>>>0,e=e>>>0,i||Be(t,e,this.length);let r=this[t],s=1,a=0;for(;++a<e&&(s*=256);)r+=this[t+a]*s;return r};it.prototype.readUintBE=it.prototype.readUIntBE=function(t,e,i){t=t>>>0,e=e>>>0,i||Be(t,e,this.length);let r=this[t+--e],s=1;for(;e>0&&(s*=256);)r+=this[t+--e]*s;return r};it.prototype.readUint8=it.prototype.readUInt8=function(t,e){return t=t>>>0,e||Be(t,1,this.length),this[t]};it.prototype.readUint16LE=it.prototype.readUInt16LE=function(t,e){return t=t>>>0,e||Be(t,2,this.length),this[t]|this[t+1]<<8};it.prototype.readUint16BE=it.prototype.readUInt16BE=function(t,e){return t=t>>>0,e||Be(t,2,this.length),this[t]<<8|this[t+1]};it.prototype.readUint32LE=it.prototype.readUInt32LE=function(t,e){return t=t>>>0,e||Be(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+this[t+3]*16777216};it.prototype.readUint32BE=it.prototype.readUInt32BE=function(t,e){return t=t>>>0,e||Be(t,4,this.length),this[t]*16777216+(this[t+1]<<16|this[t+2]<<8|this[t+3])};it.prototype.readBigUInt64LE=Ti(function(t){t=t>>>0,Zr(t,"offset");let e=this[t],i=this[t+7];(e===void 0||i===void 0)&&$s(t,this.length-8);let r=e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24,s=this[++t]+this[++t]*2**8+this[++t]*2**16+i*2**24;return BigInt(r)+(BigInt(s)<<BigInt(32))});it.prototype.readBigUInt64BE=Ti(function(t){t=t>>>0,Zr(t,"offset");let e=this[t],i=this[t+7];(e===void 0||i===void 0)&&$s(t,this.length-8);let r=e*2**24+this[++t]*2**16+this[++t]*2**8+this[++t],s=this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+i;return(BigInt(r)<<BigInt(32))+BigInt(s)});it.prototype.readIntLE=function(t,e,i){t=t>>>0,e=e>>>0,i||Be(t,e,this.length);let r=this[t],s=1,a=0;for(;++a<e&&(s*=256);)r+=this[t+a]*s;return s*=128,r>=s&&(r-=Math.pow(2,8*e)),r};it.prototype.readIntBE=function(t,e,i){t=t>>>0,e=e>>>0,i||Be(t,e,this.length);let r=e,s=1,a=this[t+--r];for(;r>0&&(s*=256);)a+=this[t+--r]*s;return s*=128,a>=s&&(a-=Math.pow(2,8*e)),a};it.prototype.readInt8=function(t,e){return t=t>>>0,e||Be(t,1,this.length),this[t]&128?(255-this[t]+1)*-1:this[t]};it.prototype.readInt16LE=function(t,e){t=t>>>0,e||Be(t,2,this.length);let i=this[t]|this[t+1]<<8;return i&32768?i|4294901760:i};it.prototype.readInt16BE=function(t,e){t=t>>>0,e||Be(t,2,this.length);let i=this[t+1]|this[t]<<8;return i&32768?i|4294901760:i};it.prototype.readInt32LE=function(t,e){return t=t>>>0,e||Be(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24};it.prototype.readInt32BE=function(t,e){return t=t>>>0,e||Be(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]};it.prototype.readBigInt64LE=Ti(function(t){t=t>>>0,Zr(t,"offset");let e=this[t],i=this[t+7];(e===void 0||i===void 0)&&$s(t,this.length-8);let r=this[t+4]+this[t+5]*2**8+this[t+6]*2**16+(i<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+this[++t]*2**8+this[++t]*2**16+this[++t]*2**24)});it.prototype.readBigInt64BE=Ti(function(t){t=t>>>0,Zr(t,"offset");let e=this[t],i=this[t+7];(e===void 0||i===void 0)&&$s(t,this.length-8);let r=(e<<24)+this[++t]*2**16+this[++t]*2**8+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+this[++t]*2**16+this[++t]*2**8+i)});it.prototype.readFloatLE=function(t,e){return t=t>>>0,e||Be(t,4,this.length),Yr.read(this,t,!0,23,4)};it.prototype.readFloatBE=function(t,e){return t=t>>>0,e||Be(t,4,this.length),Yr.read(this,t,!1,23,4)};it.prototype.readDoubleLE=function(t,e){return t=t>>>0,e||Be(t,8,this.length),Yr.read(this,t,!0,52,8)};it.prototype.readDoubleBE=function(t,e){return t=t>>>0,e||Be(t,8,this.length),Yr.read(this,t,!1,52,8)};function an(n,t,e,i,r,s){if(!it.isBuffer(n))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>r||t<s)throw new RangeError('"value" argument is out of bounds');if(e+i>n.length)throw new RangeError("Index out of range")}it.prototype.writeUintLE=it.prototype.writeUIntLE=function(t,e,i,r){if(t=+t,e=e>>>0,i=i>>>0,!r){let o=Math.pow(2,8*i)-1;an(this,t,e,i,o,0)}let s=1,a=0;for(this[e]=t&255;++a<i&&(s*=256);)this[e+a]=t/s&255;return e+i};it.prototype.writeUintBE=it.prototype.writeUIntBE=function(t,e,i,r){if(t=+t,e=e>>>0,i=i>>>0,!r){let o=Math.pow(2,8*i)-1;an(this,t,e,i,o,0)}let s=i-1,a=1;for(this[e+s]=t&255;--s>=0&&(a*=256);)this[e+s]=t/a&255;return e+i};it.prototype.writeUint8=it.prototype.writeUInt8=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,1,255,0),this[e]=t&255,e+1};it.prototype.writeUint16LE=it.prototype.writeUInt16LE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,2,65535,0),this[e]=t&255,this[e+1]=t>>>8,e+2};it.prototype.writeUint16BE=it.prototype.writeUInt16BE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=t&255,e+2};it.prototype.writeUint32LE=it.prototype.writeUInt32LE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t&255,e+4};it.prototype.writeUint32BE=it.prototype.writeUInt32BE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};function pd(n,t,e,i,r){xd(t,i,r,n,e,7);let s=Number(t&BigInt(4294967295));n[e++]=s,s=s>>8,n[e++]=s,s=s>>8,n[e++]=s,s=s>>8,n[e++]=s;let a=Number(t>>BigInt(32)&BigInt(4294967295));return n[e++]=a,a=a>>8,n[e++]=a,a=a>>8,n[e++]=a,a=a>>8,n[e++]=a,e}function md(n,t,e,i,r){xd(t,i,r,n,e,7);let s=Number(t&BigInt(4294967295));n[e+7]=s,s=s>>8,n[e+6]=s,s=s>>8,n[e+5]=s,s=s>>8,n[e+4]=s;let a=Number(t>>BigInt(32)&BigInt(4294967295));return n[e+3]=a,a=a>>8,n[e+2]=a,a=a>>8,n[e+1]=a,a=a>>8,n[e]=a,e+8}it.prototype.writeBigUInt64LE=Ti(function(t,e=0){return pd(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))});it.prototype.writeBigUInt64BE=Ti(function(t,e=0){return md(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))});it.prototype.writeIntLE=function(t,e,i,r){if(t=+t,e=e>>>0,!r){let l=Math.pow(2,8*i-1);an(this,t,e,i,l-1,-l)}let s=0,a=1,o=0;for(this[e]=t&255;++s<i&&(a*=256);)t<0&&o===0&&this[e+s-1]!==0&&(o=1),this[e+s]=(t/a>>0)-o&255;return e+i};it.prototype.writeIntBE=function(t,e,i,r){if(t=+t,e=e>>>0,!r){let l=Math.pow(2,8*i-1);an(this,t,e,i,l-1,-l)}let s=i-1,a=1,o=0;for(this[e+s]=t&255;--s>=0&&(a*=256);)t<0&&o===0&&this[e+s+1]!==0&&(o=1),this[e+s]=(t/a>>0)-o&255;return e+i};it.prototype.writeInt8=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=t&255,e+1};it.prototype.writeInt16LE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,2,32767,-32768),this[e]=t&255,this[e+1]=t>>>8,e+2};it.prototype.writeInt16BE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=t&255,e+2};it.prototype.writeInt32LE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,4,2147483647,-2147483648),this[e]=t&255,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4};it.prototype.writeInt32BE=function(t,e,i){return t=+t,e=e>>>0,i||an(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t&255,e+4};it.prototype.writeBigInt64LE=Ti(function(t,e=0){return pd(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});it.prototype.writeBigInt64BE=Ti(function(t,e=0){return md(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function gd(n,t,e,i,r,s){if(e+i>n.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function vd(n,t,e,i,r){return t=+t,e=e>>>0,r||gd(n,t,e,4,34028234663852886e22,-34028234663852886e22),Yr.write(n,t,e,i,23,4),e+4}it.prototype.writeFloatLE=function(t,e,i){return vd(this,t,e,!0,i)};it.prototype.writeFloatBE=function(t,e,i){return vd(this,t,e,!1,i)};function _d(n,t,e,i,r){return t=+t,e=e>>>0,r||gd(n,t,e,8,17976931348623157e292,-17976931348623157e292),Yr.write(n,t,e,i,52,8),e+8}it.prototype.writeDoubleLE=function(t,e,i){return _d(this,t,e,!0,i)};it.prototype.writeDoubleBE=function(t,e,i){return _d(this,t,e,!1,i)};it.prototype.copy=function(t,e,i,r){if(!it.isBuffer(t))throw new TypeError("argument should be a Buffer");if(i||(i=0),!r&&r!==0&&(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<i&&(r=i),r===i||t.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-i&&(r=t.length-e+i);let s=r-i;return this===t&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,i,r):Uint8Array.prototype.set.call(t,this.subarray(i,r),e),s};it.prototype.fill=function(t,e,i,r){if(typeof t=="string"){if(typeof e=="string"?(r=e,e=0,i=this.length):typeof i=="string"&&(r=i,i=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!it.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(t.length===1){let a=t.charCodeAt(0);(r==="utf8"&&a<128||r==="latin1")&&(t=a)}}else typeof t=="number"?t=t&255:typeof t=="boolean"&&(t=Number(t));if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;e=e>>>0,i=i===void 0?this.length:i>>>0,t||(t=0);let s;if(typeof t=="number")for(s=e;s<i;++s)this[s]=t;else{let a=it.isBuffer(t)?t:it.from(t,r),o=a.length;if(o===0)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(s=0;s<i-e;++s)this[s+e]=a[s%o]}return this};var qr={};function ph(n,t,e){qr[n]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${n}]`,this.stack,delete this.name}get code(){return n}set code(r){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:r,writable:!0})}toString(){return`${this.name} [${n}]: ${this.message}`}}}ph("ERR_BUFFER_OUT_OF_BOUNDS",function(n){return n?`${n} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);ph("ERR_INVALID_ARG_TYPE",function(n,t){return`The "${n}" argument must be of type number. Received type ${typeof t}`},TypeError);ph("ERR_OUT_OF_RANGE",function(n,t,e){let i=`The value of "${n}" is out of range.`,r=e;return Number.isInteger(e)&&Math.abs(e)>2**32?r=ld(String(e)):typeof e=="bigint"&&(r=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(r=ld(r)),r+="n"),i+=` It must be ${t}. Received ${r}`,i},RangeError);function ld(n){let t="",e=n.length,i=n[0]==="-"?1:0;for(;e>=i+4;e-=3)t=`_${n.slice(e-3,e)}${t}`;return`${n.slice(0,e)}${t}`}function _M(n,t,e){Zr(t,"offset"),(n[t]===void 0||n[t+e]===void 0)&&$s(t,n.length-(e+1))}function xd(n,t,e,i,r,s){if(n>e||n<t){let a=typeof t=="bigint"?"n":"",o;throw s>3?t===0||t===BigInt(0)?o=`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:o=`>= -(2${a} ** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:o=`>= ${t}${a} and <= ${e}${a}`,new qr.ERR_OUT_OF_RANGE("value",o,n)}_M(i,r,s)}function Zr(n,t){if(typeof n!="number")throw new qr.ERR_INVALID_ARG_TYPE(t,"number",n)}function $s(n,t,e){throw Math.floor(n)!==n?(Zr(n,e),new qr.ERR_OUT_OF_RANGE(e||"offset","an integer",n)):t<0?new qr.ERR_BUFFER_OUT_OF_BOUNDS:new qr.ERR_OUT_OF_RANGE(e||"offset",`>= ${e?1:0} and <= ${t}`,n)}var xM=/[^+/0-9A-Za-z-_]/g;function yM(n){if(n=n.split("=")[0],n=n.trim().replace(xM,""),n.length<2)return"";for(;n.length%4!==0;)n=n+"=";return n}function uh(n,t){t=t||1/0;let e,i=n.length,r=null,s=[];for(let a=0;a<i;++a){if(e=n.charCodeAt(a),e>55295&&e<57344){if(!r){if(e>56319){(t-=3)>-1&&s.push(239,191,189);continue}else if(a+1===i){(t-=3)>-1&&s.push(239,191,189);continue}r=e;continue}if(e<56320){(t-=3)>-1&&s.push(239,191,189),r=e;continue}e=(r-55296<<10|e-56320)+65536}else r&&(t-=3)>-1&&s.push(239,191,189);if(r=null,e<128){if((t-=1)<0)break;s.push(e)}else if(e<2048){if((t-=2)<0)break;s.push(e>>6|192,e&63|128)}else if(e<65536){if((t-=3)<0)break;s.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((t-=4)<0)break;s.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return s}function MM(n){let t=[];for(let e=0;e<n.length;++e)t.push(n.charCodeAt(e)&255);return t}function SM(n,t){let e,i,r,s=[];for(let a=0;a<n.length&&!((t-=2)<0);++a)e=n.charCodeAt(a),i=e>>8,r=e%256,s.push(r),s.push(i);return s}function yd(n){return lh.toByteArray(yM(n))}function dl(n,t,e,i){let r;for(r=0;r<i&&!(r+e>=t.length||r>=n.length);++r)t[r+e]=n[r];return r}function Wn(n,t){return n instanceof t||n!=null&&n.constructor!=null&&n.constructor.name!=null&&n.constructor.name===t.name}function mh(n){return n!==n}var wM=(function(){let n="0123456789abcdef",t=new Array(256);for(let e=0;e<16;++e){let i=e*16;for(let r=0;r<16;++r)t[i+r]=n[e]+n[r]}return t})();function Ti(n){return typeof BigInt>"u"?bM:n}function bM(){throw new Error("BigInt not supported")}});var gl=Bt(te=>{"use strict";var Ai=Js(),ke=td(),Sd=Md().Buffer;window.__TYPEDARRAY_POOL||(window.__TYPEDARRAY_POOL={UINT8:ke([32,0]),UINT16:ke([32,0]),UINT32:ke([32,0]),BIGUINT64:ke([32,0]),INT8:ke([32,0]),INT16:ke([32,0]),INT32:ke([32,0]),BIGINT64:ke([32,0]),FLOAT:ke([32,0]),DOUBLE:ke([32,0]),DATA:ke([32,0]),UINT8C:ke([32,0]),BUFFER:ke([32,0])});var EM=typeof Uint8ClampedArray<"u",TM=typeof BigUint64Array<"u",AM=typeof BigInt64Array<"u",Ae=window.__TYPEDARRAY_POOL;Ae.UINT8C||(Ae.UINT8C=ke([32,0]));Ae.BIGUINT64||(Ae.BIGUINT64=ke([32,0]));Ae.BIGINT64||(Ae.BIGINT64=ke([32,0]));Ae.BUFFER||(Ae.BUFFER=ke([32,0]));var pl=Ae.DATA,ml=Ae.BUFFER;te.free=function(t){if(Sd.isBuffer(t))ml[Ai.log2(t.length)].push(t);else{if(Object.prototype.toString.call(t)!=="[object ArrayBuffer]"&&(t=t.buffer),!t)return;var e=t.length||t.byteLength,i=Ai.log2(e)|0;pl[i].push(t)}};function wd(n){if(n){var t=n.length||n.byteLength,e=Ai.log2(t);pl[e].push(n)}}function RM(n){wd(n.buffer)}te.freeUint8=te.freeUint16=te.freeUint32=te.freeBigUint64=te.freeInt8=te.freeInt16=te.freeInt32=te.freeBigInt64=te.freeFloat32=te.freeFloat=te.freeFloat64=te.freeDouble=te.freeUint8Clamped=te.freeDataView=RM;te.freeArrayBuffer=wd;te.freeBuffer=function(t){ml[Ai.log2(t.length)].push(t)};te.malloc=function(t,e){if(e===void 0||e==="arraybuffer")return on(t);switch(e){case"uint8":return gh(t);case"uint16":return bd(t);case"uint32":return Ed(t);case"int8":return Td(t);case"int16":return Ad(t);case"int32":return Rd(t);case"float":case"float32":return Cd(t);case"double":case"float64":return Id(t);case"uint8_clamped":return Pd(t);case"bigint64":return Ud(t);case"biguint64":return Ld(t);case"buffer":return Dd(t);case"data":case"dataview":return Nd(t);default:return null}return null};function on(t){var t=Ai.nextPow2(t),e=Ai.log2(t),i=pl[e];return i.length>0?i.pop():new ArrayBuffer(t)}te.mallocArrayBuffer=on;function gh(n){return new Uint8Array(on(n),0,n)}te.mallocUint8=gh;function bd(n){return new Uint16Array(on(2*n),0,n)}te.mallocUint16=bd;function Ed(n){return new Uint32Array(on(4*n),0,n)}te.mallocUint32=Ed;function Td(n){return new Int8Array(on(n),0,n)}te.mallocInt8=Td;function Ad(n){return new Int16Array(on(2*n),0,n)}te.mallocInt16=Ad;function Rd(n){return new Int32Array(on(4*n),0,n)}te.mallocInt32=Rd;function Cd(n){return new Float32Array(on(4*n),0,n)}te.mallocFloat32=te.mallocFloat=Cd;function Id(n){return new Float64Array(on(8*n),0,n)}te.mallocFloat64=te.mallocDouble=Id;function Pd(n){return EM?new Uint8ClampedArray(on(n),0,n):gh(n)}te.mallocUint8Clamped=Pd;function Ld(n){return TM?new BigUint64Array(on(8*n),0,n):null}te.mallocBigUint64=Ld;function Ud(n){return AM?new BigInt64Array(on(8*n),0,n):null}te.mallocBigInt64=Ud;function Nd(n){return new DataView(on(n),0,n)}te.mallocDataView=Nd;function Dd(n){n=Ai.nextPow2(n);var t=Ai.log2(n),e=ml[t];return e.length>0?e.pop():new Sd(n)}te.mallocBuffer=Dd;te.clearCache=function(){for(var t=0;t<32;++t)Ae.UINT8[t].length=0,Ae.UINT16[t].length=0,Ae.UINT32[t].length=0,Ae.INT8[t].length=0,Ae.INT16[t].length=0,Ae.INT32[t].length=0,Ae.FLOAT[t].length=0,Ae.DOUBLE[t].length=0,Ae.BIGUINT64[t].length=0,Ae.BIGINT64[t].length=0,Ae.UINT8C[t].length=0,pl[t].length=0,ml[t].length=0}});var kd=Bt((_A,zd)=>{"use strict";zd.exports=CM;var _l=32;function CM(n,t){t<=4*_l?xl(0,t-1,n):yl(0,t-1,n)}function xl(n,t,e){for(var i=2*(n+1),r=n+1;r<=t;++r){for(var s=e[i++],a=e[i++],o=r,l=i-2;o-- >n;){var c=e[l-2],u=e[l-1];if(c<s)break;if(c===s&&u<a)break;e[l]=c,e[l+1]=u,l-=2}e[l]=s,e[l+1]=a}}function Fd(n,t,e){n*=2,t*=2;var i=e[n],r=e[n+1];e[n]=e[t],e[n+1]=e[t+1],e[t]=i,e[t+1]=r}function Bd(n,t,e){n*=2,t*=2,e[n]=e[t],e[n+1]=e[t+1]}function IM(n,t,e,i){n*=2,t*=2,e*=2;var r=i[n],s=i[n+1];i[n]=i[t],i[n+1]=i[t+1],i[t]=i[e],i[t+1]=i[e+1],i[e]=r,i[e+1]=s}function Od(n,t,e,i,r){n*=2,t*=2,r[n]=r[t],r[t]=e,r[n+1]=r[t+1],r[t+1]=i}function ei(n,t,e){n*=2,t*=2;var i=e[n],r=e[t];return i<r?!1:i===r?e[n+1]>e[t+1]:!0}function vl(n,t,e,i){n*=2;var r=i[n];return r<t?!0:r===t?i[n+1]<e:!1}function yl(n,t,e){var i=(t-n+1)/6|0,r=n+i,s=t-i,a=n+t>>1,o=a-i,l=a+i,c=r,u=o,f=a,d=l,v=s,x=n+1,M=t-1,g=0;ei(c,u,e)&&(g=c,c=u,u=g),ei(d,v,e)&&(g=d,d=v,v=g),ei(c,f,e)&&(g=c,c=f,f=g),ei(u,f,e)&&(g=u,u=f,f=g),ei(c,d,e)&&(g=c,c=d,d=g),ei(f,d,e)&&(g=f,f=d,d=g),ei(u,v,e)&&(g=u,u=v,v=g),ei(u,f,e)&&(g=u,u=f,f=g),ei(d,v,e)&&(g=d,d=v,v=g);for(var _=e[2*u],L=e[2*u+1],B=e[2*d],C=e[2*d+1],A=2*c,R=2*f,O=2*v,S=2*r,N=2*a,w=2*s,h=0;h<2;++h){var m=e[A+h],b=e[R+h],y=e[O+h];e[S+h]=m,e[N+h]=b,e[w+h]=y}Bd(o,n,e),Bd(l,t,e);for(var E=x;E<=M;++E)if(vl(E,_,L,e))E!==x&&Fd(E,x,e),++x;else if(!vl(E,B,C,e))for(;;)if(vl(M,B,C,e)){vl(M,_,L,e)?(IM(E,x,M,e),++x,--M):(Fd(E,M,e),--M);break}else{if(--M<E)break;continue}Od(n,x-1,_,L,e),Od(t,M+1,B,C,e),x-2-n<=_l?xl(n,x-2,e):yl(n,x-2,e),t-(M+2)<=_l?xl(M+2,t,e):yl(M+2,t,e),M-x<=_l?xl(x,M,e):yl(x,M,e)}});var vh=Bt((xA,Vd)=>{"use strict";Vd.exports={init:LM,sweepBipartite:UM,sweepComplete:NM,scanBipartite:DM,scanComplete:FM};var Re=gl(),PM=Js(),Ml=kd(),mn=1<<28,Yi=1024,Ve=Re.mallocInt32(Yi),ni=Re.mallocInt32(Yi),ii=Re.mallocInt32(Yi),qi=Re.mallocInt32(Yi),$r=Re.mallocInt32(Yi),Ks=Re.mallocInt32(Yi),Zt=Re.mallocDouble(Yi*8);function LM(n){var t=PM.nextPow2(n);Ve.length<t&&(Re.free(Ve),Ve=Re.mallocInt32(t)),ni.length<t&&(Re.free(ni),ni=Re.mallocInt32(t)),ii.length<t&&(Re.free(ii),ii=Re.mallocInt32(t)),qi.length<t&&(Re.free(qi),qi=Re.mallocInt32(t)),$r.length<t&&(Re.free($r),$r=Re.mallocInt32(t)),Ks.length<t&&(Re.free(Ks),Ks=Re.mallocInt32(t));var e=8*t;Zt.length<e&&(Re.free(Zt),Zt=Re.mallocDouble(e))}function Kr(n,t,e,i){var r=t[i],s=n[e-1];n[r]=s,t[s]=r}function Qr(n,t,e,i){n[e]=i,t[i]=e}function UM(n,t,e,i,r,s,a,o,l,c){for(var u=0,f=2*n,d=n-1,v=f-1,x=e;x<i;++x){var M=s[x],g=f*x;Zt[u++]=r[g+d],Zt[u++]=-(M+1),Zt[u++]=r[g+v],Zt[u++]=M}for(var x=a;x<o;++x){var M=c[x]+mn,_=f*x;Zt[u++]=l[_+d],Zt[u++]=-M,Zt[u++]=l[_+v],Zt[u++]=M}var L=u>>>1;Ml(Zt,L);for(var B=0,C=0,x=0;x<L;++x){var A=Zt[2*x+1]|0;if(A>=mn)A=A-mn|0,Kr(ii,qi,C--,A);else if(A>=0)Kr(Ve,ni,B--,A);else if(A<=-mn){A=-A-mn|0;for(var R=0;R<B;++R){var O=t(Ve[R],A);if(O!==void 0)return O}Qr(ii,qi,C++,A)}else{A=-A-1|0;for(var R=0;R<C;++R){var O=t(A,ii[R]);if(O!==void 0)return O}Qr(Ve,ni,B++,A)}}}function NM(n,t,e,i,r,s,a,o,l,c){for(var u=0,f=2*n,d=n-1,v=f-1,x=e;x<i;++x){var M=s[x]+1<<1,g=f*x;Zt[u++]=r[g+d],Zt[u++]=-M,Zt[u++]=r[g+v],Zt[u++]=M}for(var x=a;x<o;++x){var M=c[x]+1<<1,_=f*x;Zt[u++]=l[_+d],Zt[u++]=-M|1,Zt[u++]=l[_+v],Zt[u++]=M|1}var L=u>>>1;Ml(Zt,L);for(var B=0,C=0,A=0,x=0;x<L;++x){var R=Zt[2*x+1]|0,O=R&1;if(x<L-1&&R>>1===Zt[2*x+3]>>1&&(O=2,x+=1),R<0){for(var S=-(R>>1)-1,N=0;N<A;++N){var w=t($r[N],S);if(w!==void 0)return w}if(O!==0)for(var N=0;N<B;++N){var w=t(Ve[N],S);if(w!==void 0)return w}if(O!==1)for(var N=0;N<C;++N){var w=t(ii[N],S);if(w!==void 0)return w}O===0?Qr(Ve,ni,B++,S):O===1?Qr(ii,qi,C++,S):O===2&&Qr($r,Ks,A++,S)}else{var S=(R>>1)-1;O===0?Kr(Ve,ni,B--,S):O===1?Kr(ii,qi,C--,S):O===2&&Kr($r,Ks,A--,S)}}}function DM(n,t,e,i,r,s,a,o,l,c,u,f){var d=0,v=2*n,x=t,M=t+n,g=1,_=1;i?_=mn:g=mn;for(var L=r;L<s;++L){var B=L+g,C=v*L;Zt[d++]=a[C+x],Zt[d++]=-B,Zt[d++]=a[C+M],Zt[d++]=B}for(var L=l;L<c;++L){var B=L+_,A=v*L;Zt[d++]=u[A+x],Zt[d++]=-B}var R=d>>>1;Ml(Zt,R);for(var O=0,L=0;L<R;++L){var S=Zt[2*L+1]|0;if(S<0){var B=-S,N=!1;if(B>=mn?(N=!i,B-=mn):(N=!!i,B-=1),N)Qr(Ve,ni,O++,B);else{var w=f[B],h=v*B,m=u[h+t+1],b=u[h+t+1+n];t:for(var y=0;y<O;++y){var E=Ve[y],D=v*E;if(!(b<a[D+t+1]||a[D+t+1+n]<m)){for(var F=t+2;F<n;++F)if(u[h+F+n]<a[D+F]||a[D+F+n]<u[h+F])continue t;var I=o[E],p;if(i?p=e(w,I):p=e(I,w),p!==void 0)return p}}}}else Kr(Ve,ni,O--,S-g)}}function FM(n,t,e,i,r,s,a,o,l,c,u){for(var f=0,d=2*n,v=t,x=t+n,M=i;M<r;++M){var g=M+mn,_=d*M;Zt[f++]=s[_+v],Zt[f++]=-g,Zt[f++]=s[_+x],Zt[f++]=g}for(var M=o;M<l;++M){var g=M+1,L=d*M;Zt[f++]=c[L+v],Zt[f++]=-g}var B=f>>>1;Ml(Zt,B);for(var C=0,M=0;M<B;++M){var A=Zt[2*M+1]|0;if(A<0){var g=-A;if(g>=mn)Ve[C++]=g-mn;else{g-=1;var R=u[g],O=d*g,S=c[O+t+1],N=c[O+t+1+n];t:for(var w=0;w<C;++w){var h=Ve[w],m=a[h];if(m===R)break;var b=d*h;if(!(N<s[b+t+1]||s[b+t+1+n]<S)){for(var y=t+2;y<n;++y)if(c[O+y+n]<s[b+y]||s[b+y+n]<c[O+y])continue t;var E=e(m,R);if(E!==void 0)return E}}}}else{for(var g=A-mn,w=C-1;w>=0;--w)if(Ve[w]===g){for(var y=w+1;y<C;++y)Ve[y-1]=Ve[y];break}--C}}}});var qd=Bt(bh=>{"use strict";var Zi="d",es="ax",Gd="vv",_h="fp",Qs="es",Sl="rs",Sh="re",js="rb",Hd="ri",jr="rp",wl="bs",wh="be",ta="bb",Wd="bi",ts="bp",xh="rv",yh="Q",Mh=[Zi,es,Gd,Sl,Sh,js,Hd,wl,wh,ta,Wd];function BM(n,t,e){var i="bruteForce"+(n?"Red":"Blue")+(t?"Flip":"")+(e?"Full":""),r=["function ",i,"(",Mh.join(),"){","var ",Qs,"=2*",Zi,";"],s="for(var i="+Sl+","+jr+"="+Qs+"*"+Sl+";i<"+Sh+";++i,"+jr+"+="+Qs+"){var x0="+js+"["+es+"+"+jr+"],x1="+js+"["+es+"+"+jr+"+"+Zi+"],xi="+Hd+"[i];",a="for(var j="+wl+","+ts+"="+Qs+"*"+wl+";j<"+wh+";++j,"+ts+"+="+Qs+"){var y0="+ta+"["+es+"+"+ts+"],"+(e?"y1="+ta+"["+es+"+"+ts+"+"+Zi+"],":"")+"yi="+Wd+"[j];";return n?r.push(s,yh,":",a):r.push(a,yh,":",s),e?r.push("if(y1<x0||x1<y0)continue;"):t?r.push("if(y0<=x0||x1<y0)continue;"):r.push("if(y0<x0||x1<y0)continue;"),r.push("for(var k="+es+"+1;k<"+Zi+";++k){var r0="+js+"[k+"+jr+"],r1="+js+"[k+"+Zi+"+"+jr+"],b0="+ta+"[k+"+ts+"],b1="+ta+"[k+"+Zi+"+"+ts+"];if(r1<b0||b1<r0)continue "+yh+";}var "+xh+"="+Gd+"("),t?r.push("yi,xi"):r.push("xi,yi"),r.push(");if("+xh+"!==void 0)return "+xh+";}}}"),{name:i,code:r.join("")}}function Xd(n){var t="bruteForce"+(n?"Full":"Partial"),e=[],i=Mh.slice();n||i.splice(3,0,_h);var r=["function "+t+"("+i.join()+"){"];function s(l,c){var u=BM(l,c,n);e.push(u.code),r.push("return "+u.name+"("+Mh.join()+");")}r.push("if("+Sh+"-"+Sl+">"+wh+"-"+wl+"){"),n?(s(!0,!1),r.push("}else{"),s(!1,!1)):(r.push("if("+_h+"){"),s(!0,!0),r.push("}else{"),s(!0,!1),r.push("}}else{if("+_h+"){"),s(!1,!0),r.push("}else{"),s(!1,!1),r.push("}")),r.push("}}return "+t);var a=e.join("")+r.join(""),o=new Function(a);return o()}bh.partial=Xd(!1);bh.full=Xd(!0)});var Eh=Bt((MA,Yd)=>{"use strict";Yd.exports=zM;var OM="for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m";function zM(n,t){var e="abcdef".split("").concat(t),i=[];return n.indexOf("lo")>=0&&i.push("lo=e[k+n]"),n.indexOf("hi")>=0&&i.push("hi=e[k+o]"),e.push(OM.replace("_",i.join()).replace("$",n)),Function.apply(void 0,e)}});var $d=Bt((SA,Jd)=>{"use strict";Jd.exports=HM;var kM=Eh(),Zd=kM("lo<p0",["p0"]),VM=8;function GM(n,t,e,i,r,s){for(var a=2*n,o=a*(e+1)+t,l=e+1;l<i;++l,o+=a)for(var c=r[o],u=l,f=a*(l-1);u>e&&r[f+t]>c;--u,f-=a){for(var d=f,v=f+a,x=0;x<a;++x,++d,++v){var M=r[d];r[d]=r[v],r[v]=M}var g=s[u];s[u]=s[u-1],s[u-1]=g}}function HM(n,t,e,i,r,s){if(i<=e+1)return e;for(var a=e,o=i,l=i+e>>>1,c=2*n,u=l,f=r[c*l+t];a<o;){if(o-a<VM){GM(n,t,a,o,r,s),f=r[c*l+t];break}var d=o-a,v=Math.random()*d+a|0,x=r[c*v+t],M=Math.random()*d+a|0,g=r[c*M+t],_=Math.random()*d+a|0,L=r[c*_+t];x<=g?L>=g?(u=M,f=g):x>=L?(u=v,f=x):(u=_,f=L):g>=L?(u=M,f=g):L>=x?(u=v,f=x):(u=_,f=L);for(var A=c*(o-1),R=c*u,B=0;B<c;++B,++A,++R){var C=r[A];r[A]=r[R],r[R]=C}var O=s[o-1];s[o-1]=s[u],s[u]=O,u=Zd(n,t,a,o-1,r,s,f);for(var A=c*(o-1),R=c*u,B=0;B<c;++B,++A,++R){var C=r[A];r[A]=r[R],r[R]=C}var O=s[o-1];if(s[o-1]=s[u],s[u]=O,l<u){for(o=u-1;a<o&&r[c*(o-1)+t]===f;)o-=1;o+=1}else if(u<l)for(a=u+1;a<o&&r[c*a+t]===f;)a+=1;else break}return Zd(n,t,e,l,r,s,r[c*l+t])}});var ip=Bt((wA,np)=>{"use strict";np.exports=n1;var ns=gl(),Th=Js(),tp=qd(),WM=tp.partial,XM=tp.full,Ri=vh(),qM=$d(),is=Eh(),Kd=128,YM=1<<22,ZM=1<<22,JM=is("!(lo>=p0)&&!(p1>=hi)",["p0","p1"]),Qd=is("lo===p0",["p0"]),$M=is("lo<p0",["p0"]),KM=is("hi<=p0",["p0"]),jd=is("lo<=p0&&p0<=hi",["p0"]),QM=is("lo<p0&&p0<=hi",["p0"]),Ah=6,Rh=2,ep=1024,tn=ns.mallocInt32(ep),Ji=ns.mallocDouble(ep);function jM(n,t){var e=8*Th.log2(t+1)*(n+1)|0,i=Th.nextPow2(Ah*e);tn.length<i&&(ns.free(tn),tn=ns.mallocInt32(i));var r=Th.nextPow2(Rh*e);Ji.length<r&&(ns.free(Ji),Ji=ns.mallocDouble(r))}function In(n,t,e,i,r,s,a,o,l){var c=Ah*n;tn[c]=t,tn[c+1]=e,tn[c+2]=i,tn[c+3]=r,tn[c+4]=s,tn[c+5]=a;var u=Rh*n;Ji[u]=o,Ji[u+1]=l}function t1(n,t,e,i,r,s,a,o,l,c,u){var f=2*n,d=l*f,v=c[d+t];t:for(var x=r,M=r*f;x<s;++x,M+=f){var g=a[M+t],_=a[M+t+n];if(!(v<g||_<v)&&!(i&&v===g)){for(var L=o[x],B=t+1;B<n;++B){var g=a[M+B],_=a[M+B+n],C=c[d+B],A=c[d+B+n];if(_<C||A<g)continue t}var R;if(i?R=e(u,L):R=e(L,u),R!==void 0)return R}}}function e1(n,t,e,i,r,s,a,o,l,c){var u=2*n,f=o*u,d=l[f+t];t:for(var v=i,x=i*u;v<r;++v,x+=u){var M=a[v];if(M!==c){var g=s[x+t],_=s[x+t+n];if(!(d<g||_<d)){for(var L=t+1;L<n;++L){var g=s[x+L],_=s[x+L+n],B=l[f+L],C=l[f+L+n];if(_<B||C<g)continue t}var A=e(M,c);if(A!==void 0)return A}}}}function n1(n,t,e,i,r,s,a,o,l){jM(n,i+a);var c=0,u=2*n,f;for(In(c++,0,0,i,0,a,e?16:0,-1/0,1/0),e||In(c++,0,0,a,0,i,1,-1/0,1/0);c>0;){c-=1;var d=c*Ah,v=tn[d],x=tn[d+1],M=tn[d+2],g=tn[d+3],_=tn[d+4],L=tn[d+5],B=c*Rh,C=Ji[B],A=Ji[B+1],R=L&1,O=!!(L&16),S=r,N=s,w=o,h=l;if(R&&(S=o,N=l,w=r,h=s),!(L&2&&(M=$M(n,v,x,M,S,N,A),x>=M))&&!(L&4&&(x=KM(n,v,x,M,S,N,C),x>=M))){var m=M-x,b=_-g;if(O){if(n*m*(m+b)<ZM){if(f=Ri.scanComplete(n,v,t,x,M,S,N,g,_,w,h),f!==void 0)return f;continue}}else if(n*Math.min(m,b)<Kd){if(f=WM(n,v,t,R,x,M,S,N,g,_,w,h),f!==void 0)return f;continue}else if(n*m*b<YM){if(f=Ri.scanBipartite(n,v,t,R,x,M,S,N,g,_,w,h),f!==void 0)return f;continue}var y=JM(n,v,x,M,S,N,C,A);if(x<y)if(n*(y-x)<Kd){if(f=XM(n,v+1,t,x,y,S,N,g,_,w,h),f!==void 0)return f}else if(v===n-2){if(R?f=Ri.sweepBipartite(n,t,g,_,w,h,x,y,S,N):f=Ri.sweepBipartite(n,t,x,y,S,N,g,_,w,h),f!==void 0)return f}else In(c++,v+1,x,y,g,_,R,-1/0,1/0),In(c++,v+1,g,_,x,y,R^1,-1/0,1/0);if(y<M){var E=qM(n,v,g,_,w,h),D=w[u*E+v],F=Qd(n,v,E,_,w,h,D);if(F<_&&In(c++,v,y,M,F,_,(R|4)+(O?16:0),D,A),g<E&&In(c++,v,y,M,g,E,(R|2)+(O?16:0),C,D),E+1===F){if(O?f=e1(n,v,t,y,M,S,N,E,w,h[E]):f=t1(n,v,t,R,y,M,S,N,E,w,h[E]),f!==void 0)return f}else if(E<F){var I;if(O){if(I=jd(n,v,y,M,S,N,D),y<I){var p=Qd(n,v,y,I,S,N,D);if(v===n-2){if(y<p&&(f=Ri.sweepComplete(n,t,y,p,S,N,E,F,w,h),f!==void 0)||p<I&&(f=Ri.sweepBipartite(n,t,p,I,S,N,E,F,w,h),f!==void 0))return f}else y<p&&In(c++,v+1,y,p,E,F,16,-1/0,1/0),p<I&&(In(c++,v+1,p,I,E,F,0,-1/0,1/0),In(c++,v+1,E,F,p,I,1,-1/0,1/0))}}else R?I=QM(n,v,y,M,S,N,D):I=jd(n,v,y,M,S,N,D),y<I&&(v===n-2?R?f=Ri.sweepBipartite(n,t,E,F,w,h,y,I,S,N):f=Ri.sweepBipartite(n,t,y,I,S,N,E,F,w,h):(In(c++,v+1,y,I,E,F,R,-1/0,1/0),In(c++,v+1,E,F,y,I,R^1,-1/0,1/0)))}}}}}});var op=Bt((bA,ap)=>{"use strict";ap.exports=o1;var Ci=gl(),bl=vh(),i1=ip();function r1(n,t){for(var e=0;e<n;++e)if(!(t[e]<=t[e+n]))return!0;return!1}function rp(n,t,e,i){for(var r=0,s=0,a=0,o=n.length;a<o;++a){var l=n[a];if(!r1(t,l)){for(var c=0;c<2*t;++c)e[r++]=l[c];i[s++]=a}}return s}function El(n,t,e,i){var r=n.length,s=t.length;if(!(r<=0||s<=0)){var a=n[0].length>>>1;if(!(a<=0)){var o,l=Ci.mallocDouble(2*a*r),c=Ci.mallocInt32(r);if(r=rp(n,a,l,c),r>0){if(a===1&&i)bl.init(r),o=bl.sweepComplete(a,e,0,r,l,c,0,r,l,c);else{var u=Ci.mallocDouble(2*a*s),f=Ci.mallocInt32(s);s=rp(t,a,u,f),s>0&&(bl.init(r+s),a===1?o=bl.sweepBipartite(a,e,0,r,l,c,0,s,u,f):o=i1(a,e,i,r,l,c,s,u,f),Ci.free(u),Ci.free(f))}Ci.free(l),Ci.free(c)}return o}}}var ea;function sp(n,t){ea.push([n,t])}function s1(n){return ea=[],El(n,n,sp,!0),ea}function a1(n,t){return ea=[],El(n,t,sp,!1),ea}function o1(n,t,e){var i;switch(arguments.length){case 1:return s1(n);case 2:return typeof t=="function"?El(n,n,t,!0):a1(n,t);case 3:return El(n,t,e,!1);default:throw new Error("box-intersect: Invalid arguments")}}});var Tl=Bt((EA,cp)=>{"use strict";cp.exports=l1;var lp=+(Math.pow(2,27)+1);function l1(n,t,e){var i=n*t,r=lp*n,s=r-n,a=r-s,o=n-a,l=lp*t,c=l-t,u=l-c,f=t-u,d=i-a*u,v=d-o*u,x=v-a*f,M=o*f-x;return e?(e[0]=M,e[1]=i,e):[M,i]}});var Ch=Bt((TA,hp)=>{"use strict";hp.exports=h1;function c1(n,t){var e=n+t,i=e-n,r=e-i,s=t-i,a=n-r,o=a+s;return o?[o,e]:[e]}function h1(n,t){var e=n.length|0,i=t.length|0;if(e===1&&i===1)return c1(n[0],t[0]);var r=e+i,s=new Array(r),a=0,o=0,l=0,c=Math.abs,u=n[o],f=c(u),d=t[l],v=c(d),x,M;f<v?(M=u,o+=1,o<e&&(u=n[o],f=c(u))):(M=d,l+=1,l<i&&(d=t[l],v=c(d))),o<e&&f<v||l>=i?(x=u,o+=1,o<e&&(u=n[o],f=c(u))):(x=d,l+=1,l<i&&(d=t[l],v=c(d)));for(var g=x+M,_=g-x,L=M-_,B=L,C=g,A,R,O,S,N;o<e&&l<i;)f<v?(x=u,o+=1,o<e&&(u=n[o],f=c(u))):(x=d,l+=1,l<i&&(d=t[l],v=c(d))),M=B,g=x+M,_=g-x,L=M-_,L&&(s[a++]=L),A=C+g,R=A-C,O=A-R,S=g-R,N=C-O,B=N+S,C=A;for(;o<e;)x=u,M=B,g=x+M,_=g-x,L=M-_,L&&(s[a++]=L),A=C+g,R=A-C,O=A-R,S=g-R,N=C-O,B=N+S,C=A,o+=1,o<e&&(u=n[o]);for(;l<i;)x=d,M=B,g=x+M,_=g-x,L=M-_,L&&(s[a++]=L),A=C+g,R=A-C,O=A-R,S=g-R,N=C-O,B=N+S,C=A,l+=1,l<i&&(d=t[l]);return B&&(s[a++]=B),C&&(s[a++]=C),a||(s[a++]=0),s.length=a,s}});var fp=Bt((AA,up)=>{"use strict";up.exports=u1;function u1(n,t,e){var i=n+t,r=i-n,s=i-r,a=t-r,o=n-s;return e?(e[0]=o+a,e[1]=i,e):[o+a,i]}});var Ph=Bt((RA,dp)=>{"use strict";var Ih=Tl(),f1=fp();dp.exports=d1;function d1(n,t){var e=n.length;if(e===1){var i=Ih(n[0],t);return i[0]?i:[i[1]]}var r=new Array(2*e),s=[.1,.1],a=[.1,.1],o=0;Ih(n[0],t,s),s[0]&&(r[o++]=s[0]);for(var l=1;l<e;++l){Ih(n[l],t,a);var c=s[1];f1(c,a[0],s),s[0]&&(r[o++]=s[0]);var u=a[1],f=s[1],d=u+f,v=d-u,x=f-v;s[1]=d,x&&(r[o++]=x)}return s[1]&&(r[o++]=s[1]),o===0&&(r[o++]=0),r.length=o,r}});var Lh=Bt((CA,pp)=>{"use strict";pp.exports=m1;function p1(n,t){var e=n+t,i=e-n,r=e-i,s=t-i,a=n-r,o=a+s;return o?[o,e]:[e]}function m1(n,t){var e=n.length|0,i=t.length|0;if(e===1&&i===1)return p1(n[0],-t[0]);var r=e+i,s=new Array(r),a=0,o=0,l=0,c=Math.abs,u=n[o],f=c(u),d=-t[l],v=c(d),x,M;f<v?(M=u,o+=1,o<e&&(u=n[o],f=c(u))):(M=d,l+=1,l<i&&(d=-t[l],v=c(d))),o<e&&f<v||l>=i?(x=u,o+=1,o<e&&(u=n[o],f=c(u))):(x=d,l+=1,l<i&&(d=-t[l],v=c(d)));for(var g=x+M,_=g-x,L=M-_,B=L,C=g,A,R,O,S,N;o<e&&l<i;)f<v?(x=u,o+=1,o<e&&(u=n[o],f=c(u))):(x=d,l+=1,l<i&&(d=-t[l],v=c(d))),M=B,g=x+M,_=g-x,L=M-_,L&&(s[a++]=L),A=C+g,R=A-C,O=A-R,S=g-R,N=C-O,B=N+S,C=A;for(;o<e;)x=u,M=B,g=x+M,_=g-x,L=M-_,L&&(s[a++]=L),A=C+g,R=A-C,O=A-R,S=g-R,N=C-O,B=N+S,C=A,o+=1,o<e&&(u=n[o]);for(;l<i;)x=d,M=B,g=x+M,_=g-x,L=M-_,L&&(s[a++]=L),A=C+g,R=A-C,O=A-R,S=g-R,N=C-O,B=N+S,C=A,l+=1,l<i&&(d=-t[l]);return B&&(s[a++]=B),C&&(s[a++]=C),a||(s[a++]=0),s.length=a,s}});var Nh=Bt((IA,Uh)=>{"use strict";var g1=Tl(),v1=Ch(),_1=Ph(),x1=Lh(),mp=5,Al=11102230246251565e-32,y1=(3+16*Al)*Al,M1=(7+56*Al)*Al;function S1(n,t,e,i){return function(s,a,o){var l=n(n(t(a[1],o[0]),t(-o[1],a[0])),n(t(s[1],a[0]),t(-a[1],s[0]))),c=n(t(s[1],o[0]),t(-o[1],s[0])),u=i(l,c);return u[u.length-1]}}function w1(n,t,e,i){return function(s,a,o,l){var c=n(n(e(n(t(o[1],l[0]),t(-l[1],o[0])),a[2]),n(e(n(t(a[1],l[0]),t(-l[1],a[0])),-o[2]),e(n(t(a[1],o[0]),t(-o[1],a[0])),l[2]))),n(e(n(t(a[1],l[0]),t(-l[1],a[0])),s[2]),n(e(n(t(s[1],l[0]),t(-l[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),l[2])))),u=n(n(e(n(t(o[1],l[0]),t(-l[1],o[0])),s[2]),n(e(n(t(s[1],l[0]),t(-l[1],s[0])),-o[2]),e(n(t(s[1],o[0]),t(-o[1],s[0])),l[2]))),n(e(n(t(a[1],o[0]),t(-o[1],a[0])),s[2]),n(e(n(t(s[1],o[0]),t(-o[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),o[2])))),f=i(c,u);return f[f.length-1]}}function b1(n,t,e,i){return function(s,a,o,l,c){var u=n(n(n(e(n(e(n(t(l[1],c[0]),t(-c[1],l[0])),o[2]),n(e(n(t(o[1],c[0]),t(-c[1],o[0])),-l[2]),e(n(t(o[1],l[0]),t(-l[1],o[0])),c[2]))),a[3]),n(e(n(e(n(t(l[1],c[0]),t(-c[1],l[0])),a[2]),n(e(n(t(a[1],c[0]),t(-c[1],a[0])),-l[2]),e(n(t(a[1],l[0]),t(-l[1],a[0])),c[2]))),-o[3]),e(n(e(n(t(o[1],c[0]),t(-c[1],o[0])),a[2]),n(e(n(t(a[1],c[0]),t(-c[1],a[0])),-o[2]),e(n(t(a[1],o[0]),t(-o[1],a[0])),c[2]))),l[3]))),n(e(n(e(n(t(o[1],l[0]),t(-l[1],o[0])),a[2]),n(e(n(t(a[1],l[0]),t(-l[1],a[0])),-o[2]),e(n(t(a[1],o[0]),t(-o[1],a[0])),l[2]))),-c[3]),n(e(n(e(n(t(l[1],c[0]),t(-c[1],l[0])),a[2]),n(e(n(t(a[1],c[0]),t(-c[1],a[0])),-l[2]),e(n(t(a[1],l[0]),t(-l[1],a[0])),c[2]))),s[3]),e(n(e(n(t(l[1],c[0]),t(-c[1],l[0])),s[2]),n(e(n(t(s[1],c[0]),t(-c[1],s[0])),-l[2]),e(n(t(s[1],l[0]),t(-l[1],s[0])),c[2]))),-a[3])))),n(n(e(n(e(n(t(a[1],c[0]),t(-c[1],a[0])),s[2]),n(e(n(t(s[1],c[0]),t(-c[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),c[2]))),l[3]),n(e(n(e(n(t(a[1],l[0]),t(-l[1],a[0])),s[2]),n(e(n(t(s[1],l[0]),t(-l[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),l[2]))),-c[3]),e(n(e(n(t(o[1],l[0]),t(-l[1],o[0])),a[2]),n(e(n(t(a[1],l[0]),t(-l[1],a[0])),-o[2]),e(n(t(a[1],o[0]),t(-o[1],a[0])),l[2]))),s[3]))),n(e(n(e(n(t(o[1],l[0]),t(-l[1],o[0])),s[2]),n(e(n(t(s[1],l[0]),t(-l[1],s[0])),-o[2]),e(n(t(s[1],o[0]),t(-o[1],s[0])),l[2]))),-a[3]),n(e(n(e(n(t(a[1],l[0]),t(-l[1],a[0])),s[2]),n(e(n(t(s[1],l[0]),t(-l[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),l[2]))),o[3]),e(n(e(n(t(a[1],o[0]),t(-o[1],a[0])),s[2]),n(e(n(t(s[1],o[0]),t(-o[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),o[2]))),-l[3]))))),f=n(n(n(e(n(e(n(t(l[1],c[0]),t(-c[1],l[0])),o[2]),n(e(n(t(o[1],c[0]),t(-c[1],o[0])),-l[2]),e(n(t(o[1],l[0]),t(-l[1],o[0])),c[2]))),s[3]),e(n(e(n(t(l[1],c[0]),t(-c[1],l[0])),s[2]),n(e(n(t(s[1],c[0]),t(-c[1],s[0])),-l[2]),e(n(t(s[1],l[0]),t(-l[1],s[0])),c[2]))),-o[3])),n(e(n(e(n(t(o[1],c[0]),t(-c[1],o[0])),s[2]),n(e(n(t(s[1],c[0]),t(-c[1],s[0])),-o[2]),e(n(t(s[1],o[0]),t(-o[1],s[0])),c[2]))),l[3]),e(n(e(n(t(o[1],l[0]),t(-l[1],o[0])),s[2]),n(e(n(t(s[1],l[0]),t(-l[1],s[0])),-o[2]),e(n(t(s[1],o[0]),t(-o[1],s[0])),l[2]))),-c[3]))),n(n(e(n(e(n(t(o[1],c[0]),t(-c[1],o[0])),a[2]),n(e(n(t(a[1],c[0]),t(-c[1],a[0])),-o[2]),e(n(t(a[1],o[0]),t(-o[1],a[0])),c[2]))),s[3]),e(n(e(n(t(o[1],c[0]),t(-c[1],o[0])),s[2]),n(e(n(t(s[1],c[0]),t(-c[1],s[0])),-o[2]),e(n(t(s[1],o[0]),t(-o[1],s[0])),c[2]))),-a[3])),n(e(n(e(n(t(a[1],c[0]),t(-c[1],a[0])),s[2]),n(e(n(t(s[1],c[0]),t(-c[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),c[2]))),o[3]),e(n(e(n(t(a[1],o[0]),t(-o[1],a[0])),s[2]),n(e(n(t(s[1],o[0]),t(-o[1],s[0])),-a[2]),e(n(t(s[1],a[0]),t(-a[1],s[0])),o[2]))),-c[3])))),d=i(u,f);return d[d.length-1]}}function Rl(n){var t=n===3?S1:n===4?w1:b1;return t(v1,g1,_1,x1)}var E1=Rl(3),T1=Rl(4),$i=[function(){return 0},function(){return 0},function(t,e){return e[0]-t[0]},function(t,e,i){var r=(t[1]-i[1])*(e[0]-i[0]),s=(t[0]-i[0])*(e[1]-i[1]),a=r-s,o;if(r>0){if(s<=0)return a;o=r+s}else if(r<0){if(s>=0)return a;o=-(r+s)}else return a;var l=y1*o;return a>=l||a<=-l?a:E1(t,e,i)},function(t,e,i,r){var s=t[0]-r[0],a=e[0]-r[0],o=i[0]-r[0],l=t[1]-r[1],c=e[1]-r[1],u=i[1]-r[1],f=t[2]-r[2],d=e[2]-r[2],v=i[2]-r[2],x=a*u,M=o*c,g=o*l,_=s*u,L=s*c,B=a*l,C=f*(x-M)+d*(g-_)+v*(L-B),A=(Math.abs(x)+Math.abs(M))*Math.abs(f)+(Math.abs(g)+Math.abs(_))*Math.abs(d)+(Math.abs(L)+Math.abs(B))*Math.abs(v),R=M1*A;return C>R||-C>R?C:T1(t,e,i,r)}];function A1(n){var t=$i[n.length];return t||(t=$i[n.length]=Rl(n.length)),t.apply(void 0,n)}function R1(n,t,e,i,r,s,a){return function(l,c,u,f,d){switch(arguments.length){case 0:case 1:return 0;case 2:return i(l,c);case 3:return r(l,c,u);case 4:return s(l,c,u,f);case 5:return a(l,c,u,f,d)}for(var v=new Array(arguments.length),x=0;x<arguments.length;++x)v[x]=arguments[x];return n(v)}}function C1(){for(;$i.length<=mp;)$i.push(Rl($i.length));Uh.exports=R1.apply(void 0,[A1].concat($i));for(var n=0;n<=mp;++n)Uh.exports[n]=$i[n]}C1()});var vp=Bt((PA,gp)=>{"use strict";gp.exports=P1;var Cl=Nh()[3];function I1(n,t,e,i){for(var r=0;r<2;++r){var s=n[r],a=t[r],o=Math.min(s,a),l=Math.max(s,a),c=e[r],u=i[r],f=Math.min(c,u),d=Math.max(c,u);if(d<o||l<f)return!1}return!0}function P1(n,t,e,i){var r=Cl(n,e,i),s=Cl(t,e,i);if(r>0&&s>0||r<0&&s<0)return!1;var a=Cl(e,n,t),o=Cl(i,n,t);return a>0&&o>0||a<0&&o<0?!1:r===0&&s===0&&a===0&&o===0?I1(n,t,e,i):!0}});var _p=Bt(()=>{});var na=Bt((xp,Dh)=>{(function(n,t){"use strict";function e(w,h){if(!w)throw new Error(h||"Assertion failed")}function i(w,h){w.super_=h;var m=function(){};m.prototype=h.prototype,w.prototype=new m,w.prototype.constructor=w}function r(w,h,m){if(r.isBN(w))return w;this.negative=0,this.words=null,this.length=0,this.red=null,w!==null&&((h==="le"||h==="be")&&(m=h,h=10),this._init(w||0,h||10,m||"be"))}typeof n=="object"?n.exports=r:t.BN=r,r.BN=r,r.wordSize=26;var s;try{typeof window<"u"&&typeof window.Buffer<"u"?s=window.Buffer:s=_p().Buffer}catch{}r.isBN=function(h){return h instanceof r?!0:h!==null&&typeof h=="object"&&h.constructor.wordSize===r.wordSize&&Array.isArray(h.words)},r.max=function(h,m){return h.cmp(m)>0?h:m},r.min=function(h,m){return h.cmp(m)<0?h:m},r.prototype._init=function(h,m,b){if(typeof h=="number")return this._initNumber(h,m,b);if(typeof h=="object")return this._initArray(h,m,b);m==="hex"&&(m=16),e(m===(m|0)&&m>=2&&m<=36),h=h.toString().replace(/\s+/g,"");var y=0;h[0]==="-"&&(y++,this.negative=1),y<h.length&&(m===16?this._parseHex(h,y,b):(this._parseBase(h,m,y),b==="le"&&this._initArray(this.toArray(),m,b)))},r.prototype._initNumber=function(h,m,b){h<0&&(this.negative=1,h=-h),h<67108864?(this.words=[h&67108863],this.length=1):h<4503599627370496?(this.words=[h&67108863,h/67108864&67108863],this.length=2):(e(h<9007199254740992),this.words=[h&67108863,h/67108864&67108863,1],this.length=3),b==="le"&&this._initArray(this.toArray(),m,b)},r.prototype._initArray=function(h,m,b){if(e(typeof h.length=="number"),h.length<=0)return this.words=[0],this.length=1,this;this.length=Math.ceil(h.length/3),this.words=new Array(this.length);for(var y=0;y<this.length;y++)this.words[y]=0;var E,D,F=0;if(b==="be")for(y=h.length-1,E=0;y>=0;y-=3)D=h[y]|h[y-1]<<8|h[y-2]<<16,this.words[E]|=D<<F&67108863,this.words[E+1]=D>>>26-F&67108863,F+=24,F>=26&&(F-=26,E++);else if(b==="le")for(y=0,E=0;y<h.length;y+=3)D=h[y]|h[y+1]<<8|h[y+2]<<16,this.words[E]|=D<<F&67108863,this.words[E+1]=D>>>26-F&67108863,F+=24,F>=26&&(F-=26,E++);return this.strip()};function a(w,h){var m=w.charCodeAt(h);return m>=65&&m<=70?m-55:m>=97&&m<=102?m-87:m-48&15}function o(w,h,m){var b=a(w,m);return m-1>=h&&(b|=a(w,m-1)<<4),b}r.prototype._parseHex=function(h,m,b){this.length=Math.ceil((h.length-m)/6),this.words=new Array(this.length);for(var y=0;y<this.length;y++)this.words[y]=0;var E=0,D=0,F;if(b==="be")for(y=h.length-1;y>=m;y-=2)F=o(h,m,y)<<E,this.words[D]|=F&67108863,E>=18?(E-=18,D+=1,this.words[D]|=F>>>26):E+=8;else{var I=h.length-m;for(y=I%2===0?m+1:m;y<h.length;y+=2)F=o(h,m,y)<<E,this.words[D]|=F&67108863,E>=18?(E-=18,D+=1,this.words[D]|=F>>>26):E+=8}this.strip()};function l(w,h,m,b){for(var y=0,E=Math.min(w.length,m),D=h;D<E;D++){var F=w.charCodeAt(D)-48;y*=b,F>=49?y+=F-49+10:F>=17?y+=F-17+10:y+=F}return y}r.prototype._parseBase=function(h,m,b){this.words=[0],this.length=1;for(var y=0,E=1;E<=67108863;E*=m)y++;y--,E=E/m|0;for(var D=h.length-b,F=D%y,I=Math.min(D,D-F)+b,p=0,P=b;P<I;P+=y)p=l(h,P,P+y,m),this.imuln(E),this.words[0]+p<67108864?this.words[0]+=p:this._iaddn(p);if(F!==0){var H=1;for(p=l(h,P,h.length,m),P=0;P<F;P++)H*=m;this.imuln(H),this.words[0]+p<67108864?this.words[0]+=p:this._iaddn(p)}this.strip()},r.prototype.copy=function(h){h.words=new Array(this.length);for(var m=0;m<this.length;m++)h.words[m]=this.words[m];h.length=this.length,h.negative=this.negative,h.red=this.red},r.prototype.clone=function(){var h=new r(null);return this.copy(h),h},r.prototype._expand=function(h){for(;this.length<h;)this.words[this.length++]=0;return this},r.prototype.strip=function(){for(;this.length>1&&this.words[this.length-1]===0;)this.length--;return this._normSign()},r.prototype._normSign=function(){return this.length===1&&this.words[0]===0&&(this.negative=0),this},r.prototype.inspect=function(){return(this.red?"<BN-R: ":"<BN: ")+this.toString(16)+">"};var c=["","0","00","000","0000","00000","000000","0000000","00000000","000000000","0000000000","00000000000","000000000000","0000000000000","00000000000000","000000000000000","0000000000000000","00000000000000000","000000000000000000","0000000000000000000","00000000000000000000","000000000000000000000","0000000000000000000000","00000000000000000000000","000000000000000000000000","0000000000000000000000000"],u=[0,0,25,16,12,11,10,9,8,8,7,7,7,7,6,6,6,6,6,6,6,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],f=[0,0,33554432,43046721,16777216,48828125,60466176,40353607,16777216,43046721,1e7,19487171,35831808,62748517,7529536,11390625,16777216,24137569,34012224,47045881,64e6,4084101,5153632,6436343,7962624,9765625,11881376,14348907,17210368,20511149,243e5,28629151,33554432,39135393,45435424,52521875,60466176];r.prototype.toString=function(h,m){h=h||10,m=m|0||1;var b;if(h===16||h==="hex"){b="";for(var y=0,E=0,D=0;D<this.length;D++){var F=this.words[D],I=((F<<y|E)&16777215).toString(16);E=F>>>24-y&16777215,y+=2,y>=26&&(y-=26,D--),E!==0||D!==this.length-1?b=c[6-I.length]+I+b:b=I+b}for(E!==0&&(b=E.toString(16)+b);b.length%m!==0;)b="0"+b;return this.negative!==0&&(b="-"+b),b}if(h===(h|0)&&h>=2&&h<=36){var p=u[h],P=f[h];b="";var H=this.clone();for(H.negative=0;!H.isZero();){var nt=H.modn(P).toString(h);H=H.idivn(P),H.isZero()?b=nt+b:b=c[p-nt.length]+nt+b}for(this.isZero()&&(b="0"+b);b.length%m!==0;)b="0"+b;return this.negative!==0&&(b="-"+b),b}e(!1,"Base should be between 2 and 36")},r.prototype.toNumber=function(){var h=this.words[0];return this.length===2?h+=this.words[1]*67108864:this.length===3&&this.words[2]===1?h+=4503599627370496+this.words[1]*67108864:this.length>2&&e(!1,"Number can only safely store up to 53 bits"),this.negative!==0?-h:h},r.prototype.toJSON=function(){return this.toString(16)},r.prototype.toBuffer=function(h,m){return e(typeof s<"u"),this.toArrayLike(s,h,m)},r.prototype.toArray=function(h,m){return this.toArrayLike(Array,h,m)},r.prototype.toArrayLike=function(h,m,b){var y=this.byteLength(),E=b||Math.max(1,y);e(y<=E,"byte array longer than desired length"),e(E>0,"Requested array length <= 0"),this.strip();var D=m==="le",F=new h(E),I,p,P=this.clone();if(D){for(p=0;!P.isZero();p++)I=P.andln(255),P.iushrn(8),F[p]=I;for(;p<E;p++)F[p]=0}else{for(p=0;p<E-y;p++)F[p]=0;for(p=0;!P.isZero();p++)I=P.andln(255),P.iushrn(8),F[E-p-1]=I}return F},Math.clz32?r.prototype._countBits=function(h){return 32-Math.clz32(h)}:r.prototype._countBits=function(h){var m=h,b=0;return m>=4096&&(b+=13,m>>>=13),m>=64&&(b+=7,m>>>=7),m>=8&&(b+=4,m>>>=4),m>=2&&(b+=2,m>>>=2),b+m},r.prototype._zeroBits=function(h){if(h===0)return 26;var m=h,b=0;return(m&8191)===0&&(b+=13,m>>>=13),(m&127)===0&&(b+=7,m>>>=7),(m&15)===0&&(b+=4,m>>>=4),(m&3)===0&&(b+=2,m>>>=2),(m&1)===0&&b++,b},r.prototype.bitLength=function(){var h=this.words[this.length-1],m=this._countBits(h);return(this.length-1)*26+m};function d(w){for(var h=new Array(w.bitLength()),m=0;m<h.length;m++){var b=m/26|0,y=m%26;h[m]=(w.words[b]&1<<y)>>>y}return h}r.prototype.zeroBits=function(){if(this.isZero())return 0;for(var h=0,m=0;m<this.length;m++){var b=this._zeroBits(this.words[m]);if(h+=b,b!==26)break}return h},r.prototype.byteLength=function(){return Math.ceil(this.bitLength()/8)},r.prototype.toTwos=function(h){return this.negative!==0?this.abs().inotn(h).iaddn(1):this.clone()},r.prototype.fromTwos=function(h){return this.testn(h-1)?this.notn(h).iaddn(1).ineg():this.clone()},r.prototype.isNeg=function(){return this.negative!==0},r.prototype.neg=function(){return this.clone().ineg()},r.prototype.ineg=function(){return this.isZero()||(this.negative^=1),this},r.prototype.iuor=function(h){for(;this.length<h.length;)this.words[this.length++]=0;for(var m=0;m<h.length;m++)this.words[m]=this.words[m]|h.words[m];return this.strip()},r.prototype.ior=function(h){return e((this.negative|h.negative)===0),this.iuor(h)},r.prototype.or=function(h){return this.length>h.length?this.clone().ior(h):h.clone().ior(this)},r.prototype.uor=function(h){return this.length>h.length?this.clone().iuor(h):h.clone().iuor(this)},r.prototype.iuand=function(h){var m;this.length>h.length?m=h:m=this;for(var b=0;b<m.length;b++)this.words[b]=this.words[b]&h.words[b];return this.length=m.length,this.strip()},r.prototype.iand=function(h){return e((this.negative|h.negative)===0),this.iuand(h)},r.prototype.and=function(h){return this.length>h.length?this.clone().iand(h):h.clone().iand(this)},r.prototype.uand=function(h){return this.length>h.length?this.clone().iuand(h):h.clone().iuand(this)},r.prototype.iuxor=function(h){var m,b;this.length>h.length?(m=this,b=h):(m=h,b=this);for(var y=0;y<b.length;y++)this.words[y]=m.words[y]^b.words[y];if(this!==m)for(;y<m.length;y++)this.words[y]=m.words[y];return this.length=m.length,this.strip()},r.prototype.ixor=function(h){return e((this.negative|h.negative)===0),this.iuxor(h)},r.prototype.xor=function(h){return this.length>h.length?this.clone().ixor(h):h.clone().ixor(this)},r.prototype.uxor=function(h){return this.length>h.length?this.clone().iuxor(h):h.clone().iuxor(this)},r.prototype.inotn=function(h){e(typeof h=="number"&&h>=0);var m=Math.ceil(h/26)|0,b=h%26;this._expand(m),b>0&&m--;for(var y=0;y<m;y++)this.words[y]=~this.words[y]&67108863;for(b>0&&(this.words[y]=~this.words[y]&67108863>>26-b,y++);y<this.length;y++)this.words[y]=0;return this.strip()},r.prototype.notn=function(h){return this.clone().inotn(h)},r.prototype.setn=function(h,m){e(typeof h=="number"&&h>=0);var b=h/26|0,y=h%26;return this._expand(b+1),m?this.words[b]=this.words[b]|1<<y:this.words[b]=this.words[b]&~(1<<y),this.strip()},r.prototype.iadd=function(h){var m;if(this.negative!==0&&h.negative===0)return this.negative=0,m=this.isub(h),this.negative^=1,this._normSign();if(this.negative===0&&h.negative!==0)return h.negative=0,m=this.isub(h),h.negative=1,m._normSign();var b,y;this.length>h.length?(b=this,y=h):(b=h,y=this);for(var E=0,D=0;D<y.length;D++)m=(b.words[D]|0)+(y.words[D]|0)+E,this.words[D]=m&67108863,E=m>>>26;for(;E!==0&&D<b.length;D++)m=(b.words[D]|0)+E,this.words[D]=m&67108863,E=m>>>26;if(this.length=b.length,E!==0)this.words[this.length]=E,this.length++;else if(b!==this)for(;D<b.length;D++)this.words[D]=b.words[D];return this},r.prototype.add=function(h){var m;return h.negative!==0&&this.negative===0?(h.negative=0,m=this.sub(h),h.negative^=1,m):h.negative===0&&this.negative!==0?(this.negative=0,m=h.sub(this),this.negative=1,m):this.length>h.length?this.clone().iadd(h):h.clone().iadd(this)},r.prototype.isub=function(h){if(h.negative!==0){h.negative=0;var m=this.iadd(h);return h.negative=1,m._normSign()}else if(this.negative!==0)return this.negative=0,this.iadd(h),this.negative=1,this._normSign();var b=this.cmp(h);if(b===0)return this.negative=0,this.length=1,this.words[0]=0,this;var y,E;b>0?(y=this,E=h):(y=h,E=this);for(var D=0,F=0;F<E.length;F++)m=(y.words[F]|0)-(E.words[F]|0)+D,D=m>>26,this.words[F]=m&67108863;for(;D!==0&&F<y.length;F++)m=(y.words[F]|0)+D,D=m>>26,this.words[F]=m&67108863;if(D===0&&F<y.length&&y!==this)for(;F<y.length;F++)this.words[F]=y.words[F];return this.length=Math.max(this.length,F),y!==this&&(this.negative=1),this.strip()},r.prototype.sub=function(h){return this.clone().isub(h)};function v(w,h,m){m.negative=h.negative^w.negative;var b=w.length+h.length|0;m.length=b,b=b-1|0;var y=w.words[0]|0,E=h.words[0]|0,D=y*E,F=D&67108863,I=D/67108864|0;m.words[0]=F;for(var p=1;p<b;p++){for(var P=I>>>26,H=I&67108863,nt=Math.min(p,h.length-1),et=Math.max(0,p-w.length+1);et<=nt;et++){var ut=p-et|0;y=w.words[ut]|0,E=h.words[et]|0,D=y*E+H,P+=D/67108864|0,H=D&67108863}m.words[p]=H|0,I=P|0}return I!==0?m.words[p]=I|0:m.length--,m.strip()}var x=function(h,m,b){var y=h.words,E=m.words,D=b.words,F=0,I,p,P,H=y[0]|0,nt=H&8191,et=H>>>13,ut=y[1]|0,Et=ut&8191,pt=ut>>>13,$=y[2]|0,q=$&8191,at=$>>>13,bt=y[3]|0,ft=bt&8191,Lt=bt>>>13,fe=y[4]|0,Nt=fe&8191,Ot=fe>>>13,le=y[5]|0,Dt=le&8191,Ht=le>>>13,Ee=y[6]|0,ee=Ee&8191,Xt=Ee>>>13,_e=y[7]|0,V=_e&8191,Jt=_e>>>13,re=y[8]|0,z=re&8191,T=re>>>13,W=y[9]|0,X=W&8191,K=W>>>13,dt=E[0]|0,ot=dt&8191,j=dt>>>13,st=E[1]|0,lt=st&8191,gt=st>>>13,vt=E[2]|0,ct=vt&8191,_t=vt>>>13,Ft=E[3]|0,Rt=Ft&8191,k=Ft>>>13,mt=E[4]|0,tt=mt&8191,ht=mt>>>13,Mt=E[5]|0,rt=Mt&8191,xt=Mt>>>13,Ct=E[6]|0,Gt=Ct&8191,kt=Ct>>>13,nn=E[7]|0,se=nn&8191,Se=nn>>>13,ca=E[8]|0,xe=ca&8191,me=ca>>>13,ha=E[9]|0,ye=ha&8191,Me=ha>>>13;b.negative=h.negative^m.negative,b.length=19,I=Math.imul(nt,ot),p=Math.imul(nt,j),p=p+Math.imul(et,ot)|0,P=Math.imul(et,j);var Mn=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(Mn>>>26)|0,Mn&=67108863,I=Math.imul(Et,ot),p=Math.imul(Et,j),p=p+Math.imul(pt,ot)|0,P=Math.imul(pt,j),I=I+Math.imul(nt,lt)|0,p=p+Math.imul(nt,gt)|0,p=p+Math.imul(et,lt)|0,P=P+Math.imul(et,gt)|0;var Li=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(Li>>>26)|0,Li&=67108863,I=Math.imul(q,ot),p=Math.imul(q,j),p=p+Math.imul(at,ot)|0,P=Math.imul(at,j),I=I+Math.imul(Et,lt)|0,p=p+Math.imul(Et,gt)|0,p=p+Math.imul(pt,lt)|0,P=P+Math.imul(pt,gt)|0,I=I+Math.imul(nt,ct)|0,p=p+Math.imul(nt,_t)|0,p=p+Math.imul(et,ct)|0,P=P+Math.imul(et,_t)|0;var er=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(er>>>26)|0,er&=67108863,I=Math.imul(ft,ot),p=Math.imul(ft,j),p=p+Math.imul(Lt,ot)|0,P=Math.imul(Lt,j),I=I+Math.imul(q,lt)|0,p=p+Math.imul(q,gt)|0,p=p+Math.imul(at,lt)|0,P=P+Math.imul(at,gt)|0,I=I+Math.imul(Et,ct)|0,p=p+Math.imul(Et,_t)|0,p=p+Math.imul(pt,ct)|0,P=P+Math.imul(pt,_t)|0,I=I+Math.imul(nt,Rt)|0,p=p+Math.imul(nt,k)|0,p=p+Math.imul(et,Rt)|0,P=P+Math.imul(et,k)|0;var nr=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(nr>>>26)|0,nr&=67108863,I=Math.imul(Nt,ot),p=Math.imul(Nt,j),p=p+Math.imul(Ot,ot)|0,P=Math.imul(Ot,j),I=I+Math.imul(ft,lt)|0,p=p+Math.imul(ft,gt)|0,p=p+Math.imul(Lt,lt)|0,P=P+Math.imul(Lt,gt)|0,I=I+Math.imul(q,ct)|0,p=p+Math.imul(q,_t)|0,p=p+Math.imul(at,ct)|0,P=P+Math.imul(at,_t)|0,I=I+Math.imul(Et,Rt)|0,p=p+Math.imul(Et,k)|0,p=p+Math.imul(pt,Rt)|0,P=P+Math.imul(pt,k)|0,I=I+Math.imul(nt,tt)|0,p=p+Math.imul(nt,ht)|0,p=p+Math.imul(et,tt)|0,P=P+Math.imul(et,ht)|0;var ri=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(ri>>>26)|0,ri&=67108863,I=Math.imul(Dt,ot),p=Math.imul(Dt,j),p=p+Math.imul(Ht,ot)|0,P=Math.imul(Ht,j),I=I+Math.imul(Nt,lt)|0,p=p+Math.imul(Nt,gt)|0,p=p+Math.imul(Ot,lt)|0,P=P+Math.imul(Ot,gt)|0,I=I+Math.imul(ft,ct)|0,p=p+Math.imul(ft,_t)|0,p=p+Math.imul(Lt,ct)|0,P=P+Math.imul(Lt,_t)|0,I=I+Math.imul(q,Rt)|0,p=p+Math.imul(q,k)|0,p=p+Math.imul(at,Rt)|0,P=P+Math.imul(at,k)|0,I=I+Math.imul(Et,tt)|0,p=p+Math.imul(Et,ht)|0,p=p+Math.imul(pt,tt)|0,P=P+Math.imul(pt,ht)|0,I=I+Math.imul(nt,rt)|0,p=p+Math.imul(nt,xt)|0,p=p+Math.imul(et,rt)|0,P=P+Math.imul(et,xt)|0;var ir=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(ir>>>26)|0,ir&=67108863,I=Math.imul(ee,ot),p=Math.imul(ee,j),p=p+Math.imul(Xt,ot)|0,P=Math.imul(Xt,j),I=I+Math.imul(Dt,lt)|0,p=p+Math.imul(Dt,gt)|0,p=p+Math.imul(Ht,lt)|0,P=P+Math.imul(Ht,gt)|0,I=I+Math.imul(Nt,ct)|0,p=p+Math.imul(Nt,_t)|0,p=p+Math.imul(Ot,ct)|0,P=P+Math.imul(Ot,_t)|0,I=I+Math.imul(ft,Rt)|0,p=p+Math.imul(ft,k)|0,p=p+Math.imul(Lt,Rt)|0,P=P+Math.imul(Lt,k)|0,I=I+Math.imul(q,tt)|0,p=p+Math.imul(q,ht)|0,p=p+Math.imul(at,tt)|0,P=P+Math.imul(at,ht)|0,I=I+Math.imul(Et,rt)|0,p=p+Math.imul(Et,xt)|0,p=p+Math.imul(pt,rt)|0,P=P+Math.imul(pt,xt)|0,I=I+Math.imul(nt,Gt)|0,p=p+Math.imul(nt,kt)|0,p=p+Math.imul(et,Gt)|0,P=P+Math.imul(et,kt)|0;var si=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(si>>>26)|0,si&=67108863,I=Math.imul(V,ot),p=Math.imul(V,j),p=p+Math.imul(Jt,ot)|0,P=Math.imul(Jt,j),I=I+Math.imul(ee,lt)|0,p=p+Math.imul(ee,gt)|0,p=p+Math.imul(Xt,lt)|0,P=P+Math.imul(Xt,gt)|0,I=I+Math.imul(Dt,ct)|0,p=p+Math.imul(Dt,_t)|0,p=p+Math.imul(Ht,ct)|0,P=P+Math.imul(Ht,_t)|0,I=I+Math.imul(Nt,Rt)|0,p=p+Math.imul(Nt,k)|0,p=p+Math.imul(Ot,Rt)|0,P=P+Math.imul(Ot,k)|0,I=I+Math.imul(ft,tt)|0,p=p+Math.imul(ft,ht)|0,p=p+Math.imul(Lt,tt)|0,P=P+Math.imul(Lt,ht)|0,I=I+Math.imul(q,rt)|0,p=p+Math.imul(q,xt)|0,p=p+Math.imul(at,rt)|0,P=P+Math.imul(at,xt)|0,I=I+Math.imul(Et,Gt)|0,p=p+Math.imul(Et,kt)|0,p=p+Math.imul(pt,Gt)|0,P=P+Math.imul(pt,kt)|0,I=I+Math.imul(nt,se)|0,p=p+Math.imul(nt,Se)|0,p=p+Math.imul(et,se)|0,P=P+Math.imul(et,Se)|0;var rr=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(rr>>>26)|0,rr&=67108863,I=Math.imul(z,ot),p=Math.imul(z,j),p=p+Math.imul(T,ot)|0,P=Math.imul(T,j),I=I+Math.imul(V,lt)|0,p=p+Math.imul(V,gt)|0,p=p+Math.imul(Jt,lt)|0,P=P+Math.imul(Jt,gt)|0,I=I+Math.imul(ee,ct)|0,p=p+Math.imul(ee,_t)|0,p=p+Math.imul(Xt,ct)|0,P=P+Math.imul(Xt,_t)|0,I=I+Math.imul(Dt,Rt)|0,p=p+Math.imul(Dt,k)|0,p=p+Math.imul(Ht,Rt)|0,P=P+Math.imul(Ht,k)|0,I=I+Math.imul(Nt,tt)|0,p=p+Math.imul(Nt,ht)|0,p=p+Math.imul(Ot,tt)|0,P=P+Math.imul(Ot,ht)|0,I=I+Math.imul(ft,rt)|0,p=p+Math.imul(ft,xt)|0,p=p+Math.imul(Lt,rt)|0,P=P+Math.imul(Lt,xt)|0,I=I+Math.imul(q,Gt)|0,p=p+Math.imul(q,kt)|0,p=p+Math.imul(at,Gt)|0,P=P+Math.imul(at,kt)|0,I=I+Math.imul(Et,se)|0,p=p+Math.imul(Et,Se)|0,p=p+Math.imul(pt,se)|0,P=P+Math.imul(pt,Se)|0,I=I+Math.imul(nt,xe)|0,p=p+Math.imul(nt,me)|0,p=p+Math.imul(et,xe)|0,P=P+Math.imul(et,me)|0;var sr=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(sr>>>26)|0,sr&=67108863,I=Math.imul(X,ot),p=Math.imul(X,j),p=p+Math.imul(K,ot)|0,P=Math.imul(K,j),I=I+Math.imul(z,lt)|0,p=p+Math.imul(z,gt)|0,p=p+Math.imul(T,lt)|0,P=P+Math.imul(T,gt)|0,I=I+Math.imul(V,ct)|0,p=p+Math.imul(V,_t)|0,p=p+Math.imul(Jt,ct)|0,P=P+Math.imul(Jt,_t)|0,I=I+Math.imul(ee,Rt)|0,p=p+Math.imul(ee,k)|0,p=p+Math.imul(Xt,Rt)|0,P=P+Math.imul(Xt,k)|0,I=I+Math.imul(Dt,tt)|0,p=p+Math.imul(Dt,ht)|0,p=p+Math.imul(Ht,tt)|0,P=P+Math.imul(Ht,ht)|0,I=I+Math.imul(Nt,rt)|0,p=p+Math.imul(Nt,xt)|0,p=p+Math.imul(Ot,rt)|0,P=P+Math.imul(Ot,xt)|0,I=I+Math.imul(ft,Gt)|0,p=p+Math.imul(ft,kt)|0,p=p+Math.imul(Lt,Gt)|0,P=P+Math.imul(Lt,kt)|0,I=I+Math.imul(q,se)|0,p=p+Math.imul(q,Se)|0,p=p+Math.imul(at,se)|0,P=P+Math.imul(at,Se)|0,I=I+Math.imul(Et,xe)|0,p=p+Math.imul(Et,me)|0,p=p+Math.imul(pt,xe)|0,P=P+Math.imul(pt,me)|0,I=I+Math.imul(nt,ye)|0,p=p+Math.imul(nt,Me)|0,p=p+Math.imul(et,ye)|0,P=P+Math.imul(et,Me)|0;var os=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(os>>>26)|0,os&=67108863,I=Math.imul(X,lt),p=Math.imul(X,gt),p=p+Math.imul(K,lt)|0,P=Math.imul(K,gt),I=I+Math.imul(z,ct)|0,p=p+Math.imul(z,_t)|0,p=p+Math.imul(T,ct)|0,P=P+Math.imul(T,_t)|0,I=I+Math.imul(V,Rt)|0,p=p+Math.imul(V,k)|0,p=p+Math.imul(Jt,Rt)|0,P=P+Math.imul(Jt,k)|0,I=I+Math.imul(ee,tt)|0,p=p+Math.imul(ee,ht)|0,p=p+Math.imul(Xt,tt)|0,P=P+Math.imul(Xt,ht)|0,I=I+Math.imul(Dt,rt)|0,p=p+Math.imul(Dt,xt)|0,p=p+Math.imul(Ht,rt)|0,P=P+Math.imul(Ht,xt)|0,I=I+Math.imul(Nt,Gt)|0,p=p+Math.imul(Nt,kt)|0,p=p+Math.imul(Ot,Gt)|0,P=P+Math.imul(Ot,kt)|0,I=I+Math.imul(ft,se)|0,p=p+Math.imul(ft,Se)|0,p=p+Math.imul(Lt,se)|0,P=P+Math.imul(Lt,Se)|0,I=I+Math.imul(q,xe)|0,p=p+Math.imul(q,me)|0,p=p+Math.imul(at,xe)|0,P=P+Math.imul(at,me)|0,I=I+Math.imul(Et,ye)|0,p=p+Math.imul(Et,Me)|0,p=p+Math.imul(pt,ye)|0,P=P+Math.imul(pt,Me)|0;var ls=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(ls>>>26)|0,ls&=67108863,I=Math.imul(X,ct),p=Math.imul(X,_t),p=p+Math.imul(K,ct)|0,P=Math.imul(K,_t),I=I+Math.imul(z,Rt)|0,p=p+Math.imul(z,k)|0,p=p+Math.imul(T,Rt)|0,P=P+Math.imul(T,k)|0,I=I+Math.imul(V,tt)|0,p=p+Math.imul(V,ht)|0,p=p+Math.imul(Jt,tt)|0,P=P+Math.imul(Jt,ht)|0,I=I+Math.imul(ee,rt)|0,p=p+Math.imul(ee,xt)|0,p=p+Math.imul(Xt,rt)|0,P=P+Math.imul(Xt,xt)|0,I=I+Math.imul(Dt,Gt)|0,p=p+Math.imul(Dt,kt)|0,p=p+Math.imul(Ht,Gt)|0,P=P+Math.imul(Ht,kt)|0,I=I+Math.imul(Nt,se)|0,p=p+Math.imul(Nt,Se)|0,p=p+Math.imul(Ot,se)|0,P=P+Math.imul(Ot,Se)|0,I=I+Math.imul(ft,xe)|0,p=p+Math.imul(ft,me)|0,p=p+Math.imul(Lt,xe)|0,P=P+Math.imul(Lt,me)|0,I=I+Math.imul(q,ye)|0,p=p+Math.imul(q,Me)|0,p=p+Math.imul(at,ye)|0,P=P+Math.imul(at,Me)|0;var cs=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(cs>>>26)|0,cs&=67108863,I=Math.imul(X,Rt),p=Math.imul(X,k),p=p+Math.imul(K,Rt)|0,P=Math.imul(K,k),I=I+Math.imul(z,tt)|0,p=p+Math.imul(z,ht)|0,p=p+Math.imul(T,tt)|0,P=P+Math.imul(T,ht)|0,I=I+Math.imul(V,rt)|0,p=p+Math.imul(V,xt)|0,p=p+Math.imul(Jt,rt)|0,P=P+Math.imul(Jt,xt)|0,I=I+Math.imul(ee,Gt)|0,p=p+Math.imul(ee,kt)|0,p=p+Math.imul(Xt,Gt)|0,P=P+Math.imul(Xt,kt)|0,I=I+Math.imul(Dt,se)|0,p=p+Math.imul(Dt,Se)|0,p=p+Math.imul(Ht,se)|0,P=P+Math.imul(Ht,Se)|0,I=I+Math.imul(Nt,xe)|0,p=p+Math.imul(Nt,me)|0,p=p+Math.imul(Ot,xe)|0,P=P+Math.imul(Ot,me)|0,I=I+Math.imul(ft,ye)|0,p=p+Math.imul(ft,Me)|0,p=p+Math.imul(Lt,ye)|0,P=P+Math.imul(Lt,Me)|0;var hs=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(hs>>>26)|0,hs&=67108863,I=Math.imul(X,tt),p=Math.imul(X,ht),p=p+Math.imul(K,tt)|0,P=Math.imul(K,ht),I=I+Math.imul(z,rt)|0,p=p+Math.imul(z,xt)|0,p=p+Math.imul(T,rt)|0,P=P+Math.imul(T,xt)|0,I=I+Math.imul(V,Gt)|0,p=p+Math.imul(V,kt)|0,p=p+Math.imul(Jt,Gt)|0,P=P+Math.imul(Jt,kt)|0,I=I+Math.imul(ee,se)|0,p=p+Math.imul(ee,Se)|0,p=p+Math.imul(Xt,se)|0,P=P+Math.imul(Xt,Se)|0,I=I+Math.imul(Dt,xe)|0,p=p+Math.imul(Dt,me)|0,p=p+Math.imul(Ht,xe)|0,P=P+Math.imul(Ht,me)|0,I=I+Math.imul(Nt,ye)|0,p=p+Math.imul(Nt,Me)|0,p=p+Math.imul(Ot,ye)|0,P=P+Math.imul(Ot,Me)|0;var ar=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(ar>>>26)|0,ar&=67108863,I=Math.imul(X,rt),p=Math.imul(X,xt),p=p+Math.imul(K,rt)|0,P=Math.imul(K,xt),I=I+Math.imul(z,Gt)|0,p=p+Math.imul(z,kt)|0,p=p+Math.imul(T,Gt)|0,P=P+Math.imul(T,kt)|0,I=I+Math.imul(V,se)|0,p=p+Math.imul(V,Se)|0,p=p+Math.imul(Jt,se)|0,P=P+Math.imul(Jt,Se)|0,I=I+Math.imul(ee,xe)|0,p=p+Math.imul(ee,me)|0,p=p+Math.imul(Xt,xe)|0,P=P+Math.imul(Xt,me)|0,I=I+Math.imul(Dt,ye)|0,p=p+Math.imul(Dt,Me)|0,p=p+Math.imul(Ht,ye)|0,P=P+Math.imul(Ht,Me)|0;var U=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(U>>>26)|0,U&=67108863,I=Math.imul(X,Gt),p=Math.imul(X,kt),p=p+Math.imul(K,Gt)|0,P=Math.imul(K,kt),I=I+Math.imul(z,se)|0,p=p+Math.imul(z,Se)|0,p=p+Math.imul(T,se)|0,P=P+Math.imul(T,Se)|0,I=I+Math.imul(V,xe)|0,p=p+Math.imul(V,me)|0,p=p+Math.imul(Jt,xe)|0,P=P+Math.imul(Jt,me)|0,I=I+Math.imul(ee,ye)|0,p=p+Math.imul(ee,Me)|0,p=p+Math.imul(Xt,ye)|0,P=P+Math.imul(Xt,Me)|0;var G=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(G>>>26)|0,G&=67108863,I=Math.imul(X,se),p=Math.imul(X,Se),p=p+Math.imul(K,se)|0,P=Math.imul(K,Se),I=I+Math.imul(z,xe)|0,p=p+Math.imul(z,me)|0,p=p+Math.imul(T,xe)|0,P=P+Math.imul(T,me)|0,I=I+Math.imul(V,ye)|0,p=p+Math.imul(V,Me)|0,p=p+Math.imul(Jt,ye)|0,P=P+Math.imul(Jt,Me)|0;var Q=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(Q>>>26)|0,Q&=67108863,I=Math.imul(X,xe),p=Math.imul(X,me),p=p+Math.imul(K,xe)|0,P=Math.imul(K,me),I=I+Math.imul(z,ye)|0,p=p+Math.imul(z,Me)|0,p=p+Math.imul(T,ye)|0,P=P+Math.imul(T,Me)|0;var Y=(F+I|0)+((p&8191)<<13)|0;F=(P+(p>>>13)|0)+(Y>>>26)|0,Y&=67108863,I=Math.imul(X,ye),p=Math.imul(X,Me),p=p+Math.imul(K,ye)|0,P=Math.imul(K,Me);var Z=(F+I|0)+((p&8191)<<13)|0;return F=(P+(p>>>13)|0)+(Z>>>26)|0,Z&=67108863,D[0]=Mn,D[1]=Li,D[2]=er,D[3]=nr,D[4]=ri,D[5]=ir,D[6]=si,D[7]=rr,D[8]=sr,D[9]=os,D[10]=ls,D[11]=cs,D[12]=hs,D[13]=ar,D[14]=U,D[15]=G,D[16]=Q,D[17]=Y,D[18]=Z,F!==0&&(D[19]=F,b.length++),b};Math.imul||(x=v);function M(w,h,m){m.negative=h.negative^w.negative,m.length=w.length+h.length;for(var b=0,y=0,E=0;E<m.length-1;E++){var D=y;y=0;for(var F=b&67108863,I=Math.min(E,h.length-1),p=Math.max(0,E-w.length+1);p<=I;p++){var P=E-p,H=w.words[P]|0,nt=h.words[p]|0,et=H*nt,ut=et&67108863;D=D+(et/67108864|0)|0,ut=ut+F|0,F=ut&67108863,D=D+(ut>>>26)|0,y+=D>>>26,D&=67108863}m.words[E]=F,b=D,D=y}return b!==0?m.words[E]=b:m.length--,m.strip()}function g(w,h,m){var b=new _;return b.mulp(w,h,m)}r.prototype.mulTo=function(h,m){var b,y=this.length+h.length;return this.length===10&&h.length===10?b=x(this,h,m):y<63?b=v(this,h,m):y<1024?b=M(this,h,m):b=g(this,h,m),b};function _(w,h){this.x=w,this.y=h}_.prototype.makeRBT=function(h){for(var m=new Array(h),b=r.prototype._countBits(h)-1,y=0;y<h;y++)m[y]=this.revBin(y,b,h);return m},_.prototype.revBin=function(h,m,b){if(h===0||h===b-1)return h;for(var y=0,E=0;E<m;E++)y|=(h&1)<<m-E-1,h>>=1;return y},_.prototype.permute=function(h,m,b,y,E,D){for(var F=0;F<D;F++)y[F]=m[h[F]],E[F]=b[h[F]]},_.prototype.transform=function(h,m,b,y,E,D){this.permute(D,h,m,b,y,E);for(var F=1;F<E;F<<=1)for(var I=F<<1,p=Math.cos(2*Math.PI/I),P=Math.sin(2*Math.PI/I),H=0;H<E;H+=I)for(var nt=p,et=P,ut=0;ut<F;ut++){var Et=b[H+ut],pt=y[H+ut],$=b[H+ut+F],q=y[H+ut+F],at=nt*$-et*q;q=nt*q+et*$,$=at,b[H+ut]=Et+$,y[H+ut]=pt+q,b[H+ut+F]=Et-$,y[H+ut+F]=pt-q,ut!==I&&(at=p*nt-P*et,et=p*et+P*nt,nt=at)}},_.prototype.guessLen13b=function(h,m){var b=Math.max(m,h)|1,y=b&1,E=0;for(b=b/2|0;b;b=b>>>1)E++;return 1<<E+1+y},_.prototype.conjugate=function(h,m,b){if(!(b<=1))for(var y=0;y<b/2;y++){var E=h[y];h[y]=h[b-y-1],h[b-y-1]=E,E=m[y],m[y]=-m[b-y-1],m[b-y-1]=-E}},_.prototype.normalize13b=function(h,m){for(var b=0,y=0;y<m/2;y++){var E=Math.round(h[2*y+1]/m)*8192+Math.round(h[2*y]/m)+b;h[y]=E&67108863,E<67108864?b=0:b=E/67108864|0}return h},_.prototype.convert13b=function(h,m,b,y){for(var E=0,D=0;D<m;D++)E=E+(h[D]|0),b[2*D]=E&8191,E=E>>>13,b[2*D+1]=E&8191,E=E>>>13;for(D=2*m;D<y;++D)b[D]=0;e(E===0),e((E&-8192)===0)},_.prototype.stub=function(h){for(var m=new Array(h),b=0;b<h;b++)m[b]=0;return m},_.prototype.mulp=function(h,m,b){var y=2*this.guessLen13b(h.length,m.length),E=this.makeRBT(y),D=this.stub(y),F=new Array(y),I=new Array(y),p=new Array(y),P=new Array(y),H=new Array(y),nt=new Array(y),et=b.words;et.length=y,this.convert13b(h.words,h.length,F,y),this.convert13b(m.words,m.length,P,y),this.transform(F,D,I,p,y,E),this.transform(P,D,H,nt,y,E);for(var ut=0;ut<y;ut++){var Et=I[ut]*H[ut]-p[ut]*nt[ut];p[ut]=I[ut]*nt[ut]+p[ut]*H[ut],I[ut]=Et}return this.conjugate(I,p,y),this.transform(I,p,et,D,y,E),this.conjugate(et,D,y),this.normalize13b(et,y),b.negative=h.negative^m.negative,b.length=h.length+m.length,b.strip()},r.prototype.mul=function(h){var m=new r(null);return m.words=new Array(this.length+h.length),this.mulTo(h,m)},r.prototype.mulf=function(h){var m=new r(null);return m.words=new Array(this.length+h.length),g(this,h,m)},r.prototype.imul=function(h){return this.clone().mulTo(h,this)},r.prototype.imuln=function(h){e(typeof h=="number"),e(h<67108864);for(var m=0,b=0;b<this.length;b++){var y=(this.words[b]|0)*h,E=(y&67108863)+(m&67108863);m>>=26,m+=y/67108864|0,m+=E>>>26,this.words[b]=E&67108863}return m!==0&&(this.words[b]=m,this.length++),h===0&&(this.length=1,this._normSign()),this},r.prototype.muln=function(h){return this.clone().imuln(h)},r.prototype.sqr=function(){return this.mul(this)},r.prototype.isqr=function(){return this.imul(this.clone())},r.prototype.pow=function(h){var m=d(h);if(m.length===0)return new r(1);for(var b=this,y=0;y<m.length&&m[y]===0;y++,b=b.sqr());if(++y<m.length)for(var E=b.sqr();y<m.length;y++,E=E.sqr())m[y]!==0&&(b=b.mul(E));return b},r.prototype.iushln=function(h){e(typeof h=="number"&&h>=0);var m=h%26,b=(h-m)/26,y=67108863>>>26-m<<26-m,E;if(m!==0){var D=0;for(E=0;E<this.length;E++){var F=this.words[E]&y,I=(this.words[E]|0)-F<<m;this.words[E]=I|D,D=F>>>26-m}D&&(this.words[E]=D,this.length++)}if(b!==0){for(E=this.length-1;E>=0;E--)this.words[E+b]=this.words[E];for(E=0;E<b;E++)this.words[E]=0;this.length+=b}return this.strip()},r.prototype.ishln=function(h){return e(this.negative===0),this.iushln(h)},r.prototype.iushrn=function(h,m,b){e(typeof h=="number"&&h>=0);var y;m?y=(m-m%26)/26:y=0;var E=h%26,D=Math.min((h-E)/26,this.length),F=67108863^67108863>>>E<<E,I=b;if(y-=D,y=Math.max(0,y),I){for(var p=0;p<D;p++)I.words[p]=this.words[p];I.length=D}if(D!==0)if(this.length>D)for(this.length-=D,p=0;p<this.length;p++)this.words[p]=this.words[p+D];else this.words[0]=0,this.length=1;var P=0;for(p=this.length-1;p>=0&&(P!==0||p>=y);p--){var H=this.words[p]|0;this.words[p]=P<<26-E|H>>>E,P=H&F}return I&&P!==0&&(I.words[I.length++]=P),this.length===0&&(this.words[0]=0,this.length=1),this.strip()},r.prototype.ishrn=function(h,m,b){return e(this.negative===0),this.iushrn(h,m,b)},r.prototype.shln=function(h){return this.clone().ishln(h)},r.prototype.ushln=function(h){return this.clone().iushln(h)},r.prototype.shrn=function(h){return this.clone().ishrn(h)},r.prototype.ushrn=function(h){return this.clone().iushrn(h)},r.prototype.testn=function(h){e(typeof h=="number"&&h>=0);var m=h%26,b=(h-m)/26,y=1<<m;if(this.length<=b)return!1;var E=this.words[b];return!!(E&y)},r.prototype.imaskn=function(h){e(typeof h=="number"&&h>=0);var m=h%26,b=(h-m)/26;if(e(this.negative===0,"imaskn works only with positive numbers"),this.length<=b)return this;if(m!==0&&b++,this.length=Math.min(b,this.length),m!==0){var y=67108863^67108863>>>m<<m;this.words[this.length-1]&=y}return this.length===0&&(this.words[0]=0,this.length=1),this.strip()},r.prototype.maskn=function(h){return this.clone().imaskn(h)},r.prototype.iaddn=function(h){return e(typeof h=="number"),e(h<67108864),h<0?this.isubn(-h):this.negative!==0?this.length===1&&(this.words[0]|0)<h?(this.words[0]=h-(this.words[0]|0),this.negative=0,this):(this.negative=0,this.isubn(h),this.negative=1,this):this._iaddn(h)},r.prototype._iaddn=function(h){this.words[0]+=h;for(var m=0;m<this.length&&this.words[m]>=67108864;m++)this.words[m]-=67108864,m===this.length-1?this.words[m+1]=1:this.words[m+1]++;return this.length=Math.max(this.length,m+1),this},r.prototype.isubn=function(h){if(e(typeof h=="number"),e(h<67108864),h<0)return this.iaddn(-h);if(this.negative!==0)return this.negative=0,this.iaddn(h),this.negative=1,this;if(this.words[0]-=h,this.length===1&&this.words[0]<0)this.words[0]=-this.words[0],this.negative=1;else for(var m=0;m<this.length&&this.words[m]<0;m++)this.words[m]+=67108864,this.words[m+1]-=1;return this.strip()},r.prototype.addn=function(h){return this.clone().iaddn(h)},r.prototype.subn=function(h){return this.clone().isubn(h)},r.prototype.iabs=function(){return this.negative=0,this},r.prototype.abs=function(){return this.clone().iabs()},r.prototype._ishlnsubmul=function(h,m,b){var y=h.length+b,E;this._expand(y);var D,F=0;for(E=0;E<h.length;E++){D=(this.words[E+b]|0)+F;var I=(h.words[E]|0)*m;D-=I&67108863,F=(D>>26)-(I/67108864|0),this.words[E+b]=D&67108863}for(;E<this.length-b;E++)D=(this.words[E+b]|0)+F,F=D>>26,this.words[E+b]=D&67108863;if(F===0)return this.strip();for(e(F===-1),F=0,E=0;E<this.length;E++)D=-(this.words[E]|0)+F,F=D>>26,this.words[E]=D&67108863;return this.negative=1,this.strip()},r.prototype._wordDiv=function(h,m){var b=this.length-h.length,y=this.clone(),E=h,D=E.words[E.length-1]|0,F=this._countBits(D);b=26-F,b!==0&&(E=E.ushln(b),y.iushln(b),D=E.words[E.length-1]|0);var I=y.length-E.length,p;if(m!=="mod"){p=new r(null),p.length=I+1,p.words=new Array(p.length);for(var P=0;P<p.length;P++)p.words[P]=0}var H=y.clone()._ishlnsubmul(E,1,I);H.negative===0&&(y=H,p&&(p.words[I]=1));for(var nt=I-1;nt>=0;nt--){var et=(y.words[E.length+nt]|0)*67108864+(y.words[E.length+nt-1]|0);for(et=Math.min(et/D|0,67108863),y._ishlnsubmul(E,et,nt);y.negative!==0;)et--,y.negative=0,y._ishlnsubmul(E,1,nt),y.isZero()||(y.negative^=1);p&&(p.words[nt]=et)}return p&&p.strip(),y.strip(),m!=="div"&&b!==0&&y.iushrn(b),{div:p||null,mod:y}},r.prototype.divmod=function(h,m,b){if(e(!h.isZero()),this.isZero())return{div:new r(0),mod:new r(0)};var y,E,D;return this.negative!==0&&h.negative===0?(D=this.neg().divmod(h,m),m!=="mod"&&(y=D.div.neg()),m!=="div"&&(E=D.mod.neg(),b&&E.negative!==0&&E.iadd(h)),{div:y,mod:E}):this.negative===0&&h.negative!==0?(D=this.divmod(h.neg(),m),m!=="mod"&&(y=D.div.neg()),{div:y,mod:D.mod}):(this.negative&h.negative)!==0?(D=this.neg().divmod(h.neg(),m),m!=="div"&&(E=D.mod.neg(),b&&E.negative!==0&&E.isub(h)),{div:D.div,mod:E}):h.length>this.length||this.cmp(h)<0?{div:new r(0),mod:this}:h.length===1?m==="div"?{div:this.divn(h.words[0]),mod:null}:m==="mod"?{div:null,mod:new r(this.modn(h.words[0]))}:{div:this.divn(h.words[0]),mod:new r(this.modn(h.words[0]))}:this._wordDiv(h,m)},r.prototype.div=function(h){return this.divmod(h,"div",!1).div},r.prototype.mod=function(h){return this.divmod(h,"mod",!1).mod},r.prototype.umod=function(h){return this.divmod(h,"mod",!0).mod},r.prototype.divRound=function(h){var m=this.divmod(h);if(m.mod.isZero())return m.div;var b=m.mod.abs(),y=h.abs().iushrn(1),E=h.words[0]&1,D=b.cmp(y);if(D<0||E===1&&D===0)return m.div;var F=new r(1);return F.negative=this.negative^h.negative,m.div.iadd(F)},r.prototype.modn=function(h){e(h<=67108863);for(var m=(1<<26)%h,b=0,y=this.length-1;y>=0;y--)b=(m*b+(this.words[y]|0))%h;return b},r.prototype.idivn=function(h){e(h<=67108863);for(var m=0,b=this.length-1;b>=0;b--){var y=(this.words[b]|0)+m*67108864;this.words[b]=y/h|0,m=y%h}return this.strip()},r.prototype.divn=function(h){return this.clone().idivn(h)},r.prototype.egcd=function(h){e(h.negative===0),e(!h.isZero());var m=this,b=h.clone();m.negative!==0?m=m.umod(h):m=m.clone();for(var y=new r(1),E=new r(0),D=new r(0),F=new r(1),I=0;m.isEven()&&b.isEven();)m.iushrn(1),b.iushrn(1),++I;for(var p=b.clone(),P=m.clone();!m.isZero();){for(var H=0,nt=1;(m.words[0]&nt)===0&&H<26;++H,nt<<=1);if(H>0)for(m.iushrn(H);H-- >0;)(y.isOdd()||E.isOdd())&&(y.iadd(p),E.isub(P)),y.iushrn(1),E.iushrn(1);for(var et=0,ut=1;(b.words[0]&ut)===0&&et<26;++et,ut<<=1);if(et>0)for(b.iushrn(et);et-- >0;)(D.isOdd()||F.isOdd())&&(D.iadd(p),F.isub(P)),D.iushrn(1),F.iushrn(1);m.cmp(b)>=0?(m.isub(b),y.isub(D),E.isub(F)):(b.isub(m),D.isub(y),F.isub(E))}return{a:D,b:F,gcd:b.iushln(I)}},r.prototype._invmp=function(h){e(h.negative===0),e(!h.isZero());var m=this,b=h.clone();m.negative!==0?m=m.umod(h):m=m.clone();for(var y=new r(1),E=new r(0),D=b.clone();m.cmpn(1)>0&&b.cmpn(1)>0;){for(var F=0,I=1;(m.words[0]&I)===0&&F<26;++F,I<<=1);if(F>0)for(m.iushrn(F);F-- >0;)y.isOdd()&&y.iadd(D),y.iushrn(1);for(var p=0,P=1;(b.words[0]&P)===0&&p<26;++p,P<<=1);if(p>0)for(b.iushrn(p);p-- >0;)E.isOdd()&&E.iadd(D),E.iushrn(1);m.cmp(b)>=0?(m.isub(b),y.isub(E)):(b.isub(m),E.isub(y))}var H;return m.cmpn(1)===0?H=y:H=E,H.cmpn(0)<0&&H.iadd(h),H},r.prototype.gcd=function(h){if(this.isZero())return h.abs();if(h.isZero())return this.abs();var m=this.clone(),b=h.clone();m.negative=0,b.negative=0;for(var y=0;m.isEven()&&b.isEven();y++)m.iushrn(1),b.iushrn(1);do{for(;m.isEven();)m.iushrn(1);for(;b.isEven();)b.iushrn(1);var E=m.cmp(b);if(E<0){var D=m;m=b,b=D}else if(E===0||b.cmpn(1)===0)break;m.isub(b)}while(!0);return b.iushln(y)},r.prototype.invm=function(h){return this.egcd(h).a.umod(h)},r.prototype.isEven=function(){return(this.words[0]&1)===0},r.prototype.isOdd=function(){return(this.words[0]&1)===1},r.prototype.andln=function(h){return this.words[0]&h},r.prototype.bincn=function(h){e(typeof h=="number");var m=h%26,b=(h-m)/26,y=1<<m;if(this.length<=b)return this._expand(b+1),this.words[b]|=y,this;for(var E=y,D=b;E!==0&&D<this.length;D++){var F=this.words[D]|0;F+=E,E=F>>>26,F&=67108863,this.words[D]=F}return E!==0&&(this.words[D]=E,this.length++),this},r.prototype.isZero=function(){return this.length===1&&this.words[0]===0},r.prototype.cmpn=function(h){var m=h<0;if(this.negative!==0&&!m)return-1;if(this.negative===0&&m)return 1;this.strip();var b;if(this.length>1)b=1;else{m&&(h=-h),e(h<=67108863,"Number is too big");var y=this.words[0]|0;b=y===h?0:y<h?-1:1}return this.negative!==0?-b|0:b},r.prototype.cmp=function(h){if(this.negative!==0&&h.negative===0)return-1;if(this.negative===0&&h.negative!==0)return 1;var m=this.ucmp(h);return this.negative!==0?-m|0:m},r.prototype.ucmp=function(h){if(this.length>h.length)return 1;if(this.length<h.length)return-1;for(var m=0,b=this.length-1;b>=0;b--){var y=this.words[b]|0,E=h.words[b]|0;if(y!==E){y<E?m=-1:y>E&&(m=1);break}}return m},r.prototype.gtn=function(h){return this.cmpn(h)===1},r.prototype.gt=function(h){return this.cmp(h)===1},r.prototype.gten=function(h){return this.cmpn(h)>=0},r.prototype.gte=function(h){return this.cmp(h)>=0},r.prototype.ltn=function(h){return this.cmpn(h)===-1},r.prototype.lt=function(h){return this.cmp(h)===-1},r.prototype.lten=function(h){return this.cmpn(h)<=0},r.prototype.lte=function(h){return this.cmp(h)<=0},r.prototype.eqn=function(h){return this.cmpn(h)===0},r.prototype.eq=function(h){return this.cmp(h)===0},r.red=function(h){return new S(h)},r.prototype.toRed=function(h){return e(!this.red,"Already a number in reduction context"),e(this.negative===0,"red works only with positives"),h.convertTo(this)._forceRed(h)},r.prototype.fromRed=function(){return e(this.red,"fromRed works only with numbers in reduction context"),this.red.convertFrom(this)},r.prototype._forceRed=function(h){return this.red=h,this},r.prototype.forceRed=function(h){return e(!this.red,"Already a number in reduction context"),this._forceRed(h)},r.prototype.redAdd=function(h){return e(this.red,"redAdd works only with red numbers"),this.red.add(this,h)},r.prototype.redIAdd=function(h){return e(this.red,"redIAdd works only with red numbers"),this.red.iadd(this,h)},r.prototype.redSub=function(h){return e(this.red,"redSub works only with red numbers"),this.red.sub(this,h)},r.prototype.redISub=function(h){return e(this.red,"redISub works only with red numbers"),this.red.isub(this,h)},r.prototype.redShl=function(h){return e(this.red,"redShl works only with red numbers"),this.red.shl(this,h)},r.prototype.redMul=function(h){return e(this.red,"redMul works only with red numbers"),this.red._verify2(this,h),this.red.mul(this,h)},r.prototype.redIMul=function(h){return e(this.red,"redMul works only with red numbers"),this.red._verify2(this,h),this.red.imul(this,h)},r.prototype.redSqr=function(){return e(this.red,"redSqr works only with red numbers"),this.red._verify1(this),this.red.sqr(this)},r.prototype.redISqr=function(){return e(this.red,"redISqr works only with red numbers"),this.red._verify1(this),this.red.isqr(this)},r.prototype.redSqrt=function(){return e(this.red,"redSqrt works only with red numbers"),this.red._verify1(this),this.red.sqrt(this)},r.prototype.redInvm=function(){return e(this.red,"redInvm works only with red numbers"),this.red._verify1(this),this.red.invm(this)},r.prototype.redNeg=function(){return e(this.red,"redNeg works only with red numbers"),this.red._verify1(this),this.red.neg(this)},r.prototype.redPow=function(h){return e(this.red&&!h.red,"redPow(normalNum)"),this.red._verify1(this),this.red.pow(this,h)};var L={k256:null,p224:null,p192:null,p25519:null};function B(w,h){this.name=w,this.p=new r(h,16),this.n=this.p.bitLength(),this.k=new r(1).iushln(this.n).isub(this.p),this.tmp=this._tmp()}B.prototype._tmp=function(){var h=new r(null);return h.words=new Array(Math.ceil(this.n/13)),h},B.prototype.ireduce=function(h){var m=h,b;do this.split(m,this.tmp),m=this.imulK(m),m=m.iadd(this.tmp),b=m.bitLength();while(b>this.n);var y=b<this.n?-1:m.ucmp(this.p);return y===0?(m.words[0]=0,m.length=1):y>0?m.isub(this.p):m.strip!==void 0?m.strip():m._strip(),m},B.prototype.split=function(h,m){h.iushrn(this.n,0,m)},B.prototype.imulK=function(h){return h.imul(this.k)};function C(){B.call(this,"k256","ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")}i(C,B),C.prototype.split=function(h,m){for(var b=4194303,y=Math.min(h.length,9),E=0;E<y;E++)m.words[E]=h.words[E];if(m.length=y,h.length<=9){h.words[0]=0,h.length=1;return}var D=h.words[9];for(m.words[m.length++]=D&b,E=10;E<h.length;E++){var F=h.words[E]|0;h.words[E-10]=(F&b)<<4|D>>>22,D=F}D>>>=22,h.words[E-10]=D,D===0&&h.length>10?h.length-=10:h.length-=9},C.prototype.imulK=function(h){h.words[h.length]=0,h.words[h.length+1]=0,h.length+=2;for(var m=0,b=0;b<h.length;b++){var y=h.words[b]|0;m+=y*977,h.words[b]=m&67108863,m=y*64+(m/67108864|0)}return h.words[h.length-1]===0&&(h.length--,h.words[h.length-1]===0&&h.length--),h};function A(){B.call(this,"p224","ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")}i(A,B);function R(){B.call(this,"p192","ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")}i(R,B);function O(){B.call(this,"25519","7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")}i(O,B),O.prototype.imulK=function(h){for(var m=0,b=0;b<h.length;b++){var y=(h.words[b]|0)*19+m,E=y&67108863;y>>>=26,h.words[b]=E,m=y}return m!==0&&(h.words[h.length++]=m),h},r._prime=function(h){if(L[h])return L[h];var m;if(h==="k256")m=new C;else if(h==="p224")m=new A;else if(h==="p192")m=new R;else if(h==="p25519")m=new O;else throw new Error("Unknown prime "+h);return L[h]=m,m};function S(w){if(typeof w=="string"){var h=r._prime(w);this.m=h.p,this.prime=h}else e(w.gtn(1),"modulus must be greater than 1"),this.m=w,this.prime=null}S.prototype._verify1=function(h){e(h.negative===0,"red works only with positives"),e(h.red,"red works only with red numbers")},S.prototype._verify2=function(h,m){e((h.negative|m.negative)===0,"red works only with positives"),e(h.red&&h.red===m.red,"red works only with red numbers")},S.prototype.imod=function(h){return this.prime?this.prime.ireduce(h)._forceRed(this):h.umod(this.m)._forceRed(this)},S.prototype.neg=function(h){return h.isZero()?h.clone():this.m.sub(h)._forceRed(this)},S.prototype.add=function(h,m){this._verify2(h,m);var b=h.add(m);return b.cmp(this.m)>=0&&b.isub(this.m),b._forceRed(this)},S.prototype.iadd=function(h,m){this._verify2(h,m);var b=h.iadd(m);return b.cmp(this.m)>=0&&b.isub(this.m),b},S.prototype.sub=function(h,m){this._verify2(h,m);var b=h.sub(m);return b.cmpn(0)<0&&b.iadd(this.m),b._forceRed(this)},S.prototype.isub=function(h,m){this._verify2(h,m);var b=h.isub(m);return b.cmpn(0)<0&&b.iadd(this.m),b},S.prototype.shl=function(h,m){return this._verify1(h),this.imod(h.ushln(m))},S.prototype.imul=function(h,m){return this._verify2(h,m),this.imod(h.imul(m))},S.prototype.mul=function(h,m){return this._verify2(h,m),this.imod(h.mul(m))},S.prototype.isqr=function(h){return this.imul(h,h.clone())},S.prototype.sqr=function(h){return this.mul(h,h)},S.prototype.sqrt=function(h){if(h.isZero())return h.clone();var m=this.m.andln(3);if(e(m%2===1),m===3){var b=this.m.add(new r(1)).iushrn(2);return this.pow(h,b)}for(var y=this.m.subn(1),E=0;!y.isZero()&&y.andln(1)===0;)E++,y.iushrn(1);e(!y.isZero());var D=new r(1).toRed(this),F=D.redNeg(),I=this.m.subn(1).iushrn(1),p=this.m.bitLength();for(p=new r(2*p*p).toRed(this);this.pow(p,I).cmp(F)!==0;)p.redIAdd(F);for(var P=this.pow(p,y),H=this.pow(h,y.addn(1).iushrn(1)),nt=this.pow(h,y),et=E;nt.cmp(D)!==0;){for(var ut=nt,Et=0;ut.cmp(D)!==0;Et++)ut=ut.redSqr();e(Et<et);var pt=this.pow(P,new r(1).iushln(et-Et-1));H=H.redMul(pt),P=pt.redSqr(),nt=nt.redMul(P),et=Et}return H},S.prototype.invm=function(h){var m=h._invmp(this.m);return m.negative!==0?(m.negative=0,this.imod(m).redNeg()):this.imod(m)},S.prototype.pow=function(h,m){if(m.isZero())return new r(1).toRed(this);if(m.cmpn(1)===0)return h.clone();var b=4,y=new Array(1<<b);y[0]=new r(1).toRed(this),y[1]=h;for(var E=2;E<y.length;E++)y[E]=this.mul(y[E-1],h);var D=y[0],F=0,I=0,p=m.bitLength()%26;for(p===0&&(p=26),E=m.length-1;E>=0;E--){for(var P=m.words[E],H=p-1;H>=0;H--){var nt=P>>H&1;if(D!==y[0]&&(D=this.sqr(D)),nt===0&&F===0){I=0;continue}F<<=1,F|=nt,I++,!(I!==b&&(E!==0||H!==0))&&(D=this.mul(D,y[F]),I=0,F=0)}p=26}return D},S.prototype.convertTo=function(h){var m=h.umod(this.m);return m===h?m.clone():m},S.prototype.convertFrom=function(h){var m=h.clone();return m.red=null,m},r.mont=function(h){return new N(h)};function N(w){S.call(this,w),this.shift=this.m.bitLength(),this.shift%26!==0&&(this.shift+=26-this.shift%26),this.r=new r(1).iushln(this.shift),this.r2=this.imod(this.r.sqr()),this.rinv=this.r._invmp(this.m),this.minv=this.rinv.mul(this.r).isubn(1).div(this.m),this.minv=this.minv.umod(this.r),this.minv=this.r.sub(this.minv)}i(N,S),N.prototype.convertTo=function(h){return this.imod(h.ushln(this.shift))},N.prototype.convertFrom=function(h){var m=this.imod(h.mul(this.rinv));return m.red=null,m},N.prototype.imul=function(h,m){if(h.isZero()||m.isZero())return h.words[0]=0,h.length=1,h;var b=h.imul(m),y=b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),E=b.isub(y).iushrn(this.shift),D=E;return E.cmp(this.m)>=0?D=E.isub(this.m):E.cmpn(0)<0&&(D=E.iadd(this.m)),D._forceRed(this)},N.prototype.mul=function(h,m){if(h.isZero()||m.isZero())return new r(0)._forceRed(this);var b=h.mul(m),y=b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),E=b.isub(y).iushrn(this.shift),D=E;return E.cmp(this.m)>=0?D=E.isub(this.m):E.cmpn(0)<0&&(D=E.iadd(this.m)),D._forceRed(this)},N.prototype.invm=function(h){var m=this.imod(h._invmp(this.m).mul(this.r2));return m._forceRed(this)}})(typeof Dh>"u"||Dh,xp)});var Fh=Bt((DA,yp)=>{"use strict";var NA=na();yp.exports=L1;function L1(n){return n&&typeof n=="object"&&!!n.words}});var wp=Bt((FA,Sp)=>{"use strict";var Mp=Fh();Sp.exports=U1;function U1(n){return Array.isArray(n)&&n.length===2&&Mp(n[0])&&Mp(n[1])}});var Il=Bt((BA,be)=>{var Bh=!1;if(typeof Float64Array<"u")if(Pn=new Float64Array(1),en=new Uint32Array(Pn.buffer),Pn[0]=1,Bh=!0,en[1]===1072693248){let n=function(i,r){return en[0]=i,en[1]=r,Pn[0]},t=function(i){return Pn[0]=i,en[0]},e=function(i){return Pn[0]=i,en[1]};N1=n,D1=t,F1=e,be.exports=function(r){return Pn[0]=r,[en[0],en[1]]},be.exports.pack=n,be.exports.lo=t,be.exports.hi=e}else if(en[0]===1072693248){let n=function(i,r){return en[1]=i,en[0]=r,Pn[0]},t=function(i){return Pn[0]=i,en[1]},e=function(i){return Pn[0]=i,en[0]};B1=n,O1=t,z1=e,be.exports=function(r){return Pn[0]=r,[en[1],en[0]]},be.exports.pack=n,be.exports.lo=t,be.exports.hi=e}else Bh=!1;var Pn,en,N1,D1,F1,B1,O1,z1;if(!Bh){let n=function(i,r){return Ln.writeUInt32LE(i,0,!0),Ln.writeUInt32LE(r,4,!0),Ln.readDoubleLE(0,!0)},t=function(i){return Ln.writeDoubleLE(i,0,!0),Ln.readUInt32LE(0,!0)},e=function(i){return Ln.writeDoubleLE(i,0,!0),Ln.readUInt32LE(4,!0)};k1=n,V1=t,G1=e,Ln=new Buffer(8),be.exports=function(r){return Ln.writeDoubleLE(r,0,!0),[Ln.readUInt32LE(0,!0),Ln.readUInt32LE(4,!0)]},be.exports.pack=n,be.exports.lo=t,be.exports.hi=e}var Ln,k1,V1,G1;be.exports.sign=function(n){return be.exports.hi(n)>>>31};be.exports.exponent=function(n){var t=be.exports.hi(n);return(t<<1>>>21)-1023};be.exports.fraction=function(n){var t=be.exports.lo(n),e=be.exports.hi(n),i=e&(1<<20)-1;return e&2146435072&&(i+=1<<20),[t,i]};be.exports.denormalized=function(n){var t=be.exports.hi(n);return!(t&2146435072)}});var Oh=Bt((OA,Ep)=>{"use strict";var bp=na(),H1=Il();Ep.exports=W1;function W1(n){var t=H1.exponent(n);return t<52?new bp(n):new bp(n*Math.pow(2,52-t)).ushln(t-52)}});var Ap=Bt((zA,Tp)=>{"use strict";var X1=na();Tp.exports=q1;function q1(n){return new X1(n)}});var Pl=Bt((kA,Rp)=>{"use strict";var Y1=na();Rp.exports=Z1;function Z1(n){return n.cmp(new Y1(0))}});var rs=Bt((VA,Ip)=>{"use strict";var Ll=Oh(),Cp=Pl();Ip.exports=J1;function J1(n,t){var e=Cp(n),i=Cp(t);if(e===0)return[Ll(0),Ll(1)];if(i===0)return[Ll(0),Ll(0)];i<0&&(n=n.neg(),t=t.neg());var r=n.gcd(t);return r.cmpn(1)?[n.div(r),t.div(r)]:[n,t]}});var zh=Bt((GA,Pp)=>{"use strict";var $1=rs();Pp.exports=K1;function K1(n,t){return $1(n[0].mul(t[1]),n[1].mul(t[0]))}});var Ul=Bt((HA,Fp)=>{"use strict";var Lp=wp(),Up=Fh(),Ki=Oh(),Np=Ap(),Q1=rs(),j1=zh();Fp.exports=Dp;function Dp(n,t){if(Lp(n))return t?j1(n,Dp(t)):[n[0].clone(),n[1].clone()];var e=0,i,r;if(Up(n))i=n.clone();else if(typeof n=="string")i=Np(n);else{if(n===0)return[Ki(0),Ki(1)];if(n===Math.floor(n))i=Ki(n);else{for(;n!==Math.floor(n);)n=n*Math.pow(2,256),e-=256;i=Ki(n)}}if(Lp(t))i.mul(t[1]),r=t[0].clone();else if(Up(t))r=t.clone();else if(typeof t=="string")r=Np(t);else if(!t)r=Ki(1);else if(t===Math.floor(t))r=Ki(t);else{for(;t!==Math.floor(t);)t=t*Math.pow(2,256),e+=256;r=Ki(t)}return e>0?i=i.ushln(e):e<0&&(r=r.ushln(-e)),Q1(i,r)}});var Op=Bt((WA,Bp)=>{"use strict";Bp.exports=tS;function tS(n,t){return n[0].mul(t[1]).cmp(t[0].mul(n[1]))}});var kp=Bt((XA,zp)=>{"use strict";var eS=Pl();zp.exports=nS;function nS(n){var t=n.length,e=n.words,i=0;if(t===1)i=e[0];else if(t===2)i=e[0]+e[1]*67108864;else for(var r=0;r<t;r++){var s=e[r];i+=s*Math.pow(67108864,r)}return eS(n)*i}});var Wp=Bt((qA,Hp)=>{"use strict";var Vp=Il(),Gp=Js().countTrailingZeros;Hp.exports=iS;function iS(n){var t=Gp(Vp.lo(n));if(t<32)return t;var e=Gp(Vp.hi(n));return e>20?52:e+32}});var qp=Bt((YA,Xp)=>{"use strict";var kh=kp(),rS=Wp();Xp.exports=sS;function sS(n){var t=n[0],e=n[1];if(t.cmpn(0)===0)return 0;var i=t.abs().divmod(e.abs()),r=i.div,s=kh(r),a=i.mod,o=t.negative!==e.negative?-1:1;if(a.cmpn(0)===0)return o*s;if(s){var l=rS(s)+4,c=kh(a.ushln(l).divRound(e));return o*(s+c*Math.pow(2,-l))}else{var u=e.bitLength()-a.bitLength()+53,c=kh(a.ushln(u).divRound(e));return u<1023?o*c*Math.pow(2,-u):(c*=Math.pow(2,-1023),o*c*Math.pow(2,1023-u))}}});var Zp=Bt((ZA,Yp)=>{"use strict";Yp.exports=oS;var aS=Ul();function oS(n){for(var t=new Array(n.length),e=0;e<n.length;++e)t[e]=aS(n[e]);return t}});var Qp=Bt((JA,Kp)=>{"use strict";var Vh=Il(),Jp=Math.pow(2,-1074),$p=-1>>>0;Kp.exports=lS;function lS(n,t){if(isNaN(n)||isNaN(t))return NaN;if(n===t)return n;if(n===0)return t<0?-Jp:Jp;var e=Vh.hi(n),i=Vh.lo(n);return t>n==n>0?i===$p?(e+=1,i=0):i+=1:i===0?(i=$p,e-=1):i-=1,Vh.pack(i,e)}});var Gh=Bt(($A,jp)=>{"use strict";var cS=rs();jp.exports=hS;function hS(n,t){return cS(n[0].mul(t[0]),n[1].mul(t[1]))}});var Hh=Bt((KA,t0)=>{"use strict";var uS=rs();t0.exports=fS;function fS(n,t){return uS(n[0].mul(t[1]).sub(n[1].mul(t[0])),n[1].mul(t[1]))}});var i0=Bt((QA,n0)=>{"use strict";var e0=Pl();n0.exports=dS;function dS(n){return e0(n[0])*e0(n[1])}});var s0=Bt((jA,r0)=>{"use strict";var pS=Hh();r0.exports=mS;function mS(n,t){for(var e=n.length,i=new Array(e),r=0;r<e;++r)i[r]=pS(n[r],t[r]);return i}});var o0=Bt((tR,a0)=>{"use strict";var gS=rs();a0.exports=vS;function vS(n,t){return gS(n[0].mul(t[1]).add(t[0].mul(n[1])),n[1].mul(t[1]))}});var c0=Bt((eR,l0)=>{"use strict";var _S=o0();l0.exports=xS;function xS(n,t){for(var e=n.length,i=new Array(e),r=0;r<e;++r)i[r]=_S(n[r],t[r]);return i}});var u0=Bt((nR,h0)=>{"use strict";var yS=Ul(),MS=Gh();h0.exports=SS;function SS(n,t){for(var e=yS(t),i=n.length,r=new Array(i),s=0;s<i;++s)r[s]=MS(n[s],e);return r}});var m0=Bt((iR,p0)=>{"use strict";p0.exports=RS;var f0=Gh(),wS=zh(),bS=Hh(),ES=i0(),Wh=s0(),TS=c0(),AS=u0();function d0(n,t){return bS(f0(n[0],t[1]),f0(n[1],t[0]))}function RS(n,t,e,i){var r=Wh(t,n),s=Wh(i,e),a=d0(r,s);if(ES(a)===0)return null;var o=Wh(n,e),l=d0(s,o),c=wS(l,a),u=AS(r,c),f=TS(n,u);return f}});var b0=Bt((rR,w0)=>{"use strict";w0.exports=zS;var CS=$f(),qh=op(),x0=vp(),g0=Ul(),v0=Op(),Xh=qp(),Nl=Zp(),ln=Qp(),IS=m0();function _0(n){var t=Xh(n);return[ln(t,-1/0),ln(t,1/0)]}function PS(n,t){for(var e=new Array(t.length),i=0;i<t.length;++i){var r=t[i],s=n[r[0]],a=n[r[1]];e[i]=[ln(Math.min(s[0],a[0]),-1/0),ln(Math.min(s[1],a[1]),-1/0),ln(Math.max(s[0],a[0]),1/0),ln(Math.max(s[1],a[1]),1/0)]}return e}function y0(n){for(var t=new Array(n.length),e=0;e<n.length;++e){var i=n[e];t[e]=[ln(i[0],-1/0),ln(i[1],-1/0),ln(i[0],1/0),ln(i[1],1/0)]}return t}function LS(n,t,e){var i=[];return qh(e,function(r,s){var a=t[r],o=t[s];if(!(a[0]===o[0]||a[0]===o[1]||a[1]===o[0]||a[1]===o[1])){var l=n[a[0]],c=n[a[1]],u=n[o[0]],f=n[o[1]];x0(l,c,u,f)&&i.push([r,s])}}),i}function US(n,t,e,i){var r=[];return qh(e,i,function(s,a){var o=t[s];if(!(o[0]===a||o[1]===a)){var l=n[a],c=n[o[0]],u=n[o[1]];x0(c,u,l,l)&&r.push([s,a])}}),r}function NS(n,t,e,i,r){var s,a,o=n.map(function(S){return[g0(S[0]),g0(S[1])]});for(s=0;s<e.length;++s){var l=e[s];a=l[0];var c=l[1],u=t[a],f=t[c],d=IS(Nl(n[u[0]]),Nl(n[u[1]]),Nl(n[f[0]]),Nl(n[f[1]]));if(d){var v=n.length;n.push([Xh(d[0]),Xh(d[1])]),o.push(d),i.push([a,v],[c,v])}}for(i.sort(function(S,N){if(S[0]!==N[0])return S[0]-N[0];var w=o[S[1]],h=o[N[1]];return v0(w[0],h[0])||v0(w[1],h[1])}),s=i.length-1;s>=0;--s){var x=i[s];a=x[0];var M=t[a],g=M[0],_=M[1],L=n[g],B=n[_];if((L[0]-B[0]||L[1]-B[1])<0){var C=g;g=_,_=C}M[0]=g;var A=M[1]=x[1],R;for(r&&(R=M[2]);s>0&&i[s-1][0]===a;){var x=i[--s],O=x[1];r?t.push([A,O,R]):t.push([A,O]),A=O}r?t.push([A,_,R]):t.push([A,_])}return o}function M0(n,t,e){for(var i=t.length,r=new CS(i),s=[],a=0;a<t.length;++a){var o=t[a],l=_0(o[0]),c=_0(o[1]);s.push([ln(l[0],-1/0),ln(c[0],-1/0),ln(l[1],1/0),ln(c[1],1/0)])}qh(s,function(x,M){r.link(x,M)});for(var u=!0,f=new Array(i),a=0;a<i;++a){var d=r.find(a);d!==a&&(u=!1,n[d]=[Math.min(n[a][0],n[d][0]),Math.min(n[a][1],n[d][1])])}if(u)return null;for(var v=0,a=0;a<i;++a){var d=r.find(a);d===a?(f[a]=v,n[v++]=n[a]):f[a]=-1}n.length=v;for(var a=0;a<i;++a)f[a]<0&&(f[a]=f[r.find(a)]);return f}function DS(n,t){return n[0]-t[0]||n[1]-t[1]}function FS(n,t){var e=n[0]-t[0]||n[1]-t[1];return e||(n[2]<t[2]?-1:n[2]>t[2]?1:0)}function S0(n,t,e){if(n.length!==0){if(t)for(var i=0;i<n.length;++i){var r=n[i],s=t[r[0]],a=t[r[1]];r[0]=Math.min(s,a),r[1]=Math.max(s,a)}else for(var i=0;i<n.length;++i){var r=n[i],s=r[0],a=r[1];r[0]=Math.min(s,a),r[1]=Math.max(s,a)}e?n.sort(FS):n.sort(DS);for(var o=1,i=1;i<n.length;++i){var l=n[i-1],c=n[i];c[0]===l[0]&&c[1]===l[1]&&(!e||c[2]===l[2])||(n[o++]=c)}n.length=o}}function BS(n,t,e){var i=M0(n,[],y0(n));return S0(t,i,e),!!i}function OS(n,t,e){var i=PS(n,t),r=LS(n,t,i),s=y0(n),a=US(n,t,i,s),o=NS(n,t,r,a,e),l=M0(n,o,s);return S0(t,l,e),l?!0:r.length>0||a.length>0}function zS(n,t,e){var i;if(e){i=t;for(var r=new Array(t.length),s=0;s<t.length;++s){var a=t[s];r[s]=[a[0],a[1],e[s]]}t=r}for(var o=BS(n,t,!!e);OS(n,t,!!e);)o=!0;if(e&&o){i.length=0,e.length=0;for(var s=0;s<t.length;++s){var a=t[s];i.push([a[0],a[1]]),e.push(a[2])}}return o}});var ra=Bt((sR,E0)=>{"use strict";function kS(n,t,e,i,r){for(var s=r+1;i<=r;){var a=i+r>>>1,o=n[a],l=e!==void 0?e(o,t):o-t;l>=0?(s=a,r=a-1):i=a+1}return s}function VS(n,t,e,i,r){for(var s=r+1;i<=r;){var a=i+r>>>1,o=n[a],l=e!==void 0?e(o,t):o-t;l>0?(s=a,r=a-1):i=a+1}return s}function GS(n,t,e,i,r){for(var s=i-1;i<=r;){var a=i+r>>>1,o=n[a],l=e!==void 0?e(o,t):o-t;l<0?(s=a,i=a+1):r=a-1}return s}function HS(n,t,e,i,r){for(var s=i-1;i<=r;){var a=i+r>>>1,o=n[a],l=e!==void 0?e(o,t):o-t;l<=0?(s=a,i=a+1):r=a-1}return s}function WS(n,t,e,i,r){for(;i<=r;){var s=i+r>>>1,a=n[s],o=e!==void 0?e(a,t):a-t;if(o===0)return s;o<=0?i=s+1:r=s-1}return-1}function ia(n,t,e,i,r,s){return typeof e=="function"?s(n,t,e,i===void 0?0:i|0,r===void 0?n.length-1:r|0):s(n,t,void 0,e===void 0?0:e|0,i===void 0?n.length-1:i|0)}E0.exports={ge:function(n,t,e,i,r){return ia(n,t,e,i,r,kS)},gt:function(n,t,e,i,r){return ia(n,t,e,i,r,VS)},lt:function(n,t,e,i,r){return ia(n,t,e,i,r,GS)},le:function(n,t,e,i,r){return ia(n,t,e,i,r,HS)},eq:function(n,t,e,i,r){return ia(n,t,e,i,r,WS)}}});var P0=Bt((aR,I0)=>{"use strict";var Dl=ra(),Ii=Nh()[3],Zh=0,T0=1,Yh=2;I0.exports=JS;function R0(n,t,e,i,r){this.a=n,this.b=t,this.idx=e,this.lowerIds=i,this.upperIds=r}function sa(n,t,e,i){this.a=n,this.b=t,this.type=e,this.idx=i}function XS(n,t){var e=n.a[0]-t.a[0]||n.a[1]-t.a[1]||n.type-t.type;return e||n.type!==Zh&&(e=Ii(n.a,n.b,t.b),e)?e:n.idx-t.idx}function A0(n,t){return Ii(n.a,n.b,t)}function qS(n,t,e,i,r){for(var s=Dl.lt(t,i,A0),a=Dl.gt(t,i,A0),o=s;o<a;++o){for(var l=t[o],c=l.lowerIds,f=c.length;f>1&&Ii(e[c[f-2]],e[c[f-1]],i)>0;)n.push([c[f-1],c[f-2],r]),f-=1;c.length=f,c.push(r);for(var u=l.upperIds,f=u.length;f>1&&Ii(e[u[f-2]],e[u[f-1]],i)<0;)n.push([u[f-2],u[f-1],r]),f-=1;u.length=f,u.push(r)}}function C0(n,t){var e;return n.a[0]<t.a[0]?e=Ii(n.a,n.b,t.a):e=Ii(t.b,t.a,n.a),e||(t.b[0]<n.b[0]?e=Ii(n.a,n.b,t.b):e=Ii(t.b,t.a,n.b),e||n.idx-t.idx)}function YS(n,t,e){var i=Dl.le(n,e,C0),r=n[i],s=r.upperIds,a=s[s.length-1];r.upperIds=[a],n.splice(i+1,0,new R0(e.a,e.b,e.idx,[a],s))}function ZS(n,t,e){var i=e.a;e.a=e.b,e.b=i;var r=Dl.eq(n,e,C0),s=n[r],a=n[r-1];a.upperIds=s.upperIds,n.splice(r,1)}function JS(n,t){for(var e=n.length,i=t.length,r=[],s=0;s<e;++s)r.push(new sa(n[s],null,Zh,s));for(var s=0;s<i;++s){var a=t[s],o=n[a[0]],l=n[a[1]];o[0]<l[0]?r.push(new sa(o,l,Yh,s),new sa(l,o,T0,s)):o[0]>l[0]&&r.push(new sa(l,o,Yh,s),new sa(o,l,T0,s))}r.sort(XS);for(var c=r[0].a[0]-(1+Math.abs(r[0].a[0]))*Math.pow(2,-52),u=[new R0([c,1],[c,0],-1,[],[],[],[])],f=[],s=0,d=r.length;s<d;++s){var v=r[s],x=v.type;x===Zh?qS(f,u,n,v.a,v.idx):x===Yh?YS(u,n,v):ZS(u,n,v)}return f}});var N0=Bt((oR,U0)=>{"use strict";var $S=ra();U0.exports=KS;function L0(n,t){this.stars=n,this.edges=t}var Qi=L0.prototype;function Jh(n,t,e){for(var i=1,r=n.length;i<r;i+=2)if(n[i-1]===t&&n[i]===e){n[i-1]=n[r-2],n[i]=n[r-1],n.length=r-2;return}}Qi.isConstraint=(function(){var n=[0,0];function t(e,i){return e[0]-i[0]||e[1]-i[1]}return function(e,i){return n[0]=Math.min(e,i),n[1]=Math.max(e,i),$S.eq(this.edges,n,t)>=0}})();Qi.removeTriangle=function(n,t,e){var i=this.stars;Jh(i[n],t,e),Jh(i[t],e,n),Jh(i[e],n,t)};Qi.addTriangle=function(n,t,e){var i=this.stars;i[n].push(t,e),i[t].push(e,n),i[e].push(n,t)};Qi.opposite=function(n,t){for(var e=this.stars[t],i=1,r=e.length;i<r;i+=2)if(e[i]===n)return e[i-1];return-1};Qi.flip=function(n,t){var e=this.opposite(n,t),i=this.opposite(t,n);this.removeTriangle(n,t,e),this.removeTriangle(t,n,i),this.addTriangle(n,i,e),this.addTriangle(t,e,i)};Qi.edges=function(){for(var n=this.stars,t=[],e=0,i=n.length;e<i;++e)for(var r=n[e],s=0,a=r.length;s<a;s+=2)t.push([r[s],r[s+1]]);return t};Qi.cells=function(){for(var n=this.stars,t=[],e=0,i=n.length;e<i;++e)for(var r=n[e],s=0,a=r.length;s<a;s+=2){var o=r[s],l=r[s+1];e<Math.min(o,l)&&t.push([e,o,l])}return t};function KS(n,t){for(var e=new Array(n),i=0;i<n;++i)e[i]=[];return new L0(e,t)}});var B0=Bt((lR,$h)=>{"use strict";var QS=Tl(),jS=Ch(),tw=Lh(),ew=Ph(),D0=6;function F0(n){var t=n===3?sw:n===4?aw:n===5?ow:lw;return t(jS,tw,QS,ew)}function nw(){return 0}function iw(){return 0}function rw(){return 0}function sw(n,t,e,i){function r(s,a,o){var l=e(s[0],s[0]),c=i(l,a[0]),u=i(l,o[0]),f=e(a[0],a[0]),d=i(f,s[0]),v=i(f,o[0]),x=e(o[0],o[0]),M=i(x,s[0]),g=i(x,a[0]),_=n(t(g,v),t(d,c)),L=t(M,u),B=t(_,L);return B[B.length-1]}return r}function aw(n,t,e,i){function r(s,a,o,l){var c=n(e(s[0],s[0]),e(s[1],s[1])),u=i(c,a[0]),f=i(c,o[0]),d=i(c,l[0]),v=n(e(a[0],a[0]),e(a[1],a[1])),x=i(v,s[0]),M=i(v,o[0]),g=i(v,l[0]),_=n(e(o[0],o[0]),e(o[1],o[1])),L=i(_,s[0]),B=i(_,a[0]),C=i(_,l[0]),A=n(e(l[0],l[0]),e(l[1],l[1])),R=i(A,s[0]),O=i(A,a[0]),S=i(A,o[0]),N=n(n(i(t(S,C),a[1]),n(i(t(O,g),-o[1]),i(t(B,M),l[1]))),n(i(t(O,g),s[1]),n(i(t(R,d),-a[1]),i(t(x,u),l[1])))),w=n(n(i(t(S,C),s[1]),n(i(t(R,d),-o[1]),i(t(L,f),l[1]))),n(i(t(B,M),s[1]),n(i(t(L,f),-a[1]),i(t(x,u),o[1])))),h=t(N,w);return h[h.length-1]}return r}function ow(n,t,e,i){function r(s,a,o,l,c){var u=n(e(s[0],s[0]),n(e(s[1],s[1]),e(s[2],s[2]))),f=i(u,a[0]),d=i(u,o[0]),v=i(u,l[0]),x=i(u,c[0]),M=n(e(a[0],a[0]),n(e(a[1],a[1]),e(a[2],a[2]))),g=i(M,s[0]),_=i(M,o[0]),L=i(M,l[0]),B=i(M,c[0]),C=n(e(o[0],o[0]),n(e(o[1],o[1]),e(o[2],o[2]))),A=i(C,s[0]),R=i(C,a[0]),O=i(C,l[0]),S=i(C,c[0]),N=n(e(l[0],l[0]),n(e(l[1],l[1]),e(l[2],l[2]))),w=i(N,s[0]),h=i(N,a[0]),m=i(N,o[0]),b=i(N,c[0]),y=n(e(c[0],c[0]),n(e(c[1],c[1]),e(c[2],c[2]))),E=i(y,s[0]),D=i(y,a[0]),F=i(y,o[0]),I=i(y,l[0]),p=n(n(n(i(n(i(t(I,b),o[1]),n(i(t(F,S),-l[1]),i(t(m,O),c[1]))),a[2]),n(i(n(i(t(I,b),a[1]),n(i(t(D,B),-l[1]),i(t(h,L),c[1]))),-o[2]),i(n(i(t(F,S),a[1]),n(i(t(D,B),-o[1]),i(t(R,_),c[1]))),l[2]))),n(i(n(i(t(m,O),a[1]),n(i(t(h,L),-o[1]),i(t(R,_),l[1]))),-c[2]),n(i(n(i(t(I,b),a[1]),n(i(t(D,B),-l[1]),i(t(h,L),c[1]))),s[2]),i(n(i(t(I,b),s[1]),n(i(t(E,x),-l[1]),i(t(w,v),c[1]))),-a[2])))),n(n(i(n(i(t(D,B),s[1]),n(i(t(E,x),-a[1]),i(t(g,f),c[1]))),l[2]),n(i(n(i(t(h,L),s[1]),n(i(t(w,v),-a[1]),i(t(g,f),l[1]))),-c[2]),i(n(i(t(m,O),a[1]),n(i(t(h,L),-o[1]),i(t(R,_),l[1]))),s[2]))),n(i(n(i(t(m,O),s[1]),n(i(t(w,v),-o[1]),i(t(A,d),l[1]))),-a[2]),n(i(n(i(t(h,L),s[1]),n(i(t(w,v),-a[1]),i(t(g,f),l[1]))),o[2]),i(n(i(t(R,_),s[1]),n(i(t(A,d),-a[1]),i(t(g,f),o[1]))),-l[2]))))),P=n(n(n(i(n(i(t(I,b),o[1]),n(i(t(F,S),-l[1]),i(t(m,O),c[1]))),s[2]),i(n(i(t(I,b),s[1]),n(i(t(E,x),-l[1]),i(t(w,v),c[1]))),-o[2])),n(i(n(i(t(F,S),s[1]),n(i(t(E,x),-o[1]),i(t(A,d),c[1]))),l[2]),i(n(i(t(m,O),s[1]),n(i(t(w,v),-o[1]),i(t(A,d),l[1]))),-c[2]))),n(n(i(n(i(t(F,S),a[1]),n(i(t(D,B),-o[1]),i(t(R,_),c[1]))),s[2]),i(n(i(t(F,S),s[1]),n(i(t(E,x),-o[1]),i(t(A,d),c[1]))),-a[2])),n(i(n(i(t(D,B),s[1]),n(i(t(E,x),-a[1]),i(t(g,f),c[1]))),o[2]),i(n(i(t(R,_),s[1]),n(i(t(A,d),-a[1]),i(t(g,f),o[1]))),-c[2])))),H=t(p,P);return H[H.length-1]}return r}function lw(n,t,e,i){function r(s,a,o,l,c,u){var f=n(n(e(s[0],s[0]),e(s[1],s[1])),n(e(s[2],s[2]),e(s[3],s[3]))),d=i(f,a[0]),v=i(f,o[0]),x=i(f,l[0]),M=i(f,c[0]),g=i(f,u[0]),_=n(n(e(a[0],a[0]),e(a[1],a[1])),n(e(a[2],a[2]),e(a[3],a[3]))),L=i(_,s[0]),B=i(_,o[0]),C=i(_,l[0]),A=i(_,c[0]),R=i(_,u[0]),O=n(n(e(o[0],o[0]),e(o[1],o[1])),n(e(o[2],o[2]),e(o[3],o[3]))),S=i(O,s[0]),N=i(O,a[0]),w=i(O,l[0]),h=i(O,c[0]),m=i(O,u[0]),b=n(n(e(l[0],l[0]),e(l[1],l[1])),n(e(l[2],l[2]),e(l[3],l[3]))),y=i(b,s[0]),E=i(b,a[0]),D=i(b,o[0]),F=i(b,c[0]),I=i(b,u[0]),p=n(n(e(c[0],c[0]),e(c[1],c[1])),n(e(c[2],c[2]),e(c[3],c[3]))),P=i(p,s[0]),H=i(p,a[0]),nt=i(p,o[0]),et=i(p,l[0]),ut=i(p,u[0]),Et=n(n(e(u[0],u[0]),e(u[1],u[1])),n(e(u[2],u[2]),e(u[3],u[3]))),pt=i(Et,s[0]),$=i(Et,a[0]),q=i(Et,o[0]),at=i(Et,l[0]),bt=i(Et,c[0]),ft=n(n(n(i(n(n(i(n(i(t(bt,ut),l[1]),n(i(t(at,I),-c[1]),i(t(et,F),u[1]))),o[2]),i(n(i(t(bt,ut),o[1]),n(i(t(q,m),-c[1]),i(t(nt,h),u[1]))),-l[2])),n(i(n(i(t(at,I),o[1]),n(i(t(q,m),-l[1]),i(t(D,w),u[1]))),c[2]),i(n(i(t(et,F),o[1]),n(i(t(nt,h),-l[1]),i(t(D,w),c[1]))),-u[2]))),a[3]),n(i(n(n(i(n(i(t(bt,ut),l[1]),n(i(t(at,I),-c[1]),i(t(et,F),u[1]))),a[2]),i(n(i(t(bt,ut),a[1]),n(i(t($,R),-c[1]),i(t(H,A),u[1]))),-l[2])),n(i(n(i(t(at,I),a[1]),n(i(t($,R),-l[1]),i(t(E,C),u[1]))),c[2]),i(n(i(t(et,F),a[1]),n(i(t(H,A),-l[1]),i(t(E,C),c[1]))),-u[2]))),-o[3]),i(n(n(i(n(i(t(bt,ut),o[1]),n(i(t(q,m),-c[1]),i(t(nt,h),u[1]))),a[2]),i(n(i(t(bt,ut),a[1]),n(i(t($,R),-c[1]),i(t(H,A),u[1]))),-o[2])),n(i(n(i(t(q,m),a[1]),n(i(t($,R),-o[1]),i(t(N,B),u[1]))),c[2]),i(n(i(t(nt,h),a[1]),n(i(t(H,A),-o[1]),i(t(N,B),c[1]))),-u[2]))),l[3]))),n(n(i(n(n(i(n(i(t(at,I),o[1]),n(i(t(q,m),-l[1]),i(t(D,w),u[1]))),a[2]),i(n(i(t(at,I),a[1]),n(i(t($,R),-l[1]),i(t(E,C),u[1]))),-o[2])),n(i(n(i(t(q,m),a[1]),n(i(t($,R),-o[1]),i(t(N,B),u[1]))),l[2]),i(n(i(t(D,w),a[1]),n(i(t(E,C),-o[1]),i(t(N,B),l[1]))),-u[2]))),-c[3]),i(n(n(i(n(i(t(et,F),o[1]),n(i(t(nt,h),-l[1]),i(t(D,w),c[1]))),a[2]),i(n(i(t(et,F),a[1]),n(i(t(H,A),-l[1]),i(t(E,C),c[1]))),-o[2])),n(i(n(i(t(nt,h),a[1]),n(i(t(H,A),-o[1]),i(t(N,B),c[1]))),l[2]),i(n(i(t(D,w),a[1]),n(i(t(E,C),-o[1]),i(t(N,B),l[1]))),-c[2]))),u[3])),n(i(n(n(i(n(i(t(bt,ut),l[1]),n(i(t(at,I),-c[1]),i(t(et,F),u[1]))),a[2]),i(n(i(t(bt,ut),a[1]),n(i(t($,R),-c[1]),i(t(H,A),u[1]))),-l[2])),n(i(n(i(t(at,I),a[1]),n(i(t($,R),-l[1]),i(t(E,C),u[1]))),c[2]),i(n(i(t(et,F),a[1]),n(i(t(H,A),-l[1]),i(t(E,C),c[1]))),-u[2]))),s[3]),i(n(n(i(n(i(t(bt,ut),l[1]),n(i(t(at,I),-c[1]),i(t(et,F),u[1]))),s[2]),i(n(i(t(bt,ut),s[1]),n(i(t(pt,g),-c[1]),i(t(P,M),u[1]))),-l[2])),n(i(n(i(t(at,I),s[1]),n(i(t(pt,g),-l[1]),i(t(y,x),u[1]))),c[2]),i(n(i(t(et,F),s[1]),n(i(t(P,M),-l[1]),i(t(y,x),c[1]))),-u[2]))),-a[3])))),n(n(n(i(n(n(i(n(i(t(bt,ut),a[1]),n(i(t($,R),-c[1]),i(t(H,A),u[1]))),s[2]),i(n(i(t(bt,ut),s[1]),n(i(t(pt,g),-c[1]),i(t(P,M),u[1]))),-a[2])),n(i(n(i(t($,R),s[1]),n(i(t(pt,g),-a[1]),i(t(L,d),u[1]))),c[2]),i(n(i(t(H,A),s[1]),n(i(t(P,M),-a[1]),i(t(L,d),c[1]))),-u[2]))),l[3]),i(n(n(i(n(i(t(at,I),a[1]),n(i(t($,R),-l[1]),i(t(E,C),u[1]))),s[2]),i(n(i(t(at,I),s[1]),n(i(t(pt,g),-l[1]),i(t(y,x),u[1]))),-a[2])),n(i(n(i(t($,R),s[1]),n(i(t(pt,g),-a[1]),i(t(L,d),u[1]))),l[2]),i(n(i(t(E,C),s[1]),n(i(t(y,x),-a[1]),i(t(L,d),l[1]))),-u[2]))),-c[3])),n(i(n(n(i(n(i(t(et,F),a[1]),n(i(t(H,A),-l[1]),i(t(E,C),c[1]))),s[2]),i(n(i(t(et,F),s[1]),n(i(t(P,M),-l[1]),i(t(y,x),c[1]))),-a[2])),n(i(n(i(t(H,A),s[1]),n(i(t(P,M),-a[1]),i(t(L,d),c[1]))),l[2]),i(n(i(t(E,C),s[1]),n(i(t(y,x),-a[1]),i(t(L,d),l[1]))),-c[2]))),u[3]),i(n(n(i(n(i(t(at,I),o[1]),n(i(t(q,m),-l[1]),i(t(D,w),u[1]))),a[2]),i(n(i(t(at,I),a[1]),n(i(t($,R),-l[1]),i(t(E,C),u[1]))),-o[2])),n(i(n(i(t(q,m),a[1]),n(i(t($,R),-o[1]),i(t(N,B),u[1]))),l[2]),i(n(i(t(D,w),a[1]),n(i(t(E,C),-o[1]),i(t(N,B),l[1]))),-u[2]))),s[3]))),n(n(i(n(n(i(n(i(t(at,I),o[1]),n(i(t(q,m),-l[1]),i(t(D,w),u[1]))),s[2]),i(n(i(t(at,I),s[1]),n(i(t(pt,g),-l[1]),i(t(y,x),u[1]))),-o[2])),n(i(n(i(t(q,m),s[1]),n(i(t(pt,g),-o[1]),i(t(S,v),u[1]))),l[2]),i(n(i(t(D,w),s[1]),n(i(t(y,x),-o[1]),i(t(S,v),l[1]))),-u[2]))),-a[3]),i(n(n(i(n(i(t(at,I),a[1]),n(i(t($,R),-l[1]),i(t(E,C),u[1]))),s[2]),i(n(i(t(at,I),s[1]),n(i(t(pt,g),-l[1]),i(t(y,x),u[1]))),-a[2])),n(i(n(i(t($,R),s[1]),n(i(t(pt,g),-a[1]),i(t(L,d),u[1]))),l[2]),i(n(i(t(E,C),s[1]),n(i(t(y,x),-a[1]),i(t(L,d),l[1]))),-u[2]))),o[3])),n(i(n(n(i(n(i(t(q,m),a[1]),n(i(t($,R),-o[1]),i(t(N,B),u[1]))),s[2]),i(n(i(t(q,m),s[1]),n(i(t(pt,g),-o[1]),i(t(S,v),u[1]))),-a[2])),n(i(n(i(t($,R),s[1]),n(i(t(pt,g),-a[1]),i(t(L,d),u[1]))),o[2]),i(n(i(t(N,B),s[1]),n(i(t(S,v),-a[1]),i(t(L,d),o[1]))),-u[2]))),-l[3]),i(n(n(i(n(i(t(D,w),a[1]),n(i(t(E,C),-o[1]),i(t(N,B),l[1]))),s[2]),i(n(i(t(D,w),s[1]),n(i(t(y,x),-o[1]),i(t(S,v),l[1]))),-a[2])),n(i(n(i(t(E,C),s[1]),n(i(t(y,x),-a[1]),i(t(L,d),l[1]))),o[2]),i(n(i(t(N,B),s[1]),n(i(t(S,v),-a[1]),i(t(L,d),o[1]))),-l[2]))),u[3]))))),Lt=n(n(n(i(n(n(i(n(i(t(bt,ut),l[1]),n(i(t(at,I),-c[1]),i(t(et,F),u[1]))),o[2]),i(n(i(t(bt,ut),o[1]),n(i(t(q,m),-c[1]),i(t(nt,h),u[1]))),-l[2])),n(i(n(i(t(at,I),o[1]),n(i(t(q,m),-l[1]),i(t(D,w),u[1]))),c[2]),i(n(i(t(et,F),o[1]),n(i(t(nt,h),-l[1]),i(t(D,w),c[1]))),-u[2]))),s[3]),n(i(n(n(i(n(i(t(bt,ut),l[1]),n(i(t(at,I),-c[1]),i(t(et,F),u[1]))),s[2]),i(n(i(t(bt,ut),s[1]),n(i(t(pt,g),-c[1]),i(t(P,M),u[1]))),-l[2])),n(i(n(i(t(at,I),s[1]),n(i(t(pt,g),-l[1]),i(t(y,x),u[1]))),c[2]),i(n(i(t(et,F),s[1]),n(i(t(P,M),-l[1]),i(t(y,x),c[1]))),-u[2]))),-o[3]),i(n(n(i(n(i(t(bt,ut),o[1]),n(i(t(q,m),-c[1]),i(t(nt,h),u[1]))),s[2]),i(n(i(t(bt,ut),s[1]),n(i(t(pt,g),-c[1]),i(t(P,M),u[1]))),-o[2])),n(i(n(i(t(q,m),s[1]),n(i(t(pt,g),-o[1]),i(t(S,v),u[1]))),c[2]),i(n(i(t(nt,h),s[1]),n(i(t(P,M),-o[1]),i(t(S,v),c[1]))),-u[2]))),l[3]))),n(n(i(n(n(i(n(i(t(at,I),o[1]),n(i(t(q,m),-l[1]),i(t(D,w),u[1]))),s[2]),i(n(i(t(at,I),s[1]),n(i(t(pt,g),-l[1]),i(t(y,x),u[1]))),-o[2])),n(i(n(i(t(q,m),s[1]),n(i(t(pt,g),-o[1]),i(t(S,v),u[1]))),l[2]),i(n(i(t(D,w),s[1]),n(i(t(y,x),-o[1]),i(t(S,v),l[1]))),-u[2]))),-c[3]),i(n(n(i(n(i(t(et,F),o[1]),n(i(t(nt,h),-l[1]),i(t(D,w),c[1]))),s[2]),i(n(i(t(et,F),s[1]),n(i(t(P,M),-l[1]),i(t(y,x),c[1]))),-o[2])),n(i(n(i(t(nt,h),s[1]),n(i(t(P,M),-o[1]),i(t(S,v),c[1]))),l[2]),i(n(i(t(D,w),s[1]),n(i(t(y,x),-o[1]),i(t(S,v),l[1]))),-c[2]))),u[3])),n(i(n(n(i(n(i(t(bt,ut),o[1]),n(i(t(q,m),-c[1]),i(t(nt,h),u[1]))),a[2]),i(n(i(t(bt,ut),a[1]),n(i(t($,R),-c[1]),i(t(H,A),u[1]))),-o[2])),n(i(n(i(t(q,m),a[1]),n(i(t($,R),-o[1]),i(t(N,B),u[1]))),c[2]),i(n(i(t(nt,h),a[1]),n(i(t(H,A),-o[1]),i(t(N,B),c[1]))),-u[2]))),s[3]),i(n(n(i(n(i(t(bt,ut),o[1]),n(i(t(q,m),-c[1]),i(t(nt,h),u[1]))),s[2]),i(n(i(t(bt,ut),s[1]),n(i(t(pt,g),-c[1]),i(t(P,M),u[1]))),-o[2])),n(i(n(i(t(q,m),s[1]),n(i(t(pt,g),-o[1]),i(t(S,v),u[1]))),c[2]),i(n(i(t(nt,h),s[1]),n(i(t(P,M),-o[1]),i(t(S,v),c[1]))),-u[2]))),-a[3])))),n(n(n(i(n(n(i(n(i(t(bt,ut),a[1]),n(i(t($,R),-c[1]),i(t(H,A),u[1]))),s[2]),i(n(i(t(bt,ut),s[1]),n(i(t(pt,g),-c[1]),i(t(P,M),u[1]))),-a[2])),n(i(n(i(t($,R),s[1]),n(i(t(pt,g),-a[1]),i(t(L,d),u[1]))),c[2]),i(n(i(t(H,A),s[1]),n(i(t(P,M),-a[1]),i(t(L,d),c[1]))),-u[2]))),o[3]),i(n(n(i(n(i(t(q,m),a[1]),n(i(t($,R),-o[1]),i(t(N,B),u[1]))),s[2]),i(n(i(t(q,m),s[1]),n(i(t(pt,g),-o[1]),i(t(S,v),u[1]))),-a[2])),n(i(n(i(t($,R),s[1]),n(i(t(pt,g),-a[1]),i(t(L,d),u[1]))),o[2]),i(n(i(t(N,B),s[1]),n(i(t(S,v),-a[1]),i(t(L,d),o[1]))),-u[2]))),-c[3])),n(i(n(n(i(n(i(t(nt,h),a[1]),n(i(t(H,A),-o[1]),i(t(N,B),c[1]))),s[2]),i(n(i(t(nt,h),s[1]),n(i(t(P,M),-o[1]),i(t(S,v),c[1]))),-a[2])),n(i(n(i(t(H,A),s[1]),n(i(t(P,M),-a[1]),i(t(L,d),c[1]))),o[2]),i(n(i(t(N,B),s[1]),n(i(t(S,v),-a[1]),i(t(L,d),o[1]))),-c[2]))),u[3]),i(n(n(i(n(i(t(et,F),o[1]),n(i(t(nt,h),-l[1]),i(t(D,w),c[1]))),a[2]),i(n(i(t(et,F),a[1]),n(i(t(H,A),-l[1]),i(t(E,C),c[1]))),-o[2])),n(i(n(i(t(nt,h),a[1]),n(i(t(H,A),-o[1]),i(t(N,B),c[1]))),l[2]),i(n(i(t(D,w),a[1]),n(i(t(E,C),-o[1]),i(t(N,B),l[1]))),-c[2]))),s[3]))),n(n(i(n(n(i(n(i(t(et,F),o[1]),n(i(t(nt,h),-l[1]),i(t(D,w),c[1]))),s[2]),i(n(i(t(et,F),s[1]),n(i(t(P,M),-l[1]),i(t(y,x),c[1]))),-o[2])),n(i(n(i(t(nt,h),s[1]),n(i(t(P,M),-o[1]),i(t(S,v),c[1]))),l[2]),i(n(i(t(D,w),s[1]),n(i(t(y,x),-o[1]),i(t(S,v),l[1]))),-c[2]))),-a[3]),i(n(n(i(n(i(t(et,F),a[1]),n(i(t(H,A),-l[1]),i(t(E,C),c[1]))),s[2]),i(n(i(t(et,F),s[1]),n(i(t(P,M),-l[1]),i(t(y,x),c[1]))),-a[2])),n(i(n(i(t(H,A),s[1]),n(i(t(P,M),-a[1]),i(t(L,d),c[1]))),l[2]),i(n(i(t(E,C),s[1]),n(i(t(y,x),-a[1]),i(t(L,d),l[1]))),-c[2]))),o[3])),n(i(n(n(i(n(i(t(nt,h),a[1]),n(i(t(H,A),-o[1]),i(t(N,B),c[1]))),s[2]),i(n(i(t(nt,h),s[1]),n(i(t(P,M),-o[1]),i(t(S,v),c[1]))),-a[2])),n(i(n(i(t(H,A),s[1]),n(i(t(P,M),-a[1]),i(t(L,d),c[1]))),o[2]),i(n(i(t(N,B),s[1]),n(i(t(S,v),-a[1]),i(t(L,d),o[1]))),-c[2]))),-l[3]),i(n(n(i(n(i(t(D,w),a[1]),n(i(t(E,C),-o[1]),i(t(N,B),l[1]))),s[2]),i(n(i(t(D,w),s[1]),n(i(t(y,x),-o[1]),i(t(S,v),l[1]))),-a[2])),n(i(n(i(t(E,C),s[1]),n(i(t(y,x),-a[1]),i(t(L,d),l[1]))),o[2]),i(n(i(t(N,B),s[1]),n(i(t(S,v),-a[1]),i(t(L,d),o[1]))),-l[2]))),c[3]))))),fe=t(ft,Lt);return fe[fe.length-1]}return r}var ji=[nw,iw,rw];function cw(n){var t=ji[n.length];return t||(t=ji[n.length]=F0(n.length)),t.apply(void 0,n)}function hw(n,t,e,i,r,s,a,o){function l(c,u,f,d,v,x){switch(arguments.length){case 0:case 1:return 0;case 2:return i(c,u);case 3:return r(c,u,f);case 4:return s(c,u,f,d);case 5:return a(c,u,f,d,v);case 6:return o(c,u,f,d,v,x)}for(var M=new Array(arguments.length),g=0;g<arguments.length;++g)M[g]=arguments[g];return n(M)}return l}function uw(){for(;ji.length<=D0;)ji.push(F0(ji.length));$h.exports=hw.apply(void 0,[cw].concat(ji));for(var n=0;n<=D0;++n)$h.exports[n]=ji[n]}uw()});var z0=Bt((hR,O0)=>{"use strict";var Kh=B0()[4],cR=ra();O0.exports=fw;function Fl(n,t,e,i,r,s){var a=t.opposite(i,r);if(!(a<0)){if(r<i){var o=i;i=r,r=o,o=s,s=a,a=o}t.isConstraint(i,r)||Kh(n[i],n[r],n[s],n[a])<0&&e.push(i,r)}}function fw(n,t){for(var e=[],i=n.length,r=t.stars,s=0;s<i;++s)for(var a=r[s],o=1;o<a.length;o+=2){var l=a[o];if(!(l<s)&&!t.isConstraint(s,l)){for(var c=a[o-1],u=-1,f=1;f<a.length;f+=2)if(a[f-1]===l){u=a[f];break}u<0||Kh(n[s],n[l],n[c],n[u])<0&&e.push(s,l)}}for(;e.length>0;){for(var l=e.pop(),s=e.pop(),c=-1,u=-1,a=r[s],d=1;d<a.length;d+=2){var v=a[d-1],x=a[d];v===l?u=x:x===l&&(c=v)}c<0||u<0||Kh(n[s],n[l],n[c],n[u])>=0||(t.flip(s,l),Fl(n,t,e,c,s,u),Fl(n,t,e,s,u,c),Fl(n,t,e,u,l,c),Fl(n,t,e,l,c,u))}}});var H0=Bt((uR,G0)=>{"use strict";var dw=ra();G0.exports=vw;function k0(n,t,e,i,r,s,a){this.cells=n,this.neighbor=t,this.flags=i,this.constraint=e,this.active=r,this.next=s,this.boundary=a}var pw=k0.prototype;function V0(n,t){return n[0]-t[0]||n[1]-t[1]||n[2]-t[2]}pw.locate=(function(){var n=[0,0,0];return function(t,e,i){var r=t,s=e,a=i;return e<i?e<t&&(r=e,s=i,a=t):i<t&&(r=i,s=t,a=e),r<0?-1:(n[0]=r,n[1]=s,n[2]=a,dw.eq(this.cells,n,V0))}})();function mw(n,t){for(var e=n.cells(),i=e.length,r=0;r<i;++r){var s=e[r],a=s[0],o=s[1],l=s[2];o<l?o<a&&(s[0]=o,s[1]=l,s[2]=a):l<a&&(s[0]=l,s[1]=a,s[2]=o)}e.sort(V0);for(var c=new Array(i),r=0;r<c.length;++r)c[r]=0;var u=[],f=[],d=new Array(3*i),v=new Array(3*i),x=null;t&&(x=[]);for(var M=new k0(e,d,v,c,u,f,x),r=0;r<i;++r)for(var s=e[r],g=0;g<3;++g){var a=s[g],o=s[(g+1)%3],_=d[3*r+g]=M.locate(o,a,n.opposite(o,a)),L=v[3*r+g]=n.isConstraint(a,o);_<0&&(L?f.push(r):(u.push(r),c[r]=1),t&&x.push([o,a,-1]))}return M}function gw(n,t,e){for(var i=0,r=0;r<n.length;++r)t[r]===e&&(n[i++]=n[r]);return n.length=i,n}function vw(n,t,e){var i=mw(n,e);if(t===0)return e?i.cells.concat(i.boundary):i.cells;for(var r=1,s=i.active,a=i.next,o=i.flags,l=i.cells,c=i.constraint,u=i.neighbor;s.length>0||a.length>0;){for(;s.length>0;){var f=s.pop();if(o[f]!==-r){o[f]=r;for(var d=l[f],v=0;v<3;++v){var x=u[3*f+v];x>=0&&o[x]===0&&(c[3*f+v]?a.push(x):(s.push(x),o[x]=r))}}}var M=a;a=s,s=M,a.length=0,r=-r}var g=gw(l,o,t);return e?g.concat(i.boundary):g}});var X0=Bt((fR,W0)=>{"use strict";var _w=P0(),xw=N0(),yw=z0(),Qh=H0();W0.exports=bw;function Mw(n){return[Math.min(n[0],n[1]),Math.max(n[0],n[1])]}function Sw(n,t){return n[0]-t[0]||n[1]-t[1]}function ww(n){return n.map(Mw).sort(Sw)}function Bl(n,t,e){return t in n?n[t]:e}function bw(n,t,e){Array.isArray(t)?(e=e||{},t=t||[]):(e=t||{},t=[]);var i=!!Bl(e,"delaunay",!0),r=!!Bl(e,"interior",!0),s=!!Bl(e,"exterior",!0),a=!!Bl(e,"infinity",!1);if(!r&&!s||n.length===0)return[];var o=_w(n,t);if(i||r!==s||a){for(var l=xw(n.length,ww(t)),c=0;c<o.length;++c){var u=o[c];l.addTriangle(u[0],u[1],u[2])}return i&&yw(n,l),s?r?a?Qh(l,0,a):l.cells():Qh(l,1,a):Qh(l,-1)}else return o}});var Pu=0,mc=1,Lu=2;var Fs=1,Uu=2,Fr=3,Mi=0,je=1,dn=2,kn=0,Br=1,gc=2,vc=3,_c=4,Nu=5;var ki=100,Du=101,Fu=102,Bu=103,Ou=104,zu=200,ku=201,Vu=202,Gu=203,xc=204,yc=205,Hu=206,Wu=207,Xu=208,qu=209,Yu=210,Zu=211,Ju=212,$u=213,Ku=214,Na=0,Da=1,Fa=2,br=3,Ba=4,Oa=5,za=6,ka=7,Mc=0,Qu=1,ju=2,pn=0,Sc=1,wc=2,bc=3,Ec=4,Tc=5,Ac=6,Rc=7;var Cc=300,Si=301,Vi=302,mo=303,go=304,Bs=306,Va=1e3,Dn=1001,Ga=1002,Fe=1003,tf=1004;var Os=1005;var Oe=1006,vo=1007;var wi=1008;var sn=1009,Ic=1010,Pc=1011,Or=1012,_o=1013,An=1014,Rn=1015,Cn=1016,xo=1017,yo=1018,zr=1020,Lc=35902,Uc=35899,Nc=1021,Dc=1022,xn=1023,Bn=1026,bi=1027,Fc=1028,Mo=1029,Ei=1030,So=1031;var wo=1033,zs=33776,ks=33777,Vs=33778,Gs=33779,bo=35840,Eo=35841,To=35842,Ao=35843,Ro=36196,Co=37492,Io=37496,Po=37488,Lo=37489,Hs=37490,Uo=37491,No=37808,Do=37809,Fo=37810,Bo=37811,Oo=37812,zo=37813,ko=37814,Vo=37815,Go=37816,Ho=37817,Wo=37818,Xo=37819,qo=37820,Yo=37821,Zo=36492,Jo=36494,$o=36495,Ko=36283,Qo=36284,Ws=36285,jo=36286;var _s=2300,Ha=2301,La=2302,lc=2303,cc=2400,hc=2401,uc=2402;var ef=3200;var tl=0,nf=1,jn="",Xe="srgb",xs="srgb-linear",ys="linear",oe="srgb";var Ua=7680;var rf=519,sf=512,af=513,of=514,el=515,lf=516,cf=517,nl=518,hf=519,uf=35044;var Bc="300 es",Tn=2e3,Er=2001;function rm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sm(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ms(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ff(){let n=Ms("canvas");return n.style.display="block",n}var su={},Tr=null;function Oc(...n){let t="THREE."+n.shift();Tr?Tr("log",t,...n):console.log(t,...n)}function df(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function zt(...n){n=df(n);let t="THREE."+n.shift();if(Tr)Tr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Vt(...n){n=df(n);let t="THREE."+n.shift();if(Tr)Tr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Bi(...n){let t=n.join(" ");t in su||(su[t]=!0,zt(...n))}function pf(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}var mf={[Na]:Da,[Fa]:za,[Ba]:ka,[br]:Oa,[Da]:Na,[za]:Fa,[ka]:Ba,[Oa]:br},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}},He=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],au=1234567,gs=Math.PI/180,Ar=180/Math.PI;function kr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(He[n&255]+He[n>>8&255]+He[n>>16&255]+He[n>>24&255]+"-"+He[t&255]+He[t>>8&255]+"-"+He[t>>16&15|64]+He[t>>24&255]+"-"+He[e&63|128]+He[e>>8&255]+"-"+He[e>>16&255]+He[e>>24&255]+He[i&255]+He[i>>8&255]+He[i>>16&255]+He[i>>24&255]).toLowerCase()}function jt(n,t,e){return Math.max(t,Math.min(e,n))}function zc(n,t){return(n%t+t)%t}function am(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function om(n,t,e){return n!==t?(e-n)/(t-n):0}function vs(n,t,e){return(1-e)*n+e*t}function lm(n,t,e,i){return vs(n,t,1-Math.exp(-e*i))}function cm(n,t=1){return t-Math.abs(zc(n,t*2)-t)}function hm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function um(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function fm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function dm(n,t){return n+Math.random()*(t-n)}function pm(n){return n*(.5-Math.random())}function mm(n){n!==void 0&&(au=n);let t=au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gm(n){return n*gs}function vm(n){return n*Ar}function _m(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function xm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ym(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Mm(n,t,e,i,r){let s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+i)/2),u=a((t+i)/2),f=s((t-i)/2),d=a((t-i)/2),v=s((i-t)/2),x=a((i-t)/2);switch(r){case"XYX":n.set(o*u,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*u,o*c);break;case"XZX":n.set(o*u,l*x,l*v,o*c);break;case"YXY":n.set(l*v,o*u,l*x,o*c);break;case"ZYZ":n.set(l*x,l*v,o*u,o*c);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sr(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Vr={DEG2RAD:gs,RAD2DEG:Ar,generateUUID:kr,clamp:jt,euclideanModulo:zc,mapLinear:am,inverseLerp:om,lerp:vs,damp:lm,pingpong:cm,smoothstep:hm,smootherstep:um,randInt:fm,randFloat:dm,randFloatSpread:pm,seededRandom:mm,degToRad:gm,radToDeg:vm,isPowerOfTwo:_m,ceilPowerOfTwo:xm,floorPowerOfTwo:ym,setQuaternionFromProperEuler:Mm,normalize:$e,denormalize:Sr},ne=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},zn=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],v=s[a+1],x=s[a+2],M=s[a+3];if(f!==M||l!==d||c!==v||u!==x){let g=l*d+c*v+u*x+f*M;g<0&&(d=-d,v=-v,x=-x,M=-M,g=-g);let _=1-o;if(g<.9995){let L=Math.acos(g),B=Math.sin(L);_=Math.sin(_*L)/B,o=Math.sin(o*L)/B,l=l*_+d*o,c=c*_+v*o,u=u*_+x*o,f=f*_+M*o}else{l=l*_+d*o,c=c*_+v*o,u=u*_+x*o,f=f*_+M*o;let L=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=L,c*=L,u*=L,f*=L}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],v=s[a+2],x=s[a+3];return t[e]=o*x+u*f+l*v-c*d,t[e+1]=l*x+u*d+c*f-o*v,t[e+2]=c*x+u*v+o*d-l*f,t[e+3]=u*x-o*f-l*d-c*v,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),v=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*v*x,this._y=c*v*f-d*u*x,this._z=c*u*x+d*v*f,this._w=c*u*f-d*v*x;break;case"YXZ":this._x=d*u*f+c*v*x,this._y=c*v*f-d*u*x,this._z=c*u*x-d*v*f,this._w=c*u*f+d*v*x;break;case"ZXY":this._x=d*u*f-c*v*x,this._y=c*v*f+d*u*x,this._z=c*u*x+d*v*f,this._w=c*u*f-d*v*x;break;case"ZYX":this._x=d*u*f-c*v*x,this._y=c*v*f+d*u*x,this._z=c*u*x-d*v*f,this._w=c*u*f+d*v*x;break;case"YZX":this._x=d*u*f+c*v*x,this._y=c*v*f+d*u*x,this._z=c*u*x-d*v*f,this._w=c*u*f-d*v*x;break;case"XZY":this._x=d*u*f-c*v*x,this._y=c*v*f-d*u*x,this._z=c*u*x+d*v*f,this._w=c*u*f+d*v*x;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=i+o+f;if(d>0){let v=.5/Math.sqrt(d+1);this._w=.25/v,this._x=(u-l)*v,this._y=(s-c)*v,this._z=(a-r)*v}else if(i>o&&i>f){let v=2*Math.sqrt(1+i-o-f);this._w=(u-l)/v,this._x=.25*v,this._y=(r+a)/v,this._z=(s+c)/v}else if(o>f){let v=2*Math.sqrt(1+o-i-f);this._w=(s-c)/v,this._x=(r+a)/v,this._y=.25*v,this._z=(l+u)/v}else{let v=2*Math.sqrt(1+f-i-o);this._w=(a-r)/v,this._x=(s+c)/v,this._y=(l+u)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},J=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ou.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ou.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),u=2*(o*e-s*r),f=2*(s*i-a*e);return this.x=e+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return kl.copy(this).projectOnVector(t),this.sub(kl)}reflect(t){return this.sub(kl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kl=new J,ou=new zn,Wt=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=r,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],v=i[5],x=i[8],M=r[0],g=r[3],_=r[6],L=r[1],B=r[4],C=r[7],A=r[2],R=r[5],O=r[8];return s[0]=a*M+o*L+l*A,s[3]=a*g+o*B+l*R,s[6]=a*_+o*C+l*O,s[1]=c*M+u*L+f*A,s[4]=c*g+u*B+f*R,s[7]=c*_+u*C+f*O,s[2]=d*M+v*L+x*A,s[5]=d*g+v*B+x*R,s[8]=d*_+v*C+x*O,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*s,v=c*s-a*l,x=e*f+i*d+r*v;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return t[0]=f*M,t[1]=(r*c-u*i)*M,t[2]=(o*i-r*a)*M,t[3]=d*M,t[4]=(u*e-r*l)*M,t[5]=(r*s-o*e)*M,t[6]=v*M,t[7]=(i*l-c*e)*M,t[8]=(a*e-i*s)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Bi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vl.makeScale(t,e)),this}rotate(t){return Bi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vl.makeRotation(-t)),this}translate(t,e){return Bi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Vl=new Wt,lu=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cu=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sm(){let n={enabled:!0,workingColorSpace:xs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===oe&&(r.r=$n(r.r),r.g=$n(r.g),r.b=$n(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[xs]:{primaries:t,whitePoint:i,transfer:ys,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:lu,fromXYZ:cu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}}),n}var Qt=Sm();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var cr,Wa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{cr===void 0&&(cr=Ms("canvas")),cr.width=t.width,cr.height=t.height;let r=cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=cr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ms("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=$n(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor($n(e[i]/255)*255):e[i]=$n(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wm=0,Rr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gl(r[a].image)):s.push(Gl(r[a]))}else s=Gl(r);i.url=s}return e||(t.images[this.uuid]=i),i}};function Gl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var bm=0,Hl=new J,Ke=class n extends On{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Dn,r=Dn,s=Oe,a=wi,o=xn,l=sn,c=n.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=kr(),this.name="",this.source=new Rr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Va:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Va:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Cc;Ke.DEFAULT_ANISOTROPY=1;var ve=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,r=1){this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s,l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],v=l[5],x=l[9],M=l[2],g=l[6],_=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-M)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+M)<.1&&Math.abs(x+g)<.1&&Math.abs(c+v+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let B=(c+1)/2,C=(v+1)/2,A=(_+1)/2,R=(u+d)/4,O=(f+M)/4,S=(x+g)/4;return B>C&&B>A?B<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(B),r=R/i,s=O/i):C>A?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=R/r,s=S/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=O/s,r=S/s),this.set(i,r,s,e),this}let L=Math.sqrt((g-x)*(g-x)+(f-M)*(f-M)+(d-u)*(d-u));return Math.abs(L)<.001&&(L=1),this.x=(g-x)/L,this.y=(f-M)/L,this.z=(d-u)/L,this.w=Math.acos((c+v+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xa=class extends On{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},s=new Ke(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Oe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Rr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Xa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Ss=class extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var qa=class extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ge=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,r,s,a,o,l,c,u,f,d,v,x,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,u,f,d,v,x,M,g)}set(t,e,i,r,s,a,o,l,c,u,f,d,v,x,M,g){let _=this.elements;return _[0]=t,_[4]=e,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=d,_[3]=v,_[7]=x,_[11]=M,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,r=1/hr.setFromMatrixColumn(t,0).length(),s=1/hr.setFromMatrixColumn(t,1).length(),a=1/hr.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){let d=a*u,v=a*f,x=o*u,M=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=v+x*c,e[5]=d-M*c,e[9]=-o*l,e[2]=M-d*c,e[6]=x+v*c,e[10]=a*l}else if(t.order==="YXZ"){let d=l*u,v=l*f,x=c*u,M=c*f;e[0]=d+M*o,e[4]=x*o-v,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=v*o-x,e[6]=M+d*o,e[10]=a*l}else if(t.order==="ZXY"){let d=l*u,v=l*f,x=c*u,M=c*f;e[0]=d-M*o,e[4]=-a*f,e[8]=x+v*o,e[1]=v+x*o,e[5]=a*u,e[9]=M-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let d=a*u,v=a*f,x=o*u,M=o*f;e[0]=l*u,e[4]=x*c-v,e[8]=d*c+M,e[1]=l*f,e[5]=M*c+d,e[9]=v*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let d=a*l,v=a*c,x=o*l,M=o*c;e[0]=l*u,e[4]=M-d*f,e[8]=x*f+v,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=v*f+x,e[10]=d-M*f}else if(t.order==="XZY"){let d=a*l,v=a*c,x=o*l,M=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+M,e[5]=a*u,e[9]=v*f-x,e[2]=x*f-v,e[6]=o*u,e[10]=M*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Em,t,Tm)}lookAt(t,e,i){let r=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ci.crossVectors(i,cn),ci.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ci.crossVectors(i,cn)),ci.normalize(),ua.crossVectors(cn,ci),r[0]=ci.x,r[4]=ua.x,r[8]=cn.x,r[1]=ci.y,r[5]=ua.y,r[9]=cn.y,r[2]=ci.z,r[6]=ua.z,r[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],v=i[13],x=i[2],M=i[6],g=i[10],_=i[14],L=i[3],B=i[7],C=i[11],A=i[15],R=r[0],O=r[4],S=r[8],N=r[12],w=r[1],h=r[5],m=r[9],b=r[13],y=r[2],E=r[6],D=r[10],F=r[14],I=r[3],p=r[7],P=r[11],H=r[15];return s[0]=a*R+o*w+l*y+c*I,s[4]=a*O+o*h+l*E+c*p,s[8]=a*S+o*m+l*D+c*P,s[12]=a*N+o*b+l*F+c*H,s[1]=u*R+f*w+d*y+v*I,s[5]=u*O+f*h+d*E+v*p,s[9]=u*S+f*m+d*D+v*P,s[13]=u*N+f*b+d*F+v*H,s[2]=x*R+M*w+g*y+_*I,s[6]=x*O+M*h+g*E+_*p,s[10]=x*S+M*m+g*D+_*P,s[14]=x*N+M*b+g*F+_*H,s[3]=L*R+B*w+C*y+A*I,s[7]=L*O+B*h+C*E+A*p,s[11]=L*S+B*m+C*D+A*P,s[15]=L*N+B*b+C*F+A*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],v=t[14],x=t[3],M=t[7],g=t[11],_=t[15],L=l*v-c*d,B=o*v-c*f,C=o*d-l*f,A=a*v-c*u,R=a*d-l*u,O=a*f-o*u;return e*(M*L-g*B+_*C)-i*(x*L-g*A+_*R)+r*(x*B-M*A+_*O)-s*(x*C-M*R+g*O)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],r=t[8],s=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],v=t[11],x=t[12],M=t[13],g=t[14],_=t[15],L=e*o-i*a,B=e*l-r*a,C=e*c-s*a,A=i*l-r*o,R=i*c-s*o,O=r*c-s*l,S=u*M-f*x,N=u*g-d*x,w=u*_-v*x,h=f*g-d*M,m=f*_-v*M,b=d*_-v*g,y=L*b-B*m+C*h+A*w-R*N+O*S;if(y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/y;return t[0]=(o*b-l*m+c*h)*E,t[1]=(r*m-i*b-s*h)*E,t[2]=(M*O-g*R+_*A)*E,t[3]=(d*R-f*O-v*A)*E,t[4]=(l*w-a*b-c*N)*E,t[5]=(e*b-r*w+s*N)*E,t[6]=(g*C-x*O-_*B)*E,t[7]=(u*O-d*C+v*B)*E,t[8]=(a*m-o*w+c*S)*E,t[9]=(i*w-e*m-s*S)*E,t[10]=(x*R-M*C+_*L)*E,t[11]=(f*C-u*R-v*L)*E,t[12]=(o*N-a*h-l*S)*E,t[13]=(e*h-i*N+r*S)*E,t[14]=(M*B-x*A-g*L)*E,t[15]=(u*A-f*B+d*L)*E,this}scale(t){let e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){let r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,d=s*c,v=s*u,x=s*f,M=a*u,g=a*f,_=o*f,L=l*c,B=l*u,C=l*f,A=i.x,R=i.y,O=i.z;return r[0]=(1-(M+_))*A,r[1]=(v+C)*A,r[2]=(x-B)*A,r[3]=0,r[4]=(v-C)*R,r[5]=(1-(d+_))*R,r[6]=(g+L)*R,r[7]=0,r[8]=(x+B)*O,r[9]=(g-L)*O,r[10]=(1-(d+M))*O,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return i.set(1,1,1),e.identity(),this;let a=hr.set(r[0],r[1],r[2]).length(),o=hr.set(r[4],r[5],r[6]).length(),l=hr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Sn.copy(this);let c=1/a,u=1/o,f=1/l;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,r,s,a,o=Tn,l=!1){let c=this.elements,u=2*s/(e-t),f=2*s/(i-r),d=(e+t)/(e-t),v=(i+r)/(i-r),x,M;if(l)x=s/(a-s),M=a*s/(a-s);else if(o===Tn)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Er)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=v,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Tn,l=!1){let c=this.elements,u=2/(e-t),f=2/(i-r),d=-(e+t)/(e-t),v=-(i+r)/(i-r),x,M;if(l)x=1/(a-s),M=a/(a-s);else if(o===Tn)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===Er)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=v,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},hr=new J,Sn=new ge,Em=new J(0,0,0),Tm=new J(1,1,1),ci=new J,ua=new J,cn=new J,hu=new ge,uu=new zn,Kn=class n{constructor(t=0,e=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],v=r[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,v),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,v),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,v),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-jt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,v),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,v));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,v),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return hu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return uu.setFromEuler(this),this.setFromQuaternion(uu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Kn.DEFAULT_ORDER="XYZ";var ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Am=0,fu=new J,ur=new zn,Xn=new ge,fa=new J,us=new J,Rm=new J,Cm=new zn,du=new J(1,0,0),pu=new J(0,1,0),mu=new J(0,0,1),gu={type:"added"},Im={type:"removed"},fr={type:"childadded",child:null},Wl={type:"childremoved",child:null},Ye=class n extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new J,e=new Kn,i=new zn,r=new J(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new Wt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.multiply(ur),this}rotateOnWorldAxis(t,e){return ur.setFromAxisAngle(t,e),this.quaternion.premultiply(ur),this}rotateX(t){return this.rotateOnAxis(du,t)}rotateY(t){return this.rotateOnAxis(pu,t)}rotateZ(t){return this.rotateOnAxis(mu,t)}translateOnAxis(t,e){return fu.copy(t).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(du,t)}translateY(t){return this.translateOnAxis(pu,t)}translateZ(t){return this.translateOnAxis(mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fa.copy(t):fa.set(t,e,i);let r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(us,fa,this.up):Xn.lookAt(fa,us,this.up),this.quaternion.setFromRotationMatrix(Xn),r&&(Xn.extractRotation(r.matrixWorld),ur.setFromRotationMatrix(Xn),this.quaternion.premultiply(ur.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gu),fr.child=t,this.dispatchEvent(fr),fr.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Im),Wl.child=t,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gu),fr.child=t,this.dispatchEvent(fr),fr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,t,Rm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Cm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*i-s[8]*r,s[13]+=i-s[1]*e-s[5]*i-s[9]*r,s[14]+=r-s[2]*e-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),v=a(t.animations),x=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),v.length>0&&(i.animations=v),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let r=t.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new J(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fn=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Pm={type:"move"},Cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let g=e.getJointPose(M,i),_=this._getHandJoint(c,M);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),v=.02,x=.005;c.inputState.pinching&&d>v+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=v-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pm)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Fn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},da={h:0,s:0,l:0};function Xl(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=zc(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Xl(a,s,t+1/3),this.g=Xl(a,s,t),this.b=Xl(a,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=Xe){function i(s){s!==void 0&&parseFloat(s)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){let i=gf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$n(t.r),this.g=$n(t.g),this.b=$n(t.b),this}copyLinearToSRGB(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Qt.workingToColorSpace(We.copy(this),t),Math.round(jt(We.r*255,0,255))*65536+Math.round(jt(We.g*255,0,255))*256+Math.round(jt(We.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(We.copy(this),e);let i=We.r,r=We.g,s=We.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Xe){Qt.workingToColorSpace(We.copy(this),t);let e=We.r,i=We.g,r=We.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(da);let i=vs(hi.h,da.h,e),r=vs(hi.s,da.s,e),s=vs(hi.l,da.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Kt;Kt.NAMES=gf;var bs=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Kn,this.environmentIntensity=1,this.environmentRotation=new Kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},wn=new J,qn=new J,ql=new J,Yn=new J,dr=new J,pr=new J,vu=new J,Yl=new J,Zl=new J,Jl=new J,$l=new ve,Kl=new ve,Ql=new ve,pi=class n{constructor(t=new J,e=new J,i=new J){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),wn.subVectors(t,e),r.cross(wn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){wn.subVectors(r,e),qn.subVectors(i,e),ql.subVectors(t,e);let a=wn.dot(wn),o=wn.dot(qn),l=wn.dot(ql),c=qn.dot(qn),u=qn.dot(ql),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let d=1/f,v=(c*l-o*u)*d,x=(a*u-o*l)*d;return s.set(1-v-x,x,v)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return $l.setScalar(0),Kl.setScalar(0),Ql.setScalar(0),$l.fromBufferAttribute(t,e),Kl.fromBufferAttribute(t,i),Ql.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector($l,s.x),a.addScaledVector(Kl,s.y),a.addScaledVector(Ql,s.z),a}static isFrontFacing(t,e,i,r){return wn.subVectors(i,e),qn.subVectors(t,e),wn.cross(qn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),wn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return n.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,r=this.b,s=this.c,a,o;dr.subVectors(r,i),pr.subVectors(s,i),Yl.subVectors(t,i);let l=dr.dot(Yl),c=pr.dot(Yl);if(l<=0&&c<=0)return e.copy(i);Zl.subVectors(t,r);let u=dr.dot(Zl),f=pr.dot(Zl);if(u>=0&&f<=u)return e.copy(r);let d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(i).addScaledVector(dr,a);Jl.subVectors(t,s);let v=dr.dot(Jl),x=pr.dot(Jl);if(x>=0&&v<=x)return e.copy(s);let M=v*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(i).addScaledVector(pr,o);let g=u*x-v*f;if(g<=0&&f-u>=0&&v-x>=0)return vu.subVectors(s,r),o=(f-u)/(f-u+(v-x)),e.copy(r).addScaledVector(vu,o);let _=1/(g+M+d);return a=M*_,o=d*_,e.copy(i).addScaledVector(dr,a).addScaledVector(pr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},mi=class{constructor(t=new J(1/0,1/0,1/0),e=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(bn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(bn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,bn):bn.fromBufferAttribute(s,a),bn.applyMatrix4(t.matrixWorld),this.expandByPoint(bn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bn),bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fs),ma.subVectors(this.max,fs),mr.subVectors(t.a,fs),gr.subVectors(t.b,fs),vr.subVectors(t.c,fs),ui.subVectors(gr,mr),fi.subVectors(vr,gr),Ui.subVectors(mr,vr);let e=[0,-ui.z,ui.y,0,-fi.z,fi.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,fi.z,0,-fi.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-fi.y,fi.x,0,-Ui.y,Ui.x,0];return!jl(e,mr,gr,vr,ma)||(e=[1,0,0,0,1,0,0,0,1],!jl(e,mr,gr,vr,ma))?!1:(ga.crossVectors(ui,fi),e=[ga.x,ga.y,ga.z],jl(e,mr,gr,vr,ma))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new J,new J,new J,new J,new J,new J,new J,new J],bn=new J,pa=new mi,mr=new J,gr=new J,vr=new J,ui=new J,fi=new J,Ui=new J,fs=new J,ma=new J,ga=new J,Ni=new J;function jl(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ni.fromArray(n,s);let o=r.x*Math.abs(Ni.x)+r.y*Math.abs(Ni.y)+r.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),u=i.dot(Ni);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Ie=new J,va=new ne,Lm=0,_n=class extends On{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uf,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix3(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyMatrix4(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.applyNormalMatrix(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ie.fromBufferAttribute(this,e),Ie.transformDirection(t),this.setXYZ(e,Ie.x,Ie.y,Ie.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Sr(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Sr(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Sr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Sr(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),r=$e(r,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Es=class extends _n{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Ts=class extends _n{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Le=class extends _n{constructor(t,e,i){super(new Float32Array(t),e,i)}},Um=new mi,ds=new J,tc=new J,Oi=class{constructor(t=new J,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Um.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ds.subVectors(t,this.center);let e=ds.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ds,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ds.copy(t.center).add(tc)),this.expandByPoint(ds.copy(t.center).sub(tc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nm=0,vn=new ge,ec=new Ye,_r=new J,hn=new mi,ps=new mi,De=new J,Qe=class n extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rm(t)?Ts:Es)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return vn.makeRotationFromQuaternion(t),this.applyMatrix4(vn),this}rotateX(t){return vn.makeRotationX(t),this.applyMatrix4(vn),this}rotateY(t){return vn.makeRotationY(t),this.applyMatrix4(vn),this}rotateZ(t){return vn.makeRotationZ(t),this.applyMatrix4(vn),this}translate(t,e,i){return vn.makeTranslation(t,e,i),this.applyMatrix4(vn),this}scale(t,e,i){return vn.makeScale(t,e,i),this.applyMatrix4(vn),this}lookAt(t){return ec.lookAt(t),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let r=0,s=t.length;r<s;r++){let a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Le(i,3))}else{let i=Math.min(t.length,e.count);for(let r=0;r<i;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){let s=e[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(t){let i=this.boundingSphere.center;if(hn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];ps.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(hn.min,ps.min),hn.expandByPoint(De),De.addVectors(hn.max,ps.max),hn.expandByPoint(De)):(hn.expandByPoint(ps.min),hn.expandByPoint(ps.max))}hn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)De.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(De));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)De.fromBufferAttribute(o,c),l&&(_r.fromBufferAttribute(t,c),De.add(_r)),r=Math.max(r,i.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,r=e.normal,s=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new J,l[S]=new J;let c=new J,u=new J,f=new J,d=new ne,v=new ne,x=new ne,M=new J,g=new J;function _(S,N,w){c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,N),f.fromBufferAttribute(i,w),d.fromBufferAttribute(s,S),v.fromBufferAttribute(s,N),x.fromBufferAttribute(s,w),u.sub(c),f.sub(c),v.sub(d),x.sub(d);let h=1/(v.x*x.y-x.x*v.y);isFinite(h)&&(M.copy(u).multiplyScalar(x.y).addScaledVector(f,-v.y).multiplyScalar(h),g.copy(f).multiplyScalar(v.x).addScaledVector(u,-x.x).multiplyScalar(h),o[S].add(M),o[N].add(M),o[w].add(M),l[S].add(g),l[N].add(g),l[w].add(g))}let L=this.groups;L.length===0&&(L=[{start:0,count:t.count}]);for(let S=0,N=L.length;S<N;++S){let w=L[S],h=w.start,m=w.count;for(let b=h,y=h+m;b<y;b+=3)_(t.getX(b+0),t.getX(b+1),t.getX(b+2))}let B=new J,C=new J,A=new J,R=new J;function O(S){A.fromBufferAttribute(r,S),R.copy(A);let N=o[S];B.copy(N),B.sub(A.multiplyScalar(A.dot(N))).normalize(),C.crossVectors(R,N);let h=C.dot(l[S])<0?-1:1;a.setXYZW(S,B.x,B.y,B.z,h)}for(let S=0,N=L.length;S<N;++S){let w=L[S],h=w.start,m=w.count;for(let b=h,y=h+m;b<y;b+=3)O(t.getX(b+0)),O(t.getX(b+1)),O(t.getX(b+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,v=i.count;d<v;d++)i.setXYZ(d,0,0,0);let r=new J,s=new J,a=new J,o=new J,l=new J,c=new J,u=new J,f=new J;if(t)for(let d=0,v=t.count;d<v;d+=3){let x=t.getX(d+0),M=t.getX(d+1),g=t.getX(d+2);r.fromBufferAttribute(e,x),s.fromBufferAttribute(e,M),a.fromBufferAttribute(e,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,v=e.count;d<v;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u),v=0,x=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?v=l[M]*o.data.stride+o.offset:v=l[M]*u;for(let _=0;_<u;_++)d[x++]=c[v++]}return new _n(d,u,f)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=t(l,i);e.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){let d=c[u],v=t(d,i);l.push(v)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){let v=c[f];u.push(v.toJSON(t.data))}u.length>0&&(r[l]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let r=t.attributes;for(let c in r){let u=r[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],f=s[c];for(let d=0,v=f.length;d<v;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nc=new J,Dm=new J,Fm=new Wt,En=class{constructor(t=new J(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=nc.subVectors(i,e).cross(Dm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(nc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(r,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Fm.getNormalMatrix(t),r=this.coplanarPoint(nc).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bm=0,Qn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Br,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xc,this.blendDst=yc,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(e){let s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new En().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ne().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ne().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Jn=new J,ic=new J,_a=new J,xa=new J,As=class{constructor(t=new J,e=new J(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){ic.copy(t).add(e).multiplyScalar(.5),_a.copy(e).sub(t).normalize(),xa.copy(this.origin).sub(ic);let s=t.distanceTo(e)*.5,a=-this.direction.dot(_a),o=xa.dot(this.direction),l=-xa.dot(_a),c=xa.lengthSq(),u=Math.abs(1-a*a),f,d,v,x;if(u>0)if(f=a*l-o,d=a*o-l,x=s*u,f>=0)if(d>=-x)if(d<=x){let M=1/u;f*=M,d*=M,v=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),v=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),v=-f*f+d*(d+2*l)+c;else d<=-x?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),v=-f*f+d*(d+2*l)+c):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),v=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),v=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),v=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ic).addScaledVector(_a,d),v}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=t.radius*t.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,r=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,r=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,r,s){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=t.x-a.x,d=t.y-a.y,v=t.z-a.z,x=e.x-a.x,M=e.y-a.y,g=e.z-a.z,_=i.x-a.x,L=i.y-a.y,B=i.z-a.z,C=Math.abs(l),A=Math.abs(c),R=Math.abs(u),O,S,N,w,h,m,b,y,E,D,F,I;if(C>=A&&C>=R?(N=l,m=f,E=x,I=_,l>=0?(O=c,S=u,w=d,h=v,b=M,y=g,D=L,F=B):(O=u,S=c,w=v,h=d,b=g,y=M,D=B,F=L)):A>=R?(N=c,m=d,E=M,I=L,c>=0?(O=u,S=l,w=v,h=f,b=g,y=x,D=B,F=_):(O=l,S=u,w=f,h=v,b=x,y=g,D=_,F=B)):(N=u,m=v,E=g,I=B,u>=0?(O=l,S=c,w=f,h=d,b=x,y=M,D=_,F=L):(O=c,S=l,w=d,h=f,b=M,y=x,D=L,F=_)),N===0)return null;let p=O/N,P=S/N,H=1/N,nt=w-p*m,et=h-P*m,ut=b-p*E,Et=y-P*E,pt=D-p*I,$=F-P*I,q=pt*Et-$*ut,at=nt*$-et*pt,bt=ut*et-Et*nt;if(r){if(q<0||at<0||bt<0)return null}else if((q<0||at<0||bt<0)&&(q>0||at>0||bt>0))return null;let ft=q+at+bt;if(ft===0)return null;let Lt=H*(q*m+at*E+bt*I);return(ft>0?Lt<0:Lt>0)?null:this.at(Lt/ft,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zi=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},_u=new ge,Di=new As,ya=new Oi,xu=new J,Ma=new J,Sa=new J,wa=new J,rc=new J,ba=new J,yu=new J,Ea=new J,ze=class extends Ye{constructor(t=new Qe,e=new zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let o=this.morphTargetInfluences;if(s&&o){ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=o[l],f=s[l];u!==0&&(rc.fromBufferAttribute(f,t),a?ba.addScaledVector(rc,u):ba.addScaledVector(rc.sub(e),u))}e.add(ba)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(s),Di.copy(t.ray).recast(t.near),!(ya.containsPoint(Di.origin)===!1&&(Di.intersectSphere(ya,xu)===null||Di.origin.distanceToSquared(xu)>(t.far-t.near)**2))&&(_u.copy(s).invert(),Di.copy(t.ray).applyMatrix4(_u),!(i.boundingBox!==null&&Di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Di)))}_computeIntersections(t,e,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,v=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){let g=d[x],_=a[g.materialIndex],L=Math.max(g.start,v.start),B=Math.min(o.count,Math.min(g.start+g.count,v.start+v.count));for(let C=L,A=B;C<A;C+=3){let R=o.getX(C),O=o.getX(C+1),S=o.getX(C+2);r=Ta(this,_,t,i,c,u,f,R,O,S),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let x=Math.max(0,v.start),M=Math.min(o.count,v.start+v.count);for(let g=x,_=M;g<_;g+=3){let L=o.getX(g),B=o.getX(g+1),C=o.getX(g+2);r=Ta(this,a,t,i,c,u,f,L,B,C),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=d.length;x<M;x++){let g=d[x],_=a[g.materialIndex],L=Math.max(g.start,v.start),B=Math.min(l.count,Math.min(g.start+g.count,v.start+v.count));for(let C=L,A=B;C<A;C+=3){let R=C,O=C+1,S=C+2;r=Ta(this,_,t,i,c,u,f,R,O,S),r&&(r.faceIndex=Math.floor(C/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let x=Math.max(0,v.start),M=Math.min(l.count,v.start+v.count);for(let g=x,_=M;g<_;g+=3){let L=g,B=g+1,C=g+2;r=Ta(this,a,t,i,c,u,f,L,B,C),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Om(n,t,e,i,r,s,a,o){let l;if(t.side===je?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===Mi,o),l===null)return null;Ea.copy(o),Ea.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Ea);return c<e.near||c>e.far?null:{distance:c,point:Ea.clone(),object:n}}function Ta(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,Ma),n.getVertexPosition(l,Sa),n.getVertexPosition(c,wa);let u=Om(n,t,e,i,Ma,Sa,wa,yu);if(u){let f=new J;pi.getBarycoord(yu,Ma,Sa,wa,f),r&&(u.uv=pi.getInterpolatedAttribute(r,o,l,c,f,new ne)),s&&(u.uv1=pi.getInterpolatedAttribute(s,o,l,c,f,new ne)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new J,materialIndex:0};pi.getNormal(Ma,Sa,wa,d.normal),u.face=d,u.barycoord=f}return u}var Ya=class extends Ke{constructor(t=null,e=1,i=1,r,s,a,o,l,c=Fe,u=Fe,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fi=new Oi,zm=new ne(.5,.5),Aa=new J,Ir=class{constructor(t=new En,e=new En,i=new En,r=new En,s=new En,a=new En){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Tn,i=!1){let r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],v=s[7],x=s[8],M=s[9],g=s[10],_=s[11],L=s[12],B=s[13],C=s[14],A=s[15];if(r[0].setComponents(c-a,v-u,_-x,A-L).normalize(),r[1].setComponents(c+a,v+u,_+x,A+L).normalize(),r[2].setComponents(c+o,v+f,_+M,A+B).normalize(),r[3].setComponents(c-o,v-f,_-M,A-B).normalize(),i)r[4].setComponents(l,d,g,C).normalize(),r[5].setComponents(c-l,v-d,_-g,A-C).normalize();else if(r[4].setComponents(c-l,v-d,_-g,A-C).normalize(),e===Tn)r[5].setComponents(c+l,v+d,_+g,A+C).normalize();else if(e===Er)r[5].setComponents(l,d,g,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){Fi.center.set(0,0,0);let e=zm.distanceTo(t.center);return Fi.radius=.7071067811865476+e,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Aa.x=r.normal.x>0?t.max.x:t.min.x,Aa.y=r.normal.y>0?t.max.y:t.min.y,Aa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Pr=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Za=new J,Ja=new J,Mu=new ge,ms=new As,Ra=new Oi,sc=new J,Su=new J,$a=class extends Ye{constructor(t=new Qe,e=new Pr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Za.fromBufferAttribute(e,r-1),Ja.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Za.distanceTo(Ja);t.setAttribute("lineDistance",new Le(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ra.copy(i.boundingSphere),Ra.applyMatrix4(r),Ra.radius+=s,t.ray.intersectsSphere(Ra)===!1)return;Mu.copy(r).invert(),ms.copy(t.ray).applyMatrix4(Mu);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){let v=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let M=v,g=x-1;M<g;M+=c){let _=u.getX(M),L=u.getX(M+1),B=Ca(this,t,ms,l,_,L,M);B&&e.push(B)}if(this.isLineLoop){let M=u.getX(x-1),g=u.getX(v),_=Ca(this,t,ms,l,M,g,x-1);_&&e.push(_)}}else{let v=Math.max(0,a.start),x=Math.min(d.count,a.start+a.count);for(let M=v,g=x-1;M<g;M+=c){let _=Ca(this,t,ms,l,M,M+1,M);_&&e.push(_)}if(this.isLineLoop){let M=Ca(this,t,ms,l,x-1,v,x-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Ca(n,t,e,i,r,s,a){let o=n.geometry.attributes.position;if(Za.fromBufferAttribute(o,r),Ja.fromBufferAttribute(o,s),e.distanceSqToSegment(Za,Ja,sc,Su)>i)return;sc.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(sc);if(!(c<t.near||c>t.far))return{distance:c,point:Su.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var wu=new J,bu=new J,Lr=class extends $a{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let r=0,s=e.count;r<s;r+=2)wu.fromBufferAttribute(e,r),bu.fromBufferAttribute(e,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+wu.distanceTo(bu);t.setAttribute("lineDistance",new Le(i,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Rs=class extends Ke{constructor(t=[],e=Si,i,r,s,a,o,l,c,u){super(t,e,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Cs=class extends Ke{constructor(t,e,i,r,s,a,o,l,c){super(t,e,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends Ke{constructor(t,e,i=An,r,s,a,o=Fe,l=Fe,c,u=Bn,f=1){if(u!==Bn&&u!==bi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Rr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ka=class extends gi{constructor(t,e=An,i=Si,r,s,a=Fe,o=Fe,l,c=Bn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Is=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ur=class n extends Qe{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],u=[],f=[],d=0,v=0;x("z","y","x",-1,-1,i,e,t,a,s,0),x("z","y","x",1,-1,i,e,-t,a,s,1),x("x","z","y",1,1,t,i,e,r,a,2),x("x","z","y",1,-1,t,i,-e,r,a,3),x("x","y","z",1,-1,t,e,i,r,s,4),x("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Le(c,3)),this.setAttribute("normal",new Le(u,3)),this.setAttribute("uv",new Le(f,2));function x(M,g,_,L,B,C,A,R,O,S,N){let w=C/O,h=A/S,m=C/2,b=A/2,y=R/2,E=O+1,D=S+1,F=0,I=0,p=new J;for(let P=0;P<D;P++){let H=P*h-b;for(let nt=0;nt<E;nt++){let et=nt*w-m;p[M]=et*L,p[g]=H*B,p[_]=y,c.push(p.x,p.y,p.z),p[M]=0,p[g]=0,p[_]=R>0?1:-1,u.push(p.x,p.y,p.z),f.push(nt/O),f.push(1-P/S),F+=1}}for(let P=0;P<S;P++)for(let H=0;H<O;H++){let nt=d+H+E*P,et=d+H+E*(P+1),ut=d+(H+1)+E*(P+1),Et=d+(H+1)+E*P;l.push(nt,et,Et),l.push(et,ut,Et),I+=6}o.addGroup(v,I,N),v+=I,d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var vi=class n extends Qe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};let s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=t/o,d=e/l,v=[],x=[],M=[],g=[];for(let _=0;_<u;_++){let L=_*d-a;for(let B=0;B<c;B++){let C=B*f-s;x.push(C,-L,0),M.push(0,0,1),g.push(B/o),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let L=0;L<o;L++){let B=L+c*_,C=L+c*(_+1),A=L+1+c*(_+1),R=L+1+c*_;v.push(B,C,R),v.push(C,A,R)}this.setIndex(v),this.setAttribute("position",new Le(x,3)),this.setAttribute("normal",new Le(M,3)),this.setAttribute("uv",new Le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};function Gi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let r=n[e][i];if(Eu(r))r.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone();else if(Array.isArray(r))if(Eu(r[0])){let s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();t[e][i]=s}else t[e][i]=r.slice();else t[e][i]=r}}return t}function Ze(n){let t={};for(let e=0;e<n.length;e++){let i=Gi(n[e]);for(let r in i)t[r]=i[r]}return t}function Eu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function km(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function kc(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var vf={clone:Gi,merge:Ze},Vm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vm,this.fragmentShader=Gm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=km(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(r.value);break;case"v2":this.uniforms[i].value=new ne().fromArray(r.value);break;case"v3":this.uniforms[i].value=new J().fromArray(r.value);break;case"v4":this.uniforms[i].value=new ve().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Wt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ge().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Qa=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ps=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ja=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},to=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function xr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ac(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var _i=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],s=e[i-1];t:{e:{let a;n:{i:if(!(t<r)){for(let o=i+2;;){if(r===void 0){if(t<s)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=e[++i],t<r)break e}a=e.length;break n}if(!(t>=s)){let o=e[1];t<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=e[--i-1],t>=s)break e}a=i,i=0;break n}break t}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(r=e[i],s=e[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=t*r;for(let a=0;a!==r;++a)e[a]=i[s+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eo=class extends _i{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cc,endingEnd:cc}}intervalChanged_(t,e,i){let r=this.parameterPositions,s=t-2,a=t+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case hc:s=t,o=2*e-i;break;case uc:s=r.length-2,o=e+r[s]-r[s+1];break;default:s=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:a=t,l=2*i-e;break;case uc:a=1,l=i+r[1]-r[0];break;default:a=t-1,l=e}let c=(i-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,v=this._weightNext,x=(i-e)/(r-e),M=x*x,g=M*x,_=-d*g+2*d*M-d*x,L=(1+d)*g+(-1.5-2*d)*M+(-.5+d)*x+1,B=(-1-v)*g+(1.5+v)*M+.5*x,C=v*g-v*M;for(let A=0;A!==o;++A)s[A]=_*a[u+A]+L*a[c+A]+B*a[l+A]+C*a[f+A];return s}},no=class extends _i{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(i-e)/(r-e),f=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*u;return s}},io=class extends _i{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ro=class extends _i{interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let x=(i-e)/(r-e),M=1-x;for(let g=0;g!==o;++g)s[g]=a[c+g]*M+a[l+g]*x;return s}let d=o*2,v=t-1;for(let x=0;x!==o;++x){let M=a[c+x],g=a[l+x],_=v*d+x*2,L=f[_],B=f[_+1],C=t*d+x*2,A=u[C],R=u[C+1],O=Wm(i,e,L,A,r);s[x]=_f(O,M,B,R,g)}return s}};function _f(n,t,e,i,r){let s=1-n;return s*s*s*t+3*s*s*n*e+3*s*n*n*i+n*n*n*r}function Hm(n,t,e,i,r){let s=1-n;return 3*s*s*(e-t)+6*s*n*(i-e)+3*n*n*(r-i)}function Wm(n,t,e,i,r){let s=(n-t)/(r-t);for(let a=0;a<8;a++){let o=_f(s,t,e,i,r)-n;if(Math.abs(o)<1e-10)break;let l=Hm(s,t,e,i,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var fn=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=xr(e,this.TimeBufferType),this.values=xr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:xr(t.times,Array),values:xr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),ac(t.settings)&&(i.settings={inTangents:xr(t.settings.inTangents,Array),outTangents:xr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new no(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new eo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ro(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case Ha:e=this.InterpolantFactoryMethodLinear;break;case La:e=this.InterpolantFactoryMethodSmooth;break;case lc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return Ha;case this.InterpolantFactoryMethodSmooth:return La;case this.InterpolantFactoryMethodBezier:return lc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;ac(this.settings)&&(Tu(this.settings.inTangents,t),Tu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<t;)++s;for(;a!==-1&&i[a]>e;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,s=i.length;s===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(r!==void 0&&sm(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===La,s=t.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(r)l=!0;else{let f=o*i,d=f-i,v=f+i;for(let x=0;x!==i;++x){let M=e[f+x];if(M!==e[d+x]||M!==e[v+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*i,d=a*i;for(let v=0;v!==i;++v)e[d+v]=e[f+v]}++a}}if(s>0){t[a]=t[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,ac(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Tu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ha;var xi=class extends fn{constructor(t,e,i){super(t,e,i)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=_s;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};so.prototype.ValueTypeName="color";var ao=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};ao.prototype.ValueTypeName="number";var oo=class extends _i{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(r-e),c=t*o;for(let u=c+o;c!==u;c+=4)zn.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ls=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new oo(this.times,this.values,this.getValueSize(),t)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var yi=class extends fn{constructor(t,e,i){super(t,e,i)}};yi.prototype.ValueTypeName="string";yi.prototype.ValueBufferType=Array;yi.prototype.DefaultInterpolation=_s;yi.prototype.InterpolantFactoryMethodLinear=void 0;yi.prototype.InterpolantFactoryMethodSmooth=void 0;var lo=class extends fn{constructor(t,e,i,r){super(t,e,i,r)}};lo.prototype.ValueTypeName="vector";var co=class{constructor(t,e,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){let v=c[f],x=c[f+1];if(v.global&&(v.lastIndex=0),v.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xf=new co,ho=class{constructor(t){this.manager=t!==void 0?t:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ho.DEFAULT_MATERIAL_NAME="__DEFAULT";var Us=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var oc=new ge,Au=new J,Ru=new J,uo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ir,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Au.setFromMatrixPosition(t.matrixWorld),e.position.copy(Au),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(oc,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;t.coordinateSystem===Er||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ia=new J,Pa=new zn,Nn=new J,Ns=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,Pa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ia,Pa,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,Pa,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new J,Cu=new ne,Iu=new ne,qe=class extends Ns{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ar*2*Math.atan(Math.tan(gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Iu),e.subVectors(Iu,Cu)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gs*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Nr=class extends Ns{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fc=class extends uo{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Dr=class extends Us{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new fc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ds=class extends Us{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var yr=-90,Mr=1,fo=class extends Ye{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qe(yr,Mr,t,e);r.layers=this.layers,this.add(r);let s=new qe(yr,Mr,t,e);s.layers=this.layers,this.add(s);let a=new qe(yr,Mr,t,e);a.layers=this.layers,this.add(a);let o=new qe(yr,Mr,t,e);o.layers=this.layers,this.add(o);let l=new qe(yr,Mr,t,e);l.layers=this.layers,this.add(l);let c=new qe(yr,Mr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(let c of e)this.remove(c);if(t===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Er)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),v=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,d,v),t.xr.enabled=x,i.texture.needsPMREMUpdate=!0}},po=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Vc="\\[\\]\\.:\\/",Xm=new RegExp("["+Vc+"]","g"),Gc="[^"+Vc+"]",qm="[^"+Vc.replace("\\.","")+"]",Ym=/((?:WC+[\/:])*)/.source.replace("WC",Gc),Zm=/(WCOD+)?/.source.replace("WCOD",qm),Jm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gc),$m=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gc),Km=new RegExp("^"+Ym+Zm+Jm+$m+"$"),Qm=["material","materials","bones","map"],dc=class{constructor(t,e,i){let r=i||pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xm,"")}static parseTrackName(t){let e=Km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Qm.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},r=i(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)t[e++]=i[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[r];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pe.Composite=dc;pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pe.prototype.GetterByBindingType=[pe.prototype._getValue_direct,pe.prototype._getValue_array,pe.prototype._getValue_arrayElement,pe.prototype._getValue_toArray];pe.prototype.SetterByBindingTypeAndVersioning=[[pe.prototype._setValue_direct,pe.prototype._setValue_direct_setNeedsUpdate,pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_array,pe.prototype._setValue_array_setNeedsUpdate,pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_arrayElement,pe.prototype._setValue_arrayElement_setNeedsUpdate,pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pe.prototype._setValue_fromArray,pe.prototype._setValue_fromArray_setNeedsUpdate,pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cw=new Float32Array(1);var pc=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=i,s[3]=r,this}};function Hc(n,t,e,i){let r=jm(i);switch(e){case Nc:return n*t;case Fc:return n*t/r.components*r.byteLength;case Mo:return n*t/r.components*r.byteLength;case Ei:return n*t*2/r.components*r.byteLength;case So:return n*t*2/r.components*r.byteLength;case Dc:return n*t*3/r.components*r.byteLength;case xn:return n*t*4/r.components*r.byteLength;case wo:return n*t*4/r.components*r.byteLength;case zs:case ks:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vs:case Gs:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Eo:case Ao:return Math.max(n,16)*Math.max(t,8)/4;case bo:case To:return Math.max(n,8)*Math.max(t,8)/2;case Ro:case Co:case Po:case Lo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Hs:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case No:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Oo:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zo:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ko:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Go:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Wo:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Xo:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case qo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Yo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Zo:case Jo:case $o:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ko:case Qo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ws:case jo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jm(n){switch(n){case sn:case Ic:return{byteLength:1,components:1};case Or:case Pc:case Cn:return{byteLength:2,components:1};case xo:case yo:return{byteLength:2,components:4};case An:case _o:case Rn:return{byteLength:4,components:1};case Lc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Vf(){let n=null,t=!1,e=null,i=null;function r(s,a){i=n.requestAnimationFrame(r),e(s,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function eg(n){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),o.onUploadCallback();let v;if(c instanceof Float32Array)v=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)v=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?v=n.HALF_FLOAT:v=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)v=n.SHORT;else if(c instanceof Uint32Array)v=n.UNSIGNED_INT;else if(c instanceof Int32Array)v=n.INT;else if(c instanceof Int8Array)v=n.BYTE;else if(c instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:v,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((v,x)=>v.start-x.start);let d=0;for(let v=1;v<f.length;v++){let x=f[d],M=f[v];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++d,f[d]=M)}f.length=d+1;for(let v=0,x=f.length;v<x;v++){let M=f[v];n.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ng=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ig=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,og=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,ug=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_g=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Mg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Eg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ag=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ng=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Zg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ev=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rv=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,av=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ov=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_v=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ev=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Av=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ov=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,qv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$v=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,c_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,h_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,u_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,m_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,v_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,__=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,M_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,S_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,w_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,A_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,R_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,C_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,I_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,P_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,U_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,D_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Yt={alphahash_fragment:ng,alphahash_pars_fragment:ig,alphamap_fragment:rg,alphamap_pars_fragment:sg,alphatest_fragment:ag,alphatest_pars_fragment:og,aomap_fragment:lg,aomap_pars_fragment:cg,batching_pars_vertex:hg,batching_vertex:ug,begin_vertex:fg,beginnormal_vertex:dg,bsdfs:pg,iridescence_fragment:mg,bumpmap_pars_fragment:gg,clipping_planes_fragment:vg,clipping_planes_pars_fragment:_g,clipping_planes_pars_vertex:xg,clipping_planes_vertex:yg,color_fragment:Mg,color_pars_fragment:Sg,color_pars_vertex:wg,color_vertex:bg,common:Eg,cube_uv_reflection_fragment:Tg,defaultnormal_vertex:Ag,displacementmap_pars_vertex:Rg,displacementmap_vertex:Cg,emissivemap_fragment:Ig,emissivemap_pars_fragment:Pg,colorspace_fragment:Lg,colorspace_pars_fragment:Ug,envmap_fragment:Ng,envmap_common_pars_fragment:Dg,envmap_pars_fragment:Fg,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Zg,envmap_vertex:Og,fog_vertex:zg,fog_pars_vertex:kg,fog_fragment:Vg,fog_pars_fragment:Gg,gradientmap_pars_fragment:Hg,lightmap_pars_fragment:Wg,lights_lambert_fragment:Xg,lights_lambert_pars_fragment:qg,lights_pars_begin:Yg,lights_toon_fragment:Jg,lights_toon_pars_fragment:$g,lights_phong_fragment:Kg,lights_phong_pars_fragment:Qg,lights_physical_fragment:jg,lights_physical_pars_fragment:tv,lights_fragment_begin:ev,lights_fragment_maps:nv,lights_fragment_end:iv,lightprobes_pars_fragment:rv,logdepthbuf_fragment:sv,logdepthbuf_pars_fragment:av,logdepthbuf_pars_vertex:ov,logdepthbuf_vertex:lv,map_fragment:cv,map_pars_fragment:hv,map_particle_fragment:uv,map_particle_pars_fragment:fv,metalnessmap_fragment:dv,metalnessmap_pars_fragment:pv,morphinstance_vertex:mv,morphcolor_vertex:gv,morphnormal_vertex:vv,morphtarget_pars_vertex:_v,morphtarget_vertex:xv,normal_fragment_begin:yv,normal_fragment_maps:Mv,normal_pars_fragment:Sv,normal_pars_vertex:wv,normal_vertex:bv,normalmap_pars_fragment:Ev,clearcoat_normal_fragment_begin:Tv,clearcoat_normal_fragment_maps:Av,clearcoat_pars_fragment:Rv,iridescence_pars_fragment:Cv,opaque_fragment:Iv,packing:Pv,premultiplied_alpha_fragment:Lv,project_vertex:Uv,dithering_fragment:Nv,dithering_pars_fragment:Dv,roughnessmap_fragment:Fv,roughnessmap_pars_fragment:Bv,shadowmap_pars_fragment:Ov,shadowmap_pars_vertex:zv,shadowmap_vertex:kv,shadowmask_pars_fragment:Vv,skinbase_vertex:Gv,skinning_pars_vertex:Hv,skinning_vertex:Wv,skinnormal_vertex:Xv,specularmap_fragment:qv,specularmap_pars_fragment:Yv,tonemapping_fragment:Zv,tonemapping_pars_fragment:Jv,transmission_fragment:$v,transmission_pars_fragment:Kv,uv_pars_fragment:Qv,uv_pars_vertex:jv,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:r_,backgroundCube_frag:s_,cube_vert:a_,cube_frag:o_,depth_vert:l_,depth_frag:c_,distance_vert:h_,distance_frag:u_,equirect_vert:f_,equirect_frag:d_,linedashed_vert:p_,linedashed_frag:m_,meshbasic_vert:g_,meshbasic_frag:v_,meshlambert_vert:__,meshlambert_frag:x_,meshmatcap_vert:y_,meshmatcap_frag:M_,meshnormal_vert:S_,meshnormal_frag:w_,meshphong_vert:b_,meshphong_frag:E_,meshphysical_vert:T_,meshphysical_frag:A_,meshtoon_vert:R_,meshtoon_frag:C_,points_vert:I_,points_frag:P_,shadow_vert:L_,shadow_frag:U_,sprite_vert:N_,sprite_frag:D_},yt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Gn={basic:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ze([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ze([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ze([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ze([yt.points,yt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ze([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ze([yt.common,yt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ze([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ze([yt.sprite,yt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distance:{uniforms:Ze([yt.common,yt.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distance_vert,fragmentShader:Yt.distance_frag},shadow:{uniforms:Ze([yt.lights,yt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Gn.physical={uniforms:Ze([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};var il={r:0,b:0,g:0},F_=new ge,Gf=new Wt;Gf.set(-1,0,0,0,1,0,0,0,1);function B_(n,t,e,i,r,s){let a=new Kt(0),o=r===!0?0:1,l,c,u=null,f=0,d=null;function v(L){let B=L.isScene===!0?L.background:null;if(B&&B.isTexture){let C=L.backgroundBlurriness>0;B=t.get(B,C)}return B}function x(L){let B=!1,C=v(L);C===null?g(a,o):C&&C.isColor&&(g(C,1),B=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(n.autoClear||B)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(L,B){let C=v(B);C&&(C.isCubeTexture||C.mapping===Bs)?(c===void 0&&(c=new ze(new Ur(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Gi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=C,c.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(B.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gf),c.material.toneMapped=Qt.getTransfer(C.colorSpace)!==oe,(u!==C||f!==C.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,d=n.toneMapping),c.layers.enableAll(),L.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(l===void 0&&(l=new ze(new vi(2,2),new un({name:"BackgroundMaterial",uniforms:Gi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=C,l.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,l.material.toneMapped=Qt.getTransfer(C.colorSpace)!==oe,C.matrixAutoUpdate===!0&&C.updateMatrix(),l.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,u=C,f=C.version,d=n.toneMapping),l.layers.enableAll(),L.unshift(l,l.geometry,l.material,0,0,null))}function g(L,B){L.getRGB(il,kc(n)),e.buffers.color.setClear(il.r,il.g,il.b,B,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(L,B=1){a.set(L),o=B,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(L){o=L,g(a,o)},render:x,addToRenderList:M,dispose:_}}function O_(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null),s=r,a=!1;function o(h,m,b,y,E){let D=!1,F=f(h,y,b,m);s!==F&&(s=F,c(s.object)),D=v(h,y,b,E),D&&x(h,y,b,E),E!==null&&t.update(E,n.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,C(h,m,b,y),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(E).buffer))}function l(){return n.createVertexArray()}function c(h){return n.bindVertexArray(h)}function u(h){return n.deleteVertexArray(h)}function f(h,m,b,y){let E=y.wireframe===!0,D=i[m.id];D===void 0&&(D={},i[m.id]=D);let F=h.isInstancedMesh===!0?h.id:0,I=D[F];I===void 0&&(I={},D[F]=I);let p=I[b.id];p===void 0&&(p={},I[b.id]=p);let P=p[E];return P===void 0&&(P=d(l()),p[E]=P),P}function d(h){let m=[],b=[],y=[];for(let E=0;E<e;E++)m[E]=0,b[E]=0,y[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:m,enabledAttributes:b,attributeDivisors:y,object:h,attributes:{},index:null}}function v(h,m,b,y){let E=s.attributes,D=m.attributes,F=0,I=b.getAttributes();for(let p in I)if(I[p].location>=0){let H=E[p],nt=D[p];if(nt===void 0&&(p==="instanceMatrix"&&h.instanceMatrix&&(nt=h.instanceMatrix),p==="instanceColor"&&h.instanceColor&&(nt=h.instanceColor)),H===void 0||H.attribute!==nt||nt&&H.data!==nt.data)return!0;F++}return s.attributesNum!==F||s.index!==y}function x(h,m,b,y){let E={},D=m.attributes,F=0,I=b.getAttributes();for(let p in I)if(I[p].location>=0){let H=D[p];H===void 0&&(p==="instanceMatrix"&&h.instanceMatrix&&(H=h.instanceMatrix),p==="instanceColor"&&h.instanceColor&&(H=h.instanceColor));let nt={};nt.attribute=H,H&&H.data&&(nt.data=H.data),E[p]=nt,F++}s.attributes=E,s.attributesNum=F,s.index=y}function M(){let h=s.newAttributes;for(let m=0,b=h.length;m<b;m++)h[m]=0}function g(h){_(h,0)}function _(h,m){let b=s.newAttributes,y=s.enabledAttributes,E=s.attributeDivisors;b[h]=1,y[h]===0&&(n.enableVertexAttribArray(h),y[h]=1),E[h]!==m&&(n.vertexAttribDivisor(h,m),E[h]=m)}function L(){let h=s.newAttributes,m=s.enabledAttributes;for(let b=0,y=m.length;b<y;b++)m[b]!==h[b]&&(n.disableVertexAttribArray(b),m[b]=0)}function B(h,m,b,y,E,D,F){F===!0?n.vertexAttribIPointer(h,m,b,E,D):n.vertexAttribPointer(h,m,b,y,E,D)}function C(h,m,b,y){M();let E=y.attributes,D=b.getAttributes(),F=m.defaultAttributeValues;for(let I in D){let p=D[I];if(p.location>=0){let P=E[I];if(P===void 0&&(I==="instanceMatrix"&&h.instanceMatrix&&(P=h.instanceMatrix),I==="instanceColor"&&h.instanceColor&&(P=h.instanceColor)),P!==void 0){let H=P.normalized,nt=P.itemSize,et=t.get(P);if(et===void 0)continue;let ut=et.buffer,Et=et.type,pt=et.bytesPerElement,$=Et===n.INT||Et===n.UNSIGNED_INT||P.gpuType===_o;if(P.isInterleavedBufferAttribute){let q=P.data,at=q.stride,bt=P.offset;if(q.isInstancedInterleavedBuffer){for(let ft=0;ft<p.locationSize;ft++)_(p.location+ft,q.meshPerAttribute);h.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ft=0;ft<p.locationSize;ft++)g(p.location+ft);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let ft=0;ft<p.locationSize;ft++)B(p.location+ft,nt/p.locationSize,Et,H,at*pt,(bt+nt/p.locationSize*ft)*pt,$)}else{if(P.isInstancedBufferAttribute){for(let q=0;q<p.locationSize;q++)_(p.location+q,P.meshPerAttribute);h.isInstancedMesh!==!0&&y._maxInstanceCount===void 0&&(y._maxInstanceCount=P.meshPerAttribute*P.count)}else for(let q=0;q<p.locationSize;q++)g(p.location+q);n.bindBuffer(n.ARRAY_BUFFER,ut);for(let q=0;q<p.locationSize;q++)B(p.location+q,nt/p.locationSize,Et,H,nt*pt,nt/p.locationSize*q*pt,$)}}else if(F!==void 0){let H=F[I];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(p.location,H);break;case 3:n.vertexAttrib3fv(p.location,H);break;case 4:n.vertexAttrib4fv(p.location,H);break;default:n.vertexAttrib1fv(p.location,H)}}}}L()}function A(){N();for(let h in i){let m=i[h];for(let b in m){let y=m[b];for(let E in y){let D=y[E];for(let F in D)u(D[F].object),delete D[F];delete y[E]}}delete i[h]}}function R(h){if(i[h.id]===void 0)return;let m=i[h.id];for(let b in m){let y=m[b];for(let E in y){let D=y[E];for(let F in D)u(D[F].object),delete D[F];delete y[E]}}delete i[h.id]}function O(h){for(let m in i){let b=i[m];for(let y in b){let E=b[y];if(E[h.id]===void 0)continue;let D=E[h.id];for(let F in D)u(D[F].object),delete D[F];delete E[h.id]}}}function S(h){for(let m in i){let b=i[m],y=h.isInstancedMesh===!0?h.id:0,E=b[y];if(E!==void 0){for(let D in E){let F=E[D];for(let I in F)u(F[I].object),delete F[I];delete E[D]}delete b[y],Object.keys(b).length===0&&delete i[m]}}}function N(){w(),a=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:O,initAttributes:M,enableAttribute:g,disableUnusedAttributes:L}}function z_(n,t,e){let i;function r(l){i=l}function s(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),e.update(c,i,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let v=0;v<u;v++)d+=c[v];e.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function k_(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let O=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(O){return!(O!==xn&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(O){let S=O===Cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==sn&&O!==Rn&&!S&&i.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(zt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let v=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),B=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:v,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:L,maxVaryings:B,maxFragmentUniforms:C,maxSamples:A,samples:R}}function V_(n){let t=this,e=null,i=0,r=!1,s=!1,a=new En,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let v=f.length!==0||d||i!==0||r;return r=d,i=f.length,v},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,v){let x=f.clippingPlanes,M=f.clipIntersection,g=f.clipShadows,_=n.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{let L=s?0:i,B=L*4,C=_.clippingState||null;l.value=C,C=u(x,d,B,v);for(let A=0;A!==B;++A)C[A]=e[A];_.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=L}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(f,d,v,x){let M=f!==null?f.length:0,g=null;if(M!==0){if(g=l.value,x!==!0||g===null){let _=v+M*4,L=d.matrixWorldInverse;o.getNormalMatrix(L),(g===null||g.length<_)&&(g=new Float32Array(_));for(let B=0,C=v;B!==M;++B,C+=4)a.copy(f[B]).applyMatrix4(L,o),a.normal.toArray(g,C),g[C+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,g}}var Hr=4,G_=6,H_=20,W_=256,Xs=new Nr,yf=new Kt,Wc=null,Xc=0,qc=0,Yc=!1,X_=new J,Hi=new J,sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){let{size:a=256,position:o=X_}=s;Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wc,Xc,qc),this._renderer.xr.enabled=Yc,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Vi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Yc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Oe,minFilter:Oe,generateMipmaps:!1,type:Cn,format:xn,colorSpace:xs,depthBuffer:!1},r=Mf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(t,e,i);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=q_(s)),this._blurMaterial=Z_(s,t,e),this._ggxMaterial=Y_(s,t,e)}return r}_compileMaterial(t){let e=new ze(new Qe,t);this._renderer.compile(e,Xs)}_sceneToCubeUV(t,e,i,r,s){let l=new qe(90,1,e,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,v=f.toneMapping;f.getClearColor(yf),f.toneMapping=pn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ze(new Ur,new zi({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,g=M.material,_=!1,L=t.background;L?L.isColor&&(g.color.copy(L),t.background=null,_=!0):(g.color.copy(yf),_=!0);for(let B=0;B<6;B++){let C=B%3;C===0?(l.up.set(0,c[B],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[B],s.y,s.z)):C===1?(l.up.set(0,0,c[B]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[B],s.z)):(l.up.set(0,c[B],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[B]));let A=this._cubeSize;Gr(r,C*A,B>2?A:0,A,A),f.setRenderTarget(r),_&&f.render(M,l),f.render(t,l)}f.toneMapping=v,f.autoClear=d,t.background=L}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===Si||t.mapping===Vi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Xs)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=c*1.25,v=f*d,{_lodMax:x}=this,M=this._sizeLods[i],g=3*M*(i>x-Hr?i-x+Hr:0),_=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=v,l.mipInt.value=x-e,Gr(s,g,_,3*M,2*M),r.setRenderTarget(s),r.render(o,Xs),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,Gr(t,g,_,3*M,2*M),r.setRenderTarget(t),r.render(o,Xs)}_blur(t,e,i,r){let s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,i,a),this._blurPass(s,t,i,i,a)}_blurPass(t,e,i,r,s){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[r];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[r],f=3*u*(r>this._lodMax-Hr?r-this._lodMax+Hr:0),d=4*(this._cubeSize-u);Gr(e,f,d,3*u,2*u),a.setRenderTarget(e),a.render(l,Xs)}};function q_(n){let t=[],e=[],i=n,r=n-Hr+1+G_;for(let s=0;s<r;s++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,d=6,v=3,x=new Float32Array(v*d*f),M=new Float32Array(v*d*f);for(let _=0;_<f;_++){let L=_%3*2/3-1,B=_>2?0:-1,C=[L,B,0,L+2/3,B,0,L+2/3,B+1,0,L,B,0,L+2/3,B+1,0,L,B+1,0];x.set(C,v*d*_);for(let A=0;A<d;A++){let R=u[A*2]*2-1,O=u[A*2+1]*2-1;_===0?Hi.set(1,O,R):_===1?Hi.set(-R,1,-O):_===2?Hi.set(-R,O,1):_===3?Hi.set(-1,O,-R):_===4?Hi.set(-R,-1,O):Hi.set(R,O,-1),Hi.toArray(M,(_*d+A)*v)}}let g=new Qe;g.setAttribute("position",new _n(x,v)),g.setAttribute("outputDirection",new _n(M,v)),e.push(new ze(g,null)),i>Hr&&i--}return{lodMeshes:e,sizeLods:t}}function Mf(n,t,e){let i=new rn(n,t,e);return i.texture.mapping=Bs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gr(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Y_(n,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:W_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Z_(n,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:H_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ll(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Sf(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function wf(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function ll(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var al=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Rs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ur(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:Gi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:je,blending:kn});s.uniforms.tEquirect.value=e;let a=new ze(r,s),o=e.minFilter;return e.minFilter===wi&&(e.minFilter=Oe),new fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}};function J_(n){let t=new WeakMap,e=new WeakMap,i=null;function r(d,v=!1){return d==null?null:v?a(d):s(d)}function s(d){if(d&&d.isTexture){let v=d.mapping;if(v===mo||v===go)if(t.has(d)){let x=t.get(d).texture;return o(x,d.mapping)}else{let x=d.image;if(x&&x.height>0){let M=new al(x.height);return M.fromEquirectangularTexture(n,d),t.set(d,M),d.addEventListener("dispose",c),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let v=d.mapping,x=v===mo||v===go,M=v===Si||v===Vi;if(x||M){let g=e.get(d),_=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return i===null&&(i=new sl(n)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{let L=d.image;return x&&L&&L.height>0||M&&L&&l(L)?(i===null&&(i=new sl(n)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function o(d,v){return v===mo?d.mapping=Si:v===go&&(d.mapping=Vi),d}function l(d){let v=0,x=6;for(let M=0;M<x;M++)d[M]!==void 0&&v++;return v===x}function c(d){let v=d.target;v.removeEventListener("dispose",c);let x=t.get(v);x!==void 0&&(t.delete(v),x.dispose())}function u(d){let v=d.target;v.removeEventListener("dispose",u);let x=e.get(v);x!==void 0&&(e.delete(v),x.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function $_(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let r=e(i);return r===null&&Bi("WebGLRenderer: "+i+" extension not supported."),r}}}function K_(n,t,e,i){let r={},s=new WeakMap;function a(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let x in d.attributes)t.remove(d.attributes[x]);d.removeEventListener("dispose",a),delete r[d.id];let v=s.get(d);v&&(t.remove(v),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,e.memory.geometries++),d}function l(f){let d=f.attributes;for(let v in d)t.update(d[v],n.ARRAY_BUFFER)}function c(f){let d=[],v=f.index,x=f.attributes.position,M=0;if(x===void 0)return;if(v!==null){let L=v.array;M=v.version;for(let B=0,C=L.length;B<C;B+=3){let A=L[B+0],R=L[B+1],O=L[B+2];d.push(A,R,R,O,O,A)}}else{let L=x.array;M=x.version;for(let B=0,C=L.length/3-1;B<C;B+=3){let A=B+0,R=B+1,O=B+2;d.push(A,R,R,O,O,A)}}let g=new(x.count>=65535?Ts:Es)(d,1);g.version=M;let _=s.get(f);_&&t.remove(_),s.set(f,g)}function u(f){let d=s.get(f);if(d){let v=f.index;v!==null&&d.version<v.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Q_(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,s,f*a),e.update(d,i,1)}function c(f,d,v){v!==0&&(n.drawElementsInstanced(i,d,s,f*a,v),e.update(d,i,v))}function u(f,d,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,v);let M=0;for(let g=0;g<v;g++)M+=d[g];e.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function j_(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function tx(n,t,e){let i=new WeakMap,r=new ve;function s(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,d=i.get(o);if(d===void 0||d.count!==f){let N=function(){O.dispose(),i.delete(o),o.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();let v=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],L=o.morphAttributes.color||[],B=0;v===!0&&(B=1),x===!0&&(B=2),M===!0&&(B=3);let C=o.attributes.position.count*B,A=1;C>t.maxTextureSize&&(A=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);let R=new Float32Array(C*A*4*f),O=new Ss(R,C,A,f);O.type=Rn,O.needsUpdate=!0;let S=B*4;for(let w=0;w<f;w++){let h=g[w],m=_[w],b=L[w],y=C*A*4*w;for(let E=0;E<h.count;E++){let D=E*S;v===!0&&(r.fromBufferAttribute(h,E),R[y+D+0]=r.x,R[y+D+1]=r.y,R[y+D+2]=r.z,R[y+D+3]=0),x===!0&&(r.fromBufferAttribute(m,E),R[y+D+4]=r.x,R[y+D+5]=r.y,R[y+D+6]=r.z,R[y+D+7]=0),M===!0&&(r.fromBufferAttribute(b,E),R[y+D+8]=r.x,R[y+D+9]=r.y,R[y+D+10]=r.z,R[y+D+11]=b.itemSize===4?r.w:1)}}d={count:f,texture:O,size:new ne(C,A)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let v=0;for(let M=0;M<c.length;M++)v+=c[M];let x=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",x),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function ex(n,t,e,i,r){let s=new WeakMap;function a(c){let u=r.render.frame,f=c.geometry,d=t.get(c,f);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){let v=c.skeleton;s.get(v)!==u&&(v.update(),s.set(v,u))}return d}function o(){s=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var nx={[Sc]:"LINEAR_TONE_MAPPING",[wc]:"REINHARD_TONE_MAPPING",[bc]:"CINEON_TONE_MAPPING",[Ec]:"ACES_FILMIC_TONE_MAPPING",[Ac]:"AGX_TONE_MAPPING",[Rc]:"NEUTRAL_TONE_MAPPING",[Tc]:"CUSTOM_TONE_MAPPING"};function ix(n,t,e,i,r,s){let a=new rn(t,e,{type:n,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Qe;c.setAttribute("position",new Le([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Le([0,2,0,0,2,0],2));let u=new Qa({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ze(c,u),d=new Nr(-1,1,1,-1,0,1),v=null,x=null,M=!1,g,_=null,L=[],B=!1;this.setSize=function(C,A){a.setSize(C,A),o!==null&&o.setSize(C,A),l!==null&&l.setSize(C,A);for(let R=0;R<L.length;R++){let O=L[R];O.setSize&&O.setSize(C,A)}},this.setEffects=function(C){L=C,B=L.length>0&&L[0].isRenderPass===!0;let A=a.width,R=a.height;L.length>0&&o===null&&(o=new rn(A,R,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(A,R,{type:Cn,depthBuffer:!1,stencilBuffer:!1}));for(let O=0;O<L.length;O++){let S=L[O];S.setSize&&S.setSize(A,R)}},this.begin=function(C,A){if(M||C.toneMapping===pn&&L.length===0)return!1;if(_=A,A!==null){let R=A.width,O=A.height;(a.width!==R||a.height!==O)&&this.setSize(R,O)}return B===!1&&C.setRenderTarget(a),g=C.toneMapping,C.toneMapping=pn,!0},this.hasRenderPass=function(){return B},this.end=function(C,A){C.toneMapping=g,M=!0;let R=a,O=o;for(let S=0;S<L.length;S++){let N=L[S];N.enabled!==!1&&(N.render(C,O,R,A),N.needsSwap!==!1&&(R=O,O=O===o?l:o))}if(v!==C.outputColorSpace||x!==C.toneMapping){v=C.outputColorSpace,x=C.toneMapping,u.defines={},Qt.getTransfer(v)===oe&&(u.defines.SRGB_TRANSFER="");let S=nx[x];S&&(u.defines[S]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(_),C.render(f,d),_=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Hf=new Ke,$c=new gi(1,1),Wf=new Ss,Xf=new qa,qf=new Rs,bf=[],Ef=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function Xr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let r=t*e,s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Ue(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ne(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function cl(n,t){let e=Ef[t];e===void 0&&(e=new Int32Array(t),Ef[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function rx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function sx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2fv(this.addr,t),Ne(e,t)}}function ax(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ue(e,t))return;n.uniform3fv(this.addr,t),Ne(e,t)}}function ox(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4fv(this.addr,t),Ne(e,t)}}function lx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),Ne(e,i)}}function cx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),Ne(e,i)}}function hx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ue(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ne(e,t)}else{if(Ue(e,i))return;Tf.set(i),n.uniformMatrix4fv(this.addr,!1,Tf),Ne(e,i)}}function ux(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2iv(this.addr,t),Ne(e,t)}}function dx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3iv(this.addr,t),Ne(e,t)}}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4iv(this.addr,t),Ne(e,t)}}function mx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function gx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ue(e,t))return;n.uniform2uiv(this.addr,t),Ne(e,t)}}function vx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ue(e,t))return;n.uniform3uiv(this.addr,t),Ne(e,t)}}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ue(e,t))return;n.uniform4uiv(this.addr,t),Ne(e,t)}}function xx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?($c.compareFunction=e.isReversedDepthBuffer()?nl:el,s=$c):s=Hf,e.setTexture2D(t||s,r)}function yx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Xf,r)}function Mx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||qf,r)}function Sx(n,t,e){let i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||Wf,r)}function wx(n){switch(n){case 5126:return rx;case 35664:return sx;case 35665:return ax;case 35666:return ox;case 35674:return lx;case 35675:return cx;case 35676:return hx;case 5124:case 35670:return ux;case 35667:case 35671:return fx;case 35668:case 35672:return dx;case 35669:case 35673:return px;case 5125:return mx;case 36294:return gx;case 36295:return vx;case 36296:return _x;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return yx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return Sx}}function bx(n,t){n.uniform1fv(this.addr,t)}function Ex(n,t){let e=Xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Tx(n,t){let e=Xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ax(n,t){let e=Xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Rx(n,t){let e=Xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Cx(n,t){let e=Xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ix(n,t){let e=Xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Px(n,t){n.uniform1iv(this.addr,t)}function Lx(n,t){n.uniform2iv(this.addr,t)}function Ux(n,t){n.uniform3iv(this.addr,t)}function Nx(n,t){n.uniform4iv(this.addr,t)}function Dx(n,t){n.uniform1uiv(this.addr,t)}function Fx(n,t){n.uniform2uiv(this.addr,t)}function Bx(n,t){n.uniform3uiv(this.addr,t)}function Ox(n,t){n.uniform4uiv(this.addr,t)}function zx(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=$c:a=Hf;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function kx(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Xf,s[a])}function Vx(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||qf,s[a])}function Gx(n,t,e){let i=this.cache,r=t.length,s=cl(e,r);Ue(i,s)||(n.uniform1iv(this.addr,s),Ne(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Wf,s[a])}function Hx(n){switch(n){case 5126:return bx;case 35664:return Ex;case 35665:return Tx;case 35666:return Ax;case 35674:return Rx;case 35675:return Cx;case 35676:return Ix;case 5124:case 35670:return Px;case 35667:case 35671:return Lx;case 35668:case 35672:return Ux;case 35669:case 35673:return Nx;case 5125:return Dx;case 36294:return Fx;case 36295:return Bx;case 36296:return Ox;case 35678:case 36198:case 36298:case 36306:case 35682:return zx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Vx;case 36289:case 36303:case 36311:case 36292:return Gx}}var Kc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=wx(e.type)}},Qc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hx(e.type)}},jc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(t,e[o.id],i)}}},Zc=/(\w+)(\])?(\[|\.)?/g;function Cf(n,t){n.seq.push(t),n.map[t.id]=t}function Wx(n,t,e){let i=n.name,r=i.length;for(Zc.lastIndex=0;;){let s=Zc.exec(i),a=Zc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Cf(e,c===void 0?new Kc(o,n,t):new Qc(o,n,t));break}else{let f=e.map[o];f===void 0&&(f=new jc(o),Cf(e,f)),e=f}}}var Wr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Wx(o,l,this)}let r=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){let s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){let o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,s=t.length;r!==s;++r){let a=t[r];a.id in e&&i.push(a)}return i}};function If(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Xx=37297,qx=0;function Yx(n,t){let e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}var Pf=new Wt;function Zx(n){Qt._getMatrix(Pf,Qt.workingColorSpace,n);let t=`mat3( ${Pf.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case ys:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Lf(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Yx(n.getShaderSource(t),o)}else return s}function Jx(n,t){let e=Zx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var $x={[Sc]:"Linear",[wc]:"Reinhard",[bc]:"Cineon",[Ec]:"ACESFilmic",[Ac]:"AgX",[Rc]:"Neutral",[Tc]:"Custom"};function Kx(n,t){let e=$x[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var rl=new J;function Qx(){Qt.getLuminanceCoefficients(rl);let n=rl.x.toFixed(4),t=rl.y.toFixed(4),e=rl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ys).join(`
`)}function ty(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function ey(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(t,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Ys(n){return n!==""}function Uf(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ny=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(n){return n.replace(ny,ry)}var iy=new Map;function ry(n,t){let e=Yt[t];if(e===void 0){let i=iy.get(t);if(i!==void 0)e=Yt[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return th(e)}var sy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Df(n){return n.replace(sy,ay)}function ay(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ff(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var oy={[Fs]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};function ly(n){return oy[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cy={[Si]:"ENVMAP_TYPE_CUBE",[Vi]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE_UV"};function hy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":cy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var uy={[Vi]:"ENVMAP_MODE_REFRACTION"};function fy(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":uy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var dy={[Mc]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[ju]:"ENVMAP_BLENDING_ADD"};function py(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":dy[n.combine]||"ENVMAP_BLENDING_NONE"}function my(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function gy(n,t,e,i){let r=n.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,l=ly(e),c=hy(e),u=fy(e),f=py(e),d=my(e),v=jx(e),x=ty(s),M=r.createProgram(),g,_,L=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ys).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ys).join(`
`),_.length>0&&(_+=`
`)):(g=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ys).join(`
`),_=[Ff(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pn?"#define TONE_MAPPING":"",e.toneMapping!==pn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==pn?Kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Jx("linearToOutputTexel",e.outputColorSpace),Qx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ys).join(`
`)),a=th(a),a=Uf(a,e),a=Nf(a,e),o=th(o),o=Uf(o,e),o=Nf(o,e),a=Df(a),o=Df(o),e.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,g=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",e.glslVersion===Bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);let B=L+g+a,C=L+_+o,A=If(r,r.VERTEX_SHADER,B),R=If(r,r.FRAGMENT_SHADER,C);r.attachShader(M,A),r.attachShader(M,R),e.index0AttributeName!==void 0?r.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function O(h){if(n.debug.checkShaderErrors){let m=r.getProgramInfoLog(M)||"",b=r.getShaderInfoLog(A)||"",y=r.getShaderInfoLog(R)||"",E=m.trim(),D=b.trim(),F=y.trim(),I=!0,p=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(I=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,M,A,R);else{let P=Lf(r,A,"vertex"),H=Lf(r,R,"fragment");Vt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+h.name+`
Material Type: `+h.type+`

Program Info Log: `+E+`
`+P+`
`+H)}else E!==""?zt("WebGLProgram: Program Info Log:",E):(D===""||F==="")&&(p=!1);p&&(h.diagnostics={runnable:I,programLog:E,vertexShader:{log:D,prefix:g},fragmentShader:{log:F,prefix:_}})}r.deleteShader(A),r.deleteShader(R),S=new Wr(r,M),N=ey(r,M)}let S;this.getUniforms=function(){return S===void 0&&O(this),S};let N;this.getAttributes=function(){return N===void 0&&O(this),N};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(M,Xx)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qx++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=A,this.fragmentShader=R,this}var vy=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new nh(t),e.set(t,i)),i}},nh=class{constructor(t){this.id=vy++,this.code=t,this.usedTimes=0}};function _y(n){return n===Ei||n===Hs||n===Ws}function xy(n,t,e,i,r,s){let a=new ws,o=new eh,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,N,w,h,m,b){let y=h.fog,E=m.geometry,D=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?h.environment:null,F=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,I=t.get(S.envMap||D,F),p=I&&I.mapping===Bs?I.image.height:null,P=v[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&zt("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let H=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,nt=H!==void 0?H.length:0,et=0;E.morphAttributes.position!==void 0&&(et=1),E.morphAttributes.normal!==void 0&&(et=2),E.morphAttributes.color!==void 0&&(et=3);let ut,Et,pt,$;if(P){let Gt=Gn[P];ut=Gt.vertexShader,Et=Gt.fragmentShader}else{ut=S.vertexShader,Et=S.fragmentShader;let Gt=o.getVertexShaderStage(S),kt=o.getFragmentShaderStage(S);o.update(S,Gt,kt),pt=Gt.id,$=kt.id}let q=n.getRenderTarget(),at=n.state.buffers.depth.getReversed(),bt=m.isInstancedMesh===!0,ft=m.isBatchedMesh===!0,Lt=!!S.map,fe=!!S.matcap,Nt=!!I,Ot=!!S.aoMap,le=!!S.lightMap,Dt=!!S.bumpMap&&S.wireframe===!1,Ht=!!S.normalMap,Ee=!!S.displacementMap,ee=!!S.emissiveMap,Xt=!!S.metalnessMap,_e=!!S.roughnessMap,V=S.anisotropy>0,Jt=S.clearcoat>0,re=S.dispersion>0,z=S.retroreflectivity>0,T=S.iridescence>0,W=S.sheen>0,X=S.transmission>0,K=V&&!!S.anisotropyMap,dt=Jt&&!!S.clearcoatMap,ot=Jt&&!!S.clearcoatNormalMap,j=Jt&&!!S.clearcoatRoughnessMap,st=T&&!!S.iridescenceMap,lt=T&&!!S.iridescenceThicknessMap,gt=W&&!!S.sheenColorMap,vt=W&&!!S.sheenRoughnessMap,ct=!!S.specularMap,_t=!!S.specularColorMap,Ft=!!S.specularIntensityMap,Rt=X&&!!S.transmissionMap,k=X&&!!S.thicknessMap,mt=!!S.gradientMap,tt=!!S.alphaMap,ht=S.alphaTest>0,Mt=!!S.alphaHash,rt=!!S.extensions,xt=pn;S.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(xt=n.toneMapping);let Ct={shaderID:P,shaderType:S.type,shaderName:S.name,vertexShader:ut,fragmentShader:Et,defines:S.defines,customVertexShaderID:pt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:ft,batchingColor:ft&&m._colorsTexture!==null,instancing:bt,instancingColor:bt&&m.instanceColor!==null,instancingMorph:bt&&m.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Lt,matcap:fe,envMap:Nt,envMapMode:Nt&&I.mapping,envMapCubeUVHeight:p,aoMap:Ot,lightMap:le,bumpMap:Dt,normalMap:Ht,displacementMap:Ee,emissiveMap:ee,normalMapObjectSpace:Ht&&S.normalMapType===nf,normalMapTangentSpace:Ht&&S.normalMapType===tl,packedNormalMap:Ht&&S.normalMapType===tl&&_y(S.normalMap.format),metalnessMap:Xt,roughnessMap:_e,anisotropy:V,anisotropyMap:K,clearcoat:Jt,clearcoatMap:dt,clearcoatNormalMap:ot,clearcoatRoughnessMap:j,dispersion:re,retroreflection:z,iridescence:T,iridescenceMap:st,iridescenceThicknessMap:lt,sheen:W,sheenColorMap:gt,sheenRoughnessMap:vt,specularMap:ct,specularColorMap:_t,specularIntensityMap:Ft,transmission:X,transmissionMap:Rt,thicknessMap:k,gradientMap:mt,opaque:S.transparent===!1&&S.blending===Br&&S.alphaToCoverage===!1,alphaMap:tt,alphaTest:ht,alphaHash:Mt,combine:S.combine,mapUv:Lt&&x(S.map.channel),aoMapUv:Ot&&x(S.aoMap.channel),lightMapUv:le&&x(S.lightMap.channel),bumpMapUv:Dt&&x(S.bumpMap.channel),normalMapUv:Ht&&x(S.normalMap.channel),displacementMapUv:Ee&&x(S.displacementMap.channel),emissiveMapUv:ee&&x(S.emissiveMap.channel),metalnessMapUv:Xt&&x(S.metalnessMap.channel),roughnessMapUv:_e&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:dt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ot&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(S.sheenRoughnessMap.channel),specularMapUv:ct&&x(S.specularMap.channel),specularColorMapUv:_t&&x(S.specularColorMap.channel),specularIntensityMapUv:Ft&&x(S.specularIntensityMap.channel),transmissionMapUv:Rt&&x(S.transmissionMap.channel),thicknessMapUv:k&&x(S.thicknessMap.channel),alphaMapUv:tt&&x(S.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(Ht||V),vertexNormals:!!E.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!E.attributes.uv&&(Lt||tt),fog:!!y,useFog:S.fog===!0,fogExp2:!!y&&y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||E.attributes.normal===void 0&&Ht===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:at,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:et,numSunLights:N.sun.length,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numSunLightShadows:N.sunShadowMap.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:b.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&w.length>0,shadowMapType:n.shadowMap.type,toneMapping:xt,decodeVideoTexture:Lt&&S.map.isVideoTexture===!0&&Qt.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:ee&&S.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===dn,flipSided:S.side===je,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:rt&&S.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&S.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function g(S){let N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)N.push(w),N.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(_(N,S),L(N,S),N.push(n.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function _(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numSunLights),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numSunLightShadows),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function L(S,N){a.disableAll(),N.instancing&&a.enable(0),N.instancingColor&&a.enable(1),N.instancingMorph&&a.enable(2),N.matcap&&a.enable(3),N.envMap&&a.enable(4),N.normalMapObjectSpace&&a.enable(5),N.normalMapTangentSpace&&a.enable(6),N.clearcoat&&a.enable(7),N.iridescence&&a.enable(8),N.alphaTest&&a.enable(9),N.vertexColors&&a.enable(10),N.vertexAlphas&&a.enable(11),N.vertexUv1s&&a.enable(12),N.vertexUv2s&&a.enable(13),N.vertexUv3s&&a.enable(14),N.vertexTangents&&a.enable(15),N.anisotropy&&a.enable(16),N.alphaHash&&a.enable(17),N.batching&&a.enable(18),N.dispersion&&a.enable(19),N.retroreflection&&a.enable(24),N.batchingColor&&a.enable(20),N.gradientMap&&a.enable(21),N.packedNormalMap&&a.enable(22),N.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),N.fog&&a.enable(0),N.useFog&&a.enable(1),N.flatShading&&a.enable(2),N.logarithmicDepthBuffer&&a.enable(3),N.reversedDepthBuffer&&a.enable(4),N.skinning&&a.enable(5),N.morphTargets&&a.enable(6),N.morphNormals&&a.enable(7),N.morphColors&&a.enable(8),N.premultipliedAlpha&&a.enable(9),N.shadowMapEnabled&&a.enable(10),N.doubleSided&&a.enable(11),N.flipSided&&a.enable(12),N.useDepthPacking&&a.enable(13),N.dithering&&a.enable(14),N.transmission&&a.enable(15),N.sheen&&a.enable(16),N.opaque&&a.enable(17),N.pointsUvs&&a.enable(18),N.decodeVideoTexture&&a.enable(19),N.decodeVideoTextureEmissive&&a.enable(20),N.alphaToCoverage&&a.enable(21),N.numLightProbeGrids>0&&a.enable(22),N.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function B(S){let N=v[S.type],w;if(N){let h=Gn[N];w=vf.clone(h.uniforms)}else w=S.uniforms;return w}function C(S,N){let w=u.get(N);return w!==void 0?++w.usedTimes:(w=new gy(n,N,S,r),c.push(w),u.set(N,w)),w}function A(S){if(--S.usedTimes===0){let N=c.indexOf(S);c[N]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function R(S){o.remove(S)}function O(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:B,acquireProgram:C,releaseProgram:A,releaseShaderCache:R,programs:c,dispose:O}}function yy(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function My(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Bf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Of(){let n=[],t=0,e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(d){let v=0;return d.isInstancedMesh&&(v+=2),d.isSkinnedMesh&&(v+=1),v}function o(d,v,x,M,g,_){let L=n[t];return L===void 0?(L={id:d.id,object:d,geometry:v,material:x,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:_},n[t]=L):(L.id=d.id,L.object=d,L.geometry=v,L.material=x,L.materialVariant=a(d),L.groupOrder=M,L.renderOrder=d.renderOrder,L.z=g,L.group=_),t++,L}function l(d,v,x,M,g,_,L){L.reversedDepth===!0&&(g=-g);let B=o(d,v,x,M,g,_);x.transmission>0?i.push(B):x.transparent===!0?r.push(B):e.push(B)}function c(d,v,x,M,g,_){let L=o(d,v,x,M,g,_);x.transmission>0?i.unshift(L):x.transparent===!0?r.unshift(L):e.unshift(L)}function u(d,v){e.length>1&&e.sort(d||My),i.length>1&&i.sort(v||Bf),r.length>1&&r.sort(v||Bf)}function f(){for(let d=t,v=n.length;d<v;d++){let x=n[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function Sy(){let n=new WeakMap;function t(i,r){let s=n.get(i),a;return s===void 0?(a=new Of,n.set(i,[a])):r>=s.length?(a=new Of,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function wy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new J,color:new Kt};break;case"SpotLight":e={position:new J,direction:new J,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new J,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new J,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new J,halfWidth:new J,halfHeight:new J};break}return n[t.id]=e,e}}}function by(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Ey=0;function Ty(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ay(n){let t=new wy,e=by(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);let r=new J,s=new ge,a=new ge;function o(c){let u=0,f=0,d=0;for(let m=0;m<9;m++)i.probe[m].set(0,0,0);let v=0,x=0,M=0,g=0,_=0,L=0,B=0,C=0,A=0,R=0,O=0,S=0,N=0,w=0;c.sort(Ty);for(let m=0,b=c.length;m<b;m++){let y=c[m],E=y.color,D=y.intensity,F=y.distance,I=null;if(y.shadow&&y.shadow.map&&(y.shadow.map.texture.format===Ei?I=y.shadow.map.texture:I=y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)u+=E.r*D,f+=E.g*D,d+=E.b*D;else if(y.isLightProbe){for(let p=0;p<9;p++)i.probe[p].addScaledVector(y.sh.coefficients[p],D);w++}else if(y.isSunLight){let p=t.get(y);if(p.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let P=y.shadow,H=e.get(y);H.shadowIntensity=P.intensity,H.shadowBias=P.bias,H.shadowNormalBias=P.normalBias,H.shadowRadius=P.radius,H.shadowMapSize.copy(P.mapSize).multiply(P.getFrameExtents()),i.sunShadow[x]=H,i.sunShadowMap[x]=I;let nt=P.getViewportCount();for(let et=0;et<nt;et++)i.sunShadowMatrix[M+et]=P.getMatrix(et),i.sunShadowCascade[M+et]=P._cascadeData[et];M+=nt,x++}i.sun[v]=p,v++}else if(y.isDirectionalLight){let p=t.get(y);if(p.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let P=y.shadow,H=e.get(y);H.shadowIntensity=P.intensity,H.shadowBias=P.bias,H.shadowNormalBias=P.normalBias,H.shadowRadius=P.radius,H.shadowMapSize=P.mapSize,i.directionalShadow[g]=H,i.directionalShadowMap[g]=I,i.directionalShadowMatrix[g]=y.shadow.matrix,A++}i.directional[g]=p,g++}else if(y.isSpotLight){let p=t.get(y);p.position.setFromMatrixPosition(y.matrixWorld),p.color.copy(E).multiplyScalar(D),p.distance=F,p.coneCos=Math.cos(y.angle),p.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),p.decay=y.decay,i.spot[L]=p;let P=y.shadow;if(y.map&&(i.spotLightMap[S]=y.map,S++,P.updateMatrices(y),y.castShadow&&N++),i.spotLightMatrix[L]=P.matrix,y.castShadow){let H=e.get(y);H.shadowIntensity=P.intensity,H.shadowBias=P.bias,H.shadowNormalBias=P.normalBias,H.shadowRadius=P.radius,H.shadowMapSize=P.mapSize,i.spotShadow[L]=H,i.spotShadowMap[L]=I,O++}L++}else if(y.isRectAreaLight){let p=t.get(y);p.color.copy(E).multiplyScalar(D),p.halfWidth.set(y.width*.5,0,0),p.halfHeight.set(0,y.height*.5,0),i.rectArea[B]=p,B++}else if(y.isPointLight){let p=t.get(y);if(p.color.copy(y.color).multiplyScalar(y.intensity),p.distance=y.distance,p.decay=y.decay,y.castShadow){let P=y.shadow,H=e.get(y);H.shadowIntensity=P.intensity,H.shadowBias=P.bias,H.shadowNormalBias=P.normalBias,H.shadowRadius=P.radius,H.shadowMapSize=P.mapSize,H.shadowCameraNear=P.camera.near,H.shadowCameraFar=P.camera.far,i.pointShadow[_]=H,i.pointShadowMap[_]=I,i.pointShadowMatrix[_]=y.shadow.matrix,R++}i.point[_]=p,_++}else if(y.isHemisphereLight){let p=t.get(y);p.skyColor.copy(y.color).multiplyScalar(D),p.groundColor.copy(y.groundColor).multiplyScalar(D),i.hemi[C]=p,C++}}B>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=yt.LTC_FLOAT_1,i.rectAreaLTC2=yt.LTC_FLOAT_2):(i.rectAreaLTC1=yt.LTC_HALF_1,i.rectAreaLTC2=yt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;let h=i.hash;(h.sunLength!==v||h.directionalLength!==g||h.pointLength!==_||h.spotLength!==L||h.rectAreaLength!==B||h.hemiLength!==C||h.numSunShadows!==x||h.numDirectionalShadows!==A||h.numPointShadows!==R||h.numSpotShadows!==O||h.numSpotMaps!==S||h.numLightProbes!==w)&&(i.sun.length=v,i.directional.length=g,i.spot.length=L,i.rectArea.length=B,i.point.length=_,i.hemi.length=C,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=O,i.spotShadowMap.length=O,i.spotLightMatrix.length=O+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=w,h.sunLength=v,h.directionalLength=g,h.pointLength=_,h.spotLength=L,h.rectAreaLength=B,h.hemiLength=C,h.numSunShadows=x,h.numDirectionalShadows=A,h.numPointShadows=R,h.numSpotShadows=O,h.numSpotMaps=S,h.numLightProbes=w,i.version=Ey++)}function l(c,u){let f=0,d=0,v=0,x=0,M=0,g=0,_=u.matrixWorldInverse;for(let L=0,B=c.length;L<B;L++){let C=c[L];if(C.isSunLight){let A=i.sun[f];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(_),f++}else if(C.isDirectionalLight){let A=i.directional[d];A.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),d++}else if(C.isSpotLight){let A=i.spot[x];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(_),A.direction.setFromMatrixPosition(C.matrixWorld),r.setFromMatrixPosition(C.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(_),x++}else if(C.isRectAreaLight){let A=i.rectArea[M];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(_),a.identity(),s.copy(C.matrixWorld),s.premultiply(_),a.extractRotation(s),A.halfWidth.set(C.width*.5,0,0),A.halfHeight.set(0,C.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(C.isPointLight){let A=i.point[v];A.position.setFromMatrixPosition(C.matrixWorld),A.position.applyMatrix4(_),v++}else if(C.isHemisphereLight){let A=i.hemi[g];A.direction.setFromMatrixPosition(C.matrixWorld),A.direction.transformDirection(_),g++}}}return{setup:o,setupView:l,state:i}}function zf(n){let t=new Ay(n),e=[],i=[],r=[];function s(d){f.camera=d,e.length=0,i.length=0,r.length=0}function a(d){e.push(d)}function o(d){i.push(d)}function l(d){r.push(d)}function c(){t.setup(e)}function u(d){t.setupView(e,d)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Ry(n){let t=new WeakMap;function e(r,s=0){let a=t.get(r),o;return a===void 0?(o=new zf(n),t.set(r,[o])):s>=a.length?(o=new zf(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}var Cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Py=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Ly=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],kf=new ge,qs=new J,Jc=new J;function Uy(n,t,e){let i=new Ir,r=new ne,s=new ne,a=new ve,o=new ja,l=new to,c={},u=e.maxTextureSize,f={[Mi]:je,[je]:Mi,[dn]:dn},d=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:Cy,fragmentShader:Iy}),v=d.clone();v.defines.HORIZONTAL_PASS=1;let x=new Qe;x.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ze(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fs;let _=this.type;this.render=function(R,O,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;this.type===Uu&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Fs);let N=n.getRenderTarget(),w=n.getActiveCubeFace(),h=n.getActiveMipmapLevel(),m=n.state;m.setBlending(kn),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let b=_!==this.type;b&&O.traverse(function(y){y.material&&(Array.isArray(y.material)?y.material.forEach(E=>E.needsUpdate=!0):y.material.needsUpdate=!0)});for(let y=0,E=R.length;y<E;y++){let D=R[y],F=D.shadow;if(F===void 0){zt("WebGLShadowMap:",D,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);let I=F.getFrameExtents();r.multiply(I),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/I.x),r.x=s.x*I.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/I.y),r.y=s.y*I.y,F.mapSize.y=s.y));let p=n.state.buffers.depth.getReversed();if(F.camera._reversedDepth=p,F.map===null||b===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Fr){if(D.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new rn(r.x,r.y,{format:Ei,type:Cn,minFilter:Oe,magFilter:Oe,generateMipmaps:!1}),F.map.texture.name=D.name+".shadowMap",F.map.depthTexture=new gi(r.x,r.y,Rn),F.map.depthTexture.name=D.name+".shadowMapDepth",F.map.depthTexture.format=Bn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Fe,F.map.depthTexture.magFilter=Fe}else D.isPointLight?(F.map=new al(r.x),F.map.depthTexture=new Ka(r.x,An)):(F.map=new rn(r.x,r.y),F.map.depthTexture=new gi(r.x,r.y,An)),F.map.depthTexture.name=D.name+".shadowMap",F.map.depthTexture.format=Bn,this.type===Fs?(F.map.depthTexture.compareFunction=p?nl:el,F.map.depthTexture.minFilter=Oe,F.map.depthTexture.magFilter=Oe):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Fe,F.map.depthTexture.magFilter=Fe);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==r.x||F.map.height!==r.y)&&F.map.setSize(r.x,r.y);let P=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();D.isPointLight!==!0&&F.updateMatrices(D,S);for(let H=0;H<P;H++){let nt=F.getCamera(H);if(D.isPointLight){let et=F.camera,ut=F.matrix,Et=D.distance||et.far;Et!==et.far&&(et.far=Et,et.updateProjectionMatrix()),qs.setFromMatrixPosition(D.matrixWorld),et.position.copy(qs),Jc.copy(et.position),Jc.add(Py[H]),et.up.copy(Ly[H]),et.lookAt(Jc),et.updateMatrixWorld(),ut.makeTranslation(-qs.x,-qs.y,-qs.z),kf.multiplyMatrices(et.projectionMatrix,et.matrixWorldInverse),F._frustum.setFromProjectionMatrix(kf,et.coordinateSystem,et.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)n.setRenderTarget(F.map,H),n.clear();else{H===0&&(n.setRenderTarget(F.map),n.clear());let et=F.getViewport(H);a.set(s.x*et.x,s.y*et.y,s.x*et.z,s.y*et.w),m.viewport(a)}i=F.getFrustum(H),C(O,S,nt,D,this.type)}F.isPointLightShadow!==!0&&this.type===Fr&&L(F,S),F.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(N,w,h)};function L(R,O){let S=t.update(M);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,v.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,v.needsUpdate=!0),R.mapPass===null?R.mapPass=new rn(r.x,r.y,{format:Ei,type:Cn}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(O,null,S,d,M,null),v.uniforms.shadow_pass.value=R.mapPass.texture,v.uniforms.resolution.value.set(R.map.width,R.map.height),v.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(O,null,S,v,M,null)}function B(R,O,S,N){let w=null,h=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(h!==void 0)w=h;else if(w=S.isPointLight===!0?l:o,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){let m=w.uuid,b=O.uuid,y=c[m];y===void 0&&(y={},c[m]=y);let E=y[b];E===void 0&&(E=w.clone(),y[b]=E,O.addEventListener("dispose",A)),w=E}if(w.visible=O.visible,w.wireframe=O.wireframe,N===Fr?w.side=O.shadowSide!==null?O.shadowSide:O.side:w.side=O.shadowSide!==null?O.shadowSide:f[O.side],w.alphaMap=O.alphaMap,w.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,w.map=O.map,w.clipShadows=O.clipShadows,w.clippingPlanes=O.clippingPlanes,w.clipIntersection=O.clipIntersection,w.displacementMap=O.displacementMap,w.displacementScale=O.displacementScale,w.displacementBias=O.displacementBias,w.wireframeLinewidth=O.wireframeLinewidth,w.linewidth=O.linewidth,S.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let m=n.properties.get(w);m.light=S}return w}function C(R,O,S,N,w){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&w===Fr)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);let b=t.update(R),y=R.material;if(Array.isArray(y)){let E=b.groups;for(let D=0,F=E.length;D<F;D++){let I=E[D],p=y[I.materialIndex];if(p&&p.visible){let P=B(R,p,N,w);R.onBeforeShadow(n,R,O,S,b,P,I),n.renderBufferDirect(S,null,b,P,R,I),R.onAfterShadow(n,R,O,S,b,P,I)}}}else if(y.visible){let E=B(R,y,N,w);R.onBeforeShadow(n,R,O,S,b,E,null),n.renderBufferDirect(S,null,b,E,R,null),R.onAfterShadow(n,R,O,S,b,E,null)}}let m=R.children;for(let b=0,y=m.length;b<y;b++)C(m[b],O,S,N,w)}function A(R){R.target.removeEventListener("dispose",A);for(let S in c){let N=c[S],w=R.target.uuid;w in N&&(N[w].dispose(),delete N[w])}}}function Ny(n,t){function e(){let k=!1,mt=new ve,tt=null,ht=new ve(0,0,0,0);return{setMask:function(Mt){tt!==Mt&&!k&&(n.colorMask(Mt,Mt,Mt,Mt),tt=Mt)},setLocked:function(Mt){k=Mt},setClear:function(Mt,rt,xt,Ct,Gt){Gt===!0&&(Mt*=Ct,rt*=Ct,xt*=Ct),mt.set(Mt,rt,xt,Ct),ht.equals(mt)===!1&&(n.clearColor(Mt,rt,xt,Ct),ht.copy(mt))},reset:function(){k=!1,tt=null,ht.set(-1,0,0,0)}}}function i(){let k=!1,mt=!1,tt=null,ht=null,Mt=null;return{setReversed:function(rt){if(mt!==rt){let xt=t.get("EXT_clip_control");rt?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),mt=rt;let Ct=Mt;Mt=null,this.setClear(Ct)}},getReversed:function(){return mt},setTest:function(rt){rt?q(n.DEPTH_TEST):at(n.DEPTH_TEST)},setMask:function(rt){tt!==rt&&!k&&(n.depthMask(rt),tt=rt)},setFunc:function(rt){if(mt&&(rt=mf[rt]),ht!==rt){switch(rt){case Na:n.depthFunc(n.NEVER);break;case Da:n.depthFunc(n.ALWAYS);break;case Fa:n.depthFunc(n.LESS);break;case br:n.depthFunc(n.LEQUAL);break;case Ba:n.depthFunc(n.EQUAL);break;case Oa:n.depthFunc(n.GEQUAL);break;case za:n.depthFunc(n.GREATER);break;case ka:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ht=rt}},setLocked:function(rt){k=rt},setClear:function(rt){Mt!==rt&&(Mt=rt,mt&&(rt=1-rt),n.clearDepth(rt))},reset:function(){k=!1,tt=null,ht=null,Mt=null,mt=!1}}}function r(){let k=!1,mt=null,tt=null,ht=null,Mt=null,rt=null,xt=null,Ct=null,Gt=null;return{setTest:function(kt){k||(kt?q(n.STENCIL_TEST):at(n.STENCIL_TEST))},setMask:function(kt){mt!==kt&&!k&&(n.stencilMask(kt),mt=kt)},setFunc:function(kt,nn,se){(tt!==kt||ht!==nn||Mt!==se)&&(n.stencilFunc(kt,nn,se),tt=kt,ht=nn,Mt=se)},setOp:function(kt,nn,se){(rt!==kt||xt!==nn||Ct!==se)&&(n.stencilOp(kt,nn,se),rt=kt,xt=nn,Ct=se)},setLocked:function(kt){k=kt},setClear:function(kt){Gt!==kt&&(n.clearStencil(kt),Gt=kt)},reset:function(){k=!1,mt=null,tt=null,ht=null,Mt=null,rt=null,xt=null,Ct=null,Gt=null}}}let s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap,u={},f={},d={},v=new WeakMap,x=[],M=null,g=!1,_=null,L=null,B=null,C=null,A=null,R=null,O=null,S=new Kt(0,0,0),N=0,w=!1,h=null,m=null,b=null,y=null,E=null,D=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,I=0,p=n.getParameter(n.VERSION);p.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(p)[1]),F=I>=1):p.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(p)[1]),F=I>=2);let P=null,H={},nt=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),ut=new ve().fromArray(nt),Et=new ve().fromArray(et);function pt(k,mt,tt,ht){let Mt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(k,rt),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let xt=0;xt<tt;xt++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(mt,0,n.RGBA,1,1,ht,0,n.RGBA,n.UNSIGNED_BYTE,Mt):n.texImage2D(mt+xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Mt);return rt}let $={};$[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),$[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),$[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(n.DEPTH_TEST),a.setFunc(br),Dt(!1),Ht(mc),q(n.CULL_FACE),Ot(kn);function q(k){u[k]!==!0&&(n.enable(k),u[k]=!0)}function at(k){u[k]!==!1&&(n.disable(k),u[k]=!1)}function bt(k,mt){return d[k]!==mt?(n.bindFramebuffer(k,mt),d[k]=mt,k===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=mt),k===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=mt),!0):!1}function ft(k,mt){let tt=x,ht=!1;if(k){tt=v.get(mt),tt===void 0&&(tt=[],v.set(mt,tt));let Mt=k.textures;if(tt.length!==Mt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,xt=Mt.length;rt<xt;rt++)tt[rt]=n.COLOR_ATTACHMENT0+rt;tt.length=Mt.length,ht=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ht=!0);ht&&n.drawBuffers(tt)}function Lt(k){return M!==k?(n.useProgram(k),M=k,!0):!1}let fe={[ki]:n.FUNC_ADD,[Du]:n.FUNC_SUBTRACT,[Fu]:n.FUNC_REVERSE_SUBTRACT};fe[Bu]=n.MIN,fe[Ou]=n.MAX;let Nt={[zu]:n.ZERO,[ku]:n.ONE,[Vu]:n.SRC_COLOR,[xc]:n.SRC_ALPHA,[Yu]:n.SRC_ALPHA_SATURATE,[Xu]:n.DST_COLOR,[Hu]:n.DST_ALPHA,[Gu]:n.ONE_MINUS_SRC_COLOR,[yc]:n.ONE_MINUS_SRC_ALPHA,[qu]:n.ONE_MINUS_DST_COLOR,[Wu]:n.ONE_MINUS_DST_ALPHA,[Zu]:n.CONSTANT_COLOR,[Ju]:n.ONE_MINUS_CONSTANT_COLOR,[$u]:n.CONSTANT_ALPHA,[Ku]:n.ONE_MINUS_CONSTANT_ALPHA};function Ot(k,mt,tt,ht,Mt,rt,xt,Ct,Gt,kt){if(k===kn){g===!0&&(at(n.BLEND),g=!1);return}if(g===!1&&(q(n.BLEND),g=!0),k!==Nu){if(k!==_||kt!==w){if((L!==ki||A!==ki)&&(n.blendEquation(n.FUNC_ADD),L=ki,A=ki),kt)switch(k){case Br:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFunc(n.ONE,n.ONE);break;case vc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _c:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Vt("WebGLState: Invalid blending: ",k);break}else switch(k){case Br:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case vc:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _c:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",k);break}B=null,C=null,R=null,O=null,S.set(0,0,0),N=0,_=k,w=kt}return}Mt=Mt||mt,rt=rt||tt,xt=xt||ht,(mt!==L||Mt!==A)&&(n.blendEquationSeparate(fe[mt],fe[Mt]),L=mt,A=Mt),(tt!==B||ht!==C||rt!==R||xt!==O)&&(n.blendFuncSeparate(Nt[tt],Nt[ht],Nt[rt],Nt[xt]),B=tt,C=ht,R=rt,O=xt),(Ct.equals(S)===!1||Gt!==N)&&(n.blendColor(Ct.r,Ct.g,Ct.b,Gt),S.copy(Ct),N=Gt),_=k,w=!1}function le(k,mt){k.side===dn?at(n.CULL_FACE):q(n.CULL_FACE);let tt=k.side===je;mt&&(tt=!tt),Dt(tt),k.blending===Br&&k.transparent===!1?Ot(kn):Ot(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);let ht=k.stencilWrite;o.setTest(ht),ht&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ee(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):at(n.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(k){h!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),h=k)}function Ht(k){k!==Pu?(q(n.CULL_FACE),k!==m&&(k===mc?n.cullFace(n.BACK):k===Lu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):at(n.CULL_FACE),m=k}function Ee(k){k!==b&&(F&&n.lineWidth(k),b=k)}function ee(k,mt,tt){k?(q(n.POLYGON_OFFSET_FILL),(y!==mt||E!==tt)&&(y=mt,E=tt,a.getReversed()&&(mt=-mt),n.polygonOffset(mt,tt))):at(n.POLYGON_OFFSET_FILL)}function Xt(k){k?q(n.SCISSOR_TEST):at(n.SCISSOR_TEST)}function _e(k){k===void 0&&(k=n.TEXTURE0+D-1),P!==k&&(n.activeTexture(k),P=k)}function V(k,mt,tt){tt===void 0&&(P===null?tt=n.TEXTURE0+D-1:tt=P);let ht=H[tt];ht===void 0&&(ht={type:void 0,texture:void 0},H[tt]=ht),(ht.type!==k||ht.texture!==mt)&&(P!==tt&&(n.activeTexture(tt),P=tt),n.bindTexture(k,mt||$[k]),ht.type=k,ht.texture=mt)}function Jt(){let k=H[P];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function re(){try{n.compressedTexImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function T(){try{n.texSubImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function W(){try{n.texSubImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function dt(){try{n.texStorage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function ot(){try{n.texStorage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function j(){try{n.texImage2D(...arguments)}catch(k){Vt("WebGLState:",k)}}function st(){try{n.texImage3D(...arguments)}catch(k){Vt("WebGLState:",k)}}function lt(k){return f[k]!==void 0?f[k]:n.getParameter(k)}function gt(k,mt){f[k]!==mt&&(n.pixelStorei(k,mt),f[k]=mt)}function vt(k){ut.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ut.copy(k))}function ct(k){Et.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),Et.copy(k))}function _t(k,mt){let tt=c.get(mt);tt===void 0&&(tt=new WeakMap,c.set(mt,tt));let ht=tt.get(k);ht===void 0&&(ht=n.getUniformBlockIndex(mt,k.name),tt.set(k,ht))}function Ft(k,mt){let ht=c.get(mt).get(k);l.get(mt)!==ht&&(n.uniformBlockBinding(mt,ht,k.__bindingPointIndex),l.set(mt,ht))}function Rt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},P=null,H={},d={},v=new WeakMap,x=[],M=null,g=!1,_=null,L=null,B=null,C=null,A=null,R=null,O=null,S=new Kt(0,0,0),N=0,w=!1,h=null,m=null,b=null,y=null,E=null,ut.set(0,0,n.canvas.width,n.canvas.height),Et.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:q,disable:at,bindFramebuffer:bt,drawBuffers:ft,useProgram:Lt,setBlending:Ot,setMaterial:le,setFlipSided:Dt,setCullFace:Ht,setLineWidth:Ee,setPolygonOffset:ee,setScissorTest:Xt,activeTexture:_e,bindTexture:V,unbindTexture:Jt,compressedTexImage2D:re,compressedTexImage3D:z,texImage2D:j,texImage3D:st,pixelStorei:gt,getParameter:lt,updateUBOMapping:_t,uniformBlockBinding:Ft,texStorage2D:dt,texStorage3D:ot,texSubImage2D:T,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:vt,viewport:ct,reset:Rt}}function Dy(n,t,e,i,r,s,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap,f=new Set,d,v=new WeakMap,x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,T){return x?new OffscreenCanvas(z,T):Ms("canvas")}function g(z,T,W){let X=1,K=re(z);if((K.width>W||K.height>W)&&(X=W/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let dt=Math.floor(X*K.width),ot=Math.floor(X*K.height);d===void 0&&(d=M(dt,ot));let j=T?M(dt,ot):d;return j.width=dt,j.height=ot,j.getContext("2d").drawImage(z,0,0,dt,ot),zt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+dt+"x"+ot+")."),j}else return"data"in z&&zt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),z;return z}function _(z){return z.generateMipmaps}function L(z){n.generateMipmap(z)}function B(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function C(z,T,W,X,K,dt=!1){if(z!==null){if(n[z]!==void 0)return n[z];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ot;X&&(ot=t.get("EXT_texture_norm16"),ot||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=T;if(T===n.RED&&(W===n.FLOAT&&(j=n.R32F),W===n.HALF_FLOAT&&(j=n.R16F),W===n.UNSIGNED_BYTE&&(j=n.R8),W===n.UNSIGNED_SHORT&&ot&&(j=ot.R16_EXT),W===n.SHORT&&ot&&(j=ot.R16_SNORM_EXT)),T===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.R8UI),W===n.UNSIGNED_SHORT&&(j=n.R16UI),W===n.UNSIGNED_INT&&(j=n.R32UI),W===n.BYTE&&(j=n.R8I),W===n.SHORT&&(j=n.R16I),W===n.INT&&(j=n.R32I)),T===n.RG&&(W===n.FLOAT&&(j=n.RG32F),W===n.HALF_FLOAT&&(j=n.RG16F),W===n.UNSIGNED_BYTE&&(j=n.RG8),W===n.UNSIGNED_SHORT&&ot&&(j=ot.RG16_EXT),W===n.SHORT&&ot&&(j=ot.RG16_SNORM_EXT)),T===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RG8UI),W===n.UNSIGNED_SHORT&&(j=n.RG16UI),W===n.UNSIGNED_INT&&(j=n.RG32UI),W===n.BYTE&&(j=n.RG8I),W===n.SHORT&&(j=n.RG16I),W===n.INT&&(j=n.RG32I)),T===n.RGB_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGB8UI),W===n.UNSIGNED_SHORT&&(j=n.RGB16UI),W===n.UNSIGNED_INT&&(j=n.RGB32UI),W===n.BYTE&&(j=n.RGB8I),W===n.SHORT&&(j=n.RGB16I),W===n.INT&&(j=n.RGB32I)),T===n.RGBA_INTEGER&&(W===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),W===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),W===n.UNSIGNED_INT&&(j=n.RGBA32UI),W===n.BYTE&&(j=n.RGBA8I),W===n.SHORT&&(j=n.RGBA16I),W===n.INT&&(j=n.RGBA32I)),T===n.RGB&&(W===n.UNSIGNED_SHORT&&ot&&(j=ot.RGB16_EXT),W===n.SHORT&&ot&&(j=ot.RGB16_SNORM_EXT),W===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),W===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),T===n.RGBA){let st=dt?ys:Qt.getTransfer(K);W===n.FLOAT&&(j=n.RGBA32F),W===n.HALF_FLOAT&&(j=n.RGBA16F),W===n.UNSIGNED_BYTE&&(j=st===oe?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT&&ot&&(j=ot.RGBA16_EXT),W===n.SHORT&&ot&&(j=ot.RGBA16_SNORM_EXT),W===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function A(z,T){let W;return z?T===null||T===An||T===zr?W=n.DEPTH24_STENCIL8:T===Rn?W=n.DEPTH32F_STENCIL8:T===Or&&(W=n.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===An||T===zr?W=n.DEPTH_COMPONENT24:T===Rn?W=n.DEPTH_COMPONENT32F:T===Or&&(W=n.DEPTH_COMPONENT16),W}function R(z,T){return _(z)===!0||z.isFramebufferTexture&&z.minFilter!==Fe&&z.minFilter!==Oe?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function O(z){let T=z.target;T.removeEventListener("dispose",O),N(T),T.isVideoTexture&&u.delete(T),T.isHTMLTexture&&f.delete(T)}function S(z){let T=z.target;T.removeEventListener("dispose",S),h(T)}function N(z){let T=i.get(z);if(T.__webglInit===void 0)return;let W=z.source,X=v.get(W);if(X){let K=X[T.__cacheKey];K.usedTimes--,K.usedTimes===0&&w(z),Object.keys(X).length===0&&v.delete(W)}i.remove(z)}function w(z){let T=i.get(z);n.deleteTexture(T.__webglTexture);let W=z.source,X=v.get(W);delete X[T.__cacheKey],a.memory.textures--}function h(z){let T=i.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),i.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(T.__webglFramebuffer[X]))for(let K=0;K<T.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(T.__webglFramebuffer[X][K]);else n.deleteFramebuffer(T.__webglFramebuffer[X]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[X])}else{if(Array.isArray(T.__webglFramebuffer))for(let X=0;X<T.__webglFramebuffer.length;X++)n.deleteFramebuffer(T.__webglFramebuffer[X]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let X=0;X<T.__webglColorRenderbuffer.length;X++)T.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[X]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let W=z.textures;for(let X=0,K=W.length;X<K;X++){let dt=i.get(W[X]);dt.__webglTexture&&(n.deleteTexture(dt.__webglTexture),a.memory.textures--),i.remove(W[X])}i.remove(z)}let m=0;function b(){m=0}function y(){return m}function E(z){m=z}function D(){let z=m;return z>=r.maxTextures&&zt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),m+=1,z}function F(z){let T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function I(z,T){let W=i.get(z);if(z.isVideoTexture&&V(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&W.__version!==z.version){let X=z.image;if(X===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(W,z,T);return}}else z.isExternalTexture&&(W.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+T)}function p(z,T){let W=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&W.__version!==z.version){at(W,z,T);return}else z.isExternalTexture&&(W.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+T)}function P(z,T){let W=i.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&W.__version!==z.version){at(W,z,T);return}e.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+T)}function H(z,T){let W=i.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&W.__version!==z.version){bt(W,z,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+T)}let nt={[Va]:n.REPEAT,[Dn]:n.CLAMP_TO_EDGE,[Ga]:n.MIRRORED_REPEAT},et={[Fe]:n.NEAREST,[tf]:n.NEAREST_MIPMAP_NEAREST,[Os]:n.NEAREST_MIPMAP_LINEAR,[Oe]:n.LINEAR,[vo]:n.LINEAR_MIPMAP_NEAREST,[wi]:n.LINEAR_MIPMAP_LINEAR},ut={[sf]:n.NEVER,[hf]:n.ALWAYS,[af]:n.LESS,[el]:n.LEQUAL,[of]:n.EQUAL,[nl]:n.GEQUAL,[lf]:n.GREATER,[cf]:n.NOTEQUAL};function Et(z,T){if(T.type===Rn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Oe||T.magFilter===vo||T.magFilter===Os||T.magFilter===wi||T.minFilter===Oe||T.minFilter===vo||T.minFilter===Os||T.minFilter===wi)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,nt[T.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,nt[T.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,nt[T.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,et[T.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,et[T.minFilter]),T.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Fe||T.minFilter!==Os&&T.minFilter!==wi||T.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){let W=t.get("EXT_texture_filter_anisotropic");n.texParameterf(z,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function pt(z,T){let W=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",O));let X=T.source,K=v.get(X);K===void 0&&(K={},v.set(X,K));let dt=F(T);if(dt!==z.__cacheKey){K[dt]===void 0&&(K[dt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,W=!0),K[dt].usedTimes++;let ot=K[z.__cacheKey];ot!==void 0&&(K[z.__cacheKey].usedTimes--,ot.usedTimes===0&&w(T)),z.__cacheKey=dt,z.__webglTexture=K[dt].texture}return W}function $(z,T,W){return Math.floor(Math.floor(z/W)/T)}function q(z,T,W,X){let dt=z.updateRanges;if(dt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,W,X,T.data);else{dt.sort((gt,vt)=>gt.start-vt.start);let ot=0;for(let gt=1;gt<dt.length;gt++){let vt=dt[ot],ct=dt[gt],_t=vt.start+vt.count,Ft=$(ct.start,T.width,4),Rt=$(vt.start,T.width,4);ct.start<=_t+1&&Ft===Rt&&$(ct.start+ct.count-1,T.width,4)===Ft?vt.count=Math.max(vt.count,ct.start+ct.count-vt.start):(++ot,dt[ot]=ct)}dt.length=ot+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),lt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let gt=0,vt=dt.length;gt<vt;gt++){let ct=dt[gt],_t=Math.floor(ct.start/4),Ft=Math.ceil(ct.count/4),Rt=_t%T.width,k=Math.floor(_t/T.width),mt=Ft,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Rt),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,Rt,k,mt,tt,W,X,T.data)}z.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,lt)}}function at(z,T,W){let X=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(X=n.TEXTURE_3D);let K=pt(z,T),dt=T.source;e.bindTexture(X,z.__webglTexture,n.TEXTURE0+W);let ot=i.get(dt);if(dt.version!==ot.__version||K===!0){if(e.activeTexture(n.TEXTURE0+W),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){let tt=Qt.getPrimaries(Qt.workingColorSpace),ht=T.colorSpace===jn?null:Qt.getPrimaries(T.colorSpace),Mt=T.colorSpace===jn||tt===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt)}e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment);let st=g(T.image,!1,r.maxTextureSize);st=Jt(T,st);let lt=s.convert(T.format,T.colorSpace),gt=s.convert(T.type),vt=C(T.internalFormat,lt,gt,T.normalized,T.colorSpace,T.isVideoTexture);Et(X,T);let ct,_t=T.mipmaps,Ft=T.isVideoTexture!==!0,Rt=ot.__version===void 0||K===!0,k=dt.dataReady,mt=R(T,st);if(T.isDepthTexture)vt=A(T.format===bi,T.type),Rt&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,vt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,vt,st.width,st.height,0,lt,gt,null));else if(T.isDataTexture)if(_t.length>0){Ft&&Rt&&e.texStorage2D(n.TEXTURE_2D,mt,vt,_t[0].width,_t[0].height);for(let tt=0,ht=_t.length;tt<ht;tt++)ct=_t[tt],Ft?k&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,gt,ct.data):e.texImage2D(n.TEXTURE_2D,tt,vt,ct.width,ct.height,0,lt,gt,ct.data);T.generateMipmaps=!1}else Ft?(Rt&&e.texStorage2D(n.TEXTURE_2D,mt,vt,st.width,st.height),k&&q(T,st,lt,gt)):e.texImage2D(n.TEXTURE_2D,0,vt,st.width,st.height,0,lt,gt,st.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ft&&Rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,vt,_t[0].width,_t[0].height,st.depth);for(let tt=0,ht=_t.length;tt<ht;tt++)if(ct=_t[tt],T.format!==xn)if(lt!==null)if(Ft){if(k)if(T.layerUpdates.size>0){let Mt=Hc(ct.width,ct.height,T.format,T.type);for(let rt of T.layerUpdates){let xt=ct.data.subarray(rt*Mt/ct.data.BYTES_PER_ELEMENT,(rt+1)*Mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,rt,ct.width,ct.height,1,lt,xt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,st.depth,lt,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,vt,ct.width,ct.height,st.depth,0,ct.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,st.depth,lt,gt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,vt,ct.width,ct.height,st.depth,0,lt,gt,ct.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ft&&Rt&&e.texStorage2D(n.TEXTURE_2D,mt,vt,_t[0].width,_t[0].height);for(let tt=0,ht=_t.length;tt<ht;tt++)ct=_t[tt],T.format!==xn?lt!==null?Ft?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,vt,ct.width,ct.height,0,ct.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?k&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ct.width,ct.height,lt,gt,ct.data):e.texImage2D(n.TEXTURE_2D,tt,vt,ct.width,ct.height,0,lt,gt,ct.data)}else if(T.isDataArrayTexture)if(Ft){if(Rt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,mt,vt,st.width,st.height,st.depth),k)if(T.layerUpdates.size>0){let tt=Hc(st.width,st.height,T.format,T.type);for(let ht of T.layerUpdates){let Mt=st.data.subarray(ht*tt/st.data.BYTES_PER_ELEMENT,(ht+1)*tt/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ht,st.width,st.height,1,lt,gt,Mt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,lt,gt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,st.width,st.height,st.depth,0,lt,gt,st.data);else if(T.isData3DTexture)Ft?(Rt&&e.texStorage3D(n.TEXTURE_3D,mt,vt,st.width,st.height,st.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,lt,gt,st.data)):e.texImage3D(n.TEXTURE_3D,0,vt,st.width,st.height,st.depth,0,lt,gt,st.data);else if(T.isFramebufferTexture){if(Rt)if(Ft)e.texStorage2D(n.TEXTURE_2D,mt,vt,st.width,st.height);else{let tt=st.width,ht=st.height;for(let Mt=0;Mt<mt;Mt++)e.texImage2D(n.TEXTURE_2D,Mt,vt,tt,ht,0,lt,gt,null),tt>>=1,ht>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),st.parentNode!==tt){tt.appendChild(st),f.add(T),tt.onpaint=ht=>{let Mt=ht.changedElements;for(let rt of f)Mt.includes(rt.image)&&(rt.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let Mt=n.RGBA,rt=n.RGBA,xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Mt,rt,xt,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(_t.length>0){if(Ft&&Rt){let tt=re(_t[0]);e.texStorage2D(n.TEXTURE_2D,mt,vt,tt.width,tt.height)}for(let tt=0,ht=_t.length;tt<ht;tt++)ct=_t[tt],Ft?k&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,lt,gt,ct):e.texImage2D(n.TEXTURE_2D,tt,vt,lt,gt,ct);T.generateMipmaps=!1}else if(Ft){if(Rt){let tt=re(st);e.texStorage2D(n.TEXTURE_2D,mt,vt,tt.width,tt.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,gt,st)}else e.texImage2D(n.TEXTURE_2D,0,vt,lt,gt,st);_(T)&&L(X),ot.__version=dt.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function bt(z,T,W){if(T.image.length!==6)return;let X=pt(z,T),K=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+W);let dt=i.get(K);if(K.version!==dt.__version||X===!0){e.activeTexture(n.TEXTURE0+W);let ot=Qt.getPrimaries(Qt.workingColorSpace),j=T.colorSpace===jn?null:Qt.getPrimaries(T.colorSpace),st=T.colorSpace===jn||ot===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let lt=T.isCompressedTexture||T.image[0].isCompressedTexture,gt=T.image[0]&&T.image[0].isDataTexture,vt=[];for(let rt=0;rt<6;rt++)!lt&&!gt?vt[rt]=g(T.image[rt],!0,r.maxCubemapSize):vt[rt]=gt?T.image[rt].image:T.image[rt],vt[rt]=Jt(T,vt[rt]);let ct=vt[0],_t=s.convert(T.format,T.colorSpace),Ft=s.convert(T.type),Rt=C(T.internalFormat,_t,Ft,T.normalized,T.colorSpace),k=T.isVideoTexture!==!0,mt=dt.__version===void 0||X===!0,tt=K.dataReady,ht=R(T,ct);Et(n.TEXTURE_CUBE_MAP,T);let Mt;if(lt){k&&mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Rt,ct.width,ct.height);for(let rt=0;rt<6;rt++){Mt=vt[rt].mipmaps;for(let xt=0;xt<Mt.length;xt++){let Ct=Mt[xt];T.format!==xn?_t!==null?k?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,0,0,Ct.width,Ct.height,_t,Ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,Rt,Ct.width,Ct.height,0,Ct.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,0,0,Ct.width,Ct.height,_t,Ft,Ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt,Rt,Ct.width,Ct.height,0,_t,Ft,Ct.data)}}}else{if(Mt=T.mipmaps,k&&mt){Mt.length>0&&ht++;let rt=re(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,Rt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(gt){k?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,vt[rt].width,vt[rt].height,_t,Ft,vt[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Rt,vt[rt].width,vt[rt].height,0,_t,Ft,vt[rt].data);for(let xt=0;xt<Mt.length;xt++){let Gt=Mt[xt].image[rt].image;k?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,0,0,Gt.width,Gt.height,_t,Ft,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,Rt,Gt.width,Gt.height,0,_t,Ft,Gt.data)}}else{k?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,_t,Ft,vt[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Rt,_t,Ft,vt[rt]);for(let xt=0;xt<Mt.length;xt++){let Ct=Mt[xt];k?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,0,0,_t,Ft,Ct.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,xt+1,Rt,_t,Ft,Ct.image[rt])}}}_(T)&&L(n.TEXTURE_CUBE_MAP),dt.__version=K.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function ft(z,T,W,X,K,dt){let ot=s.convert(W.format,W.colorSpace),j=s.convert(W.type),st=C(W.internalFormat,ot,j,W.normalized,W.colorSpace),lt=i.get(T),gt=i.get(W);if(gt.__renderTarget=T,!lt.__hasExternalTextures){let vt=Math.max(1,T.width>>dt),ct=Math.max(1,T.height>>dt);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,dt,st,vt,ct,T.depth,0,ot,j,null):e.texImage2D(K,dt,st,vt,ct,0,ot,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,z),_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,gt.__webglTexture,0,Xt(T)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,gt.__webglTexture,dt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(z,T,W){if(n.bindRenderbuffer(n.RENDERBUFFER,z),T.depthBuffer){let X=T.depthTexture,K=X&&X.isDepthTexture?X.type:null,dt=A(T.stencilBuffer,K),ot=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt(T),dt,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt(T),dt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,dt,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,z)}else{let X=T.textures;for(let K=0;K<X.length;K++){let dt=X[K],ot=s.convert(dt.format,dt.colorSpace),j=s.convert(dt.type),st=C(dt.internalFormat,ot,j,dt.normalized,dt.colorSpace);_e(T)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xt(T),st,T.width,T.height):W?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xt(T),st,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,st,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(z,T,W){let X=T.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(T.depthTexture);if(K.__renderTarget=T,(!K.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,T.depthTexture.addEventListener("dispose",O)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Et(n.TEXTURE_CUBE_MAP,T.depthTexture);let lt=s.convert(T.depthTexture.format),gt=s.convert(T.depthTexture.type),vt;T.depthTexture.format===Bn?vt=n.DEPTH_COMPONENT24:T.depthTexture.format===bi&&(vt=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,T.width,T.height,0,lt,gt,null)}}else I(T.depthTexture,0);let dt=K.__webglTexture,ot=Xt(T),j=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+W:n.TEXTURE_2D,st=T.depthTexture.format===bi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Bn)_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,j,dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,st,j,dt,0);else if(T.depthTexture.format===bi)_e(T)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,j,dt,0,ot):n.framebufferTexture2D(n.FRAMEBUFFER,st,j,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(z){let T=i.get(z),W=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){let X=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),X){let K=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),T.__depthDisposeCallback=K}T.__boundDepthTexture=X}if(z.depthTexture&&!T.__autoAllocateDepthBuffer)if(W)for(let X=0;X<6;X++)fe(T.__webglFramebuffer[X],z,X);else{let X=z.texture.mipmaps;X&&X.length>0?fe(T.__webglFramebuffer[0],z,0):fe(T.__webglFramebuffer,z,0)}else if(W){T.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[X]),T.__webglDepthbuffer[X]===void 0)T.__webglDepthbuffer[X]=n.createRenderbuffer(),Lt(T.__webglDepthbuffer[X],z,!1);else{let K=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,dt)}}else{let X=z.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),Lt(T.__webglDepthbuffer,z,!1);else{let K=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,dt),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,dt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ot(z,T,W){let X=i.get(z);T!==void 0&&ft(X.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&Nt(z)}function le(z){let T=z.texture,W=i.get(z),X=i.get(T);z.addEventListener("dispose",S);let K=z.textures,dt=z.isWebGLCubeRenderTarget===!0,ot=K.length>1;if(ot||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=T.version,a.memory.textures++),dt){W.__webglFramebuffer=[];for(let j=0;j<6;j++)if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer[j]=[];for(let st=0;st<T.mipmaps.length;st++)W.__webglFramebuffer[j][st]=n.createFramebuffer()}else W.__webglFramebuffer[j]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){W.__webglFramebuffer=[];for(let j=0;j<T.mipmaps.length;j++)W.__webglFramebuffer[j]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ot)for(let j=0,st=K.length;j<st;j++){let lt=i.get(K[j]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(z.samples>0&&_e(z)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let st=K[j];W.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[j]);let lt=s.convert(st.format,st.colorSpace),gt=s.convert(st.type),vt=C(st.internalFormat,lt,gt,st.normalized,st.colorSpace,z.isXRRenderTarget===!0),ct=Xt(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,vt,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,W.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),Lt(W.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(dt){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Et(n.TEXTURE_CUBE_MAP,T);for(let j=0;j<6;j++)if(T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)ft(W.__webglFramebuffer[j][st],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,st);else ft(W.__webglFramebuffer[j],z,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);_(T)&&L(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let j=0,st=K.length;j<st;j++){let lt=K[j],gt=i.get(lt),vt=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(vt=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(vt,gt.__webglTexture),Et(vt,lt),ft(W.__webglFramebuffer,z,lt,n.COLOR_ATTACHMENT0+j,vt,0),_(lt)&&L(vt)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(j=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Et(j,T),T.mipmaps&&T.mipmaps.length>0)for(let st=0;st<T.mipmaps.length;st++)ft(W.__webglFramebuffer[st],z,T,n.COLOR_ATTACHMENT0,j,st);else ft(W.__webglFramebuffer,z,T,n.COLOR_ATTACHMENT0,j,0);_(T)&&L(j),e.unbindTexture()}z.depthBuffer&&Nt(z)}function Dt(z){let T=z.textures;for(let W=0,X=T.length;W<X;W++){let K=T[W];if(_(K)){let dt=B(z),ot=i.get(K).__webglTexture;e.bindTexture(dt,ot),L(dt),e.unbindTexture()}}}let Ht=[],Ee=[];function ee(z){if(z.samples>0){if(_e(z)===!1){let T=z.textures,W=z.width,X=z.height,K=n.COLOR_BUFFER_BIT,dt=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(z),j=T.length>1;if(j)for(let lt=0;lt<T.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let st=z.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<T.length;lt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let gt=i.get(T[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,W,X,0,0,W,X,K,n.NEAREST),l===!0&&(Ht.length=0,Ee.length=0,Ht.push(n.COLOR_ATTACHMENT0+lt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Ht.push(dt),Ee.push(dt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ee)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let lt=0;lt<T.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let gt=i.get(T[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let T=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function Xt(z){return Math.min(r.maxSamples,z.samples)}function _e(z){let T=i.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function V(z){let T=a.render.frame;u.get(z)!==T&&(u.set(z,T),z.update())}function Jt(z,T){let W=z.colorSpace,X=z.format,K=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||W!==xs&&W!==jn&&(Qt.getTransfer(W)===oe?(X!==xn||K!==sn)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",W)),T}function re(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=b,this.getTextureUnits=y,this.setTextureUnits=E,this.setTexture2D=I,this.setTexture2DArray=p,this.setTexture3D=P,this.setTextureCube=H,this.rebindTextures=Ot,this.setupRenderTarget=le,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Fy(n,t){function e(i,r=jn){let s,a=Qt.getTransfer(r);if(i===sn)return n.UNSIGNED_BYTE;if(i===xo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===yo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Uc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ic)return n.BYTE;if(i===Pc)return n.SHORT;if(i===Or)return n.UNSIGNED_SHORT;if(i===_o)return n.INT;if(i===An)return n.UNSIGNED_INT;if(i===Rn)return n.FLOAT;if(i===Cn)return n.HALF_FLOAT;if(i===Nc)return n.ALPHA;if(i===Dc)return n.RGB;if(i===xn)return n.RGBA;if(i===Bn)return n.DEPTH_COMPONENT;if(i===bi)return n.DEPTH_STENCIL;if(i===Fc)return n.RED;if(i===Mo)return n.RED_INTEGER;if(i===Ei)return n.RG;if(i===So)return n.RG_INTEGER;if(i===wo)return n.RGBA_INTEGER;if(i===zs||i===ks||i===Vs||i===Gs)if(a===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===zs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===zs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ks)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Gs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===Eo||i===To||i===Ao)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Eo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===To)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ao)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ro||i===Co||i===Io||i===Po||i===Lo||i===Hs||i===Uo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ro||i===Co)return a===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Io)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Po)return s.COMPRESSED_R11_EAC;if(i===Lo)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Hs)return s.COMPRESSED_RG11_EAC;if(i===Uo)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===No||i===Do||i===Fo||i===Bo||i===Oo||i===zo||i===ko||i===Vo||i===Go||i===Ho||i===Wo||i===Xo||i===qo||i===Yo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===No)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Do)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Bo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Oo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ko)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Go)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ho)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Zo||i===Jo||i===$o)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===Zo)return a===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$o)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ko||i===Qo||i===Ws||i===jo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ko)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ws)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,ih=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Is(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new un({vertexShader:By,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ze(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends On{constructor(t,e){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,v=null,x=null,M=typeof XRWebGLBinding<"u",g=new ih,_={},L=e.getContextAttributes(),B=null,C=null,A=[],R=[],O=new ne,S=null,N=null,w=new qe;w.viewport=new ve;let h=new qe;h.viewport=new ve;let m=[w,h],b=new po,y=null,E=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let q=A[$];return q===void 0&&(q=new Cr,A[$]=q),q.getTargetRaySpace()},this.getControllerGrip=function($){let q=A[$];return q===void 0&&(q=new Cr,A[$]=q),q.getGripSpace()},this.getHand=function($){let q=A[$];return q===void 0&&(q=new Cr,A[$]=q),q.getHandSpace()};function D($){let q=R.indexOf($.inputSource);if(q===-1)return;let at=A[q];at!==void 0&&(at.update($.inputSource,$.frame,c||a),at.dispatchEvent({type:$.type,data:$.inputSource}))}function F(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",I);for(let $=0;$<A.length;$++){let q=R[$];q!==null&&(R[$]=null,A[$].disconnect(q))}y=null,E=null,g.reset();for(let $ in _)delete _[$];if(t.setRenderTarget(B),v=null,d=null,f=null,r=null,C=null,pt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(O.width,O.height,!1),N!==null){let $=N.camera;$.fov=N.fov,$.zoom=N.zoom,$.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:v},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(r,e)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(B=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",F),r.addEventListener("inputsourceschange",I),L.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(O),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,bt=null,ft=null;L.depth&&(ft=L.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=L.stencil?bi:Bn,bt=L.stencil?zr:An);let Lt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Lt),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),C=new rn(d.textureWidth,d.textureHeight,{format:xn,type:sn,depthTexture:new gi(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:L.stencil,colorSpace:t.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let at={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:s};v=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:v}),t.setPixelRatio(1),t.setSize(v.framebufferWidth,v.framebufferHeight,!1),C=new rn(v.framebufferWidth,v.framebufferHeight,{format:xn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),pt.setContext(r),pt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I($){for(let q=0;q<$.removed.length;q++){let at=$.removed[q],bt=R.indexOf(at);bt>=0&&(R[bt]=null,A[bt].disconnect(at))}for(let q=0;q<$.added.length;q++){let at=$.added[q],bt=R.indexOf(at);if(bt===-1){for(let Lt=0;Lt<A.length;Lt++)if(Lt>=R.length){R.push(at),bt=Lt;break}else if(R[Lt]===null){R[Lt]=at,bt=Lt;break}if(bt===-1)break}let ft=A[bt];ft&&ft.connect(at)}}let p=new J,P=new J;function H($,q,at){p.setFromMatrixPosition(q.matrixWorld),P.setFromMatrixPosition(at.matrixWorld);let bt=p.distanceTo(P),ft=q.projectionMatrix.elements,Lt=at.projectionMatrix.elements,fe=ft[14]/(ft[10]-1),Nt=ft[14]/(ft[10]+1),Ot=(ft[9]+1)/ft[5],le=(ft[9]-1)/ft[5],Dt=(ft[8]-1)/ft[0],Ht=(Lt[8]+1)/Lt[0],Ee=fe*Dt,ee=fe*Ht,Xt=bt/(-Dt+Ht),_e=Xt*-Dt;if(q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(_e),$.translateZ(Xt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ft[10]===-1)$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let V=fe+Xt,Jt=Nt+Xt,re=Ee-_e,z=ee+(bt-_e),T=Ot*Nt/Jt*V,W=le*Nt/Jt*V;$.projectionMatrix.makePerspective(re,z,T,W,V,Jt),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function nt($,q){q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let q=$.near,at=$.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(at=g.depthFar)),b.near=h.near=w.near=q,b.far=h.far=w.far=at,(y!==b.near||E!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),y=b.near,E=b.far),b.layers.mask=$.layers.mask|6,w.layers.mask=b.layers.mask&-5,h.layers.mask=b.layers.mask&-3;let bt=$.parent,ft=b.cameras;nt(b,bt);for(let Lt=0;Lt<ft.length;Lt++)nt(ft[Lt],bt);ft.length===2?H(b,w,h):b.projectionMatrix.copy(w.projectionMatrix),N===null&&$.isPerspectiveCamera&&(N={camera:$,fov:$.fov,zoom:$.zoom}),et($,b,bt)};function et($,q,at){at===null?$.matrix.copy(q.matrixWorld):($.matrix.copy(at.matrixWorld),$.matrix.invert(),$.matrix.multiply(q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(q.projectionMatrix),$.projectionMatrixInverse.copy(q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ar*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&v===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),v!==null&&v.fixedFoveation!==void 0&&(v.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)},this.getCameraTexture=function($){return _[$]};let ut=null;function Et($,q){if(u=q.getViewerPose(c||a),x=q,u!==null){let at=u.views;v!==null&&(t.setRenderTargetFramebuffer(C,v.framebuffer),t.setRenderTarget(C));let bt=!1;at.length!==b.cameras.length&&(b.cameras.length=0,bt=!0);for(let Nt=0;Nt<at.length;Nt++){let Ot=at[Nt],le=null;if(v!==null)le=v.getViewport(Ot);else{let Ht=f.getViewSubImage(d,Ot);le=Ht.viewport,Nt===0&&(t.setRenderTargetTextures(C,Ht.colorTexture,Ht.depthStencilTexture),t.setRenderTarget(C))}let Dt=m[Nt];Dt===void 0&&(Dt=new qe,Dt.layers.enable(Nt),Dt.viewport=new ve,m[Nt]=Dt),Dt.matrix.fromArray(Ot.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Ot.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(le.x,le.y,le.width,le.height),Nt===0&&(b.matrix.copy(Dt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),bt===!0&&b.cameras.push(Dt)}let ft=r.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let Nt=f.getDepthInformation(at[0]);Nt&&Nt.isValid&&Nt.texture&&g.init(Nt,r.renderState)}if(ft&&ft.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let Nt=0;Nt<at.length;Nt++){let Ot=at[Nt].camera;if(Ot){let le=_[Ot];le||(le=new Is,_[Ot]=le);let Dt=f.getCameraImage(Ot);le.sourceTexture=Dt}}}}for(let at=0;at<A.length;at++){let bt=R[at],ft=A[at];bt!==null&&ft!==void 0&&ft.update(bt,q,c||a)}ut&&ut($,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),x=null}let pt=new Vf;pt.setAnimationLoop(Et),this.setAnimationLoop=function($){ut=$},this.dispose=function(){}}},zy=new ge,Yf=new Wt;Yf.set(-1,0,0,0,1,0,0,0,1);function ky(n,t){function e(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,kc(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,L,B,C){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(g,_):_.isMeshLambertMaterial?(s(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(g,_),f(g,_)):_.isMeshPhongMaterial?(s(g,_),u(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(g,_),d(g,_),_.isMeshPhysicalMaterial&&v(g,_,C)):_.isMeshMatcapMaterial?(s(g,_),x(g,_)):_.isMeshDepthMaterial?s(g,_):_.isMeshDistanceMaterial?(s(g,_),M(g,_)):_.isMeshNormalMaterial?s(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?l(g,_,L,B):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,e(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===je&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,e(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===je&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,e(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,e(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let L=t.get(_),B=L.envMap,C=L.envMapRotation;B&&(g.envMap.value=B,g.envMapRotation.value.setFromMatrix4(zy.makeRotationFromEuler(C)).transpose(),B.isCubeTexture&&B.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Yf),g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform))}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,L,B){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*L,g.scale.value=B*.5,_.map&&(g.map.value=_.map,e(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,e(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,e(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function u(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function v(g,_,L){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===je&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.retroreflectivity>0&&(g.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=L.texture,g.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,_){_.matcap&&(g.matcap.value=_.matcap)}function M(g,_){let L=t.get(_).light;g.referencePosition.value.setFromMatrixPosition(L.matrixWorld),g.nearDistance.value=L.shadow.camera.near,g.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Vy(n,t,e,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,A){let R=A.program;i.uniformBlockBinding(C,R)}function c(C,A){let R=r[C.id];R===void 0&&(g(C),R=u(C),r[C.id]=R,C.addEventListener("dispose",L));let O=A.program;i.updateUBOMapping(C,O);let S=t.render.frame;s[C.id]!==S&&(d(C),s[C.id]=S)}function u(C){let A=f();C.__bindingPointIndex=A;let R=n.createBuffer(),O=C.__size,S=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,O,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,R),R}function f(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let A=r[C.id],R=C.uniforms,O=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let S=0,N=R.length;S<N;S++){let w=R[S];if(Array.isArray(w))for(let h=0,m=w.length;h<m;h++)v(w[h],S,h,O);else v(w,S,0,O)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function v(C,A,R,O){if(M(C,A,R,O)===!0){let S=C.__offset,N=C.value;if(Array.isArray(N)){let w=0;for(let h=0;h<N.length;h++){let m=N[h],b=_(m);x(m,C.__data,w),typeof m!="number"&&typeof m!="boolean"&&!m.isMatrix3&&!ArrayBuffer.isView(m)&&(w+=b.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(N,C.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,S,C.__data)}}function x(C,A,R){typeof C=="number"||typeof C=="boolean"?A[0]=C:C.isMatrix3?(A[0]=C.elements[0],A[1]=C.elements[1],A[2]=C.elements[2],A[3]=0,A[4]=C.elements[3],A[5]=C.elements[4],A[6]=C.elements[5],A[7]=0,A[8]=C.elements[6],A[9]=C.elements[7],A[10]=C.elements[8],A[11]=0):ArrayBuffer.isView(C)?A.set(new C.constructor(C.buffer,C.byteOffset,A.length)):C.toArray(A,R)}function M(C,A,R,O){let S=C.value,N=A+"_"+R;if(O[N]===void 0)return typeof S=="number"||typeof S=="boolean"?O[N]=S:ArrayBuffer.isView(S)?O[N]=S.slice():O[N]=S.clone(),!0;{let w=O[N];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return O[N]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function g(C){let A=C.uniforms,R=0,O=16;for(let N=0,w=A.length;N<w;N++){let h=Array.isArray(A[N])?A[N]:[A[N]];for(let m=0,b=h.length;m<b;m++){let y=h[m],E=Array.isArray(y.value)?y.value:[y.value];for(let D=0,F=E.length;D<F;D++){let I=E[D],p=_(I),P=R%O,H=P%p.boundary,nt=P+H;R+=H,nt!==0&&O-nt<p.storage&&(R+=O-nt),y.__data=new Float32Array(p.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=R,R+=p.storage}}}let S=R%O;return S>0&&(R+=O-S),C.__size=R,C.__cache={},this}function _(C){let A={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(A.boundary=4,A.storage=4):C.isVector2?(A.boundary=8,A.storage=8):C.isVector3||C.isColor?(A.boundary=16,A.storage=12):C.isVector4?(A.boundary=16,A.storage=16):C.isMatrix3?(A.boundary=48,A.storage=48):C.isMatrix4?(A.boundary=64,A.storage=64):C.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(A.boundary=16,A.storage=C.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",C),A}function L(C){let A=C.target;A.removeEventListener("dispose",L);let R=a.indexOf(A.__bindingPointIndex);a.splice(R,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function B(){for(let C in r)n.deleteBuffer(r[C]);a=[],r={},s={}}return{bind:l,update:c,dispose:B}}var Gy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function Hy(){return Vn===null&&(Vn=new Ya(Gy,16,16,Ei,Cn),Vn.name="DFG_LUT",Vn.minFilter=Oe,Vn.magFilter=Oe,Vn.wrapS=Dn,Vn.wrapT=Dn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var ol=class{constructor(t={}){let{canvas:e=ff(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:v=sn}=t;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;let M=v,g=new Set([wo,So,Mo]),_=new Set([sn,An,Or,zr,xo,yo]),L=new Uint32Array(4),B=new Int32Array(4),C=new J,A=null,R=null,O=[],S=[],N=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let w=this,h=!1,m=null,b=null,y=null,E=null;this._outputColorSpace=Xe;let D=0,F=0,I=null,p=-1,P=null,H=new ve,nt=new ve,et=null,ut=new Kt(0),Et=0,pt=e.width,$=e.height,q=1,at=null,bt=null,ft=new ve(0,0,pt,$),Lt=new ve(0,0,pt,$),fe=!1,Nt=new Ir,Ot=!1,le=!1,Dt=new ge,Ht=new J,Ee=new ve,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xt=!1;function _e(){return I===null?q:1}let V=i;function Jt(U,G){return e.getContext(U,G)}let re,z,T,W,X,K,dt,ot,j,st,lt,gt,vt,ct,_t,Ft,Rt,k,mt,tt,ht,Mt,rt;try{let U={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Gt,!1),e.addEventListener("webglcontextrestored",kt,!1),e.addEventListener("webglcontextcreationerror",nn,!1),V===null){let G="webgl2";if(V=Jt(G,U),V===null)throw Jt(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(U){throw e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Vt("WebGLRenderer: "+U.message),U}function xt(){re=new $_(V),re.init(),ht=new Fy(V,re),z=new k_(V,re,t,ht),T=new Ny(V,re),z.reversedDepthBuffer&&d&&T.buffers.depth.setReversed(!0),b=V.createFramebuffer(),y=V.createFramebuffer(),E=V.createFramebuffer(),W=new j_(V),X=new yy,K=new Dy(V,re,T,X,z,ht,W),dt=new J_(w),ot=new eg(V),Mt=new O_(V,ot),j=new K_(V,ot,W,Mt),st=new ex(V,j,ot,Mt,W),k=new tx(V,z,K),_t=new V_(X),lt=new xy(w,dt,re,z,Mt,_t),gt=new ky(w,X),vt=new Sy,ct=new Ry(re),Rt=new B_(w,dt,T,st,x,l),Ft=new Uy(w,st,z),rt=new Vy(V,W,z,T),mt=new z_(V,re,W),tt=new Q_(V,re,W),W.programs=lt.programs,w.capabilities=z,w.extensions=re,w.properties=X,w.renderLists=vt,w.shadowMap=Ft,w.state=T,w.info=W}M!==sn&&(N=new ix(M,e.width,e.height,o,r,s));let Ct=new rh(w,V);this.xr=Ct,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let U=re.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=re.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(U){U!==void 0&&(q=U,this.setSize(pt,$,!1))},this.getSize=function(U){return U.set(pt,$)},this.setSize=function(U,G,Q=!0){if(Ct.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}pt=U,$=G,e.width=Math.floor(U*q),e.height=Math.floor(G*q),Q===!0&&(e.style.width=U+"px",e.style.height=G+"px"),N!==null&&N.setSize(e.width,e.height),this.setViewport(0,0,U,G)},this.getDrawingBufferSize=function(U){return U.set(pt*q,$*q).floor()},this.setDrawingBufferSize=function(U,G,Q){pt=U,$=G,q=Q,e.width=Math.floor(U*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,U,G)},this.setEffects=function(U){if(M===sn){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let G=0;G<U.length;G++)if(U[G].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(H)},this.getViewport=function(U){return U.copy(ft)},this.setViewport=function(U,G,Q,Y){U.isVector4?ft.set(U.x,U.y,U.z,U.w):ft.set(U,G,Q,Y),T.viewport(H.copy(ft).multiplyScalar(q).round())},this.getScissor=function(U){return U.copy(Lt)},this.setScissor=function(U,G,Q,Y){U.isVector4?Lt.set(U.x,U.y,U.z,U.w):Lt.set(U,G,Q,Y),T.scissor(nt.copy(Lt).multiplyScalar(q).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(U){T.setScissorTest(fe=U)},this.setOpaqueSort=function(U){at=U},this.setTransparentSort=function(U){bt=U},this.getClearColor=function(U){return U.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(U=!0,G=!0,Q=!0){let Y=0;if(U){let Z=!1;if(I!==null){let wt=I.texture.format;Z=g.has(wt)}if(Z){let wt=I.texture.type,At=_.has(wt),St=Rt.getClearColor(),It=Rt.getClearAlpha(),Ut=St.r,qt=St.g,$t=St.b;At?(L[0]=Ut,L[1]=qt,L[2]=$t,L[3]=It,V.clearBufferuiv(V.COLOR,0,L)):(B[0]=Ut,B[1]=qt,B[2]=$t,B[3]=It,V.clearBufferiv(V.COLOR,0,B))}else Y|=V.COLOR_BUFFER_BIT}G&&(Y|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&V.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),m=U},this.dispose=function(){e.removeEventListener("webglcontextlost",Gt,!1),e.removeEventListener("webglcontextrestored",kt,!1),e.removeEventListener("webglcontextcreationerror",nn,!1),Rt.dispose(),vt.dispose(),ct.dispose(),X.dispose(),dt.dispose(),st.dispose(),Mt.dispose(),rt.dispose(),lt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ye),Ct.removeEventListener("sessionend",Me),Mn.stop()};function Gt(U){U.preventDefault(),Oc("WebGLRenderer: Context Lost."),h=!0}function kt(){Oc("WebGLRenderer: Context Restored."),h=!1;let U=W.autoReset,G=Ft.enabled,Q=Ft.autoUpdate,Y=Ft.needsUpdate,Z=Ft.type;xt(),W.autoReset=U,Ft.enabled=G,Ft.autoUpdate=Q,Ft.needsUpdate=Y,Ft.type=Z}function nn(U){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function se(U){let G=U.target;G.removeEventListener("dispose",se),Se(G)}function Se(U){ca(U),X.remove(U)}function ca(U){let G=X.get(U).programs;G!==void 0&&(G.forEach(function(Q){lt.releaseProgram(Q)}),U.isShaderMaterial&&lt.releaseShaderCache(U))}this.renderBufferDirect=function(U,G,Q,Y,Z,wt){G===null&&(G=ee);let At=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,St=ls(U,G,Q,Y,Z);T.setMaterial(Y,At);let It=Q.index,Ut=1;if(Y.wireframe===!0){if(It=j.getWireframeAttribute(Q),It===void 0)return;Ut=2}let qt=Q.drawRange,$t=Q.attributes.position,Pt=qt.start*Ut,ae=(qt.start+qt.count)*Ut;wt!==null&&(Pt=Math.max(Pt,wt.start*Ut),ae=Math.min(ae,(wt.start+wt.count)*Ut)),It!==null?(Pt=Math.max(Pt,0),ae=Math.min(ae,It.count)):$t!=null&&(Pt=Math.max(Pt,0),ae=Math.min(ae,$t.count));let Ce=ae-Pt;if(Ce<0||Ce===1/0)return;Mt.setup(Z,Y,St,Q,It);let de,he=mt;if(It!==null&&(de=ot.get(It),he=tt,he.setIndex(de)),Z.isMesh)Y.wireframe===!0?(T.setLineWidth(Y.wireframeLinewidth*_e()),he.setMode(V.LINES)):he.setMode(V.TRIANGLES);else if(Z.isLine){let Ge=Y.linewidth;Ge===void 0&&(Ge=1),T.setLineWidth(Ge*_e()),Z.isLineSegments?he.setMode(V.LINES):Z.isLineLoop?he.setMode(V.LINE_LOOP):he.setMode(V.LINE_STRIP)}else Z.isPoints?he.setMode(V.POINTS):Z.isSprite&&he.setMode(V.TRIANGLES);if(Z.isBatchedMesh)if(re.get("WEBGL_multi_draw"))he.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{let Ge=Z._multiDrawStarts,Tt=Z._multiDrawCounts,Je=Z._multiDrawCount,ie=It?ot.get(It).bytesPerElement:1,gn=X.get(Y).currentProgram.getUniforms();for(let Un=0;Un<Je;Un++)gn.setValue(V,"_gl_DrawID",Un),he.render(Ge[Un]/ie,Tt[Un])}else if(Z.isInstancedMesh)he.renderInstances(Pt,Ce,Z.count);else if(Q.isInstancedBufferGeometry){let Ge=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Tt=Math.min(Q.instanceCount,Ge);he.renderInstances(Pt,Ce,Tt)}else he.render(Pt,Ce)};function xe(U,G,Q,Y){m!==null&&U.isNodeMaterial&&m.setObject(Y,U),Ot===!0&&_t.setState(U,Q,!1),U.transparent===!0&&U.side===dn&&U.forceSinglePass===!1?(U.side=je,U.needsUpdate=!0,si(U,G,Y),U.side=Mi,U.needsUpdate=!0,si(U,G,Y),U.side=dn):si(U,G,Y)}this.compile=function(U,G,Q=null){Q===null&&(Q=U),m!==null&&m.renderStart(U,G,Q),R=ct.get(Q),R.init(G),S.push(R),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),U!==Q&&U.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(R.pushLight(Z),Z.castShadow&&R.pushShadow(Z))}),R.setupLights(),m!==null&&m.updateLights(R.state.lightsArray),le=this.localClippingEnabled,Ot=_t.init(this.clippingPlanes,le),Ot===!0&&_t.setGlobalState(this.clippingPlanes,G),m!==null&&Ft.render(R.state.shadowsArray,Q,G);let Y=new Set;return U.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;let wt=Z.material;if(wt)if(Array.isArray(wt))for(let At=0;At<wt.length;At++){let St=wt[At];xe(St,Q,G,Z),Y.add(St)}else xe(wt,Q,G,Z),Y.add(wt)}),R=S.pop(),m!==null&&m.renderEnd(),Y},this.compileAsync=function(U,G,Q=null){let Y=this.compile(U,G,Q);return new Promise(Z=>{function wt(){if(Y.forEach(function(At){let It=X.get(At).currentProgram;(It===void 0||It.isReady())&&Y.delete(At)}),Y.size===0){Z(U);return}setTimeout(wt,10)}re.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let me=null;function ha(U){me&&me(U)}function ye(){Mn.stop()}function Me(){Mn.start()}let Mn=new Vf;Mn.setAnimationLoop(ha),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(U){me=U,Ct.setAnimationLoop(U),U===null?Mn.stop():Mn.start()},Ct.addEventListener("sessionstart",ye),Ct.addEventListener("sessionend",Me),this.render=function(U,G){if(G!==void 0&&G.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(h===!0)return;m!==null&&m.renderStart(U,G);let Q=Ct.enabled===!0&&Ct.isPresenting===!0,Y=N!==null&&(I===null||Q)&&N.begin(w,I);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(G),G=Ct.getCamera()),U.isScene===!0&&U.onBeforeRender(w,U,G,I),R=ct.get(U,S.length),R.init(G),R.state.textureUnits=K.getTextureUnits(),S.push(R),Dt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Nt.setFromProjectionMatrix(Dt,Tn,G.reversedDepth),le=this.localClippingEnabled,Ot=_t.init(this.clippingPlanes,le),A=vt.get(U,O.length),A.init(),O.push(A),Ct.enabled===!0&&Ct.isPresenting===!0){let At=w.xr.getDepthSensingMesh();At!==null&&Li(At,G,-1/0,w.sortObjects)}Li(U,G,0,w.sortObjects),A.finish(),m!==null&&m.updateLights(R.state.lightsArray),w.sortObjects===!0&&A.sort(at,bt),Xt=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Xt&&Rt.addToRenderList(A,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&_t.beginShadows();let Z=R.state.shadowsArray;if(Ft.render(Z,U,G),Ot===!0&&_t.endShadows(),(Y&&N.hasRenderPass())===!1){let At=A.opaque,St=A.transmissive;if(R.setupLights(),G.isArrayCamera){let It=G.cameras;if(St.length>0)for(let Ut=0,qt=It.length;Ut<qt;Ut++){let $t=It[Ut];nr(At,St,U,$t)}Xt&&Rt.render(U);for(let Ut=0,qt=It.length;Ut<qt;Ut++){let $t=It[Ut];er(A,U,$t,$t.viewport)}}else St.length>0&&nr(At,St,U,G),Xt&&Rt.render(U),er(A,U,G)}I!==null&&F===0&&(K.updateMultisampleRenderTarget(I),K.updateRenderTargetMipmap(I)),Y&&N.end(w),U.isScene===!0&&U.onAfterRender(w,U,G),Mt.resetDefaultState(),p=-1,P=null,S.pop(),S.length>0?(R=S[S.length-1],K.setTextureUnits(R.state.textureUnits),Ot===!0&&_t.setGlobalState(w.clippingPlanes,R.state.camera)):R=null,O.pop(),O.length>0?A=O[O.length-1]:A=null,m!==null&&m.renderEnd()};function Li(U,G,Q,Y){if(U.visible===!1)return;if(U.layers.test(G.layers)){if(U.isGroup)Q=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(G);else if(U.isLightProbeGrid)R.pushLightProbeGrid(U);else if(U.isLight)R.pushLight(U),U.castShadow&&R.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(Nt)){Y&&Ee.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Dt);let At=st.update(U),St=U.material;St.visible&&A.push(U,At,St,Q,Ee.z,null,G)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(Nt))){let At=st.update(U),St=U.material;if(Y&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),Ee.copy(U.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ee.copy(At.boundingSphere.center)),Ee.applyMatrix4(U.matrixWorld).applyMatrix4(Dt)),Array.isArray(St)){let It=At.groups;for(let Ut=0,qt=It.length;Ut<qt;Ut++){let $t=It[Ut],Pt=St[$t.materialIndex];Pt&&Pt.visible&&A.push(U,At,Pt,Q,Ee.z,$t,G)}}else St.visible&&A.push(U,At,St,Q,Ee.z,null,G)}}let wt=U.children;for(let At=0,St=wt.length;At<St;At++)Li(wt[At],G,Q,Y)}function er(U,G,Q,Y){let{opaque:Z,transmissive:wt,transparent:At}=U;R.setupLightsView(Q),Ot===!0&&_t.setGlobalState(w.clippingPlanes,Q),Y&&T.viewport(H.copy(Y)),Z.length>0&&ri(Z,G,Q),wt.length>0&&ri(wt,G,Q),At.length>0&&ri(At,G,Q),T.buffers.depth.setTest(!0),T.buffers.depth.setMask(!0),T.buffers.color.setMask(!0),T.setPolygonOffset(!1)}function nr(U,G,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[Y.id]===void 0){let Pt=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[Y.id]=new rn(1,1,{generateMipmaps:!0,type:Pt?Cn:sn,minFilter:wi,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let wt=R.state.transmissionRenderTarget[Y.id],At=Y.viewport||H;wt.setSize(At.z*w.transmissionResolutionScale,At.w*w.transmissionResolutionScale);let St=w.getRenderTarget(),It=w.getActiveCubeFace(),Ut=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(ut),Et=w.getClearAlpha(),Et<1&&w.setClearColor(16777215,.5),w.clear(),Xt&&Rt.render(Q);let qt=w.toneMapping;w.toneMapping=pn;let $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),R.setupLightsView(Y),Ot===!0&&_t.setGlobalState(w.clippingPlanes,Y),ri(U,Q,Y),K.updateMultisampleRenderTarget(wt),K.updateRenderTargetMipmap(wt),re.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ae=0,Ce=G.length;ae<Ce;ae++){let de=G[ae],{object:he,geometry:Ge,material:Tt,group:Je}=de;if(Tt.side===dn&&he.layers.test(Y.layers)){let ie=Tt.side;Tt.side=je,Tt.needsUpdate=!0,ir(he,Q,Y,Ge,Tt,Je),Tt.side=ie,Tt.needsUpdate=!0,Pt=!0}}Pt===!0&&(K.updateMultisampleRenderTarget(wt),K.updateRenderTargetMipmap(wt))}w.setRenderTarget(St,It,Ut),w.setClearColor(ut,Et),$t!==void 0&&(Y.viewport=$t),w.toneMapping=qt}function ri(U,G,Q){let Y=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,wt=U.length;Z<wt;Z++){let At=U[Z],{object:St,geometry:It,group:Ut}=At,qt=At.material;qt.allowOverride===!0&&Y!==null&&(qt=Y),St.layers.test(Q.layers)&&ir(St,G,Q,It,qt,Ut)}}function ir(U,G,Q,Y,Z,wt){m!==null&&Z.isNodeMaterial&&m.setObject(U,Z),U.onBeforeRender(w,G,Q,Y,Z,wt),U.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Z.onBeforeRender(w,G,Q,Y,U,wt),Z.transparent===!0&&Z.side===dn&&Z.forceSinglePass===!1?(Z.side=je,Z.needsUpdate=!0,w.renderBufferDirect(Q,G,Y,Z,U,wt),Z.side=Mi,Z.needsUpdate=!0,w.renderBufferDirect(Q,G,Y,Z,U,wt),Z.side=dn):w.renderBufferDirect(Q,G,Y,Z,U,wt),U.onAfterRender(w,G,Q,Y,Z,wt)}function si(U,G,Q){G.isScene!==!0&&(G=ee);let Y=X.get(U),Z=R.state.lights,wt=R.state.shadowsArray,At=Z.state.version,St=lt.getParameters(U,Z.state,wt,G,Q,R.state.lightProbeGridArray),It=lt.getProgramCacheKey(St),Ut=Y.programs;Y.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;let qt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;Y.envMap=dt.get(U.envMap||Y.environment,qt),Y.envMapRotation=Y.environment!==null&&U.envMap===null?G.environmentRotation:U.envMapRotation,Ut===void 0&&(U.addEventListener("dispose",se),Ut=new Map,Y.programs=Ut);let $t=Ut.get(It);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===At)return sr(U,St),$t}else St.uniforms=lt.getUniforms(U),m!==null&&U.isNodeMaterial&&m.build(U,Q,St),U.onBeforeCompile(St,w),$t=lt.acquireProgram(St,It),Ut.set(It,$t),Y.uniforms=St.uniforms;let Pt=Y.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Pt.clippingPlanes=_t.uniform),sr(U,St),Y.needsLights=hs(U),Y.lightsStateVersion=At,Y.needsLights&&(Pt.ambientLightColor.value=Z.state.ambient,Pt.lightProbe.value=Z.state.probe,Pt.sunLights.value=Z.state.sun,Pt.sunLightShadows.value=Z.state.sunShadow,Pt.directionalLights.value=Z.state.directional,Pt.directionalLightShadows.value=Z.state.directionalShadow,Pt.spotLights.value=Z.state.spot,Pt.spotLightShadows.value=Z.state.spotShadow,Pt.rectAreaLights.value=Z.state.rectArea,Pt.ltc_1.value=Z.state.rectAreaLTC1,Pt.ltc_2.value=Z.state.rectAreaLTC2,Pt.pointLights.value=Z.state.point,Pt.pointLightShadows.value=Z.state.pointShadow,Pt.hemisphereLights.value=Z.state.hemi,Pt.sunShadowMatrix.value=Z.state.sunShadowMatrix,Pt.sunShadowCascade.value=Z.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Z.state.spotLightMatrix,Pt.spotLightMap.value=Z.state.spotLightMap,Pt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=R.state.lightProbeGridArray.length>0,Y.currentProgram=$t,Y.uniformsList=null,$t}function rr(U){if(U.uniformsList===null){let G=U.currentProgram.getUniforms();U.uniformsList=Wr.seqWithValue(G.seq,U.uniforms)}return U.uniformsList}function sr(U,G){let Q=X.get(U);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function os(U,G){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;C.setFromMatrixPosition(G.matrixWorld);for(let Q=0,Y=U.length;Q<Y;Q++){let Z=U[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(C))return Z}return null}function ls(U,G,Q,Y,Z){G.isScene!==!0&&(G=ee),K.resetTextureUnits();let wt=G.fog,At=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,St=I===null?w.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Qt.workingColorSpace,It=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ut=dt.get(Y.envMap||At,It),qt=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,$t=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Pt=!!Q.morphAttributes.position,ae=!!Q.morphAttributes.normal,Ce=!!Q.morphAttributes.color,de=pn;Y.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(de=w.toneMapping);let he=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ge=he!==void 0?he.length:0,Tt=X.get(Y),Je=R.state.lights;if(Ot===!0&&(le===!0||U!==P)){let ue=U===P&&Y.id===p;_t.setState(Y,U,ue)}let ie=!1;Y.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Je.state.version||Tt.outputColorSpace!==St||Z.isBatchedMesh&&Tt.batching===!1||!Z.isBatchedMesh&&Tt.batching===!0||Z.isBatchedMesh&&Tt.batchingColor===!0&&Z._colorsTexture===null||Z.isBatchedMesh&&Tt.batchingColor===!1&&Z._colorsTexture!==null||Z.isInstancedMesh&&Tt.instancing===!1||!Z.isInstancedMesh&&Tt.instancing===!0||Z.isSkinnedMesh&&Tt.skinning===!1||!Z.isSkinnedMesh&&Tt.skinning===!0||Z.isInstancedMesh&&Tt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Tt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Tt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Tt.instancingMorph===!1&&Z.morphTexture!==null||Tt.envMap!==Ut||Y.fog===!0&&Tt.fog!==wt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==_t.numPlanes||Tt.numIntersection!==_t.numIntersection)||Tt.vertexAlphas!==qt||Tt.vertexTangents!==$t||Tt.morphTargets!==Pt||Tt.morphNormals!==ae||Tt.morphColors!==Ce||Tt.toneMapping!==de||Tt.morphTargetsCount!==Ge||!!Tt.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(ie=!0):(ie=!0,Tt.__version=Y.version);let gn=Tt.currentProgram;ie===!0&&(gn=si(Y,G,Z),m&&Y.isNodeMaterial&&m.onUpdateProgram(Y,gn,Tt));let Un=!1,ai=!1,or=!1,ce=gn.getUniforms(),Te=Tt.uniforms;if(T.useProgram(gn.program)&&(Un=!0,ai=!0,or=!0),Y.id!==p&&(p=Y.id,ai=!0),Tt.needsLights){let ue=os(R.state.lightProbeGridArray,Z);Tt.lightProbeGrid!==ue&&(Tt.lightProbeGrid=ue,ai=!0)}if(Un||P!==U){T.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),ce.setValue(V,"projectionMatrix",U.projectionMatrix),ce.setValue(V,"viewMatrix",U.matrixWorldInverse);let li=ce.map.cameraPosition;li!==void 0&&li.setValue(V,Ht.setFromMatrixPosition(U.matrixWorld)),z.logarithmicDepthBuffer&&ce.setValue(V,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ce.setValue(V,"isOrthographic",U.isOrthographicCamera===!0),P!==U&&(P=U,ai=!0,or=!0)}if(Tt.needsLights&&(Je.state.sunShadowMap.length>0&&ce.setValue(V,"sunShadowMap",Je.state.sunShadowMap,K),Je.state.directionalShadowMap.length>0&&ce.setValue(V,"directionalShadowMap",Je.state.directionalShadowMap,K),Je.state.spotShadowMap.length>0&&ce.setValue(V,"spotShadowMap",Je.state.spotShadowMap,K),Je.state.pointShadowMap.length>0&&ce.setValue(V,"pointShadowMap",Je.state.pointShadowMap,K)),Z.isSkinnedMesh){ce.setOptional(V,Z,"bindMatrix"),ce.setOptional(V,Z,"bindMatrixInverse");let ue=Z.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),ce.setValue(V,"boneTexture",ue.boneTexture,K))}Z.isBatchedMesh&&(ce.setOptional(V,Z,"batchingTexture"),ce.setValue(V,"batchingTexture",Z._matricesTexture,K),ce.setOptional(V,Z,"batchingIdTexture"),ce.setValue(V,"batchingIdTexture",Z._indirectTexture,K),ce.setOptional(V,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ce.setValue(V,"batchingColorTexture",Z._colorsTexture,K));let oi=Q.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&k.update(Z,Q,gn),(ai||Tt.receiveShadow!==Z.receiveShadow)&&(Tt.receiveShadow=Z.receiveShadow,ce.setValue(V,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(Te.envMapIntensity.value=G.environmentIntensity),Te.dfgLUT!==void 0&&(Te.dfgLUT.value=Hy()),ai){if(ce.setValue(V,"toneMappingExposure",w.toneMappingExposure),Tt.needsLights&&cs(Te,or),wt&&Y.fog===!0&&gt.refreshFogUniforms(Te,wt),gt.refreshMaterialUniforms(Te,Y,q,$,R.state.transmissionRenderTarget[U.id]),Tt.needsLights&&Tt.lightProbeGrid){let ue=Tt.lightProbeGrid;Te.probesSH.value=ue.texture,Te.probesMin.value.copy(ue.boundingBox.min),Te.probesMax.value.copy(ue.boundingBox.max),Te.probesResolution.value.copy(ue.resolution)}Wr.upload(V,rr(Tt),Te,K)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Wr.upload(V,rr(Tt),Te,K),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ce.setValue(V,"center",Z.center),ce.setValue(V,"modelViewMatrix",Z.modelViewMatrix),ce.setValue(V,"normalMatrix",Z.normalMatrix),ce.setValue(V,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){let ue=Y.uniformsGroups;for(let li=0,lr=ue.length;li<lr;li++){let nu=ue[li];rt.update(nu,gn),rt.bind(nu,gn)}}return gn}function cs(U,G){U.ambientLightColor.needsUpdate=G,U.lightProbe.needsUpdate=G,U.sunLights.needsUpdate=G,U.sunLightShadows.needsUpdate=G,U.directionalLights.needsUpdate=G,U.directionalLightShadows.needsUpdate=G,U.pointLights.needsUpdate=G,U.pointLightShadows.needsUpdate=G,U.spotLights.needsUpdate=G,U.spotLightShadows.needsUpdate=G,U.rectAreaLights.needsUpdate=G,U.hemisphereLights.needsUpdate=G}function hs(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(U,G,Q){let Y=X.get(U);Y.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),X.get(U.texture).__webglTexture=G,X.get(U.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,G){let Q=X.get(U);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(U,G=0,Q=0){I=U,D=G,F=Q;let Y=null,Z=!1,wt=!1;if(U){let St=X.get(U);if(St.__useDefaultFramebuffer!==void 0){T.bindFramebuffer(V.FRAMEBUFFER,St.__webglFramebuffer),H.copy(U.viewport),nt.copy(U.scissor),et=U.scissorTest,T.viewport(H),T.scissor(nt),T.setScissorTest(et),p=-1;return}else if(St.__webglFramebuffer===void 0)K.setupRenderTarget(U);else if(St.__hasExternalTextures)K.rebindTextures(U,X.get(U.texture).__webglTexture,X.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let qt=U.depthTexture;if(St.__boundDepthTexture!==qt){if(qt!==null&&X.has(qt)&&(U.width!==qt.image.width||U.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(U)}}let It=U.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(wt=!0);let Ut=X.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ut[G])?Y=Ut[G][Q]:Y=Ut[G],Z=!0):U.samples>0&&K.useMultisampledRTT(U)===!1?Y=X.get(U).__webglMultisampledFramebuffer:Array.isArray(Ut)?Y=Ut[Q]:Y=Ut,H.copy(U.viewport),nt.copy(U.scissor),et=U.scissorTest}else H.copy(ft).multiplyScalar(q).floor(),nt.copy(Lt).multiplyScalar(q).floor(),et=fe;if(Q!==0&&(Y=b),T.bindFramebuffer(V.FRAMEBUFFER,Y)&&T.drawBuffers(U,Y),T.viewport(H),T.scissor(nt),T.setScissorTest(et),Z){let St=X.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,St.__webglTexture,Q)}else if(wt){let St=G;for(let It=0;It<U.textures.length;It++){let Ut=X.get(U.textures[It]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+It,Ut.__webglTexture,Q,St)}}else if(U!==null&&Q!==0){let St=X.get(U.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,St.__webglTexture,Q)}p=-1};function ar(U){let G=X.get(U);return(G.__readFormat!==U.format||G.__readType!==U.type)&&(G.__readFormat=U.format,G.__readType=U.type,G.__formatReadable=z.textureFormatReadable(U.format),G.__typeReadable=z.textureTypeReadable(U.type)),G}this.readRenderTargetPixels=function(U,G,Q,Y,Z,wt,At,St=0){if(!(U&&U.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=X.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){T.bindFramebuffer(V.FRAMEBUFFER,It);try{let Ut=U.textures[St],qt=Ut.format,$t=Ut.type;U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+St);let Pt=ar(Ut);if(Pt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=U.width-Y&&Q>=0&&Q<=U.height-Z&&V.readPixels(G,Q,Y,Z,ht.convert(qt),ht.convert($t),wt)}finally{let Ut=I!==null?X.get(I).__webglFramebuffer:null;T.bindFramebuffer(V.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(U,G,Q,Y,Z,wt,At,St=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=X.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It)if(G>=0&&G<=U.width-Y&&Q>=0&&Q<=U.height-Z){T.bindFramebuffer(V.FRAMEBUFFER,It);let Ut=U.textures[St],qt=Ut.format,$t=Ut.type;U.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+St);let Pt=ar(Ut);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ae=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,ae),V.bufferData(V.PIXEL_PACK_BUFFER,wt.byteLength,V.STREAM_READ),V.readPixels(G,Q,Y,Z,ht.convert(qt),ht.convert($t),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Ce=I!==null?X.get(I).__webglFramebuffer:null;T.bindFramebuffer(V.FRAMEBUFFER,Ce);let de=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pf(V,de,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,ae),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,wt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(ae),V.deleteSync(de),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,G=null,Q=0){let Y=Math.pow(2,-Q),Z=Math.floor(U.image.width*Y),wt=Math.floor(U.image.height*Y),At=G!==null?G.x:0,St=G!==null?G.y:0;K.setTexture2D(U,0),V.copyTexSubImage2D(V.TEXTURE_2D,Q,0,0,At,St,Z,wt),T.unbindTexture()},this.copyTextureToTexture=function(U,G,Q=null,Y=null,Z=0,wt=0){let At,St,It,Ut,qt,$t,Pt,ae,Ce,de=U.isCompressedTexture?U.mipmaps[wt]:U.image;if(Q!==null)At=Q.max.x-Q.min.x,St=Q.max.y-Q.min.y,It=Q.isBox3?Q.max.z-Q.min.z:1,Ut=Q.min.x,qt=Q.min.y,$t=Q.isBox3?Q.min.z:0;else{let Te=Math.pow(2,-Z);At=Math.floor(de.width*Te),St=Math.floor(de.height*Te),U.isDataArrayTexture?It=de.depth:U.isData3DTexture?It=Math.floor(de.depth*Te):It=1,Ut=0,qt=0,$t=0}Y!==null?(Pt=Y.x,ae=Y.y,Ce=Y.z):(Pt=0,ae=0,Ce=0);let he=ht.convert(G.format),Ge=ht.convert(G.type),Tt;G.isData3DTexture?(K.setTexture3D(G,0),Tt=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(K.setTexture2DArray(G,0),Tt=V.TEXTURE_2D_ARRAY):(K.setTexture2D(G,0),Tt=V.TEXTURE_2D),T.activeTexture(V.TEXTURE0),T.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),T.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),T.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);let Je=T.getParameter(V.UNPACK_ROW_LENGTH),ie=T.getParameter(V.UNPACK_IMAGE_HEIGHT),gn=T.getParameter(V.UNPACK_SKIP_PIXELS),Un=T.getParameter(V.UNPACK_SKIP_ROWS),ai=T.getParameter(V.UNPACK_SKIP_IMAGES);T.pixelStorei(V.UNPACK_ROW_LENGTH,de.width),T.pixelStorei(V.UNPACK_IMAGE_HEIGHT,de.height),T.pixelStorei(V.UNPACK_SKIP_PIXELS,Ut),T.pixelStorei(V.UNPACK_SKIP_ROWS,qt),T.pixelStorei(V.UNPACK_SKIP_IMAGES,$t);let or=U.isDataArrayTexture||U.isData3DTexture,ce=G.isDataArrayTexture||G.isData3DTexture;if(U.isDepthTexture){let Te=X.get(U),oi=X.get(G),ue=X.get(Te.__renderTarget),li=X.get(oi.__renderTarget);T.bindFramebuffer(V.READ_FRAMEBUFFER,ue.__webglFramebuffer),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let lr=0;lr<It;lr++)or&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,X.get(U).__webglTexture,Z,$t+lr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,X.get(G).__webglTexture,wt,Ce+lr)),V.blitFramebuffer(Ut,qt,At,St,Pt,ae,At,St,V.DEPTH_BUFFER_BIT,V.NEAREST);T.bindFramebuffer(V.READ_FRAMEBUFFER,null),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(Z!==0||U.isRenderTargetTexture||X.has(U)){let Te=X.get(U),oi=X.get(G);T.bindFramebuffer(V.READ_FRAMEBUFFER,y),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,E);for(let ue=0;ue<It;ue++)or?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Te.__webglTexture,Z,$t+ue):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Te.__webglTexture,Z),ce?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,oi.__webglTexture,wt,Ce+ue):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,oi.__webglTexture,wt),Z!==0?V.blitFramebuffer(Ut,qt,At,St,Pt,ae,At,St,V.COLOR_BUFFER_BIT,V.NEAREST):ce?V.copyTexSubImage3D(Tt,wt,Pt,ae,Ce+ue,Ut,qt,At,St):V.copyTexSubImage2D(Tt,wt,Pt,ae,Ut,qt,At,St);T.bindFramebuffer(V.READ_FRAMEBUFFER,null),T.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ce?U.isDataTexture||U.isData3DTexture?V.texSubImage3D(Tt,wt,Pt,ae,Ce,At,St,It,he,Ge,de.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Tt,wt,Pt,ae,Ce,At,St,It,he,de.data):V.texSubImage3D(Tt,wt,Pt,ae,Ce,At,St,It,he,Ge,de):U.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,wt,Pt,ae,At,St,he,Ge,de.data):U.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,wt,Pt,ae,de.width,de.height,he,de.data):V.texSubImage2D(V.TEXTURE_2D,wt,Pt,ae,At,St,he,Ge,de);T.pixelStorei(V.UNPACK_ROW_LENGTH,Je),T.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ie),T.pixelStorei(V.UNPACK_SKIP_PIXELS,gn),T.pixelStorei(V.UNPACK_SKIP_ROWS,Un),T.pixelStorei(V.UNPACK_SKIP_IMAGES,ai),wt===0&&G.generateMipmaps&&V.generateMipmap(Tt),T.unbindTexture()},this.initRenderTarget=function(U){X.get(U).__webglFramebuffer===void 0&&K.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?K.setTextureCube(U,0):U.isData3DTexture?K.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?K.setTexture2DArray(U,0):K.setTexture2D(U,0),T.unbindTexture()},this.resetState=function(){D=0,F=0,I=null,T.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var Y0=ru(b0()),Z0=ru(X0()),Ol=(n,t)=>n[0]*t[1]-n[1]*t[0],tr=(n,t)=>[n[0]-t[0],n[1]-t[1]],aa=(n,t)=>Math.hypot(n[0]-t[0],n[1]-t[1]),q0=(n,t)=>n<t?`${n}:${t}`:`${t}:${n}`;function jh(n,t=.0015){if(n.length<3)return n.slice();let e=n[0],i=n[n.length-1],r=tr(i,e),s=r[0]**2+r[1]**2,a=0,o=0;for(let l=1;l<n.length-1;l++){let c=tr(n[l],e),u=s?Math.max(0,Math.min(1,(c[0]*r[0]+c[1]*r[1])/s)):0,f=Math.hypot(c[0]-r[0]*u,c[1]-r[1]*u);f>a&&(a=f,o=l)}return a>t?[...jh(n.slice(0,o+1),t).slice(0,-1),...jh(n.slice(o),t)]:[e,i]}function J0(n){let t={points:[],pieces:[],cuts:[],extensions:[],fallback:!0};if(n.length>24||n.reduce((M,g)=>M+g.length,0)>2200||n.some(M=>M.some(g=>g.length!==2||g.some(_=>!Number.isFinite(_)))))return t;let e=n.map(M=>jh(M.map(([g,_])=>[Math.max(.001,Math.min(.999,g)),Math.max(.001,Math.min(.999,_))]))).map(M=>M.filter((g,_)=>_===0||aa(g,M[_-1])>1e-5)).filter(M=>M.length>1);if(!e.length||e.reduce((M,g)=>M+g.length,0)>480)return t;let i=[[0,0],[1,0],[1,1],[0,1]],r=[[0,1],[1,2],[2,3],[3,0]],s=r.map(([M,g])=>[i[M],i[g]]),a=[],o=M=>{let g=i.length;i.push(...M.map(_=>[..._]));for(let _=0;_<M.length-1;_++)r.push([g+_,g+_+1]),s.push([M[_],M[_+1]])};e.forEach(o);for(let M of e){if(aa(M[0],M[M.length-1])<.012){aa(M[0],M[M.length-1])>1e-5&&o([M[M.length-1],M[0]]);continue}for(let[g,_]of[[M[0],M[1]],[M[M.length-1],M[M.length-2]]]){let L=tr(g,_),B=Math.hypot(...L);if(B<1e-5)continue;L[0]/=B,L[1]/=B;let C=1/0,A=!1;for(let[R,O]of s){if(aa(R,g)<1e-6||aa(O,g)<1e-6)continue;let S=tr(O,R),N=tr(R,g),w=Ol(L,S);if(Math.abs(w)<1e-9)continue;let h=Ol(N,S)/w,m=Ol(N,L)/w;if(Math.abs(h)<1e-5&&m>=0&&m<=1){A=!0;break}h>1e-5&&m>=-1e-7&&m<=1+1e-7&&(C=Math.min(C,h))}if(!A&&Number.isFinite(C)){let R=[g,[g[0]+L[0]*C,g[1]+L[1]*C]];a.push(R),o(R)}}}if((0,Y0.default)(i,r),i.length>1800||r.length>3e3)return t;let l=(0,Z0.default)(i,r,{interior:!0,exterior:!0}).filter(M=>Math.abs(Ol(tr(i[M[1]],i[M[0]]),tr(i[M[2]],i[M[0]])))>1e-12),c=new Set(r.map(([M,g])=>q0(M,g))),u=l.map((M,g)=>g);function f(M){return u[M]===M?M:u[M]=f(u[M])}let d=new Map;l.forEach((M,g)=>{for(let _=0;_<3;_++){let L=q0(M[_],M[(_+1)%3]);if(c.has(L))continue;let B=d.get(L);B!==void 0?u[f(g)]=f(B):d.set(L,g)}});let v=new Map;l.forEach((M,g)=>{let _=f(g),L=v.get(_)??[];L.push(M),v.set(_,L)});let x=[...v.values()];return{points:i,pieces:x,cuts:r,extensions:a,fallback:x.length<2||x.length>120}}var tu=n=>{let t=Math.sin(n*127.1+311.7)*43758.5453;return t-Math.floor(t)},eu=class{constructor(t,e,i){this.canvas=t,this.renderer=new ol({canvas:t,alpha:!0,antialias:!0,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,innerWidth<720?1.5:2)),this.renderer.outputColorSpace=Xe,this.renderer.toneMapping=pn,this.scene=new bs,this.camera=new qe(40,1,.1,80),this.texture=new Cs(e),this.texture.colorSpace=Xe,this.texture.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.face=new zi({map:this.texture,side:dn}),this.intact=new ze(new vi(6,6),this.face),this.root=new Fn,this.pieces=[],this.width=6,this.height=6,this.fracture=null,this.disposed=!1,this.lost=!1,this.scene.add(this.intact,this.root),this.scene.add(new Ds(14020863,2));let r=new Dr(14087679,5);r.position.set(-2,4,5),this.scene.add(r);let s=new Dr(14140064,3);s.position.set(3,-1,2),this.scene.add(s),this.camera.position.z=this.height/(2*Math.tan(Vr.degToRad(20))),this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.onLost=a=>{a.preventDefault(),this.lost=!0,i()},t.addEventListener("webglcontextlost",this.onLost),this.resize()}resize(){let{width:t,height:e}=this.canvas.getBoundingClientRect();!t||!e||this.disposed||this.lost||(this.width=6*t/e,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.intact.geometry.dispose(),this.intact.geometry=new vi(this.width,this.height),this.fracture&&this.prepare(this.fracture),this.render())}world([t,e]){return new J((t-.5)*this.width,(.5-e)*this.height,0)}prepare(t){this.clearPieces(),this.fracture=t,t.pieces.forEach((e,i)=>{let r=0,s=new J;for(let B of e){let[C,A,R]=B.map(S=>this.world(t.points[S])),O=Math.abs((A.x-C.x)*(R.y-C.y)-(A.y-C.y)*(R.x-C.x));s.add(C.add(A).add(R).multiplyScalar(O/3)),r+=O}s.divideScalar(r||1);let a=[],o=[],l=new Map;for(let B of e)for(let C=0;C<3;C++){let A=t.points[B[C]],R=this.world(A).sub(s);a.push(R.x,R.y,0),o.push(A[0],1-A[1]);let O=B[C],S=B[(C+1)%3],N=O<S?`${O}:${S}`:`${S}:${O}`,w=l.get(N)??{count:0,pair:[O,S]};w.count++,l.set(N,w)}let c=new Qe;c.setAttribute("position",new Le(a,3)),c.setAttribute("uv",new Le(o,2)),c.computeVertexNormals();let u=new Fn;u.add(new ze(c,this.face));let f=[],d=[];for(let B of l.values()){if(B.count!==1)continue;let[C,A]=B.pair.map(O=>this.world(t.points[O]).sub(s));f.push(C.x,C.y,.004,A.x,A.y,.004);let R=-.035;d.push(C.x,C.y,0,A.x,A.y,0,A.x,A.y,R,C.x,C.y,0,A.x,A.y,R,C.x,C.y,R)}let v=new Qe;v.setAttribute("position",new Le(d,3)),v.computeVertexNormals();let x=new Ps({color:10206917,metalness:.75,roughness:.22,side:dn});u.add(new ze(v,x));let M=new Qe;M.setAttribute("position",new Le(f,3));let g=new Pr({color:13105151,transparent:!0,opacity:0});u.add(new Lr(M,g)),u.position.copy(s);let _=new J(s.x,s.y,0);_.length()<.3&&_.set(.5,.12,0),_.normalize();let L=tu(i+s.x);this.pieces.push({group:u,origin:s,vector:new J(_.x*(5+L*3),_.y*(4+L*2)-1,2.5+L*3),spin:new J((tu(i+9)-.5)*2,(L-.5)*2.8,(tu(i+4)-.5)*.9),edge:g,delay:L*.15}),this.root.add(u)}),this.root.visible=!1,this.intact.visible=!0,this.render()}setProgress(t){this.camera.position.z=this.height/(2*Math.tan(Vr.degToRad(20)))*(1-.24*t**3),this.intact.visible=t<=0,this.root.visible=t>0;for(let e of this.pieces){let i=Vr.clamp((t-e.delay)/(1-e.delay),0,1),r=i*i*(2-i);e.group.position.copy(e.origin).addScaledVector(e.vector,r),e.group.rotation.set(e.spin.x*i,e.spin.y*i,e.spin.z*i),e.edge.opacity=Math.min(1,t*16)*.8}this.render()}replaceSource(t){this.reset(),this.texture.image=t,this.texture.needsUpdate=!0,this.render()}reset(){this.fracture=null,this.clearPieces(),this.intact.visible=!0,this.camera.position.z=this.height/(2*Math.tan(Vr.degToRad(20))),this.render()}render(){!this.disposed&&!this.lost&&this.renderer.render(this.scene,this.camera)}clearPieces(){for(let t of this.pieces)t.group.traverse(e=>{(e instanceof ze||e instanceof Lr)&&(e.geometry.dispose(),e.material!==this.face&&e.material.dispose())});this.root.clear(),this.pieces=[]}dispose(){this.disposed=!0,this.observer.disconnect(),this.canvas.removeEventListener("webglcontextlost",this.onLost),this.clearPieces(),this.texture.dispose(),this.face.dispose(),this.intact.geometry.dispose(),this.renderer.dispose()}},zl=["assets/worlds/world-1.jpg","assets/worlds/world-2.jpg","assets/worlds/world-3.jpg"],la=document.getElementById("mirror-stage"),Pe=document.getElementById("mirror-draw"),ss=document.getElementById("mirror-gl"),Pi=document.getElementById("mirror-world"),Ew=document.getElementById("mirror-hint"),oa=document.getElementById("mirror-overlay"),as=document.getElementById("shatter"),$0=document.getElementById("mirror-undo"),K0=document.getElementById("mirror-clear"),Tw=document.getElementById("mirror-count");la&&Pe&&ss&&Pi&&as&&Aw();function Aw(){let n=Pe.getContext("2d"),t=matchMedia("(prefers-reduced-motion: reduce)").matches,e=Number(localStorage.getItem("mirror-world")??-1);function i(){e=(e+1)%zl.length;try{localStorage.setItem("mirror-world",String(e))}catch{}return zl[e]}Pi.src=i();function r(A){let R=new Image;return R.src=A,R.decode().then(()=>{let O=document.createElement("canvas");return O.width=R.naturalWidth,O.height=R.naturalHeight,O.getContext("2d").drawImage(R,0,0),O})}let s=[],a=null,o=null,l=!1,c=!1,u=null;function f(){let A=s.length;Tw.textContent=`${A} ${A===1?"stroke":"strokes"}`,as.textContent=l?"Draw again \u21BA":"Shatter the mirror",as.disabled=c||!l&&!A,$0.disabled=!A||l,K0.disabled=!A||l,Ew.hidden=A>0||!!a||l,Pe.style.pointerEvents=l?"none":"auto"}function d(){let A=Pe.getBoundingClientRect();if(!A.width||!A.height)return;let R=Math.min(devicePixelRatio,2);Pe.width=Math.round(A.width*R),Pe.height=Math.round(A.height*R),n.setTransform(R,0,0,R,0,0),v()}function v(){let{width:A,height:R}=Pe.getBoundingClientRect();n.clearRect(0,0,A,R);let O=a?[...s,a]:s;n.lineCap="round",n.lineJoin="round",n.strokeStyle="rgba(216, 186, 132, .92)",n.lineWidth=2.4,n.shadowColor="rgba(215, 194, 160, .55)",n.shadowBlur=7;for(let S of O)if(S.length){n.beginPath(),n.moveTo(S[0][0]*A,S[0][1]*R),S.length===1&&n.lineTo(S[0][0]*A+.1,S[0][1]*R);for(let N=1;N<S.length;N++)n.lineTo(S[N][0]*A,S[N][1]*R);n.stroke()}n.shadowBlur=0}function x(A){let R=Pe.getBoundingClientRect();return[Math.max(.002,Math.min(.998,(A.clientX-R.left)/R.width)),Math.max(.002,Math.min(.998,(A.clientY-R.top)/R.height))]}Pe.addEventListener("pointerdown",A=>{l||c||!A.isPrimary||A.button!==0||s.length>=24||(a=[x(A)],Pe.setPointerCapture(A.pointerId),f(),v())}),Pe.addEventListener("pointermove",A=>{if(!a||a.length>=500)return;let R=x(A),O=a[a.length-1];Math.hypot(R[0]-O[0],R[1]-O[1])>.003&&a.push(R),v()});let M=()=>{a&&(s.push(a),a=null,f(),v())};Pe.addEventListener("pointerup",M),Pe.addEventListener("pointercancel",()=>{a=null,f(),v()}),Pe.addEventListener("lostpointercapture",M);for(let A of["touchstart","touchmove"])Pe.addEventListener(A,R=>{l||R.preventDefault()},{passive:!1});$0.onclick=()=>{s.pop(),f(),v()},K0.onclick=()=>{s=[],a=null,f(),v()};function g(A,R){return new Promise(O=>{let S=performance.now();function N(w){let h=Math.min(1,(w-S)/A);R(h),h<1?requestAnimationFrame(N):O()}requestAnimationFrame(N)})}function _(){l=!0,c=!1,Pi.style.opacity="1",Pe.style.opacity="0",ss.style.display="none",la.classList.add("revealed"),oa.hidden=!1,requestAnimationFrame(()=>oa.classList.add("visible")),u=r(i()).catch(()=>null),f(),oa.querySelector("a.btn").focus({preventScroll:!0})}async function L(){if(c||!l)return;c=!0,as.disabled=!0;let A=await u;s=[],a=null,oa.classList.remove("visible"),oa.hidden=!0,la.classList.remove("revealed"),Pi.style.transition="",Pi.style.opacity="0",Pi.src=zl[e],Pe.style.transition="",Pe.style.opacity="",o&&(A?o.replaceSource(A):o.reset(),o.intact.visible=!1,ss.style.display="",o.resize(),o.render()),l=!1,c=!1,f(),v()}as.onclick=()=>{l?L():B()};async function B(){if(c||l||!s.length)return;c=!0,as.disabled=!0,la.scrollIntoView({behavior:t?"instant":"smooth",block:"center"});let A=s.map(R=>R.map(O=>[...O]));if(!t&&o){let R=null;try{R=J0(A)}catch{R=null}if(R&&!R.fallback)try{o.prepare(R),await g(2300,O=>{o.setProgress(O),Pe.style.opacity=String(Math.max(0,1-O*7)),Pi.style.opacity=String(Math.min(1,O*1.8))}),_();return}catch{}}Pe.style.transition="opacity .5s",Pi.style.transition="opacity .9s",_()}async function C(){f(),d(),new ResizeObserver(d).observe(la);try{let A=await r(zl[e]);o=new eu(ss,A,()=>{o=null,ss.style.display="none"}),o.intact.visible=!1,o.render()}catch{o=null,ss.style.display="none"}f()}C()}})();
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
