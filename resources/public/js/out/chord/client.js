// Compiled by ClojureScript 1.7.122 {}
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.on_close = (function chord$client$on_close(var_args){
var args__15733__auto__ = [];
var len__15726__auto___19832 = arguments.length;
var i__15727__auto___19833 = (0);
while(true){
if((i__15727__auto___19833 < len__15726__auto___19832)){
args__15733__auto__.push((arguments[i__15727__auto___19833]));

var G__19834 = (i__15727__auto___19833 + (1));
i__15727__auto___19833 = G__19834;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((3) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((3)),(0))):null);
return chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__15734__auto__);
});

chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic = (function (ws,read_ch,write_ch,p__19759){
var vec__19760 = p__19759;
var err_meta_channel = cljs.core.nth.call(null,vec__19760,(0),null);
return ws.onclose = ((function (vec__19760,err_meta_channel){
return (function (ev){
var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__,vec__19760,err_meta_channel){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__,vec__19760,err_meta_channel){
return (function (state_19799){
var state_val_19800 = (state_19799[(1)]);
if((state_val_19800 === (7))){
var inst_19795 = (state_19799[(2)]);
var inst_19796 = cljs.core.async.close_BANG_.call(null,read_ch);
var inst_19797 = cljs.core.async.close_BANG_.call(null,write_ch);
var state_19799__$1 = (function (){var statearr_19801 = state_19799;
(statearr_19801[(7)] = inst_19796);

(statearr_19801[(8)] = inst_19795);

return statearr_19801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19799__$1,inst_19797);
} else {
if((state_val_19800 === (1))){
var inst_19761 = (state_19799[(9)]);
var inst_19761__$1 = ws.error_seen;
var state_19799__$1 = (function (){var statearr_19802 = state_19799;
(statearr_19802[(9)] = inst_19761__$1);

return statearr_19802;
})();
if(cljs.core.truth_(inst_19761__$1)){
var statearr_19803_19835 = state_19799__$1;
(statearr_19803_19835[(1)] = (2));

} else {
var statearr_19804_19836 = state_19799__$1;
(statearr_19804_19836[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (4))){
var inst_19767 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
if(cljs.core.truth_(inst_19767)){
var statearr_19805_19837 = state_19799__$1;
(statearr_19805_19837[(1)] = (5));

} else {
var statearr_19806_19838 = state_19799__$1;
(statearr_19806_19838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (6))){
var state_19799__$1 = state_19799;
var statearr_19807_19839 = state_19799__$1;
(statearr_19807_19839[(2)] = null);

(statearr_19807_19839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (3))){
var inst_19764 = ev.wasClean;
var inst_19765 = cljs.core.not.call(null,inst_19764);
var state_19799__$1 = state_19799;
var statearr_19808_19840 = state_19799__$1;
(statearr_19808_19840[(2)] = inst_19765);

(statearr_19808_19840[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (12))){
var inst_19792 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19809_19841 = state_19799__$1;
(statearr_19809_19841[(2)] = inst_19792);

(statearr_19809_19841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (2))){
var inst_19761 = (state_19799[(9)]);
var state_19799__$1 = state_19799;
var statearr_19810_19842 = state_19799__$1;
(statearr_19810_19842[(2)] = inst_19761);

(statearr_19810_19842[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (11))){
var inst_19787 = (state_19799[(2)]);
var state_19799__$1 = state_19799;
var statearr_19811_19843 = state_19799__$1;
(statearr_19811_19843[(2)] = inst_19787);

(statearr_19811_19843[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (9))){
var state_19799__$1 = state_19799;
var statearr_19812_19844 = state_19799__$1;
(statearr_19812_19844[(2)] = null);

(statearr_19812_19844[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (5))){
var inst_19769 = [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"wasClean","wasClean",-1404940601)];
var inst_19770 = ev.reason;
var inst_19771 = ev.code;
var inst_19772 = ev.wasClean;
var inst_19773 = [inst_19770,inst_19771,inst_19772];
var inst_19774 = cljs.core.PersistentHashMap.fromArrays(inst_19769,inst_19773);
var state_19799__$1 = (function (){var statearr_19813 = state_19799;
(statearr_19813[(10)] = inst_19774);

return statearr_19813;
})();
if(cljs.core.truth_(err_meta_channel)){
var statearr_19814_19845 = state_19799__$1;
(statearr_19814_19845[(1)] = (8));

} else {
var statearr_19815_19846 = state_19799__$1;
(statearr_19815_19846[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19800 === (10))){
var inst_19774 = (state_19799[(10)]);
var inst_19790 = (state_19799[(2)]);
var state_19799__$1 = (function (){var statearr_19816 = state_19799;
(statearr_19816[(11)] = inst_19790);

return statearr_19816;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19799__$1,(12),read_ch,inst_19774);
} else {
if((state_val_19800 === (8))){
var inst_19761 = (state_19799[(9)]);
var inst_19774 = (state_19799[(10)]);
var inst_19779 = cljs.core.async.chan.call(null,(1));
var inst_19780 = (function (){var error_seen_QMARK_ = inst_19761;
var error_desc = inst_19774;
var c__16751__auto____$1 = inst_19779;
return ((function (error_seen_QMARK_,error_desc,c__16751__auto____$1,inst_19761,inst_19774,inst_19779,state_val_19800,c__16751__auto__,vec__19760,err_meta_channel){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (error_seen_QMARK_,error_desc,c__16751__auto____$1,inst_19761,inst_19774,inst_19779,state_val_19800,c__16751__auto__,vec__19760,err_meta_channel){
return (function (state_19777){
var state_val_19778 = (state_19777[(1)]);
if((state_val_19778 === (1))){
var state_19777__$1 = state_19777;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19777__$1,error_desc);
} else {
return null;
}
});})(error_seen_QMARK_,error_desc,c__16751__auto____$1,inst_19761,inst_19774,inst_19779,state_val_19800,c__16751__auto__,vec__19760,err_meta_channel))
;
return ((function (switch__16686__auto__,error_seen_QMARK_,error_desc,c__16751__auto____$1,inst_19761,inst_19774,inst_19779,state_val_19800,c__16751__auto__,vec__19760,err_meta_channel){
return (function() {
var chord$client$state_machine__16687__auto__ = null;
var chord$client$state_machine__16687__auto____0 = (function (){
var statearr_19820 = [null,null,null,null,null,null,null];
(statearr_19820[(0)] = chord$client$state_machine__16687__auto__);

(statearr_19820[(1)] = (1));

return statearr_19820;
});
var chord$client$state_machine__16687__auto____1 = (function (state_19777){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_19777);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e19821){if((e19821 instanceof Object)){
var ex__16690__auto__ = e19821;
var statearr_19822_19847 = state_19777;
(statearr_19822_19847[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19777);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19821;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19848 = state_19777;
state_19777 = G__19848;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
chord$client$state_machine__16687__auto__ = function(state_19777){
switch(arguments.length){
case 0:
return chord$client$state_machine__16687__auto____0.call(this);
case 1:
return chord$client$state_machine__16687__auto____1.call(this,state_19777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__16687__auto____0;
chord$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__16687__auto____1;
return chord$client$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,error_seen_QMARK_,error_desc,c__16751__auto____$1,inst_19761,inst_19774,inst_19779,state_val_19800,c__16751__auto__,vec__19760,err_meta_channel))
})();
var state__16753__auto__ = (function (){var statearr_19823 = f__16752__auto__.call(null);
(statearr_19823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto____$1);

return statearr_19823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});
;})(error_seen_QMARK_,error_desc,c__16751__auto____$1,inst_19761,inst_19774,inst_19779,state_val_19800,c__16751__auto__,vec__19760,err_meta_channel))
})();
var inst_19781 = cljs.core.async.impl.dispatch.run.call(null,inst_19780);
var inst_19783 = cljs.core.async.chan.call(null);
var inst_19784 = cljs.core.async.close_BANG_.call(null,inst_19783);
var inst_19785 = chord.channels.bidi_ch.call(null,inst_19779,inst_19783);
var state_19799__$1 = (function (){var statearr_19824 = state_19799;
(statearr_19824[(12)] = inst_19781);

(statearr_19824[(13)] = inst_19784);

return statearr_19824;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19799__$1,(11),err_meta_channel,inst_19785);
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
});})(c__16751__auto__,vec__19760,err_meta_channel))
;
return ((function (switch__16686__auto__,c__16751__auto__,vec__19760,err_meta_channel){
return (function() {
var chord$client$state_machine__16687__auto__ = null;
var chord$client$state_machine__16687__auto____0 = (function (){
var statearr_19828 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19828[(0)] = chord$client$state_machine__16687__auto__);

(statearr_19828[(1)] = (1));

return statearr_19828;
});
var chord$client$state_machine__16687__auto____1 = (function (state_19799){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_19799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e19829){if((e19829 instanceof Object)){
var ex__16690__auto__ = e19829;
var statearr_19830_19849 = state_19799;
(statearr_19830_19849[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19829;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19850 = state_19799;
state_19799 = G__19850;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
chord$client$state_machine__16687__auto__ = function(state_19799){
switch(arguments.length){
case 0:
return chord$client$state_machine__16687__auto____0.call(this);
case 1:
return chord$client$state_machine__16687__auto____1.call(this,state_19799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__16687__auto____0;
chord$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__16687__auto____1;
return chord$client$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__,vec__19760,err_meta_channel))
})();
var state__16753__auto__ = (function (){var statearr_19831 = f__16752__auto__.call(null);
(statearr_19831[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_19831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__,vec__19760,err_meta_channel))
);

return c__16751__auto__;
});})(vec__19760,err_meta_channel))
;
});

chord.client.on_close.cljs$lang$maxFixedArity = (3);

chord.client.on_close.cljs$lang$applyTo = (function (seq19755){
var G__19756 = cljs.core.first.call(null,seq19755);
var seq19755__$1 = cljs.core.next.call(null,seq19755);
var G__19757 = cljs.core.first.call(null,seq19755__$1);
var seq19755__$2 = cljs.core.next.call(null,seq19755__$1);
var G__19758 = cljs.core.first.call(null,seq19755__$2);
var seq19755__$3 = cljs.core.next.call(null,seq19755__$2);
return chord.client.on_close.cljs$core$IFn$_invoke$arity$variadic(G__19756,G__19757,G__19758,seq19755__$3);
});
chord.client.make_open_ch = (function chord$client$make_open_ch(ws,read_ch,write_ch,v){
var ch = cljs.core.async.chan.call(null);
chord.client.on_close.call(null,ws,read_ch,write_ch,ch);

ws.onopen = ((function (ch){
return (function (){
var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__,ch){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__,ch){
return (function (state_19869){
var state_val_19870 = (state_19869[(1)]);
if((state_val_19870 === (1))){
var state_19869__$1 = state_19869;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19869__$1,(2),ch,v);
} else {
if((state_val_19870 === (2))){
var inst_19866 = (state_19869[(2)]);
var inst_19867 = cljs.core.async.close_BANG_.call(null,ch);
var state_19869__$1 = (function (){var statearr_19871 = state_19869;
(statearr_19871[(7)] = inst_19866);

return statearr_19871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19869__$1,inst_19867);
} else {
return null;
}
}
});})(c__16751__auto__,ch))
;
return ((function (switch__16686__auto__,c__16751__auto__,ch){
return (function() {
var chord$client$make_open_ch_$_state_machine__16687__auto__ = null;
var chord$client$make_open_ch_$_state_machine__16687__auto____0 = (function (){
var statearr_19875 = [null,null,null,null,null,null,null,null];
(statearr_19875[(0)] = chord$client$make_open_ch_$_state_machine__16687__auto__);

(statearr_19875[(1)] = (1));

return statearr_19875;
});
var chord$client$make_open_ch_$_state_machine__16687__auto____1 = (function (state_19869){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_19869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e19876){if((e19876 instanceof Object)){
var ex__16690__auto__ = e19876;
var statearr_19877_19879 = state_19869;
(statearr_19877_19879[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19880 = state_19869;
state_19869 = G__19880;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
chord$client$make_open_ch_$_state_machine__16687__auto__ = function(state_19869){
switch(arguments.length){
case 0:
return chord$client$make_open_ch_$_state_machine__16687__auto____0.call(this);
case 1:
return chord$client$make_open_ch_$_state_machine__16687__auto____1.call(this,state_19869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$make_open_ch_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$make_open_ch_$_state_machine__16687__auto____0;
chord$client$make_open_ch_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$make_open_ch_$_state_machine__16687__auto____1;
return chord$client$make_open_ch_$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__,ch))
})();
var state__16753__auto__ = (function (){var statearr_19878 = f__16752__auto__.call(null);
(statearr_19878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_19878;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__,ch))
);

return c__16751__auto__;
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
var args__15733__auto__ = [];
var len__15726__auto___19987 = arguments.length;
var i__15727__auto___19988 = (0);
while(true){
if((i__15727__auto___19988 < len__15726__auto___19987)){
args__15733__auto__.push((arguments[i__15727__auto___19988]));

var G__19989 = (i__15727__auto___19988 + (1));
i__15727__auto___19988 = G__19989;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((1) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((1)),(0))):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15734__auto__);
});

chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__19885){
var vec__19886 = p__19885;
var map__19887 = cljs.core.nth.call(null,vec__19886,(0),null);
var map__19887__$1 = ((((!((map__19887 == null)))?((((map__19887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19887):map__19887);
var opts = map__19887__$1;
var read_ch = cljs.core.get.call(null,map__19887__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.call(null,map__19887__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.call(null,map__19887__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var web_socket = (new WebSocket(ws_url));
var map__19889 = chord.format.wrap_format.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__14668__auto__ = read_ch;
if(cljs.core.truth_(or__14668__auto__)){
return or__14668__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__14668__auto__ = write_ch;
if(cljs.core.truth_(or__14668__auto__)){
return or__14668__auto__;
} else {
return cljs.core.async.chan.call(null);
}
})()], null),opts);
var map__19889__$1 = ((((!((map__19889 == null)))?((((map__19889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19889):map__19889);
var read_ch__$1 = cljs.core.get.call(null,map__19889__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.call(null,map__19889__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.call(null);
var close_ch = cljs.core.async.chan.call(null);
web_socket.binaryType = "arraybuffer";

chord.channels.read_from_ws_BANG_.call(null,web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_.call(null,web_socket,write_ch__$1);

web_socket.onopen = ((function (web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format){
return (function (p1__19881_SHARP_){
return cljs.core.async.put_BANG_.call(null,open_ch,p1__19881_SHARP_);
});})(web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format))
;

web_socket.onclose = ((function (web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format){
return (function (p1__19882_SHARP_){
return cljs.core.async.put_BANG_.call(null,close_ch,p1__19882_SHARP_);
});})(web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format))
;

var ws_chan = chord.channels.bidi_ch.call(null,read_ch__$1,write_ch__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),((function (web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format){
return (function (){
return web_socket.close();
});})(web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format))
], null));
var initial_ch = cljs.core.async.chan.call(null);
var c__16751__auto___19990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___19990,ws_chan,initial_ch,web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___19990,ws_chan,initial_ch,web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format){
return (function (state_19950){
var state_val_19951 = (state_19950[(1)]);
if((state_val_19951 === (7))){
var inst_19946 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
var statearr_19952_19991 = state_19950__$1;
(statearr_19952_19991[(2)] = inst_19946);

(statearr_19952_19991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (20))){
var state_19950__$1 = state_19950;
var statearr_19953_19992 = state_19950__$1;
(statearr_19953_19992[(2)] = null);

(statearr_19953_19992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (1))){
var inst_19891 = false;
var state_19950__$1 = (function (){var statearr_19954 = state_19950;
(statearr_19954[(7)] = inst_19891);

return statearr_19954;
})();
var statearr_19955_19993 = state_19950__$1;
(statearr_19955_19993[(2)] = null);

(statearr_19955_19993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (4))){
var inst_19902 = (state_19950[(8)]);
var inst_19904 = (state_19950[(9)]);
var inst_19902__$1 = (state_19950[(2)]);
var inst_19903 = cljs.core.nth.call(null,inst_19902__$1,(0),null);
var inst_19904__$1 = cljs.core.nth.call(null,inst_19902__$1,(1),null);
var inst_19905 = cljs.core._EQ_.call(null,inst_19904__$1,open_ch);
var state_19950__$1 = (function (){var statearr_19956 = state_19950;
(statearr_19956[(10)] = inst_19903);

(statearr_19956[(8)] = inst_19902__$1);

(statearr_19956[(9)] = inst_19904__$1);

return statearr_19956;
})();
if(inst_19905){
var statearr_19957_19994 = state_19950__$1;
(statearr_19957_19994[(1)] = (5));

} else {
var statearr_19958_19995 = state_19950__$1;
(statearr_19958_19995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (15))){
var inst_19931 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
var statearr_19959_19996 = state_19950__$1;
(statearr_19959_19996[(2)] = inst_19931);

(statearr_19959_19996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (21))){
var inst_19942 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
var statearr_19960_19997 = state_19950__$1;
(statearr_19960_19997[(2)] = inst_19942);

(statearr_19960_19997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (13))){
var state_19950__$1 = state_19950;
var statearr_19961_19998 = state_19950__$1;
(statearr_19961_19998[(2)] = null);

(statearr_19961_19998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (6))){
var inst_19904 = (state_19950[(9)]);
var inst_19917 = cljs.core._EQ_.call(null,inst_19904,close_ch);
var state_19950__$1 = state_19950;
if(inst_19917){
var statearr_19962_19999 = state_19950__$1;
(statearr_19962_19999[(1)] = (9));

} else {
var statearr_19963_20000 = state_19950__$1;
(statearr_19963_20000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (17))){
var state_19950__$1 = state_19950;
var statearr_19964_20001 = state_19950__$1;
(statearr_19964_20001[(2)] = initial_ch);

(statearr_19964_20001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (3))){
var inst_19948 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19950__$1,inst_19948);
} else {
if((state_val_19951 === (12))){
var inst_19891 = (state_19950[(7)]);
var state_19950__$1 = state_19950;
if(cljs.core.truth_(inst_19891)){
var statearr_19965_20002 = state_19950__$1;
(statearr_19965_20002[(1)] = (16));

} else {
var statearr_19966_20003 = state_19950__$1;
(statearr_19966_20003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (2))){
var inst_19898 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_19899 = [open_ch,close_ch];
var inst_19900 = (new cljs.core.PersistentVector(null,2,(5),inst_19898,inst_19899,null));
var state_19950__$1 = state_19950;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19950__$1,(4),inst_19900);
} else {
if((state_val_19951 === (19))){
var inst_19903 = (state_19950[(10)]);
var state_19950__$1 = state_19950;
var statearr_19967_20004 = state_19950__$1;
(statearr_19967_20004[(2)] = inst_19903);

(statearr_19967_20004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (11))){
var inst_19944 = (state_19950[(2)]);
var state_19950__$1 = state_19950;
var statearr_19968_20005 = state_19950__$1;
(statearr_19968_20005[(2)] = inst_19944);

(statearr_19968_20005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (9))){
var inst_19921 = (state_19950[(11)]);
var inst_19902 = (state_19950[(8)]);
var inst_19920 = cljs.core.nth.call(null,inst_19902,(0),null);
var inst_19921__$1 = chord.client.close_event__GT_maybe_error.call(null,inst_19920);
var state_19950__$1 = (function (){var statearr_19969 = state_19950;
(statearr_19969[(11)] = inst_19921__$1);

return statearr_19969;
})();
if(cljs.core.truth_(inst_19921__$1)){
var statearr_19970_20006 = state_19950__$1;
(statearr_19970_20006[(1)] = (12));

} else {
var statearr_19971_20007 = state_19950__$1;
(statearr_19971_20007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (5))){
var inst_19902 = (state_19950[(8)]);
var inst_19908 = cljs.core.nth.call(null,inst_19902,(0),null);
var inst_19909 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_19910 = [ws_chan];
var inst_19911 = cljs.core.PersistentHashMap.fromArrays(inst_19909,inst_19910);
var state_19950__$1 = (function (){var statearr_19972 = state_19950;
(statearr_19972[(12)] = inst_19908);

return statearr_19972;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19950__$1,(8),initial_ch,inst_19911);
} else {
if((state_val_19951 === (14))){
var inst_19934 = (state_19950[(2)]);
var inst_19935 = cljs.core.async.close_BANG_.call(null,ws_chan);
var inst_19936 = cljs.core.async.close_BANG_.call(null,initial_ch);
var state_19950__$1 = (function (){var statearr_19973 = state_19950;
(statearr_19973[(13)] = inst_19935);

(statearr_19973[(14)] = inst_19934);

return statearr_19973;
})();
var statearr_19974_20008 = state_19950__$1;
(statearr_19974_20008[(2)] = inst_19936);

(statearr_19974_20008[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (16))){
var state_19950__$1 = state_19950;
var statearr_19975_20009 = state_19950__$1;
(statearr_19975_20009[(2)] = read_ch__$1);

(statearr_19975_20009[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (10))){
var inst_19904 = (state_19950[(9)]);
var inst_19938 = cljs.core._EQ_.call(null,inst_19904,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_19950__$1 = state_19950;
if(inst_19938){
var statearr_19976_20010 = state_19950__$1;
(statearr_19976_20010[(1)] = (19));

} else {
var statearr_19977_20011 = state_19950__$1;
(statearr_19977_20011[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19951 === (18))){
var inst_19921 = (state_19950[(11)]);
var inst_19926 = (state_19950[(2)]);
var inst_19927 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_19928 = [inst_19921];
var inst_19929 = cljs.core.PersistentHashMap.fromArrays(inst_19927,inst_19928);
var state_19950__$1 = state_19950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19950__$1,(15),inst_19926,inst_19929);
} else {
if((state_val_19951 === (8))){
var inst_19913 = (state_19950[(2)]);
var inst_19914 = cljs.core.async.close_BANG_.call(null,initial_ch);
var inst_19891 = true;
var state_19950__$1 = (function (){var statearr_19978 = state_19950;
(statearr_19978[(15)] = inst_19913);

(statearr_19978[(16)] = inst_19914);

(statearr_19978[(7)] = inst_19891);

return statearr_19978;
})();
var statearr_19979_20012 = state_19950__$1;
(statearr_19979_20012[(2)] = null);

(statearr_19979_20012[(1)] = (2));


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
});})(c__16751__auto___19990,ws_chan,initial_ch,web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format))
;
return ((function (switch__16686__auto__,c__16751__auto___19990,ws_chan,initial_ch,web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format){
return (function() {
var chord$client$state_machine__16687__auto__ = null;
var chord$client$state_machine__16687__auto____0 = (function (){
var statearr_19983 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19983[(0)] = chord$client$state_machine__16687__auto__);

(statearr_19983[(1)] = (1));

return statearr_19983;
});
var chord$client$state_machine__16687__auto____1 = (function (state_19950){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_19950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e19984){if((e19984 instanceof Object)){
var ex__16690__auto__ = e19984;
var statearr_19985_20013 = state_19950;
(statearr_19985_20013[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19984;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20014 = state_19950;
state_19950 = G__20014;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
chord$client$state_machine__16687__auto__ = function(state_19950){
switch(arguments.length){
case 0:
return chord$client$state_machine__16687__auto____0.call(this);
case 1:
return chord$client$state_machine__16687__auto____1.call(this,state_19950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__16687__auto____0;
chord$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__16687__auto____1;
return chord$client$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___19990,ws_chan,initial_ch,web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format))
})();
var state__16753__auto__ = (function (){var statearr_19986 = f__16752__auto__.call(null);
(statearr_19986[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___19990);

return statearr_19986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___19990,ws_chan,initial_ch,web_socket,map__19889,map__19889__$1,read_ch__$1,write_ch__$1,open_ch,close_ch,vec__19886,map__19887,map__19887__$1,opts,read_ch,write_ch,format))
);


return initial_ch;
});

chord.client.ws_ch.cljs$lang$maxFixedArity = (1);

chord.client.ws_ch.cljs$lang$applyTo = (function (seq19883){
var G__19884 = cljs.core.first.call(null,seq19883);
var seq19883__$1 = cljs.core.next.call(null,seq19883);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic(G__19884,seq19883__$1);
});

//# sourceMappingURL=client.js.map