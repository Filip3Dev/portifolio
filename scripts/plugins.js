window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());


(function(a,b,c){"use strict";var d=b.event,e;d.special.smartresize={setup:function(){b(this).bind("resize",d.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",d.special.smartresize.handler)},handler:function(a,c){var d=this,f=arguments;a.type="smartresize",e&&clearTimeout(e),e=setTimeout(function(){b.event.handle.apply(d,f)},c==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Mason=function(a,c){this.element=b(c),this._create(a),this._init()},b.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},b.Mason.prototype={_filterFindBricks:function(a){var b=this.options.itemSelector;return b?a.filter(b).add(a.find(b)):a},_getBricks:function(a){var b=this._filterFindBricks(a).css({position:"absolute"}).addClass("masonry-brick");return b},_create:function(c){this.options=b.extend(!0,{},b.Mason.settings,c),this.styleQueue=[];var d=this.element[0].style;this.originalStyle={height:d.height||""};var e=this.options.containerStyle;for(var f in e)this.originalStyle[f]=d[f]||"";this.element.css(e),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";var g=this;setTimeout(function(){g.element.addClass("masonry")},0),this.options.isResizable&&b(a).bind("smartresize.masonry",function(){g.resize()}),this.reloadItems()},_init:function(a){this._getColumns(),this._reLayout(a)},option:function(a,c){b.isPlainObject(a)&&(this.options=b.extend(!0,this.options,a))},layout:function(a,b){for(var c=0,d=a.length;c<d;c++)this._placeBrick(a[c]);var e={};e.height=Math.max.apply(Math,this.colYs);if(this.options.isFitWidth){var f=0;c=this.cols;while(--c){if(this.colYs[c]!==0)break;f++}e.width=(this.cols-f)*this.columnWidth-this.options.gutterWidth}this.styleQueue.push({$el:this.element,style:e});var g=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",h=this.options.animationOptions,i;for(c=0,d=this.styleQueue.length;c<d;c++)i=this.styleQueue[c],i.$el[g](i.style,h);this.styleQueue=[],b&&b.call(a),this.isLaidOut=!0},_getColumns:function(){var a=this.options.isFitWidth?this.element.parent():this.element,b=a.width();this.columnWidth=this.isFluid?this.options.columnWidth(b):this.options.columnWidth||this.$bricks.outerWidth(!0)||b,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((b+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)},_placeBrick:function(a){var c=b(a),d,e,f,g,h;d=Math.ceil(c.outerWidth(!0)/this.columnWidth),d=Math.min(d,this.cols);if(d===1)f=this.colYs;else{e=this.cols+1-d,f=[];for(h=0;h<e;h++)g=this.colYs.slice(h,h+d),f[h]=Math.max.apply(Math,g)}var i=Math.min.apply(Math,f),j=0;for(var k=0,l=f.length;k<l;k++)if(f[k]===i){j=k;break}var m={top:i+this.offset.y};m[this.horizontalDirection]=this.columnWidth*j+this.offset.x,this.styleQueue.push({$el:c,style:m});var n=i+c.outerHeight(!0),o=this.cols+1-l;for(k=0;k<o;k++)this.colYs[j+k]=n},resize:function(){var a=this.cols;this._getColumns(),(this.isFluid||this.cols!==a)&&this._reLayout()},_reLayout:function(a){var b=this.cols;this.colYs=[];while(b--)this.colYs.push(0);this.layout(this.$bricks,a)},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())},reload:function(a){this.reloadItems(),this._init(a)},appended:function(a,b,c){if(b){this._filterFindBricks(a).css({top:this.element.height()});var d=this;setTimeout(function(){d._appended(a,c)},1)}else this._appended(a,c)},_appended:function(a,b){var c=this._getBricks(a);this.$bricks=this.$bricks.add(c),this.layout(c,b)},remove:function(a){this.$bricks=this.$bricks.not(a),a.remove()},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),b(a).unbind(".masonry")}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var f=function(b){a.console&&a.console.error(b)};b.fn.masonry=function(a){if(typeof a=="string"){var c=Array.prototype.slice.call(arguments,1);this.each(function(){var d=b.data(this,"masonry");if(!d){f("cannot call methods on masonry prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(d[a])||a.charAt(0)==="_"){f("no such method '"+a+"' for masonry instance");return}d[a].apply(d,c)})}else this.each(function(){var c=b.data(this,"masonry");c?(c.option(a||{}),c._init()):b.data(this,"masonry",new b.Mason(a,this))});return this}})(window,jQuery);

// Image pre-load for masonry

(function(c,n){var k="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(l){function m(){var b=c(h),a=c(g);d&&(g.length?d.reject(e,b,a):d.resolve(e));c.isFunction(l)&&l.call(f,e,b,a)}function i(b,a){b.src===k||-1!==c.inArray(b,j)||(j.push(b),a?g.push(b):h.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),o&&d.notifyWith(c(b),[a,e,c(h),c(g)]),e.length===j.length&&(setTimeout(m),e.unbind(".imagesLoaded")))}var f=this,d=c.isFunction(c.Deferred)?c.Deferred():
0,o=c.isFunction(d.notify),e=f.find("img").add(f.filter("img")),j=[],h=[],g=[];e.length?e.bind("load.imagesLoaded error.imagesLoaded",function(b){i(b.target,"error"===b.type)}).each(function(b,a){var e=a.src,d=c.data(a,"imagesLoaded");if(d&&d.src===e)i(a,d.isBroken);else if(a.complete&&a.naturalWidth!==n)i(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=k,a.src=e}):m();return d?d.promise(f):f}})(jQuery);







eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(H($){8($.1P.1J)J;$.1P.1J=H(y,z){8(1g.V==0){1e(M,\'5s 4q 6u 1m "\'+1g.3U+\'".\');J 1g}8(1g.V>1){J 1g.1K(H(){$(1g).1J(y,z)})}F A=1g,$19=1g[0];8(A.1r(\'4r\')){F B=A.1D(\'34\',\'3v\');A.X(\'34\',[\'5t\',M])}Q{F B=O}A.3V=H(o,b,c){o=3W($19,o);F e=[\'G\',\'1n\',\'T\',\'17\',\'1a\',\'1b\'];1m(F a=0,l=e.V;a<l;a++){o[e[a]]=3W($19,o[e[a]])}8(K o.1n==\'13\'){8(o.1n<=50)o.1n={\'G\':o.1n};Q o.1n={\'1j\':o.1n}}Q{8(K o.1n==\'1k\')o.1n={\'1G\':o.1n}}8(K o.G==\'13\')o.G={\'P\':o.G};Q 8(o.G==\'1d\')o.G={\'P\':o.G,\'S\':o.G,\'1l\':o.G};8(K o.G!=\'1o\')o.G={};8(b)2u=$.25(M,{},$.1P.1J.4s,o);7=$.25(M,{},$.1P.1J.4s,o);8(K 7.G.12!=\'1o\')7.G.12={};8(7.G.2I==0&&K c==\'13\'){7.G.2I=c}C.4t=(7.2J);C.2k=(7.2k==\'4u\'||7.2k==\'1t\')?\'1a\':\'17\';F f=[[\'S\',\'35\',\'26\',\'1l\',\'5u\',\'2K\',\'1t\',\'2L\',\'1E\',0,1,2,3],[\'1l\',\'5u\',\'2K\',\'S\',\'35\',\'26\',\'2L\',\'1t\',\'3X\',3,2,1,0]];F g=f[0].V,5v=(7.2k==\'2M\'||7.2k==\'1t\')?0:1;7.d={};1m(F d=0;d<g;d++){7.d[f[0][d]]=f[5v][d]}F h=A.Z();1x(K 7.G.P){W\'1o\':7.G.12.2N=7.G.P.2N;7.G.12.27=7.G.P.27;7.G.P=O;18;W\'1k\':8(7.G.P==\'1d\'){7.G.12.1d=M}Q{7.G.12.2l=7.G.P}7.G.P=O;18;W\'H\':7.G.12.2l=7.G.P;7.G.P=O;18}8(K 7.G.1v==\'1y\'){7.G.1v=(h.1v(\':2O\').V>0)?\':P\':\'*\'}8(7[7.d[\'S\']]==\'T\'){7[7.d[\'S\']]=3w(h,7,\'26\')}8(3Y(7[7.d[\'S\']])&&!7.2J){7[7.d[\'S\']]=3Z(36($1A.3a(),7,\'35\'),7[7.d[\'S\']]);C.4t=M}8(7[7.d[\'1l\']]==\'T\'){7[7.d[\'1l\']]=3w(h,7,\'2K\')}8(!7.G[7.d[\'S\']]){8(7.2J){1e(M,\'5w a \'+7.d[\'S\']+\' 1m 6v G!\');7.G[7.d[\'S\']]=3w(h,7,\'26\')}Q{7.G[7.d[\'S\']]=(4v(h,7,\'26\'))?\'1d\':h[7.d[\'26\']](M)}}8(!7.G[7.d[\'1l\']]){7.G[7.d[\'1l\']]=(4v(h,7,\'2K\'))?\'1d\':h[7.d[\'2K\']](M)}8(!7[7.d[\'1l\']]){7[7.d[\'1l\']]=7.G[7.d[\'1l\']]}8(!7.G.P&&!7.2J){8(7.G[7.d[\'S\']]==\'1d\'){7.G.12.1d=M}8(!7.G.12.1d){8(K 7[7.d[\'S\']]==\'13\'){7.G.P=1L.3x(7[7.d[\'S\']]/7.G[7.d[\'S\']])}Q{F i=36($1A.3a(),7,\'35\');7.G.P=1L.3x(i/7.G[7.d[\'S\']]);7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];8(!7.G.12.2l)7.1B=O}8(7.G.P==\'6w\'||7.G.P<1){1e(M,\'28 a 4w 13 3y P G: 5w 41 "1d".\');7.G.12.1d=M}}}8(!7[7.d[\'S\']]){7[7.d[\'S\']]=\'1d\';8(!7.2J&&7.G.1v==\'*\'&&!7.G.12.1d&&7.G[7.d[\'S\']]!=\'1d\'){7[7.d[\'S\']]=7.G.P*7.G[7.d[\'S\']];7.1B=O}}8(7.G.12.1d){7.3z=(7[7.d[\'S\']]==\'1d\')?36($1A.3a(),7,\'35\'):7[7.d[\'S\']];8(7.1B===O){7[7.d[\'S\']]=\'1d\'}7.G.P=2P(h,7,0)}Q 8(7.G.1v!=\'*\'){7.G.12.42=7.G.P;7.G.P=3A(h,7,0)}8(K 7.1B==\'1y\'){7.1B=(7[7.d[\'S\']]==\'1d\')?O:\'4x\'}7.G.P=2Q(7.G.P,7,7.G.12.2l,$19);7.G.12.2m=7.G.P;7.1u=O;8(7.2J){8(!7.G.12.2N)7.G.12.2N=7.G.P;8(!7.G.12.27)7.G.12.27=7.G.P;7.1B=O;7.1i=[0,0,0,0];F j=$1A.1W(\':P\');8(j)$1A.3b();F k=3Z(36($1A.3a(),7,\'35\'),7[7.d[\'S\']]);8(K 7[7.d[\'S\']]==\'13\'&&k<7[7.d[\'S\']]){k=7[7.d[\'S\']]}8(j)$1A.3c();F m=4y(1L.2v(k/7.G[7.d[\'S\']]),7.G.12);8(m>h.V){m=h.V}F n=1L.3x(k/m),4z=7[7.d[\'1l\']],5x=3Y(4z);h.1K(H(){F a=$(1g),4A=n-5y(a,7,\'6x\');a[7.d[\'S\']](4A);8(5x){a[7.d[\'1l\']](3Z(4A,4z))}});7.G.P=m;7.G[7.d[\'S\']]=n;7[7.d[\'S\']]=m*n}Q{7.1i=5z(7.1i);8(7.1B==\'2L\')7.1B=\'1t\';8(7.1B==\'4B\')7.1B=\'2M\';1x(7.1B){W\'4x\':W\'1t\':W\'2M\':8(7[7.d[\'S\']]!=\'1d\'){F p=43(3d(h,7),7);7.1u=M;7.1i[7.d[1]]=p[1];7.1i[7.d[3]]=p[0]}18;2w:7.1B=O;7.1u=(7.1i[0]==0&&7.1i[1]==0&&7.1i[2]==0&&7.1i[3]==0)?O:M;18}}8(K 7.2n==\'1s\'&&7.2n)7.2n=\'6y\'+A.6z(\'6A\');8(K 7.G.3e!=\'13\')7.G.3e=7.G.P;8(K 7.1n.1j!=\'13\')7.1n.1j=5A;8(K 7.1n.G==\'1y\')7.1n.G=(7.G.12.1d||7.G.1v!=\'*\')?\'P\':7.G.P;7.T=3B($19,7.T,\'T\');7.17=3B($19,7.17);7.1a=3B($19,7.1a);7.1b=3B($19,7.1b,\'1b\');7.T=$.25(M,{},7.1n,7.T);7.17=$.25(M,{},7.1n,7.17);7.1a=$.25(M,{},7.1n,7.1a);7.1b=$.25(M,{},7.1n,7.1b);8(K 7.1b.44!=\'1s\')7.1b.44=O;8(K 7.1b.3f!=\'H\'&&7.1b.3f!==O)7.1b.3f=$.1P.1J.5B;8(K 7.T.1H!=\'1s\')7.T.1H=M;8(K 7.T.4C!=\'13\')7.T.4C=0;8(K 7.T.45==\'1y\')7.T.45=M;8(K 7.T.4D!=\'1s\')7.T.4D=M;8(K 7.T.3g!=\'13\')7.T.3g=(7.T.1j<10)?6B:7.T.1j*5;8(7.29){7.29=4E(7.29)}8(I.1e){1e(I,\'3h S: \'+7.S);1e(I,\'3h 1l: \'+7.1l);8(7.3z)1e(I,\'6C \'+7.d[\'S\']+\': \'+7.3z);1e(I,\'5C 6D: \'+7.G.S);1e(I,\'5C 6E: \'+7.G.1l);1e(I,\'46 3y G P: \'+7.G.P);8(7.T.1H)1e(I,\'46 3y G 4F 6F: \'+7.T.G);8(7.17.Y)1e(I,\'46 3y G 4F 4G: \'+7.17.G);8(7.1a.Y)1e(I,\'46 3y G 4F 5D: \'+7.1a.G)}};A.5E=H(){A.1r(\'4r\',M);F a={\'4H\':A.16(\'4H\'),\'4I\':A.16(\'4I\'),\'3C\':A.16(\'3C\'),\'2L\':A.16(\'2L\'),\'2M\':A.16(\'2M\'),\'4B\':A.16(\'4B\'),\'1t\':A.16(\'1t\'),\'S\':A.16(\'S\'),\'1l\':A.16(\'1l\'),\'4J\':A.16(\'4J\'),\'1E\':A.16(\'1E\'),\'3X\':A.16(\'3X\'),\'4K\':A.16(\'4K\')};1x(a.3C){W\'4L\':F b=\'4L\';18;W\'5F\':F b=\'5F\';18;2w:F b=\'6G\'}$1A.16(a).16({\'6H\':\'2O\',\'3C\':b});A.1r(\'5G\',a).16({\'4H\':\'1t\',\'4I\':\'47\',\'3C\':\'4L\',\'2L\':0,\'1t\':0,\'4J\':0,\'1E\':0,\'3X\':0,\'4K\':0});8(7.1u){A.Z().1K(H(){F m=2o($(1g).16(7.d[\'1E\']));8(2p(m))m=0;$(1g).1r(\'1R\',m)})}};A.5H=H(){A.4M();A.14(L(\'4N\',I),H(e,a){e.1h();8(!C.1Z){8(7.T.Y){7.T.Y.2R(2q(\'48\',I))}}C.1Z=M;8(7.T.1H){7.T.1H=O;A.X(L(\'2S\',I),a)}J M});A.14(L(\'4O\',I),H(e){e.1h();8(C.1S){3D(R)}J M});A.14(L(\'2S\',I),H(e,a,b){e.1h();1F=3i(1F);8(a&&C.1S){R.1Z=M;F c=2x()-R.2T;R.1j-=c;8(R.1p)R.1p.1j-=c;8(R.1Q)R.1Q.1j-=c;3D(R,O)}8(!C.1X&&!C.1S){8(b)1F.3E+=2x()-1F.2T}8(!C.1X){8(7.T.Y){7.T.Y.2R(2q(\'5I\',I))}}C.1X=M;8(7.T.5J){F d=7.T.3g-1F.3E,3F=3G-1L.2v(d*3G/7.T.3g);7.T.5J.1z($19,3F,d)}J M});A.14(L(\'1H\',I),H(e,b,c,d){e.1h();1F=3i(1F);F v=[b,c,d],t=[\'1k\',\'13\',\'1s\'],a=2U(v,t);F b=a[0],c=a[1],d=a[2];8(b!=\'17\'&&b!=\'1a\')b=C.2k;8(K c!=\'13\')c=0;8(K d!=\'1s\')d=O;8(d){C.1Z=O;7.T.1H=M}8(!7.T.1H){e.20();J 1e(I,\'3h 48: 28 2V.\')}8(C.1X){8(7.T.Y){7.T.Y.2y(2q(\'48\',I));7.T.Y.2y(2q(\'5I\',I))}}C.1X=O;1F.2T=2x();F f=7.T.3g+c;3H=f-1F.3E;3F=3G-1L.2v(3H*3G/f);1F.T=6I(H(){8(7.T.5K){7.T.5K.1z($19,3F,3H)}8(C.1S){A.X(L(\'1H\',I),b)}Q{A.X(L(b,I),7.T)}},3H);8(7.T.5L){7.T.5L.1z($19,3F,3H)}J M});A.14(L(\'2W\',I),H(e){e.1h();8(R.1Z){R.1Z=O;C.1X=O;C.1S=M;R.2T=2x();2a(R)}Q{A.X(L(\'1H\',I))}J M});A.14(L(\'17\',I)+\' \'+L(\'1a\',I),H(e,b,f,g){e.1h();8(C.1Z||A.1W(\':2O\')){e.20();J 1e(I,\'3h 48 6J 2O: 28 2V.\')}8(7.G.3e>=N.U){e.20();J 1e(I,\'28 5M G (\'+N.U+\', \'+7.G.3e+\' 5N): 28 2V.\')}F v=[b,f,g],t=[\'1o\',\'13/1k\',\'H\'],a=2U(v,t);F b=a[0],f=a[1],g=a[2];F h=e.4P.1c(I.3j.3I.V);8(K b!=\'1o\'||b==2b)b=7[h];8(K g==\'H\')b.21=g;8(K f!=\'13\'){8(7.G.1v!=\'*\'){f=\'P\'}Q{F i=[f,b.G,7[h].G];1m(F a=0,l=i.V;a<l;a++){8(K i[a]==\'13\'||i[a]==\'5O\'||i[a]==\'P\'){f=i[a];18}}}1x(f){W\'5O\':e.20();J A.1D(h+\'6K\',[b,g]);18;W\'P\':8(!7.G.12.1d&&7.G.1v==\'*\'){f=7.G.P}18}}8(R.1Z){A.X(L(\'2W\',I));A.X(L(\'3k\',I),[h,[b,f,g]]);e.20();J 1e(I,\'3h 6L 2V.\')}8(b.1j>0){8(C.1S){8(b.3k)A.X(L(\'3k\',I),[h,[b,f,g]]);e.20();J 1e(I,\'3h 6M 2V.\')}}8(b.4Q&&!b.4Q.1z($19)){e.20();J 1e(I,\'6N "4Q" 6O O.\')}1F.3E=0;A.X(\'34\',[\'5P\'+h,[b,f]]);8(7.29){F s=7.29,c=[b,f];1m(F j=0,l=s.V;j<l;j++){F d=h;8(!s[j][1])c[0]=s[j][0].1D(\'34\',[\'5Q\',d]);8(!s[j][2])d=(d==\'17\')?\'1a\':\'17\';c[1]=f+s[j][3];s[j][0].X(\'34\',[\'5P\'+d,c])}}J M});A.14(L(\'6P\',I),H(e,f,g){e.1h();F h=A.Z();8(!7.1M){8(N.11==0){8(7.3l){A.X(L(\'1a\',I),N.U-1)}J e.20()}}8(7.1u)1N(h,7);8(K g!=\'13\'){8(7.G.12.1d){g=4a(h,7,N.U-1)}Q 8(7.G.1v!=\'*\'){F i=(K f.G==\'13\')?f.G:4R(A,7);g=5R(h,7,N.U-1,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}8(!7.1M){8(N.U-g<N.11){g=N.U-N.11}}7.G.12.2m=7.G.P;8(7.G.12.1d){F j=2P(h,7,N.U-g);8(7.G.P+g<=j&&g<N.U){g++;j=2P(h,7,N.U-g)}7.G.P=2Q(j,7,7.G.12.2l,$19)}Q 8(7.G.1v!=\'*\'){F j=3A(h,7,N.U-g);7.G.P=2Q(j,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,M);8(g==0){e.20();J 1e(I,\'0 G 41 1n: 28 2V.\')}1e(I,\'5S \'+g+\' G 4G.\');N.11+=g;22(N.11>=N.U){N.11-=N.U}8(!7.1M){8(N.11==0&&f.4c)f.4c.1z($19);8(!7.3l)2X(7,N.11,I)}A.Z().1c(N.U-g,N.U).6Q(A);8(N.U<7.G.P+g){A.Z().1c(0,(7.G.P+g)-N.U).4d(M).3J(A)}F h=A.Z(),2r=5T(h,7,g),1T=5U(h,7),2c=h.1O(g-1),2d=2r.2Y(),2z=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),k=p[0],2s=p[1]}Q{F k=0,2s=0}F l=(k<0)?7.1i[7.d[3]]:0;8(f.1I==\'5V\'&&7.G.P<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d[\'S\']];m.1K(H(){F a=$(1g);a.1r(\'4f\',a.1W(\':2O\')).3b()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=3m(h.1c(0,g),7,\'S\'),2e=4g(2A(1T,7,M),7,!7.1u);8(m)7.G[7.d[\'S\']]=4e;8(7.1u){1N(h,7,M);8(2s>=0){1N(2d,7,7.1i[7.d[1]])}1N(2c,7,7.1i[7.d[3]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=k}F o={},1w=f.1j;8(f.1I==\'47\')1w=0;Q 8(1w==\'T\')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=23(1w,f.1G);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1l\']]==\'1d\'){R.1f.1q([$1A,2e])}8(7.1u){F q=7.1i[7.d[3]];8(2z.4S(2c).V){F r={};r[7.d[\'1E\']]=2c.1r(\'1R\');8(k<0)2c.16(r);Q R.1f.1q([2c,r])}8(2z.4S(2d).V){F s={};s[7.d[\'1E\']]=2d.1r(\'1R\');R.1f.1q([2d,s])}8(2s>=0){F t={};t[7.d[\'1E\']]=2z.1r(\'1R\')+7.1i[7.d[1]];R.1f.1q([2z,t])}}Q{F q=0}o[7.d[\'1t\']]=q;F u=[2r,1T,2e,1w];8(f.2f)f.2f.3K($19,u);1Y.2f=3L(1Y.2f,$19,u);1x(f.1I){W\'2B\':W\'2g\':W\'2C\':W\'2h\':R.1p=23(R.1j,R.1G);R.1Q=23(R.1j,R.1G);R.1j=0;18}1x(f.1I){W\'2g\':W\'2C\':W\'2h\':F v=A.4d().3J($1A);18}1x(f.1I){W\'2h\':v.Z().1c(0,g).1U();W\'2g\':W\'2C\':v.Z().1c(7.G.P).1U();18}1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':0}]);18;W\'2g\':v.16({\'2i\':0});R.1p.1f.1q([A,{\'S\':\'+=0\'},H(){v.1U()}]);R.1Q.1f.1q([v,{\'2i\':1}]);18;W\'2C\':R=4T(R,A,v,7,M);18;W\'2h\':R=4U(R,A,v,7,M,g);18}F w=H(){F b=7.G.P+g-N.U;8(b>0){A.Z().1c(N.U).1U();2r=$(A.Z().1c(N.U-(7.G.P-b)).4h().5W(A.Z().1c(0,b).4h()))}8(m){m.1K(H(){F a=$(1g);8(!a.1r(\'4f\'))a.3c()})}8(7.1u){F c=A.Z().1O(7.G.P+g-1);c.16(7.d[\'1E\'],c.1r(\'1R\'))}R.1f=[];8(R.1p)R.1p=23(R.4V,R.1G);F d=H(){1x(f.1I){W\'2B\':W\'2g\':A.16(\'1v\',\'\');18}R.1Q=23(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.21)f.21.3K($19,a);1Y.21=3L(1Y.21,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L(\'1H\',I))};1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':1},d]);2a(R.1p);18;W\'2h\':R.1p.1f.1q([A,{\'S\':\'+=0\'},d]);2a(R.1p);18;2w:d();18}};R.1f.1q([A,o,w]);C.1S=M;A.16(7.d[\'1t\'],-(n-l));1F=3i(1F);2a(R);4W(7.2n,A.1D(L(\'3v\',I)));A.X(L(\'2D\',I),[O,2e]);J M});A.14(L(\'6R\',I),H(e,f,g){e.1h();F h=A.Z();8(!7.1M){8(N.11==7.G.P){8(7.3l){A.X(L(\'17\',I),N.U-1)}J e.20()}}8(7.1u)1N(h,7);8(K g!=\'13\'){8(7.G.1v!=\'*\'){F i=(K f.G==\'13\')?f.G:4R(A,7);g=5Y(h,7,0,i)}Q{g=7.G.P}g=4b(g,7,f.G,$19)}F j=(N.11==0)?N.U:N.11;8(!7.1M){8(7.G.12.1d){F k=2P(h,7,g),i=4a(h,7,j-1)}Q{F k=7.G.P,i=7.G.P}8(g+k>j){g=j-i}}7.G.12.2m=7.G.P;8(7.G.12.1d){F k=4X(h,7,g,j);22(7.G.P-g>=k&&g<N.U){g++;k=4X(h,7,g,j)}7.G.P=2Q(k,7,7.G.12.2l,$19)}Q 8(7.G.1v!=\'*\'){F k=3A(h,7,g);7.G.P=2Q(k,7,7.G.12.2l,$19)}8(7.1u)1N(h,7,M);8(g==0){e.20();J 1e(I,\'0 G 41 1n: 28 2V.\')}1e(I,\'5S \'+g+\' G 5D.\');N.11-=g;22(N.11<0){N.11+=N.U}8(!7.1M){8(N.11==7.G.P&&f.4c)f.4c.1z($19);8(!7.3l)2X(7,N.11,I)}8(N.U<7.G.P+g){A.Z().1c(0,(7.G.P+g)-N.U).4d(M).3J(A)}F h=A.Z(),2r=4Y(h,7),1T=4Z(h,7,g),2c=h.1O(g-1),2d=2r.2Y(),2z=1T.2Y();8(7.1u)1N(h,7);8(7.1B){F p=43(1T,7),l=p[0],2s=p[1]}Q{F l=0,2s=0}8(f.1I==\'5V\'&&7.G.12.2m<g){F m=h.1c(7.G.12.2m,g),4e=7.G[7.d[\'S\']];m.1K(H(){F a=$(1g);a.1r(\'4f\',a.1W(\':2O\')).3b()});7.G[7.d[\'S\']]=\'1d\'}Q{F m=O}F n=3m(h.1c(0,g),7,\'S\'),2e=4g(2A(1T,7,M),7,!7.1u);8(m)7.G[7.d[\'S\']]=4e;8(7.1B){8(7.1i[7.d[1]]<0){7.1i[7.d[1]]=0}}8(7.1u){1N(h,7,M);1N(2d,7,7.1i[7.d[1]])}8(7.1B){7.1i[7.d[1]]=2s;7.1i[7.d[3]]=l}F o={},1w=f.1j;8(f.1I==\'47\')1w=0;Q 8(1w==\'T\')1w=7.1n.1j/7.1n.G*g;Q 8(1w<=0)1w=0;Q 8(1w<10)1w=n/1w;R=23(1w,f.1G);8(7[7.d[\'S\']]==\'1d\'||7[7.d[\'1l\']]==\'1d\'){R.1f.1q([$1A,2e])}8(7.1u){F q=2z.1r(\'1R\');8(2s>=0){q+=7.1i[7.d[1]]}2z.16(7.d[\'1E\'],q);8(2c.4S(2d).V){F r={};r[7.d[\'1E\']]=2d.1r(\'1R\');R.1f.1q([2d,r])}F s=2c.1r(\'1R\');8(l>=0){s+=7.1i[7.d[3]]}F t={};t[7.d[\'1E\']]=s;R.1f.1q([2c,t])}o[7.d[\'1t\']]=-n;8(l<0){o[7.d[\'1t\']]+=l}F u=[2r,1T,2e,1w];8(f.2f)f.2f.3K($19,u);1Y.2f=3L(1Y.2f,$19,u);1x(f.1I){W\'2B\':W\'2g\':W\'2C\':W\'2h\':R.1p=23(R.1j,R.1G);R.1Q=23(R.1j,R.1G);R.1j=0;18}1x(f.1I){W\'2g\':W\'2C\':W\'2h\':F v=A.4d().3J($1A);18}1x(f.1I){W\'2h\':v.Z().1c(7.G.12.2m).1U();18;W\'2g\':W\'2C\':v.Z().1c(0,g).1U();v.Z().1c(7.G.P).1U();18}1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':0}]);18;W\'2g\':v.16({\'2i\':0});R.1p.1f.1q([A,{\'S\':\'+=0\'},H(){v.1U()}]);R.1Q.1f.1q([v,{\'2i\':1}]);18;W\'2C\':R=4T(R,A,v,7,O);18;W\'2h\':R=4U(R,A,v,7,O,g);18}F w=H(){F b=7.G.P+g-N.U,5Z=(7.1u)?7.1i[7.d[3]]:0;A.16(7.d[\'1t\'],5Z);8(b>0){A.Z().1c(N.U).1U()}F c=A.Z().1c(0,g).3J(A).2Y();8(b>0){1T=3d(h,7)}8(m){m.1K(H(){F a=$(1g);8(!a.1r(\'4f\'))a.3c()})}8(7.1u){8(N.U<7.G.P+g){F d=A.Z().1O(7.G.P-1);d.16(7.d[\'1E\'],d.1r(\'1R\')+7.1i[7.d[3]])}c.16(7.d[\'1E\'],c.1r(\'1R\'))}R.1f=[];8(R.1p)R.1p=23(R.4V,R.1G);F e=H(){1x(f.1I){W\'2B\':W\'2g\':A.16(\'1v\',\'\');18}R.1Q=23(0,2b);C.1S=O;F a=[2r,1T,2e];8(f.21)f.21.3K($19,a);1Y.21=3L(1Y.21,$19,a);8(1V.V){A.X(L(1V[0][0],I),1V[0][1]);1V.5X()}8(!C.1X)A.X(L(\'1H\',I))};1x(f.1I){W\'2B\':R.1p.1f.1q([A,{\'2i\':1},e]);2a(R.1p);18;W\'2h\':R.1p.1f.1q([A,{\'S\':\'+=0\'},e]);2a(R.1p);18;2w:e();18}};R.1f.1q([A,o,w]);C.1S=M;1F=3i(1F);2a(R);4W(7.2n,A.1D(L(\'3v\',I)));A.X(L(\'2D\',I),[O,2e]);J M});A.14(L(\'2Z\',I),H(e,b,c,d,f,g,h){e.1h();F v=[b,c,d,f,g,h],t=[\'1k/13/1o\',\'13\',\'1s\',\'1o\',\'1k\',\'H\'],a=2U(v,t);F f=a[3],g=a[4],h=a[5];b=3n(a[0],a[1],a[2],N,A);8(b==0)J;8(K f!=\'1o\')f=O;8(C.1S){8(K f!=\'1o\'||f.1j>0)J O}8(g!=\'17\'&&g!=\'1a\'){8(7.1M){8(b<=N.U/2)g=\'1a\';Q g=\'17\'}Q{8(N.11==0||N.11>b)g=\'1a\';Q g=\'17\'}}8(g==\'17\')b=N.U-b;A.X(L(g,I),[f,b,h]);J M});A.14(L(\'6S\',I),H(e,a,b){e.1h();F c=A.1D(L(\'3M\',I));J A.1D(L(\'51\',I),[c-1,a,\'17\',b])});A.14(L(\'6T\',I),H(e,a,b){e.1h();F c=A.1D(L(\'3M\',I));J A.1D(L(\'51\',I),[c+1,a,\'1a\',b])});A.14(L(\'51\',I),H(e,a,b,c,d){e.1h();8(K a!=\'13\')a=A.1D(L(\'3M\',I));F f=7.1b.G||7.G.P,27=1L.2v(N.U/f)-1;8(a<0)a=27;8(a>27)a=0;J A.1D(L(\'2Z\',I),[a*f,0,M,b,c,d])});A.14(L(\'60\',I),H(e,s){e.1h();8(s)s=3n(s,0,M,N,A);Q s=0;s+=N.11;8(s!=0){22(s>N.U)s-=N.U;A.6U(A.Z().1c(s,N.U))}J M});A.14(L(\'29\',I),H(e,s){e.1h();8(s)s=4E(s);Q 8(7.29)s=7.29;Q J 1e(I,\'5s 6V 41 29.\');F n=A.1D(L(\'3v\',I)),x=M;1m(F j=0,l=s.V;j<l;j++){8(!s[j][0].1D(L(\'2Z\',I),[n,s[j][3],M])){x=O}}J x});A.14(L(\'3k\',I),H(e,a,b){e.1h();8(K a==\'H\'){a.1z($19,1V)}Q 8(31(a)){1V=a}Q 8(K a!=\'1y\'){1V.1q([a,b])}J 1V});A.14(L(\'6W\',I),H(e,b,c,d,f){e.1h();F v=[b,c,d,f],t=[\'1k/1o\',\'1k/13/1o\',\'1s\',\'13\'],a=2U(v,t);F b=a[0],c=a[1],d=a[2],f=a[3];8(K b==\'1o\'&&K b.3o==\'1y\')b=$(b);8(K b==\'1k\')b=$(b);8(K b!=\'1o\'||K b.3o==\'1y\'||b.V==0)J 1e(I,\'28 a 4w 1o.\');8(K c==\'1y\')c=\'4i\';8(7.1u){b.1K(H(){F m=2o($(1g).16(7.d[\'1E\']));8(2p(m))m=0;$(1g).1r(\'1R\',m)})}F g=c,3N=\'3N\';8(c==\'4i\'){8(d){8(N.11==0){c=N.U-1;3N=\'61\'}Q{c=N.11;N.11+=b.V}8(c<0)c=0}Q{c=N.U-1;3N=\'61\'}}Q{c=3n(c,f,d,N,A)}8(g!=\'4i\'&&!d){8(c<N.11)N.11+=b.V}8(N.11>=N.U)N.11-=N.U;F h=A.Z().1O(c);8(h.V){h[3N](b)}Q{A.62(b)}N.U=A.Z().V;F i=A.1D(\'52\');3O(7,N.U,I);2X(7,N.11,I);A.X(L(\'53\',I));A.X(L(\'2D\',I),[M,i]);J M});A.14(L(\'63\',I),H(e,c,d,f){e.1h();F v=[c,d,f],t=[\'1k/13/1o\',\'1s\',\'13\'],a=2U(v,t);c=a[0];d=a[1];f=a[2];F g=O;8(c 64 $&&c.V>1){h=$();c.1K(H(i,a){F b=A.X(L(\'63\',I),[$(1g),d,f]);8(b)h=h.6X(b)});J h}8(K c==\'1y\'||c==\'4i\'){h=A.Z().2Y()}Q{c=3n(c,f,d,N,A);F h=A.Z().1O(c);8(h.V){8(c<N.11)N.11-=h.V}}8(h&&h.V){h.6Y();N.U=A.Z().V;F j=A.1D(\'52\');3O(7,N.U,I);2X(7,N.11,I);A.X(L(\'2D\',I),[M,j])}J h});A.14(L(\'2f\',I)+\' \'+L(\'21\',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3I.V);8(31(a))1Y[b]=a;8(K a==\'H\')1Y[b].1q(a);J 1Y[b]});A.14(L(\'3v\',I),H(e,a){e.1h();8(N.11==0)F b=0;Q F b=N.U-N.11;8(K a==\'H\')a.1z($19,b);J b});A.14(L(\'3M\',I),H(e,a){e.1h();F b=7.1b.G||7.G.P;F c=1L.2v(N.U/b-1);8(N.11==0)F d=0;Q 8(N.11<N.U%b)F d=0;Q 8(N.11==b&&!7.1M)F d=c;Q F d=1L.6Z((N.U-N.11)/b);8(d<0)d=0;8(d>c)d=c;8(K a==\'H\')a.1z($19,d);J d});A.14(L(\'70\',I),H(e,a){e.1h();$i=3d(A.Z(),7);8(K a==\'H\')a.1z($19,$i);J $i});A.14(L(\'1c\',I),H(e,f,l,b){e.1h();8(N.U==0)J O;F v=[f,l,b],t=[\'13\',\'13\',\'H\'],a=2U(v,t);f=(K a[0]==\'13\')?a[0]:0;l=(K a[1]==\'13\')?a[1]:N.U;b=a[2];f+=N.11;l+=N.11;22(f>N.U){f-=N.U}22(l>N.U){l-=N.U}22(f<0){f+=N.U}22(l<0){l+=N.U}F c=A.Z();8(l>f){F d=c.1c(f,l)}Q{F d=$(c.1c(f,N.U).4h().5W(c.1c(0,l).4h()))}8(K b==\'H\')b.1z($19,d);J d});A.14(L(\'1X\',I)+\' \'+L(\'1Z\',I)+\' \'+L(\'1S\',I),H(e,a){e.1h();F b=e.4P.1c(I.3j.3I.V);8(K a==\'H\')a.1z($19,C[b]);J C[b]});A.14(L(\'5Q\',I),H(e,a,b,c){e.1h();F d=O;8(K a==\'H\'){a.1z($19,7)}Q 8(K a==\'1o\'){2u=$.25(M,{},2u,a);8(b!==O)d=M;Q 7=$.25(M,{},7,a)}Q 8(K a!=\'1y\'){8(K b==\'H\'){F f=4j(\'7.\'+a);8(K f==\'1y\')f=\'\';b.1z($19,f)}Q 8(K b!=\'1y\'){8(K c!==\'1s\')c=M;4j(\'2u.\'+a+\' = b\');8(c!==O)d=M;Q 4j(\'7.\'+a+\' = b\')}Q{J 4j(\'7.\'+a)}}8(d){1N(A.Z(),7);A.3V(2u);A.54();F g=3P(A,7,O);A.X(L(\'2D\',I),[M,g])}J 7});A.14(L(\'53\',I),H(e,a,b){e.1h();8(K a==\'1y\'||a.V==0)a=$(\'71\');Q 8(K a==\'1k\')a=$(a);8(K a!=\'1o\')J 1e(I,\'28 a 4w 1o.\');8(K b!=\'1k\'||b.V==0)b=\'a.65\';a.72(b).1K(H(){F h=1g.66||\'\';8(h.V>0&&A.Z().68($(h))!=-1){$(1g).24(\'55\').55(H(e){e.2j();A.X(L(\'2Z\',I),h)})}});J M});A.14(L(\'2D\',I),H(e,b,c){e.1h();8(!7.1b.1C)J;8(b){F d=7.1b.G||7.G.P,l=1L.2v(N.U/d);8(7.1b.3f){7.1b.1C.Z().1U();7.1b.1C.1K(H(){1m(F a=0;a<l;a++){F i=A.Z().1O(3n(a*d,0,M,N,A));$(1g).62(7.1b.3f(a+1,i))}})}7.1b.1C.1K(H(){$(1g).Z().24(7.1b.3p).1K(H(a){$(1g).14(7.1b.3p,H(e){e.2j();A.X(L(\'2Z\',I),[a*d,0,M,7.1b])})})})}7.1b.1C.1K(H(){$(1g).Z().2y(2q(\'69\',I)).1O(A.1D(L(\'3M\',I))).2R(2q(\'69\',I))});J M});A.14(L(\'52\',I),H(e){F a=A.Z(),3Q=7.G.P;8(7.G.12.1d)3Q=2P(a,7,0);Q 8(7.G.1v!=\'*\')3Q=3A(a,7,0);8(!7.1M&&N.11!=0&&3Q>N.11){8(7.G.12.1d){F b=4a(a,7,N.11)-N.11}Q 8(7.G.1v!=\'*\'){F b=6a(a,7,N.11)-N.11}Q{b=7.G.P-N.11}1e(I,\'73 74-1M: 75 \'+b+\' G 4G.\');A.X(\'17\',b)}7.G.P=2Q(3Q,7,7.G.12.2l,$19);J 3P(A,7)});A.14(L(\'5t\',I),H(e,a){e.1h();1F=3i(1F);A.1r(\'4r\',O);A.X(L(\'4O\',I));8(a){A.X(L(\'60\',I))}8(7.1u){1N(A.Z(),7)}A.16(A.1r(\'5G\'));A.4M();A.56();$1A.76(A);J M});A.14(\'34\',H(e,n,o){e.1h();J A.1D(L(n,I),o)})};A.4M=H(){A.24(L(\'\',I));A.24(L(\'\',I,O))};A.54=H(){A.56();3O(7,N.U,I);2X(7,N.11,I);8(7.T.2t){F c=3q(7.T.2t);$1A.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}8(7.T.Y){7.T.Y.14(L(7.T.3p,I,O),H(e){e.2j();F a=O,c=2b;8(C.1X){a=\'1H\'}Q 8(7.T.45){a=\'2S\';c=3q(7.T.45)}8(a){A.X(L(a,I),c)}})}8(7.17.Y){7.17.Y.14(L(7.17.3p,I,O),H(e){e.2j();A.X(L(\'17\',I))});8(7.17.2t){F c=3q(7.17.2t);7.17.Y.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}}8(7.1a.Y){7.1a.Y.14(L(7.1a.3p,I,O),H(e){e.2j();A.X(L(\'1a\',I))});8(7.1a.2t){F c=3q(7.1a.2t);7.1a.Y.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}}8($.1P.2E){8(7.17.2E){8(!C.57){C.57=M;$1A.2E(H(e,a){8(a>0){e.2j();F b=59(7.17.2E);A.X(L(\'17\',I),b)}})}}8(7.1a.2E){8(!C.5a){C.5a=M;$1A.2E(H(e,a){8(a<0){e.2j();F b=59(7.1a.2E);A.X(L(\'1a\',I),b)}})}}}8($.1P.3R){F d=(7.17.5b)?H(){A.X(L(\'17\',I))}:2b,3S=(7.1a.5b)?H(){A.X(L(\'1a\',I))}:2b;8(3S||3S){8(!C.3R){C.3R=M;F f={\'77\':30,\'78\':30,\'79\':M};1x(7.2k){W\'4u\':W\'6b\':f.7a=d;f.7b=3S;18;2w:f.7c=3S;f.7d=d}$1A.3R(f)}}}8(7.1b.1C){8(7.1b.2t){F c=3q(7.1b.2t);7.1b.1C.14(L(\'4k\',I,O),H(){A.X(L(\'2S\',I),c)}).14(L(\'4l\',I,O),H(){A.X(L(\'2W\',I))})}}8(7.17.2F||7.1a.2F){$(3T).14(L(\'6c\',I,O,M,M),H(e){F k=e.6d;8(k==7.1a.2F){e.2j();A.X(L(\'1a\',I))}8(k==7.17.2F){e.2j();A.X(L(\'17\',I))}})}8(7.1b.44){$(3T).14(L(\'6c\',I,O,M,M),H(e){F k=e.6d;8(k>=49&&k<58){k=(k-49)*7.G.P;8(k<=N.U){e.2j();A.X(L(\'2Z\',I),[k,0,M,7.1b])}}})}8(7.T.1H){A.X(L(\'1H\',I),7.T.4C)}8(C.4t){F g=$(3r),5c=g.S(),5d=g.1l();g.14(L(\'7e\',I,O,M,M),H(e){8(g.S()!=5c||g.1l()!=5d){A.X(L(\'4O\',I));8(7.T.4D&&!C.1X){A.X(L(\'1H\',I))}1N(A.Z(),7);A.3V(2u);F a=3P(A,7,O);A.X(L(\'2D\',I),[M,a]);5c=g.S();5d=g.1l()}})}};A.56=H(){F a=L(\'\',I),3s=L(\'\',I,O);5e=L(\'\',I,O,M,M);$(3T).24(5e);$(3r).24(5e);$1A.24(3s);8(7.T.Y)7.T.Y.24(3s);8(7.17.Y)7.17.Y.24(3s);8(7.1a.Y)7.1a.Y.24(3s);8(7.1b.1C){7.1b.1C.24(3s);8(7.1b.3f){7.1b.1C.Z().1U()}}3O(7,\'3b\',I);2X(7,\'2y\',I)};F C={\'2k\':\'1a\',\'1X\':M,\'1S\':O,\'1Z\':O,\'5a\':O,\'57\':O,\'3R\':O},N={\'U\':A.Z().V,\'11\':0},1F={\'7f\':2b,\'T\':2b,\'3k\':2b,\'2T\':2x(),\'3E\':0},R={\'1Z\':O,\'1j\':0,\'2T\':0,\'1G\':\'\',\'1f\':[]},1Y={\'2f\':[],\'21\':[]},1V=[],I=$.25(M,{},$.1P.1J.6e,z),7={},2u=y,$1A=A.7g(\'<\'+I.5f.4q+\' 7h="\'+I.5f.6f+\'" />\').3a();I.3U=A.3U;I.4m=$.1P.1J.4m++;A.3V(2u,M,B);A.5E();A.5H();A.54();8(31(7.G.2I)){F D=7.G.2I}Q{F D=[];8(7.G.2I!=0){D.1q(7.G.2I)}}8(7.2n){D.7i(6g(7.2n))}8(D.V>0){1m(F a=0,l=D.V;a<l;a++){F s=D[a];8(s==0){5g}8(s===M){s=3r.7j.66;8(s.V<1){5g}}Q 8(s===\'6h\'){s=1L.3x(1L.6h()*N.U)}8(A.1D(L(\'2Z\',I),[s,0,M,{1I:\'47\'}])){18}}}F E=3P(A,7,O),6i=3d(A.Z(),7);8(7.6j){7.6j.1z($19,6i,E)}A.X(L(\'2D\',I),[M,E]);A.X(L(\'53\',I));J A};$.1P.1J.4m=1;$.1P.1J.4s={\'29\':O,\'3l\':M,\'1M\':M,\'2J\':O,\'2k\':\'1t\',\'G\':{\'2I\':0},\'1n\':{\'1G\':\'7k\',\'1j\':5A,\'2t\':O,\'2E\':O,\'5b\':O,\'3p\':\'55\',\'3k\':O}};$.1P.1J.6e={\'1e\':O,\'3j\':{\'3I\':\'\',\'6k\':\'7l\'},\'5f\':{\'4q\':\'7m\',\'6f\':\'7n\'},\'5h\':{}};$.1P.1J.5B=H(a,b){J\'<a 7o="#"><6l>\'+a+\'</6l></a>\'};H 23(d,e){J{1f:[],1j:d,4V:d,1G:e,2T:2x()}}H 2a(s){8(K s.1p==\'1o\'){2a(s.1p)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];8(!b)5g;8(b[3])b[0].4N();b[0].6m(b[1],{6n:b[2],1j:s.1j,1G:s.1G})}8(K s.1Q==\'1o\'){2a(s.1Q)}}H 3D(s,c){8(K c!=\'1s\')c=M;8(K s.1p==\'1o\'){3D(s.1p,c)}1m(F a=0,l=s.1f.V;a<l;a++){F b=s.1f[a];b[0].4N(M);8(c){b[0].16(b[1]);8(K b[2]==\'H\')b[2]()}}8(K s.1Q==\'1o\'){3D(s.1Q,c)}}H 3i(t){8(t.T)7p(t.T);J t}H 3L(b,t,c){8(b.V){1m(F a=0,l=b.V;a<l;a++){b[a].3K(t,c)}}J[]}H 7q(a,c,x,d,f){F o={\'1j\':d,\'1G\':a.1G};8(K f==\'H\')o.6n=f;c.6m({2i:x},o)}H 4T(a,b,c,o,d){F e=2A(4Y(b.Z(),o),o,M)[0],5i=2A(c.Z(),o,M)[0],4n=(d)?-5i:e,2G={},3t={};2G[o.d[\'S\']]=5i;2G[o.d[\'1t\']]=4n;3t[o.d[\'1t\']]=0;a.1p.1f.1q([b,{\'2i\':1}]);a.1Q.1f.1q([c,3t,H(){$(1g).1U()}]);c.16(2G);J a}H 4U(a,b,c,o,d,n){F e=2A(4Z(b.Z(),o,n),o,M)[0],5j=2A(c.Z(),o,M)[0],4n=(d)?-5j:e,2G={},3t={};2G[o.d[\'S\']]=5j;2G[o.d[\'1t\']]=0;3t[o.d[\'1t\']]=4n;a.1Q.1f.1q([c,3t,H(){$(1g).1U()}]);c.16(2G);J a}H 3O(o,t,c){8(t==\'3c\'||t==\'3b\'){F f=t}Q 8(o.G.3e>=t){1e(c,\'28 5M G: 7r 7s (\'+t+\' G, \'+o.G.3e+\' 5N).\');F f=\'3b\'}Q{F f=\'3c\'}F s=(f==\'3c\')?\'2y\':\'2R\',h=2q(\'2O\',c);8(o.T.Y)o.T.Y[f]()[s](h);8(o.17.Y)o.17.Y[f]()[s](h);8(o.1a.Y)o.1a.Y[f]()[s](h);8(o.1b.1C)o.1b.1C[f]()[s](h)}H 2X(o,f,c){8(o.1M||o.3l)J;F a=(f==\'2y\'||f==\'2R\')?f:O,4o=2q(\'7t\',c);8(o.T.Y&&a){o.T.Y[a](4o)}8(o.17.Y){F b=a||(f==0)?\'2R\':\'2y\';o.17.Y[b](4o)}8(o.1a.Y){F b=a||(f==o.G.P)?\'2R\':\'2y\';o.1a.Y[b](4o)}}H 3W(a,b){8(K b==\'H\')b=b.1z(a);8(K b==\'1y\')b={};J b}H 3B(a,b,c){8(K c!=\'1k\')c=\'\';b=3W(a,b);8(K b==\'1k\'){F d=5k(b);8(d==-1)b=$(b);Q b=d}8(c==\'1b\'){8(K b==\'1s\')b={\'44\':b};8(K b.3o!=\'1y\')b={\'1C\':b};8(K b.1C==\'H\')b.1C=b.1C.1z(a);8(K b.1C==\'1k\')b.1C=$(b.1C);8(K b.G!=\'13\')b.G=O}Q 8(c==\'T\'){8(K b.3o!=\'1y\')b={\'Y\':b};8(K b==\'1s\')b={\'1H\':b};8(K b==\'13\')b={\'3g\':b};8(K b.Y==\'H\')b.Y=b.Y.1z(a);8(K b.Y==\'1k\')b.Y=$(b.Y)}Q{8(K b.3o!=\'1y\')b={\'Y\':b};8(K b==\'13\')b={\'2F\':b};8(K b.Y==\'H\')b.Y=b.Y.1z(a);8(K b.Y==\'1k\')b.Y=$(b.Y);8(K b.2F==\'1k\')b.2F=5k(b.2F)}J b}H 3n(a,b,c,d,e){8(K a==\'1k\'){8(2p(a))a=$(a);Q a=2o(a)}8(K a==\'1o\'){8(K a.3o==\'1y\')a=$(a);a=e.Z().68(a);8(a==-1)a=0;8(K c!=\'1s\')c=O}Q{8(K c!=\'1s\')c=M}8(2p(a))a=0;Q a=2o(a);8(2p(b))b=0;Q b=2o(b);8(c){a+=d.11}a+=b;8(d.U>0){22(a>=d.U){a-=d.U}22(a<0){a+=d.U}}J a}H 4a(i,o,s){F t=0,x=0;1m(F a=s;a>=0;a--){F j=i.1O(a);t+=(j.1W(\':P\'))?j[o.d[\'26\']](M):0;8(t>o.3z)J x;8(a==0)a=i.V;x++}}H 6a(i,o,s){J 5l(i,o.G.1v,o.G.12.42,s)}H 5R(i,o,s,m){J 5l(i,o.G.1v,m,s)}H 5l(i,f,m,s){F t=0,x=0;1m(F a=s,l=i.V;a>=0;a--){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==0)a=l}}H 4R(a,o){J o.G.12.42||a.Z().1c(0,o.G.P).1v(o.G.1v).V}H 2P(i,o,s){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){F j=i.1O(a);t+=(j.1W(\':P\'))?j[o.d[\'26\']](M):0;8(t>o.3z)J x;x++;8(x==l+1)J x;8(a==l)a=-1}}H 4X(i,o,s,l){F v=2P(i,o,s);8(!o.1M){8(s+v>l)v=l-s}J v}H 3A(i,o,s){J 5m(i,o.G.1v,o.G.12.42,s,o.1M)}H 5Y(i,o,s,m){J 5m(i,o.G.1v,m+1,s,o.1M)-1}H 5m(i,f,m,s,c){F t=0,x=0;1m(F a=s,l=i.V-1;a<=l;a++){x++;8(x==l)J x;F j=i.1O(a);8(j.1W(f)){t++;8(t==m)J x}8(a==l)a=-1}}H 3d(i,o){J i.1c(0,o.G.P)}H 5T(i,o,n){J i.1c(n,o.G.12.2m+n)}H 5U(i,o){J i.1c(0,o.G.P)}H 4Y(i,o){J i.1c(0,o.G.12.2m)}H 4Z(i,o,n){J i.1c(n,o.G.P+n)}H 1N(i,o,m){F x=(K m==\'1s\')?m:O;8(K m!=\'13\')m=0;i.1K(H(){F j=$(1g);F t=2o(j.16(o.d[\'1E\']));8(2p(t))t=0;j.1r(\'6o\',t);j.16(o.d[\'1E\'],((x)?j.1r(\'6o\'):m+j.1r(\'1R\')))})}H 3P(a,o,p){F b=a.3a(),$i=a.Z(),$v=3d($i,o),4p=4g(2A($v,o,M),o,p);b.16(4p);8(o.1u){F p=o.1i,r=p[o.d[1]];8(o.1B){8(r<0)r=0}F c=$v.2Y();c.16(o.d[\'1E\'],c.1r(\'1R\')+r);a.16(o.d[\'2L\'],p[o.d[0]]);a.16(o.d[\'1t\'],p[o.d[3]])}a.16(o.d[\'S\'],4p[o.d[\'S\']]+(3m($i,o,\'S\')*2));a.16(o.d[\'1l\'],5n($i,o,\'1l\'));J 4p}H 2A(i,o,a){F b=3m(i,o,\'S\',a),6p=5n(i,o,\'1l\',a);J[b,6p]}H 5n(i,o,a,b){8(K b!=\'1s\')b=O;8(K o[o.d[a]]==\'13\'&&b)J o[o.d[a]];8(K o.G[o.d[a]]==\'13\')J o.G[o.d[a]];F c=(a.5o().32(\'S\')>-1)?\'26\':\'2K\';J 3w(i,o,c)}H 3w(i,o,b){F s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F m=(j.1W(\':P\'))?j[o.d[b]](M):0;8(s<m)s=m}J s}H 36(b,o,c){8(!b.1W(\':P\'))J 0;F d=b[o.d[c]](),5p=(o.d[c].5o().32(\'S\')>-1)?[\'7u\',\'7v\']:[\'7w\',\'7x\'];1m(F a=0,l=5p.V;a<l;a++){F m=2o(b.16(5p[a]));d-=(2p(m))?0:m}J d}H 3m(i,o,b,c){8(K c!=\'1s\')c=O;8(K o[o.d[b]]==\'13\'&&c)J o[o.d[b]];8(K o.G[o.d[b]]==\'13\')J o.G[o.d[b]]*i.V;F d=(b.5o().32(\'S\')>-1)?\'26\':\'2K\',s=0;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);s+=(j.1W(\':P\'))?j[o.d[d]](M):0}J s}H 4v(i,o,b){F s=O,v=O;1m(F a=0,l=i.V;a<l;a++){F j=i.1O(a);F c=(j.1W(\':P\'))?j[o.d[b]](M):0;8(s===O)s=c;Q 8(s!=c)v=M;8(s==0)v=M}J v}H 5y(i,o,d){J i[o.d[\'7y\'+d]](M)-36(i,o,\'7z\'+d)}H 3Y(x){J(K x==\'1k\'&&x.1c(-1)==\'%\')}H 3Z(s,o){8(3Y(o)){o=o.1c(0,-1);8(2p(o))J s;s*=o/3G}J s}H L(n,c,a,b,d){8(K a!=\'1s\')a=M;8(K b!=\'1s\')b=M;8(K d!=\'1s\')d=O;8(a)n=c.3j.3I+n;8(b)n=n+\'.\'+c.3j.6k;8(b&&d)n+=c.4m;J n}H 2q(n,c){J(K c.5h[n]==\'1k\')?c.5h[n]:n}H 4g(a,o,p){8(K p!=\'1s\')p=M;F b=(o.1u&&p)?o.1i:[0,0,0,0];F c={};c[o.d[\'S\']]=a[0]+b[1]+b[3];c[o.d[\'1l\']]=a[1]+b[0]+b[2];J c}H 2U(c,d){F e=[];1m(F a=0,6q=c.V;a<6q;a++){1m(F b=0,6r=d.V;b<6r;b++){8(d[b].32(K c[a])>-1&&K e[b]==\'1y\'){e[b]=c[a];18}}}J e}H 5z(p){8(K p==\'1y\')J[0,0,0,0];8(K p==\'13\')J[p,p,p,p];Q 8(K p==\'1k\')p=p.3u(\'7A\').6s(\'\').3u(\'7B\').6s(\'\').3u(\' \');8(!31(p)){J[0,0,0,0]}1m(F i=0;i<4;i++){p[i]=2o(p[i])}1x(p.V){W 0:J[0,0,0,0];W 1:J[p[0],p[0],p[0],p[0]];W 2:J[p[0],p[1],p[0],p[1]];W 3:J[p[0],p[1],p[2],p[1]];2w:J[p[0],p[1],p[2],p[3]]}}H 43(a,o){F x=(K o[o.d[\'S\']]==\'13\')?1L.2v(o[o.d[\'S\']]-3m(a,o,\'S\')):0;1x(o.1B){W\'1t\':J[0,x];W\'2M\':J[x,0];W\'4x\':2w:J[1L.2v(x/2),1L.3x(x/2)]}}H 4b(x,o,a,b){F v=x;8(K a==\'H\'){v=a.1z(b,v)}Q 8(K a==\'1k\'){F p=a.3u(\'+\'),m=a.3u(\'-\');8(m.V>p.V){F c=M,5q=m[0],2H=m[1]}Q{F c=O,5q=p[0],2H=p[1]}1x(5q){W\'7C\':v=(x%2==1)?x-1:x;18;W\'7D\':v=(x%2==0)?x-1:x;18;2w:v=x;18}2H=2o(2H);8(!2p(2H)){8(c)2H=-2H;v+=2H}}8(K v!=\'13\')v=1;8(v<1)v=1;J v}H 2Q(x,o,a,b){J 4y(4b(x,o,a,b),o.G.12)}H 4y(v,i){8(K i.2N==\'13\'&&v<i.2N)v=i.2N;8(K i.27==\'13\'&&v>i.27)v=i.27;8(v<1)v=1;J v}H 4E(s){8(!31(s))s=[[s]];8(!31(s[0]))s=[s];1m(F j=0,l=s.V;j<l;j++){8(K s[j][0]==\'1k\')s[j][0]=$(s[j][0]);8(K s[j][1]!=\'1s\')s[j][1]=M;8(K s[j][2]!=\'1s\')s[j][2]=M;8(K s[j][3]!=\'13\')s[j][3]=0}J s}H 5k(k){8(k==\'2M\')J 39;8(k==\'1t\')J 37;8(k==\'4u\')J 38;8(k==\'6b\')J 40;J-1}H 4W(n,v){8(n)3T.2n=n+\'=\'+v+\'; 7E=/\'}H 6g(n){n+=\'=\';F b=3T.2n.3u(\';\');1m(F a=0,l=b.V;a<l;a++){F c=b[a];22(c.7F(0)==\' \'){c=c.1c(1)}8(c.32(n)==0){J c.1c(n.V)}}J 0}H 3q(p){8(p&&K p==\'1k\'){F i=(p.32(\'7G\')>-1)?M:O,r=(p.32(\'2W\')>-1)?M:O}Q{F i=r=O}J[i,r]}H 59(a){J(K a==\'13\')?a:2b}H 31(a){J K(a)==\'1o\'&&(a 64 7H)}H 2x(){J 7I 7J().2x()}H 1e(d,m){8(K d==\'1o\'){F s=\' (\'+d.3U+\')\';d=d.1e}Q{F s=\'\'}8(!d)J O;8(K m==\'1k\')m=\'1J\'+s+\': \'+m;Q m=[\'1J\'+s+\':\',m];8(3r.5r&&3r.5r.6t)3r.5r.6t(m);J O}$.1P.65=H(o,c){J 1g.1J(o,c)};$.25($.1G,{\'7K\':H(t){F a=t*t;J t*(-a*t+4*a-6*t+4)},\'7L\':H(t){J t*(4*t*t-9*t+6)},\'7M\':H(t){F a=t*t;J t*(33*a*a-7N*a*t+7O*a-67*t+15)}})})(7P);',62,486,'|||||||opts|if|||||||||||||||||||||||||||||||||var|items|function|conf|return|typeof|cf_e|true|itms|false|visible|else|scrl|width|auto|total|length|case|trigger|button|children||first|visibleConf|number|bind||css|prev|break|tt0|next|pagination|slice|variable|debug|anims|this|stopPropagation|padding|duration|string|height|for|scroll|object|pre|push|data|boolean|left|usePadding|filter|a_dur|switch|undefined|call|wrp|align|container|triggerHandler|marginRight|tmrs|easing|play|fx|carouFredSel|each|Math|circular|sz_resetMargin|eq|fn|post|cfs_origCssMargin|isScrolling|c_new|remove|queu|is|isPaused|clbk|isStopped|stopImmediatePropagation|onAfter|while|sc_setScroll|unbind|extend|outerWidth|max|Not|synchronise|sc_startScroll|null|l_cur|l_old|w_siz|onBefore|crossfade|uncover|opacity|preventDefault|direction|adjust|old|cookie|parseInt|isNaN|cf_c|c_old|pR|pauseOnHover|opts_orig|ceil|default|getTime|removeClass|l_new|ms_getSizes|fade|cover|updatePageStatus|mousewheel|key|css_o|adj|start|responsive|outerHeight|top|right|min|hidden|gn_getVisibleItemsNext|cf_getItemsAdjust|addClass|pause|startTime|cf_sortParams|scrolling|resume|nv_enableNavi|last|slideTo||is_array|indexOf||_cfs_triggerEvent|innerWidth|ms_getTrueInnerSize||||parent|hide|show|gi_getCurrentItems|minimum|anchorBuilder|pauseDuration|Carousel|sc_clearTimers|events|queue|infinite|ms_getTotalSize|gn_getItemIndex|jquery|event|bt_pauseOnHoverConfig|window|ns2|ani_o|split|currentPosition|ms_getTrueLargestSize|floor|of|maxDimention|gn_getVisibleItemsNextFilter|go_getNaviObject|position|sc_stopScroll|timePassed|perc|100|dur2|prefix|appendTo|apply|sc_callCallbacks|currentPage|before|nv_showNavi|sz_setSizes|vI|touchwipe|wN|document|selector|_cfs_init|go_getObject|marginBottom|ms_isPercentage|ms_getPercentage||to|org|cf_getAlignPadding|keys|pauseOnEvent|Number|none|stopped||gn_getVisibleItemsPrev|cf_getAdjust|onEnd|clone|orgW|isHidden|cf_mapWrapperSizes|get|end|eval|mouseenter|mouseleave|serialNumber|cur_l|di|sz|element|cfs_isCarousel|defaults|upDateOnWindowResize|up|ms_hasVariableSizes|valid|center|cf_getItemAdjustMinMax|seco|nw|bottom|delay|pauseOnResize|cf_getSynchArr|scrolled|backward|textAlign|float|marginTop|marginLeft|absolute|_cfs_unbind_events|stop|finish|type|conditions|gn_getVisibleOrg|not|fx_cover|fx_uncover|orgDuration|cf_setCookie|gn_getVisibleItemsNextTestCircular|gi_getOldItemsNext|gi_getNewItemsNext||slideToPage|updateSizes|linkAnchors|_cfs_bind_buttons|click|_cfs_unbind_buttons|mousewheelPrev||bt_mousesheelNumber|mousewheelNext|wipe|_windowWidth|_windowHeight|ns3|wrapper|continue|classnames|new_w|old_w|cf_getKeyCode|gn_getItemsPrevFilter|gn_getItemsNextFilter|ms_getLargestSize|toLowerCase|arr|sta|console|No|destroy|innerHeight|dx|Set|secp|ms_getPaddingBorderMargin|cf_getPadding|500|pageAnchorBuilder|Item|forward|_cfs_build|fixed|cfs_origCss|_cfs_bind_events|paused|onPausePause|onPauseEnd|onPauseStart|enough|needed|page|slide_|configuration|gn_getScrollItemsPrevFilter|Scrolling|gi_getOldItemsPrev|gi_getNewItemsPrev|directscroll|concat|shift|gn_getScrollItemsNextFilter|new_m|jumpToStart|after|append|removeItem|instanceof|caroufredsel|hash||index|selected|gn_getVisibleItemsPrevFilter|down|keyup|keyCode|configs|classname|cf_readCookie|random|itm|onCreate|namespace|span|animate|complete|cfs_tempCssMargin|s2|l1|l2|join|log|found|the|Infinity|Width|caroufredsel_cookie_|attr|id|2500|Available|widths|heights|automatically|relative|overflow|setTimeout|or|Page|resumed|currently|Callback|returned|slide_prev|prependTo|slide_next|prevPage|nextPage|prepend|carousel|insertItem|add|detach|round|currentVisible|body|find|Preventing|non|sliding|replaceWith|min_move_x|min_move_y|preventDefaultEvents|wipeUp|wipeDown|wipeLeft|wipeRight|resize|timer|wrap|class|unshift|location|swing|cfs|div|caroufredsel_wrapper|href|clearTimeout|fx_fade|hiding|navigation|disabled|paddingLeft|paddingRight|paddingTop|paddingBottom|outer|inner|px|em|even|odd|path|charAt|immediate|Array|new|Date|quadratic|cubic|elastic|106|126|jQuery'.split('|'),0,{}))









