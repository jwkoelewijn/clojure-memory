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
var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__){
return (function (state_20377){
var state_val_20378 = (state_20377[(1)]);
if((state_val_20378 === (1))){
var state_20377__$1 = state_20377;
var statearr_20379_20394 = state_20377__$1;
(statearr_20379_20394[(2)] = null);

(statearr_20379_20394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20378 === (2))){
var state_20377__$1 = state_20377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20377__$1,(4),ch);
} else {
if((state_val_20378 === (3))){
var inst_20375 = (state_20377[(2)]);
var state_20377__$1 = state_20377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20377__$1,inst_20375);
} else {
if((state_val_20378 === (4))){
var inst_20367 = (state_20377[(7)]);
var inst_20367__$1 = (state_20377[(2)]);
var state_20377__$1 = (function (){var statearr_20380 = state_20377;
(statearr_20380[(7)] = inst_20367__$1);

return statearr_20380;
})();
if(cljs.core.truth_(inst_20367__$1)){
var statearr_20381_20395 = state_20377__$1;
(statearr_20381_20395[(1)] = (5));

} else {
var statearr_20382_20396 = state_20377__$1;
(statearr_20382_20396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20378 === (5))){
var inst_20367 = (state_20377[(7)]);
var inst_20369 = ws.send(inst_20367);
var state_20377__$1 = (function (){var statearr_20383 = state_20377;
(statearr_20383[(8)] = inst_20369);

return statearr_20383;
})();
var statearr_20384_20397 = state_20377__$1;
(statearr_20384_20397[(2)] = null);

(statearr_20384_20397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20378 === (6))){
var state_20377__$1 = state_20377;
var statearr_20385_20398 = state_20377__$1;
(statearr_20385_20398[(2)] = null);

(statearr_20385_20398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20378 === (7))){
var inst_20373 = (state_20377[(2)]);
var state_20377__$1 = state_20377;
var statearr_20386_20399 = state_20377__$1;
(statearr_20386_20399[(2)] = inst_20373);

(statearr_20386_20399[(1)] = (3));


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
});})(c__16755__auto__))
;
return ((function (switch__16690__auto__,c__16755__auto__){
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__16691__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__16691__auto____0 = (function (){
var statearr_20390 = [null,null,null,null,null,null,null,null,null];
(statearr_20390[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__16691__auto__);

(statearr_20390[(1)] = (1));

return statearr_20390;
});
var chord$channels$write_to_ws_BANG__$_state_machine__16691__auto____1 = (function (state_20377){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_20377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e20391){if((e20391 instanceof Object)){
var ex__16694__auto__ = e20391;
var statearr_20392_20400 = state_20377;
(statearr_20392_20400[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20401 = state_20377;
state_20377 = G__20401;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__16691__auto__ = function(state_20377){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__16691__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__16691__auto____1.call(this,state_20377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__16691__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__16691__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__))
})();
var state__16757__auto__ = (function (){var statearr_20393 = f__16756__auto__.call(null);
(statearr_20393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_20393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__))
);

return c__16755__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__15737__auto__ = [];
var len__15730__auto___20412 = arguments.length;
var i__15731__auto___20413 = (0);
while(true){
if((i__15731__auto___20413 < len__15730__auto___20412)){
args__15737__auto__.push((arguments[i__15731__auto___20413]));

var G__20414 = (i__15731__auto___20413 + (1));
i__15731__auto___20413 = G__20414;
continue;
} else {
}
break;
}

var argseq__15738__auto__ = ((((2) < args__15737__auto__.length))?(new cljs.core.IndexedSeq(args__15737__auto__.slice((2)),(0))):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__15738__auto__);
});

chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__20405){
var vec__20406 = p__20405;
var map__20407 = cljs.core.nth.call(null,vec__20406,(0),null);
var map__20407__$1 = ((((!((map__20407 == null)))?((((map__20407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20407):map__20407);
var on_close = cljs.core.get.call(null,map__20407__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if(typeof chord.channels.t_chord$channels20409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels20409 = (function (read_ch,write_ch,p__20405,vec__20406,map__20407,on_close,meta20410){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__20405 = p__20405;
this.vec__20406 = vec__20406;
this.map__20407 = map__20407;
this.on_close = on_close;
this.meta20410 = meta20410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
chord.channels.t_chord$channels20409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function (_20411,meta20410__$1){
var self__ = this;
var _20411__$1 = this;
return (new chord.channels.t_chord$channels20409(self__.read_ch,self__.write_ch,self__.p__20405,self__.vec__20406,self__.map__20407,self__.on_close,meta20410__$1));
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.t_chord$channels20409.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function (_20411){
var self__ = this;
var _20411__$1 = this;
return self__.meta20410;
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.t_chord$channels20409.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

chord.channels.t_chord$channels20409.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.t_chord$channels20409.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

chord.channels.t_chord$channels20409.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.t_chord$channels20409.prototype.cljs$core$async$impl$protocols$Channel$ = true;

chord.channels.t_chord$channels20409.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = ((function (vec__20406,map__20407,map__20407__$1,on_close){
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
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.t_chord$channels20409.getBasis = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__20405","p__20405",1844863673,null),new cljs.core.Symbol(null,"vec__20406","vec__20406",1617739108,null),new cljs.core.Symbol(null,"map__20407","map__20407",47707000,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta20410","meta20410",-1341049645,null)], null);
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.t_chord$channels20409.cljs$lang$type = true;

chord.channels.t_chord$channels20409.cljs$lang$ctorStr = "chord.channels/t_chord$channels20409";

chord.channels.t_chord$channels20409.cljs$lang$ctorPrWriter = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"chord.channels/t_chord$channels20409");
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

chord.channels.__GT_t_chord$channels20409 = ((function (vec__20406,map__20407,map__20407__$1,on_close){
return (function chord$channels$__GT_t_chord$channels20409(read_ch__$1,write_ch__$1,p__20405__$1,vec__20406__$1,map__20407__$2,on_close__$1,meta20410){
return (new chord.channels.t_chord$channels20409(read_ch__$1,write_ch__$1,p__20405__$1,vec__20406__$1,map__20407__$2,on_close__$1,meta20410));
});})(vec__20406,map__20407,map__20407__$1,on_close))
;

}

return (new chord.channels.t_chord$channels20409(read_ch,write_ch,p__20405,vec__20406,map__20407__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
});

chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2);

chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq20402){
var G__20403 = cljs.core.first.call(null,seq20402);
var seq20402__$1 = cljs.core.next.call(null,seq20402);
var G__20404 = cljs.core.first.call(null,seq20402__$1);
var seq20402__$2 = cljs.core.next.call(null,seq20402__$1);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(G__20403,G__20404,seq20402__$2);
});

//# sourceMappingURL=channels.js.map