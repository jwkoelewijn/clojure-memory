// Compiled by ClojureScript 1.7.122 {}
goog.provide('memory.client');
goog.require('cljs.core');
goog.require('memory.components');
goog.require('cljs.core.async');
goog.require('chord.client');
memory.client.container = document.getElementById("main");
if(typeof memory.client.run_once !== 'undefined'){
} else {
memory.client.run_once = (function (){var c__21504__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21504__auto__){
return (function (){
var f__21505__auto__ = (function (){var switch__21483__auto__ = ((function (c__21504__auto__){
return (function (state_21658){
var state_val_21659 = (state_21658[(1)]);
if((state_val_21659 === (7))){
var state_21658__$1 = state_21658;
var statearr_21660_21706 = state_21658__$1;
(statearr_21660_21706[(2)] = false);

(statearr_21660_21706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (20))){
var inst_21654 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21661_21707 = state_21658__$1;
(statearr_21661_21707[(2)] = inst_21654);

(statearr_21661_21707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (27))){
var state_21658__$1 = state_21658;
var statearr_21662_21708 = state_21658__$1;
(statearr_21662_21708[(2)] = null);

(statearr_21662_21708[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (1))){
var inst_21598 = chord.client.ws_ch.call(null,"wss://bauke.herokuapp.com/ws");
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21658__$1,(2),inst_21598);
} else {
if((state_val_21659 === (24))){
var inst_21641 = document.location = "/safe.html";
var state_21658__$1 = state_21658;
var statearr_21663_21709 = state_21658__$1;
(statearr_21663_21709[(2)] = inst_21641);

(statearr_21663_21709[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (4))){
var state_21658__$1 = state_21658;
var statearr_21664_21710 = state_21658__$1;
(statearr_21664_21710[(2)] = false);

(statearr_21664_21710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (15))){
var inst_21621 = (state_21658[(7)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21658__$1,(17),inst_21621);
} else {
if((state_val_21659 === (21))){
var inst_21636 = document.body;
var inst_21637 = inst_21636.className = "game-over";
var state_21658__$1 = state_21658;
var statearr_21665_21711 = state_21658__$1;
(statearr_21665_21711[(2)] = inst_21637);

(statearr_21665_21711[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (13))){
var state_21658__$1 = state_21658;
var statearr_21666_21712 = state_21658__$1;
(statearr_21666_21712[(2)] = null);

(statearr_21666_21712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (22))){
var inst_21631 = (state_21658[(8)]);
var inst_21639 = new cljs.core.Keyword(null,"safe?","safe?",1351599959).cljs$core$IFn$_invoke$arity$1(inst_21631);
var state_21658__$1 = state_21658;
if(cljs.core.truth_(inst_21639)){
var statearr_21667_21713 = state_21658__$1;
(statearr_21667_21713[(1)] = (24));

} else {
var statearr_21668_21714 = state_21658__$1;
(statearr_21668_21714[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (29))){
var inst_21647 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21669_21715 = state_21658__$1;
(statearr_21669_21715[(2)] = inst_21647);

(statearr_21669_21715[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (6))){
var state_21658__$1 = state_21658;
var statearr_21670_21716 = state_21658__$1;
(statearr_21670_21716[(2)] = true);

(statearr_21670_21716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (28))){
var state_21658__$1 = state_21658;
var statearr_21671_21717 = state_21658__$1;
(statearr_21671_21717[(2)] = null);

(statearr_21671_21717[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (25))){
var state_21658__$1 = state_21658;
var statearr_21672_21718 = state_21658__$1;
(statearr_21672_21718[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (17))){
var inst_21631 = (state_21658[(8)]);
var inst_21630 = (state_21658[(2)]);
var inst_21631__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_21630);
var state_21658__$1 = (function (){var statearr_21674 = state_21658;
(statearr_21674[(8)] = inst_21631__$1);

return statearr_21674;
})();
if(cljs.core.truth_(inst_21631__$1)){
var statearr_21675_21719 = state_21658__$1;
(statearr_21675_21719[(1)] = (18));

} else {
var statearr_21676_21720 = state_21658__$1;
(statearr_21676_21720[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (3))){
var inst_21600 = (state_21658[(9)]);
var inst_21605 = inst_21600.cljs$lang$protocol_mask$partition0$;
var inst_21606 = (inst_21605 & (64));
var inst_21607 = inst_21600.cljs$core$ISeq$;
var inst_21608 = (inst_21606) || (inst_21607);
var state_21658__$1 = state_21658;
if(cljs.core.truth_(inst_21608)){
var statearr_21677_21721 = state_21658__$1;
(statearr_21677_21721[(1)] = (6));

} else {
var statearr_21678_21722 = state_21658__$1;
(statearr_21678_21722[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (12))){
var inst_21622 = (state_21658[(10)]);
var inst_21624 = (function(){throw inst_21622})();
var state_21658__$1 = state_21658;
var statearr_21679_21723 = state_21658__$1;
(statearr_21679_21723[(2)] = inst_21624);

(statearr_21679_21723[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (2))){
var inst_21600 = (state_21658[(9)]);
var inst_21600__$1 = (state_21658[(2)]);
var inst_21602 = (inst_21600__$1 == null);
var inst_21603 = cljs.core.not.call(null,inst_21602);
var state_21658__$1 = (function (){var statearr_21680 = state_21658;
(statearr_21680[(9)] = inst_21600__$1);

return statearr_21680;
})();
if(inst_21603){
var statearr_21681_21724 = state_21658__$1;
(statearr_21681_21724[(1)] = (3));

} else {
var statearr_21682_21725 = state_21658__$1;
(statearr_21682_21725[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (23))){
var inst_21651 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21683_21726 = state_21658__$1;
(statearr_21683_21726[(2)] = inst_21651);

(statearr_21683_21726[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (19))){
var state_21658__$1 = state_21658;
var statearr_21684_21727 = state_21658__$1;
(statearr_21684_21727[(2)] = null);

(statearr_21684_21727[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (11))){
var inst_21622 = (state_21658[(10)]);
var inst_21620 = (state_21658[(2)]);
var inst_21621 = cljs.core.get.call(null,inst_21620,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_21622__$1 = cljs.core.get.call(null,inst_21620,new cljs.core.Keyword(null,"error","error",-978969032));
var state_21658__$1 = (function (){var statearr_21685 = state_21658;
(statearr_21685[(7)] = inst_21621);

(statearr_21685[(10)] = inst_21622__$1);

return statearr_21685;
})();
if(cljs.core.truth_(inst_21622__$1)){
var statearr_21686_21728 = state_21658__$1;
(statearr_21686_21728[(1)] = (12));

} else {
var statearr_21687_21729 = state_21658__$1;
(statearr_21687_21729[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (9))){
var inst_21600 = (state_21658[(9)]);
var inst_21617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21600);
var state_21658__$1 = state_21658;
var statearr_21688_21730 = state_21658__$1;
(statearr_21688_21730[(2)] = inst_21617);

(statearr_21688_21730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (5))){
var inst_21615 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
if(cljs.core.truth_(inst_21615)){
var statearr_21689_21731 = state_21658__$1;
(statearr_21689_21731[(1)] = (9));

} else {
var statearr_21690_21732 = state_21658__$1;
(statearr_21690_21732[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (14))){
var inst_21627 = (state_21658[(2)]);
var state_21658__$1 = (function (){var statearr_21691 = state_21658;
(statearr_21691[(11)] = inst_21627);

return statearr_21691;
})();
var statearr_21692_21733 = state_21658__$1;
(statearr_21692_21733[(2)] = null);

(statearr_21692_21733[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (26))){
var inst_21649 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21693_21734 = state_21658__$1;
(statearr_21693_21734[(2)] = inst_21649);

(statearr_21693_21734[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (16))){
var inst_21656 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21658__$1,inst_21656);
} else {
if((state_val_21659 === (10))){
var inst_21600 = (state_21658[(9)]);
var state_21658__$1 = state_21658;
var statearr_21694_21735 = state_21658__$1;
(statearr_21694_21735[(2)] = inst_21600);

(statearr_21694_21735[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (18))){
var inst_21621 = (state_21658[(7)]);
var inst_21631 = (state_21658[(8)]);
var inst_21633 = memory.components.render_game.call(null,inst_21631,memory.client.container,inst_21621);
var inst_21634 = new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(inst_21631);
var state_21658__$1 = (function (){var statearr_21695 = state_21658;
(statearr_21695[(12)] = inst_21633);

return statearr_21695;
})();
if(cljs.core.truth_(inst_21634)){
var statearr_21696_21736 = state_21658__$1;
(statearr_21696_21736[(1)] = (21));

} else {
var statearr_21697_21737 = state_21658__$1;
(statearr_21697_21737[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21659 === (8))){
var inst_21612 = (state_21658[(2)]);
var state_21658__$1 = state_21658;
var statearr_21698_21738 = state_21658__$1;
(statearr_21698_21738[(2)] = inst_21612);

(statearr_21698_21738[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__21504__auto__))
;
return ((function (switch__21483__auto__,c__21504__auto__){
return (function() {
var memory$client$state_machine__21484__auto__ = null;
var memory$client$state_machine__21484__auto____0 = (function (){
var statearr_21702 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21702[(0)] = memory$client$state_machine__21484__auto__);

(statearr_21702[(1)] = (1));

return statearr_21702;
});
var memory$client$state_machine__21484__auto____1 = (function (state_21658){
while(true){
var ret_value__21485__auto__ = (function (){try{while(true){
var result__21486__auto__ = switch__21483__auto__.call(null,state_21658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21486__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21486__auto__;
}
break;
}
}catch (e21703){if((e21703 instanceof Object)){
var ex__21487__auto__ = e21703;
var statearr_21704_21739 = state_21658;
(statearr_21704_21739[(5)] = ex__21487__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21703;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21485__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21740 = state_21658;
state_21658 = G__21740;
continue;
} else {
return ret_value__21485__auto__;
}
break;
}
});
memory$client$state_machine__21484__auto__ = function(state_21658){
switch(arguments.length){
case 0:
return memory$client$state_machine__21484__auto____0.call(this);
case 1:
return memory$client$state_machine__21484__auto____1.call(this,state_21658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memory$client$state_machine__21484__auto__.cljs$core$IFn$_invoke$arity$0 = memory$client$state_machine__21484__auto____0;
memory$client$state_machine__21484__auto__.cljs$core$IFn$_invoke$arity$1 = memory$client$state_machine__21484__auto____1;
return memory$client$state_machine__21484__auto__;
})()
;})(switch__21483__auto__,c__21504__auto__))
})();
var state__21506__auto__ = (function (){var statearr_21705 = f__21505__auto__.call(null);
(statearr_21705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21504__auto__);

return statearr_21705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21506__auto__);
});})(c__21504__auto__))
);

return c__21504__auto__;
})();
}

//# sourceMappingURL=client.js.map