window.Swipe=function(e,t){if(!e)return null;var n=this;this.options=t||{},this.index=this.options.startSlide||0,this.speed=this.options.speed||300,this.callback=this.options.callback||function(){},this.delay=this.options.auto||0,this.container=e,this.element=this.container.children[0],this.container.style.overflow="hidden",this.element.style.listStyle="none",this.setup(),this.begin(),this.element.addEventListener&&(this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("touchmove",this,!1),this.element.addEventListener("touchend",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("msTransitionEnd",this,!1),this.element.addEventListener("oTransitionEnd",this,!1),this.element.addEventListener("transitionend",this,!1),window.addEventListener("resize",this,!1))},Swipe.prototype={setup:function(){this.slides=this.element.children,this.length=this.slides.length;if(this.length<2)return null;this.width="getBoundingClientRect"in this.container?this.container.getBoundingClientRect().width:this.container.offsetWidth;if(!this.width)return null;this.container.style.visibility="hidden",this.element.style.width=this.slides.length*this.width+"px";var e=this.slides.length;while(e--){var t=this.slides[e];t.style.width=this.width+"px",t.style.display="table-cell",t.style.verticalAlign="top"}this.slide(this.index,0),this.container.style.visibility="visible"},slide:function(e,t){var n=this.element.style;t==undefined&&(t=this.speed),n.webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.MozTransform=n.webkitTransform="translate3d("+ -(e*this.width)+"px,0,0)",n.msTransform=n.OTransform="translateX("+ -(e*this.width)+"px)",this.index=e},getPos:function(){return this.index},prev:function(e){this.delay=e||0,clearTimeout(this.interval),this.index&&this.slide(this.index-1,this.speed)},next:function(e){this.delay=e||0,clearTimeout(this.interval),this.index<this.length-1?this.slide(this.index+1,this.speed):this.slide(0,this.speed)},begin:function(){var e=this;this.interval=this.delay?setTimeout(function(){e.next(e.delay)},this.delay):0},stop:function(){this.delay=0,clearTimeout(this.interval)},resume:function(){this.delay=this.options.auto||0,this.begin()},handleEvent:function(e){switch(e.type){case"touchstart":this.onTouchStart(e);break;case"touchmove":this.onTouchMove(e);break;case"touchend":this.onTouchEnd(e);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(e);break;case"resize":this.setup()}},transitionEnd:function(e){this.delay&&this.begin(),this.callback(e,this.index,this.slides[this.index])},onTouchStart:function(e){this.start={pageX:e.touches[0].pageX,pageY:e.touches[0].pageY,time:Number(new Date)},this.isScrolling=undefined,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0},onTouchMove:function(e){if(e.touches.length>1||e.scale&&e.scale!==1)return;this.deltaX=e.touches[0].pageX-this.start.pageX,typeof this.isScrolling=="undefined"&&(this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(e.touches[0].pageY-this.start.pageY))),this.isScrolling||(e.preventDefault(),clearTimeout(this.interval),this.deltaX=this.deltaX/(!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0?Math.abs(this.deltaX)/this.width+1:1),this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)")},onTouchEnd:function(e){var t=Number(new Date)-this.start.time<250&&Math.abs(this.deltaX)>20||Math.abs(this.deltaX)>this.width/2,n=!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0;this.isScrolling||this.slide(this.index+(t&&!n?this.deltaX<0?1:-1:0),this.speed)}}










function PxLoader(settings) {

    // merge settings with defaults
    settings = settings || {};

    // how frequently we poll resources for progress
    if (settings.statusInterval == null) {
        settings.statusInterval = 5000; // every 5 seconds by default
    }

    // delay before logging since last progress change
    if (settings.loggingDelay == null) {
        settings.loggingDelay = 20 * 1000; // log stragglers after 20 secs
    }

    // stop waiting if no progress has been made in the moving time window
    if (settings.noProgressTimeout == null) {
        settings.noProgressTimeout = Infinity; // do not stop waiting by default
    }

    var entries = [],
        // holds resources to be loaded with their status
        progressListeners = [],
        timeStarted, progressChanged = +new Date;

    /**
     * The status of a resource
     * @enum {number}
     */
    var ResourceState = {
        QUEUED: 0,
        WAITING: 1,
        LOADED: 2,
        ERROR: 3,
        TIMEOUT: 4
    };

    // places non-array values into an array.
    var ensureArray = function(val) {
        if (val == null) {
            return [];
        }

        if (Array.isArray(val)) {
            return val;
        }

        return [val];
    };

    // add an entry to the list of resources to be loaded
    this.add = function(resource) {

        // ensure tags are in an object
        resource.tags = new PxLoaderTags(resource.tags);

        // ensure priority is set
        if (resource.priority == null) {
            resource.priority = Infinity;
        }

        entries.push({
            resource: resource,
            status: ResourceState.QUEUED
        });
    };

    this.addProgressListener = function(callback, tags) {
        progressListeners.push({
            callback: callback,
            tags: new PxLoaderTags(tags)
        });
    };

    this.addCompletionListener = function(callback, tags) {
        progressListeners.push({
            tags: new PxLoaderTags(tags),
            callback: function(e) {
                if (e.completedCount === e.totalCount) {
                    callback();
                }
            }
        });
    };

    // creates a comparison function for resources
    var getResourceSort = function(orderedTags) {

        // helper to get the top tag's order for a resource
        orderedTags = ensureArray(orderedTags);
        var getTagOrder = function(entry) {
            var resource = entry.resource,
                bestIndex = Infinity;
            for (var i = 0; i < resource.tags.length; i++) {
                for (var j = 0; j < Math.min(orderedTags.length, bestIndex); j++) {
                    if (resource.tags[i] == orderedTags[j] && j < bestIndex) {
                        bestIndex = j;
                        if (bestIndex === 0) break;
                    }
                    if (bestIndex === 0) break;
                }
            }
            return bestIndex;
        };
        return function(a, b) {
            // check tag order first
            var aOrder = getTagOrder(a),
                bOrder = getTagOrder(b);
            if (aOrder < bOrder) return -1;
            if (aOrder > bOrder) return 1;

            // now check priority
            if (a.priority < b.priority) return -1;
            if (a.priority > b.priority) return 1;
            return 0;
        }
    };

    this.start = function(orderedTags) {
        timeStarted = +new Date;

        // first order the resources
        var compareResources = getResourceSort(orderedTags);
        entries.sort(compareResources);

        // trigger requests for each resource
        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i];
            entry.status = ResourceState.WAITING;
            entry.resource.start(this);
        }

        // do an initial status check soon since items may be loaded from the cache
        setTimeout(statusCheck, 100);
    };

    var statusCheck = function() {
        var checkAgain = false,
            noProgressTime = (+new Date) - progressChanged,
            timedOut = (noProgressTime >= settings.noProgressTimeout),
            shouldLog = (noProgressTime >= settings.loggingDelay);

        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i];
            if (entry.status !== ResourceState.WAITING) {
                continue;
            }

            // see if the resource has loaded
            if (entry.resource.checkStatus) {
                entry.resource.checkStatus();
            }

            // if still waiting, mark as timed out or make sure we check again
            if (entry.status === ResourceState.WAITING) {
                if (timedOut) {
                    entry.resource.onTimeout();
                } else {
                    checkAgain = true;
                }
            }
        }

        // log any resources that are still pending
        if (shouldLog && checkAgain) {
            log();
        }

        if (checkAgain) {
            setTimeout(statusCheck, settings.statusInterval);
        }
    };

    this.isBusy = function() {
        for (var i = 0, len = entries.length; i < len; i++) {
            if (entries[i].status === ResourceState.QUEUED || entries[i].status === ResourceState.WAITING) {
                return true;
            }
        }
        return false;
    };

    var onProgress = function(resource, statusType) {
        // find the entry for the resource
        var entry = null;
        for (var i = 0, len = entries.length; i < len; i++) {
            if (entries[i].resource === resource) {
                entry = entries[i];
                break;
            }
        }

        // we have already updated the status of the resource
        if (entry == null || entry.status !== ResourceState.WAITING) {
            return;
        }
        entry.status = statusType;
        progressChanged = +new Date;

        var numResourceTags = resource.tags.length;

        // fire callbacks for interested listeners
        for (var i = 0, numListeners = progressListeners.length; i < numListeners; i++) {
            var listener = progressListeners[i],
                shouldCall;

            if (listener.tags.length === 0) {
                // no tags specified so always tell the listener
                shouldCall = true;
            } else {
                // listener only wants to hear about certain tags
                shouldCall = resource.tags.contains(listener.tags);
            }

            if (shouldCall) {
                sendProgress(entry, listener);
            }
        }
    };

    this.onLoad = function(resource) {
        onProgress(resource, ResourceState.LOADED);
    };
    this.onError = function(resource) {
        onProgress(resource, ResourceState.ERROR);
    };
    this.onTimeout = function(resource) {
        onProgress(resource, ResourceState.TIMEOUT);
    };

    // sends a progress report to a listener
    var sendProgress = function(updatedEntry, listener) {
        // find stats for all the resources the caller is interested in
        var completed = 0,
            total = 0;
        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i],
                includeResource = false;

            if (listener.tags.length === 0) {
                // no tags specified so always tell the listener
                includeResource = true;
            } else {
                includeResource = entry.resource.tags.contains(listener.tags);
            }

            if (includeResource) {
                total++;
                if (entry.status === ResourceState.LOADED || entry.status === ResourceState.ERROR || entry.status === ResourceState.TIMEOUT) {
                    completed++;
                }
            }
        }

        listener.callback({
            // info about the resource that changed
            resource: updatedEntry.resource,

            // should we expose StatusType instead?
            loaded: (updatedEntry.status === ResourceState.LOADED),
            error: (updatedEntry.status === ResourceState.ERROR),
            timeout: (updatedEntry.status === ResourceState.TIMEOUT),

            // updated stats for all resources
            completedCount: completed,
            totalCount: total
        });
    };

    // prints the status of each resource to the console
    var log = this.log = function(showAll) {
        if (!window.console) {
            return;
        }

        var elapsedSeconds = Math.round((+new Date - timeStarted) / 1000);
        window.console.log('PxLoader elapsed: ' + elapsedSeconds + ' sec');

        for (var i = 0, len = entries.length; i < len; i++) {
            var entry = entries[i];
            if (!showAll && entry.status !== ResourceState.WAITING) {
                continue;
            }

            var message = 'PxLoader: #' + i + ' ' + entry.resource.getName();
            switch(entry.status) {
                case ResourceState.QUEUED:
                    message += ' (Not Started)';
                    break;
                case ResourceState.WAITING:
                    message += ' (Waiting)';
                    break;
                case ResourceState.LOADED:
                    message += ' (Loaded)';
                    break;
                case ResourceState.ERROR:
                    message += ' (Error)';
                    break;
                case ResourceState.TIMEOUT:
                    message += ' (Timeout)';
                    break;
            }

            if (entry.resource.tags.length > 0) {
                message += ' Tags: [' + entry.resource.tags.join(',') + ']';
            }

            window.console.log(message);
        }
    };
}

