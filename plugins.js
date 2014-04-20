/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.7.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function l(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function m(){var a=s.elements;return typeof a=="string"?a.split(" "):a}function n(a){var b=j[a[h]];return b||(b={},i++,a[h]=i,j[i]=b),b}function o(a,c,d){c||(c=b);if(k)return c.createElement(a);d||(d=n(c));var g;return d.cache[a]?g=d.cache[a].cloneNode():f.test(a)?g=(d.cache[a]=d.createElem(a)).cloneNode():g=d.createElem(a),g.canHaveChildren&&!e.test(a)&&!g.tagUrn?d.frag.appendChild(g):g}function p(a,c){a||(a=b);if(k)return a.createDocumentFragment();c=c||n(a);var d=c.frag.cloneNode(),e=0,f=m(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function q(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?o(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function r(a){a||(a=b);var c=n(a);return s.shivCSS&&!g&&!c.hasCSS&&(c.hasCSS=!!l(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||q(a,c),a}var c="3.7.0",d=a.html5||{},e=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g,h="_html5shiv",i=0,j={},k;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",g="hidden"in a,k=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){g=!0,k=!0}})();var s={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:d.shivCSS!==!1,supportsUnknownElements:k,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:r,createElement:o,createDocumentFragment:p};a.html5=s,r(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*
 * jQuery Anystretch
 * Version 1.2 (@jbrooksuk / me.itslimetime.com)
 * https://github.com/jbrooksuk/jquery-anystretch
 * Based on Dan Millar's Port
 * https://github.com/danmillar/jquery-anystretch
 *
 * Add a dynamically-resized background image to the body
 * of a page or any other block level element within it
 *
 * Copyright (c) 2012 Dan Millar (@danmillar / decode.uk.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * This is a fork of jQuery Backstretch (v1.2)
 * Copyright (c) 2011 Scott Robbin (srobbin.com)
 *
 * https://github.com/danmillar/jquery-anystretch
 *
*/
(function(a){a.fn.anystretch=function(d,c,e){var b=this.selector.length?false:true;return this.each(function(q){var s={positionX:"center",positionY:"center",speed:0,elPosition:"relative",dataName:"stretch"},h=a(this),g=b?a(".anystretch"):h.children(".anystretch"),l=g.data("settings")||s,m=g.data("settings"),j,f,r,p,v,u;if(c&&typeof c=="object"){a.extend(l,c)}if(c&&typeof c=="function"){e=c}a(document).ready(t);return this;function t(){if(d||h.length>=1){var i;if(!b){h.css({position:l.elPosition,background:"none"})}if(g.length==0){g=a("<div />").attr("class","anystretch").css({left:0,top:0,position:(b?"fixed":"absolute"),overflow:"hidden",zIndex:(b?-999999:-999998),margin:0,padding:0,height:"100%",width:"100%"})}else{g.find("img").addClass("deleteable")}i=a("<img />").css({position:"absolute",display:"none",margin:0,padding:0,border:"none",zIndex:-999999}).bind("load",function(A){var z=a(this),y,x;z.css({width:"auto",height:"auto"});y=this.width||a(A.target).width();x=this.height||a(A.target).height();j=y/x;o(function(){z.fadeIn(l.speed,function(){g.find(".deleteable").remove();if(typeof e=="function"){e()}})})}).appendTo(g);if(h.children(".anystretch").length==0){if(b){a("body").append(g)}else{h.append(g)}}g.data("settings",l);var w="";if(d){w=d}else{if(h.data(l.dataName)){w=h.data(l.dataName)}else{return}}i.attr("src",w);a(window).resize(o)}}function o(i){try{u={left:0,top:0};r=k();p=r/j;if(p>=n()){v=(p-n())/2;if(l.positionY=="center"||l.centeredY){a.extend(u,{top:"-"+v+"px"})}else{if(l.positionY=="bottom"){a.extend(u,{top:"auto",bottom:"0px"})}}}else{p=n();r=p*j;v=(r-k())/2;if(l.positionX=="center"||l.centeredX){a.extend(u,{left:"-"+v+"px"})}else{if(l.positionX=="right"){a.extend(u,{left:"auto",right:"0px"})}}}g.children("img:not(.deleteable)").width(r).height(p).filter("img").css(u)}catch(w){}if(typeof i=="function"){i()}}function k(){return b?h.width():h.innerWidth()}function n(){return b?h.height():h.innerHeight()}})};a.anystretch=function(d,b,e){var c=("onorientationchange" in window)?a(document):a(window);c.anystretch(d,b,e)}})(jQuery);


/*
* Input Placeholder 1.1 - jQuery Plugin
*
* Copyright 2010, Graham Blache, Dan Dofter
* Dual licensed under the MIT or GPL Version 2 licenses.
*/
(function($){

  $.fn.inputPlaceholder = function() {
    return this.each(function(){
      $(this).find('input[data-placeholder], textarea[data-placeholder]').each(function(){
        var $input = $(this);

        var $container = $('<div><span>' + $input.attr('data-placeholder') + '</span></div>');
        $container.css('position','relative');

        var $span = $container.find('span');

        $span.css({
          'position': 'absolute',
          'left': $input.css('padding-left'),
          'top': $input.css('padding-top'),
          'font-size': $input.css('font-size'),
          'font-weight': $input.css('font-weight'),
          'font-style': $input.css('font-style'),
          'font-size-adjust': $input.css('font-size-adjust'),
          'font-family': $input.css('font-family'),
          'user-select': 'none',
          '-moz-user-select': 'none',
          '-webkit-user-select': 'none'
        });

        if ($input.val().length > 0) {
          $container.find('span').hide();
        }

        $input.after($container);
        $input.appendTo($container);

        $span.addClass('placeholder');

        $span.click(function(){
          $input.focus();
        });

        var input_value = $input.val();
        setInterval(function(){
          if ($input.val() != input_value) {
            if ($input.val().length == 0) {
              $(this).val('');
              $container.find('span').show();
            } else {
              $container.find('span').hide();
            }
            input_value = $input.val();
          }
        }, 50);
      });
    });
  };

})(jQuery);


/*
 * based off of Louis-Rmi Bab rotate plugin (https://github.com/lrbabe/jquery.rotate.js)
 *
 * cssTransforms: jQuery cssHooks adding a cross browser, animatible transforms
 *
 * QTransform
 *
 * Author Bobby Schultz
 */
 //
(function($) {

    var div = document.createElement('div'),
      divStyle = div.style;

    //give props to those who dont have them
    $.cssProps.transform =
        divStyle.MozTransform === '' ? 'MozTransform' :
        (divStyle.msTransform === '' ? 'msTransform' :
        (divStyle.WebkitTransform === '' ? 'WebkitTransform' :
        (divStyle.OTransform === '' ? 'OTransform' :
        (divStyle.Transform === '' ? 'Transform' :
        false))));
    $.cssProps.transformOrigin =
        divStyle.MozTransformOrigin === '' ? 'MozTransformOrigin' :
        (divStyle.msTransformOrigin === '' ? 'msTransformOrigin' :
        (divStyle.WebkitTransformOrigin === '' ? 'WebkitTransformOrigin' :
        (divStyle.OTransformOrigin === '' ? 'OTransformOrigin' :
        (divStyle.TransformOrigin === '' ? 'TransformOrigin' :
        false))));

    //define supported or not
    $.support.transform = $.cssProps.transform !== false || divStyle.filter === '' ? true : false;
    $.support.transformOrigin = $.cssProps.transformOrigin !== false ? true : false;

    //if ONLY IE matrixes are supported (IE9 beta6 will use css3)
    $.support.matrixFilter = (divStyle.filter === '' && $.cssProps.transform === false) ?
        true : false;
    div = null;

    //stop if no form of transforms are supported
    if($.support.transform === false)
        return;

    //opt out of letting jquery handle the units for custom setters/getters
    $.cssNumber.skew =
    $.cssNumber.skewX =
    $.cssNumber.skewY =
    $.cssNumber.scale =
    $.cssNumber.scaleX =
    $.cssNumber.scaleY =
    $.cssNumber.rotate =
    $.cssNumber.matrix = true;

    $.cssNumber.transformOrigin =
    $.cssNumber.transformOriginX =
    $.cssNumber.transformOriginY = true;


    if($.support.matrixFilter) {
        $.cssNumber.transformOrigin =
        $.cssNumber.transformOriginX =
        $.cssNumber.transformOriginY = true;

        $.cssProps.transformOrigin = 'matrixFilter';
    }

    $.cssHooks.transform = {
        set: function(elem, val, unit) {
            if($.support.matrixFilter) {
                elem.style.filter = [val].join('');
            } else {
                elem.style[$.cssProps.transform] = val+'%';
            }
        },
        get: function(elem, computed) {
            if($.support.matrixFilter) {
                return elem.style.filter;
            } else {
                return elem.style[$.cssProps.transform];
            }
        }
    };

    $.cssHooks.transformOrigin = {
        set: function(elem, val, unit) {
            if(!$.support.matrixFilter) {
                val = (typeof val === 'string') ? val : val+(unit || '%');
                elem.style[$.cssProps.transformOrigin] = val;
            } else {
                val = val.split(",");
                $.cssHooks.transformOriginX.set( elem, val[0] );
                if(val.length > 1) {
                    $.cssHooks.transformOriginY.set( elem, val[1] );
                }
            }
        },
        get: function(elem, computed) {
            if(!$.support.matrixFilter) {
                return elem.style[$.cssProps.transformOrigin];
            } else {
                var originX = $.data( elem, 'transformOriginX' );
                var originY = $.data( elem, 'transformOriginY' );
                return originX && originY && originX === originY ? originX : '50%';
            }
        }
    };

    $.fx.step.transformOrigin = function( fx ) {
        $.cssHooks.transformOrigin.set( fx.elem, fx.now, fx.unit);
     };

    $.cssHooks.transformOriginX = {
        set: function(elem, val, unit) {
            if(!$.support.matrixFilter) {
                val = (typeof val === 'string') ? val : val+(unit || '%');
                elem.style[$.cssProps.transformOrigin+'X'] = val;
            } else {
                $.data( elem, 'transformOriginX', unit ? val+unit : val );
                setIEMatrix(elem);
            }
        },
        get: function(elem, computed) {
            if(!$.support.matrixFilter) {
                return elem.style[$.cssProps.transformOrigin+'X'];
            } else {
                var originX = $.data( elem, 'transformOriginX' );
                switch(originX) {
                    case 'left': return '0%';
                    case 'center': return '50%';
                    case 'right': return '100%';
                }
                return originX ? originX : '50%';
            }
        }
    };

    $.fx.step.transformOriginX = function( fx ) {
        $.cssHooks.transformOriginX.set( fx.elem, fx.now, fx.unit);
     };

    $.cssHooks.transformOriginY = {
        set: function(elem, val, unit) {
            if(!$.support.matrixFilter) {
                val = (typeof val === 'string') ? val : val+(unit || '%');
                elem.style[$.cssProps.transformOrigin+'Y'] = val;
            } else {
                $.data( elem, 'transformOriginY', unit ? val+unit : val );
                setIEMatrix(elem);
            }
        },
        get: function(elem, computed) {
            if(!$.support.matrixFilter) {
                return elem.style[$.cssProps.transformOrigin+'Y'];
            } else {
                var originY = $.data( elem, 'transformOriginY' );
                switch(originY) {
                    case 'top': return '0%';
                    case 'center': return '50%';
                    case 'bottom': return '100%';
                }
                return originY ? originY : '50%';
            }
        }
    };

    $.fx.step.transformOriginY = function( fx ) {
        $.cssHooks.transformOriginY.set( fx.elem, fx.now, fx.unit);
     };

    //create hooks for css transforms
    var rtn = function(v){return v;};
    var xy = [['X','Y'],'X','Y'];
    var abcdxy = [['A','B','C','D','X','Y'],'A','B','C','D','X','Y']
    var props = [
        {prop: 'rotate',
            matrix: [function(v){ return Math.cos(v); },
                function(v){ return -Math.sin(v); },
                function(v){ return Math.sin(v); },
                function(v){ return Math.cos(v); } ],
            unit: 'rad',
            subProps: [''],
            fnc: toRadian},
        {prop: 'scale',
            matrix: [[rtn,0,0,rtn],
                [rtn,0,0,1],
                [1,0,0,rtn]],
            unit: '',
            subProps: xy,
            fnc: parseFloat,
            _default:1},
        {prop: 'skew',
            matrix: [[1,rtn,rtn,1],
                [1,rtn,0,1],
                [1,0,rtn,1]],
            unit: 'rad',
            subProps: xy,
            fnc: toRadian},
        {prop: 'translate',
            matrix: [[1,0,0,1,rtn,rtn],
                [1,0,0,1,rtn,0],
                [1,0,0,1,0,rtn]],
            standardUnit: 'px',
            subProps: xy,
            fnc: parseFloat},
        {prop: 'matrix',
            matrix: [[rtn,rtn,rtn,rtn,rtn,rtn],
                [rtn,0,0,1,0,0],
                [1,rtn,0,1,0,0],
                [1,0,rtn,1,0,0],
                [1,0,0,rtn,0,0],
                [1,0,0,1,0,rtn]],
            subProps: abcdxy,
            fnc: parseFloat}
        ];

        jQuery.each(props, function(n,prop){
        jQuery.each(prop.subProps, function(num, sub){
            var _cssProp, _prop = prop;

            if( $.isArray(sub) ) {
                //composite transform
                _cssProp = _prop.prop;
                var _sub = sub;
                $.cssHooks[_cssProp] = {
                    set: function( elem, val, unit ) {
                        jQuery.each(_sub, function(num, x){
                            $.cssHooks[_cssProp+x].set(elem, val, unit);
                        });
                    },
                    get: function( elem, computed ) {
                        var val = [];
                        jQuery.each(_sub, function(num, x){
                            val.push( $.cssHooks[_cssProp+x].get(elem, val) );
                        });
                        //hack until jQuery supports animating multiple properties
                        return val[0] || val[1];
                    }
                }
            } else {
                //independent transfrom
                _cssProp = _prop.prop+sub;
                $.cssHooks[_cssProp] = {
                    set: function( elem, val, unit ) {
                        $.data( elem, _cssProp, unit ? val+unit : val);

                        setCSSTransform( elem, _prop.fnc(unit ? val+unit : val), _cssProp,
                         _prop.unit || unit || _prop.standardUnit);
                    },
                    get: function( elem, computed ) {

                        var p = $.data( elem, _cssProp );
                        //console.log(_cssProp+'get:'+p);
                        return p && p !== undefined ? p : _prop._default || 0;
                    }
                };
            }

            $.fx.step[_cssProp] = function( fx ) {
                fx.unit = fx.unit === 'px' && $.cssNumber[_cssProp] ? _prop.standardUnit : fx.unit;
                var unit = ($.cssNumber[_cssProp] ? '' : fx.unit);
                $.cssHooks[_cssProp].set( fx.elem, fx.now, fx.unit);
             };
        })
    });

    function setCSSTransform( elem, val, prop, unit ){
        if($.support.matrixFilter) {
            return setIEMatrix(elem, val);
        }

        //parse css string
        var allProps = parseCSSTransform(elem);

        //check for value to be set
        var a = /[X|Y]/.exec(prop);
        a = (a === null ? '' : a[0] ? a[0] : a);
        prop = /.*[^XY]/.exec(prop)[0];
        unit = unit === undefined ? '' : unit;

        //create return string
        var result = '';
        var wasUpdated = false;
        var arr;
        if(allProps !== null) {
            for(var item in allProps) {
                arr = allProps[item];
                if(prop === item) {
                    //update parsed data with new value
                    if(prop !== 'matrix') {
                        result += prop+'(';
                        result += a === 'X' || a === '' ? val+unit :
                            (arr[0] !== '' ? arr[0] : $.cssHooks[prop+'X'].get(elem)+unit);
                        result += a === 'Y' ? ', '+val+unit :
                            (arr[1] !== '' ? ', '+arr[1] :
                            (prop+'Y' in $.cssHooks ?
                                ', '+$.cssHooks[prop+'Y'].get(elem)+unit : ''));
                        result += ') ';
                    } else {
                        result += val+' ';
                    }
                    wasUpdated = true;
                } else {
                    //dump parsed data to string
                    result += item + '(';
                    for(var i=0; i<arr.length; i++) {
                        result += arr[i];
                        if(i < arr.length-1 && arr[i+1] !== '')
                            result += ', '
                        else
                            break;
                    }
                    result += ') ';
                }
            }
        }

        //if prop was not found to be updated, then dump data
        if(!wasUpdated)
            result += prop+a+'('+val+unit+ ') ';

        //set all transform properties
        elem.style[$.cssProps.transform] = result;
    }


    function parseCSSTransform( elem ) {
        var props, prop, name, transform;
        //break up into single transform calls
        $(elem.style[$.cssProps.transform].replace(/(?:\,\s|\)|\()/g,"|").split(" "))
        //read each data point for the transform call
        .each(function(i, item){
            if(item !== '') {
                if(props === undefined) props = {}
                prop = item.split("|");
                name = prop.shift();
                transform = /.*[^XY]/.exec(name)[0];
                if(!props[transform]) props[transform] = ['','','','','',''];
                if(!/Y/.test(name)) props[transform][0] = prop[0];
                if(!/X/.test(name)) props[transform][1] = prop[1];
                if(prop.length == 6) {
                    props[transform][2] = prop[2];
                    props[transform][3] = prop[3];
                    props[transform][4] = prop[4];
                    props[transform][5] = prop[5];
                }
            }
        });

        return props !== undefined ? props : null ;
    }

    function ieOrigin(o, n, percent) {
        return percent * (o - n);
    }

    function toRadian(value) {
        if(typeof value === 'number') {
            return parseFloat(value);
        }
        if(value.indexOf("deg") != -1) {
            return parseInt(value,10) * (Math.PI * 2 / 360);
        } else if (value.indexOf("grad") != -1) {
            return parseInt(value,10) * (Math.PI/200);
        }
    }

    $.rotate = {
      radToDeg: function radToDeg( rad ) {
          return rad * 180 / Math.PI;
      }
    };

    //special case for IE matrix
    function setIEMatrix( elem, mat ) {
        var inverse, current, ang, org, originX, originY,
        runTransform = $.cssProps.transformOrigin === 'matrixFilter' ? true : false;

        current = [$.cssHooks.scaleX.get(elem),
                    toRadian($.cssHooks.skewY.get(elem)),
                    toRadian($.cssHooks.skewX.get(elem)),
                    $.cssHooks.scaleY.get(elem),
                    $.cssHooks.translateX.get(elem),
                    $.cssHooks.translateY.get(elem)];

        //start by multiply inverse of transform origin by matrix
        if(runTransform) {
            elem.style.filter = [
                "progid:DXImageTransform.Microsoft.Matrix"
                +"(M11=1,M12=0,M21=0,M22=1,SizingMethod='auto expand')"
            ].join('');
            var Wp = $.cssHooks.transformOriginX.get(elem);
            var Hp = $.cssHooks.transformOriginY.get(elem);
            Wp = Wp.indexOf('%') > 0 ?
                (/[\d]*/.exec(Wp) / 100) : Wp;
            Hp = Hp.indexOf('%') > 0 ?
                (/[\d]*/.exec(Hp) / 100) : Hp;

            var Wb = elem.offsetWidth;
            var Hb = elem.offsetHeight;
        }

        //multiply old matrix to new matrix
        if( typeof mat !== 'array' || mat.length !== 6 ) {
            mat = current;
        } else {
            mat = [ ( (current[0]*mat[0]) + (current[1]*mat[2]) ),
                    ( (current[0]*mat[1]) + (current[1]*mat[3]) ),
                    ( (current[2]*mat[0]) + (current[3]*mat[2]) ),
                    ( (current[2]*mat[1]) + (current[3]*mat[3]) ),
                    mat[4],
                    mat[5]
                    ];
        }

        //multiply the transform and rotation matrixes
        ang = $.data(elem, 'rotate');
        if(ang) {
            ang = toRadian(ang);
            var cos = Math.cos(ang);
            var sin = Math.sin(ang);

            ang = [cos, -sin, sin, cos];
            mat = [ ( (mat[0]*ang[0]) + (mat[1]*ang[2]) ),
                    ( (mat[0]*ang[1]) + (mat[1]*ang[3]) ),
                    ( (mat[2]*ang[0]) + (mat[3]*ang[2]) ),
                    ( (mat[2]*ang[1]) + (mat[3]*ang[3]) ),
                    mat[4],
                    mat[5]
                    ];
        }

        //apply the matrix as a IE filter
        elem.style.filter = [
            "progid:DXImageTransform.Microsoft.Matrix(",
            "M11="+mat[0]+", ",
            "M12="+mat[1]+", ",
            "M21="+mat[2]+", ",
            "M22="+mat[3]+", ",
            "SizingMethod='auto expand'",
            ")"
            ].join('');

        if (runTransform) {
            var Wo = elem.offsetWidth;
            var Ho = elem.offsetHeight;
            elem.style.position = 'relative';
            elem.style.left = Wp * (Wb - Wo) + (parseInt(mat[4]) || 0);
            elem.style.top  = Hp * (Hb - Ho) + (parseInt(mat[5]) || 0);
        }
            //$('#console').append('<div> trans:'+Wp+":"+Wb+":"+Wo+":"+mat[4]+":"+elem.style.left+'</div>');


    }

})(jQuery);

/*!
 * jquery.customSelect() - v0.4.1
 * http://adam.co/lab/jquery/customselect/
 * 2013-05-13
 *
 * Copyright 2013 Adam Coulombe
 * @license http://www.opensource.org/licenses/mit-license.html MIT License
 * @license http://www.gnu.org/licenses/gpl.html GPL2 License
 */

(function ($) {
    'use strict';

    $.fn.extend({
        customSelect: function (options) {
            // filter out <= IE6
            if (typeof document.body.style.maxHeight === 'undefined') {
                return this;
            }
            var defaults = {
                    customClass: 'customSelect',
                    mapClass:    true,
                    mapStyle:    true
            },
            options = $.extend(defaults, options),
            prefix = options.customClass,
            changed = function ($select,customSelectSpan) {
                var currentSelected = $select.find(':selected'),
                customSelectSpanInner = customSelectSpan.children(':first'),
                html = currentSelected.html() || '&nbsp;';

                customSelectSpanInner.html(html);

                if (currentSelected.attr('disabled')) {
                  customSelectSpan.addClass(getClass('DisabledOption'));
                } else {
                  customSelectSpan.removeClass(getClass('DisabledOption'));
                }

                setTimeout(function () {
                    customSelectSpan.removeClass(getClass('Open'));
                    $(document).off('mouseup.'+getClass('Open'));
                }, 60);
            },
            getClass = function(suffix){
                return prefix + suffix;
            };

            return this.each(function () {

              var $select = $(this);
              if($select.hasClass('hasCustomSelect')) {
                console.log('already has');
                return;
              }

                    var customSelectInnerSpan = $('<span />').addClass(getClass('Inner')),
                    customSelectSpan = $('<span />');

                $select.after(customSelectSpan.append(customSelectInnerSpan));

                customSelectSpan.addClass(prefix);

                if (options.mapClass) {
                    customSelectSpan.addClass($select.attr('class'));
                }
                if (options.mapStyle) {
                    customSelectSpan.attr('style', $select.attr('style'));
                }

                $select
                    .addClass('hasCustomSelect')
                    .on('update', function () {
            changed($select,customSelectSpan);

                        var selectBoxWidth = parseInt($select.outerWidth(), 10) -
                                (parseInt(customSelectSpan.outerWidth(), 10) -
                                    parseInt(customSelectSpan.width(), 10));

            // Set to inline-block before calculating outerHeight
            customSelectSpan.css({
                            display: 'inline-block'
                        });

                        var selectBoxHeight = customSelectSpan.outerHeight();

                        if ($select.attr('disabled')) {
                            customSelectSpan.addClass(getClass('Disabled'));
                        } else {
                            customSelectSpan.removeClass(getClass('Disabled'));
                        }

                        customSelectInnerSpan.css({
                            // XXX Fix to the width for padding to work correctly
                            width:   '100%',
                            display: 'inline-block'
                        });

                        $select.css({
                            '-webkit-appearance': 'menulist-button',
                            width:                customSelectSpan.outerWidth(),
                            position:             'absolute',
                            opacity:              0,
                            height:               selectBoxHeight,
                            fontSize:             customSelectSpan.css('font-size')
                        });
                    })
                    .on('change', function () {
                        customSelectSpan.addClass(getClass('Changed'));
                        changed($select,customSelectSpan);
                    })
                    .on('keyup', function (e) {
                        if(!customSelectSpan.hasClass(getClass('Open'))){
                            $select.blur();
                            $select.focus();
                        }else{
                            if(e.which==13||e.which==27){
                                changed($select,customSelectSpan);
                            }
                        }
                    })
                    .on('mousedown', function (e) {
                        customSelectSpan.removeClass(getClass('Changed'));
                    })
                    .on('mouseup', function (e) {

                        if( !customSelectSpan.hasClass(getClass('Open'))){
                            // if FF and there are other selects open, just apply focus
                            if($('.'+getClass('Open')).not(customSelectSpan).length>0 && typeof InstallTrigger !== 'undefined'){
                                $select.focus();
                            }else{
                                customSelectSpan.addClass(getClass('Open'));
                                e.stopPropagation();
                                $(document).one('mouseup.'+getClass('Open'), function (e) {
                                    if( e.target != $select.get(0) && $.inArray(e.target,$select.find('*').get()) < 0 ){
                                        $select.blur();
                                    }else{
                                        changed($select,customSelectSpan);
                                    }
                                });
                            }
                        }
                    })
                    .focus(function () {
                        customSelectSpan.removeClass(getClass('Changed')).addClass(getClass('Focus'));
                    })
                    .blur(function () {
                        customSelectSpan.removeClass(getClass('Focus')+' '+getClass('Open'));
                    })
                    .hover(function () {
                        customSelectSpan.addClass(getClass('Hover'));
                    }, function () {
                        customSelectSpan.removeClass(getClass('Hover'));
                    })
                    .trigger('update');
            });
        }
    });
})(jQuery);

//This [jQuery](http://jquery.com/) plugin implements an `<iframe>`
//[transport](http://api.jquery.com/extending-ajax/#Transports) so that
//`$.ajax()` calls support the uploading of files using standard HTML file
//input fields. This is done by switching the exchange from `XMLHttpRequest`
//to a hidden `iframe` element containing a form that is submitted.

//The [source for the plugin](http://github.com/cmlenz/jquery-iframe-transport)
//is available on [Github](http://github.com/) and dual licensed under the MIT
//or GPL Version 2 licenses.

//## Usage

//To use this plugin, you simply add an `iframe` option with the value `true`
//to the Ajax settings an `$.ajax()` call, and specify the file fields to
//include in the submssion using the `files` option, which can be a selector,
//jQuery object, or a list of DOM elements containing one or more
//`<input type="file">` elements:

//  $("#myform").submit(function() {
//      $.ajax(this.action, {
//          files: $(":file", this),
//          iframe: true
//      }).complete(function(data) {
//          console.log(data);
//      });
//  });

//The plugin will construct hidden `<iframe>` and `<form>` elements, add the
//file field(s) to that form, submit the form, and process the response.

//If you want to include other form fields in the form submission, include
//them in the `data` option, and set the `processData` option to `false`:

//  $("#myform").submit(function() {
//      $.ajax(this.action, {
//          data: $(":text", this).serializeArray(),
//          files: $(":file", this),
//          iframe: true,
//          processData: false
//      }).complete(function(data) {
//          console.log(data);
//      });
//  });

//### Response Data Types

//As the transport does not have access to the HTTP headers of the server
//response, it is not as simple to make use of the automatic content type
//detection provided by jQuery as with regular XHR. If you can't set the
//expected response data type (for example because it may vary depending on
//the outcome of processing by the server), you will need to employ a
//workaround on the server side: Send back an HTML document containing just a
//`<textarea>` element with a `data-type` attribute that specifies the MIME
//type, and put the actual payload in the textarea:

//  <textarea data-type="application/json">
//    {"ok": true, "message": "Thanks so much"}
//  </textarea>

//The iframe transport plugin will detect this and pass the value of the
//`data-type` attribute on to jQuery as if it was the "Content-Type" response
//header, thereby enabling the same kind of conversions that jQuery applies
//to regular responses. For the example above you should get a Javascript
//object as the `data` parameter of the `complete` callback, with the
//properties `ok: true` and `message: "Thanks so much"`.

//### Handling Server Errors

//Another problem with using an `iframe` for file uploads is that it is
//impossible for the javascript code to determine the HTTP status code of the
//servers response. Effectively, all of the calls you make will look like they
//are getting successful responses, and thus invoke the `done()` or
//`complete()` callbacks. You can only determine communicate problems using
//the content of the response payload. For example, consider using a JSON
//response such as the following to indicate a problem with an uploaded file:

//  <textarea data-type="application/json">
//    {"ok": false, "message": "Please only upload reasonably sized files."}
//  </textarea>

//### Compatibility

//This plugin has primarily been tested on Safari 5 (or later), Firefox 4 (or
//later), and Internet Explorer (all the way back to version 6). While I
//haven't found any issues with it so far, I'm fairly sure it still doesn't
//work around all the quirks in all different browsers. But the code is still
//pretty simple overall, so you should be able to fix it and contribute a
//patch :)

//## Annotated Source

(function($, undefined) {
"use strict";

// Register a prefilter that checks whether the `iframe` option is set, and
// switches to the "iframe" data type if it is `true`.
$.ajaxPrefilter(function(options, origOptions, jqXHR) {
 if (options.iframe) {
   options.originalURL = options.url;
   return "iframe";
 }
});

// Register a transport for the "iframe" data type. It will only activate
// when the "files" option has been set to a non-empty list of enabled file
// inputs.
$.ajaxTransport("iframe", function(options, origOptions, jqXHR) {
 var form = null,
     iframe = null,
     name = "iframe-" + $.now(),
     files = $(options.files).filter(":file:enabled"),
     markers = null,
     accepts = null;

 // This function gets called after a successful submission or an abortion
 // and should revert all changes made to the page to enable the
 // submission via this transport.
 function cleanUp() {
   markers.prop("disabled", false);
   form.remove();
   iframe.one("load", function() { iframe.remove(); });
   iframe.attr("src", "javascript:false;");
 }

 // Remove "iframe" from the data types list so that further processing is
 // based on the content type returned by the server, without attempting an
 // (unsupported) conversion from "iframe" to the actual type.
 options.dataTypes.shift();

 // Use the data from the original AJAX options, as it doesn't seem to be
 // copied over since jQuery 1.7.
 // See https://github.com/cmlenz/jquery-iframe-transport/issues/6
 options.data = origOptions.data;

 if (files.length) {
   form = $("<form enctype='multipart/form-data' method='post'></form>").
     hide().attr({action: options.originalURL, target: name});

   // If there is any additional data specified via the `data` option,
   // we add it as hidden fields to the form. This (currently) requires
   // the `processData` option to be set to false so that the data doesn't
   // get serialized to a string.
   if (typeof(options.data) === "string" && options.data.length > 0) {
     $.error("data must not be serialized");
   }
   $.each(options.data || {}, function(name, value) {
     if ($.isPlainObject(value)) {
       name = value.name;
       value = value.value;
     }
     $("<input type='hidden' />").attr({name:  name, value: value}).
       appendTo(form);
   });

   // Add a hidden `X-Requested-With` field with the value `IFrame` to the
   // field, to help server-side code to determine that the upload happened
   // through this transport.
   $("<input type='hidden' value='IFrame' name='X-Requested-With' />").
     appendTo(form);

   // Borrowed straight from the JQuery source.
   // Provides a way of specifying the accepted data type similar to the
   // HTTP "Accept" header
   if (options.dataTypes[0] && options.accepts[options.dataTypes[0]]) {
     accepts = options.accepts[options.dataTypes[0]] +
               (options.dataTypes[0] !== "*" ? ", */*; q=0.01" : "");
   } else {
     accepts = options.accepts["*"];
   }
   $("<input type='hidden' name='X-HTTP-Accept'>").
     attr("value", accepts).appendTo(form);

   // Move the file fields into the hidden form, but first remember their
   // original locations in the document by replacing them with disabled
   // clones. This should also avoid introducing unwanted changes to the
   // page layout during submission.
   markers = files.after(function(idx) {
     return $(this).clone().prop("disabled", true);
   }).next();
   files.appendTo(form);

   return {

     // The `send` function is called by jQuery when the request should be
     // sent.
     send: function(headers, completeCallback) {
       iframe = $("<iframe src='javascript:false;' name='" + name +
         "' id='" + name + "' style='display:none'></iframe>");

       // The first load event gets fired after the iframe has been injected
       // into the DOM, and is used to prepare the actual submission.
       iframe.one("load", function() {

         // The second load event gets fired when the response to the form
         // submission is received. The implementation detects whether the
         // actual payload is embedded in a `<textarea>` element, and
         // prepares the required conversions to be made in that case.
         iframe.one("load", function() {
           var doc = this.contentWindow ? this.contentWindow.document :
             (this.contentDocument ? this.contentDocument : this.document),
             root = doc.documentElement ? doc.documentElement : doc.body,
             textarea = root.getElementsByTagName("textarea")[0],
             type = textarea && textarea.getAttribute("data-type") || null,
             status = textarea && textarea.getAttribute("data-status") || 200,
             statusText = textarea && textarea.getAttribute("data-statusText") || "OK",
             content = {
               html: root.innerHTML,
               text: type ?
                 textarea.value :
                 root ? (root.textContent || root.innerText) : null
             };
           cleanUp();
           completeCallback(status, statusText, content, type ?
             ("Content-Type: " + type) :
             null);
         });

         // Now that the load handler has been set up, submit the form.
         form[0].submit();
       });

       // After everything has been set up correctly, the form and iframe
       // get injected into the DOM so that the submission can be
       // initiated.
       $("body").append(form, iframe);
     },

     // The `abort` function is called by jQuery when the request should be
     // aborted.
     abort: function() {
       if (iframe !== null) {
         iframe.unbind("load").attr("src", "javascript:false;");
         cleanUp();
       }
     }

   };
 }
});

})(jQuery);

/*
BoxFit v1.1 - jQuery Plugin
(c) 2012 Michi Kono (michikono.com)
License: http://www.opensource.org/licenses/mit-license.php
To use: $('#target-div').boxFit()
Will make the *text* content inside the div (or whatever tag) scale to fit that tag
*/

(function($) {
   return $.fn.boxfit = function(options) {
       var current_step, inner_span, next_font_size, original_height, original_text, original_width, settings, span;
       if (this.length === 0) {
           return $(this);
       }
       settings = {
           step_size: 1,
           step_limit: 200,
           align_middle: true,
           align_center: true,
           multiline: false,
           minimum_font_size: 20,
           maximum_font_size: null
       };
       $.extend(settings, options);
       if (!settings.multiline) {
           $(this).css('white-space', 'nowrap');
       }
       original_text = $(this).html();
       $(this).html("");
       if (settings.width) {
           original_width = settings.width;
           $(this).width(original_width + "px");
       } else {
           original_width = $(this).width();
       }
       if (settings.height) {
           original_height = settings.height;
           $(this).height(original_height + "px");
       } else {

           // XXX Remove the height so it can use the height defined in the CSS to size the text
           /*
           $(this).attr('style', function(i, style) {
             return style.replace(/height[^;]+;?/g, '');
           });
           */

           $(this).css('height', '');

           // XXX Remove the boxfitted each time to refresh the entire process
           $(this).find('span.boxfitted').remove();

           // XXX Reset the styles as they are causing us not to be able to get the height of the element in IE
           $(this).css('display', 'none');

           original_height = $(this).height();

       }
       if (settings.maxFontSize !== undefined) {
           settings.maxFont = true;
       }

       if (!original_width || !original_height) {
           if (window.console != null) {
               console.info("Set static height/width on target DIV before using boxfit! Detected width: '" + original_width + "'; height:' " + original_height + "'");
           }
           return $(this).html(original_text);
       } else {
           if ($("<div>" + original_text + "</div>").find("span.boxfitted").length === 0) {
               span = $($("<span></span>").addClass("boxfitted").html(original_text));
               $(this).html(span);
           } else {
               $(this).html(original_text);

               // XXX Fixed bug where was not getting the boxfitted
               span = $(this).find('span.boxfitted');
               //span = $($(original_text).find('span.boxfitted')[0]);
           }
           current_step = 0;
           inner_span = span;

           $(this).css("display", "table");
           inner_span.css("display", "table-cell");
           if (settings.align_middle) {
               inner_span.css("vertical-align", "middle");
           }
           if (settings.align_center) {
               $(this).css("text-align", "center");
               inner_span.css("text-align", "center");
           }
           inner_span.css("font-size", settings.minimum_font_size);

           while ($(this).width() <= original_width && $(this).height() <= original_height) {

               if (current_step++ > settings.step_limit) {
                   break;
               }

               // XXX Use parse float in case the page has a zoom level set, then the font sizes will be fractional
               next_font_size = parseFloat(inner_span.css("font-size"));
               if (settings.maximum_font_size && next_font_size > settings.maximum_font_size) {
                   break;
               }

               inner_span.css("font-size", next_font_size + settings.step_size);

           }

           inner_span.css("font-size", parseInt(inner_span.css("font-size"), 10) - settings.step_size);

           // XXX Set the height specifically so any padding above and below is removed
           var inner_span_children = inner_span.children();
           var inner_span_height = 0;
           for(var i=0;i<inner_span_children.length;i++) {
             inner_span_height += $(inner_span_children[i]).height();
           }

           $(this).css('height', inner_span_height);

           return $(this);
       }
   };
})(jQuery);

/*
 * http://stackoverflow.com/questions/4583703/jquery-post-request-not-ajax
 */
jQuery(function($) { $.extend({
  form: function(url, target, data, method) {
      if (method == null) method = 'POST';
      if (data == null) data = {};

      var form = $('<form>').attr({
          method: method,
          action: url,
          target: target
       }).css({
          display: 'none'
       });

      var addData = function(name, data) {
          if ($.isArray(data)) {
              for (var i = 0; i < data.length; i++) {
                  var value = data[i];
                  addData(name + '[]', value);
              }
          } else if (typeof data === 'object') {
              for (var key in data) {
                  if (data.hasOwnProperty(key)) {
                      addData(name + '[' + key + ']', data[key]);
                  }
              }
          } else if (data != null) {
              form.append($('<input>').attr({
                type: 'hidden',
                name: String(name),
                value: String(data)
              }));
          }
      };

      for (var key in data) {
          if (data.hasOwnProperty(key)) {
              addData(key, data[key]);
          }
      }

      return form.appendTo('body');
  }
}); });

/**
 * jquery-custom-file-input.js
 */

jQuery.fn.choose = function(f) {
  $(this).bind('choose', f);
};


jQuery.fn.file = function() {
  return this.each(function() {
    var btn = $(this);
    var pos = btn.offset();

    function update() {
      pos = btn.offset();
      file.css({
        'top': pos.top,
        'left': pos.left,
        'width': btn.width(),
        'height': btn.height()
      });
    }

    btn.mouseover(update);

    var hidden = $('<div></div>').css({
      'display': 'none'
    }).appendTo('body');

    var file = $('<div><form></form></div>').appendTo('body').css({
      'position': 'absolute',
      'overflow': 'hidden',
      '-moz-opacity': '0',
      'filter':  'alpha(opacity: 0)',
      'opacity': '0',
      'z-index': '10'
    });

    var form = file.find('form');
    var input = form.find('input');

    function reset() {
      var input = $('<input type="file" multiple>').appendTo(form);
      input.change(function(e) {
        input.unbind();
        input.detach();
        btn.trigger('choose', [input]);
        reset();
      });
    };

    reset();

    function placer(e) {
      form.css('margin-left', e.pageX - pos.left - offset.width);
      form.css('margin-top', e.pageY - pos.top - offset.height + 3);
    }

    function redirect(name) {
      file[name](function(e) {
        btn.trigger(name);
      });
    }

    file.mousemove(placer);
    btn.mousemove(placer);

    redirect('mouseover');
    redirect('mouseout');
    redirect('mousedown');
    redirect('mouseup');

    var offset = {
      width: file.width() - 25,
      height: file.height() / 2
    };

    update();
  });
};


/**
 * jQuery Checkbox Switch
 * https://github.com/psyonara/jquery-checkbox-switch
 *
 * Usage:
 * $("#id_checkbox").CheckboxSwitch();
 *
 */
(function( $ ) {
  $.fn.CheckboxSwitch = function(options) {

      var settings = $.extend({
          'border-color': '#111',
          'border-radius': '2px',
          'padding': '14px',
          'off-gradient-start': '#fff',
          'off-gradient-end': '#ddd',
          'on-gradient-off-start': '#E8E8E8',
          'on-gradient-off-end': '#0054ff',
          'on-gradient-on-start': '#E8E8E8',
          'on-gradient-on-end': '#0054ff',
          'on-text': 'Yes',
          'off-text': 'No',
          'tertiary': true
      }, options);

      var style_gradiant = function(element, start_color, end_color) {

          element
              .css("background-color", end_color)
              /*
              .css("background-repeat", "repeat-x")
              .css("background-image", "-khtml-gradient(linear, left top, left bottom, from(" + start_color + "), to(" + end_color + "))")
              .css("background-image", "-moz-linear-gradient(top, " + start_color + ", " + end_color + ")")
              .css("background-image", "-ms-linear-gradient(top, " + start_color + ", " + end_color + ")")
              .css("background-image", "-webkit-gradient(linear, left top, left bottom, color-stop(0%, " + start_color + "), color-stop(100%, " + end_color + "))")
              .css("background-image", "-webkit-linear-gradient(top, " + start_color + ", " + end_color + ")")
              .css("background-image", "-o-linear-gradient(top, " + start_color + ", " + end_color + ")")
              .css("background-image", "linear-gradient(top, " + start_color + ", " + end_color + ")")
              .css("filter", "e(%(\"progid:DXImageTransform.Microsoft.gradient(startColorstr='%d', endColorstr='%d', GradientType=0)\"," + start_color + "," + end_color + "))");
              */
      };

      var style_main = function(element) {
          element.css({
            /*
              "border": "1px solid " + settings['border-color'],
              "-webkit-border-radius": settings['border-radius'],
              "-moz-border-radius": settings['border-radius'],
              "border-radius": settings['border-radius'],
            */
              "margin": "0",
              "padding": settings['padding'] + " 0 " + settings['padding'] + " 0"
          });
      };

      var style_switch_general = function(element) {

          element.css({
              "cursor": "pointer",
              "padding": settings['padding']
          });

        element.width(50);
        element.css('display', 'block');
        element.css('float', 'left');
        element.css('text-align', 'center');

        if(settings['tertiary']) {
          element.css('margin-right', 5);
          element.css('background-color', '#E8E8E8');
          element.css('color', '#000');
        }






      };

      var style_off = function(element) {
          element
              .css("color", "#000");
          style_gradiant(element, settings['off-gradient-start'], settings['off-gradient-end']);
      };

      var style_on_off = function(element) {
          element
              .css("color", "#fff");
          style_gradiant(element, settings['on-gradient-off-start'], settings['on-gradient-off-end']);
      };

      var style_on_on = function(element) {
          element
              .css("color", "#fff");
          style_gradiant(element, settings['on-gradient-on-start'], settings['on-gradient-on-end']);
      };

      return this.each(function() {

          var checkbox = $(this);
          var parent_div = $("<div />");
          var parent_span = $('<span />');
          var on_switch = $('<span>' + settings['on-text'] + '</span>');
          var off_switch = $('<span>' + settings['off-text'] + '</span>');

          //parent_div.css("padding", settings['padding'] + " 0 " + settings['padding'] + " 0");
          parent_span.css('display', 'block');
          parent_span.addClass('clearfix');


          //style_main(parent_span);

          if(checkbox.attr("checked") == "checked") {
              style_on_on(on_switch);
              style_off(off_switch);
          } else {
              style_off(on_switch);
              style_on_off(off_switch);
          }

          style_switch_general(on_switch);
          style_switch_general(off_switch);

          if(settings['tertiary']) {
            if(checkbox.attr("checked") == "checked") {
              style_on_on(on_switch);
              style_off(off_switch);
            }
            if(checkbox.attr('unchecked') == 'unchecked') {
              style_off(on_switch);
              style_on_off(off_switch);
            }
          }

          $(this).css("display", "none");
          $(this).wrapAll(parent_div).wrapAll(parent_span);
          $(this).before(on_switch, off_switch);

          // Tertiary checkbox support
          if(settings['tertiary']) {
            var inputName = checkbox.attr('name');
            var value = false;

            if(checkbox.attr("checked") == "checked") {
              value = true;
            }
            else {
              value = false;
            }
            $(this).after('<input type="hidden" value="' + value + '" name="' + inputName + '_checked"/>');

            if(checkbox.attr("unchecked") == "unchecked") {
              value = true;
            }
            else {
              value = false;
            }
            $(this).after('<input type="hidden" value="' + value + '" name="' + inputName + '_unchecked"/>');

            if(checkbox.attr("checked") != "checked" && checkbox.attr("unchecked") != "unchecked") {
              value = true;
            }
            else {
              value = false;
            }
            $(this).after('<input type="hidden" value="' + value + '" name="' + inputName + '_unselected"/>');
          }

          on_switch.bind("click", function() {
              style_on_on(on_switch);
              style_off(off_switch);

              // Tertiary
              $(this).siblings('input[name="' + inputName + '_unselected"]').val('false');
              $(this).siblings('input[name="' + inputName + '_unchecked"]').val('false');
              $(this).siblings('input[name="' + inputName + '_checked"]').val('true');


              checkbox.attr("checked", true);

              // Bind the checkbox to the checked event .bind('checked', function..
              checkbox.trigger('checked');

          });

          off_switch.bind("click", function() {
              style_on_off(off_switch);
              style_off(on_switch);

              // Tertiary
              $(this).siblings('input[name="' + inputName + '_unselected"]').val('false');
              $(this).siblings('input[name="' + inputName + '_unchecked"]').val('true');
              $(this).siblings('input[name="' + inputName + '_checked"]').val('false');


              checkbox.attr("checked", false);

              // Bind the checkbox to the checked event .bind('checked', function..
              checkbox.trigger('checked');



          });
      });

  };
})( jQuery );

/*!
 * jQuery Selectbox plugin 0.2
 *
 * Copyright 2011-2012, Dimitar Ivanov (http://www.bulgaria-web-developers.com/projects/javascript/selectbox/)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 *
 * Date: Tue Jul 17 19:58:36 2012 +0300
 */
(function ($, undefined) {
  var PROP_NAME = 'selectbox',
    FALSE = false,
    TRUE = true;
  /**
   * Selectbox manager.
   * Use the singleton instance of this class, $.selectbox, to interact with the select box.
   * Settings for (groups of) select boxes are maintained in an instance object,
   * allowing multiple different settings on the same page
   */
  function Selectbox() {
    this._state = [];
    this._defaults = { // Global defaults for all the select box instances
      classHolder: "sbHolder",
      classHolderDisabled: "sbHolderDisabled",
      classSelector: "sbSelector",
      classOptions: "sbOptions",
      classGroup: "sbGroup",
      classSub: "sbSub",
      classDisabled: "sbDisabled",
      classToggleOpen: "sbToggleOpen",
      classToggle: "sbToggle",
      classFocus: "sbFocus",
      speed: 200,
      effect: "slide", // "slide" or "fade"
      onChange: null, //Define a callback function when the selectbox is changed
      onOpen: null, //Define a callback function when the selectbox is open
      onClose: null, //Define a callback function when the selectbox is closed
      onLoad: null // XXXCMA define a callback after loaded
    };
  }

  $.extend(Selectbox.prototype, {
    /**
     * Is the first field in a jQuery collection open as a selectbox
     *
     * @param {Object} target
     * @return {Boolean}
     */
    _isOpenSelectbox: function (target) {
      if (!target) {
        return FALSE;
      }
      var inst = this._getInst(target);
      return inst.isOpen;
    },
    /**
     * Is the first field in a jQuery collection disabled as a selectbox
     *
     * @param {HTMLElement} target
     * @return {Boolean}
     */
    _isDisabledSelectbox: function (target) {
      if (!target) {
        return FALSE;
      }
      var inst = this._getInst(target);
      return inst.isDisabled;
    },
    /**
     * Attach the select box to a jQuery selection.
     *
     * @param {HTMLElement} target
     * @param {Object} settings
     */
    _attachSelectbox: function (target, settings) {
      if (this._getInst(target)) {
        return FALSE;
      }
      var $target = $(target),
        self = this,
        inst = self._newInst($target),
        sbHolder, sbSelector, sbToggle, sbOptions,
        s = FALSE, optGroup = $target.find("optgroup"), opts = $target.find("option"), olen = opts.length;

      $target.attr("sb", inst.uid);

      $.extend(inst.settings, self._defaults, settings);
      self._state[inst.uid] = FALSE;
      $target.hide();

      function closeOthers() {
        var key, sel,
          uid = this.attr("id").split("_")[1];
        for (key in self._state) {
          if (key !== uid) {
            if (self._state.hasOwnProperty(key)) {
              sel = $("select[sb='" + key + "']")[0];
              if (sel) {
                self._closeSelectbox(sel);
              }
            }
          }
        }
      }

      sbHolder = $("<div>", {
        "id": "sbHolder_" + inst.uid,
        "class": inst.settings.classHolder,
        "tabindex": $target.attr("tabindex")
      });

      sbSelector = $("<a>", {
        "id": "sbSelector_" + inst.uid,
        "href": "#",
        "class": inst.settings.classSelector,
        "click": function (e) {
          e.preventDefault();
          closeOthers.apply($(this), []);
          var uid = $(this).attr("id").split("_")[1];
          if (self._state[uid]) {
            self._closeSelectbox(target);
          } else {
            self._openSelectbox(target);
          }
        }
      });

      sbToggle = $("<a>", {
        "id": "sbToggle_" + inst.uid,
        "href": "#",
        "class": inst.settings.classToggle,
        "click": function (e) {
          e.preventDefault();
          closeOthers.apply($(this), []);
          var uid = $(this).attr("id").split("_")[1];
          if (self._state[uid]) {
            self._closeSelectbox(target);
          } else {
            self._openSelectbox(target);
          }
        }
      });
      sbToggle.appendTo(sbHolder);

      sbOptions = $("<ul>", {
        "id": "sbOptions_" + inst.uid,
        "class": inst.settings.classOptions,
        "css": {
          "display": "none"
        }
      });

      $target.children().each(function(i) {
        var that = $(this), li, config = {};
        if (that.is("option")) {
          getOptions(that);
        } else if (that.is("optgroup")) {
          li = $("<li>");
          $("<span>", {
            "text": that.attr("label")
          }).addClass(inst.settings.classGroup).appendTo(li);
          li.appendTo(sbOptions);
          if (that.is(":disabled")) {
            config.disabled = true;
          }
          config.sub = true;
          getOptions(that.find("option"), config);
        }
      });

      function getOptions () {
        var sub = arguments[1] && arguments[1].sub ? true : false,
          disabled = arguments[1] && arguments[1].disabled ? true : false;
        arguments[0].each(function (i) {
          var that = $(this),
            li = $("<li>"),
            child;
          if (that.is(":selected")) {
            sbSelector.text(that.text());
            s = TRUE;
          }
          if (i === olen - 1) {
            li.addClass("last");
          }
          if (!that.is(":disabled") && !disabled) {
            child = $("<a>", {
              "href": "#" + that.val(),
              "rel": that.val()
            }).text(that.text()).bind("click.sb", function (e) {
              if (e && e.preventDefault) {
                e.preventDefault();
              }
              var t = sbToggle,
                $this = $(this),
                uid = t.attr("id").split("_")[1];
              self._changeSelectbox(target, $this.attr("rel"), $this.text());
              self._closeSelectbox(target);
            }).bind("mouseover.sb", function () {
              var $this = $(this);
              $this.parent().siblings().find("a").removeClass(inst.settings.classFocus);
              $this.addClass(inst.settings.classFocus);
            }).bind("mouseout.sb", function () {
              $(this).removeClass(inst.settings.classFocus);
            });
            if (sub) {
              child.addClass(inst.settings.classSub);
            }
            if (that.is(":selected")) {
              child.addClass(inst.settings.classFocus);
            }
            child.appendTo(li);
          } else {
            child = $("<span>", {
              "text": that.text()
            }).addClass(inst.settings.classDisabled);
            if (sub) {
              child.addClass(inst.settings.classSub);
            }
            child.appendTo(li);
          }
          li.appendTo(sbOptions);
        });
      }

      if (!s) {
        sbSelector.text(opts.first().text());
      }

      $.data(target, PROP_NAME, inst);

      sbHolder.data("uid", inst.uid).bind("keydown.sb", function (e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0,
          $this = $(this),
          uid = $this.data("uid"),
          inst = $this.siblings("select[sb='"+uid+"']").data(PROP_NAME),
          trgt = $this.siblings(["select[sb='", uid, "']"].join("")).get(0),
          $f = $this.find("ul").find("a." + inst.settings.classFocus);
        switch (key) {
          case 37: //Arrow Left
          case 38: //Arrow Up
            if ($f.length > 0) {
              var $next;
              $("a", $this).removeClass(inst.settings.classFocus);
              $next = $f.parent().prevAll("li:has(a)").eq(0).find("a");
              if ($next.length > 0) {
                $next.addClass(inst.settings.classFocus).focus();
                $("#sbSelector_" + uid).text($next.text());
              }
            }
            break;
          case 39: //Arrow Right
          case 40: //Arrow Down
            var $next;
            $("a", $this).removeClass(inst.settings.classFocus);
            if ($f.length > 0) {
              $next = $f.parent().nextAll("li:has(a)").eq(0).find("a");
            } else {
              $next = $this.find("ul").find("a").eq(0);
            }
            if ($next.length > 0) {
              $next.addClass(inst.settings.classFocus).focus();
              $("#sbSelector_" + uid).text($next.text());
            }
            break;
          case 13: //Enter
            if ($f.length > 0) {
              self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
            }
            self._closeSelectbox(trgt);
            break;
          case 9: //Tab
            if (trgt) {
              var inst = self._getInst(trgt);
              if (inst/* && inst.isOpen*/) {
                if ($f.length > 0) {
                  self._changeSelectbox(trgt, $f.attr("rel"), $f.text());
                }
                self._closeSelectbox(trgt);
              }
            }
            var i = parseInt($this.attr("tabindex"), 10);
            if (!e.shiftKey) {
              i++;
            } else {
              i--;
            }
            $("*[tabindex='" + i + "']").focus();
            break;
          case 27: //Escape
            self._closeSelectbox(trgt);
            break;
        }
        e.stopPropagation();
        return false;
      }).delegate("a", "mouseover", function (e) {
        $(this).addClass(inst.settings.classFocus);
      }).delegate("a", "mouseout", function (e) {
        $(this).removeClass(inst.settings.classFocus);
      });

      sbSelector.appendTo(sbHolder);
      sbOptions.appendTo(sbHolder);
      sbHolder.insertAfter($target);

      $("html").on('mousedown', function(e) {
        e.stopPropagation();
        $("select").selectbox('close');
      });
      $([".", inst.settings.classHolder, ", .", inst.settings.classSelector].join("")).mousedown(function(e) {
        e.stopPropagation();
      });

      // XXXCMA onLoad function
      if(inst) {
        onLoad = this._get(inst, 'onLoad');
        if (onLoad) {
          onLoad.apply((inst.input ? inst.input[0] : null), [inst, inst.input[0], sbSelector]);
        }
      }

    },
    /**
     * Remove the selectbox functionality completely. This will return the element back to its pre-init state.
     *
     * @param {HTMLElement} target
     */
    _detachSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst) {
        return FALSE;
      }
      $("#sbHolder_" + inst.uid).remove();
      $.data(target, PROP_NAME, null);
      $(target).show();
    },
    /**
     * Change selected attribute of the selectbox.
     *
     * @param {HTMLElement} target
     * @param {String} value
     * @param {String} text
     */
    _changeSelectbox: function (target, value, text) {
      var onChange,
        inst = this._getInst(target);
      if (inst) {
        onChange = this._get(inst, 'onChange');
        $("#sbSelector_" + inst.uid).text(text);
      }
      value = value.replace(/\'/g, "\\'");
      $(target).find("option[value='" + value + "']").attr("selected", TRUE);

      if (inst && onChange) {
        onChange.apply((inst.input ? inst.input[0] : null), [value, inst, $("#sbSelector_" + inst.uid)]);
        inst.input.trigger('change'); // XXXCMA call both
      } else if (inst && inst.input) {
        inst.input.trigger('change');
      }

    },
    /**
     * Enable the selectbox.
     *
     * @param {HTMLElement} target
     */
    _enableSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst || !inst.isDisabled) {
        return FALSE;
      }
      $("#sbHolder_" + inst.uid).removeClass(inst.settings.classHolderDisabled);
      inst.isDisabled = FALSE;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Disable the selectbox.
     *
     * @param {HTMLElement} target
     */
    _disableSelectbox: function (target) {
      var inst = this._getInst(target);
      if (!inst || inst.isDisabled) {
        return FALSE;
      }
      $("#sbHolder_" + inst.uid).addClass(inst.settings.classHolderDisabled);
      inst.isDisabled = TRUE;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Get or set any selectbox option. If no value is specified, will act as a getter.
     *
     * @param {HTMLElement} target
     * @param {String} name
     * @param {Object} value
     */
    _optionSelectbox: function (target, name, value) {
      var inst = this._getInst(target);
      if (!inst) {
        return FALSE;
      }
      //TODO check name
      inst[name] = value;
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Call up attached selectbox
     *
     * @param {HTMLElement} target
     */
    _openSelectbox: function (target) {
      var inst = this._getInst(target);
      //if (!inst || this._state[inst.uid] || inst.isDisabled) {
      if (!inst || inst.isOpen || inst.isDisabled) {
        return;
      }
      var el = $("#sbOptions_" + inst.uid),
        viewportHeight = parseInt($(window).height(), 10),
        offset = $("#sbHolder_" + inst.uid).offset(),
        scrollTop = $(window).scrollTop(),
        height = el.prev().height(),
        diff = viewportHeight - (offset.top - scrollTop) - height / 2,
        onOpen = this._get(inst, 'onOpen');
      el.css({
        "top": height + "px",
        "maxHeight": (diff - height) + "px"
      });
      inst.settings.effect === "fade" ? el.fadeIn(inst.settings.speed) : el.slideDown(inst.settings.speed);
      $("#sbToggle_" + inst.uid).addClass(inst.settings.classToggleOpen);
      this._state[inst.uid] = TRUE;
      inst.isOpen = TRUE;
      if (onOpen) {
        onOpen.apply((inst.input ? inst.input[0] : null), [inst]);
      }
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Close opened selectbox
     *
     * @param {HTMLElement} target
     */
    _closeSelectbox: function (target) {
      var inst = this._getInst(target);
      //if (!inst || !this._state[inst.uid]) {
      if (!inst || !inst.isOpen) {
        return;
      }
      var onClose = this._get(inst, 'onClose');
      inst.settings.effect === "fade" ? $("#sbOptions_" + inst.uid).fadeOut(inst.settings.speed) : $("#sbOptions_" + inst.uid).slideUp(inst.settings.speed);
      $("#sbToggle_" + inst.uid).removeClass(inst.settings.classToggleOpen);
      this._state[inst.uid] = FALSE;
      inst.isOpen = FALSE;
      if (onClose) {
        onClose.apply((inst.input ? inst.input[0] : null), [inst]);
      }
      $.data(target, PROP_NAME, inst);
    },
    /**
     * Create a new instance object
     *
     * @param {HTMLElement} target
     * @return {Object}
     */
    _newInst: function(target) {
      var id = target[0].id.replace(/([^A-Za-z0-9_-])/g, '\\\\$1');
      return {
        id: id,
        input: target,
        uid: Math.floor(Math.random() * 99999999),
        isOpen: FALSE,
        isDisabled: FALSE,
        settings: {}
      };
    },
    /**
     * Retrieve the instance data for the target control.
     *
     * @param {HTMLElement} target
     * @return {Object} - the associated instance data
     * @throws error if a jQuery problem getting data
     */
    _getInst: function(target) {
      try {
        return $.data(target, PROP_NAME);
      }
      catch (err) {
        throw 'Missing instance data for this selectbox';
      }
    },
    /**
     * Get a setting value, defaulting if necessary
     *
     * @param {Object} inst
     * @param {String} name
     * @return {Mixed}
     */
    _get: function(inst, name) {
      return inst.settings[name] !== undefined ? inst.settings[name] : this._defaults[name];
    }
  });

  /**
   * Invoke the selectbox functionality.
   *
   * @param {Object|String} options
   * @return {Object}
   */
  $.fn.selectbox = function (options) {

    var otherArgs = Array.prototype.slice.call(arguments, 1);
    if (typeof options == 'string' && options == 'isDisabled') {
      return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
    }

    if (options == 'option' && arguments.length == 2 && typeof arguments[1] == 'string') {
      return $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this[0]].concat(otherArgs));
    }

    return this.each(function() {
      typeof options == 'string' ?
        $.selectbox['_' + options + 'Selectbox'].apply($.selectbox, [this].concat(otherArgs)) :
        $.selectbox._attachSelectbox(this, options);
    });
  };

  $.selectbox = new Selectbox(); // singleton instance
  $.selectbox.version = "0.2";
})(jQuery);


/*!
 * imagesLoaded PACKAGED v3.0.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){"use strict";function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},"function"==typeof define&&define.amd?define(function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){"use strict";var t=document.documentElement,n=function(){};t.addEventListener?n=function(e,t,n){e.addEventListener(t,n,!1)}:t.attachEvent&&(n=function(t,n,i){t[n+i]=i.handleEvent?function(){var t=e.event;t.target=t.target||t.srcElement,i.handleEvent.call(i,t)}:function(){var n=e.event;n.target=n.target||n.srcElement,i.call(t,n)},t.attachEvent("on"+n,t[n+i])});var i=function(){};t.removeEventListener?i=function(e,t,n){e.removeEventListener(t,n,!1)}:t.detachEvent&&(i=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var r={bind:n,unbind:i};"function"==typeof define&&define.amd?define(r):e.eventie=r}(this),function(e){"use strict";function t(e,t){for(var n in t)e[n]=t[n];return e}function n(e){return"[object Array]"===c.call(e)}function i(e){var t=[];if(n(e))t=e;else if("number"==typeof e.length)for(var i=0,r=e.length;r>i;i++)t.push(e[i]);else t.push(e);return t}function r(e,n){function r(e,n,s){if(!(this instanceof r))return new r(e,n);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=i(e),this.options=t({},this.options),"function"==typeof n?s=n:t(this.options,n),s&&this.on("always",s),this.getImages(),o&&(this.jqDeferred=new o.Deferred);var a=this;setTimeout(function(){a.check()})}function c(e){this.img=e}r.prototype=new e,r.prototype.options={},r.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);for(var i=n.querySelectorAll("img"),r=0,o=i.length;o>r;r++){var s=i[r];this.addImage(s)}}},r.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},r.prototype.check=function(){function e(e,r){return t.options.debug&&a&&s.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},r.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify(t,e)})},r.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},o&&(o.fn.imagesLoaded=function(e,t){var n=new r(this,e,t);return n.jqDeferred.promise(o(this))});var f={};return c.prototype=new e,c.prototype.check=function(){var e=f[this.img.src];if(e)return this.useCached(e),void 0;if(f[this.img.src]=this,this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this.proxyImage=new Image;n.bind(t,"load",this),n.bind(t,"error",this),t.src=this.img.src},c.prototype.useCached=function(e){if(e.isConfirmed)this.confirm(e.isLoaded,"cached was confirmed");else{var t=this;e.on("confirm",function(e){return t.confirm(e.isLoaded,"cache emitted confirmed"),!0})}},c.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},c.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},c.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindProxyEvents()},c.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindProxyEvents()},c.prototype.unbindProxyEvents=function(){n.unbind(this.proxyImage,"load",this),n.unbind(this.proxyImage,"error",this)},r}var o=e.jQuery,s=e.console,a=s!==void 0,c=Object.prototype.toString;"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],r):e.imagesLoaded=r(e.EventEmitter,e.eventie)}(window);


/**
 * https://github.com/gumayunov/jquery-bitly-plugin
 */
jQuery.extend({
    Bitly: function(options) { this.init(options); }
});

jQuery.extend(jQuery.Bitly.prototype, {

    init: function(options) {
        if (!options) options = {
            login: 'bitlyapidemo',
            key: 'R_0da49e0a9118ff35f52f629d2d71bf07'
        }
        if (!options.version) options.version = '2.0.1';
        if (!options.history) options.history = '0';
        if (!options.onError) options.onError = this._default_onError;
        this.default_options = options;
        return this;
    },

    shorten: function(long_url, options) {

        if (jQuery.isFunction(options)) options = {onSuccess: options };

        var d_o = this.default_options;
        jQuery.each(d_o, function(i) { if (options[i] == undefined) { options[i] = d_o[i]; } });

        if (!options.onSuccess) {
            if (console) console.error('onSuccess undefiened');
            return;
        }

        var url = "http://api.bit.ly/shorten?" +"longUrl="+encodeURIComponent(long_url)
            +"&login="+options.login +"&apiKey="+options.key
            +"&history="+options.history +"&version="+options.version
            +"&format=json&callback=?";

        jQuery.getJSON(url, function(data){
            if (data.errorCode != 0) {
                options.onError(data);
            } else {
                var res =  data.results[long_url];
                if (res.errorCode && res.errorCode !=0 ) {
                    options.onError(res);
                } else {
                    options.onSuccess(res.shortUrl);
                }
            }
        });
    },

    _default_onError: function(data) {
        if (!console) return;
        var msg =  'Bitly error: ' + data.errorCode + '\n' + data.errorMessage
        console.error(msg);
        console.debug(data);
    }

});

/*! jQuery JSON plugin 2.4.0 | code.google.com/p/jquery-json */
(function($){'use strict';var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},hasOwn=Object.prototype.hasOwnProperty;$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var pairs,k,name,val,type=$.type(o);if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return String(o);}
if(type==='string'){return $.quoteString(o);}
if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(type==='date'){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
pairs=[];if($.isArray(o)){for(k=0;k<o.length;k++){pairs.push($.toJSON(o[k])||'null');}
return'['+pairs.join(',')+']';}
if(typeof o==='object'){for(k in o){if(hasOwn.call(o,k)){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type!=='function'&&type!=='undefined'){val=$.toJSON(o[k]);pairs.push(name+':'+val);}}}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){return eval('('+str+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+str+')');}
throw new SyntaxError('Error parsing JSON, source is not valid.');};$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+str+'"';};}(jQuery));


/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */
(function(k){k.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var d=document.createElement("div");var q={};function b(v){if(v in d.style){return v}var u=["Moz","Webkit","O","ms"];var r=v.charAt(0).toUpperCase()+v.substr(1);if(v in d.style){return v}for(var t=0;t<u.length;++t){var s=u[t]+r;if(s in d.style){return s}}}function e(){d.style[q.transform]="";d.style[q.transform]="rotateY(90deg)";return d.style[q.transform]!==""}var a=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;q.transition=b("transition");q.transitionDelay=b("transitionDelay");q.transform=b("transform");q.transformOrigin=b("transformOrigin");q.transform3d=e();var i={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var f=q.transitionEnd=i[q.transition]||null;for(var p in q){if(q.hasOwnProperty(p)&&typeof k.support[p]==="undefined"){k.support[p]=q[p]}}d=null;k.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};k.cssHooks["transit:transform"]={get:function(r){return k(r).data("transform")||new j()},set:function(s,r){var t=r;if(!(t instanceof j)){t=new j(t)}if(q.transform==="WebkitTransform"&&!a){s.style[q.transform]=t.toString(true)}else{s.style[q.transform]=t.toString()}k(s).data("transform",t)}};k.cssHooks.transform={set:k.cssHooks["transit:transform"].set};if(k.fn.jquery<"1.8"){k.cssHooks.transformOrigin={get:function(r){return r.style[q.transformOrigin]},set:function(r,s){r.style[q.transformOrigin]=s}};k.cssHooks.transition={get:function(r){return r.style[q.transition]},set:function(r,s){r.style[q.transition]=s}}}n("scale");n("translate");n("rotate");n("rotateX");n("rotateY");n("rotate3d");n("perspective");n("skewX");n("skewY");n("x",true);n("y",true);function j(r){if(typeof r==="string"){this.parse(r)}return this}j.prototype={setFromString:function(t,s){var r=(typeof s==="string")?s.split(","):(s.constructor===Array)?s:[s];r.unshift(t);j.prototype.set.apply(this,r)},set:function(s){var r=Array.prototype.slice.apply(arguments,[1]);if(this.setter[s]){this.setter[s].apply(this,r)}else{this[s]=r.join(",")}},get:function(r){if(this.getter[r]){return this.getter[r].apply(this)}else{return this[r]||0}},setter:{rotate:function(r){this.rotate=o(r,"deg")},rotateX:function(r){this.rotateX=o(r,"deg")},rotateY:function(r){this.rotateY=o(r,"deg")},scale:function(r,s){if(s===undefined){s=r}this.scale=r+","+s},skewX:function(r){this.skewX=o(r,"deg")},skewY:function(r){this.skewY=o(r,"deg")},perspective:function(r){this.perspective=o(r,"px")},x:function(r){this.set("translate",r,null)},y:function(r){this.set("translate",null,r)},translate:function(r,s){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(r!==null&&r!==undefined){this._translateX=o(r,"px")}if(s!==null&&s!==undefined){this._translateY=o(s,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var r=(this.scale||"1,1").split(",");if(r[0]){r[0]=parseFloat(r[0])}if(r[1]){r[1]=parseFloat(r[1])}return(r[0]===r[1])?r[0]:r},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var r=0;r<=3;++r){if(t[r]){t[r]=parseFloat(t[r])}}if(t[3]){t[3]=o(t[3],"deg")}return t}},parse:function(s){var r=this;s.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,v,u){r.setFromString(v,u)})},toString:function(t){var s=[];for(var r in this){if(this.hasOwnProperty(r)){if((!q.transform3d)&&((r==="rotateX")||(r==="rotateY")||(r==="perspective")||(r==="transformOrigin"))){continue}if(r[0]!=="_"){if(t&&(r==="scale")){s.push(r+"3d("+this[r]+",1)")}else{if(t&&(r==="translate")){s.push(r+"3d("+this[r]+",0)")}else{s.push(r+"("+this[r]+")")}}}}}return s.join(" ")}};function m(s,r,t){if(r===true){s.queue(t)}else{if(r){s.queue(r,t)}else{t()}}}function h(s){var r=[];k.each(s,function(t){t=k.camelCase(t);t=k.transit.propertyMap[t]||k.cssProps[t]||t;t=c(t);if(k.inArray(t,r)===-1){r.push(t)}});return r}function g(s,v,x,r){var t=h(s);if(k.cssEase[x]){x=k.cssEase[x]}var w=""+l(v)+" "+x;if(parseInt(r,10)>0){w+=" "+l(r)}var u=[];k.each(t,function(z,y){u.push(y+" "+w)});return u.join(", ")}k.fn.transition=k.fn.transit=function(z,s,y,C){var D=this;var u=0;var w=true;if(typeof s==="function"){C=s;s=undefined}if(typeof y==="function"){C=y;y=undefined}if(typeof z.easing!=="undefined"){y=z.easing;delete z.easing}if(typeof z.duration!=="undefined"){s=z.duration;delete z.duration}if(typeof z.complete!=="undefined"){C=z.complete;delete z.complete}if(typeof z.queue!=="undefined"){w=z.queue;delete z.queue}if(typeof z.delay!=="undefined"){u=z.delay;delete z.delay}if(typeof s==="undefined"){s=k.fx.speeds._default}if(typeof y==="undefined"){y=k.cssEase._default}s=l(s);var E=g(z,s,y,u);var B=k.transit.enabled&&q.transition;var t=B?(parseInt(s,10)+parseInt(u,10)):0;if(t===0){var A=function(F){D.css(z);if(C){C.apply(D)}if(F){F()}};m(D,w,A);return D}var x={};var r=function(H){var G=false;var F=function(){if(G){D.unbind(f,F)}if(t>0){D.each(function(){this.style[q.transition]=(x[this]||null)})}if(typeof C==="function"){C.apply(D)}if(typeof H==="function"){H()}};if((t>0)&&(f)&&(k.transit.useTransitionEnd)){G=true;D.bind(f,F)}else{window.setTimeout(F,t)}D.each(function(){if(t>0){this.style[q.transition]=E}k(this).css(z)})};var v=function(F){this.offsetWidth;r(F)};m(D,w,v);return this};function n(s,r){if(!r){k.cssNumber[s]=true}k.transit.propertyMap[s]=q.transform;k.cssHooks[s]={get:function(v){var u=k(v).css("transit:transform");return u.get(s)},set:function(v,w){var u=k(v).css("transit:transform");u.setFromString(s,w);k(v).css({"transit:transform":u})}}}function c(r){return r.replace(/([A-Z])/g,function(s){return"-"+s.toLowerCase()})}function o(s,r){if((typeof s==="string")&&(!s.match(/^[\-0-9\.]+$/))){return s}else{return""+s+r}}function l(s){var r=s;if(k.fx.speeds[r]){r=k.fx.speeds[r]}return o(r,"ms")}k.transit.getTransitionValue=g})(jQuery);
