// Compiled by ClojureScript 1.7.122 {}
goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__15327__auto__ = (((_ == null))?null:_);
var m__15328__auto__ = (chord.format.freeze[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,_,obj);
} else {
var m__15328__auto____$1 = (chord.format.freeze["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,_,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((!((_ == null))) && (!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__15327__auto__ = (((_ == null))?null:_);
var m__15328__auto__ = (chord.format.thaw[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,_,s);
} else {
var m__15328__auto____$1 = (chord.format.thaw["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__15585__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15586__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15587__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15588__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15589__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15589__auto__,method_table__15585__auto__,prefer_table__15586__auto__,method_cache__15587__auto__,cached_hierarchy__15588__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format20021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20021 = (function (_,meta20022){
this._ = _;
this.meta20022 = meta20022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20023,meta20022__$1){
var self__ = this;
var _20023__$1 = this;
return (new chord.format.t_chord$format20021(self__._,meta20022__$1));
});

chord.format.t_chord$format20021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20023){
var self__ = this;
var _20023__$1 = this;
return self__.meta20022;
});

chord.format.t_chord$format20021.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20021.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format20021.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format20021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20022","meta20022",-1552643698,null)], null);
});

chord.format.t_chord$format20021.cljs$lang$type = true;

chord.format.t_chord$format20021.cljs$lang$ctorStr = "chord.format/t_chord$format20021";

chord.format.t_chord$format20021.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"chord.format/t_chord$format20021");
});

chord.format.__GT_t_chord$format20021 = (function chord$format$__GT_t_chord$format20021(___$1,meta20022){
return (new chord.format.t_chord$format20021(___$1,meta20022));
});

}

return (new chord.format.t_chord$format20021(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format20024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20024 = (function (_,meta20025){
this._ = _;
this.meta20025 = meta20025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20026,meta20025__$1){
var self__ = this;
var _20026__$1 = this;
return (new chord.format.t_chord$format20024(self__._,meta20025__$1));
});

chord.format.t_chord$format20024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20026){
var self__ = this;
var _20026__$1 = this;
return self__.meta20025;
});

chord.format.t_chord$format20024.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20024.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format20024.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format20024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20025","meta20025",2001088741,null)], null);
});

chord.format.t_chord$format20024.cljs$lang$type = true;

chord.format.t_chord$format20024.cljs$lang$ctorStr = "chord.format/t_chord$format20024";

chord.format.t_chord$format20024.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"chord.format/t_chord$format20024");
});

chord.format.__GT_t_chord$format20024 = (function chord$format$__GT_t_chord$format20024(___$1,meta20025){
return (new chord.format.t_chord$format20024(___$1,meta20025));
});

}

return (new chord.format.t_chord$format20024(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format20027 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20027 = (function (opts,json_formatter,meta20028){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta20028 = meta20028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_20029,meta20028__$1){
var self__ = this;
var _20029__$1 = this;
return (new chord.format.t_chord$format20027(self__.opts,self__.json_formatter,meta20028__$1));
});})(json_formatter))
;

chord.format.t_chord$format20027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_20029){
var self__ = this;
var _20029__$1 = this;
return self__.meta20028;
});})(json_formatter))
;

chord.format.t_chord$format20027.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20027.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format20027.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format20027.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta20028","meta20028",-780436301,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format20027.cljs$lang$type = true;

chord.format.t_chord$format20027.cljs$lang$ctorStr = "chord.format/t_chord$format20027";

chord.format.t_chord$format20027.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"chord.format/t_chord$format20027");
});})(json_formatter))
;

chord.format.__GT_t_chord$format20027 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format20027(opts__$1,json_formatter__$1,meta20028){
return (new chord.format.t_chord$format20027(opts__$1,json_formatter__$1,meta20028));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format20027(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format20030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20030 = (function (_,meta20031){
this._ = _;
this.meta20031 = meta20031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20032,meta20031__$1){
var self__ = this;
var _20032__$1 = this;
return (new chord.format.t_chord$format20030(self__._,meta20031__$1));
});

chord.format.t_chord$format20030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20032){
var self__ = this;
var _20032__$1 = this;
return self__.meta20031;
});

chord.format.t_chord$format20030.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20030.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format20030.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format20030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20031","meta20031",-907740699,null)], null);
});

chord.format.t_chord$format20030.cljs$lang$type = true;

chord.format.t_chord$format20030.cljs$lang$ctorStr = "chord.format/t_chord$format20030";

chord.format.t_chord$format20030.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"chord.format/t_chord$format20030");
});

chord.format.__GT_t_chord$format20030 = (function chord$format$__GT_t_chord$format20030(___$1,meta20031){
return (new chord.format.t_chord$format20030(___$1,meta20031));
});

}

return (new chord.format.t_chord$format20030(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format20033 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20033 = (function (_,meta20034){
this._ = _;
this.meta20034 = meta20034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20035,meta20034__$1){
var self__ = this;
var _20035__$1 = this;
return (new chord.format.t_chord$format20033(self__._,meta20034__$1));
});

chord.format.t_chord$format20033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20035){
var self__ = this;
var _20035__$1 = this;
return self__.meta20034;
});

chord.format.t_chord$format20033.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20033.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format20033.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format20033.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20034","meta20034",-1752983176,null)], null);
});

chord.format.t_chord$format20033.cljs$lang$type = true;

chord.format.t_chord$format20033.cljs$lang$ctorStr = "chord.format/t_chord$format20033";

chord.format.t_chord$format20033.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"chord.format/t_chord$format20033");
});

chord.format.__GT_t_chord$format20033 = (function chord$format$__GT_t_chord$format20033(___$1,meta20034){
return (new chord.format.t_chord$format20033(___$1,meta20034));
});

}

return (new chord.format.t_chord$format20033(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__20037,p__20038){
var map__20047 = p__20037;
var map__20047__$1 = ((((!((map__20047 == null)))?((((map__20047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20047):map__20047);
var read_ch = cljs.core.get.call(null,map__20047__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__20047__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__20048 = p__20038;
var map__20048__$1 = ((((!((map__20048 == null)))?((((map__20048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20048):map__20048);
var opts = map__20048__$1;
var format = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__20047,map__20047__$1,read_ch,write_ch,map__20048,map__20048__$1,opts,format){
return (function (p__20051){
var map__20052 = p__20051;
var map__20052__$1 = ((((!((map__20052 == null)))?((((map__20052.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20052.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20052):map__20052);
var message = cljs.core.get.call(null,map__20052__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
}catch (e20054){if((e20054 instanceof Error)){
var e = e20054;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e20054;

}
}});})(fmtr,map__20047,map__20047__$1,read_ch,write_ch,map__20048,map__20048__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__20047,map__20047__$1,read_ch,write_ch,map__20048,map__20048__$1,opts,format){
return (function (p1__20036_SHARP_){
return chord.format.freeze.call(null,fmtr,p1__20036_SHARP_);
});})(fmtr,map__20047,map__20047__$1,read_ch,write_ch,map__20048,map__20048__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map