// Compiled by ClojureScript 1.7.122 {}
goog.provide('quiescent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Return a DOM node constructor function. The argument may be any
 *   value accepted by React.createElement (that is, the string name of a
 *   HTML tag, or an instance of ReactClass).
 * 
 *   Returns a function that takes props and children (the same as the
 *   built-in ReactJS element constructors).
 */
quiescent.dom.constructor = (function quiescent$dom$constructor(type){
return (function() { 
var G__20422__delegate = function (props,children){
return cljs.core.apply.call(null,React.createElement,type,cljs.core.clj__GT_js.call(null,props),children);
};
var G__20422 = function (props,var_args){
var children = null;
if (arguments.length > 1) {
var G__20423__i = 0, G__20423__a = new Array(arguments.length -  1);
while (G__20423__i < G__20423__a.length) {G__20423__a[G__20423__i] = arguments[G__20423__i + 1]; ++G__20423__i;}
  children = new cljs.core.IndexedSeq(G__20423__a,0);
} 
return G__20422__delegate.call(this,props,children);};
G__20422.cljs$lang$maxFixedArity = 1;
G__20422.cljs$lang$applyTo = (function (arglist__20424){
var props = cljs.core.first(arglist__20424);
var children = cljs.core.rest(arglist__20424);
return G__20422__delegate(props,children);
});
G__20422.cljs$core$IFn$_invoke$arity$variadic = G__20422__delegate;
return G__20422;
})()
;
});
var ctor__19073__auto___20544 = quiescent.dom.constructor.call(null,"a");
quiescent.dom.a = ((function (ctor__19073__auto___20544){
return (function quiescent$dom$a(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20545 = arguments.length;
var i__15727__auto___20546 = (0);
while(true){
if((i__15727__auto___20546 < len__15726__auto___20545)){
args__15733__auto__.push((arguments[i__15727__auto___20546]));

var G__20547 = (i__15727__auto___20546 + (1));
i__15727__auto___20546 = G__20547;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20544))
;

quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20544){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20544,args__19074__auto__);
});})(ctor__19073__auto___20544))
;

quiescent.dom.a.cljs$lang$maxFixedArity = (0);

quiescent.dom.a.cljs$lang$applyTo = ((function (ctor__19073__auto___20544){
return (function (seq20425){
return quiescent.dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20425));
});})(ctor__19073__auto___20544))
;

var ctor__19073__auto___20548 = quiescent.dom.constructor.call(null,"abbr");
quiescent.dom.abbr = ((function (ctor__19073__auto___20548){
return (function quiescent$dom$abbr(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20549 = arguments.length;
var i__15727__auto___20550 = (0);
while(true){
if((i__15727__auto___20550 < len__15726__auto___20549)){
args__15733__auto__.push((arguments[i__15727__auto___20550]));

var G__20551 = (i__15727__auto___20550 + (1));
i__15727__auto___20550 = G__20551;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20548))
;

quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20548){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20548,args__19074__auto__);
});})(ctor__19073__auto___20548))
;

quiescent.dom.abbr.cljs$lang$maxFixedArity = (0);

quiescent.dom.abbr.cljs$lang$applyTo = ((function (ctor__19073__auto___20548){
return (function (seq20426){
return quiescent.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20426));
});})(ctor__19073__auto___20548))
;

var ctor__19073__auto___20552 = quiescent.dom.constructor.call(null,"address");
quiescent.dom.address = ((function (ctor__19073__auto___20552){
return (function quiescent$dom$address(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20553 = arguments.length;
var i__15727__auto___20554 = (0);
while(true){
if((i__15727__auto___20554 < len__15726__auto___20553)){
args__15733__auto__.push((arguments[i__15727__auto___20554]));

var G__20555 = (i__15727__auto___20554 + (1));
i__15727__auto___20554 = G__20555;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20552))
;

quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20552){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20552,args__19074__auto__);
});})(ctor__19073__auto___20552))
;

quiescent.dom.address.cljs$lang$maxFixedArity = (0);

quiescent.dom.address.cljs$lang$applyTo = ((function (ctor__19073__auto___20552){
return (function (seq20427){
return quiescent.dom.address.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20427));
});})(ctor__19073__auto___20552))
;

var ctor__19073__auto___20556 = quiescent.dom.constructor.call(null,"area");
quiescent.dom.area = ((function (ctor__19073__auto___20556){
return (function quiescent$dom$area(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20557 = arguments.length;
var i__15727__auto___20558 = (0);
while(true){
if((i__15727__auto___20558 < len__15726__auto___20557)){
args__15733__auto__.push((arguments[i__15727__auto___20558]));

var G__20559 = (i__15727__auto___20558 + (1));
i__15727__auto___20558 = G__20559;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20556))
;

quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20556){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20556,args__19074__auto__);
});})(ctor__19073__auto___20556))
;

quiescent.dom.area.cljs$lang$maxFixedArity = (0);

quiescent.dom.area.cljs$lang$applyTo = ((function (ctor__19073__auto___20556){
return (function (seq20428){
return quiescent.dom.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20428));
});})(ctor__19073__auto___20556))
;

var ctor__19073__auto___20560 = quiescent.dom.constructor.call(null,"article");
quiescent.dom.article = ((function (ctor__19073__auto___20560){
return (function quiescent$dom$article(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20561 = arguments.length;
var i__15727__auto___20562 = (0);
while(true){
if((i__15727__auto___20562 < len__15726__auto___20561)){
args__15733__auto__.push((arguments[i__15727__auto___20562]));

var G__20563 = (i__15727__auto___20562 + (1));
i__15727__auto___20562 = G__20563;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20560))
;

quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20560){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20560,args__19074__auto__);
});})(ctor__19073__auto___20560))
;

quiescent.dom.article.cljs$lang$maxFixedArity = (0);

quiescent.dom.article.cljs$lang$applyTo = ((function (ctor__19073__auto___20560){
return (function (seq20429){
return quiescent.dom.article.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20429));
});})(ctor__19073__auto___20560))
;

var ctor__19073__auto___20564 = quiescent.dom.constructor.call(null,"aside");
quiescent.dom.aside = ((function (ctor__19073__auto___20564){
return (function quiescent$dom$aside(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20565 = arguments.length;
var i__15727__auto___20566 = (0);
while(true){
if((i__15727__auto___20566 < len__15726__auto___20565)){
args__15733__auto__.push((arguments[i__15727__auto___20566]));

var G__20567 = (i__15727__auto___20566 + (1));
i__15727__auto___20566 = G__20567;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20564))
;

quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20564){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20564,args__19074__auto__);
});})(ctor__19073__auto___20564))
;

quiescent.dom.aside.cljs$lang$maxFixedArity = (0);

quiescent.dom.aside.cljs$lang$applyTo = ((function (ctor__19073__auto___20564){
return (function (seq20430){
return quiescent.dom.aside.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20430));
});})(ctor__19073__auto___20564))
;

var ctor__19073__auto___20568 = quiescent.dom.constructor.call(null,"audio");
quiescent.dom.audio = ((function (ctor__19073__auto___20568){
return (function quiescent$dom$audio(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20569 = arguments.length;
var i__15727__auto___20570 = (0);
while(true){
if((i__15727__auto___20570 < len__15726__auto___20569)){
args__15733__auto__.push((arguments[i__15727__auto___20570]));

var G__20571 = (i__15727__auto___20570 + (1));
i__15727__auto___20570 = G__20571;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20568))
;

quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20568){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20568,args__19074__auto__);
});})(ctor__19073__auto___20568))
;

quiescent.dom.audio.cljs$lang$maxFixedArity = (0);

quiescent.dom.audio.cljs$lang$applyTo = ((function (ctor__19073__auto___20568){
return (function (seq20431){
return quiescent.dom.audio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20431));
});})(ctor__19073__auto___20568))
;

var ctor__19073__auto___20572 = quiescent.dom.constructor.call(null,"b");
quiescent.dom.b = ((function (ctor__19073__auto___20572){
return (function quiescent$dom$b(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20573 = arguments.length;
var i__15727__auto___20574 = (0);
while(true){
if((i__15727__auto___20574 < len__15726__auto___20573)){
args__15733__auto__.push((arguments[i__15727__auto___20574]));

var G__20575 = (i__15727__auto___20574 + (1));
i__15727__auto___20574 = G__20575;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20572))
;

quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20572){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20572,args__19074__auto__);
});})(ctor__19073__auto___20572))
;

quiescent.dom.b.cljs$lang$maxFixedArity = (0);

quiescent.dom.b.cljs$lang$applyTo = ((function (ctor__19073__auto___20572){
return (function (seq20432){
return quiescent.dom.b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20432));
});})(ctor__19073__auto___20572))
;

var ctor__19073__auto___20576 = quiescent.dom.constructor.call(null,"base");
quiescent.dom.base = ((function (ctor__19073__auto___20576){
return (function quiescent$dom$base(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20577 = arguments.length;
var i__15727__auto___20578 = (0);
while(true){
if((i__15727__auto___20578 < len__15726__auto___20577)){
args__15733__auto__.push((arguments[i__15727__auto___20578]));

var G__20579 = (i__15727__auto___20578 + (1));
i__15727__auto___20578 = G__20579;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20576))
;

quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20576){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20576,args__19074__auto__);
});})(ctor__19073__auto___20576))
;

quiescent.dom.base.cljs$lang$maxFixedArity = (0);

quiescent.dom.base.cljs$lang$applyTo = ((function (ctor__19073__auto___20576){
return (function (seq20433){
return quiescent.dom.base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20433));
});})(ctor__19073__auto___20576))
;

var ctor__19073__auto___20580 = quiescent.dom.constructor.call(null,"bdi");
quiescent.dom.bdi = ((function (ctor__19073__auto___20580){
return (function quiescent$dom$bdi(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20581 = arguments.length;
var i__15727__auto___20582 = (0);
while(true){
if((i__15727__auto___20582 < len__15726__auto___20581)){
args__15733__auto__.push((arguments[i__15727__auto___20582]));

var G__20583 = (i__15727__auto___20582 + (1));
i__15727__auto___20582 = G__20583;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20580))
;

quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20580){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20580,args__19074__auto__);
});})(ctor__19073__auto___20580))
;

quiescent.dom.bdi.cljs$lang$maxFixedArity = (0);

quiescent.dom.bdi.cljs$lang$applyTo = ((function (ctor__19073__auto___20580){
return (function (seq20434){
return quiescent.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20434));
});})(ctor__19073__auto___20580))
;

var ctor__19073__auto___20584 = quiescent.dom.constructor.call(null,"bdo");
quiescent.dom.bdo = ((function (ctor__19073__auto___20584){
return (function quiescent$dom$bdo(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20585 = arguments.length;
var i__15727__auto___20586 = (0);
while(true){
if((i__15727__auto___20586 < len__15726__auto___20585)){
args__15733__auto__.push((arguments[i__15727__auto___20586]));

var G__20587 = (i__15727__auto___20586 + (1));
i__15727__auto___20586 = G__20587;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20584))
;

quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20584){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20584,args__19074__auto__);
});})(ctor__19073__auto___20584))
;

quiescent.dom.bdo.cljs$lang$maxFixedArity = (0);

quiescent.dom.bdo.cljs$lang$applyTo = ((function (ctor__19073__auto___20584){
return (function (seq20435){
return quiescent.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20435));
});})(ctor__19073__auto___20584))
;

var ctor__19073__auto___20588 = quiescent.dom.constructor.call(null,"big");
quiescent.dom.big = ((function (ctor__19073__auto___20588){
return (function quiescent$dom$big(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20589 = arguments.length;
var i__15727__auto___20590 = (0);
while(true){
if((i__15727__auto___20590 < len__15726__auto___20589)){
args__15733__auto__.push((arguments[i__15727__auto___20590]));

var G__20591 = (i__15727__auto___20590 + (1));
i__15727__auto___20590 = G__20591;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20588))
;

quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20588){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20588,args__19074__auto__);
});})(ctor__19073__auto___20588))
;

quiescent.dom.big.cljs$lang$maxFixedArity = (0);

quiescent.dom.big.cljs$lang$applyTo = ((function (ctor__19073__auto___20588){
return (function (seq20436){
return quiescent.dom.big.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20436));
});})(ctor__19073__auto___20588))
;

var ctor__19073__auto___20592 = quiescent.dom.constructor.call(null,"blockquote");
quiescent.dom.blockquote = ((function (ctor__19073__auto___20592){
return (function quiescent$dom$blockquote(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20593 = arguments.length;
var i__15727__auto___20594 = (0);
while(true){
if((i__15727__auto___20594 < len__15726__auto___20593)){
args__15733__auto__.push((arguments[i__15727__auto___20594]));

var G__20595 = (i__15727__auto___20594 + (1));
i__15727__auto___20594 = G__20595;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20592))
;

quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20592){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20592,args__19074__auto__);
});})(ctor__19073__auto___20592))
;

quiescent.dom.blockquote.cljs$lang$maxFixedArity = (0);

quiescent.dom.blockquote.cljs$lang$applyTo = ((function (ctor__19073__auto___20592){
return (function (seq20437){
return quiescent.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20437));
});})(ctor__19073__auto___20592))
;

var ctor__19073__auto___20596 = quiescent.dom.constructor.call(null,"body");
quiescent.dom.body = ((function (ctor__19073__auto___20596){
return (function quiescent$dom$body(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20597 = arguments.length;
var i__15727__auto___20598 = (0);
while(true){
if((i__15727__auto___20598 < len__15726__auto___20597)){
args__15733__auto__.push((arguments[i__15727__auto___20598]));

var G__20599 = (i__15727__auto___20598 + (1));
i__15727__auto___20598 = G__20599;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20596))
;

quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20596){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20596,args__19074__auto__);
});})(ctor__19073__auto___20596))
;

quiescent.dom.body.cljs$lang$maxFixedArity = (0);

quiescent.dom.body.cljs$lang$applyTo = ((function (ctor__19073__auto___20596){
return (function (seq20438){
return quiescent.dom.body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20438));
});})(ctor__19073__auto___20596))
;

var ctor__19073__auto___20600 = quiescent.dom.constructor.call(null,"br");
quiescent.dom.br = ((function (ctor__19073__auto___20600){
return (function quiescent$dom$br(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20601 = arguments.length;
var i__15727__auto___20602 = (0);
while(true){
if((i__15727__auto___20602 < len__15726__auto___20601)){
args__15733__auto__.push((arguments[i__15727__auto___20602]));

var G__20603 = (i__15727__auto___20602 + (1));
i__15727__auto___20602 = G__20603;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20600))
;

quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20600){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20600,args__19074__auto__);
});})(ctor__19073__auto___20600))
;