// Tag object to handle tag intersection; once created not meant to be changed
// Performance rationale: http://jsperf.com/lists-indexof-vs-in-operator/3

function PxLoaderTags(values) {

    this.array = [];
    this.object = {};
    this.value = null; // single value
    this.length = 0;

    if (values !== null && values !== undefined) {
        if (Array.isArray(values)) {
            this.array = values;
        } else if (typeof values === 'object') {
            for (var key in values) {
                this.array.push(key);
            }
        } else {
            this.array.push(values);
            this.value = values;
        }

        this.length = this.array.length;

        // convert array values to object with truthy values, used by contains function below
        for (var i = 0; i < this.length; i++) {
            this.object[this.array[i]] = true;
        }
    }

    // compare this object with another; return true if they share at least one value
    this.contains = function(other) {
        if (this.length === 0 || other.length === 0) {
            return false;
        } else if (this.length === 1 && this.value !== null) {
            if (other.length === 1) {
                return this.value === other.value;
            } else {
                return other.object.hasOwnProperty(this.value);
            }
        } else if (other.length < this.length) {
            return other.contains(this); // better to loop through the smaller object
        } else {
            for (var key in this.object) {
                if (other.object[key]) {
                    return true;
                }
            }
            return false;
        }
    }
}

// shims to ensure we have newer Array utility methods
// https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
if (!Array.isArray) {
    Array.isArray = function(arg) {
        return Object.prototype.toString.call(arg) == '[object Array]';
    };
}

