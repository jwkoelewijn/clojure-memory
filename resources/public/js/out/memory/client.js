// Compiled by ClojureScript 1.7.122 {}
goog.provide('memory.client');
goog.require('cljs.core');
goog.require('memory.components');
goog.require('cljs.core.async');
goog.require('chord.client');
memory.client.container = document.getElementById("main");
if(typeof memory.client.run_once !== 'undefined'){
} else {
memory.client.run_once = (function (){var c__6893__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__6893__auto__){
return (function (){
var f__6894__auto__ = (function (){var switch__6872__auto__ = ((function (c__6893__auto__){
return (function (state_7047){
var state_val_7048 = (state_7047[(1)]);
if((state_val_7048 === (7))){
var state_7047__$1 = state_7047;
var statearr_7049_7095 = state_7047__$1;
(statearr_7049_7095[(2)] = false);

(statearr_7049_7095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (20))){
var inst_7043 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
var statearr_7050_7096 = state_7047__$1;
(statearr_7050_7096[(2)] = inst_7043);

(statearr_7050_7096[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (27))){
var state_7047__$1 = state_7047;
var statearr_7051_7097 = state_7047__$1;
(statearr_7051_7097[(2)] = null);

(statearr_7051_7097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (1))){
var inst_6987 = chord.client.ws_ch.call(null,"ws://bauke.herokuapp.com/ws");
var state_7047__$1 = state_7047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7047__$1,(2),inst_6987);
} else {
if((state_val_7048 === (24))){
var inst_7030 = document.location = "/safe.html";
var state_7047__$1 = state_7047;
var statearr_7052_7098 = state_7047__$1;
(statearr_7052_7098[(2)] = inst_7030);

(statearr_7052_7098[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (4))){
var state_7047__$1 = state_7047;
var statearr_7053_7099 = state_7047__$1;
(statearr_7053_7099[(2)] = false);

(statearr_7053_7099[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (15))){
var inst_7010 = (state_7047[(7)]);
var state_7047__$1 = state_7047;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_7047__$1,(17),inst_7010);
} else {
if((state_val_7048 === (21))){
var inst_7025 = document.body;
var inst_7026 = inst_7025.className = "game-over";
var state_7047__$1 = state_7047;
var statearr_7054_7100 = state_7047__$1;
(statearr_7054_7100[(2)] = inst_7026);

(statearr_7054_7100[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (13))){
var state_7047__$1 = state_7047;
var statearr_7055_7101 = state_7047__$1;
(statearr_7055_7101[(2)] = null);

(statearr_7055_7101[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (22))){
var inst_7020 = (state_7047[(8)]);
var inst_7028 = new cljs.core.Keyword(null,"safe?","safe?",1351599959).cljs$core$IFn$_invoke$arity$1(inst_7020);
var state_7047__$1 = state_7047;
if(cljs.core.truth_(inst_7028)){
var statearr_7056_7102 = state_7047__$1;
(statearr_7056_7102[(1)] = (24));

} else {
var statearr_7057_7103 = state_7047__$1;
(statearr_7057_7103[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (29))){
var inst_7036 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
var statearr_7058_7104 = state_7047__$1;
(statearr_7058_7104[(2)] = inst_7036);

(statearr_7058_7104[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (6))){
var state_7047__$1 = state_7047;
var statearr_7059_7105 = state_7047__$1;
(statearr_7059_7105[(2)] = true);

(statearr_7059_7105[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (28))){
var state_7047__$1 = state_7047;
var statearr_7060_7106 = state_7047__$1;
(statearr_7060_7106[(2)] = null);

(statearr_7060_7106[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (25))){
var state_7047__$1 = state_7047;
var statearr_7061_7107 = state_7047__$1;
(statearr_7061_7107[(1)] = (27));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (17))){
var inst_7020 = (state_7047[(8)]);
var inst_7019 = (state_7047[(2)]);
var inst_7020__$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(inst_7019);
var state_7047__$1 = (function (){var statearr_7063 = state_7047;
(statearr_7063[(8)] = inst_7020__$1);

return statearr_7063;
})();
if(cljs.core.truth_(inst_7020__$1)){
var statearr_7064_7108 = state_7047__$1;
(statearr_7064_7108[(1)] = (18));

} else {
var statearr_7065_7109 = state_7047__$1;
(statearr_7065_7109[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (3))){
var inst_6989 = (state_7047[(9)]);
var inst_6994 = inst_6989.cljs$lang$protocol_mask$partition0$;
var inst_6995 = (inst_6994 & (64));
var inst_6996 = inst_6989.cljs$core$ISeq$;
var inst_6997 = (inst_6995) || (inst_6996);
var state_7047__$1 = state_7047;
if(cljs.core.truth_(inst_6997)){
var statearr_7066_7110 = state_7047__$1;
(statearr_7066_7110[(1)] = (6));

} else {
var statearr_7067_7111 = state_7047__$1;
(statearr_7067_7111[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (12))){
var inst_7011 = (state_7047[(10)]);
var inst_7013 = (function(){throw inst_7011})();
var state_7047__$1 = state_7047;
var statearr_7068_7112 = state_7047__$1;
(statearr_7068_7112[(2)] = inst_7013);

(statearr_7068_7112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (2))){
var inst_6989 = (state_7047[(9)]);
var inst_6989__$1 = (state_7047[(2)]);
var inst_6991 = (inst_6989__$1 == null);
var inst_6992 = cljs.core.not.call(null,inst_6991);
var state_7047__$1 = (function (){var statearr_7069 = state_7047;
(statearr_7069[(9)] = inst_6989__$1);

return statearr_7069;
})();
if(inst_6992){
var statearr_7070_7113 = state_7047__$1;
(statearr_7070_7113[(1)] = (3));

} else {
var statearr_7071_7114 = state_7047__$1;
(statearr_7071_7114[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (23))){
var inst_7040 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
var statearr_7072_7115 = state_7047__$1;
(statearr_7072_7115[(2)] = inst_7040);

(statearr_7072_7115[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (19))){
var state_7047__$1 = state_7047;
var statearr_7073_7116 = state_7047__$1;
(statearr_7073_7116[(2)] = null);

(statearr_7073_7116[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (11))){
var inst_7011 = (state_7047[(10)]);
var inst_7009 = (state_7047[(2)]);
var inst_7010 = cljs.core.get.call(null,inst_7009,new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174));
var inst_7011__$1 = cljs.core.get.call(null,inst_7009,new cljs.core.Keyword(null,"error","error",-978969032));
var state_7047__$1 = (function (){var statearr_7074 = state_7047;
(statearr_7074[(7)] = inst_7010);

(statearr_7074[(10)] = inst_7011__$1);

return statearr_7074;
})();
if(cljs.core.truth_(inst_7011__$1)){
var statearr_7075_7117 = state_7047__$1;
(statearr_7075_7117[(1)] = (12));

} else {
var statearr_7076_7118 = state_7047__$1;
(statearr_7076_7118[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (9))){
var inst_6989 = (state_7047[(9)]);
var inst_7006 = cljs.core.apply.call(null,cljs.core.hash_map,inst_6989);
var state_7047__$1 = state_7047;
var statearr_7077_7119 = state_7047__$1;
(statearr_7077_7119[(2)] = inst_7006);

(statearr_7077_7119[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (5))){
var inst_7004 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
if(cljs.core.truth_(inst_7004)){
var statearr_7078_7120 = state_7047__$1;
(statearr_7078_7120[(1)] = (9));

} else {
var statearr_7079_7121 = state_7047__$1;
(statearr_7079_7121[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (14))){
var inst_7016 = (state_7047[(2)]);
var state_7047__$1 = (function (){var statearr_7080 = state_7047;
(statearr_7080[(11)] = inst_7016);

return statearr_7080;
})();
var statearr_7081_7122 = state_7047__$1;
(statearr_7081_7122[(2)] = null);

(statearr_7081_7122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (26))){
var inst_7038 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
var statearr_7082_7123 = state_7047__$1;
(statearr_7082_7123[(2)] = inst_7038);

(statearr_7082_7123[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (16))){
var inst_7045 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_7047__$1,inst_7045);
} else {
if((state_val_7048 === (10))){
var inst_6989 = (state_7047[(9)]);
var state_7047__$1 = state_7047;
var statearr_7083_7124 = state_7047__$1;
(statearr_7083_7124[(2)] = inst_6989);

(statearr_7083_7124[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (18))){
var inst_7010 = (state_7047[(7)]);
var inst_7020 = (state_7047[(8)]);
var inst_7022 = memory.components.render_game.call(null,inst_7020,memory.client.container,inst_7010);
var inst_7023 = new cljs.core.Keyword(null,"dead?","dead?",990391228).cljs$core$IFn$_invoke$arity$1(inst_7020);
var state_7047__$1 = (function (){var statearr_7084 = state_7047;
(statearr_7084[(12)] = inst_7022);

return statearr_7084;
})();
if(cljs.core.truth_(inst_7023)){
var statearr_7085_7125 = state_7047__$1;
(statearr_7085_7125[(1)] = (21));

} else {
var statearr_7086_7126 = state_7047__$1;
(statearr_7086_7126[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_7048 === (8))){
var inst_7001 = (state_7047[(2)]);
var state_7047__$1 = state_7047;
var statearr_7087_7127 = state_7047__$1;
(statearr_7087_7127[(2)] = inst_7001);

(statearr_7087_7127[(1)] = (5));


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
});})(c__6893__auto__))
;
return ((function (switch__6872__auto__,c__6893__auto__){
return (function() {
var memory$client$state_machine__6873__auto__ = null;
var memory$client$state_machine__6873__auto____0 = (function (){
var statearr_7091 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_7091[(0)] = memory$client$state_machine__6873__auto__);

(statearr_7091[(1)] = (1));

return statearr_7091;
});
var memory$client$state_machine__6873__auto____1 = (function (state_7047){
while(true){
var ret_value__6874__auto__ = (function (){try{while(true){
var result__6875__auto__ = switch__6872__auto__.call(null,state_7047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__6875__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__6875__auto__;
}
break;
}
}catch (e7092){if((e7092 instanceof Object)){
var ex__6876__auto__ = e7092;
var statearr_7093_7128 = state_7047;
(statearr_7093_7128[(5)] = ex__6876__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_7047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e7092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6874__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__7129 = state_7047;
state_7047 = G__7129;
continue;
} else {
return ret_value__6874__auto__;
}
break;
}
});
memory$client$state_machine__6873__auto__ = function(state_7047){
switch(arguments.length){
case 0:
return memory$client$state_machine__6873__auto____0.call(this);
case 1:
return memory$client$state_machine__6873__auto____1.call(this,state_7047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
memory$client$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$0 = memory$client$state_machine__6873__auto____0;
memory$client$state_machine__6873__auto__.cljs$core$IFn$_invoke$arity$1 = memory$client$state_machine__6873__auto____1;
return memory$client$state_machine__6873__auto__;
})()
;})(switch__6872__auto__,c__6893__auto__))
})();
var state__6895__auto__ = (function (){var statearr_7094 = f__6894__auto__.call(null);
(statearr_7094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6893__auto__);

return statearr_7094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6895__auto__);
});})(c__6893__auto__))
);

return c__6893__auto__;
})();
}

//# sourceMappingURL=client.js.map