quiescent.dom.br.cljs$lang$maxFixedArity = (0);

quiescent.dom.br.cljs$lang$applyTo = ((function (ctor__19073__auto___20600){
return (function (seq20439){
return quiescent.dom.br.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20439));
});})(ctor__19073__auto___20600))
;

var ctor__19073__auto___20604 = quiescent.dom.constructor.call(null,"button");
quiescent.dom.button = ((function (ctor__19073__auto___20604){
return (function quiescent$dom$button(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20605 = arguments.length;
var i__15727__auto___20606 = (0);
while(true){
if((i__15727__auto___20606 < len__15726__auto___20605)){
args__15733__auto__.push((arguments[i__15727__auto___20606]));

var G__20607 = (i__15727__auto___20606 + (1));
i__15727__auto___20606 = G__20607;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20604))
;

quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20604){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20604,args__19074__auto__);
});})(ctor__19073__auto___20604))
;

quiescent.dom.button.cljs$lang$maxFixedArity = (0);

quiescent.dom.button.cljs$lang$applyTo = ((function (ctor__19073__auto___20604){
return (function (seq20440){
return quiescent.dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20440));
});})(ctor__19073__auto___20604))
;

var ctor__19073__auto___20608 = quiescent.dom.constructor.call(null,"canvas");
quiescent.dom.canvas = ((function (ctor__19073__auto___20608){
return (function quiescent$dom$canvas(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20609 = arguments.length;
var i__15727__auto___20610 = (0);
while(true){
if((i__15727__auto___20610 < len__15726__auto___20609)){
args__15733__auto__.push((arguments[i__15727__auto___20610]));

var G__20611 = (i__15727__auto___20610 + (1));
i__15727__auto___20610 = G__20611;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20608))
;

quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20608){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20608,args__19074__auto__);
});})(ctor__19073__auto___20608))
;

quiescent.dom.canvas.cljs$lang$maxFixedArity = (0);

quiescent.dom.canvas.cljs$lang$applyTo = ((function (ctor__19073__auto___20608){
return (function (seq20441){
return quiescent.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20441));
});})(ctor__19073__auto___20608))
;

var ctor__19073__auto___20612 = quiescent.dom.constructor.call(null,"caption");
quiescent.dom.caption = ((function (ctor__19073__auto___20612){
return (function quiescent$dom$caption(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20613 = arguments.length;
var i__15727__auto___20614 = (0);
while(true){
if((i__15727__auto___20614 < len__15726__auto___20613)){
args__15733__auto__.push((arguments[i__15727__auto___20614]));

var G__20615 = (i__15727__auto___20614 + (1));
i__15727__auto___20614 = G__20615;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20612))
;

quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20612){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20612,args__19074__auto__);
});})(ctor__19073__auto___20612))
;

quiescent.dom.caption.cljs$lang$maxFixedArity = (0);

quiescent.dom.caption.cljs$lang$applyTo = ((function (ctor__19073__auto___20612){
return (function (seq20442){
return quiescent.dom.caption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20442));
});})(ctor__19073__auto___20612))
;

var ctor__19073__auto___20616 = quiescent.dom.constructor.call(null,"cite");
quiescent.dom.cite = ((function (ctor__19073__auto___20616){
return (function quiescent$dom$cite(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20617 = arguments.length;
var i__15727__auto___20618 = (0);
while(true){
if((i__15727__auto___20618 < len__15726__auto___20617)){
args__15733__auto__.push((arguments[i__15727__auto___20618]));

var G__20619 = (i__15727__auto___20618 + (1));
i__15727__auto___20618 = G__20619;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20616))
;

quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20616){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20616,args__19074__auto__);
});})(ctor__19073__auto___20616))
;

quiescent.dom.cite.cljs$lang$maxFixedArity = (0);

quiescent.dom.cite.cljs$lang$applyTo = ((function (ctor__19073__auto___20616){
return (function (seq20443){
return quiescent.dom.cite.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20443));
});})(ctor__19073__auto___20616))
;

var ctor__19073__auto___20620 = quiescent.dom.constructor.call(null,"code");
quiescent.dom.code = ((function (ctor__19073__auto___20620){
return (function quiescent$dom$code(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20621 = arguments.length;
var i__15727__auto___20622 = (0);
while(true){
if((i__15727__auto___20622 < len__15726__auto___20621)){
args__15733__auto__.push((arguments[i__15727__auto___20622]));

var G__20623 = (i__15727__auto___20622 + (1));
i__15727__auto___20622 = G__20623;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20620))
;

quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20620){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20620,args__19074__auto__);
});})(ctor__19073__auto___20620))
;

quiescent.dom.code.cljs$lang$maxFixedArity = (0);

quiescent.dom.code.cljs$lang$applyTo = ((function (ctor__19073__auto___20620){
return (function (seq20444){
return quiescent.dom.code.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20444));
});})(ctor__19073__auto___20620))
;

var ctor__19073__auto___20624 = quiescent.dom.constructor.call(null,"col");
quiescent.dom.col = ((function (ctor__19073__auto___20624){
return (function quiescent$dom$col(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20625 = arguments.length;
var i__15727__auto___20626 = (0);
while(true){
if((i__15727__auto___20626 < len__15726__auto___20625)){
args__15733__auto__.push((arguments[i__15727__auto___20626]));

var G__20627 = (i__15727__auto___20626 + (1));
i__15727__auto___20626 = G__20627;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20624))
;

quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20624){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20624,args__19074__auto__);
});})(ctor__19073__auto___20624))
;

quiescent.dom.col.cljs$lang$maxFixedArity = (0);

quiescent.dom.col.cljs$lang$applyTo = ((function (ctor__19073__auto___20624){
return (function (seq20445){
return quiescent.dom.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20445));
});})(ctor__19073__auto___20624))
;

var ctor__19073__auto___20628 = quiescent.dom.constructor.call(null,"colgroup");
quiescent.dom.colgroup = ((function (ctor__19073__auto___20628){
return (function quiescent$dom$colgroup(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20629 = arguments.length;
var i__15727__auto___20630 = (0);
while(true){
if((i__15727__auto___20630 < len__15726__auto___20629)){
args__15733__auto__.push((arguments[i__15727__auto___20630]));

var G__20631 = (i__15727__auto___20630 + (1));
i__15727__auto___20630 = G__20631;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20628))
;

quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20628){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20628,args__19074__auto__);
});})(ctor__19073__auto___20628))
;

quiescent.dom.colgroup.cljs$lang$maxFixedArity = (0);

quiescent.dom.colgroup.cljs$lang$applyTo = ((function (ctor__19073__auto___20628){
return (function (seq20446){
return quiescent.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20446));
});})(ctor__19073__auto___20628))
;

var ctor__19073__auto___20632 = quiescent.dom.constructor.call(null,"data");
quiescent.dom.data = ((function (ctor__19073__auto___20632){
return (function quiescent$dom$data(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20633 = arguments.length;
var i__15727__auto___20634 = (0);
while(true){
if((i__15727__auto___20634 < len__15726__auto___20633)){
args__15733__auto__.push((arguments[i__15727__auto___20634]));

var G__20635 = (i__15727__auto___20634 + (1));
i__15727__auto___20634 = G__20635;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20632))
;

quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20632){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20632,args__19074__auto__);
});})(ctor__19073__auto___20632))
;

quiescent.dom.data.cljs$lang$maxFixedArity = (0);

quiescent.dom.data.cljs$lang$applyTo = ((function (ctor__19073__auto___20632){
return (function (seq20447){
return quiescent.dom.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20447));
});})(ctor__19073__auto___20632))
;

var ctor__19073__auto___20636 = quiescent.dom.constructor.call(null,"datalist");
quiescent.dom.datalist = ((function (ctor__19073__auto___20636){
return (function quiescent$dom$datalist(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20637 = arguments.length;
var i__15727__auto___20638 = (0);
while(true){
if((i__15727__auto___20638 < len__15726__auto___20637)){
args__15733__auto__.push((arguments[i__15727__auto___20638]));

var G__20639 = (i__15727__auto___20638 + (1));
i__15727__auto___20638 = G__20639;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20636))
;

quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20636){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20636,args__19074__auto__);
});})(ctor__19073__auto___20636))
;

quiescent.dom.datalist.cljs$lang$maxFixedArity = (0);

quiescent.dom.datalist.cljs$lang$applyTo = ((function (ctor__19073__auto___20636){
return (function (seq20448){
return quiescent.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20448));
});})(ctor__19073__auto___20636))
;

var ctor__19073__auto___20640 = quiescent.dom.constructor.call(null,"dd");
quiescent.dom.dd = ((function (ctor__19073__auto___20640){
return (function quiescent$dom$dd(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20641 = arguments.length;
var i__15727__auto___20642 = (0);
while(true){
if((i__15727__auto___20642 < len__15726__auto___20641)){
args__15733__auto__.push((arguments[i__15727__auto___20642]));

var G__20643 = (i__15727__auto___20642 + (1));
i__15727__auto___20642 = G__20643;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20640))
;

quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20640){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20640,args__19074__auto__);
});})(ctor__19073__auto___20640))
;

quiescent.dom.dd.cljs$lang$maxFixedArity = (0);

quiescent.dom.dd.cljs$lang$applyTo = ((function (ctor__19073__auto___20640){
return (function (seq20449){
return quiescent.dom.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20449));
});})(ctor__19073__auto___20640))
;

var ctor__19073__auto___20644 = quiescent.dom.constructor.call(null,"del");
quiescent.dom.del = ((function (ctor__19073__auto___20644){
return (function quiescent$dom$del(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20645 = arguments.length;
var i__15727__auto___20646 = (0);
while(true){
if((i__15727__auto___20646 < len__15726__auto___20645)){
args__15733__auto__.push((arguments[i__15727__auto___20646]));

var G__20647 = (i__15727__auto___20646 + (1));
i__15727__auto___20646 = G__20647;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20644))
;

quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20644){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20644,args__19074__auto__);
});})(ctor__19073__auto___20644))
;

quiescent.dom.del.cljs$lang$maxFixedArity = (0);

quiescent.dom.del.cljs$lang$applyTo = ((function (ctor__19073__auto___20644){
return (function (seq20450){
return quiescent.dom.del.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20450));
});})(ctor__19073__auto___20644))
;

var ctor__19073__auto___20648 = quiescent.dom.constructor.call(null,"details");
quiescent.dom.details = ((function (ctor__19073__auto___20648){
return (function quiescent$dom$details(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20649 = arguments.length;
var i__15727__auto___20650 = (0);
while(true){
if((i__15727__auto___20650 < len__15726__auto___20649)){
args__15733__auto__.push((arguments[i__15727__auto___20650]));

var G__20651 = (i__15727__auto___20650 + (1));
i__15727__auto___20650 = G__20651;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20648))
;

quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20648){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20648,args__19074__auto__);
});})(ctor__19073__auto___20648))
;

quiescent.dom.details.cljs$lang$maxFixedArity = (0);

quiescent.dom.details.cljs$lang$applyTo = ((function (ctor__19073__auto___20648){
return (function (seq20451){
return quiescent.dom.details.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20451));
});})(ctor__19073__auto___20648))
;

var ctor__19073__auto___20652 = quiescent.dom.constructor.call(null,"dfn");
quiescent.dom.dfn = ((function (ctor__19073__auto___20652){
return (function quiescent$dom$dfn(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20653 = arguments.length;
var i__15727__auto___20654 = (0);
while(true){
if((i__15727__auto___20654 < len__15726__auto___20653)){
args__15733__auto__.push((arguments[i__15727__auto___20654]));

var G__20655 = (i__15727__auto___20654 + (1));
i__15727__auto___20654 = G__20655;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20652))
;

quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20652){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20652,args__19074__auto__);
});})(ctor__19073__auto___20652))
;

quiescent.dom.dfn.cljs$lang$maxFixedArity = (0);

quiescent.dom.dfn.cljs$lang$applyTo = ((function (ctor__19073__auto___20652){
return (function (seq20452){
return quiescent.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20452));
});})(ctor__19073__auto___20652))
;

var ctor__19073__auto___20656 = quiescent.dom.constructor.call(null,"div");
quiescent.dom.div = ((function (ctor__19073__auto___20656){
return (function quiescent$dom$div(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20657 = arguments.length;
var i__15727__auto___20658 = (0);
while(true){
if((i__15727__auto___20658 < len__15726__auto___20657)){
args__15733__auto__.push((arguments[i__15727__auto___20658]));

var G__20659 = (i__15727__auto___20658 + (1));
i__15727__auto___20658 = G__20659;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20656))
;

quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20656){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20656,args__19074__auto__);
});})(ctor__19073__auto___20656))
;

quiescent.dom.div.cljs$lang$maxFixedArity = (0);

quiescent.dom.div.cljs$lang$applyTo = ((function (ctor__19073__auto___20656){
return (function (seq20453){
return quiescent.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20453));
});})(ctor__19073__auto___20656))
;

var ctor__19073__auto___20660 = quiescent.dom.constructor.call(null,"dl");
quiescent.dom.dl = ((function (ctor__19073__auto___20660){
return (function quiescent$dom$dl(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20661 = arguments.length;
var i__15727__auto___20662 = (0);
while(true){
if((i__15727__auto___20662 < len__15726__auto___20661)){
args__15733__auto__.push((arguments[i__15727__auto___20662]));

var G__20663 = (i__15727__auto___20662 + (1));
i__15727__auto___20662 = G__20663;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20660))
;

quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20660){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20660,args__19074__auto__);
});})(ctor__19073__auto___20660))
;

quiescent.dom.dl.cljs$lang$maxFixedArity = (0);

quiescent.dom.dl.cljs$lang$applyTo = ((function (ctor__19073__auto___20660){
return (function (seq20454){
return quiescent.dom.dl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20454));
});})(ctor__19073__auto___20660))
;