// @depends PxLoader.js
/**
 * PxLoader plugin to load images
 */

function PxLoaderImage(url, tags, priority) {
    var self = this,
        loader = null;

    this.img = new Image();
    this.tags = tags;
    this.priority = priority;

    var onReadyStateChange = function() {
        if (self.img.readyState == 'complete') {
            removeEventHandlers();
            loader.onLoad(self);
        }
    };

    var onLoad = function() {
        removeEventHandlers();
        loader.onLoad(self);
    };

    var onError = function() {
        removeEventHandlers();
        loader.onError(self);
    };

    var removeEventHandlers = function() {
        self.unbind('load', onLoad);
        self.unbind('readystatechange', onReadyStateChange);
        self.unbind('error', onError);
    };

    this.start = function(pxLoader) {
        // we need the loader ref so we can notify upon completion
        loader = pxLoader;

        // NOTE: Must add event listeners before the src is set. We
        // also need to use the readystatechange because sometimes
        // load doesn't fire when an image is in the cache.
        self.bind('load', onLoad);
        self.bind('readystatechange', onReadyStateChange);
        self.bind('error', onError);

        self.img.src = url;
    };

    // called by PxLoader to check status of image (fallback in case
    // the event listeners are not triggered).
    this.checkStatus = function() {
        if (self.img.complete) {
            removeEventHandlers();
            loader.onLoad(self);
        }
    };

    // called by PxLoader when it is no longer waiting
    this.onTimeout = function() {
        removeEventHandlers();
        if (self.img.complete) {
            loader.onLoad(self);
        } else {
            loader.onTimeout(self);
        }
    };

    // returns a name for the resource that can be used in logging
    this.getName = function() {
        return url;
    };

    // cross-browser event binding
    this.bind = function(eventName, eventHandler) {
        if (self.img.addEventListener) {
            self.img.addEventListener(eventName, eventHandler, false);
        } else if (self.img.attachEvent) {
            self.img.attachEvent('on' + eventName, eventHandler);
        }
    };

    // cross-browser event un-binding
    this.unbind = function(eventName, eventHandler) {
        if (self.img.removeEventListener) {
            self.img.removeEventListener(eventName, eventHandler, false);
        } else if (self.img.detachEvent) {
            self.img.detachEvent('on' + eventName, eventHandler);
        }
    };

}

// add a convenience method to PxLoader for adding an image
PxLoader.prototype.addImage = function(url, tags, priority) {
    var imageLoader = new PxLoaderImage(url, tags, priority);
    this.add(imageLoader);

    // return the img element to the caller
    return imageLoader.img;
};