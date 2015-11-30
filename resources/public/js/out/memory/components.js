// Compiled by ClojureScript 1.7.122 {}
goog.provide('memory.components');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('quiescent.core');
goog.require('quiescent.dom');
/**
 * 
 */
memory.components.Cell = quiescent.core.component.call(null,(function (tile,reveal_ch){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"cell"], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("tile"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"revealed?","revealed?",726959164).cljs$core$IFn$_invoke$arity$1(tile))?" revealed":null)),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"matched?","matched?",-297965314).cljs$core$IFn$_invoke$arity$1(tile))?" matched":null))].join(''),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (e){
cljs.core.async.put_BANG_.call(null,reveal_ch,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tile));

return e.preventDefault();
})], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"front"], null)),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("back "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(tile))?cljs.core.name.call(null,new cljs.core.Keyword(null,"face","face",-1356480717).cljs$core$IFn$_invoke$arity$1(tile)):null))].join('')], null))));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
memory.components.Line = quiescent.core.component.call(null,(function (tiles,reveal_ch){
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"line"], null),cljs.core.map.call(null,(function (p1__19206_SHARP_){
return memory.components.Cell.call(null,p1__19206_SHARP_,reveal_ch);
}),tiles));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
memory.components.Board = quiescent.core.component.call(null,(function (tiles,reveal_ch){
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"board clearfix"], null),cljs.core.map.call(null,(function (p1__19207_SHARP_){
return memory.components.Line.call(null,p1__19207_SHARP_,reveal_ch);
}),cljs.core.partition.call(null,(4),tiles)));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
memory.components.Timer = quiescent.core.component.call(null,(function (p__19209){
var map__19210 = p__19209;
var map__19210__$1 = ((((!((map__19210 == null)))?((((map__19210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19210):map__19210);
var index = cljs.core.get.call(null,map__19210__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var sand = cljs.core.get.call(null,map__19210__$1,new cljs.core.Keyword(null,"sand","sand",1204438373));
return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("timer timer-"),cljs.core.str(index)].join('')], null),cljs.core.map.call(null,((function (map__19210,map__19210__$1,index,sand){
return (function (p1__19208_SHARP_){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("sand "),cljs.core.str(cljs.core.name.call(null,p1__19208_SHARP_))].join('')], null));
});})(map__19210,map__19210__$1,index,sand))
,sand));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
memory.components.Timers = quiescent.core.component.call(null,(function (sand){
return cljs.core.apply.call(null,quiescent.dom.div,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,(function (p1__19212_SHARP_,p2__19213_SHARP_){
return memory.components.Timer.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),p1__19212_SHARP_,new cljs.core.Keyword(null,"sand","sand",1204438373),p2__19213_SHARP_], null));
}),cljs.core.partition.call(null,(30),sand)));
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
memory.components.Game = quiescent.core.component.call(null,(function (game,reveal_ch){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),(cljs.core.truth_(new cljs.core.Keyword(null,"foggy?","foggy?",177895659).cljs$core$IFn$_invoke$arity$1(game))?"foggy":null)], null),memory.components.Board.call(null,new cljs.core.Keyword(null,"tiles","tiles",178505240).cljs$core$IFn$_invoke$arity$1(game),reveal_ch),memory.components.Timers.call(null,new cljs.core.Keyword(null,"sand","sand",1204438373).cljs$core$IFn$_invoke$arity$1(game)));
}),cljs.core.PersistentArrayMap.EMPTY);
memory.components.render_game = (function memory$components$render_game(game,container,reveal_ch){
return quiescent.core.render.call(null,memory.components.Game.call(null,game,reveal_ch),container);
});

//# sourceMappingURL=components.js.map