var ctor__19073__auto___20664 = quiescent.dom.constructor.call(null,"dt");
quiescent.dom.dt = ((function (ctor__19073__auto___20664){
return (function quiescent$dom$dt(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20665 = arguments.length;
var i__15727__auto___20666 = (0);
while(true){
if((i__15727__auto___20666 < len__15726__auto___20665)){
args__15733__auto__.push((arguments[i__15727__auto___20666]));

var G__20667 = (i__15727__auto___20666 + (1));
i__15727__auto___20666 = G__20667;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20664))
;

quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20664){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20664,args__19074__auto__);
});})(ctor__19073__auto___20664))
;

quiescent.dom.dt.cljs$lang$maxFixedArity = (0);

quiescent.dom.dt.cljs$lang$applyTo = ((function (ctor__19073__auto___20664){
return (function (seq20455){
return quiescent.dom.dt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20455));
});})(ctor__19073__auto___20664))
;

var ctor__19073__auto___20668 = quiescent.dom.constructor.call(null,"em");
quiescent.dom.em = ((function (ctor__19073__auto___20668){
return (function quiescent$dom$em(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20669 = arguments.length;
var i__15727__auto___20670 = (0);
while(true){
if((i__15727__auto___20670 < len__15726__auto___20669)){
args__15733__auto__.push((arguments[i__15727__auto___20670]));

var G__20671 = (i__15727__auto___20670 + (1));
i__15727__auto___20670 = G__20671;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20668))
;

quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20668){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20668,args__19074__auto__);
});})(ctor__19073__auto___20668))
;

quiescent.dom.em.cljs$lang$maxFixedArity = (0);

quiescent.dom.em.cljs$lang$applyTo = ((function (ctor__19073__auto___20668){
return (function (seq20456){
return quiescent.dom.em.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20456));
});})(ctor__19073__auto___20668))
;

var ctor__19073__auto___20672 = quiescent.dom.constructor.call(null,"embed");
quiescent.dom.embed = ((function (ctor__19073__auto___20672){
return (function quiescent$dom$embed(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20673 = arguments.length;
var i__15727__auto___20674 = (0);
while(true){
if((i__15727__auto___20674 < len__15726__auto___20673)){
args__15733__auto__.push((arguments[i__15727__auto___20674]));

var G__20675 = (i__15727__auto___20674 + (1));
i__15727__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20672))
;

quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20672){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20672,args__19074__auto__);
});})(ctor__19073__auto___20672))
;

quiescent.dom.embed.cljs$lang$maxFixedArity = (0);

quiescent.dom.embed.cljs$lang$applyTo = ((function (ctor__19073__auto___20672){
return (function (seq20458){
return quiescent.dom.embed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20458));
});})(ctor__19073__auto___20672))
;

var ctor__19073__auto___20676 = quiescent.dom.constructor.call(null,"fieldset");
quiescent.dom.fieldset = ((function (ctor__19073__auto___20676){
return (function quiescent$dom$fieldset(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20677 = arguments.length;
var i__15727__auto___20678 = (0);
while(true){
if((i__15727__auto___20678 < len__15726__auto___20677)){
args__15733__auto__.push((arguments[i__15727__auto___20678]));

var G__20679 = (i__15727__auto___20678 + (1));
i__15727__auto___20678 = G__20679;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20676))
;

quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20676){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20676,args__19074__auto__);
});})(ctor__19073__auto___20676))
;

quiescent.dom.fieldset.cljs$lang$maxFixedArity = (0);

quiescent.dom.fieldset.cljs$lang$applyTo = ((function (ctor__19073__auto___20676){
return (function (seq20459){
return quiescent.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20459));
});})(ctor__19073__auto___20676))
;

var ctor__19073__auto___20680 = quiescent.dom.constructor.call(null,"figcaption");
quiescent.dom.figcaption = ((function (ctor__19073__auto___20680){
return (function quiescent$dom$figcaption(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20681 = arguments.length;
var i__15727__auto___20682 = (0);
while(true){
if((i__15727__auto___20682 < len__15726__auto___20681)){
args__15733__auto__.push((arguments[i__15727__auto___20682]));

var G__20683 = (i__15727__auto___20682 + (1));
i__15727__auto___20682 = G__20683;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20680))
;

quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20680){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20680,args__19074__auto__);
});})(ctor__19073__auto___20680))
;

quiescent.dom.figcaption.cljs$lang$maxFixedArity = (0);

quiescent.dom.figcaption.cljs$lang$applyTo = ((function (ctor__19073__auto___20680){
return (function (seq20460){
return quiescent.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20460));
});})(ctor__19073__auto___20680))
;

var ctor__19073__auto___20684 = quiescent.dom.constructor.call(null,"figure");
quiescent.dom.figure = ((function (ctor__19073__auto___20684){
return (function quiescent$dom$figure(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20685 = arguments.length;
var i__15727__auto___20686 = (0);
while(true){
if((i__15727__auto___20686 < len__15726__auto___20685)){
args__15733__auto__.push((arguments[i__15727__auto___20686]));

var G__20687 = (i__15727__auto___20686 + (1));
i__15727__auto___20686 = G__20687;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20684))
;

quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20684){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20684,args__19074__auto__);
});})(ctor__19073__auto___20684))
;

quiescent.dom.figure.cljs$lang$maxFixedArity = (0);

quiescent.dom.figure.cljs$lang$applyTo = ((function (ctor__19073__auto___20684){
return (function (seq20461){
return quiescent.dom.figure.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20461));
});})(ctor__19073__auto___20684))
;

var ctor__19073__auto___20688 = quiescent.dom.constructor.call(null,"footer");
quiescent.dom.footer = ((function (ctor__19073__auto___20688){
return (function quiescent$dom$footer(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20689 = arguments.length;
var i__15727__auto___20690 = (0);
while(true){
if((i__15727__auto___20690 < len__15726__auto___20689)){
args__15733__auto__.push((arguments[i__15727__auto___20690]));

var G__20691 = (i__15727__auto___20690 + (1));
i__15727__auto___20690 = G__20691;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20688))
;

quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20688){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20688,args__19074__auto__);
});})(ctor__19073__auto___20688))
;

quiescent.dom.footer.cljs$lang$maxFixedArity = (0);

quiescent.dom.footer.cljs$lang$applyTo = ((function (ctor__19073__auto___20688){
return (function (seq20462){
return quiescent.dom.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20462));
});})(ctor__19073__auto___20688))
;

var ctor__19073__auto___20692 = quiescent.dom.constructor.call(null,"form");
quiescent.dom.form = ((function (ctor__19073__auto___20692){
return (function quiescent$dom$form(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20693 = arguments.length;
var i__15727__auto___20694 = (0);
while(true){
if((i__15727__auto___20694 < len__15726__auto___20693)){
args__15733__auto__.push((arguments[i__15727__auto___20694]));

var G__20695 = (i__15727__auto___20694 + (1));
i__15727__auto___20694 = G__20695;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20692))
;

quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20692){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20692,args__19074__auto__);
});})(ctor__19073__auto___20692))
;

quiescent.dom.form.cljs$lang$maxFixedArity = (0);

quiescent.dom.form.cljs$lang$applyTo = ((function (ctor__19073__auto___20692){
return (function (seq20463){
return quiescent.dom.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20463));
});})(ctor__19073__auto___20692))
;

var ctor__19073__auto___20696 = quiescent.dom.constructor.call(null,"h1");
quiescent.dom.h1 = ((function (ctor__19073__auto___20696){
return (function quiescent$dom$h1(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20697 = arguments.length;
var i__15727__auto___20698 = (0);
while(true){
if((i__15727__auto___20698 < len__15726__auto___20697)){
args__15733__auto__.push((arguments[i__15727__auto___20698]));

var G__20699 = (i__15727__auto___20698 + (1));
i__15727__auto___20698 = G__20699;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20696))
;

quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20696){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20696,args__19074__auto__);
});})(ctor__19073__auto___20696))
;

quiescent.dom.h1.cljs$lang$maxFixedArity = (0);

quiescent.dom.h1.cljs$lang$applyTo = ((function (ctor__19073__auto___20696){
return (function (seq20464){
return quiescent.dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20464));
});})(ctor__19073__auto___20696))
;

var ctor__19073__auto___20700 = quiescent.dom.constructor.call(null,"h2");
quiescent.dom.h2 = ((function (ctor__19073__auto___20700){
return (function quiescent$dom$h2(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20701 = arguments.length;
var i__15727__auto___20702 = (0);
while(true){
if((i__15727__auto___20702 < len__15726__auto___20701)){
args__15733__auto__.push((arguments[i__15727__auto___20702]));

var G__20703 = (i__15727__auto___20702 + (1));
i__15727__auto___20702 = G__20703;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20700))
;

quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20700){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20700,args__19074__auto__);
});})(ctor__19073__auto___20700))
;

quiescent.dom.h2.cljs$lang$maxFixedArity = (0);

quiescent.dom.h2.cljs$lang$applyTo = ((function (ctor__19073__auto___20700){
return (function (seq20465){
return quiescent.dom.h2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20465));
});})(ctor__19073__auto___20700))
;

var ctor__19073__auto___20704 = quiescent.dom.constructor.call(null,"h3");
quiescent.dom.h3 = ((function (ctor__19073__auto___20704){
return (function quiescent$dom$h3(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20705 = arguments.length;
var i__15727__auto___20706 = (0);
while(true){
if((i__15727__auto___20706 < len__15726__auto___20705)){
args__15733__auto__.push((arguments[i__15727__auto___20706]));

var G__20707 = (i__15727__auto___20706 + (1));
i__15727__auto___20706 = G__20707;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20704))
;

quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20704){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20704,args__19074__auto__);
});})(ctor__19073__auto___20704))
;

quiescent.dom.h3.cljs$lang$maxFixedArity = (0);

quiescent.dom.h3.cljs$lang$applyTo = ((function (ctor__19073__auto___20704){
return (function (seq20466){
return quiescent.dom.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20466));
});})(ctor__19073__auto___20704))
;

var ctor__19073__auto___20708 = quiescent.dom.constructor.call(null,"h4");
quiescent.dom.h4 = ((function (ctor__19073__auto___20708){
return (function quiescent$dom$h4(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20709 = arguments.length;
var i__15727__auto___20710 = (0);
while(true){
if((i__15727__auto___20710 < len__15726__auto___20709)){
args__15733__auto__.push((arguments[i__15727__auto___20710]));

var G__20711 = (i__15727__auto___20710 + (1));
i__15727__auto___20710 = G__20711;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20708))
;

quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20708){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20708,args__19074__auto__);
});})(ctor__19073__auto___20708))
;

quiescent.dom.h4.cljs$lang$maxFixedArity = (0);

quiescent.dom.h4.cljs$lang$applyTo = ((function (ctor__19073__auto___20708){
return (function (seq20467){
return quiescent.dom.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20467));
});})(ctor__19073__auto___20708))
;

var ctor__19073__auto___20712 = quiescent.dom.constructor.call(null,"h5");
quiescent.dom.h5 = ((function (ctor__19073__auto___20712){
return (function quiescent$dom$h5(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20713 = arguments.length;
var i__15727__auto___20714 = (0);
while(true){
if((i__15727__auto___20714 < len__15726__auto___20713)){
args__15733__auto__.push((arguments[i__15727__auto___20714]));

var G__20715 = (i__15727__auto___20714 + (1));
i__15727__auto___20714 = G__20715;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20712))
;

quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20712){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20712,args__19074__auto__);
});})(ctor__19073__auto___20712))
;

quiescent.dom.h5.cljs$lang$maxFixedArity = (0);

quiescent.dom.h5.cljs$lang$applyTo = ((function (ctor__19073__auto___20712){
return (function (seq20468){
return quiescent.dom.h5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20468));
});})(ctor__19073__auto___20712))
;

var ctor__19073__auto___20716 = quiescent.dom.constructor.call(null,"h6");
quiescent.dom.h6 = ((function (ctor__19073__auto___20716){
return (function quiescent$dom$h6(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20717 = arguments.length;
var i__15727__auto___20718 = (0);
while(true){
if((i__15727__auto___20718 < len__15726__auto___20717)){
args__15733__auto__.push((arguments[i__15727__auto___20718]));

var G__20719 = (i__15727__auto___20718 + (1));
i__15727__auto___20718 = G__20719;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20716))
;

quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20716){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20716,args__19074__auto__);
});})(ctor__19073__auto___20716))
;

quiescent.dom.h6.cljs$lang$maxFixedArity = (0);

quiescent.dom.h6.cljs$lang$applyTo = ((function (ctor__19073__auto___20716){
return (function (seq20469){
return quiescent.dom.h6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20469));
});})(ctor__19073__auto___20716))
;

var ctor__19073__auto___20720 = quiescent.dom.constructor.call(null,"head");
quiescent.dom.head = ((function (ctor__19073__auto___20720){
return (function quiescent$dom$head(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20721 = arguments.length;
var i__15727__auto___20722 = (0);
while(true){
if((i__15727__auto___20722 < len__15726__auto___20721)){
args__15733__auto__.push((arguments[i__15727__auto___20722]));

var G__20723 = (i__15727__auto___20722 + (1));
i__15727__auto___20722 = G__20723;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20720))
;

quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20720){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20720,args__19074__auto__);
});})(ctor__19073__auto___20720))
;

quiescent.dom.head.cljs$lang$maxFixedArity = (0);

quiescent.dom.head.cljs$lang$applyTo = ((function (ctor__19073__auto___20720){
return (function (seq20470){
return quiescent.dom.head.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20470));
});})(ctor__19073__auto___20720))
;

var ctor__19073__auto___20724 = quiescent.dom.constructor.call(null,"header");
quiescent.dom.header = ((function (ctor__19073__auto___20724){
return (function quiescent$dom$header(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20725 = arguments.length;
var i__15727__auto___20726 = (0);
while(true){
if((i__15727__auto___20726 < len__15726__auto___20725)){
args__15733__auto__.push((arguments[i__15727__auto___20726]));

var G__20727 = (i__15727__auto___20726 + (1));
i__15727__auto___20726 = G__20727;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20724))
;

quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20724){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20724,args__19074__auto__);
});})(ctor__19073__auto___20724))
;

quiescent.dom.header.cljs$lang$maxFixedArity = (0);

quiescent.dom.header.cljs$lang$applyTo = ((function (ctor__19073__auto___20724){
return (function (seq20471){
return quiescent.dom.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20471));
});})(ctor__19073__auto___20724))
;

