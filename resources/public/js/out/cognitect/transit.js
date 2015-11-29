// Compiled by ClojureScript 1.7.122 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__20182_20186 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__20183_20187 = null;
var count__20184_20188 = (0);
var i__20185_20189 = (0);
while(true){
if((i__20185_20189 < count__20184_20188)){
var k_20190 = cljs.core._nth.call(null,chunk__20183_20187,i__20185_20189);
var v_20191 = (b[k_20190]);
(a[k_20190] = v_20191);

var G__20192 = seq__20182_20186;
var G__20193 = chunk__20183_20187;
var G__20194 = count__20184_20188;
var G__20195 = (i__20185_20189 + (1));
seq__20182_20186 = G__20192;
chunk__20183_20187 = G__20193;
count__20184_20188 = G__20194;
i__20185_20189 = G__20195;
continue;
} else {
var temp__4425__auto___20196 = cljs.core.seq.call(null,seq__20182_20186);
if(temp__4425__auto___20196){
var seq__20182_20197__$1 = temp__4425__auto___20196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20182_20197__$1)){
var c__15471__auto___20198 = cljs.core.chunk_first.call(null,seq__20182_20197__$1);
var G__20199 = cljs.core.chunk_rest.call(null,seq__20182_20197__$1);
var G__20200 = c__15471__auto___20198;
var G__20201 = cljs.core.count.call(null,c__15471__auto___20198);
var G__20202 = (0);
seq__20182_20186 = G__20199;
chunk__20183_20187 = G__20200;
count__20184_20188 = G__20201;
i__20185_20189 = G__20202;
continue;
} else {
var k_20203 = cljs.core.first.call(null,seq__20182_20197__$1);
var v_20204 = (b[k_20203]);
(a[k_20203] = v_20204);

var G__20205 = cljs.core.next.call(null,seq__20182_20197__$1);
var G__20206 = null;
var G__20207 = (0);
var G__20208 = (0);
seq__20182_20186 = G__20205;
chunk__20183_20187 = G__20206;
count__20184_20188 = G__20207;
i__20185_20189 = G__20208;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args20209 = [];
var len__15726__auto___20212 = arguments.length;
var i__15727__auto___20213 = (0);
while(true){
if((i__15727__auto___20213 < len__15726__auto___20212)){
args20209.push((arguments[i__15727__auto___20213]));

var G__20214 = (i__15727__auto___20213 + (1));
i__15727__auto___20213 = G__20214;
continue;
} else {
}
break;
}

var G__20211 = args20209.length;
switch (G__20211) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20209.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__20216 = (i + (2));
var G__20217 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__20216;
ret = G__20217;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20218_20222 = cljs.core.seq.call(null,v);
var chunk__20219_20223 = null;
var count__20220_20224 = (0);
var i__20221_20225 = (0);
while(true){
if((i__20221_20225 < count__20220_20224)){
var x_20226 = cljs.core._nth.call(null,chunk__20219_20223,i__20221_20225);
ret.push(x_20226);

var G__20227 = seq__20218_20222;
var G__20228 = chunk__20219_20223;
var G__20229 = count__20220_20224;
var G__20230 = (i__20221_20225 + (1));
seq__20218_20222 = G__20227;
chunk__20219_20223 = G__20228;
count__20220_20224 = G__20229;
i__20221_20225 = G__20230;
continue;
} else {
var temp__4425__auto___20231 = cljs.core.seq.call(null,seq__20218_20222);
if(temp__4425__auto___20231){
var seq__20218_20232__$1 = temp__4425__auto___20231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20218_20232__$1)){
var c__15471__auto___20233 = cljs.core.chunk_first.call(null,seq__20218_20232__$1);
var G__20234 = cljs.core.chunk_rest.call(null,seq__20218_20232__$1);
var G__20235 = c__15471__auto___20233;
var G__20236 = cljs.core.count.call(null,c__15471__auto___20233);
var G__20237 = (0);
seq__20218_20222 = G__20234;
chunk__20219_20223 = G__20235;
count__20220_20224 = G__20236;
i__20221_20225 = G__20237;
continue;
} else {
var x_20238 = cljs.core.first.call(null,seq__20218_20232__$1);
ret.push(x_20238);

var G__20239 = cljs.core.next.call(null,seq__20218_20232__$1);
var G__20240 = null;
var G__20241 = (0);
var G__20242 = (0);
seq__20218_20222 = G__20239;
chunk__20219_20223 = G__20240;
count__20220_20224 = G__20241;
i__20221_20225 = G__20242;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20243_20247 = cljs.core.seq.call(null,v);
var chunk__20244_20248 = null;
var count__20245_20249 = (0);
var i__20246_20250 = (0);
while(true){
if((i__20246_20250 < count__20245_20249)){
var x_20251 = cljs.core._nth.call(null,chunk__20244_20248,i__20246_20250);
ret.push(x_20251);

var G__20252 = seq__20243_20247;
var G__20253 = chunk__20244_20248;
var G__20254 = count__20245_20249;
var G__20255 = (i__20246_20250 + (1));
seq__20243_20247 = G__20252;
chunk__20244_20248 = G__20253;
count__20245_20249 = G__20254;
i__20246_20250 = G__20255;
continue;
} else {
var temp__4425__auto___20256 = cljs.core.seq.call(null,seq__20243_20247);
if(temp__4425__auto___20256){
var seq__20243_20257__$1 = temp__4425__auto___20256;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20243_20257__$1)){
var c__15471__auto___20258 = cljs.core.chunk_first.call(null,seq__20243_20257__$1);
var G__20259 = cljs.core.chunk_rest.call(null,seq__20243_20257__$1);
var G__20260 = c__15471__auto___20258;
var G__20261 = cljs.core.count.call(null,c__15471__auto___20258);
var G__20262 = (0);
seq__20243_20247 = G__20259;
chunk__20244_20248 = G__20260;
count__20245_20249 = G__20261;
i__20246_20250 = G__20262;
continue;
} else {
var x_20263 = cljs.core.first.call(null,seq__20243_20257__$1);
ret.push(x_20263);

var G__20264 = cljs.core.next.call(null,seq__20243_20257__$1);
var G__20265 = null;
var G__20266 = (0);
var G__20267 = (0);
seq__20243_20247 = G__20264;
chunk__20244_20248 = G__20265;
count__20245_20249 = G__20266;
i__20246_20250 = G__20267;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__20268_20272 = cljs.core.seq.call(null,v);
var chunk__20269_20273 = null;
var count__20270_20274 = (0);
var i__20271_20275 = (0);
while(true){
if((i__20271_20275 < count__20270_20274)){
var x_20276 = cljs.core._nth.call(null,chunk__20269_20273,i__20271_20275);
ret.push(x_20276);

var G__20277 = seq__20268_20272;
var G__20278 = chunk__20269_20273;
var G__20279 = count__20270_20274;
var G__20280 = (i__20271_20275 + (1));
seq__20268_20272 = G__20277;
chunk__20269_20273 = G__20278;
count__20270_20274 = G__20279;
i__20271_20275 = G__20280;
continue;
} else {
var temp__4425__auto___20281 = cljs.core.seq.call(null,seq__20268_20272);
if(temp__4425__auto___20281){
var seq__20268_20282__$1 = temp__4425__auto___20281;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20268_20282__$1)){
var c__15471__auto___20283 = cljs.core.chunk_first.call(null,seq__20268_20282__$1);
var G__20284 = cljs.core.chunk_rest.call(null,seq__20268_20282__$1);
var G__20285 = c__15471__auto___20283;
var G__20286 = cljs.core.count.call(null,c__15471__auto___20283);
var G__20287 = (0);
seq__20268_20272 = G__20284;
chunk__20269_20273 = G__20285;
count__20270_20274 = G__20286;
i__20271_20275 = G__20287;
continue;
} else {
var x_20288 = cljs.core.first.call(null,seq__20268_20282__$1);
ret.push(x_20288);

var G__20289 = cljs.core.next.call(null,seq__20268_20282__$1);
var G__20290 = null;
var G__20291 = (0);
var G__20292 = (0);
seq__20268_20272 = G__20289;
chunk__20269_20273 = G__20290;
count__20270_20274 = G__20291;
i__20271_20275 = G__20292;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a JavaScript
 * array of interleaved type constructors and handler instances for those 
 * type constructors.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args20293 = [];
var len__15726__auto___20304 = arguments.length;
var i__15727__auto___20305 = (0);
while(true){
if((i__15727__auto___20305 < len__15726__auto___20304)){
args20293.push((arguments[i__15727__auto___20305]));

var G__20306 = (i__15727__auto___20305 + (1));
i__15727__auto___20305 = G__20306;
continue;
} else {
}
break;
}

var G__20295 = args20293.length;
switch (G__20295) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20293.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__20296 = obj;
G__20296.push(kfn.call(null,k),vfn.call(null,v));

return G__20296;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x20297 = cljs.core.clone.call(null,handlers);
x20297.forEach = ((function (x20297,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__20298 = cljs.core.seq.call(null,coll);
var chunk__20299 = null;
var count__20300 = (0);
var i__20301 = (0);
while(true){
if((i__20301 < count__20300)){
var vec__20302 = cljs.core._nth.call(null,chunk__20299,i__20301);
var k = cljs.core.nth.call(null,vec__20302,(0),null);
var v = cljs.core.nth.call(null,vec__20302,(1),null);
f.call(null,v,k);

var G__20308 = seq__20298;
var G__20309 = chunk__20299;
var G__20310 = count__20300;
var G__20311 = (i__20301 + (1));
seq__20298 = G__20308;
chunk__20299 = G__20309;
count__20300 = G__20310;
i__20301 = G__20311;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__20298);
if(temp__4425__auto__){
var seq__20298__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20298__$1)){
var c__15471__auto__ = cljs.core.chunk_first.call(null,seq__20298__$1);
var G__20312 = cljs.core.chunk_rest.call(null,seq__20298__$1);
var G__20313 = c__15471__auto__;
var G__20314 = cljs.core.count.call(null,c__15471__auto__);
var G__20315 = (0);
seq__20298 = G__20312;
chunk__20299 = G__20313;
count__20300 = G__20314;
i__20301 = G__20315;
continue;
} else {
var vec__20303 = cljs.core.first.call(null,seq__20298__$1);
var k = cljs.core.nth.call(null,vec__20303,(0),null);
var v = cljs.core.nth.call(null,vec__20303,(1),null);
f.call(null,v,k);

var G__20316 = cljs.core.next.call(null,seq__20298__$1);
var G__20317 = null;
var G__20318 = (0);
var G__20319 = (0);
seq__20298 = G__20316;
chunk__20299 = G__20317;
count__20300 = G__20318;
i__20301 = G__20319;
continue;
}
} else {
return null;
}
}
break;
}
});})(x20297,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x20297;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args20320 = [];
var len__15726__auto___20326 = arguments.length;
var i__15727__auto___20327 = (0);
while(true){
if((i__15727__auto___20327 < len__15726__auto___20326)){
args20320.push((arguments[i__15727__auto___20327]));

var G__20328 = (i__15727__auto___20327 + (1));
i__15727__auto___20327 = G__20328;
continue;
} else {
}
break;
}

var G__20322 = args20320.length;
switch (G__20322) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20320.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit20323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit20323 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta20324){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta20324 = meta20324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit20323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20325,meta20324__$1){
var self__ = this;
var _20325__$1 = this;
return (new cognitect.transit.t_cognitect$transit20323(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta20324__$1));
});

cognitect.transit.t_cognitect$transit20323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20325){
var self__ = this;
var _20325__$1 = this;
return self__.meta20324;
});

cognitect.transit.t_cognitect$transit20323.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20323.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit20323.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20323.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit20323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta20324","meta20324",1128071656,null)], null);
});

cognitect.transit.t_cognitect$transit20323.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit20323.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit20323";

cognitect.transit.t_cognitect$transit20323.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cognitect.transit/t_cognitect$transit20323");
});

cognitect.transit.__GT_t_cognitect$transit20323 = (function cognitect$transit$__GT_t_cognitect$transit20323(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20324){
return (new cognitect.transit.t_cognitect$transit20323(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta20324));
});

}

return (new cognitect.transit.t_cognitect$transit20323(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map