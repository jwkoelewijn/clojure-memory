// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async21083 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21083 = (function (fn_handler,f,meta21084){
this.fn_handler = fn_handler;
this.f = f;
this.meta21084 = meta21084;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21085,meta21084__$1){
var self__ = this;
var _21085__$1 = this;
return (new cljs.core.async.t_cljs$core$async21083(self__.fn_handler,self__.f,meta21084__$1));
});

cljs.core.async.t_cljs$core$async21083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21085){
var self__ = this;
var _21085__$1 = this;
return self__.meta21084;
});

cljs.core.async.t_cljs$core$async21083.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21083.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta21084","meta21084",1629439079,null)], null);
});

cljs.core.async.t_cljs$core$async21083.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21083.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21083";

cljs.core.async.t_cljs$core$async21083.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async21083");
});

cljs.core.async.__GT_t_cljs$core$async21083 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async21083(fn_handler__$1,f__$1,meta21084){
return (new cljs.core.async.t_cljs$core$async21083(fn_handler__$1,f__$1,meta21084));
});

}

return (new cljs.core.async.t_cljs$core$async21083(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21088 = [];
var len__15726__auto___21091 = arguments.length;
var i__15727__auto___21092 = (0);
while(true){
if((i__15727__auto___21092 < len__15726__auto___21091)){
args21088.push((arguments[i__15727__auto___21092]));

var G__21093 = (i__15727__auto___21092 + (1));
i__15727__auto___21092 = G__21093;
continue;
} else {
}
break;
}

var G__21090 = args21088.length;
switch (G__21090) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21088.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21095 = [];
var len__15726__auto___21098 = arguments.length;
var i__15727__auto___21099 = (0);
while(true){
if((i__15727__auto___21099 < len__15726__auto___21098)){
args21095.push((arguments[i__15727__auto___21099]));

var G__21100 = (i__15727__auto___21099 + (1));
i__15727__auto___21099 = G__21100;
continue;
} else {
}
break;
}

var G__21097 = args21095.length;
switch (G__21097) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21095.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21102 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21102);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21102,ret){
return (function (){
return fn1.call(null,val_21102);
});})(val_21102,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21103 = [];
var len__15726__auto___21106 = arguments.length;
var i__15727__auto___21107 = (0);
while(true){
if((i__15727__auto___21107 < len__15726__auto___21106)){
args21103.push((arguments[i__15727__auto___21107]));

var G__21108 = (i__15727__auto___21107 + (1));
i__15727__auto___21107 = G__21108;
continue;
} else {
}
break;
}

var G__21105 = args21103.length;
switch (G__21105) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21103.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__15571__auto___21110 = n;
var x_21111 = (0);
while(true){
if((x_21111 < n__15571__auto___21110)){
(a[x_21111] = (0));

var G__21112 = (x_21111 + (1));
x_21111 = G__21112;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21113 = (i + (1));
i = G__21113;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21117 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21117 = (function (alt_flag,flag,meta21118){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21118 = meta21118;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21119,meta21118__$1){
var self__ = this;
var _21119__$1 = this;
return (new cljs.core.async.t_cljs$core$async21117(self__.alt_flag,self__.flag,meta21118__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21119){
var self__ = this;
var _21119__$1 = this;
return self__.meta21118;
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21118","meta21118",1983100157,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21117.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21117";

cljs.core.async.t_cljs$core$async21117.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async21117");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21117 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21117(alt_flag__$1,flag__$1,meta21118){
return (new cljs.core.async.t_cljs$core$async21117(alt_flag__$1,flag__$1,meta21118));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21117(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21123 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21123 = (function (alt_handler,flag,cb,meta21124){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21124 = meta21124;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21125,meta21124__$1){
var self__ = this;
var _21125__$1 = this;
return (new cljs.core.async.t_cljs$core$async21123(self__.alt_handler,self__.flag,self__.cb,meta21124__$1));
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21125){
var self__ = this;
var _21125__$1 = this;
return self__.meta21124;
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21123.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21123.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21124","meta21124",1203839947,null)], null);
});

cljs.core.async.t_cljs$core$async21123.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21123";

cljs.core.async.t_cljs$core$async21123.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async21123");
});

cljs.core.async.__GT_t_cljs$core$async21123 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21123(alt_handler__$1,flag__$1,cb__$1,meta21124){
return (new cljs.core.async.t_cljs$core$async21123(alt_handler__$1,flag__$1,cb__$1,meta21124));
});

}

return (new cljs.core.async.t_cljs$core$async21123(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21126_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21126_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21127_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21127_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14668__auto__ = wport;
if(cljs.core.truth_(or__14668__auto__)){
return or__14668__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21128 = (i + (1));
i = G__21128;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14668__auto__ = ret;
if(cljs.core.truth_(or__14668__auto__)){
return or__14668__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__14656__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__14656__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__14656__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__15733__auto__ = [];
var len__15726__auto___21134 = arguments.length;
var i__15727__auto___21135 = (0);
while(true){
if((i__15727__auto___21135 < len__15726__auto___21134)){
args__15733__auto__.push((arguments[i__15727__auto___21135]));

var G__21136 = (i__15727__auto___21135 + (1));
i__15727__auto___21135 = G__21136;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((1) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15734__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21131){
var map__21132 = p__21131;
var map__21132__$1 = ((((!((map__21132 == null)))?((((map__21132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21132):map__21132);
var opts = map__21132__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21129){
var G__21130 = cljs.core.first.call(null,seq21129);
var seq21129__$1 = cljs.core.next.call(null,seq21129);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21130,seq21129__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21137 = [];
var len__15726__auto___21187 = arguments.length;
var i__15727__auto___21188 = (0);
while(true){
if((i__15727__auto___21188 < len__15726__auto___21187)){
args21137.push((arguments[i__15727__auto___21188]));

var G__21189 = (i__15727__auto___21188 + (1));
i__15727__auto___21188 = G__21189;
continue;
} else {
}
break;
}

var G__21139 = args21137.length;
switch (G__21139) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21137.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16751__auto___21191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___21191){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___21191){
return (function (state_21163){
var state_val_21164 = (state_21163[(1)]);
if((state_val_21164 === (7))){
var inst_21159 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
var statearr_21165_21192 = state_21163__$1;
(statearr_21165_21192[(2)] = inst_21159);

(statearr_21165_21192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (1))){
var state_21163__$1 = state_21163;
var statearr_21166_21193 = state_21163__$1;
(statearr_21166_21193[(2)] = null);

(statearr_21166_21193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (4))){
var inst_21142 = (state_21163[(7)]);
var inst_21142__$1 = (state_21163[(2)]);
var inst_21143 = (inst_21142__$1 == null);
var state_21163__$1 = (function (){var statearr_21167 = state_21163;
(statearr_21167[(7)] = inst_21142__$1);

return statearr_21167;
})();
if(cljs.core.truth_(inst_21143)){
var statearr_21168_21194 = state_21163__$1;
(statearr_21168_21194[(1)] = (5));

} else {
var statearr_21169_21195 = state_21163__$1;
(statearr_21169_21195[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (13))){
var state_21163__$1 = state_21163;
var statearr_21170_21196 = state_21163__$1;
(statearr_21170_21196[(2)] = null);

(statearr_21170_21196[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (6))){
var inst_21142 = (state_21163[(7)]);
var state_21163__$1 = state_21163;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21163__$1,(11),to,inst_21142);
} else {
if((state_val_21164 === (3))){
var inst_21161 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21163__$1,inst_21161);
} else {
if((state_val_21164 === (12))){
var state_21163__$1 = state_21163;
var statearr_21171_21197 = state_21163__$1;
(statearr_21171_21197[(2)] = null);

(statearr_21171_21197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (2))){
var state_21163__$1 = state_21163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21163__$1,(4),from);
} else {
if((state_val_21164 === (11))){
var inst_21152 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
if(cljs.core.truth_(inst_21152)){
var statearr_21172_21198 = state_21163__$1;
(statearr_21172_21198[(1)] = (12));

} else {
var statearr_21173_21199 = state_21163__$1;
(statearr_21173_21199[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (9))){
var state_21163__$1 = state_21163;
var statearr_21174_21200 = state_21163__$1;
(statearr_21174_21200[(2)] = null);

(statearr_21174_21200[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (5))){
var state_21163__$1 = state_21163;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21175_21201 = state_21163__$1;
(statearr_21175_21201[(1)] = (8));

} else {
var statearr_21176_21202 = state_21163__$1;
(statearr_21176_21202[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (14))){
var inst_21157 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
var statearr_21177_21203 = state_21163__$1;
(statearr_21177_21203[(2)] = inst_21157);

(statearr_21177_21203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (10))){
var inst_21149 = (state_21163[(2)]);
var state_21163__$1 = state_21163;
var statearr_21178_21204 = state_21163__$1;
(statearr_21178_21204[(2)] = inst_21149);

(statearr_21178_21204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21164 === (8))){
var inst_21146 = cljs.core.async.close_BANG_.call(null,to);
var state_21163__$1 = state_21163;
var statearr_21179_21205 = state_21163__$1;
(statearr_21179_21205[(2)] = inst_21146);

(statearr_21179_21205[(1)] = (10));


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
});})(c__16751__auto___21191))
;
return ((function (switch__16686__auto__,c__16751__auto___21191){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_21183 = [null,null,null,null,null,null,null,null];
(statearr_21183[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_21183[(1)] = (1));

return statearr_21183;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_21163){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21184){if((e21184 instanceof Object)){
var ex__16690__auto__ = e21184;
var statearr_21185_21206 = state_21163;
(statearr_21185_21206[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21184;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21207 = state_21163;
state_21163 = G__21207;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_21163){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_21163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___21191))
})();
var state__16753__auto__ = (function (){var statearr_21186 = f__16752__auto__.call(null);
(statearr_21186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___21191);

return statearr_21186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___21191))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21391){
var vec__21392 = p__21391;
var v = cljs.core.nth.call(null,vec__21392,(0),null);
var p = cljs.core.nth.call(null,vec__21392,(1),null);
var job = vec__21392;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16751__auto___21574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___21574,res,vec__21392,v,p,job,jobs,results){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___21574,res,vec__21392,v,p,job,jobs,results){
return (function (state_21397){
var state_val_21398 = (state_21397[(1)]);
if((state_val_21398 === (1))){
var state_21397__$1 = state_21397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21397__$1,(2),res,v);
} else {
if((state_val_21398 === (2))){
var inst_21394 = (state_21397[(2)]);
var inst_21395 = cljs.core.async.close_BANG_.call(null,res);
var state_21397__$1 = (function (){var statearr_21399 = state_21397;
(statearr_21399[(7)] = inst_21394);

return statearr_21399;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21397__$1,inst_21395);
} else {
return null;
}
}
});})(c__16751__auto___21574,res,vec__21392,v,p,job,jobs,results))
;
return ((function (switch__16686__auto__,c__16751__auto___21574,res,vec__21392,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0 = (function (){
var statearr_21403 = [null,null,null,null,null,null,null,null];
(statearr_21403[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__);

(statearr_21403[(1)] = (1));

return statearr_21403;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1 = (function (state_21397){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21404){if((e21404 instanceof Object)){
var ex__16690__auto__ = e21404;
var statearr_21405_21575 = state_21397;
(statearr_21405_21575[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21397);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21576 = state_21397;
state_21397 = G__21576;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = function(state_21397){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1.call(this,state_21397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___21574,res,vec__21392,v,p,job,jobs,results))
})();
var state__16753__auto__ = (function (){var statearr_21406 = f__16752__auto__.call(null);
(statearr_21406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___21574);

return statearr_21406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___21574,res,vec__21392,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21407){
var vec__21408 = p__21407;
var v = cljs.core.nth.call(null,vec__21408,(0),null);
var p = cljs.core.nth.call(null,vec__21408,(1),null);
var job = vec__21408;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__15571__auto___21577 = n;
var __21578 = (0);
while(true){
if((__21578 < n__15571__auto___21577)){
var G__21409_21579 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21409_21579) {
case "compute":
var c__16751__auto___21581 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21578,c__16751__auto___21581,G__21409_21579,n__15571__auto___21577,jobs,results,process,async){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (__21578,c__16751__auto___21581,G__21409_21579,n__15571__auto___21577,jobs,results,process,async){
return (function (state_21422){
var state_val_21423 = (state_21422[(1)]);
if((state_val_21423 === (1))){
var state_21422__$1 = state_21422;
var statearr_21424_21582 = state_21422__$1;
(statearr_21424_21582[(2)] = null);

(statearr_21424_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (2))){
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21422__$1,(4),jobs);
} else {
if((state_val_21423 === (3))){
var inst_21420 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21422__$1,inst_21420);
} else {
if((state_val_21423 === (4))){
var inst_21412 = (state_21422[(2)]);
var inst_21413 = process.call(null,inst_21412);
var state_21422__$1 = state_21422;
if(cljs.core.truth_(inst_21413)){
var statearr_21425_21583 = state_21422__$1;
(statearr_21425_21583[(1)] = (5));

} else {
var statearr_21426_21584 = state_21422__$1;
(statearr_21426_21584[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (5))){
var state_21422__$1 = state_21422;
var statearr_21427_21585 = state_21422__$1;
(statearr_21427_21585[(2)] = null);

(statearr_21427_21585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (6))){
var state_21422__$1 = state_21422;
var statearr_21428_21586 = state_21422__$1;
(statearr_21428_21586[(2)] = null);

(statearr_21428_21586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21423 === (7))){
var inst_21418 = (state_21422[(2)]);
var state_21422__$1 = state_21422;
var statearr_21429_21587 = state_21422__$1;
(statearr_21429_21587[(2)] = inst_21418);

(statearr_21429_21587[(1)] = (3));


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
});})(__21578,c__16751__auto___21581,G__21409_21579,n__15571__auto___21577,jobs,results,process,async))
;
return ((function (__21578,switch__16686__auto__,c__16751__auto___21581,G__21409_21579,n__15571__auto___21577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0 = (function (){
var statearr_21433 = [null,null,null,null,null,null,null];
(statearr_21433[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__);

(statearr_21433[(1)] = (1));

return statearr_21433;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1 = (function (state_21422){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21434){if((e21434 instanceof Object)){
var ex__16690__auto__ = e21434;
var statearr_21435_21588 = state_21422;
(statearr_21435_21588[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21589 = state_21422;
state_21422 = G__21589;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = function(state_21422){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1.call(this,state_21422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__;
})()
;})(__21578,switch__16686__auto__,c__16751__auto___21581,G__21409_21579,n__15571__auto___21577,jobs,results,process,async))
})();
var state__16753__auto__ = (function (){var statearr_21436 = f__16752__auto__.call(null);
(statearr_21436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___21581);

return statearr_21436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(__21578,c__16751__auto___21581,G__21409_21579,n__15571__auto___21577,jobs,results,process,async))
);


break;
case "async":
var c__16751__auto___21590 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21578,c__16751__auto___21590,G__21409_21579,n__15571__auto___21577,jobs,results,process,async){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (__21578,c__16751__auto___21590,G__21409_21579,n__15571__auto___21577,jobs,results,process,async){
return (function (state_21449){
var state_val_21450 = (state_21449[(1)]);
if((state_val_21450 === (1))){
var state_21449__$1 = state_21449;
var statearr_21451_21591 = state_21449__$1;
(statearr_21451_21591[(2)] = null);

(statearr_21451_21591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (2))){
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21449__$1,(4),jobs);
} else {
if((state_val_21450 === (3))){
var inst_21447 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21449__$1,inst_21447);
} else {
if((state_val_21450 === (4))){
var inst_21439 = (state_21449[(2)]);
var inst_21440 = async.call(null,inst_21439);
var state_21449__$1 = state_21449;
if(cljs.core.truth_(inst_21440)){
var statearr_21452_21592 = state_21449__$1;
(statearr_21452_21592[(1)] = (5));

} else {
var statearr_21453_21593 = state_21449__$1;
(statearr_21453_21593[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (5))){
var state_21449__$1 = state_21449;
var statearr_21454_21594 = state_21449__$1;
(statearr_21454_21594[(2)] = null);

(statearr_21454_21594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (6))){
var state_21449__$1 = state_21449;
var statearr_21455_21595 = state_21449__$1;
(statearr_21455_21595[(2)] = null);

(statearr_21455_21595[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21450 === (7))){
var inst_21445 = (state_21449[(2)]);
var state_21449__$1 = state_21449;
var statearr_21456_21596 = state_21449__$1;
(statearr_21456_21596[(2)] = inst_21445);

(statearr_21456_21596[(1)] = (3));


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
});})(__21578,c__16751__auto___21590,G__21409_21579,n__15571__auto___21577,jobs,results,process,async))
;
return ((function (__21578,switch__16686__auto__,c__16751__auto___21590,G__21409_21579,n__15571__auto___21577,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0 = (function (){
var statearr_21460 = [null,null,null,null,null,null,null];
(statearr_21460[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__);

(statearr_21460[(1)] = (1));

return statearr_21460;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1 = (function (state_21449){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21461){if((e21461 instanceof Object)){
var ex__16690__auto__ = e21461;
var statearr_21462_21597 = state_21449;
(statearr_21462_21597[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21598 = state_21449;
state_21449 = G__21598;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = function(state_21449){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1.call(this,state_21449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__;
})()
;})(__21578,switch__16686__auto__,c__16751__auto___21590,G__21409_21579,n__15571__auto___21577,jobs,results,process,async))
})();
var state__16753__auto__ = (function (){var statearr_21463 = f__16752__auto__.call(null);
(statearr_21463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___21590);

return statearr_21463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(__21578,c__16751__auto___21590,G__21409_21579,n__15571__auto___21577,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21599 = (__21578 + (1));
__21578 = G__21599;
continue;
} else {
}
break;
}

var c__16751__auto___21600 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___21600,jobs,results,process,async){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___21600,jobs,results,process,async){
return (function (state_21485){
var state_val_21486 = (state_21485[(1)]);
if((state_val_21486 === (1))){
var state_21485__$1 = state_21485;
var statearr_21487_21601 = state_21485__$1;
(statearr_21487_21601[(2)] = null);

(statearr_21487_21601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (2))){
var state_21485__$1 = state_21485;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21485__$1,(4),from);
} else {
if((state_val_21486 === (3))){
var inst_21483 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21485__$1,inst_21483);
} else {
if((state_val_21486 === (4))){
var inst_21466 = (state_21485[(7)]);
var inst_21466__$1 = (state_21485[(2)]);
var inst_21467 = (inst_21466__$1 == null);
var state_21485__$1 = (function (){var statearr_21488 = state_21485;
(statearr_21488[(7)] = inst_21466__$1);

return statearr_21488;
})();
if(cljs.core.truth_(inst_21467)){
var statearr_21489_21602 = state_21485__$1;
(statearr_21489_21602[(1)] = (5));

} else {
var statearr_21490_21603 = state_21485__$1;
(statearr_21490_21603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (5))){
var inst_21469 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21485__$1 = state_21485;
var statearr_21491_21604 = state_21485__$1;
(statearr_21491_21604[(2)] = inst_21469);

(statearr_21491_21604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (6))){
var inst_21471 = (state_21485[(8)]);
var inst_21466 = (state_21485[(7)]);
var inst_21471__$1 = cljs.core.async.chan.call(null,(1));
var inst_21472 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21473 = [inst_21466,inst_21471__$1];
var inst_21474 = (new cljs.core.PersistentVector(null,2,(5),inst_21472,inst_21473,null));
var state_21485__$1 = (function (){var statearr_21492 = state_21485;
(statearr_21492[(8)] = inst_21471__$1);

return statearr_21492;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21485__$1,(8),jobs,inst_21474);
} else {
if((state_val_21486 === (7))){
var inst_21481 = (state_21485[(2)]);
var state_21485__$1 = state_21485;
var statearr_21493_21605 = state_21485__$1;
(statearr_21493_21605[(2)] = inst_21481);

(statearr_21493_21605[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21486 === (8))){
var inst_21471 = (state_21485[(8)]);
var inst_21476 = (state_21485[(2)]);
var state_21485__$1 = (function (){var statearr_21494 = state_21485;
(statearr_21494[(9)] = inst_21476);

return statearr_21494;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21485__$1,(9),results,inst_21471);
} else {
if((state_val_21486 === (9))){
var inst_21478 = (state_21485[(2)]);
var state_21485__$1 = (function (){var statearr_21495 = state_21485;
(statearr_21495[(10)] = inst_21478);

return statearr_21495;
})();
var statearr_21496_21606 = state_21485__$1;
(statearr_21496_21606[(2)] = null);

(statearr_21496_21606[(1)] = (2));


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
});})(c__16751__auto___21600,jobs,results,process,async))
;
return ((function (switch__16686__auto__,c__16751__auto___21600,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0 = (function (){
var statearr_21500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21500[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__);

(statearr_21500[(1)] = (1));

return statearr_21500;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1 = (function (state_21485){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21485);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21501){if((e21501 instanceof Object)){
var ex__16690__auto__ = e21501;
var statearr_21502_21607 = state_21485;
(statearr_21502_21607[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21608 = state_21485;
state_21485 = G__21608;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = function(state_21485){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1.call(this,state_21485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___21600,jobs,results,process,async))
})();
var state__16753__auto__ = (function (){var statearr_21503 = f__16752__auto__.call(null);
(statearr_21503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___21600);

return statearr_21503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___21600,jobs,results,process,async))
);


var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__,jobs,results,process,async){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__,jobs,results,process,async){
return (function (state_21541){
var state_val_21542 = (state_21541[(1)]);
if((state_val_21542 === (7))){
var inst_21537 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21543_21609 = state_21541__$1;
(statearr_21543_21609[(2)] = inst_21537);

(statearr_21543_21609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (20))){
var state_21541__$1 = state_21541;
var statearr_21544_21610 = state_21541__$1;
(statearr_21544_21610[(2)] = null);

(statearr_21544_21610[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (1))){
var state_21541__$1 = state_21541;
var statearr_21545_21611 = state_21541__$1;
(statearr_21545_21611[(2)] = null);

(statearr_21545_21611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (4))){
var inst_21506 = (state_21541[(7)]);
var inst_21506__$1 = (state_21541[(2)]);
var inst_21507 = (inst_21506__$1 == null);
var state_21541__$1 = (function (){var statearr_21546 = state_21541;
(statearr_21546[(7)] = inst_21506__$1);

return statearr_21546;
})();
if(cljs.core.truth_(inst_21507)){
var statearr_21547_21612 = state_21541__$1;
(statearr_21547_21612[(1)] = (5));

} else {
var statearr_21548_21613 = state_21541__$1;
(statearr_21548_21613[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (15))){
var inst_21519 = (state_21541[(8)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21541__$1,(18),to,inst_21519);
} else {
if((state_val_21542 === (21))){
var inst_21532 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21549_21614 = state_21541__$1;
(statearr_21549_21614[(2)] = inst_21532);

(statearr_21549_21614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (13))){
var inst_21534 = (state_21541[(2)]);
var state_21541__$1 = (function (){var statearr_21550 = state_21541;
(statearr_21550[(9)] = inst_21534);

return statearr_21550;
})();
var statearr_21551_21615 = state_21541__$1;
(statearr_21551_21615[(2)] = null);

(statearr_21551_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (6))){
var inst_21506 = (state_21541[(7)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21541__$1,(11),inst_21506);
} else {
if((state_val_21542 === (17))){
var inst_21527 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
if(cljs.core.truth_(inst_21527)){
var statearr_21552_21616 = state_21541__$1;
(statearr_21552_21616[(1)] = (19));

} else {
var statearr_21553_21617 = state_21541__$1;
(statearr_21553_21617[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (3))){
var inst_21539 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21541__$1,inst_21539);
} else {
if((state_val_21542 === (12))){
var inst_21516 = (state_21541[(10)]);
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21541__$1,(14),inst_21516);
} else {
if((state_val_21542 === (2))){
var state_21541__$1 = state_21541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21541__$1,(4),results);
} else {
if((state_val_21542 === (19))){
var state_21541__$1 = state_21541;
var statearr_21554_21618 = state_21541__$1;
(statearr_21554_21618[(2)] = null);

(statearr_21554_21618[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (11))){
var inst_21516 = (state_21541[(2)]);
var state_21541__$1 = (function (){var statearr_21555 = state_21541;
(statearr_21555[(10)] = inst_21516);

return statearr_21555;
})();
var statearr_21556_21619 = state_21541__$1;
(statearr_21556_21619[(2)] = null);

(statearr_21556_21619[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (9))){
var state_21541__$1 = state_21541;
var statearr_21557_21620 = state_21541__$1;
(statearr_21557_21620[(2)] = null);

(statearr_21557_21620[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (5))){
var state_21541__$1 = state_21541;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21558_21621 = state_21541__$1;
(statearr_21558_21621[(1)] = (8));

} else {
var statearr_21559_21622 = state_21541__$1;
(statearr_21559_21622[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (14))){
var inst_21519 = (state_21541[(8)]);
var inst_21521 = (state_21541[(11)]);
var inst_21519__$1 = (state_21541[(2)]);
var inst_21520 = (inst_21519__$1 == null);
var inst_21521__$1 = cljs.core.not.call(null,inst_21520);
var state_21541__$1 = (function (){var statearr_21560 = state_21541;
(statearr_21560[(8)] = inst_21519__$1);

(statearr_21560[(11)] = inst_21521__$1);

return statearr_21560;
})();
if(inst_21521__$1){
var statearr_21561_21623 = state_21541__$1;
(statearr_21561_21623[(1)] = (15));

} else {
var statearr_21562_21624 = state_21541__$1;
(statearr_21562_21624[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (16))){
var inst_21521 = (state_21541[(11)]);
var state_21541__$1 = state_21541;
var statearr_21563_21625 = state_21541__$1;
(statearr_21563_21625[(2)] = inst_21521);

(statearr_21563_21625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (10))){
var inst_21513 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21564_21626 = state_21541__$1;
(statearr_21564_21626[(2)] = inst_21513);

(statearr_21564_21626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (18))){
var inst_21524 = (state_21541[(2)]);
var state_21541__$1 = state_21541;
var statearr_21565_21627 = state_21541__$1;
(statearr_21565_21627[(2)] = inst_21524);

(statearr_21565_21627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21542 === (8))){
var inst_21510 = cljs.core.async.close_BANG_.call(null,to);
var state_21541__$1 = state_21541;
var statearr_21566_21628 = state_21541__$1;
(statearr_21566_21628[(2)] = inst_21510);

(statearr_21566_21628[(1)] = (10));


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
});})(c__16751__auto__,jobs,results,process,async))
;
return ((function (switch__16686__auto__,c__16751__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0 = (function (){
var statearr_21570 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21570[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__);

(statearr_21570[(1)] = (1));

return statearr_21570;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1 = (function (state_21541){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21571){if((e21571 instanceof Object)){
var ex__16690__auto__ = e21571;
var statearr_21572_21629 = state_21541;
(statearr_21572_21629[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21571;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21630 = state_21541;
state_21541 = G__21630;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__ = function(state_21541){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1.call(this,state_21541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16687__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__,jobs,results,process,async))
})();
var state__16753__auto__ = (function (){var statearr_21573 = f__16752__auto__.call(null);
(statearr_21573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_21573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__,jobs,results,process,async))
);

return c__16751__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21631 = [];
var len__15726__auto___21634 = arguments.length;
var i__15727__auto___21635 = (0);
while(true){
if((i__15727__auto___21635 < len__15726__auto___21634)){
args21631.push((arguments[i__15727__auto___21635]));

var G__21636 = (i__15727__auto___21635 + (1));
i__15727__auto___21635 = G__21636;
continue;
} else {
}
break;
}

var G__21633 = args21631.length;
switch (G__21633) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21631.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21638 = [];
var len__15726__auto___21641 = arguments.length;
var i__15727__auto___21642 = (0);
while(true){
if((i__15727__auto___21642 < len__15726__auto___21641)){
args21638.push((arguments[i__15727__auto___21642]));

var G__21643 = (i__15727__auto___21642 + (1));
i__15727__auto___21642 = G__21643;
continue;
} else {
}
break;
}

var G__21640 = args21638.length;
switch (G__21640) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21638.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21645 = [];
var len__15726__auto___21698 = arguments.length;
var i__15727__auto___21699 = (0);
while(true){
if((i__15727__auto___21699 < len__15726__auto___21698)){
args21645.push((arguments[i__15727__auto___21699]));

var G__21700 = (i__15727__auto___21699 + (1));
i__15727__auto___21699 = G__21700;
continue;
} else {
}
break;
}

var G__21647 = args21645.length;
switch (G__21647) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21645.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16751__auto___21702 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___21702,tc,fc){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___21702,tc,fc){
return (function (state_21673){
var state_val_21674 = (state_21673[(1)]);
if((state_val_21674 === (7))){
var inst_21669 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
var statearr_21675_21703 = state_21673__$1;
(statearr_21675_21703[(2)] = inst_21669);

(statearr_21675_21703[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (1))){
var state_21673__$1 = state_21673;
var statearr_21676_21704 = state_21673__$1;
(statearr_21676_21704[(2)] = null);

(statearr_21676_21704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (4))){
var inst_21650 = (state_21673[(7)]);
var inst_21650__$1 = (state_21673[(2)]);
var inst_21651 = (inst_21650__$1 == null);
var state_21673__$1 = (function (){var statearr_21677 = state_21673;
(statearr_21677[(7)] = inst_21650__$1);

return statearr_21677;
})();
if(cljs.core.truth_(inst_21651)){
var statearr_21678_21705 = state_21673__$1;
(statearr_21678_21705[(1)] = (5));

} else {
var statearr_21679_21706 = state_21673__$1;
(statearr_21679_21706[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (13))){
var state_21673__$1 = state_21673;
var statearr_21680_21707 = state_21673__$1;
(statearr_21680_21707[(2)] = null);

(statearr_21680_21707[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (6))){
var inst_21650 = (state_21673[(7)]);
var inst_21656 = p.call(null,inst_21650);
var state_21673__$1 = state_21673;
if(cljs.core.truth_(inst_21656)){
var statearr_21681_21708 = state_21673__$1;
(statearr_21681_21708[(1)] = (9));

} else {
var statearr_21682_21709 = state_21673__$1;
(statearr_21682_21709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (3))){
var inst_21671 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21673__$1,inst_21671);
} else {
if((state_val_21674 === (12))){
var state_21673__$1 = state_21673;
var statearr_21683_21710 = state_21673__$1;
(statearr_21683_21710[(2)] = null);

(statearr_21683_21710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (2))){
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21673__$1,(4),ch);
} else {
if((state_val_21674 === (11))){
var inst_21650 = (state_21673[(7)]);
var inst_21660 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21673__$1,(8),inst_21660,inst_21650);
} else {
if((state_val_21674 === (9))){
var state_21673__$1 = state_21673;
var statearr_21684_21711 = state_21673__$1;
(statearr_21684_21711[(2)] = tc);

(statearr_21684_21711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (5))){
var inst_21653 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21654 = cljs.core.async.close_BANG_.call(null,fc);
var state_21673__$1 = (function (){var statearr_21685 = state_21673;
(statearr_21685[(8)] = inst_21653);

return statearr_21685;
})();
var statearr_21686_21712 = state_21673__$1;
(statearr_21686_21712[(2)] = inst_21654);

(statearr_21686_21712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (14))){
var inst_21667 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
var statearr_21687_21713 = state_21673__$1;
(statearr_21687_21713[(2)] = inst_21667);

(statearr_21687_21713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (10))){
var state_21673__$1 = state_21673;
var statearr_21688_21714 = state_21673__$1;
(statearr_21688_21714[(2)] = fc);

(statearr_21688_21714[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21674 === (8))){
var inst_21662 = (state_21673[(2)]);
var state_21673__$1 = state_21673;
if(cljs.core.truth_(inst_21662)){
var statearr_21689_21715 = state_21673__$1;
(statearr_21689_21715[(1)] = (12));

} else {
var statearr_21690_21716 = state_21673__$1;
(statearr_21690_21716[(1)] = (13));

}

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
});})(c__16751__auto___21702,tc,fc))
;
return ((function (switch__16686__auto__,c__16751__auto___21702,tc,fc){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_21694 = [null,null,null,null,null,null,null,null,null];
(statearr_21694[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_21694[(1)] = (1));

return statearr_21694;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_21673){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21695){if((e21695 instanceof Object)){
var ex__16690__auto__ = e21695;
var statearr_21696_21717 = state_21673;
(statearr_21696_21717[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21718 = state_21673;
state_21673 = G__21718;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_21673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_21673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___21702,tc,fc))
})();
var state__16753__auto__ = (function (){var statearr_21697 = f__16752__auto__.call(null);
(statearr_21697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___21702);

return statearr_21697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___21702,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__){
return (function (state_21765){
var state_val_21766 = (state_21765[(1)]);
if((state_val_21766 === (1))){
var inst_21751 = init;
var state_21765__$1 = (function (){var statearr_21767 = state_21765;
(statearr_21767[(7)] = inst_21751);

return statearr_21767;
})();
var statearr_21768_21783 = state_21765__$1;
(statearr_21768_21783[(2)] = null);

(statearr_21768_21783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (2))){
var state_21765__$1 = state_21765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21765__$1,(4),ch);
} else {
if((state_val_21766 === (3))){
var inst_21763 = (state_21765[(2)]);
var state_21765__$1 = state_21765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21765__$1,inst_21763);
} else {
if((state_val_21766 === (4))){
var inst_21754 = (state_21765[(8)]);
var inst_21754__$1 = (state_21765[(2)]);
var inst_21755 = (inst_21754__$1 == null);
var state_21765__$1 = (function (){var statearr_21769 = state_21765;
(statearr_21769[(8)] = inst_21754__$1);

return statearr_21769;
})();
if(cljs.core.truth_(inst_21755)){
var statearr_21770_21784 = state_21765__$1;
(statearr_21770_21784[(1)] = (5));

} else {
var statearr_21771_21785 = state_21765__$1;
(statearr_21771_21785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (5))){
var inst_21751 = (state_21765[(7)]);
var state_21765__$1 = state_21765;
var statearr_21772_21786 = state_21765__$1;
(statearr_21772_21786[(2)] = inst_21751);

(statearr_21772_21786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (6))){
var inst_21751 = (state_21765[(7)]);
var inst_21754 = (state_21765[(8)]);
var inst_21758 = f.call(null,inst_21751,inst_21754);
var inst_21751__$1 = inst_21758;
var state_21765__$1 = (function (){var statearr_21773 = state_21765;
(statearr_21773[(7)] = inst_21751__$1);

return statearr_21773;
})();
var statearr_21774_21787 = state_21765__$1;
(statearr_21774_21787[(2)] = null);

(statearr_21774_21787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21766 === (7))){
var inst_21761 = (state_21765[(2)]);
var state_21765__$1 = state_21765;
var statearr_21775_21788 = state_21765__$1;
(statearr_21775_21788[(2)] = inst_21761);

(statearr_21775_21788[(1)] = (3));


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
var cljs$core$async$reduce_$_state_machine__16687__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16687__auto____0 = (function (){
var statearr_21779 = [null,null,null,null,null,null,null,null,null];
(statearr_21779[(0)] = cljs$core$async$reduce_$_state_machine__16687__auto__);

(statearr_21779[(1)] = (1));

return statearr_21779;
});
var cljs$core$async$reduce_$_state_machine__16687__auto____1 = (function (state_21765){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21780){if((e21780 instanceof Object)){
var ex__16690__auto__ = e21780;
var statearr_21781_21789 = state_21765;
(statearr_21781_21789[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21790 = state_21765;
state_21765 = G__21790;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16687__auto__ = function(state_21765){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16687__auto____1.call(this,state_21765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16687__auto____0;
cljs$core$async$reduce_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16687__auto____1;
return cljs$core$async$reduce_$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__))
})();
var state__16753__auto__ = (function (){var statearr_21782 = f__16752__auto__.call(null);
(statearr_21782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_21782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__))
);

return c__16751__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21791 = [];
var len__15726__auto___21843 = arguments.length;
var i__15727__auto___21844 = (0);
while(true){
if((i__15727__auto___21844 < len__15726__auto___21843)){
args21791.push((arguments[i__15727__auto___21844]));

var G__21845 = (i__15727__auto___21844 + (1));
i__15727__auto___21844 = G__21845;
continue;
} else {
}
break;
}

var G__21793 = args21791.length;
switch (G__21793) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21791.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__){
return (function (state_21818){
var state_val_21819 = (state_21818[(1)]);
if((state_val_21819 === (7))){
var inst_21800 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21820_21847 = state_21818__$1;
(statearr_21820_21847[(2)] = inst_21800);

(statearr_21820_21847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (1))){
var inst_21794 = cljs.core.seq.call(null,coll);
var inst_21795 = inst_21794;
var state_21818__$1 = (function (){var statearr_21821 = state_21818;
(statearr_21821[(7)] = inst_21795);

return statearr_21821;
})();
var statearr_21822_21848 = state_21818__$1;
(statearr_21822_21848[(2)] = null);

(statearr_21822_21848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (4))){
var inst_21795 = (state_21818[(7)]);
var inst_21798 = cljs.core.first.call(null,inst_21795);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21818__$1,(7),ch,inst_21798);
} else {
if((state_val_21819 === (13))){
var inst_21812 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21823_21849 = state_21818__$1;
(statearr_21823_21849[(2)] = inst_21812);

(statearr_21823_21849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (6))){
var inst_21803 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21803)){
var statearr_21824_21850 = state_21818__$1;
(statearr_21824_21850[(1)] = (8));

} else {
var statearr_21825_21851 = state_21818__$1;
(statearr_21825_21851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (3))){
var inst_21816 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21818__$1,inst_21816);
} else {
if((state_val_21819 === (12))){
var state_21818__$1 = state_21818;
var statearr_21826_21852 = state_21818__$1;
(statearr_21826_21852[(2)] = null);

(statearr_21826_21852[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (2))){
var inst_21795 = (state_21818[(7)]);
var state_21818__$1 = state_21818;
if(cljs.core.truth_(inst_21795)){
var statearr_21827_21853 = state_21818__$1;
(statearr_21827_21853[(1)] = (4));

} else {
var statearr_21828_21854 = state_21818__$1;
(statearr_21828_21854[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (11))){
var inst_21809 = cljs.core.async.close_BANG_.call(null,ch);
var state_21818__$1 = state_21818;
var statearr_21829_21855 = state_21818__$1;
(statearr_21829_21855[(2)] = inst_21809);

(statearr_21829_21855[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (9))){
var state_21818__$1 = state_21818;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21830_21856 = state_21818__$1;
(statearr_21830_21856[(1)] = (11));

} else {
var statearr_21831_21857 = state_21818__$1;
(statearr_21831_21857[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (5))){
var inst_21795 = (state_21818[(7)]);
var state_21818__$1 = state_21818;
var statearr_21832_21858 = state_21818__$1;
(statearr_21832_21858[(2)] = inst_21795);

(statearr_21832_21858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (10))){
var inst_21814 = (state_21818[(2)]);
var state_21818__$1 = state_21818;
var statearr_21833_21859 = state_21818__$1;
(statearr_21833_21859[(2)] = inst_21814);

(statearr_21833_21859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21819 === (8))){
var inst_21795 = (state_21818[(7)]);
var inst_21805 = cljs.core.next.call(null,inst_21795);
var inst_21795__$1 = inst_21805;
var state_21818__$1 = (function (){var statearr_21834 = state_21818;
(statearr_21834[(7)] = inst_21795__$1);

return statearr_21834;
})();
var statearr_21835_21860 = state_21818__$1;
(statearr_21835_21860[(2)] = null);

(statearr_21835_21860[(1)] = (2));


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
});})(c__16751__auto__))
;
return ((function (switch__16686__auto__,c__16751__auto__){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_21839 = [null,null,null,null,null,null,null,null];
(statearr_21839[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_21839[(1)] = (1));

return statearr_21839;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_21818){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_21818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e21840){if((e21840 instanceof Object)){
var ex__16690__auto__ = e21840;
var statearr_21841_21861 = state_21818;
(statearr_21841_21861[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21862 = state_21818;
state_21818 = G__21862;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_21818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_21818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__))
})();
var state__16753__auto__ = (function (){var statearr_21842 = f__16752__auto__.call(null);
(statearr_21842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_21842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__))
);

return c__16751__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__15323__auto__ = (((_ == null))?null:_);
var m__15324__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,_);
} else {
var m__15324__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__15324__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m,ch);
} else {
var m__15324__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m);
} else {
var m__15324__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22084 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22084 = (function (mult,ch,cs,meta22085){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22085 = meta22085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22086,meta22085__$1){
var self__ = this;
var _22086__$1 = this;
return (new cljs.core.async.t_cljs$core$async22084(self__.mult,self__.ch,self__.cs,meta22085__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22086){
var self__ = this;
var _22086__$1 = this;
return self__.meta22085;
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22085","meta22085",868012923,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22084.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22084.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22084";

cljs.core.async.t_cljs$core$async22084.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async22084");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22084 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22084(mult__$1,ch__$1,cs__$1,meta22085){
return (new cljs.core.async.t_cljs$core$async22084(mult__$1,ch__$1,cs__$1,meta22085));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22084(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__16751__auto___22305 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___22305,cs,m,dchan,dctr,done){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___22305,cs,m,dchan,dctr,done){
return (function (state_22217){
var state_val_22218 = (state_22217[(1)]);
if((state_val_22218 === (7))){
var inst_22213 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22219_22306 = state_22217__$1;
(statearr_22219_22306[(2)] = inst_22213);

(statearr_22219_22306[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (20))){
var inst_22118 = (state_22217[(7)]);
var inst_22128 = cljs.core.first.call(null,inst_22118);
var inst_22129 = cljs.core.nth.call(null,inst_22128,(0),null);
var inst_22130 = cljs.core.nth.call(null,inst_22128,(1),null);
var state_22217__$1 = (function (){var statearr_22220 = state_22217;
(statearr_22220[(8)] = inst_22129);

return statearr_22220;
})();
if(cljs.core.truth_(inst_22130)){
var statearr_22221_22307 = state_22217__$1;
(statearr_22221_22307[(1)] = (22));

} else {
var statearr_22222_22308 = state_22217__$1;
(statearr_22222_22308[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (27))){
var inst_22158 = (state_22217[(9)]);
var inst_22089 = (state_22217[(10)]);
var inst_22160 = (state_22217[(11)]);
var inst_22165 = (state_22217[(12)]);
var inst_22165__$1 = cljs.core._nth.call(null,inst_22158,inst_22160);
var inst_22166 = cljs.core.async.put_BANG_.call(null,inst_22165__$1,inst_22089,done);
var state_22217__$1 = (function (){var statearr_22223 = state_22217;
(statearr_22223[(12)] = inst_22165__$1);

return statearr_22223;
})();
if(cljs.core.truth_(inst_22166)){
var statearr_22224_22309 = state_22217__$1;
(statearr_22224_22309[(1)] = (30));

} else {
var statearr_22225_22310 = state_22217__$1;
(statearr_22225_22310[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (1))){
var state_22217__$1 = state_22217;
var statearr_22226_22311 = state_22217__$1;
(statearr_22226_22311[(2)] = null);

(statearr_22226_22311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (24))){
var inst_22118 = (state_22217[(7)]);
var inst_22135 = (state_22217[(2)]);
var inst_22136 = cljs.core.next.call(null,inst_22118);
var inst_22098 = inst_22136;
var inst_22099 = null;
var inst_22100 = (0);
var inst_22101 = (0);
var state_22217__$1 = (function (){var statearr_22227 = state_22217;
(statearr_22227[(13)] = inst_22135);

(statearr_22227[(14)] = inst_22101);

(statearr_22227[(15)] = inst_22099);

(statearr_22227[(16)] = inst_22098);

(statearr_22227[(17)] = inst_22100);

return statearr_22227;
})();
var statearr_22228_22312 = state_22217__$1;
(statearr_22228_22312[(2)] = null);

(statearr_22228_22312[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (39))){
var state_22217__$1 = state_22217;
var statearr_22232_22313 = state_22217__$1;
(statearr_22232_22313[(2)] = null);

(statearr_22232_22313[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (4))){
var inst_22089 = (state_22217[(10)]);
var inst_22089__$1 = (state_22217[(2)]);
var inst_22090 = (inst_22089__$1 == null);
var state_22217__$1 = (function (){var statearr_22233 = state_22217;
(statearr_22233[(10)] = inst_22089__$1);

return statearr_22233;
})();
if(cljs.core.truth_(inst_22090)){
var statearr_22234_22314 = state_22217__$1;
(statearr_22234_22314[(1)] = (5));

} else {
var statearr_22235_22315 = state_22217__$1;
(statearr_22235_22315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (15))){
var inst_22101 = (state_22217[(14)]);
var inst_22099 = (state_22217[(15)]);
var inst_22098 = (state_22217[(16)]);
var inst_22100 = (state_22217[(17)]);
var inst_22114 = (state_22217[(2)]);
var inst_22115 = (inst_22101 + (1));
var tmp22229 = inst_22099;
var tmp22230 = inst_22098;
var tmp22231 = inst_22100;
var inst_22098__$1 = tmp22230;
var inst_22099__$1 = tmp22229;
var inst_22100__$1 = tmp22231;
var inst_22101__$1 = inst_22115;
var state_22217__$1 = (function (){var statearr_22236 = state_22217;
(statearr_22236[(14)] = inst_22101__$1);

(statearr_22236[(15)] = inst_22099__$1);

(statearr_22236[(16)] = inst_22098__$1);

(statearr_22236[(17)] = inst_22100__$1);

(statearr_22236[(18)] = inst_22114);

return statearr_22236;
})();
var statearr_22237_22316 = state_22217__$1;
(statearr_22237_22316[(2)] = null);

(statearr_22237_22316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (21))){
var inst_22139 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22241_22317 = state_22217__$1;
(statearr_22241_22317[(2)] = inst_22139);

(statearr_22241_22317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (31))){
var inst_22165 = (state_22217[(12)]);
var inst_22169 = done.call(null,null);
var inst_22170 = cljs.core.async.untap_STAR_.call(null,m,inst_22165);
var state_22217__$1 = (function (){var statearr_22242 = state_22217;
(statearr_22242[(19)] = inst_22169);

return statearr_22242;
})();
var statearr_22243_22318 = state_22217__$1;
(statearr_22243_22318[(2)] = inst_22170);

(statearr_22243_22318[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (32))){
var inst_22158 = (state_22217[(9)]);
var inst_22160 = (state_22217[(11)]);
var inst_22157 = (state_22217[(20)]);
var inst_22159 = (state_22217[(21)]);
var inst_22172 = (state_22217[(2)]);
var inst_22173 = (inst_22160 + (1));
var tmp22238 = inst_22158;
var tmp22239 = inst_22157;
var tmp22240 = inst_22159;
var inst_22157__$1 = tmp22239;
var inst_22158__$1 = tmp22238;
var inst_22159__$1 = tmp22240;
var inst_22160__$1 = inst_22173;
var state_22217__$1 = (function (){var statearr_22244 = state_22217;
(statearr_22244[(9)] = inst_22158__$1);

(statearr_22244[(11)] = inst_22160__$1);

(statearr_22244[(20)] = inst_22157__$1);

(statearr_22244[(22)] = inst_22172);

(statearr_22244[(21)] = inst_22159__$1);

return statearr_22244;
})();
var statearr_22245_22319 = state_22217__$1;
(statearr_22245_22319[(2)] = null);

(statearr_22245_22319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (40))){
var inst_22185 = (state_22217[(23)]);
var inst_22189 = done.call(null,null);
var inst_22190 = cljs.core.async.untap_STAR_.call(null,m,inst_22185);
var state_22217__$1 = (function (){var statearr_22246 = state_22217;
(statearr_22246[(24)] = inst_22189);

return statearr_22246;
})();
var statearr_22247_22320 = state_22217__$1;
(statearr_22247_22320[(2)] = inst_22190);

(statearr_22247_22320[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (33))){
var inst_22176 = (state_22217[(25)]);
var inst_22178 = cljs.core.chunked_seq_QMARK_.call(null,inst_22176);
var state_22217__$1 = state_22217;
if(inst_22178){
var statearr_22248_22321 = state_22217__$1;
(statearr_22248_22321[(1)] = (36));

} else {
var statearr_22249_22322 = state_22217__$1;
(statearr_22249_22322[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (13))){
var inst_22108 = (state_22217[(26)]);
var inst_22111 = cljs.core.async.close_BANG_.call(null,inst_22108);
var state_22217__$1 = state_22217;
var statearr_22250_22323 = state_22217__$1;
(statearr_22250_22323[(2)] = inst_22111);

(statearr_22250_22323[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (22))){
var inst_22129 = (state_22217[(8)]);
var inst_22132 = cljs.core.async.close_BANG_.call(null,inst_22129);
var state_22217__$1 = state_22217;
var statearr_22251_22324 = state_22217__$1;
(statearr_22251_22324[(2)] = inst_22132);

(statearr_22251_22324[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (36))){
var inst_22176 = (state_22217[(25)]);
var inst_22180 = cljs.core.chunk_first.call(null,inst_22176);
var inst_22181 = cljs.core.chunk_rest.call(null,inst_22176);
var inst_22182 = cljs.core.count.call(null,inst_22180);
var inst_22157 = inst_22181;
var inst_22158 = inst_22180;
var inst_22159 = inst_22182;
var inst_22160 = (0);
var state_22217__$1 = (function (){var statearr_22252 = state_22217;
(statearr_22252[(9)] = inst_22158);

(statearr_22252[(11)] = inst_22160);

(statearr_22252[(20)] = inst_22157);

(statearr_22252[(21)] = inst_22159);

return statearr_22252;
})();
var statearr_22253_22325 = state_22217__$1;
(statearr_22253_22325[(2)] = null);

(statearr_22253_22325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (41))){
var inst_22176 = (state_22217[(25)]);
var inst_22192 = (state_22217[(2)]);
var inst_22193 = cljs.core.next.call(null,inst_22176);
var inst_22157 = inst_22193;
var inst_22158 = null;
var inst_22159 = (0);
var inst_22160 = (0);
var state_22217__$1 = (function (){var statearr_22254 = state_22217;
(statearr_22254[(9)] = inst_22158);

(statearr_22254[(11)] = inst_22160);

(statearr_22254[(27)] = inst_22192);

(statearr_22254[(20)] = inst_22157);

(statearr_22254[(21)] = inst_22159);

return statearr_22254;
})();
var statearr_22255_22326 = state_22217__$1;
(statearr_22255_22326[(2)] = null);

(statearr_22255_22326[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (43))){
var state_22217__$1 = state_22217;
var statearr_22256_22327 = state_22217__$1;
(statearr_22256_22327[(2)] = null);

(statearr_22256_22327[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (29))){
var inst_22201 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22257_22328 = state_22217__$1;
(statearr_22257_22328[(2)] = inst_22201);

(statearr_22257_22328[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (44))){
var inst_22210 = (state_22217[(2)]);
var state_22217__$1 = (function (){var statearr_22258 = state_22217;
(statearr_22258[(28)] = inst_22210);

return statearr_22258;
})();
var statearr_22259_22329 = state_22217__$1;
(statearr_22259_22329[(2)] = null);

(statearr_22259_22329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (6))){
var inst_22149 = (state_22217[(29)]);
var inst_22148 = cljs.core.deref.call(null,cs);
var inst_22149__$1 = cljs.core.keys.call(null,inst_22148);
var inst_22150 = cljs.core.count.call(null,inst_22149__$1);
var inst_22151 = cljs.core.reset_BANG_.call(null,dctr,inst_22150);
var inst_22156 = cljs.core.seq.call(null,inst_22149__$1);
var inst_22157 = inst_22156;
var inst_22158 = null;
var inst_22159 = (0);
var inst_22160 = (0);
var state_22217__$1 = (function (){var statearr_22260 = state_22217;
(statearr_22260[(9)] = inst_22158);

(statearr_22260[(30)] = inst_22151);

(statearr_22260[(11)] = inst_22160);

(statearr_22260[(29)] = inst_22149__$1);

(statearr_22260[(20)] = inst_22157);

(statearr_22260[(21)] = inst_22159);

return statearr_22260;
})();
var statearr_22261_22330 = state_22217__$1;
(statearr_22261_22330[(2)] = null);

(statearr_22261_22330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (28))){
var inst_22176 = (state_22217[(25)]);
var inst_22157 = (state_22217[(20)]);
var inst_22176__$1 = cljs.core.seq.call(null,inst_22157);
var state_22217__$1 = (function (){var statearr_22262 = state_22217;
(statearr_22262[(25)] = inst_22176__$1);

return statearr_22262;
})();
if(inst_22176__$1){
var statearr_22263_22331 = state_22217__$1;
(statearr_22263_22331[(1)] = (33));

} else {
var statearr_22264_22332 = state_22217__$1;
(statearr_22264_22332[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (25))){
var inst_22160 = (state_22217[(11)]);
var inst_22159 = (state_22217[(21)]);
var inst_22162 = (inst_22160 < inst_22159);
var inst_22163 = inst_22162;
var state_22217__$1 = state_22217;
if(cljs.core.truth_(inst_22163)){
var statearr_22265_22333 = state_22217__$1;
(statearr_22265_22333[(1)] = (27));

} else {
var statearr_22266_22334 = state_22217__$1;
(statearr_22266_22334[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (34))){
var state_22217__$1 = state_22217;
var statearr_22267_22335 = state_22217__$1;
(statearr_22267_22335[(2)] = null);

(statearr_22267_22335[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (17))){
var state_22217__$1 = state_22217;
var statearr_22268_22336 = state_22217__$1;
(statearr_22268_22336[(2)] = null);

(statearr_22268_22336[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (3))){
var inst_22215 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22217__$1,inst_22215);
} else {
if((state_val_22218 === (12))){
var inst_22144 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22269_22337 = state_22217__$1;
(statearr_22269_22337[(2)] = inst_22144);

(statearr_22269_22337[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (2))){
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22217__$1,(4),ch);
} else {
if((state_val_22218 === (23))){
var state_22217__$1 = state_22217;
var statearr_22270_22338 = state_22217__$1;
(statearr_22270_22338[(2)] = null);

(statearr_22270_22338[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (35))){
var inst_22199 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22271_22339 = state_22217__$1;
(statearr_22271_22339[(2)] = inst_22199);

(statearr_22271_22339[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (19))){
var inst_22118 = (state_22217[(7)]);
var inst_22122 = cljs.core.chunk_first.call(null,inst_22118);
var inst_22123 = cljs.core.chunk_rest.call(null,inst_22118);
var inst_22124 = cljs.core.count.call(null,inst_22122);
var inst_22098 = inst_22123;
var inst_22099 = inst_22122;
var inst_22100 = inst_22124;
var inst_22101 = (0);
var state_22217__$1 = (function (){var statearr_22272 = state_22217;
(statearr_22272[(14)] = inst_22101);

(statearr_22272[(15)] = inst_22099);

(statearr_22272[(16)] = inst_22098);

(statearr_22272[(17)] = inst_22100);

return statearr_22272;
})();
var statearr_22273_22340 = state_22217__$1;
(statearr_22273_22340[(2)] = null);

(statearr_22273_22340[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (11))){
var inst_22118 = (state_22217[(7)]);
var inst_22098 = (state_22217[(16)]);
var inst_22118__$1 = cljs.core.seq.call(null,inst_22098);
var state_22217__$1 = (function (){var statearr_22274 = state_22217;
(statearr_22274[(7)] = inst_22118__$1);

return statearr_22274;
})();
if(inst_22118__$1){
var statearr_22275_22341 = state_22217__$1;
(statearr_22275_22341[(1)] = (16));

} else {
var statearr_22276_22342 = state_22217__$1;
(statearr_22276_22342[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (9))){
var inst_22146 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22277_22343 = state_22217__$1;
(statearr_22277_22343[(2)] = inst_22146);

(statearr_22277_22343[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (5))){
var inst_22096 = cljs.core.deref.call(null,cs);
var inst_22097 = cljs.core.seq.call(null,inst_22096);
var inst_22098 = inst_22097;
var inst_22099 = null;
var inst_22100 = (0);
var inst_22101 = (0);
var state_22217__$1 = (function (){var statearr_22278 = state_22217;
(statearr_22278[(14)] = inst_22101);

(statearr_22278[(15)] = inst_22099);

(statearr_22278[(16)] = inst_22098);

(statearr_22278[(17)] = inst_22100);

return statearr_22278;
})();
var statearr_22279_22344 = state_22217__$1;
(statearr_22279_22344[(2)] = null);

(statearr_22279_22344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (14))){
var state_22217__$1 = state_22217;
var statearr_22280_22345 = state_22217__$1;
(statearr_22280_22345[(2)] = null);

(statearr_22280_22345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (45))){
var inst_22207 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22281_22346 = state_22217__$1;
(statearr_22281_22346[(2)] = inst_22207);

(statearr_22281_22346[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (26))){
var inst_22149 = (state_22217[(29)]);
var inst_22203 = (state_22217[(2)]);
var inst_22204 = cljs.core.seq.call(null,inst_22149);
var state_22217__$1 = (function (){var statearr_22282 = state_22217;
(statearr_22282[(31)] = inst_22203);

return statearr_22282;
})();
if(inst_22204){
var statearr_22283_22347 = state_22217__$1;
(statearr_22283_22347[(1)] = (42));

} else {
var statearr_22284_22348 = state_22217__$1;
(statearr_22284_22348[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (16))){
var inst_22118 = (state_22217[(7)]);
var inst_22120 = cljs.core.chunked_seq_QMARK_.call(null,inst_22118);
var state_22217__$1 = state_22217;
if(inst_22120){
var statearr_22285_22349 = state_22217__$1;
(statearr_22285_22349[(1)] = (19));

} else {
var statearr_22286_22350 = state_22217__$1;
(statearr_22286_22350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (38))){
var inst_22196 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22287_22351 = state_22217__$1;
(statearr_22287_22351[(2)] = inst_22196);

(statearr_22287_22351[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (30))){
var state_22217__$1 = state_22217;
var statearr_22288_22352 = state_22217__$1;
(statearr_22288_22352[(2)] = null);

(statearr_22288_22352[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (10))){
var inst_22101 = (state_22217[(14)]);
var inst_22099 = (state_22217[(15)]);
var inst_22107 = cljs.core._nth.call(null,inst_22099,inst_22101);
var inst_22108 = cljs.core.nth.call(null,inst_22107,(0),null);
var inst_22109 = cljs.core.nth.call(null,inst_22107,(1),null);
var state_22217__$1 = (function (){var statearr_22289 = state_22217;
(statearr_22289[(26)] = inst_22108);

return statearr_22289;
})();
if(cljs.core.truth_(inst_22109)){
var statearr_22290_22353 = state_22217__$1;
(statearr_22290_22353[(1)] = (13));

} else {
var statearr_22291_22354 = state_22217__$1;
(statearr_22291_22354[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (18))){
var inst_22142 = (state_22217[(2)]);
var state_22217__$1 = state_22217;
var statearr_22292_22355 = state_22217__$1;
(statearr_22292_22355[(2)] = inst_22142);

(statearr_22292_22355[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (42))){
var state_22217__$1 = state_22217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22217__$1,(45),dchan);
} else {
if((state_val_22218 === (37))){
var inst_22089 = (state_22217[(10)]);
var inst_22185 = (state_22217[(23)]);
var inst_22176 = (state_22217[(25)]);
var inst_22185__$1 = cljs.core.first.call(null,inst_22176);
var inst_22186 = cljs.core.async.put_BANG_.call(null,inst_22185__$1,inst_22089,done);
var state_22217__$1 = (function (){var statearr_22293 = state_22217;
(statearr_22293[(23)] = inst_22185__$1);

return statearr_22293;
})();
if(cljs.core.truth_(inst_22186)){
var statearr_22294_22356 = state_22217__$1;
(statearr_22294_22356[(1)] = (39));

} else {
var statearr_22295_22357 = state_22217__$1;
(statearr_22295_22357[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22218 === (8))){
var inst_22101 = (state_22217[(14)]);
var inst_22100 = (state_22217[(17)]);
var inst_22103 = (inst_22101 < inst_22100);
var inst_22104 = inst_22103;
var state_22217__$1 = state_22217;
if(cljs.core.truth_(inst_22104)){
var statearr_22296_22358 = state_22217__$1;
(statearr_22296_22358[(1)] = (10));

} else {
var statearr_22297_22359 = state_22217__$1;
(statearr_22297_22359[(1)] = (11));

}

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
});})(c__16751__auto___22305,cs,m,dchan,dctr,done))
;
return ((function (switch__16686__auto__,c__16751__auto___22305,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16687__auto__ = null;
var cljs$core$async$mult_$_state_machine__16687__auto____0 = (function (){
var statearr_22301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22301[(0)] = cljs$core$async$mult_$_state_machine__16687__auto__);

(statearr_22301[(1)] = (1));

return statearr_22301;
});
var cljs$core$async$mult_$_state_machine__16687__auto____1 = (function (state_22217){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_22217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e22302){if((e22302 instanceof Object)){
var ex__16690__auto__ = e22302;
var statearr_22303_22360 = state_22217;
(statearr_22303_22360[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22302;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22361 = state_22217;
state_22217 = G__22361;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16687__auto__ = function(state_22217){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16687__auto____1.call(this,state_22217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16687__auto____0;
cljs$core$async$mult_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16687__auto____1;
return cljs$core$async$mult_$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___22305,cs,m,dchan,dctr,done))
})();
var state__16753__auto__ = (function (){var statearr_22304 = f__16752__auto__.call(null);
(statearr_22304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___22305);

return statearr_22304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___22305,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22362 = [];
var len__15726__auto___22365 = arguments.length;
var i__15727__auto___22366 = (0);
while(true){
if((i__15727__auto___22366 < len__15726__auto___22365)){
args22362.push((arguments[i__15727__auto___22366]));

var G__22367 = (i__15727__auto___22366 + (1));
i__15727__auto___22366 = G__22367;
continue;
} else {
}
break;
}

var G__22364 = args22362.length;
switch (G__22364) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22362.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m,ch);
} else {
var m__15324__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m,ch);
} else {
var m__15324__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m);
} else {
var m__15324__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m,state_map);
} else {
var m__15324__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__15323__auto__ = (((m == null))?null:m);
var m__15324__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,m,mode);
} else {
var m__15324__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__15733__auto__ = [];
var len__15726__auto___22379 = arguments.length;
var i__15727__auto___22380 = (0);
while(true){
if((i__15727__auto___22380 < len__15726__auto___22379)){
args__15733__auto__.push((arguments[i__15727__auto___22380]));

var G__22381 = (i__15727__auto___22380 + (1));
i__15727__auto___22380 = G__22381;
continue;
} else {
}
break;
}

var argseq__15734__auto__ = ((((3) < args__15733__auto__.length))?(new cljs.core.IndexedSeq(args__15733__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__15734__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22373){
var map__22374 = p__22373;
var map__22374__$1 = ((((!((map__22374 == null)))?((((map__22374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22374):map__22374);
var opts = map__22374__$1;
var statearr_22376_22382 = state;
(statearr_22376_22382[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22374,map__22374__$1,opts){
return (function (val){
var statearr_22377_22383 = state;
(statearr_22377_22383[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22374,map__22374__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22378_22384 = state;
(statearr_22378_22384[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22369){
var G__22370 = cljs.core.first.call(null,seq22369);
var seq22369__$1 = cljs.core.next.call(null,seq22369);
var G__22371 = cljs.core.first.call(null,seq22369__$1);
var seq22369__$2 = cljs.core.next.call(null,seq22369__$1);
var G__22372 = cljs.core.first.call(null,seq22369__$2);
var seq22369__$3 = cljs.core.next.call(null,seq22369__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22370,G__22371,G__22372,seq22369__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22548 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22548 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22549){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22549 = meta22549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22550,meta22549__$1){
var self__ = this;
var _22550__$1 = this;
return (new cljs.core.async.t_cljs$core$async22548(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22549__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22550){
var self__ = this;
var _22550__$1 = this;
return self__.meta22549;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22549","meta22549",-166715079,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22548.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22548";

cljs.core.async.t_cljs$core$async22548.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async22548");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22548 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22548(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22549){
return (new cljs.core.async.t_cljs$core$async22548(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22549));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22548(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16751__auto___22711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___22711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___22711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22648){
var state_val_22649 = (state_22648[(1)]);
if((state_val_22649 === (7))){
var inst_22566 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
var statearr_22650_22712 = state_22648__$1;
(statearr_22650_22712[(2)] = inst_22566);

(statearr_22650_22712[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (20))){
var inst_22578 = (state_22648[(7)]);
var state_22648__$1 = state_22648;
var statearr_22651_22713 = state_22648__$1;
(statearr_22651_22713[(2)] = inst_22578);

(statearr_22651_22713[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (27))){
var state_22648__$1 = state_22648;
var statearr_22652_22714 = state_22648__$1;
(statearr_22652_22714[(2)] = null);

(statearr_22652_22714[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (1))){
var inst_22554 = (state_22648[(8)]);
var inst_22554__$1 = calc_state.call(null);
var inst_22556 = (inst_22554__$1 == null);
var inst_22557 = cljs.core.not.call(null,inst_22556);
var state_22648__$1 = (function (){var statearr_22653 = state_22648;
(statearr_22653[(8)] = inst_22554__$1);

return statearr_22653;
})();
if(inst_22557){
var statearr_22654_22715 = state_22648__$1;
(statearr_22654_22715[(1)] = (2));

} else {
var statearr_22655_22716 = state_22648__$1;
(statearr_22655_22716[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (24))){
var inst_22608 = (state_22648[(9)]);
var inst_22622 = (state_22648[(10)]);
var inst_22601 = (state_22648[(11)]);
var inst_22622__$1 = inst_22601.call(null,inst_22608);
var state_22648__$1 = (function (){var statearr_22656 = state_22648;
(statearr_22656[(10)] = inst_22622__$1);

return statearr_22656;
})();
if(cljs.core.truth_(inst_22622__$1)){
var statearr_22657_22717 = state_22648__$1;
(statearr_22657_22717[(1)] = (29));

} else {
var statearr_22658_22718 = state_22648__$1;
(statearr_22658_22718[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (4))){
var inst_22569 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22569)){
var statearr_22659_22719 = state_22648__$1;
(statearr_22659_22719[(1)] = (8));

} else {
var statearr_22660_22720 = state_22648__$1;
(statearr_22660_22720[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (15))){
var inst_22595 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22595)){
var statearr_22661_22721 = state_22648__$1;
(statearr_22661_22721[(1)] = (19));

} else {
var statearr_22662_22722 = state_22648__$1;
(statearr_22662_22722[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (21))){
var inst_22600 = (state_22648[(12)]);
var inst_22600__$1 = (state_22648[(2)]);
var inst_22601 = cljs.core.get.call(null,inst_22600__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22602 = cljs.core.get.call(null,inst_22600__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22603 = cljs.core.get.call(null,inst_22600__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22648__$1 = (function (){var statearr_22663 = state_22648;
(statearr_22663[(13)] = inst_22602);

(statearr_22663[(11)] = inst_22601);

(statearr_22663[(12)] = inst_22600__$1);

return statearr_22663;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22648__$1,(22),inst_22603);
} else {
if((state_val_22649 === (31))){
var inst_22630 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22630)){
var statearr_22664_22723 = state_22648__$1;
(statearr_22664_22723[(1)] = (32));

} else {
var statearr_22665_22724 = state_22648__$1;
(statearr_22665_22724[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (32))){
var inst_22607 = (state_22648[(14)]);
var state_22648__$1 = state_22648;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22648__$1,(35),out,inst_22607);
} else {
if((state_val_22649 === (33))){
var inst_22600 = (state_22648[(12)]);
var inst_22578 = inst_22600;
var state_22648__$1 = (function (){var statearr_22666 = state_22648;
(statearr_22666[(7)] = inst_22578);

return statearr_22666;
})();
var statearr_22667_22725 = state_22648__$1;
(statearr_22667_22725[(2)] = null);

(statearr_22667_22725[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (13))){
var inst_22578 = (state_22648[(7)]);
var inst_22585 = inst_22578.cljs$lang$protocol_mask$partition0$;
var inst_22586 = (inst_22585 & (64));
var inst_22587 = inst_22578.cljs$core$ISeq$;
var inst_22588 = (inst_22586) || (inst_22587);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22588)){
var statearr_22668_22726 = state_22648__$1;
(statearr_22668_22726[(1)] = (16));

} else {
var statearr_22669_22727 = state_22648__$1;
(statearr_22669_22727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (22))){
var inst_22608 = (state_22648[(9)]);
var inst_22607 = (state_22648[(14)]);
var inst_22606 = (state_22648[(2)]);
var inst_22607__$1 = cljs.core.nth.call(null,inst_22606,(0),null);
var inst_22608__$1 = cljs.core.nth.call(null,inst_22606,(1),null);
var inst_22609 = (inst_22607__$1 == null);
var inst_22610 = cljs.core._EQ_.call(null,inst_22608__$1,change);
var inst_22611 = (inst_22609) || (inst_22610);
var state_22648__$1 = (function (){var statearr_22670 = state_22648;
(statearr_22670[(9)] = inst_22608__$1);

(statearr_22670[(14)] = inst_22607__$1);

return statearr_22670;
})();
if(cljs.core.truth_(inst_22611)){
var statearr_22671_22728 = state_22648__$1;
(statearr_22671_22728[(1)] = (23));

} else {
var statearr_22672_22729 = state_22648__$1;
(statearr_22672_22729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (36))){
var inst_22600 = (state_22648[(12)]);
var inst_22578 = inst_22600;
var state_22648__$1 = (function (){var statearr_22673 = state_22648;
(statearr_22673[(7)] = inst_22578);

return statearr_22673;
})();
var statearr_22674_22730 = state_22648__$1;
(statearr_22674_22730[(2)] = null);

(statearr_22674_22730[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (29))){
var inst_22622 = (state_22648[(10)]);
var state_22648__$1 = state_22648;
var statearr_22675_22731 = state_22648__$1;
(statearr_22675_22731[(2)] = inst_22622);

(statearr_22675_22731[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (6))){
var state_22648__$1 = state_22648;
var statearr_22676_22732 = state_22648__$1;
(statearr_22676_22732[(2)] = false);

(statearr_22676_22732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (28))){
var inst_22618 = (state_22648[(2)]);
var inst_22619 = calc_state.call(null);
var inst_22578 = inst_22619;
var state_22648__$1 = (function (){var statearr_22677 = state_22648;
(statearr_22677[(7)] = inst_22578);

(statearr_22677[(15)] = inst_22618);

return statearr_22677;
})();
var statearr_22678_22733 = state_22648__$1;
(statearr_22678_22733[(2)] = null);

(statearr_22678_22733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (25))){
var inst_22644 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
var statearr_22679_22734 = state_22648__$1;
(statearr_22679_22734[(2)] = inst_22644);

(statearr_22679_22734[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (34))){
var inst_22642 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
var statearr_22680_22735 = state_22648__$1;
(statearr_22680_22735[(2)] = inst_22642);

(statearr_22680_22735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (17))){
var state_22648__$1 = state_22648;
var statearr_22681_22736 = state_22648__$1;
(statearr_22681_22736[(2)] = false);

(statearr_22681_22736[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (3))){
var state_22648__$1 = state_22648;
var statearr_22682_22737 = state_22648__$1;
(statearr_22682_22737[(2)] = false);

(statearr_22682_22737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (12))){
var inst_22646 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22648__$1,inst_22646);
} else {
if((state_val_22649 === (2))){
var inst_22554 = (state_22648[(8)]);
var inst_22559 = inst_22554.cljs$lang$protocol_mask$partition0$;
var inst_22560 = (inst_22559 & (64));
var inst_22561 = inst_22554.cljs$core$ISeq$;
var inst_22562 = (inst_22560) || (inst_22561);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22562)){
var statearr_22683_22738 = state_22648__$1;
(statearr_22683_22738[(1)] = (5));

} else {
var statearr_22684_22739 = state_22648__$1;
(statearr_22684_22739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (23))){
var inst_22607 = (state_22648[(14)]);
var inst_22613 = (inst_22607 == null);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22613)){
var statearr_22685_22740 = state_22648__$1;
(statearr_22685_22740[(1)] = (26));

} else {
var statearr_22686_22741 = state_22648__$1;
(statearr_22686_22741[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (35))){
var inst_22633 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
if(cljs.core.truth_(inst_22633)){
var statearr_22687_22742 = state_22648__$1;
(statearr_22687_22742[(1)] = (36));

} else {
var statearr_22688_22743 = state_22648__$1;
(statearr_22688_22743[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (19))){
var inst_22578 = (state_22648[(7)]);
var inst_22597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22578);
var state_22648__$1 = state_22648;
var statearr_22689_22744 = state_22648__$1;
(statearr_22689_22744[(2)] = inst_22597);

(statearr_22689_22744[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (11))){
var inst_22578 = (state_22648[(7)]);
var inst_22582 = (inst_22578 == null);
var inst_22583 = cljs.core.not.call(null,inst_22582);
var state_22648__$1 = state_22648;
if(inst_22583){
var statearr_22690_22745 = state_22648__$1;
(statearr_22690_22745[(1)] = (13));

} else {
var statearr_22691_22746 = state_22648__$1;
(statearr_22691_22746[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (9))){
var inst_22554 = (state_22648[(8)]);
var state_22648__$1 = state_22648;
var statearr_22692_22747 = state_22648__$1;
(statearr_22692_22747[(2)] = inst_22554);

(statearr_22692_22747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (5))){
var state_22648__$1 = state_22648;
var statearr_22693_22748 = state_22648__$1;
(statearr_22693_22748[(2)] = true);

(statearr_22693_22748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (14))){
var state_22648__$1 = state_22648;
var statearr_22694_22749 = state_22648__$1;
(statearr_22694_22749[(2)] = false);

(statearr_22694_22749[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (26))){
var inst_22608 = (state_22648[(9)]);
var inst_22615 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22608);
var state_22648__$1 = state_22648;
var statearr_22695_22750 = state_22648__$1;
(statearr_22695_22750[(2)] = inst_22615);

(statearr_22695_22750[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (16))){
var state_22648__$1 = state_22648;
var statearr_22696_22751 = state_22648__$1;
(statearr_22696_22751[(2)] = true);

(statearr_22696_22751[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (38))){
var inst_22638 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
var statearr_22697_22752 = state_22648__$1;
(statearr_22697_22752[(2)] = inst_22638);

(statearr_22697_22752[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (30))){
var inst_22602 = (state_22648[(13)]);
var inst_22608 = (state_22648[(9)]);
var inst_22601 = (state_22648[(11)]);
var inst_22625 = cljs.core.empty_QMARK_.call(null,inst_22601);
var inst_22626 = inst_22602.call(null,inst_22608);
var inst_22627 = cljs.core.not.call(null,inst_22626);
var inst_22628 = (inst_22625) && (inst_22627);
var state_22648__$1 = state_22648;
var statearr_22698_22753 = state_22648__$1;
(statearr_22698_22753[(2)] = inst_22628);

(statearr_22698_22753[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (10))){
var inst_22554 = (state_22648[(8)]);
var inst_22574 = (state_22648[(2)]);
var inst_22575 = cljs.core.get.call(null,inst_22574,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22576 = cljs.core.get.call(null,inst_22574,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22577 = cljs.core.get.call(null,inst_22574,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22578 = inst_22554;
var state_22648__$1 = (function (){var statearr_22699 = state_22648;
(statearr_22699[(16)] = inst_22577);

(statearr_22699[(7)] = inst_22578);

(statearr_22699[(17)] = inst_22576);

(statearr_22699[(18)] = inst_22575);

return statearr_22699;
})();
var statearr_22700_22754 = state_22648__$1;
(statearr_22700_22754[(2)] = null);

(statearr_22700_22754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (18))){
var inst_22592 = (state_22648[(2)]);
var state_22648__$1 = state_22648;
var statearr_22701_22755 = state_22648__$1;
(statearr_22701_22755[(2)] = inst_22592);

(statearr_22701_22755[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (37))){
var state_22648__$1 = state_22648;
var statearr_22702_22756 = state_22648__$1;
(statearr_22702_22756[(2)] = null);

(statearr_22702_22756[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22649 === (8))){
var inst_22554 = (state_22648[(8)]);
var inst_22571 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22554);
var state_22648__$1 = state_22648;
var statearr_22703_22757 = state_22648__$1;
(statearr_22703_22757[(2)] = inst_22571);

(statearr_22703_22757[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
});})(c__16751__auto___22711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16686__auto__,c__16751__auto___22711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16687__auto__ = null;
var cljs$core$async$mix_$_state_machine__16687__auto____0 = (function (){
var statearr_22707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22707[(0)] = cljs$core$async$mix_$_state_machine__16687__auto__);

(statearr_22707[(1)] = (1));

return statearr_22707;
});
var cljs$core$async$mix_$_state_machine__16687__auto____1 = (function (state_22648){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_22648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e22708){if((e22708 instanceof Object)){
var ex__16690__auto__ = e22708;
var statearr_22709_22758 = state_22648;
(statearr_22709_22758[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22759 = state_22648;
state_22648 = G__22759;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16687__auto__ = function(state_22648){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16687__auto____1.call(this,state_22648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16687__auto____0;
cljs$core$async$mix_$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16687__auto____1;
return cljs$core$async$mix_$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___22711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16753__auto__ = (function (){var statearr_22710 = f__16752__auto__.call(null);
(statearr_22710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___22711);

return statearr_22710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___22711,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__15323__auto__ = (((p == null))?null:p);
var m__15324__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__15324__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__15323__auto__ = (((p == null))?null:p);
var m__15324__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,p,v,ch);
} else {
var m__15324__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22760 = [];
var len__15726__auto___22763 = arguments.length;
var i__15727__auto___22764 = (0);
while(true){
if((i__15727__auto___22764 < len__15726__auto___22763)){
args22760.push((arguments[i__15727__auto___22764]));

var G__22765 = (i__15727__auto___22764 + (1));
i__15727__auto___22764 = G__22765;
continue;
} else {
}
break;
}

var G__22762 = args22760.length;
switch (G__22762) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22760.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15323__auto__ = (((p == null))?null:p);
var m__15324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,p);
} else {
var m__15324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__15323__auto__ = (((p == null))?null:p);
var m__15324__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15323__auto__)]);
if(!((m__15324__auto__ == null))){
return m__15324__auto__.call(null,p,v);
} else {
var m__15324__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15324__auto____$1 == null))){
return m__15324__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22768 = [];
var len__15726__auto___22893 = arguments.length;
var i__15727__auto___22894 = (0);
while(true){
if((i__15727__auto___22894 < len__15726__auto___22893)){
args22768.push((arguments[i__15727__auto___22894]));

var G__22895 = (i__15727__auto___22894 + (1));
i__15727__auto___22894 = G__22895;
continue;
} else {
}
break;
}

var G__22770 = args22768.length;
switch (G__22770) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22768.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__14668__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__14668__auto__)){
return or__14668__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14668__auto__,mults){
return (function (p1__22767_SHARP_){
if(cljs.core.truth_(p1__22767_SHARP_.call(null,topic))){
return p1__22767_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22767_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14668__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22771 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22771 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22772){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22772 = meta22772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22773,meta22772__$1){
var self__ = this;
var _22773__$1 = this;
return (new cljs.core.async.t_cljs$core$async22771(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22772__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22773){
var self__ = this;
var _22773__$1 = this;
return self__.meta22772;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22772","meta22772",1916494846,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22771.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22771";

cljs.core.async.t_cljs$core$async22771.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async22771");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22771 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22771(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22772){
return (new cljs.core.async.t_cljs$core$async22771(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22772));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22771(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16751__auto___22897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___22897,mults,ensure_mult,p){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___22897,mults,ensure_mult,p){
return (function (state_22845){
var state_val_22846 = (state_22845[(1)]);
if((state_val_22846 === (7))){
var inst_22841 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
var statearr_22847_22898 = state_22845__$1;
(statearr_22847_22898[(2)] = inst_22841);

(statearr_22847_22898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (20))){
var state_22845__$1 = state_22845;
var statearr_22848_22899 = state_22845__$1;
(statearr_22848_22899[(2)] = null);

(statearr_22848_22899[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (1))){
var state_22845__$1 = state_22845;
var statearr_22849_22900 = state_22845__$1;
(statearr_22849_22900[(2)] = null);

(statearr_22849_22900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (24))){
var inst_22824 = (state_22845[(7)]);
var inst_22833 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22824);
var state_22845__$1 = state_22845;
var statearr_22850_22901 = state_22845__$1;
(statearr_22850_22901[(2)] = inst_22833);

(statearr_22850_22901[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (4))){
var inst_22776 = (state_22845[(8)]);
var inst_22776__$1 = (state_22845[(2)]);
var inst_22777 = (inst_22776__$1 == null);
var state_22845__$1 = (function (){var statearr_22851 = state_22845;
(statearr_22851[(8)] = inst_22776__$1);

return statearr_22851;
})();
if(cljs.core.truth_(inst_22777)){
var statearr_22852_22902 = state_22845__$1;
(statearr_22852_22902[(1)] = (5));

} else {
var statearr_22853_22903 = state_22845__$1;
(statearr_22853_22903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (15))){
var inst_22818 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
var statearr_22854_22904 = state_22845__$1;
(statearr_22854_22904[(2)] = inst_22818);

(statearr_22854_22904[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (21))){
var inst_22838 = (state_22845[(2)]);
var state_22845__$1 = (function (){var statearr_22855 = state_22845;
(statearr_22855[(9)] = inst_22838);

return statearr_22855;
})();
var statearr_22856_22905 = state_22845__$1;
(statearr_22856_22905[(2)] = null);

(statearr_22856_22905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (13))){
var inst_22800 = (state_22845[(10)]);
var inst_22802 = cljs.core.chunked_seq_QMARK_.call(null,inst_22800);
var state_22845__$1 = state_22845;
if(inst_22802){
var statearr_22857_22906 = state_22845__$1;
(statearr_22857_22906[(1)] = (16));

} else {
var statearr_22858_22907 = state_22845__$1;
(statearr_22858_22907[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (22))){
var inst_22830 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
if(cljs.core.truth_(inst_22830)){
var statearr_22859_22908 = state_22845__$1;
(statearr_22859_22908[(1)] = (23));

} else {
var statearr_22860_22909 = state_22845__$1;
(statearr_22860_22909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (6))){
var inst_22824 = (state_22845[(7)]);
var inst_22826 = (state_22845[(11)]);
var inst_22776 = (state_22845[(8)]);
var inst_22824__$1 = topic_fn.call(null,inst_22776);
var inst_22825 = cljs.core.deref.call(null,mults);
var inst_22826__$1 = cljs.core.get.call(null,inst_22825,inst_22824__$1);
var state_22845__$1 = (function (){var statearr_22861 = state_22845;
(statearr_22861[(7)] = inst_22824__$1);

(statearr_22861[(11)] = inst_22826__$1);

return statearr_22861;
})();
if(cljs.core.truth_(inst_22826__$1)){
var statearr_22862_22910 = state_22845__$1;
(statearr_22862_22910[(1)] = (19));

} else {
var statearr_22863_22911 = state_22845__$1;
(statearr_22863_22911[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (25))){
var inst_22835 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
var statearr_22864_22912 = state_22845__$1;
(statearr_22864_22912[(2)] = inst_22835);

(statearr_22864_22912[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (17))){
var inst_22800 = (state_22845[(10)]);
var inst_22809 = cljs.core.first.call(null,inst_22800);
var inst_22810 = cljs.core.async.muxch_STAR_.call(null,inst_22809);
var inst_22811 = cljs.core.async.close_BANG_.call(null,inst_22810);
var inst_22812 = cljs.core.next.call(null,inst_22800);
var inst_22786 = inst_22812;
var inst_22787 = null;
var inst_22788 = (0);
var inst_22789 = (0);
var state_22845__$1 = (function (){var statearr_22865 = state_22845;
(statearr_22865[(12)] = inst_22786);

(statearr_22865[(13)] = inst_22787);

(statearr_22865[(14)] = inst_22788);

(statearr_22865[(15)] = inst_22811);

(statearr_22865[(16)] = inst_22789);

return statearr_22865;
})();
var statearr_22866_22913 = state_22845__$1;
(statearr_22866_22913[(2)] = null);

(statearr_22866_22913[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (3))){
var inst_22843 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22845__$1,inst_22843);
} else {
if((state_val_22846 === (12))){
var inst_22820 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
var statearr_22867_22914 = state_22845__$1;
(statearr_22867_22914[(2)] = inst_22820);

(statearr_22867_22914[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (2))){
var state_22845__$1 = state_22845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22845__$1,(4),ch);
} else {
if((state_val_22846 === (23))){
var state_22845__$1 = state_22845;
var statearr_22868_22915 = state_22845__$1;
(statearr_22868_22915[(2)] = null);

(statearr_22868_22915[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (19))){
var inst_22826 = (state_22845[(11)]);
var inst_22776 = (state_22845[(8)]);
var inst_22828 = cljs.core.async.muxch_STAR_.call(null,inst_22826);
var state_22845__$1 = state_22845;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22845__$1,(22),inst_22828,inst_22776);
} else {
if((state_val_22846 === (11))){
var inst_22786 = (state_22845[(12)]);
var inst_22800 = (state_22845[(10)]);
var inst_22800__$1 = cljs.core.seq.call(null,inst_22786);
var state_22845__$1 = (function (){var statearr_22869 = state_22845;
(statearr_22869[(10)] = inst_22800__$1);

return statearr_22869;
})();
if(inst_22800__$1){
var statearr_22870_22916 = state_22845__$1;
(statearr_22870_22916[(1)] = (13));

} else {
var statearr_22871_22917 = state_22845__$1;
(statearr_22871_22917[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (9))){
var inst_22822 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
var statearr_22872_22918 = state_22845__$1;
(statearr_22872_22918[(2)] = inst_22822);

(statearr_22872_22918[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (5))){
var inst_22783 = cljs.core.deref.call(null,mults);
var inst_22784 = cljs.core.vals.call(null,inst_22783);
var inst_22785 = cljs.core.seq.call(null,inst_22784);
var inst_22786 = inst_22785;
var inst_22787 = null;
var inst_22788 = (0);
var inst_22789 = (0);
var state_22845__$1 = (function (){var statearr_22873 = state_22845;
(statearr_22873[(12)] = inst_22786);

(statearr_22873[(13)] = inst_22787);

(statearr_22873[(14)] = inst_22788);

(statearr_22873[(16)] = inst_22789);

return statearr_22873;
})();
var statearr_22874_22919 = state_22845__$1;
(statearr_22874_22919[(2)] = null);

(statearr_22874_22919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (14))){
var state_22845__$1 = state_22845;
var statearr_22878_22920 = state_22845__$1;
(statearr_22878_22920[(2)] = null);

(statearr_22878_22920[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (16))){
var inst_22800 = (state_22845[(10)]);
var inst_22804 = cljs.core.chunk_first.call(null,inst_22800);
var inst_22805 = cljs.core.chunk_rest.call(null,inst_22800);
var inst_22806 = cljs.core.count.call(null,inst_22804);
var inst_22786 = inst_22805;
var inst_22787 = inst_22804;
var inst_22788 = inst_22806;
var inst_22789 = (0);
var state_22845__$1 = (function (){var statearr_22879 = state_22845;
(statearr_22879[(12)] = inst_22786);

(statearr_22879[(13)] = inst_22787);

(statearr_22879[(14)] = inst_22788);

(statearr_22879[(16)] = inst_22789);

return statearr_22879;
})();
var statearr_22880_22921 = state_22845__$1;
(statearr_22880_22921[(2)] = null);

(statearr_22880_22921[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (10))){
var inst_22786 = (state_22845[(12)]);
var inst_22787 = (state_22845[(13)]);
var inst_22788 = (state_22845[(14)]);
var inst_22789 = (state_22845[(16)]);
var inst_22794 = cljs.core._nth.call(null,inst_22787,inst_22789);
var inst_22795 = cljs.core.async.muxch_STAR_.call(null,inst_22794);
var inst_22796 = cljs.core.async.close_BANG_.call(null,inst_22795);
var inst_22797 = (inst_22789 + (1));
var tmp22875 = inst_22786;
var tmp22876 = inst_22787;
var tmp22877 = inst_22788;
var inst_22786__$1 = tmp22875;
var inst_22787__$1 = tmp22876;
var inst_22788__$1 = tmp22877;
var inst_22789__$1 = inst_22797;
var state_22845__$1 = (function (){var statearr_22881 = state_22845;
(statearr_22881[(12)] = inst_22786__$1);

(statearr_22881[(13)] = inst_22787__$1);

(statearr_22881[(14)] = inst_22788__$1);

(statearr_22881[(16)] = inst_22789__$1);

(statearr_22881[(17)] = inst_22796);

return statearr_22881;
})();
var statearr_22882_22922 = state_22845__$1;
(statearr_22882_22922[(2)] = null);

(statearr_22882_22922[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (18))){
var inst_22815 = (state_22845[(2)]);
var state_22845__$1 = state_22845;
var statearr_22883_22923 = state_22845__$1;
(statearr_22883_22923[(2)] = inst_22815);

(statearr_22883_22923[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22846 === (8))){
var inst_22788 = (state_22845[(14)]);
var inst_22789 = (state_22845[(16)]);
var inst_22791 = (inst_22789 < inst_22788);
var inst_22792 = inst_22791;
var state_22845__$1 = state_22845;
if(cljs.core.truth_(inst_22792)){
var statearr_22884_22924 = state_22845__$1;
(statearr_22884_22924[(1)] = (10));

} else {
var statearr_22885_22925 = state_22845__$1;
(statearr_22885_22925[(1)] = (11));

}

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
});})(c__16751__auto___22897,mults,ensure_mult,p))
;
return ((function (switch__16686__auto__,c__16751__auto___22897,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_22889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22889[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_22889[(1)] = (1));

return statearr_22889;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_22845){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_22845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e22890){if((e22890 instanceof Object)){
var ex__16690__auto__ = e22890;
var statearr_22891_22926 = state_22845;
(statearr_22891_22926[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22927 = state_22845;
state_22845 = G__22927;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_22845){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_22845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___22897,mults,ensure_mult,p))
})();
var state__16753__auto__ = (function (){var statearr_22892 = f__16752__auto__.call(null);
(statearr_22892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___22897);

return statearr_22892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___22897,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22928 = [];
var len__15726__auto___22931 = arguments.length;
var i__15727__auto___22932 = (0);
while(true){
if((i__15727__auto___22932 < len__15726__auto___22931)){
args22928.push((arguments[i__15727__auto___22932]));

var G__22933 = (i__15727__auto___22932 + (1));
i__15727__auto___22932 = G__22933;
continue;
} else {
}
break;
}

var G__22930 = args22928.length;
switch (G__22930) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22928.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22935 = [];
var len__15726__auto___22938 = arguments.length;
var i__15727__auto___22939 = (0);
while(true){
if((i__15727__auto___22939 < len__15726__auto___22938)){
args22935.push((arguments[i__15727__auto___22939]));

var G__22940 = (i__15727__auto___22939 + (1));
i__15727__auto___22939 = G__22940;
continue;
} else {
}
break;
}

var G__22937 = args22935.length;
switch (G__22937) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22935.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22942 = [];
var len__15726__auto___23013 = arguments.length;
var i__15727__auto___23014 = (0);
while(true){
if((i__15727__auto___23014 < len__15726__auto___23013)){
args22942.push((arguments[i__15727__auto___23014]));

var G__23015 = (i__15727__auto___23014 + (1));
i__15727__auto___23014 = G__23015;
continue;
} else {
}
break;
}

var G__22944 = args22942.length;
switch (G__22944) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22942.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__16751__auto___23017 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22983){
var state_val_22984 = (state_22983[(1)]);
if((state_val_22984 === (7))){
var state_22983__$1 = state_22983;
var statearr_22985_23018 = state_22983__$1;
(statearr_22985_23018[(2)] = null);

(statearr_22985_23018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (1))){
var state_22983__$1 = state_22983;
var statearr_22986_23019 = state_22983__$1;
(statearr_22986_23019[(2)] = null);

(statearr_22986_23019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (4))){
var inst_22947 = (state_22983[(7)]);
var inst_22949 = (inst_22947 < cnt);
var state_22983__$1 = state_22983;
if(cljs.core.truth_(inst_22949)){
var statearr_22987_23020 = state_22983__$1;
(statearr_22987_23020[(1)] = (6));

} else {
var statearr_22988_23021 = state_22983__$1;
(statearr_22988_23021[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (15))){
var inst_22979 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_22989_23022 = state_22983__$1;
(statearr_22989_23022[(2)] = inst_22979);

(statearr_22989_23022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (13))){
var inst_22972 = cljs.core.async.close_BANG_.call(null,out);
var state_22983__$1 = state_22983;
var statearr_22990_23023 = state_22983__$1;
(statearr_22990_23023[(2)] = inst_22972);

(statearr_22990_23023[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (6))){
var state_22983__$1 = state_22983;
var statearr_22991_23024 = state_22983__$1;
(statearr_22991_23024[(2)] = null);

(statearr_22991_23024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (3))){
var inst_22981 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22983__$1,inst_22981);
} else {
if((state_val_22984 === (12))){
var inst_22969 = (state_22983[(8)]);
var inst_22969__$1 = (state_22983[(2)]);
var inst_22970 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22969__$1);
var state_22983__$1 = (function (){var statearr_22992 = state_22983;
(statearr_22992[(8)] = inst_22969__$1);

return statearr_22992;
})();
if(cljs.core.truth_(inst_22970)){
var statearr_22993_23025 = state_22983__$1;
(statearr_22993_23025[(1)] = (13));

} else {
var statearr_22994_23026 = state_22983__$1;
(statearr_22994_23026[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (2))){
var inst_22946 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22947 = (0);
var state_22983__$1 = (function (){var statearr_22995 = state_22983;
(statearr_22995[(7)] = inst_22947);

(statearr_22995[(9)] = inst_22946);

return statearr_22995;
})();
var statearr_22996_23027 = state_22983__$1;
(statearr_22996_23027[(2)] = null);

(statearr_22996_23027[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (11))){
var inst_22947 = (state_22983[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22983,(10),Object,null,(9));
var inst_22956 = chs__$1.call(null,inst_22947);
var inst_22957 = done.call(null,inst_22947);
var inst_22958 = cljs.core.async.take_BANG_.call(null,inst_22956,inst_22957);
var state_22983__$1 = state_22983;
var statearr_22997_23028 = state_22983__$1;
(statearr_22997_23028[(2)] = inst_22958);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (9))){
var inst_22947 = (state_22983[(7)]);
var inst_22960 = (state_22983[(2)]);
var inst_22961 = (inst_22947 + (1));
var inst_22947__$1 = inst_22961;
var state_22983__$1 = (function (){var statearr_22998 = state_22983;
(statearr_22998[(7)] = inst_22947__$1);

(statearr_22998[(10)] = inst_22960);

return statearr_22998;
})();
var statearr_22999_23029 = state_22983__$1;
(statearr_22999_23029[(2)] = null);

(statearr_22999_23029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (5))){
var inst_22967 = (state_22983[(2)]);
var state_22983__$1 = (function (){var statearr_23000 = state_22983;
(statearr_23000[(11)] = inst_22967);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22983__$1,(12),dchan);
} else {
if((state_val_22984 === (14))){
var inst_22969 = (state_22983[(8)]);
var inst_22974 = cljs.core.apply.call(null,f,inst_22969);
var state_22983__$1 = state_22983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22983__$1,(16),out,inst_22974);
} else {
if((state_val_22984 === (16))){
var inst_22976 = (state_22983[(2)]);
var state_22983__$1 = (function (){var statearr_23001 = state_22983;
(statearr_23001[(12)] = inst_22976);

return statearr_23001;
})();
var statearr_23002_23030 = state_22983__$1;
(statearr_23002_23030[(2)] = null);

(statearr_23002_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (10))){
var inst_22951 = (state_22983[(2)]);
var inst_22952 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22983__$1 = (function (){var statearr_23003 = state_22983;
(statearr_23003[(13)] = inst_22951);

return statearr_23003;
})();
var statearr_23004_23031 = state_22983__$1;
(statearr_23004_23031[(2)] = inst_22952);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22983__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22984 === (8))){
var inst_22965 = (state_22983[(2)]);
var state_22983__$1 = state_22983;
var statearr_23005_23032 = state_22983__$1;
(statearr_23005_23032[(2)] = inst_22965);

(statearr_23005_23032[(1)] = (5));


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
});})(c__16751__auto___23017,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16686__auto__,c__16751__auto___23017,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23009[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23009[(1)] = (1));

return statearr_23009;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_22983){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_22983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23010){if((e23010 instanceof Object)){
var ex__16690__auto__ = e23010;
var statearr_23011_23033 = state_22983;
(statearr_23011_23033[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23034 = state_22983;
state_22983 = G__23034;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_22983){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_22983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23017,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16753__auto__ = (function (){var statearr_23012 = f__16752__auto__.call(null);
(statearr_23012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23017);

return statearr_23012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23017,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23036 = [];
var len__15726__auto___23092 = arguments.length;
var i__15727__auto___23093 = (0);
while(true){
if((i__15727__auto___23093 < len__15726__auto___23092)){
args23036.push((arguments[i__15727__auto___23093]));

var G__23094 = (i__15727__auto___23093 + (1));
i__15727__auto___23093 = G__23094;
continue;
} else {
}
break;
}

var G__23038 = args23036.length;
switch (G__23038) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23036.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16751__auto___23096 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23096,out){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23096,out){
return (function (state_23068){
var state_val_23069 = (state_23068[(1)]);
if((state_val_23069 === (7))){
var inst_23047 = (state_23068[(7)]);
var inst_23048 = (state_23068[(8)]);
var inst_23047__$1 = (state_23068[(2)]);
var inst_23048__$1 = cljs.core.nth.call(null,inst_23047__$1,(0),null);
var inst_23049 = cljs.core.nth.call(null,inst_23047__$1,(1),null);
var inst_23050 = (inst_23048__$1 == null);
var state_23068__$1 = (function (){var statearr_23070 = state_23068;
(statearr_23070[(7)] = inst_23047__$1);

(statearr_23070[(9)] = inst_23049);

(statearr_23070[(8)] = inst_23048__$1);

return statearr_23070;
})();
if(cljs.core.truth_(inst_23050)){
var statearr_23071_23097 = state_23068__$1;
(statearr_23071_23097[(1)] = (8));

} else {
var statearr_23072_23098 = state_23068__$1;
(statearr_23072_23098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (1))){
var inst_23039 = cljs.core.vec.call(null,chs);
var inst_23040 = inst_23039;
var state_23068__$1 = (function (){var statearr_23073 = state_23068;
(statearr_23073[(10)] = inst_23040);

return statearr_23073;
})();
var statearr_23074_23099 = state_23068__$1;
(statearr_23074_23099[(2)] = null);

(statearr_23074_23099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (4))){
var inst_23040 = (state_23068[(10)]);
var state_23068__$1 = state_23068;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23068__$1,(7),inst_23040);
} else {
if((state_val_23069 === (6))){
var inst_23064 = (state_23068[(2)]);
var state_23068__$1 = state_23068;
var statearr_23075_23100 = state_23068__$1;
(statearr_23075_23100[(2)] = inst_23064);

(statearr_23075_23100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (3))){
var inst_23066 = (state_23068[(2)]);
var state_23068__$1 = state_23068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23068__$1,inst_23066);
} else {
if((state_val_23069 === (2))){
var inst_23040 = (state_23068[(10)]);
var inst_23042 = cljs.core.count.call(null,inst_23040);
var inst_23043 = (inst_23042 > (0));
var state_23068__$1 = state_23068;
if(cljs.core.truth_(inst_23043)){
var statearr_23077_23101 = state_23068__$1;
(statearr_23077_23101[(1)] = (4));

} else {
var statearr_23078_23102 = state_23068__$1;
(statearr_23078_23102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (11))){
var inst_23040 = (state_23068[(10)]);
var inst_23057 = (state_23068[(2)]);
var tmp23076 = inst_23040;
var inst_23040__$1 = tmp23076;
var state_23068__$1 = (function (){var statearr_23079 = state_23068;
(statearr_23079[(11)] = inst_23057);

(statearr_23079[(10)] = inst_23040__$1);

return statearr_23079;
})();
var statearr_23080_23103 = state_23068__$1;
(statearr_23080_23103[(2)] = null);

(statearr_23080_23103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (9))){
var inst_23048 = (state_23068[(8)]);
var state_23068__$1 = state_23068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23068__$1,(11),out,inst_23048);
} else {
if((state_val_23069 === (5))){
var inst_23062 = cljs.core.async.close_BANG_.call(null,out);
var state_23068__$1 = state_23068;
var statearr_23081_23104 = state_23068__$1;
(statearr_23081_23104[(2)] = inst_23062);

(statearr_23081_23104[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (10))){
var inst_23060 = (state_23068[(2)]);
var state_23068__$1 = state_23068;
var statearr_23082_23105 = state_23068__$1;
(statearr_23082_23105[(2)] = inst_23060);

(statearr_23082_23105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23069 === (8))){
var inst_23040 = (state_23068[(10)]);
var inst_23047 = (state_23068[(7)]);
var inst_23049 = (state_23068[(9)]);
var inst_23048 = (state_23068[(8)]);
var inst_23052 = (function (){var cs = inst_23040;
var vec__23045 = inst_23047;
var v = inst_23048;
var c = inst_23049;
return ((function (cs,vec__23045,v,c,inst_23040,inst_23047,inst_23049,inst_23048,state_val_23069,c__16751__auto___23096,out){
return (function (p1__23035_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23035_SHARP_);
});
;})(cs,vec__23045,v,c,inst_23040,inst_23047,inst_23049,inst_23048,state_val_23069,c__16751__auto___23096,out))
})();
var inst_23053 = cljs.core.filterv.call(null,inst_23052,inst_23040);
var inst_23040__$1 = inst_23053;
var state_23068__$1 = (function (){var statearr_23083 = state_23068;
(statearr_23083[(10)] = inst_23040__$1);

return statearr_23083;
})();
var statearr_23084_23106 = state_23068__$1;
(statearr_23084_23106[(2)] = null);

(statearr_23084_23106[(1)] = (2));


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
});})(c__16751__auto___23096,out))
;
return ((function (switch__16686__auto__,c__16751__auto___23096,out){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23088 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23088[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23088[(1)] = (1));

return statearr_23088;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_23068){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23089){if((e23089 instanceof Object)){
var ex__16690__auto__ = e23089;
var statearr_23090_23107 = state_23068;
(statearr_23090_23107[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23108 = state_23068;
state_23068 = G__23108;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_23068){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_23068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23096,out))
})();
var state__16753__auto__ = (function (){var statearr_23091 = f__16752__auto__.call(null);
(statearr_23091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23096);

return statearr_23091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23096,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23109 = [];
var len__15726__auto___23158 = arguments.length;
var i__15727__auto___23159 = (0);
while(true){
if((i__15727__auto___23159 < len__15726__auto___23158)){
args23109.push((arguments[i__15727__auto___23159]));

var G__23160 = (i__15727__auto___23159 + (1));
i__15727__auto___23159 = G__23160;
continue;
} else {
}
break;
}

var G__23111 = args23109.length;
switch (G__23111) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23109.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16751__auto___23162 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23162,out){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23162,out){
return (function (state_23135){
var state_val_23136 = (state_23135[(1)]);
if((state_val_23136 === (7))){
var inst_23117 = (state_23135[(7)]);
var inst_23117__$1 = (state_23135[(2)]);
var inst_23118 = (inst_23117__$1 == null);
var inst_23119 = cljs.core.not.call(null,inst_23118);
var state_23135__$1 = (function (){var statearr_23137 = state_23135;
(statearr_23137[(7)] = inst_23117__$1);

return statearr_23137;
})();
if(inst_23119){
var statearr_23138_23163 = state_23135__$1;
(statearr_23138_23163[(1)] = (8));

} else {
var statearr_23139_23164 = state_23135__$1;
(statearr_23139_23164[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (1))){
var inst_23112 = (0);
var state_23135__$1 = (function (){var statearr_23140 = state_23135;
(statearr_23140[(8)] = inst_23112);

return statearr_23140;
})();
var statearr_23141_23165 = state_23135__$1;
(statearr_23141_23165[(2)] = null);

(statearr_23141_23165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (4))){
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23135__$1,(7),ch);
} else {
if((state_val_23136 === (6))){
var inst_23130 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23142_23166 = state_23135__$1;
(statearr_23142_23166[(2)] = inst_23130);

(statearr_23142_23166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (3))){
var inst_23132 = (state_23135[(2)]);
var inst_23133 = cljs.core.async.close_BANG_.call(null,out);
var state_23135__$1 = (function (){var statearr_23143 = state_23135;
(statearr_23143[(9)] = inst_23132);

return statearr_23143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23135__$1,inst_23133);
} else {
if((state_val_23136 === (2))){
var inst_23112 = (state_23135[(8)]);
var inst_23114 = (inst_23112 < n);
var state_23135__$1 = state_23135;
if(cljs.core.truth_(inst_23114)){
var statearr_23144_23167 = state_23135__$1;
(statearr_23144_23167[(1)] = (4));

} else {
var statearr_23145_23168 = state_23135__$1;
(statearr_23145_23168[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (11))){
var inst_23112 = (state_23135[(8)]);
var inst_23122 = (state_23135[(2)]);
var inst_23123 = (inst_23112 + (1));
var inst_23112__$1 = inst_23123;
var state_23135__$1 = (function (){var statearr_23146 = state_23135;
(statearr_23146[(8)] = inst_23112__$1);

(statearr_23146[(10)] = inst_23122);

return statearr_23146;
})();
var statearr_23147_23169 = state_23135__$1;
(statearr_23147_23169[(2)] = null);

(statearr_23147_23169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (9))){
var state_23135__$1 = state_23135;
var statearr_23148_23170 = state_23135__$1;
(statearr_23148_23170[(2)] = null);

(statearr_23148_23170[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (5))){
var state_23135__$1 = state_23135;
var statearr_23149_23171 = state_23135__$1;
(statearr_23149_23171[(2)] = null);

(statearr_23149_23171[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (10))){
var inst_23127 = (state_23135[(2)]);
var state_23135__$1 = state_23135;
var statearr_23150_23172 = state_23135__$1;
(statearr_23150_23172[(2)] = inst_23127);

(statearr_23150_23172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23136 === (8))){
var inst_23117 = (state_23135[(7)]);
var state_23135__$1 = state_23135;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23135__$1,(11),out,inst_23117);
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
});})(c__16751__auto___23162,out))
;
return ((function (switch__16686__auto__,c__16751__auto___23162,out){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23154 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23154[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23154[(1)] = (1));

return statearr_23154;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_23135){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23135);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23155){if((e23155 instanceof Object)){
var ex__16690__auto__ = e23155;
var statearr_23156_23173 = state_23135;
(statearr_23156_23173[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23135);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23155;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23174 = state_23135;
state_23135 = G__23174;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_23135){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_23135);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23162,out))
})();
var state__16753__auto__ = (function (){var statearr_23157 = f__16752__auto__.call(null);
(statearr_23157[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23162);

return statearr_23157;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23162,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23182 = (function (map_LT_,f,ch,meta23183){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23183 = meta23183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23184,meta23183__$1){
var self__ = this;
var _23184__$1 = this;
return (new cljs.core.async.t_cljs$core$async23182(self__.map_LT_,self__.f,self__.ch,meta23183__$1));
});

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23184){
var self__ = this;
var _23184__$1 = this;
return self__.meta23183;
});

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23185 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23185 = (function (map_LT_,f,ch,meta23183,_,fn1,meta23186){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23183 = meta23183;
this._ = _;
this.fn1 = fn1;
this.meta23186 = meta23186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23187,meta23186__$1){
var self__ = this;
var _23187__$1 = this;
return (new cljs.core.async.t_cljs$core$async23185(self__.map_LT_,self__.f,self__.ch,self__.meta23183,self__._,self__.fn1,meta23186__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23185.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23187){
var self__ = this;
var _23187__$1 = this;
return self__.meta23186;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23185.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23185.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23185.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23175_SHARP_){
return f1.call(null,(((p1__23175_SHARP_ == null))?null:self__.f.call(null,p1__23175_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23185.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23183","meta23183",1099722868,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23182","cljs.core.async/t_cljs$core$async23182",-673842971,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23186","meta23186",-1471372660,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23185.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23185.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23185";

cljs.core.async.t_cljs$core$async23185.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async23185");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23185 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23185(map_LT___$1,f__$1,ch__$1,meta23183__$1,___$2,fn1__$1,meta23186){
return (new cljs.core.async.t_cljs$core$async23185(map_LT___$1,f__$1,ch__$1,meta23183__$1,___$2,fn1__$1,meta23186));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23185(self__.map_LT_,self__.f,self__.ch,self__.meta23183,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14656__auto__ = ret;
if(cljs.core.truth_(and__14656__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__14656__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23183","meta23183",1099722868,null)], null);
});

cljs.core.async.t_cljs$core$async23182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23182";

cljs.core.async.t_cljs$core$async23182.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async23182");
});

cljs.core.async.__GT_t_cljs$core$async23182 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23182(map_LT___$1,f__$1,ch__$1,meta23183){
return (new cljs.core.async.t_cljs$core$async23182(map_LT___$1,f__$1,ch__$1,meta23183));
});

}

return (new cljs.core.async.t_cljs$core$async23182(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23191 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23191 = (function (map_GT_,f,ch,meta23192){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23192 = meta23192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23193,meta23192__$1){
var self__ = this;
var _23193__$1 = this;
return (new cljs.core.async.t_cljs$core$async23191(self__.map_GT_,self__.f,self__.ch,meta23192__$1));
});

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23193){
var self__ = this;
var _23193__$1 = this;
return self__.meta23192;
});

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23191.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23191.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23192","meta23192",1922744560,null)], null);
});

cljs.core.async.t_cljs$core$async23191.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23191.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23191";

cljs.core.async.t_cljs$core$async23191.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async23191");
});

cljs.core.async.__GT_t_cljs$core$async23191 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23191(map_GT___$1,f__$1,ch__$1,meta23192){
return (new cljs.core.async.t_cljs$core$async23191(map_GT___$1,f__$1,ch__$1,meta23192));
});

}

return (new cljs.core.async.t_cljs$core$async23191(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23197 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23197 = (function (filter_GT_,p,ch,meta23198){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23198 = meta23198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23199,meta23198__$1){
var self__ = this;
var _23199__$1 = this;
return (new cljs.core.async.t_cljs$core$async23197(self__.filter_GT_,self__.p,self__.ch,meta23198__$1));
});

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23199){
var self__ = this;
var _23199__$1 = this;
return self__.meta23198;
});

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23197.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23197.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23198","meta23198",-228924952,null)], null);
});

cljs.core.async.t_cljs$core$async23197.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23197.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23197";

cljs.core.async.t_cljs$core$async23197.cljs$lang$ctorPrWriter = (function (this__15266__auto__,writer__15267__auto__,opt__15268__auto__){
return cljs.core._write.call(null,writer__15267__auto__,"cljs.core.async/t_cljs$core$async23197");
});

cljs.core.async.__GT_t_cljs$core$async23197 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23197(filter_GT___$1,p__$1,ch__$1,meta23198){
return (new cljs.core.async.t_cljs$core$async23197(filter_GT___$1,p__$1,ch__$1,meta23198));
});

}

return (new cljs.core.async.t_cljs$core$async23197(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23200 = [];
var len__15726__auto___23244 = arguments.length;
var i__15727__auto___23245 = (0);
while(true){
if((i__15727__auto___23245 < len__15726__auto___23244)){
args23200.push((arguments[i__15727__auto___23245]));

var G__23246 = (i__15727__auto___23245 + (1));
i__15727__auto___23245 = G__23246;
continue;
} else {
}
break;
}

var G__23202 = args23200.length;
switch (G__23202) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23200.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16751__auto___23248 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23248,out){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23248,out){
return (function (state_23223){
var state_val_23224 = (state_23223[(1)]);
if((state_val_23224 === (7))){
var inst_23219 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
var statearr_23225_23249 = state_23223__$1;
(statearr_23225_23249[(2)] = inst_23219);

(statearr_23225_23249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (1))){
var state_23223__$1 = state_23223;
var statearr_23226_23250 = state_23223__$1;
(statearr_23226_23250[(2)] = null);

(statearr_23226_23250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (4))){
var inst_23205 = (state_23223[(7)]);
var inst_23205__$1 = (state_23223[(2)]);
var inst_23206 = (inst_23205__$1 == null);
var state_23223__$1 = (function (){var statearr_23227 = state_23223;
(statearr_23227[(7)] = inst_23205__$1);

return statearr_23227;
})();
if(cljs.core.truth_(inst_23206)){
var statearr_23228_23251 = state_23223__$1;
(statearr_23228_23251[(1)] = (5));

} else {
var statearr_23229_23252 = state_23223__$1;
(statearr_23229_23252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (6))){
var inst_23205 = (state_23223[(7)]);
var inst_23210 = p.call(null,inst_23205);
var state_23223__$1 = state_23223;
if(cljs.core.truth_(inst_23210)){
var statearr_23230_23253 = state_23223__$1;
(statearr_23230_23253[(1)] = (8));

} else {
var statearr_23231_23254 = state_23223__$1;
(statearr_23231_23254[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (3))){
var inst_23221 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23223__$1,inst_23221);
} else {
if((state_val_23224 === (2))){
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23223__$1,(4),ch);
} else {
if((state_val_23224 === (11))){
var inst_23213 = (state_23223[(2)]);
var state_23223__$1 = state_23223;
var statearr_23232_23255 = state_23223__$1;
(statearr_23232_23255[(2)] = inst_23213);

(statearr_23232_23255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (9))){
var state_23223__$1 = state_23223;
var statearr_23233_23256 = state_23223__$1;
(statearr_23233_23256[(2)] = null);

(statearr_23233_23256[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (5))){
var inst_23208 = cljs.core.async.close_BANG_.call(null,out);
var state_23223__$1 = state_23223;
var statearr_23234_23257 = state_23223__$1;
(statearr_23234_23257[(2)] = inst_23208);

(statearr_23234_23257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (10))){
var inst_23216 = (state_23223[(2)]);
var state_23223__$1 = (function (){var statearr_23235 = state_23223;
(statearr_23235[(8)] = inst_23216);

return statearr_23235;
})();
var statearr_23236_23258 = state_23223__$1;
(statearr_23236_23258[(2)] = null);

(statearr_23236_23258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23224 === (8))){
var inst_23205 = (state_23223[(7)]);
var state_23223__$1 = state_23223;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23223__$1,(11),out,inst_23205);
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
});})(c__16751__auto___23248,out))
;
return ((function (switch__16686__auto__,c__16751__auto___23248,out){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23240 = [null,null,null,null,null,null,null,null,null];
(statearr_23240[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23240[(1)] = (1));

return statearr_23240;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_23223){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23241){if((e23241 instanceof Object)){
var ex__16690__auto__ = e23241;
var statearr_23242_23259 = state_23223;
(statearr_23242_23259[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23260 = state_23223;
state_23223 = G__23260;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_23223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_23223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23248,out))
})();
var state__16753__auto__ = (function (){var statearr_23243 = f__16752__auto__.call(null);
(statearr_23243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23248);

return statearr_23243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23248,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23261 = [];
var len__15726__auto___23264 = arguments.length;
var i__15727__auto___23265 = (0);
while(true){
if((i__15727__auto___23265 < len__15726__auto___23264)){
args23261.push((arguments[i__15727__auto___23265]));

var G__23266 = (i__15727__auto___23265 + (1));
i__15727__auto___23265 = G__23266;
continue;
} else {
}
break;
}

var G__23263 = args23261.length;
switch (G__23263) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23261.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16751__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto__){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto__){
return (function (state_23433){
var state_val_23434 = (state_23433[(1)]);
if((state_val_23434 === (7))){
var inst_23429 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23435_23476 = state_23433__$1;
(statearr_23435_23476[(2)] = inst_23429);

(statearr_23435_23476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (20))){
var inst_23399 = (state_23433[(7)]);
var inst_23410 = (state_23433[(2)]);
var inst_23411 = cljs.core.next.call(null,inst_23399);
var inst_23385 = inst_23411;
var inst_23386 = null;
var inst_23387 = (0);
var inst_23388 = (0);
var state_23433__$1 = (function (){var statearr_23436 = state_23433;
(statearr_23436[(8)] = inst_23386);

(statearr_23436[(9)] = inst_23387);

(statearr_23436[(10)] = inst_23388);

(statearr_23436[(11)] = inst_23385);

(statearr_23436[(12)] = inst_23410);

return statearr_23436;
})();
var statearr_23437_23477 = state_23433__$1;
(statearr_23437_23477[(2)] = null);

(statearr_23437_23477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (1))){
var state_23433__$1 = state_23433;
var statearr_23438_23478 = state_23433__$1;
(statearr_23438_23478[(2)] = null);

(statearr_23438_23478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (4))){
var inst_23374 = (state_23433[(13)]);
var inst_23374__$1 = (state_23433[(2)]);
var inst_23375 = (inst_23374__$1 == null);
var state_23433__$1 = (function (){var statearr_23439 = state_23433;
(statearr_23439[(13)] = inst_23374__$1);

return statearr_23439;
})();
if(cljs.core.truth_(inst_23375)){
var statearr_23440_23479 = state_23433__$1;
(statearr_23440_23479[(1)] = (5));

} else {
var statearr_23441_23480 = state_23433__$1;
(statearr_23441_23480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (15))){
var state_23433__$1 = state_23433;
var statearr_23445_23481 = state_23433__$1;
(statearr_23445_23481[(2)] = null);

(statearr_23445_23481[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (21))){
var state_23433__$1 = state_23433;
var statearr_23446_23482 = state_23433__$1;
(statearr_23446_23482[(2)] = null);

(statearr_23446_23482[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (13))){
var inst_23386 = (state_23433[(8)]);
var inst_23387 = (state_23433[(9)]);
var inst_23388 = (state_23433[(10)]);
var inst_23385 = (state_23433[(11)]);
var inst_23395 = (state_23433[(2)]);
var inst_23396 = (inst_23388 + (1));
var tmp23442 = inst_23386;
var tmp23443 = inst_23387;
var tmp23444 = inst_23385;
var inst_23385__$1 = tmp23444;
var inst_23386__$1 = tmp23442;
var inst_23387__$1 = tmp23443;
var inst_23388__$1 = inst_23396;
var state_23433__$1 = (function (){var statearr_23447 = state_23433;
(statearr_23447[(8)] = inst_23386__$1);

(statearr_23447[(9)] = inst_23387__$1);

(statearr_23447[(10)] = inst_23388__$1);

(statearr_23447[(14)] = inst_23395);

(statearr_23447[(11)] = inst_23385__$1);

return statearr_23447;
})();
var statearr_23448_23483 = state_23433__$1;
(statearr_23448_23483[(2)] = null);

(statearr_23448_23483[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (22))){
var state_23433__$1 = state_23433;
var statearr_23449_23484 = state_23433__$1;
(statearr_23449_23484[(2)] = null);

(statearr_23449_23484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (6))){
var inst_23374 = (state_23433[(13)]);
var inst_23383 = f.call(null,inst_23374);
var inst_23384 = cljs.core.seq.call(null,inst_23383);
var inst_23385 = inst_23384;
var inst_23386 = null;
var inst_23387 = (0);
var inst_23388 = (0);
var state_23433__$1 = (function (){var statearr_23450 = state_23433;
(statearr_23450[(8)] = inst_23386);

(statearr_23450[(9)] = inst_23387);

(statearr_23450[(10)] = inst_23388);

(statearr_23450[(11)] = inst_23385);

return statearr_23450;
})();
var statearr_23451_23485 = state_23433__$1;
(statearr_23451_23485[(2)] = null);

(statearr_23451_23485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (17))){
var inst_23399 = (state_23433[(7)]);
var inst_23403 = cljs.core.chunk_first.call(null,inst_23399);
var inst_23404 = cljs.core.chunk_rest.call(null,inst_23399);
var inst_23405 = cljs.core.count.call(null,inst_23403);
var inst_23385 = inst_23404;
var inst_23386 = inst_23403;
var inst_23387 = inst_23405;
var inst_23388 = (0);
var state_23433__$1 = (function (){var statearr_23452 = state_23433;
(statearr_23452[(8)] = inst_23386);

(statearr_23452[(9)] = inst_23387);

(statearr_23452[(10)] = inst_23388);

(statearr_23452[(11)] = inst_23385);

return statearr_23452;
})();
var statearr_23453_23486 = state_23433__$1;
(statearr_23453_23486[(2)] = null);

(statearr_23453_23486[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (3))){
var inst_23431 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23433__$1,inst_23431);
} else {
if((state_val_23434 === (12))){
var inst_23419 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23454_23487 = state_23433__$1;
(statearr_23454_23487[(2)] = inst_23419);

(statearr_23454_23487[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (2))){
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23433__$1,(4),in$);
} else {
if((state_val_23434 === (23))){
var inst_23427 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23455_23488 = state_23433__$1;
(statearr_23455_23488[(2)] = inst_23427);

(statearr_23455_23488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (19))){
var inst_23414 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23456_23489 = state_23433__$1;
(statearr_23456_23489[(2)] = inst_23414);

(statearr_23456_23489[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (11))){
var inst_23385 = (state_23433[(11)]);
var inst_23399 = (state_23433[(7)]);
var inst_23399__$1 = cljs.core.seq.call(null,inst_23385);
var state_23433__$1 = (function (){var statearr_23457 = state_23433;
(statearr_23457[(7)] = inst_23399__$1);

return statearr_23457;
})();
if(inst_23399__$1){
var statearr_23458_23490 = state_23433__$1;
(statearr_23458_23490[(1)] = (14));

} else {
var statearr_23459_23491 = state_23433__$1;
(statearr_23459_23491[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (9))){
var inst_23421 = (state_23433[(2)]);
var inst_23422 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23433__$1 = (function (){var statearr_23460 = state_23433;
(statearr_23460[(15)] = inst_23421);

return statearr_23460;
})();
if(cljs.core.truth_(inst_23422)){
var statearr_23461_23492 = state_23433__$1;
(statearr_23461_23492[(1)] = (21));

} else {
var statearr_23462_23493 = state_23433__$1;
(statearr_23462_23493[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (5))){
var inst_23377 = cljs.core.async.close_BANG_.call(null,out);
var state_23433__$1 = state_23433;
var statearr_23463_23494 = state_23433__$1;
(statearr_23463_23494[(2)] = inst_23377);

(statearr_23463_23494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (14))){
var inst_23399 = (state_23433[(7)]);
var inst_23401 = cljs.core.chunked_seq_QMARK_.call(null,inst_23399);
var state_23433__$1 = state_23433;
if(inst_23401){
var statearr_23464_23495 = state_23433__$1;
(statearr_23464_23495[(1)] = (17));

} else {
var statearr_23465_23496 = state_23433__$1;
(statearr_23465_23496[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (16))){
var inst_23417 = (state_23433[(2)]);
var state_23433__$1 = state_23433;
var statearr_23466_23497 = state_23433__$1;
(statearr_23466_23497[(2)] = inst_23417);

(statearr_23466_23497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23434 === (10))){
var inst_23386 = (state_23433[(8)]);
var inst_23388 = (state_23433[(10)]);
var inst_23393 = cljs.core._nth.call(null,inst_23386,inst_23388);
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23433__$1,(13),out,inst_23393);
} else {
if((state_val_23434 === (18))){
var inst_23399 = (state_23433[(7)]);
var inst_23408 = cljs.core.first.call(null,inst_23399);
var state_23433__$1 = state_23433;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23433__$1,(20),out,inst_23408);
} else {
if((state_val_23434 === (8))){
var inst_23387 = (state_23433[(9)]);
var inst_23388 = (state_23433[(10)]);
var inst_23390 = (inst_23388 < inst_23387);
var inst_23391 = inst_23390;
var state_23433__$1 = state_23433;
if(cljs.core.truth_(inst_23391)){
var statearr_23467_23498 = state_23433__$1;
(statearr_23467_23498[(1)] = (10));

} else {
var statearr_23468_23499 = state_23433__$1;
(statearr_23468_23499[(1)] = (11));

}

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
});})(c__16751__auto__))
;
return ((function (switch__16686__auto__,c__16751__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16687__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16687__auto____0 = (function (){
var statearr_23472 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23472[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16687__auto__);

(statearr_23472[(1)] = (1));

return statearr_23472;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16687__auto____1 = (function (state_23433){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23433);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23473){if((e23473 instanceof Object)){
var ex__16690__auto__ = e23473;
var statearr_23474_23500 = state_23433;
(statearr_23474_23500[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23433);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23501 = state_23433;
state_23433 = G__23501;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16687__auto__ = function(state_23433){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16687__auto____1.call(this,state_23433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16687__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16687__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto__))
})();
var state__16753__auto__ = (function (){var statearr_23475 = f__16752__auto__.call(null);
(statearr_23475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto__);

return statearr_23475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto__))
);

return c__16751__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23502 = [];
var len__15726__auto___23505 = arguments.length;
var i__15727__auto___23506 = (0);
while(true){
if((i__15727__auto___23506 < len__15726__auto___23505)){
args23502.push((arguments[i__15727__auto___23506]));

var G__23507 = (i__15727__auto___23506 + (1));
i__15727__auto___23506 = G__23507;
continue;
} else {
}
break;
}

var G__23504 = args23502.length;
switch (G__23504) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23502.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23509 = [];
var len__15726__auto___23512 = arguments.length;
var i__15727__auto___23513 = (0);
while(true){
if((i__15727__auto___23513 < len__15726__auto___23512)){
args23509.push((arguments[i__15727__auto___23513]));

var G__23514 = (i__15727__auto___23513 + (1));
i__15727__auto___23513 = G__23514;
continue;
} else {
}
break;
}

var G__23511 = args23509.length;
switch (G__23511) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23509.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23516 = [];
var len__15726__auto___23567 = arguments.length;
var i__15727__auto___23568 = (0);
while(true){
if((i__15727__auto___23568 < len__15726__auto___23567)){
args23516.push((arguments[i__15727__auto___23568]));

var G__23569 = (i__15727__auto___23568 + (1));
i__15727__auto___23568 = G__23569;
continue;
} else {
}
break;
}

var G__23518 = args23516.length;
switch (G__23518) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23516.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16751__auto___23571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23571,out){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23571,out){
return (function (state_23542){
var state_val_23543 = (state_23542[(1)]);
if((state_val_23543 === (7))){
var inst_23537 = (state_23542[(2)]);
var state_23542__$1 = state_23542;
var statearr_23544_23572 = state_23542__$1;
(statearr_23544_23572[(2)] = inst_23537);

(statearr_23544_23572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (1))){
var inst_23519 = null;
var state_23542__$1 = (function (){var statearr_23545 = state_23542;
(statearr_23545[(7)] = inst_23519);

return statearr_23545;
})();
var statearr_23546_23573 = state_23542__$1;
(statearr_23546_23573[(2)] = null);

(statearr_23546_23573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (4))){
var inst_23522 = (state_23542[(8)]);
var inst_23522__$1 = (state_23542[(2)]);
var inst_23523 = (inst_23522__$1 == null);
var inst_23524 = cljs.core.not.call(null,inst_23523);
var state_23542__$1 = (function (){var statearr_23547 = state_23542;
(statearr_23547[(8)] = inst_23522__$1);

return statearr_23547;
})();
if(inst_23524){
var statearr_23548_23574 = state_23542__$1;
(statearr_23548_23574[(1)] = (5));

} else {
var statearr_23549_23575 = state_23542__$1;
(statearr_23549_23575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (6))){
var state_23542__$1 = state_23542;
var statearr_23550_23576 = state_23542__$1;
(statearr_23550_23576[(2)] = null);

(statearr_23550_23576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (3))){
var inst_23539 = (state_23542[(2)]);
var inst_23540 = cljs.core.async.close_BANG_.call(null,out);
var state_23542__$1 = (function (){var statearr_23551 = state_23542;
(statearr_23551[(9)] = inst_23539);

return statearr_23551;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23542__$1,inst_23540);
} else {
if((state_val_23543 === (2))){
var state_23542__$1 = state_23542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23542__$1,(4),ch);
} else {
if((state_val_23543 === (11))){
var inst_23522 = (state_23542[(8)]);
var inst_23531 = (state_23542[(2)]);
var inst_23519 = inst_23522;
var state_23542__$1 = (function (){var statearr_23552 = state_23542;
(statearr_23552[(7)] = inst_23519);

(statearr_23552[(10)] = inst_23531);

return statearr_23552;
})();
var statearr_23553_23577 = state_23542__$1;
(statearr_23553_23577[(2)] = null);

(statearr_23553_23577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (9))){
var inst_23522 = (state_23542[(8)]);
var state_23542__$1 = state_23542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23542__$1,(11),out,inst_23522);
} else {
if((state_val_23543 === (5))){
var inst_23522 = (state_23542[(8)]);
var inst_23519 = (state_23542[(7)]);
var inst_23526 = cljs.core._EQ_.call(null,inst_23522,inst_23519);
var state_23542__$1 = state_23542;
if(inst_23526){
var statearr_23555_23578 = state_23542__$1;
(statearr_23555_23578[(1)] = (8));

} else {
var statearr_23556_23579 = state_23542__$1;
(statearr_23556_23579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (10))){
var inst_23534 = (state_23542[(2)]);
var state_23542__$1 = state_23542;
var statearr_23557_23580 = state_23542__$1;
(statearr_23557_23580[(2)] = inst_23534);

(statearr_23557_23580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23543 === (8))){
var inst_23519 = (state_23542[(7)]);
var tmp23554 = inst_23519;
var inst_23519__$1 = tmp23554;
var state_23542__$1 = (function (){var statearr_23558 = state_23542;
(statearr_23558[(7)] = inst_23519__$1);

return statearr_23558;
})();
var statearr_23559_23581 = state_23542__$1;
(statearr_23559_23581[(2)] = null);

(statearr_23559_23581[(1)] = (2));


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
});})(c__16751__auto___23571,out))
;
return ((function (switch__16686__auto__,c__16751__auto___23571,out){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23563 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23563[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23563[(1)] = (1));

return statearr_23563;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_23542){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23564){if((e23564 instanceof Object)){
var ex__16690__auto__ = e23564;
var statearr_23565_23582 = state_23542;
(statearr_23565_23582[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23583 = state_23542;
state_23542 = G__23583;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_23542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_23542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23571,out))
})();
var state__16753__auto__ = (function (){var statearr_23566 = f__16752__auto__.call(null);
(statearr_23566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23571);

return statearr_23566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23571,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23584 = [];
var len__15726__auto___23654 = arguments.length;
var i__15727__auto___23655 = (0);
while(true){
if((i__15727__auto___23655 < len__15726__auto___23654)){
args23584.push((arguments[i__15727__auto___23655]));

var G__23656 = (i__15727__auto___23655 + (1));
i__15727__auto___23655 = G__23656;
continue;
} else {
}
break;
}

var G__23586 = args23584.length;
switch (G__23586) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23584.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16751__auto___23658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23658,out){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23658,out){
return (function (state_23624){
var state_val_23625 = (state_23624[(1)]);
if((state_val_23625 === (7))){
var inst_23620 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
var statearr_23626_23659 = state_23624__$1;
(statearr_23626_23659[(2)] = inst_23620);

(statearr_23626_23659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (1))){
var inst_23587 = (new Array(n));
var inst_23588 = inst_23587;
var inst_23589 = (0);
var state_23624__$1 = (function (){var statearr_23627 = state_23624;
(statearr_23627[(7)] = inst_23588);

(statearr_23627[(8)] = inst_23589);

return statearr_23627;
})();
var statearr_23628_23660 = state_23624__$1;
(statearr_23628_23660[(2)] = null);

(statearr_23628_23660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (4))){
var inst_23592 = (state_23624[(9)]);
var inst_23592__$1 = (state_23624[(2)]);
var inst_23593 = (inst_23592__$1 == null);
var inst_23594 = cljs.core.not.call(null,inst_23593);
var state_23624__$1 = (function (){var statearr_23629 = state_23624;
(statearr_23629[(9)] = inst_23592__$1);

return statearr_23629;
})();
if(inst_23594){
var statearr_23630_23661 = state_23624__$1;
(statearr_23630_23661[(1)] = (5));

} else {
var statearr_23631_23662 = state_23624__$1;
(statearr_23631_23662[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (15))){
var inst_23614 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
var statearr_23632_23663 = state_23624__$1;
(statearr_23632_23663[(2)] = inst_23614);

(statearr_23632_23663[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (13))){
var state_23624__$1 = state_23624;
var statearr_23633_23664 = state_23624__$1;
(statearr_23633_23664[(2)] = null);

(statearr_23633_23664[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (6))){
var inst_23589 = (state_23624[(8)]);
var inst_23610 = (inst_23589 > (0));
var state_23624__$1 = state_23624;
if(cljs.core.truth_(inst_23610)){
var statearr_23634_23665 = state_23624__$1;
(statearr_23634_23665[(1)] = (12));

} else {
var statearr_23635_23666 = state_23624__$1;
(statearr_23635_23666[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (3))){
var inst_23622 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23624__$1,inst_23622);
} else {
if((state_val_23625 === (12))){
var inst_23588 = (state_23624[(7)]);
var inst_23612 = cljs.core.vec.call(null,inst_23588);
var state_23624__$1 = state_23624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23624__$1,(15),out,inst_23612);
} else {
if((state_val_23625 === (2))){
var state_23624__$1 = state_23624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23624__$1,(4),ch);
} else {
if((state_val_23625 === (11))){
var inst_23604 = (state_23624[(2)]);
var inst_23605 = (new Array(n));
var inst_23588 = inst_23605;
var inst_23589 = (0);
var state_23624__$1 = (function (){var statearr_23636 = state_23624;
(statearr_23636[(7)] = inst_23588);

(statearr_23636[(10)] = inst_23604);

(statearr_23636[(8)] = inst_23589);

return statearr_23636;
})();
var statearr_23637_23667 = state_23624__$1;
(statearr_23637_23667[(2)] = null);

(statearr_23637_23667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (9))){
var inst_23588 = (state_23624[(7)]);
var inst_23602 = cljs.core.vec.call(null,inst_23588);
var state_23624__$1 = state_23624;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23624__$1,(11),out,inst_23602);
} else {
if((state_val_23625 === (5))){
var inst_23588 = (state_23624[(7)]);
var inst_23589 = (state_23624[(8)]);
var inst_23592 = (state_23624[(9)]);
var inst_23597 = (state_23624[(11)]);
var inst_23596 = (inst_23588[inst_23589] = inst_23592);
var inst_23597__$1 = (inst_23589 + (1));
var inst_23598 = (inst_23597__$1 < n);
var state_23624__$1 = (function (){var statearr_23638 = state_23624;
(statearr_23638[(12)] = inst_23596);

(statearr_23638[(11)] = inst_23597__$1);

return statearr_23638;
})();
if(cljs.core.truth_(inst_23598)){
var statearr_23639_23668 = state_23624__$1;
(statearr_23639_23668[(1)] = (8));

} else {
var statearr_23640_23669 = state_23624__$1;
(statearr_23640_23669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (14))){
var inst_23617 = (state_23624[(2)]);
var inst_23618 = cljs.core.async.close_BANG_.call(null,out);
var state_23624__$1 = (function (){var statearr_23642 = state_23624;
(statearr_23642[(13)] = inst_23617);

return statearr_23642;
})();
var statearr_23643_23670 = state_23624__$1;
(statearr_23643_23670[(2)] = inst_23618);

(statearr_23643_23670[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (10))){
var inst_23608 = (state_23624[(2)]);
var state_23624__$1 = state_23624;
var statearr_23644_23671 = state_23624__$1;
(statearr_23644_23671[(2)] = inst_23608);

(statearr_23644_23671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23625 === (8))){
var inst_23588 = (state_23624[(7)]);
var inst_23597 = (state_23624[(11)]);
var tmp23641 = inst_23588;
var inst_23588__$1 = tmp23641;
var inst_23589 = inst_23597;
var state_23624__$1 = (function (){var statearr_23645 = state_23624;
(statearr_23645[(7)] = inst_23588__$1);

(statearr_23645[(8)] = inst_23589);

return statearr_23645;
})();
var statearr_23646_23672 = state_23624__$1;
(statearr_23646_23672[(2)] = null);

(statearr_23646_23672[(1)] = (2));


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
});})(c__16751__auto___23658,out))
;
return ((function (switch__16686__auto__,c__16751__auto___23658,out){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23650[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_23624){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object)){
var ex__16690__auto__ = e23651;
var statearr_23652_23673 = state_23624;
(statearr_23652_23673[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23674 = state_23624;
state_23624 = G__23674;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_23624){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_23624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23658,out))
})();
var state__16753__auto__ = (function (){var statearr_23653 = f__16752__auto__.call(null);
(statearr_23653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23658);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23658,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23675 = [];
var len__15726__auto___23749 = arguments.length;
var i__15727__auto___23750 = (0);
while(true){
if((i__15727__auto___23750 < len__15726__auto___23749)){
args23675.push((arguments[i__15727__auto___23750]));

var G__23751 = (i__15727__auto___23750 + (1));
i__15727__auto___23750 = G__23751;
continue;
} else {
}
break;
}

var G__23677 = args23675.length;
switch (G__23677) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23675.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16751__auto___23753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16751__auto___23753,out){
return (function (){
var f__16752__auto__ = (function (){var switch__16686__auto__ = ((function (c__16751__auto___23753,out){
return (function (state_23719){
var state_val_23720 = (state_23719[(1)]);
if((state_val_23720 === (7))){
var inst_23715 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23721_23754 = state_23719__$1;
(statearr_23721_23754[(2)] = inst_23715);

(statearr_23721_23754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (1))){
var inst_23678 = [];
var inst_23679 = inst_23678;
var inst_23680 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23719__$1 = (function (){var statearr_23722 = state_23719;
(statearr_23722[(7)] = inst_23679);

(statearr_23722[(8)] = inst_23680);

return statearr_23722;
})();
var statearr_23723_23755 = state_23719__$1;
(statearr_23723_23755[(2)] = null);

(statearr_23723_23755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (4))){
var inst_23683 = (state_23719[(9)]);
var inst_23683__$1 = (state_23719[(2)]);
var inst_23684 = (inst_23683__$1 == null);
var inst_23685 = cljs.core.not.call(null,inst_23684);
var state_23719__$1 = (function (){var statearr_23724 = state_23719;
(statearr_23724[(9)] = inst_23683__$1);

return statearr_23724;
})();
if(inst_23685){
var statearr_23725_23756 = state_23719__$1;
(statearr_23725_23756[(1)] = (5));

} else {
var statearr_23726_23757 = state_23719__$1;
(statearr_23726_23757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (15))){
var inst_23709 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23727_23758 = state_23719__$1;
(statearr_23727_23758[(2)] = inst_23709);

(statearr_23727_23758[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (13))){
var state_23719__$1 = state_23719;
var statearr_23728_23759 = state_23719__$1;
(statearr_23728_23759[(2)] = null);

(statearr_23728_23759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (6))){
var inst_23679 = (state_23719[(7)]);
var inst_23704 = inst_23679.length;
var inst_23705 = (inst_23704 > (0));
var state_23719__$1 = state_23719;
if(cljs.core.truth_(inst_23705)){
var statearr_23729_23760 = state_23719__$1;
(statearr_23729_23760[(1)] = (12));

} else {
var statearr_23730_23761 = state_23719__$1;
(statearr_23730_23761[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (3))){
var inst_23717 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23719__$1,inst_23717);
} else {
if((state_val_23720 === (12))){
var inst_23679 = (state_23719[(7)]);
var inst_23707 = cljs.core.vec.call(null,inst_23679);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23719__$1,(15),out,inst_23707);
} else {
if((state_val_23720 === (2))){
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23719__$1,(4),ch);
} else {
if((state_val_23720 === (11))){
var inst_23687 = (state_23719[(10)]);
var inst_23683 = (state_23719[(9)]);
var inst_23697 = (state_23719[(2)]);
var inst_23698 = [];
var inst_23699 = inst_23698.push(inst_23683);
var inst_23679 = inst_23698;
var inst_23680 = inst_23687;
var state_23719__$1 = (function (){var statearr_23731 = state_23719;
(statearr_23731[(7)] = inst_23679);

(statearr_23731[(11)] = inst_23699);

(statearr_23731[(8)] = inst_23680);

(statearr_23731[(12)] = inst_23697);

return statearr_23731;
})();
var statearr_23732_23762 = state_23719__$1;
(statearr_23732_23762[(2)] = null);

(statearr_23732_23762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (9))){
var inst_23679 = (state_23719[(7)]);
var inst_23695 = cljs.core.vec.call(null,inst_23679);
var state_23719__$1 = state_23719;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23719__$1,(11),out,inst_23695);
} else {
if((state_val_23720 === (5))){
var inst_23687 = (state_23719[(10)]);
var inst_23680 = (state_23719[(8)]);
var inst_23683 = (state_23719[(9)]);
var inst_23687__$1 = f.call(null,inst_23683);
var inst_23688 = cljs.core._EQ_.call(null,inst_23687__$1,inst_23680);
var inst_23689 = cljs.core.keyword_identical_QMARK_.call(null,inst_23680,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23690 = (inst_23688) || (inst_23689);
var state_23719__$1 = (function (){var statearr_23733 = state_23719;
(statearr_23733[(10)] = inst_23687__$1);

return statearr_23733;
})();
if(cljs.core.truth_(inst_23690)){
var statearr_23734_23763 = state_23719__$1;
(statearr_23734_23763[(1)] = (8));

} else {
var statearr_23735_23764 = state_23719__$1;
(statearr_23735_23764[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (14))){
var inst_23712 = (state_23719[(2)]);
var inst_23713 = cljs.core.async.close_BANG_.call(null,out);
var state_23719__$1 = (function (){var statearr_23737 = state_23719;
(statearr_23737[(13)] = inst_23712);

return statearr_23737;
})();
var statearr_23738_23765 = state_23719__$1;
(statearr_23738_23765[(2)] = inst_23713);

(statearr_23738_23765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (10))){
var inst_23702 = (state_23719[(2)]);
var state_23719__$1 = state_23719;
var statearr_23739_23766 = state_23719__$1;
(statearr_23739_23766[(2)] = inst_23702);

(statearr_23739_23766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23720 === (8))){
var inst_23687 = (state_23719[(10)]);
var inst_23679 = (state_23719[(7)]);
var inst_23683 = (state_23719[(9)]);
var inst_23692 = inst_23679.push(inst_23683);
var tmp23736 = inst_23679;
var inst_23679__$1 = tmp23736;
var inst_23680 = inst_23687;
var state_23719__$1 = (function (){var statearr_23740 = state_23719;
(statearr_23740[(7)] = inst_23679__$1);

(statearr_23740[(14)] = inst_23692);

(statearr_23740[(8)] = inst_23680);

return statearr_23740;
})();
var statearr_23741_23767 = state_23719__$1;
(statearr_23741_23767[(2)] = null);

(statearr_23741_23767[(1)] = (2));


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
});})(c__16751__auto___23753,out))
;
return ((function (switch__16686__auto__,c__16751__auto___23753,out){
return (function() {
var cljs$core$async$state_machine__16687__auto__ = null;
var cljs$core$async$state_machine__16687__auto____0 = (function (){
var statearr_23745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23745[(0)] = cljs$core$async$state_machine__16687__auto__);

(statearr_23745[(1)] = (1));

return statearr_23745;
});
var cljs$core$async$state_machine__16687__auto____1 = (function (state_23719){
while(true){
var ret_value__16688__auto__ = (function (){try{while(true){
var result__16689__auto__ = switch__16686__auto__.call(null,state_23719);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16689__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16689__auto__;
}
break;
}
}catch (e23746){if((e23746 instanceof Object)){
var ex__16690__auto__ = e23746;
var statearr_23747_23768 = state_23719;
(statearr_23747_23768[(5)] = ex__16690__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23719);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16688__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23769 = state_23719;
state_23719 = G__23769;
continue;
} else {
return ret_value__16688__auto__;
}
break;
}
});
cljs$core$async$state_machine__16687__auto__ = function(state_23719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16687__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16687__auto____1.call(this,state_23719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16687__auto____0;
cljs$core$async$state_machine__16687__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16687__auto____1;
return cljs$core$async$state_machine__16687__auto__;
})()
;})(switch__16686__auto__,c__16751__auto___23753,out))
})();
var state__16753__auto__ = (function (){var statearr_23748 = f__16752__auto__.call(null);
(statearr_23748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16751__auto___23753);

return statearr_23748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16753__auto__);
});})(c__16751__auto___23753,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map