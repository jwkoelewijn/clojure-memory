// Compiled by ClojureScript 1.7.122 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.on_close = (function chord$client$on_close(var_args){
var args__15737__auto__ = [];
var len__15730__auto___19836 = arguments.length;
var i__15731__auto___19837 = (0);
while(true){
if((i__15731__auto___19837 < len__15730__auto___19836)){
args__15737__auto__.push((arguments[i__15731__auto___19837]));

var G__19838 = (i__15731__auto___19837 + (1));
i__15731__auto___19837 = G__19838;
continue;
} else {
}
break;
}

var argseq__15738__auto__ = ((((3) < args__15737__auto__.length))?(new cljs.core.IndexedSeq(args__15737__auto__.slice((3)),(0))):null);
return chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__15738__auto__);
});

chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic = (function (ws,read_ch,write_ch,p__19763){
var vec__19764 = p__19763;
var err_meta_channel = cljs.core.nth.call(null,vec__19764,(0),null);
return ws.onclose = ((function (vec__19764,err_meta_channel){
return (function (ev){
var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__,vec__19764,err_meta_channel){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__,vec__19764,err_meta_channel){
return (function (state_19803){
var state_val_19804 = (state_19803[(1)]);
if((state_val_19804 === (7))){
var inst_19799 = (state_19803[(2)]);
var inst_19800 = cljs.core.async.close_BANG_.call(null,read_ch);
var inst_19801 = cljs.core.async.close_BANG_.call(null,write_ch);
var state_19803__$1 = (function (){var statearr_19805 = state_19803;
(statearr_19805[(7)] = inst_19799);

(statearr_19805[(8)] = inst_19800);

return statearr_19805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19803__$1,inst_19801);
} else {
if((state_val_19804 === (1))){
var inst_19765 = (state_19803[(9)]);
var inst_19765__$1 = ws.error_seen;
var state_19803__$1 = (function (){var statearr_19806 = state_19803;
(statearr_19806[(9)] = inst_19765__$1);

return statearr_19806;
})();
if(cljs.core.truth_(inst_19765__$1)){
var statearr_19807_19839 = state_19803__$1;
(statearr_19807_19839[(1)] = (2));

} else {
var statearr_19808_19840 = state_19803__$1;
(statearr_19808_19840[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (4))){
var inst_19771 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
if(cljs.core.truth_(inst_19771)){
var statearr_19809_19841 = state_19803__$1;
(statearr_19809_19841[(1)] = (5));

} else {
var statearr_19810_19842 = state_19803__$1;
(statearr_19810_19842[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (6))){
var state_19803__$1 = state_19803;
var statearr_19811_19843 = state_19803__$1;
(statearr_19811_19843[(2)] = null);

(statearr_19811_19843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (3))){
var inst_19768 = ev.wasClean;
var inst_19769 = cljs.core.not.call(null,inst_19768);
var state_19803__$1 = state_19803;
var statearr_19812_19844 = state_19803__$1;
(statearr_19812_19844[(2)] = inst_19769);

(statearr_19812_19844[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (12))){
var inst_19796 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19813_19845 = state_19803__$1;
(statearr_19813_19845[(2)] = inst_19796);

(statearr_19813_19845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (2))){
var inst_19765 = (state_19803[(9)]);
var state_19803__$1 = state_19803;
var statearr_19814_19846 = state_19803__$1;
(statearr_19814_19846[(2)] = inst_19765);

(statearr_19814_19846[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (11))){
var inst_19791 = (state_19803[(2)]);
var state_19803__$1 = state_19803;
var statearr_19815_19847 = state_19803__$1;
(statearr_19815_19847[(2)] = inst_19791);

(statearr_19815_19847[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (9))){
var state_19803__$1 = state_19803;
var statearr_19816_19848 = state_19803__$1;
(statearr_19816_19848[(2)] = null);

(statearr_19816_19848[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (5))){
var inst_19773 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wasClean","wasClean",-1404940601)];
var inst_19774 = ev.reason;
var inst_19775 = ev.code;
var inst_19776 = ev.wasClean;
var inst_19777 = [inst_19774,inst_19775,inst_19776];
var inst_19778 = cljs.core.PersistentHashMap.fromArrays(inst_19773,inst_19777);
var state_19803__$1 = (function (){var statearr_19817 = state_19803;
(statearr_19817[(10)] = inst_19778);

return statearr_19817;
})();
if(cljs.core.truth_(err_meta_channel)){
var statearr_19818_19849 = state_19803__$1;
(statearr_19818_19849[(1)] = (8));

} else {
var statearr_19819_19850 = state_19803__$1;
(statearr_19819_19850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19804 === (10))){
var inst_19778 = (state_19803[(10)]);
var inst_19794 = (state_19803[(2)]);
var state_19803__$1 = (function (){var statearr_19820 = state_19803;
(statearr_19820[(11)] = inst_19794);

return statearr_19820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19803__$1,(12),read_ch,inst_19778);
} else {
if((state_val_19804 === (8))){
var inst_19778 = (state_19803[(10)]);
var inst_19765 = (state_19803[(9)]);
var inst_19783 = cljs.core.async.chan.call(null,(1));
var inst_19784 = (function (){var error_seen_QMARK_ = inst_19765;
var error_desc = inst_19778;
var c__16755__auto____$1 = inst_19783;
return ((function (error_seen_QMARK_,error_desc,c__16755__auto____$1,inst_19778,inst_19765,inst_19783,state_val_19804,c__16755__auto__,vec__19764,err_meta_channel){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (error_seen_QMARK_,error_desc,c__16755__auto____$1,inst_19778,inst_19765,inst_19783,state_val_19804,c__16755__auto__,vec__19764,err_meta_channel){
return (function (state_19781){
var state_val_19782 = (state_19781[(1)]);
if((state_val_19782 === (1))){
var state_19781__$1 = state_19781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19781__$1,error_desc);
} else {
return null;
}
});})(error_seen_QMARK_,error_desc,c__16755__auto____$1,inst_19778,inst_19765,inst_19783,state_val_19804,c__16755__auto__,vec__19764,err_meta_channel))
;
return ((function (switch__16690__auto__,error_seen_QMARK_,error_desc,c__16755__auto____$1,inst_19778,inst_19765,inst_19783,state_val_19804,c__16755__auto__,vec__19764,err_meta_channel){
return (function() {
var chord$client$state_machine__16691__auto__ = null;
var chord$client$state_machine__16691__auto____0 = (function (){
var statearr_19824 = [null,null,null,null,null,null,null];
(statearr_19824[(0)] = chord$client$state_machine__16691__auto__);

(statearr_19824[(1)] = (1));

return statearr_19824;
});
var chord$client$state_machine__16691__auto____1 = (function (state_19781){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_19781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e19825){if((e19825 instanceof Object)){
var ex__16694__auto__ = e19825;
var statearr_19826_19851 = state_19781;
(statearr_19826_19851[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19781);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19852 = state_19781;
state_19781 = G__19852;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
chord$client$state_machine__16691__auto__ = function(state_19781){
switch(arguments.length){
case 0:
return chord$client$state_machine__16691__auto____0.call(this);
case 1:
return chord$client$state_machine__16691__auto____1.call(this,state_19781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__16691__auto____0;
chord$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__16691__auto____1;
return chord$client$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,error_seen_QMARK_,error_desc,c__16755__auto____$1,inst_19778,inst_19765,inst_19783,state_val_19804,c__16755__auto__,vec__19764,err_meta_channel))
})();
var state__16757__auto__ = (function (){var statearr_19827 = f__16756__auto__.call(null);
(statearr_19827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto____$1);

return statearr_19827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});
;})(error_seen_QMARK_,error_desc,c__16755__auto____$1,inst_19778,inst_19765,inst_19783,state_val_19804,c__16755__auto__,vec__19764,err_meta_channel))
})();
var inst_19785 = cljs.core.async.impl.dispatch.run.call(null,inst_19784);
var inst_19787 = cljs.core.async.chan.call(null);
var inst_19788 = cljs.core.async.close_BANG_.call(null,inst_19787);
var inst_19789 = chord.channels.bidi_ch.call(null,inst_19783,inst_19787);
var state_19803__$1 = (function (){var statearr_19828 = state_19803;
(statearr_19828[(12)] = inst_19788);

(statearr_19828[(13)] = inst_19785);

return statearr_19828;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19803__$1,(11),err_meta_channel,inst_19789);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16755__auto__,vec__19764,err_meta_channel))
;
return ((function (switch__16690__auto__,c__16755__auto__,vec__19764,err_meta_channel){
return (function() {
var chord$client$state_machine__16691__auto__ = null;
var chord$client$state_machine__16691__auto____0 = (function (){
var statearr_19832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19832[(0)] = chord$client$state_machine__16691__auto__);

(statearr_19832[(1)] = (1));

return statearr_19832;
});
var chord$client$state_machine__16691__auto____1 = (function (state_19803){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_19803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e19833){if((e19833 instanceof Object)){
var ex__16694__auto__ = e19833;
var statearr_19834_19853 = state_19803;
(statearr_19834_19853[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19854 = state_19803;
state_19803 = G__19854;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
chord$client$state_machine__16691__auto__ = function(state_19803){
switch(arguments.length){
case 0:
return chord$client$state_machine__16691__auto____0.call(this);
case 1:
return chord$client$state_machine__16691__auto____1.call(this,state_19803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__16691__auto____0;
chord$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__16691__auto____1;
return chord$client$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__,vec__19764,err_meta_channel))
})();
var state__16757__auto__ = (function (){var statearr_19835 = f__16756__auto__.call(null);
(statearr_19835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_19835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__,vec__19764,err_meta_channel))
);

return c__16755__auto__;
});})(vec__19764,err_meta_channel))
;
});

chord.client.on_close.cljs$lang$maxFixedArity = (3);

chord.client.on_close.cljs$lang$applyTo = (function (seq19759){
var G__19760 = cljs.core.first.call(null,seq19759);
var seq19759__$1 = cljs.core.next.call(null,seq19759);
var G__19761 = cljs.core.first.call(null,seq19759__$1);
var seq19759__$2 = cljs.core.next.call(null,seq19759__$1);
var G__19762 = cljs.core.first.call(null,seq19759__$2);
var seq19759__$3 = cljs.core.next.call(null,seq19759__$2);
return chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic(G__19760,G__19761,G__19762,seq19759__$3);
});
chord.client.make_open_ch = (function chord$client$make_open_ch(ws,read_ch,write_ch,v){
var ch = cljs.core.async.chan.call(null);
chord.client.on_close.call(null,ws,read_ch,write_ch,ch);

ws.onopen = ((function (ch){
return (function (){
var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__,ch){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__,ch){
return (function (state_19873){
var state_val_19874 = (state_19873[(1)]);
if((state_val_19874 === (1))){
var state_19873__$1 = state_19873;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19873__$1,(2),ch,v);
} else {
if((state_val_19874 === (2))){
var inst_19870 = (state_19873[(2)]);
var inst_19871 = cljs.core.async.close_BANG_.call(null,ch);
var state_19873__$1 = (function (){var statearr_19875 = state_19873;
(statearr_19875[(7)] = inst_19870);

return statearr_19875;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19873__$1,inst_19871);
} else {
return null;
}
}
});})(c__16755__auto__,ch))
;
return ((function (switch__16690__auto__,c__16755__auto__,ch){
return (function() {
var chord$client$make_open_ch_$_state_machine__16691__auto__ = null;
var chord$client$make_open_ch_$_state_machine__16691__auto____0 = (function (){
var statearr_19879 = [null,null,null,null,null,null,null,null];
(statearr_19879[(0)] = chord$client$make_open_ch_$_state_machine__16691__auto__);

(statearr_19879[(1)] = (1));

return statearr_19879;
});
var chord$client$make_open_ch_$_state_machine__16691__auto____1 = (function (state_19873){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_19873);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e19880){if((e19880 instanceof Object)){
var ex__16694__auto__ = e19880;
var statearr_19881_19883 = state_19873;
(statearr_19881_19883[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19873);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19880;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19884 = state_19873;
state_19873 = G__19884;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
chord$client$make_open_ch_$_state_machine__16691__auto__ = function(state_19873){
switch(arguments.length){
case 0:
return chord$client$make_open_ch_$_state_machine__16691__auto____0.call(this);
case 1:
return chord$client$make_open_ch_$_state_machine__16691__auto____1.call(this,state_19873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$make_open_ch_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$make_open_ch_$_state_machine__16691__auto____0;
chord$client$make_open_ch_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$make_open_ch_$_state_machine__16691__auto____1;
return chord$client$make_open_ch_$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__,ch))
})();
var state__16757__auto__ = (function (){var statearr_19882 = f__16756__auto__.call(null);
(statearr_19882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_19882;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__,ch))
);

return c__16755__auto__;
});})(ch))
;

return ch;
});
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__15737__auto__ = [];
var len__15730__auto___19991 = arguments.length;
var i__15731__auto___19992 = (0);
while(true){
if((i__15731__auto___19992 < len__15730__auto___19991)){
args__15737__auto__.push((arguments[i__15731__auto___19992]));

var G__19993 = (i__15731__auto___19992 + (1));
i__15731__auto___19992 = G__19993;
continue;
} else {
}
break;
}

var argseq__15738__auto__ = ((((1) < args__15737__auto__.length))?(new cljs.core.IndexedSeq(args__15737__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15738__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__19889){
var vec__19890 = p__19889;
var map__19891 = cljs.core.nth.call(null,vec__19890,(0),null);
var map__19891__$1 = ((((!((map__19891 == null)))?((((map__19891.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19891.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19891):map__19891);
var opts = map__19891__$1;
var read_ch = cljs.core.get.call(null,map__19891__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__19891__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__19891__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__19893 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__14672__auto__ = read_ch;
if(cljs.core.truth_(or__14672__auto__)){
return or__14672__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__14672__auto__ = write_ch;
if(cljs.core.truth_(or__14672__auto__)){
return or__14672__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__19893__$1 = ((((!((map__19893 == null)))?((((map__19893.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19893.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19893):map__19893);
var read_ch__$1 = cljs.core.get.call(null,map__19893__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__19893__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format){
return (function (p1__19885_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__19885_SHARP_);
});})(web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format){
return (function (p1__19886_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__19886_SHARP_);
});})(web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__16755__auto___19994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___19994,ws_chan,initial_ch,web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___19994,ws_chan,initial_ch,web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format){
return (function (state_19954){
var state_val_19955 = (state_19954[(1)]);
if((state_val_19955 === (7))){
var inst_19950 = (state_19954[(2)]);
var state_19954__$1 = state_19954;
var statearr_19956_19995 = state_19954__$1;
(statearr_19956_19995[(2)] = inst_19950);

(statearr_19956_19995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (20))){
var state_19954__$1 = state_19954;
var statearr_19957_19996 = state_19954__$1;
(statearr_19957_19996[(2)] = null);

(statearr_19957_19996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (1))){
var inst_19895 = false;
var state_19954__$1 = (function (){var statearr_19958 = state_19954;
(statearr_19958[(7)] = inst_19895);

return statearr_19958;
})();
var statearr_19959_19997 = state_19954__$1;
(statearr_19959_19997[(2)] = null);

(statearr_19959_19997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (4))){
var inst_19906 = (state_19954[(8)]);
var inst_19908 = (state_19954[(9)]);
var inst_19906__$1 = (state_19954[(2)]);
var inst_19907 = cljs.core.nth.call(null,inst_19906__$1,(0),null);
var inst_19908__$1 = cljs.core.nth.call(null,inst_19906__$1,(1),null);
var inst_19909 = cljs.core._EQ_.call(null,inst_19908__$1,open_ch);
var state_19954__$1 = (function (){var statearr_19960 = state_19954;
(statearr_19960[(8)] = inst_19906__$1);

(statearr_19960[(9)] = inst_19908__$1);

(statearr_19960[(10)] = inst_19907);

return statearr_19960;
})();
if(inst_19909){
var statearr_19961_19998 = state_19954__$1;
(statearr_19961_19998[(1)] = (5));

} else {
var statearr_19962_19999 = state_19954__$1;
(statearr_19962_19999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (15))){
var inst_19935 = (state_19954[(2)]);
var state_19954__$1 = state_19954;
var statearr_19963_20000 = state_19954__$1;
(statearr_19963_20000[(2)] = inst_19935);

(statearr_19963_20000[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (21))){
var inst_19946 = (state_19954[(2)]);
var state_19954__$1 = state_19954;
var statearr_19964_20001 = state_19954__$1;
(statearr_19964_20001[(2)] = inst_19946);

(statearr_19964_20001[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (13))){
var state_19954__$1 = state_19954;
var statearr_19965_20002 = state_19954__$1;
(statearr_19965_20002[(2)] = null);

(statearr_19965_20002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (6))){
var inst_19908 = (state_19954[(9)]);
var inst_19921 = cljs.core._EQ_.call(null,inst_19908,close_ch);
var state_19954__$1 = state_19954;
if(inst_19921){
var statearr_19966_20003 = state_19954__$1;
(statearr_19966_20003[(1)] = (9));

} else {
var statearr_19967_20004 = state_19954__$1;
(statearr_19967_20004[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (17))){
var state_19954__$1 = state_19954;
var statearr_19968_20005 = state_19954__$1;
(statearr_19968_20005[(2)] = initial_ch);

(statearr_19968_20005[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (3))){
var inst_19952 = (state_19954[(2)]);
var state_19954__$1 = state_19954;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19954__$1,inst_19952);
} else {
if((state_val_19955 === (12))){
var inst_19895 = (state_19954[(7)]);
var state_19954__$1 = state_19954;
if(cljs.core.truth_(inst_19895)){
var statearr_19969_20006 = state_19954__$1;
(statearr_19969_20006[(1)] = (16));

} else {
var statearr_19970_20007 = state_19954__$1;
(statearr_19970_20007[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (2))){
var inst_19902 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19903 = [open_ch,close_ch];
var inst_19904 = (new cljs.core.PersistentVector(null,2,(5),inst_19902,inst_19903,null));
var state_19954__$1 = state_19954;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19954__$1,(4),inst_19904);
} else {
if((state_val_19955 === (19))){
var inst_19907 = (state_19954[(10)]);
var state_19954__$1 = state_19954;
var statearr_19971_20008 = state_19954__$1;
(statearr_19971_20008[(2)] = inst_19907);

(statearr_19971_20008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (11))){
var inst_19948 = (state_19954[(2)]);
var state_19954__$1 = state_19954;
var statearr_19972_20009 = state_19954__$1;
(statearr_19972_20009[(2)] = inst_19948);

(statearr_19972_20009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (9))){
var inst_19925 = (state_19954[(11)]);
var inst_19906 = (state_19954[(8)]);
var inst_19924 = cljs.core.nth.call(null,inst_19906,(0),null);
var inst_19925__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_19924);
var state_19954__$1 = (function (){var statearr_19973 = state_19954;
(statearr_19973[(11)] = inst_19925__$1);

return statearr_19973;
})();
if(cljs.core.truth_(inst_19925__$1)){
var statearr_19974_20010 = state_19954__$1;
(statearr_19974_20010[(1)] = (12));

} else {
var statearr_19975_20011 = state_19954__$1;
(statearr_19975_20011[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (5))){
var inst_19906 = (state_19954[(8)]);
var inst_19912 = cljs.core.nth.call(null,inst_19906,(0),null);
var inst_19913 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_19914 = [ws_chan];
var inst_19915 = cljs.core.PersistentHashMap.fromArrays(inst_19913,inst_19914);
var state_19954__$1 = (function (){var statearr_19976 = state_19954;
(statearr_19976[(12)] = inst_19912);

return statearr_19976;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19954__$1,(8),initial_ch,inst_19915);
} else {
if((state_val_19955 === (14))){
var inst_19938 = (state_19954[(2)]);
var inst_19939 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_19940 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_19954__$1 = (function (){var statearr_19977 = state_19954;
(statearr_19977[(13)] = inst_19938);

(statearr_19977[(14)] = inst_19939);

return statearr_19977;
})();
var statearr_19978_20012 = state_19954__$1;
(statearr_19978_20012[(2)] = inst_19940);

(statearr_19978_20012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (16))){
var state_19954__$1 = state_19954;
var statearr_19979_20013 = state_19954__$1;
(statearr_19979_20013[(2)] = read_ch__$1);

(statearr_19979_20013[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (10))){
var inst_19908 = (state_19954[(9)]);
var inst_19942 = cljs.core._EQ_.call(null,inst_19908,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_19954__$1 = state_19954;
if(inst_19942){
var statearr_19980_20014 = state_19954__$1;
(statearr_19980_20014[(1)] = (19));

} else {
var statearr_19981_20015 = state_19954__$1;
(statearr_19981_20015[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19955 === (18))){
var inst_19925 = (state_19954[(11)]);
var inst_19930 = (state_19954[(2)]);
var inst_19931 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19932 = [inst_19925];
var inst_19933 = cljs.core.PersistentHashMap.fromArrays(inst_19931,inst_19932);
var state_19954__$1 = state_19954;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19954__$1,(15),inst_19930,inst_19933);
} else {
if((state_val_19955 === (8))){
var inst_19917 = (state_19954[(2)]);
var inst_19918 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_19895 = true;
var state_19954__$1 = (function (){var statearr_19982 = state_19954;
(statearr_19982[(7)] = inst_19895);

(statearr_19982[(15)] = inst_19918);

(statearr_19982[(16)] = inst_19917);

return statearr_19982;
})();
var statearr_19983_20016 = state_19954__$1;
(statearr_19983_20016[(2)] = null);

(statearr_19983_20016[(1)] = (2));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__16755__auto___19994,ws_chan,initial_ch,web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__16690__auto__,c__16755__auto___19994,ws_chan,initial_ch,web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__16691__auto__ = null;
var chord$client$state_machine__16691__auto____0 = (function (){
var statearr_19987 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19987[(0)] = chord$client$state_machine__16691__auto__);

(statearr_19987[(1)] = (1));

return statearr_19987;
});
var chord$client$state_machine__16691__auto____1 = (function (state_19954){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_19954);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e19988){if((e19988 instanceof Object)){
var ex__16694__auto__ = e19988;
var statearr_19989_20017 = state_19954;
(statearr_19989_20017[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19954);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20018 = state_19954;
state_19954 = G__20018;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
chord$client$state_machine__16691__auto__ = function(state_19954){
switch(arguments.length){
case 0:
return chord$client$state_machine__16691__auto____0.call(this);
case 1:
return chord$client$state_machine__16691__auto____1.call(this,state_19954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__16691__auto____0;
chord$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__16691__auto____1;
return chord$client$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___19994,ws_chan,initial_ch,web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format))
})();
var state__16757__auto__ = (function (){var statearr_19990 = f__16756__auto__.call(null);
(statearr_19990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___19994);

return statearr_19990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___19994,ws_chan,initial_ch,web_socket,map__19893,map__19893__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19890,map__19891,map__19891__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq19887){
var G__19888 = cljs.core.first.call(null,seq19887);
var seq19887__$1 = cljs.core.next.call(null,seq19887);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__19888,seq19887__$1);
});

//# sourceMappingURL=client.js.map