var ctor__19073__auto___20728 = quiescent.dom.constructor.call(null,"hr");
quiescent.dom.hr = ((function (ctor__19073__auto___20728){
return (function quiescent$dom$hr(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20729 = arguments.length;
var i__15727__auto___20730 = (0);
while(true){
if((i__15727__auto___20730 < len__15726__auto___20729)){
args__15733__auto__.push((arguments[i__15727__auto___20730]));

var G__20731 = (i__15727__auto___20730 + (1));
i__15727__auto___20730 = G__20731;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20728))
;

quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20728){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20728,args__19074__auto__);
});})(ctor__19073__auto___20728))
;

quiescent.dom.hr.cljs$lang$maxFixedArity = (0);

quiescent.dom.hr.cljs$lang$applyTo = ((function (ctor__19073__auto___20728){
return (function (seq20472){
return quiescent.dom.hr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20472));
});})(ctor__19073__auto___20728))
;

var ctor__19073__auto___20732 = quiescent.dom.constructor.call(null,"html");
quiescent.dom.html = ((function (ctor__19073__auto___20732){
return (function quiescent$dom$html(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20733 = arguments.length;
var i__15727__auto___20734 = (0);
while(true){
if((i__15727__auto___20734 < len__15726__auto___20733)){
args__15733__auto__.push((arguments[i__15727__auto___20734]));

var G__20735 = (i__15727__auto___20734 + (1));
i__15727__auto___20734 = G__20735;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20732))
;

quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20732){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20732,args__19074__auto__);
});})(ctor__19073__auto___20732))
;

quiescent.dom.html.cljs$lang$maxFixedArity = (0);

quiescent.dom.html.cljs$lang$applyTo = ((function (ctor__19073__auto___20732){
return (function (seq20473){
return quiescent.dom.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20473));
});})(ctor__19073__auto___20732))
;

var ctor__19073__auto___20736 = quiescent.dom.constructor.call(null,"i");
quiescent.dom.i = ((function (ctor__19073__auto___20736){
return (function quiescent$dom$i(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20737 = arguments.length;
var i__15727__auto___20738 = (0);
while(true){
if((i__15727__auto___20738 < len__15726__auto___20737)){
args__15733__auto__.push((arguments[i__15727__auto___20738]));

var G__20739 = (i__15727__auto___20738 + (1));
i__15727__auto___20738 = G__20739;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20736))
;

quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20736){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20736,args__19074__auto__);
});})(ctor__19073__auto___20736))
;

quiescent.dom.i.cljs$lang$maxFixedArity = (0);

quiescent.dom.i.cljs$lang$applyTo = ((function (ctor__19073__auto___20736){
return (function (seq20474){
return quiescent.dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20474));
});})(ctor__19073__auto___20736))
;

var ctor__19073__auto___20740 = quiescent.dom.constructor.call(null,"iframe");
quiescent.dom.iframe = ((function (ctor__19073__auto___20740){
return (function quiescent$dom$iframe(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20741 = arguments.length;
var i__15727__auto___20742 = (0);
while(true){
if((i__15727__auto___20742 < len__15726__auto___20741)){
args__15733__auto__.push((arguments[i__15727__auto___20742]));

var G__20743 = (i__15727__auto___20742 + (1));
i__15727__auto___20742 = G__20743;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20740))
;

quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20740){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20740,args__19074__auto__);
});})(ctor__19073__auto___20740))
;

quiescent.dom.iframe.cljs$lang$maxFixedArity = (0);

quiescent.dom.iframe.cljs$lang$applyTo = ((function (ctor__19073__auto___20740){
return (function (seq20475){
return quiescent.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20475));
});})(ctor__19073__auto___20740))
;

var ctor__19073__auto___20744 = quiescent.dom.constructor.call(null,"img");
quiescent.dom.img = ((function (ctor__19073__auto___20744){
return (function quiescent$dom$img(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20745 = arguments.length;
var i__15727__auto___20746 = (0);
while(true){
if((i__15727__auto___20746 < len__15726__auto___20745)){
args__15733__auto__.push((arguments[i__15727__auto___20746]));

var G__20747 = (i__15727__auto___20746 + (1));
i__15727__auto___20746 = G__20747;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20744))
;

quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20744){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20744,args__19074__auto__);
});})(ctor__19073__auto___20744))
;

quiescent.dom.img.cljs$lang$maxFixedArity = (0);

quiescent.dom.img.cljs$lang$applyTo = ((function (ctor__19073__auto___20744){
return (function (seq20476){
return quiescent.dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20476));
});})(ctor__19073__auto___20744))
;

var ctor__19073__auto___20748 = quiescent.dom.constructor.call(null,"input");
quiescent.dom.input = ((function (ctor__19073__auto___20748){
return (function quiescent$dom$input(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20749 = arguments.length;
var i__15727__auto___20750 = (0);
while(true){
if((i__15727__auto___20750 < len__15726__auto___20749)){
args__15733__auto__.push((arguments[i__15727__auto___20750]));

var G__20751 = (i__15727__auto___20750 + (1));
i__15727__auto___20750 = G__20751;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20748))
;

quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20748){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20748,args__19074__auto__);
});})(ctor__19073__auto___20748))
;

quiescent.dom.input.cljs$lang$maxFixedArity = (0);

quiescent.dom.input.cljs$lang$applyTo = ((function (ctor__19073__auto___20748){
return (function (seq20477){
return quiescent.dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20477));
});})(ctor__19073__auto___20748))
;

var ctor__19073__auto___20752 = quiescent.dom.constructor.call(null,"ins");
quiescent.dom.ins = ((function (ctor__19073__auto___20752){
return (function quiescent$dom$ins(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20753 = arguments.length;
var i__15727__auto___20754 = (0);
while(true){
if((i__15727__auto___20754 < len__15726__auto___20753)){
args__15733__auto__.push((arguments[i__15727__auto___20754]));

var G__20755 = (i__15727__auto___20754 + (1));
i__15727__auto___20754 = G__20755;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20752))
;

quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20752){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20752,args__19074__auto__);
});})(ctor__19073__auto___20752))
;

quiescent.dom.ins.cljs$lang$maxFixedArity = (0);

quiescent.dom.ins.cljs$lang$applyTo = ((function (ctor__19073__auto___20752){
return (function (seq20478){
return quiescent.dom.ins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20478));
});})(ctor__19073__auto___20752))
;

var ctor__19073__auto___20756 = quiescent.dom.constructor.call(null,"kbd");
quiescent.dom.kbd = ((function (ctor__19073__auto___20756){
return (function quiescent$dom$kbd(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20757 = arguments.length;
var i__15727__auto___20758 = (0);
while(true){
if((i__15727__auto___20758 < len__15726__auto___20757)){
args__15733__auto__.push((arguments[i__15727__auto___20758]));

var G__20759 = (i__15727__auto___20758 + (1));
i__15727__auto___20758 = G__20759;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20756))
;

quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20756){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20756,args__19074__auto__);
});})(ctor__19073__auto___20756))
;

quiescent.dom.kbd.cljs$lang$maxFixedArity = (0);

quiescent.dom.kbd.cljs$lang$applyTo = ((function (ctor__19073__auto___20756){
return (function (seq20479){
return quiescent.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20479));
});})(ctor__19073__auto___20756))
;

var ctor__19073__auto___20760 = quiescent.dom.constructor.call(null,"keygen");
quiescent.dom.keygen = ((function (ctor__19073__auto___20760){
return (function quiescent$dom$keygen(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20761 = arguments.length;
var i__15727__auto___20762 = (0);
while(true){
if((i__15727__auto___20762 < len__15726__auto___20761)){
args__15733__auto__.push((arguments[i__15727__auto___20762]));

var G__20763 = (i__15727__auto___20762 + (1));
i__15727__auto___20762 = G__20763;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20760))
;

quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20760){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20760,args__19074__auto__);
});})(ctor__19073__auto___20760))
;

quiescent.dom.keygen.cljs$lang$maxFixedArity = (0);

quiescent.dom.keygen.cljs$lang$applyTo = ((function (ctor__19073__auto___20760){
return (function (seq20480){
return quiescent.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20480));
});})(ctor__19073__auto___20760))
;

var ctor__19073__auto___20764 = quiescent.dom.constructor.call(null,"label");
quiescent.dom.label = ((function (ctor__19073__auto___20764){
return (function quiescent$dom$label(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20765 = arguments.length;
var i__15727__auto___20766 = (0);
while(true){
if((i__15727__auto___20766 < len__15726__auto___20765)){
args__15733__auto__.push((arguments[i__15727__auto___20766]));

var G__20767 = (i__15727__auto___20766 + (1));
i__15727__auto___20766 = G__20767;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20764))
;

quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20764){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20764,args__19074__auto__);
});})(ctor__19073__auto___20764))
;

quiescent.dom.label.cljs$lang$maxFixedArity = (0);

quiescent.dom.label.cljs$lang$applyTo = ((function (ctor__19073__auto___20764){
return (function (seq20481){
return quiescent.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20481));
});})(ctor__19073__auto___20764))
;

var ctor__19073__auto___20768 = quiescent.dom.constructor.call(null,"legend");
quiescent.dom.legend = ((function (ctor__19073__auto___20768){
return (function quiescent$dom$legend(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20769 = arguments.length;
var i__15727__auto___20770 = (0);
while(true){
if((i__15727__auto___20770 < len__15726__auto___20769)){
args__15733__auto__.push((arguments[i__15727__auto___20770]));

var G__20771 = (i__15727__auto___20770 + (1));
i__15727__auto___20770 = G__20771;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20768))
;

quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20768){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20768,args__19074__auto__);
});})(ctor__19073__auto___20768))
;

quiescent.dom.legend.cljs$lang$maxFixedArity = (0);

quiescent.dom.legend.cljs$lang$applyTo = ((function (ctor__19073__auto___20768){
return (function (seq20482){
return quiescent.dom.legend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20482));
});})(ctor__19073__auto___20768))
;

var ctor__19073__auto___20772 = quiescent.dom.constructor.call(null,"li");
quiescent.dom.li = ((function (ctor__19073__auto___20772){
return (function quiescent$dom$li(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20773 = arguments.length;
var i__15727__auto___20774 = (0);
while(true){
if((i__15727__auto___20774 < len__15726__auto___20773)){
args__15733__auto__.push((arguments[i__15727__auto___20774]));

var G__20775 = (i__15727__auto___20774 + (1));
i__15727__auto___20774 = G__20775;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20772))
;

quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20772){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20772,args__19074__auto__);
});})(ctor__19073__auto___20772))
;

quiescent.dom.li.cljs$lang$maxFixedArity = (0);

quiescent.dom.li.cljs$lang$applyTo = ((function (ctor__19073__auto___20772){
return (function (seq20483){
return quiescent.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20483));
});})(ctor__19073__auto___20772))
;

var ctor__19073__auto___20776 = quiescent.dom.constructor.call(null,"link");
quiescent.dom.link = ((function (ctor__19073__auto___20776){
return (function quiescent$dom$link(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20777 = arguments.length;
var i__15727__auto___20778 = (0);
while(true){
if((i__15727__auto___20778 < len__15726__auto___20777)){
args__15733__auto__.push((arguments[i__15727__auto___20778]));

var G__20779 = (i__15727__auto___20778 + (1));
i__15727__auto___20778 = G__20779;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20776))
;

quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20776){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20776,args__19074__auto__);
});})(ctor__19073__auto___20776))
;

quiescent.dom.link.cljs$lang$maxFixedArity = (0);

quiescent.dom.link.cljs$lang$applyTo = ((function (ctor__19073__auto___20776){
return (function (seq20484){
return quiescent.dom.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20484));
});})(ctor__19073__auto___20776))
;

var ctor__19073__auto___20780 = quiescent.dom.constructor.call(null,"main");
quiescent.dom.main = ((function (ctor__19073__auto___20780){
return (function quiescent$dom$main(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20781 = arguments.length;
var i__15727__auto___20782 = (0);
while(true){
if((i__15727__auto___20782 < len__15726__auto___20781)){
args__15733__auto__.push((arguments[i__15727__auto___20782]));

var G__20783 = (i__15727__auto___20782 + (1));
i__15727__auto___20782 = G__20783;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20780))
;

quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20780){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20780,args__19074__auto__);
});})(ctor__19073__auto___20780))
;

quiescent.dom.main.cljs$lang$maxFixedArity = (0);

quiescent.dom.main.cljs$lang$applyTo = ((function (ctor__19073__auto___20780){
return (function (seq20485){
return quiescent.dom.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20485));
});})(ctor__19073__auto___20780))
;

var ctor__19073__auto___20784 = quiescent.dom.constructor.call(null,"map");
quiescent.dom.map = ((function (ctor__19073__auto___20784){
return (function quiescent$dom$map(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20785 = arguments.length;
var i__15727__auto___20786 = (0);
while(true){
if((i__15727__auto___20786 < len__15726__auto___20785)){
args__15733__auto__.push((arguments[i__15727__auto___20786]));

var G__20787 = (i__15727__auto___20786 + (1));
i__15727__auto___20786 = G__20787;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20784))
;

quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20784){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20784,args__19074__auto__);
});})(ctor__19073__auto___20784))
;

quiescent.dom.map.cljs$lang$maxFixedArity = (0);

quiescent.dom.map.cljs$lang$applyTo = ((function (ctor__19073__auto___20784){
return (function (seq20486){
return quiescent.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20486));
});})(ctor__19073__auto___20784))
;

var ctor__19073__auto___20788 = quiescent.dom.constructor.call(null,"mark");
quiescent.dom.mark = ((function (ctor__19073__auto___20788){
return (function quiescent$dom$mark(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20789 = arguments.length;
var i__15727__auto___20790 = (0);
while(true){
if((i__15727__auto___20790 < len__15726__auto___20789)){
args__15733__auto__.push((arguments[i__15727__auto___20790]));

var G__20791 = (i__15727__auto___20790 + (1));
i__15727__auto___20790 = G__20791;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20788))
;

quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20788){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20788,args__19074__auto__);
});})(ctor__19073__auto___20788))
;

quiescent.dom.mark.cljs$lang$maxFixedArity = (0);

quiescent.dom.mark.cljs$lang$applyTo = ((function (ctor__19073__auto___20788){
return (function (seq20487){
return quiescent.dom.mark.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20487));
});})(ctor__19073__auto___20788))
;

