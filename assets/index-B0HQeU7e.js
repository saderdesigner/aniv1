(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Jf="182",ma={ROTATE:0,DOLLY:1,PAN:2},ua={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},gv=0,Kp=1,xv=2,Xl=1,vv=2,Mo=3,$r=0,Ln=1,Yi=2,$i=0,_a=1,vu=2,Zp=3,$p=4,Sv=5,Ss=100,Mv=101,yv=102,Ev=103,bv=104,Tv=200,Av=201,wv=202,Cv=203,Su=204,Mu=205,Rv=206,Pv=207,Dv=208,Lv=209,Iv=210,Uv=211,Fv=212,Nv=213,Ov=214,yu=0,Eu=1,bu=2,Ta=3,Tu=4,Au=5,wu=6,Cu=7,T_=0,Bv=1,kv=2,Ji=0,A_=1,w_=2,C_=3,R_=4,P_=5,D_=6,L_=7,I_=300,Us=301,Aa=302,Ru=303,Pu=304,Cc=306,Du=1e3,xr=1001,Lu=1002,ln=1003,zv=1004,_l=1005,mn=1006,ph=1007,Es=1008,Qn=1009,U_=1010,F_=1011,Fo=1012,Qf=1013,tr=1014,Pi=1015,ii=1016,td=1017,ed=1018,No=1020,N_=35902,O_=35899,B_=1021,k_=1022,Di=1023,br=1026,bs=1027,nd=1028,id=1029,wa=1030,rd=1031,sd=1033,Yl=33776,ql=33777,jl=33778,Kl=33779,Iu=35840,Uu=35841,Fu=35842,Nu=35843,Ou=36196,Bu=37492,ku=37496,zu=37488,Vu=37489,Gu=37490,Hu=37491,Wu=37808,Xu=37809,Yu=37810,qu=37811,ju=37812,Ku=37813,Zu=37814,$u=37815,Ju=37816,Qu=37817,tf=37818,ef=37819,nf=37820,rf=37821,sf=36492,af=36494,of=36495,lf=36283,cf=36284,hf=36285,uf=36286,Vv=3200,z_=0,Gv=1,Br="",xi="srgb",Ca="srgb-linear",lc="linear",ue="srgb",Xs=7680,Jp=519,Hv=512,Wv=513,Xv=514,ad=515,Yv=516,qv=517,od=518,jv=519,Qp=35044,tm="300 es",Ki=2e3,cc=2001;function V_(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Oo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Kv(){const n=Oo("canvas");return n.style.display="block",n}const em={};function nm(...n){const t="THREE."+n.shift();console.log(t,...n)}function Ft(...n){const t="THREE."+n.shift();console.warn(t,...n)}function ie(...n){const t="THREE."+n.shift();console.error(t,...n)}function Bo(...n){const t=n.join(" ");t in em||(em[t]=!0,Ft(...n))}function Zv(n,t,e){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:i()}}setTimeout(s,e)})}class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const r=i[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zl=Math.PI/180,ff=180/Math.PI;function tl(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(un[n&255]+un[n>>8&255]+un[n>>16&255]+un[n>>24&255]+"-"+un[t&255]+un[t>>8&255]+"-"+un[t>>16&15|64]+un[t>>24&255]+"-"+un[e&63|128]+un[e>>8&255]+"-"+un[e>>16&255]+un[e>>24&255]+un[i&255]+un[i>>8&255]+un[i>>16&255]+un[i>>24&255]).toLowerCase()}function Wt(n,t,e){return Math.max(t,Math.min(e,n))}function $v(n,t){return(n%t+t)%t}function mh(n,t,e){return(1-e)*n+e*t}function lo(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Cn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jv={DEG2RAD:Zl};class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*i-a*r+t.x,this.y=s*r+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fs{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],u=i[r+3],f=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o>=1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=l*f+c*p+h*g+u*_;m<0&&(f=-f,p=-p,g=-g,_=-_,m=-m);let d=1-o;if(m<.9995){const S=Math.acos(m),b=Math.sin(S);d=Math.sin(d*S)/b,o=Math.sin(o*S)/b,l=l*d+f*o,c=c*d+p*o,h=h*d+g*o,u=u*d+_*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+g*o,u=u*d+_*o;const S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],u=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),u=o(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>u){const p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-i-u);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,r=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-e;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(t=0,e=0,i=0){N.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(im.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(im.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*i),h=2*(o*e-s*r),u=2*(s*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=r+l*u+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _h.copy(this).projectOnVector(t),this.sub(_h)}reflect(t){return this.sub(_h.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Wt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _h=new N,im=new Fs;class kt{constructor(t,e,i,r,s,a,o,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c)}set(t,e,i,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=r[0],m=r[3],d=r[6],S=r[1],b=r[4],E=r[7],y=r[2],A=r[5],w=r[8];return s[0]=a*_+o*S+l*y,s[3]=a*m+o*b+l*A,s[6]=a*d+o*E+l*w,s[1]=c*_+h*S+u*y,s[4]=c*m+h*b+u*A,s[7]=c*d+h*E+u*w,s[2]=f*_+p*S+g*y,s[5]=f*m+p*b+g*A,s[8]=f*d+p*E+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*s,p=c*s-a*l,g=e*u+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(r*c-h*i)*_,t[2]=(o*i-r*a)*_,t[3]=f*_,t[4]=(h*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(gh.makeScale(t,e)),this}rotate(t){return this.premultiply(gh.makeRotation(-t)),this}translate(t,e){return this.premultiply(gh.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const gh=new kt,rm=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sm=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Qv(){const n={enabled:!0,workingColorSpace:Ca,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ue&&(r.r=Sr(r.r),r.g=Sr(r.g),r.b=Sr(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(r.r=ga(r.r),r.g=ga(r.g),r.b=ga(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Br?lc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ca]:{primaries:t,whitePoint:i,transfer:lc,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:rm,fromXYZ:sm,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),n}const Qt=Qv();function Sr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ga(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ys;class t2{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ys===void 0&&(Ys=Oo("canvas")),Ys.width=t.width,Ys.height=t.height;const r=Ys.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Ys}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Sr(s[a]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Sr(e[i]/255)*255):e[i]=Sr(e[i]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let e2=0;class ld{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:e2++}),this.uuid=tl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xh(r[a].image)):s.push(xh(r[a]))}else s=xh(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function xh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?t2.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}let n2=0;const vh=new N;class _n extends zs{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,i=xr,r=xr,s=mn,a=Es,o=Di,l=Qn,c=_n.DEFAULT_ANISOTROPY,h=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n2++}),this.uuid=tl(),this.name="",this.source=new ld(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(vh).x}get height(){return this.source.getSize(vh).y}get depth(){return this.source.getSize(vh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==I_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Du:t.x=t.x-Math.floor(t.x);break;case xr:t.x=t.x<0?0:1;break;case Lu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Du:t.y=t.y-Math.floor(t.y);break;case xr:t.y=t.y<0?0:1;break;case Lu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=I_;_n.DEFAULT_ANISOTROPY=1;class Be{constructor(t=0,e=0,i=0,r=1){Be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*i+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,E=(p+1)/2,y=(d+1)/2,A=(h+f)/4,w=(u+_)/4,R=(g+m)/4;return b>E&&b>y?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=A/i,s=w/i):E>y?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=R/r):y<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(y),i=w/s,r=R/s),this.set(i,r,s,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Wt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class i2 extends zs{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e);const r={width:t,height:e,depth:i.depth},s=new _n(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ld(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends i2{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class G_ extends _n{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class r2 extends _n{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ai.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ai.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ai.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ai):Ai.fromBufferAttribute(s,a),Ai.applyMatrix4(t.matrixWorld),this.expandByPoint(Ai);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gl.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gl.copy(i.boundingBox)),gl.applyMatrix4(t.matrixWorld),this.union(gl)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ai),Ai.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(co),xl.subVectors(this.max,co),qs.subVectors(t.a,co),js.subVectors(t.b,co),Ks.subVectors(t.c,co),Pr.subVectors(js,qs),Dr.subVectors(Ks,js),cs.subVectors(qs,Ks);let e=[0,-Pr.z,Pr.y,0,-Dr.z,Dr.y,0,-cs.z,cs.y,Pr.z,0,-Pr.x,Dr.z,0,-Dr.x,cs.z,0,-cs.x,-Pr.y,Pr.x,0,-Dr.y,Dr.x,0,-cs.y,cs.x,0];return!Sh(e,qs,js,Ks,xl)||(e=[1,0,0,0,1,0,0,0,1],!Sh(e,qs,js,Ks,xl))?!1:(vl.crossVectors(Pr,Dr),e=[vl.x,vl.y,vl.z],Sh(e,qs,js,Ks,xl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ai).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ai).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(lr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const lr=[new N,new N,new N,new N,new N,new N,new N,new N],Ai=new N,gl=new Vs,qs=new N,js=new N,Ks=new N,Pr=new N,Dr=new N,cs=new N,co=new N,xl=new N,vl=new N,hs=new N;function Sh(n,t,e,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hs.fromArray(n,s);const o=r.x*Math.abs(hs.x)+r.y*Math.abs(hs.y)+r.z*Math.abs(hs.z),l=t.dot(hs),c=e.dot(hs),h=i.dot(hs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const s2=new Vs,ho=new N,Mh=new N;class el{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):s2.setFromPoints(t).getCenter(i);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ho.subVectors(t,this.center);const e=ho.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(ho,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Mh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ho.copy(t.center).add(Mh)),this.expandByPoint(ho.copy(t.center).sub(Mh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const cr=new N,yh=new N,Sl=new N,Lr=new N,Eh=new N,Ml=new N,bh=new N;class H_{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,cr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=cr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(cr.copy(this.origin).addScaledVector(this.direction,e),cr.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){yh.copy(t).add(e).multiplyScalar(.5),Sl.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(yh);const s=t.distanceTo(e)*.5,a=-this.direction.dot(Sl),o=Lr.dot(this.direction),l=-Lr.dot(Sl),c=Lr.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=s*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*s+o)),f=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(u=Math.max(0,-(a*s+o)),f=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+f*(f+2*l)+c);else f=a>0?-s:s,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(yh).addScaledVector(Sl,f),p}intersectSphere(t,e){cr.subVectors(t.center,this.origin);const i=cr.dot(this.direction),r=cr.dot(cr)-i*i,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,cr)!==null}intersectTriangle(t,e,i,r,s){Eh.subVectors(e,t),Ml.subVectors(i,t),bh.crossVectors(Eh,Ml);let a=this.direction.dot(bh),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Lr.subVectors(this.origin,t);const l=o*this.direction.dot(Ml.crossVectors(Lr,Ml));if(l<0)return null;const c=o*this.direction.dot(Eh.cross(Lr));if(c<0||l+c>a)return null;const h=-o*Lr.dot(bh);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class be{constructor(t,e,i,r,s,a,o,l,c,h,u,f,p,g,_,m){be.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,i,r,s,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new be().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,r=1/Zs.setFromMatrixColumn(t,0).length(),s=1/Zs.setFromMatrixColumn(t,1).length(),a=1/Zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(a2,t,o2)}lookAt(t,e,i){const r=this.elements;return Yn.subVectors(t,e),Yn.lengthSq()===0&&(Yn.z=1),Yn.normalize(),Ir.crossVectors(i,Yn),Ir.lengthSq()===0&&(Math.abs(i.z)===1?Yn.x+=1e-4:Yn.z+=1e-4,Yn.normalize(),Ir.crossVectors(i,Yn)),Ir.normalize(),yl.crossVectors(Yn,Ir),r[0]=Ir.x,r[4]=yl.x,r[8]=Yn.x,r[1]=Ir.y,r[5]=yl.y,r[9]=Yn.y,r[2]=Ir.z,r[6]=yl.z,r[10]=Yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],S=i[3],b=i[7],E=i[11],y=i[15],A=r[0],w=r[4],R=r[8],x=r[12],T=r[1],P=r[5],k=r[9],F=r[13],W=r[2],H=r[6],V=r[10],B=r[14],j=r[3],ot=r[7],et=r[11],ct=r[15];return s[0]=a*A+o*T+l*W+c*j,s[4]=a*w+o*P+l*H+c*ot,s[8]=a*R+o*k+l*V+c*et,s[12]=a*x+o*F+l*B+c*ct,s[1]=h*A+u*T+f*W+p*j,s[5]=h*w+u*P+f*H+p*ot,s[9]=h*R+u*k+f*V+p*et,s[13]=h*x+u*F+f*B+p*ct,s[2]=g*A+_*T+m*W+d*j,s[6]=g*w+_*P+m*H+d*ot,s[10]=g*R+_*k+m*V+d*et,s[14]=g*x+_*F+m*B+d*ct,s[3]=S*A+b*T+E*W+y*j,s[7]=S*w+b*P+E*H+y*ot,s[11]=S*R+b*k+E*V+y*et,s[15]=S*x+b*F+E*B+y*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15],S=l*p-c*f,b=o*p-c*u,E=o*f-l*u,y=a*p-c*h,A=a*f-l*h,w=a*u-o*h;return e*(_*S-m*b+d*E)-i*(g*S-m*y+d*A)+r*(g*b-_*y+d*w)-s*(g*E-_*A+m*w)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,b=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,E=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,y=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,A=e*S+i*b+r*E+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=S*w,t[1]=(_*f*s-u*m*s-_*r*p+i*m*p+u*r*d-i*f*d)*w,t[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*d+i*l*d)*w,t[3]=(u*l*s-o*f*s-u*r*c+i*f*c+o*r*p-i*l*p)*w,t[4]=b*w,t[5]=(h*m*s-g*f*s+g*r*p-e*m*p-h*r*d+e*f*d)*w,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*d-e*l*d)*w,t[7]=(a*f*s-h*l*s+h*r*c-e*f*c-a*r*p+e*l*p)*w,t[8]=E*w,t[9]=(g*u*s-h*_*s-g*i*p+e*_*p+h*i*d-e*u*d)*w,t[10]=(a*_*s-g*o*s+g*i*c-e*_*c-a*i*d+e*o*d)*w,t[11]=(h*o*s-a*u*s-h*i*c+e*u*c+a*i*p-e*o*p)*w,t[12]=y*w,t[13]=(h*_*r-g*u*r+g*i*f-e*_*f-h*i*m+e*u*m)*w,t[14]=(g*o*r-a*_*r-g*i*l+e*_*l+a*i*m-e*o*m)*w,t[15]=(a*u*r-h*o*r+h*i*l-e*u*l-a*i*f+e*o*f)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,a){return this.set(1,i,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,u=o+o,f=s*c,p=s*h,g=s*u,_=a*h,m=a*u,d=o*u,S=l*c,b=l*h,E=l*u,y=i.x,A=i.y,w=i.z;return r[0]=(1-(_+d))*y,r[1]=(p+E)*y,r[2]=(g-b)*y,r[3]=0,r[4]=(p-E)*A,r[5]=(1-(f+d))*A,r[6]=(m+S)*A,r[7]=0,r[8]=(g+b)*w,r[9]=(m-S)*w,r[10]=(1-(f+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;if(t.x=r[12],t.y=r[13],t.z=r[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let s=Zs.set(r[0],r[1],r[2]).length();const a=Zs.set(r[4],r[5],r[6]).length(),o=Zs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),wi.copy(this);const c=1/s,h=1/a,u=1/o;return wi.elements[0]*=c,wi.elements[1]*=c,wi.elements[2]*=c,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,e.setFromRotationMatrix(wi),i.x=s,i.y=a,i.z=o,this}makePerspective(t,e,i,r,s,a,o=Ki,l=!1){const c=this.elements,h=2*s/(e-t),u=2*s/(i-r),f=(e+t)/(e-t),p=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Ki)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===cc)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,r,s,a,o=Ki,l=!1){const c=this.elements,h=2/(e-t),u=2/(i-r),f=-(e+t)/(e-t),p=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Ki)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===cc)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Zs=new N,wi=new be,a2=new N(0,0,0),o2=new N(1,1,1),Ir=new N,yl=new N,Yn=new N,am=new be,om=new Fs;class er{constructor(t=0,e=0,i=0,r=er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return am.makeRotationFromQuaternion(t),this.setFromRotationMatrix(am,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return om.setFromEuler(this),this.setFromQuaternion(om,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class cd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let l2=0;const lm=new N,$s=new Fs,hr=new be,El=new N,uo=new N,c2=new N,h2=new Fs,cm=new N(1,0,0),hm=new N(0,1,0),um=new N(0,0,1),fm={type:"added"},u2={type:"removed"},Js={type:"childadded",child:null},Th={type:"childremoved",child:null};class yn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l2++}),this.uuid=tl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new N,e=new er,i=new Fs,r=new N(1,1,1);function s(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new be},normalMatrix:{value:new kt}}),this.matrix=new be,this.matrixWorld=new be,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.multiply($s),this}rotateOnWorldAxis(t,e){return $s.setFromAxisAngle(t,e),this.quaternion.premultiply($s),this}rotateX(t){return this.rotateOnAxis(cm,t)}rotateY(t){return this.rotateOnAxis(hm,t)}rotateZ(t){return this.rotateOnAxis(um,t)}translateOnAxis(t,e){return lm.copy(t).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cm,t)}translateY(t){return this.translateOnAxis(hm,t)}translateZ(t){return this.translateOnAxis(um,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?El.copy(t):El.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(uo,El,this.up):hr.lookAt(El,uo,this.up),this.quaternion.setFromRotationMatrix(hr),r&&(hr.extractRotation(r.matrixWorld),$s.setFromRotationMatrix(hr),this.quaternion.premultiply($s.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ie("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fm),Js.child=t,this.dispatchEvent(Js),Js.child=null):ie("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(u2),Th.child=t,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hr.multiply(t.parent.matrixWorld)),t.applyMatrix4(hr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fm),Js.child=t,this.dispatchEvent(Js),Js.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,t,c2),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,h2,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}yn.DEFAULT_UP=new N(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new N,ur=new N,Ah=new N,fr=new N,Qs=new N,ta=new N,dm=new N,wh=new N,Ch=new N,Rh=new N,Ph=new Be,Dh=new Be,Lh=new Be;class Ri{constructor(t=new N,e=new N,i=new N){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),Ci.subVectors(t,e),r.cross(Ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){Ci.subVectors(r,e),ur.subVectors(i,e),Ah.subVectors(t,e);const a=Ci.dot(Ci),o=Ci.dot(ur),l=Ci.dot(Ah),c=ur.dot(ur),h=ur.dot(Ah),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(t,e,i,r,s,a,o,l){return this.getBarycoord(t,e,i,r,fr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fr.x),l.addScaledVector(a,fr.y),l.addScaledVector(o,fr.z),l)}static getInterpolatedAttribute(t,e,i,r,s,a){return Ph.setScalar(0),Dh.setScalar(0),Lh.setScalar(0),Ph.fromBufferAttribute(t,e),Dh.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(Ph,s.x),a.addScaledVector(Dh,s.y),a.addScaledVector(Lh,s.z),a}static isFrontFacing(t,e,i,r){return Ci.subVectors(i,e),ur.subVectors(t,e),Ci.cross(ur).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ci.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ci.cross(ur).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ri.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ri.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,r,s){return Ri.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return Ri.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ri.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let a,o;Qs.subVectors(r,i),ta.subVectors(s,i),wh.subVectors(t,i);const l=Qs.dot(wh),c=ta.dot(wh);if(l<=0&&c<=0)return e.copy(i);Ch.subVectors(t,r);const h=Qs.dot(Ch),u=ta.dot(Ch);if(h>=0&&u<=h)return e.copy(r);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(Qs,a);Rh.subVectors(t,s);const p=Qs.dot(Rh),g=ta.dot(Rh);if(g>=0&&p<=g)return e.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(ta,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return dm.subVectors(s,r),o=(u-h)/(u-h+(p-g)),e.copy(r).addScaledVector(dm,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(i).addScaledVector(Qs,a).addScaledVector(ta,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const W_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},bl={h:0,s:0,l:0};function Ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Qt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=Qt.workingColorSpace){if(t=$v(t,1),e=Wt(e,0,1),i=Wt(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,a=2*i-s;this.r=Ih(a,s,t+1/3),this.g=Ih(a,s,t),this.b=Ih(a,s,t-1/3)}return Qt.colorSpaceToWorking(this,r),this}setStyle(t,e=xi){function i(s){s!==void 0&&parseFloat(s)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xi){const i=W_[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}copyLinearToSRGB(t){return this.r=ga(t.r),this.g=ga(t.g),this.b=ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xi){return Qt.workingToColorSpace(fn.copy(this),t),Math.round(Wt(fn.r*255,0,255))*65536+Math.round(Wt(fn.g*255,0,255))*256+Math.round(Wt(fn.b*255,0,255))}getHexString(t=xi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(fn.copy(this),e);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(fn.copy(this),e),t.r=fn.r,t.g=fn.g,t.b=fn.b,t}getStyle(t=xi){Qt.workingToColorSpace(fn.copy(this),t);const e=fn.r,i=fn.g,r=fn.b;return t!==xi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Ur),this.setHSL(Ur.h+t,Ur.s+e,Ur.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ur),t.getHSL(bl);const i=mh(Ur.h,bl.h,e),r=mh(Ur.s,bl.s,e),s=mh(Ur.l,bl.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new Xt;Xt.NAMES=W_;let f2=0;class nl extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f2++}),this.uuid=tl(),this.name="",this.type="Material",this.blending=_a,this.side=$r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Su,this.blendDst=Mu,this.blendEquation=Ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xs,this.stencilZFail=Xs,this.stencilZPass=Xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_a&&(i.blending=this.blending),this.side!==$r&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Su&&(i.blendSrc=this.blendSrc),this.blendDst!==Mu&&(i.blendDst=this.blendDst),this.blendEquation!==Ss&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class il extends nl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=T_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ye=new N,Tl=new Rt;let d2=0;class Li{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d2++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Qp,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Tl.fromBufferAttribute(this,e),Tl.applyMatrix3(t),this.setXY(e,Tl.x,Tl.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix3(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyMatrix4(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.applyNormalMatrix(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ye.fromBufferAttribute(this,e),Ye.transformDirection(t),this.setXYZ(e,Ye.x,Ye.y,Ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=lo(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Cn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=lo(e,this.array)),e}setX(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=lo(e,this.array)),e}setY(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=lo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=lo(e,this.array)),e}setW(t,e){return this.normalized&&(e=Cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array),r=Cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=Cn(e,this.array),i=Cn(i,this.array),r=Cn(r,this.array),s=Cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Qp&&(t.usage=this.usage),t}}class X_ extends Li{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Y_ extends Li{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Un extends Li{constructor(t,e,i){super(new Float32Array(t),e,i)}}let p2=0;const di=new be,Uh=new yn,ea=new N,qn=new Vs,fo=new Vs,nn=new N;class Ii extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:p2++}),this.uuid=tl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(V_(t)?Y_:X_)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new kt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,e,i){return di.makeTranslation(t,e,i),this.applyMatrix4(di),this}scale(t,e,i){return di.makeScale(t,e,i),this.applyMatrix4(di),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Un(i,3))}else{const i=Math.min(t.length,e.count);for(let r=0;r<i;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];qn.setFromBufferAttribute(s),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new el);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){const i=this.boundingSphere.center;if(qn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];fo.setFromBufferAttribute(o),this.morphTargetsRelative?(nn.addVectors(qn.min,fo.min),qn.expandByPoint(nn),nn.addVectors(qn.max,fo.max),qn.expandByPoint(nn)):(qn.expandByPoint(fo.min),qn.expandByPoint(fo.max))}qn.getCenter(i);let r=0;for(let s=0,a=t.count;s<a;s++)nn.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(nn));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)nn.fromBufferAttribute(o,c),l&&(ea.fromBufferAttribute(t,c),nn.add(ea)),r=Math.max(r,i.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<i.count;R++)o[R]=new N,l[R]=new N;const c=new N,h=new N,u=new N,f=new Rt,p=new Rt,g=new Rt,_=new N,m=new N;function d(R,x,T){c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,x),g.fromBufferAttribute(s,T),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(P),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[R].add(_),o[x].add(_),o[T].add(_),l[R].add(m),l[x].add(m),l[T].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,x=S.length;R<x;++R){const T=S[R],P=T.start,k=T.count;for(let F=P,W=P+k;F<W;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new N,E=new N,y=new N,A=new N;function w(R){y.fromBufferAttribute(r,R),A.copy(y);const x=o[R];b.copy(x),b.sub(y.multiplyScalar(y.dot(x))).normalize(),E.crossVectors(A,x);const P=E.dot(l[R])<0?-1:1;a.setXYZW(R,b.x,b.y,b.z,P)}for(let R=0,x=S.length;R<x;++R){const T=S[R],P=T.start,k=T.count;for(let F=P,W=P+k;F<W;F+=3)w(t.getX(F+0)),w(t.getX(F+1)),w(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Li(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,a=new N,o=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),u.subVectors(r,s),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)nn.fromBufferAttribute(t,e),nn.normalize(),t.setXYZ(e,nn.x,nn.y,nn.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new Li(f,h,u)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ii,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,i);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pm=new be,us=new H_,Al=new el,mm=new N,wl=new N,Cl=new N,Rl=new N,Fh=new N,Pl=new N,_m=new N,Dl=new N;class zn extends yn{constructor(t=new Ii,e=new il){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(Fh.fromBufferAttribute(u,t),a?Pl.addScaledVector(Fh,h):Pl.addScaledVector(Fh.sub(e),h))}e.add(Pl)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Al.copy(i.boundingSphere),Al.applyMatrix4(s),us.copy(t.ray).recast(t.near),!(Al.containsPoint(us.origin)===!1&&(us.intersectSphere(Al,mm)===null||us.origin.distanceToSquared(mm)>(t.far-t.near)**2))&&(pm.copy(s).invert(),us.copy(t.ray).applyMatrix4(pm),!(i.boundingBox!==null&&us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,us)))}_computeIntersections(t,e,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,y=b;E<y;E+=3){const A=o.getX(E),w=o.getX(E+1),R=o.getX(E+2);r=Ll(this,d,t,i,c,h,u,A,w,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=o.getX(m),b=o.getX(m+1),E=o.getX(m+2);r=Ll(this,a,t,i,c,h,u,S,b,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let E=S,y=b;E<y;E+=3){const A=E,w=E+1,R=E+2;r=Ll(this,d,t,i,c,h,u,A,w,R),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,b=m+1,E=m+2;r=Ll(this,a,t,i,c,h,u,S,b,E),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function m2(n,t,e,i,r,s,a,o){let l;if(t.side===Ln?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,t.side===$r,o),l===null)return null;Dl.copy(o),Dl.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Dl);return c<e.near||c>e.far?null:{distance:c,point:Dl.clone(),object:n}}function Ll(n,t,e,i,r,s,a,o,l,c){n.getVertexPosition(o,wl),n.getVertexPosition(l,Cl),n.getVertexPosition(c,Rl);const h=m2(n,t,e,i,wl,Cl,Rl,_m);if(h){const u=new N;Ri.getBarycoord(_m,wl,Cl,Rl,u),r&&(h.uv=Ri.getInterpolatedAttribute(r,o,l,c,u,new Rt)),s&&(h.uv1=Ri.getInterpolatedAttribute(s,o,l,c,u,new Rt)),a&&(h.normal=Ri.getInterpolatedAttribute(a,o,l,c,u,new N),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new N,materialIndex:0};Ri.getNormal(wl,Cl,Rl,f.normal),h.face=f,h.barycoord=u}return h}class rl extends Ii{constructor(t=1,e=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,i,e,t,a,s,0),g("z","y","x",1,-1,i,e,-t,a,s,1),g("x","z","y",1,1,t,i,e,r,a,2),g("x","z","y",1,-1,t,i,-e,r,a,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Un(c,3)),this.setAttribute("normal",new Un(h,3)),this.setAttribute("uv",new Un(u,2));function g(_,m,d,S,b,E,y,A,w,R,x){const T=E/w,P=y/R,k=E/2,F=y/2,W=A/2,H=w+1,V=R+1;let B=0,j=0;const ot=new N;for(let et=0;et<V;et++){const ct=et*P-F;for(let Ut=0;Ut<H;Ut++){const Ot=Ut*T-k;ot[_]=Ot*S,ot[m]=ct*b,ot[d]=W,c.push(ot.x,ot.y,ot.z),ot[_]=0,ot[m]=0,ot[d]=A>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(Ut/w),u.push(1-et/R),B+=1}}for(let et=0;et<R;et++)for(let ct=0;ct<w;ct++){const Ut=f+ct+H*et,Ot=f+ct+H*(et+1),Zt=f+(ct+1)+H*(et+1),$t=f+(ct+1)+H*et;l.push(Ut,Ot,$t),l.push(Ot,Zt,$t),j+=6}o.addGroup(p,j,x),p+=j,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ra(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function vn(n){const t={};for(let e=0;e<n.length;e++){const i=Ra(n[e]);for(const r in i)t[r]=i[r]}return t}function _2(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function q_(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const hc={clone:Ra,merge:vn};var g2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,x2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends nl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=g2,this.fragmentShader=x2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ra(t.uniforms),this.uniformsGroups=_2(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class j_ extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new be,this.projectionMatrix=new be,this.projectionMatrixInverse=new be,this.coordinateSystem=Ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new N,gm=new Rt,xm=new Rt;class Jn extends j_{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ff*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ff*2*Math.atan(Math.tan(Zl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fr.x,Fr.y).multiplyScalar(-t/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fr.x,Fr.y).multiplyScalar(-t/Fr.z)}getViewSize(t,e){return this.getViewBounds(t,gm,xm),e.subVectors(xm,gm)}setViewOffset(t,e,i,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zl*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const na=-90,ia=1;class v2 extends yn{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(na,ia,t,e);r.layers=this.layers,this.add(r);const s=new Jn(na,ia,t,e);s.layers=this.layers,this.add(s);const a=new Jn(na,ia,t,e);a.layers=this.layers,this.add(a);const o=new Jn(na,ia,t,e);o.layers=this.layers,this.add(o);const l=new Jn(na,ia,t,e);l.layers=this.layers,this.add(l);const c=new Jn(na,ia,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===cc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,a),t.setRenderTarget(i,2,r),t.render(e,o),t.setRenderTarget(i,3,r),t.render(e,l),t.setRenderTarget(i,4,r),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,r),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class K_ extends _n{constructor(t=[],e=Us,i,r,s,a,o,l,c,h){super(t,e,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Z_ extends In{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new K_(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rl(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Ra(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:$i});s.uniforms.tEquirect.value=e;const a=new zn(r,s),o=e.minFilter;return e.minFilter===Es&&(e.minFilter=mn),new v2(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,r);t.setRenderTarget(s)}}class yo extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S2={type:"move"};class Nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(S2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class M2 extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class $_ extends _n{constructor(t=null,e=1,i=1,r,s,a,o,l,c=ln,h=ln,u,f){super(null,a,o,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vm extends Li{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ra=new be,Sm=new be,Il=[],Mm=new Vs,y2=new be,po=new zn,mo=new el;class hd extends zn{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new vm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,y2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Vs),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ra),Mm.copy(t.boundingBox).applyMatrix4(ra),this.boundingBox.union(Mm)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new el),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ra),mo.copy(t.boundingSphere).applyMatrix4(ra),this.boundingSphere.union(mo)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=t*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(t,e){const i=this.matrixWorld,r=this.count;if(po.geometry=this.geometry,po.material=this.material,po.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),mo.copy(this.boundingSphere),mo.applyMatrix4(i),t.ray.intersectsSphere(mo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ra),Sm.multiplyMatrices(i,ra),po.matrixWorld=Sm,po.raycast(t,Il);for(let a=0,o=Il.length;a<o;a++){const l=Il[a];l.instanceId=s,l.object=this,e.push(l)}Il.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new vm(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new $_(new Float32Array(r*this.count),r,this.count,nd,Pi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Oh=new N,E2=new N,b2=new kt;class Or{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Oh.subVectors(i,e).cross(E2.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Oh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||b2.getNormalMatrix(t),r=this.coplanarPoint(Oh).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new el,T2=new Rt(.5,.5),Ul=new N;class ud{constructor(t=new Or,e=new Or,i=new Or,r=new Or,s=new Or,a=new Or){this.planes=[t,e,i,r,s,a]}set(t,e,i,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Ki,i=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],p=s[7],g=s[8],_=s[9],m=s[10],d=s[11],S=s[12],b=s[13],E=s[14],y=s[15];if(r[0].setComponents(c-a,p-h,d-g,y-S).normalize(),r[1].setComponents(c+a,p+h,d+g,y+S).normalize(),r[2].setComponents(c+o,p+u,d+_,y+b).normalize(),r[3].setComponents(c-o,p-u,d-_,y-b).normalize(),i)r[4].setComponents(l,f,m,E).normalize(),r[5].setComponents(c-l,p-f,d-m,y-E).normalize();else if(r[4].setComponents(c-l,p-f,d-m,y-E).normalize(),e===Ki)r[5].setComponents(c+l,p+f,d+m,y+E).normalize();else if(e===cc)r[5].setComponents(l,f,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(t){fs.center.set(0,0,0);const e=T2.distanceTo(t.center);return fs.radius=.7071067811865476+e,fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ul.x=r.normal.x>0?t.max.x:t.min.x,Ul.y=r.normal.y>0?t.max.y:t.min.y,Ul.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ko extends _n{constructor(t,e,i=tr,r,s,a,o=ln,l=ln,c,h=br,u=1){if(h!==br&&h!==bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:u};super(f,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ld(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class A2 extends ko{constructor(t,e=tr,i=Us,r,s,a=ln,o=ln,l,c=br){const h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,s,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class J_ extends _n{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class sl extends Ii{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const S=d*f-a;for(let b=0;b<c;b++){const E=b*u-s;g.push(E,-S,0),_.push(0,0,1),m.push(b/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const b=S+c*d,E=S+c*(d+1),y=S+1+c*(d+1),A=S+1+c*d;p.push(b,E,A),p.push(E,y,A)}this.setIndex(p),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ka extends Ii{constructor(t=1,e=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new N,f=new N,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){const S=[],b=d/i;let E=0;d===0&&a===0?E=.5/e:d===i&&l===Math.PI&&(E=-.5/e);for(let y=0;y<=e;y++){const A=y/e;u.x=-t*Math.cos(r+A*s)*Math.sin(a+b*o),u.y=t*Math.cos(a+b*o),u.z=t*Math.sin(r+A*s)*Math.sin(a+b*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+E,1-b),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<e;S++){const b=h[d][S+1],E=h[d][S],y=h[d+1][S],A=h[d+1][S+1];(d!==0||a>0)&&p.push(b,E,A),(d!==i-1||l<Math.PI)&&p.push(E,y,A)}this.setIndex(p),this.setAttribute("position",new Un(g,3)),this.setAttribute("normal",new Un(_,3)),this.setAttribute("uv",new Un(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class w2 extends cn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rc extends nl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=z_,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class C2 extends nl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class R2 extends nl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Bh={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class P2{constructor(t,e,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const D2=new P2;class fd{constructor(t){this.manager=t!==void 0?t:D2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}fd.DEFAULT_MATERIAL_NAME="__DEFAULT";const sa=new WeakMap;class L2 extends fd{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=Bh.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0);else{let u=sa.get(a);u===void 0&&(u=[],sa.set(a,u)),u.push({onLoad:e,onError:r})}return a}const o=Oo("img");function l(){h(),e&&e(this);const u=sa.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}sa.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Bh.remove(`image:${t}`);const f=sa.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(u)}sa.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Bh.add(`image:${t}`,o),s.manager.itemStart(t),o.src=t,o}}class I2 extends fd{constructor(t){super(t)}load(t,e,i,r){const s=new _n,a=new L2(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Q_ extends yn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const kh=new be,ym=new N,Em=new N;class U2{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new be,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ud,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ym.setFromMatrixPosition(t.matrixWorld),e.position.copy(ym),Em.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Em),e.updateMatrixWorld(),kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class F2 extends U2{constructor(){super(new Jn(90,1,.5,500)),this.isPointLightShadow=!0}}class N2 extends Q_{constructor(t,e,i=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new F2}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class dd extends j_{constructor(t=-1,e=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,a=i+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class O2 extends Q_{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class B2 extends Jn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class k2{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}class bm{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Wt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Wt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class z2 extends zs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Ft("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Tm(n,t,e,i){const r=V2(i);switch(e){case B_:return n*t;case nd:return n*t/r.components*r.byteLength;case id:return n*t/r.components*r.byteLength;case wa:return n*t*2/r.components*r.byteLength;case rd:return n*t*2/r.components*r.byteLength;case k_:return n*t*3/r.components*r.byteLength;case Di:return n*t*4/r.components*r.byteLength;case sd:return n*t*4/r.components*r.byteLength;case Yl:case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jl:case Kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Uu:case Nu:return Math.max(n,16)*Math.max(t,8)/4;case Iu:case Fu:return Math.max(n,8)*Math.max(t,8)/2;case Ou:case Bu:case zu:case Vu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ku:case Gu:case Hu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wu:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xu:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Yu:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case qu:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case ju:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ku:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Zu:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case $u:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Ju:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case tf:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ef:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case nf:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rf:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sf:case af:case of:return Math.ceil(n/4)*Math.ceil(t/4)*16;case lf:case cf:return Math.ceil(n/4)*Math.ceil(t/4)*8;case hf:case uf:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V2(n){switch(n){case Qn:case U_:return{byteLength:1,components:1};case Fo:case F_:case ii:return{byteLength:2,components:1};case td:case ed:return{byteLength:2,components:4};case tr:case Qf:case Pi:return{byteLength:4,components:1};case N_:case O_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);function tg(){let n=null,t=!1,e=null,i=null;function r(s,a){e(s,a),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function G2(n){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var H2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,W2=`#ifdef USE_ALPHAHASH
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
#endif`,X2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Y2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,q2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,K2=`#ifdef USE_AOMAP
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
#endif`,Z2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$2=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,J2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,t3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e3=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n3=`#ifdef USE_IRIDESCENCE
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
#endif`,i3=`#ifdef USE_BUMPMAP
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
#endif`,r3=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,a3=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o3=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l3=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,h3=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u3=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,f3=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,d3=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,p3=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,m3=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_3=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g3=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,x3=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v3="gl_FragColor = linearToOutputTexel( gl_FragColor );",S3=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,M3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,y3=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,E3=`#ifdef USE_ENVMAP
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
#endif`,b3=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T3=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,A3=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w3=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C3=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R3=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P3=`#ifdef USE_GRADIENTMAP
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
}`,D3=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L3=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U3=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,F3=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,N3=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,B3=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,k3=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z3=`PhysicalMaterial material;
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
#endif`,V3=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,G3=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,H3=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,W3=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y3=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j3=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K3=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Z3=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$3=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J3=`#if defined( USE_POINTS_UV )
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
#endif`,Q3=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,tS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
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
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uS=`#ifdef USE_NORMALMAP
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
#endif`,fS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_S=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,xS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,wS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,CS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RS=`#ifdef USE_SKINNING
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
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DS=`#ifdef USE_SKINNING
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
#endif`,LS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,US=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NS=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OS=`#ifdef USE_TRANSMISSION
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
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HS=`uniform sampler2D t2D;
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jS=`#include <common>
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
}`,KS=`#if DEPTH_PACKING == 3200
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
}`,ZS=`#define DISTANCE
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
}`,$S=`#define DISTANCE
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
void main () {
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tM=`uniform float scale;
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
}`,eM=`uniform vec3 diffuse;
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
}`,nM=`#include <common>
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
}`,iM=`uniform vec3 diffuse;
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
}`,rM=`#define LAMBERT
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
}`,sM=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,aM=`#define MATCAP
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
}`,oM=`#define MATCAP
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
}`,lM=`#define NORMAL
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
}`,cM=`#define NORMAL
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
}`,hM=`#define PHONG
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
}`,uM=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,fM=`#define STANDARD
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
}`,dM=`#define STANDARD
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
}`,pM=`#define TOON
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
}`,mM=`#define TOON
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
}`,_M=`uniform float size;
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
}`,gM=`uniform vec3 diffuse;
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
}`,xM=`#include <common>
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
}`,vM=`uniform vec3 color;
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
}`,SM=`uniform float rotation;
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
}`,MM=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:H2,alphahash_pars_fragment:W2,alphamap_fragment:X2,alphamap_pars_fragment:Y2,alphatest_fragment:q2,alphatest_pars_fragment:j2,aomap_fragment:K2,aomap_pars_fragment:Z2,batching_pars_vertex:$2,batching_vertex:J2,begin_vertex:Q2,beginnormal_vertex:t3,bsdfs:e3,iridescence_fragment:n3,bumpmap_pars_fragment:i3,clipping_planes_fragment:r3,clipping_planes_pars_fragment:s3,clipping_planes_pars_vertex:a3,clipping_planes_vertex:o3,color_fragment:l3,color_pars_fragment:c3,color_pars_vertex:h3,color_vertex:u3,common:f3,cube_uv_reflection_fragment:d3,defaultnormal_vertex:p3,displacementmap_pars_vertex:m3,displacementmap_vertex:_3,emissivemap_fragment:g3,emissivemap_pars_fragment:x3,colorspace_fragment:v3,colorspace_pars_fragment:S3,envmap_fragment:M3,envmap_common_pars_fragment:y3,envmap_pars_fragment:E3,envmap_pars_vertex:b3,envmap_physical_pars_fragment:F3,envmap_vertex:T3,fog_vertex:A3,fog_pars_vertex:w3,fog_fragment:C3,fog_pars_fragment:R3,gradientmap_pars_fragment:P3,lightmap_pars_fragment:D3,lights_lambert_fragment:L3,lights_lambert_pars_fragment:I3,lights_pars_begin:U3,lights_toon_fragment:N3,lights_toon_pars_fragment:O3,lights_phong_fragment:B3,lights_phong_pars_fragment:k3,lights_physical_fragment:z3,lights_physical_pars_fragment:V3,lights_fragment_begin:G3,lights_fragment_maps:H3,lights_fragment_end:W3,logdepthbuf_fragment:X3,logdepthbuf_pars_fragment:Y3,logdepthbuf_pars_vertex:q3,logdepthbuf_vertex:j3,map_fragment:K3,map_pars_fragment:Z3,map_particle_fragment:$3,map_particle_pars_fragment:J3,metalnessmap_fragment:Q3,metalnessmap_pars_fragment:tS,morphinstance_vertex:eS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:hS,normalmap_pars_fragment:uS,clearcoat_normal_fragment_begin:fS,clearcoat_normal_fragment_maps:dS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:_S,packing:gS,premultiplied_alpha_fragment:xS,project_vertex:vS,dithering_fragment:SS,dithering_pars_fragment:MS,roughnessmap_fragment:yS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:bS,shadowmap_pars_vertex:TS,shadowmap_vertex:AS,shadowmask_pars_fragment:wS,skinbase_vertex:CS,skinning_pars_vertex:RS,skinning_vertex:PS,skinnormal_vertex:DS,specularmap_fragment:LS,specularmap_pars_fragment:IS,tonemapping_fragment:US,tonemapping_pars_fragment:FS,transmission_fragment:NS,transmission_pars_fragment:OS,uv_pars_fragment:BS,uv_pars_vertex:kS,uv_vertex:zS,worldpos_vertex:VS,background_vert:GS,background_frag:HS,backgroundCube_vert:WS,backgroundCube_frag:XS,cube_vert:YS,cube_frag:qS,depth_vert:jS,depth_frag:KS,distance_vert:ZS,distance_frag:$S,equirect_vert:JS,equirect_frag:QS,linedashed_vert:tM,linedashed_frag:eM,meshbasic_vert:nM,meshbasic_frag:iM,meshlambert_vert:rM,meshlambert_frag:sM,meshmatcap_vert:aM,meshmatcap_frag:oM,meshnormal_vert:lM,meshnormal_frag:cM,meshphong_vert:hM,meshphong_frag:uM,meshphysical_vert:fM,meshphysical_frag:dM,meshtoon_vert:pM,meshtoon_frag:mM,points_vert:_M,points_frag:gM,shadow_vert:xM,shadow_frag:vM,sprite_vert:SM,sprite_frag:MM},lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Wi={basic:{uniforms:vn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:vn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:vn([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:vn([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:vn([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:vn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:vn([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:vn([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:vn([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:vn([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:vn([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distance:{uniforms:vn([lt.common,lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distance_vert,fragmentShader:zt.distance_frag},shadow:{uniforms:vn([lt.lights,lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};Wi.physical={uniforms:vn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};const Fl={r:0,b:0,g:0},ds=new er,yM=new be;function EM(n,t,e,i,r,s,a){const o=new Xt(0);let l=s===!0?0:1,c,h,u=null,f=0,p=null;function g(b){let E=b.isScene===!0?b.background:null;return E&&E.isTexture&&(E=(b.backgroundBlurriness>0?e:t).get(E)),E}function _(b){let E=!1;const y=g(b);y===null?d(o,l):y&&y.isColor&&(d(y,1),E=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,E){const y=g(E);y&&(y.isCubeTexture||y.mapping===Cc)?(h===void 0&&(h=new zn(new rl(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ra(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ds.copy(E.backgroundRotation),ds.x*=-1,ds.y*=-1,ds.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(yM.makeRotationFromEuler(ds)),h.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ue,(u!==y||f!==y.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new zn(new sl(2,2),new cn({name:"BackgroundMaterial",uniforms:Ra(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:$r,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||f!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=y,f=y.version,p=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,E){b.getRGB(Fl,q_(n)),i.buffers.color.setClear(Fl.r,Fl.g,Fl.b,E,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,E=1){o.set(b),l=E,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:_,addToRenderList:m,dispose:S}}function bM(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(T,P,k,F,W){let H=!1;const V=u(F,k,P);s!==V&&(s=V,c(s.object)),H=p(T,F,k,W),H&&g(T,F,k,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,E(T,P,k,F),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return n.createVertexArray()}function c(T){return n.bindVertexArray(T)}function h(T){return n.deleteVertexArray(T)}function u(T,P,k){const F=k.wireframe===!0;let W=i[T.id];W===void 0&&(W={},i[T.id]=W);let H=W[P.id];H===void 0&&(H={},W[P.id]=H);let V=H[F];return V===void 0&&(V=f(l()),H[F]=V),V}function f(T){const P=[],k=[],F=[];for(let W=0;W<e;W++)P[W]=0,k[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:k,attributeDivisors:F,object:T,attributes:{},index:null}}function p(T,P,k,F){const W=s.attributes,H=P.attributes;let V=0;const B=k.getAttributes();for(const j in B)if(B[j].location>=0){const et=W[j];let ct=H[j];if(ct===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(ct=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(ct=T.instanceColor)),et===void 0||et.attribute!==ct||ct&&et.data!==ct.data)return!0;V++}return s.attributesNum!==V||s.index!==F}function g(T,P,k,F){const W={},H=P.attributes;let V=0;const B=k.getAttributes();for(const j in B)if(B[j].location>=0){let et=H[j];et===void 0&&(j==="instanceMatrix"&&T.instanceMatrix&&(et=T.instanceMatrix),j==="instanceColor"&&T.instanceColor&&(et=T.instanceColor));const ct={};ct.attribute=et,et&&et.data&&(ct.data=et.data),W[j]=ct,V++}s.attributes=W,s.attributesNum=V,s.index=F}function _(){const T=s.newAttributes;for(let P=0,k=T.length;P<k;P++)T[P]=0}function m(T){d(T,0)}function d(T,P){const k=s.newAttributes,F=s.enabledAttributes,W=s.attributeDivisors;k[T]=1,F[T]===0&&(n.enableVertexAttribArray(T),F[T]=1),W[T]!==P&&(n.vertexAttribDivisor(T,P),W[T]=P)}function S(){const T=s.newAttributes,P=s.enabledAttributes;for(let k=0,F=P.length;k<F;k++)P[k]!==T[k]&&(n.disableVertexAttribArray(k),P[k]=0)}function b(T,P,k,F,W,H,V){V===!0?n.vertexAttribIPointer(T,P,k,W,H):n.vertexAttribPointer(T,P,k,F,W,H)}function E(T,P,k,F){_();const W=F.attributes,H=k.getAttributes(),V=P.defaultAttributeValues;for(const B in H){const j=H[B];if(j.location>=0){let ot=W[B];if(ot===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(ot=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(ot=T.instanceColor)),ot!==void 0){const et=ot.normalized,ct=ot.itemSize,Ut=t.get(ot);if(Ut===void 0)continue;const Ot=Ut.buffer,Zt=Ut.type,$t=Ut.bytesPerElement,q=Zt===n.INT||Zt===n.UNSIGNED_INT||ot.gpuType===Qf;if(ot.isInterleavedBufferAttribute){const $=ot.data,mt=$.stride,Bt=ot.offset;if($.isInstancedInterleavedBuffer){for(let vt=0;vt<j.locationSize;vt++)d(j.location+vt,$.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let vt=0;vt<j.locationSize;vt++)m(j.location+vt);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let vt=0;vt<j.locationSize;vt++)b(j.location+vt,ct/j.locationSize,Zt,et,mt*$t,(Bt+ct/j.locationSize*vt)*$t,q)}else{if(ot.isInstancedBufferAttribute){for(let $=0;$<j.locationSize;$++)d(j.location+$,ot.meshPerAttribute);T.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let $=0;$<j.locationSize;$++)m(j.location+$);n.bindBuffer(n.ARRAY_BUFFER,Ot);for(let $=0;$<j.locationSize;$++)b(j.location+$,ct/j.locationSize,Zt,et,ct*$t,ct/j.locationSize*$*$t,q)}}else if(V!==void 0){const et=V[B];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(j.location,et);break;case 3:n.vertexAttrib3fv(j.location,et);break;case 4:n.vertexAttrib4fv(j.location,et);break;default:n.vertexAttrib1fv(j.location,et)}}}}S()}function y(){R();for(const T in i){const P=i[T];for(const k in P){const F=P[k];for(const W in F)h(F[W].object),delete F[W];delete P[k]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const P=i[T.id];for(const k in P){const F=P[k];for(const W in F)h(F[W].object),delete F[W];delete P[k]}delete i[T.id]}function w(T){for(const P in i){const k=i[P];if(k[T.id]===void 0)continue;const F=k[T.id];for(const W in F)h(F[W].object),delete F[W];delete k[T.id]}}function R(){x(),a=!0,s!==r&&(s=r,c(s.object))}function x(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:x,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function TM(n,t,e){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),e.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function AM(n,t,e,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Di&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const R=w===ii&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Qn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!R)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(Ft("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:b,maxFragmentUniforms:E,maxSamples:y,samples:A}}function wM(n){const t=this;let e=null,i=0,r=!1,s=!1;const a=new Or,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||i!==0||r;return r=f,i=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const S=s?0:i,b=S*4;let E=d.clippingState||null;l.value=E,E=h(g,f,b,p);for(let y=0;y!==b;++y)E[y]=e[y];d.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,E=p;b!==_;++b,E+=4)a.copy(u[b]).applyMatrix4(S,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function CM(n){let t=new WeakMap;function e(a,o){return o===Ru?a.mapping=Us:o===Pu&&(a.mapping=Aa),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ru||o===Pu)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Z_(l.height);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}const Vr=4,Am=[.125,.215,.35,.446,.526,.582],Ms=20,RM=256,_o=new dd,wm=new Xt;let zh=null,Vh=0,Gh=0,Hh=!1;const PM=new N;class Cm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,s={}){const{size:a=256,position:o=PM}=s;zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zh,Vh,Gh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,aa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Aa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:ii,format:Di,colorSpace:Ca,depthBuffer:!1},r=Rm(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rm(t,e,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DM(s)),this._blurMaterial=IM(s,t,e),this._ggxMaterial=LM(s,t,e)}return r}_compileMaterial(t){const e=new zn(new Ii,t);this._renderer.compile(e,_o)}_sceneToCubeUV(t,e,i,r,s){const l=new Jn(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(wm),u.toneMapping=Ji,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new zn(new rl,new il({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let d=!1;const S=t.background;S?S.isColor&&(m.color.copy(S),t.background=null,d=!0):(m.color.copy(wm),d=!0);for(let b=0;b<6;b++){const E=b%3;E===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[b],s.y,s.z)):E===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[b]));const y=this._cubeSize;aa(r,E*y,b>2?y:0,y,y),u.setRenderTarget(r),d&&u.render(_,l),u.render(t,l)}u.toneMapping=p,u.autoClear=f,t.background=S}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===Us||t.mapping===Aa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;aa(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,_o)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=i}_applyGGXFilter(t,e,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,p=u*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Vr?i-g+Vr:0),d=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=p,l.mipInt.value=g-e,aa(s,m,d,3*_,2*_),r.setRenderTarget(s),r.render(o,_o),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,aa(t,m,d,3*_,2*_),r.setRenderTarget(t),r.render(o,_o)}_blur(t,e,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,r,"latitudinal",s),this._halfBlur(a,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ie("blur direction must be either latitudinal or longitudinal!");const h=3,u=this._lodMeshes[r];u.material=c;const f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),_=s/g,m=isFinite(s)?1+Math.floor(h*_):Ms;m>Ms&&Ft(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const d=[];let S=0;for(let w=0;w<Ms;++w){const R=w/_,x=Math.exp(-R*R/2);d.push(x),w===0?S+=x:w<m&&(S+=2*x)}for(let w=0;w<d.length;w++)d[w]=d[w]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-i;const E=this._sizeLods[r],y=3*E*(r>b-Vr?r-b+Vr:0),A=4*(this._cubeSize-E);aa(e,y,A,3*E,2*E),l.setRenderTarget(e),l.render(u,_o)}}function DM(n){const t=[],e=[],i=[];let r=n;const s=n-Vr+1+Am.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Vr?l=Am[a-n+Vr-1]:a===0&&(l=0),e.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),b=new Float32Array(m*g*p),E=new Float32Array(d*g*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,R=A>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];S.set(x,_*g*A),b.set(f,m*g*A);const T=[A,A,A,A,A,A];E.set(T,d*g*A)}const y=new Ii;y.setAttribute("position",new Li(S,_)),y.setAttribute("uv",new Li(b,m)),y.setAttribute("faceIndex",new Li(E,d)),i.push(new zn(y,null)),r>Vr&&r--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Rm(n,t,e){const i=new In(n,t,e);return i.texture.mapping=Cc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function aa(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function LM(n,t,e){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:RM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function IM(n,t,e){const i=new Float32Array(Ms),r=new N(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Pm(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Dm(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UM(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ru||l===Pu,h=l===Us||l===Aa;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Cm(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Cm(n)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function FM(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const r=n.getExtension(i);return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const r=e(i);return r===null&&Bo("WebGLRenderer: "+i+" extension not supported."),r}}}function NM(n,t,e,i){const r={},s=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)t.update(f[p],n.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let b=0,E=S.length;b<E;b+=3){const y=S[b+0],A=S[b+1],w=S[b+2];f.push(y,A,A,w,w,y)}}else if(g!==void 0){const S=g.array;_=g.version;for(let b=0,E=S.length/3-1;b<E;b+=3){const y=b+0,A=b+1,w=b+2;f.push(y,A,A,w,w,y)}}else return;const m=new(V_(f)?Y_:X_)(f,1);m.version=_;const d=s.get(u);d&&t.remove(d),s.set(u,m)}function h(u){const f=s.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function OM(n,t,e){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){n.drawElements(i,p,s,f*a),e.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,f*a,g),e.update(p,i,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,i,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*_[S];e.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function BM(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(s/3);break;case n.LINES:e.lines+=o*(s/2);break;case n.LINE_STRIP:e.lines+=o*(s-1);break;case n.LINE_LOOP:e.lines+=o*s;break;case n.POINTS:e.points+=o*s;break;default:ie("WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function kM(n,t,e){const i=new WeakMap,r=new Be;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let T=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",T)};var p=T;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),m===!0&&(E=3);let y=o.attributes.position.count*E,A=1;y>t.maxTextureSize&&(A=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*A*4*u),R=new G_(w,y,A,u);R.type=Pi,R.needsUpdate=!0;const x=E*4;for(let P=0;P<u;P++){const k=d[P],F=S[P],W=b[P],H=y*A*4*P;for(let V=0;V<k.count;V++){const B=V*x;g===!0&&(r.fromBufferAttribute(k,V),w[H+B+0]=r.x,w[H+B+1]=r.y,w[H+B+2]=r.z,w[H+B+3]=0),_===!0&&(r.fromBufferAttribute(F,V),w[H+B+4]=r.x,w[H+B+5]=r.y,w[H+B+6]=r.z,w[H+B+7]=0),m===!0&&(r.fromBufferAttribute(W,V),w[H+B+8]=r.x,w[H+B+9]=r.y,w[H+B+10]=r.z,w[H+B+11]=W.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new Rt(y,A)},i.set(o,f),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function zM(n,t,e,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const VM={[A_]:"LINEAR_TONE_MAPPING",[w_]:"REINHARD_TONE_MAPPING",[C_]:"CINEON_TONE_MAPPING",[R_]:"ACES_FILMIC_TONE_MAPPING",[D_]:"AGX_TONE_MAPPING",[L_]:"NEUTRAL_TONE_MAPPING",[P_]:"CUSTOM_TONE_MAPPING"};function GM(n,t,e,i,r){const s=new In(t,e,{type:n,depthBuffer:i,stencilBuffer:r}),a=new In(t,e,{type:ii,depthBuffer:!1,stencilBuffer:!1}),o=new Ii;o.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Un([0,2,0,0,2,0],2));const l=new w2({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new zn(o,l),h=new dd(-1,1,1,-1,0,1);let u=null,f=null,p=!1,g,_=null,m=[],d=!1;this.setSize=function(S,b){s.setSize(S,b),a.setSize(S,b);for(let E=0;E<m.length;E++){const y=m[E];y.setSize&&y.setSize(S,b)}},this.setEffects=function(S){m=S,d=m.length>0&&m[0].isRenderPass===!0;const b=s.width,E=s.height;for(let y=0;y<m.length;y++){const A=m[y];A.setSize&&A.setSize(b,E)}},this.begin=function(S,b){if(p||S.toneMapping===Ji&&m.length===0)return!1;if(_=b,b!==null){const E=b.width,y=b.height;(s.width!==E||s.height!==y)&&this.setSize(E,y)}return d===!1&&S.setRenderTarget(s),g=S.toneMapping,S.toneMapping=Ji,!0},this.hasRenderPass=function(){return d},this.end=function(S,b){S.toneMapping=g,p=!0;let E=s,y=a;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(S,y,E,b),w.needsSwap!==!1)){const R=E;E=y,y=R}}if(u!==S.outputColorSpace||f!==S.toneMapping){u=S.outputColorSpace,f=S.toneMapping,l.defines={},Qt.getTransfer(u)===ue&&(l.defines.SRGB_TRANSFER="");const A=VM[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,S.setRenderTarget(_),S.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const eg=new _n,df=new ko(1,1),ng=new G_,ig=new r2,rg=new K_,Lm=[],Im=[],Um=new Float32Array(16),Fm=new Float32Array(9),Nm=new Float32Array(4);function Za(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Lm[r];if(s===void 0&&(s=new Float32Array(r),Lm[r]=s),t!==0){i.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(s,o)}return s}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function tn(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Dc(n,t){let e=Im[t];e===void 0&&(e=new Int32Array(t),Im[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function HM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function WM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),tn(e,t)}}function XM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),tn(e,t)}}function YM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),tn(e,t)}}function qM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Nm.set(i),n.uniformMatrix2fv(this.addr,!1,Nm),tn(e,i)}}function jM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Fm.set(i),n.uniformMatrix3fv(this.addr,!1,Fm),tn(e,i)}}function KM(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),tn(e,t)}else{if(Qe(e,i))return;Um.set(i),n.uniformMatrix4fv(this.addr,!1,Um),tn(e,i)}}function ZM(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $M(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),tn(e,t)}}function JM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),tn(e,t)}}function QM(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),tn(e,t)}}function ty(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function ey(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),tn(e,t)}}function ny(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),tn(e,t)}}function iy(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),tn(e,t)}}function ry(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(df.compareFunction=e.isReversedDepthBuffer()?od:ad,s=df):s=eg,e.setTexture2D(t||s,r)}function sy(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||ig,r)}function ay(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||rg,r)}function oy(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||ng,r)}function ly(n){switch(n){case 5126:return HM;case 35664:return WM;case 35665:return XM;case 35666:return YM;case 35674:return qM;case 35675:return jM;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return $M;case 35668:case 35672:return JM;case 35669:case 35673:return QM;case 5125:return ty;case 36294:return ey;case 36295:return ny;case 36296:return iy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return oy}}function cy(n,t){n.uniform1fv(this.addr,t)}function hy(n,t){const e=Za(t,this.size,2);n.uniform2fv(this.addr,e)}function uy(n,t){const e=Za(t,this.size,3);n.uniform3fv(this.addr,e)}function fy(n,t){const e=Za(t,this.size,4);n.uniform4fv(this.addr,e)}function dy(n,t){const e=Za(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function py(n,t){const e=Za(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function my(n,t){const e=Za(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function _y(n,t){n.uniform1iv(this.addr,t)}function gy(n,t){n.uniform2iv(this.addr,t)}function xy(n,t){n.uniform3iv(this.addr,t)}function vy(n,t){n.uniform4iv(this.addr,t)}function Sy(n,t){n.uniform1uiv(this.addr,t)}function My(n,t){n.uniform2uiv(this.addr,t)}function yy(n,t){n.uniform3uiv(this.addr,t)}function Ey(n,t){n.uniform4uiv(this.addr,t)}function by(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=df:a=eg;for(let o=0;o!==r;++o)e.setTexture2D(t[o]||a,s[o])}function Ty(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||ig,s[a])}function Ay(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||rg,s[a])}function wy(n,t,e){const i=this.cache,r=t.length,s=Dc(e,r);Qe(i,s)||(n.uniform1iv(this.addr,s),tn(i,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||ng,s[a])}function Cy(n){switch(n){case 5126:return cy;case 35664:return hy;case 35665:return uy;case 35666:return fy;case 35674:return dy;case 35675:return py;case 35676:return my;case 5124:case 35670:return _y;case 35667:case 35671:return gy;case 35668:case 35672:return xy;case 35669:case 35673:return vy;case 5125:return Sy;case 36294:return My;case 36295:return yy;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return by;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return wy}}class Ry{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ly(e.type)}}class Py{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cy(e.type)}}class Dy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],i)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function Om(n,t){n.seq.push(t),n.map[t.id]=t}function Ly(n,t,e){const i=n.name,r=i.length;for(Wh.lastIndex=0;;){const s=Wh.exec(i),a=Wh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Om(e,c===void 0?new Ry(o,n,t):new Py(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new Dy(o),Om(e,u)),e=u}}}class $l{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Ly(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&i.push(a)}return i}}function Bm(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Iy=37297;let Uy=0;function Fy(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const km=new kt;function Ny(n){Qt._getMatrix(km,Qt.workingColorSpace,n);const t=`mat3( ${km.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(n)){case lc:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function zm(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=(n.getShaderInfoLog(t)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Fy(n.getShaderSource(t),o)}else return s}function Oy(n,t){const e=Ny(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const By={[A_]:"Linear",[w_]:"Reinhard",[C_]:"Cineon",[R_]:"ACESFilmic",[D_]:"AgX",[L_]:"Neutral",[P_]:"Custom"};function ky(n,t){const e=By[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nl=new N;function zy(){Qt.getLuminanceCoefficients(Nl);const n=Nl.x.toFixed(4),t=Nl.y.toFixed(4),e=Nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Eo).join(`
`)}function Gy(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Hy(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function Eo(n){return n!==""}function Vm(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gm(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function pf(n){return n.replace(Wy,Yy)}const Xy=new Map;function Yy(n,t){let e=zt[t];if(e===void 0){const i=Xy.get(t);if(i!==void 0)e=zt[i],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return pf(e)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hm(n){return n.replace(qy,jy)}function jy(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wm(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}const Ky={[Xl]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function Zy(n){return Ky[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $y={[Us]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE",[Cc]:"ENVMAP_TYPE_CUBE_UV"};function Jy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":$y[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qy={[Aa]:"ENVMAP_MODE_REFRACTION"};function tE(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Qy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eE={[T_]:"ENVMAP_BLENDING_MULTIPLY",[Bv]:"ENVMAP_BLENDING_MIX",[kv]:"ENVMAP_BLENDING_ADD"};function nE(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":eE[n.combine]||"ENVMAP_BLENDING_NONE"}function iE(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function rE(n,t,e,i){const r=n.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Zy(e),c=Jy(e),h=tE(e),u=nE(e),f=iE(e),p=Vy(e),g=Gy(s),_=r.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Eo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Eo).join(`
`),d.length>0&&(d+=`
`)):(m=[Wm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Eo).join(`
`),d=[Wm(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?zt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?ky("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,Oy("linearToOutputTexel",e.outputColorSpace),zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Eo).join(`
`)),a=pf(a),a=Vm(a,e),a=Gm(a,e),o=pf(o),o=Vm(o,e),o=Gm(o,e),a=Hm(a),o=Hm(o),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=S+m+a,E=S+d+o,y=Bm(r,r.VERTEX_SHADER,b),A=Bm(r,r.FRAGMENT_SHADER,E);r.attachShader(_,y),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(P){if(n.debug.checkShaderErrors){const k=r.getProgramInfoLog(_)||"",F=r.getShaderInfoLog(y)||"",W=r.getShaderInfoLog(A)||"",H=k.trim(),V=F.trim(),B=W.trim();let j=!0,ot=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,y,A);else{const et=zm(r,y,"vertex"),ct=zm(r,A,"fragment");ie("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+et+`
`+ct)}else H!==""?Ft("WebGLProgram: Program Info Log:",H):(V===""||B==="")&&(ot=!1);ot&&(P.diagnostics={runnable:j,programLog:H,vertexShader:{log:V,prefix:m},fragmentShader:{log:B,prefix:d}})}r.deleteShader(y),r.deleteShader(A),R=new $l(r,_),x=Hy(r,_)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let T=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(_,Iy)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Uy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}let sE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new oE(t),e.set(t,i)),i}}class oE{constructor(t){this.id=sE++,this.code=t,this.usedTimes=0}}function lE(n,t,e,i,r,s,a){const o=new cd,l=new aE,c=new Set,h=[],u=new Map,f=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,T,P,k,F){const W=k.fog,H=F.geometry,V=x.isMeshStandardMaterial?k.environment:null,B=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),j=B&&B.mapping===Cc?B.image.height:null,ot=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&Ft("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const et=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ct=et!==void 0?et.length:0;let Ut=0;H.morphAttributes.position!==void 0&&(Ut=1),H.morphAttributes.normal!==void 0&&(Ut=2),H.morphAttributes.color!==void 0&&(Ut=3);let Ot,Zt,$t,q;if(ot){const ce=Wi[ot];Ot=ce.vertexShader,Zt=ce.fragmentShader}else Ot=x.vertexShader,Zt=x.fragmentShader,l.update(x),$t=l.getVertexShaderID(x),q=l.getFragmentShaderID(x);const $=n.getRenderTarget(),mt=n.state.buffers.depth.getReversed(),Bt=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,ee=!!x.map,en=!!x.matcap,Jt=!!B,le=!!x.aoMap,pe=!!x.lightMap,Vt=!!x.bumpMap,We=!!x.normalMap,D=!!x.displacementMap,Xe=!!x.emissiveMap,se=!!x.metalnessMap,ve=!!x.roughnessMap,Mt=x.anisotropy>0,C=x.clearcoat>0,v=x.dispersion>0,I=x.iridescence>0,Y=x.sheen>0,Z=x.transmission>0,X=Mt&&!!x.anisotropyMap,bt=C&&!!x.clearcoatMap,it=C&&!!x.clearcoatNormalMap,St=C&&!!x.clearcoatRoughnessMap,It=I&&!!x.iridescenceMap,Q=I&&!!x.iridescenceThicknessMap,st=Y&&!!x.sheenColorMap,gt=Y&&!!x.sheenRoughnessMap,yt=!!x.specularMap,rt=!!x.specularColorMap,Gt=!!x.specularIntensityMap,L=Z&&!!x.transmissionMap,ut=Z&&!!x.thicknessMap,tt=!!x.gradientMap,ft=!!x.alphaMap,J=x.alphaTest>0,K=!!x.alphaHash,nt=!!x.extensions;let Nt=Ji;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const Se={shaderID:ot,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Zt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:q,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&F.instanceColor!==null,instancingMorph:Bt&&F.morphTexture!==null,outputColorSpace:$===null?n.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Ca,alphaToCoverage:!!x.alphaToCoverage,map:ee,matcap:en,envMap:Jt,envMapMode:Jt&&B.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:pe,bumpMap:Vt,normalMap:We,displacementMap:D,emissiveMap:Xe,normalMapObjectSpace:We&&x.normalMapType===Gv,normalMapTangentSpace:We&&x.normalMapType===z_,metalnessMap:se,roughnessMap:ve,anisotropy:Mt,anisotropyMap:X,clearcoat:C,clearcoatMap:bt,clearcoatNormalMap:it,clearcoatRoughnessMap:St,dispersion:v,iridescence:I,iridescenceMap:It,iridescenceThicknessMap:Q,sheen:Y,sheenColorMap:st,sheenRoughnessMap:gt,specularMap:yt,specularColorMap:rt,specularIntensityMap:Gt,transmission:Z,transmissionMap:L,thicknessMap:ut,gradientMap:tt,opaque:x.transparent===!1&&x.blending===_a&&x.alphaToCoverage===!1,alphaMap:ft,alphaTest:J,alphaHash:K,combine:x.combine,mapUv:ee&&_(x.map.channel),aoMapUv:le&&_(x.aoMap.channel),lightMapUv:pe&&_(x.lightMap.channel),bumpMapUv:Vt&&_(x.bumpMap.channel),normalMapUv:We&&_(x.normalMap.channel),displacementMapUv:D&&_(x.displacementMap.channel),emissiveMapUv:Xe&&_(x.emissiveMap.channel),metalnessMapUv:se&&_(x.metalnessMap.channel),roughnessMapUv:ve&&_(x.roughnessMap.channel),anisotropyMapUv:X&&_(x.anisotropyMap.channel),clearcoatMapUv:bt&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:it&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:It&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:st&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&_(x.sheenRoughnessMap.channel),specularMapUv:yt&&_(x.specularMap.channel),specularColorMapUv:rt&&_(x.specularColorMap.channel),specularIntensityMapUv:Gt&&_(x.specularIntensityMap.channel),transmissionMapUv:L&&_(x.transmissionMap.channel),thicknessMapUv:ut&&_(x.thicknessMap.channel),alphaMapUv:ft&&_(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(We||Mt),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!H.attributes.uv&&(ee||ft),fog:!!W,useFog:x.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:mt,skinning:F.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Ut,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:ee&&x.map.isVideoTexture===!0&&Qt.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:Xe&&x.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Yi,flipSided:x.side===Ln,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:nt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&x.extensions.multiDraw===!0||vt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Se.vertexUv1s=c.has(1),Se.vertexUv2s=c.has(2),Se.vertexUv3s=c.has(3),c.clear(),Se}function d(x){const T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(const P in x.defines)T.push(P),T.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(S(T,x),b(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function S(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),x.push(o.mask)}function E(x){const T=g[x.type];let P;if(T){const k=Wi[T];P=hc.clone(k.uniforms)}else P=x.uniforms;return P}function y(x,T){let P=u.get(T);return P!==void 0?++P.usedTimes:(P=new rE(n,T,x,s),h.push(P),u.set(T,P)),P}function A(x){if(--x.usedTimes===0){const T=h.indexOf(x);h[T]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:E,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:R}}function cE(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:t,get:e,remove:i,update:r,dispose:s}}function hE(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Xm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Ym(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function a(u,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||hE),i.length>1&&i.sort(f||Xm),r.length>1&&r.sort(f||Xm)}function h(){for(let u=t,f=n.length;u<f;u++){const p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function uE(){let n=new WeakMap;function t(i,r){const s=n.get(i);let a;return s===void 0?(a=new Ym,n.set(i,[a])):r>=s.length?(a=new Ym,s.push(a)):a=s[r],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function fE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new Xt};break;case"SpotLight":e={position:new N,direction:new N,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new N,halfWidth:new N,halfHeight:new N};break}return n[t.id]=e,e}}}function dE(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let pE=0;function mE(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function _E(n){const t=new fE,e=dE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new be,a=new be;function o(c){let h=0,u=0,f=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,S=0,b=0,E=0,y=0,A=0,w=0;c.sort(mE);for(let x=0,T=c.length;x<T;x++){const P=c[x],k=P.color,F=P.intensity,W=P.distance;let H=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===wa?H=P.shadow.map.texture:H=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=k.r*F,u+=k.g*F,f+=k.b*F;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],F);w++}else if(P.isDirectionalLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const B=P.shadow,j=e.get(P);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.directionalShadow[p]=j,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=P.shadow.matrix,S++}i.directional[p]=V,p++}else if(P.isSpotLight){const V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(k).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[_]=V;const B=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,B.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[_]=B.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=H,E++}_++}else if(P.isRectAreaLight){const V=t.get(P);V.color.copy(k).multiplyScalar(F),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=V,m++}else if(P.isPointLight){const V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){const B=P.shadow,j=e.get(P);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=H,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=V,g++}else if(P.isHemisphereLight){const V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(F),V.groundColor.copy(P.groundColor).multiplyScalar(F),i.hemi[d]=V,d++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==S||R.numPointShadows!==b||R.numSpotShadows!==E||R.numSpotMaps!==y||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=E+y-A,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=S,R.numPointShadows=b,R.numSpotShadows=E,R.numSpotMaps=y,R.numLightProbes=w,i.version=pE++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,S=c.length;d<S;d++){const b=c[d];if(b.isDirectionalLight){const E=i.directional[u];E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),u++}else if(b.isSpotLight){const E=i.spot[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function qm(n){const t=new _E(n),e=[],i=[];function r(h){c.camera=h,e.length=0,i.length=0}function s(h){e.push(h)}function a(h){i.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gE(n){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new qm(n),t.set(r,[o])):s>=a.length?(o=new qm(n),a.push(o)):o=a[s],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`,SE=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],ME=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],jm=new be,go=new N,Xh=new N;function yE(n,t,e){let i=new ud;const r=new Rt,s=new Rt,a=new Be,o=new C2,l=new R2,c={},h=e.maxTextureSize,u={[$r]:Ln,[Ln]:$r,[Yi]:Yi},f=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:xE,fragmentShader:vE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ii;g.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new zn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xl;let d=this.type;this.render=function(A,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===vv&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Xl);const x=n.getRenderTarget(),T=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),k=n.state;k.setBlending($i),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=d!==this.type;F&&w.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(H=>H.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,H=A.length;W<H;W++){const V=A[W],B=V.shadow;if(B===void 0){Ft("WebGLShadowMap:",V,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const j=B.getFrameExtents();if(r.multiply(j),s.copy(B.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/j.x),r.x=s.x*j.x,B.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/j.y),r.y=s.y*j.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Mo){if(V.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new In(r.x,r.y,{format:wa,type:ii,minFilter:mn,magFilter:mn,generateMipmaps:!1}),B.map.texture.name=V.name+".shadowMap",B.map.depthTexture=new ko(r.x,r.y,Pi),B.map.depthTexture.name=V.name+".shadowMapDepth",B.map.depthTexture.format=br,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln}else{V.isPointLight?(B.map=new Z_(r.x),B.map.depthTexture=new A2(r.x,tr)):(B.map=new In(r.x,r.y),B.map.depthTexture=new ko(r.x,r.y,tr)),B.map.depthTexture.name=V.name+".shadowMap",B.map.depthTexture.format=br;const et=n.state.buffers.depth.getReversed();this.type===Xl?(B.map.depthTexture.compareFunction=et?od:ad,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=ln,B.map.depthTexture.magFilter=ln)}B.camera.updateProjectionMatrix()}const ot=B.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<ot;et++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,et),n.clear();else{et===0&&(n.setRenderTarget(B.map),n.clear());const ct=B.getViewport(et);a.set(s.x*ct.x,s.y*ct.y,s.x*ct.z,s.y*ct.w),k.viewport(a)}if(V.isPointLight){const ct=B.camera,Ut=B.matrix,Ot=V.distance||ct.far;Ot!==ct.far&&(ct.far=Ot,ct.updateProjectionMatrix()),go.setFromMatrixPosition(V.matrixWorld),ct.position.copy(go),Xh.copy(ct.position),Xh.add(SE[et]),ct.up.copy(ME[et]),ct.lookAt(Xh),ct.updateMatrixWorld(),Ut.makeTranslation(-go.x,-go.y,-go.z),jm.multiplyMatrices(ct.projectionMatrix,ct.matrixWorldInverse),B._frustum.setFromProjectionMatrix(jm,ct.coordinateSystem,ct.reversedDepth)}else B.updateMatrices(V);i=B.getFrustum(),E(w,R,B.camera,V,this.type)}B.isPointLightShadow!==!0&&this.type===Mo&&S(B,R),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(x,T,P)};function S(A,w){const R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new In(r.x,r.y,{format:wa,type:ii})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(w,null,R,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(w,null,R,p,_,null)}function b(A,w,R,x){let T=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)T=P;else if(T=R.isPointLight===!0?l:o,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const k=T.uuid,F=w.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let H=W[F];H===void 0&&(H=T.clone(),W[F]=H,w.addEventListener("dispose",y)),T=H}if(T.visible=w.visible,T.wireframe=w.wireframe,x===Mo?T.side=w.shadowSide!==null?w.shadowSide:w.side:T.side=w.shadowSide!==null?w.shadowSide:u[w.side],T.alphaMap=w.alphaMap,T.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,T.map=w.map,T.clipShadows=w.clipShadows,T.clippingPlanes=w.clippingPlanes,T.clipIntersection=w.clipIntersection,T.displacementMap=w.displacementMap,T.displacementScale=w.displacementScale,T.displacementBias=w.displacementBias,T.wireframeLinewidth=w.wireframeLinewidth,T.linewidth=w.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const k=n.properties.get(T);k.light=R}return T}function E(A,w,R,x,T){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===Mo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=t.update(A),W=A.material;if(Array.isArray(W)){const H=F.groups;for(let V=0,B=H.length;V<B;V++){const j=H[V],ot=W[j.materialIndex];if(ot&&ot.visible){const et=b(A,ot,x,T);A.onBeforeShadow(n,A,w,R,F,et,j),n.renderBufferDirect(R,null,F,et,A,j),A.onAfterShadow(n,A,w,R,F,et,j)}}}else if(W.visible){const H=b(A,W,x,T);A.onBeforeShadow(n,A,w,R,F,H,null),n.renderBufferDirect(R,null,F,H,A,null),A.onAfterShadow(n,A,w,R,F,H,null)}}const k=A.children;for(let F=0,W=k.length;F<W;F++)E(k[F],w,R,x,T)}function y(A){A.target.removeEventListener("dispose",y);for(const R in c){const x=c[R],T=A.target.uuid;T in x&&(x[T].dispose(),delete x[T])}}}const EE={[yu]:Eu,[bu]:wu,[Tu]:Cu,[Ta]:Au,[Eu]:yu,[wu]:bu,[Cu]:Tu,[Au]:Ta};function bE(n,t){function e(){let L=!1;const ut=new Be;let tt=null;const ft=new Be(0,0,0,0);return{setMask:function(J){tt!==J&&!L&&(n.colorMask(J,J,J,J),tt=J)},setLocked:function(J){L=J},setClear:function(J,K,nt,Nt,Se){Se===!0&&(J*=Nt,K*=Nt,nt*=Nt),ut.set(J,K,nt,Nt),ft.equals(ut)===!1&&(n.clearColor(J,K,nt,Nt),ft.copy(ut))},reset:function(){L=!1,tt=null,ft.set(-1,0,0,0)}}}function i(){let L=!1,ut=!1,tt=null,ft=null,J=null;return{setReversed:function(K){if(ut!==K){const nt=t.get("EXT_clip_control");K?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),ut=K;const Nt=J;J=null,this.setClear(Nt)}},getReversed:function(){return ut},setTest:function(K){K?$(n.DEPTH_TEST):mt(n.DEPTH_TEST)},setMask:function(K){tt!==K&&!L&&(n.depthMask(K),tt=K)},setFunc:function(K){if(ut&&(K=EE[K]),ft!==K){switch(K){case yu:n.depthFunc(n.NEVER);break;case Eu:n.depthFunc(n.ALWAYS);break;case bu:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case Tu:n.depthFunc(n.EQUAL);break;case Au:n.depthFunc(n.GEQUAL);break;case wu:n.depthFunc(n.GREATER);break;case Cu:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=K}},setLocked:function(K){L=K},setClear:function(K){J!==K&&(ut&&(K=1-K),n.clearDepth(K),J=K)},reset:function(){L=!1,tt=null,ft=null,J=null,ut=!1}}}function r(){let L=!1,ut=null,tt=null,ft=null,J=null,K=null,nt=null,Nt=null,Se=null;return{setTest:function(ce){L||(ce?$(n.STENCIL_TEST):mt(n.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!L&&(n.stencilMask(ce),ut=ce)},setFunc:function(ce,Bi,or){(tt!==ce||ft!==Bi||J!==or)&&(n.stencilFunc(ce,Bi,or),tt=ce,ft=Bi,J=or)},setOp:function(ce,Bi,or){(K!==ce||nt!==Bi||Nt!==or)&&(n.stencilOp(ce,Bi,or),K=ce,nt=Bi,Nt=or)},setLocked:function(ce){L=ce},setClear:function(ce){Se!==ce&&(n.clearStencil(ce),Se=ce)},reset:function(){L=!1,ut=null,tt=null,ft=null,J=null,K=null,nt=null,Nt=null,Se=null}}}const s=new e,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,b=null,E=null,y=null,A=null,w=new Xt(0,0,0),R=0,x=!1,T=null,P=null,k=null,F=null,W=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,B=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=B>=2);let ot=null,et={};const ct=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),Ot=new Be().fromArray(ct),Zt=new Be().fromArray(Ut);function $t(L,ut,tt,ft){const J=new Uint8Array(4),K=n.createTexture();n.bindTexture(L,K),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<tt;nt++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,J):n.texImage2D(ut+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,J);return K}const q={};q[n.TEXTURE_2D]=$t(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=$t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=$t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=$t(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(n.DEPTH_TEST),a.setFunc(Ta),Vt(!1),We(Kp),$(n.CULL_FACE),le($i);function $(L){h[L]!==!0&&(n.enable(L),h[L]=!0)}function mt(L){h[L]!==!1&&(n.disable(L),h[L]=!1)}function Bt(L,ut){return u[L]!==ut?(n.bindFramebuffer(L,ut),u[L]=ut,L===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ut),L===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function vt(L,ut){let tt=p,ft=!1;if(L){tt=f.get(ut),tt===void 0&&(tt=[],f.set(ut,tt));const J=L.textures;if(tt.length!==J.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let K=0,nt=J.length;K<nt;K++)tt[K]=n.COLOR_ATTACHMENT0+K;tt.length=J.length,ft=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,ft=!0);ft&&n.drawBuffers(tt)}function ee(L){return g!==L?(n.useProgram(L),g=L,!0):!1}const en={[Ss]:n.FUNC_ADD,[Mv]:n.FUNC_SUBTRACT,[yv]:n.FUNC_REVERSE_SUBTRACT};en[Ev]=n.MIN,en[bv]=n.MAX;const Jt={[Tv]:n.ZERO,[Av]:n.ONE,[wv]:n.SRC_COLOR,[Su]:n.SRC_ALPHA,[Iv]:n.SRC_ALPHA_SATURATE,[Dv]:n.DST_COLOR,[Rv]:n.DST_ALPHA,[Cv]:n.ONE_MINUS_SRC_COLOR,[Mu]:n.ONE_MINUS_SRC_ALPHA,[Lv]:n.ONE_MINUS_DST_COLOR,[Pv]:n.ONE_MINUS_DST_ALPHA,[Uv]:n.CONSTANT_COLOR,[Fv]:n.ONE_MINUS_CONSTANT_COLOR,[Nv]:n.CONSTANT_ALPHA,[Ov]:n.ONE_MINUS_CONSTANT_ALPHA};function le(L,ut,tt,ft,J,K,nt,Nt,Se,ce){if(L===$i){_===!0&&(mt(n.BLEND),_=!1);return}if(_===!1&&($(n.BLEND),_=!0),L!==Sv){if(L!==m||ce!==x){if((d!==Ss||E!==Ss)&&(n.blendEquation(n.FUNC_ADD),d=Ss,E=Ss),ce)switch(L){case _a:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFunc(n.ONE,n.ONE);break;case Zp:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $p:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ie("WebGLState: Invalid blending: ",L);break}else switch(L){case _a:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case vu:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Zp:ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $p:ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ie("WebGLState: Invalid blending: ",L);break}S=null,b=null,y=null,A=null,w.set(0,0,0),R=0,m=L,x=ce}return}J=J||ut,K=K||tt,nt=nt||ft,(ut!==d||J!==E)&&(n.blendEquationSeparate(en[ut],en[J]),d=ut,E=J),(tt!==S||ft!==b||K!==y||nt!==A)&&(n.blendFuncSeparate(Jt[tt],Jt[ft],Jt[K],Jt[nt]),S=tt,b=ft,y=K,A=nt),(Nt.equals(w)===!1||Se!==R)&&(n.blendColor(Nt.r,Nt.g,Nt.b,Se),w.copy(Nt),R=Se),m=L,x=!1}function pe(L,ut){L.side===Yi?mt(n.CULL_FACE):$(n.CULL_FACE);let tt=L.side===Ln;ut&&(tt=!tt),Vt(tt),L.blending===_a&&L.transparent===!1?le($i):le(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const ft=L.stencilWrite;o.setTest(ft),ft&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?$(n.SAMPLE_ALPHA_TO_COVERAGE):mt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(L){T!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),T=L)}function We(L){L!==gv?($(n.CULL_FACE),L!==P&&(L===Kp?n.cullFace(n.BACK):L===xv?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):mt(n.CULL_FACE),P=L}function D(L){L!==k&&(V&&n.lineWidth(L),k=L)}function Xe(L,ut,tt){L?($(n.POLYGON_OFFSET_FILL),(F!==ut||W!==tt)&&(n.polygonOffset(ut,tt),F=ut,W=tt)):mt(n.POLYGON_OFFSET_FILL)}function se(L){L?$(n.SCISSOR_TEST):mt(n.SCISSOR_TEST)}function ve(L){L===void 0&&(L=n.TEXTURE0+H-1),ot!==L&&(n.activeTexture(L),ot=L)}function Mt(L,ut,tt){tt===void 0&&(ot===null?tt=n.TEXTURE0+H-1:tt=ot);let ft=et[tt];ft===void 0&&(ft={type:void 0,texture:void 0},et[tt]=ft),(ft.type!==L||ft.texture!==ut)&&(ot!==tt&&(n.activeTexture(tt),ot=tt),n.bindTexture(L,ut||q[L]),ft.type=L,ft.texture=ut)}function C(){const L=et[ot];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function v(){try{n.compressedTexImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function I(){try{n.compressedTexImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function Y(){try{n.texSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function Z(){try{n.texSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function bt(){try{n.compressedTexSubImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function it(){try{n.texStorage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function St(){try{n.texStorage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function It(){try{n.texImage2D(...arguments)}catch(L){ie("WebGLState:",L)}}function Q(){try{n.texImage3D(...arguments)}catch(L){ie("WebGLState:",L)}}function st(L){Ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),Ot.copy(L))}function gt(L){Zt.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Zt.copy(L))}function yt(L,ut){let tt=c.get(ut);tt===void 0&&(tt=new WeakMap,c.set(ut,tt));let ft=tt.get(L);ft===void 0&&(ft=n.getUniformBlockIndex(ut,L.name),tt.set(L,ft))}function rt(L,ut){const ft=c.get(ut).get(L);l.get(ut)!==ft&&(n.uniformBlockBinding(ut,ft,L.__bindingPointIndex),l.set(ut,ft))}function Gt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ot=null,et={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,b=null,E=null,y=null,A=null,w=new Xt(0,0,0),R=0,x=!1,T=null,P=null,k=null,F=null,W=null,Ot.set(0,0,n.canvas.width,n.canvas.height),Zt.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:mt,bindFramebuffer:Bt,drawBuffers:vt,useProgram:ee,setBlending:le,setMaterial:pe,setFlipSided:Vt,setCullFace:We,setLineWidth:D,setPolygonOffset:Xe,setScissorTest:se,activeTexture:ve,bindTexture:Mt,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:I,texImage2D:It,texImage3D:Q,updateUBOMapping:yt,uniformBlockBinding:rt,texStorage2D:it,texStorage3D:St,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:X,compressedTexSubImage3D:bt,scissor:st,viewport:gt,reset:Gt}}function TE(n,t,e,i,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return p?new OffscreenCanvas(C,v):Oo("canvas")}function _(C,v,I){let Y=1;const Z=Mt(C);if((Z.width>I||Z.height>I)&&(Y=I/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor(Y*Z.width),bt=Math.floor(Y*Z.height);u===void 0&&(u=g(X,bt));const it=v?g(X,bt):u;return it.width=X,it.height=bt,it.getContext("2d").drawImage(C,0,0,X,bt),Ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+bt+")."),it}else return"data"in C&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(C,v,I,Y,Z=!1){if(C!==null){if(n[C]!==void 0)return n[C];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===n.RED&&(I===n.FLOAT&&(X=n.R32F),I===n.HALF_FLOAT&&(X=n.R16F),I===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.R8UI),I===n.UNSIGNED_SHORT&&(X=n.R16UI),I===n.UNSIGNED_INT&&(X=n.R32UI),I===n.BYTE&&(X=n.R8I),I===n.SHORT&&(X=n.R16I),I===n.INT&&(X=n.R32I)),v===n.RG&&(I===n.FLOAT&&(X=n.RG32F),I===n.HALF_FLOAT&&(X=n.RG16F),I===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RG8UI),I===n.UNSIGNED_SHORT&&(X=n.RG16UI),I===n.UNSIGNED_INT&&(X=n.RG32UI),I===n.BYTE&&(X=n.RG8I),I===n.SHORT&&(X=n.RG16I),I===n.INT&&(X=n.RG32I)),v===n.RGB_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGB8UI),I===n.UNSIGNED_SHORT&&(X=n.RGB16UI),I===n.UNSIGNED_INT&&(X=n.RGB32UI),I===n.BYTE&&(X=n.RGB8I),I===n.SHORT&&(X=n.RGB16I),I===n.INT&&(X=n.RGB32I)),v===n.RGBA_INTEGER&&(I===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),I===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),I===n.UNSIGNED_INT&&(X=n.RGBA32UI),I===n.BYTE&&(X=n.RGBA8I),I===n.SHORT&&(X=n.RGBA16I),I===n.INT&&(X=n.RGBA32I)),v===n.RGB&&(I===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),I===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),v===n.RGBA){const bt=Z?lc:Qt.getTransfer(Y);I===n.FLOAT&&(X=n.RGBA32F),I===n.HALF_FLOAT&&(X=n.RGBA16F),I===n.UNSIGNED_BYTE&&(X=bt===ue?n.SRGB8_ALPHA8:n.RGBA8),I===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),I===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(C,v){let I;return C?v===null||v===tr||v===No?I=n.DEPTH24_STENCIL8:v===Pi?I=n.DEPTH32F_STENCIL8:v===Fo&&(I=n.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===tr||v===No?I=n.DEPTH_COMPONENT24:v===Pi?I=n.DEPTH_COMPONENT32F:v===Fo&&(I=n.DEPTH_COMPONENT16),I}function y(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==ln&&C.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function A(C){const v=C.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&h.delete(v)}function w(C){const v=C.target;v.removeEventListener("dispose",w),T(v)}function R(C){const v=i.get(C);if(v.__webglInit===void 0)return;const I=C.source,Y=f.get(I);if(Y){const Z=Y[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&x(C),Object.keys(Y).length===0&&f.delete(I)}i.remove(C)}function x(C){const v=i.get(C);n.deleteTexture(v.__webglTexture);const I=C.source,Y=f.get(I);delete Y[v.__cacheKey],a.memory.textures--}function T(C){const v=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let Z=0;Z<v.__webglFramebuffer[Y].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[Y][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)n.deleteFramebuffer(v.__webglFramebuffer[Y]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const I=C.textures;for(let Y=0,Z=I.length;Y<Z;Y++){const X=i.get(I[Y]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),i.remove(I[Y])}i.remove(C)}let P=0;function k(){P=0}function F(){const C=P;return C>=r.maxTextures&&Ft("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function W(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function H(C,v){const I=i.get(C);if(C.isVideoTexture&&se(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&I.__version!==C.version){const Y=C.image;if(Y===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{q(I,C,v);return}}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,I.__webglTexture,n.TEXTURE0+v)}function V(C,v){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){q(I,C,v);return}else C.isExternalTexture&&(I.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,I.__webglTexture,n.TEXTURE0+v)}function B(C,v){const I=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&I.__version!==C.version){q(I,C,v);return}e.bindTexture(n.TEXTURE_3D,I.__webglTexture,n.TEXTURE0+v)}function j(C,v){const I=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&I.__version!==C.version){$(I,C,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,I.__webglTexture,n.TEXTURE0+v)}const ot={[Du]:n.REPEAT,[xr]:n.CLAMP_TO_EDGE,[Lu]:n.MIRRORED_REPEAT},et={[ln]:n.NEAREST,[zv]:n.NEAREST_MIPMAP_NEAREST,[_l]:n.NEAREST_MIPMAP_LINEAR,[mn]:n.LINEAR,[ph]:n.LINEAR_MIPMAP_NEAREST,[Es]:n.LINEAR_MIPMAP_LINEAR},ct={[Hv]:n.NEVER,[jv]:n.ALWAYS,[Wv]:n.LESS,[ad]:n.LEQUAL,[Xv]:n.EQUAL,[od]:n.GEQUAL,[Yv]:n.GREATER,[qv]:n.NOTEQUAL};function Ut(C,v){if(v.type===Pi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===ph||v.magFilter===_l||v.magFilter===Es||v.minFilter===mn||v.minFilter===ph||v.minFilter===_l||v.minFilter===Es)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,ot[v.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,ot[v.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,ot[v.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,et[v.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,et[v.minFilter]),v.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ct[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ln||v.minFilter!==_l&&v.minFilter!==Es||v.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const I=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ot(C,v){let I=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",A));const Y=v.source;let Z=f.get(Y);Z===void 0&&(Z={},f.set(Y,Z));const X=W(v);if(X!==C.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[X].usedTimes++;const bt=Z[C.__cacheKey];bt!==void 0&&(Z[C.__cacheKey].usedTimes--,bt.usedTimes===0&&x(v)),C.__cacheKey=X,C.__webglTexture=Z[X].texture}return I}function Zt(C,v,I){return Math.floor(Math.floor(C/I)/v)}function $t(C,v,I,Y){const X=C.updateRanges;if(X.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,v.width,v.height,I,Y,v.data);else{X.sort((Q,st)=>Q.start-st.start);let bt=0;for(let Q=1;Q<X.length;Q++){const st=X[bt],gt=X[Q],yt=st.start+st.count,rt=Zt(gt.start,v.width,4),Gt=Zt(st.start,v.width,4);gt.start<=yt+1&&rt===Gt&&Zt(gt.start+gt.count-1,v.width,4)===rt?st.count=Math.max(st.count,gt.start+gt.count-st.start):(++bt,X[bt]=gt)}X.length=bt+1;const it=n.getParameter(n.UNPACK_ROW_LENGTH),St=n.getParameter(n.UNPACK_SKIP_PIXELS),It=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,v.width);for(let Q=0,st=X.length;Q<st;Q++){const gt=X[Q],yt=Math.floor(gt.start/4),rt=Math.ceil(gt.count/4),Gt=yt%v.width,L=Math.floor(yt/v.width),ut=rt,tt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,L),e.texSubImage2D(n.TEXTURE_2D,0,Gt,L,ut,tt,I,Y,v.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,it),n.pixelStorei(n.UNPACK_SKIP_PIXELS,St),n.pixelStorei(n.UNPACK_SKIP_ROWS,It)}}function q(C,v,I){let Y=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=n.TEXTURE_3D);const Z=Ot(C,v),X=v.source;e.bindTexture(Y,C.__webglTexture,n.TEXTURE0+I);const bt=i.get(X);if(X.version!==bt.__version||Z===!0){e.activeTexture(n.TEXTURE0+I);const it=Qt.getPrimaries(Qt.workingColorSpace),St=v.colorSpace===Br?null:Qt.getPrimaries(v.colorSpace),It=v.colorSpace===Br||it===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);let Q=_(v.image,!1,r.maxTextureSize);Q=ve(v,Q);const st=s.convert(v.format,v.colorSpace),gt=s.convert(v.type);let yt=b(v.internalFormat,st,gt,v.colorSpace,v.isVideoTexture);Ut(Y,v);let rt;const Gt=v.mipmaps,L=v.isVideoTexture!==!0,ut=bt.__version===void 0||Z===!0,tt=X.dataReady,ft=y(v,Q);if(v.isDepthTexture)yt=E(v.format===bs,v.type),ut&&(L?e.texStorage2D(n.TEXTURE_2D,1,yt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,yt,Q.width,Q.height,0,st,gt,null));else if(v.isDataTexture)if(Gt.length>0){L&&ut&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Gt[0].width,Gt[0].height);for(let J=0,K=Gt.length;J<K;J++)rt=Gt[J],L?tt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,rt.width,rt.height,st,gt,rt.data):e.texImage2D(n.TEXTURE_2D,J,yt,rt.width,rt.height,0,st,gt,rt.data);v.generateMipmaps=!1}else L?(ut&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Q.width,Q.height),tt&&$t(v,Q,st,gt)):e.texImage2D(n.TEXTURE_2D,0,yt,Q.width,Q.height,0,st,gt,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){L&&ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,yt,Gt[0].width,Gt[0].height,Q.depth);for(let J=0,K=Gt.length;J<K;J++)if(rt=Gt[J],v.format!==Di)if(st!==null)if(L){if(tt)if(v.layerUpdates.size>0){const nt=Tm(rt.width,rt.height,v.format,v.type);for(const Nt of v.layerUpdates){const Se=rt.data.subarray(Nt*nt/rt.data.BYTES_PER_ELEMENT,(Nt+1)*nt/rt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,Nt,rt.width,rt.height,1,st,Se)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,rt.width,rt.height,Q.depth,st,rt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,yt,rt.width,rt.height,Q.depth,0,rt.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?tt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,rt.width,rt.height,Q.depth,st,gt,rt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,J,yt,rt.width,rt.height,Q.depth,0,st,gt,rt.data)}else{L&&ut&&e.texStorage2D(n.TEXTURE_2D,ft,yt,Gt[0].width,Gt[0].height);for(let J=0,K=Gt.length;J<K;J++)rt=Gt[J],v.format!==Di?st!==null?L?tt&&e.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,rt.width,rt.height,st,rt.data):e.compressedTexImage2D(n.TEXTURE_2D,J,yt,rt.width,rt.height,0,rt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?tt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,rt.width,rt.height,st,gt,rt.data):e.texImage2D(n.TEXTURE_2D,J,yt,rt.width,rt.height,0,st,gt,rt.data)}else if(v.isDataArrayTexture)if(L){if(ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,yt,Q.width,Q.height,Q.depth),tt)if(v.layerUpdates.size>0){const J=Tm(Q.width,Q.height,v.format,v.type);for(const K of v.layerUpdates){const nt=Q.data.subarray(K*J/Q.data.BYTES_PER_ELEMENT,(K+1)*J/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,st,gt,nt)}v.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,st,gt,Q.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,Q.width,Q.height,Q.depth,0,st,gt,Q.data);else if(v.isData3DTexture)L?(ut&&e.texStorage3D(n.TEXTURE_3D,ft,yt,Q.width,Q.height,Q.depth),tt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,st,gt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,yt,Q.width,Q.height,Q.depth,0,st,gt,Q.data);else if(v.isFramebufferTexture){if(ut)if(L)e.texStorage2D(n.TEXTURE_2D,ft,yt,Q.width,Q.height);else{let J=Q.width,K=Q.height;for(let nt=0;nt<ft;nt++)e.texImage2D(n.TEXTURE_2D,nt,yt,J,K,0,st,gt,null),J>>=1,K>>=1}}else if(Gt.length>0){if(L&&ut){const J=Mt(Gt[0]);e.texStorage2D(n.TEXTURE_2D,ft,yt,J.width,J.height)}for(let J=0,K=Gt.length;J<K;J++)rt=Gt[J],L?tt&&e.texSubImage2D(n.TEXTURE_2D,J,0,0,st,gt,rt):e.texImage2D(n.TEXTURE_2D,J,yt,st,gt,rt);v.generateMipmaps=!1}else if(L){if(ut){const J=Mt(Q);e.texStorage2D(n.TEXTURE_2D,ft,yt,J.width,J.height)}tt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,st,gt,Q)}else e.texImage2D(n.TEXTURE_2D,0,yt,st,gt,Q);m(v)&&d(Y),bt.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function $(C,v,I){if(v.image.length!==6)return;const Y=Ot(C,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+I);const X=i.get(Z);if(Z.version!==X.__version||Y===!0){e.activeTexture(n.TEXTURE0+I);const bt=Qt.getPrimaries(Qt.workingColorSpace),it=v.colorSpace===Br?null:Qt.getPrimaries(v.colorSpace),St=v.colorSpace===Br||bt===it?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const It=v.isCompressedTexture||v.image[0].isCompressedTexture,Q=v.image[0]&&v.image[0].isDataTexture,st=[];for(let K=0;K<6;K++)!It&&!Q?st[K]=_(v.image[K],!0,r.maxCubemapSize):st[K]=Q?v.image[K].image:v.image[K],st[K]=ve(v,st[K]);const gt=st[0],yt=s.convert(v.format,v.colorSpace),rt=s.convert(v.type),Gt=b(v.internalFormat,yt,rt,v.colorSpace),L=v.isVideoTexture!==!0,ut=X.__version===void 0||Y===!0,tt=Z.dataReady;let ft=y(v,gt);Ut(n.TEXTURE_CUBE_MAP,v);let J;if(It){L&&ut&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Gt,gt.width,gt.height);for(let K=0;K<6;K++){J=st[K].mipmaps;for(let nt=0;nt<J.length;nt++){const Nt=J[nt];v.format!==Di?yt!==null?L?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,Nt.width,Nt.height,yt,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Gt,Nt.width,Nt.height,0,Nt.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,0,0,Nt.width,Nt.height,yt,rt,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt,Gt,Nt.width,Nt.height,0,yt,rt,Nt.data)}}}else{if(J=v.mipmaps,L&&ut){J.length>0&&ft++;const K=Mt(st[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Gt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){L?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,st[K].width,st[K].height,yt,rt,st[K].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,st[K].width,st[K].height,0,yt,rt,st[K].data);for(let nt=0;nt<J.length;nt++){const Se=J[nt].image[K].image;L?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,Se.width,Se.height,yt,rt,Se.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Gt,Se.width,Se.height,0,yt,rt,Se.data)}}else{L?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt,rt,st[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Gt,yt,rt,st[K]);for(let nt=0;nt<J.length;nt++){const Nt=J[nt];L?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,0,0,yt,rt,Nt.image[K]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,nt+1,Gt,yt,rt,Nt.image[K])}}}m(v)&&d(n.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function mt(C,v,I,Y,Z,X){const bt=s.convert(I.format,I.colorSpace),it=s.convert(I.type),St=b(I.internalFormat,bt,it,I.colorSpace),It=i.get(v),Q=i.get(I);if(Q.__renderTarget=v,!It.__hasExternalTextures){const st=Math.max(1,v.width>>X),gt=Math.max(1,v.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,X,St,st,gt,v.depth,0,bt,it,null):e.texImage2D(Z,X,St,st,gt,0,bt,it,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,Z,Q.__webglTexture,0,D(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,Z,Q.__webglTexture,X),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(C,v,I){if(n.bindRenderbuffer(n.RENDERBUFFER,C),v.depthBuffer){const Y=v.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,X=E(v.stencilBuffer,Z),bt=v.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Xe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(v),X,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(v),X,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,X,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,bt,n.RENDERBUFFER,C)}else{const Y=v.textures;for(let Z=0;Z<Y.length;Z++){const X=Y[Z],bt=s.convert(X.format,X.colorSpace),it=s.convert(X.type),St=b(X.internalFormat,bt,it,X.colorSpace);Xe(v)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(v),St,v.width,v.height):I?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(v),St,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,St,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function vt(C,v,I){const Y=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(v.depthTexture);if(Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,v.depthTexture);const It=s.convert(v.depthTexture.format),Q=s.convert(v.depthTexture.type);let st;v.depthTexture.format===br?st=n.DEPTH_COMPONENT24:v.depthTexture.format===bs&&(st=n.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,st,v.width,v.height,0,It,Q,null)}}else H(v.depthTexture,0);const X=Z.__webglTexture,bt=D(v),it=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+I:n.TEXTURE_2D,St=v.depthTexture.format===bs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(v.depthTexture.format===br)Xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,St,it,X,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,St,it,X,0);else if(v.depthTexture.format===bs)Xe(v)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,St,it,X,0,bt):n.framebufferTexture2D(n.FRAMEBUFFER,St,it,X,0);else throw new Error("Unknown depthTexture format")}function ee(C){const v=i.get(C),I=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const Z=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),v.__depthDisposeCallback=Z}v.__boundDepthTexture=Y}if(C.depthTexture&&!v.__autoAllocateDepthBuffer)if(I)for(let Y=0;Y<6;Y++)vt(v.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?vt(v.__webglFramebuffer[0],C,0):vt(v.__webglFramebuffer,C,0)}else if(I){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=n.createRenderbuffer(),Bt(v.__webglDepthbuffer[Y],C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=n.createRenderbuffer(),Bt(v.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,X)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function en(C,v,I){const Y=i.get(C);v!==void 0&&mt(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),I!==void 0&&ee(C)}function Jt(C){const v=C.texture,I=i.get(C),Y=i.get(v);C.addEventListener("dispose",w);const Z=C.textures,X=C.isWebGLCubeRenderTarget===!0,bt=Z.length>1;if(bt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=v.version,a.memory.textures++),X){I.__webglFramebuffer=[];for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer[it]=[];for(let St=0;St<v.mipmaps.length;St++)I.__webglFramebuffer[it][St]=n.createFramebuffer()}else I.__webglFramebuffer[it]=n.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){I.__webglFramebuffer=[];for(let it=0;it<v.mipmaps.length;it++)I.__webglFramebuffer[it]=n.createFramebuffer()}else I.__webglFramebuffer=n.createFramebuffer();if(bt)for(let it=0,St=Z.length;it<St;it++){const It=i.get(Z[it]);It.__webglTexture===void 0&&(It.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&Xe(C)===!1){I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let it=0;it<Z.length;it++){const St=Z[it];I.__webglColorRenderbuffer[it]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,I.__webglColorRenderbuffer[it]);const It=s.convert(St.format,St.colorSpace),Q=s.convert(St.type),st=b(St.internalFormat,It,Q,St.colorSpace,C.isXRRenderTarget===!0),gt=D(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,gt,st,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+it,n.RENDERBUFFER,I.__webglColorRenderbuffer[it])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),Bt(I.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ut(n.TEXTURE_CUBE_MAP,v);for(let it=0;it<6;it++)if(v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)mt(I.__webglFramebuffer[it][St],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,St);else mt(I.__webglFramebuffer[it],C,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);m(v)&&d(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let it=0,St=Z.length;it<St;it++){const It=Z[it],Q=i.get(It);let st=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(st=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),Ut(st,It),mt(I.__webglFramebuffer,C,It,n.COLOR_ATTACHMENT0+it,st,0),m(It)&&d(st)}e.unbindTexture()}else{let it=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(it,Y.__webglTexture),Ut(it,v),v.mipmaps&&v.mipmaps.length>0)for(let St=0;St<v.mipmaps.length;St++)mt(I.__webglFramebuffer[St],C,v,n.COLOR_ATTACHMENT0,it,St);else mt(I.__webglFramebuffer,C,v,n.COLOR_ATTACHMENT0,it,0);m(v)&&d(it),e.unbindTexture()}C.depthBuffer&&ee(C)}function le(C){const v=C.textures;for(let I=0,Y=v.length;I<Y;I++){const Z=v[I];if(m(Z)){const X=S(C),bt=i.get(Z).__webglTexture;e.bindTexture(X,bt),d(X),e.unbindTexture()}}}const pe=[],Vt=[];function We(C){if(C.samples>0){if(Xe(C)===!1){const v=C.textures,I=C.width,Y=C.height;let Z=n.COLOR_BUFFER_BIT;const X=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,bt=i.get(C),it=v.length>1;if(it)for(let It=0;It<v.length;It++)e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);const St=C.texture.mipmaps;St&&St.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let It=0;It<v.length;It++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),it){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,bt.__webglColorRenderbuffer[It]);const Q=i.get(v[It]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,I,Y,0,0,I,Y,Z,n.NEAREST),l===!0&&(pe.length=0,Vt.length=0,pe.push(n.COLOR_ATTACHMENT0+It),C.depthBuffer&&C.resolveDepthBuffer===!1&&(pe.push(X),Vt.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Vt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pe))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),it)for(let It=0;It<v.length;It++){e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.RENDERBUFFER,bt.__webglColorRenderbuffer[It]);const Q=i.get(v[It]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,bt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+It,n.TEXTURE_2D,Q,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[v])}}}function D(C){return Math.min(r.maxSamples,C.samples)}function Xe(C){const v=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function se(C){const v=a.render.frame;h.get(C)!==v&&(h.set(C,v),C.update())}function ve(C,v){const I=C.colorSpace,Y=C.format,Z=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||I!==Ca&&I!==Br&&(Qt.getTransfer(I)===ue?(Y!==Di||Z!==Qn)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ie("WebGLTextures: Unsupported texture color space:",I)),v}function Mt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=k,this.setTexture2D=H,this.setTexture2DArray=V,this.setTexture3D=B,this.setTextureCube=j,this.rebindTextures=en,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function AE(n,t){function e(i,r=Br){let s;const a=Qt.getTransfer(r);if(i===Qn)return n.UNSIGNED_BYTE;if(i===td)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ed)return n.UNSIGNED_SHORT_5_5_5_1;if(i===N_)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===O_)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===U_)return n.BYTE;if(i===F_)return n.SHORT;if(i===Fo)return n.UNSIGNED_SHORT;if(i===Qf)return n.INT;if(i===tr)return n.UNSIGNED_INT;if(i===Pi)return n.FLOAT;if(i===ii)return n.HALF_FLOAT;if(i===B_)return n.ALPHA;if(i===k_)return n.RGB;if(i===Di)return n.RGBA;if(i===br)return n.DEPTH_COMPONENT;if(i===bs)return n.DEPTH_STENCIL;if(i===nd)return n.RED;if(i===id)return n.RED_INTEGER;if(i===wa)return n.RG;if(i===rd)return n.RG_INTEGER;if(i===sd)return n.RGBA_INTEGER;if(i===Yl||i===ql||i===jl||i===Kl)if(a===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Iu||i===Uu||i===Fu||i===Nu)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Iu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Fu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Nu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ou||i===Bu||i===ku||i===zu||i===Vu||i===Gu||i===Hu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ou||i===Bu)return a===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ku)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===zu)return s.COMPRESSED_R11_EAC;if(i===Vu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Gu)return s.COMPRESSED_RG11_EAC;if(i===Hu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wu||i===Xu||i===Yu||i===qu||i===ju||i===Ku||i===Zu||i===$u||i===Ju||i===Qu||i===tf||i===ef||i===nf||i===rf)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Wu)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xu)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yu)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qu)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ju)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ku)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zu)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$u)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ju)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qu)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===tf)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ef)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nf)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rf)return a===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sf||i===af||i===of)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===sf)return a===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===af)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===of)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lf||i===cf||i===hf||i===uf)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===lf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===hf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===No?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const wE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new J_(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new cn({vertexShader:wE,fragmentShader:CE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new zn(new sl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PE extends zs{constructor(t,e){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new RE,d={},S=e.getContextAttributes();let b=null,E=null;const y=[],A=[],w=new Rt;let R=null;const x=new Jn;x.viewport=new Be;const T=new Jn;T.viewport=new Be;const P=[x,T],k=new B2;let F=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let $=y[q];return $===void 0&&($=new Nh,y[q]=$),$.getTargetRaySpace()},this.getControllerGrip=function(q){let $=y[q];return $===void 0&&($=new Nh,y[q]=$),$.getGripSpace()},this.getHand=function(q){let $=y[q];return $===void 0&&($=new Nh,y[q]=$),$.getHandSpace()};function H(q){const $=A.indexOf(q.inputSource);if($===-1)return;const mt=y[$];mt!==void 0&&(mt.update(q.inputSource,q.frame,c||a),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",B);for(let q=0;q<y.length;q++){const $=A[q];$!==null&&(A[q]=null,y[q].disconnect($))}F=null,W=null,m.reset();for(const q in d)delete d[q];t.setRenderTarget(b),p=null,f=null,u=null,r=null,E=null,$t.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(b=t.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",V),r.addEventListener("inputsourceschange",B),S.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Bt=null,vt=null;S.depth&&(vt=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,mt=S.stencil?bs:br,Bt=S.stencil?No:tr);const ee={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(ee),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new In(f.textureWidth,f.textureHeight,{format:Di,type:Qn,depthTexture:new ko(f.textureWidth,f.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const mt={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,mt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new In(p.framebufferWidth,p.framebufferHeight,{format:Di,type:Qn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$t.setContext(r),$t.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(q){for(let $=0;$<q.removed.length;$++){const mt=q.removed[$],Bt=A.indexOf(mt);Bt>=0&&(A[Bt]=null,y[Bt].disconnect(mt))}for(let $=0;$<q.added.length;$++){const mt=q.added[$];let Bt=A.indexOf(mt);if(Bt===-1){for(let ee=0;ee<y.length;ee++)if(ee>=A.length){A.push(mt),Bt=ee;break}else if(A[ee]===null){A[ee]=mt,Bt=ee;break}if(Bt===-1)break}const vt=y[Bt];vt&&vt.connect(mt)}}const j=new N,ot=new N;function et(q,$,mt){j.setFromMatrixPosition($.matrixWorld),ot.setFromMatrixPosition(mt.matrixWorld);const Bt=j.distanceTo(ot),vt=$.projectionMatrix.elements,ee=mt.projectionMatrix.elements,en=vt[14]/(vt[10]-1),Jt=vt[14]/(vt[10]+1),le=(vt[9]+1)/vt[5],pe=(vt[9]-1)/vt[5],Vt=(vt[8]-1)/vt[0],We=(ee[8]+1)/ee[0],D=en*Vt,Xe=en*We,se=Bt/(-Vt+We),ve=se*-Vt;if($.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ve),q.translateZ(se),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),vt[10]===-1)q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Mt=en+se,C=Jt+se,v=D-ve,I=Xe+(Bt-ve),Y=le*Jt/C*Mt,Z=pe*Jt/C*Mt;q.projectionMatrix.makePerspective(v,I,Y,Z,Mt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ct(q,$){$===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices($.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let $=q.near,mt=q.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(mt=m.depthFar)),k.near=T.near=x.near=$,k.far=T.far=x.far=mt,(F!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),F=k.near,W=k.far),k.layers.mask=q.layers.mask|6,x.layers.mask=k.layers.mask&3,T.layers.mask=k.layers.mask&5;const Bt=q.parent,vt=k.cameras;ct(k,Bt);for(let ee=0;ee<vt.length;ee++)ct(vt[ee],Bt);vt.length===2?et(k,x,T):k.projectionMatrix.copy(x.projectionMatrix),Ut(q,k,Bt)};function Ut(q,$,mt){mt===null?q.matrix.copy($.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply($.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy($.projectionMatrix),q.projectionMatrixInverse.copy($.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ff*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(q){return d[q]};let Ot=null;function Zt(q,$){if(h=$.getViewerPose(c||a),g=$,h!==null){const mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let Bt=!1;mt.length!==k.cameras.length&&(k.cameras.length=0,Bt=!0);for(let Jt=0;Jt<mt.length;Jt++){const le=mt[Jt];let pe=null;if(p!==null)pe=p.getViewport(le);else{const We=u.getViewSubImage(f,le);pe=We.viewport,Jt===0&&(t.setRenderTargetTextures(E,We.colorTexture,We.depthStencilTexture),t.setRenderTarget(E))}let Vt=P[Jt];Vt===void 0&&(Vt=new Jn,Vt.layers.enable(Jt),Vt.viewport=new Be,P[Jt]=Vt),Vt.matrix.fromArray(le.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(le.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(pe.x,pe.y,pe.width,pe.height),Jt===0&&(k.matrix.copy(Vt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Bt===!0&&k.cameras.push(Vt)}const vt=r.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){u=i.getBinding();const Jt=u.getDepthInformation(mt[0]);Jt&&Jt.isValid&&Jt.texture&&m.init(Jt,r.renderState)}if(vt&&vt.includes("camera-access")&&_){t.state.unbindTexture(),u=i.getBinding();for(let Jt=0;Jt<mt.length;Jt++){const le=mt[Jt].camera;if(le){let pe=d[le];pe||(pe=new J_,d[le]=pe);const Vt=u.getCameraImage(le);pe.sourceTexture=Vt}}}}for(let mt=0;mt<y.length;mt++){const Bt=A[mt],vt=y[mt];Bt!==null&&vt!==void 0&&vt.update(Bt,$,c||a)}Ot&&Ot(q,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),g=null}const $t=new tg;$t.setAnimationLoop(Zt),this.setAnimationLoop=function(q){Ot=q},this.dispose=function(){}}}const ps=new er,DE=new be;function LE(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,q_(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,b,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),h(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,E)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ln&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ln&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),b=S.envMap,E=S.envMapRotation;b&&(m.envMap.value=b,ps.copy(E),ps.x*=-1,ps.y*=-1,ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(DE.makeRotationFromEuler(ps)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ln&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function IE(n,t,e,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,b){const E=b.program;i.uniformBlockBinding(S,E)}function c(S,b){let E=r[S.id];E===void 0&&(g(S),E=h(S),r[S.id]=E,S.addEventListener("dispose",m));const y=b.program;i.updateUBOMapping(S,y);const A=t.render.frame;s[S.id]!==A&&(f(S),s[S.id]=A)}function h(S){const b=u();S.__bindingPointIndex=b;const E=n.createBuffer(),y=S.__size,A=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,y,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,E),E}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const b=r[S.id],E=S.uniforms,y=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let A=0,w=E.length;A<w;A++){const R=Array.isArray(E[A])?E[A]:[E[A]];for(let x=0,T=R.length;x<T;x++){const P=R[x];if(p(P,A,x,y)===!0){const k=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let H=0;H<F.length;H++){const V=F[H],B=_(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,k+W,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,W),W+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,b,E,y){const A=S.value,w=b+"_"+E;if(y[w]===void 0)return typeof A=="number"||typeof A=="boolean"?y[w]=A:y[w]=A.clone(),!0;{const R=y[w];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return y[w]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(S){const b=S.uniforms;let E=0;const y=16;for(let w=0,R=b.length;w<R;w++){const x=Array.isArray(b[w])?b[w]:[b[w]];for(let T=0,P=x.length;T<P;T++){const k=x[T],F=Array.isArray(k.value)?k.value:[k.value];for(let W=0,H=F.length;W<H;W++){const V=F[W],B=_(V),j=E%y,ot=j%B.boundary,et=j+ot;E+=ot,et!==0&&y-et<B.storage&&(E+=y-et),k.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=B.storage}}}const A=E%y;return A>0&&(E+=y-A),S.__size=E,S.__cache={},this}function _(S){const b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ft("WebGLRenderer: Unsupported uniform value type.",S),b}function m(S){const b=S.target;b.removeEventListener("dispose",m);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function d(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const UE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function FE(){return ki===null&&(ki=new $_(UE,16,16,wa,ii),ki.name="DFG_LUT",ki.minFilter=mn,ki.magFilter=mn,ki.wrapS=xr,ki.wrapT=xr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class NE{constructor(t={}){const{canvas:e=Kv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Qn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=p,m=new Set([sd,rd,id]),d=new Set([Qn,tr,Fo,No,td,ed]),S=new Uint32Array(4),b=new Int32Array(4);let E=null,y=null;const A=[],w=[];let R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let T=!1;this._outputColorSpace=xi;let P=0,k=0,F=null,W=-1,H=null;const V=new Be,B=new Be;let j=null;const ot=new Xt(0);let et=0,ct=e.width,Ut=e.height,Ot=1,Zt=null,$t=null;const q=new Be(0,0,ct,Ut),$=new Be(0,0,ct,Ut);let mt=!1;const Bt=new ud;let vt=!1,ee=!1;const en=new be,Jt=new N,le=new Be,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function We(){return F===null?Ot:1}let D=i;function Xe(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jf}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",Se,!1),e.addEventListener("webglcontextcreationerror",ce,!1),D===null){const U="webgl2";if(D=Xe(U,M),D===null)throw Xe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw ie("WebGLRenderer: "+M.message),M}let se,ve,Mt,C,v,I,Y,Z,X,bt,it,St,It,Q,st,gt,yt,rt,Gt,L,ut,tt,ft,J;function K(){se=new FM(D),se.init(),tt=new AE(D,se),ve=new AM(D,se,t,tt),Mt=new bE(D,se),ve.reversedDepthBuffer&&f&&Mt.buffers.depth.setReversed(!0),C=new BM(D),v=new cE,I=new TE(D,se,Mt,v,ve,tt,C),Y=new CM(x),Z=new UM(x),X=new G2(D),ft=new bM(D,X),bt=new NM(D,X,C,ft),it=new zM(D,bt,X,C),Gt=new kM(D,ve,I),gt=new wM(v),St=new lE(x,Y,Z,se,ve,ft,gt),It=new LE(x,v),Q=new uE,st=new gE(se),rt=new EM(x,Y,Z,Mt,it,g,l),yt=new yE(x,it,ve),J=new IE(D,C,ve,Mt),L=new TM(D,se,C),ut=new OM(D,se,C),C.programs=St.programs,x.capabilities=ve,x.extensions=se,x.properties=v,x.renderLists=Q,x.shadowMap=yt,x.state=Mt,x.info=C}K(),_!==Qn&&(R=new GM(_,e.width,e.height,r,s));const nt=new PE(x,D);this.xr=nt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(M){M!==void 0&&(Ot=M,this.setSize(ct,Ut,!1))},this.getSize=function(M){return M.set(ct,Ut)},this.setSize=function(M,U,G=!0){if(nt.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ct=M,Ut=U,e.width=Math.floor(M*Ot),e.height=Math.floor(U*Ot),G===!0&&(e.style.width=M+"px",e.style.height=U+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ct*Ot,Ut*Ot).floor()},this.setDrawingBufferSize=function(M,U,G){ct=M,Ut=U,Ot=G,e.width=Math.floor(M*G),e.height=Math.floor(U*G),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(_===Qn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(V)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,U,G,z){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,U,G,z),Mt.viewport(V.copy(q).multiplyScalar(Ot).round())},this.getScissor=function(M){return M.copy($)},this.setScissor=function(M,U,G,z){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,U,G,z),Mt.scissor(B.copy($).multiplyScalar(Ot).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(M){Mt.setScissorTest(mt=M)},this.setOpaqueSort=function(M){Zt=M},this.setTransparentSort=function(M){$t=M},this.getClearColor=function(M){return M.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,G=!0){let z=0;if(M){let O=!1;if(F!==null){const at=F.texture.format;O=m.has(at)}if(O){const at=F.texture.type,dt=d.has(at),ht=rt.getClearColor(),_t=rt.getClearAlpha(),Tt=ht.r,Lt=ht.g,Pt=ht.b;dt?(S[0]=Tt,S[1]=Lt,S[2]=Pt,S[3]=_t,D.clearBufferuiv(D.COLOR,0,S)):(b[0]=Tt,b[1]=Lt,b[2]=Pt,b[3]=_t,D.clearBufferiv(D.COLOR,0,b))}else z|=D.COLOR_BUFFER_BIT}U&&(z|=D.DEPTH_BUFFER_BIT),G&&(z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",Se,!1),e.removeEventListener("webglcontextcreationerror",ce,!1),rt.dispose(),Q.dispose(),st.dispose(),v.dispose(),Y.dispose(),Z.dispose(),it.dispose(),ft.dispose(),J.dispose(),St.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Gp),nt.removeEventListener("sessionend",Hp),os.stop()};function Nt(M){M.preventDefault(),nm("WebGLRenderer: Context Lost."),T=!0}function Se(){nm("WebGLRenderer: Context Restored."),T=!1;const M=C.autoReset,U=yt.enabled,G=yt.autoUpdate,z=yt.needsUpdate,O=yt.type;K(),C.autoReset=M,yt.enabled=U,yt.autoUpdate=G,yt.needsUpdate=z,yt.type=O}function ce(M){ie("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Bi(M){const U=M.target;U.removeEventListener("dispose",Bi),or(U)}function or(M){cv(M),v.remove(M)}function cv(M){const U=v.get(M).programs;U!==void 0&&(U.forEach(function(G){St.releaseProgram(G)}),M.isShaderMaterial&&St.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,G,z,O,at){U===null&&(U=pe);const dt=O.isMesh&&O.matrixWorld.determinant()<0,ht=uv(M,U,G,z,O);Mt.setMaterial(z,dt);let _t=G.index,Tt=1;if(z.wireframe===!0){if(_t=bt.getWireframeAttribute(G),_t===void 0)return;Tt=2}const Lt=G.drawRange,Pt=G.attributes.position;let Ht=Lt.start*Tt,fe=(Lt.start+Lt.count)*Tt;at!==null&&(Ht=Math.max(Ht,at.start*Tt),fe=Math.min(fe,(at.start+at.count)*Tt)),_t!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,_t.count)):Pt!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,Pt.count));const Ue=fe-Ht;if(Ue<0||Ue===1/0)return;ft.setup(O,z,ht,G,_t);let Fe,me=L;if(_t!==null&&(Fe=X.get(_t),me=ut,me.setIndex(Fe)),O.isMesh)z.wireframe===!0?(Mt.setLineWidth(z.wireframeLinewidth*We()),me.setMode(D.LINES)):me.setMode(D.TRIANGLES);else if(O.isLine){let Dt=z.linewidth;Dt===void 0&&(Dt=1),Mt.setLineWidth(Dt*We()),O.isLineSegments?me.setMode(D.LINES):O.isLineLoop?me.setMode(D.LINE_LOOP):me.setMode(D.LINE_STRIP)}else O.isPoints?me.setMode(D.POINTS):O.isSprite&&me.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),me.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))me.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Dt=O._multiDrawStarts,he=O._multiDrawCounts,ne=O._multiDrawCount,Wn=_t?X.get(_t).bytesPerElement:1,Ws=v.get(z).currentProgram.getUniforms();for(let Xn=0;Xn<ne;Xn++)Ws.setValue(D,"_gl_DrawID",Xn),me.render(Dt[Xn]/Wn,he[Xn])}else if(O.isInstancedMesh)me.renderInstances(Ht,Ue,O.count);else if(G.isInstancedBufferGeometry){const Dt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,he=Math.min(G.instanceCount,Dt);me.renderInstances(Ht,Ue,he)}else me.render(Ht,Ue)};function Vp(M,U,G){M.transparent===!0&&M.side===Yi&&M.forceSinglePass===!1?(M.side=Ln,M.needsUpdate=!0,ml(M,U,G),M.side=$r,M.needsUpdate=!0,ml(M,U,G),M.side=Yi):ml(M,U,G)}this.compile=function(M,U,G=null){G===null&&(G=M),y=st.get(G),y.init(U),w.push(y),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),M!==G&&M.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(y.pushLight(O),O.castShadow&&y.pushShadow(O))}),y.setupLights();const z=new Set;return M.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const at=O.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){const ht=at[dt];Vp(ht,G,O),z.add(ht)}else Vp(at,G,O),z.add(at)}),y=w.pop(),z},this.compileAsync=function(M,U,G=null){const z=this.compile(M,U,G);return new Promise(O=>{function at(){if(z.forEach(function(dt){v.get(dt).currentProgram.isReady()&&z.delete(dt)}),z.size===0){O(M);return}setTimeout(at,10)}se.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let uh=null;function hv(M){uh&&uh(M)}function Gp(){os.stop()}function Hp(){os.start()}const os=new tg;os.setAnimationLoop(hv),typeof self<"u"&&os.setContext(self),this.setAnimationLoop=function(M){uh=M,nt.setAnimationLoop(M),M===null?os.stop():os.start()},nt.addEventListener("sessionstart",Gp),nt.addEventListener("sessionend",Hp),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const G=nt.enabled===!0&&nt.isPresenting===!0,z=R!==null&&(F===null||G)&&R.begin(x,F);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(U),U=nt.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,U,F),y=st.get(M,w.length),y.init(U),w.push(y),en.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Bt.setFromProjectionMatrix(en,Ki,U.reversedDepth),ee=this.localClippingEnabled,vt=gt.init(this.clippingPlanes,ee),E=Q.get(M,A.length),E.init(),A.push(E),nt.enabled===!0&&nt.isPresenting===!0){const dt=x.xr.getDepthSensingMesh();dt!==null&&fh(dt,U,-1/0,x.sortObjects)}fh(M,U,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(Zt,$t),Vt=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,Vt&&rt.addToRenderList(E,M),this.info.render.frame++,vt===!0&&gt.beginShadows();const O=y.state.shadowsArray;if(yt.render(O,M,U),vt===!0&&gt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(z&&R.hasRenderPass())===!1){const dt=E.opaque,ht=E.transmissive;if(y.setupLights(),U.isArrayCamera){const _t=U.cameras;if(ht.length>0)for(let Tt=0,Lt=_t.length;Tt<Lt;Tt++){const Pt=_t[Tt];Xp(dt,ht,M,Pt)}Vt&&rt.render(M);for(let Tt=0,Lt=_t.length;Tt<Lt;Tt++){const Pt=_t[Tt];Wp(E,M,Pt,Pt.viewport)}}else ht.length>0&&Xp(dt,ht,M,U),Vt&&rt.render(M),Wp(E,M,U)}F!==null&&k===0&&(I.updateMultisampleRenderTarget(F),I.updateRenderTargetMipmap(F)),z&&R.end(x),M.isScene===!0&&M.onAfterRender(x,M,U),ft.resetDefaultState(),W=-1,H=null,w.pop(),w.length>0?(y=w[w.length-1],vt===!0&&gt.setGlobalState(x.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?E=A[A.length-1]:E=null};function fh(M,U,G,z){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)y.pushLight(M),M.castShadow&&y.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Bt.intersectsSprite(M)){z&&le.setFromMatrixPosition(M.matrixWorld).applyMatrix4(en);const dt=it.update(M),ht=M.material;ht.visible&&E.push(M,dt,ht,G,le.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Bt.intersectsObject(M))){const dt=it.update(M),ht=M.material;if(z&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),le.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),le.copy(dt.boundingSphere.center)),le.applyMatrix4(M.matrixWorld).applyMatrix4(en)),Array.isArray(ht)){const _t=dt.groups;for(let Tt=0,Lt=_t.length;Tt<Lt;Tt++){const Pt=_t[Tt],Ht=ht[Pt.materialIndex];Ht&&Ht.visible&&E.push(M,dt,Ht,G,le.z,Pt)}}else ht.visible&&E.push(M,dt,ht,G,le.z,null)}}const at=M.children;for(let dt=0,ht=at.length;dt<ht;dt++)fh(at[dt],U,G,z)}function Wp(M,U,G,z){const{opaque:O,transmissive:at,transparent:dt}=M;y.setupLightsView(G),vt===!0&&gt.setGlobalState(x.clippingPlanes,G),z&&Mt.viewport(V.copy(z)),O.length>0&&pl(O,U,G),at.length>0&&pl(at,U,G),dt.length>0&&pl(dt,U,G),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function Xp(M,U,G,z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[z.id]===void 0){const Ht=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[z.id]=new In(1,1,{generateMipmaps:!0,type:Ht?ii:Qn,minFilter:Es,samples:ve.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}const at=y.state.transmissionRenderTarget[z.id],dt=z.viewport||V;at.setSize(dt.z*x.transmissionResolutionScale,dt.w*x.transmissionResolutionScale);const ht=x.getRenderTarget(),_t=x.getActiveCubeFace(),Tt=x.getActiveMipmapLevel();x.setRenderTarget(at),x.getClearColor(ot),et=x.getClearAlpha(),et<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&rt.render(G);const Lt=x.toneMapping;x.toneMapping=Ji;const Pt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),y.setupLightsView(z),vt===!0&&gt.setGlobalState(x.clippingPlanes,z),pl(M,G,z),I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at),se.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,Ue=U.length;fe<Ue;fe++){const Fe=U[fe],{object:me,geometry:Dt,material:he,group:ne}=Fe;if(he.side===Yi&&me.layers.test(z.layers)){const Wn=he.side;he.side=Ln,he.needsUpdate=!0,Yp(me,G,z,Dt,he,ne),he.side=Wn,he.needsUpdate=!0,Ht=!0}}Ht===!0&&(I.updateMultisampleRenderTarget(at),I.updateRenderTargetMipmap(at))}x.setRenderTarget(ht,_t,Tt),x.setClearColor(ot,et),Pt!==void 0&&(z.viewport=Pt),x.toneMapping=Lt}function pl(M,U,G){const z=U.isScene===!0?U.overrideMaterial:null;for(let O=0,at=M.length;O<at;O++){const dt=M[O],{object:ht,geometry:_t,group:Tt}=dt;let Lt=dt.material;Lt.allowOverride===!0&&z!==null&&(Lt=z),ht.layers.test(G.layers)&&Yp(ht,U,G,_t,Lt,Tt)}}function Yp(M,U,G,z,O,at){M.onBeforeRender(x,U,G,z,O,at),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),O.onBeforeRender(x,U,G,z,M,at),O.transparent===!0&&O.side===Yi&&O.forceSinglePass===!1?(O.side=Ln,O.needsUpdate=!0,x.renderBufferDirect(G,U,z,O,M,at),O.side=$r,O.needsUpdate=!0,x.renderBufferDirect(G,U,z,O,M,at),O.side=Yi):x.renderBufferDirect(G,U,z,O,M,at),M.onAfterRender(x,U,G,z,O,at)}function ml(M,U,G){U.isScene!==!0&&(U=pe);const z=v.get(M),O=y.state.lights,at=y.state.shadowsArray,dt=O.state.version,ht=St.getParameters(M,O.state,at,U,G),_t=St.getProgramCacheKey(ht);let Tt=z.programs;z.environment=M.isMeshStandardMaterial?U.environment:null,z.fog=U.fog,z.envMap=(M.isMeshStandardMaterial?Z:Y).get(M.envMap||z.environment),z.envMapRotation=z.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Bi),Tt=new Map,z.programs=Tt);let Lt=Tt.get(_t);if(Lt!==void 0){if(z.currentProgram===Lt&&z.lightsStateVersion===dt)return jp(M,ht),Lt}else ht.uniforms=St.getUniforms(M),M.onBeforeCompile(ht,x),Lt=St.acquireProgram(ht,_t),Tt.set(_t,Lt),z.uniforms=ht.uniforms;const Pt=z.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Pt.clippingPlanes=gt.uniform),jp(M,ht),z.needsLights=dv(M),z.lightsStateVersion=dt,z.needsLights&&(Pt.ambientLightColor.value=O.state.ambient,Pt.lightProbe.value=O.state.probe,Pt.directionalLights.value=O.state.directional,Pt.directionalLightShadows.value=O.state.directionalShadow,Pt.spotLights.value=O.state.spot,Pt.spotLightShadows.value=O.state.spotShadow,Pt.rectAreaLights.value=O.state.rectArea,Pt.ltc_1.value=O.state.rectAreaLTC1,Pt.ltc_2.value=O.state.rectAreaLTC2,Pt.pointLights.value=O.state.point,Pt.pointLightShadows.value=O.state.pointShadow,Pt.hemisphereLights.value=O.state.hemi,Pt.directionalShadowMap.value=O.state.directionalShadowMap,Pt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pt.spotShadowMap.value=O.state.spotShadowMap,Pt.spotLightMatrix.value=O.state.spotLightMatrix,Pt.spotLightMap.value=O.state.spotLightMap,Pt.pointShadowMap.value=O.state.pointShadowMap,Pt.pointShadowMatrix.value=O.state.pointShadowMatrix),z.currentProgram=Lt,z.uniformsList=null,Lt}function qp(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=$l.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function jp(M,U){const G=v.get(M);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function uv(M,U,G,z,O){U.isScene!==!0&&(U=pe),I.resetTextureUnits();const at=U.fog,dt=z.isMeshStandardMaterial?U.environment:null,ht=F===null?x.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ca,_t=(z.isMeshStandardMaterial?Z:Y).get(z.envMap||dt),Tt=z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Lt=!!G.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Pt=!!G.morphAttributes.position,Ht=!!G.morphAttributes.normal,fe=!!G.morphAttributes.color;let Ue=Ji;z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ue=x.toneMapping);const Fe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=Fe!==void 0?Fe.length:0,Dt=v.get(z),he=y.state.lights;if(vt===!0&&(ee===!0||M!==H)){const xn=M===H&&z.id===W;gt.setState(z,M,xn)}let ne=!1;z.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==he.state.version||Dt.outputColorSpace!==ht||O.isBatchedMesh&&Dt.batching===!1||!O.isBatchedMesh&&Dt.batching===!0||O.isBatchedMesh&&Dt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Dt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Dt.instancing===!1||!O.isInstancedMesh&&Dt.instancing===!0||O.isSkinnedMesh&&Dt.skinning===!1||!O.isSkinnedMesh&&Dt.skinning===!0||O.isInstancedMesh&&Dt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Dt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Dt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Dt.instancingMorph===!1&&O.morphTexture!==null||Dt.envMap!==_t||z.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==gt.numPlanes||Dt.numIntersection!==gt.numIntersection)||Dt.vertexAlphas!==Tt||Dt.vertexTangents!==Lt||Dt.morphTargets!==Pt||Dt.morphNormals!==Ht||Dt.morphColors!==fe||Dt.toneMapping!==Ue||Dt.morphTargetsCount!==me)&&(ne=!0):(ne=!0,Dt.__version=z.version);let Wn=Dt.currentProgram;ne===!0&&(Wn=ml(z,U,O));let Ws=!1,Xn=!1,oo=!1;const Me=Wn.getUniforms(),An=Dt.uniforms;if(Mt.useProgram(Wn.program)&&(Ws=!0,Xn=!0,oo=!0),z.id!==W&&(W=z.id,Xn=!0),Ws||H!==M){Mt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Me.setValue(D,"projectionMatrix",M.projectionMatrix),Me.setValue(D,"viewMatrix",M.matrixWorldInverse);const wn=Me.map.cameraPosition;wn!==void 0&&wn.setValue(D,Jt.setFromMatrixPosition(M.matrixWorld)),ve.logarithmicDepthBuffer&&Me.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Me.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),H!==M&&(H=M,Xn=!0,oo=!0)}if(Dt.needsLights&&(he.state.directionalShadowMap.length>0&&Me.setValue(D,"directionalShadowMap",he.state.directionalShadowMap,I),he.state.spotShadowMap.length>0&&Me.setValue(D,"spotShadowMap",he.state.spotShadowMap,I),he.state.pointShadowMap.length>0&&Me.setValue(D,"pointShadowMap",he.state.pointShadowMap,I)),O.isSkinnedMesh){Me.setOptional(D,O,"bindMatrix"),Me.setOptional(D,O,"bindMatrixInverse");const xn=O.skeleton;xn&&(xn.boneTexture===null&&xn.computeBoneTexture(),Me.setValue(D,"boneTexture",xn.boneTexture,I))}O.isBatchedMesh&&(Me.setOptional(D,O,"batchingTexture"),Me.setValue(D,"batchingTexture",O._matricesTexture,I),Me.setOptional(D,O,"batchingIdTexture"),Me.setValue(D,"batchingIdTexture",O._indirectTexture,I),Me.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Me.setValue(D,"batchingColorTexture",O._colorsTexture,I));const fi=G.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&Gt.update(O,G,Wn),(Xn||Dt.receiveShadow!==O.receiveShadow)&&(Dt.receiveShadow=O.receiveShadow,Me.setValue(D,"receiveShadow",O.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(An.envMap.value=_t,An.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&U.environment!==null&&(An.envMapIntensity.value=U.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=FE()),Xn&&(Me.setValue(D,"toneMappingExposure",x.toneMappingExposure),Dt.needsLights&&fv(An,oo),at&&z.fog===!0&&It.refreshFogUniforms(An,at),It.refreshMaterialUniforms(An,z,Ot,Ut,y.state.transmissionRenderTarget[M.id]),$l.upload(D,qp(Dt),An,I)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&($l.upload(D,qp(Dt),An,I),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Me.setValue(D,"center",O.center),Me.setValue(D,"modelViewMatrix",O.modelViewMatrix),Me.setValue(D,"normalMatrix",O.normalMatrix),Me.setValue(D,"modelMatrix",O.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const xn=z.uniformsGroups;for(let wn=0,dh=xn.length;wn<dh;wn++){const ls=xn[wn];J.update(ls,Wn),J.bind(ls,Wn)}}return Wn}function fv(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function dv(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,U,G){const z=v.get(M);z.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),v.get(M.texture).__webglTexture=U,v.get(M.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:G,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const G=v.get(M);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const pv=D.createFramebuffer();this.setRenderTarget=function(M,U=0,G=0){F=M,P=U,k=G;let z=null,O=!1,at=!1;if(M){const ht=v.get(M);if(ht.__useDefaultFramebuffer!==void 0){Mt.bindFramebuffer(D.FRAMEBUFFER,ht.__webglFramebuffer),V.copy(M.viewport),B.copy(M.scissor),j=M.scissorTest,Mt.viewport(V),Mt.scissor(B),Mt.setScissorTest(j),W=-1;return}else if(ht.__webglFramebuffer===void 0)I.setupRenderTarget(M);else if(ht.__hasExternalTextures)I.rebindTextures(M,v.get(M.texture).__webglTexture,v.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Lt=M.depthTexture;if(ht.__boundDepthTexture!==Lt){if(Lt!==null&&v.has(Lt)&&(M.width!==Lt.image.width||M.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(M)}}const _t=M.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(at=!0);const Tt=v.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[U])?z=Tt[U][G]:z=Tt[U],O=!0):M.samples>0&&I.useMultisampledRTT(M)===!1?z=v.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?z=Tt[G]:z=Tt,V.copy(M.viewport),B.copy(M.scissor),j=M.scissorTest}else V.copy(q).multiplyScalar(Ot).floor(),B.copy($).multiplyScalar(Ot).floor(),j=mt;if(G!==0&&(z=pv),Mt.bindFramebuffer(D.FRAMEBUFFER,z)&&Mt.drawBuffers(M,z),Mt.viewport(V),Mt.scissor(B),Mt.setScissorTest(j),O){const ht=v.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,ht.__webglTexture,G)}else if(at){const ht=U;for(let _t=0;_t<M.textures.length;_t++){const Tt=v.get(M.textures[_t]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+_t,Tt.__webglTexture,G,ht)}}else if(M!==null&&G!==0){const ht=v.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(M,U,G,z,O,at,dt,ht=0){if(!(M&&M.isWebGLRenderTarget)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);try{const Tt=M.textures[ht],Lt=Tt.format,Pt=Tt.type;if(!ve.textureFormatReadable(Lt)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Pt)){ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-z&&G>=0&&G<=M.height-O&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ht),D.readPixels(U,G,z,O,tt.convert(Lt),tt.convert(Pt),at))}finally{const Tt=F!==null?v.get(F).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,U,G,z,O,at,dt,ht=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=v.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t)if(U>=0&&U<=M.width-z&&G>=0&&G<=M.height-O){Mt.bindFramebuffer(D.FRAMEBUFFER,_t);const Tt=M.textures[ht],Lt=Tt.format,Pt=Tt.type;if(!ve.textureFormatReadable(Lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(Pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.bufferData(D.PIXEL_PACK_BUFFER,at.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ht),D.readPixels(U,G,z,O,tt.convert(Lt),tt.convert(Pt),0);const fe=F!==null?v.get(F).__webglFramebuffer:null;Mt.bindFramebuffer(D.FRAMEBUFFER,fe);const Ue=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Zv(D,Ue,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ht),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,at),D.deleteBuffer(Ht),D.deleteSync(Ue),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,G=0){const z=Math.pow(2,-G),O=Math.floor(M.image.width*z),at=Math.floor(M.image.height*z),dt=U!==null?U.x:0,ht=U!==null?U.y:0;I.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,dt,ht,O,at),Mt.unbindTexture()};const mv=D.createFramebuffer(),_v=D.createFramebuffer();this.copyTextureToTexture=function(M,U,G=null,z=null,O=0,at=null){at===null&&(O!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=O,O=0):at=0);let dt,ht,_t,Tt,Lt,Pt,Ht,fe,Ue;const Fe=M.isCompressedTexture?M.mipmaps[at]:M.image;if(G!==null)dt=G.max.x-G.min.x,ht=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,Tt=G.min.x,Lt=G.min.y,Pt=G.isBox3?G.min.z:0;else{const fi=Math.pow(2,-O);dt=Math.floor(Fe.width*fi),ht=Math.floor(Fe.height*fi),M.isDataArrayTexture?_t=Fe.depth:M.isData3DTexture?_t=Math.floor(Fe.depth*fi):_t=1,Tt=0,Lt=0,Pt=0}z!==null?(Ht=z.x,fe=z.y,Ue=z.z):(Ht=0,fe=0,Ue=0);const me=tt.convert(U.format),Dt=tt.convert(U.type);let he;U.isData3DTexture?(I.setTexture3D(U,0),he=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(I.setTexture2DArray(U,0),he=D.TEXTURE_2D_ARRAY):(I.setTexture2D(U,0),he=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const ne=D.getParameter(D.UNPACK_ROW_LENGTH),Wn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ws=D.getParameter(D.UNPACK_SKIP_PIXELS),Xn=D.getParameter(D.UNPACK_SKIP_ROWS),oo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Fe.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Fe.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Pt);const Me=M.isDataArrayTexture||M.isData3DTexture,An=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const fi=v.get(M),xn=v.get(U),wn=v.get(fi.__renderTarget),dh=v.get(xn.__renderTarget);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,wn.__webglFramebuffer),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,dh.__webglFramebuffer);for(let ls=0;ls<_t;ls++)Me&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(M).__webglTexture,O,Pt+ls),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,v.get(U).__webglTexture,at,Ue+ls)),D.blitFramebuffer(Tt,Lt,dt,ht,Ht,fe,dt,ht,D.DEPTH_BUFFER_BIT,D.NEAREST);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||M.isRenderTargetTexture||v.has(M)){const fi=v.get(M),xn=v.get(U);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,mv),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,_v);for(let wn=0;wn<_t;wn++)Me?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,fi.__webglTexture,O,Pt+wn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,fi.__webglTexture,O),An?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,xn.__webglTexture,at,Ue+wn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xn.__webglTexture,at),O!==0?D.blitFramebuffer(Tt,Lt,dt,ht,Ht,fe,dt,ht,D.COLOR_BUFFER_BIT,D.NEAREST):An?D.copyTexSubImage3D(he,at,Ht,fe,Ue+wn,Tt,Lt,dt,ht):D.copyTexSubImage2D(he,at,Ht,fe,Tt,Lt,dt,ht);Mt.bindFramebuffer(D.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else An?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(he,at,Ht,fe,Ue,dt,ht,_t,me,Dt,Fe.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(he,at,Ht,fe,Ue,dt,ht,_t,me,Fe.data):D.texSubImage3D(he,at,Ht,fe,Ue,dt,ht,_t,me,Dt,Fe):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,at,Ht,fe,dt,ht,me,Dt,Fe.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,at,Ht,fe,Fe.width,Fe.height,me,Fe.data):D.texSubImage2D(D.TEXTURE_2D,at,Ht,fe,dt,ht,me,Dt,Fe);D.pixelStorei(D.UNPACK_ROW_LENGTH,ne),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Wn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ws),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oo),at===0&&U.generateMipmaps&&D.generateMipmap(he),Mt.unbindTexture()},this.initRenderTarget=function(M){v.get(M).__webglFramebuffer===void 0&&I.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?I.setTextureCube(M,0):M.isData3DTexture?I.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?I.setTexture2DArray(M,0):I.setTexture2D(M,0),Mt.unbindTexture()},this.resetState=function(){P=0,k=0,F=null,Mt.reset(),ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}const Km={type:"change"},pd={type:"start"},sg={type:"end"},Ol=new H_,Zm=new Or,OE=Math.cos(70*Jv.DEG2RAD),$e=new N,Rn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yh=1e-6;class BE extends z2{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ma.ROTATE,MIDDLE:ma.DOLLY,RIGHT:ma.PAN},this.touches={ONE:ua.ROTATE,TWO:ua.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new Fs,this._lastTargetPosition=new N,this._quat=new Fs().setFromUnitVectors(t.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bm,this._sphericalDelta=new bm,this._scale=1,this._panOffset=new N,this._rotateStart=new Rt,this._rotateEnd=new Rt,this._rotateDelta=new Rt,this._panStart=new Rt,this._panEnd=new Rt,this._panDelta=new Rt,this._dollyStart=new Rt,this._dollyEnd=new Rt,this._dollyDelta=new Rt,this._dollyDirection=new N,this._mouse=new Rt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zE.bind(this),this._onPointerDown=kE.bind(this),this._onPointerUp=VE.bind(this),this._onContextMenu=jE.bind(this),this._onMouseWheel=WE.bind(this),this._onKeyDown=XE.bind(this),this._onTouchStart=YE.bind(this),this._onTouchMove=qE.bind(this),this._onMouseDown=GE.bind(this),this._onMouseMove=HE.bind(this),this._interceptControlDown=KE.bind(this),this._interceptControlUp=ZE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Km),this.update(),this.state=de.NONE}update(t=null){const e=this.object.position;$e.copy(e).sub(this.target),$e.applyQuaternion(this._quat),this._spherical.setFromVector3($e),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Rn:i>Math.PI&&(i-=Rn),r<-Math.PI?r+=Rn:r>Math.PI&&(r-=Rn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if($e.setFromSpherical(this._spherical),$e.applyQuaternion(this._quatInverse),e.copy(this.target).add($e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=$e.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new N(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new N(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=$e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ol.origin.copy(this.object.position),Ol.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ol.direction))<OE?this.object.lookAt(this.target):(Zm.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ol.intersectPlane(Zm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Yh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yh||this._lastTargetPosition.distanceToSquared(this.target)>Yh?(this.dispatchEvent(Km),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Rn/60*this.autoRotateSpeed*t:Rn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){$e.setFromMatrixColumn(e,0),$e.multiplyScalar(-t),this._panOffset.add($e)}_panUp(t,e){this.screenSpacePanning===!0?$e.setFromMatrixColumn(e,1):($e.setFromMatrixColumn(e,0),$e.crossVectors(this.object.up,$e)),$e.multiplyScalar(t),this._panOffset.add($e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;$e.copy(r).sub(this.target);let s=$e.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*e*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=e-i.top,a=i.width,o=i.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Rn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Rn*this._rotateDelta.x/e.clientHeight),this._rotateUp(Rn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Rt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function kE(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function zE(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function VE(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(sg),this.state=de.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function GE(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ma.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=de.DOLLY;break;case ma.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}break;case ma.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(pd)}function HE(n){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function WE(n){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(n.preventDefault(),this.dispatchEvent(pd),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(sg))}function XE(n){this.enabled!==!1&&this._handleKeyDown(n)}function YE(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ua.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=de.TOUCH_ROTATE;break;case ua.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case ua.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=de.TOUCH_DOLLY_PAN;break;case ua.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(pd)}function qE(n){switch(this._trackPointer(n),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=de.NONE}}function jE(n){this.enabled!==!1&&n.preventDefault()}function KE(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function ZE(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class al{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $E=new dd(-1,1,1,-1,0,1);class JE extends Ii{constructor(){super(),this.setAttribute("position",new Un([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Un([0,2,0,0,2,0],2))}}const QE=new JE;class ag{constructor(t){this._mesh=new zn(QE,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,$E)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class og extends al{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof cn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=hc.clone(t.uniforms),this.material=new cn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new ag(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class $m extends al{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class tb extends al{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class lg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Rt);this._width=i.width,this._height=i.height,e=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ii}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new og(Jl),this.copyPass.material.blending=$i,this.clock=new k2}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}$m!==void 0&&(a instanceof $m?i=!0:a instanceof tb&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eb extends al{constructor(t,e,i=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xt}render(t,e,i){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const nb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Pa extends al{constructor(t,e=1,i,r){super(),this.strength=e,this.radius=i,this.threshold=r,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new Xt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new In(s,a,{type:ii}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new In(s,a,{type:ii});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new In(s,a,{type:ii});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=nb;this.highPassUniforms=hc.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Rt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=hc.clone(Jl.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:Jl.vertexShader,fragmentShader:Jl.fragmentShader,premultipliedAlpha:!0,blending:vu,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xt,this._oldClearAlpha=1,this._basic=new il,this._fsQuad=new ag(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Rt(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(t,e,i,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Pa.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Pa.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let r=0;r<t;r++)e.push(.39894*Math.exp(-.5*r*r/(i*i))/i);return new cn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new cn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Pa.BlurDirectionX=new Rt(1,0);Pa.BlurDirectionY=new Rt(0,1);var Da=typeof self<"u"?self:{};function ms(){throw Error("Invalid UTF8")}function Jm(n,t){return t=String.fromCharCode.apply(null,t),n==null?t:n+t}let Bl,qh;const ib=typeof TextDecoder<"u";let rb;const sb=typeof TextEncoder<"u";function cg(n){if(sb)n=(rb||=new TextEncoder).encode(n);else{let e=0;const i=new Uint8Array(3*n.length);for(let r=0;r<n.length;r++){var t=n.charCodeAt(r);if(t<128)i[e++]=t;else{if(t<2048)i[e++]=t>>6|192;else{if(t>=55296&&t<=57343){if(t<=56319&&r<n.length){const s=n.charCodeAt(++r);if(s>=56320&&s<=57343){t=1024*(t-55296)+s-56320+65536,i[e++]=t>>18|240,i[e++]=t>>12&63|128,i[e++]=t>>6&63|128,i[e++]=63&t|128;continue}r--}t=65533}i[e++]=t>>12|224,i[e++]=t>>6&63|128}i[e++]=63&t|128}}n=e===i.length?i:i.subarray(0,e)}return n}var md,uc;t:{for(var Qm=["CLOSURE_FLAGS"],jh=Da,Kh=0;Kh<Qm.length;Kh++)if((jh=jh[Qm[Kh]])==null){uc=null;break t}uc=jh}var zo,t0=uc&&uc[610401301];md=t0!=null&&t0;const e0=Da.navigator;function mf(n){return!!md&&!!zo&&zo.brands.some((({brand:t})=>t&&t.indexOf(n)!=-1))}function vi(n){var t;return(t=Da.navigator)&&(t=t.userAgent)||(t=""),t.indexOf(n)!=-1}function kr(){return!!md&&!!zo&&zo.brands.length>0}function Zh(){return kr()?mf("Chromium"):(vi("Chrome")||vi("CriOS"))&&!(!kr()&&vi("Edge"))||vi("Silk")}function Lc(n){return Lc[" "](n),n}zo=e0&&e0.userAgentData||null,Lc[" "]=function(){};var ab=!kr()&&(vi("Trident")||vi("MSIE"));!vi("Android")||Zh(),Zh(),vi("Safari")&&(Zh()||!kr()&&vi("Coast")||!kr()&&vi("Opera")||!kr()&&vi("Edge")||(kr()?mf("Microsoft Edge"):vi("Edg/"))||kr()&&mf("Opera"));var hg={},bo=null;function ob(n){const t=n.length;let e=3*t/4;e%3?e=Math.floor(e):"=.".indexOf(n[t-1])!=-1&&(e="=.".indexOf(n[t-2])!=-1?e-2:e-1);const i=new Uint8Array(e);let r=0;return(function(s,a){function o(c){for(;l<s.length;){const h=s.charAt(l++),u=bo[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return c}ug();let l=0;for(;;){const c=o(-1),h=o(0),u=o(64),f=o(64);if(f===64&&c===-1)break;a(c<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),f!=64&&a(u<<6&192|f))}})(n,(function(s){i[r++]=s})),r!==e?i.subarray(0,r):i}function ug(){if(!bo){bo={};var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),t=["+/=","+/","-_=","-_.","-_"];for(let e=0;e<5;e++){const i=n.concat(t[e].split(""));hg[e]=i;for(let r=0;r<i.length;r++){const s=i[r];bo[s]===void 0&&(bo[s]=r)}}}}var fg=typeof Uint8Array<"u",dg=!ab&&typeof btoa=="function";function n0(n){if(!dg){var t;t===void 0&&(t=0),ug(),t=hg[t];var e=Array(Math.floor(n.length/3)),i=t[64]||"";let l=0,c=0;for(;l<n.length-2;l+=3){var r=n[l],s=n[l+1],a=n[l+2],o=t[r>>2];r=t[(3&r)<<4|s>>4],s=t[(15&s)<<2|a>>6],a=t[63&a],e[c++]=o+r+s+a}switch(o=0,a=i,n.length-l){case 2:a=t[(15&(o=n[l+1]))<<2]||i;case 1:n=n[l],e[c]=t[n>>2]+t[(3&n)<<4|o>>4]+a+i}return e.join("")}for(t="",e=0,i=n.length-10240;e<i;)t+=String.fromCharCode.apply(null,n.subarray(e,e+=10240));return t+=String.fromCharCode.apply(null,e?n.subarray(e):n),btoa(t)}const i0=/[-_.]/g,lb={"-":"+",_:"/",".":"="};function cb(n){return lb[n]||""}function pg(n){if(!dg)return ob(n);i0.test(n)&&(n=n.replace(i0,cb)),n=atob(n);const t=new Uint8Array(n.length);for(let e=0;e<n.length;e++)t[e]=n.charCodeAt(e);return t}function Ns(n){return fg&&n!=null&&n instanceof Uint8Array}var La={};function Os(){return hb||=new Mr(null,La)}function _d(n){mg(La);var t=n.g;return(t=t==null||Ns(t)?t:typeof t=="string"?pg(t):null)==null?t:n.g=t}var Mr=class{h(){return new Uint8Array(_d(this)||0)}constructor(n,t){if(mg(t),this.g=n,n!=null&&n.length===0)throw Error("ByteString should be constructed with non-empty values")}};let hb,ub;function mg(n){if(n!==La)throw Error("illegal external caller")}function _g(n,t){n.__closure__error__context__984382||(n.__closure__error__context__984382={}),n.__closure__error__context__984382.severity=t}function _f(n){return _g(n=Error(n),"warning"),n}function gd(n){if(n!=null){var t=ub??={},e=t[n]||0;e>=5||(t[n]=e+1,_g(n=Error(),"incident"),(function(i){Da.setTimeout((()=>{throw i}),0)})(n))}}var Ic=typeof Symbol=="function"&&typeof Symbol()=="symbol";function $a(n,t,e=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?e&&Symbol.for&&n?Symbol.for(n):n!=null?Symbol(n):Symbol():t}var fb=$a("jas",void 0,!0),r0=$a(void 0,"0di"),xo=$a(void 0,"1oa"),Ia=$a(void 0,Symbol()),db=$a(void 0,"0actk"),gg=$a(void 0,"8utk");const wt=Ic?fb:"Ea",xg={Ea:{value:0,configurable:!0,writable:!0,enumerable:!1}},vg=Object.defineProperties;function Uc(n,t){Ic||wt in n||vg(n,xg),n[wt]|=t}function je(n,t){Ic||wt in n||vg(n,xg),n[wt]=t}function Ja(n){return Uc(n,34),n}function pb(n,t){je(t,-15615&(0|n))}function gf(n,t){je(t,-15581&(34|n))}function Fc(){return typeof BigInt=="function"}function Fn(n){return Array.prototype.slice.call(n)}var xd,ol={};function Nc(n){return n!==null&&typeof n=="object"&&!Array.isArray(n)&&n.constructor===Object}function vd(n,t){if(n!=null){if(typeof n=="string")n=n?new Mr(n,La):Os();else if(n.constructor!==Mr)if(Ns(n))n=n.length?new Mr(new Uint8Array(n),La):Os();else{if(!t)throw Error();n=void 0}}return n}const s0=[];function is(n){if(2&n)throw Error()}je(s0,55),xd=Object.freeze(s0);class a0{constructor(t,e,i){this.g=t,this.h=e,this.l=i}next(){const t=this.g.next();return t.done||(t.value=this.h.call(this.l,t.value)),t}[Symbol.iterator](){return this}}function Sd(n){return Ia?n[Ia]:void 0}var mb=Object.freeze({});function Oc(n){return n.Na=!0,n}var _b=Oc((n=>typeof n=="number")),o0=Oc((n=>typeof n=="string")),gb=Oc((n=>typeof n=="boolean")),Bc=typeof Da.BigInt=="function"&&typeof Da.BigInt(0)=="bigint";function Xr(n){var t=n;if(o0(t)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(t))throw Error(String(t))}else if(_b(t)&&!Number.isSafeInteger(t))throw Error(String(t));return Bc?BigInt(n):n=gb(n)?n?"1":"0":o0(n)?n.trim()||"0":String(n)}var xf=Oc((n=>Bc?n>=vb&&n<=Mb:n[0]==="-"?l0(n,xb):l0(n,Sb)));const xb=Number.MIN_SAFE_INTEGER.toString(),vb=Bc?BigInt(Number.MIN_SAFE_INTEGER):void 0,Sb=Number.MAX_SAFE_INTEGER.toString(),Mb=Bc?BigInt(Number.MAX_SAFE_INTEGER):void 0;function l0(n,t){if(n.length>t.length)return!1;if(n.length<t.length||n===t)return!0;for(let e=0;e<n.length;e++){const i=n[e],r=t[e];if(i>r)return!1;if(i<r)return!0}}const yb=typeof Uint8Array.prototype.slice=="function";let Sg,ge=0,Oe=0;function c0(n){const t=n>>>0;ge=t,Oe=(n-t)/4294967296>>>0}function Bs(n){if(n<0){c0(-n);const[t,e]=bd(ge,Oe);ge=t>>>0,Oe=e>>>0}else c0(n)}function Md(n){const t=Sg||=new DataView(new ArrayBuffer(8));t.setFloat32(0,+n,!0),Oe=0,ge=t.getUint32(0,!0)}function yd(n,t){const e=4294967296*t+(n>>>0);return Number.isSafeInteger(e)?e:Vo(n,t)}function Ed(n,t){const e=2147483648&t;return e&&(t=~t>>>0,(n=1+~n>>>0)==0&&(t=t+1>>>0)),typeof(n=yd(n,t))=="number"?e?-n:n:e?"-"+n:n}function Vo(n,t){if(n>>>=0,(t>>>=0)<=2097151)var e=""+(4294967296*t+n);else Fc()?e=""+(BigInt(t)<<BigInt(32)|BigInt(n)):(n=(16777215&n)+6777216*(e=16777215&(n>>>24|t<<8))+6710656*(t=t>>16&65535),e+=8147497*t,t*=2,n>=1e7&&(e+=n/1e7>>>0,n%=1e7),e>=1e7&&(t+=e/1e7>>>0,e%=1e7),e=t+h0(e)+h0(n));return e}function h0(n){return n=String(n),"0000000".slice(n.length)+n}function Mg(){var n=ge,t=Oe;if(2147483648&t)if(Fc())n=""+(BigInt(0|t)<<BigInt(32)|BigInt(n>>>0));else{const[e,i]=bd(n,t);n="-"+Vo(e,i)}else n=Vo(n,t);return n}function kc(n){if(n.length<16)Bs(Number(n));else if(Fc())n=BigInt(n),ge=Number(n&BigInt(4294967295))>>>0,Oe=Number(n>>BigInt(32)&BigInt(4294967295));else{const t=+(n[0]==="-");Oe=ge=0;const e=n.length;for(let i=t,r=(e-t)%6+t;r<=e;i=r,r+=6){const s=Number(n.slice(i,r));Oe*=1e6,ge=1e6*ge+s,ge>=4294967296&&(Oe+=Math.trunc(ge/4294967296),Oe>>>=0,ge>>>=0)}if(t){const[i,r]=bd(ge,Oe);ge=i,Oe=r}}}function bd(n,t){return t=~t,n?n=1+~n:t+=1,[n,t]}const Go=typeof BigInt=="function"?BigInt.asIntN:void 0,Eb=typeof BigInt=="function"?BigInt.asUintN:void 0,Yr=Number.isSafeInteger,zc=Number.isFinite,Ua=Math.trunc,bb=Xr(0);function rs(n){return n==null||typeof n=="number"?n:n==="NaN"||n==="Infinity"||n==="-Infinity"?Number(n):void 0}function yg(n){return n==null||typeof n=="boolean"?n:typeof n=="number"?!!n:void 0}const Tb=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function Ho(n){switch(typeof n){case"bigint":return!0;case"number":return zc(n);case"string":return Tb.test(n);default:return!1}}function Qa(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return zc(n)?0|n:void 0}function Eg(n){if(n==null)return n;if(typeof n=="string"&&n)n=+n;else if(typeof n!="number")return;return zc(n)?n>>>0:void 0}function u0(n){if(n[0]==="-")return!1;const t=n.length;return t<20||t===20&&Number(n.substring(0,6))<184467}function bg(n){const t=n.length;return n[0]==="-"?t<20||t===20&&Number(n.substring(0,7))>-922337:t<19||t===19&&Number(n.substring(0,6))<922337}function Tg(n){return bg(n)?n:(kc(n),Mg())}function Td(n){return n=Ua(n),Yr(n)||(Bs(n),n=Ed(ge,Oe)),n}function Ag(n){var t=Ua(Number(n));return Yr(t)?String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),Tg(n))}function f0(n){var t=Ua(Number(n));return Yr(t)?Xr(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),Fc()?Xr(Go(64,BigInt(n))):Xr(Tg(n)))}function d0(n){if(Yr(n))n=Xr(Td(n));else{if(n=Ua(n),Yr(n))n=String(n);else{const t=String(n);bg(t)?n=t:(Bs(n),n=Mg())}n=Xr(n)}return n}function vf(n){return n==null?n:typeof n=="bigint"?(xf(n)?n=Number(n):(n=Go(64,n),n=xf(n)?Number(n):String(n)),n):Ho(n)?typeof n=="number"?Td(n):Ag(n):void 0}function Ab(n){if(n==null)return n;var t=typeof n;if(t==="bigint")return String(Eb(64,n));if(Ho(n)){if(t==="string")return t=Ua(Number(n)),Yr(t)&&t>=0?n=String(t):((t=n.indexOf("."))!==-1&&(n=n.substring(0,t)),u0(n)||(kc(n),n=Vo(ge,Oe))),n;if(t==="number")return(n=Ua(n))>=0&&Yr(n)?n:(function(e){if(e<0){Bs(e);var i=Vo(ge,Oe);return e=Number(i),Yr(e)?e:i}return u0(i=String(e))?i:(Bs(e),yd(ge,Oe))})(n)}}function wg(n){if(typeof n!="string")throw Error();return n}function to(n){if(n!=null&&typeof n!="string")throw Error();return n}function Fa(n){return n==null||typeof n=="string"?n:void 0}function Ad(n,t,e,i){if(n!=null&&typeof n=="object"&&n.W===ol)return n;if(!Array.isArray(n))return e?2&i?((n=t[r0])||(Ja((n=new t).u),n=t[r0]=n),t=n):t=new t:t=void 0,t;let r=e=0|n[wt];return r===0&&(r|=32&i),r|=2&i,r!==e&&je(n,r),new t(n)}function wb(n,t,e){if(t)t:{if(!Ho(t=n))throw _f("int64");switch(typeof t){case"string":t=f0(t);break t;case"bigint":t=Xr(Go(64,t));break t;default:t=d0(t)}}else n=typeof(t=n),t=t==null?t:n==="bigint"?Xr(Go(64,t)):Ho(t)?n==="string"?f0(t):d0(t):void 0;return(n=t)==null?e?bb:void 0:n}function Cb(n){return n}const Rb={};let Pb=(function(){try{return Lc(new class extends Map{constructor(){super()}}),!1}catch{return!0}})();class $h{constructor(){this.g=new Map}get(t){return this.g.get(t)}set(t,e){return this.g.set(t,e),this.size=this.g.size,this}delete(t){return t=this.g.delete(t),this.size=this.g.size,t}clear(){this.g.clear(),this.size=this.g.size}has(t){return this.g.has(t)}entries(){return this.g.entries()}keys(){return this.g.keys()}values(){return this.g.values()}forEach(t,e){return this.g.forEach(t,e)}[Symbol.iterator](){return this.entries()}}const Db=Pb?(Object.setPrototypeOf($h.prototype,Map.prototype),Object.defineProperties($h.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),$h):class extends Map{constructor(){super()}};function p0(n){return n}function Jh(n){if(2&n.M)throw Error("Cannot mutate an immutable Map")}var nr=class extends Db{constructor(n,t,e=p0,i=p0){super();let r=0|n[wt];r|=64,je(n,r),this.M=r,this.I=t,this.S=e,this.X=this.I?Lb:i;for(let s=0;s<n.length;s++){const a=n[s],o=e(a[0],!1,!0);let l=a[1];t?l===void 0&&(l=null):l=i(a[1],!1,!0,void 0,void 0,r),super.set(o,l)}}La(){var n=Ob;if(this.size!==0)return Array.from(super.entries(),(t=>(t[0]=n(t[0]),t[1]=n(t[1]),t)))}da(n=Ib){const t=[],e=super.entries();for(var i;!(i=e.next()).done;)(i=i.value)[0]=n(i[0]),i[1]=n(i[1]),t.push(i);return t}clear(){Jh(this),super.clear()}delete(n){return Jh(this),super.delete(this.S(n,!0,!1))}entries(){if(this.I){var n=super.keys();n=new a0(n,Ub,this)}else n=super.entries();return n}values(){if(this.I){var n=super.keys();n=new a0(n,nr.prototype.get,this)}else n=super.values();return n}forEach(n,t){this.I?super.forEach(((e,i,r)=>{n.call(t,r.get(i),i,r)})):super.forEach(n,t)}set(n,t){return Jh(this),(n=this.S(n,!0,!1))==null?this:t==null?(super.delete(n),this):super.set(n,this.X(t,!0,!0,this.I,!1,this.M))}Ja(n){const t=this.S(n[0],!1,!0);n=n[1],n=this.I?n===void 0?null:n:this.X(n,!1,!0,void 0,!1,this.M),super.set(t,n)}has(n){return super.has(this.S(n,!1,!1))}get(n){n=this.S(n,!1,!1);const t=super.get(n);if(t!==void 0){var e=this.I;return e?((e=this.X(t,!1,!0,e,this.pa,this.M))!==t&&super.set(n,e),e):t}}[Symbol.iterator](){return this.entries()}};function Lb(n,t,e,i,r,s){return n=Ad(n,i,e,s),r&&(n=Hc(n)),n}function Ib(n){return n}function Ub(n){return[n,this.get(n)]}let Fb,Cg,Rg,Nb;function m0(){return Fb||=new nr(Ja([]),void 0,void 0,void 0,Rb)}function Sf(n,t,e,i,r){if(n!=null){if(Array.isArray(n)){const s=0|n[wt];return n.length===0&&1&s?void 0:r&&2&s?n:Vc(n,t,e,i!==void 0,r)}return t(n,i)}}function Vc(n,t,e,i,r){const s=i||e?0|n[wt]:0,a=i?!!(32&s):void 0;let o=0;const l=(i=Fn(n)).length;for(let g=0;g<l;g++){var c=i[g];if(g===l-1&&Nc(c)){var h=t,u=e,f=a,p=r;let _;for(let m in c){const d=Sf(c[m],h,u,f,p);d!=null&&((_??={})[m]=d)}c=_}else c=Sf(i[g],t,e,a,r);i[g]=c,c!=null&&(o=g+1)}return o<l&&(i.length=o),e&&((n=Sd(n))&&(i[Ia]=Fn(n)),e(s,i)),i}function Ob(n){return Sf(n,wd,void 0,void 0,!1)}function wd(n){switch(typeof n){case"number":return Number.isFinite(n)?n:""+n;case"bigint":return xf(n)?Number(n):""+n;case"boolean":return n?1:0;case"object":if(Ns(n))return Ns(n)&&gd(gg),n0(n);if(n.W===ol)return Pg(n);if(n instanceof Mr){const t=n.g;return t==null?"":typeof t=="string"?t:n.g=n0(t)}return n instanceof nr?n.La():void 0}return n}function Pg(n){var t=n.u;n=Vc(t,wd,void 0,void 0,!1);var e=0|t[wt];if((t=n.length)&&!(512&e)){var i=n[t-1],r=!1;Nc(i)?(t--,r=!0):i=void 0;var s=t-(e=512&e?0:-1),a=(Cg??Cb)(s,e,n,i);if(i&&(n[t]=void 0),s<a&&i){for(var o in s=!0,i){const l=+o;l<=a?(n[r=l+e]=i[o],t=Math.max(r+1,t),r=!1,delete i[o]):s=!1}s&&(i=void 0)}for(s=t-1;t>0;s=t-1)if((o=n[s])==null)t--,r=!0;else{if(!((s-=e)>=a))break;(i??={})[s]=o,t--,r=!0}r&&(n.length=t),i&&n.push(i)}return n}function qr(n,t,e){return n=Dg(n,t[0],t[1],e?1:2),t!==Rg&&e&&Uc(n,8192),n}function Dg(n,t,e,i){if(n==null){var r=96;e?(n=[e],r|=512):n=[],t&&(r=-16760833&r|(1023&t)<<14)}else{if(!Array.isArray(n))throw Error("narr");if(8192&(r=0|n[wt])||!(64&r)||2&r||gd(db),1024&r)throw Error("farr");if(64&r)return n;if(i===1||i===2||(r|=64),e&&(r|=512,e!==n[0]))throw Error("mid");t:{var s=(e=n).length;if(s){var a=s-1;if(Nc(i=e[a])){if((a-=t=512&(r|=256)?0:-1)>=1024)throw Error("pvtlmt");for(var o in i)(s=+o)<a&&(e[s+t]=i[o],delete i[o]);r=-16760833&r|(1023&a)<<14;break t}}if(t){if((o=Math.max(t,s-(512&r?0:-1)))>1024)throw Error("spvt");r=-16760833&r|(1023&o)<<14}}}return je(n,r),n}function Mf(n,t,e=gf){if(n!=null){if(fg&&n instanceof Uint8Array)return t?n:new Uint8Array(n);if(Array.isArray(n)){var i=0|n[wt];return 2&i?n:(t&&=i===0||!!(32&i)&&!(64&i||!(16&i)),t?(je(n,34|i),4&i&&Object.freeze(n),n):Vc(n,Mf,4&i?gf:e,!0,!0))}return n.W===ol?n=2&(i=0|(e=n.u)[wt])?n:new n.constructor(Gc(e,i,!0)):n instanceof nr&&!(2&n.M)&&(e=Ja(n.da(Mf)),n=new nr(e,n.I,n.S,n.X)),n}}function Gc(n,t,e){const i=e||2&t?gf:pb,r=!!(32&t);return n=(function(s,a,o){const l=Fn(s);var c=l.length;const h=256&a?l[c-1]:void 0;for(c+=h?-1:0,a=512&a?1:0;a<c;a++)l[a]=o(l[a]);if(h){a=l[a]={};for(const u in h)a[u]=o(h[u])}return(s=Sd(s))&&(l[Ia]=Fn(s)),l})(n,t,(s=>Mf(s,r,i))),Uc(n,32|(e?2:0)),n}function Hc(n){const t=n.u,e=0|t[wt];return 2&e?new n.constructor(Gc(t,e,!1)):n}function Na(n,t){return Rr(n=n.u,0|n[wt],t)}function Rr(n,t,e){if(e===-1)return null;const i=e+(512&t?0:-1),r=n.length-1;return i>=r&&256&t?n[r][e]:i<=r?n[i]:void 0}function ye(n,t,e){const i=n.u;let r=0|i[wt];return is(r),Ie(i,r,t,e),n}function Ie(n,t,e,i){const r=512&t?0:-1,s=e+r;var a=n.length-1;return s>=a&&256&t?(n[a][e]=i,t):s<=a?(n[s]=i,t):(i!==void 0&&(e>=(a=t>>14&1023||536870912)?i!=null&&(n[a+r]={[e]:i},je(n,t|=256)):n[s]=i),t)}function Ql(n,t){let e=0|(n=n.u)[wt];const i=Rr(n,e,t),r=rs(i);return r!=null&&r!==i&&Ie(n,e,t,r),r}function Lg(n){let t=0|(n=n.u)[wt];const e=Rr(n,t,1),i=vd(e,!0);return i!=null&&i!==e&&Ie(n,t,1,i),i}function Ts(){return mb===void 0?2:4}function As(n,t,e,i,r){const s=n.u,a=2&(n=0|s[wt])?1:i;r=!!r;let o=0|(i=Cd(s,n,t))[wt];if(!(4&o)){4&o&&(i=Fn(i),o=yr(o,n),n=Ie(s,n,t,i));let l=0,c=0;for(;l<i.length;l++){const h=e(i[l]);h!=null&&(i[c++]=h)}c<l&&(i.length=c),o=Rd(o,n),e=-2049&(20|o),o=e&=-4097,je(i,o),2&o&&Object.freeze(i)}return a===1||a===4&&32&o?vr(o)||(r=o,o|=2,o!==r&&je(i,o),Object.freeze(i)):(a===2&&vr(o)&&(i=Fn(i),o=yr(o,n),o=jr(o,n,r),je(i,o),n=Ie(s,n,t,i)),vr(o)||(t=o,o=jr(o,n,r),o!==t&&je(i,o))),i}function Cd(n,t,e){return n=Rr(n,t,e),Array.isArray(n)?n:xd}function Rd(n,t){return n===0&&(n=yr(n,t)),1|n}function vr(n){return!!(2&n)&&!!(4&n)||!!(1024&n)}function Ig(n){n=Fn(n);for(let t=0;t<n.length;t++){const e=n[t]=Fn(n[t]);Array.isArray(e[1])&&(e[1]=Ja(e[1]))}return n}function yf(n,t,e,i){let r=0|(n=n.u)[wt];is(r),Ie(n,r,t,(i==="0"?Number(e)===0:e===i)?void 0:e)}function eo(n,t,e,i){is(t);let r=Cd(n,t,e);const s=r!==xd;if(64&t||!(8192&t)||!s){const a=s?0|r[wt]:0;let o=a;(!s||2&o||vr(o)||4&o&&!(32&o))&&(r=Fn(r),o=yr(o,t),t=Ie(n,t,e,r)),o=-13&Rd(o,t),o=jr(i?-17&o:16|o,t,!0),o!==a&&je(r,o)}return r}function Qh(n,t){var e=M1;return Dd(Pd(n=n.u),n,0|n[wt],e)===t?t:-1}function Pd(n){if(Ic)return n[xo]??(n[xo]=new Map);if(xo in n)return n[xo];const t=new Map;return Object.defineProperty(n,xo,{value:t}),t}function Ug(n,t,e,i){const r=Pd(n),s=Dd(r,n,t,e);return s!==i&&(s&&(t=Ie(n,t,s)),r.set(e,i)),t}function Dd(n,t,e,i){let r=n.get(i);if(r!=null)return r;r=0;for(let s=0;s<i.length;s++){const a=i[s];Rr(t,e,a)!=null&&(r!==0&&(e=Ie(t,e,r)),r=a)}return n.set(i,r),r}function Ld(n,t,e){let i=0|n[wt];const r=Rr(n,i,e);let s;if(r!=null&&r.W===ol)return(t=Hc(r))!==r&&Ie(n,i,e,t),t.u;if(Array.isArray(r)){const a=0|r[wt];s=2&a?qr(Gc(r,a,!1),t,!0):64&a?r:qr(s,t,!0)}else s=qr(void 0,t,!0);return s!==r&&Ie(n,i,e,s),s}function Fg(n,t,e){let i=0|(n=n.u)[wt];const r=Rr(n,i,e);return(t=Ad(r,t,!1,i))!==r&&t!=null&&Ie(n,i,e,t),t}function te(n,t,e){if((t=Fg(n,t,e))==null)return t;let i=0|(n=n.u)[wt];if(!(2&i)){const r=Hc(t);r!==t&&Ie(n,i,e,t=r)}return t}function Ng(n,t,e,i,r,s,a){n=n.u;var o=!!(2&t);const l=o?1:r;s=!!s,a&&=!o;var c=0|(r=Cd(n,t,i))[wt];if(!(o=!!(4&c))){var h=r,u=t;const f=!!(2&(c=Rd(c,t)));f&&(u|=2);let p=!f,g=!0,_=0,m=0;for(;_<h.length;_++){const d=Ad(h[_],e,!1,u);if(d instanceof e){if(!f){const S=!!(2&(0|d.u[wt]));p&&=!S,g&&=S}h[m++]=d}}m<_&&(h.length=m),c|=4,c=g?16|c:-17&c,je(h,c=p?8|c:-9&c),f&&Object.freeze(h)}if(a&&!(8&c||!r.length&&(l===1||l===4&&32&c))){for(vr(c)&&(r=Fn(r),c=yr(c,t),t=Ie(n,t,i,r)),e=r,a=c,h=0;h<e.length;h++)(c=e[h])!==(u=Hc(c))&&(e[h]=u);a|=8,je(e,a=e.length?-17&a:16|a),c=a}return l===1||l===4&&32&c?vr(c)||(t=c,(c|=!r.length||16&c&&(!o||32&c)?2:1024)!==t&&je(r,c),Object.freeze(r)):(l===2&&vr(c)&&(je(r=Fn(r),c=jr(c=yr(c,t),t,s)),t=Ie(n,t,i,r)),vr(c)||(i=c,(c=jr(c,t,s))!==i&&je(r,c))),r}function Tr(n,t,e){const i=0|n.u[wt];return Ng(n,i,t,e,Ts(),!1,!(2&i))}function Ct(n,t,e,i){return i==null&&(i=void 0),ye(n,e,i)}function Co(n,t,e,i){i==null&&(i=void 0);t:{let r=0|(n=n.u)[wt];if(is(r),i==null){const s=Pd(n);if(Dd(s,n,r,e)!==t)break t;s.set(e,0)}else r=Ug(n,r,e,t);Ie(n,r,t,i)}}function yr(n,t){return-1025&(n=32|(2&t?2|n:-3&n))}function jr(n,t,e){return 32&t&&e||(n&=-33),n}function Wc(n,t,e){is(0|n.u[wt]),As(n,t,Fa,2,!0).push(wg(e))}function fc(n,t,e,i){const r=0|n.u[wt];is(r),n=Ng(n,r,e,t,2,!0),i=i??new e,n.push(i),n[wt]=2&(0|i.u[wt])?-9&n[wt]:-17&n[wt]}function Si(n,t){return Qa(Na(n,t))}function Ei(n,t){return Fa(Na(n,t))}function Ve(n,t){return Ql(n,t)??0}function Wo(n,t,e){if(e!=null&&typeof e!="boolean")throw n=typeof e,Error(`Expected boolean but got ${n!="object"?n:e?Array.isArray(e)?"array":n:"null"}: ${e}`);ye(n,t,e)}function ir(n,t,e){if(e!=null){if(typeof e!="number"||!zc(e))throw _f("int32");e|=0}ye(n,t,e)}function Et(n,t,e){if(e!=null&&typeof e!="number")throw Error(`Value of float/double field must be a number, found ${typeof e}: ${e}`);ye(n,t,e)}function dc(n,t,e){{const a=n.u;let o=0|a[wt];if(is(o),e==null)Ie(a,o,t);else{var i=n=0|e[wt],r=vr(n),s=r||Object.isFrozen(e);for(r||(n=0),s||(e=Fn(e),i=0,n=jr(n=yr(n,o),o,!0),s=!1),n|=21,r=0;r<e.length;r++){const l=e[r],c=wg(l);Object.is(l,c)||(s&&(e=Fn(e),i=0,n=jr(n=yr(n,o),o,!0),s=!1),e[r]=c)}n!==i&&(s&&(e=Fn(e),n=jr(n=yr(n,o),o,!0)),je(e,n)),Ie(a,o,t,e)}}}function Og(n,t){return Error(`Invalid wire type: ${n} (at position ${t})`)}function Id(){return Error("Failed to read varint, encoding is invalid.")}function Bg(n,t){return Error(`Tried to read past the end of the data ${t} > ${n}`)}function Ud(n){if(typeof n=="string")return{buffer:pg(n),O:!1};if(Array.isArray(n))return{buffer:new Uint8Array(n),O:!1};if(n.constructor===Uint8Array)return{buffer:n,O:!1};if(n.constructor===ArrayBuffer)return{buffer:new Uint8Array(n),O:!1};if(n.constructor===Mr)return{buffer:_d(n)||new Uint8Array(0),O:!0};if(n instanceof Uint8Array)return{buffer:new Uint8Array(n.buffer,n.byteOffset,n.byteLength),O:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Fd(n,t){let e,i=0,r=0,s=0;const a=n.h;let o=n.g;do e=a[o++],i|=(127&e)<<s,s+=7;while(s<32&&128&e);for(s>32&&(r|=(127&e)>>4),s=3;s<32&&128&e;s+=7)e=a[o++],r|=(127&e)<<s;if(Cs(n,o),e<128)return t(i>>>0,r>>>0);throw Id()}function Nd(n){let t=0,e=n.g;const i=e+10,r=n.h;for(;e<i;){const s=r[e++];if(t|=s,(128&s)==0)return Cs(n,e),!!(127&t)}throw Id()}function Jr(n){const t=n.h;let e=n.g,i=t[e++],r=127&i;if(128&i&&(i=t[e++],r|=(127&i)<<7,128&i&&(i=t[e++],r|=(127&i)<<14,128&i&&(i=t[e++],r|=(127&i)<<21,128&i&&(i=t[e++],r|=i<<28,128&i&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++]&&128&t[e++])))))throw Id();return Cs(n,e),r}function Ar(n){return Jr(n)>>>0}function Ef(n){var t=n.h;const e=n.g,i=t[e],r=t[e+1],s=t[e+2];return t=t[e+3],Cs(n,n.g+4),(i<<0|r<<8|s<<16|t<<24)>>>0}function bf(n){var t=Ef(n);n=2*(t>>31)+1;const e=t>>>23&255;return t&=8388607,e==255?t?NaN:n*(1/0):e==0?1401298464324817e-60*n*t:n*Math.pow(2,e-150)*(t+8388608)}function Bb(n){return Jr(n)}function tu(n,t,{aa:e=!1}={}){n.aa=e,t&&(t=Ud(t),n.h=t.buffer,n.m=t.O,n.j=0,n.l=n.h.length,n.g=n.j)}function Cs(n,t){if(n.g=t,t>n.l)throw Bg(n.l,t)}function kg(n,t){if(t<0)throw Error(`Tried to read a negative byte length: ${t}`);const e=n.g,i=e+t;if(i>n.l)throw Bg(t,n.l-e);return n.g=i,e}function zg(n,t){if(t==0)return Os();var e=kg(n,t);return n.aa&&n.m?e=n.h.subarray(e,e+t):(n=n.h,e=e===(t=e+t)?new Uint8Array(0):yb?n.slice(e,t):new Uint8Array(n.subarray(e,t))),e.length==0?Os():new Mr(e,La)}nr.prototype.toJSON=void 0;var _0=[];function Vg(n){var t=n.g;if(t.g==t.l)return!1;n.l=n.g.g;var e=Ar(n.g);if(t=e>>>3,!((e&=7)>=0&&e<=5))throw Og(e,n.l);if(t<1)throw Error(`Invalid field number: ${t} (at position ${n.l})`);return n.m=t,n.h=e,!0}function tc(n){switch(n.h){case 0:n.h!=0?tc(n):Nd(n.g);break;case 1:Cs(n=n.g,n.g+8);break;case 2:if(n.h!=2)tc(n);else{var t=Ar(n.g);Cs(n=n.g,n.g+t)}break;case 5:Cs(n=n.g,n.g+4);break;case 3:for(t=n.m;;){if(!Vg(n))throw Error("Unmatched start-group tag: stream EOF");if(n.h==4){if(n.m!=t)throw Error("Unmatched end-group tag");break}tc(n)}break;default:throw Og(n.h,n.l)}}function ll(n,t,e){const i=n.g.l,r=Ar(n.g),s=n.g.g+r;let a=s-i;if(a<=0&&(n.g.l=s,e(t,n,void 0,void 0,void 0),a=s-n.g.g),a)throw Error(`Message parsing ended unexpectedly. Expected to read ${r} bytes, instead read ${r-a} bytes, either the data ended unexpectedly or the message misreported its own length`);return n.g.g=s,n.g.l=i,t}function Od(n){var t=Ar(n.g),e=kg(n=n.g,t);if(n=n.h,ib){var i,r=n;(i=qh)||(i=qh=new TextDecoder("utf-8",{fatal:!0})),t=e+t,r=e===0&&t===r.length?r:r.subarray(e,t);try{var s=i.decode(r)}catch(o){if(Bl===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Bl=!0}catch{Bl=!1}}throw!Bl&&(qh=void 0),o}}else{t=(s=e)+t,e=[];let o,l=null;for(;s<t;){var a=n[s++];a<128?e.push(a):a<224?s>=t?ms():(o=n[s++],a<194||(192&o)!=128?(s--,ms()):e.push((31&a)<<6|63&o)):a<240?s>=t-1?ms():(o=n[s++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=n[s++]))!=128?(s--,ms()):e.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?s>=t-2?ms():(o=n[s++],(192&o)!=128||o-144+(a<<28)>>30!=0||(192&(i=n[s++]))!=128||(192&(r=n[s++]))!=128?(s--,ms()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&r,a-=65536,e.push(55296+(a>>10&1023),56320+(1023&a)))):ms(),e.length>=8192&&(l=Jm(l,e),e.length=0)}s=Jm(l,e)}return s}function Gg(n){const t=Ar(n.g);return zg(n.g,t)}function Xc(n,t,e){var i=Ar(n.g);for(i=n.g.g+i;n.g.g<i;)e.push(t(n.g))}var kl=[];function Ui(n,t,e){t.g?t.m(n,t.g,t.h,e):t.m(n,t.h,e)}var xt=class{constructor(n,t){this.u=Dg(n,t)}toJSON(){try{var n=Pg(this)}finally{Cg=void 0}return n}l(){var n=ST;return n.g?n.l(this,n.g,n.h):n.l(this,n.h,n.defaultValue)}clone(){const n=this.u;return new this.constructor(Gc(n,0|n[wt],!1))}O(){return!!(2&(0|this.u[wt]))}};function g0(n){return n?/^\d+$/.test(n)?(kc(n),new Tf(ge,Oe)):null:kb||=new Tf(0,0)}xt.prototype.W=ol,xt.prototype.toString=function(){return this.u.toString()};var Tf=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let kb;function x0(n){return n?/^-?\d+$/.test(n)?(kc(n),new Af(ge,Oe)):null:zb||=new Af(0,0)}var Af=class{constructor(n,t){this.h=n>>>0,this.g=t>>>0}};let zb;function xa(n,t,e){for(;e>0||t>127;)n.g.push(127&t|128),t=(t>>>7|e<<25)>>>0,e>>>=7;n.g.push(t)}function no(n,t){for(;t>127;)n.g.push(127&t|128),t>>>=7;n.g.push(t)}function Yc(n,t){if(t>=0)no(n,t);else{for(let e=0;e<9;e++)n.g.push(127&t|128),t>>=7;n.g.push(1)}}function Xo(n,t){n.g.push(t>>>0&255),n.g.push(t>>>8&255),n.g.push(t>>>16&255),n.g.push(t>>>24&255)}function Oa(n,t){t.length!==0&&(n.l.push(t),n.h+=t.length)}function ci(n,t,e){no(n.g,8*t+e)}function Bd(n,t){return ci(n,t,2),t=n.g.end(),Oa(n,t),t.push(n.h),t}function kd(n,t){var e=t.pop();for(e=n.h+n.g.length()-e;e>127;)t.push(127&e|128),e>>>=7,n.h++;t.push(e),n.h++}function qc(n,t,e){ci(n,t,2),no(n.g,e.length),Oa(n,n.g.end()),Oa(n,e)}function pc(n,t,e,i){e!=null&&(t=Bd(n,t),i(e,n),kd(n,t))}function Fi(){const n=class{constructor(){throw Error()}};return Object.setPrototypeOf(n,n.prototype),n}var zd=Fi(),Hg=Fi(),Vd=Fi(),Gd=Fi(),Wg=Fi(),Xg=Fi(),Hd=Fi(),Yg=Fi(),qg=Fi(),io=class{constructor(n,t,e){this.g=n,this.h=t,n=zd,this.l=!!n&&e===n||!1}};function jc(n,t){return new io(n,t,zd)}function jg(n,t,e,i,r){pc(n,e,Jg(t,i),r)}const Vb=jc((function(n,t,e,i,r){return n.h===2&&(ll(n,Ld(t,i,e),r),!0)}),jg),Gb=jc((function(n,t,e,i,r){return n.h===2&&(ll(n,Ld(t,i,e),r),!0)}),jg);var Kc=Symbol(),Wd=Symbol(),v0=Symbol(),S0=Symbol();let Kg,Zg;function Gs(n,t,e,i){var r=i[n];if(r)return r;(r={}).Ma=i,r.T=(function(u){switch(typeof u){case"boolean":return Rg||=[0,void 0,!0];case"number":return u>0?void 0:u===0?Nb||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var s=i[1];let a=1;s&&s.constructor===Object&&(r.ga=s,typeof(s=i[++a])=="function"&&(r.la=!0,Kg??=s,Zg??=i[a+1],s=i[a+=2]));const o={};for(;s&&Array.isArray(s)&&s.length&&typeof s[0]=="number"&&s[0]>0;){for(var l=0;l<s.length;l++)o[s[l]]=s;s=i[++a]}for(l=1;s!==void 0;){let u;typeof s=="number"&&(l+=s,s=i[++a]);var c=void 0;if(s instanceof io?u=s:(u=Vb,a--),u?.l){s=i[++a],c=i;var h=a;typeof s=="function"&&(s=s(),c[h]=s),c=s}for(h=l+1,typeof(s=i[++a])=="number"&&s<0&&(h-=s,s=i[++a]);l<h;l++){const f=o[l];c?e(r,l,u,c,f):t(r,l,u,f)}}return i[n]=r}function $g(n){return Array.isArray(n)?n[0]instanceof io?n:[Gb,n]:[n,void 0]}function Jg(n,t){return n instanceof xt?n.u:Array.isArray(n)?qr(n,t,!1):void 0}function Xd(n,t,e,i){const r=e.g;n[t]=i?(s,a,o)=>r(s,a,o,i):r}function Yd(n,t,e,i,r){const s=e.g;let a,o;n[t]=(l,c,h)=>s(l,c,h,o||=Gs(Wd,Xd,Yd,i).T,a||=qd(i),r)}function qd(n){let t=n[v0];if(t!=null)return t;const e=Gs(Wd,Xd,Yd,n);return t=e.la?(i,r)=>Kg(i,r,e):(i,r)=>{const s=0|i[wt];for(;Vg(r)&&r.h!=4;){var a=r.m,o=e[a];if(o==null){var l=e.ga;l&&(l=l[a])&&(l=Hb(l))!=null&&(o=e[a]=l)}o!=null&&o(r,i,a)||(a=(o=r).l,tc(o),o.fa?o=void 0:(l=o.g.g-a,o.g.g=a,o=zg(o.g,l)),a=i,o&&((l=a[Ia])?l.push(o):a[Ia]=[o]))}return 8192&s&&Ja(i),!0},n[v0]=t}function Hb(n){const t=(n=$g(n))[0].g;if(n=n[1]){const e=qd(n),i=Gs(Wd,Xd,Yd,n).T;return(r,s,a)=>t(r,s,a,i,e)}return t}function Zc(n,t,e){n[t]=e.h}function $c(n,t,e,i){let r,s;const a=e.h;n[t]=(o,l,c)=>a(o,l,c,s||=Gs(Kc,Zc,$c,i).T,r||=Qg(i))}function Qg(n){let t=n[S0];if(!t){const e=Gs(Kc,Zc,$c,n);t=(i,r)=>t1(i,r,e),n[S0]=t}return t}function t1(n,t,e){(function(i,r,s){const a=512&r?0:-1,o=i.length,l=o+((r=64&r?256&r:!!o&&Nc(i[o-1]))?-1:0);for(let c=0;c<l;c++)s(c-a,i[c]);if(r){i=i[o-1];for(const c in i)!isNaN(c)&&s(+c,i[c])}})(n,0|n[wt]|(e.T[1]?512:0),((i,r)=>{if(r!=null){var s=(function(a,o){var l=a[o];if(l)return l;if((l=a.ga)&&(l=l[o])){var c=(l=$g(l))[0].h;if(l=l[1]){const h=Qg(l),u=Gs(Kc,Zc,$c,l).T;l=a.la?Zg(u,h):(f,p,g)=>c(f,p,g,u,h)}else l=c;return a[o]=l}})(e,i);s&&s(t,r,i)}})),(n=Sd(n))&&(function(i,r){Oa(i,i.g.end());for(let s=0;s<r.length;s++)Oa(i,_d(r[s])||new Uint8Array(0))})(t,n)}function ro(n,t){if(Array.isArray(t)){var e=0|t[wt];if(4&e)return t;for(var i=0,r=0;i<t.length;i++){const s=n(t[i]);s!=null&&(t[r++]=s)}return r<i&&(t.length=r),je(t,-6145&(5|e)),2&e&&Object.freeze(t),t}}function bn(n,t,e){return new io(n,t,e)}function so(n,t,e){return new io(n,t,e)}function Tn(n,t,e){Ie(n,0|n[wt],t,e)}var Wb=jc((function(n,t,e,i,r){return n.h===2&&(n=ll(n,qr([void 0,void 0],i,!0),r),is(i=0|t[wt]),(r=Rr(t,i,e))instanceof nr?(2&r.M)!=0?((r=r.da()).push(n),Ie(t,i,e,r)):r.Ja(n):Array.isArray(r)?(2&(0|r[wt])&&Ie(t,i,e,r=Ig(r)),r.push(n)):Ie(t,i,e,[n]),!0)}),(function(n,t,e,i,r){if(t instanceof nr)t.forEach(((s,a)=>{pc(n,e,qr([a,s],i,!1),r)}));else if(Array.isArray(t))for(let s=0;s<t.length;s++){const a=t[s];Array.isArray(a)&&pc(n,e,qr(a,i,!1),r)}}));function e1(n,t,e){if(t=(function(i){if(i==null)return i;const r=typeof i;if(r==="bigint")return String(Go(64,i));if(Ho(i)){if(r==="string")return Ag(i);if(r==="number")return Td(i)}})(t),t!=null&&(typeof t=="string"&&x0(t),t!=null))switch(ci(n,e,0),typeof t){case"number":n=n.g,Bs(t),xa(n,ge,Oe);break;case"bigint":e=BigInt.asUintN(64,t),e=new Af(Number(e&BigInt(4294967295)),Number(e>>BigInt(32))),xa(n.g,e.h,e.g);break;default:e=x0(t),xa(n.g,e.h,e.g)}}function n1(n,t,e){(t=Qa(t))!=null&&t!=null&&(ci(n,e,0),Yc(n.g,t))}function i1(n,t,e){(t=yg(t))!=null&&(ci(n,e,0),n.g.g.push(t?1:0))}function r1(n,t,e){(t=Fa(t))!=null&&qc(n,e,cg(t))}function s1(n,t,e,i,r){pc(n,e,Jg(t,i),r)}function a1(n,t,e){t==null||typeof t=="string"||t instanceof Mr||(Ns(t)?Ns(t)&&gd(gg):t=void 0),t!=null&&qc(n,e,Ud(t).buffer)}function o1(n,t,e){return(n.h===5||n.h===2)&&(t=eo(t,0|t[wt],e,!1),n.h==2?Xc(n,bf,t):t.push(bf(n.g)),!0)}var pr=bn((function(n,t,e){if(n.h!==1)return!1;var i=n.g;n=Ef(i);const r=Ef(i);i=2*(r>>31)+1;const s=r>>>20&2047;return n=4294967296*(1048575&r)+n,Tn(t,e,s==2047?n?NaN:i*(1/0):s==0?5e-324*i*n:i*Math.pow(2,s-1075)*(n+4503599627370496)),!0}),(function(n,t,e){(t=rs(t))!=null&&(ci(n,e,1),n=n.g,(e=Sg||=new DataView(new ArrayBuffer(8))).setFloat64(0,+t,!0),ge=e.getUint32(0,!0),Oe=e.getUint32(4,!0),Xo(n,ge),Xo(n,Oe))}),Fi()),Ke=bn((function(n,t,e){return n.h===5&&(Tn(t,e,bf(n.g)),!0)}),(function(n,t,e){(t=rs(t))!=null&&(ci(n,e,5),n=n.g,Md(t),Xo(n,ge))}),Hd),Xb=so(o1,(function(n,t,e){if((t=ro(rs,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&(ci(i,r,5),i=i.g,Md(s),Xo(i,ge))}}),Hd),jd=so(o1,(function(n,t,e){if((t=ro(rs,t))!=null&&t.length){ci(n,e,2),no(n.g,4*t.length);for(let i=0;i<t.length;i++)e=n.g,Md(t[i]),Xo(e,ge)}}),Hd),Qr=bn((function(n,t,e){return n.h===0&&(Tn(t,e,Fd(n.g,Ed)),!0)}),e1,Xg),eu=bn((function(n,t,e){return n.h===0&&(Tn(t,e,(n=Fd(n.g,Ed))===0?void 0:n),!0)}),e1,Xg),Yb=bn((function(n,t,e){return n.h===0&&(Tn(t,e,Fd(n.g,yd)),!0)}),(function(n,t,e){if((t=Ab(t))!=null&&(typeof t=="string"&&g0(t),t!=null))switch(ci(n,e,0),typeof t){case"number":n=n.g,Bs(t),xa(n,ge,Oe);break;case"bigint":e=BigInt.asUintN(64,t),e=new Tf(Number(e&BigInt(4294967295)),Number(e>>BigInt(32))),xa(n.g,e.h,e.g);break;default:e=g0(t),xa(n.g,e.h,e.g)}}),Fi()),ke=bn((function(n,t,e){return n.h===0&&(Tn(t,e,Jr(n.g)),!0)}),n1,Gd),Jc=so((function(n,t,e){return(n.h===0||n.h===2)&&(t=eo(t,0|t[wt],e,!1),n.h==2?Xc(n,Jr,t):t.push(Jr(n.g)),!0)}),(function(n,t,e){if((t=ro(Qa,t))!=null&&t.length){e=Bd(n,e);for(let i=0;i<t.length;i++)Yc(n.g,t[i]);kd(n,e)}}),Gd),fa=bn((function(n,t,e){return n.h===0&&(Tn(t,e,(n=Jr(n.g))===0?void 0:n),!0)}),n1,Gd),we=bn((function(n,t,e){return n.h===0&&(Tn(t,e,Nd(n.g)),!0)}),i1,Hg),va=bn((function(n,t,e){return n.h===0&&(Tn(t,e,(n=Nd(n.g))===!1?void 0:n),!0)}),i1,Hg),dn=so((function(n,t,e){return n.h===2&&(n=Od(n),eo(t,0|t[wt],e,!1).push(n),!0)}),(function(n,t,e){if((t=ro(Fa,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&qc(i,r,cg(s))}}),Vd),zr=bn((function(n,t,e){return n.h===2&&(Tn(t,e,(n=Od(n))===""?void 0:n),!0)}),r1,Vd),oe=bn((function(n,t,e){return n.h===2&&(Tn(t,e,Od(n)),!0)}),r1,Vd),Je=(function(n,t,e=zd){return new io(n,t,e)})((function(n,t,e,i,r){return n.h===2&&(i=qr(void 0,i,!0),eo(t,0|t[wt],e,!0).push(i),ll(n,i,r),!0)}),(function(n,t,e,i,r){if(Array.isArray(t))for(let s=0;s<t.length;s++)s1(n,t[s],e,i,r)})),ae=jc((function(n,t,e,i,r,s){return n.h===2&&(Ug(t,0|t[wt],s,e),ll(n,t=Ld(t,i,e),r),!0)}),s1),l1=bn((function(n,t,e){return n.h===2&&(Tn(t,e,Gg(n)),!0)}),a1,Yg),qb=so((function(n,t,e){return(n.h===0||n.h===2)&&(t=eo(t,0|t[wt],e,!1),n.h==2?Xc(n,Ar,t):t.push(Ar(n.g)),!0)}),(function(n,t,e){if((t=ro(Eg,t))!=null)for(let a=0;a<t.length;a++){var i=n,r=e,s=t[a];s!=null&&(ci(i,r,0),no(i.g,s))}}),Wg),jb=bn((function(n,t,e){return n.h===0&&(Tn(t,e,(n=Ar(n.g))===0?void 0:n),!0)}),(function(n,t,e){(t=Eg(t))!=null&&t!=null&&(ci(n,e,0),no(n.g,t))}),Wg),ri=bn((function(n,t,e){return n.h===0&&(Tn(t,e,Jr(n.g)),!0)}),(function(n,t,e){(t=Qa(t))!=null&&(t=parseInt(t,10),ci(n,e,0),Yc(n.g,t))}),qg);class Kb{constructor(t,e){this.h=t,this.g=e,this.l=te,this.m=Ct,this.defaultValue=void 0}register(){Lc(this)}}function Ni(n,t){return new Kb(n,t)}function ss(n,t){return(e,i)=>{if(kl.length){const s=kl.pop();s.o(i),tu(s.g,e,i),e=s}else e=new class{constructor(s,a){if(_0.length){const o=_0.pop();tu(o,s,a),s=o}else s=new class{constructor(o,l){this.h=null,this.m=!1,this.g=this.l=this.j=0,tu(this,o,l)}clear(){this.h=null,this.m=!1,this.g=this.l=this.j=0,this.aa=!1}}(s,a);this.g=s,this.l=this.g.g,this.h=this.m=-1,this.o(a)}o({fa:s=!1}={}){this.fa=s}}(e,i);try{const s=new n,a=s.u;qd(t)(a,e);var r=s}finally{e.g.clear(),e.m=-1,e.h=-1,kl.length<100&&kl.push(e)}return r}}function Qc(n){return function(){const t=new class{constructor(){this.l=[],this.h=0,this.g=new class{constructor(){this.g=[]}length(){return this.g.length}end(){const a=this.g;return this.g=[],a}}}};t1(this.u,t,Gs(Kc,Zc,$c,n)),Oa(t,t.g.end());const e=new Uint8Array(t.h),i=t.l,r=i.length;let s=0;for(let a=0;a<r;a++){const o=i[a];e.set(o,s),s+=o.length}return t.l=[e],e}}var M0=class extends xt{constructor(n){super(n)}},y0=[0,zr,bn((function(n,t,e){return n.h===2&&(Tn(t,e,(n=Gg(n))===Os()?void 0:n),!0)}),(function(n,t,e){if(t!=null){if(t instanceof xt){const i=t.Oa;return void(i&&(t=i(t),t!=null&&qc(n,e,Ud(t).buffer)))}if(Array.isArray(t))return}a1(n,t,e)}),Yg)];let nu,E0=globalThis.trustedTypes;function b0(n){nu===void 0&&(nu=(function(){let e=null;if(!E0)return e;try{const i=r=>r;e=E0.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return e})());var t=nu;return new class{constructor(e){this.g=e}toString(){return this.g+""}}(t?t.createScriptURL(n):n)}function Zb(n,...t){if(t.length===0)return b0(n[0]);let e=n[0];for(let i=0;i<t.length;i++)e+=encodeURIComponent(t[i])+n[i+1];return b0(e)}var c1=[0,ke,ri,we,-1,Jc,ri,-1],$b=class extends xt{constructor(n){super(n)}},h1=[0,we,oe,we,ri,-1,so((function(n,t,e){return(n.h===0||n.h===2)&&(t=eo(t,0|t[wt],e,!1),n.h==2?Xc(n,Bb,t):t.push(Jr(n.g)),!0)}),(function(n,t,e){if((t=ro(Qa,t))!=null&&t.length){e=Bd(n,e);for(let i=0;i<t.length;i++)Yc(n.g,t[i]);kd(n,e)}}),qg),oe,-1,[0,we,-1],ri,we,-1],u1=[0,oe,-2],T0=class extends xt{constructor(n){super(n)}},f1=[0],d1=[0,ke,we,1,we,-3],ai=class extends xt{constructor(n){super(n,2)}},Ze={};Ze[336783863]=[0,oe,we,-1,ke,[0,[1,2,3,4,5,6,7,8,9],ae,f1,ae,h1,ae,u1,ae,d1,ae,c1,ae,[0,oe,-2],ae,[0,oe,ri],ae,[0,ri,oe,-1],ae,[0,ri,-1]],[0,oe],we,[0,[1,3],[2,4],ae,[0,Jc],-1,ae,[0,dn],-1,Je,[0,oe,-1]],oe];var A0=[0,eu,-1,va,-3,eu,Jc,zr,fa,eu,-1,va,fa,va,-2,zr];function hi(n,t){yf(n,2,to(t),"")}function Ee(n,t){Wc(n,3,t)}function jt(n,t){Wc(n,4,t)}var En=class extends xt{constructor(n){super(n,500)}o(n){return Ct(this,0,7,n)}},Ro=[-1,{}],w0=[0,oe,1,Ro],C0=[0,oe,dn,Ro];function ui(n,t){fc(n,1,En,t)}function Te(n,t){Wc(n,10,t)}function re(n,t){Wc(n,15,t)}var Hn=class extends xt{constructor(n){super(n,500)}o(n){return Ct(this,0,1001,n)}},p1=[-500,Je,[-500,zr,-1,dn,-3,[-2,Ze,we],Je,y0,fa,-1,w0,C0,Je,[0,zr,va],zr,A0,fa,dn,987,dn],4,Je,[-500,oe,-1,[-1,{}],998,oe],Je,[-500,oe,dn,-1,[-2,{},we],997,dn,-1],fa,Je,[-500,oe,dn,Ro,998,dn],dn,fa,w0,C0,Je,[0,zr,-1,Ro],dn,-2,A0,zr,-1,va,[0,va,jb],978,Ro,Je,y0];Hn.prototype.g=Qc(p1);var Jb=ss(Hn,p1),Qb=class extends xt{constructor(n){super(n)}},m1=class extends xt{constructor(n){super(n)}g(){return Tr(this,Qb,1)}},_1=[0,Je,[0,ke,Ke,oe,-1]],th=ss(m1,_1),tT=class extends xt{constructor(n){super(n)}},eT=class extends xt{constructor(n){super(n)}},iu=class extends xt{constructor(n){super(n)}h(){return te(this,tT,2)}g(){return Tr(this,eT,5)}},g1=ss(class extends xt{constructor(n){super(n)}},[0,dn,Jc,jd,[0,ri,[0,ke,-3],[0,Ke,-3],[0,ke,-1,[0,Je,[0,ke,-2]]],Je,[0,Ke,-1,oe,Ke]],oe,-1,Qr,Je,[0,ke,Ke],dn,Qr]),x1=class extends xt{constructor(n){super(n)}},Sa=ss(class extends xt{constructor(n){super(n)}},[0,Je,[0,Ke,-4]]),v1=class extends xt{constructor(n){super(n)}},cl=ss(class extends xt{constructor(n){super(n)}},[0,Je,[0,Ke,-4]]),nT=class extends xt{constructor(n){super(n)}},iT=[0,ke,-1,jd,ri],S1=class extends xt{constructor(n){super(n)}};S1.prototype.g=Qc([0,Ke,-4,Qr]);var rT=class extends xt{constructor(n){super(n)}},sT=ss(class extends xt{constructor(n){super(n)}},[0,Je,[0,1,ke,oe,_1],Qr]),R0=class extends xt{constructor(n){super(n)}},aT=class extends xt{constructor(n){super(n)}ma(){const n=Lg(this);return n??Os()}},oT=class extends xt{constructor(n){super(n)}},M1=[1,2],lT=ss(class extends xt{constructor(n){super(n)}},[0,Je,[0,M1,ae,[0,jd],ae,[0,l1],ke,oe],Qr]),Kd=class extends xt{constructor(n){super(n)}},y1=[0,oe,ke,Ke,dn,-1],P0=class extends xt{constructor(n){super(n)}},cT=[0,we,-1],D0=class extends xt{constructor(n){super(n)}},ec=[1,2,3,4,5],mc=class extends xt{constructor(n){super(n)}g(){return Lg(this)!=null}h(){return Ei(this,2)!=null}},Re=class extends xt{constructor(n){super(n)}g(){return yg(Na(this,2))??!1}},E1=[0,l1,oe,[0,ke,Qr,-1],[0,Yb,Qr]],He=[0,E1,we,[0,ec,ae,d1,ae,h1,ae,c1,ae,f1,ae,u1],ri],eh=class extends xt{constructor(n){super(n)}},Zd=[0,He,Ke,-1,ke],hT=Ni(502141897,eh);Ze[502141897]=Zd;var uT=ss(class extends xt{constructor(n){super(n)}},[0,[0,ri,-1,Xb,qb],iT]),b1=class extends xt{constructor(n){super(n)}},T1=class extends xt{constructor(n){super(n)}},$d=[0,He,Ke,[0,He],we],A1=[0,He,Zd,$d,Ke,[0,[0,E1]]],fT=Ni(508968150,T1);Ze[508968150]=A1,Ze[508968149]=$d;var w1=class extends xt{constructor(n){super(n)}},dT=Ni(513916220,w1);Ze[513916220]=[0,He,A1,ke];var oa=class extends xt{constructor(n){super(n)}h(){return te(this,Kd,2)}g(){ye(this,2)}},C1=[0,He,y1];Ze[478825465]=C1;var pT=class extends xt{constructor(n){super(n)}},R1=class extends xt{constructor(n){super(n)}},Jd=class extends xt{constructor(n){super(n)}},Qd=class extends xt{constructor(n){super(n)}},P1=class extends xt{constructor(n){super(n)}},L0=[0,He,[0,He],C1,-1],D1=[0,He,Ke,ke],tp=[0,He,Ke],L1=[0,He,D1,tp,Ke],mT=Ni(479097054,P1);Ze[479097054]=[0,He,L1,L0],Ze[463370452]=L0,Ze[464864288]=D1;var _T=Ni(462713202,Qd);Ze[462713202]=L1,Ze[474472470]=tp;var gT=class extends xt{constructor(n){super(n)}},I1=class extends xt{constructor(n){super(n)}},U1=class extends xt{constructor(n){super(n)}},F1=class extends xt{constructor(n){super(n)}},ep=[0,He,Ke,-1,ke],wf=[0,He,Ke,we];F1.prototype.g=Qc([0,He,tp,[0,He],Zd,$d,ep,wf]);var N1=class extends xt{constructor(n){super(n)}},xT=Ni(456383383,N1);Ze[456383383]=[0,He,y1];var O1=class extends xt{constructor(n){super(n)}},vT=Ni(476348187,O1);Ze[476348187]=[0,He,cT];var B1=class extends xt{constructor(n){super(n)}},I0=class extends xt{constructor(n){super(n)}},k1=[0,ri,-1],ST=Ni(458105876,class extends xt{constructor(n){super(n)}g(){var n=this.u;const t=0|n[wt],e=2&t;return n=(function(i,r,s){var a=I0;const o=2&r;let l=!1;if(s==null){if(o)return m0();s=[]}else if(s.constructor===nr){if((2&s.M)==0||o)return s;s=s.da()}else Array.isArray(s)?l=!!(2&(0|s[wt])):s=[];if(o){if(!s.length)return m0();l||(l=!0,Ja(s))}else l&&(l=!1,s=Ig(s));return l||(64&(0|s[wt])?s[wt]&=-33:32&r&&Uc(s,32)),Ie(i,r,2,a=new nr(s,a,wb,void 0)),a})(n,t,Rr(n,t,2)),!e&&I0&&(n.pa=!0),n}});Ze[458105876]=[0,k1,Wb,[!0,Qr,[0,oe,-1,dn]]];var np=class extends xt{constructor(n){super(n)}},z1=Ni(458105758,np);Ze[458105758]=[0,He,oe,k1];var V1=class extends xt{constructor(n){super(n)}},MT=Ni(443442058,V1);Ze[443442058]=[0,He,oe,ke,Ke,dn,-1,we,Ke],Ze[514774813]=ep;var G1=class extends xt{constructor(n){super(n)}},yT=Ni(516587230,G1);function Cf(n,t){return t=t?t.clone():new Kd,n.displayNamesLocale!==void 0?ye(t,1,to(n.displayNamesLocale)):n.displayNamesLocale===void 0&&ye(t,1),n.maxResults!==void 0?ir(t,2,n.maxResults):"maxResults"in n&&ye(t,2),n.scoreThreshold!==void 0?Et(t,3,n.scoreThreshold):"scoreThreshold"in n&&ye(t,3),n.categoryAllowlist!==void 0?dc(t,4,n.categoryAllowlist):"categoryAllowlist"in n&&ye(t,4),n.categoryDenylist!==void 0?dc(t,5,n.categoryDenylist):"categoryDenylist"in n&&ye(t,5),t}function ip(n,t=-1,e=""){return{categories:n.map((i=>({index:Si(i,1)??0??-1,score:Ve(i,2)??0,categoryName:Ei(i,3)??""??"",displayName:Ei(i,4)??""??""}))),headIndex:t,headName:e}}function H1(n){var t=As(n,3,rs,Ts()),e=As(n,2,Qa,Ts()),i=As(n,1,Fa,Ts()),r=As(n,9,Fa,Ts());const s={categories:[],keypoints:[]};for(let a=0;a<t.length;a++)s.categories.push({score:t[a],index:e[a]??-1,categoryName:i[a]??"",displayName:r[a]??""});if((t=te(n,iu,4)?.h())&&(s.boundingBox={originX:Si(t,1)??0,originY:Si(t,2)??0,width:Si(t,3)??0,height:Si(t,4)??0,angle:0}),te(n,iu,4)?.g().length)for(const a of te(n,iu,4).g())s.keypoints.push({x:Ql(a,1)??0,y:Ql(a,2)??0,score:Ql(a,4)??0,label:Ei(a,3)??""});return s}function nh(n){const t=[];for(const e of Tr(n,v1,1))t.push({x:Ve(e,1)??0,y:Ve(e,2)??0,z:Ve(e,3)??0,visibility:Ve(e,4)??0});return t}function Po(n){const t=[];for(const e of Tr(n,x1,1))t.push({x:Ve(e,1)??0,y:Ve(e,2)??0,z:Ve(e,3)??0,visibility:Ve(e,4)??0});return t}function U0(n){return Array.from(n,(t=>t>127?t-256:t))}function F0(n,t){if(n.length!==t.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${n.length} vs. ${t.length}).`);let e=0,i=0,r=0;for(let s=0;s<n.length;s++)e+=n[s]*t[s],i+=n[s]*n[s],r+=t[s]*t[s];if(i<=0||r<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return e/Math.sqrt(i*r)}let zl;Ze[516587230]=[0,He,ep,wf,Ke],Ze[518928384]=wf;const ET=new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,10,1,8,0,65,0,253,15,253,98,11]);async function W1(){if(zl===void 0)try{await WebAssembly.instantiate(ET),zl=!0}catch{zl=!1}return zl}async function vo(n,t=Zb``){const e=await W1()?"wasm_internal":"wasm_nosimd_internal";return{wasmLoaderPath:`${t}/${n}_${e}.js`,wasmBinaryPath:`${t}/${n}_${e}.wasm`}}var xs=class{};function X1(){var n=navigator;return typeof OffscreenCanvas<"u"&&(!(function(t=navigator){return(t=t.userAgent).includes("Safari")&&!t.includes("Chrome")})(n)||!!((n=n.userAgent.match(/Version\/([\d]+).*Safari/))&&n.length>=1&&Number(n[1])>=17))}async function N0(n){if(typeof importScripts!="function"){const t=document.createElement("script");return t.src=n.toString(),t.crossOrigin="anonymous",new Promise(((e,i)=>{t.addEventListener("load",(()=>{e()}),!1),t.addEventListener("error",(r=>{i(r)}),!1),document.body.appendChild(t)}))}importScripts(n.toString())}function Y1(n){return n.videoWidth!==void 0?[n.videoWidth,n.videoHeight]:n.naturalWidth!==void 0?[n.naturalWidth,n.naturalHeight]:n.displayWidth!==void 0?[n.displayWidth,n.displayHeight]:[n.width,n.height]}function At(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),e(t=n.i.stringToNewUTF8(t)),n.i._free(t)}function O0(n,t,e){if(!n.i.canvas)throw Error("No OpenGL canvas configured.");if(e?n.i._bindTextureToStream(e):n.i._bindTextureToCanvas(),!(e=n.i.canvas.getContext("webgl2")||n.i.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),n.i.gpuOriginForWebTexturesIsBottomLeft&&e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1);const[i,r]=Y1(t);return!n.l||i===n.i.canvas.width&&r===n.i.canvas.height||(n.i.canvas.width=i,n.i.canvas.height=r),[i,r]}function B0(n,t,e){n.m||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");const i=new Uint32Array(t.length);for(let r=0;r<t.length;r++)i[r]=n.i.stringToNewUTF8(t[r]);t=n.i._malloc(4*i.length),n.i.HEAPU32.set(i,t>>2),e(t);for(const r of i)n.i._free(r);n.i._free(t)}function zi(n,t,e){n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=e}function Nr(n,t,e){let i=[];n.i.simpleListeners=n.i.simpleListeners||{},n.i.simpleListeners[t]=(r,s,a)=>{s?(e(i,a),i=[]):i.push(r)}}xs.forVisionTasks=function(n){return vo("vision",n)},xs.forTextTasks=function(n){return vo("text",n)},xs.forGenAiExperimentalTasks=function(n){return vo("genai_experimental",n)},xs.forGenAiTasks=function(n){return vo("genai",n)},xs.forAudioTasks=function(n){return vo("audio",n)},xs.isSimdSupported=function(){return W1()};async function bT(n,t,e,i){return n=await(async(r,s,a,o,l)=>{if(s&&await N0(s),!self.ModuleFactory||a&&(await N0(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&l&&((s=self.Module).locateFile=l.locateFile,l.mainScriptUrlOrBlob&&(s.mainScriptUrlOrBlob=l.mainScriptUrlOrBlob)),l=await self.ModuleFactory(self.Module||l),self.ModuleFactory=self.Module=void 0,new r(l,o)})(n,e.wasmLoaderPath,e.assetLoaderPath,t,{locateFile:r=>r.endsWith(".wasm")?e.wasmBinaryPath.toString():e.assetBinaryPath&&r.endsWith(".data")?e.assetBinaryPath.toString():r}),await n.o(i),n}function ru(n,t){const e=te(n.baseOptions,mc,1)||new mc;typeof t=="string"?(ye(e,2,to(t)),ye(e,1)):t instanceof Uint8Array&&(ye(e,1,vd(t,!1)),ye(e,2)),Ct(n.baseOptions,0,1,e)}function k0(n){try{const t=n.G.length;if(t===1)throw Error(n.G[0].message);if(t>1)throw Error("Encountered multiple errors: "+n.G.map((e=>e.message)).join(", "))}finally{n.G=[]}}function pt(n,t){n.B=Math.max(n.B,t)}function ih(n,t){n.A=new En,hi(n.A,"PassThroughCalculator"),Ee(n.A,"free_memory"),jt(n.A,"free_memory_unused_out"),Te(t,"free_memory"),ui(t,n.A)}function Ba(n,t){Ee(n.A,t),jt(n.A,t+"_unused_out")}function rh(n){n.g.addBoolToStream(!0,"free_memory",n.B)}var Rf=class{constructor(n){this.g=n,this.G=[],this.B=0,this.g.setAutoRenderToScreen(!1)}l(n,t=!0){if(t){const e=n.baseOptions||{};if(n.baseOptions?.modelAssetBuffer&&n.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(te(this.baseOptions,mc,1)?.g()||te(this.baseOptions,mc,1)?.h()||n.baseOptions?.modelAssetBuffer||n.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");if((function(i,r){let s=te(i.baseOptions,D0,3);if(!s){var a=s=new D0,o=new T0;Co(a,4,ec,o)}"delegate"in r&&(r.delegate==="GPU"?(r=s,a=new $b,Co(r,2,ec,a)):(r=s,a=new T0,Co(r,4,ec,a))),Ct(i.baseOptions,0,3,s)})(this,e),e.modelAssetPath)return fetch(e.modelAssetPath.toString()).then((i=>{if(i.ok)return i.arrayBuffer();throw Error(`Failed to fetch model: ${e.modelAssetPath} (${i.status})`)})).then((i=>{try{this.g.i.FS_unlink("/model.dat")}catch{}this.g.i.FS_createDataFile("/","model.dat",new Uint8Array(i),!0,!1,!1),ru(this,"/model.dat"),this.m(),this.J()}));if(e.modelAssetBuffer instanceof Uint8Array)ru(this,e.modelAssetBuffer);else if(e.modelAssetBuffer)return(async function(i){const r=[];for(var s=0;;){const{done:a,value:o}=await i.read();if(a)break;r.push(o),s+=o.length}if(r.length===0)return new Uint8Array(0);if(r.length===1)return r[0];i=new Uint8Array(s),s=0;for(const a of r)i.set(a,s),s+=a.length;return i})(e.modelAssetBuffer).then((i=>{ru(this,i),this.m(),this.J()}))}return this.m(),this.J(),Promise.resolve()}J(){}ca(){let n;if(this.g.ca((t=>{n=Jb(t)})),!n)throw Error("Failed to retrieve CalculatorGraphConfig");return n}setGraph(n,t){this.g.attachErrorListener(((e,i)=>{this.G.push(Error(i))})),this.g.Ha(),this.g.setGraph(n,t),this.A=void 0,k0(this)}finishProcessing(){this.g.finishProcessing(),k0(this)}close(){this.A=void 0,this.g.closeGraph()}};function Er(n,t){if(!n)throw Error(`Unable to obtain required WebGL resource: ${t}`);return n}Rf.prototype.close=Rf.prototype.close;class TT{constructor(t,e,i,r){this.g=t,this.h=e,this.m=i,this.l=r}bind(){this.g.bindVertexArray(this.h)}close(){this.g.deleteVertexArray(this.h),this.g.deleteBuffer(this.m),this.g.deleteBuffer(this.l)}}function z0(n,t,e){const i=n.g;if(e=Er(i.createShader(e),"Failed to create WebGL shader"),i.shaderSource(e,t),i.compileShader(e),!i.getShaderParameter(e,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(e)}`);return i.attachShader(n.h,e),e}function V0(n,t){const e=n.g,i=Er(e.createVertexArray(),"Failed to create vertex array");e.bindVertexArray(i);const r=Er(e.createBuffer(),"Failed to create buffer");e.bindBuffer(e.ARRAY_BUFFER,r),e.enableVertexAttribArray(n.P),e.vertexAttribPointer(n.P,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),e.STATIC_DRAW);const s=Er(e.createBuffer(),"Failed to create buffer");return e.bindBuffer(e.ARRAY_BUFFER,s),e.enableVertexAttribArray(n.J),e.vertexAttribPointer(n.J,2,e.FLOAT,!1,0,0),e.bufferData(e.ARRAY_BUFFER,new Float32Array(t?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),e.STATIC_DRAW),e.bindBuffer(e.ARRAY_BUFFER,null),e.bindVertexArray(null),new TT(e,i,r,s)}function rp(n,t){if(n.g){if(t!==n.g)throw Error("Cannot change GL context once initialized")}else n.g=t}function sp(n,t,e,i){return rp(n,t),n.h||(n.m(),n.C()),e?(n.s||(n.s=V0(n,!0)),e=n.s):(n.v||(n.v=V0(n,!1)),e=n.v),t.useProgram(n.h),e.bind(),n.l(),n=i(),e.g.bindVertexArray(null),n}function sh(n,t,e){return rp(n,t),n=Er(t.createTexture(),"Failed to create texture"),t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,e??t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e??t.LINEAR),t.bindTexture(t.TEXTURE_2D,null),n}function ah(n,t,e){rp(n,t),n.A||(n.A=Er(t.createFramebuffer(),"Failed to create framebuffe.")),t.bindFramebuffer(t.FRAMEBUFFER,n.A),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,e,0)}function ap(n){n.g?.bindFramebuffer(n.g.FRAMEBUFFER,null)}var op=class{G(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}m(){const n=this.g;if(this.h=Er(n.createProgram(),"Failed to create WebGL program"),this.Z=z0(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,n.VERTEX_SHADER),this.Y=z0(this,this.G(),n.FRAGMENT_SHADER),n.linkProgram(this.h),!n.getProgramParameter(this.h,n.LINK_STATUS))throw Error(`Error during program linking: ${n.getProgramInfoLog(this.h)}`);this.P=n.getAttribLocation(this.h,"aVertex"),this.J=n.getAttribLocation(this.h,"aTex")}C(){}l(){}close(){if(this.h){const n=this.g;n.deleteProgram(this.h),n.deleteShader(this.Z),n.deleteShader(this.Y)}this.A&&this.g.deleteFramebuffer(this.A),this.v&&this.v.close(),this.s&&this.s.close()}};function gr(n,t){switch(t){case 0:return n.g.find((e=>e instanceof Uint8Array));case 1:return n.g.find((e=>e instanceof Float32Array));case 2:return n.g.find((e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Pf(n){var t=gr(n,1);if(!t){if(t=gr(n,0))t=new Float32Array(t).map((i=>i/255));else{t=new Float32Array(n.width*n.height);const i=ka(n);var e=lp(n);if(ah(e,i,q1(n)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){e=new Float32Array(n.width*n.height*4),i.readPixels(0,0,n.width,n.height,i.RGBA,i.FLOAT,e);for(let r=0,s=0;r<t.length;++r,s+=4)t[r]=e[s]}else i.readPixels(0,0,n.width,n.height,i.RED,i.FLOAT,t)}n.g.push(t)}return t}function q1(n){let t=gr(n,2);if(!t){const e=ka(n);t=K1(n);const i=Pf(n),r=j1(n);e.texImage2D(e.TEXTURE_2D,0,r,n.width,n.height,0,e.RED,e.FLOAT,i),Df(n)}return t}function ka(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Er(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function j1(n){if(n=ka(n),!Vl)if(n.getExtension("EXT_color_buffer_float")&&n.getExtension("OES_texture_float_linear")&&n.getExtension("EXT_float_blend"))Vl=n.R32F;else{if(!n.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Vl=n.R16F}return Vl}function lp(n){return n.l||(n.l=new op),n.l}function K1(n){const t=ka(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=gr(n,2);return e||(e=sh(lp(n),t,n.m?t.LINEAR:t.NEAREST),n.g.push(e),n.j=!0),t.bindTexture(t.TEXTURE_2D,e),e}function Df(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}var Vl,sn=class{constructor(n,t,e,i,r,s,a){this.g=n,this.m=t,this.j=e,this.canvas=i,this.l=r,this.width=s,this.height=a,this.j&&--G0===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Da(){return!!gr(this,0)}ja(){return!!gr(this,1)}R(){return!!gr(this,2)}ia(){return(t=gr(n=this,0))||(t=Pf(n),t=new Uint8Array(t.map((e=>255*e))),n.g.push(t)),t;var n,t}ha(){return Pf(this)}N(){return q1(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof Uint8Array)e=new Uint8Array(t);else if(t instanceof Float32Array)e=new Float32Array(t);else{if(!(t instanceof WebGLTexture))throw Error(`Type is not supported: ${t}`);{const i=ka(this),r=lp(this);i.activeTexture(i.TEXTURE1),e=sh(r,i,this.m?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,e);const s=j1(this);i.texImage2D(i.TEXTURE_2D,0,s,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),ah(r,i,e),sp(r,i,!1,(()=>{K1(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Df(this)})),ap(r),Df(this)}}n.push(e)}return new sn(n,this.m,this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&ka(this).deleteTexture(gr(this,2)),G0=-1}};sn.prototype.close=sn.prototype.close,sn.prototype.clone=sn.prototype.clone,sn.prototype.getAsWebGLTexture=sn.prototype.N,sn.prototype.getAsFloat32Array=sn.prototype.ha,sn.prototype.getAsUint8Array=sn.prototype.ia,sn.prototype.hasWebGLTexture=sn.prototype.R,sn.prototype.hasFloat32Array=sn.prototype.ja,sn.prototype.hasUint8Array=sn.prototype.Da;var G0=250;function Xi(n,t){switch(t){case 0:return n.g.find((e=>e instanceof ImageData));case 1:return n.g.find((e=>typeof ImageBitmap<"u"&&e instanceof ImageBitmap));case 2:return n.g.find((e=>typeof WebGLTexture<"u"&&e instanceof WebGLTexture));default:throw Error(`Type is not supported: ${t}`)}}function Z1(n){var t=Xi(n,0);if(!t){t=za(n);const e=oh(n),i=new Uint8Array(n.width*n.height*4);ah(e,t,nc(n)),t.readPixels(0,0,n.width,n.height,t.RGBA,t.UNSIGNED_BYTE,i),ap(e),t=new ImageData(new Uint8ClampedArray(i.buffer),n.width,n.height),n.g.push(t)}return t}function nc(n){let t=Xi(n,2);if(!t){const e=za(n);t=ic(n);const i=Xi(n,1)||Z1(n);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),To(n)}return t}function za(n){if(!n.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return n.h||(n.h=Er(n.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),n.h}function oh(n){return n.l||(n.l=new op),n.l}function ic(n){const t=za(n);t.viewport(0,0,n.width,n.height),t.activeTexture(t.TEXTURE0);let e=Xi(n,2);return e||(e=sh(oh(n),t),n.g.push(e),n.m=!0),t.bindTexture(t.TEXTURE_2D,e),e}function To(n){n.h.bindTexture(n.h.TEXTURE_2D,null)}function H0(n){const t=za(n);return sp(oh(n),t,!0,(()=>(function(e,i){const r=e.canvas;if(r.width===e.width&&r.height===e.height)return i();const s=r.width,a=r.height;return r.width=e.width,r.height=e.height,e=i(),r.width=s,r.height=a,e})(n,(()=>{if(t.bindFramebuffer(t.FRAMEBUFFER,null),t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.drawArrays(t.TRIANGLE_FAN,0,4),!(n.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return n.canvas.transferToImageBitmap()}))))}var an=class{constructor(n,t,e,i,r,s,a){this.g=n,this.j=t,this.m=e,this.canvas=i,this.l=r,this.width=s,this.height=a,(this.j||this.m)&&--W0===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ca(){return!!Xi(this,0)}ka(){return!!Xi(this,1)}R(){return!!Xi(this,2)}Aa(){return Z1(this)}za(){var n=Xi(this,1);return n||(nc(this),ic(this),n=H0(this),To(this),this.g.push(n),this.j=!0),n}N(){return nc(this)}clone(){const n=[];for(const t of this.g){let e;if(t instanceof ImageData)e=new ImageData(t.data,this.width,this.height);else if(t instanceof WebGLTexture){const i=za(this),r=oh(this);i.activeTexture(i.TEXTURE1),e=sh(r,i),i.bindTexture(i.TEXTURE_2D,e),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),ah(r,i,e),sp(r,i,!1,(()=>{ic(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),To(this)})),ap(r),To(this)}else{if(!(t instanceof ImageBitmap))throw Error(`Type is not supported: ${t}`);nc(this),ic(this),e=H0(this),To(this)}n.push(e)}return new an(n,this.ka(),this.R(),this.canvas,this.l,this.width,this.height)}close(){this.j&&Xi(this,1).close(),this.m&&za(this).deleteTexture(Xi(this,2)),W0=-1}};an.prototype.close=an.prototype.close,an.prototype.clone=an.prototype.clone,an.prototype.getAsWebGLTexture=an.prototype.N,an.prototype.getAsImageBitmap=an.prototype.za,an.prototype.getAsImageData=an.prototype.Aa,an.prototype.hasWebGLTexture=an.prototype.R,an.prototype.hasImageBitmap=an.prototype.ka,an.prototype.hasImageData=an.prototype.Ca;var W0=250;function Oi(...n){return n.map((([t,e])=>({start:t,end:e})))}const AT=(function(n){return class extends n{Ha(){this.i._registerModelResourcesGraphService()}}})((X0=class{constructor(n,t){this.l=!0,this.i=n,this.g=null,this.h=0,this.m=typeof this.i._addIntToInputStream=="function",t!==void 0?this.i.canvas=t:X1()?this.i.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.i.canvas=document.createElement("canvas"))}async initializeGraph(n){const t=await(await fetch(n)).arrayBuffer();n=!(n.endsWith(".pbtxt")||n.endsWith(".textproto")),this.setGraph(new Uint8Array(t),n)}setGraphFromString(n){this.setGraph(new TextEncoder().encode(n),!1)}setGraph(n,t){const e=n.length,i=this.i._malloc(e);this.i.HEAPU8.set(n,i),t?this.i._changeBinaryGraph(e,i):this.i._changeTextGraph(e,i),this.i._free(i)}configureAudio(n,t,e,i,r){this.i._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),At(this,i||"input_audio",(s=>{At(this,r=r||"audio_header",(a=>{this.i._configureAudio(s,a,n,t??0,e)}))}))}setAutoResizeCanvas(n){this.l=n}setAutoRenderToScreen(n){this.i._setAutoRenderToScreen(n)}setGpuBufferVerticalFlip(n){this.i.gpuOriginForWebTexturesIsBottomLeft=n}ca(n){zi(this,"__graph_config__",(t=>{n(t)})),At(this,"__graph_config__",(t=>{this.i._getGraphConfig(t,void 0)})),delete this.i.simpleListeners.__graph_config__}attachErrorListener(n){this.i.errorListener=n}attachEmptyPacketListener(n,t){this.i.emptyPacketListeners=this.i.emptyPacketListeners||{},this.i.emptyPacketListeners[n]=t}addAudioToStream(n,t,e){this.addAudioToStreamWithShape(n,0,0,t,e)}addAudioToStreamWithShape(n,t,e,i,r){const s=4*n.length;this.h!==s&&(this.g&&this.i._free(this.g),this.g=this.i._malloc(s),this.h=s),this.i.HEAPF32.set(n,this.g/4),At(this,i,(a=>{this.i._addAudioToInputStream(this.g,t,e,a,r)}))}addGpuBufferToStream(n,t,e){At(this,t,(i=>{const[r,s]=O0(this,n,i);this.i._addBoundTextureToStream(i,r,s,e)}))}addBoolToStream(n,t,e){At(this,t,(i=>{this.i._addBoolToInputStream(n,i,e)}))}addDoubleToStream(n,t,e){At(this,t,(i=>{this.i._addDoubleToInputStream(n,i,e)}))}addFloatToStream(n,t,e){At(this,t,(i=>{this.i._addFloatToInputStream(n,i,e)}))}addIntToStream(n,t,e){At(this,t,(i=>{this.i._addIntToInputStream(n,i,e)}))}addUintToStream(n,t,e){At(this,t,(i=>{this.i._addUintToInputStream(n,i,e)}))}addStringToStream(n,t,e){At(this,t,(i=>{At(this,n,(r=>{this.i._addStringToInputStream(r,i,e)}))}))}addStringRecordToStream(n,t,e){At(this,t,(i=>{B0(this,Object.keys(n),(r=>{B0(this,Object.values(n),(s=>{this.i._addFlatHashMapToInputStream(r,s,Object.keys(n).length,i,e)}))}))}))}addProtoToStream(n,t,e,i){At(this,e,(r=>{At(this,t,(s=>{const a=this.i._malloc(n.length);this.i.HEAPU8.set(n,a),this.i._addProtoToInputStream(a,n.length,s,r,i),this.i._free(a)}))}))}addEmptyPacketToStream(n,t){At(this,n,(e=>{this.i._addEmptyPacketToInputStream(e,t)}))}addBoolVectorToStream(n,t,e){At(this,t,(i=>{const r=this.i._allocateBoolVector(n.length);if(!r)throw Error("Unable to allocate new bool vector on heap.");for(const s of n)this.i._addBoolVectorEntry(r,s);this.i._addBoolVectorToInputStream(r,i,e)}))}addDoubleVectorToStream(n,t,e){At(this,t,(i=>{const r=this.i._allocateDoubleVector(n.length);if(!r)throw Error("Unable to allocate new double vector on heap.");for(const s of n)this.i._addDoubleVectorEntry(r,s);this.i._addDoubleVectorToInputStream(r,i,e)}))}addFloatVectorToStream(n,t,e){At(this,t,(i=>{const r=this.i._allocateFloatVector(n.length);if(!r)throw Error("Unable to allocate new float vector on heap.");for(const s of n)this.i._addFloatVectorEntry(r,s);this.i._addFloatVectorToInputStream(r,i,e)}))}addIntVectorToStream(n,t,e){At(this,t,(i=>{const r=this.i._allocateIntVector(n.length);if(!r)throw Error("Unable to allocate new int vector on heap.");for(const s of n)this.i._addIntVectorEntry(r,s);this.i._addIntVectorToInputStream(r,i,e)}))}addUintVectorToStream(n,t,e){At(this,t,(i=>{const r=this.i._allocateUintVector(n.length);if(!r)throw Error("Unable to allocate new unsigned int vector on heap.");for(const s of n)this.i._addUintVectorEntry(r,s);this.i._addUintVectorToInputStream(r,i,e)}))}addStringVectorToStream(n,t,e){At(this,t,(i=>{const r=this.i._allocateStringVector(n.length);if(!r)throw Error("Unable to allocate new string vector on heap.");for(const s of n)At(this,s,(a=>{this.i._addStringVectorEntry(r,a)}));this.i._addStringVectorToInputStream(r,i,e)}))}addBoolToInputSidePacket(n,t){At(this,t,(e=>{this.i._addBoolToInputSidePacket(n,e)}))}addDoubleToInputSidePacket(n,t){At(this,t,(e=>{this.i._addDoubleToInputSidePacket(n,e)}))}addFloatToInputSidePacket(n,t){At(this,t,(e=>{this.i._addFloatToInputSidePacket(n,e)}))}addIntToInputSidePacket(n,t){At(this,t,(e=>{this.i._addIntToInputSidePacket(n,e)}))}addUintToInputSidePacket(n,t){At(this,t,(e=>{this.i._addUintToInputSidePacket(n,e)}))}addStringToInputSidePacket(n,t){At(this,t,(e=>{At(this,n,(i=>{this.i._addStringToInputSidePacket(i,e)}))}))}addProtoToInputSidePacket(n,t,e){At(this,e,(i=>{At(this,t,(r=>{const s=this.i._malloc(n.length);this.i.HEAPU8.set(n,s),this.i._addProtoToInputSidePacket(s,n.length,r,i),this.i._free(s)}))}))}addBoolVectorToInputSidePacket(n,t){At(this,t,(e=>{const i=this.i._allocateBoolVector(n.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(const r of n)this.i._addBoolVectorEntry(i,r);this.i._addBoolVectorToInputSidePacket(i,e)}))}addDoubleVectorToInputSidePacket(n,t){At(this,t,(e=>{const i=this.i._allocateDoubleVector(n.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(const r of n)this.i._addDoubleVectorEntry(i,r);this.i._addDoubleVectorToInputSidePacket(i,e)}))}addFloatVectorToInputSidePacket(n,t){At(this,t,(e=>{const i=this.i._allocateFloatVector(n.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(const r of n)this.i._addFloatVectorEntry(i,r);this.i._addFloatVectorToInputSidePacket(i,e)}))}addIntVectorToInputSidePacket(n,t){At(this,t,(e=>{const i=this.i._allocateIntVector(n.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(const r of n)this.i._addIntVectorEntry(i,r);this.i._addIntVectorToInputSidePacket(i,e)}))}addUintVectorToInputSidePacket(n,t){At(this,t,(e=>{const i=this.i._allocateUintVector(n.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(const r of n)this.i._addUintVectorEntry(i,r);this.i._addUintVectorToInputSidePacket(i,e)}))}addStringVectorToInputSidePacket(n,t){At(this,t,(e=>{const i=this.i._allocateStringVector(n.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(const r of n)At(this,r,(s=>{this.i._addStringVectorEntry(i,s)}));this.i._addStringVectorToInputSidePacket(i,e)}))}attachBoolListener(n,t){zi(this,n,t),At(this,n,(e=>{this.i._attachBoolListener(e)}))}attachBoolVectorListener(n,t){Nr(this,n,t),At(this,n,(e=>{this.i._attachBoolVectorListener(e)}))}attachIntListener(n,t){zi(this,n,t),At(this,n,(e=>{this.i._attachIntListener(e)}))}attachIntVectorListener(n,t){Nr(this,n,t),At(this,n,(e=>{this.i._attachIntVectorListener(e)}))}attachUintListener(n,t){zi(this,n,t),At(this,n,(e=>{this.i._attachUintListener(e)}))}attachUintVectorListener(n,t){Nr(this,n,t),At(this,n,(e=>{this.i._attachUintVectorListener(e)}))}attachDoubleListener(n,t){zi(this,n,t),At(this,n,(e=>{this.i._attachDoubleListener(e)}))}attachDoubleVectorListener(n,t){Nr(this,n,t),At(this,n,(e=>{this.i._attachDoubleVectorListener(e)}))}attachFloatListener(n,t){zi(this,n,t),At(this,n,(e=>{this.i._attachFloatListener(e)}))}attachFloatVectorListener(n,t){Nr(this,n,t),At(this,n,(e=>{this.i._attachFloatVectorListener(e)}))}attachStringListener(n,t){zi(this,n,t),At(this,n,(e=>{this.i._attachStringListener(e)}))}attachStringVectorListener(n,t){Nr(this,n,t),At(this,n,(e=>{this.i._attachStringVectorListener(e)}))}attachProtoListener(n,t,e){zi(this,n,t),At(this,n,(i=>{this.i._attachProtoListener(i,e||!1)}))}attachProtoVectorListener(n,t,e){Nr(this,n,t),At(this,n,(i=>{this.i._attachProtoVectorListener(i,e||!1)}))}attachAudioListener(n,t,e){this.i._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),zi(this,n,((i,r)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),t(i,r)})),At(this,n,(i=>{this.i._attachAudioListener(i,e||!1)}))}finishProcessing(){this.i._waitUntilIdle()}closeGraph(){this.i._closeGraph(),this.i.simpleListeners=void 0,this.i.emptyPacketListeners=void 0}},class extends X0{get ea(){return this.i}oa(n,t,e){At(this,t,(i=>{const[r,s]=O0(this,n,i);this.ea._addBoundTextureAsImageToStream(i,r,s,e)}))}V(n,t){zi(this,n,t),At(this,n,(e=>{this.ea._attachImageListener(e)}))}ba(n,t){Nr(this,n,t),At(this,n,(e=>{this.ea._attachImageVectorListener(e)}))}}));var X0,bi=class extends AT{};async function qt(n,t,e){return(async function(i,r,s,a){return bT(i,r,s,a)})(n,e.canvas??(X1()?void 0:document.createElement("canvas")),t,e)}function $1(n,t,e,i){if(n.U){const s=new S1;if(e?.regionOfInterest){if(!n.na)throw Error("This task doesn't support region-of-interest.");var r=e.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Et(s,1,(r.left+r.right)/2),Et(s,2,(r.top+r.bottom)/2),Et(s,4,r.right-r.left),Et(s,3,r.bottom-r.top)}else Et(s,1,.5),Et(s,2,.5),Et(s,4,1),Et(s,3,1);if(e?.rotationDegrees){if(e?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90°.");if(Et(s,5,-Math.PI*e.rotationDegrees/180),e?.rotationDegrees%180!=0){const[a,o]=Y1(t);e=Ve(s,3)*o/a,r=Ve(s,4)*a/o,Et(s,4,e),Et(s,3,r)}}n.g.addProtoToStream(s.g(),"mediapipe.NormalizedRect",n.U,i)}n.g.oa(t,n.Z,i??performance.now()),n.finishProcessing()}function Ti(n,t,e){if(n.baseOptions?.g())throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");$1(n,t,e,n.B+1)}function sr(n,t,e,i){if(!n.baseOptions?.g())throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");$1(n,t,e,i)}function Va(n,t,e,i){var r=t.data;const s=t.width,a=s*(t=t.height);if((r instanceof Uint8Array||r instanceof Float32Array)&&r.length!==a)throw Error("Unsupported channel count: "+r.length/a);return n=new sn([r],e,!1,n.g.i.canvas,n.P,s,t),i?n.clone():n}var Vn=class extends Rf{constructor(n,t,e,i){super(n),this.g=n,this.Z=t,this.U=e,this.na=i,this.P=new op}l(n,t=!0){if("runningMode"in n&&Wo(this.baseOptions,2,!!n.runningMode&&n.runningMode!=="IMAGE"),n.canvas!==void 0&&this.g.i.canvas!==n.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(n,t)}close(){this.P.close(),super.close()}};Vn.prototype.close=Vn.prototype.close;var pi=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect_in",!1),this.j={detections:[]},Ct(n=this.h=new eh,0,1,t=new Re),Et(this.h,2,.5),Et(this.h,3,.3)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return"minDetectionConfidence"in n&&Et(this.h,2,n.minDetectionConfidence??.5),"minSuppressionThreshold"in n&&Et(this.h,3,n.minSuppressionThreshold??.3),this.l(n)}D(n,t){return this.j={detections:[]},Ti(this,n,t),this.j}F(n,t,e){return this.j={detections:[]},sr(this,n,e,t),this.j}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect_in"),re(n,"detections");const t=new ai;Ui(t,hT,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect_in"),jt(e,"DETECTIONS:detections"),e.o(t),ui(n,e),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=g1(s),this.j.detections.push(H1(i));pt(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};pi.prototype.detectForVideo=pi.prototype.F,pi.prototype.detect=pi.prototype.D,pi.prototype.setOptions=pi.prototype.o,pi.createFromModelPath=async function(n,t){return qt(pi,n,{baseOptions:{modelAssetPath:t}})},pi.createFromModelBuffer=function(n,t){return qt(pi,n,{baseOptions:{modelAssetBuffer:t}})},pi.createFromOptions=function(n,t){return qt(pi,n,t)};var cp=Oi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),hp=Oi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),up=Oi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),J1=Oi([474,475],[475,476],[476,477],[477,474]),fp=Oi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),dp=Oi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Q1=Oi([469,470],[470,471],[471,472],[472,469]),pp=Oi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),tx=[...cp,...hp,...up,...fp,...dp,...pp],ex=Oi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);function Y0(n){n.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}var Ne=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!1),this.j={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ct(n=this.h=new T1,0,1,t=new Re),this.v=new b1,Ct(this.h,0,3,this.v),this.s=new eh,Ct(this.h,0,2,this.s),ir(this.s,4,1),Et(this.s,2,.5),Et(this.v,2,.5),Et(this.h,4,.5)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return"numFaces"in n&&ir(this.s,4,n.numFaces??1),"minFaceDetectionConfidence"in n&&Et(this.s,2,n.minFaceDetectionConfidence??.5),"minTrackingConfidence"in n&&Et(this.h,4,n.minTrackingConfidence??.5),"minFacePresenceConfidence"in n&&Et(this.v,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in n&&(this.outputFacialTransformationMatrixes=!!n.outputFacialTransformationMatrixes),this.l(n)}D(n,t){return Y0(this),Ti(this,n,t),this.j}F(n,t,e){return Y0(this),sr(this,n,e,t),this.j}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"face_landmarks");const t=new ai;Ui(t,fT,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"NORM_LANDMARKS:face_landmarks"),e.o(t),ui(n,e),this.g.attachProtoVectorListener("face_landmarks",((i,r)=>{for(const s of i)i=cl(s),this.j.faceLandmarks.push(nh(i));pt(this,r)})),this.g.attachEmptyPacketListener("face_landmarks",(i=>{pt(this,i)})),this.outputFaceBlendshapes&&(re(n,"blendshapes"),jt(e,"BLENDSHAPES:blendshapes"),this.g.attachProtoVectorListener("blendshapes",((i,r)=>{if(this.outputFaceBlendshapes)for(const s of i)i=th(s),this.j.faceBlendshapes.push(ip(i.g()??[]));pt(this,r)})),this.g.attachEmptyPacketListener("blendshapes",(i=>{pt(this,i)}))),this.outputFacialTransformationMatrixes&&(re(n,"face_geometry"),jt(e,"FACE_GEOMETRY:face_geometry"),this.g.attachProtoVectorListener("face_geometry",((i,r)=>{if(this.outputFacialTransformationMatrixes)for(const s of i)(i=te(uT(s),nT,2))&&this.j.facialTransformationMatrixes.push({rows:Si(i,1)??0??0,columns:Si(i,2)??0??0,data:As(i,3,rs,Ts()).slice()??[]});pt(this,r)})),this.g.attachEmptyPacketListener("face_geometry",(i=>{pt(this,i)}))),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ne.prototype.detectForVideo=Ne.prototype.F,Ne.prototype.detect=Ne.prototype.D,Ne.prototype.setOptions=Ne.prototype.o,Ne.createFromModelPath=function(n,t){return qt(Ne,n,{baseOptions:{modelAssetPath:t}})},Ne.createFromModelBuffer=function(n,t){return qt(Ne,n,{baseOptions:{modelAssetBuffer:t}})},Ne.createFromOptions=function(n,t){return qt(Ne,n,t)},Ne.FACE_LANDMARKS_LIPS=cp,Ne.FACE_LANDMARKS_LEFT_EYE=hp,Ne.FACE_LANDMARKS_LEFT_EYEBROW=up,Ne.FACE_LANDMARKS_LEFT_IRIS=J1,Ne.FACE_LANDMARKS_RIGHT_EYE=fp,Ne.FACE_LANDMARKS_RIGHT_EYEBROW=dp,Ne.FACE_LANDMARKS_RIGHT_IRIS=Q1,Ne.FACE_LANDMARKS_FACE_OVAL=pp,Ne.FACE_LANDMARKS_CONTOURS=tx,Ne.FACE_LANDMARKS_TESSELATION=ex;var Vi=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!0),Ct(n=this.j=new w1,0,1,t=new Re)}get baseOptions(){return te(this.j,Re,1)}set baseOptions(n){Ct(this.j,0,1,n)}o(n){return super.l(n)}Ka(n,t,e){const i=typeof t!="function"?t:{};if(this.h=typeof t=="function"?t:e,Ti(this,n,i??{}),!this.h)return this.s}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"stylized_image");const t=new ai;Ui(t,dT,this.j);const e=new En;hi(e,"mediapipe.tasks.vision.face_stylizer.FaceStylizerGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"STYLIZED_IMAGE:stylized_image"),e.o(t),ui(n,e),this.g.V("stylized_image",((i,r)=>{var s=!this.h,a=i.data,o=i.width;const l=o*(i=i.height);if(a instanceof Uint8Array)if(a.length===3*l){const c=new Uint8ClampedArray(4*l);for(let h=0;h<l;++h)c[4*h]=a[3*h],c[4*h+1]=a[3*h+1],c[4*h+2]=a[3*h+2],c[4*h+3]=255;a=new ImageData(c,o,i)}else{if(a.length!==4*l)throw Error("Unsupported channel count: "+a.length/l);a=new ImageData(new Uint8ClampedArray(a.buffer,a.byteOffset,a.length),o,i)}else if(!(a instanceof WebGLTexture))throw Error(`Unsupported format: ${a.constructor.name}`);o=new an([a],!1,!1,this.g.i.canvas,this.P,o,i),this.s=s=s?o.clone():o,this.h&&this.h(s),pt(this,r)})),this.g.attachEmptyPacketListener("stylized_image",(i=>{this.s=null,this.h&&this.h(null),pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Vi.prototype.stylize=Vi.prototype.Ka,Vi.prototype.setOptions=Vi.prototype.o,Vi.createFromModelPath=function(n,t){return qt(Vi,n,{baseOptions:{modelAssetPath:t}})},Vi.createFromModelBuffer=function(n,t){return qt(Vi,n,{baseOptions:{modelAssetBuffer:t}})},Vi.createFromOptions=function(n,t){return qt(Vi,n,t)};var mp=Oi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);function q0(n){n.gestures=[],n.landmarks=[],n.worldLandmarks=[],n.handedness=[]}function j0(n){return n.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:n.gestures,landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handedness:n.handedness,handednesses:n.handedness}}function K0(n,t=!0){const e=[];for(const r of n){var i=th(r);n=[];for(const s of i.g())i=t&&Si(s,1)!=null?Si(s,1)??0:-1,n.push({score:Ve(s,2)??0,index:i,categoryName:Ei(s,3)??""??"",displayName:Ei(s,4)??""??""});e.push(n)}return e}var jn=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ct(n=this.j=new P1,0,1,t=new Re),this.s=new Qd,Ct(this.j,0,2,this.s),this.C=new Jd,Ct(this.s,0,3,this.C),this.v=new R1,Ct(this.s,0,2,this.v),this.h=new pT,Ct(this.j,0,3,this.h),Et(this.v,2,.5),Et(this.s,4,.5),Et(this.C,2,.5)}get baseOptions(){return te(this.j,Re,1)}set baseOptions(n){Ct(this.j,0,1,n)}o(n){if(ir(this.v,3,n.numHands??1),"minHandDetectionConfidence"in n&&Et(this.v,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Et(this.s,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Et(this.C,2,n.minHandPresenceConfidence??.5),n.cannedGesturesClassifierOptions){var t=new oa,e=t,i=Cf(n.cannedGesturesClassifierOptions,te(this.h,oa,3)?.h());Ct(e,0,2,i),Ct(this.h,0,3,t)}else n.cannedGesturesClassifierOptions===void 0&&te(this.h,oa,3)?.g();return n.customGesturesClassifierOptions?(Ct(e=t=new oa,0,2,i=Cf(n.customGesturesClassifierOptions,te(this.h,oa,4)?.h())),Ct(this.h,0,4,t)):n.customGesturesClassifierOptions===void 0&&te(this.h,oa,4)?.g(),this.l(n)}Fa(n,t){return q0(this),Ti(this,n,t),j0(this)}Ga(n,t,e){return q0(this),sr(this,n,e,t),j0(this)}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"hand_gestures"),re(n,"hand_landmarks"),re(n,"world_hand_landmarks"),re(n,"handedness");const t=new ai;Ui(t,mT,this.j);const e=new En;hi(e,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"HAND_GESTURES:hand_gestures"),jt(e,"LANDMARKS:hand_landmarks"),jt(e,"WORLD_LANDMARKS:world_hand_landmarks"),jt(e,"HANDEDNESS:handedness"),e.o(t),ui(n,e),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i){i=cl(s);const a=[];for(const o of Tr(i,v1,1))a.push({x:Ve(o,1)??0,y:Ve(o,2)??0,z:Ve(o,3)??0,visibility:Ve(o,4)??0});this.landmarks.push(a)}pt(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{pt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i){i=Sa(s);const a=[];for(const o of Tr(i,x1,1))a.push({x:Ve(o,1)??0,y:Ve(o,2)??0,z:Ve(o,3)??0,visibility:Ve(o,4)??0});this.worldLandmarks.push(a)}pt(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{pt(this,i)})),this.g.attachProtoVectorListener("hand_gestures",((i,r)=>{this.gestures.push(...K0(i,!1)),pt(this,r)})),this.g.attachEmptyPacketListener("hand_gestures",(i=>{pt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{this.handedness.push(...K0(i)),pt(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};function Z0(n){return{landmarks:n.landmarks,worldLandmarks:n.worldLandmarks,handednesses:n.handedness,handedness:n.handedness}}jn.prototype.recognizeForVideo=jn.prototype.Ga,jn.prototype.recognize=jn.prototype.Fa,jn.prototype.setOptions=jn.prototype.o,jn.createFromModelPath=function(n,t){return qt(jn,n,{baseOptions:{modelAssetPath:t}})},jn.createFromModelBuffer=function(n,t){return qt(jn,n,{baseOptions:{modelAssetBuffer:t}})},jn.createFromOptions=function(n,t){return qt(jn,n,t)},jn.HAND_CONNECTIONS=mp;var Dn=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ct(n=this.h=new Qd,0,1,t=new Re),this.s=new Jd,Ct(this.h,0,3,this.s),this.j=new R1,Ct(this.h,0,2,this.j),ir(this.j,3,1),Et(this.j,2,.5),Et(this.s,2,.5),Et(this.h,4,.5)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return"numHands"in n&&ir(this.j,3,n.numHands??1),"minHandDetectionConfidence"in n&&Et(this.j,2,n.minHandDetectionConfidence??.5),"minTrackingConfidence"in n&&Et(this.h,4,n.minTrackingConfidence??.5),"minHandPresenceConfidence"in n&&Et(this.s,2,n.minHandPresenceConfidence??.5),this.l(n)}D(n,t){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ti(this,n,t),Z0(this)}F(n,t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],sr(this,n,e,t),Z0(this)}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"hand_landmarks"),re(n,"world_hand_landmarks"),re(n,"handedness");const t=new ai;Ui(t,_T,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"LANDMARKS:hand_landmarks"),jt(e,"WORLD_LANDMARKS:world_hand_landmarks"),jt(e,"HANDEDNESS:handedness"),e.o(t),ui(n,e),this.g.attachProtoVectorListener("hand_landmarks",((i,r)=>{for(const s of i)i=cl(s),this.landmarks.push(nh(i));pt(this,r)})),this.g.attachEmptyPacketListener("hand_landmarks",(i=>{pt(this,i)})),this.g.attachProtoVectorListener("world_hand_landmarks",((i,r)=>{for(const s of i)i=Sa(s),this.worldLandmarks.push(Po(i));pt(this,r)})),this.g.attachEmptyPacketListener("world_hand_landmarks",(i=>{pt(this,i)})),this.g.attachProtoVectorListener("handedness",((i,r)=>{var s=this.handedness,a=s.push;const o=[];for(const l of i){i=th(l);const c=[];for(const h of i.g())c.push({score:Ve(h,2)??0,index:Si(h,1)??0??-1,categoryName:Ei(h,3)??""??"",displayName:Ei(h,4)??""??""});o.push(c)}a.call(s,...o),pt(this,r)})),this.g.attachEmptyPacketListener("handedness",(i=>{pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Dn.prototype.detectForVideo=Dn.prototype.F,Dn.prototype.detect=Dn.prototype.D,Dn.prototype.setOptions=Dn.prototype.o,Dn.createFromModelPath=function(n,t){return qt(Dn,n,{baseOptions:{modelAssetPath:t}})},Dn.createFromModelBuffer=function(n,t){return qt(Dn,n,{baseOptions:{modelAssetBuffer:t}})},Dn.createFromOptions=function(n,t){return qt(Dn,n,t)},Dn.HAND_CONNECTIONS=mp;var nx=Oi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);function $0(n){n.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function J0(n){try{if(!n.C)return n.h;n.C(n.h)}finally{rh(n)}}function Gl(n,t){n=cl(n),t.push(nh(n))}var Ae=class extends Vn{constructor(n,t){super(new bi(n,t),"input_frames_image",null,!1),this.h={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ct(n=this.j=new F1,0,1,t=new Re),this.K=new Jd,Ct(this.j,0,2,this.K),this.Y=new gT,Ct(this.j,0,3,this.Y),this.s=new eh,Ct(this.j,0,4,this.s),this.H=new b1,Ct(this.j,0,5,this.H),this.v=new I1,Ct(this.j,0,6,this.v),this.L=new U1,Ct(this.j,0,7,this.L),Et(this.s,2,.5),Et(this.s,3,.3),Et(this.H,2,.5),Et(this.v,2,.5),Et(this.v,3,.3),Et(this.L,2,.5),Et(this.K,2,.5)}get baseOptions(){return te(this.j,Re,1)}set baseOptions(n){Ct(this.j,0,1,n)}o(n){return"minFaceDetectionConfidence"in n&&Et(this.s,2,n.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in n&&Et(this.s,3,n.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in n&&Et(this.H,2,n.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in n&&(this.outputFaceBlendshapes=!!n.outputFaceBlendshapes),"minPoseDetectionConfidence"in n&&Et(this.v,2,n.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in n&&Et(this.v,3,n.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in n&&Et(this.L,2,n.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in n&&(this.outputPoseSegmentationMasks=!!n.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in n&&Et(this.K,2,n.minHandLandmarksConfidence??.5),this.l(n)}D(n,t,e){const i=typeof t!="function"?t:{};return this.C=typeof t=="function"?t:e,$0(this),Ti(this,n,i),J0(this)}F(n,t,e,i){const r=typeof e!="function"?e:{};return this.C=typeof e=="function"?e:i,$0(this),sr(this,n,r,t),J0(this)}m(){var n=new Hn;Te(n,"input_frames_image"),re(n,"pose_landmarks"),re(n,"pose_world_landmarks"),re(n,"face_landmarks"),re(n,"left_hand_landmarks"),re(n,"left_hand_world_landmarks"),re(n,"right_hand_landmarks"),re(n,"right_hand_world_landmarks");const t=new ai,e=new M0;yf(e,1,to("type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),""),(function(r,s){if(s!=null)if(Array.isArray(s))ye(r,2,Vc(s,wd,void 0,void 0,!1));else{if(!(typeof s=="string"||s instanceof Mr||Ns(s)))throw Error("invalid value in Any.value field: "+s+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");yf(r,2,vd(s,!1),Os())}})(e,this.j.g());const i=new En;hi(i,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),fc(i,8,M0,e),Ee(i,"IMAGE:input_frames_image"),jt(i,"POSE_LANDMARKS:pose_landmarks"),jt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),jt(i,"FACE_LANDMARKS:face_landmarks"),jt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),jt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),jt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),jt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.o(t),ui(n,i),ih(this,n),this.g.attachProtoListener("pose_landmarks",((r,s)=>{Gl(r,this.h.poseLandmarks),pt(this,s)})),this.g.attachEmptyPacketListener("pose_landmarks",(r=>{pt(this,r)})),this.g.attachProtoListener("pose_world_landmarks",((r,s)=>{var a=this.h.poseWorldLandmarks;r=Sa(r),a.push(Po(r)),pt(this,s)})),this.g.attachEmptyPacketListener("pose_world_landmarks",(r=>{pt(this,r)})),this.outputPoseSegmentationMasks&&(jt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ba(this,"pose_segmentation_mask"),this.g.V("pose_segmentation_mask",((r,s)=>{this.h.poseSegmentationMasks=[Va(this,r,!0,!this.C)],pt(this,s)})),this.g.attachEmptyPacketListener("pose_segmentation_mask",(r=>{this.h.poseSegmentationMasks=[],pt(this,r)}))),this.g.attachProtoListener("face_landmarks",((r,s)=>{Gl(r,this.h.faceLandmarks),pt(this,s)})),this.g.attachEmptyPacketListener("face_landmarks",(r=>{pt(this,r)})),this.outputFaceBlendshapes&&(re(n,"extra_blendshapes"),jt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.g.attachProtoListener("extra_blendshapes",((r,s)=>{var a=this.h.faceBlendshapes;this.outputFaceBlendshapes&&(r=th(r),a.push(ip(r.g()??[]))),pt(this,s)})),this.g.attachEmptyPacketListener("extra_blendshapes",(r=>{pt(this,r)}))),this.g.attachProtoListener("left_hand_landmarks",((r,s)=>{Gl(r,this.h.leftHandLandmarks),pt(this,s)})),this.g.attachEmptyPacketListener("left_hand_landmarks",(r=>{pt(this,r)})),this.g.attachProtoListener("left_hand_world_landmarks",((r,s)=>{var a=this.h.leftHandWorldLandmarks;r=Sa(r),a.push(Po(r)),pt(this,s)})),this.g.attachEmptyPacketListener("left_hand_world_landmarks",(r=>{pt(this,r)})),this.g.attachProtoListener("right_hand_landmarks",((r,s)=>{Gl(r,this.h.rightHandLandmarks),pt(this,s)})),this.g.attachEmptyPacketListener("right_hand_landmarks",(r=>{pt(this,r)})),this.g.attachProtoListener("right_hand_world_landmarks",((r,s)=>{var a=this.h.rightHandWorldLandmarks;r=Sa(r),a.push(Po(r)),pt(this,s)})),this.g.attachEmptyPacketListener("right_hand_world_landmarks",(r=>{pt(this,r)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Ae.prototype.detectForVideo=Ae.prototype.F,Ae.prototype.detect=Ae.prototype.D,Ae.prototype.setOptions=Ae.prototype.o,Ae.createFromModelPath=function(n,t){return qt(Ae,n,{baseOptions:{modelAssetPath:t}})},Ae.createFromModelBuffer=function(n,t){return qt(Ae,n,{baseOptions:{modelAssetBuffer:t}})},Ae.createFromOptions=function(n,t){return qt(Ae,n,t)},Ae.HAND_CONNECTIONS=mp,Ae.POSE_CONNECTIONS=nx,Ae.FACE_LANDMARKS_LIPS=cp,Ae.FACE_LANDMARKS_LEFT_EYE=hp,Ae.FACE_LANDMARKS_LEFT_EYEBROW=up,Ae.FACE_LANDMARKS_LEFT_IRIS=J1,Ae.FACE_LANDMARKS_RIGHT_EYE=fp,Ae.FACE_LANDMARKS_RIGHT_EYEBROW=dp,Ae.FACE_LANDMARKS_RIGHT_IRIS=Q1,Ae.FACE_LANDMARKS_FACE_OVAL=pp,Ae.FACE_LANDMARKS_CONTOURS=tx,Ae.FACE_LANDMARKS_TESSELATION=ex;var mi=class extends Vn{constructor(n,t){super(new bi(n,t),"input_image","norm_rect",!0),this.j={classifications:[]},Ct(n=this.h=new N1,0,1,t=new Re)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return Ct(this.h,0,2,Cf(n,te(this.h,Kd,2))),this.l(n)}qa(n,t){return this.j={classifications:[]},Ti(this,n,t),this.j}ra(n,t,e){return this.j={classifications:[]},sr(this,n,e,t),this.j}m(){var n=new Hn;Te(n,"input_image"),Te(n,"norm_rect"),re(n,"classifications");const t=new ai;Ui(t,xT,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ee(e,"IMAGE:input_image"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"CLASSIFICATIONS:classifications"),e.o(t),ui(n,e),this.g.attachProtoListener("classifications",((i,r)=>{this.j=(function(s){const a={classifications:Tr(s,rT,1).map((o=>ip(te(o,m1,4)?.g()??[],Si(o,2)??0,Ei(o,3)??"")))};return vf(Na(s,2))!=null&&(a.timestampMs=vf(Na(s,2))??0),a})(sT(i)),pt(this,r)})),this.g.attachEmptyPacketListener("classifications",(i=>{pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};mi.prototype.classifyForVideo=mi.prototype.ra,mi.prototype.classify=mi.prototype.qa,mi.prototype.setOptions=mi.prototype.o,mi.createFromModelPath=function(n,t){return qt(mi,n,{baseOptions:{modelAssetPath:t}})},mi.createFromModelBuffer=function(n,t){return qt(mi,n,{baseOptions:{modelAssetBuffer:t}})},mi.createFromOptions=function(n,t){return qt(mi,n,t)};var Kn=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!0),this.h=new O1,this.embeddings={embeddings:[]},Ct(n=this.h,0,1,t=new Re)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){var t=this.h,e=te(this.h,P0,2);return e=e?e.clone():new P0,n.l2Normalize!==void 0?Wo(e,1,n.l2Normalize):"l2Normalize"in n&&ye(e,1),n.quantize!==void 0?Wo(e,2,n.quantize):"quantize"in n&&ye(e,2),Ct(t,0,2,e),this.l(n)}xa(n,t){return Ti(this,n,t),this.embeddings}ya(n,t,e){return sr(this,n,e,t),this.embeddings}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"embeddings_out");const t=new ai;Ui(t,vT,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"EMBEDDINGS:embeddings_out"),e.o(t),ui(n,e),this.g.attachProtoListener("embeddings_out",((i,r)=>{i=lT(i),this.embeddings=(function(s){return{embeddings:Tr(s,oT,1).map((a=>{const o={headIndex:Si(a,3)??0??-1,headName:Ei(a,4)??""??""};if(Fg(a,R0,Qh(a,1))!==void 0)a=As(a=te(a,R0,Qh(a,1)),1,rs,Ts()),o.floatEmbedding=a.slice();else{const l=new Uint8Array(0);o.quantizedEmbedding=te(a,aT,Qh(a,2))?.ma()?.h()??l}return o})),timestampMs:vf(Na(s,2))??0}})(i),pt(this,r)})),this.g.attachEmptyPacketListener("embeddings_out",(i=>{pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Kn.cosineSimilarity=function(n,t){if(n.floatEmbedding&&t.floatEmbedding)n=F0(n.floatEmbedding,t.floatEmbedding);else{if(!n.quantizedEmbedding||!t.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");n=F0(U0(n.quantizedEmbedding),U0(t.quantizedEmbedding))}return n},Kn.prototype.embedForVideo=Kn.prototype.ya,Kn.prototype.embed=Kn.prototype.xa,Kn.prototype.setOptions=Kn.prototype.o,Kn.createFromModelPath=function(n,t){return qt(Kn,n,{baseOptions:{modelAssetPath:t}})},Kn.createFromModelBuffer=function(n,t){return qt(Kn,n,{baseOptions:{modelAssetBuffer:t}})},Kn.createFromOptions=function(n,t){return qt(Kn,n,t)};var Lf=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach((n=>{n.close()})),this.categoryMask?.close()}};function Q0(n){n.categoryMask=void 0,n.confidenceMasks=void 0,n.qualityScores=void 0}function t_(n){try{const t=new Lf(n.confidenceMasks,n.categoryMask,n.qualityScores);if(!n.j)return t;n.j(t)}finally{rh(n)}}Lf.prototype.close=Lf.prototype.close;var Pn=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!1),this.s=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new np,this.v=new B1,Ct(this.h,0,3,this.v),Ct(n=this.h,0,1,t=new Re)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?ye(this.h,2,to(n.displayNamesLocale)):"displayNamesLocale"in n&&ye(this.h,2),"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}J(){(function(n){const t=Tr(n.ca(),En,1).filter((e=>(Ei(e,1)??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator")));if(n.s=[],t.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");t.length===1&&(te(t[0],ai,7)?.l()?.g()??new Map).forEach(((e,i)=>{n.s[Number(i)]=Ei(e,1)??""}))})(this)}segment(n,t,e){const i=typeof t!="function"?t:{};return this.j=typeof t=="function"?t:e,Q0(this),Ti(this,n,i),t_(this)}Ia(n,t,e,i){const r=typeof e!="function"?e:{};return this.j=typeof e=="function"?e:i,Q0(this),sr(this,n,r,t),t_(this)}Ba(){return this.s}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect");const t=new ai;Ui(t,z1,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),e.o(t),ui(n,e),ih(this,n),this.outputConfidenceMasks&&(re(n,"confidence_masks"),jt(e,"CONFIDENCE_MASKS:confidence_masks"),Ba(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Va(this,s,!0,!this.j))),pt(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],pt(this,i)}))),this.outputCategoryMask&&(re(n,"category_mask"),jt(e,"CATEGORY_MASK:category_mask"),Ba(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=Va(this,i,!1,!this.j),pt(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,pt(this,i)}))),re(n,"quality_scores"),jt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,pt(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Pn.prototype.getLabels=Pn.prototype.Ba,Pn.prototype.segmentForVideo=Pn.prototype.Ia,Pn.prototype.segment=Pn.prototype.segment,Pn.prototype.setOptions=Pn.prototype.o,Pn.createFromModelPath=function(n,t){return qt(Pn,n,{baseOptions:{modelAssetPath:t}})},Pn.createFromModelBuffer=function(n,t){return qt(Pn,n,{baseOptions:{modelAssetBuffer:t}})},Pn.createFromOptions=function(n,t){return qt(Pn,n,t)};var If=class{constructor(n,t,e){this.confidenceMasks=n,this.categoryMask=t,this.qualityScores=e}close(){this.confidenceMasks?.forEach((n=>{n.close()})),this.categoryMask?.close()}};If.prototype.close=If.prototype.close;var wT=class extends xt{constructor(n){super(n)}},la=[0,ke,-2],_c=[0,pr,-3,we,pr,-1],e_=[0,_c],n_=[0,_c,ke,-1],su=class extends xt{constructor(n){super(n)}},i_=[0,pr,-1,we],CT=class extends xt{constructor(n){super(n)}},r_=class extends xt{constructor(n){super(n)}},Uf=[1,2,3,4,5,6,7,8,9,10,14,15],ix=class extends xt{constructor(n){super(n)}};ix.prototype.g=Qc([0,Je,[0,Uf,ae,_c,ae,[0,_c,la],ae,e_,ae,[0,e_,la],ae,i_,ae,[0,pr,-3,we,ri],ae,[0,pr,-3,we],ae,[0,oe,pr,-2,we,ke,we,-1,2,pr,la],ae,n_,ae,[0,n_,la],pr,la,oe,ae,[0,pr,-3,we,la,-1],ae,[0,Je,i_]],oe,[0,oe,ke,-1,we]]);var Gi=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.h=new np,this.s=new B1,Ct(this.h,0,3,this.s),Ct(n=this.h,0,1,t=new Re)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return"outputCategoryMask"in n&&(this.outputCategoryMask=n.outputCategoryMask??!1),"outputConfidenceMasks"in n&&(this.outputConfidenceMasks=n.outputConfidenceMasks??!0),super.l(n)}segment(n,t,e,i){const r=typeof e!="function"?e:{};this.j=typeof e=="function"?e:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,e=this.B+1,i=new ix;const s=new r_;var a=new wT;if(ir(a,1,255),Ct(s,0,12,a),t.keypoint&&t.scribble)throw Error("Cannot provide both keypoint and scribble.");if(t.keypoint){var o=new su;Wo(o,3,!0),Et(o,1,t.keypoint.x),Et(o,2,t.keypoint.y),Co(s,5,Uf,o)}else{if(!t.scribble)throw Error("Must provide either a keypoint or a scribble.");for(o of(a=new CT,t.scribble))Wo(t=new su,3,!0),Et(t,1,o.x),Et(t,2,o.y),fc(a,1,su,t);Co(s,15,Uf,a)}fc(i,1,r_,s),this.g.addProtoToStream(i.g(),"drishti.RenderData","roi_in",e),Ti(this,n,r);t:{try{const c=new If(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.j){var l=c;break t}this.j(c)}finally{rh(this)}l=void 0}return l}m(){var n=new Hn;Te(n,"image_in"),Te(n,"roi_in"),Te(n,"norm_rect_in");const t=new ai;Ui(t,z1,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.interactive_segmenter.InteractiveSegmenterGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"ROI:roi_in"),Ee(e,"NORM_RECT:norm_rect_in"),e.o(t),ui(n,e),ih(this,n),this.outputConfidenceMasks&&(re(n,"confidence_masks"),jt(e,"CONFIDENCE_MASKS:confidence_masks"),Ba(this,"confidence_masks"),this.g.ba("confidence_masks",((i,r)=>{this.confidenceMasks=i.map((s=>Va(this,s,!0,!this.j))),pt(this,r)})),this.g.attachEmptyPacketListener("confidence_masks",(i=>{this.confidenceMasks=[],pt(this,i)}))),this.outputCategoryMask&&(re(n,"category_mask"),jt(e,"CATEGORY_MASK:category_mask"),Ba(this,"category_mask"),this.g.V("category_mask",((i,r)=>{this.categoryMask=Va(this,i,!1,!this.j),pt(this,r)})),this.g.attachEmptyPacketListener("category_mask",(i=>{this.categoryMask=void 0,pt(this,i)}))),re(n,"quality_scores"),jt(e,"QUALITY_SCORES:quality_scores"),this.g.attachFloatVectorListener("quality_scores",((i,r)=>{this.qualityScores=i,pt(this,r)})),this.g.attachEmptyPacketListener("quality_scores",(i=>{this.categoryMask=void 0,pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Gi.prototype.segment=Gi.prototype.segment,Gi.prototype.setOptions=Gi.prototype.o,Gi.createFromModelPath=function(n,t){return qt(Gi,n,{baseOptions:{modelAssetPath:t}})},Gi.createFromModelBuffer=function(n,t){return qt(Gi,n,{baseOptions:{modelAssetBuffer:t}})},Gi.createFromOptions=function(n,t){return qt(Gi,n,t)};var _i=class extends Vn{constructor(n,t){super(new bi(n,t),"input_frame_gpu","norm_rect",!1),this.j={detections:[]},Ct(n=this.h=new V1,0,1,t=new Re)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return n.displayNamesLocale!==void 0?ye(this.h,2,to(n.displayNamesLocale)):"displayNamesLocale"in n&&ye(this.h,2),n.maxResults!==void 0?ir(this.h,3,n.maxResults):"maxResults"in n&&ye(this.h,3),n.scoreThreshold!==void 0?Et(this.h,4,n.scoreThreshold):"scoreThreshold"in n&&ye(this.h,4),n.categoryAllowlist!==void 0?dc(this.h,5,n.categoryAllowlist):"categoryAllowlist"in n&&ye(this.h,5),n.categoryDenylist!==void 0?dc(this.h,6,n.categoryDenylist):"categoryDenylist"in n&&ye(this.h,6),this.l(n)}D(n,t){return this.j={detections:[]},Ti(this,n,t),this.j}F(n,t,e){return this.j={detections:[]},sr(this,n,e,t),this.j}m(){var n=new Hn;Te(n,"input_frame_gpu"),Te(n,"norm_rect"),re(n,"detections");const t=new ai;Ui(t,MT,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ee(e,"IMAGE:input_frame_gpu"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"DETECTIONS:detections"),e.o(t),ui(n,e),this.g.attachProtoVectorListener("detections",((i,r)=>{for(const s of i)i=g1(s),this.j.detections.push(H1(i));pt(this,r)})),this.g.attachEmptyPacketListener("detections",(i=>{pt(this,i)})),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};_i.prototype.detectForVideo=_i.prototype.F,_i.prototype.detect=_i.prototype.D,_i.prototype.setOptions=_i.prototype.o,_i.createFromModelPath=async function(n,t){return qt(_i,n,{baseOptions:{modelAssetPath:t}})},_i.createFromModelBuffer=function(n,t){return qt(_i,n,{baseOptions:{modelAssetBuffer:t}})},_i.createFromOptions=function(n,t){return qt(_i,n,t)};var Ff=class{constructor(n,t,e){this.landmarks=n,this.worldLandmarks=t,this.segmentationMasks=e}close(){this.segmentationMasks?.forEach((n=>{n.close()}))}};function s_(n){n.landmarks=[],n.worldLandmarks=[],n.segmentationMasks=void 0}function a_(n){try{const t=new Ff(n.landmarks,n.worldLandmarks,n.segmentationMasks);if(!n.s)return t;n.s(t)}finally{rh(n)}}Ff.prototype.close=Ff.prototype.close;var Zn=class extends Vn{constructor(n,t){super(new bi(n,t),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ct(n=this.h=new G1,0,1,t=new Re),this.v=new U1,Ct(this.h,0,3,this.v),this.j=new I1,Ct(this.h,0,2,this.j),ir(this.j,4,1),Et(this.j,2,.5),Et(this.v,2,.5),Et(this.h,4,.5)}get baseOptions(){return te(this.h,Re,1)}set baseOptions(n){Ct(this.h,0,1,n)}o(n){return"numPoses"in n&&ir(this.j,4,n.numPoses??1),"minPoseDetectionConfidence"in n&&Et(this.j,2,n.minPoseDetectionConfidence??.5),"minTrackingConfidence"in n&&Et(this.h,4,n.minTrackingConfidence??.5),"minPosePresenceConfidence"in n&&Et(this.v,2,n.minPosePresenceConfidence??.5),"outputSegmentationMasks"in n&&(this.outputSegmentationMasks=n.outputSegmentationMasks??!1),this.l(n)}D(n,t,e){const i=typeof t!="function"?t:{};return this.s=typeof t=="function"?t:e,s_(this),Ti(this,n,i),a_(this)}F(n,t,e,i){const r=typeof e!="function"?e:{};return this.s=typeof e=="function"?e:i,s_(this),sr(this,n,r,t),a_(this)}m(){var n=new Hn;Te(n,"image_in"),Te(n,"norm_rect"),re(n,"normalized_landmarks"),re(n,"world_landmarks"),re(n,"segmentation_masks");const t=new ai;Ui(t,yT,this.h);const e=new En;hi(e,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ee(e,"IMAGE:image_in"),Ee(e,"NORM_RECT:norm_rect"),jt(e,"NORM_LANDMARKS:normalized_landmarks"),jt(e,"WORLD_LANDMARKS:world_landmarks"),e.o(t),ui(n,e),ih(this,n),this.g.attachProtoVectorListener("normalized_landmarks",((i,r)=>{this.landmarks=[];for(const s of i)i=cl(s),this.landmarks.push(nh(i));pt(this,r)})),this.g.attachEmptyPacketListener("normalized_landmarks",(i=>{this.landmarks=[],pt(this,i)})),this.g.attachProtoVectorListener("world_landmarks",((i,r)=>{this.worldLandmarks=[];for(const s of i)i=Sa(s),this.worldLandmarks.push(Po(i));pt(this,r)})),this.g.attachEmptyPacketListener("world_landmarks",(i=>{this.worldLandmarks=[],pt(this,i)})),this.outputSegmentationMasks&&(jt(e,"SEGMENTATION_MASK:segmentation_masks"),Ba(this,"segmentation_masks"),this.g.ba("segmentation_masks",((i,r)=>{this.segmentationMasks=i.map((s=>Va(this,s,!0,!this.s))),pt(this,r)})),this.g.attachEmptyPacketListener("segmentation_masks",(i=>{this.segmentationMasks=[],pt(this,i)}))),n=n.g(),this.setGraph(new Uint8Array(n),!0)}};Zn.prototype.detectForVideo=Zn.prototype.F,Zn.prototype.detect=Zn.prototype.D,Zn.prototype.setOptions=Zn.prototype.o,Zn.createFromModelPath=function(n,t){return qt(Zn,n,{baseOptions:{modelAssetPath:t}})},Zn.createFromModelBuffer=function(n,t){return qt(Zn,n,{baseOptions:{modelAssetBuffer:t}})},Zn.createFromOptions=function(n,t){return qt(Zn,n,t)},Zn.POSE_CONNECTIONS=nx;function dr(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function rx(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,n.__proto__=t}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ga={duration:.5,overwrite:!1,delay:0},_p,hn,Ce,Mi=1e8,xe=1/Mi,Nf=Math.PI*2,RT=Nf/4,PT=0,sx=Math.sqrt,DT=Math.cos,LT=Math.sin,on=function(t){return typeof t=="string"},ze=function(t){return typeof t=="function"},wr=function(t){return typeof t=="number"},gp=function(t){return typeof t>"u"},rr=function(t){return typeof t=="object"},Nn=function(t){return t!==!1},xp=function(){return typeof window<"u"},Hl=function(t){return ze(t)||on(t)},ax=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},gn=Array.isArray,IT=/random\([^)]+\)/g,UT=/,\s*/g,o_=/(?:-?\.?\d|\.)+/gi,ox=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,da=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,au=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lx=/[+-]=-?[.\d]+/,FT=/[^,'"\[\]\s]+/gi,NT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,De,Hi,Of,vp,oi={},gc={},cx,hx=function(t){return(gc=Ha(t,oi))&&Gn},Sp=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Yo=function(t,e){return!e&&console.warn(t)},ux=function(t,e){return t&&(oi[t]=e)&&gc&&(gc[t]=e)||oi},qo=function(){return 0},OT={suppressEvents:!0,isStart:!0,kill:!1},rc={suppressEvents:!0,kill:!1},BT={suppressEvents:!0},Mp={},Kr=[],Bf={},fx,$n={},ou={},l_=30,sc=[],yp="",Ep=function(t){var e=t[0],i,r;if(rr(e)||ze(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=sc.length;r--&&!sc[r].targetTest(e););i=sc[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Nx(t[r],i)))||t.splice(r,1);return t},Rs=function(t){return t._gsap||Ep(yi(t))[0]._gsap},dx=function(t,e,i){return(i=t[e])&&ze(i)?t[e]():gp(i)&&t.getAttribute&&t.getAttribute(e)||i},On=function(t,e){return(t=t.split(",")).forEach(e)||t},Ge=function(t){return Math.round(t*1e5)/1e5||0},Pe=function(t){return Math.round(t*1e7)/1e7||0},Ma=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},kT=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},xc=function(){var t=Kr.length,e=Kr.slice(0),i,r;for(Bf={},Kr.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},bp=function(t){return!!(t._initted||t._startAt||t.add)},px=function(t,e,i,r){Kr.length&&!hn&&xc(),t.render(e,i,!!(hn&&e<0&&bp(t))),Kr.length&&!hn&&xc()},mx=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(FT).length<2?e:on(t)?t.trim():t},_x=function(t){return t},li=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},zT=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Ha=function(t,e){for(var i in e)t[i]=e[i];return t},c_=function n(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=rr(e[i])?n(t[i]||(t[i]={}),e[i]):e[i]);return t},vc=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},Do=function(t){var e=t.parent||De,i=t.keyframes?zT(gn(t.keyframes)):li;if(Nn(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},VT=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},gx=function(t,e,i,r,s){var a=t[r],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=a,e.parent=e._dp=t,e},lh=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=e._prev,a=e._next;s?s._next=a:t[i]===e&&(t[i]=a),a?a._prev=s:t[r]===e&&(t[r]=s),e._next=e._prev=e.parent=null},ts=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ps=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},GT=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},kf=function(t,e,i,r){return t._startAt&&(hn?t._startAt.revert(rc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},HT=function n(t){return!t||t._ts&&n(t.parent)},h_=function(t){return t._repeat?Wa(t._tTime,t=t.duration()+t._rDelay)*t:0},Wa=function(t,e){var i=Math.floor(t=Pe(t/e));return t&&i===t?i-1:i},Sc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ch=function(t){return t._end=Pe(t._start+(t._tDur/Math.abs(t._ts||t._rts||xe)||0))},hh=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=Pe(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ch(t),i._dirty||Ps(i,t)),t},xx=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Sc(t.rawTime(),e),(!e._dur||hl(0,e.totalDuration(),i)-e._tTime>xe)&&e.render(i,!0)),Ps(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-xe}},qi=function(t,e,i,r){return e.parent&&ts(e),e._start=Pe((wr(i)?i:i||t!==De?gi(t,i,e):t._time)+e._delay),e._end=Pe(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),gx(t,e,"_first","_last",t._sort?"_start":0),zf(e)||(t._recent=e),r||xx(t,e),t._ts<0&&hh(t,t._tTime),t},vx=function(t,e){return(oi.ScrollTrigger||Sp("scrollTrigger",e))&&oi.ScrollTrigger.create(e,t)},Sx=function(t,e,i,r,s){if(Ap(t,e,s),!t._initted)return 1;if(!i&&t._pt&&!hn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&fx!==ti.frame)return Kr.push(t),t._lazy=[s,r],1},WT=function n(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||n(e))},zf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},XT=function(t,e,i,r){var s=t.ratio,a=e<0||!e&&(!t._start&&WT(t)&&!(!t._initted&&zf(t))||(t._ts<0||t._dp._ts<0)&&!zf(t))?0:1,o=t._rDelay,l=0,c,h,u;if(o&&t._repeat&&(l=hl(0,t._tDur,e),h=Wa(l,o),t._yoyo&&h&1&&(a=1-a),h!==Wa(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||hn||r||t._zTime===xe||!e&&t._zTime){if(!t._initted&&Sx(t,e,r,i,l))return;for(u=t._zTime,t._zTime=e||(i?xe:0),i||(i=e&&!u),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&kf(t,e,i,!0),t._onUpdate&&!i&&ei(t,"onUpdate"),l&&t._repeat&&!i&&t.parent&&ei(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&ts(t,1),!i&&!hn&&(ei(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},YT=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},Xa=function(t,e,i,r){var s=t._repeat,a=Pe(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Pe(a*(s+1)+t._rDelay*s):a,o>0&&!r&&hh(t,t._tTime=t._tDur*o),t.parent&&ch(t),i||Ps(t.parent,t),t},u_=function(t){return t instanceof Mn?Ps(t):Xa(t,t._dur)},qT={_start:0,endTime:qo,totalDuration:qo},gi=function n(t,e,i){var r=t.labels,s=t._recent||qT,a=t.duration()>=Mi?s.endTime(!1):t._dur,o,l,c;return on(e)&&(isNaN(e)||e in r)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=a),r[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&i&&(l=l/100*(gn(i)?i[0]:i).totalDuration()),o>1?n(t,e.substr(0,o-1),i)+l:a+l)):e==null?a:+e},Lo=function(t,e,i){var r=wr(e[1]),s=(r?2:1)+(t<2?0:1),a=e[s],o,l;if(r&&(a.duration=e[1]),a.parent=i,t){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Nn(l.vars.inherit)&&l.parent;a.immediateRender=Nn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new qe(e[0],a,e[s+1])},as=function(t,e){return t||t===0?e(t):e},hl=function(t,e,i){return i<t?t:i>e?e:i},pn=function(t,e){return!on(t)||!(e=NT.exec(t))?"":e[1]},jT=function(t,e,i){return as(i,function(r){return hl(t,e,r)})},Vf=[].slice,Mx=function(t,e){return t&&rr(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&rr(t[0]))&&!t.nodeType&&t!==Hi},KT=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var s;return on(r)&&!e||Mx(r,1)?(s=i).push.apply(s,yi(r)):i.push(r)})||i},yi=function(t,e,i){return Ce&&!e&&Ce.selector?Ce.selector(t):on(t)&&!i&&(Of||!Ya())?Vf.call((e||vp).querySelectorAll(t),0):gn(t)?KT(t,i):Mx(t)?Vf.call(t,0):t?[t]:[]},Gf=function(t){return t=yi(t)[0]||Yo("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return yi(e,i.querySelectorAll?i:i===t?Yo("Invalid scope")||vp.createElement("div"):t)}},yx=function(t){return t.sort(function(){return .5-Math.random()})},Ex=function(t){if(ze(t))return t;var e=rr(t)?t:{each:t},i=Ds(e.ease),r=e.from||0,s=parseFloat(e.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=e.axis,h=r,u=r;return on(r)?h=u={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(h=r[0],u=r[1]),function(f,p,g){var _=(g||e).length,m=a[_],d,S,b,E,y,A,w,R,x;if(!m){if(x=e.grid==="auto"?0:(e.grid||[1,Mi])[1],!x){for(w=-Mi;w<(w=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],d=l?Math.min(x,_)*h-.5:r%x,S=x===Mi?0:l?_*u/x-.5:r/x|0,w=0,R=Mi,A=0;A<_;A++)b=A%x-d,E=S-(A/x|0),m[A]=y=c?Math.abs(c==="y"?E:b):sx(b*b+E*E),y>w&&(w=y),y<R&&(R=y);r==="random"&&yx(m),m.max=w-R,m.min=R,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=pn(e.amount||e.each)||0,i=i&&_<0?Ix(i):i}return _=(m[f]-m.min)/m.max||0,Pe(m.b+(i?i(_):_)*m.v)+m.u}},Hf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=Pe(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(wr(i)?0:pn(i))}},bx=function(t,e){var i=gn(t),r,s;return!i&&rr(t)&&(r=i=t.radius||Mi,t.values?(t=yi(t.values),(s=!wr(t[0]))&&(r*=r)):t=Hf(t.increment)),as(e,i?ze(t)?function(a){return s=t(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Mi,h=0,u=t.length,f,p;u--;)s?(f=t[u].x-o,p=t[u].y-l,f=f*f+p*p):f=Math.abs(t[u]-o),f<c&&(c=f,h=u);return h=!r||c<=r?t[h]:a,s||h===a||wr(a)?h:h+pn(a)}:Hf(t))},Tx=function(t,e,i,r){return as(gn(t)?!e:i===!0?!!(i=0):!r,function(){return gn(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},ZT=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(s,a){return a(s)},r)}},$T=function(t,e){return function(i){return t(parseFloat(i))+(e||pn(i))}},JT=function(t,e,i){return wx(t,e,0,1,i)},Ax=function(t,e,i){return as(i,function(r){return t[~~e(r)]})},QT=function n(t,e,i){var r=e-t;return gn(t)?Ax(t,n(0,t.length),e):as(i,function(s){return(r+(s-t)%r)%r+t})},tA=function n(t,e,i){var r=e-t,s=r*2;return gn(t)?Ax(t,n(0,t.length-1),e):as(i,function(a){return a=(s+(a-t)%s)%s||0,t+(a>r?s-a:a)})},jo=function(t){return t.replace(IT,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(UT);return Tx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},wx=function(t,e,i,r,s){var a=e-t,o=r-i;return as(s,function(l){return i+((l-t)/a*o||0)})},eA=function n(t,e,i,r){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var a=on(t),o={},l,c,h,u,f;if(i===!0&&(r=1)&&(i=null),a)t={p:t},e={p:e};else if(gn(t)&&!gn(e)){for(h=[],u=t.length,f=u-2,c=1;c<u;c++)h.push(n(t[c-1],t[c]));u--,s=function(g){g*=u;var _=Math.min(f,~~g);return h[_](g-_)},i=e}else r||(t=Ha(gn(t)?[]:{},t));if(!h){for(l in e)Tp.call(o,t,l,"get",e[l]);s=function(g){return Rp(g,o)||(a?t.p:t)}}}return as(i,s)},f_=function(t,e,i){var r=t.labels,s=Mi,a,o,l;for(a in r)o=r[a]-e,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},ei=function(t,e,i){var r=t.vars,s=r[e],a=Ce,o=t._ctx,l,c,h;if(s)return l=r[e+"Params"],c=r.callbackScope||t,i&&Kr.length&&xc(),o&&(Ce=o),h=l?s.apply(c,l):s.call(c),Ce=a,h},Ao=function(t){return ts(t),t.scrollTrigger&&t.scrollTrigger.kill(!!hn),t.progress()<1&&ei(t,"onInterrupt"),t},pa,Cx=[],Rx=function(t){if(t)if(t=!t.name&&t.default||t,xp()||t.headless){var e=t.name,i=ze(t),r=e&&!i&&t.init?function(){this._props=[]}:t,s={init:qo,render:Rp,add:Tp,kill:gA,modifier:_A,rawVars:0},a={targetTest:0,get:0,getSetter:Cp,aliases:{},register:0};if(Ya(),t!==r){if($n[e])return;li(r,li(vc(t,s),a)),Ha(r.prototype,Ha(s,vc(t,a))),$n[r.prop=e]=r,t.targetTest&&(sc.push(r),Mp[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}ux(e,r),t.register&&t.register(Gn,r,Bn)}else Cx.push(t)},_e=255,wo={aqua:[0,_e,_e],lime:[0,_e,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,_e],navy:[0,0,128],white:[_e,_e,_e],olive:[128,128,0],yellow:[_e,_e,0],orange:[_e,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[_e,0,0],pink:[_e,192,203],cyan:[0,_e,_e],transparent:[_e,_e,_e,0]},lu=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*_e+.5|0},Px=function(t,e,i){var r=t?wr(t)?[t>>16,t>>8&_e,t&_e]:0:wo.black,s,a,o,l,c,h,u,f,p,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),wo[t])r=wo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&_e,r&_e,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&_e,t&_e]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(o_),!e)l=+r[0]%360/360,c=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(c+1):h+c-h*c,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=lu(l+1/3,s,a),r[1]=lu(l,s,a),r[2]=lu(l-1/3,s,a);else if(~t.indexOf("="))return r=t.match(ox),i&&r.length<4&&(r[3]=1),r}else r=t.match(o_)||wo.transparent;r=r.map(Number)}return e&&!g&&(s=r[0]/_e,a=r[1]/_e,o=r[2]/_e,u=Math.max(s,a,o),f=Math.min(s,a,o),h=(u+f)/2,u===f?l=c=0:(p=u-f,c=h>.5?p/(2-u-f):p/(u+f),l=u===s?(a-o)/p+(a<o?6:0):u===a?(o-s)/p+2:(s-a)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(h*100+.5)),i&&r.length<4&&(r[3]=1),r},Dx=function(t){var e=[],i=[],r=-1;return t.split(Zr).forEach(function(s){var a=s.match(da)||[];e.push.apply(e,a),i.push(r+=a.length+1)}),e.c=i,e},d_=function(t,e,i){var r="",s=(t+r).match(Zr),a=e?"hsla(":"rgba(",o=0,l,c,h,u;if(!s)return t;if(s=s.map(function(f){return(f=Px(f,e,1))&&a+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(h=Dx(t),l=i.c,l.join(r)!==h.c.join(r)))for(c=t.replace(Zr,"1").split(da),u=c.length-1;o<u;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:i).shift());if(!c)for(c=t.split(Zr),u=c.length-1;o<u;o++)r+=c[o]+s[o];return r+c[u]},Zr=(function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in wo)n+="|"+t+"\\b";return new RegExp(n+")","gi")})(),nA=/hsl[a]?\(/,Lx=function(t){var e=t.join(" "),i;if(Zr.lastIndex=0,Zr.test(e))return i=nA.test(e),t[1]=d_(t[1],i),t[0]=d_(t[0],i,Dx(t[1])),!0},Ko,ti=(function(){var n=Date.now,t=500,e=33,i=n(),r=i,s=1e3/240,a=s,o=[],l,c,h,u,f,p,g=function _(m){var d=n()-r,S=m===!0,b,E,y,A;if((d>t||d<0)&&(i+=d-e),r+=d,y=r-i,b=y-a,(b>0||S)&&(A=++u.frame,f=y-u.time*1e3,u.time=y=y/1e3,a+=b+(b>=s?4:s-b),E=1),S||(l=c(_)),E)for(p=0;p<o.length;p++)o[p](y,f,A,m)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){cx&&(!Of&&xp()&&(Hi=Of=window,vp=Hi.document||{},oi.gsap=Gn,(Hi.gsapVersions||(Hi.gsapVersions=[])).push(Gn.version),hx(gc||Hi.GreenSockGlobals||!Hi.gsap&&Hi||{}),Cx.forEach(Rx)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(m){return setTimeout(m,a-u.time*1e3+1|0)},Ko=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ko=0,c=qo},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),a=u.time*1e3+s},add:function(m,d,S){var b=d?function(E,y,A,w){m(E,y,A,w),u.remove(b)}:m;return u.remove(m),o[S?"unshift":"push"](b),Ya(),b},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},u})(),Ya=function(){return!Ko&&ti.wake()},Kt={},iA=/^[\d.\-M][\d.\-,\s]/,rA=/["']/g,sA=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[r]=isNaN(c)?c.replace(rA,"").trim():+c,r=l.substr(o+1).trim();return e},aA=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},oA=function(t){var e=(t+"").split("("),i=Kt[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[sA(e[1])]:aA(t).split(",").map(mx)):Kt._CE&&iA.test(t)?Kt._CE("",t):i},Ix=function(t){return function(e){return 1-t(1-e)}},Ux=function n(t,e){for(var i=t._first,r;i;)i instanceof Mn?n(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?n(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Ds=function(t,e){return t&&(ze(t)?t:Kt[t]||oA(t))||e},Hs=function(t,e,i,r){i===void 0&&(i=function(l){return 1-e(1-l)}),r===void 0&&(r=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:i,easeInOut:r},a;return On(t,function(o){Kt[o]=oi[o]=s,Kt[a=o.toLowerCase()]=i;for(var l in s)Kt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Kt[o+"."+l]=s[l]}),s},Fx=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},cu=function n(t,e,i){var r=e>=1?e:1,s=(i||(t?.3:.45))/(e<1?e:1),a=s/Nf*(Math.asin(1/r)||0),o=function(h){return h===1?1:r*Math.pow(2,-10*h)*LT((h-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Fx(o);return s=Nf/s,l.config=function(c,h){return n(t,c,h)},l},hu=function n(t,e){e===void 0&&(e=1.70158);var i=function(a){return a?--a*a*((e+1)*a+e)+1:0},r=t==="out"?i:t==="in"?function(s){return 1-i(1-s)}:Fx(i);return r.config=function(s){return n(t,s)},r};On("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,t){var e=t<5?t+1:t;Hs(n+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});Kt.Linear.easeNone=Kt.none=Kt.Linear.easeIn;Hs("Elastic",cu("in"),cu("out"),cu());(function(n,t){var e=1/t,i=2*e,r=2.5*e,s=function(o){return o<e?n*o*o:o<i?n*Math.pow(o-1.5/t,2)+.75:o<r?n*(o-=2.25/t)*o+.9375:n*Math.pow(o-2.625/t,2)+.984375};Hs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Hs("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});Hs("Circ",function(n){return-(sx(1-n*n)-1)});Hs("Sine",function(n){return n===1?1:-DT(n*RT)+1});Hs("Back",hu("in"),hu("out"),hu());Kt.SteppedEase=Kt.steps=oi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),s=e?1:0,a=1-xe;return function(o){return((r*hl(0,a,o)|0)+s)*i}}};Ga.ease=Kt["quad.out"];On("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yp+=n+","+n+"Params,"});var Nx=function(t,e){this.id=PT++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:dx,this.set=e?e.getSetter:Cp},Zo=(function(){function n(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Xa(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),Ko||ti.wake()}var t=n.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,Xa(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(Ya(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hh(this,i),!s._dp||s.parent||xx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&qi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===xe||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),px(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+h_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+h_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Wa(this._tTime,s)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-xe?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Sc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-xe?0:this._rts,this.totalTime(hl(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),ch(this),GT(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ya(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==xe&&(this._tTime-=xe)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=Pe(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&qi(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(Nn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sc(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=BT);var r=hn;return hn=i,bp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),hn=r,this},t.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,u_(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,u_(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(gi(this,i),Nn(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Nn(r)),this._dur||(this._zTime=-xe),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-xe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-xe,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-xe)},t.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},t.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=ze(i)?i:_x,l=function(){var h=r.then;r.then=null,s&&s(),ze(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=h),a(o),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},t.kill=function(){Ao(this)},n})();li(Zo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-xe,_prom:0,_ps:!1,_rts:1});var Mn=(function(n){rx(t,n);function t(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Nn(i.sortChildren),De&&qi(i.parent||De,dr(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&vx(dr(s),i.scrollTrigger),s}var e=t.prototype;return e.to=function(r,s,a){return Lo(0,arguments,this),this},e.from=function(r,s,a){return Lo(1,arguments,this),this},e.fromTo=function(r,s,a,o){return Lo(2,arguments,this),this},e.set=function(r,s,a){return s.duration=0,s.parent=this,Do(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qe(r,s,gi(this,a),1),this},e.call=function(r,s,a){return qi(this,qe.delayedCall(0,r,s),a)},e.staggerTo=function(r,s,a,o,l,c,h){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=h,a.parent=this,new qe(r,a,gi(this,l)),this},e.staggerFrom=function(r,s,a,o,l,c,h){return a.runBackwards=1,Do(a).immediateRender=Nn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,h)},e.staggerFromTo=function(r,s,a,o,l,c,h,u){return o.startAt=a,Do(o).immediateRender=Nn(o.immediateRender),this.staggerTo(r,s,o,l,c,h,u)},e.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=r<=0?0:Pe(r),u=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,_,m,d,S,b,E,y,A,w;if(this!==De&&h>l&&r>=0&&(h=l),h!==this._tTime||a||u){if(o!==this._time&&c&&(h+=this._time-o,r+=this._time-o),f=h,E=this._start,b=this._ts,d=!b,u&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(f=Pe(h%m),h===l?(_=this._repeat,f=c):(y=Pe(h/m),_=~~y,_&&_===y&&(f=c,_--),f>c&&(f=c)),y=Wa(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),A&&_&1&&(f=c-f,w=1),_!==y&&!this._lock){var R=A&&y&1,x=R===(A&&_&1);if(_<y&&(R=!R),o=R?0:h%c?c:h,this._lock=1,this.render(o||(w?0:Pe(_*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&ei(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;Ux(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=YT(this,Pe(o),Pe(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&c&&!s&&!y&&(ei(this,"onStart"),this._tTime!==h))return this;if(f>=o&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!d){S=0,g&&(h+=this._zTime=-xe);break}}p=g}else{p=this._last;for(var T=r<0?r:f;p;){if(g=p._prev,(p._act||T<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(r,s,a);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,a||hn&&bp(p)),f!==this._time||!this._ts&&!d){S=0,g&&(h+=this._zTime=T?-xe:xe);break}}p=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-xe)._zTime=f>=o?1:-1,this._ts))return this._start=E,ch(this),this.render(r,s,a);this._onUpdate&&!s&&ei(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&o)&&(E===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&ts(this,1),!s&&!(r<0&&!o)&&(h||o||!l)&&(ei(this,h===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,s){var a=this;if(wr(s)||(s=gi(this,s,r)),!(r instanceof Zo)){if(gn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(on(r))return this.addLabel(r,s);if(ze(r))r=qe.delayedCall(0,r);else return this}return this!==r?qi(this,r,s):this},e.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Mi);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof qe?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},e.remove=function(r){return on(r)?this.removeLabel(r):ze(r)?this.killTweensOf(r):(r.parent===this&&lh(this,r),r===this._recent&&(this._recent=this._last),Ps(this))},e.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Pe(ti.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},e.addLabel=function(r,s){return this.labels[r]=gi(this,s),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,s,a){var o=qe.delayedCall(0,s||qo,a);return o.data="isPause",this._hasPause=1,qi(this,o,gi(this,r))},e.removePause=function(r){var s=this._first;for(r=gi(this,r);s;)s._start===r&&s.data==="isPause"&&ts(s),s=s._next},e.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Gr!==o[l]&&o[l].kill(r,s);return this},e.getTweensOf=function(r,s){for(var a=[],o=yi(r),l=this._first,c=wr(s),h;l;)l instanceof qe?kT(l._targets,o)&&(c?(!Gr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(h=l.getTweensOf(o,s)).length&&a.push.apply(a,h),l=l._next;return a},e.tweenTo=function(r,s){s=s||{};var a=this,o=gi(a,r),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,p,g=qe.to(a,li({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||xe,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Xa(g,m,0,1).render(g._time,!0,!0),p=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},e.tweenFromTo=function(r,s,a){return this.tweenTo(s,li({startAt:{time:gi(this,r)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),f_(this,gi(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),f_(this,gi(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+xe)},e.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=Pe(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Ps(this)},e.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Ps(this)},e.totalDuration=function(r){var s=0,a=this,o=a._last,l=Mi,c,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(u=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,qi(a,o,h-o._delay,1)._lock=0):l=h,h<0&&o._ts&&(s-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Pe(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Xa(a,a===De&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(r){if(De._ts&&(px(De,Sc(r,De)),fx=ti.frame),ti.frame>=l_){l_+=si.autoSleep||120;var s=De._first;if((!s||!s._ts)&&si.autoSleep&&ti._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ti.sleep()}}},t})(Zo);li(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var lA=function(t,e,i,r,s,a,o){var l=new Bn(this._pt,t,e,0,1,Gx,null,s),c=0,h=0,u,f,p,g,_,m,d,S;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=jo(r)),a&&(S=[i,r],a(S,t,e),i=S[0],r=S[1]),f=i.match(au)||[];u=au.exec(r);)g=u[0],_=r.substring(c,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),g!==f[h++]&&(m=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:m,c:g.charAt(1)==="="?Ma(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=au.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(lx.test(r)||d)&&(l.e=0),this._pt=l,l},Tp=function(t,e,i,r,s,a,o,l,c,h){ze(r)&&(r=r(s||0,t,a));var u=t[e],f=i!=="get"?i:ze(u)?c?t[e.indexOf("set")||!ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=ze(u)?c?dA:zx:wp,g;if(on(r)&&(~r.indexOf("random(")&&(r=jo(r)),r.charAt(1)==="="&&(g=Ma(f,r)+(pn(f)||0),(g||g===0)&&(r=g))),!h||f!==r||Wf)return!isNaN(f*r)&&r!==""?(g=new Bn(this._pt,t,e,+f||0,r-(f||0),typeof u=="boolean"?mA:Vx,0,p),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!u&&!(e in t)&&Sp(e,r),lA.call(this,t,e,f,r,p,l||si.stringFilter,c))},cA=function(t,e,i,r,s){if(ze(t)&&(t=Io(t,s,e,i,r)),!rr(t)||t.style&&t.nodeType||gn(t)||ax(t))return on(t)?Io(t,s,e,i,r):t;var a={},o;for(o in t)a[o]=Io(t[o],s,e,i,r);return a},Ox=function(t,e,i,r,s,a){var o,l,c,h;if($n[t]&&(o=new $n[t]).init(s,o.rawVars?e[t]:cA(e[t],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Bn(i._pt,s,t,0,1,o.render,o,0,o.priority),i!==pa))for(c=i._ptLookup[i._targets.indexOf(s)],h=o._props.length;h--;)c[o._props[h]]=l;return o},Gr,Wf,Ap=function n(t,e,i){var r=t.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,h=r.runBackwards,u=r.yoyoEase,f=r.keyframes,p=r.autoRevert,g=t._dur,_=t._startAt,m=t._targets,d=t.parent,S=d&&d.data==="nested"?d.vars.targets:m,b=t._overwrite==="auto"&&!_p,E=t.timeline,y,A,w,R,x,T,P,k,F,W,H,V,B;if(E&&(!f||!s)&&(s="none"),t._ease=Ds(s,Ga.ease),t._yEase=u?Ix(Ds(u===!0?s:u,Ga.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!E&&!!r.runBackwards,!E||f&&!r.stagger){if(k=m[0]?Rs(m[0]).harness:0,V=k&&r[k.prop],y=vc(r,Mp),_&&(_._zTime<0&&_.progress(1),e<0&&h&&o&&!p?_.render(-1,!0):_.revert(h&&g?rc:OT),_._lazy=0),a){if(ts(t._startAt=qe.set(m,li({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&Nn(l),startAt:null,delay:0,onUpdate:c&&function(){return ei(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn||!o&&!p)&&t._startAt.revert(rc),o&&g&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(h&&g&&!_){if(e&&(o=!1),w=li({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Nn(l),immediateRender:o,stagger:0,parent:d},y),V&&(w[k.prop]=V),ts(t._startAt=qe.set(m,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(hn?t._startAt.revert(rc):t._startAt.render(-1,!0)),t._zTime=e,!o)n(t._startAt,xe,xe);else if(!e)return}for(t._pt=t._ptCache=0,l=g&&Nn(l)||l&&!g,A=0;A<m.length;A++){if(x=m[A],P=x._gsap||Ep(m)[A]._gsap,t._ptLookup[A]=W={},Bf[P.id]&&Kr.length&&xc(),H=S===m?A:S.indexOf(x),k&&(F=new k).init(x,V||y,t,H,S)!==!1&&(t._pt=R=new Bn(t._pt,x,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(j){W[j]=R}),F.priority&&(T=1)),!k||V)for(w in y)$n[w]&&(F=Ox(w,y,t,H,x,S))?F.priority&&(T=1):W[w]=R=Tp.call(t,x,w,"get",y[w],H,S,0,r.stringFilter);t._op&&t._op[A]&&t.kill(x,t._op[A]),b&&t._pt&&(Gr=t,De.killTweensOf(x,W,t.globalTime(e)),B=!t.parent,Gr=0),t._pt&&l&&(Bf[P.id]=1)}T&&Hx(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!B,f&&e<=0&&E.render(Mi,!0,!0)},hA=function(t,e,i,r,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,f,p;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,p=t._targets.length;p--;){if(h=f[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Wf=1,t.vars[e]="+=0",Ap(t,o),Wf=0,l?Yo(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=i-h.s,u.e&&(u.e=Ge(i)+pn(u.e)),u.b&&(u.b=h.s+pn(u.b))},uA=function(t,e){var i=t[0]?Rs(t[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return e;s=Ha({},e);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},fA=function(t,e,i,r){var s=e.ease||r||"power1.inOut",a,o;if(gn(e))o=i[t]||(i[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Io=function(t,e,i,r,s){return ze(t)?t.call(e,i,r,s):on(t)&&~t.indexOf("random(")?jo(t):t},Bx=yp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",kx={};On(Bx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return kx[n]=1});var qe=(function(n){rx(t,n);function t(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=n.call(this,a?r:Do(r))||this;var l=o.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,S=r.parent||De,b=(gn(i)||ax(i)?wr(i[0]):"length"in r)?[i]:yi(i),E,y,A,w,R,x,T,P;if(o._targets=b.length?Ep(b):Yo("GSAP target "+i+" not found. https://gsap.com",!si.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||Hl(c)||Hl(h)){if(r=o.vars,E=o.timeline=new Mn({data:"nested",defaults:_||{},targets:S&&S.data==="nested"?S.vars.targets:b}),E.kill(),E.parent=E._dp=dr(o),E._start=0,f||Hl(c)||Hl(h)){if(w=b.length,T=f&&Ex(f),rr(f))for(R in f)~Bx.indexOf(R)&&(P||(P={}),P[R]=f[R]);for(y=0;y<w;y++)A=vc(r,kx),A.stagger=0,d&&(A.yoyoEase=d),P&&Ha(A,P),x=b[y],A.duration=+Io(c,dr(o),y,x,b),A.delay=(+Io(h,dr(o),y,x,b)||0)-o._delay,!f&&w===1&&A.delay&&(o._delay=h=A.delay,o._start+=h,A.delay=0),E.to(x,A,T?T(y,x,b):0),E._ease=Kt.none;E.duration()?c=h=0:o.timeline=0}else if(g){Do(li(E.vars.defaults,{ease:"none"})),E._ease=Ds(g.ease||r.ease||"none");var k=0,F,W,H;if(gn(g))g.forEach(function(V){return E.to(b,V,">")}),E.duration();else{A={};for(R in g)R==="ease"||R==="easeEach"||fA(R,g[R],A,g.easeEach);for(R in A)for(F=A[R].sort(function(V,B){return V.t-B.t}),k=0,y=0;y<F.length;y++)W=F[y],H={ease:W.e,duration:(W.t-(y?F[y-1].t:0))/100*c},H[R]=W.v,E.to(b,H,k),k+=H.duration;E.duration()<c&&E.to({},{duration:c-E.duration()})}}c||o.duration(c=E.duration())}else o.timeline=0;return p===!0&&!_p&&(Gr=dr(o),De.killTweensOf(b),Gr=0),qi(S,dr(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!c&&!g&&o._start===Pe(S._time)&&Nn(u)&&HT(dr(o))&&S.data!=="nested")&&(o._tTime=-xe,o.render(Math.max(0,-h)||0)),m&&vx(dr(o),m),o}var e=t.prototype;return e.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,h=r<0,u=r>l-xe&&!h?l:r<xe?0:r,f,p,g,_,m,d,S,b,E;if(!c)XT(this,r,s,a);else if(u!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,b=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+r,s,a);if(f=Pe(u%_),u===l?(g=this._repeat,f=c):(m=Pe(u/_),g=~~m,g&&g===m?(f=c,g--):f>c&&(f=c)),d=this._yoyo&&g&1,d&&(E=this._yEase,f=c-f),m=Wa(this._tTime,_),f===o&&!a&&this._initted&&g===m)return this._tTime=u,this;g!==m&&(b&&this._yEase&&Ux(b,d),this.vars.repeatRefresh&&!d&&!this._lock&&f!==_&&this._initted&&(this._lock=a=1,this.render(Pe(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Sx(this,h?r:f,a,s,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(E||this._ease)(f/c),this._from&&(this.ratio=S=1-S),!o&&u&&!s&&!m&&(ei(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;b&&b.render(r<0?r:b._dur*b._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&kf(this,r,s,a),ei(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ei(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&kf(this,r,!0,!0),(r||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&ts(this,1),!s&&!(h&&!o)&&(u||o||d)&&(ei(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},e.resetTo=function(r,s,a,o,l){Ko||ti.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ap(this,c),h=this._ease(c/this._dur),hA(this,r,s,a,o,h,c,l)?this.resetTo(r,s,a,o,1):(hh(this,0),this.parent||gx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ao(this):this.scrollTrigger&&this.scrollTrigger.kill(!!hn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Gr&&Gr.vars.overwrite!==!0)._first||Ao(this),this.parent&&a!==this.timeline.totalDuration()&&Xa(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?yi(r):o,c=this._ptLookup,h=this._pt,u,f,p,g,_,m,d;if((!s||s==="all")&&VT(o,l))return s==="all"&&(this._pt=0),Ao(this);for(u=this._op=this._op||[],s!=="all"&&(on(s)&&(_={},On(s,function(S){return _[S]=1}),s=_),s=uA(o,s)),d=o.length;d--;)if(~l.indexOf(o[d])){f=c[d],s==="all"?(u[d]=s,g=f,p={}):(p=u[d]=u[d]||{},g=s);for(_ in g)m=f&&f[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&lh(this,m,"_pt"),delete f[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&Ao(this),this},t.to=function(r,s){return new t(r,s,arguments[2])},t.from=function(r,s){return Lo(1,arguments)},t.delayedCall=function(r,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(r,s,a){return Lo(2,arguments)},t.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(r,s)},t.killTweensOf=function(r,s,a){return De.killTweensOf(r,s,a)},t})(Zo);li(qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});On("staggerTo,staggerFrom,staggerFromTo",function(n){qe[n]=function(){var t=new Mn,e=Vf.call(arguments,0);return e.splice(n==="staggerFromTo"?5:4,0,0),t[n].apply(t,e)}});var wp=function(t,e,i){return t[e]=i},zx=function(t,e,i){return t[e](i)},dA=function(t,e,i,r){return t[e](r.fp,i)},pA=function(t,e,i){return t.setAttribute(e,i)},Cp=function(t,e){return ze(t[e])?zx:gp(t[e])&&t.setAttribute?pA:wp},Vx=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},mA=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Gx=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},Rp=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},_A=function(t,e,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(t,e,i),s=a},gA=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?lh(this,e,"_pt"):e.dep||(i=1),e=r;return!i},xA=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},Hx=function(t){for(var e=t._pt,i,r,s,a;e;){for(i=e._next,r=s;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:a)?e._prev._next=e:s=e,(e._next=r)?r._prev=e:a=e,e=i}t._pt=s},Bn=(function(){function n(e,i,r,s,a,o,l,c,h){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Vx,this.d=l||this,this.set=c||wp,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=n.prototype;return t.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=xA,this.m=i,this.mt=s,this.tween=r},n})();On(yp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Mp[n]=1});oi.TweenMax=oi.TweenLite=qe;oi.TimelineLite=oi.TimelineMax=Mn;De=new Mn({sortChildren:!1,defaults:Ga,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Lx;var Ls=[],ac={},vA=[],p_=0,SA=0,uu=function(t){return(ac[t]||vA).map(function(e){return e()})},Xf=function(){var t=Date.now(),e=[];t-p_>2&&(uu("matchMediaInit"),Ls.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Hi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&e.push(i))}),uu("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),p_=t,uu("matchMedia"))},Wx=(function(){function n(e,i){this.selector=i&&Gf(i),this.data=[],this._r=[],this.isReverted=!1,this.id=SA++,e&&this.add(e)}var t=n.prototype;return t.add=function(i,r,s){ze(i)&&(s=r,r=i,i=ze);var a=this,o=function(){var c=Ce,h=a.selector,u;return c&&c!==a&&c.data.push(a),s&&(a.selector=Gf(s)),Ce=a,u=r.apply(a,arguments),ze(u)&&a._r.push(u),Ce=c,a.selector=h,a.isReverted=!1,u};return a.last=o,i===ze?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},t.ignore=function(i){var r=Ce;Ce=null,i(this),Ce=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qe&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof qe)&&c.revert&&c.revert(i);s._r.forEach(function(h){return h(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Ls.length;a--;)Ls[a].id===this.id&&Ls.splice(a,1)},t.revert=function(i){this.kill(i||{})},n})(),MA=(function(){function n(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=n.prototype;return t.add=function(i,r,s){rr(i)||(i={matches:i});var a=new Wx(0,s||this.scope),o=a.conditions={},l,c,h;Ce&&!a.selector&&(a.selector=Ce.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?h=1:(l=Hi.matchMedia(i[c]),l&&(Ls.indexOf(a)<0&&Ls.push(a),(o[c]=l.matches)&&(h=1),l.addListener?l.addListener(Xf):l.addEventListener("change",Xf)));return h&&r(a,function(u){return a.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n})(),Mc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return Rx(r)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,i,r){on(t)&&(t=yi(t)[0]);var s=Rs(t||{}).get,a=i?_x:mx;return i==="native"&&(i=""),t&&(e?a(($n[e]&&$n[e].get||s)(t,e,i,r)):function(o,l,c){return a(($n[o]&&$n[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,i){if(t=yi(t),t.length>1){var r=t.map(function(h){return Gn.quickSetter(h,e,i)}),s=r.length;return function(h){for(var u=s;u--;)r[u](h)}}t=t[0]||{};var a=$n[e],o=Rs(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(h){var u=new a;pa._pt=0,u.init(t,i?h+i:h,pa,0,[t]),u.render(1,u),pa._pt&&Rp(1,pa)}:o.set(t,l);return a?c:function(h){return c(t,l,i?h+i:h,o,1)}},quickTo:function(t,e,i){var r,s=Gn.to(t,li((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,h){return s.resetTo(e,l,c,h)};return a.tween=s,a},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ds(t.ease,Ga.ease)),c_(Ga,t||{})},config:function(t){return c_(si,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,s=t.defaults,a=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!$n[o]&&!oi[o]&&Yo(e+" effect requires "+o+" plugin.")}),ou[e]=function(o,l,c){return i(yi(o),li(l||{},s),c)},a&&(Mn.prototype[e]=function(o,l,c){return this.add(ou[e](o,rr(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){Kt[t]=Ds(e)},parseEase:function(t,e){return arguments.length?Ds(t,e):Kt},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new Mn(t),r,s;for(i.smoothChildTiming=Nn(t.smoothChildTiming),De.remove(i),i._dp=0,i._time=i._tTime=De._time,r=De._first;r;)s=r._next,(e||!(!r._dur&&r instanceof qe&&r.vars.onComplete===r._targets[0]))&&qi(i,r,r._start-r._delay),r=s;return qi(De,i,0),i},context:function(t,e){return t?new Wx(t,e):Ce},matchMedia:function(t){return new MA(t)},matchMediaRefresh:function(){return Ls.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||Xf()},addEventListener:function(t,e){var i=ac[t]||(ac[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ac[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:QT,wrapYoyo:tA,distribute:Ex,random:Tx,snap:bx,normalize:JT,getUnit:pn,clamp:jT,splitColor:Px,toArray:yi,selector:Gf,mapRange:wx,pipe:ZT,unitize:$T,interpolate:eA,shuffle:yx},install:hx,effects:ou,ticker:ti,updateRoot:Mn.updateRoot,plugins:$n,globalTimeline:De,core:{PropTween:Bn,globals:ux,Tween:qe,Timeline:Mn,Animation:Zo,getCache:Rs,_removeLinkedListItem:lh,reverting:function(){return hn},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return _p=t}}};On("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Mc[n]=qe[n]});ti.add(Mn.updateRoot);pa=Mc.to({},{duration:0});var yA=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},EA=function(t,e){var i=t._targets,r,s,a;for(r in e)for(s=i.length;s--;)a=t._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=yA(a,r)),a&&a.modifier&&a.modifier(e[r],t,i[s],r))},fu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(on(s)&&(l={},On(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}EA(o,s)}}}},Gn=Mc.registerPlugin({name:"attr",init:function(t,e,i,r,s){var a,o,l;this.tween=i;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var i=e._pt;i;)hn?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},fu("roundProps",Hf),fu("modifiers"),fu("snap",bx))||Mc;qe.version=Mn.version=Gn.version="3.14.2";cx=1;xp()&&Ya();Kt.Power0;Kt.Power1;Kt.Power2;Kt.Power3;Kt.Power4;Kt.Linear;Kt.Quad;Kt.Cubic;Kt.Quart;Kt.Quint;Kt.Strong;Kt.Elastic;Kt.Back;Kt.SteppedEase;Kt.Bounce;Kt.Sine;Kt.Expo;Kt.Circ;var m_,Hr,ya,Pp,ws,__,Dp,bA=function(){return typeof window<"u"},Cr={},vs=180/Math.PI,Ea=Math.PI/180,ca=Math.atan2,g_=1e8,Lp=/([A-Z])/g,TA=/(left|right|width|margin|padding|x)/i,AA=/[\s,\(]\S/,Zi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},wA=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},CA=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},RA=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},PA=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Xx=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Yx=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},DA=function(t,e,i){return t.style[e]=i},LA=function(t,e,i){return t.style.setProperty(e,i)},IA=function(t,e,i){return t._gsap[e]=i},UA=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},FA=function(t,e,i,r,s){var a=t._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},NA=function(t,e,i,r,s){var a=t._gsap;a[e]=i,a.renderTransform(s,a)},Le="transform",kn=Le+"Origin",OA=function n(t,e){var i=this,r=this.target,s=r.style,a=r._gsap;if(t in Cr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Zi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=mr(r,o)}):this.tfm[t]=a.x?a[t]:mr(r,t),t===kn&&(this.tfm.zOrigin=a.zOrigin);else return Zi.transform.split(",").forEach(function(o){return n.call(i,o,e)});if(this.props.indexOf(Le)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},qx=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},BA=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?i[t[s]]=t[s+2]:i.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Lp,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Dp(),(!s||!s.isStart)&&!i[Le]&&(qx(i),r.zOrigin&&i[kn]&&(i[kn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},jx=function(t,e){var i={target:t,props:[],revert:BA,save:OA};return t._gsap||Gn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Kx,qf=function(t,e){var i=Hr.createElementNS?Hr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Hr.createElement(t);return i&&i.style?i:Hr.createElement(t)},ni=function n(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Lp,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&n(t,qa(e)||e,1)||""},x_="O,Moz,ms,Ms,Webkit".split(","),qa=function(t,e,i){var r=e||ws,s=r.style,a=5;if(t in s&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(x_[a]+t in s););return a<0?null:(a===3?"ms":a>=0?x_[a]:"")+t},jf=function(){bA()&&window.document&&(m_=window,Hr=m_.document,ya=Hr.documentElement,ws=qf("div")||{style:{}},qf("div"),Le=qa(Le),kn=Le+"Origin",ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Kx=!!qa("perspective"),Dp=Gn.core.reverting,Pp=1)},v_=function(t){var e=t.ownerSVGElement,i=qf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),s;r.style.display="block",i.appendChild(r),ya.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),ya.removeChild(i),s},S_=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Zx=function(t){var e,i;try{e=t.getBBox()}catch{e=v_(t),i=1}return e&&(e.width||e.height)||i||(e=v_(t)),e&&!e.width&&!e.x&&!e.y?{x:+S_(t,["x","cx","x1"])||0,y:+S_(t,["y","cy","y1"])||0,width:0,height:0}:e},$x=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Zx(t))},es=function(t,e){if(e){var i=t.style,r;e in Cr&&e!==kn&&(e=Le),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Lp,"-$1").toLowerCase())):i.removeAttribute(e)}},Wr=function(t,e,i,r,s,a){var o=new Bn(t._pt,e,i,0,1,a?Yx:Xx);return t._pt=o,o.b=r,o.e=s,t._props.push(i),o},M_={deg:1,rad:1,turn:1},kA={grid:1,flex:1},ns=function n(t,e,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ws.style,l=TA.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=r==="px",p=r==="%",g,_,m,d;if(r===a||!s||M_[r]||M_[a])return s;if(a!=="px"&&!f&&(s=n(t,e,i,"px")),d=t.getCTM&&$x(t),(p||a==="%")&&(Cr[e]||~e.indexOf("adius")))return g=d?t.getBBox()[l?"width":"height"]:t[h],Ge(p?s/g*u:s/100*g);if(o[l?"width":"height"]=u+(f?a:r),_=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Hr||!_.appendChild)&&(_=Hr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===ti.time&&!m.uncache)return Ge(s/m.width*u);if(p&&(e==="height"||e==="width")){var S=t.style[e];t.style[e]=u+r,g=t[h],S?t.style[e]=S:es(t,e)}else(p||a==="%")&&!kA[ni(_,"display")]&&(o.position=ni(t,"position")),_===t&&(o.position="static"),_.appendChild(ws),g=ws[h],_.removeChild(ws),o.position="absolute";return l&&p&&(m=Rs(_),m.time=ti.time,m.width=_[h]),Ge(f?g*s/u:g&&s?u/g*s:0)},mr=function(t,e,i,r){var s;return Pp||jf(),e in Zi&&e!=="transform"&&(e=Zi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Cr[e]&&e!=="transform"?(s=Jo(t,r),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Ec(ni(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yc[e]&&yc[e](t,e,i)||ni(t,e)||dx(t,e)||(e==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ns(t,e,s,i)+i:s},zA=function(t,e,i,r){if(!i||i==="none"){var s=qa(e,t,1),a=s&&ni(t,s,1);a&&a!==i?(e=s,i=a):e==="borderColor"&&(i=ni(t,"borderTopColor"))}var o=new Bn(this._pt,t.style,e,0,1,Gx),l=0,c=0,h,u,f,p,g,_,m,d,S,b,E,y;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=ni(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=t.style[e],t.style[e]=r,r=ni(t,e)||r,_?t.style[e]=_:es(t,e)),h=[i,r],Lx(h),i=h[0],r=h[1],f=i.match(da)||[],y=r.match(da)||[],y.length){for(;u=da.exec(r);)m=u[0],S=r.substring(l,u.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(_=f[c++]||"")&&(p=parseFloat(_)||0,E=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ma(p,m)+E),d=parseFloat(m),b=m.substr((d+"").length),l=da.lastIndex-b.length,b||(b=b||si.units[e]||E,l===r.length&&(r+=b,o.e+=b)),E!==b&&(p=ns(t,e,_,b)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:d-p,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=e==="display"&&r==="none"?Yx:Xx;return lx.test(r)&&(o.e=0),this._pt=o,o},y_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},VA=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=y_[i]||i,e[1]=y_[r]||r,e.join(" ")},GA=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,s=e.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Cr[o]&&(l=1,o=o==="transformOrigin"?kn:Le),es(i,o);l&&(es(i,Le),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Jo(i,1),a.uncache=1,qx(r)))}},yc={clearProps:function(t,e,i,r,s){if(s.data!=="isFromStart"){var a=t._pt=new Bn(t._pt,e,i,0,0,GA);return a.u=r,a.pr=-10,a.tween=s,t._props.push(i),1}}},$o=[1,0,0,1,0,0],Jx={},Qx=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},E_=function(t){var e=ni(t,Le);return Qx(e)?$o:e.substr(7).match(ox).map(Ge)},Ip=function(t,e){var i=t._gsap||Rs(t),r=t.style,s=E_(t),a,o,l,c;return i.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?$o:s):(s===$o&&!t.offsetParent&&t!==ya&&!i.svg&&(l=r.display,r.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ya.appendChild(t)),s=E_(t),l?r.display=l:es(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ya.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kf=function(t,e,i,r,s,a){var o=t._gsap,l=s||Ip(t,!0),c=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],_=l[2],m=l[3],d=l[4],S=l[5],b=e.split(" "),E=parseFloat(b[0])||0,y=parseFloat(b[1])||0,A,w,R,x;i?l!==$o&&(w=p*m-g*_)&&(R=E*(m/w)+y*(-_/w)+(_*S-m*d)/w,x=E*(-g/w)+y*(p/w)-(p*S-g*d)/w,E=R,y=x):(A=Zx(t),E=A.x+(~b[0].indexOf("%")?E/100*A.width:E),y=A.y+(~(b[1]||b[0]).indexOf("%")?y/100*A.height:y)),r||r!==!1&&o.smooth?(d=E-c,S=y-h,o.xOffset=u+(d*p+S*_)-d,o.yOffset=f+(d*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=y,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[kn]="0px 0px",a&&(Wr(a,o,"xOrigin",c,E),Wr(a,o,"yOrigin",h,y),Wr(a,o,"xOffset",u,o.xOffset),Wr(a,o,"yOffset",f,o.yOffset)),t.setAttribute("data-svg-origin",E+" "+y)},Jo=function(t,e){var i=t._gsap||new Nx(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=ni(t,kn)||"0",h,u,f,p,g,_,m,d,S,b,E,y,A,w,R,x,T,P,k,F,W,H,V,B,j,ot,et,ct,Ut,Ot,Zt,$t;return h=u=f=_=m=d=S=b=E=0,p=g=1,i.svg=!!(t.getCTM&&$x(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),r.scale=r.rotate=r.translate="none"),w=Ip(t,i.svg),i.svg&&(i.uncache?(j=t.getBBox(),c=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",B=""):B=!e&&t.getAttribute("data-svg-origin"),Kf(t,B||c,!!B||i.originIsAbsolute,i.smooth!==!1,w)),y=i.xOrigin||0,A=i.yOrigin||0,w!==$o&&(P=w[0],k=w[1],F=w[2],W=w[3],h=H=w[4],u=V=w[5],w.length===6?(p=Math.sqrt(P*P+k*k),g=Math.sqrt(W*W+F*F),_=P||k?ca(k,P)*vs:0,S=F||W?ca(F,W)*vs+_:0,S&&(g*=Math.abs(Math.cos(S*Ea))),i.svg&&(h-=y-(y*P+A*F),u-=A-(y*k+A*W))):($t=w[6],Ot=w[7],et=w[8],ct=w[9],Ut=w[10],Zt=w[11],h=w[12],u=w[13],f=w[14],R=ca($t,Ut),m=R*vs,R&&(x=Math.cos(-R),T=Math.sin(-R),B=H*x+et*T,j=V*x+ct*T,ot=$t*x+Ut*T,et=H*-T+et*x,ct=V*-T+ct*x,Ut=$t*-T+Ut*x,Zt=Ot*-T+Zt*x,H=B,V=j,$t=ot),R=ca(-F,Ut),d=R*vs,R&&(x=Math.cos(-R),T=Math.sin(-R),B=P*x-et*T,j=k*x-ct*T,ot=F*x-Ut*T,Zt=W*T+Zt*x,P=B,k=j,F=ot),R=ca(k,P),_=R*vs,R&&(x=Math.cos(R),T=Math.sin(R),B=P*x+k*T,j=H*x+V*T,k=k*x-P*T,V=V*x-H*T,P=B,H=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=Ge(Math.sqrt(P*P+k*k+F*F)),g=Ge(Math.sqrt(V*V+$t*$t)),R=ca(H,V),S=Math.abs(R)>2e-4?R*vs:0,E=Zt?1/(Zt<0?-Zt:Zt):0),i.svg&&(B=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Qx(ni(t,Le)),B&&t.setAttribute("transform",B))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),e=e||i.uncache,i.x=h-((i.xPercent=h&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+a,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+a,i.z=f+a,i.scaleX=Ge(p),i.scaleY=Ge(g),i.rotation=Ge(_)+o,i.rotationX=Ge(m)+o,i.rotationY=Ge(d)+o,i.skewX=S+o,i.skewY=b+o,i.transformPerspective=E+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!e&&i.zOrigin||0)&&(r[kn]=Ec(c)),i.xOffset=i.yOffset=0,i.force3D=si.force3D,i.renderTransform=i.svg?WA:Kx?tv:HA,i.uncache=0,i},Ec=function(t){return(t=t.split(" "))[0]+" "+t[1]},du=function(t,e,i){var r=pn(e);return Ge(parseFloat(e)+parseFloat(ns(t,"x",i+"px",r)))+r},HA=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,tv(t,e)},_s="0deg",So="0px",gs=") ",tv=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,h=i.rotationY,u=i.rotationX,f=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,S=i.target,b=i.zOrigin,E="",y=d==="auto"&&t&&t!==1||d===!0;if(b&&(u!==_s||h!==_s)){var A=parseFloat(h)*Ea,w=Math.sin(A),R=Math.cos(A),x;A=parseFloat(u)*Ea,x=Math.cos(A),a=du(S,a,w*x*-b),o=du(S,o,-Math.sin(A)*-b),l=du(S,l,R*x*-b+b)}m!==So&&(E+="perspective("+m+gs),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(y||a!==So||o!==So||l!==So)&&(E+=l!==So||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+gs),c!==_s&&(E+="rotate("+c+gs),h!==_s&&(E+="rotateY("+h+gs),u!==_s&&(E+="rotateX("+u+gs),(f!==_s||p!==_s)&&(E+="skew("+f+", "+p+gs),(g!==1||_!==1)&&(E+="scale("+g+", "+_+gs),S.style[Le]=E||"translate(0, 0)"},WA=function(t,e){var i=e||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,h=i.skewY,u=i.scaleX,f=i.scaleY,p=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,S=i.forceCSS,b=parseFloat(a),E=parseFloat(o),y,A,w,R,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Ea,c*=Ea,y=Math.cos(l)*u,A=Math.sin(l)*u,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(h*=Ea,x=Math.tan(c-h),x=Math.sqrt(1+x*x),w*=x,R*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),y*=x,A*=x)),y=Ge(y),A=Ge(A),w=Ge(w),R=Ge(R)):(y=u,R=f,A=w=0),(b&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(b=ns(p,"x",a,"px"),E=ns(p,"y",o,"px")),(g||_||m||d)&&(b=Ge(b+g-(g*y+_*w)+m),E=Ge(E+_-(g*A+_*R)+d)),(r||s)&&(x=p.getBBox(),b=Ge(b+r/100*x.width),E=Ge(E+s/100*x.height)),x="matrix("+y+","+A+","+w+","+R+","+b+","+E+")",p.setAttribute("transform",x),S&&(p.style[Le]=x)},XA=function(t,e,i,r,s){var a=360,o=on(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?vs:1),c=l-r,h=r+c+"deg",u,f;return o&&(u=s.split("_")[1],u==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),u==="cw"&&c<0?c=(c+a*g_)%a-~~(c/a)*a:u==="ccw"&&c>0&&(c=(c-a*g_)%a-~~(c/a)*a)),t._pt=f=new Bn(t._pt,e,i,r,c,wA),f.e=h,f.u="deg",t._props.push(i),f},b_=function(t,e){for(var i in e)t[i]=e[i];return t},YA=function(t,e,i){var r=b_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,h,u,f,p,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[Le]=e,o=Jo(i,1),es(i,Le),i.setAttribute("transform",c)):(c=getComputedStyle(i)[Le],a[Le]=e,o=Jo(i,1),a[Le]=c);for(l in Cr)c=r[l],h=o[l],c!==h&&s.indexOf(l)<0&&(p=pn(c),g=pn(h),u=p!==g?ns(i,l,c,g):parseFloat(c),f=parseFloat(h),t._pt=new Bn(t._pt,o,l,u,f-u,Yf),t._pt.u=g||0,t._props.push(l));b_(o,r)};On("padding,margin,Width,Radius",function(n,t){var e="Top",i="Right",r="Bottom",s="Left",a=(t<3?[e,i,r,s]:[e+s,e+i,r+i,r+s]).map(function(o){return t<2?n+o:"border"+o+n});yc[t>1?"border"+n:n]=function(o,l,c,h,u){var f,p;if(arguments.length<4)return f=a.map(function(g){return mr(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(h+"").split(" "),p={},a.forEach(function(g,_){return p[g]=f[_]=f[_]||f[(_-1)/2|0]}),o.init(l,p,u)}});var ev={name:"css",register:jf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,s){var a=this._props,o=t.style,l=i.vars.startAt,c,h,u,f,p,g,_,m,d,S,b,E,y,A,w,R,x;Pp||jf(),this.styles=this.styles||jx(t),R=this.styles.props,this.tween=i;for(_ in e)if(_!=="autoRound"&&(h=e[_],!($n[_]&&Ox(_,e,i,r,t,s)))){if(p=typeof h,g=yc[_],p==="function"&&(h=h.call(i,r,t,s),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=jo(h)),g)g(this,t,_,h,i)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Zr.lastIndex=0,Zr.test(c)||(m=pn(c),d=pn(h),d?m!==d&&(c=ns(t,_,c,d)+d):m&&(h+=m)),this.add(o,"setProperty",c,h,r,s,0,0,_),a.push(_),R.push(_,0,o[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,t,s):l[_],on(c)&&~c.indexOf("random(")&&(c=jo(c)),pn(c+"")||c==="auto"||(c+=si.units[_]||pn(mr(t,_))||""),(c+"").charAt(1)==="="&&(c=mr(t,_))):c=mr(t,_),f=parseFloat(c),S=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),_ in Zi&&(_==="autoAlpha"&&(f===1&&mr(t,"visibility")==="hidden"&&u&&(f=0),R.push("visibility",0,o.visibility),Wr(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=Zi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),b=_ in Cr,b){if(this.styles.save(_),x=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=ni(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var T=t.style.perspective;t.style.perspective=h,h=ni(t,"perspective"),T?t.style.perspective=T:es(t,"perspective")}u=parseFloat(h)}if(E||(y=t._gsap,y.renderTransform&&!e.parseTransform||Jo(t,e.parseTransform),A=e.smoothOrigin!==!1&&y.smooth,E=this._pt=new Bn(this._pt,o,Le,0,1,y.renderTransform,y,0,-1),E.dep=1),_==="scale")this._pt=new Bn(this._pt,y,"scaleY",y.scaleY,(S?Ma(y.scaleY,S+u):u)-y.scaleY||0,Yf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){R.push(kn,0,o[kn]),h=VA(h),y.svg?Kf(t,h,0,A,0,this):(d=parseFloat(h.split(" ")[2])||0,d!==y.zOrigin&&Wr(this,y,"zOrigin",y.zOrigin,d),Wr(this,o,_,Ec(c),Ec(h)));continue}else if(_==="svgOrigin"){Kf(t,h,1,A,0,this);continue}else if(_ in Jx){XA(this,y,_,f,S?Ma(f,S+h):h);continue}else if(_==="smoothOrigin"){Wr(this,y,"smooth",y.smooth,h);continue}else if(_==="force3D"){y[_]=h;continue}else if(_==="transform"){YA(this,h,t);continue}}else _ in o||(_=qa(_)||_);if(b||(u||u===0)&&(f||f===0)&&!AA.test(h)&&_ in o)m=(c+"").substr((f+"").length),u||(u=0),d=pn(h)||(_ in si.units?si.units[_]:m),m!==d&&(f=ns(t,_,c,d)),this._pt=new Bn(this._pt,b?y:o,_,f,(S?Ma(f,S+u):u)-f,!b&&(d==="px"||_==="zIndex")&&e.autoRound!==!1?PA:Yf),this._pt.u=d||0,b&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=RA):m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=CA);else if(_ in o)zA.call(this,t,_,c,S?S+h:h);else if(_ in t)this.add(t,_,c||t[_],S?S+h:h,r,s);else if(_!=="parseTransform"){Sp(_,h);continue}b||(_ in o?R.push(_,0,o[_]):typeof t[_]=="function"?R.push(_,2,t[_]()):R.push(_,1,c||t[_])),a.push(_)}}w&&Hx(this)},render:function(t,e){if(e.tween._time||!Dp())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:mr,aliases:Zi,getSetter:function(t,e,i){var r=Zi[e];return r&&r.indexOf(",")<0&&(e=r),e in Cr&&e!==kn&&(t._gsap.x||mr(t,"x"))?i&&__===i?e==="scale"?UA:IA:(__=i||{})&&(e==="scale"?FA:NA):t.style&&!gp(t.style[e])?DA:~e.indexOf("-")?LA:Cp(t,e)},core:{_removeProperty:es,_getMatrix:Ip}};Gn.utils.checkPrefix=qa;Gn.core.getStyleSaver=jx;(function(n,t,e,i){var r=On(n+","+t+","+e,function(s){Cr[s]=1});On(t,function(s){si.units[s]="deg",Jx[s]=1}),Zi[r[13]]=n+","+t,On(i,function(s){var a=s.split(":");Zi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");On("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){si.units[n]="px"});Gn.registerPlugin(ev);var _r=Gn.registerPlugin(ev)||Gn;_r.core.Tween;const Yt={starCount:5e4,textLine1:"Happy 1st Wedding Anniversary",textLine2:"05/01/2024 - 05/01/2025",transitionDuration:3,sunColor:16763955,starColors:["#ffffff","#ffd700","#6366f1","#a855f7","#ff0000","#00ff00","#0000ff","#ffff00","#ff00ff","#00ffff"],thickness:.7,starSize:1,defaultCameraZ:80,imageCount:10,trailLength:20,fallingStarsCount:100};let ys=!1,Is=!1,bc=0,Tc=0,pu=0,mu=0,Up=Yt.defaultCameraZ,ba=!1,ha=0;const qA=15;let Wl=!1,_u={x:0,y:0},gu={rotX:0,rotY:0};const Sn=new M2;Sn.background=new Xt(132631);const ji=new Jn(75,window.innerWidth/window.innerHeight,.1,2e3);ji.position.set(0,0,Yt.defaultCameraZ);const ao=new NE({canvas:document.querySelector("#three-canvas"),antialias:!0,powerPreference:"high-performance"});ao.setSize(window.innerWidth,window.innerHeight);ao.setPixelRatio(Math.min(window.devicePixelRatio,2));const ul=1,nv=new cd;nv.set(ul);const jA=new il({color:"black"}),oc={},iv=new eb(Sn,ji),KA=new Pa(new Rt(window.innerWidth,window.innerHeight),1.2,.4,.85),fl=new lg(ao);fl.renderToScreen=!1;fl.addPass(iv);fl.addPass(KA);const Fp=new lg(ao);Fp.addPass(iv);const xu={uniforms:{baseTexture:{value:null},bloomTexture:{value:fl.renderTarget2.texture}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D baseTexture;
        uniform sampler2D bloomTexture;
        varying vec2 vUv;
        void main() {
            gl_FragColor = (texture2D(baseTexture, vUv) + texture2D(bloomTexture, vUv));
        }
    `},ZA=new cn({uniforms:xu.uniforms,vertexShader:xu.vertexShader,fragmentShader:xu.fragmentShader,defines:{}}),rv=new og(ZA,"baseTexture");rv.needsSwap=!0;Fp.addPass(rv);const dl=new BE(ji,ao.domElement);dl.enableDamping=!0;dl.enablePan=!1;dl.addEventListener("start",()=>{ba=!0});dl.addEventListener("end",()=>{ba=!1});let Zf;const ja=document.createElement("video");ja.style.display="none";document.body.appendChild(ja);async function $A(){const n=await xs.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm");Zf=await Dn.createFromOptions(n,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:1});const t=await navigator.mediaDevices.getUserMedia({video:!0});ja.srcObject=t,ja.play(),sv()}function sv(){if(Zf&&ja.readyState>=2){const n=Zf.detectForVideo(ja,performance.now());if(n.landmarks&&n.landmarks.length>0){const t=n.landmarks[0],e=n.handednesses[0][0].label;if(!ba&&!Is){const o=t[4],l=t[8];if(Math.sqrt(Math.pow(l.x-o.x,2)+Math.pow(l.y-o.y,2))<.08){const u=t[0],f=t[5],p=Math.sqrt(Math.pow(f.x-u.x,2)+Math.pow(f.y-u.y,2));if(!Wl)Wl=!0,_u={x:t[0].x,y:t[0].y,depth:p},gu={rotX:Tc,rotY:bc,camZ:Up};else{const g=t[0].x-_u.x,_=t[0].y-_u.y;bc=gu.rotY+-g*Math.PI*.8,Tc=gu.rotX+_*Math.PI*.4}}else Wl=!1}else Wl=!1;const i=t[5],r=t[17],s=.1;if(i.x>s&&i.x<1-s&&i.y>s&&i.y<1-s&&r.x>s&&r.x<1-s&&r.y>s&&r.y<1-s){let o=e==="Right"?i.x>r.x:i.x<r.x;o!==ys&&!Is?(ha++,ha>=qA&&(aw(o),ha=0)):ha=0}else ha=0}else ha=0}requestAnimationFrame(sv)}Sn.add(new O2(16777215,.2));const av=new N2(Yt.sunColor,1500,300);Sn.add(av);const Np=new yo,ov=new zn(new Ka(2,32,32),new Rc({color:Yt.sunColor,emissive:Yt.sunColor,emissiveIntensity:5}));ov.layers.enable(ul);Np.add(ov);Sn.add(Np);const JA=new Ka(Yt.starSize,4,4),QA=new Rc({color:16777215,emissive:16777215,emissiveIntensity:.3}),Qo=new hd(JA,QA,Yt.starCount);Qo.layers.enable(ul);const rn=new yn,Ac={universe:[],text:[]},Op=[];for(let n=0;n<Yt.starCount;n++){const t=10+Math.random()*70,e=Math.random()*Math.PI*2,i=(Math.random()-.5)*20,r=Math.cos(e)*t,s=Math.sin(e)*t;Ac.universe.push({x:r,y:i,z:s}),Op.push({x:r,y:i,z:s}),Qo.setColorAt(n,new Xt(Yt.starColors[Math.floor(Math.random()*Yt.starColors.length)]))}Sn.add(Qo);const Bp=document.createElement("canvas"),ar=Bp.getContext("2d"),Qi=2048,ks=512;Bp.width=Qi;Bp.height=ks;ar.fillStyle="black";ar.fillRect(0,0,Qi,ks);ar.fillStyle="white";ar.textAlign="center";ar.textBaseline="middle";ar.font=`bold ${Qi/25}px Arial`;ar.fillText(Yt.textLine1,Qi/2,ks/2-60);ar.font=`bold ${Qi/40}px Arial`;ar.fillText(Yt.textLine2,Qi/2,ks/2+80);const tw=ar.getImageData(0,0,Qi,ks).data,$f=[];for(let n=0;n<ks;n+=4)for(let t=0;t<Qi;t+=4)tw[(n*Qi+t)*4]>128&&$f.push({x:(t-Qi/2)*.08,y:-(n-ks/2)*.08});for(let n=0;n<Yt.starCount;n++){const t=$f[Math.floor(Math.random()*$f.length)];Ac.text.push({x:t.x,y:t.y,z:(Math.random()-.5)*Yt.thickness+50})}const ew=new I2,kp=[],zp=[],nw=Yt.imageCount*Yt.trailLength,Uo=new hd(new Ka(.1,4,4),new Rc({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.8}),nw);Uo.layers.enable(ul);Sn.add(Uo);for(let n=1;n<=Yt.imageCount;n++){const t=new zn(new sl(5,5),new il({map:ew.load(`assets/images/${n}.jpg`),side:Yi,transparent:!0})),e=60+Math.random()*15,i=Math.random()*Math.PI*2,r=(Math.random()-.5)*30;t.position.set(Math.cos(i)*e,r,Math.sin(i)*e),Sn.add(t);const s=240/Yt.imageCount,a=-120+(n-1)*s+s/2,o=a+(Math.random()-.5)*10,l=(Math.random()-.5)*40;kp.push(t),zp.push({radius:e,angle:i,yOffset:r,speed:.005+Math.random()*.01,riseSpeed:2+Math.random()*4,startX:o,startZ:l,laneCenterX:a,delay:.1+Math.random()*2,active:!1,trailPositions:Array.from({length:Yt.trailLength},()=>new N)})}const iw=new Ka(.15,4,4),rw=new Rc({color:16777215,emissive:16777215,emissiveIntensity:2,transparent:!0,opacity:.8}),wc=new hd(iw,rw,Yt.fallingStarsCount);wc.layers.enable(ul);Sn.add(wc);const sw=Array.from({length:Yt.fallingStarsCount},()=>({x:(Math.random()-.5)*400,y:(Math.random()-.5)*300,z:(Math.random()-.5)*100+40,vx:.2+Math.random()*.3,vy:-.2-Math.random()*.3}));function aw(n){if(Is)return;Is=!0,ys=n;const t=n?Ac.text:Ac.universe,e=Array.from({length:Yt.imageCount},(i,r)=>r);for(let i=e.length-1;i>0;i--){const r=Math.floor(Math.random()*(i+1));[e[i],e[r]]=[e[r],e[i]]}kp.forEach((i,r)=>{const s=zp[r];if(n){const a=e[r],o=240/Yt.imageCount;s.laneCenterX=-120+a*o+o/2,s.startX=s.laneCenterX+(Math.random()-.5)*10,_r.to(i.position,{x:s.startX,y:-80,z:s.startZ,duration:1.5,ease:"power2.inOut",onComplete:()=>{i.visible=!1}});const l=e.indexOf(r);s.active=!1,s.delay=1+l*2+Math.random()}else{const a=60+r*2,o=r/Yt.imageCount*Math.PI*2,l=(Math.random()-.5)*20;s.radius=a,s.angle=o,s.yOffset=l,s.active=!1,i.visible=!0,_r.to(i.scale,{x:1,y:1,z:1,duration:1}),_r.to(i.position,{x:Math.cos(o)*a,y:l,z:Math.sin(o)*a,duration:2,ease:"power3.out"})}}),t.forEach((i,r)=>{_r.to(Op[r],{x:i.x,y:i.y,z:i.z,duration:Yt.transitionDuration,ease:"power4.inOut",delay:Math.random()*.5,onComplete:r===Yt.starCount-1?()=>Is=!1:null})}),_r.to(Np.scale,{x:n?0:1,y:n?0:1,z:n?0:1,duration:2}),_r.to(av,{intensity:n?0:1500,duration:2}),n&&(Up=100,bc=0,Tc=0)}function lv(){!Is&&!ys&&!ba?(pu+=(bc-pu)*.05,mu+=(Tc-mu)*.05,Sn.rotation.y=pu,Sn.rotation.x=mu,ji.position.z+=(Up-ji.position.z)*.03):ys&&!ba&&(Sn.rotation.y*=.9,Sn.rotation.x*=.9,ji.position.z+=(100-ji.position.z)*.05);for(let t=0;t<Yt.starCount;t++){const e=Op[t];rn.position.set(e.x,e.y,e.z),rn.updateMatrix(),Qo.setMatrixAt(t,rn.matrix)}Qo.instanceMatrix.needsUpdate=!0;for(let t=0;t<Yt.fallingStarsCount;t++){const e=sw[t];ys?(e.x+=e.vx,e.y+=e.vy,(e.x>200||e.y<-150)&&(e.x=-200+Math.random()*50,e.y=150+Math.random()*50),rn.position.set(e.x,e.y,e.z),rn.scale.setScalar(1)):rn.scale.setScalar(0),rn.updateMatrix(),wc.setMatrixAt(t,rn.matrix)}wc.instanceMatrix.needsUpdate=!0;let n=0;for(let t=0;t<Yt.imageCount;t++){const e=kp[t],i=zp[t];if(ys?i.active?(e.position.y+=i.riseSpeed*.016,e.position.y>40&&e.material.opacity>0&&!i.isScalingOut&&(i.isScalingOut=!0,_r.to(e.material,{opacity:0,duration:1,onComplete:()=>{e.material.opacity=1,e.position.y=-100;const r=Math.floor(Math.random()*Yt.imageCount),s=240/Yt.imageCount;i.laneCenterX=-120+r*s+s/2,e.position.x=i.laneCenterX+(Math.random()-.5)*10,e.position.z=(Math.random()-.5)*40,i.isScalingOut=!1,i.active=!1,i.delay=1+Math.random()*2}}))):Is||(i.delay>0?i.delay-=.016:(i.active=!0,e.visible=!0,e.scale.setScalar(0),_r.to(e.scale,{x:3.5,y:3.5,z:3.5,duration:1,ease:"back.out(1.7)"}),e.position.set(i.startX,-70,i.startZ))):e.visible=!0,e.visible&&e.lookAt(ji.position),ys)for(let r=0;r<Yt.trailLength;r++)rn.position.copy(e.position),rn.position.y-=r*.5,rn.position.z-=.1,rn.scale.setScalar((1-r/Yt.trailLength)*1.5),rn.updateMatrix(),Uo.setMatrixAt(n++,rn.matrix);else{for(let r=Yt.trailLength-1;r>0;r--)i.trailPositions[r].copy(i.trailPositions[r-1]);i.trailPositions[0].copy(e.position);for(let r=0;r<Yt.trailLength;r++){const s=i.trailPositions[r];rn.position.copy(s),rn.scale.setScalar(1-r/Yt.trailLength),rn.updateMatrix(),Uo.setMatrixAt(n++,rn.matrix)}}}Uo.instanceMatrix.needsUpdate=!0,ba&&dl.update(),Sn.traverse(ow),fl.render(),Sn.traverse(lw),Fp.render(),requestAnimationFrame(lv)}function ow(n){n.isMesh&&nv.test(n.layers)===!1&&(oc[n.uuid]=n.material,n.material=jA)}function lw(n){oc[n.uuid]&&(n.material=oc[n.uuid],delete oc[n.uuid])}window.addEventListener("resize",()=>{ji.aspect=window.innerWidth/window.innerHeight,ji.updateProjectionMatrix(),ao.setSize(window.innerWidth,window.innerHeight),composer.setSize(window.innerWidth,window.innerHeight)});$A();lv();
