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
var x__15323__auto__ = (((_ == null))?null:_);
var m__15324__auto__ = (chord.format.freeze[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,_,obj);
} else {
var m__15324__auto____$1 = (chord.format.freeze["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,_,obj);
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
var x__15323__auto__ = (((_ == null))?null:_);
var m__15324__auto__ = (chord.format.thaw[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,_,s);
} else {
var m__15324__auto____$1 = (chord.format.thaw["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,_,s);
} else {
throw cljs.core.missing_protocol.call(null,"ChordFormatter.thaw",_);
}
}
}
});

if(typeof chord.format.formatter_STAR_ !== 'undefined'){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__15581__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__15582__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__15583__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__15584__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__15585__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__15585__auto__,method_table__15581__auto__,prefer_table__15582__auto__,method_cache__15583__auto__,cached_hierarchy__15584__auto__));
})();
}
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if(typeof chord.format.t_chord$format20017 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20017 = (function (_,meta20018){
this._ = _;
this.meta20018 = meta20018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20019,meta20018__$1){
var self__ = this;
var _20019__$1 = this;
return (new chord.format.t_chord$format20017(self__._,meta20018__$1));
});

chord.format.t_chord$format20017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20019){
var self__ = this;
var _20019__$1 = this;
return self__.meta20018;
});

chord.format.t_chord$format20017.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20017.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.call(null,obj);
});

chord.format.t_chord$format20017.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.call(null,s);
});

chord.format.t_chord$format20017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20018","meta20018",984998571,null)], null);
});

chord.format.t_chord$format20017.cljs$lang$type = true;

chord.format.t_chord$format20017.cljs$lang$ctorStr = "chord.format/t_chord$format20017";

chord.format.t_chord$format20017.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"chord.format/t_chord$format20017");
});

chord.format.__GT_t_chord$format20017 = (function chord$format$__GT_t_chord$format20017(___$1,meta20018){
return (new chord.format.t_chord$format20017(___$1,meta20018));
});

}

return (new chord.format.t_chord$format20017(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if(typeof chord.format.t_chord$format20020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20020 = (function (_,meta20021){
this._ = _;
this.meta20021 = meta20021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20022,meta20021__$1){
var self__ = this;
var _20022__$1 = this;
return (new chord.format.t_chord$format20020(self__._,meta20021__$1));
});

chord.format.t_chord$format20020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20022){
var self__ = this;
var _20022__$1 = this;
return self__.meta20021;
});

chord.format.t_chord$format20020.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20020.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js.call(null,obj));
});

chord.format.t_chord$format20020.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.call(null,JSON.parse(s));
});

chord.format.t_chord$format20020.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20021","meta20021",-929879202,null)], null);
});

chord.format.t_chord$format20020.cljs$lang$type = true;

chord.format.t_chord$format20020.cljs$lang$ctorStr = "chord.format/t_chord$format20020";

chord.format.t_chord$format20020.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"chord.format/t_chord$format20020");
});

chord.format.__GT_t_chord$format20020 = (function chord$format$__GT_t_chord$format20020(___$1,meta20021){
return (new chord.format.t_chord$format20020(___$1,meta20021));
});

}

return (new chord.format.t_chord$format20020(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = chord.format.formatter_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570)));
if(typeof chord.format.t_chord$format20023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20023 = (function (opts,json_formatter,meta20024){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta20024 = meta20024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (json_formatter){
return (function (_20025,meta20024__$1){
var self__ = this;
var _20025__$1 = this;
return (new chord.format.t_chord$format20023(self__.opts,self__.json_formatter,meta20024__$1));
});})(json_formatter))
;

chord.format.t_chord$format20023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (json_formatter){
return (function (_20025){
var self__ = this;
var _20025__$1 = this;
return self__.meta20024;
});})(json_formatter))
;

chord.format.t_chord$format20023.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20023.prototype.chord$format$ChordFormatter$freeze$arity$2 = ((function (json_formatter){
return (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze.call(null,self__.json_formatter,obj);
});})(json_formatter))
;

chord.format.t_chord$format20023.prototype.chord$format$ChordFormatter$thaw$arity$2 = ((function (json_formatter){
return (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys.call(null,chord.format.thaw.call(null,self__.json_formatter,s));
});})(json_formatter))
;

chord.format.t_chord$format20023.getBasis = ((function (json_formatter){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta20024","meta20024",-1266819153,null)], null);
});})(json_formatter))
;

chord.format.t_chord$format20023.cljs$lang$type = true;

chord.format.t_chord$format20023.cljs$lang$ctorStr = "chord.format/t_chord$format20023";