var ctor__19073__auto___20792 = quiescent.dom.constructor.call(null,"menu");
quiescent.dom.menu = ((function (ctor__19073__auto___20792){
return (function quiescent$dom$menu(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20793 = arguments.length;
var i__15727__auto___20794 = (0);
while(true){
if((i__15727__auto___20794 < len__15726__auto___20793)){
args__15733__auto__.push((arguments[i__15727__auto___20794]));

var G__20795 = (i__15727__auto___20794 + (1));
i__15727__auto___20794 = G__20795;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20792))
;

quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20792){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20792,args__19074__auto__);
});})(ctor__19073__auto___20792))
;

quiescent.dom.menu.cljs$lang$maxFixedArity = (0);

quiescent.dom.menu.cljs$lang$applyTo = ((function (ctor__19073__auto___20792){
return (function (seq20488){
return quiescent.dom.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20488));
});})(ctor__19073__auto___20792))
;

var ctor__19073__auto___20796 = quiescent.dom.constructor.call(null,"menuitem");
quiescent.dom.menuitem = ((function (ctor__19073__auto___20796){
return (function quiescent$dom$menuitem(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20797 = arguments.length;
var i__15727__auto___20798 = (0);
while(true){
if((i__15727__auto___20798 < len__15726__auto___20797)){
args__15733__auto__.push((arguments[i__15727__auto___20798]));

var G__20799 = (i__15727__auto___20798 + (1));
i__15727__auto___20798 = G__20799;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20796))
;

quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20796){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20796,args__19074__auto__);
});})(ctor__19073__auto___20796))
;

quiescent.dom.menuitem.cljs$lang$maxFixedArity = (0);

quiescent.dom.menuitem.cljs$lang$applyTo = ((function (ctor__19073__auto___20796){
return (function (seq20489){
return quiescent.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20489));
});})(ctor__19073__auto___20796))
;

var ctor__19073__auto___20800 = quiescent.dom.constructor.call(null,"meta");
quiescent.dom.meta = ((function (ctor__19073__auto___20800){
return (function quiescent$dom$meta(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20801 = arguments.length;
var i__15727__auto___20802 = (0);
while(true){
if((i__15727__auto___20802 < len__15726__auto___20801)){
args__15733__auto__.push((arguments[i__15727__auto___20802]));

var G__20803 = (i__15727__auto___20802 + (1));
i__15727__auto___20802 = G__20803;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20800))
;

quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20800){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20800,args__19074__auto__);
});})(ctor__19073__auto___20800))
;

quiescent.dom.meta.cljs$lang$maxFixedArity = (0);

quiescent.dom.meta.cljs$lang$applyTo = ((function (ctor__19073__auto___20800){
return (function (seq20490){
return quiescent.dom.meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20490));
});})(ctor__19073__auto___20800))
;

var ctor__19073__auto___20804 = quiescent.dom.constructor.call(null,"meter");
quiescent.dom.meter = ((function (ctor__19073__auto___20804){
return (function quiescent$dom$meter(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20805 = arguments.length;
var i__15727__auto___20806 = (0);
while(true){
if((i__15727__auto___20806 < len__15726__auto___20805)){
args__15733__auto__.push((arguments[i__15727__auto___20806]));

var G__20807 = (i__15727__auto___20806 + (1));
i__15727__auto___20806 = G__20807;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20804))
;

quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20804){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20804,args__19074__auto__);
});})(ctor__19073__auto___20804))
;

quiescent.dom.meter.cljs$lang$maxFixedArity = (0);

quiescent.dom.meter.cljs$lang$applyTo = ((function (ctor__19073__auto___20804){
return (function (seq20491){
return quiescent.dom.meter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20491));
});})(ctor__19073__auto___20804))
;

var ctor__19073__auto___20808 = quiescent.dom.constructor.call(null,"nav");
quiescent.dom.nav = ((function (ctor__19073__auto___20808){
return (function quiescent$dom$nav(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20809 = arguments.length;
var i__15727__auto___20810 = (0);
while(true){
if((i__15727__auto___20810 < len__15726__auto___20809)){
args__15733__auto__.push((arguments[i__15727__auto___20810]));

var G__20811 = (i__15727__auto___20810 + (1));
i__15727__auto___20810 = G__20811;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20808))
;

quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20808){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20808,args__19074__auto__);
});})(ctor__19073__auto___20808))
;

quiescent.dom.nav.cljs$lang$maxFixedArity = (0);

quiescent.dom.nav.cljs$lang$applyTo = ((function (ctor__19073__auto___20808){
return (function (seq20492){
return quiescent.dom.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20492));
});})(ctor__19073__auto___20808))
;

var ctor__19073__auto___20812 = quiescent.dom.constructor.call(null,"noscript");
quiescent.dom.noscript = ((function (ctor__19073__auto___20812){
return (function quiescent$dom$noscript(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20813 = arguments.length;
var i__15727__auto___20814 = (0);
while(true){
if((i__15727__auto___20814 < len__15726__auto___20813)){
args__15733__auto__.push((arguments[i__15727__auto___20814]));

var G__20815 = (i__15727__auto___20814 + (1));
i__15727__auto___20814 = G__20815;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20812))
;

quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20812){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20812,args__19074__auto__);
});})(ctor__19073__auto___20812))
;

quiescent.dom.noscript.cljs$lang$maxFixedArity = (0);

quiescent.dom.noscript.cljs$lang$applyTo = ((function (ctor__19073__auto___20812){
return (function (seq20493){
return quiescent.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20493));
});})(ctor__19073__auto___20812))
;

var ctor__19073__auto___20816 = quiescent.dom.constructor.call(null,"object");
quiescent.dom.object = ((function (ctor__19073__auto___20816){
return (function quiescent$dom$object(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20817 = arguments.length;
var i__15727__auto___20818 = (0);
while(true){
if((i__15727__auto___20818 < len__15726__auto___20817)){
args__15733__auto__.push((arguments[i__15727__auto___20818]));

var G__20819 = (i__15727__auto___20818 + (1));
i__15727__auto___20818 = G__20819;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20816))
;

quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20816){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20816,args__19074__auto__);
});})(ctor__19073__auto___20816))
;

quiescent.dom.object.cljs$lang$maxFixedArity = (0);

quiescent.dom.object.cljs$lang$applyTo = ((function (ctor__19073__auto___20816){
return (function (seq20494){
return quiescent.dom.object.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20494));
});})(ctor__19073__auto___20816))
;

var ctor__19073__auto___20820 = quiescent.dom.constructor.call(null,"ol");
quiescent.dom.ol = ((function (ctor__19073__auto___20820){
return (function quiescent$dom$ol(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20821 = arguments.length;
var i__15727__auto___20822 = (0);
while(true){
if((i__15727__auto___20822 < len__15726__auto___20821)){
args__15733__auto__.push((arguments[i__15727__auto___20822]));

var G__20823 = (i__15727__auto___20822 + (1));
i__15727__auto___20822 = G__20823;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20820))
;

quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20820){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20820,args__19074__auto__);
});})(ctor__19073__auto___20820))
;

quiescent.dom.ol.cljs$lang$maxFixedArity = (0);

quiescent.dom.ol.cljs$lang$applyTo = ((function (ctor__19073__auto___20820){
return (function (seq20495){
return quiescent.dom.ol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20495));
});})(ctor__19073__auto___20820))
;

var ctor__19073__auto___20824 = quiescent.dom.constructor.call(null,"optgroup");
quiescent.dom.optgroup = ((function (ctor__19073__auto___20824){
return (function quiescent$dom$optgroup(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20825 = arguments.length;
var i__15727__auto___20826 = (0);
while(true){
if((i__15727__auto___20826 < len__15726__auto___20825)){
args__15733__auto__.push((arguments[i__15727__auto___20826]));

var G__20827 = (i__15727__auto___20826 + (1));
i__15727__auto___20826 = G__20827;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20824))
;

quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20824){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20824,args__19074__auto__);
});})(ctor__19073__auto___20824))
;

quiescent.dom.optgroup.cljs$lang$maxFixedArity = (0);

quiescent.dom.optgroup.cljs$lang$applyTo = ((function (ctor__19073__auto___20824){
return (function (seq20496){
return quiescent.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20496));
});})(ctor__19073__auto___20824))
;

var ctor__19073__auto___20828 = quiescent.dom.constructor.call(null,"option");
quiescent.dom.option = ((function (ctor__19073__auto___20828){
return (function quiescent$dom$option(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20829 = arguments.length;
var i__15727__auto___20830 = (0);
while(true){
if((i__15727__auto___20830 < len__15726__auto___20829)){
args__15733__auto__.push((arguments[i__15727__auto___20830]));

var G__20831 = (i__15727__auto___20830 + (1));
i__15727__auto___20830 = G__20831;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20828))
;

quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20828){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20828,args__19074__auto__);
});})(ctor__19073__auto___20828))
;

quiescent.dom.option.cljs$lang$maxFixedArity = (0);

quiescent.dom.option.cljs$lang$applyTo = ((function (ctor__19073__auto___20828){
return (function (seq20497){
return quiescent.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20497));
});})(ctor__19073__auto___20828))
;

var ctor__19073__auto___20832 = quiescent.dom.constructor.call(null,"output");
quiescent.dom.output = ((function (ctor__19073__auto___20832){
return (function quiescent$dom$output(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20833 = arguments.length;
var i__15727__auto___20834 = (0);
while(true){
if((i__15727__auto___20834 < len__15726__auto___20833)){
args__15733__auto__.push((arguments[i__15727__auto___20834]));

var G__20835 = (i__15727__auto___20834 + (1));
i__15727__auto___20834 = G__20835;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20832))
;

quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20832){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20832,args__19074__auto__);
});})(ctor__19073__auto___20832))
;

quiescent.dom.output.cljs$lang$maxFixedArity = (0);

quiescent.dom.output.cljs$lang$applyTo = ((function (ctor__19073__auto___20832){
return (function (seq20498){
return quiescent.dom.output.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20498));
});})(ctor__19073__auto___20832))
;

var ctor__19073__auto___20836 = quiescent.dom.constructor.call(null,"p");
quiescent.dom.p = ((function (ctor__19073__auto___20836){
return (function quiescent$dom$p(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20837 = arguments.length;
var i__15727__auto___20838 = (0);
while(true){
if((i__15727__auto___20838 < len__15726__auto___20837)){
args__15733__auto__.push((arguments[i__15727__auto___20838]));

var G__20839 = (i__15727__auto___20838 + (1));
i__15727__auto___20838 = G__20839;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20836))
;

quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20836){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20836,args__19074__auto__);
});})(ctor__19073__auto___20836))
;

quiescent.dom.p.cljs$lang$maxFixedArity = (0);

quiescent.dom.p.cljs$lang$applyTo = ((function (ctor__19073__auto___20836){
return (function (seq20499){
return quiescent.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20499));
});})(ctor__19073__auto___20836))
;

var ctor__19073__auto___20840 = quiescent.dom.constructor.call(null,"param");
quiescent.dom.param = ((function (ctor__19073__auto___20840){
return (function quiescent$dom$param(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20841 = arguments.length;
var i__15727__auto___20842 = (0);
while(true){
if((i__15727__auto___20842 < len__15726__auto___20841)){
args__15733__auto__.push((arguments[i__15727__auto___20842]));

var G__20843 = (i__15727__auto___20842 + (1));
i__15727__auto___20842 = G__20843;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20840))
;

quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20840){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20840,args__19074__auto__);
});})(ctor__19073__auto___20840))
;

quiescent.dom.param.cljs$lang$maxFixedArity = (0);

quiescent.dom.param.cljs$lang$applyTo = ((function (ctor__19073__auto___20840){
return (function (seq20500){
return quiescent.dom.param.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20500));
});})(ctor__19073__auto___20840))
;

var ctor__19073__auto___20844 = quiescent.dom.constructor.call(null,"pre");
quiescent.dom.pre = ((function (ctor__19073__auto___20844){
return (function quiescent$dom$pre(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20845 = arguments.length;
var i__15727__auto___20846 = (0);
while(true){
if((i__15727__auto___20846 < len__15726__auto___20845)){
args__15733__auto__.push((arguments[i__15727__auto___20846]));

var G__20847 = (i__15727__auto___20846 + (1));
i__15727__auto___20846 = G__20847;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20844))
;

quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20844){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20844,args__19074__auto__);
});})(ctor__19073__auto___20844))
;

quiescent.dom.pre.cljs$lang$maxFixedArity = (0);

quiescent.dom.pre.cljs$lang$applyTo = ((function (ctor__19073__auto___20844){
return (function (seq20501){
return quiescent.dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20501));
});})(ctor__19073__auto___20844))
;

var ctor__19073__auto___20848 = quiescent.dom.constructor.call(null,"progress");
quiescent.dom.progress = ((function (ctor__19073__auto___20848){
return (function quiescent$dom$progress(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20849 = arguments.length;
var i__15727__auto___20850 = (0);
while(true){
if((i__15727__auto___20850 < len__15726__auto___20849)){
args__15733__auto__.push((arguments[i__15727__auto___20850]));

var G__20851 = (i__15727__auto___20850 + (1));
i__15727__auto___20850 = G__20851;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20848))
;

quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20848){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20848,args__19074__auto__);
});})(ctor__19073__auto___20848))
;

quiescent.dom.progress.cljs$lang$maxFixedArity = (0);

quiescent.dom.progress.cljs$lang$applyTo = ((function (ctor__19073__auto___20848){
return (function (seq20502){
return quiescent.dom.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20502));
});})(ctor__19073__auto___20848))
;

var ctor__19073__auto___20852 = quiescent.dom.constructor.call(null,"q");
quiescent.dom.q = ((function (ctor__19073__auto___20852){
return (function quiescent$dom$q(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20853 = arguments.length;
var i__15727__auto___20854 = (0);
while(true){
if((i__15727__auto___20854 < len__15726__auto___20853)){
args__15733__auto__.push((arguments[i__15727__auto___20854]));

var G__20855 = (i__15727__auto___20854 + (1));
i__15727__auto___20854 = G__20855;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20852))
;

quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20852){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20852,args__19074__auto__);
});})(ctor__19073__auto___20852))
;

quiescent.dom.q.cljs$lang$maxFixedArity = (0);

quiescent.dom.q.cljs$lang$applyTo = ((function (ctor__19073__auto___20852){
return (function (seq20503){
return quiescent.dom.q.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20503));
});})(ctor__19073__auto___20852))
;

