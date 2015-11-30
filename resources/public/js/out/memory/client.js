// Compiled by ClojureScript 1.7.122 {}
goog.provide('memory.client');
goog.require('cljs.core');
goog.require('memory.components');
goog.require('cljs.core.async');
goog.require('chord.client');
memory.client.container = document.getElementById("main");
if(typeof memory.client.run_once !== 'undefined'){
} else {
memory.client.run_once = (function (){var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__){
return (function (state_19674){
var state_val_19675 = (state_19674[(1)]);
if((state_val_19675 === (7))){
var state_19674__$1 = state_19674;
var statearr_19676_19722 = state_19674__$1;
(statearr_19676_19722[(2)] = false);

(statearr_19676_19722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (20))){
var inst_19670 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19677_19723 = state_19674__$1;
(statearr_19677_19723[(2)] = inst_19670);

(statearr_19677_19723[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (27))){
var state_19674__$1 = state_19674;
var statearr_19678_19724 = state_19674__$1;
(statearr_19678_19724[(2)] = null);

(statearr_19678_19724[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (1))){
var inst_19614 = chord.client.ws_ch.call(null,"wss://bauke.herokuapp.com/ws");
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19674__$1,(2),inst_19614);
} else {
if((state_val_19675 === (24))){
var inst_19657 = document.location = "/safe.html";
var state_19674__$1 = state_19674;
var statearr_19679_19725 = state_19674__$1;
(statearr_19679_19725[(2)] = inst_19657);

(statearr_19679_19725[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (4))){
var state_19674__$1 = state_19674;
var statearr_19680_19726 = state_19674__$1;
(statearr_19680_19726[(2)] = false);

(statearr_19680_19726[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (15))){
var inst_19637 = (state_19674[(7)]);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19674__$1,(17),inst_19637);
} else {
if((state_val_19675 === (21))){
var inst_19652 = document.body;
var inst_19653 = inst_19652.className = "game-over";
var state_19674__$1 = state_19674;
var statearr_19681_19727 = state_19674__$1;
(statearr_19681_19727[(2)] = inst_19653);

(statearr_19681_19727[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (13))){
var state_19674__$1 = state_19674;
var statearr_19682_19728 = state_19674__$1;
(statearr_19682_19728[(2)] = null);

(statearr_19682_19728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (22))){
var inst_19647 = (state_19674[(8)]);
var inst_19655 = new cljs.core.Keyword(null,"safe?","safe?",1351599959).cljs$core$IFn$_invoke$arity$1(inst_19647);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19655)){
var statearr_19683_19729 = state_19674__$1;
(statearr_19683_19729[(1)] = (24));

} else {
var statearr_19684_19730 = state_19674__$1;
(statearr_19684_19730[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (29))){
var inst_19663 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19685_19731 = state_19674__$1;
(statearr_19685_19731[(2)] = inst_19663);

(statearr_19685_19731[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (6))){
var state_19674__$1 = state_19674;
var statearr_19686_19732 = state_19674__$1;
(statearr_19686_19732[(2)] = true);

(statearr_19686_19732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (28))){
var state_19674__$1 = state_19674;
var statearr_19687_19733 = state_19674__$1;
(statearr_19687_19733[(2)] = null);

(statearr_19687_19733[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (25))){
var state_19674__$1 = state_19674;
var statearr_19688_19734 = state_19674__$1;
(statearr_19688_19734[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (17))){
var inst_19647 = (state_19674[(8)]);
var inst_19646 = (state_19674[(2)]);
var inst_19647__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_19646);
var state_19674__$1 = (function (){var statearr_19690 = state_19674;
(statearr_19690[(8)] = inst_19647__$1);

return statearr_19690;
})();
if(cljs.core.truth_(inst_19647__$1)){
var statearr_19691_19735 = state_19674__$1;
(statearr_19691_19735[(1)] = (18));

} else {
var statearr_19692_19736 = state_19674__$1;
(statearr_19692_19736[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (3))){
var inst_19616 = (state_19674[(9)]);
var inst_19621 = inst_19616.cljs$lang$protocol_mask$partition0$;
var inst_19622 = (inst_19621 & (64));
var inst_19623 = inst_19616.cljs$core$ISeq$;
var inst_19624 = (inst_19622) || (inst_19623);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19624)){
var statearr_19693_19737 = state_19674__$1;
(statearr_19693_19737[(1)] = (6));

} else {
var statearr_19694_19738 = state_19674__$1;
(statearr_19694_19738[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (12))){
var inst_19638 = (state_19674[(10)]);
var inst_19640 = (function(){throw inst_19638})();
var state_19674__$1 = state_19674;
var statearr_19695_19739 = state_19674__$1;
(statearr_19695_19739[(2)] = inst_19640);

(statearr_19695_19739[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (2))){
var inst_19616 = (state_19674[(9)]);
var inst_19616__$1 = (state_19674[(2)]);
var inst_19618 = (inst_19616__$1 == null);
var inst_19619 = cljs.core.not.call(null,inst_19618);
var state_19674__$1 = (function (){var statearr_19696 = state_19674;
(statearr_19696[(9)] = inst_19616__$1);

return statearr_19696;
})();
if(inst_19619){
var statearr_19697_19740 = state_19674__$1;
(statearr_19697_19740[(1)] = (3));

} else {
var statearr_19698_19741 = state_19674__$1;
(statearr_19698_19741[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (23))){
var inst_19667 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19699_19742 = state_19674__$1;
(statearr_19699_19742[(2)] = inst_19667);

(statearr_19699_19742[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (19))){
var state_19674__$1 = state_19674;
var statearr_19700_19743 = state_19674__$1;
(statearr_19700_19743[(2)] = null);

(statearr_19700_19743[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (11))){
var inst_19638 = (state_19674[(10)]);
var inst_19636 = (state_19674[(2)]);
var inst_19637 = cljs.core.get.call(null,inst_19636,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_19638__$1 = cljs.core.get.call(null,inst_19636,new cljs.core.Keyword(null,"error","error",-978969032));
var state_19674__$1 = (function (){var statearr_19701 = state_19674;
(statearr_19701[(10)] = inst_19638__$1);

(statearr_19701[(7)] = inst_19637);

return statearr_19701;
})();
if(cljs.core.truth_(inst_19638__$1)){
var statearr_19702_19744 = state_19674__$1;
(statearr_19702_19744[(1)] = (12));

} else {
var statearr_19703_19745 = state_19674__$1;
(statearr_19703_19745[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (9))){
var inst_19616 = (state_19674[(9)]);
var inst_19633 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19616);
var state_19674__$1 = state_19674;
var statearr_19704_19746 = state_19674__$1;
(statearr_19704_19746[(2)] = inst_19633);

(statearr_19704_19746[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (5))){
var inst_19631 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
if(cljs.core.truth_(inst_19631)){
var statearr_19705_19747 = state_19674__$1;
(statearr_19705_19747[(1)] = (9));

} else {
var statearr_19706_19748 = state_19674__$1;
(statearr_19706_19748[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (14))){
var inst_19643 = (state_19674[(2)]);
var state_19674__$1 = (function (){var statearr_19707 = state_19674;
(statearr_19707[(11)] = inst_19643);

return statearr_19707;
})();
var statearr_19708_19749 = state_19674__$1;
(statearr_19708_19749[(2)] = null);

(statearr_19708_19749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (26))){
var inst_19665 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19709_19750 = state_19674__$1;
(statearr_19709_19750[(2)] = inst_19665);

(statearr_19709_19750[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (16))){
var inst_19672 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19674__$1,inst_19672);
} else {
if((state_val_19675 === (10))){
var inst_19616 = (state_19674[(9)]);
var state_19674__$1 = state_19674;
var statearr_19710_19751 = state_19674__$1;
(statearr_19710_19751[(2)] = inst_19616);

(statearr_19710_19751[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (18))){
var inst_19647 = (state_19674[(8)]);
var inst_19637 = (state_19674[(7)]);
var inst_19649 = memory.components.render_game.call(null,inst_19647,memory.client.container,inst_19637);
var inst_19650 = new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(inst_19647);
var state_19674__$1 = (function (){var statearr_19711 = state_19674;
(statearr_19711[(12)] = inst_19649);

return statearr_19711;
})();
if(cljs.core.truth_(inst_19650)){
var statearr_19712_19752 = state_19674__$1;
(statearr_19712_19752[(1)] = (21));

} else {
var statearr_19713_19753 = state_19674__$1;
(statearr_19713_19753[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19675 === (8))){
var inst_19628 = (state_19674[(2)]);
var state_19674__$1 = state_19674;
var statearr_19714_19754 = state_19674__$1;
(statearr_19714_19754[(2)] = inst_19628);

(statearr_19714_19754[(1)] = (5));


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
});})(c__16755__auto__))
;
return ((function (switch__16690__auto__,c__16755__auto__){
return (function() {
var memory$client$state_machine__16691__auto__ = null;
var memory$client$state_machine__16691__auto____0 = (function (){
var statearr_19718 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19718[(0)] = memory$client$state_machine__16691__auto__);

(statearr_19718[(1)] = (1));

return statearr_19718;
});
var memory$client$state_machine__16691__auto____1 = (function (state_19674){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_19674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e19719){if((e19719 instanceof Object)){
var ex__16694__auto__ = e19719;
var statearr_19720_19755 = state_19674;
(statearr_19720_19755[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19756 = state_19674;
state_19674 = G__19756;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
memory$client$state_machine__16691__auto__ = function(state_19674){
switch(arguments.length){
case 0:
return memory$client$state_machine__16691__auto____0.call(this);
case 1:
return memory$client$state_machine__16691__auto____1.call(this,state_19674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memory$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = memory$client$state_machine__16691__auto____0;
memory$client$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = memory$client$state_machine__16691__auto____1;
return memory$client$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__))
})();
var state__16757__auto__ = (function (){var statearr_19721 = f__16756__auto__.call(null);
(statearr_19721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_19721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__))
);

return c__16755__auto__;
})();
}

//# sourceMappingURL=client.js.map