chord.format.t_chord$format20023.cljs$lang$ctorPrWriter = ((function (json_formatter){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"chord.format/t_chord$format20023");
});})(json_formatter))
;

chord.format.__GT_t_chord$format20023 = ((function (json_formatter){
return (function chord$format$__GT_t_chord$format20023(opts__$1,json_formatter__$1,meta20024){
return (new chord.format.t_chord$format20023(opts__$1,json_formatter__$1,meta20024));
});})(json_formatter))
;

}

return (new chord.format.t_chord$format20023(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if(typeof chord.format.t_chord$format20026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20026 = (function (_,meta20027){
this._ = _;
this.meta20027 = meta20027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20028,meta20027__$1){
var self__ = this;
var _20028__$1 = this;
return (new chord.format.t_chord$format20026(self__._,meta20027__$1));
});

chord.format.t_chord$format20026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20028){
var self__ = this;
var _20028__$1 = this;
return self__.meta20027;
});

chord.format.t_chord$format20026.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20026.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),obj);
});

chord.format.t_chord$format20026.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570)),s);
});

chord.format.t_chord$format20026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20027","meta20027",-253337019,null)], null);
});

chord.format.t_chord$format20026.cljs$lang$type = true;

chord.format.t_chord$format20026.cljs$lang$ctorStr = "chord.format/t_chord$format20026";

chord.format.t_chord$format20026.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"chord.format/t_chord$format20026");
});

chord.format.__GT_t_chord$format20026 = (function chord$format$__GT_t_chord$format20026(___$1,meta20027){
return (new chord.format.t_chord$format20026(___$1,meta20027));
});

}

return (new chord.format.t_chord$format20026(_,cljs.core.PersistentArrayMap.EMPTY));
}));
cljs.core._add_method.call(null,chord.format.formatter_STAR_,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if(typeof chord.format.t_chord$format20029 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format20029 = (function (_,meta20030){
this._ = _;
this.meta20030 = meta20030;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.format.t_chord$format20029.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20031,meta20030__$1){
var self__ = this;
var _20031__$1 = this;
return (new chord.format.t_chord$format20029(self__._,meta20030__$1));
});

chord.format.t_chord$format20029.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20031){
var self__ = this;
var _20031__$1 = this;
return self__.meta20030;
});

chord.format.t_chord$format20029.prototype.chord$format$ChordFormatter$ = true;

chord.format.t_chord$format20029.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
});

chord.format.t_chord$format20029.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
});

chord.format.t_chord$format20029.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta20030","meta20030",-368325592,null)], null);
});

chord.format.t_chord$format20029.cljs$lang$type = true;

chord.format.t_chord$format20029.cljs$lang$ctorStr = "chord.format/t_chord$format20029";

chord.format.t_chord$format20029.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"chord.format/t_chord$format20029");
});

chord.format.__GT_t_chord$format20029 = (function chord$format$__GT_t_chord$format20029(___$1,meta20030){
return (new chord.format.t_chord$format20029(___$1,meta20030));
});

}

return (new chord.format.t_chord$format20029(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
return chord.format.formatter_STAR_.call(null,(((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__20033,p__20034){
var map__20043 = p__20033;
var map__20043__$1 = ((((!((map__20043 == null)))?((((map__20043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20043):map__20043);
var read_ch = cljs.core.get.call(null,map__20043__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__20043__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__20044 = p__20034;
var map__20044__$1 = ((((!((map__20044 == null)))?((((map__20044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20044):map__20044);
var opts = map__20044__$1;
var format = cljs.core.get.call(null,map__20044__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter.call(null,(cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_.call(null,((function (fmtr,map__20043,map__20043__$1,read_ch,write_ch,map__20044,map__20044__$1,opts,format){
return (function (p__20047){
var map__20048 = p__20047;
var map__20048__$1 = ((((!((map__20048 == null)))?((((map__20048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20048):map__20048);
var message = cljs.core.get.call(null,map__20048__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw.call(null,fmtr,message)], null);
}catch (e20050){if((e20050 instanceof Error)){
var e = e20050;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e20050;

}
}});})(fmtr,map__20043,map__20043__$1,read_ch,write_ch,map__20044,map__20044__$1,opts,format))
,read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_.call(null,((function (fmtr,map__20043,map__20043__$1,read_ch,write_ch,map__20044,map__20044__$1,opts,format){
return (function (p1__20032_SHARP_){
return chord.format.freeze.call(null,fmtr,p1__20032_SHARP_);
});})(fmtr,map__20043,map__20043__$1,read_ch,write_ch,map__20044,map__20044__$1,opts,format))
,write_ch)], null);
});

//# sourceMappingURL=format.js.map