var ctor__19073__auto___20856 = quiescent.dom.constructor.call(null,"rp");
quiescent.dom.rp = ((function (ctor__19073__auto___20856){
return (function quiescent$dom$rp(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20857 = arguments.length;
var i__15727__auto___20858 = (0);
while(true){
if((i__15727__auto___20858 < len__15726__auto___20857)){
args__15733__auto__.push((arguments[i__15727__auto___20858]));

var G__20859 = (i__15727__auto___20858 + (1));
i__15727__auto___20858 = G__20859;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20856))
;

quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20856){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20856,args__19074__auto__);
});})(ctor__19073__auto___20856))
;

quiescent.dom.rp.cljs$lang$maxFixedArity = (0);

quiescent.dom.rp.cljs$lang$applyTo = ((function (ctor__19073__auto___20856){
return (function (seq20504){
return quiescent.dom.rp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20504));
});})(ctor__19073__auto___20856))
;

var ctor__19073__auto___20860 = quiescent.dom.constructor.call(null,"rt");
quiescent.dom.rt = ((function (ctor__19073__auto___20860){
return (function quiescent$dom$rt(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20861 = arguments.length;
var i__15727__auto___20862 = (0);
while(true){
if((i__15727__auto___20862 < len__15726__auto___20861)){
args__15733__auto__.push((arguments[i__15727__auto___20862]));

var G__20863 = (i__15727__auto___20862 + (1));
i__15727__auto___20862 = G__20863;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20860))
;

quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20860){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20860,args__19074__auto__);
});})(ctor__19073__auto___20860))
;

quiescent.dom.rt.cljs$lang$maxFixedArity = (0);

quiescent.dom.rt.cljs$lang$applyTo = ((function (ctor__19073__auto___20860){
return (function (seq20505){
return quiescent.dom.rt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20505));
});})(ctor__19073__auto___20860))
;

var ctor__19073__auto___20864 = quiescent.dom.constructor.call(null,"ruby");
quiescent.dom.ruby = ((function (ctor__19073__auto___20864){
return (function quiescent$dom$ruby(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20865 = arguments.length;
var i__15727__auto___20866 = (0);
while(true){
if((i__15727__auto___20866 < len__15726__auto___20865)){
args__15733__auto__.push((arguments[i__15727__auto___20866]));

var G__20867 = (i__15727__auto___20866 + (1));
i__15727__auto___20866 = G__20867;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20864))
;

quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20864){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20864,args__19074__auto__);
});})(ctor__19073__auto___20864))
;

quiescent.dom.ruby.cljs$lang$maxFixedArity = (0);

quiescent.dom.ruby.cljs$lang$applyTo = ((function (ctor__19073__auto___20864){
return (function (seq20506){
return quiescent.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20506));
});})(ctor__19073__auto___20864))
;

var ctor__19073__auto___20868 = quiescent.dom.constructor.call(null,"s");
quiescent.dom.s = ((function (ctor__19073__auto___20868){
return (function quiescent$dom$s(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20869 = arguments.length;
var i__15727__auto___20870 = (0);
while(true){
if((i__15727__auto___20870 < len__15726__auto___20869)){
args__15733__auto__.push((arguments[i__15727__auto___20870]));

var G__20871 = (i__15727__auto___20870 + (1));
i__15727__auto___20870 = G__20871;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20868))
;

quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20868){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20868,args__19074__auto__);
});})(ctor__19073__auto___20868))
;

quiescent.dom.s.cljs$lang$maxFixedArity = (0);

quiescent.dom.s.cljs$lang$applyTo = ((function (ctor__19073__auto___20868){
return (function (seq20507){
return quiescent.dom.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20507));
});})(ctor__19073__auto___20868))
;

var ctor__19073__auto___20872 = quiescent.dom.constructor.call(null,"samp");
quiescent.dom.samp = ((function (ctor__19073__auto___20872){
return (function quiescent$dom$samp(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20873 = arguments.length;
var i__15727__auto___20874 = (0);
while(true){
if((i__15727__auto___20874 < len__15726__auto___20873)){
args__15733__auto__.push((arguments[i__15727__auto___20874]));

var G__20875 = (i__15727__auto___20874 + (1));
i__15727__auto___20874 = G__20875;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20872))
;

quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20872){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20872,args__19074__auto__);
});})(ctor__19073__auto___20872))
;

quiescent.dom.samp.cljs$lang$maxFixedArity = (0);

quiescent.dom.samp.cljs$lang$applyTo = ((function (ctor__19073__auto___20872){
return (function (seq20508){
return quiescent.dom.samp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20508));
});})(ctor__19073__auto___20872))
;

var ctor__19073__auto___20876 = quiescent.dom.constructor.call(null,"script");
quiescent.dom.script = ((function (ctor__19073__auto___20876){
return (function quiescent$dom$script(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20877 = arguments.length;
var i__15727__auto___20878 = (0);
while(true){
if((i__15727__auto___20878 < len__15726__auto___20877)){
args__15733__auto__.push((arguments[i__15727__auto___20878]));

var G__20879 = (i__15727__auto___20878 + (1));
i__15727__auto___20878 = G__20879;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20876))
;

quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20876){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20876,args__19074__auto__);
});})(ctor__19073__auto___20876))
;

quiescent.dom.script.cljs$lang$maxFixedArity = (0);

quiescent.dom.script.cljs$lang$applyTo = ((function (ctor__19073__auto___20876){
return (function (seq20509){
return quiescent.dom.script.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20509));
});})(ctor__19073__auto___20876))
;

var ctor__19073__auto___20880 = quiescent.dom.constructor.call(null,"section");
quiescent.dom.section = ((function (ctor__19073__auto___20880){
return (function quiescent$dom$section(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20881 = arguments.length;
var i__15727__auto___20882 = (0);
while(true){
if((i__15727__auto___20882 < len__15726__auto___20881)){
args__15733__auto__.push((arguments[i__15727__auto___20882]));

var G__20883 = (i__15727__auto___20882 + (1));
i__15727__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20880))
;

quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20880){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20880,args__19074__auto__);
});})(ctor__19073__auto___20880))
;

quiescent.dom.section.cljs$lang$maxFixedArity = (0);

quiescent.dom.section.cljs$lang$applyTo = ((function (ctor__19073__auto___20880){
return (function (seq20510){
return quiescent.dom.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20510));
});})(ctor__19073__auto___20880))
;

var ctor__19073__auto___20884 = quiescent.dom.constructor.call(null,"select");
quiescent.dom.select = ((function (ctor__19073__auto___20884){
return (function quiescent$dom$select(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20885 = arguments.length;
var i__15727__auto___20886 = (0);
while(true){
if((i__15727__auto___20886 < len__15726__auto___20885)){
args__15733__auto__.push((arguments[i__15727__auto___20886]));

var G__20887 = (i__15727__auto___20886 + (1));
i__15727__auto___20886 = G__20887;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20884))
;

quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20884){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20884,args__19074__auto__);
});})(ctor__19073__auto___20884))
;

quiescent.dom.select.cljs$lang$maxFixedArity = (0);

quiescent.dom.select.cljs$lang$applyTo = ((function (ctor__19073__auto___20884){
return (function (seq20511){
return quiescent.dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20511));
});})(ctor__19073__auto___20884))
;

var ctor__19073__auto___20888 = quiescent.dom.constructor.call(null,"small");
quiescent.dom.small = ((function (ctor__19073__auto___20888){
return (function quiescent$dom$small(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20889 = arguments.length;
var i__15727__auto___20890 = (0);
while(true){
if((i__15727__auto___20890 < len__15726__auto___20889)){
args__15733__auto__.push((arguments[i__15727__auto___20890]));

var G__20891 = (i__15727__auto___20890 + (1));
i__15727__auto___20890 = G__20891;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20888))
;

quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20888){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20888,args__19074__auto__);
});})(ctor__19073__auto___20888))
;

quiescent.dom.small.cljs$lang$maxFixedArity = (0);

quiescent.dom.small.cljs$lang$applyTo = ((function (ctor__19073__auto___20888){
return (function (seq20512){
return quiescent.dom.small.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20512));
});})(ctor__19073__auto___20888))
;

var ctor__19073__auto___20892 = quiescent.dom.constructor.call(null,"source");
quiescent.dom.source = ((function (ctor__19073__auto___20892){
return (function quiescent$dom$source(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20893 = arguments.length;
var i__15727__auto___20894 = (0);
while(true){
if((i__15727__auto___20894 < len__15726__auto___20893)){
args__15733__auto__.push((arguments[i__15727__auto___20894]));

var G__20895 = (i__15727__auto___20894 + (1));
i__15727__auto___20894 = G__20895;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20892))
;

quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20892){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20892,args__19074__auto__);
});})(ctor__19073__auto___20892))
;

quiescent.dom.source.cljs$lang$maxFixedArity = (0);

quiescent.dom.source.cljs$lang$applyTo = ((function (ctor__19073__auto___20892){
return (function (seq20513){
return quiescent.dom.source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20513));
});})(ctor__19073__auto___20892))
;

var ctor__19073__auto___20896 = quiescent.dom.constructor.call(null,"span");
quiescent.dom.span = ((function (ctor__19073__auto___20896){
return (function quiescent$dom$span(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20897 = arguments.length;
var i__15727__auto___20898 = (0);
while(true){
if((i__15727__auto___20898 < len__15726__auto___20897)){
args__15733__auto__.push((arguments[i__15727__auto___20898]));

var G__20899 = (i__15727__auto___20898 + (1));
i__15727__auto___20898 = G__20899;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20896))
;

quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20896){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20896,args__19074__auto__);
});})(ctor__19073__auto___20896))
;

quiescent.dom.span.cljs$lang$maxFixedArity = (0);

quiescent.dom.span.cljs$lang$applyTo = ((function (ctor__19073__auto___20896){
return (function (seq20514){
return quiescent.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20514));
});})(ctor__19073__auto___20896))
;

var ctor__19073__auto___20900 = quiescent.dom.constructor.call(null,"strong");
quiescent.dom.strong = ((function (ctor__19073__auto___20900){
return (function quiescent$dom$strong(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20901 = arguments.length;
var i__15727__auto___20902 = (0);
while(true){
if((i__15727__auto___20902 < len__15726__auto___20901)){
args__15733__auto__.push((arguments[i__15727__auto___20902]));

var G__20903 = (i__15727__auto___20902 + (1));
i__15727__auto___20902 = G__20903;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20900))
;

quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20900){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20900,args__19074__auto__);
});})(ctor__19073__auto___20900))
;

quiescent.dom.strong.cljs$lang$maxFixedArity = (0);

quiescent.dom.strong.cljs$lang$applyTo = ((function (ctor__19073__auto___20900){
return (function (seq20515){
return quiescent.dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20515));
});})(ctor__19073__auto___20900))
;

var ctor__19073__auto___20904 = quiescent.dom.constructor.call(null,"style");
quiescent.dom.style = ((function (ctor__19073__auto___20904){
return (function quiescent$dom$style(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20905 = arguments.length;
var i__15727__auto___20906 = (0);
while(true){
if((i__15727__auto___20906 < len__15726__auto___20905)){
args__15733__auto__.push((arguments[i__15727__auto___20906]));

var G__20907 = (i__15727__auto___20906 + (1));
i__15727__auto___20906 = G__20907;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20904))
;

quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20904){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20904,args__19074__auto__);
});})(ctor__19073__auto___20904))
;

quiescent.dom.style.cljs$lang$maxFixedArity = (0);

quiescent.dom.style.cljs$lang$applyTo = ((function (ctor__19073__auto___20904){
return (function (seq20516){
return quiescent.dom.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20516));
});})(ctor__19073__auto___20904))
;

var ctor__19073__auto___20908 = quiescent.dom.constructor.call(null,"sub");
quiescent.dom.sub = ((function (ctor__19073__auto___20908){
return (function quiescent$dom$sub(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20909 = arguments.length;
var i__15727__auto___20910 = (0);
while(true){
if((i__15727__auto___20910 < len__15726__auto___20909)){
args__15733__auto__.push((arguments[i__15727__auto___20910]));

var G__20911 = (i__15727__auto___20910 + (1));
i__15727__auto___20910 = G__20911;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20908))
;

quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20908){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20908,args__19074__auto__);
});})(ctor__19073__auto___20908))
;

quiescent.dom.sub.cljs$lang$maxFixedArity = (0);

quiescent.dom.sub.cljs$lang$applyTo = ((function (ctor__19073__auto___20908){
return (function (seq20517){
return quiescent.dom.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20517));
});})(ctor__19073__auto___20908))
;

var ctor__19073__auto___20912 = quiescent.dom.constructor.call(null,"summary");
quiescent.dom.summary = ((function (ctor__19073__auto___20912){
return (function quiescent$dom$summary(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20913 = arguments.length;
var i__15727__auto___20914 = (0);
while(true){
if((i__15727__auto___20914 < len__15726__auto___20913)){
args__15733__auto__.push((arguments[i__15727__auto___20914]));

var G__20915 = (i__15727__auto___20914 + (1));
i__15727__auto___20914 = G__20915;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20912))
;

quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20912){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20912,args__19074__auto__);
});})(ctor__19073__auto___20912))
;

quiescent.dom.summary.cljs$lang$maxFixedArity = (0);

quiescent.dom.summary.cljs$lang$applyTo = ((function (ctor__19073__auto___20912){
return (function (seq20518){
return quiescent.dom.summary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20518));
});})(ctor__19073__auto___20912))
;

var ctor__19073__auto___20916 = quiescent.dom.constructor.call(null,"sup");
quiescent.dom.sup = ((function (ctor__19073__auto___20916){
return (function quiescent$dom$sup(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20917 = arguments.length;
var i__15727__auto___20918 = (0);
while(true){
if((i__15727__auto___20918 < len__15726__auto___20917)){
args__15733__auto__.push((arguments[i__15727__auto___20918]));

var G__20919 = (i__15727__auto___20918 + (1));
i__15727__auto___20918 = G__20919;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20916))
;

quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20916){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20916,args__19074__auto__);
});})(ctor__19073__auto___20916))
;

quiescent.dom.sup.cljs$lang$maxFixedArity = (0);

quiescent.dom.sup.cljs$lang$applyTo = ((function (ctor__19073__auto___20916){
return (function (seq20519){
return quiescent.dom.sup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20519));
});})(ctor__19073__auto___20916))
;

