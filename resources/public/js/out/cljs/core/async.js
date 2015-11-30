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
if(typeof cljs.core.async.t_cljs$core$async21087 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21087 = (function (fn_handler,f,meta21088){
this.fn_handler = fn_handler;
this.f = f;
this.meta21088 = meta21088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21089,meta21088__$1){
var self__ = this;
var _21089__$1 = this;
return (new cljs.core.async.t_cljs$core$async21087(self__.fn_handler,self__.f,meta21088__$1));
});

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21089){
var self__ = this;
var _21089__$1 = this;
return self__.meta21088;
});

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta21088","meta21088",2124648828,null)], null);
});

cljs.core.async.t_cljs$core$async21087.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21087";

cljs.core.async.t_cljs$core$async21087.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async21087");
});

cljs.core.async.__GT_t_cljs$core$async21087 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async21087(fn_handler__$1,f__$1,meta21088){
return (new cljs.core.async.t_cljs$core$async21087(fn_handler__$1,f__$1,meta21088));
});

}

return (new cljs.core.async.t_cljs$core$async21087(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args21092 = [];
var len__15730__auto___21095 = arguments.length;
var i__15731__auto___21096 = (0);
while(true){
if((i__15731__auto___21096 < len__15730__auto___21095)){
args21092.push((arguments[i__15731__auto___21096]));

var G__21097 = (i__15731__auto___21096 + (1));
i__15731__auto___21096 = G__21097;
continue;
} else {
}
break;
}

var G__21094 = args21092.length;
switch (G__21094) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21092.length)].join('')));

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
var args21099 = [];
var len__15730__auto___21102 = arguments.length;
var i__15731__auto___21103 = (0);
while(true){
if((i__15731__auto___21103 < len__15730__auto___21102)){
args21099.push((arguments[i__15731__auto___21103]));

var G__21104 = (i__15731__auto___21103 + (1));
i__15731__auto___21103 = G__21104;
continue;
} else {
}
break;
}

var G__21101 = args21099.length;
switch (G__21101) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21099.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21106 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21106);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21106,ret){
return (function (){
return fn1.call(null,val_21106);
});})(val_21106,ret))
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
var args21107 = [];
var len__15730__auto___21110 = arguments.length;
var i__15731__auto___21111 = (0);
while(true){
if((i__15731__auto___21111 < len__15730__auto___21110)){
args21107.push((arguments[i__15731__auto___21111]));

var G__21112 = (i__15731__auto___21111 + (1));
i__15731__auto___21111 = G__21112;
continue;
} else {
}
break;
}

var G__21109 = args21107.length;
switch (G__21109) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21107.length)].join('')));

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
var n__15575__auto___21114 = n;
var x_21115 = (0);
while(true){
if((x_21115 < n__15575__auto___21114)){
(a[x_21115] = (0));

var G__21116 = (x_21115 + (1));
x_21115 = G__21116;
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

var G__21117 = (i + (1));
i = G__21117;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21121 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21121 = (function (alt_flag,flag,meta21122){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21122 = meta21122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21123,meta21122__$1){
var self__ = this;
var _21123__$1 = this;
return (new cljs.core.async.t_cljs$core$async21121(self__.alt_flag,self__.flag,meta21122__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21123){
var self__ = this;
var _21123__$1 = this;
return self__.meta21122;
});})(flag))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21121.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21121.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21122","meta21122",530865012,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21121.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21121";

cljs.core.async.t_cljs$core$async21121.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async21121");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21121 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21121(alt_flag__$1,flag__$1,meta21122){
return (new cljs.core.async.t_cljs$core$async21121(alt_flag__$1,flag__$1,meta21122));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21121(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21127 = (function (alt_handler,flag,cb,meta21128){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21128 = meta21128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21129,meta21128__$1){
var self__ = this;
var _21129__$1 = this;
return (new cljs.core.async.t_cljs$core$async21127(self__.alt_handler,self__.flag,self__.cb,meta21128__$1));
});

cljs.core.async.t_cljs$core$async21127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21129){
var self__ = this;
var _21129__$1 = this;
return self__.meta21128;
});

cljs.core.async.t_cljs$core$async21127.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21128","meta21128",-737331186,null)], null);
});

cljs.core.async.t_cljs$core$async21127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21127";

cljs.core.async.t_cljs$core$async21127.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async21127");
});

cljs.core.async.__GT_t_cljs$core$async21127 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21127(alt_handler__$1,flag__$1,cb__$1,meta21128){
return (new cljs.core.async.t_cljs$core$async21127(alt_handler__$1,flag__$1,cb__$1,meta21128));
});

}

