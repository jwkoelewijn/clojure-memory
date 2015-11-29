// Compiled by ClojureScript 1.7.122 {}
goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
});
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__){
return (function (state_20373){
var state_val_20374 = (state_20373[(1)]);
if((state_val_20374 === (1))){
var state_20373__$1 = state_20373;
var statearr_20375_20390 = state_20373__$1;
(statearr_20375_20390[(2)] = null);

(statearr_20375_20390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (2))){
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20373__$1,(4),ch);
} else {
if((state_val_20374 === (3))){
var inst_20371 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20373__$1,inst_20371);
} else {
if((state_val_20374 === (4))){
var inst_20363 = (state_20373[(7)]);
var inst_20363__$1 = (state_20373[(2)]);
var state_20373__$1 = (function (){var statearr_20376 = state_20373;
(statearr_20376[(7)] = inst_20363__$1);

return statearr_20376;
})();
if(cljs.core.truth_(inst_20363__$1)){
var statearr_20377_20391 = state_20373__$1;
(statearr_20377_20391[(1)] = (5));

} else {
var statearr_20378_20392 = state_20373__$1;
(statearr_20378_20392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (5))){
var inst_20363 = (state_20373[(7)]);
var inst_20365 = ws.send(inst_20363);
var state_20373__$1 = (function (){var statearr_20379 = state_20373;
(statearr_20379[(8)] = inst_20365);

return statearr_20379;
})();
var statearr_20380_20393 = state_20373__$1;
(statearr_20380_20393[(2)] = null);

(statearr_20380_20393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (6))){
var state_20373__$1 = state_20373;
var statearr_20381_20394 = state_20373__$1;
(statearr_20381_20394[(2)] = null);

(statearr_20381_20394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20374 === (7))){
var inst_20369 = (state_20373[(2)]);
var state_20373__$1 = state_20373;
var statearr_20382_20395 = state_20373__$1;
(statearr_20382_20395[(2)] = inst_20369);

(statearr_20382_20395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__16751__auto__))
;
return ((function (switch__16686__auto__,c__16751__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__16687__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__16687__auto____0 = (function (){
var statearr_20386 = [null,null,null,null,null,null,null,null,null];
(statearr_20386[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__16687__auto__);

(statearr_20386[(1)] = (1));

return statearr_20386;
});
var chord$channels$write_to_ws_BANG__$_state_machine__16687__auto____1 = (function (state_20373){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_20373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e20387){if((e20387 instanceof Object)){
var ex__16690__auto__ = e20387;
var statearr_20388_20396 = state_20373;
(statearr_20388_20396[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20397 = state_20373;
state_20373 = G__20397;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__16687__auto__ = function(state_20373){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__16687__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__16687__auto____1.call(this,state_20373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__16687__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__16687__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__))
})();
var state__16753__auto__ = (function (){var statearr_20389 = f__16752__auto__.call(null);
(statearr_20389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_20389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__))
);

return c__16751__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__15733__auto__ = [];
var len__15726__auto___20408 = arguments.length;
var i__15727__auto___20409 = (0);
while(true){
if((i__15727__auto___20409 < len__15726__auto___20408)){
args__15733__auto__.push((arguments[i__15727__auto___20409]));

var G__20410 = (i__15727__auto___20409 + (1));
i__15727__auto___20409 = G__20410;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((2) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__15734__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__20401){
var vec__20402 = p__20401;
var map__20403 = cljs.core.nth.call(null,vec__20402,(0),null);
var map__20403__$1 = ((((!((map__20403 == null)))?((((map__20403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20403):map__20403);
var on_close = cljs.core.get.call(null,map__20403__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels20405 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels20405 = (function (read_ch,write_ch,p__20401,vec__20402,map__20403,on_close,meta20406){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__20401 = p__20401;
this.vec__20402 = vec__20402;
this.map__20403 = map__20403;
this.on_close = on_close;
this.meta20406 = meta20406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels20405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (_20407,meta20406__$1){
var self__ = this;
var _20407__$1 = this;
return (new chord.channels.t_chord$channels20405(self__.read_ch,self__.write_ch,self__.p__20401,self__.vec__20402,self__.map__20403,self__.on_close,meta20406__$1));
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.t_chord$channels20405.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (_20407){
var self__ = this;
var _20407__$1 = this;
return self__.meta20406;
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.t_chord$channels20405.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels20405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.t_chord$channels20405.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels20405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.t_chord$channels20405.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels20405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return self__.on_close.call(null);
} else {
return null;
}
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.t_chord$channels20405.getBasis = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__20401","p__20401",336910843,null),new cljs.core.Symbol(null,"vec__20402","vec__20402",1600984984,null),new cljs.core.Symbol(null,"map__20403","map__20403",225480069,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta20406","meta20406",432758073,null)], null);
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.t_chord$channels20405.cljs$lang$type = true;

chord.channels.t_chord$channels20405.cljs$lang$ctorStr = "chord.channels/t_chord$channels20405";

chord.channels.t_chord$channels20405.cljs$lang$ctorPrWriter = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"chord.channels/t_chord$channels20405");
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

chord.channels.__GT_t_chord$channels20405 = ((function (vec__20402,map__20403,map__20403__$1,on_close){
return (function chord$channels$__GT_t_chord$channels20405(read_ch__$1,write_ch__$1,p__20401__$1,vec__20402__$1,map__20403__$2,on_close__$1,meta20406){
return (new chord.channels.t_chord$channels20405(read_ch__$1,write_ch__$1,p__20401__$1,vec__20402__$1,map__20403__$2,on_close__$1,meta20406));
});})(vec__20402,map__20403,map__20403__$1,on_close))
;

}

return (new chord.channels.t_chord$channels20405(read_ch,write_ch,p__20401,vec__20402,map__20403__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq20398){
var G__20399 = cljs.core.first.call(null,seq20398);
var seq20398__$1 = cljs.core.next.call(null,seq20398);
var G__20400 = cljs.core.first.call(null,seq20398__$1);
var seq20398__$2 = cljs.core.next.call(null,seq20398__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__20399,G__20400,seq20398__$2);
});

//# sourceMappingURL=channels.js.map