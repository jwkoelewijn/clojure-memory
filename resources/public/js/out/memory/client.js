// Compiled by ClojureScript 1.7.122 {}
goog.provide('memory.client');
goog.require('cljs.core');
goog.require('memory.components');
goog.require('cljs.core.async');
goog.require('chord.client');
memory.client.container = document.getElementById("main");
if(typeof memory.client.run_once !== 'undefined'){
} else {
memory.client.run_once = (function (){var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__){
return (function (state_19670){
var state_val_19671 = (state_19670[(1)]);
if((state_val_19671 === (7))){
var state_19670__$1 = state_19670;
var statearr_19672_19718 = state_19670__$1;
(statearr_19672_19718[(2)] = false);

(statearr_19672_19718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (20))){
var inst_19666 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
var statearr_19673_19719 = state_19670__$1;
(statearr_19673_19719[(2)] = inst_19666);

(statearr_19673_19719[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (27))){
var state_19670__$1 = state_19670;
var statearr_19674_19720 = state_19670__$1;
(statearr_19674_19720[(2)] = null);

(statearr_19674_19720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (1))){
var inst_19610 = chord.client.ws_ch.call(null,"ws://localhost:9009/ws");
var state_19670__$1 = state_19670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19670__$1,(2),inst_19610);
} else {
if((state_val_19671 === (24))){
var inst_19653 = document.location = "/safe.html";
var state_19670__$1 = state_19670;
var statearr_19675_19721 = state_19670__$1;
(statearr_19675_19721[(2)] = inst_19653);

(statearr_19675_19721[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (4))){
var state_19670__$1 = state_19670;
var statearr_19676_19722 = state_19670__$1;
(statearr_19676_19722[(2)] = false);

(statearr_19676_19722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (15))){
var inst_19633 = (state_19670[(7)]);
var state_19670__$1 = state_19670;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19670__$1,(17),inst_19633);
} else {
if((state_val_19671 === (21))){
var inst_19648 = document.body;
var inst_19649 = inst_19648.className = "game-over";
var state_19670__$1 = state_19670;
var statearr_19677_19723 = state_19670__$1;
(statearr_19677_19723[(2)] = inst_19649);

(statearr_19677_19723[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (13))){
var state_19670__$1 = state_19670;
var statearr_19678_19724 = state_19670__$1;
(statearr_19678_19724[(2)] = null);

(statearr_19678_19724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (22))){
var inst_19643 = (state_19670[(8)]);
var inst_19651 = new cljs.core.Keyword(null,"safe?","safe?",1351599959).cljs$core$IFn$_invoke$arity$1(inst_19643);
var state_19670__$1 = state_19670;
if(cljs.core.truth_(inst_19651)){
var statearr_19679_19725 = state_19670__$1;
(statearr_19679_19725[(1)] = (24));

} else {
var statearr_19680_19726 = state_19670__$1;
(statearr_19680_19726[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (29))){
var inst_19659 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
var statearr_19681_19727 = state_19670__$1;
(statearr_19681_19727[(2)] = inst_19659);

(statearr_19681_19727[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (6))){
var state_19670__$1 = state_19670;
var statearr_19682_19728 = state_19670__$1;
(statearr_19682_19728[(2)] = true);

(statearr_19682_19728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (28))){
var state_19670__$1 = state_19670;
var statearr_19683_19729 = state_19670__$1;
(statearr_19683_19729[(2)] = null);

(statearr_19683_19729[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (25))){
var state_19670__$1 = state_19670;
var statearr_19684_19730 = state_19670__$1;
(statearr_19684_19730[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (17))){
var inst_19643 = (state_19670[(8)]);
var inst_19642 = (state_19670[(2)]);
var inst_19643__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_19642);
var state_19670__$1 = (function (){var statearr_19686 = state_19670;
(statearr_19686[(8)] = inst_19643__$1);

return statearr_19686;
})();
if(cljs.core.truth_(inst_19643__$1)){
var statearr_19687_19731 = state_19670__$1;
(statearr_19687_19731[(1)] = (18));

} else {
var statearr_19688_19732 = state_19670__$1;
(statearr_19688_19732[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (3))){
var inst_19612 = (state_19670[(9)]);
var inst_19617 = inst_19612.cljs$lang$protocol_mask$partition0$;
var inst_19618 = (inst_19617 & (64));
var inst_19619 = inst_19612.cljs$core$ISeq$;
var inst_19620 = (inst_19618) || (inst_19619);
var state_19670__$1 = state_19670;
if(cljs.core.truth_(inst_19620)){
var statearr_19689_19733 = state_19670__$1;
(statearr_19689_19733[(1)] = (6));

} else {
var statearr_19690_19734 = state_19670__$1;
(statearr_19690_19734[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (12))){
var inst_19634 = (state_19670[(10)]);
var inst_19636 = (function(){throw inst_19634})();
var state_19670__$1 = state_19670;
var statearr_19691_19735 = state_19670__$1;
(statearr_19691_19735[(2)] = inst_19636);

(statearr_19691_19735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (2))){
var inst_19612 = (state_19670[(9)]);
var inst_19612__$1 = (state_19670[(2)]);
var inst_19614 = (inst_19612__$1 == null);
var inst_19615 = cljs.core.not.call(null,inst_19614);
var state_19670__$1 = (function (){var statearr_19692 = state_19670;
(statearr_19692[(9)] = inst_19612__$1);

return statearr_19692;
})();
if(inst_19615){
var statearr_19693_19736 = state_19670__$1;
(statearr_19693_19736[(1)] = (3));

} else {
var statearr_19694_19737 = state_19670__$1;
(statearr_19694_19737[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (23))){
var inst_19663 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
var statearr_19695_19738 = state_19670__$1;
(statearr_19695_19738[(2)] = inst_19663);

(statearr_19695_19738[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (19))){
var state_19670__$1 = state_19670;
var statearr_19696_19739 = state_19670__$1;
(statearr_19696_19739[(2)] = null);

(statearr_19696_19739[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (11))){
var inst_19634 = (state_19670[(10)]);
var inst_19632 = (state_19670[(2)]);
var inst_19633 = cljs.core.get.call(null,inst_19632,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_19634__$1 = cljs.core.get.call(null,inst_19632,new cljs.core.Keyword(null,"error","error",-978969032));
var state_19670__$1 = (function (){var statearr_19697 = state_19670;
(statearr_19697[(7)] = inst_19633);

(statearr_19697[(10)] = inst_19634__$1);

return statearr_19697;
})();
if(cljs.core.truth_(inst_19634__$1)){
var statearr_19698_19740 = state_19670__$1;
(statearr_19698_19740[(1)] = (12));

} else {
var statearr_19699_19741 = state_19670__$1;
(statearr_19699_19741[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (9))){
var inst_19612 = (state_19670[(9)]);
var inst_19629 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19612);
var state_19670__$1 = state_19670;
var statearr_19700_19742 = state_19670__$1;
(statearr_19700_19742[(2)] = inst_19629);

(statearr_19700_19742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (5))){
var inst_19627 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
if(cljs.core.truth_(inst_19627)){
var statearr_19701_19743 = state_19670__$1;
(statearr_19701_19743[(1)] = (9));

} else {
var statearr_19702_19744 = state_19670__$1;
(statearr_19702_19744[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (14))){
var inst_19639 = (state_19670[(2)]);
var state_19670__$1 = (function (){var statearr_19703 = state_19670;
(statearr_19703[(11)] = inst_19639);

return statearr_19703;
})();
var statearr_19704_19745 = state_19670__$1;
(statearr_19704_19745[(2)] = null);

(statearr_19704_19745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (26))){
var inst_19661 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
var statearr_19705_19746 = state_19670__$1;
(statearr_19705_19746[(2)] = inst_19661);

(statearr_19705_19746[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (16))){
var inst_19668 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19670__$1,inst_19668);
} else {
if((state_val_19671 === (10))){
var inst_19612 = (state_19670[(9)]);
var state_19670__$1 = state_19670;
var statearr_19706_19747 = state_19670__$1;
(statearr_19706_19747[(2)] = inst_19612);

(statearr_19706_19747[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (18))){
var inst_19643 = (state_19670[(8)]);
var inst_19633 = (state_19670[(7)]);
var inst_19645 = memory.components.render_game.call(null,inst_19643,memory.client.container,inst_19633);
var inst_19646 = new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(inst_19643);
var state_19670__$1 = (function (){var statearr_19707 = state_19670;
(statearr_19707[(12)] = inst_19645);

return statearr_19707;
})();
if(cljs.core.truth_(inst_19646)){
var statearr_19708_19748 = state_19670__$1;
(statearr_19708_19748[(1)] = (21));

} else {
var statearr_19709_19749 = state_19670__$1;
(statearr_19709_19749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19671 === (8))){
var inst_19624 = (state_19670[(2)]);
var state_19670__$1 = state_19670;
var statearr_19710_19750 = state_19670__$1;
(statearr_19710_19750[(2)] = inst_19624);

(statearr_19710_19750[(1)] = (5));


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
});})(c__16751__auto__))
;
return ((function (switch__16686__auto__,c__16751__auto__){
return (function() {
var memory$client$state_machine__16687__auto__ = null;
var memory$client$state_machine__16687__auto____0 = (function (){
var statearr_19714 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19714[(0)] = memory$client$state_machine__16687__auto__);

(statearr_19714[(1)] = (1));

return statearr_19714;
});
var memory$client$state_machine__16687__auto____1 = (function (state_19670){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_19670);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e19715){if((e19715 instanceof Object)){
var ex__16690__auto__ = e19715;
var statearr_19716_19751 = state_19670;
(statearr_19716_19751[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19670);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19715;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19752 = state_19670;
state_19670 = G__19752;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
memory$client$state_machine__16687__auto__ = function(state_19670){
switch(arguments.length){
case 0:
return memory$client$state_machine__16687__auto____0.call(this);
case 1:
return memory$client$state_machine__16687__auto____1.call(this,state_19670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memory$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = memory$client$state_machine__16687__auto____0;
memory$client$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = memory$client$state_machine__16687__auto____1;
return memory$client$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__))
})();
var state__16753__auto__ = (function (){var statearr_19717 = f__16752__auto__.call(null);
(statearr_19717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_19717;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__))
);

return c__16751__auto__;
})();
}

//# sourceMappingURL=client.js.map