return (new cljs.core.async.t_cljs$core$async21127(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21130_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21130_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21131_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21131_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14672__auto__ = wport;
if(cljs.core.truth_(or__14672__auto__)){
return or__14672__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21132 = (i + (1));
i = G__21132;
continue;
}
} else {
return null;
}
break;
}
})();
var or__14672__auto__ = ret;
if(cljs.core.truth_(or__14672__auto__)){
return or__14672__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__14660__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__14660__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__14660__auto__;
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
var args__15737__auto__ = [];
var len__15730__auto___21138 = arguments.length;
var i__15731__auto___21139 = (0);
while(true){
if((i__15731__auto___21139 < len__15730__auto___21138)){
args__15737__auto__.push((arguments[i__15731__auto___21139]));

var G__21140 = (i__15731__auto___21139 + (1));
i__15731__auto___21139 = G__21140;
continue;
} else {
}
break;
}

var argseq__15738__auto__ = ((((1) < args__15737__auto__.length))?(new cljs.core.IndexedSeq(args__15737__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15738__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21135){
var map__21136 = p__21135;
var map__21136__$1 = ((((!((map__21136 == null)))?((((map__21136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21136):map__21136);
var opts = map__21136__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21133){
var G__21134 = cljs.core.first.call(null,seq21133);
var seq21133__$1 = cljs.core.next.call(null,seq21133);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21134,seq21133__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21141 = [];
var len__15730__auto___21191 = arguments.length;
var i__15731__auto___21192 = (0);
while(true){
if((i__15731__auto___21192 < len__15730__auto___21191)){
args21141.push((arguments[i__15731__auto___21192]));

var G__21193 = (i__15731__auto___21192 + (1));
i__15731__auto___21192 = G__21193;
continue;
} else {
}
break;
}

var G__21143 = args21141.length;
switch (G__21143) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21141.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16755__auto___21195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___21195){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___21195){
return (function (state_21167){
var state_val_21168 = (state_21167[(1)]);
if((state_val_21168 === (7))){
var inst_21163 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
var statearr_21169_21196 = state_21167__$1;
(statearr_21169_21196[(2)] = inst_21163);

(statearr_21169_21196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (1))){
var state_21167__$1 = state_21167;
var statearr_21170_21197 = state_21167__$1;
(statearr_21170_21197[(2)] = null);

(statearr_21170_21197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (4))){
var inst_21146 = (state_21167[(7)]);
var inst_21146__$1 = (state_21167[(2)]);
var inst_21147 = (inst_21146__$1 == null);
var state_21167__$1 = (function (){var statearr_21171 = state_21167;
(statearr_21171[(7)] = inst_21146__$1);

return statearr_21171;
})();
if(cljs.core.truth_(inst_21147)){
var statearr_21172_21198 = state_21167__$1;
(statearr_21172_21198[(1)] = (5));

} else {
var statearr_21173_21199 = state_21167__$1;
(statearr_21173_21199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (13))){
var state_21167__$1 = state_21167;
var statearr_21174_21200 = state_21167__$1;
(statearr_21174_21200[(2)] = null);

(statearr_21174_21200[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (6))){
var inst_21146 = (state_21167[(7)]);
var state_21167__$1 = state_21167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21167__$1,(11),to,inst_21146);
} else {
if((state_val_21168 === (3))){
var inst_21165 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21167__$1,inst_21165);
} else {
if((state_val_21168 === (12))){
var state_21167__$1 = state_21167;
var statearr_21175_21201 = state_21167__$1;
(statearr_21175_21201[(2)] = null);

(statearr_21175_21201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (2))){
var state_21167__$1 = state_21167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21167__$1,(4),from);
} else {
if((state_val_21168 === (11))){
var inst_21156 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
if(cljs.core.truth_(inst_21156)){
var statearr_21176_21202 = state_21167__$1;
(statearr_21176_21202[(1)] = (12));

} else {
var statearr_21177_21203 = state_21167__$1;
(statearr_21177_21203[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (9))){
var state_21167__$1 = state_21167;
var statearr_21178_21204 = state_21167__$1;
(statearr_21178_21204[(2)] = null);

(statearr_21178_21204[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (5))){
var state_21167__$1 = state_21167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21179_21205 = state_21167__$1;
(statearr_21179_21205[(1)] = (8));

} else {
var statearr_21180_21206 = state_21167__$1;
(statearr_21180_21206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (14))){
var inst_21161 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
var statearr_21181_21207 = state_21167__$1;
(statearr_21181_21207[(2)] = inst_21161);

(statearr_21181_21207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (10))){
var inst_21153 = (state_21167[(2)]);
var state_21167__$1 = state_21167;
var statearr_21182_21208 = state_21167__$1;
(statearr_21182_21208[(2)] = inst_21153);

(statearr_21182_21208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21168 === (8))){
var inst_21150 = cljs.core.async.close_BANG_.call(null,to);
var state_21167__$1 = state_21167;
var statearr_21183_21209 = state_21167__$1;
(statearr_21183_21209[(2)] = inst_21150);

(statearr_21183_21209[(1)] = (10));


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
});})(c__16755__auto___21195))
;
return ((function (switch__16690__auto__,c__16755__auto___21195){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_21187 = [null,null,null,null,null,null,null,null];
(statearr_21187[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_21187[(1)] = (1));

return statearr_21187;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_21167){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21188){if((e21188 instanceof Object)){
var ex__16694__auto__ = e21188;
var statearr_21189_21210 = state_21167;
(statearr_21189_21210[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21211 = state_21167;
state_21167 = G__21211;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_21167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_21167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___21195))
})();
var state__16757__auto__ = (function (){var statearr_21190 = f__16756__auto__.call(null);
(statearr_21190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___21195);

return statearr_21190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___21195))
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
return (function (p__21395){
var vec__21396 = p__21395;
var v = cljs.core.nth.call(null,vec__21396,(0),null);
var p = cljs.core.nth.call(null,vec__21396,(1),null);
var job = vec__21396;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16755__auto___21578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___21578,res,vec__21396,v,p,job,jobs,results){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___21578,res,vec__21396,v,p,job,jobs,results){
return (function (state_21401){
var state_val_21402 = (state_21401[(1)]);
if((state_val_21402 === (1))){
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21401__$1,(2),res,v);
} else {
if((state_val_21402 === (2))){
var inst_21398 = (state_21401[(2)]);
var inst_21399 = cljs.core.async.close_BANG_.call(null,res);
var state_21401__$1 = (function (){var statearr_21403 = state_21401;
(statearr_21403[(7)] = inst_21398);

return statearr_21403;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21401__$1,inst_21399);
} else {
return null;
}
}
});})(c__16755__auto___21578,res,vec__21396,v,p,job,jobs,results))
;
return ((function (switch__16690__auto__,c__16755__auto___21578,res,vec__21396,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0 = (function (){
var statearr_21407 = [null,null,null,null,null,null,null,null];
(statearr_21407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__);

(statearr_21407[(1)] = (1));

return statearr_21407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1 = (function (state_21401){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21408){if((e21408 instanceof Object)){
var ex__16694__auto__ = e21408;
var statearr_21409_21579 = state_21401;
(statearr_21409_21579[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21580 = state_21401;
state_21401 = G__21580;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = function(state_21401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1.call(this,state_21401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___21578,res,vec__21396,v,p,job,jobs,results))
})();
var state__16757__auto__ = (function (){var statearr_21410 = f__16756__auto__.call(null);
(statearr_21410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___21578);

return statearr_21410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___21578,res,vec__21396,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21411){
var vec__21412 = p__21411;
var v = cljs.core.nth.call(null,vec__21412,(0),null);
var p = cljs.core.nth.call(null,vec__21412,(1),null);
var job = vec__21412;
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
var n__15575__auto___21581 = n;
var __21582 = (0);
while(true){
if((__21582 < n__15575__auto___21581)){
var G__21413_21583 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21413_21583) {
case "compute":
var c__16755__auto___21585 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21582,c__16755__auto___21585,G__21413_21583,n__15575__auto___21581,jobs,results,process,async){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (__21582,c__16755__auto___21585,G__21413_21583,n__15575__auto___21581,jobs,results,process,async){
return (function (state_21426){
var state_val_21427 = (state_21426[(1)]);
if((state_val_21427 === (1))){
var state_21426__$1 = state_21426;
var statearr_21428_21586 = state_21426__$1;
(statearr_21428_21586[(2)] = null);

(statearr_21428_21586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (2))){
var state_21426__$1 = state_21426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21426__$1,(4),jobs);
} else {
if((state_val_21427 === (3))){
var inst_21424 = (state_21426[(2)]);
var state_21426__$1 = state_21426;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21426__$1,inst_21424);
} else {
if((state_val_21427 === (4))){
var inst_21416 = (state_21426[(2)]);
var inst_21417 = process.call(null,inst_21416);
var state_21426__$1 = state_21426;
if(cljs.core.truth_(inst_21417)){
var statearr_21429_21587 = state_21426__$1;
(statearr_21429_21587[(1)] = (5));

} else {
var statearr_21430_21588 = state_21426__$1;
(statearr_21430_21588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (5))){
var state_21426__$1 = state_21426;
var statearr_21431_21589 = state_21426__$1;
(statearr_21431_21589[(2)] = null);

(statearr_21431_21589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (6))){
var state_21426__$1 = state_21426;
var statearr_21432_21590 = state_21426__$1;
(statearr_21432_21590[(2)] = null);

(statearr_21432_21590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21427 === (7))){
var inst_21422 = (state_21426[(2)]);
var state_21426__$1 = state_21426;
var statearr_21433_21591 = state_21426__$1;
(statearr_21433_21591[(2)] = inst_21422);

(statearr_21433_21591[(1)] = (3));


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
});})(__21582,c__16755__auto___21585,G__21413_21583,n__15575__auto___21581,jobs,results,process,async))
;
return ((function (__21582,switch__16690__auto__,c__16755__auto___21585,G__21413_21583,n__15575__auto___21581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0 = (function (){
var statearr_21437 = [null,null,null,null,null,null,null];
(statearr_21437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__);

(statearr_21437[(1)] = (1));

return statearr_21437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1 = (function (state_21426){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21438){if((e21438 instanceof Object)){
var ex__16694__auto__ = e21438;
var statearr_21439_21592 = state_21426;
(statearr_21439_21592[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21593 = state_21426;
state_21426 = G__21593;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = function(state_21426){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1.call(this,state_21426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__;
})()
;})(__21582,switch__16690__auto__,c__16755__auto___21585,G__21413_21583,n__15575__auto___21581,jobs,results,process,async))
})();
var state__16757__auto__ = (function (){var statearr_21440 = f__16756__auto__.call(null);
(statearr_21440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___21585);

return statearr_21440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(__21582,c__16755__auto___21585,G__21413_21583,n__15575__auto___21581,jobs,results,process,async))
);


break;
case "async":
var c__16755__auto___21594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21582,c__16755__auto___21594,G__21413_21583,n__15575__auto___21581,jobs,results,process,async){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (__21582,c__16755__auto___21594,G__21413_21583,n__15575__auto___21581,jobs,results,process,async){
return (function (state_21453){
var state_val_21454 = (state_21453[(1)]);
if((state_val_21454 === (1))){
var state_21453__$1 = state_21453;
var statearr_21455_21595 = state_21453__$1;
(statearr_21455_21595[(2)] = null);

(statearr_21455_21595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (2))){
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21453__$1,(4),jobs);
} else {
if((state_val_21454 === (3))){
var inst_21451 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21453__$1,inst_21451);
} else {
if((state_val_21454 === (4))){
var inst_21443 = (state_21453[(2)]);
var inst_21444 = async.call(null,inst_21443);
var state_21453__$1 = state_21453;
if(cljs.core.truth_(inst_21444)){
var statearr_21456_21596 = state_21453__$1;
(statearr_21456_21596[(1)] = (5));

} else {
var statearr_21457_21597 = state_21453__$1;
(statearr_21457_21597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (5))){
var state_21453__$1 = state_21453;
var statearr_21458_21598 = state_21453__$1;
(statearr_21458_21598[(2)] = null);

(statearr_21458_21598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (6))){
var state_21453__$1 = state_21453;
var statearr_21459_21599 = state_21453__$1;
(statearr_21459_21599[(2)] = null);

(statearr_21459_21599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21454 === (7))){
var inst_21449 = (state_21453[(2)]);
var state_21453__$1 = state_21453;
var statearr_21460_21600 = state_21453__$1;
(statearr_21460_21600[(2)] = inst_21449);

(statearr_21460_21600[(1)] = (3));


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
});})(__21582,c__16755__auto___21594,G__21413_21583,n__15575__auto___21581,jobs,results,process,async))
;
return ((function (__21582,switch__16690__auto__,c__16755__auto___21594,G__21413_21583,n__15575__auto___21581,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0 = (function (){
var statearr_21464 = [null,null,null,null,null,null,null];
(statearr_21464[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__);

(statearr_21464[(1)] = (1));

return statearr_21464;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1 = (function (state_21453){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21465){if((e21465 instanceof Object)){
var ex__16694__auto__ = e21465;
var statearr_21466_21601 = state_21453;
(statearr_21466_21601[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21465;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21602 = state_21453;
state_21453 = G__21602;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = function(state_21453){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1.call(this,state_21453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__;
})()
;})(__21582,switch__16690__auto__,c__16755__auto___21594,G__21413_21583,n__15575__auto___21581,jobs,results,process,async))
})();
var state__16757__auto__ = (function (){var statearr_21467 = f__16756__auto__.call(null);
(statearr_21467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___21594);

return statearr_21467;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(__21582,c__16755__auto___21594,G__21413_21583,n__15575__auto___21581,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21603 = (__21582 + (1));
__21582 = G__21603;
continue;
} else {
}
break;
}

var c__16755__auto___21604 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___21604,jobs,results,process,async){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___21604,jobs,results,process,async){
return (function (state_21489){
var state_val_21490 = (state_21489[(1)]);
if((state_val_21490 === (1))){
var state_21489__$1 = state_21489;
var statearr_21491_21605 = state_21489__$1;
(statearr_21491_21605[(2)] = null);

(statearr_21491_21605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (2))){
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(4),from);
} else {
if((state_val_21490 === (3))){
var inst_21487 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21489__$1,inst_21487);
} else {
if((state_val_21490 === (4))){
var inst_21470 = (state_21489[(7)]);
var inst_21470__$1 = (state_21489[(2)]);
var inst_21471 = (inst_21470__$1 == null);
var state_21489__$1 = (function (){var statearr_21492 = state_21489;
(statearr_21492[(7)] = inst_21470__$1);

return statearr_21492;
})();
if(cljs.core.truth_(inst_21471)){
var statearr_21493_21606 = state_21489__$1;
(statearr_21493_21606[(1)] = (5));

} else {
var statearr_21494_21607 = state_21489__$1;
(statearr_21494_21607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (5))){
var inst_21473 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21489__$1 = state_21489;
var statearr_21495_21608 = state_21489__$1;
(statearr_21495_21608[(2)] = inst_21473);

(statearr_21495_21608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (6))){
var inst_21475 = (state_21489[(8)]);
var inst_21470 = (state_21489[(7)]);
var inst_21475__$1 = cljs.core.async.chan.call(null,(1));
var inst_21476 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21477 = [inst_21470,inst_21475__$1];
var inst_21478 = (new cljs.core.PersistentVector(null,2,(5),inst_21476,inst_21477,null));
var state_21489__$1 = (function (){var statearr_21496 = state_21489;
(statearr_21496[(8)] = inst_21475__$1);

return statearr_21496;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21489__$1,(8),jobs,inst_21478);
} else {
if((state_val_21490 === (7))){
var inst_21485 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21497_21609 = state_21489__$1;
(statearr_21497_21609[(2)] = inst_21485);

(statearr_21497_21609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (8))){
var inst_21475 = (state_21489[(8)]);
var inst_21480 = (state_21489[(2)]);
var state_21489__$1 = (function (){var statearr_21498 = state_21489;
(statearr_21498[(9)] = inst_21480);

return statearr_21498;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21489__$1,(9),results,inst_21475);
} else {
if((state_val_21490 === (9))){
var inst_21482 = (state_21489[(2)]);
var state_21489__$1 = (function (){var statearr_21499 = state_21489;
(statearr_21499[(10)] = inst_21482);

return statearr_21499;
})();
var statearr_21500_21610 = state_21489__$1;
(statearr_21500_21610[(2)] = null);

(statearr_21500_21610[(1)] = (2));


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
});})(c__16755__auto___21604,jobs,results,process,async))
;
return ((function (switch__16690__auto__,c__16755__auto___21604,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0 = (function (){
var statearr_21504 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21504[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__);

(statearr_21504[(1)] = (1));

return statearr_21504;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1 = (function (state_21489){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21505){if((e21505 instanceof Object)){
var ex__16694__auto__ = e21505;
var statearr_21506_21611 = state_21489;
(statearr_21506_21611[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21505;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21612 = state_21489;
state_21489 = G__21612;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = function(state_21489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1.call(this,state_21489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___21604,jobs,results,process,async))
})();
var state__16757__auto__ = (function (){var statearr_21507 = f__16756__auto__.call(null);
(statearr_21507[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___21604);

return statearr_21507;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___21604,jobs,results,process,async))
);


var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__,jobs,results,process,async){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__,jobs,results,process,async){
return (function (state_21545){
var state_val_21546 = (state_21545[(1)]);
if((state_val_21546 === (7))){
var inst_21541 = (state_21545[(2)]);
var state_21545__$1 = state_21545;
var statearr_21547_21613 = state_21545__$1;
(statearr_21547_21613[(2)] = inst_21541);

(statearr_21547_21613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (20))){
var state_21545__$1 = state_21545;
var statearr_21548_21614 = state_21545__$1;
(statearr_21548_21614[(2)] = null);

(statearr_21548_21614[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (1))){
var state_21545__$1 = state_21545;
var statearr_21549_21615 = state_21545__$1;
(statearr_21549_21615[(2)] = null);

(statearr_21549_21615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (4))){
var inst_21510 = (state_21545[(7)]);
var inst_21510__$1 = (state_21545[(2)]);
var inst_21511 = (inst_21510__$1 == null);
var state_21545__$1 = (function (){var statearr_21550 = state_21545;
(statearr_21550[(7)] = inst_21510__$1);

return statearr_21550;
})();
if(cljs.core.truth_(inst_21511)){
var statearr_21551_21616 = state_21545__$1;
(statearr_21551_21616[(1)] = (5));

} else {
var statearr_21552_21617 = state_21545__$1;
(statearr_21552_21617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (15))){
var inst_21523 = (state_21545[(8)]);
var state_21545__$1 = state_21545;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21545__$1,(18),to,inst_21523);
} else {
if((state_val_21546 === (21))){
var inst_21536 = (state_21545[(2)]);
var state_21545__$1 = state_21545;
var statearr_21553_21618 = state_21545__$1;
(statearr_21553_21618[(2)] = inst_21536);

(statearr_21553_21618[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (13))){
var inst_21538 = (state_21545[(2)]);
var state_21545__$1 = (function (){var statearr_21554 = state_21545;
(statearr_21554[(9)] = inst_21538);

return statearr_21554;
})();
var statearr_21555_21619 = state_21545__$1;
(statearr_21555_21619[(2)] = null);

(statearr_21555_21619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (6))){
var inst_21510 = (state_21545[(7)]);
var state_21545__$1 = state_21545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21545__$1,(11),inst_21510);
} else {
if((state_val_21546 === (17))){
var inst_21531 = (state_21545[(2)]);
var state_21545__$1 = state_21545;
if(cljs.core.truth_(inst_21531)){
var statearr_21556_21620 = state_21545__$1;
(statearr_21556_21620[(1)] = (19));

} else {
var statearr_21557_21621 = state_21545__$1;
(statearr_21557_21621[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (3))){
var inst_21543 = (state_21545[(2)]);
var state_21545__$1 = state_21545;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21545__$1,inst_21543);
} else {
if((state_val_21546 === (12))){
var inst_21520 = (state_21545[(10)]);
var state_21545__$1 = state_21545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21545__$1,(14),inst_21520);
} else {
if((state_val_21546 === (2))){
var state_21545__$1 = state_21545;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21545__$1,(4),results);
} else {
if((state_val_21546 === (19))){
var state_21545__$1 = state_21545;
var statearr_21558_21622 = state_21545__$1;
(statearr_21558_21622[(2)] = null);

(statearr_21558_21622[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (11))){
var inst_21520 = (state_21545[(2)]);
var state_21545__$1 = (function (){var statearr_21559 = state_21545;
(statearr_21559[(10)] = inst_21520);

return statearr_21559;
})();
var statearr_21560_21623 = state_21545__$1;
(statearr_21560_21623[(2)] = null);

(statearr_21560_21623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (9))){
var state_21545__$1 = state_21545;
var statearr_21561_21624 = state_21545__$1;
(statearr_21561_21624[(2)] = null);

(statearr_21561_21624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (5))){
var state_21545__$1 = state_21545;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21562_21625 = state_21545__$1;
(statearr_21562_21625[(1)] = (8));

} else {
var statearr_21563_21626 = state_21545__$1;
(statearr_21563_21626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (14))){
var inst_21525 = (state_21545[(11)]);
var inst_21523 = (state_21545[(8)]);
var inst_21523__$1 = (state_21545[(2)]);
var inst_21524 = (inst_21523__$1 == null);
var inst_21525__$1 = cljs.core.not.call(null,inst_21524);
var state_21545__$1 = (function (){var statearr_21564 = state_21545;
(statearr_21564[(11)] = inst_21525__$1);

(statearr_21564[(8)] = inst_21523__$1);

return statearr_21564;
})();
if(inst_21525__$1){
var statearr_21565_21627 = state_21545__$1;
(statearr_21565_21627[(1)] = (15));

} else {
var statearr_21566_21628 = state_21545__$1;
(statearr_21566_21628[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (16))){
var inst_21525 = (state_21545[(11)]);
var state_21545__$1 = state_21545;
var statearr_21567_21629 = state_21545__$1;
(statearr_21567_21629[(2)] = inst_21525);

(statearr_21567_21629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (10))){
var inst_21517 = (state_21545[(2)]);
var state_21545__$1 = state_21545;
var statearr_21568_21630 = state_21545__$1;
(statearr_21568_21630[(2)] = inst_21517);

(statearr_21568_21630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (18))){
var inst_21528 = (state_21545[(2)]);
var state_21545__$1 = state_21545;
var statearr_21569_21631 = state_21545__$1;
(statearr_21569_21631[(2)] = inst_21528);

(statearr_21569_21631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21546 === (8))){
var inst_21514 = cljs.core.async.close_BANG_.call(null,to);
var state_21545__$1 = state_21545;
var statearr_21570_21632 = state_21545__$1;
(statearr_21570_21632[(2)] = inst_21514);

(statearr_21570_21632[(1)] = (10));


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
});})(c__16755__auto__,jobs,results,process,async))
;
return ((function (switch__16690__auto__,c__16755__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0 = (function (){
var statearr_21574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__);

(statearr_21574[(1)] = (1));

return statearr_21574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1 = (function (state_21545){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21545);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21575){if((e21575 instanceof Object)){
var ex__16694__auto__ = e21575;
var statearr_21576_21633 = state_21545;
(statearr_21576_21633[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21545);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21634 = state_21545;
state_21545 = G__21634;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__ = function(state_21545){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1.call(this,state_21545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16691__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__,jobs,results,process,async))
})();
var state__16757__auto__ = (function (){var statearr_21577 = f__16756__auto__.call(null);
(statearr_21577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_21577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__,jobs,results,process,async))
);

return c__16755__auto__;
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
var args21635 = [];
var len__15730__auto___21638 = arguments.length;
var i__15731__auto___21639 = (0);
while(true){
if((i__15731__auto___21639 < len__15730__auto___21638)){
args21635.push((arguments[i__15731__auto___21639]));

var G__21640 = (i__15731__auto___21639 + (1));
i__15731__auto___21639 = G__21640;
continue;
} else {
}
break;
}

var G__21637 = args21635.length;
switch (G__21637) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21635.length)].join('')));

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
var args21642 = [];
var len__15730__auto___21645 = arguments.length;
var i__15731__auto___21646 = (0);
while(true){
if((i__15731__auto___21646 < len__15730__auto___21645)){
args21642.push((arguments[i__15731__auto___21646]));

var G__21647 = (i__15731__auto___21646 + (1));
i__15731__auto___21646 = G__21647;
continue;
} else {
}
break;
}

var G__21644 = args21642.length;
switch (G__21644) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21642.length)].join('')));

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
var args21649 = [];
var len__15730__auto___21702 = arguments.length;
var i__15731__auto___21703 = (0);
while(true){
if((i__15731__auto___21703 < len__15730__auto___21702)){
args21649.push((arguments[i__15731__auto___21703]));

var G__21704 = (i__15731__auto___21703 + (1));
i__15731__auto___21703 = G__21704;
continue;
} else {
}
break;
}

var G__21651 = args21649.length;
switch (G__21651) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21649.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16755__auto___21706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___21706,tc,fc){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___21706,tc,fc){
return (function (state_21677){
var state_val_21678 = (state_21677[(1)]);
if((state_val_21678 === (7))){
var inst_21673 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21679_21707 = state_21677__$1;
(statearr_21679_21707[(2)] = inst_21673);

(statearr_21679_21707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (1))){
var state_21677__$1 = state_21677;
var statearr_21680_21708 = state_21677__$1;
(statearr_21680_21708[(2)] = null);

(statearr_21680_21708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (4))){
var inst_21654 = (state_21677[(7)]);
var inst_21654__$1 = (state_21677[(2)]);
var inst_21655 = (inst_21654__$1 == null);
var state_21677__$1 = (function (){var statearr_21681 = state_21677;
(statearr_21681[(7)] = inst_21654__$1);

return statearr_21681;
})();
if(cljs.core.truth_(inst_21655)){
var statearr_21682_21709 = state_21677__$1;
(statearr_21682_21709[(1)] = (5));

} else {
var statearr_21683_21710 = state_21677__$1;
(statearr_21683_21710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (13))){
var state_21677__$1 = state_21677;
var statearr_21684_21711 = state_21677__$1;
(statearr_21684_21711[(2)] = null);

(statearr_21684_21711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (6))){
var inst_21654 = (state_21677[(7)]);
var inst_21660 = p.call(null,inst_21654);
var state_21677__$1 = state_21677;
if(cljs.core.truth_(inst_21660)){
var statearr_21685_21712 = state_21677__$1;
(statearr_21685_21712[(1)] = (9));

} else {
var statearr_21686_21713 = state_21677__$1;
(statearr_21686_21713[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (3))){
var inst_21675 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21677__$1,inst_21675);
} else {
if((state_val_21678 === (12))){
var state_21677__$1 = state_21677;
var statearr_21687_21714 = state_21677__$1;
(statearr_21687_21714[(2)] = null);

(statearr_21687_21714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (2))){
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21677__$1,(4),ch);
} else {
if((state_val_21678 === (11))){
var inst_21654 = (state_21677[(7)]);
var inst_21664 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21677__$1,(8),inst_21664,inst_21654);
} else {
if((state_val_21678 === (9))){
var state_21677__$1 = state_21677;
var statearr_21688_21715 = state_21677__$1;
(statearr_21688_21715[(2)] = tc);

(statearr_21688_21715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (5))){
var inst_21657 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21658 = cljs.core.async.close_BANG_.call(null,fc);
var state_21677__$1 = (function (){var statearr_21689 = state_21677;
(statearr_21689[(8)] = inst_21657);

return statearr_21689;
})();
var statearr_21690_21716 = state_21677__$1;
(statearr_21690_21716[(2)] = inst_21658);

(statearr_21690_21716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (14))){
var inst_21671 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
var statearr_21691_21717 = state_21677__$1;
(statearr_21691_21717[(2)] = inst_21671);

(statearr_21691_21717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (10))){
var state_21677__$1 = state_21677;
var statearr_21692_21718 = state_21677__$1;
(statearr_21692_21718[(2)] = fc);

(statearr_21692_21718[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21678 === (8))){
var inst_21666 = (state_21677[(2)]);
var state_21677__$1 = state_21677;
if(cljs.core.truth_(inst_21666)){
var statearr_21693_21719 = state_21677__$1;
(statearr_21693_21719[(1)] = (12));

} else {
var statearr_21694_21720 = state_21677__$1;
(statearr_21694_21720[(1)] = (13));

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
});})(c__16755__auto___21706,tc,fc))
;
return ((function (switch__16690__auto__,c__16755__auto___21706,tc,fc){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_21698 = [null,null,null,null,null,null,null,null,null];
(statearr_21698[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_21698[(1)] = (1));

return statearr_21698;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_21677){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21699){if((e21699 instanceof Object)){
var ex__16694__auto__ = e21699;
var statearr_21700_21721 = state_21677;
(statearr_21700_21721[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21699;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21722 = state_21677;
state_21677 = G__21722;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_21677){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_21677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___21706,tc,fc))
})();
var state__16757__auto__ = (function (){var statearr_21701 = f__16756__auto__.call(null);
(statearr_21701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___21706);

return statearr_21701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___21706,tc,fc))
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
var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__){
return (function (state_21769){
var state_val_21770 = (state_21769[(1)]);
if((state_val_21770 === (1))){
var inst_21755 = init;
var state_21769__$1 = (function (){var statearr_21771 = state_21769;
(statearr_21771[(7)] = inst_21755);

return statearr_21771;
})();
var statearr_21772_21787 = state_21769__$1;
(statearr_21772_21787[(2)] = null);

(statearr_21772_21787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (2))){
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21769__$1,(4),ch);
} else {
if((state_val_21770 === (3))){
var inst_21767 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21769__$1,inst_21767);
} else {
if((state_val_21770 === (4))){
var inst_21758 = (state_21769[(8)]);
var inst_21758__$1 = (state_21769[(2)]);
var inst_21759 = (inst_21758__$1 == null);
var state_21769__$1 = (function (){var statearr_21773 = state_21769;
(statearr_21773[(8)] = inst_21758__$1);

return statearr_21773;
})();
if(cljs.core.truth_(inst_21759)){
var statearr_21774_21788 = state_21769__$1;
(statearr_21774_21788[(1)] = (5));

} else {
var statearr_21775_21789 = state_21769__$1;
(statearr_21775_21789[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (5))){
var inst_21755 = (state_21769[(7)]);
var state_21769__$1 = state_21769;
var statearr_21776_21790 = state_21769__$1;
(statearr_21776_21790[(2)] = inst_21755);

(statearr_21776_21790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (6))){
var inst_21758 = (state_21769[(8)]);
var inst_21755 = (state_21769[(7)]);
var inst_21762 = f.call(null,inst_21755,inst_21758);
var inst_21755__$1 = inst_21762;
var state_21769__$1 = (function (){var statearr_21777 = state_21769;
(statearr_21777[(7)] = inst_21755__$1);

return statearr_21777;
})();
var statearr_21778_21791 = state_21769__$1;
(statearr_21778_21791[(2)] = null);

(statearr_21778_21791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21770 === (7))){
var inst_21765 = (state_21769[(2)]);
var state_21769__$1 = state_21769;
var statearr_21779_21792 = state_21769__$1;
(statearr_21779_21792[(2)] = inst_21765);

(statearr_21779_21792[(1)] = (3));


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
var cljs$core$async$reduce_$_state_machine__16691__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16691__auto____0 = (function (){
var statearr_21783 = [null,null,null,null,null,null,null,null,null];
(statearr_21783[(0)] = cljs$core$async$reduce_$_state_machine__16691__auto__);

(statearr_21783[(1)] = (1));

return statearr_21783;
});
var cljs$core$async$reduce_$_state_machine__16691__auto____1 = (function (state_21769){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21769);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21784){if((e21784 instanceof Object)){
var ex__16694__auto__ = e21784;
var statearr_21785_21793 = state_21769;
(statearr_21785_21793[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21769);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21784;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21794 = state_21769;
state_21769 = G__21794;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16691__auto__ = function(state_21769){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16691__auto____1.call(this,state_21769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16691__auto____0;
cljs$core$async$reduce_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16691__auto____1;
return cljs$core$async$reduce_$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__))
})();
var state__16757__auto__ = (function (){var statearr_21786 = f__16756__auto__.call(null);
(statearr_21786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_21786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__))
);

return c__16755__auto__;
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
var args21795 = [];
var len__15730__auto___21847 = arguments.length;
var i__15731__auto___21848 = (0);
while(true){
if((i__15731__auto___21848 < len__15730__auto___21847)){
args21795.push((arguments[i__15731__auto___21848]));

var G__21849 = (i__15731__auto___21848 + (1));
i__15731__auto___21848 = G__21849;
continue;
} else {
}
break;
}

var G__21797 = args21795.length;
switch (G__21797) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21795.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__){
return (function (state_21822){
var state_val_21823 = (state_21822[(1)]);
if((state_val_21823 === (7))){
var inst_21804 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21824_21851 = state_21822__$1;
(statearr_21824_21851[(2)] = inst_21804);

(statearr_21824_21851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (1))){
var inst_21798 = cljs.core.seq.call(null,coll);
var inst_21799 = inst_21798;
var state_21822__$1 = (function (){var statearr_21825 = state_21822;
(statearr_21825[(7)] = inst_21799);

return statearr_21825;
})();
var statearr_21826_21852 = state_21822__$1;
(statearr_21826_21852[(2)] = null);

(statearr_21826_21852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (4))){
var inst_21799 = (state_21822[(7)]);
var inst_21802 = cljs.core.first.call(null,inst_21799);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21822__$1,(7),ch,inst_21802);
} else {
if((state_val_21823 === (13))){
var inst_21816 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21827_21853 = state_21822__$1;
(statearr_21827_21853[(2)] = inst_21816);

(statearr_21827_21853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (6))){
var inst_21807 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
if(cljs.core.truth_(inst_21807)){
var statearr_21828_21854 = state_21822__$1;
(statearr_21828_21854[(1)] = (8));

} else {
var statearr_21829_21855 = state_21822__$1;
(statearr_21829_21855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (3))){
var inst_21820 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21822__$1,inst_21820);
} else {
if((state_val_21823 === (12))){
var state_21822__$1 = state_21822;
var statearr_21830_21856 = state_21822__$1;
(statearr_21830_21856[(2)] = null);

(statearr_21830_21856[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (2))){
var inst_21799 = (state_21822[(7)]);
var state_21822__$1 = state_21822;
if(cljs.core.truth_(inst_21799)){
var statearr_21831_21857 = state_21822__$1;
(statearr_21831_21857[(1)] = (4));

} else {
var statearr_21832_21858 = state_21822__$1;
(statearr_21832_21858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (11))){
var inst_21813 = cljs.core.async.close_BANG_.call(null,ch);
var state_21822__$1 = state_21822;
var statearr_21833_21859 = state_21822__$1;
(statearr_21833_21859[(2)] = inst_21813);

(statearr_21833_21859[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (9))){
var state_21822__$1 = state_21822;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21834_21860 = state_21822__$1;
(statearr_21834_21860[(1)] = (11));

} else {
var statearr_21835_21861 = state_21822__$1;
(statearr_21835_21861[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (5))){
var inst_21799 = (state_21822[(7)]);
var state_21822__$1 = state_21822;
var statearr_21836_21862 = state_21822__$1;
(statearr_21836_21862[(2)] = inst_21799);

(statearr_21836_21862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (10))){
var inst_21818 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21837_21863 = state_21822__$1;
(statearr_21837_21863[(2)] = inst_21818);

(statearr_21837_21863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (8))){
var inst_21799 = (state_21822[(7)]);
var inst_21809 = cljs.core.next.call(null,inst_21799);
var inst_21799__$1 = inst_21809;
var state_21822__$1 = (function (){var statearr_21838 = state_21822;
(statearr_21838[(7)] = inst_21799__$1);

return statearr_21838;
})();
var statearr_21839_21864 = state_21822__$1;
(statearr_21839_21864[(2)] = null);

(statearr_21839_21864[(1)] = (2));


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
});})(c__16755__auto__))
;
return ((function (switch__16690__auto__,c__16755__auto__){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_21843 = [null,null,null,null,null,null,null,null];
(statearr_21843[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_21843[(1)] = (1));

return statearr_21843;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_21822){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_21822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e21844){if((e21844 instanceof Object)){
var ex__16694__auto__ = e21844;
var statearr_21845_21865 = state_21822;
(statearr_21845_21865[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21844;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21866 = state_21822;
state_21822 = G__21866;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_21822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_21822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__))
})();
var state__16757__auto__ = (function (){var statearr_21846 = f__16756__auto__.call(null);
(statearr_21846[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_21846;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__))
);

return c__16755__auto__;
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
var x__15327__auto__ = (((_ == null))?null:_);
var m__15328__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,_);
} else {
var m__15328__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,_);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__15328__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m,ch);
} else {
var m__15328__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m,ch);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m);
} else {
var m__15328__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async22088 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22088 = (function (mult,ch,cs,meta22089){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22089 = meta22089;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22090,meta22089__$1){
var self__ = this;
var _22090__$1 = this;
return (new cljs.core.async.t_cljs$core$async22088(self__.mult,self__.ch,self__.cs,meta22089__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22090){
var self__ = this;
var _22090__$1 = this;
return self__.meta22089;
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22089","meta22089",1424155807,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22088.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22088.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22088";

cljs.core.async.t_cljs$core$async22088.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async22088");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22088 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22088(mult__$1,ch__$1,cs__$1,meta22089){
return (new cljs.core.async.t_cljs$core$async22088(mult__$1,ch__$1,cs__$1,meta22089));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22088(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__16755__auto___22309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___22309,cs,m,dchan,dctr,done){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___22309,cs,m,dchan,dctr,done){
return (function (state_22221){
var state_val_22222 = (state_22221[(1)]);
if((state_val_22222 === (7))){
var inst_22217 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22223_22310 = state_22221__$1;
(statearr_22223_22310[(2)] = inst_22217);

(statearr_22223_22310[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (20))){
var inst_22122 = (state_22221[(7)]);
var inst_22132 = cljs.core.first.call(null,inst_22122);
var inst_22133 = cljs.core.nth.call(null,inst_22132,(0),null);
var inst_22134 = cljs.core.nth.call(null,inst_22132,(1),null);
var state_22221__$1 = (function (){var statearr_22224 = state_22221;
(statearr_22224[(8)] = inst_22133);

return statearr_22224;
})();
if(cljs.core.truth_(inst_22134)){
var statearr_22225_22311 = state_22221__$1;
(statearr_22225_22311[(1)] = (22));

} else {
var statearr_22226_22312 = state_22221__$1;
(statearr_22226_22312[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (27))){
var inst_22164 = (state_22221[(9)]);
var inst_22093 = (state_22221[(10)]);
var inst_22162 = (state_22221[(11)]);
var inst_22169 = (state_22221[(12)]);
var inst_22169__$1 = cljs.core._nth.call(null,inst_22162,inst_22164);
var inst_22170 = cljs.core.async.put_BANG_.call(null,inst_22169__$1,inst_22093,done);
var state_22221__$1 = (function (){var statearr_22227 = state_22221;
(statearr_22227[(12)] = inst_22169__$1);

return statearr_22227;
})();
if(cljs.core.truth_(inst_22170)){
var statearr_22228_22313 = state_22221__$1;
(statearr_22228_22313[(1)] = (30));

} else {
var statearr_22229_22314 = state_22221__$1;
(statearr_22229_22314[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (1))){
var state_22221__$1 = state_22221;
var statearr_22230_22315 = state_22221__$1;
(statearr_22230_22315[(2)] = null);

(statearr_22230_22315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (24))){
var inst_22122 = (state_22221[(7)]);
var inst_22139 = (state_22221[(2)]);
var inst_22140 = cljs.core.next.call(null,inst_22122);
var inst_22102 = inst_22140;
var inst_22103 = null;
var inst_22104 = (0);
var inst_22105 = (0);
var state_22221__$1 = (function (){var statearr_22231 = state_22221;
(statearr_22231[(13)] = inst_22103);

(statearr_22231[(14)] = inst_22104);

(statearr_22231[(15)] = inst_22139);

(statearr_22231[(16)] = inst_22105);

(statearr_22231[(17)] = inst_22102);

return statearr_22231;
})();
var statearr_22232_22316 = state_22221__$1;
(statearr_22232_22316[(2)] = null);

(statearr_22232_22316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (39))){
var state_22221__$1 = state_22221;
var statearr_22236_22317 = state_22221__$1;
(statearr_22236_22317[(2)] = null);

(statearr_22236_22317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (4))){
var inst_22093 = (state_22221[(10)]);
var inst_22093__$1 = (state_22221[(2)]);
var inst_22094 = (inst_22093__$1 == null);
var state_22221__$1 = (function (){var statearr_22237 = state_22221;
(statearr_22237[(10)] = inst_22093__$1);

return statearr_22237;
})();
if(cljs.core.truth_(inst_22094)){
var statearr_22238_22318 = state_22221__$1;
(statearr_22238_22318[(1)] = (5));

} else {
var statearr_22239_22319 = state_22221__$1;
(statearr_22239_22319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (15))){
var inst_22103 = (state_22221[(13)]);
var inst_22104 = (state_22221[(14)]);
var inst_22105 = (state_22221[(16)]);
var inst_22102 = (state_22221[(17)]);
var inst_22118 = (state_22221[(2)]);
var inst_22119 = (inst_22105 + (1));
var tmp22233 = inst_22103;
var tmp22234 = inst_22104;
var tmp22235 = inst_22102;
var inst_22102__$1 = tmp22235;
var inst_22103__$1 = tmp22233;
var inst_22104__$1 = tmp22234;
var inst_22105__$1 = inst_22119;
var state_22221__$1 = (function (){var statearr_22240 = state_22221;
(statearr_22240[(18)] = inst_22118);

(statearr_22240[(13)] = inst_22103__$1);

(statearr_22240[(14)] = inst_22104__$1);

(statearr_22240[(16)] = inst_22105__$1);

(statearr_22240[(17)] = inst_22102__$1);

return statearr_22240;
})();
var statearr_22241_22320 = state_22221__$1;
(statearr_22241_22320[(2)] = null);

(statearr_22241_22320[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (21))){
var inst_22143 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22245_22321 = state_22221__$1;
(statearr_22245_22321[(2)] = inst_22143);

(statearr_22245_22321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (31))){
var inst_22169 = (state_22221[(12)]);
var inst_22173 = done.call(null,null);
var inst_22174 = cljs.core.async.untap_STAR_.call(null,m,inst_22169);
var state_22221__$1 = (function (){var statearr_22246 = state_22221;
(statearr_22246[(19)] = inst_22173);

return statearr_22246;
})();
var statearr_22247_22322 = state_22221__$1;
(statearr_22247_22322[(2)] = inst_22174);

(statearr_22247_22322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (32))){
var inst_22164 = (state_22221[(9)]);
var inst_22163 = (state_22221[(20)]);
var inst_22161 = (state_22221[(21)]);
var inst_22162 = (state_22221[(11)]);
var inst_22176 = (state_22221[(2)]);
var inst_22177 = (inst_22164 + (1));
var tmp22242 = inst_22163;
var tmp22243 = inst_22161;
var tmp22244 = inst_22162;
var inst_22161__$1 = tmp22243;
var inst_22162__$1 = tmp22244;
var inst_22163__$1 = tmp22242;
var inst_22164__$1 = inst_22177;
var state_22221__$1 = (function (){var statearr_22248 = state_22221;
(statearr_22248[(9)] = inst_22164__$1);

(statearr_22248[(22)] = inst_22176);

(statearr_22248[(20)] = inst_22163__$1);

(statearr_22248[(21)] = inst_22161__$1);

(statearr_22248[(11)] = inst_22162__$1);

return statearr_22248;
})();
var statearr_22249_22323 = state_22221__$1;
(statearr_22249_22323[(2)] = null);

(statearr_22249_22323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (40))){
var inst_22189 = (state_22221[(23)]);
var inst_22193 = done.call(null,null);
var inst_22194 = cljs.core.async.untap_STAR_.call(null,m,inst_22189);
var state_22221__$1 = (function (){var statearr_22250 = state_22221;
(statearr_22250[(24)] = inst_22193);

return statearr_22250;
})();
var statearr_22251_22324 = state_22221__$1;
(statearr_22251_22324[(2)] = inst_22194);

(statearr_22251_22324[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (33))){
var inst_22180 = (state_22221[(25)]);
var inst_22182 = cljs.core.chunked_seq_QMARK_.call(null,inst_22180);
var state_22221__$1 = state_22221;
if(inst_22182){
var statearr_22252_22325 = state_22221__$1;
(statearr_22252_22325[(1)] = (36));

} else {
var statearr_22253_22326 = state_22221__$1;
(statearr_22253_22326[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (13))){
var inst_22112 = (state_22221[(26)]);
var inst_22115 = cljs.core.async.close_BANG_.call(null,inst_22112);
var state_22221__$1 = state_22221;
var statearr_22254_22327 = state_22221__$1;
(statearr_22254_22327[(2)] = inst_22115);

(statearr_22254_22327[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (22))){
var inst_22133 = (state_22221[(8)]);
var inst_22136 = cljs.core.async.close_BANG_.call(null,inst_22133);
var state_22221__$1 = state_22221;
var statearr_22255_22328 = state_22221__$1;
(statearr_22255_22328[(2)] = inst_22136);

(statearr_22255_22328[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (36))){
var inst_22180 = (state_22221[(25)]);
var inst_22184 = cljs.core.chunk_first.call(null,inst_22180);
var inst_22185 = cljs.core.chunk_rest.call(null,inst_22180);
var inst_22186 = cljs.core.count.call(null,inst_22184);
var inst_22161 = inst_22185;
var inst_22162 = inst_22184;
var inst_22163 = inst_22186;
var inst_22164 = (0);
var state_22221__$1 = (function (){var statearr_22256 = state_22221;
(statearr_22256[(9)] = inst_22164);

(statearr_22256[(20)] = inst_22163);

(statearr_22256[(21)] = inst_22161);

(statearr_22256[(11)] = inst_22162);

return statearr_22256;
})();
var statearr_22257_22329 = state_22221__$1;
(statearr_22257_22329[(2)] = null);

(statearr_22257_22329[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (41))){
var inst_22180 = (state_22221[(25)]);
var inst_22196 = (state_22221[(2)]);
var inst_22197 = cljs.core.next.call(null,inst_22180);
var inst_22161 = inst_22197;
var inst_22162 = null;
var inst_22163 = (0);
var inst_22164 = (0);
var state_22221__$1 = (function (){var statearr_22258 = state_22221;
(statearr_22258[(9)] = inst_22164);

(statearr_22258[(27)] = inst_22196);

(statearr_22258[(20)] = inst_22163);

(statearr_22258[(21)] = inst_22161);

(statearr_22258[(11)] = inst_22162);

return statearr_22258;
})();
var statearr_22259_22330 = state_22221__$1;
(statearr_22259_22330[(2)] = null);

(statearr_22259_22330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (43))){
var state_22221__$1 = state_22221;
var statearr_22260_22331 = state_22221__$1;
(statearr_22260_22331[(2)] = null);

(statearr_22260_22331[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (29))){
var inst_22205 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22261_22332 = state_22221__$1;
(statearr_22261_22332[(2)] = inst_22205);

(statearr_22261_22332[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (44))){
var inst_22214 = (state_22221[(2)]);
var state_22221__$1 = (function (){var statearr_22262 = state_22221;
(statearr_22262[(28)] = inst_22214);

return statearr_22262;
})();
var statearr_22263_22333 = state_22221__$1;
(statearr_22263_22333[(2)] = null);

(statearr_22263_22333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (6))){
var inst_22153 = (state_22221[(29)]);
var inst_22152 = cljs.core.deref.call(null,cs);
var inst_22153__$1 = cljs.core.keys.call(null,inst_22152);
var inst_22154 = cljs.core.count.call(null,inst_22153__$1);
var inst_22155 = cljs.core.reset_BANG_.call(null,dctr,inst_22154);
var inst_22160 = cljs.core.seq.call(null,inst_22153__$1);
var inst_22161 = inst_22160;
var inst_22162 = null;
var inst_22163 = (0);
var inst_22164 = (0);
var state_22221__$1 = (function (){var statearr_22264 = state_22221;
(statearr_22264[(9)] = inst_22164);

(statearr_22264[(30)] = inst_22155);

(statearr_22264[(20)] = inst_22163);

(statearr_22264[(21)] = inst_22161);

(statearr_22264[(11)] = inst_22162);

(statearr_22264[(29)] = inst_22153__$1);

return statearr_22264;
})();
var statearr_22265_22334 = state_22221__$1;
(statearr_22265_22334[(2)] = null);

(statearr_22265_22334[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (28))){
var inst_22180 = (state_22221[(25)]);
var inst_22161 = (state_22221[(21)]);
var inst_22180__$1 = cljs.core.seq.call(null,inst_22161);
var state_22221__$1 = (function (){var statearr_22266 = state_22221;
(statearr_22266[(25)] = inst_22180__$1);

return statearr_22266;
})();
if(inst_22180__$1){
var statearr_22267_22335 = state_22221__$1;
(statearr_22267_22335[(1)] = (33));

} else {
var statearr_22268_22336 = state_22221__$1;
(statearr_22268_22336[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (25))){
var inst_22164 = (state_22221[(9)]);
var inst_22163 = (state_22221[(20)]);
var inst_22166 = (inst_22164 < inst_22163);
var inst_22167 = inst_22166;
var state_22221__$1 = state_22221;
if(cljs.core.truth_(inst_22167)){
var statearr_22269_22337 = state_22221__$1;
(statearr_22269_22337[(1)] = (27));

} else {
var statearr_22270_22338 = state_22221__$1;
(statearr_22270_22338[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (34))){
var state_22221__$1 = state_22221;
var statearr_22271_22339 = state_22221__$1;
(statearr_22271_22339[(2)] = null);

(statearr_22271_22339[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (17))){
var state_22221__$1 = state_22221;
var statearr_22272_22340 = state_22221__$1;
(statearr_22272_22340[(2)] = null);

(statearr_22272_22340[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (3))){
var inst_22219 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22221__$1,inst_22219);
} else {
if((state_val_22222 === (12))){
var inst_22148 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22273_22341 = state_22221__$1;
(statearr_22273_22341[(2)] = inst_22148);

(statearr_22273_22341[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (2))){
var state_22221__$1 = state_22221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22221__$1,(4),ch);
} else {
if((state_val_22222 === (23))){
var state_22221__$1 = state_22221;
var statearr_22274_22342 = state_22221__$1;
(statearr_22274_22342[(2)] = null);

(statearr_22274_22342[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (35))){
var inst_22203 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22275_22343 = state_22221__$1;
(statearr_22275_22343[(2)] = inst_22203);

(statearr_22275_22343[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (19))){
var inst_22122 = (state_22221[(7)]);
var inst_22126 = cljs.core.chunk_first.call(null,inst_22122);
var inst_22127 = cljs.core.chunk_rest.call(null,inst_22122);
var inst_22128 = cljs.core.count.call(null,inst_22126);
var inst_22102 = inst_22127;
var inst_22103 = inst_22126;
var inst_22104 = inst_22128;
var inst_22105 = (0);
var state_22221__$1 = (function (){var statearr_22276 = state_22221;
(statearr_22276[(13)] = inst_22103);

(statearr_22276[(14)] = inst_22104);

(statearr_22276[(16)] = inst_22105);

(statearr_22276[(17)] = inst_22102);

return statearr_22276;
})();
var statearr_22277_22344 = state_22221__$1;
(statearr_22277_22344[(2)] = null);

(statearr_22277_22344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (11))){
var inst_22122 = (state_22221[(7)]);
var inst_22102 = (state_22221[(17)]);
var inst_22122__$1 = cljs.core.seq.call(null,inst_22102);
var state_22221__$1 = (function (){var statearr_22278 = state_22221;
(statearr_22278[(7)] = inst_22122__$1);

return statearr_22278;
})();
if(inst_22122__$1){
var statearr_22279_22345 = state_22221__$1;
(statearr_22279_22345[(1)] = (16));

} else {
var statearr_22280_22346 = state_22221__$1;
(statearr_22280_22346[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (9))){
var inst_22150 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22281_22347 = state_22221__$1;
(statearr_22281_22347[(2)] = inst_22150);

(statearr_22281_22347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (5))){
var inst_22100 = cljs.core.deref.call(null,cs);
var inst_22101 = cljs.core.seq.call(null,inst_22100);
var inst_22102 = inst_22101;
var inst_22103 = null;
var inst_22104 = (0);
var inst_22105 = (0);
var state_22221__$1 = (function (){var statearr_22282 = state_22221;
(statearr_22282[(13)] = inst_22103);

(statearr_22282[(14)] = inst_22104);

(statearr_22282[(16)] = inst_22105);

(statearr_22282[(17)] = inst_22102);

return statearr_22282;
})();
var statearr_22283_22348 = state_22221__$1;
(statearr_22283_22348[(2)] = null);

(statearr_22283_22348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (14))){
var state_22221__$1 = state_22221;
var statearr_22284_22349 = state_22221__$1;
(statearr_22284_22349[(2)] = null);

(statearr_22284_22349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (45))){
var inst_22211 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22285_22350 = state_22221__$1;
(statearr_22285_22350[(2)] = inst_22211);

(statearr_22285_22350[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (26))){
var inst_22153 = (state_22221[(29)]);
var inst_22207 = (state_22221[(2)]);
var inst_22208 = cljs.core.seq.call(null,inst_22153);
var state_22221__$1 = (function (){var statearr_22286 = state_22221;
(statearr_22286[(31)] = inst_22207);

return statearr_22286;
})();
if(inst_22208){
var statearr_22287_22351 = state_22221__$1;
(statearr_22287_22351[(1)] = (42));

} else {
var statearr_22288_22352 = state_22221__$1;
(statearr_22288_22352[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (16))){
var inst_22122 = (state_22221[(7)]);
var inst_22124 = cljs.core.chunked_seq_QMARK_.call(null,inst_22122);
var state_22221__$1 = state_22221;
if(inst_22124){
var statearr_22289_22353 = state_22221__$1;
(statearr_22289_22353[(1)] = (19));

} else {
var statearr_22290_22354 = state_22221__$1;
(statearr_22290_22354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (38))){
var inst_22200 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22291_22355 = state_22221__$1;
(statearr_22291_22355[(2)] = inst_22200);

(statearr_22291_22355[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (30))){
var state_22221__$1 = state_22221;
var statearr_22292_22356 = state_22221__$1;
(statearr_22292_22356[(2)] = null);

(statearr_22292_22356[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (10))){
var inst_22103 = (state_22221[(13)]);
var inst_22105 = (state_22221[(16)]);
var inst_22111 = cljs.core._nth.call(null,inst_22103,inst_22105);
var inst_22112 = cljs.core.nth.call(null,inst_22111,(0),null);
var inst_22113 = cljs.core.nth.call(null,inst_22111,(1),null);
var state_22221__$1 = (function (){var statearr_22293 = state_22221;
(statearr_22293[(26)] = inst_22112);

return statearr_22293;
})();
if(cljs.core.truth_(inst_22113)){
var statearr_22294_22357 = state_22221__$1;
(statearr_22294_22357[(1)] = (13));

} else {
var statearr_22295_22358 = state_22221__$1;
(statearr_22295_22358[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (18))){
var inst_22146 = (state_22221[(2)]);
var state_22221__$1 = state_22221;
var statearr_22296_22359 = state_22221__$1;
(statearr_22296_22359[(2)] = inst_22146);

(statearr_22296_22359[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (42))){
var state_22221__$1 = state_22221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22221__$1,(45),dchan);
} else {
if((state_val_22222 === (37))){
var inst_22189 = (state_22221[(23)]);
var inst_22180 = (state_22221[(25)]);
var inst_22093 = (state_22221[(10)]);
var inst_22189__$1 = cljs.core.first.call(null,inst_22180);
var inst_22190 = cljs.core.async.put_BANG_.call(null,inst_22189__$1,inst_22093,done);
var state_22221__$1 = (function (){var statearr_22297 = state_22221;
(statearr_22297[(23)] = inst_22189__$1);

return statearr_22297;
})();
if(cljs.core.truth_(inst_22190)){
var statearr_22298_22360 = state_22221__$1;
(statearr_22298_22360[(1)] = (39));

} else {
var statearr_22299_22361 = state_22221__$1;
(statearr_22299_22361[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22222 === (8))){
var inst_22104 = (state_22221[(14)]);
var inst_22105 = (state_22221[(16)]);
var inst_22107 = (inst_22105 < inst_22104);
var inst_22108 = inst_22107;
var state_22221__$1 = state_22221;
if(cljs.core.truth_(inst_22108)){
var statearr_22300_22362 = state_22221__$1;
(statearr_22300_22362[(1)] = (10));

} else {
var statearr_22301_22363 = state_22221__$1;
(statearr_22301_22363[(1)] = (11));

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
});})(c__16755__auto___22309,cs,m,dchan,dctr,done))
;
return ((function (switch__16690__auto__,c__16755__auto___22309,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__16691__auto__ = null;
var cljs$core$async$mult_$_state_machine__16691__auto____0 = (function (){
var statearr_22305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22305[(0)] = cljs$core$async$mult_$_state_machine__16691__auto__);

(statearr_22305[(1)] = (1));

return statearr_22305;
});
var cljs$core$async$mult_$_state_machine__16691__auto____1 = (function (state_22221){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_22221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e22306){if((e22306 instanceof Object)){
var ex__16694__auto__ = e22306;
var statearr_22307_22364 = state_22221;
(statearr_22307_22364[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22365 = state_22221;
state_22221 = G__22365;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16691__auto__ = function(state_22221){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16691__auto____1.call(this,state_22221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16691__auto____0;
cljs$core$async$mult_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16691__auto____1;
return cljs$core$async$mult_$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___22309,cs,m,dchan,dctr,done))
})();
var state__16757__auto__ = (function (){var statearr_22308 = f__16756__auto__.call(null);
(statearr_22308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___22309);

return statearr_22308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___22309,cs,m,dchan,dctr,done))
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
var args22366 = [];
var len__15730__auto___22369 = arguments.length;
var i__15731__auto___22370 = (0);
while(true){
if((i__15731__auto___22370 < len__15730__auto___22369)){
args22366.push((arguments[i__15731__auto___22370]));

var G__22371 = (i__15731__auto___22370 + (1));
i__15731__auto___22370 = G__22371;
continue;
} else {
}
break;
}

var G__22368 = args22366.length;
switch (G__22368) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22366.length)].join('')));

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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m,ch);
} else {
var m__15328__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m,ch);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m,ch);
} else {
var m__15328__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m,ch);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m);
} else {
var m__15328__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m,state_map);
} else {
var m__15328__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m,state_map);
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
var x__15327__auto__ = (((m == null))?null:m);
var m__15328__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,m,mode);
} else {
var m__15328__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__15737__auto__ = [];
var len__15730__auto___22383 = arguments.length;
var i__15731__auto___22384 = (0);
while(true){
if((i__15731__auto___22384 < len__15730__auto___22383)){
args__15737__auto__.push((arguments[i__15731__auto___22384]));

var G__22385 = (i__15731__auto___22384 + (1));
i__15731__auto___22384 = G__22385;
continue;
} else {
}
break;
}

var argseq__15738__auto__ = ((((3) < args__15737__auto__.length))?(new cljs.core.IndexedSeq(args__15737__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__15738__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22377){
var map__22378 = p__22377;
var map__22378__$1 = ((((!((map__22378 == null)))?((((map__22378.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22378.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22378):map__22378);
var opts = map__22378__$1;
var statearr_22380_22386 = state;
(statearr_22380_22386[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22378,map__22378__$1,opts){
return (function (val){
var statearr_22381_22387 = state;
(statearr_22381_22387[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22378,map__22378__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22382_22388 = state;
(statearr_22382_22388[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22373){
var G__22374 = cljs.core.first.call(null,seq22373);
var seq22373__$1 = cljs.core.next.call(null,seq22373);
var G__22375 = cljs.core.first.call(null,seq22373__$1);
var seq22373__$2 = cljs.core.next.call(null,seq22373__$1);
var G__22376 = cljs.core.first.call(null,seq22373__$2);
var seq22373__$3 = cljs.core.next.call(null,seq22373__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22374,G__22375,G__22376,seq22373__$3);
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
if(typeof cljs.core.async.t_cljs$core$async22552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22552 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22553){
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
this.meta22553 = meta22553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22554,meta22553__$1){
var self__ = this;
var _22554__$1 = this;
return (new cljs.core.async.t_cljs$core$async22552(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22553__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22554){
var self__ = this;
var _22554__$1 = this;
return self__.meta22553;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async22552.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22553","meta22553",-1325893597,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22552";

cljs.core.async.t_cljs$core$async22552.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async22552");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22552 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22552(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22553){
return (new cljs.core.async.t_cljs$core$async22552(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22553));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22552(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16755__auto___22715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___22715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___22715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22652){
var state_val_22653 = (state_22652[(1)]);
if((state_val_22653 === (7))){
var inst_22570 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22654_22716 = state_22652__$1;
(statearr_22654_22716[(2)] = inst_22570);

(statearr_22654_22716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (20))){
var inst_22582 = (state_22652[(7)]);
var state_22652__$1 = state_22652;
var statearr_22655_22717 = state_22652__$1;
(statearr_22655_22717[(2)] = inst_22582);

(statearr_22655_22717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (27))){
var state_22652__$1 = state_22652;
var statearr_22656_22718 = state_22652__$1;
(statearr_22656_22718[(2)] = null);

(statearr_22656_22718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (1))){
var inst_22558 = (state_22652[(8)]);
var inst_22558__$1 = calc_state.call(null);
var inst_22560 = (inst_22558__$1 == null);
var inst_22561 = cljs.core.not.call(null,inst_22560);
var state_22652__$1 = (function (){var statearr_22657 = state_22652;
(statearr_22657[(8)] = inst_22558__$1);

return statearr_22657;
})();
if(inst_22561){
var statearr_22658_22719 = state_22652__$1;
(statearr_22658_22719[(1)] = (2));

} else {
var statearr_22659_22720 = state_22652__$1;
(statearr_22659_22720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (24))){
var inst_22626 = (state_22652[(9)]);
var inst_22605 = (state_22652[(10)]);
var inst_22612 = (state_22652[(11)]);
var inst_22626__$1 = inst_22605.call(null,inst_22612);
var state_22652__$1 = (function (){var statearr_22660 = state_22652;
(statearr_22660[(9)] = inst_22626__$1);

return statearr_22660;
})();
if(cljs.core.truth_(inst_22626__$1)){
var statearr_22661_22721 = state_22652__$1;
(statearr_22661_22721[(1)] = (29));

} else {
var statearr_22662_22722 = state_22652__$1;
(statearr_22662_22722[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (4))){
var inst_22573 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22573)){
var statearr_22663_22723 = state_22652__$1;
(statearr_22663_22723[(1)] = (8));

} else {
var statearr_22664_22724 = state_22652__$1;
(statearr_22664_22724[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (15))){
var inst_22599 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22599)){
var statearr_22665_22725 = state_22652__$1;
(statearr_22665_22725[(1)] = (19));

} else {
var statearr_22666_22726 = state_22652__$1;
(statearr_22666_22726[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (21))){
var inst_22604 = (state_22652[(12)]);
var inst_22604__$1 = (state_22652[(2)]);
var inst_22605 = cljs.core.get.call(null,inst_22604__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22606 = cljs.core.get.call(null,inst_22604__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22607 = cljs.core.get.call(null,inst_22604__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22652__$1 = (function (){var statearr_22667 = state_22652;
(statearr_22667[(10)] = inst_22605);

(statearr_22667[(12)] = inst_22604__$1);

(statearr_22667[(13)] = inst_22606);

return statearr_22667;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22652__$1,(22),inst_22607);
} else {
if((state_val_22653 === (31))){
var inst_22634 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22634)){
var statearr_22668_22727 = state_22652__$1;
(statearr_22668_22727[(1)] = (32));

} else {
var statearr_22669_22728 = state_22652__$1;
(statearr_22669_22728[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (32))){
var inst_22611 = (state_22652[(14)]);
var state_22652__$1 = state_22652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22652__$1,(35),out,inst_22611);
} else {
if((state_val_22653 === (33))){
var inst_22604 = (state_22652[(12)]);
var inst_22582 = inst_22604;
var state_22652__$1 = (function (){var statearr_22670 = state_22652;
(statearr_22670[(7)] = inst_22582);

return statearr_22670;
})();
var statearr_22671_22729 = state_22652__$1;
(statearr_22671_22729[(2)] = null);

(statearr_22671_22729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (13))){
var inst_22582 = (state_22652[(7)]);
var inst_22589 = inst_22582.cljs$lang$protocol_mask$partition0$;
var inst_22590 = (inst_22589 & (64));
var inst_22591 = inst_22582.cljs$core$ISeq$;
var inst_22592 = (inst_22590) || (inst_22591);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22592)){
var statearr_22672_22730 = state_22652__$1;
(statearr_22672_22730[(1)] = (16));

} else {
var statearr_22673_22731 = state_22652__$1;
(statearr_22673_22731[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (22))){
var inst_22611 = (state_22652[(14)]);
var inst_22612 = (state_22652[(11)]);
var inst_22610 = (state_22652[(2)]);
var inst_22611__$1 = cljs.core.nth.call(null,inst_22610,(0),null);
var inst_22612__$1 = cljs.core.nth.call(null,inst_22610,(1),null);
var inst_22613 = (inst_22611__$1 == null);
var inst_22614 = cljs.core._EQ_.call(null,inst_22612__$1,change);
var inst_22615 = (inst_22613) || (inst_22614);
var state_22652__$1 = (function (){var statearr_22674 = state_22652;
(statearr_22674[(14)] = inst_22611__$1);

(statearr_22674[(11)] = inst_22612__$1);

return statearr_22674;
})();
if(cljs.core.truth_(inst_22615)){
var statearr_22675_22732 = state_22652__$1;
(statearr_22675_22732[(1)] = (23));

} else {
var statearr_22676_22733 = state_22652__$1;
(statearr_22676_22733[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (36))){
var inst_22604 = (state_22652[(12)]);
var inst_22582 = inst_22604;
var state_22652__$1 = (function (){var statearr_22677 = state_22652;
(statearr_22677[(7)] = inst_22582);

return statearr_22677;
})();
var statearr_22678_22734 = state_22652__$1;
(statearr_22678_22734[(2)] = null);

(statearr_22678_22734[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (29))){
var inst_22626 = (state_22652[(9)]);
var state_22652__$1 = state_22652;
var statearr_22679_22735 = state_22652__$1;
(statearr_22679_22735[(2)] = inst_22626);

(statearr_22679_22735[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (6))){
var state_22652__$1 = state_22652;
var statearr_22680_22736 = state_22652__$1;
(statearr_22680_22736[(2)] = false);

(statearr_22680_22736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (28))){
var inst_22622 = (state_22652[(2)]);
var inst_22623 = calc_state.call(null);
var inst_22582 = inst_22623;
var state_22652__$1 = (function (){var statearr_22681 = state_22652;
(statearr_22681[(15)] = inst_22622);

(statearr_22681[(7)] = inst_22582);

return statearr_22681;
})();
var statearr_22682_22737 = state_22652__$1;
(statearr_22682_22737[(2)] = null);

(statearr_22682_22737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (25))){
var inst_22648 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22683_22738 = state_22652__$1;
(statearr_22683_22738[(2)] = inst_22648);

(statearr_22683_22738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (34))){
var inst_22646 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22684_22739 = state_22652__$1;
(statearr_22684_22739[(2)] = inst_22646);

(statearr_22684_22739[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (17))){
var state_22652__$1 = state_22652;
var statearr_22685_22740 = state_22652__$1;
(statearr_22685_22740[(2)] = false);

(statearr_22685_22740[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (3))){
var state_22652__$1 = state_22652;
var statearr_22686_22741 = state_22652__$1;
(statearr_22686_22741[(2)] = false);

(statearr_22686_22741[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (12))){
var inst_22650 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22652__$1,inst_22650);
} else {
if((state_val_22653 === (2))){
var inst_22558 = (state_22652[(8)]);
var inst_22563 = inst_22558.cljs$lang$protocol_mask$partition0$;
var inst_22564 = (inst_22563 & (64));
var inst_22565 = inst_22558.cljs$core$ISeq$;
var inst_22566 = (inst_22564) || (inst_22565);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22566)){
var statearr_22687_22742 = state_22652__$1;
(statearr_22687_22742[(1)] = (5));

} else {
var statearr_22688_22743 = state_22652__$1;
(statearr_22688_22743[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (23))){
var inst_22611 = (state_22652[(14)]);
var inst_22617 = (inst_22611 == null);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22617)){
var statearr_22689_22744 = state_22652__$1;
(statearr_22689_22744[(1)] = (26));

} else {
var statearr_22690_22745 = state_22652__$1;
(statearr_22690_22745[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (35))){
var inst_22637 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
if(cljs.core.truth_(inst_22637)){
var statearr_22691_22746 = state_22652__$1;
(statearr_22691_22746[(1)] = (36));

} else {
var statearr_22692_22747 = state_22652__$1;
(statearr_22692_22747[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (19))){
var inst_22582 = (state_22652[(7)]);
var inst_22601 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22582);
var state_22652__$1 = state_22652;
var statearr_22693_22748 = state_22652__$1;
(statearr_22693_22748[(2)] = inst_22601);

(statearr_22693_22748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (11))){
var inst_22582 = (state_22652[(7)]);
var inst_22586 = (inst_22582 == null);
var inst_22587 = cljs.core.not.call(null,inst_22586);
var state_22652__$1 = state_22652;
if(inst_22587){
var statearr_22694_22749 = state_22652__$1;
(statearr_22694_22749[(1)] = (13));

} else {
var statearr_22695_22750 = state_22652__$1;
(statearr_22695_22750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (9))){
var inst_22558 = (state_22652[(8)]);
var state_22652__$1 = state_22652;
var statearr_22696_22751 = state_22652__$1;
(statearr_22696_22751[(2)] = inst_22558);

(statearr_22696_22751[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (5))){
var state_22652__$1 = state_22652;
var statearr_22697_22752 = state_22652__$1;
(statearr_22697_22752[(2)] = true);

(statearr_22697_22752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (14))){
var state_22652__$1 = state_22652;
var statearr_22698_22753 = state_22652__$1;
(statearr_22698_22753[(2)] = false);

(statearr_22698_22753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (26))){
var inst_22612 = (state_22652[(11)]);
var inst_22619 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22612);
var state_22652__$1 = state_22652;
var statearr_22699_22754 = state_22652__$1;
(statearr_22699_22754[(2)] = inst_22619);

(statearr_22699_22754[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (16))){
var state_22652__$1 = state_22652;
var statearr_22700_22755 = state_22652__$1;
(statearr_22700_22755[(2)] = true);

(statearr_22700_22755[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (38))){
var inst_22642 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22701_22756 = state_22652__$1;
(statearr_22701_22756[(2)] = inst_22642);

(statearr_22701_22756[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (30))){
var inst_22605 = (state_22652[(10)]);
var inst_22612 = (state_22652[(11)]);
var inst_22606 = (state_22652[(13)]);
var inst_22629 = cljs.core.empty_QMARK_.call(null,inst_22605);
var inst_22630 = inst_22606.call(null,inst_22612);
var inst_22631 = cljs.core.not.call(null,inst_22630);
var inst_22632 = (inst_22629) && (inst_22631);
var state_22652__$1 = state_22652;
var statearr_22702_22757 = state_22652__$1;
(statearr_22702_22757[(2)] = inst_22632);

(statearr_22702_22757[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (10))){
var inst_22558 = (state_22652[(8)]);
var inst_22578 = (state_22652[(2)]);
var inst_22579 = cljs.core.get.call(null,inst_22578,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22580 = cljs.core.get.call(null,inst_22578,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22581 = cljs.core.get.call(null,inst_22578,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22582 = inst_22558;
var state_22652__$1 = (function (){var statearr_22703 = state_22652;
(statearr_22703[(16)] = inst_22579);

(statearr_22703[(7)] = inst_22582);

(statearr_22703[(17)] = inst_22580);

(statearr_22703[(18)] = inst_22581);

return statearr_22703;
})();
var statearr_22704_22758 = state_22652__$1;
(statearr_22704_22758[(2)] = null);

(statearr_22704_22758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (18))){
var inst_22596 = (state_22652[(2)]);
var state_22652__$1 = state_22652;
var statearr_22705_22759 = state_22652__$1;
(statearr_22705_22759[(2)] = inst_22596);

(statearr_22705_22759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (37))){
var state_22652__$1 = state_22652;
var statearr_22706_22760 = state_22652__$1;
(statearr_22706_22760[(2)] = null);

(statearr_22706_22760[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22653 === (8))){
var inst_22558 = (state_22652[(8)]);
var inst_22575 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22558);
var state_22652__$1 = state_22652;
var statearr_22707_22761 = state_22652__$1;
(statearr_22707_22761[(2)] = inst_22575);

(statearr_22707_22761[(1)] = (10));


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
});})(c__16755__auto___22715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__16690__auto__,c__16755__auto___22715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__16691__auto__ = null;
var cljs$core$async$mix_$_state_machine__16691__auto____0 = (function (){
var statearr_22711 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22711[(0)] = cljs$core$async$mix_$_state_machine__16691__auto__);

(statearr_22711[(1)] = (1));

return statearr_22711;
});
var cljs$core$async$mix_$_state_machine__16691__auto____1 = (function (state_22652){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_22652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e22712){if((e22712 instanceof Object)){
var ex__16694__auto__ = e22712;
var statearr_22713_22762 = state_22652;
(statearr_22713_22762[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22763 = state_22652;
state_22652 = G__22763;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16691__auto__ = function(state_22652){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16691__auto____1.call(this,state_22652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16691__auto____0;
cljs$core$async$mix_$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16691__auto____1;
return cljs$core$async$mix_$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___22715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__16757__auto__ = (function (){var statearr_22714 = f__16756__auto__.call(null);
(statearr_22714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___22715);

return statearr_22714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___22715,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__15327__auto__ = (((p == null))?null:p);
var m__15328__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__15328__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__15327__auto__ = (((p == null))?null:p);
var m__15328__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,p,v,ch);
} else {
var m__15328__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22764 = [];
var len__15730__auto___22767 = arguments.length;
var i__15731__auto___22768 = (0);
while(true){
if((i__15731__auto___22768 < len__15730__auto___22767)){
args22764.push((arguments[i__15731__auto___22768]));

var G__22769 = (i__15731__auto___22768 + (1));
i__15731__auto___22768 = G__22769;
continue;
} else {
}
break;
}

var G__22766 = args22764.length;
switch (G__22766) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22764.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__15327__auto__ = (((p == null))?null:p);
var m__15328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,p);
} else {
var m__15328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,p);
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
var x__15327__auto__ = (((p == null))?null:p);
var m__15328__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15327__auto__)]);
if(!((m__15328__auto__ == null))){
return m__15328__auto__.call(null,p,v);
} else {
var m__15328__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__15328__auto____$1 == null))){
return m__15328__auto____$1.call(null,p,v);
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
var args22772 = [];
var len__15730__auto___22897 = arguments.length;
var i__15731__auto___22898 = (0);
while(true){
if((i__15731__auto___22898 < len__15730__auto___22897)){
args22772.push((arguments[i__15731__auto___22898]));

var G__22899 = (i__15731__auto___22898 + (1));
i__15731__auto___22898 = G__22899;
continue;
} else {
}
break;
}

var G__22774 = args22772.length;
switch (G__22774) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22772.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__14672__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__14672__auto__)){
return or__14672__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14672__auto__,mults){
return (function (p1__22771_SHARP_){
if(cljs.core.truth_(p1__22771_SHARP_.call(null,topic))){
return p1__22771_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22771_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14672__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22775 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22776){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22776 = meta22776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22777,meta22776__$1){
var self__ = this;
var _22777__$1 = this;
return (new cljs.core.async.t_cljs$core$async22775(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22776__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22777){
var self__ = this;
var _22777__$1 = this;
return self__.meta22776;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22776","meta22776",-730807322,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22775";

cljs.core.async.t_cljs$core$async22775.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async22775");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22775 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22775(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22776){
return (new cljs.core.async.t_cljs$core$async22775(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22776));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22775(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16755__auto___22901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___22901,mults,ensure_mult,p){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___22901,mults,ensure_mult,p){
return (function (state_22849){
var state_val_22850 = (state_22849[(1)]);
if((state_val_22850 === (7))){
var inst_22845 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22851_22902 = state_22849__$1;
(statearr_22851_22902[(2)] = inst_22845);

(statearr_22851_22902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (20))){
var state_22849__$1 = state_22849;
var statearr_22852_22903 = state_22849__$1;
(statearr_22852_22903[(2)] = null);

(statearr_22852_22903[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (1))){
var state_22849__$1 = state_22849;
var statearr_22853_22904 = state_22849__$1;
(statearr_22853_22904[(2)] = null);

(statearr_22853_22904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (24))){
var inst_22828 = (state_22849[(7)]);
var inst_22837 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22828);
var state_22849__$1 = state_22849;
var statearr_22854_22905 = state_22849__$1;
(statearr_22854_22905[(2)] = inst_22837);

(statearr_22854_22905[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (4))){
var inst_22780 = (state_22849[(8)]);
var inst_22780__$1 = (state_22849[(2)]);
var inst_22781 = (inst_22780__$1 == null);
var state_22849__$1 = (function (){var statearr_22855 = state_22849;
(statearr_22855[(8)] = inst_22780__$1);

return statearr_22855;
})();
if(cljs.core.truth_(inst_22781)){
var statearr_22856_22906 = state_22849__$1;
(statearr_22856_22906[(1)] = (5));

} else {
var statearr_22857_22907 = state_22849__$1;
(statearr_22857_22907[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (15))){
var inst_22822 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22858_22908 = state_22849__$1;
(statearr_22858_22908[(2)] = inst_22822);

(statearr_22858_22908[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (21))){
var inst_22842 = (state_22849[(2)]);
var state_22849__$1 = (function (){var statearr_22859 = state_22849;
(statearr_22859[(9)] = inst_22842);

return statearr_22859;
})();
var statearr_22860_22909 = state_22849__$1;
(statearr_22860_22909[(2)] = null);

(statearr_22860_22909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (13))){
var inst_22804 = (state_22849[(10)]);
var inst_22806 = cljs.core.chunked_seq_QMARK_.call(null,inst_22804);
var state_22849__$1 = state_22849;
if(inst_22806){
var statearr_22861_22910 = state_22849__$1;
(statearr_22861_22910[(1)] = (16));

} else {
var statearr_22862_22911 = state_22849__$1;
(statearr_22862_22911[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (22))){
var inst_22834 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
if(cljs.core.truth_(inst_22834)){
var statearr_22863_22912 = state_22849__$1;
(statearr_22863_22912[(1)] = (23));

} else {
var statearr_22864_22913 = state_22849__$1;
(statearr_22864_22913[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (6))){
var inst_22828 = (state_22849[(7)]);
var inst_22830 = (state_22849[(11)]);
var inst_22780 = (state_22849[(8)]);
var inst_22828__$1 = topic_fn.call(null,inst_22780);
var inst_22829 = cljs.core.deref.call(null,mults);
var inst_22830__$1 = cljs.core.get.call(null,inst_22829,inst_22828__$1);
var state_22849__$1 = (function (){var statearr_22865 = state_22849;
(statearr_22865[(7)] = inst_22828__$1);

(statearr_22865[(11)] = inst_22830__$1);

return statearr_22865;
})();
if(cljs.core.truth_(inst_22830__$1)){
var statearr_22866_22914 = state_22849__$1;
(statearr_22866_22914[(1)] = (19));

} else {
var statearr_22867_22915 = state_22849__$1;
(statearr_22867_22915[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (25))){
var inst_22839 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22868_22916 = state_22849__$1;
(statearr_22868_22916[(2)] = inst_22839);

(statearr_22868_22916[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (17))){
var inst_22804 = (state_22849[(10)]);
var inst_22813 = cljs.core.first.call(null,inst_22804);
var inst_22814 = cljs.core.async.muxch_STAR_.call(null,inst_22813);
var inst_22815 = cljs.core.async.close_BANG_.call(null,inst_22814);
var inst_22816 = cljs.core.next.call(null,inst_22804);
var inst_22790 = inst_22816;
var inst_22791 = null;
var inst_22792 = (0);
var inst_22793 = (0);
var state_22849__$1 = (function (){var statearr_22869 = state_22849;
(statearr_22869[(12)] = inst_22792);

(statearr_22869[(13)] = inst_22815);

(statearr_22869[(14)] = inst_22791);

(statearr_22869[(15)] = inst_22793);

(statearr_22869[(16)] = inst_22790);

return statearr_22869;
})();
var statearr_22870_22917 = state_22849__$1;
(statearr_22870_22917[(2)] = null);

(statearr_22870_22917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (3))){
var inst_22847 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22849__$1,inst_22847);
} else {
if((state_val_22850 === (12))){
var inst_22824 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22871_22918 = state_22849__$1;
(statearr_22871_22918[(2)] = inst_22824);

(statearr_22871_22918[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (2))){
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22849__$1,(4),ch);
} else {
if((state_val_22850 === (23))){
var state_22849__$1 = state_22849;
var statearr_22872_22919 = state_22849__$1;
(statearr_22872_22919[(2)] = null);

(statearr_22872_22919[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (19))){
var inst_22830 = (state_22849[(11)]);
var inst_22780 = (state_22849[(8)]);
var inst_22832 = cljs.core.async.muxch_STAR_.call(null,inst_22830);
var state_22849__$1 = state_22849;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22849__$1,(22),inst_22832,inst_22780);
} else {
if((state_val_22850 === (11))){
var inst_22804 = (state_22849[(10)]);
var inst_22790 = (state_22849[(16)]);
var inst_22804__$1 = cljs.core.seq.call(null,inst_22790);
var state_22849__$1 = (function (){var statearr_22873 = state_22849;
(statearr_22873[(10)] = inst_22804__$1);

return statearr_22873;
})();
if(inst_22804__$1){
var statearr_22874_22920 = state_22849__$1;
(statearr_22874_22920[(1)] = (13));

} else {
var statearr_22875_22921 = state_22849__$1;
(statearr_22875_22921[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (9))){
var inst_22826 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22876_22922 = state_22849__$1;
(statearr_22876_22922[(2)] = inst_22826);

(statearr_22876_22922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (5))){
var inst_22787 = cljs.core.deref.call(null,mults);
var inst_22788 = cljs.core.vals.call(null,inst_22787);
var inst_22789 = cljs.core.seq.call(null,inst_22788);
var inst_22790 = inst_22789;
var inst_22791 = null;
var inst_22792 = (0);
var inst_22793 = (0);
var state_22849__$1 = (function (){var statearr_22877 = state_22849;
(statearr_22877[(12)] = inst_22792);

(statearr_22877[(14)] = inst_22791);

(statearr_22877[(15)] = inst_22793);

(statearr_22877[(16)] = inst_22790);

return statearr_22877;
})();
var statearr_22878_22923 = state_22849__$1;
(statearr_22878_22923[(2)] = null);

(statearr_22878_22923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (14))){
var state_22849__$1 = state_22849;
var statearr_22882_22924 = state_22849__$1;
(statearr_22882_22924[(2)] = null);

(statearr_22882_22924[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (16))){
var inst_22804 = (state_22849[(10)]);
var inst_22808 = cljs.core.chunk_first.call(null,inst_22804);
var inst_22809 = cljs.core.chunk_rest.call(null,inst_22804);
var inst_22810 = cljs.core.count.call(null,inst_22808);
var inst_22790 = inst_22809;
var inst_22791 = inst_22808;
var inst_22792 = inst_22810;
var inst_22793 = (0);
var state_22849__$1 = (function (){var statearr_22883 = state_22849;
(statearr_22883[(12)] = inst_22792);

(statearr_22883[(14)] = inst_22791);

(statearr_22883[(15)] = inst_22793);

(statearr_22883[(16)] = inst_22790);

return statearr_22883;
})();
var statearr_22884_22925 = state_22849__$1;
(statearr_22884_22925[(2)] = null);

(statearr_22884_22925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (10))){
var inst_22792 = (state_22849[(12)]);
var inst_22791 = (state_22849[(14)]);
var inst_22793 = (state_22849[(15)]);
var inst_22790 = (state_22849[(16)]);
var inst_22798 = cljs.core._nth.call(null,inst_22791,inst_22793);
var inst_22799 = cljs.core.async.muxch_STAR_.call(null,inst_22798);
var inst_22800 = cljs.core.async.close_BANG_.call(null,inst_22799);
var inst_22801 = (inst_22793 + (1));
var tmp22879 = inst_22792;
var tmp22880 = inst_22791;
var tmp22881 = inst_22790;
var inst_22790__$1 = tmp22881;
var inst_22791__$1 = tmp22880;
var inst_22792__$1 = tmp22879;
var inst_22793__$1 = inst_22801;
var state_22849__$1 = (function (){var statearr_22885 = state_22849;
(statearr_22885[(12)] = inst_22792__$1);

(statearr_22885[(14)] = inst_22791__$1);

(statearr_22885[(15)] = inst_22793__$1);

(statearr_22885[(17)] = inst_22800);

(statearr_22885[(16)] = inst_22790__$1);

return statearr_22885;
})();
var statearr_22886_22926 = state_22849__$1;
(statearr_22886_22926[(2)] = null);

(statearr_22886_22926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (18))){
var inst_22819 = (state_22849[(2)]);
var state_22849__$1 = state_22849;
var statearr_22887_22927 = state_22849__$1;
(statearr_22887_22927[(2)] = inst_22819);

(statearr_22887_22927[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22850 === (8))){
var inst_22792 = (state_22849[(12)]);
var inst_22793 = (state_22849[(15)]);
var inst_22795 = (inst_22793 < inst_22792);
var inst_22796 = inst_22795;
var state_22849__$1 = state_22849;
if(cljs.core.truth_(inst_22796)){
var statearr_22888_22928 = state_22849__$1;
(statearr_22888_22928[(1)] = (10));

} else {
var statearr_22889_22929 = state_22849__$1;
(statearr_22889_22929[(1)] = (11));

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
});})(c__16755__auto___22901,mults,ensure_mult,p))
;
return ((function (switch__16690__auto__,c__16755__auto___22901,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_22893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22893[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_22893[(1)] = (1));

return statearr_22893;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_22849){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_22849);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object)){
var ex__16694__auto__ = e22894;
var statearr_22895_22930 = state_22849;
(statearr_22895_22930[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22931 = state_22849;
state_22849 = G__22931;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_22849){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_22849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___22901,mults,ensure_mult,p))
})();
var state__16757__auto__ = (function (){var statearr_22896 = f__16756__auto__.call(null);
(statearr_22896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___22901);

return statearr_22896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___22901,mults,ensure_mult,p))
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
var args22932 = [];
var len__15730__auto___22935 = arguments.length;
var i__15731__auto___22936 = (0);
while(true){
if((i__15731__auto___22936 < len__15730__auto___22935)){
args22932.push((arguments[i__15731__auto___22936]));

var G__22937 = (i__15731__auto___22936 + (1));
i__15731__auto___22936 = G__22937;
continue;
} else {
}
break;
}

var G__22934 = args22932.length;
switch (G__22934) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22932.length)].join('')));

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
var args22939 = [];
var len__15730__auto___22942 = arguments.length;
var i__15731__auto___22943 = (0);
while(true){
if((i__15731__auto___22943 < len__15730__auto___22942)){
args22939.push((arguments[i__15731__auto___22943]));

var G__22944 = (i__15731__auto___22943 + (1));
i__15731__auto___22943 = G__22944;
continue;
} else {
}
break;
}

var G__22941 = args22939.length;
switch (G__22941) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22939.length)].join('')));

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
var args22946 = [];
var len__15730__auto___23017 = arguments.length;
var i__15731__auto___23018 = (0);
while(true){
if((i__15731__auto___23018 < len__15730__auto___23017)){
args22946.push((arguments[i__15731__auto___23018]));

var G__23019 = (i__15731__auto___23018 + (1));
i__15731__auto___23018 = G__23019;
continue;
} else {
}
break;
}

var G__22948 = args22946.length;
switch (G__22948) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22946.length)].join('')));

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
var c__16755__auto___23021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23021,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23021,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22987){
var state_val_22988 = (state_22987[(1)]);
if((state_val_22988 === (7))){
var state_22987__$1 = state_22987;
var statearr_22989_23022 = state_22987__$1;
(statearr_22989_23022[(2)] = null);

(statearr_22989_23022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (1))){
var state_22987__$1 = state_22987;
var statearr_22990_23023 = state_22987__$1;
(statearr_22990_23023[(2)] = null);

(statearr_22990_23023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (4))){
var inst_22951 = (state_22987[(7)]);
var inst_22953 = (inst_22951 < cnt);
var state_22987__$1 = state_22987;
if(cljs.core.truth_(inst_22953)){
var statearr_22991_23024 = state_22987__$1;
(statearr_22991_23024[(1)] = (6));

} else {
var statearr_22992_23025 = state_22987__$1;
(statearr_22992_23025[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (15))){
var inst_22983 = (state_22987[(2)]);
var state_22987__$1 = state_22987;
var statearr_22993_23026 = state_22987__$1;
(statearr_22993_23026[(2)] = inst_22983);

(statearr_22993_23026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (13))){
var inst_22976 = cljs.core.async.close_BANG_.call(null,out);
var state_22987__$1 = state_22987;
var statearr_22994_23027 = state_22987__$1;
(statearr_22994_23027[(2)] = inst_22976);

(statearr_22994_23027[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (6))){
var state_22987__$1 = state_22987;
var statearr_22995_23028 = state_22987__$1;
(statearr_22995_23028[(2)] = null);

(statearr_22995_23028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (3))){
var inst_22985 = (state_22987[(2)]);
var state_22987__$1 = state_22987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22987__$1,inst_22985);
} else {
if((state_val_22988 === (12))){
var inst_22973 = (state_22987[(8)]);
var inst_22973__$1 = (state_22987[(2)]);
var inst_22974 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22973__$1);
var state_22987__$1 = (function (){var statearr_22996 = state_22987;
(statearr_22996[(8)] = inst_22973__$1);

return statearr_22996;
})();
if(cljs.core.truth_(inst_22974)){
var statearr_22997_23029 = state_22987__$1;
(statearr_22997_23029[(1)] = (13));

} else {
var statearr_22998_23030 = state_22987__$1;
(statearr_22998_23030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (2))){
var inst_22950 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22951 = (0);
var state_22987__$1 = (function (){var statearr_22999 = state_22987;
(statearr_22999[(7)] = inst_22951);

(statearr_22999[(9)] = inst_22950);

return statearr_22999;
})();
var statearr_23000_23031 = state_22987__$1;
(statearr_23000_23031[(2)] = null);

(statearr_23000_23031[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (11))){
var inst_22951 = (state_22987[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22987,(10),Object,null,(9));
var inst_22960 = chs__$1.call(null,inst_22951);
var inst_22961 = done.call(null,inst_22951);
var inst_22962 = cljs.core.async.take_BANG_.call(null,inst_22960,inst_22961);
var state_22987__$1 = state_22987;
var statearr_23001_23032 = state_22987__$1;
(statearr_23001_23032[(2)] = inst_22962);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (9))){
var inst_22951 = (state_22987[(7)]);
var inst_22964 = (state_22987[(2)]);
var inst_22965 = (inst_22951 + (1));
var inst_22951__$1 = inst_22965;
var state_22987__$1 = (function (){var statearr_23002 = state_22987;
(statearr_23002[(7)] = inst_22951__$1);

(statearr_23002[(10)] = inst_22964);

return statearr_23002;
})();
var statearr_23003_23033 = state_22987__$1;
(statearr_23003_23033[(2)] = null);

(statearr_23003_23033[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (5))){
var inst_22971 = (state_22987[(2)]);
var state_22987__$1 = (function (){var statearr_23004 = state_22987;
(statearr_23004[(11)] = inst_22971);

return statearr_23004;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22987__$1,(12),dchan);
} else {
if((state_val_22988 === (14))){
var inst_22973 = (state_22987[(8)]);
var inst_22978 = cljs.core.apply.call(null,f,inst_22973);
var state_22987__$1 = state_22987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22987__$1,(16),out,inst_22978);
} else {
if((state_val_22988 === (16))){
var inst_22980 = (state_22987[(2)]);
var state_22987__$1 = (function (){var statearr_23005 = state_22987;
(statearr_23005[(12)] = inst_22980);

return statearr_23005;
})();
var statearr_23006_23034 = state_22987__$1;
(statearr_23006_23034[(2)] = null);

(statearr_23006_23034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (10))){
var inst_22955 = (state_22987[(2)]);
var inst_22956 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22987__$1 = (function (){var statearr_23007 = state_22987;
(statearr_23007[(13)] = inst_22955);

return statearr_23007;
})();
var statearr_23008_23035 = state_22987__$1;
(statearr_23008_23035[(2)] = inst_22956);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22987__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22988 === (8))){
var inst_22969 = (state_22987[(2)]);
var state_22987__$1 = state_22987;
var statearr_23009_23036 = state_22987__$1;
(statearr_23009_23036[(2)] = inst_22969);

(statearr_23009_23036[(1)] = (5));


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
});})(c__16755__auto___23021,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__16690__auto__,c__16755__auto___23021,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23013[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23013[(1)] = (1));

return statearr_23013;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_22987){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_22987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23014){if((e23014 instanceof Object)){
var ex__16694__auto__ = e23014;
var statearr_23015_23037 = state_22987;
(statearr_23015_23037[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23038 = state_22987;
state_22987 = G__23038;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_22987){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_22987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23021,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__16757__auto__ = (function (){var statearr_23016 = f__16756__auto__.call(null);
(statearr_23016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23021);

return statearr_23016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23021,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23040 = [];
var len__15730__auto___23096 = arguments.length;
var i__15731__auto___23097 = (0);
while(true){
if((i__15731__auto___23097 < len__15730__auto___23096)){
args23040.push((arguments[i__15731__auto___23097]));

var G__23098 = (i__15731__auto___23097 + (1));
i__15731__auto___23097 = G__23098;
continue;
} else {
}
break;
}

var G__23042 = args23040.length;
switch (G__23042) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23040.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16755__auto___23100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23100,out){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23100,out){
return (function (state_23072){
var state_val_23073 = (state_23072[(1)]);
if((state_val_23073 === (7))){
var inst_23051 = (state_23072[(7)]);
var inst_23052 = (state_23072[(8)]);
var inst_23051__$1 = (state_23072[(2)]);
var inst_23052__$1 = cljs.core.nth.call(null,inst_23051__$1,(0),null);
var inst_23053 = cljs.core.nth.call(null,inst_23051__$1,(1),null);
var inst_23054 = (inst_23052__$1 == null);
var state_23072__$1 = (function (){var statearr_23074 = state_23072;
(statearr_23074[(9)] = inst_23053);

(statearr_23074[(7)] = inst_23051__$1);

(statearr_23074[(8)] = inst_23052__$1);

return statearr_23074;
})();
if(cljs.core.truth_(inst_23054)){
var statearr_23075_23101 = state_23072__$1;
(statearr_23075_23101[(1)] = (8));

} else {
var statearr_23076_23102 = state_23072__$1;
(statearr_23076_23102[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (1))){
var inst_23043 = cljs.core.vec.call(null,chs);
var inst_23044 = inst_23043;
var state_23072__$1 = (function (){var statearr_23077 = state_23072;
(statearr_23077[(10)] = inst_23044);

return statearr_23077;
})();
var statearr_23078_23103 = state_23072__$1;
(statearr_23078_23103[(2)] = null);

(statearr_23078_23103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (4))){
var inst_23044 = (state_23072[(10)]);
var state_23072__$1 = state_23072;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23072__$1,(7),inst_23044);
} else {
if((state_val_23073 === (6))){
var inst_23068 = (state_23072[(2)]);
var state_23072__$1 = state_23072;
var statearr_23079_23104 = state_23072__$1;
(statearr_23079_23104[(2)] = inst_23068);

(statearr_23079_23104[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (3))){
var inst_23070 = (state_23072[(2)]);
var state_23072__$1 = state_23072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23072__$1,inst_23070);
} else {
if((state_val_23073 === (2))){
var inst_23044 = (state_23072[(10)]);
var inst_23046 = cljs.core.count.call(null,inst_23044);
var inst_23047 = (inst_23046 > (0));
var state_23072__$1 = state_23072;
if(cljs.core.truth_(inst_23047)){
var statearr_23081_23105 = state_23072__$1;
(statearr_23081_23105[(1)] = (4));

} else {
var statearr_23082_23106 = state_23072__$1;
(statearr_23082_23106[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (11))){
var inst_23044 = (state_23072[(10)]);
var inst_23061 = (state_23072[(2)]);
var tmp23080 = inst_23044;
var inst_23044__$1 = tmp23080;
var state_23072__$1 = (function (){var statearr_23083 = state_23072;
(statearr_23083[(10)] = inst_23044__$1);

(statearr_23083[(11)] = inst_23061);

return statearr_23083;
})();
var statearr_23084_23107 = state_23072__$1;
(statearr_23084_23107[(2)] = null);

(statearr_23084_23107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (9))){
var inst_23052 = (state_23072[(8)]);
var state_23072__$1 = state_23072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23072__$1,(11),out,inst_23052);
} else {
if((state_val_23073 === (5))){
var inst_23066 = cljs.core.async.close_BANG_.call(null,out);
var state_23072__$1 = state_23072;
var statearr_23085_23108 = state_23072__$1;
(statearr_23085_23108[(2)] = inst_23066);

(statearr_23085_23108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (10))){
var inst_23064 = (state_23072[(2)]);
var state_23072__$1 = state_23072;
var statearr_23086_23109 = state_23072__$1;
(statearr_23086_23109[(2)] = inst_23064);

(statearr_23086_23109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23073 === (8))){
var inst_23053 = (state_23072[(9)]);
var inst_23044 = (state_23072[(10)]);
var inst_23051 = (state_23072[(7)]);
var inst_23052 = (state_23072[(8)]);
var inst_23056 = (function (){var cs = inst_23044;
var vec__23049 = inst_23051;
var v = inst_23052;
var c = inst_23053;
return ((function (cs,vec__23049,v,c,inst_23053,inst_23044,inst_23051,inst_23052,state_val_23073,c__16755__auto___23100,out){
return (function (p1__23039_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23039_SHARP_);
});
;})(cs,vec__23049,v,c,inst_23053,inst_23044,inst_23051,inst_23052,state_val_23073,c__16755__auto___23100,out))
})();
var inst_23057 = cljs.core.filterv.call(null,inst_23056,inst_23044);
var inst_23044__$1 = inst_23057;
var state_23072__$1 = (function (){var statearr_23087 = state_23072;
(statearr_23087[(10)] = inst_23044__$1);

return statearr_23087;
})();
var statearr_23088_23110 = state_23072__$1;
(statearr_23088_23110[(2)] = null);

(statearr_23088_23110[(1)] = (2));


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
});})(c__16755__auto___23100,out))
;
return ((function (switch__16690__auto__,c__16755__auto___23100,out){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23092[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23092[(1)] = (1));

return statearr_23092;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_23072){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23093){if((e23093 instanceof Object)){
var ex__16694__auto__ = e23093;
var statearr_23094_23111 = state_23072;
(statearr_23094_23111[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23093;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23112 = state_23072;
state_23072 = G__23112;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_23072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_23072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23100,out))
})();
var state__16757__auto__ = (function (){var statearr_23095 = f__16756__auto__.call(null);
(statearr_23095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23100);

return statearr_23095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23100,out))
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
var args23113 = [];
var len__15730__auto___23162 = arguments.length;
var i__15731__auto___23163 = (0);
while(true){
if((i__15731__auto___23163 < len__15730__auto___23162)){
args23113.push((arguments[i__15731__auto___23163]));

var G__23164 = (i__15731__auto___23163 + (1));
i__15731__auto___23163 = G__23164;
continue;
} else {
}
break;
}

var G__23115 = args23113.length;
switch (G__23115) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23113.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16755__auto___23166 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23166,out){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23166,out){
return (function (state_23139){
var state_val_23140 = (state_23139[(1)]);
if((state_val_23140 === (7))){
var inst_23121 = (state_23139[(7)]);
var inst_23121__$1 = (state_23139[(2)]);
var inst_23122 = (inst_23121__$1 == null);
var inst_23123 = cljs.core.not.call(null,inst_23122);
var state_23139__$1 = (function (){var statearr_23141 = state_23139;
(statearr_23141[(7)] = inst_23121__$1);

return statearr_23141;
})();
if(inst_23123){
var statearr_23142_23167 = state_23139__$1;
(statearr_23142_23167[(1)] = (8));

} else {
var statearr_23143_23168 = state_23139__$1;
(statearr_23143_23168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (1))){
var inst_23116 = (0);
var state_23139__$1 = (function (){var statearr_23144 = state_23139;
(statearr_23144[(8)] = inst_23116);

return statearr_23144;
})();
var statearr_23145_23169 = state_23139__$1;
(statearr_23145_23169[(2)] = null);

(statearr_23145_23169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (4))){
var state_23139__$1 = state_23139;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23139__$1,(7),ch);
} else {
if((state_val_23140 === (6))){
var inst_23134 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
var statearr_23146_23170 = state_23139__$1;
(statearr_23146_23170[(2)] = inst_23134);

(statearr_23146_23170[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (3))){
var inst_23136 = (state_23139[(2)]);
var inst_23137 = cljs.core.async.close_BANG_.call(null,out);
var state_23139__$1 = (function (){var statearr_23147 = state_23139;
(statearr_23147[(9)] = inst_23136);

return statearr_23147;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23139__$1,inst_23137);
} else {
if((state_val_23140 === (2))){
var inst_23116 = (state_23139[(8)]);
var inst_23118 = (inst_23116 < n);
var state_23139__$1 = state_23139;
if(cljs.core.truth_(inst_23118)){
var statearr_23148_23171 = state_23139__$1;
(statearr_23148_23171[(1)] = (4));

} else {
var statearr_23149_23172 = state_23139__$1;
(statearr_23149_23172[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (11))){
var inst_23116 = (state_23139[(8)]);
var inst_23126 = (state_23139[(2)]);
var inst_23127 = (inst_23116 + (1));
var inst_23116__$1 = inst_23127;
var state_23139__$1 = (function (){var statearr_23150 = state_23139;
(statearr_23150[(8)] = inst_23116__$1);

(statearr_23150[(10)] = inst_23126);

return statearr_23150;
})();
var statearr_23151_23173 = state_23139__$1;
(statearr_23151_23173[(2)] = null);

(statearr_23151_23173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (9))){
var state_23139__$1 = state_23139;
var statearr_23152_23174 = state_23139__$1;
(statearr_23152_23174[(2)] = null);

(statearr_23152_23174[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (5))){
var state_23139__$1 = state_23139;
var statearr_23153_23175 = state_23139__$1;
(statearr_23153_23175[(2)] = null);

(statearr_23153_23175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (10))){
var inst_23131 = (state_23139[(2)]);
var state_23139__$1 = state_23139;
var statearr_23154_23176 = state_23139__$1;
(statearr_23154_23176[(2)] = inst_23131);

(statearr_23154_23176[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23140 === (8))){
var inst_23121 = (state_23139[(7)]);
var state_23139__$1 = state_23139;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23139__$1,(11),out,inst_23121);
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
});})(c__16755__auto___23166,out))
;
return ((function (switch__16690__auto__,c__16755__auto___23166,out){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23158[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23158[(1)] = (1));

return statearr_23158;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_23139){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23139);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23159){if((e23159 instanceof Object)){
var ex__16694__auto__ = e23159;
var statearr_23160_23177 = state_23139;
(statearr_23160_23177[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23139);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23159;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23178 = state_23139;
state_23139 = G__23178;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_23139){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_23139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23166,out))
})();
var state__16757__auto__ = (function (){var statearr_23161 = f__16756__auto__.call(null);
(statearr_23161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23166);

return statearr_23161;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23166,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23186 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23186 = (function (map_LT_,f,ch,meta23187){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23187 = meta23187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23188,meta23187__$1){
var self__ = this;
var _23188__$1 = this;
return (new cljs.core.async.t_cljs$core$async23186(self__.map_LT_,self__.f,self__.ch,meta23187__$1));
});

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23188){
var self__ = this;
var _23188__$1 = this;
return self__.meta23187;
});

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23189 = (function (map_LT_,f,ch,meta23187,_,fn1,meta23190){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23187 = meta23187;
this._ = _;
this.fn1 = fn1;
this.meta23190 = meta23190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23191,meta23190__$1){
var self__ = this;
var _23191__$1 = this;
return (new cljs.core.async.t_cljs$core$async23189(self__.map_LT_,self__.f,self__.ch,self__.meta23187,self__._,self__.fn1,meta23190__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23191){
var self__ = this;
var _23191__$1 = this;
return self__.meta23190;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23179_SHARP_){
return f1.call(null,(((p1__23179_SHARP_ == null))?null:self__.f.call(null,p1__23179_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23189.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23187","meta23187",1161126531,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23186","cljs.core.async/t_cljs$core$async23186",-827858134,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23190","meta23190",1826049374,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23189";

cljs.core.async.t_cljs$core$async23189.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async23189");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23189 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23189(map_LT___$1,f__$1,ch__$1,meta23187__$1,___$2,fn1__$1,meta23190){
return (new cljs.core.async.t_cljs$core$async23189(map_LT___$1,f__$1,ch__$1,meta23187__$1,___$2,fn1__$1,meta23190));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23189(self__.map_LT_,self__.f,self__.ch,self__.meta23187,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__14660__auto__ = ret;
if(cljs.core.truth_(and__14660__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__14660__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23186.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23187","meta23187",1161126531,null)], null);
});

cljs.core.async.t_cljs$core$async23186.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23186";

cljs.core.async.t_cljs$core$async23186.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async23186");
});

cljs.core.async.__GT_t_cljs$core$async23186 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23186(map_LT___$1,f__$1,ch__$1,meta23187){
return (new cljs.core.async.t_cljs$core$async23186(map_LT___$1,f__$1,ch__$1,meta23187));
});

}

return (new cljs.core.async.t_cljs$core$async23186(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23195 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23195 = (function (map_GT_,f,ch,meta23196){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23196 = meta23196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23197,meta23196__$1){
var self__ = this;
var _23197__$1 = this;
return (new cljs.core.async.t_cljs$core$async23195(self__.map_GT_,self__.f,self__.ch,meta23196__$1));
});

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23197){
var self__ = this;
var _23197__$1 = this;
return self__.meta23196;
});

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23195.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23196","meta23196",614950509,null)], null);
});

cljs.core.async.t_cljs$core$async23195.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23195";

cljs.core.async.t_cljs$core$async23195.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async23195");
});

cljs.core.async.__GT_t_cljs$core$async23195 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23195(map_GT___$1,f__$1,ch__$1,meta23196){
return (new cljs.core.async.t_cljs$core$async23195(map_GT___$1,f__$1,ch__$1,meta23196));
});

}

return (new cljs.core.async.t_cljs$core$async23195(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23201 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23201 = (function (filter_GT_,p,ch,meta23202){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23202 = meta23202;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23203,meta23202__$1){
var self__ = this;
var _23203__$1 = this;
return (new cljs.core.async.t_cljs$core$async23201(self__.filter_GT_,self__.p,self__.ch,meta23202__$1));
});

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23203){
var self__ = this;
var _23203__$1 = this;
return self__.meta23202;
});

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23201.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23202","meta23202",1813799932,null)], null);
});

cljs.core.async.t_cljs$core$async23201.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23201.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23201";

cljs.core.async.t_cljs$core$async23201.cljs$lang$ctorPrWriter = (function (this__15270__auto__,writer__15271__auto__,opt__15272__auto__){
return cljs.core._write.call(null,writer__15271__auto__,"cljs.core.async/t_cljs$core$async23201");
});

cljs.core.async.__GT_t_cljs$core$async23201 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23201(filter_GT___$1,p__$1,ch__$1,meta23202){
return (new cljs.core.async.t_cljs$core$async23201(filter_GT___$1,p__$1,ch__$1,meta23202));
});

}

return (new cljs.core.async.t_cljs$core$async23201(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args23204 = [];
var len__15730__auto___23248 = arguments.length;
var i__15731__auto___23249 = (0);
while(true){
if((i__15731__auto___23249 < len__15730__auto___23248)){
args23204.push((arguments[i__15731__auto___23249]));

var G__23250 = (i__15731__auto___23249 + (1));
i__15731__auto___23249 = G__23250;
continue;
} else {
}
break;
}

var G__23206 = args23204.length;
switch (G__23206) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23204.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16755__auto___23252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23252,out){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23252,out){
return (function (state_23227){
var state_val_23228 = (state_23227[(1)]);
if((state_val_23228 === (7))){
var inst_23223 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23229_23253 = state_23227__$1;
(statearr_23229_23253[(2)] = inst_23223);

(statearr_23229_23253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (1))){
var state_23227__$1 = state_23227;
var statearr_23230_23254 = state_23227__$1;
(statearr_23230_23254[(2)] = null);

(statearr_23230_23254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (4))){
var inst_23209 = (state_23227[(7)]);
var inst_23209__$1 = (state_23227[(2)]);
var inst_23210 = (inst_23209__$1 == null);
var state_23227__$1 = (function (){var statearr_23231 = state_23227;
(statearr_23231[(7)] = inst_23209__$1);

return statearr_23231;
})();
if(cljs.core.truth_(inst_23210)){
var statearr_23232_23255 = state_23227__$1;
(statearr_23232_23255[(1)] = (5));

} else {
var statearr_23233_23256 = state_23227__$1;
(statearr_23233_23256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (6))){
var inst_23209 = (state_23227[(7)]);
var inst_23214 = p.call(null,inst_23209);
var state_23227__$1 = state_23227;
if(cljs.core.truth_(inst_23214)){
var statearr_23234_23257 = state_23227__$1;
(statearr_23234_23257[(1)] = (8));

} else {
var statearr_23235_23258 = state_23227__$1;
(statearr_23235_23258[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (3))){
var inst_23225 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23227__$1,inst_23225);
} else {
if((state_val_23228 === (2))){
var state_23227__$1 = state_23227;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23227__$1,(4),ch);
} else {
if((state_val_23228 === (11))){
var inst_23217 = (state_23227[(2)]);
var state_23227__$1 = state_23227;
var statearr_23236_23259 = state_23227__$1;
(statearr_23236_23259[(2)] = inst_23217);

(statearr_23236_23259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (9))){
var state_23227__$1 = state_23227;
var statearr_23237_23260 = state_23227__$1;
(statearr_23237_23260[(2)] = null);

(statearr_23237_23260[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (5))){
var inst_23212 = cljs.core.async.close_BANG_.call(null,out);
var state_23227__$1 = state_23227;
var statearr_23238_23261 = state_23227__$1;
(statearr_23238_23261[(2)] = inst_23212);

(statearr_23238_23261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (10))){
var inst_23220 = (state_23227[(2)]);
var state_23227__$1 = (function (){var statearr_23239 = state_23227;
(statearr_23239[(8)] = inst_23220);

return statearr_23239;
})();
var statearr_23240_23262 = state_23227__$1;
(statearr_23240_23262[(2)] = null);

(statearr_23240_23262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23228 === (8))){
var inst_23209 = (state_23227[(7)]);
var state_23227__$1 = state_23227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23227__$1,(11),out,inst_23209);
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
});})(c__16755__auto___23252,out))
;
return ((function (switch__16690__auto__,c__16755__auto___23252,out){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23244 = [null,null,null,null,null,null,null,null,null];
(statearr_23244[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23244[(1)] = (1));

return statearr_23244;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_23227){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23245){if((e23245 instanceof Object)){
var ex__16694__auto__ = e23245;
var statearr_23246_23263 = state_23227;
(statearr_23246_23263[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23264 = state_23227;
state_23227 = G__23264;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_23227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_23227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23252,out))
})();
var state__16757__auto__ = (function (){var statearr_23247 = f__16756__auto__.call(null);
(statearr_23247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23252);

return statearr_23247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23252,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23265 = [];
var len__15730__auto___23268 = arguments.length;
var i__15731__auto___23269 = (0);
while(true){
if((i__15731__auto___23269 < len__15730__auto___23268)){
args23265.push((arguments[i__15731__auto___23269]));

var G__23270 = (i__15731__auto___23269 + (1));
i__15731__auto___23269 = G__23270;
continue;
} else {
}
break;
}

var G__23267 = args23265.length;
switch (G__23267) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23265.length)].join('')));

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
var c__16755__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto__){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto__){
return (function (state_23437){
var state_val_23438 = (state_23437[(1)]);
if((state_val_23438 === (7))){
var inst_23433 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23439_23480 = state_23437__$1;
(statearr_23439_23480[(2)] = inst_23433);

(statearr_23439_23480[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (20))){
var inst_23403 = (state_23437[(7)]);
var inst_23414 = (state_23437[(2)]);
var inst_23415 = cljs.core.next.call(null,inst_23403);
var inst_23389 = inst_23415;
var inst_23390 = null;
var inst_23391 = (0);
var inst_23392 = (0);
var state_23437__$1 = (function (){var statearr_23440 = state_23437;
(statearr_23440[(8)] = inst_23392);

(statearr_23440[(9)] = inst_23389);

(statearr_23440[(10)] = inst_23391);

(statearr_23440[(11)] = inst_23414);

(statearr_23440[(12)] = inst_23390);

return statearr_23440;
})();
var statearr_23441_23481 = state_23437__$1;
(statearr_23441_23481[(2)] = null);

(statearr_23441_23481[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (1))){
var state_23437__$1 = state_23437;
var statearr_23442_23482 = state_23437__$1;
(statearr_23442_23482[(2)] = null);

(statearr_23442_23482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (4))){
var inst_23378 = (state_23437[(13)]);
var inst_23378__$1 = (state_23437[(2)]);
var inst_23379 = (inst_23378__$1 == null);
var state_23437__$1 = (function (){var statearr_23443 = state_23437;
(statearr_23443[(13)] = inst_23378__$1);

return statearr_23443;
})();
if(cljs.core.truth_(inst_23379)){
var statearr_23444_23483 = state_23437__$1;
(statearr_23444_23483[(1)] = (5));

} else {
var statearr_23445_23484 = state_23437__$1;
(statearr_23445_23484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (15))){
var state_23437__$1 = state_23437;
var statearr_23449_23485 = state_23437__$1;
(statearr_23449_23485[(2)] = null);

(statearr_23449_23485[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (21))){
var state_23437__$1 = state_23437;
var statearr_23450_23486 = state_23437__$1;
(statearr_23450_23486[(2)] = null);

(statearr_23450_23486[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (13))){
var inst_23392 = (state_23437[(8)]);
var inst_23389 = (state_23437[(9)]);
var inst_23391 = (state_23437[(10)]);
var inst_23390 = (state_23437[(12)]);
var inst_23399 = (state_23437[(2)]);
var inst_23400 = (inst_23392 + (1));
var tmp23446 = inst_23389;
var tmp23447 = inst_23391;
var tmp23448 = inst_23390;
var inst_23389__$1 = tmp23446;
var inst_23390__$1 = tmp23448;
var inst_23391__$1 = tmp23447;
var inst_23392__$1 = inst_23400;
var state_23437__$1 = (function (){var statearr_23451 = state_23437;
(statearr_23451[(8)] = inst_23392__$1);

(statearr_23451[(9)] = inst_23389__$1);

(statearr_23451[(10)] = inst_23391__$1);

(statearr_23451[(14)] = inst_23399);

(statearr_23451[(12)] = inst_23390__$1);

return statearr_23451;
})();
var statearr_23452_23487 = state_23437__$1;
(statearr_23452_23487[(2)] = null);

(statearr_23452_23487[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (22))){
var state_23437__$1 = state_23437;
var statearr_23453_23488 = state_23437__$1;
(statearr_23453_23488[(2)] = null);

(statearr_23453_23488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (6))){
var inst_23378 = (state_23437[(13)]);
var inst_23387 = f.call(null,inst_23378);
var inst_23388 = cljs.core.seq.call(null,inst_23387);
var inst_23389 = inst_23388;
var inst_23390 = null;
var inst_23391 = (0);
var inst_23392 = (0);
var state_23437__$1 = (function (){var statearr_23454 = state_23437;
(statearr_23454[(8)] = inst_23392);

(statearr_23454[(9)] = inst_23389);

(statearr_23454[(10)] = inst_23391);

(statearr_23454[(12)] = inst_23390);

return statearr_23454;
})();
var statearr_23455_23489 = state_23437__$1;
(statearr_23455_23489[(2)] = null);

(statearr_23455_23489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (17))){
var inst_23403 = (state_23437[(7)]);
var inst_23407 = cljs.core.chunk_first.call(null,inst_23403);
var inst_23408 = cljs.core.chunk_rest.call(null,inst_23403);
var inst_23409 = cljs.core.count.call(null,inst_23407);
var inst_23389 = inst_23408;
var inst_23390 = inst_23407;
var inst_23391 = inst_23409;
var inst_23392 = (0);
var state_23437__$1 = (function (){var statearr_23456 = state_23437;
(statearr_23456[(8)] = inst_23392);

(statearr_23456[(9)] = inst_23389);

(statearr_23456[(10)] = inst_23391);

(statearr_23456[(12)] = inst_23390);

return statearr_23456;
})();
var statearr_23457_23490 = state_23437__$1;
(statearr_23457_23490[(2)] = null);

(statearr_23457_23490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (3))){
var inst_23435 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23437__$1,inst_23435);
} else {
if((state_val_23438 === (12))){
var inst_23423 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23458_23491 = state_23437__$1;
(statearr_23458_23491[(2)] = inst_23423);

(statearr_23458_23491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (2))){
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23437__$1,(4),in$);
} else {
if((state_val_23438 === (23))){
var inst_23431 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23459_23492 = state_23437__$1;
(statearr_23459_23492[(2)] = inst_23431);

(statearr_23459_23492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (19))){
var inst_23418 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23460_23493 = state_23437__$1;
(statearr_23460_23493[(2)] = inst_23418);

(statearr_23460_23493[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (11))){
var inst_23403 = (state_23437[(7)]);
var inst_23389 = (state_23437[(9)]);
var inst_23403__$1 = cljs.core.seq.call(null,inst_23389);
var state_23437__$1 = (function (){var statearr_23461 = state_23437;
(statearr_23461[(7)] = inst_23403__$1);

return statearr_23461;
})();
if(inst_23403__$1){
var statearr_23462_23494 = state_23437__$1;
(statearr_23462_23494[(1)] = (14));

} else {
var statearr_23463_23495 = state_23437__$1;
(statearr_23463_23495[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (9))){
var inst_23425 = (state_23437[(2)]);
var inst_23426 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23437__$1 = (function (){var statearr_23464 = state_23437;
(statearr_23464[(15)] = inst_23425);

return statearr_23464;
})();
if(cljs.core.truth_(inst_23426)){
var statearr_23465_23496 = state_23437__$1;
(statearr_23465_23496[(1)] = (21));

} else {
var statearr_23466_23497 = state_23437__$1;
(statearr_23466_23497[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (5))){
var inst_23381 = cljs.core.async.close_BANG_.call(null,out);
var state_23437__$1 = state_23437;
var statearr_23467_23498 = state_23437__$1;
(statearr_23467_23498[(2)] = inst_23381);

(statearr_23467_23498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (14))){
var inst_23403 = (state_23437[(7)]);
var inst_23405 = cljs.core.chunked_seq_QMARK_.call(null,inst_23403);
var state_23437__$1 = state_23437;
if(inst_23405){
var statearr_23468_23499 = state_23437__$1;
(statearr_23468_23499[(1)] = (17));

} else {
var statearr_23469_23500 = state_23437__$1;
(statearr_23469_23500[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (16))){
var inst_23421 = (state_23437[(2)]);
var state_23437__$1 = state_23437;
var statearr_23470_23501 = state_23437__$1;
(statearr_23470_23501[(2)] = inst_23421);

(statearr_23470_23501[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23438 === (10))){
var inst_23392 = (state_23437[(8)]);
var inst_23390 = (state_23437[(12)]);
var inst_23397 = cljs.core._nth.call(null,inst_23390,inst_23392);
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23437__$1,(13),out,inst_23397);
} else {
if((state_val_23438 === (18))){
var inst_23403 = (state_23437[(7)]);
var inst_23412 = cljs.core.first.call(null,inst_23403);
var state_23437__$1 = state_23437;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23437__$1,(20),out,inst_23412);
} else {
if((state_val_23438 === (8))){
var inst_23392 = (state_23437[(8)]);
var inst_23391 = (state_23437[(10)]);
var inst_23394 = (inst_23392 < inst_23391);
var inst_23395 = inst_23394;
var state_23437__$1 = state_23437;
if(cljs.core.truth_(inst_23395)){
var statearr_23471_23502 = state_23437__$1;
(statearr_23471_23502[(1)] = (10));

} else {
var statearr_23472_23503 = state_23437__$1;
(statearr_23472_23503[(1)] = (11));

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
});})(c__16755__auto__))
;
return ((function (switch__16690__auto__,c__16755__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16691__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16691__auto____0 = (function (){
var statearr_23476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23476[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16691__auto__);

(statearr_23476[(1)] = (1));

return statearr_23476;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16691__auto____1 = (function (state_23437){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object)){
var ex__16694__auto__ = e23477;
var statearr_23478_23504 = state_23437;
(statearr_23478_23504[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23505 = state_23437;
state_23437 = G__23505;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16691__auto__ = function(state_23437){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16691__auto____1.call(this,state_23437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16691__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16691__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto__))
})();
var state__16757__auto__ = (function (){var statearr_23479 = f__16756__auto__.call(null);
(statearr_23479[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto__);

return statearr_23479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto__))
);

return c__16755__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23506 = [];
var len__15730__auto___23509 = arguments.length;
var i__15731__auto___23510 = (0);
while(true){
if((i__15731__auto___23510 < len__15730__auto___23509)){
args23506.push((arguments[i__15731__auto___23510]));

var G__23511 = (i__15731__auto___23510 + (1));
i__15731__auto___23510 = G__23511;
continue;
} else {
}
break;
}

var G__23508 = args23506.length;
switch (G__23508) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23506.length)].join('')));

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
var args23513 = [];
var len__15730__auto___23516 = arguments.length;
var i__15731__auto___23517 = (0);
while(true){
if((i__15731__auto___23517 < len__15730__auto___23516)){
args23513.push((arguments[i__15731__auto___23517]));

var G__23518 = (i__15731__auto___23517 + (1));
i__15731__auto___23517 = G__23518;
continue;
} else {
}
break;
}

var G__23515 = args23513.length;
switch (G__23515) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23513.length)].join('')));

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
var args23520 = [];
var len__15730__auto___23571 = arguments.length;
var i__15731__auto___23572 = (0);
while(true){
if((i__15731__auto___23572 < len__15730__auto___23571)){
args23520.push((arguments[i__15731__auto___23572]));

var G__23573 = (i__15731__auto___23572 + (1));
i__15731__auto___23572 = G__23573;
continue;
} else {
}
break;
}

var G__23522 = args23520.length;
switch (G__23522) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23520.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16755__auto___23575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23575,out){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23575,out){
return (function (state_23546){
var state_val_23547 = (state_23546[(1)]);
if((state_val_23547 === (7))){
var inst_23541 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23548_23576 = state_23546__$1;
(statearr_23548_23576[(2)] = inst_23541);

(statearr_23548_23576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (1))){
var inst_23523 = null;
var state_23546__$1 = (function (){var statearr_23549 = state_23546;
(statearr_23549[(7)] = inst_23523);

return statearr_23549;
})();
var statearr_23550_23577 = state_23546__$1;
(statearr_23550_23577[(2)] = null);

(statearr_23550_23577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (4))){
var inst_23526 = (state_23546[(8)]);
var inst_23526__$1 = (state_23546[(2)]);
var inst_23527 = (inst_23526__$1 == null);
var inst_23528 = cljs.core.not.call(null,inst_23527);
var state_23546__$1 = (function (){var statearr_23551 = state_23546;
(statearr_23551[(8)] = inst_23526__$1);

return statearr_23551;
})();
if(inst_23528){
var statearr_23552_23578 = state_23546__$1;
(statearr_23552_23578[(1)] = (5));

} else {
var statearr_23553_23579 = state_23546__$1;
(statearr_23553_23579[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (6))){
var state_23546__$1 = state_23546;
var statearr_23554_23580 = state_23546__$1;
(statearr_23554_23580[(2)] = null);

(statearr_23554_23580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (3))){
var inst_23543 = (state_23546[(2)]);
var inst_23544 = cljs.core.async.close_BANG_.call(null,out);
var state_23546__$1 = (function (){var statearr_23555 = state_23546;
(statearr_23555[(9)] = inst_23543);

return statearr_23555;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23546__$1,inst_23544);
} else {
if((state_val_23547 === (2))){
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23546__$1,(4),ch);
} else {
if((state_val_23547 === (11))){
var inst_23526 = (state_23546[(8)]);
var inst_23535 = (state_23546[(2)]);
var inst_23523 = inst_23526;
var state_23546__$1 = (function (){var statearr_23556 = state_23546;
(statearr_23556[(10)] = inst_23535);

(statearr_23556[(7)] = inst_23523);

return statearr_23556;
})();
var statearr_23557_23581 = state_23546__$1;
(statearr_23557_23581[(2)] = null);

(statearr_23557_23581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (9))){
var inst_23526 = (state_23546[(8)]);
var state_23546__$1 = state_23546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23546__$1,(11),out,inst_23526);
} else {
if((state_val_23547 === (5))){
var inst_23523 = (state_23546[(7)]);
var inst_23526 = (state_23546[(8)]);
var inst_23530 = cljs.core._EQ_.call(null,inst_23526,inst_23523);
var state_23546__$1 = state_23546;
if(inst_23530){
var statearr_23559_23582 = state_23546__$1;
(statearr_23559_23582[(1)] = (8));

} else {
var statearr_23560_23583 = state_23546__$1;
(statearr_23560_23583[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (10))){
var inst_23538 = (state_23546[(2)]);
var state_23546__$1 = state_23546;
var statearr_23561_23584 = state_23546__$1;
(statearr_23561_23584[(2)] = inst_23538);

(statearr_23561_23584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23547 === (8))){
var inst_23523 = (state_23546[(7)]);
var tmp23558 = inst_23523;
var inst_23523__$1 = tmp23558;
var state_23546__$1 = (function (){var statearr_23562 = state_23546;
(statearr_23562[(7)] = inst_23523__$1);

return statearr_23562;
})();
var statearr_23563_23585 = state_23546__$1;
(statearr_23563_23585[(2)] = null);

(statearr_23563_23585[(1)] = (2));


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
});})(c__16755__auto___23575,out))
;
return ((function (switch__16690__auto__,c__16755__auto___23575,out){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23567 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23567[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23567[(1)] = (1));

return statearr_23567;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_23546){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23568){if((e23568 instanceof Object)){
var ex__16694__auto__ = e23568;
var statearr_23569_23586 = state_23546;
(statearr_23569_23586[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23568;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23587 = state_23546;
state_23546 = G__23587;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_23546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_23546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23575,out))
})();
var state__16757__auto__ = (function (){var statearr_23570 = f__16756__auto__.call(null);
(statearr_23570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23575);

return statearr_23570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23575,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23588 = [];
var len__15730__auto___23658 = arguments.length;
var i__15731__auto___23659 = (0);
while(true){
if((i__15731__auto___23659 < len__15730__auto___23658)){
args23588.push((arguments[i__15731__auto___23659]));

var G__23660 = (i__15731__auto___23659 + (1));
i__15731__auto___23659 = G__23660;
continue;
} else {
}
break;
}

var G__23590 = args23588.length;
switch (G__23590) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23588.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16755__auto___23662 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23662,out){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23662,out){
return (function (state_23628){
var state_val_23629 = (state_23628[(1)]);
if((state_val_23629 === (7))){
var inst_23624 = (state_23628[(2)]);
var state_23628__$1 = state_23628;
var statearr_23630_23663 = state_23628__$1;
(statearr_23630_23663[(2)] = inst_23624);

(statearr_23630_23663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (1))){
var inst_23591 = (new Array(n));
var inst_23592 = inst_23591;
var inst_23593 = (0);
var state_23628__$1 = (function (){var statearr_23631 = state_23628;
(statearr_23631[(7)] = inst_23592);

(statearr_23631[(8)] = inst_23593);

return statearr_23631;
})();
var statearr_23632_23664 = state_23628__$1;
(statearr_23632_23664[(2)] = null);

(statearr_23632_23664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (4))){
var inst_23596 = (state_23628[(9)]);
var inst_23596__$1 = (state_23628[(2)]);
var inst_23597 = (inst_23596__$1 == null);
var inst_23598 = cljs.core.not.call(null,inst_23597);
var state_23628__$1 = (function (){var statearr_23633 = state_23628;
(statearr_23633[(9)] = inst_23596__$1);

return statearr_23633;
})();
if(inst_23598){
var statearr_23634_23665 = state_23628__$1;
(statearr_23634_23665[(1)] = (5));

} else {
var statearr_23635_23666 = state_23628__$1;
(statearr_23635_23666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (15))){
var inst_23618 = (state_23628[(2)]);
var state_23628__$1 = state_23628;
var statearr_23636_23667 = state_23628__$1;
(statearr_23636_23667[(2)] = inst_23618);

(statearr_23636_23667[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (13))){
var state_23628__$1 = state_23628;
var statearr_23637_23668 = state_23628__$1;
(statearr_23637_23668[(2)] = null);

(statearr_23637_23668[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (6))){
var inst_23593 = (state_23628[(8)]);
var inst_23614 = (inst_23593 > (0));
var state_23628__$1 = state_23628;
if(cljs.core.truth_(inst_23614)){
var statearr_23638_23669 = state_23628__$1;
(statearr_23638_23669[(1)] = (12));

} else {
var statearr_23639_23670 = state_23628__$1;
(statearr_23639_23670[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (3))){
var inst_23626 = (state_23628[(2)]);
var state_23628__$1 = state_23628;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23628__$1,inst_23626);
} else {
if((state_val_23629 === (12))){
var inst_23592 = (state_23628[(7)]);
var inst_23616 = cljs.core.vec.call(null,inst_23592);
var state_23628__$1 = state_23628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23628__$1,(15),out,inst_23616);
} else {
if((state_val_23629 === (2))){
var state_23628__$1 = state_23628;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23628__$1,(4),ch);
} else {
if((state_val_23629 === (11))){
var inst_23608 = (state_23628[(2)]);
var inst_23609 = (new Array(n));
var inst_23592 = inst_23609;
var inst_23593 = (0);
var state_23628__$1 = (function (){var statearr_23640 = state_23628;
(statearr_23640[(10)] = inst_23608);

(statearr_23640[(7)] = inst_23592);

(statearr_23640[(8)] = inst_23593);

return statearr_23640;
})();
var statearr_23641_23671 = state_23628__$1;
(statearr_23641_23671[(2)] = null);

(statearr_23641_23671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (9))){
var inst_23592 = (state_23628[(7)]);
var inst_23606 = cljs.core.vec.call(null,inst_23592);
var state_23628__$1 = state_23628;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23628__$1,(11),out,inst_23606);
} else {
if((state_val_23629 === (5))){
var inst_23601 = (state_23628[(11)]);
var inst_23592 = (state_23628[(7)]);
var inst_23596 = (state_23628[(9)]);
var inst_23593 = (state_23628[(8)]);
var inst_23600 = (inst_23592[inst_23593] = inst_23596);
var inst_23601__$1 = (inst_23593 + (1));
var inst_23602 = (inst_23601__$1 < n);
var state_23628__$1 = (function (){var statearr_23642 = state_23628;
(statearr_23642[(11)] = inst_23601__$1);

(statearr_23642[(12)] = inst_23600);

return statearr_23642;
})();
if(cljs.core.truth_(inst_23602)){
var statearr_23643_23672 = state_23628__$1;
(statearr_23643_23672[(1)] = (8));

} else {
var statearr_23644_23673 = state_23628__$1;
(statearr_23644_23673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (14))){
var inst_23621 = (state_23628[(2)]);
var inst_23622 = cljs.core.async.close_BANG_.call(null,out);
var state_23628__$1 = (function (){var statearr_23646 = state_23628;
(statearr_23646[(13)] = inst_23621);

return statearr_23646;
})();
var statearr_23647_23674 = state_23628__$1;
(statearr_23647_23674[(2)] = inst_23622);

(statearr_23647_23674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (10))){
var inst_23612 = (state_23628[(2)]);
var state_23628__$1 = state_23628;
var statearr_23648_23675 = state_23628__$1;
(statearr_23648_23675[(2)] = inst_23612);

(statearr_23648_23675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23629 === (8))){
var inst_23601 = (state_23628[(11)]);
var inst_23592 = (state_23628[(7)]);
var tmp23645 = inst_23592;
var inst_23592__$1 = tmp23645;
var inst_23593 = inst_23601;
var state_23628__$1 = (function (){var statearr_23649 = state_23628;
(statearr_23649[(7)] = inst_23592__$1);

(statearr_23649[(8)] = inst_23593);

return statearr_23649;
})();
var statearr_23650_23676 = state_23628__$1;
(statearr_23650_23676[(2)] = null);

(statearr_23650_23676[(1)] = (2));


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
});})(c__16755__auto___23662,out))
;
return ((function (switch__16690__auto__,c__16755__auto___23662,out){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23654[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23654[(1)] = (1));

return statearr_23654;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_23628){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23628);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23655){if((e23655 instanceof Object)){
var ex__16694__auto__ = e23655;
var statearr_23656_23677 = state_23628;
(statearr_23656_23677[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23628);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23678 = state_23628;
state_23628 = G__23678;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_23628){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_23628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23662,out))
})();
var state__16757__auto__ = (function (){var statearr_23657 = f__16756__auto__.call(null);
(statearr_23657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23662);

return statearr_23657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23662,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23679 = [];
var len__15730__auto___23753 = arguments.length;
var i__15731__auto___23754 = (0);
while(true){
if((i__15731__auto___23754 < len__15730__auto___23753)){
args23679.push((arguments[i__15731__auto___23754]));

var G__23755 = (i__15731__auto___23754 + (1));
i__15731__auto___23754 = G__23755;
continue;
} else {
}
break;
}

var G__23681 = args23679.length;
switch (G__23681) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23679.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16755__auto___23757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__16755__auto___23757,out){
return (function (){
var f__16756__auto__ = (function (){var switch__16690__auto__ = ((function (c__16755__auto___23757,out){
return (function (state_23723){
var state_val_23724 = (state_23723[(1)]);
if((state_val_23724 === (7))){
var inst_23719 = (state_23723[(2)]);
var state_23723__$1 = state_23723;
var statearr_23725_23758 = state_23723__$1;
(statearr_23725_23758[(2)] = inst_23719);

(statearr_23725_23758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (1))){
var inst_23682 = [];
var inst_23683 = inst_23682;
var inst_23684 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23723__$1 = (function (){var statearr_23726 = state_23723;
(statearr_23726[(7)] = inst_23684);

(statearr_23726[(8)] = inst_23683);

return statearr_23726;
})();
var statearr_23727_23759 = state_23723__$1;
(statearr_23727_23759[(2)] = null);

(statearr_23727_23759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (4))){
var inst_23687 = (state_23723[(9)]);
var inst_23687__$1 = (state_23723[(2)]);
var inst_23688 = (inst_23687__$1 == null);
var inst_23689 = cljs.core.not.call(null,inst_23688);
var state_23723__$1 = (function (){var statearr_23728 = state_23723;
(statearr_23728[(9)] = inst_23687__$1);

return statearr_23728;
})();
if(inst_23689){
var statearr_23729_23760 = state_23723__$1;
(statearr_23729_23760[(1)] = (5));

} else {
var statearr_23730_23761 = state_23723__$1;
(statearr_23730_23761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (15))){
var inst_23713 = (state_23723[(2)]);
var state_23723__$1 = state_23723;
var statearr_23731_23762 = state_23723__$1;
(statearr_23731_23762[(2)] = inst_23713);

(statearr_23731_23762[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (13))){
var state_23723__$1 = state_23723;
var statearr_23732_23763 = state_23723__$1;
(statearr_23732_23763[(2)] = null);

(statearr_23732_23763[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (6))){
var inst_23683 = (state_23723[(8)]);
var inst_23708 = inst_23683.length;
var inst_23709 = (inst_23708 > (0));
var state_23723__$1 = state_23723;
if(cljs.core.truth_(inst_23709)){
var statearr_23733_23764 = state_23723__$1;
(statearr_23733_23764[(1)] = (12));

} else {
var statearr_23734_23765 = state_23723__$1;
(statearr_23734_23765[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (3))){
var inst_23721 = (state_23723[(2)]);
var state_23723__$1 = state_23723;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23723__$1,inst_23721);
} else {
if((state_val_23724 === (12))){
var inst_23683 = (state_23723[(8)]);
var inst_23711 = cljs.core.vec.call(null,inst_23683);
var state_23723__$1 = state_23723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23723__$1,(15),out,inst_23711);
} else {
if((state_val_23724 === (2))){
var state_23723__$1 = state_23723;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23723__$1,(4),ch);
} else {
if((state_val_23724 === (11))){
var inst_23691 = (state_23723[(10)]);
var inst_23687 = (state_23723[(9)]);
var inst_23701 = (state_23723[(2)]);
var inst_23702 = [];
var inst_23703 = inst_23702.push(inst_23687);
var inst_23683 = inst_23702;
var inst_23684 = inst_23691;
var state_23723__$1 = (function (){var statearr_23735 = state_23723;
(statearr_23735[(7)] = inst_23684);

(statearr_23735[(11)] = inst_23701);

(statearr_23735[(12)] = inst_23703);

(statearr_23735[(8)] = inst_23683);

return statearr_23735;
})();
var statearr_23736_23766 = state_23723__$1;
(statearr_23736_23766[(2)] = null);

(statearr_23736_23766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (9))){
var inst_23683 = (state_23723[(8)]);
var inst_23699 = cljs.core.vec.call(null,inst_23683);
var state_23723__$1 = state_23723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23723__$1,(11),out,inst_23699);
} else {
if((state_val_23724 === (5))){
var inst_23691 = (state_23723[(10)]);
var inst_23687 = (state_23723[(9)]);
var inst_23684 = (state_23723[(7)]);
var inst_23691__$1 = f.call(null,inst_23687);
var inst_23692 = cljs.core._EQ_.call(null,inst_23691__$1,inst_23684);
var inst_23693 = cljs.core.keyword_identical_QMARK_.call(null,inst_23684,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23694 = (inst_23692) || (inst_23693);
var state_23723__$1 = (function (){var statearr_23737 = state_23723;
(statearr_23737[(10)] = inst_23691__$1);

return statearr_23737;
})();
if(cljs.core.truth_(inst_23694)){
var statearr_23738_23767 = state_23723__$1;
(statearr_23738_23767[(1)] = (8));

} else {
var statearr_23739_23768 = state_23723__$1;
(statearr_23739_23768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (14))){
var inst_23716 = (state_23723[(2)]);
var inst_23717 = cljs.core.async.close_BANG_.call(null,out);
var state_23723__$1 = (function (){var statearr_23741 = state_23723;
(statearr_23741[(13)] = inst_23716);

return statearr_23741;
})();
var statearr_23742_23769 = state_23723__$1;
(statearr_23742_23769[(2)] = inst_23717);

(statearr_23742_23769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (10))){
var inst_23706 = (state_23723[(2)]);
var state_23723__$1 = state_23723;
var statearr_23743_23770 = state_23723__$1;
(statearr_23743_23770[(2)] = inst_23706);

(statearr_23743_23770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23724 === (8))){
var inst_23691 = (state_23723[(10)]);
var inst_23687 = (state_23723[(9)]);
var inst_23683 = (state_23723[(8)]);
var inst_23696 = inst_23683.push(inst_23687);
var tmp23740 = inst_23683;
var inst_23683__$1 = tmp23740;
var inst_23684 = inst_23691;
var state_23723__$1 = (function (){var statearr_23744 = state_23723;
(statearr_23744[(14)] = inst_23696);

(statearr_23744[(7)] = inst_23684);

(statearr_23744[(8)] = inst_23683__$1);

return statearr_23744;
})();
var statearr_23745_23771 = state_23723__$1;
(statearr_23745_23771[(2)] = null);

(statearr_23745_23771[(1)] = (2));


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
});})(c__16755__auto___23757,out))
;
return ((function (switch__16690__auto__,c__16755__auto___23757,out){
return (function() {
var cljs$core$async$state_machine__16691__auto__ = null;
var cljs$core$async$state_machine__16691__auto____0 = (function (){
var statearr_23749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23749[(0)] = cljs$core$async$state_machine__16691__auto__);

(statearr_23749[(1)] = (1));

return statearr_23749;
});
var cljs$core$async$state_machine__16691__auto____1 = (function (state_23723){
while(true){
var ret_value__16692__auto__ = (function (){try{while(true){
var result__16693__auto__ = switch__16690__auto__.call(null,state_23723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16693__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16693__auto__;
}
break;
}
}catch (e23750){if((e23750 instanceof Object)){
var ex__16694__auto__ = e23750;
var statearr_23751_23772 = state_23723;
(statearr_23751_23772[(5)] = ex__16694__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16692__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23773 = state_23723;
state_23723 = G__23773;
continue;
} else {
return ret_value__16692__auto__;
}
break;
}
});
cljs$core$async$state_machine__16691__auto__ = function(state_23723){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16691__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16691__auto____1.call(this,state_23723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16691__auto____0;
cljs$core$async$state_machine__16691__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16691__auto____1;
return cljs$core$async$state_machine__16691__auto__;
})()
;})(switch__16690__auto__,c__16755__auto___23757,out))
})();
var state__16757__auto__ = (function (){var statearr_23752 = f__16756__auto__.call(null);
(statearr_23752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16755__auto___23757);

return statearr_23752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16757__auto__);
});})(c__16755__auto___23757,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map