var ctor__19073__auto___20920 = quiescent.dom.constructor.call(null,"table");
quiescent.dom.table = ((function (ctor__19073__auto___20920){
return (function quiescent$dom$table(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20921 = arguments.length;
var i__15727__auto___20922 = (0);
while(true){
if((i__15727__auto___20922 < len__15726__auto___20921)){
args__15733__auto__.push((arguments[i__15727__auto___20922]));

var G__20923 = (i__15727__auto___20922 + (1));
i__15727__auto___20922 = G__20923;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20920))
;

quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20920){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20920,args__19074__auto__);
});})(ctor__19073__auto___20920))
;

quiescent.dom.table.cljs$lang$maxFixedArity = (0);

quiescent.dom.table.cljs$lang$applyTo = ((function (ctor__19073__auto___20920){
return (function (seq20520){
return quiescent.dom.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20520));
});})(ctor__19073__auto___20920))
;

var ctor__19073__auto___20924 = quiescent.dom.constructor.call(null,"tbody");
quiescent.dom.tbody = ((function (ctor__19073__auto___20924){
return (function quiescent$dom$tbody(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20925 = arguments.length;
var i__15727__auto___20926 = (0);
while(true){
if((i__15727__auto___20926 < len__15726__auto___20925)){
args__15733__auto__.push((arguments[i__15727__auto___20926]));

var G__20927 = (i__15727__auto___20926 + (1));
i__15727__auto___20926 = G__20927;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20924))
;

quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20924){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20924,args__19074__auto__);
});})(ctor__19073__auto___20924))
;

quiescent.dom.tbody.cljs$lang$maxFixedArity = (0);

quiescent.dom.tbody.cljs$lang$applyTo = ((function (ctor__19073__auto___20924){
return (function (seq20521){
return quiescent.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20521));
});})(ctor__19073__auto___20924))
;

var ctor__19073__auto___20928 = quiescent.dom.constructor.call(null,"td");
quiescent.dom.td = ((function (ctor__19073__auto___20928){
return (function quiescent$dom$td(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20929 = arguments.length;
var i__15727__auto___20930 = (0);
while(true){
if((i__15727__auto___20930 < len__15726__auto___20929)){
args__15733__auto__.push((arguments[i__15727__auto___20930]));

var G__20931 = (i__15727__auto___20930 + (1));
i__15727__auto___20930 = G__20931;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20928))
;

quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20928){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20928,args__19074__auto__);
});})(ctor__19073__auto___20928))
;

quiescent.dom.td.cljs$lang$maxFixedArity = (0);

quiescent.dom.td.cljs$lang$applyTo = ((function (ctor__19073__auto___20928){
return (function (seq20522){
return quiescent.dom.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20522));
});})(ctor__19073__auto___20928))
;

var ctor__19073__auto___20932 = quiescent.dom.constructor.call(null,"textarea");
quiescent.dom.textarea = ((function (ctor__19073__auto___20932){
return (function quiescent$dom$textarea(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20933 = arguments.length;
var i__15727__auto___20934 = (0);
while(true){
if((i__15727__auto___20934 < len__15726__auto___20933)){
args__15733__auto__.push((arguments[i__15727__auto___20934]));

var G__20935 = (i__15727__auto___20934 + (1));
i__15727__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20932))
;

quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20932){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20932,args__19074__auto__);
});})(ctor__19073__auto___20932))
;

quiescent.dom.textarea.cljs$lang$maxFixedArity = (0);

quiescent.dom.textarea.cljs$lang$applyTo = ((function (ctor__19073__auto___20932){
return (function (seq20523){
return quiescent.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20523));
});})(ctor__19073__auto___20932))
;

var ctor__19073__auto___20936 = quiescent.dom.constructor.call(null,"tfoot");
quiescent.dom.tfoot = ((function (ctor__19073__auto___20936){
return (function quiescent$dom$tfoot(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20937 = arguments.length;
var i__15727__auto___20938 = (0);
while(true){
if((i__15727__auto___20938 < len__15726__auto___20937)){
args__15733__auto__.push((arguments[i__15727__auto___20938]));

var G__20939 = (i__15727__auto___20938 + (1));
i__15727__auto___20938 = G__20939;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20936))
;

quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20936){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20936,args__19074__auto__);
});})(ctor__19073__auto___20936))
;

quiescent.dom.tfoot.cljs$lang$maxFixedArity = (0);

quiescent.dom.tfoot.cljs$lang$applyTo = ((function (ctor__19073__auto___20936){
return (function (seq20524){
return quiescent.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20524));
});})(ctor__19073__auto___20936))
;

var ctor__19073__auto___20940 = quiescent.dom.constructor.call(null,"th");
quiescent.dom.th = ((function (ctor__19073__auto___20940){
return (function quiescent$dom$th(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20941 = arguments.length;
var i__15727__auto___20942 = (0);
while(true){
if((i__15727__auto___20942 < len__15726__auto___20941)){
args__15733__auto__.push((arguments[i__15727__auto___20942]));

var G__20943 = (i__15727__auto___20942 + (1));
i__15727__auto___20942 = G__20943;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20940))
;

quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20940){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20940,args__19074__auto__);
});})(ctor__19073__auto___20940))
;

quiescent.dom.th.cljs$lang$maxFixedArity = (0);

quiescent.dom.th.cljs$lang$applyTo = ((function (ctor__19073__auto___20940){
return (function (seq20525){
return quiescent.dom.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20525));
});})(ctor__19073__auto___20940))
;

var ctor__19073__auto___20944 = quiescent.dom.constructor.call(null,"thead");
quiescent.dom.thead = ((function (ctor__19073__auto___20944){
return (function quiescent$dom$thead(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20945 = arguments.length;
var i__15727__auto___20946 = (0);
while(true){
if((i__15727__auto___20946 < len__15726__auto___20945)){
args__15733__auto__.push((arguments[i__15727__auto___20946]));

var G__20947 = (i__15727__auto___20946 + (1));
i__15727__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20944))
;

quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20944){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20944,args__19074__auto__);
});})(ctor__19073__auto___20944))
;

quiescent.dom.thead.cljs$lang$maxFixedArity = (0);

quiescent.dom.thead.cljs$lang$applyTo = ((function (ctor__19073__auto___20944){
return (function (seq20526){
return quiescent.dom.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20526));
});})(ctor__19073__auto___20944))
;

var ctor__19073__auto___20948 = quiescent.dom.constructor.call(null,"time");
quiescent.dom.time = ((function (ctor__19073__auto___20948){
return (function quiescent$dom$time(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20949 = arguments.length;
var i__15727__auto___20950 = (0);
while(true){
if((i__15727__auto___20950 < len__15726__auto___20949)){
args__15733__auto__.push((arguments[i__15727__auto___20950]));

var G__20951 = (i__15727__auto___20950 + (1));
i__15727__auto___20950 = G__20951;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20948))
;

quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20948){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20948,args__19074__auto__);
});})(ctor__19073__auto___20948))
;

quiescent.dom.time.cljs$lang$maxFixedArity = (0);

quiescent.dom.time.cljs$lang$applyTo = ((function (ctor__19073__auto___20948){
return (function (seq20527){
return quiescent.dom.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20527));
});})(ctor__19073__auto___20948))
;

var ctor__19073__auto___20952 = quiescent.dom.constructor.call(null,"title");
quiescent.dom.title = ((function (ctor__19073__auto___20952){
return (function quiescent$dom$title(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20953 = arguments.length;
var i__15727__auto___20954 = (0);
while(true){
if((i__15727__auto___20954 < len__15726__auto___20953)){
args__15733__auto__.push((arguments[i__15727__auto___20954]));

var G__20955 = (i__15727__auto___20954 + (1));
i__15727__auto___20954 = G__20955;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20952))
;

quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20952){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20952,args__19074__auto__);
});})(ctor__19073__auto___20952))
;

quiescent.dom.title.cljs$lang$maxFixedArity = (0);

quiescent.dom.title.cljs$lang$applyTo = ((function (ctor__19073__auto___20952){
return (function (seq20528){
return quiescent.dom.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20528));
});})(ctor__19073__auto___20952))
;

var ctor__19073__auto___20956 = quiescent.dom.constructor.call(null,"tr");
quiescent.dom.tr = ((function (ctor__19073__auto___20956){
return (function quiescent$dom$tr(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20957 = arguments.length;
var i__15727__auto___20958 = (0);
while(true){
if((i__15727__auto___20958 < len__15726__auto___20957)){
args__15733__auto__.push((arguments[i__15727__auto___20958]));

var G__20959 = (i__15727__auto___20958 + (1));
i__15727__auto___20958 = G__20959;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20956))
;

quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20956){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20956,args__19074__auto__);
});})(ctor__19073__auto___20956))
;

quiescent.dom.tr.cljs$lang$maxFixedArity = (0);

quiescent.dom.tr.cljs$lang$applyTo = ((function (ctor__19073__auto___20956){
return (function (seq20529){
return quiescent.dom.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20529));
});})(ctor__19073__auto___20956))
;

var ctor__19073__auto___20960 = quiescent.dom.constructor.call(null,"track");
quiescent.dom.track = ((function (ctor__19073__auto___20960){
return (function quiescent$dom$track(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20961 = arguments.length;
var i__15727__auto___20962 = (0);
while(true){
if((i__15727__auto___20962 < len__15726__auto___20961)){
args__15733__auto__.push((arguments[i__15727__auto___20962]));

var G__20963 = (i__15727__auto___20962 + (1));
i__15727__auto___20962 = G__20963;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20960))
;

quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20960){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20960,args__19074__auto__);
});})(ctor__19073__auto___20960))
;

quiescent.dom.track.cljs$lang$maxFixedArity = (0);

quiescent.dom.track.cljs$lang$applyTo = ((function (ctor__19073__auto___20960){
return (function (seq20530){
return quiescent.dom.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20530));
});})(ctor__19073__auto___20960))
;

var ctor__19073__auto___20964 = quiescent.dom.constructor.call(null,"u");
quiescent.dom.u = ((function (ctor__19073__auto___20964){
return (function quiescent$dom$u(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20965 = arguments.length;
var i__15727__auto___20966 = (0);
while(true){
if((i__15727__auto___20966 < len__15726__auto___20965)){
args__15733__auto__.push((arguments[i__15727__auto___20966]));

var G__20967 = (i__15727__auto___20966 + (1));
i__15727__auto___20966 = G__20967;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20964))
;

quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20964){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20964,args__19074__auto__);
});})(ctor__19073__auto___20964))
;

quiescent.dom.u.cljs$lang$maxFixedArity = (0);

quiescent.dom.u.cljs$lang$applyTo = ((function (ctor__19073__auto___20964){
return (function (seq20531){
return quiescent.dom.u.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20531));
});})(ctor__19073__auto___20964))
;

var ctor__19073__auto___20968 = quiescent.dom.constructor.call(null,"ul");
quiescent.dom.ul = ((function (ctor__19073__auto___20968){
return (function quiescent$dom$ul(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20969 = arguments.length;
var i__15727__auto___20970 = (0);
while(true){
if((i__15727__auto___20970 < len__15726__auto___20969)){
args__15733__auto__.push((arguments[i__15727__auto___20970]));

var G__20971 = (i__15727__auto___20970 + (1));
i__15727__auto___20970 = G__20971;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20968))
;

quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20968){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20968,args__19074__auto__);
});})(ctor__19073__auto___20968))
;

quiescent.dom.ul.cljs$lang$maxFixedArity = (0);

quiescent.dom.ul.cljs$lang$applyTo = ((function (ctor__19073__auto___20968){
return (function (seq20532){
return quiescent.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20532));
});})(ctor__19073__auto___20968))
;

var ctor__19073__auto___20972 = quiescent.dom.constructor.call(null,"var");
quiescent.dom.var$ = ((function (ctor__19073__auto___20972){
return (function quiescent$dom$var(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20973 = arguments.length;
var i__15727__auto___20974 = (0);
while(true){
if((i__15727__auto___20974 < len__15726__auto___20973)){
args__15733__auto__.push((arguments[i__15727__auto___20974]));

var G__20975 = (i__15727__auto___20974 + (1));
i__15727__auto___20974 = G__20975;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20972))
;

quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20972){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20972,args__19074__auto__);
});})(ctor__19073__auto___20972))
;

quiescent.dom.var$.cljs$lang$maxFixedArity = (0);

quiescent.dom.var$.cljs$lang$applyTo = ((function (ctor__19073__auto___20972){
return (function (seq20533){
return quiescent.dom.var$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20533));
});})(ctor__19073__auto___20972))
;

var ctor__19073__auto___20976 = quiescent.dom.constructor.call(null,"video");
quiescent.dom.video = ((function (ctor__19073__auto___20976){
return (function quiescent$dom$video(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20977 = arguments.length;
var i__15727__auto___20978 = (0);
while(true){
if((i__15727__auto___20978 < len__15726__auto___20977)){
args__15733__auto__.push((arguments[i__15727__auto___20978]));

var G__20979 = (i__15727__auto___20978 + (1));
i__15727__auto___20978 = G__20979;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20976))
;

quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20976){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20976,args__19074__auto__);
});})(ctor__19073__auto___20976))
;

quiescent.dom.video.cljs$lang$maxFixedArity = (0);

quiescent.dom.video.cljs$lang$applyTo = ((function (ctor__19073__auto___20976){
return (function (seq20534){
return quiescent.dom.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20534));
});})(ctor__19073__auto___20976))
;

var ctor__19073__auto___20980 = quiescent.dom.constructor.call(null,"wbr");
quiescent.dom.wbr = ((function (ctor__19073__auto___20980){
return (function quiescent$dom$wbr(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20981 = arguments.length;
var i__15727__auto___20982 = (0);
while(true){
if((i__15727__auto___20982 < len__15726__auto___20981)){
args__15733__auto__.push((arguments[i__15727__auto___20982]));

var G__20983 = (i__15727__auto___20982 + (1));
i__15727__auto___20982 = G__20983;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20980))
;

quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20980){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20980,args__19074__auto__);
});})(ctor__19073__auto___20980))
;

quiescent.dom.wbr.cljs$lang$maxFixedArity = (0);

quiescent.dom.wbr.cljs$lang$applyTo = ((function (ctor__19073__auto___20980){
return (function (seq20535){
return quiescent.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20535));
});})(ctor__19073__auto___20980))
;

var ctor__19073__auto___20984 = quiescent.dom.constructor.call(null,"circle");
quiescent.dom.circle = ((function (ctor__19073__auto___20984){
return (function quiescent$dom$circle(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20985 = arguments.length;
var i__15727__auto___20986 = (0);
while(true){
if((i__15727__auto___20986 < len__15726__auto___20985)){
args__15733__auto__.push((arguments[i__15727__auto___20986]));

var G__20987 = (i__15727__auto___20986 + (1));
i__15727__auto___20986 = G__20987;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20984))
;

quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20984){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20984,args__19074__auto__);
});})(ctor__19073__auto___20984))
;

quiescent.dom.circle.cljs$lang$maxFixedArity = (0);

quiescent.dom.circle.cljs$lang$applyTo = ((function (ctor__19073__auto___20984){
return (function (seq20536){
return quiescent.dom.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20536));
});})(ctor__19073__auto___20984))
;

var ctor__19073__auto___20988 = quiescent.dom.constructor.call(null,"g");
quiescent.dom.g = ((function (ctor__19073__auto___20988){
return (function quiescent$dom$g(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20989 = arguments.length;
var i__15727__auto___20990 = (0);
while(true){
if((i__15727__auto___20990 < len__15726__auto___20989)){
args__15733__auto__.push((arguments[i__15727__auto___20990]));

var G__20991 = (i__15727__auto___20990 + (1));
i__15727__auto___20990 = G__20991;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20988))
;

quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20988){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20988,args__19074__auto__);
});})(ctor__19073__auto___20988))
;

quiescent.dom.g.cljs$lang$maxFixedArity = (0);

quiescent.dom.g.cljs$lang$applyTo = ((function (ctor__19073__auto___20988){
return (function (seq20537){
return quiescent.dom.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20537));
});})(ctor__19073__auto___20988))
;

var ctor__19073__auto___20992 = quiescent.dom.constructor.call(null,"line");
quiescent.dom.line = ((function (ctor__19073__auto___20992){
return (function quiescent$dom$line(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20993 = arguments.length;
var i__15727__auto___20994 = (0);
while(true){
if((i__15727__auto___20994 < len__15726__auto___20993)){
args__15733__auto__.push((arguments[i__15727__auto___20994]));

var G__20995 = (i__15727__auto___20994 + (1));
i__15727__auto___20994 = G__20995;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20992))
;

quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20992){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20992,args__19074__auto__);
});})(ctor__19073__auto___20992))
;

quiescent.dom.line.cljs$lang$maxFixedArity = (0);

quiescent.dom.line.cljs$lang$applyTo = ((function (ctor__19073__auto___20992){
return (function (seq20538){
return quiescent.dom.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20538));
});})(ctor__19073__auto___20992))
;

var ctor__19073__auto___20996 = quiescent.dom.constructor.call(null,"path");
quiescent.dom.path = ((function (ctor__19073__auto___20996){
return (function quiescent$dom$path(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20997 = arguments.length;
var i__15727__auto___20998 = (0);
while(true){
if((i__15727__auto___20998 < len__15726__auto___20997)){
args__15733__auto__.push((arguments[i__15727__auto___20998]));

var G__20999 = (i__15727__auto___20998 + (1));
i__15727__auto___20998 = G__20999;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___20996))
;

quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___20996){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___20996,args__19074__auto__);
});})(ctor__19073__auto___20996))
;

quiescent.dom.path.cljs$lang$maxFixedArity = (0);

quiescent.dom.path.cljs$lang$applyTo = ((function (ctor__19073__auto___20996){
return (function (seq20539){
return quiescent.dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20539));
});})(ctor__19073__auto___20996))
;

var ctor__19073__auto___21000 = quiescent.dom.constructor.call(null,"polygon");
quiescent.dom.polygon = ((function (ctor__19073__auto___21000){
return (function quiescent$dom$polygon(var_args){
var args__15733__auto__ = [];
var len__15726__auto___21001 = arguments.length;
var i__15727__auto___21002 = (0);
while(true){
if((i__15727__auto___21002 < len__15726__auto___21001)){
args__15733__auto__.push((arguments[i__15727__auto___21002]));

var G__21003 = (i__15727__auto___21002 + (1));
i__15727__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___21000))
;

quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___21000){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___21000,args__19074__auto__);
});})(ctor__19073__auto___21000))
;

quiescent.dom.polygon.cljs$lang$maxFixedArity = (0);

quiescent.dom.polygon.cljs$lang$applyTo = ((function (ctor__19073__auto___21000){
return (function (seq20540){
return quiescent.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20540));
});})(ctor__19073__auto___21000))
;

var ctor__19073__auto___21004 = quiescent.dom.constructor.call(null,"polyline");
quiescent.dom.polyline = ((function (ctor__19073__auto___21004){
return (function quiescent$dom$polyline(var_args){
var args__15733__auto__ = [];
var len__15726__auto___21005 = arguments.length;
var i__15727__auto___21006 = (0);
while(true){
if((i__15727__auto___21006 < len__15726__auto___21005)){
args__15733__auto__.push((arguments[i__15727__auto___21006]));

var G__21007 = (i__15727__auto___21006 + (1));
i__15727__auto___21006 = G__21007;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___21004))
;

quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___21004){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___21004,args__19074__auto__);
});})(ctor__19073__auto___21004))
;

quiescent.dom.polyline.cljs$lang$maxFixedArity = (0);

quiescent.dom.polyline.cljs$lang$applyTo = ((function (ctor__19073__auto___21004){
return (function (seq20541){
return quiescent.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20541));
});})(ctor__19073__auto___21004))
;

var ctor__19073__auto___21008 = quiescent.dom.constructor.call(null,"rect");
quiescent.dom.rect = ((function (ctor__19073__auto___21008){
return (function quiescent$dom$rect(var_args){
var args__15733__auto__ = [];
var len__15726__auto___21009 = arguments.length;
var i__15727__auto___21010 = (0);
while(true){
if((i__15727__auto___21010 < len__15726__auto___21009)){
args__15733__auto__.push((arguments[i__15727__auto___21010]));

var G__21011 = (i__15727__auto___21010 + (1));
i__15727__auto___21010 = G__21011;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___21008))
;

quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___21008){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___21008,args__19074__auto__);
});})(ctor__19073__auto___21008))
;

quiescent.dom.rect.cljs$lang$maxFixedArity = (0);

quiescent.dom.rect.cljs$lang$applyTo = ((function (ctor__19073__auto___21008){
return (function (seq20542){
return quiescent.dom.rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20542));
});})(ctor__19073__auto___21008))
;

var ctor__19073__auto___21012 = quiescent.dom.constructor.call(null,"svg");
quiescent.dom.svg = ((function (ctor__19073__auto___21012){
return (function quiescent$dom$svg(var_args){
var args__15733__auto__ = [];
var len__15726__auto___21013 = arguments.length;
var i__15727__auto___21014 = (0);
while(true){
if((i__15727__auto___21014 < len__15726__auto___21013)){
args__15733__auto__.push((arguments[i__15727__auto___21014]));

var G__21015 = (i__15727__auto___21014 + (1));
i__15727__auto___21014 = G__21015;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___21012))
;

quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___21012){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___21012,args__19074__auto__);
});})(ctor__19073__auto___21012))
;

quiescent.dom.svg.cljs$lang$maxFixedArity = (0);

quiescent.dom.svg.cljs$lang$applyTo = ((function (ctor__19073__auto___21012){
return (function (seq20543){
return quiescent.dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20543));
});})(ctor__19073__auto___21012))
;

var ctor__19073__auto___21016 = quiescent.dom.constructor.call(null,"text");
quiescent.dom.text = ((function (ctor__19073__auto___21016){
return (function quiescent$dom$text(var_args){
var args__15733__auto__ = [];
var len__15726__auto___21017 = arguments.length;
var i__15727__auto___21018 = (0);
while(true){
if((i__15727__auto___21018 < len__15726__auto___21017)){
args__15733__auto__.push((arguments[i__15727__auto___21018]));

var G__21019 = (i__15727__auto___21018 + (1));
i__15727__auto___21018 = G__21019;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((0) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((0)),(0))):null);
return quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic(argseq__15734__auto__);
});})(ctor__19073__auto___21016))
;

quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19073__auto___21016){
return (function (args__19074__auto__){

return cljs.core.apply.call(null,ctor__19073__auto___21016,args__19074__auto__);
});})(ctor__19073__auto___21016))
;

quiescent.dom.text.cljs$lang$maxFixedArity = (0);

quiescent.dom.text.cljs$lang$applyTo = ((function (ctor__19073__auto___21016){
return (function (seq20457){
return quiescent.dom.text.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq20457));
});})(ctor__19073__auto___21016))
;

quiescent.dom.defined_tags = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"del","del",574975584),new cljs.core.Keyword(null,"fieldset","fieldset",-1949770816),new cljs.core.Keyword(null,"q","q",689001697),new cljs.core.Keyword(null,"figure","figure",-561394079),new cljs.core.Keyword(null,"aside","aside",1414397537),new cljs.core.Keyword(null,"figcaption","figcaption",-1790122047),new cljs.core.Keyword(null,"video","video",156888130),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"caption","caption",-855383902),new cljs.core.Keyword(null,"bdi","bdi",-1323025886),new cljs.core.Keyword(null,"rp","rp",2006698083),new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.Keyword(null,"dd","dd",-1340437629),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"tbody","tbody",-80678300),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.Keyword(null,"sup","sup",-2039492346),new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.Keyword(null,"big","big",903550151),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"dfn","dfn",241908167),new cljs.core.Keyword(null,"sub","sub",-2093760025),new cljs.core.Keyword(null,"mark","mark",-373816345),new cljs.core.Keyword(null,"wbr","wbr",228661800),new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"dt","dt",-368444759),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.Keyword(null,"em","em",707813035),new cljs.core.Keyword(null,"kbd","kbd",316156875),new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"output","output",-1105869043),new cljs.core.Keyword(null,"ins","ins",-1021983570),new cljs.core.Keyword(null,"footer","footer",1606445390),new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"datalist","datalist",-1235043474),new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"h5","h5",-1829156625),new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.Keyword(null,"param","param",2013631823),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"samp","samp",1506141136),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"details","details",1956795411),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.Keyword(null,"h6","h6",557293780),new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"rt","rt",623480692),new cljs.core.Keyword(null,"colgroup","colgroup",651118645),new cljs.core.Keyword(null,"meter","meter",-187641611),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"bdo","bdo",-2131148202),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"noscript","noscript",-704777289),new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.Keyword(null,"area","area",472007256),new cljs.core.Keyword(null,"br","br",934104792),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"menuitem","menuitem",1004047353),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"embed","embed",-1354913349),new cljs.core.Keyword(null,"h3","h3",2067611163),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"keygen","keygen",-571693253),new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.Keyword(null,"cite","cite",1909439996),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"nav","nav",719540477),new cljs.core.Keyword(null,"ruby","ruby",2000737661),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"menu","menu",352255198),new cljs.core.Keyword(null,"blockquote","blockquote",372264190),new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"dl","dl",-2140151713),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.Keyword(null,"html","html",-998796897),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"track","track",195787487),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"u","u",-1156634785)],[quiescent.dom.thead,quiescent.dom.path,quiescent.dom.del,quiescent.dom.fieldset,quiescent.dom.q,quiescent.dom.figure,quiescent.dom.aside,quiescent.dom.figcaption,quiescent.dom.video,quiescent.dom.address,quiescent.dom.caption,quiescent.dom.bdi,quiescent.dom.rp,quiescent.dom.hr,quiescent.dom.dd,quiescent.dom.meta,quiescent.dom.tbody,quiescent.dom.table,quiescent.dom.ul,quiescent.dom.pre,quiescent.dom.sup,quiescent.dom.script,quiescent.dom.big,quiescent.dom.button,quiescent.dom.dfn,quiescent.dom.sub,quiescent.dom.mark,quiescent.dom.wbr,quiescent.dom.strong,quiescent.dom.td,quiescent.dom.li,quiescent.dom.dt,quiescent.dom.section,quiescent.dom.th,quiescent.dom.time,quiescent.dom.optgroup,quiescent.dom.iframe,quiescent.dom.tr,quiescent.dom.circle,quiescent.dom.article,quiescent.dom.legend,quiescent.dom.em,quiescent.dom.kbd,quiescent.dom.abbr,quiescent.dom.source,quiescent.dom.output,quiescent.dom.ins,quiescent.dom.footer,quiescent.dom.header,quiescent.dom.datalist,quiescent.dom.tfoot,quiescent.dom.s,quiescent.dom.h5,quiescent.dom.canvas,quiescent.dom.param,quiescent.dom.title,quiescent.dom.small,quiescent.dom.style,quiescent.dom.textarea,quiescent.dom.div,quiescent.dom.option,quiescent.dom.summary,quiescent.dom.samp,quiescent.dom.h4,quiescent.dom.head,quiescent.dom.g,quiescent.dom.ol,quiescent.dom.details,quiescent.dom.line,quiescent.dom.var$,quiescent.dom.h6,quiescent.dom.link,quiescent.dom.col,quiescent.dom.label,quiescent.dom.rt,quiescent.dom.colgroup,quiescent.dom.meter,quiescent.dom.svg,quiescent.dom.code,quiescent.dom.bdo,quiescent.dom.b,quiescent.dom.noscript,quiescent.dom.h2,quiescent.dom.area,quiescent.dom.br,quiescent.dom.form,quiescent.dom.audio,quiescent.dom.input,quiescent.dom.menuitem,quiescent.dom.base,quiescent.dom.h1,quiescent.dom.progress,quiescent.dom.main,quiescent.dom.embed,quiescent.dom.h3,quiescent.dom.body,quiescent.dom.keygen,quiescent.dom.polyline,quiescent.dom.cite,quiescent.dom.rect,quiescent.dom.p,quiescent.dom.nav,quiescent.dom.ruby,quiescent.dom.map,quiescent.dom.object,quiescent.dom.i,quiescent.dom.menu,quiescent.dom.blockquote,quiescent.dom.img,quiescent.dom.a,quiescent.dom.dl,quiescent.dom.select,quiescent.dom.polygon,quiescent.dom.html,quiescent.dom.text,quiescent.dom.span,quiescent.dom.track,quiescent.dom.data,quiescent.dom.u]);

//# sourceMappingURL=dom.js.map