// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__48153 = arguments.length;
switch (G__48153) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async48154 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48154 = (function (f,blockable,meta48155){
this.f = f;
this.blockable = blockable;
this.meta48155 = meta48155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48156,meta48155__$1){
var self__ = this;
var _48156__$1 = this;
return (new cljs.core.async.t_cljs$core$async48154(self__.f,self__.blockable,meta48155__$1));
});

cljs.core.async.t_cljs$core$async48154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48156){
var self__ = this;
var _48156__$1 = this;
return self__.meta48155;
});

cljs.core.async.t_cljs$core$async48154.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48154.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async48154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async48154.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta48155","meta48155",2069381413,null)], null);
});

cljs.core.async.t_cljs$core$async48154.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48154.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48154";

cljs.core.async.t_cljs$core$async48154.cljs$lang$ctorPrWriter = (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async48154");
});

cljs.core.async.__GT_t_cljs$core$async48154 = (function cljs$core$async$__GT_t_cljs$core$async48154(f__$1,blockable__$1,meta48155){
return (new cljs.core.async.t_cljs$core$async48154(f__$1,blockable__$1,meta48155));
});

}

return (new cljs.core.async.t_cljs$core$async48154(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

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
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
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
var G__48160 = arguments.length;
switch (G__48160) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__48163 = arguments.length;
switch (G__48163) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

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
var G__48166 = arguments.length;
switch (G__48166) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_48168 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_48168);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_48168,ret){
return (function (){
return fn1.call(null,val_48168);
});})(val_48168,ret))
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
var G__48170 = arguments.length;
switch (G__48170) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
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
var n__35387__auto___48172 = n;
var x_48173 = (0);
while(true){
if((x_48173 < n__35387__auto___48172)){
(a[x_48173] = (0));

var G__48174 = (x_48173 + (1));
x_48173 = G__48174;
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

var G__48175 = (i + (1));
i = G__48175;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async48176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48176 = (function (flag,meta48177){
this.flag = flag;
this.meta48177 = meta48177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48178,meta48177__$1){
var self__ = this;
var _48178__$1 = this;
return (new cljs.core.async.t_cljs$core$async48176(self__.flag,meta48177__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48178){
var self__ = this;
var _48178__$1 = this;
return self__.meta48177;
});})(flag))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async48176.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta48177","meta48177",103118926,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async48176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48176";

cljs.core.async.t_cljs$core$async48176.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async48176");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async48176 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async48176(flag__$1,meta48177){
return (new cljs.core.async.t_cljs$core$async48176(flag__$1,meta48177));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async48176(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async48179 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48179 = (function (flag,cb,meta48180){
this.flag = flag;
this.cb = cb;
this.meta48180 = meta48180;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48181,meta48180__$1){
var self__ = this;
var _48181__$1 = this;
return (new cljs.core.async.t_cljs$core$async48179(self__.flag,self__.cb,meta48180__$1));
});

cljs.core.async.t_cljs$core$async48179.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48181){
var self__ = this;
var _48181__$1 = this;
return self__.meta48180;
});

cljs.core.async.t_cljs$core$async48179.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48179.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async48179.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async48179.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async48179.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta48180","meta48180",-594418080,null)], null);
});

cljs.core.async.t_cljs$core$async48179.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48179.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48179";

cljs.core.async.t_cljs$core$async48179.cljs$lang$ctorPrWriter = (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async48179");
});

cljs.core.async.__GT_t_cljs$core$async48179 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async48179(flag__$1,cb__$1,meta48180){
return (new cljs.core.async.t_cljs$core$async48179(flag__$1,cb__$1,meta48180));
});

}

return (new cljs.core.async.t_cljs$core$async48179(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__48182_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48182_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__48183_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48183_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34442__auto__ = wport;
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48184 = (i + (1));
i = G__48184;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34442__auto__ = ret;
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__34430__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34430__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34430__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
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
var args__35618__auto__ = [];
var len__35611__auto___48190 = arguments.length;
var i__35612__auto___48191 = (0);
while(true){
if((i__35612__auto___48191 < len__35611__auto___48190)){
args__35618__auto__.push((arguments[i__35612__auto___48191]));

var G__48192 = (i__35612__auto___48191 + (1));
i__35612__auto___48191 = G__48192;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((1) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35619__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__48187){
var map__48188 = p__48187;
var map__48188__$1 = ((((!((map__48188 == null)))?((((map__48188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48188.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48188):map__48188);
var opts = map__48188__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq48185){
var G__48186 = cljs.core.first.call(null,seq48185);
var seq48185__$1 = cljs.core.next.call(null,seq48185);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48186,seq48185__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__48194 = arguments.length;
switch (G__48194) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38562__auto___48240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___48240){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___48240){
return (function (state_48218){
var state_val_48219 = (state_48218[(1)]);
if((state_val_48219 === (7))){
var inst_48214 = (state_48218[(2)]);
var state_48218__$1 = state_48218;
var statearr_48220_48241 = state_48218__$1;
(statearr_48220_48241[(2)] = inst_48214);

(statearr_48220_48241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (1))){
var state_48218__$1 = state_48218;
var statearr_48221_48242 = state_48218__$1;
(statearr_48221_48242[(2)] = null);

(statearr_48221_48242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (4))){
var inst_48197 = (state_48218[(7)]);
var inst_48197__$1 = (state_48218[(2)]);
var inst_48198 = (inst_48197__$1 == null);
var state_48218__$1 = (function (){var statearr_48222 = state_48218;
(statearr_48222[(7)] = inst_48197__$1);

return statearr_48222;
})();
if(cljs.core.truth_(inst_48198)){
var statearr_48223_48243 = state_48218__$1;
(statearr_48223_48243[(1)] = (5));

} else {
var statearr_48224_48244 = state_48218__$1;
(statearr_48224_48244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (13))){
var state_48218__$1 = state_48218;
var statearr_48225_48245 = state_48218__$1;
(statearr_48225_48245[(2)] = null);

(statearr_48225_48245[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (6))){
var inst_48197 = (state_48218[(7)]);
var state_48218__$1 = state_48218;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48218__$1,(11),to,inst_48197);
} else {
if((state_val_48219 === (3))){
var inst_48216 = (state_48218[(2)]);
var state_48218__$1 = state_48218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48218__$1,inst_48216);
} else {
if((state_val_48219 === (12))){
var state_48218__$1 = state_48218;
var statearr_48226_48246 = state_48218__$1;
(statearr_48226_48246[(2)] = null);

(statearr_48226_48246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (2))){
var state_48218__$1 = state_48218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48218__$1,(4),from);
} else {
if((state_val_48219 === (11))){
var inst_48207 = (state_48218[(2)]);
var state_48218__$1 = state_48218;
if(cljs.core.truth_(inst_48207)){
var statearr_48227_48247 = state_48218__$1;
(statearr_48227_48247[(1)] = (12));

} else {
var statearr_48228_48248 = state_48218__$1;
(statearr_48228_48248[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (9))){
var state_48218__$1 = state_48218;
var statearr_48229_48249 = state_48218__$1;
(statearr_48229_48249[(2)] = null);

(statearr_48229_48249[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (5))){
var state_48218__$1 = state_48218;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48230_48250 = state_48218__$1;
(statearr_48230_48250[(1)] = (8));

} else {
var statearr_48231_48251 = state_48218__$1;
(statearr_48231_48251[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (14))){
var inst_48212 = (state_48218[(2)]);
var state_48218__$1 = state_48218;
var statearr_48232_48252 = state_48218__$1;
(statearr_48232_48252[(2)] = inst_48212);

(statearr_48232_48252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (10))){
var inst_48204 = (state_48218[(2)]);
var state_48218__$1 = state_48218;
var statearr_48233_48253 = state_48218__$1;
(statearr_48233_48253[(2)] = inst_48204);

(statearr_48233_48253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48219 === (8))){
var inst_48201 = cljs.core.async.close_BANG_.call(null,to);
var state_48218__$1 = state_48218;
var statearr_48234_48254 = state_48218__$1;
(statearr_48234_48254[(2)] = inst_48201);

(statearr_48234_48254[(1)] = (10));


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
});})(c__38562__auto___48240))
;
return ((function (switch__38474__auto__,c__38562__auto___48240){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_48235 = [null,null,null,null,null,null,null,null];
(statearr_48235[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_48235[(1)] = (1));

return statearr_48235;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_48218){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48236){if((e48236 instanceof Object)){
var ex__38478__auto__ = e48236;
var statearr_48237_48255 = state_48218;
(statearr_48237_48255[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48256 = state_48218;
state_48218 = G__48256;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_48218){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_48218);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___48240))
})();
var state__38564__auto__ = (function (){var statearr_48238 = f__38563__auto__.call(null);
(statearr_48238[(6)] = c__38562__auto___48240);

return statearr_48238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___48240))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__48257){
var vec__48258 = p__48257;
var v = cljs.core.nth.call(null,vec__48258,(0),null);
var p = cljs.core.nth.call(null,vec__48258,(1),null);
var job = vec__48258;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38562__auto___48429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___48429,res,vec__48258,v,p,job,jobs,results){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___48429,res,vec__48258,v,p,job,jobs,results){
return (function (state_48265){
var state_val_48266 = (state_48265[(1)]);
if((state_val_48266 === (1))){
var state_48265__$1 = state_48265;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48265__$1,(2),res,v);
} else {
if((state_val_48266 === (2))){
var inst_48262 = (state_48265[(2)]);
var inst_48263 = cljs.core.async.close_BANG_.call(null,res);
var state_48265__$1 = (function (){var statearr_48267 = state_48265;
(statearr_48267[(7)] = inst_48262);

return statearr_48267;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48265__$1,inst_48263);
} else {
return null;
}
}
});})(c__38562__auto___48429,res,vec__48258,v,p,job,jobs,results))
;
return ((function (switch__38474__auto__,c__38562__auto___48429,res,vec__48258,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_48268 = [null,null,null,null,null,null,null,null];
(statearr_48268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_48268[(1)] = (1));

return statearr_48268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_48265){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48269){if((e48269 instanceof Object)){
var ex__38478__auto__ = e48269;
var statearr_48270_48430 = state_48265;
(statearr_48270_48430[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48431 = state_48265;
state_48265 = G__48431;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_48265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_48265);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___48429,res,vec__48258,v,p,job,jobs,results))
})();
var state__38564__auto__ = (function (){var statearr_48271 = f__38563__auto__.call(null);
(statearr_48271[(6)] = c__38562__auto___48429);

return statearr_48271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___48429,res,vec__48258,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__48272){
var vec__48273 = p__48272;
var v = cljs.core.nth.call(null,vec__48273,(0),null);
var p = cljs.core.nth.call(null,vec__48273,(1),null);
var job = vec__48273;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__35387__auto___48432 = n;
var __48433 = (0);
while(true){
if((__48433 < n__35387__auto___48432)){
var G__48276_48434 = type;
var G__48276_48435__$1 = (((G__48276_48434 instanceof cljs.core.Keyword))?G__48276_48434.fqn:null);
switch (G__48276_48435__$1) {
case "compute":
var c__38562__auto___48437 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48433,c__38562__auto___48437,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (__48433,c__38562__auto___48437,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async){
return (function (state_48289){
var state_val_48290 = (state_48289[(1)]);
if((state_val_48290 === (1))){
var state_48289__$1 = state_48289;
var statearr_48291_48438 = state_48289__$1;
(statearr_48291_48438[(2)] = null);

(statearr_48291_48438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (2))){
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48289__$1,(4),jobs);
} else {
if((state_val_48290 === (3))){
var inst_48287 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48289__$1,inst_48287);
} else {
if((state_val_48290 === (4))){
var inst_48279 = (state_48289[(2)]);
var inst_48280 = process__$1.call(null,inst_48279);
var state_48289__$1 = state_48289;
if(cljs.core.truth_(inst_48280)){
var statearr_48292_48439 = state_48289__$1;
(statearr_48292_48439[(1)] = (5));

} else {
var statearr_48293_48440 = state_48289__$1;
(statearr_48293_48440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (5))){
var state_48289__$1 = state_48289;
var statearr_48294_48441 = state_48289__$1;
(statearr_48294_48441[(2)] = null);

(statearr_48294_48441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (6))){
var state_48289__$1 = state_48289;
var statearr_48295_48442 = state_48289__$1;
(statearr_48295_48442[(2)] = null);

(statearr_48295_48442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48290 === (7))){
var inst_48285 = (state_48289[(2)]);
var state_48289__$1 = state_48289;
var statearr_48296_48443 = state_48289__$1;
(statearr_48296_48443[(2)] = inst_48285);

(statearr_48296_48443[(1)] = (3));


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
});})(__48433,c__38562__auto___48437,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async))
;
return ((function (__48433,switch__38474__auto__,c__38562__auto___48437,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_48297 = [null,null,null,null,null,null,null];
(statearr_48297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_48297[(1)] = (1));

return statearr_48297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_48289){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48298){if((e48298 instanceof Object)){
var ex__38478__auto__ = e48298;
var statearr_48299_48444 = state_48289;
(statearr_48299_48444[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48298;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48445 = state_48289;
state_48289 = G__48445;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_48289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_48289);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(__48433,switch__38474__auto__,c__38562__auto___48437,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async))
})();
var state__38564__auto__ = (function (){var statearr_48300 = f__38563__auto__.call(null);
(statearr_48300[(6)] = c__38562__auto___48437);

return statearr_48300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(__48433,c__38562__auto___48437,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async))
);


break;
case "async":
var c__38562__auto___48446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__48433,c__38562__auto___48446,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (__48433,c__38562__auto___48446,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async){
return (function (state_48313){
var state_val_48314 = (state_48313[(1)]);
if((state_val_48314 === (1))){
var state_48313__$1 = state_48313;
var statearr_48315_48447 = state_48313__$1;
(statearr_48315_48447[(2)] = null);

(statearr_48315_48447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (2))){
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48313__$1,(4),jobs);
} else {
if((state_val_48314 === (3))){
var inst_48311 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48313__$1,inst_48311);
} else {
if((state_val_48314 === (4))){
var inst_48303 = (state_48313[(2)]);
var inst_48304 = async.call(null,inst_48303);
var state_48313__$1 = state_48313;
if(cljs.core.truth_(inst_48304)){
var statearr_48316_48448 = state_48313__$1;
(statearr_48316_48448[(1)] = (5));

} else {
var statearr_48317_48449 = state_48313__$1;
(statearr_48317_48449[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (5))){
var state_48313__$1 = state_48313;
var statearr_48318_48450 = state_48313__$1;
(statearr_48318_48450[(2)] = null);

(statearr_48318_48450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (6))){
var state_48313__$1 = state_48313;
var statearr_48319_48451 = state_48313__$1;
(statearr_48319_48451[(2)] = null);

(statearr_48319_48451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48314 === (7))){
var inst_48309 = (state_48313[(2)]);
var state_48313__$1 = state_48313;
var statearr_48320_48452 = state_48313__$1;
(statearr_48320_48452[(2)] = inst_48309);

(statearr_48320_48452[(1)] = (3));


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
});})(__48433,c__38562__auto___48446,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async))
;
return ((function (__48433,switch__38474__auto__,c__38562__auto___48446,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_48321 = [null,null,null,null,null,null,null];
(statearr_48321[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_48321[(1)] = (1));

return statearr_48321;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_48313){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48322){if((e48322 instanceof Object)){
var ex__38478__auto__ = e48322;
var statearr_48323_48453 = state_48313;
(statearr_48323_48453[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48454 = state_48313;
state_48313 = G__48454;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_48313){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_48313);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(__48433,switch__38474__auto__,c__38562__auto___48446,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async))
})();
var state__38564__auto__ = (function (){var statearr_48324 = f__38563__auto__.call(null);
(statearr_48324[(6)] = c__38562__auto___48446);

return statearr_48324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(__48433,c__38562__auto___48446,G__48276_48434,G__48276_48435__$1,n__35387__auto___48432,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48276_48435__$1)].join('')));

}

var G__48455 = (__48433 + (1));
__48433 = G__48455;
continue;
} else {
}
break;
}

var c__38562__auto___48456 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___48456,jobs,results,process__$1,async){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___48456,jobs,results,process__$1,async){
return (function (state_48346){
var state_val_48347 = (state_48346[(1)]);
if((state_val_48347 === (1))){
var state_48346__$1 = state_48346;
var statearr_48348_48457 = state_48346__$1;
(statearr_48348_48457[(2)] = null);

(statearr_48348_48457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48347 === (2))){
var state_48346__$1 = state_48346;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48346__$1,(4),from);
} else {
if((state_val_48347 === (3))){
var inst_48344 = (state_48346[(2)]);
var state_48346__$1 = state_48346;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48346__$1,inst_48344);
} else {
if((state_val_48347 === (4))){
var inst_48327 = (state_48346[(7)]);
var inst_48327__$1 = (state_48346[(2)]);
var inst_48328 = (inst_48327__$1 == null);
var state_48346__$1 = (function (){var statearr_48349 = state_48346;
(statearr_48349[(7)] = inst_48327__$1);

return statearr_48349;
})();
if(cljs.core.truth_(inst_48328)){
var statearr_48350_48458 = state_48346__$1;
(statearr_48350_48458[(1)] = (5));

} else {
var statearr_48351_48459 = state_48346__$1;
(statearr_48351_48459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48347 === (5))){
var inst_48330 = cljs.core.async.close_BANG_.call(null,jobs);
var state_48346__$1 = state_48346;
var statearr_48352_48460 = state_48346__$1;
(statearr_48352_48460[(2)] = inst_48330);

(statearr_48352_48460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48347 === (6))){
var inst_48327 = (state_48346[(7)]);
var inst_48332 = (state_48346[(8)]);
var inst_48332__$1 = cljs.core.async.chan.call(null,(1));
var inst_48333 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48334 = [inst_48327,inst_48332__$1];
var inst_48335 = (new cljs.core.PersistentVector(null,2,(5),inst_48333,inst_48334,null));
var state_48346__$1 = (function (){var statearr_48353 = state_48346;
(statearr_48353[(8)] = inst_48332__$1);

return statearr_48353;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48346__$1,(8),jobs,inst_48335);
} else {
if((state_val_48347 === (7))){
var inst_48342 = (state_48346[(2)]);
var state_48346__$1 = state_48346;
var statearr_48354_48461 = state_48346__$1;
(statearr_48354_48461[(2)] = inst_48342);

(statearr_48354_48461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48347 === (8))){
var inst_48332 = (state_48346[(8)]);
var inst_48337 = (state_48346[(2)]);
var state_48346__$1 = (function (){var statearr_48355 = state_48346;
(statearr_48355[(9)] = inst_48337);

return statearr_48355;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48346__$1,(9),results,inst_48332);
} else {
if((state_val_48347 === (9))){
var inst_48339 = (state_48346[(2)]);
var state_48346__$1 = (function (){var statearr_48356 = state_48346;
(statearr_48356[(10)] = inst_48339);

return statearr_48356;
})();
var statearr_48357_48462 = state_48346__$1;
(statearr_48357_48462[(2)] = null);

(statearr_48357_48462[(1)] = (2));


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
});})(c__38562__auto___48456,jobs,results,process__$1,async))
;
return ((function (switch__38474__auto__,c__38562__auto___48456,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_48358 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48358[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_48358[(1)] = (1));

return statearr_48358;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_48346){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48346);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48359){if((e48359 instanceof Object)){
var ex__38478__auto__ = e48359;
var statearr_48360_48463 = state_48346;
(statearr_48360_48463[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48359;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48464 = state_48346;
state_48346 = G__48464;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_48346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_48346);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___48456,jobs,results,process__$1,async))
})();
var state__38564__auto__ = (function (){var statearr_48361 = f__38563__auto__.call(null);
(statearr_48361[(6)] = c__38562__auto___48456);

return statearr_48361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___48456,jobs,results,process__$1,async))
);


var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__,jobs,results,process__$1,async){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__,jobs,results,process__$1,async){
return (function (state_48399){
var state_val_48400 = (state_48399[(1)]);
if((state_val_48400 === (7))){
var inst_48395 = (state_48399[(2)]);
var state_48399__$1 = state_48399;
var statearr_48401_48465 = state_48399__$1;
(statearr_48401_48465[(2)] = inst_48395);

(statearr_48401_48465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (20))){
var state_48399__$1 = state_48399;
var statearr_48402_48466 = state_48399__$1;
(statearr_48402_48466[(2)] = null);

(statearr_48402_48466[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (1))){
var state_48399__$1 = state_48399;
var statearr_48403_48467 = state_48399__$1;
(statearr_48403_48467[(2)] = null);

(statearr_48403_48467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (4))){
var inst_48364 = (state_48399[(7)]);
var inst_48364__$1 = (state_48399[(2)]);
var inst_48365 = (inst_48364__$1 == null);
var state_48399__$1 = (function (){var statearr_48404 = state_48399;
(statearr_48404[(7)] = inst_48364__$1);

return statearr_48404;
})();
if(cljs.core.truth_(inst_48365)){
var statearr_48405_48468 = state_48399__$1;
(statearr_48405_48468[(1)] = (5));

} else {
var statearr_48406_48469 = state_48399__$1;
(statearr_48406_48469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (15))){
var inst_48377 = (state_48399[(8)]);
var state_48399__$1 = state_48399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48399__$1,(18),to,inst_48377);
} else {
if((state_val_48400 === (21))){
var inst_48390 = (state_48399[(2)]);
var state_48399__$1 = state_48399;
var statearr_48407_48470 = state_48399__$1;
(statearr_48407_48470[(2)] = inst_48390);

(statearr_48407_48470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (13))){
var inst_48392 = (state_48399[(2)]);
var state_48399__$1 = (function (){var statearr_48408 = state_48399;
(statearr_48408[(9)] = inst_48392);

return statearr_48408;
})();
var statearr_48409_48471 = state_48399__$1;
(statearr_48409_48471[(2)] = null);

(statearr_48409_48471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (6))){
var inst_48364 = (state_48399[(7)]);
var state_48399__$1 = state_48399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48399__$1,(11),inst_48364);
} else {
if((state_val_48400 === (17))){
var inst_48385 = (state_48399[(2)]);
var state_48399__$1 = state_48399;
if(cljs.core.truth_(inst_48385)){
var statearr_48410_48472 = state_48399__$1;
(statearr_48410_48472[(1)] = (19));

} else {
var statearr_48411_48473 = state_48399__$1;
(statearr_48411_48473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (3))){
var inst_48397 = (state_48399[(2)]);
var state_48399__$1 = state_48399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48399__$1,inst_48397);
} else {
if((state_val_48400 === (12))){
var inst_48374 = (state_48399[(10)]);
var state_48399__$1 = state_48399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48399__$1,(14),inst_48374);
} else {
if((state_val_48400 === (2))){
var state_48399__$1 = state_48399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48399__$1,(4),results);
} else {
if((state_val_48400 === (19))){
var state_48399__$1 = state_48399;
var statearr_48412_48474 = state_48399__$1;
(statearr_48412_48474[(2)] = null);

(statearr_48412_48474[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (11))){
var inst_48374 = (state_48399[(2)]);
var state_48399__$1 = (function (){var statearr_48413 = state_48399;
(statearr_48413[(10)] = inst_48374);

return statearr_48413;
})();
var statearr_48414_48475 = state_48399__$1;
(statearr_48414_48475[(2)] = null);

(statearr_48414_48475[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (9))){
var state_48399__$1 = state_48399;
var statearr_48415_48476 = state_48399__$1;
(statearr_48415_48476[(2)] = null);

(statearr_48415_48476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (5))){
var state_48399__$1 = state_48399;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48416_48477 = state_48399__$1;
(statearr_48416_48477[(1)] = (8));

} else {
var statearr_48417_48478 = state_48399__$1;
(statearr_48417_48478[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (14))){
var inst_48377 = (state_48399[(8)]);
var inst_48379 = (state_48399[(11)]);
var inst_48377__$1 = (state_48399[(2)]);
var inst_48378 = (inst_48377__$1 == null);
var inst_48379__$1 = cljs.core.not.call(null,inst_48378);
var state_48399__$1 = (function (){var statearr_48418 = state_48399;
(statearr_48418[(8)] = inst_48377__$1);

(statearr_48418[(11)] = inst_48379__$1);

return statearr_48418;
})();
if(inst_48379__$1){
var statearr_48419_48479 = state_48399__$1;
(statearr_48419_48479[(1)] = (15));

} else {
var statearr_48420_48480 = state_48399__$1;
(statearr_48420_48480[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (16))){
var inst_48379 = (state_48399[(11)]);
var state_48399__$1 = state_48399;
var statearr_48421_48481 = state_48399__$1;
(statearr_48421_48481[(2)] = inst_48379);

(statearr_48421_48481[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (10))){
var inst_48371 = (state_48399[(2)]);
var state_48399__$1 = state_48399;
var statearr_48422_48482 = state_48399__$1;
(statearr_48422_48482[(2)] = inst_48371);

(statearr_48422_48482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (18))){
var inst_48382 = (state_48399[(2)]);
var state_48399__$1 = state_48399;
var statearr_48423_48483 = state_48399__$1;
(statearr_48423_48483[(2)] = inst_48382);

(statearr_48423_48483[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48400 === (8))){
var inst_48368 = cljs.core.async.close_BANG_.call(null,to);
var state_48399__$1 = state_48399;
var statearr_48424_48484 = state_48399__$1;
(statearr_48424_48484[(2)] = inst_48368);

(statearr_48424_48484[(1)] = (10));


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
});})(c__38562__auto__,jobs,results,process__$1,async))
;
return ((function (switch__38474__auto__,c__38562__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_48425 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48425[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__);

(statearr_48425[(1)] = (1));

return statearr_48425;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1 = (function (state_48399){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48426){if((e48426 instanceof Object)){
var ex__38478__auto__ = e48426;
var statearr_48427_48485 = state_48399;
(statearr_48427_48485[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48486 = state_48399;
state_48399 = G__48486;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__ = function(state_48399){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1.call(this,state_48399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__,jobs,results,process__$1,async))
})();
var state__38564__auto__ = (function (){var statearr_48428 = f__38563__auto__.call(null);
(statearr_48428[(6)] = c__38562__auto__);

return statearr_48428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__,jobs,results,process__$1,async))
);

return c__38562__auto__;
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
var G__48488 = arguments.length;
switch (G__48488) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__48491 = arguments.length;
switch (G__48491) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__48494 = arguments.length;
switch (G__48494) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38562__auto___48543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___48543,tc,fc){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___48543,tc,fc){
return (function (state_48520){
var state_val_48521 = (state_48520[(1)]);
if((state_val_48521 === (7))){
var inst_48516 = (state_48520[(2)]);
var state_48520__$1 = state_48520;
var statearr_48522_48544 = state_48520__$1;
(statearr_48522_48544[(2)] = inst_48516);

(statearr_48522_48544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (1))){
var state_48520__$1 = state_48520;
var statearr_48523_48545 = state_48520__$1;
(statearr_48523_48545[(2)] = null);

(statearr_48523_48545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (4))){
var inst_48497 = (state_48520[(7)]);
var inst_48497__$1 = (state_48520[(2)]);
var inst_48498 = (inst_48497__$1 == null);
var state_48520__$1 = (function (){var statearr_48524 = state_48520;
(statearr_48524[(7)] = inst_48497__$1);

return statearr_48524;
})();
if(cljs.core.truth_(inst_48498)){
var statearr_48525_48546 = state_48520__$1;
(statearr_48525_48546[(1)] = (5));

} else {
var statearr_48526_48547 = state_48520__$1;
(statearr_48526_48547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (13))){
var state_48520__$1 = state_48520;
var statearr_48527_48548 = state_48520__$1;
(statearr_48527_48548[(2)] = null);

(statearr_48527_48548[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (6))){
var inst_48497 = (state_48520[(7)]);
var inst_48503 = p.call(null,inst_48497);
var state_48520__$1 = state_48520;
if(cljs.core.truth_(inst_48503)){
var statearr_48528_48549 = state_48520__$1;
(statearr_48528_48549[(1)] = (9));

} else {
var statearr_48529_48550 = state_48520__$1;
(statearr_48529_48550[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (3))){
var inst_48518 = (state_48520[(2)]);
var state_48520__$1 = state_48520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48520__$1,inst_48518);
} else {
if((state_val_48521 === (12))){
var state_48520__$1 = state_48520;
var statearr_48530_48551 = state_48520__$1;
(statearr_48530_48551[(2)] = null);

(statearr_48530_48551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (2))){
var state_48520__$1 = state_48520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48520__$1,(4),ch);
} else {
if((state_val_48521 === (11))){
var inst_48497 = (state_48520[(7)]);
var inst_48507 = (state_48520[(2)]);
var state_48520__$1 = state_48520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48520__$1,(8),inst_48507,inst_48497);
} else {
if((state_val_48521 === (9))){
var state_48520__$1 = state_48520;
var statearr_48531_48552 = state_48520__$1;
(statearr_48531_48552[(2)] = tc);

(statearr_48531_48552[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (5))){
var inst_48500 = cljs.core.async.close_BANG_.call(null,tc);
var inst_48501 = cljs.core.async.close_BANG_.call(null,fc);
var state_48520__$1 = (function (){var statearr_48532 = state_48520;
(statearr_48532[(8)] = inst_48500);

return statearr_48532;
})();
var statearr_48533_48553 = state_48520__$1;
(statearr_48533_48553[(2)] = inst_48501);

(statearr_48533_48553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (14))){
var inst_48514 = (state_48520[(2)]);
var state_48520__$1 = state_48520;
var statearr_48534_48554 = state_48520__$1;
(statearr_48534_48554[(2)] = inst_48514);

(statearr_48534_48554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (10))){
var state_48520__$1 = state_48520;
var statearr_48535_48555 = state_48520__$1;
(statearr_48535_48555[(2)] = fc);

(statearr_48535_48555[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48521 === (8))){
var inst_48509 = (state_48520[(2)]);
var state_48520__$1 = state_48520;
if(cljs.core.truth_(inst_48509)){
var statearr_48536_48556 = state_48520__$1;
(statearr_48536_48556[(1)] = (12));

} else {
var statearr_48537_48557 = state_48520__$1;
(statearr_48537_48557[(1)] = (13));

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
});})(c__38562__auto___48543,tc,fc))
;
return ((function (switch__38474__auto__,c__38562__auto___48543,tc,fc){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_48538 = [null,null,null,null,null,null,null,null,null];
(statearr_48538[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_48538[(1)] = (1));

return statearr_48538;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_48520){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48539){if((e48539 instanceof Object)){
var ex__38478__auto__ = e48539;
var statearr_48540_48558 = state_48520;
(statearr_48540_48558[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48559 = state_48520;
state_48520 = G__48559;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_48520){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_48520);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___48543,tc,fc))
})();
var state__38564__auto__ = (function (){var statearr_48541 = f__38563__auto__.call(null);
(statearr_48541[(6)] = c__38562__auto___48543);

return statearr_48541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___48543,tc,fc))
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
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__){
return (function (state_48580){
var state_val_48581 = (state_48580[(1)]);
if((state_val_48581 === (7))){
var inst_48576 = (state_48580[(2)]);
var state_48580__$1 = state_48580;
var statearr_48582_48600 = state_48580__$1;
(statearr_48582_48600[(2)] = inst_48576);

(statearr_48582_48600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (1))){
var inst_48560 = init;
var state_48580__$1 = (function (){var statearr_48583 = state_48580;
(statearr_48583[(7)] = inst_48560);

return statearr_48583;
})();
var statearr_48584_48601 = state_48580__$1;
(statearr_48584_48601[(2)] = null);

(statearr_48584_48601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (4))){
var inst_48563 = (state_48580[(8)]);
var inst_48563__$1 = (state_48580[(2)]);
var inst_48564 = (inst_48563__$1 == null);
var state_48580__$1 = (function (){var statearr_48585 = state_48580;
(statearr_48585[(8)] = inst_48563__$1);

return statearr_48585;
})();
if(cljs.core.truth_(inst_48564)){
var statearr_48586_48602 = state_48580__$1;
(statearr_48586_48602[(1)] = (5));

} else {
var statearr_48587_48603 = state_48580__$1;
(statearr_48587_48603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (6))){
var inst_48567 = (state_48580[(9)]);
var inst_48563 = (state_48580[(8)]);
var inst_48560 = (state_48580[(7)]);
var inst_48567__$1 = f.call(null,inst_48560,inst_48563);
var inst_48568 = cljs.core.reduced_QMARK_.call(null,inst_48567__$1);
var state_48580__$1 = (function (){var statearr_48588 = state_48580;
(statearr_48588[(9)] = inst_48567__$1);

return statearr_48588;
})();
if(inst_48568){
var statearr_48589_48604 = state_48580__$1;
(statearr_48589_48604[(1)] = (8));

} else {
var statearr_48590_48605 = state_48580__$1;
(statearr_48590_48605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (3))){
var inst_48578 = (state_48580[(2)]);
var state_48580__$1 = state_48580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48580__$1,inst_48578);
} else {
if((state_val_48581 === (2))){
var state_48580__$1 = state_48580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48580__$1,(4),ch);
} else {
if((state_val_48581 === (9))){
var inst_48567 = (state_48580[(9)]);
var inst_48560 = inst_48567;
var state_48580__$1 = (function (){var statearr_48591 = state_48580;
(statearr_48591[(7)] = inst_48560);

return statearr_48591;
})();
var statearr_48592_48606 = state_48580__$1;
(statearr_48592_48606[(2)] = null);

(statearr_48592_48606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (5))){
var inst_48560 = (state_48580[(7)]);
var state_48580__$1 = state_48580;
var statearr_48593_48607 = state_48580__$1;
(statearr_48593_48607[(2)] = inst_48560);

(statearr_48593_48607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (10))){
var inst_48574 = (state_48580[(2)]);
var state_48580__$1 = state_48580;
var statearr_48594_48608 = state_48580__$1;
(statearr_48594_48608[(2)] = inst_48574);

(statearr_48594_48608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48581 === (8))){
var inst_48567 = (state_48580[(9)]);
var inst_48570 = cljs.core.deref.call(null,inst_48567);
var state_48580__$1 = state_48580;
var statearr_48595_48609 = state_48580__$1;
(statearr_48595_48609[(2)] = inst_48570);

(statearr_48595_48609[(1)] = (10));


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
});})(c__38562__auto__))
;
return ((function (switch__38474__auto__,c__38562__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38475__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38475__auto____0 = (function (){
var statearr_48596 = [null,null,null,null,null,null,null,null,null,null];
(statearr_48596[(0)] = cljs$core$async$reduce_$_state_machine__38475__auto__);

(statearr_48596[(1)] = (1));

return statearr_48596;
});
var cljs$core$async$reduce_$_state_machine__38475__auto____1 = (function (state_48580){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48597){if((e48597 instanceof Object)){
var ex__38478__auto__ = e48597;
var statearr_48598_48610 = state_48580;
(statearr_48598_48610[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48611 = state_48580;
state_48580 = G__48611;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38475__auto__ = function(state_48580){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38475__auto____1.call(this,state_48580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38475__auto____0;
cljs$core$async$reduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38475__auto____1;
return cljs$core$async$reduce_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__))
})();
var state__38564__auto__ = (function (){var statearr_48599 = f__38563__auto__.call(null);
(statearr_48599[(6)] = c__38562__auto__);

return statearr_48599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__))
);

return c__38562__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__,f__$1){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__,f__$1){
return (function (state_48617){
var state_val_48618 = (state_48617[(1)]);
if((state_val_48618 === (1))){
var inst_48612 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_48617__$1 = state_48617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48617__$1,(2),inst_48612);
} else {
if((state_val_48618 === (2))){
var inst_48614 = (state_48617[(2)]);
var inst_48615 = f__$1.call(null,inst_48614);
var state_48617__$1 = state_48617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48617__$1,inst_48615);
} else {
return null;
}
}
});})(c__38562__auto__,f__$1))
;
return ((function (switch__38474__auto__,c__38562__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__38475__auto__ = null;
var cljs$core$async$transduce_$_state_machine__38475__auto____0 = (function (){
var statearr_48619 = [null,null,null,null,null,null,null];
(statearr_48619[(0)] = cljs$core$async$transduce_$_state_machine__38475__auto__);

(statearr_48619[(1)] = (1));

return statearr_48619;
});
var cljs$core$async$transduce_$_state_machine__38475__auto____1 = (function (state_48617){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48620){if((e48620 instanceof Object)){
var ex__38478__auto__ = e48620;
var statearr_48621_48623 = state_48617;
(statearr_48621_48623[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48624 = state_48617;
state_48617 = G__48624;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__38475__auto__ = function(state_48617){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__38475__auto____1.call(this,state_48617);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__38475__auto____0;
cljs$core$async$transduce_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__38475__auto____1;
return cljs$core$async$transduce_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__,f__$1))
})();
var state__38564__auto__ = (function (){var statearr_48622 = f__38563__auto__.call(null);
(statearr_48622[(6)] = c__38562__auto__);

return statearr_48622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__,f__$1))
);

return c__38562__auto__;
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
var G__48626 = arguments.length;
switch (G__48626) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__){
return (function (state_48651){
var state_val_48652 = (state_48651[(1)]);
if((state_val_48652 === (7))){
var inst_48633 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48653_48674 = state_48651__$1;
(statearr_48653_48674[(2)] = inst_48633);

(statearr_48653_48674[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (1))){
var inst_48627 = cljs.core.seq.call(null,coll);
var inst_48628 = inst_48627;
var state_48651__$1 = (function (){var statearr_48654 = state_48651;
(statearr_48654[(7)] = inst_48628);

return statearr_48654;
})();
var statearr_48655_48675 = state_48651__$1;
(statearr_48655_48675[(2)] = null);

(statearr_48655_48675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (4))){
var inst_48628 = (state_48651[(7)]);
var inst_48631 = cljs.core.first.call(null,inst_48628);
var state_48651__$1 = state_48651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48651__$1,(7),ch,inst_48631);
} else {
if((state_val_48652 === (13))){
var inst_48645 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48656_48676 = state_48651__$1;
(statearr_48656_48676[(2)] = inst_48645);

(statearr_48656_48676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (6))){
var inst_48636 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
if(cljs.core.truth_(inst_48636)){
var statearr_48657_48677 = state_48651__$1;
(statearr_48657_48677[(1)] = (8));

} else {
var statearr_48658_48678 = state_48651__$1;
(statearr_48658_48678[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (3))){
var inst_48649 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48651__$1,inst_48649);
} else {
if((state_val_48652 === (12))){
var state_48651__$1 = state_48651;
var statearr_48659_48679 = state_48651__$1;
(statearr_48659_48679[(2)] = null);

(statearr_48659_48679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (2))){
var inst_48628 = (state_48651[(7)]);
var state_48651__$1 = state_48651;
if(cljs.core.truth_(inst_48628)){
var statearr_48660_48680 = state_48651__$1;
(statearr_48660_48680[(1)] = (4));

} else {
var statearr_48661_48681 = state_48651__$1;
(statearr_48661_48681[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (11))){
var inst_48642 = cljs.core.async.close_BANG_.call(null,ch);
var state_48651__$1 = state_48651;
var statearr_48662_48682 = state_48651__$1;
(statearr_48662_48682[(2)] = inst_48642);

(statearr_48662_48682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (9))){
var state_48651__$1 = state_48651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_48663_48683 = state_48651__$1;
(statearr_48663_48683[(1)] = (11));

} else {
var statearr_48664_48684 = state_48651__$1;
(statearr_48664_48684[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (5))){
var inst_48628 = (state_48651[(7)]);
var state_48651__$1 = state_48651;
var statearr_48665_48685 = state_48651__$1;
(statearr_48665_48685[(2)] = inst_48628);

(statearr_48665_48685[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (10))){
var inst_48647 = (state_48651[(2)]);
var state_48651__$1 = state_48651;
var statearr_48666_48686 = state_48651__$1;
(statearr_48666_48686[(2)] = inst_48647);

(statearr_48666_48686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48652 === (8))){
var inst_48628 = (state_48651[(7)]);
var inst_48638 = cljs.core.next.call(null,inst_48628);
var inst_48628__$1 = inst_48638;
var state_48651__$1 = (function (){var statearr_48667 = state_48651;
(statearr_48667[(7)] = inst_48628__$1);

return statearr_48667;
})();
var statearr_48668_48687 = state_48651__$1;
(statearr_48668_48687[(2)] = null);

(statearr_48668_48687[(1)] = (2));


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
});})(c__38562__auto__))
;
return ((function (switch__38474__auto__,c__38562__auto__){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_48669 = [null,null,null,null,null,null,null,null];
(statearr_48669[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_48669[(1)] = (1));

return statearr_48669;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_48651){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48670){if((e48670 instanceof Object)){
var ex__38478__auto__ = e48670;
var statearr_48671_48688 = state_48651;
(statearr_48671_48688[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48689 = state_48651;
state_48651 = G__48689;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_48651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_48651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__))
})();
var state__38564__auto__ = (function (){var statearr_48672 = f__38563__auto__.call(null);
(statearr_48672[(6)] = c__38562__auto__);

return statearr_48672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__))
);

return c__38562__auto__;
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
var x__35125__auto__ = (((_ == null))?null:_);
var m__35126__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,_);
} else {
var m__35126__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,_);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35126__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m,ch);
} else {
var m__35126__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m,ch);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m);
} else {
var m__35126__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async48690 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48690 = (function (ch,cs,meta48691){
this.ch = ch;
this.cs = cs;
this.meta48691 = meta48691;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_48692,meta48691__$1){
var self__ = this;
var _48692__$1 = this;
return (new cljs.core.async.t_cljs$core$async48690(self__.ch,self__.cs,meta48691__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_48692){
var self__ = this;
var _48692__$1 = this;
return self__.meta48691;
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta48691","meta48691",-38391824,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async48690.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48690.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48690";

cljs.core.async.t_cljs$core$async48690.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async48690");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async48690 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async48690(ch__$1,cs__$1,meta48691){
return (new cljs.core.async.t_cljs$core$async48690(ch__$1,cs__$1,meta48691));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async48690(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__38562__auto___48912 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___48912,cs,m,dchan,dctr,done){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___48912,cs,m,dchan,dctr,done){
return (function (state_48827){
var state_val_48828 = (state_48827[(1)]);
if((state_val_48828 === (7))){
var inst_48823 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48829_48913 = state_48827__$1;
(statearr_48829_48913[(2)] = inst_48823);

(statearr_48829_48913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (20))){
var inst_48726 = (state_48827[(7)]);
var inst_48738 = cljs.core.first.call(null,inst_48726);
var inst_48739 = cljs.core.nth.call(null,inst_48738,(0),null);
var inst_48740 = cljs.core.nth.call(null,inst_48738,(1),null);
var state_48827__$1 = (function (){var statearr_48830 = state_48827;
(statearr_48830[(8)] = inst_48739);

return statearr_48830;
})();
if(cljs.core.truth_(inst_48740)){
var statearr_48831_48914 = state_48827__$1;
(statearr_48831_48914[(1)] = (22));

} else {
var statearr_48832_48915 = state_48827__$1;
(statearr_48832_48915[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (27))){
var inst_48775 = (state_48827[(9)]);
var inst_48768 = (state_48827[(10)]);
var inst_48695 = (state_48827[(11)]);
var inst_48770 = (state_48827[(12)]);
var inst_48775__$1 = cljs.core._nth.call(null,inst_48768,inst_48770);
var inst_48776 = cljs.core.async.put_BANG_.call(null,inst_48775__$1,inst_48695,done);
var state_48827__$1 = (function (){var statearr_48833 = state_48827;
(statearr_48833[(9)] = inst_48775__$1);

return statearr_48833;
})();
if(cljs.core.truth_(inst_48776)){
var statearr_48834_48916 = state_48827__$1;
(statearr_48834_48916[(1)] = (30));

} else {
var statearr_48835_48917 = state_48827__$1;
(statearr_48835_48917[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (1))){
var state_48827__$1 = state_48827;
var statearr_48836_48918 = state_48827__$1;
(statearr_48836_48918[(2)] = null);

(statearr_48836_48918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (24))){
var inst_48726 = (state_48827[(7)]);
var inst_48745 = (state_48827[(2)]);
var inst_48746 = cljs.core.next.call(null,inst_48726);
var inst_48704 = inst_48746;
var inst_48705 = null;
var inst_48706 = (0);
var inst_48707 = (0);
var state_48827__$1 = (function (){var statearr_48837 = state_48827;
(statearr_48837[(13)] = inst_48745);

(statearr_48837[(14)] = inst_48706);

(statearr_48837[(15)] = inst_48704);

(statearr_48837[(16)] = inst_48705);

(statearr_48837[(17)] = inst_48707);

return statearr_48837;
})();
var statearr_48838_48919 = state_48827__$1;
(statearr_48838_48919[(2)] = null);

(statearr_48838_48919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (39))){
var state_48827__$1 = state_48827;
var statearr_48842_48920 = state_48827__$1;
(statearr_48842_48920[(2)] = null);

(statearr_48842_48920[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (4))){
var inst_48695 = (state_48827[(11)]);
var inst_48695__$1 = (state_48827[(2)]);
var inst_48696 = (inst_48695__$1 == null);
var state_48827__$1 = (function (){var statearr_48843 = state_48827;
(statearr_48843[(11)] = inst_48695__$1);

return statearr_48843;
})();
if(cljs.core.truth_(inst_48696)){
var statearr_48844_48921 = state_48827__$1;
(statearr_48844_48921[(1)] = (5));

} else {
var statearr_48845_48922 = state_48827__$1;
(statearr_48845_48922[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (15))){
var inst_48706 = (state_48827[(14)]);
var inst_48704 = (state_48827[(15)]);
var inst_48705 = (state_48827[(16)]);
var inst_48707 = (state_48827[(17)]);
var inst_48722 = (state_48827[(2)]);
var inst_48723 = (inst_48707 + (1));
var tmp48839 = inst_48706;
var tmp48840 = inst_48704;
var tmp48841 = inst_48705;
var inst_48704__$1 = tmp48840;
var inst_48705__$1 = tmp48841;
var inst_48706__$1 = tmp48839;
var inst_48707__$1 = inst_48723;
var state_48827__$1 = (function (){var statearr_48846 = state_48827;
(statearr_48846[(18)] = inst_48722);

(statearr_48846[(14)] = inst_48706__$1);

(statearr_48846[(15)] = inst_48704__$1);

(statearr_48846[(16)] = inst_48705__$1);

(statearr_48846[(17)] = inst_48707__$1);

return statearr_48846;
})();
var statearr_48847_48923 = state_48827__$1;
(statearr_48847_48923[(2)] = null);

(statearr_48847_48923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (21))){
var inst_48749 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48851_48924 = state_48827__$1;
(statearr_48851_48924[(2)] = inst_48749);

(statearr_48851_48924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (31))){
var inst_48775 = (state_48827[(9)]);
var inst_48779 = done.call(null,null);
var inst_48780 = cljs.core.async.untap_STAR_.call(null,m,inst_48775);
var state_48827__$1 = (function (){var statearr_48852 = state_48827;
(statearr_48852[(19)] = inst_48779);

return statearr_48852;
})();
var statearr_48853_48925 = state_48827__$1;
(statearr_48853_48925[(2)] = inst_48780);

(statearr_48853_48925[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (32))){
var inst_48768 = (state_48827[(10)]);
var inst_48769 = (state_48827[(20)]);
var inst_48767 = (state_48827[(21)]);
var inst_48770 = (state_48827[(12)]);
var inst_48782 = (state_48827[(2)]);
var inst_48783 = (inst_48770 + (1));
var tmp48848 = inst_48768;
var tmp48849 = inst_48769;
var tmp48850 = inst_48767;
var inst_48767__$1 = tmp48850;
var inst_48768__$1 = tmp48848;
var inst_48769__$1 = tmp48849;
var inst_48770__$1 = inst_48783;
var state_48827__$1 = (function (){var statearr_48854 = state_48827;
(statearr_48854[(10)] = inst_48768__$1);

(statearr_48854[(20)] = inst_48769__$1);

(statearr_48854[(22)] = inst_48782);

(statearr_48854[(21)] = inst_48767__$1);

(statearr_48854[(12)] = inst_48770__$1);

return statearr_48854;
})();
var statearr_48855_48926 = state_48827__$1;
(statearr_48855_48926[(2)] = null);

(statearr_48855_48926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (40))){
var inst_48795 = (state_48827[(23)]);
var inst_48799 = done.call(null,null);
var inst_48800 = cljs.core.async.untap_STAR_.call(null,m,inst_48795);
var state_48827__$1 = (function (){var statearr_48856 = state_48827;
(statearr_48856[(24)] = inst_48799);

return statearr_48856;
})();
var statearr_48857_48927 = state_48827__$1;
(statearr_48857_48927[(2)] = inst_48800);

(statearr_48857_48927[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (33))){
var inst_48786 = (state_48827[(25)]);
var inst_48788 = cljs.core.chunked_seq_QMARK_.call(null,inst_48786);
var state_48827__$1 = state_48827;
if(inst_48788){
var statearr_48858_48928 = state_48827__$1;
(statearr_48858_48928[(1)] = (36));

} else {
var statearr_48859_48929 = state_48827__$1;
(statearr_48859_48929[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (13))){
var inst_48716 = (state_48827[(26)]);
var inst_48719 = cljs.core.async.close_BANG_.call(null,inst_48716);
var state_48827__$1 = state_48827;
var statearr_48860_48930 = state_48827__$1;
(statearr_48860_48930[(2)] = inst_48719);

(statearr_48860_48930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (22))){
var inst_48739 = (state_48827[(8)]);
var inst_48742 = cljs.core.async.close_BANG_.call(null,inst_48739);
var state_48827__$1 = state_48827;
var statearr_48861_48931 = state_48827__$1;
(statearr_48861_48931[(2)] = inst_48742);

(statearr_48861_48931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (36))){
var inst_48786 = (state_48827[(25)]);
var inst_48790 = cljs.core.chunk_first.call(null,inst_48786);
var inst_48791 = cljs.core.chunk_rest.call(null,inst_48786);
var inst_48792 = cljs.core.count.call(null,inst_48790);
var inst_48767 = inst_48791;
var inst_48768 = inst_48790;
var inst_48769 = inst_48792;
var inst_48770 = (0);
var state_48827__$1 = (function (){var statearr_48862 = state_48827;
(statearr_48862[(10)] = inst_48768);

(statearr_48862[(20)] = inst_48769);

(statearr_48862[(21)] = inst_48767);

(statearr_48862[(12)] = inst_48770);

return statearr_48862;
})();
var statearr_48863_48932 = state_48827__$1;
(statearr_48863_48932[(2)] = null);

(statearr_48863_48932[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (41))){
var inst_48786 = (state_48827[(25)]);
var inst_48802 = (state_48827[(2)]);
var inst_48803 = cljs.core.next.call(null,inst_48786);
var inst_48767 = inst_48803;
var inst_48768 = null;
var inst_48769 = (0);
var inst_48770 = (0);
var state_48827__$1 = (function (){var statearr_48864 = state_48827;
(statearr_48864[(10)] = inst_48768);

(statearr_48864[(27)] = inst_48802);

(statearr_48864[(20)] = inst_48769);

(statearr_48864[(21)] = inst_48767);

(statearr_48864[(12)] = inst_48770);

return statearr_48864;
})();
var statearr_48865_48933 = state_48827__$1;
(statearr_48865_48933[(2)] = null);

(statearr_48865_48933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (43))){
var state_48827__$1 = state_48827;
var statearr_48866_48934 = state_48827__$1;
(statearr_48866_48934[(2)] = null);

(statearr_48866_48934[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (29))){
var inst_48811 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48867_48935 = state_48827__$1;
(statearr_48867_48935[(2)] = inst_48811);

(statearr_48867_48935[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (44))){
var inst_48820 = (state_48827[(2)]);
var state_48827__$1 = (function (){var statearr_48868 = state_48827;
(statearr_48868[(28)] = inst_48820);

return statearr_48868;
})();
var statearr_48869_48936 = state_48827__$1;
(statearr_48869_48936[(2)] = null);

(statearr_48869_48936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (6))){
var inst_48759 = (state_48827[(29)]);
var inst_48758 = cljs.core.deref.call(null,cs);
var inst_48759__$1 = cljs.core.keys.call(null,inst_48758);
var inst_48760 = cljs.core.count.call(null,inst_48759__$1);
var inst_48761 = cljs.core.reset_BANG_.call(null,dctr,inst_48760);
var inst_48766 = cljs.core.seq.call(null,inst_48759__$1);
var inst_48767 = inst_48766;
var inst_48768 = null;
var inst_48769 = (0);
var inst_48770 = (0);
var state_48827__$1 = (function (){var statearr_48870 = state_48827;
(statearr_48870[(29)] = inst_48759__$1);

(statearr_48870[(10)] = inst_48768);

(statearr_48870[(20)] = inst_48769);

(statearr_48870[(30)] = inst_48761);

(statearr_48870[(21)] = inst_48767);

(statearr_48870[(12)] = inst_48770);

return statearr_48870;
})();
var statearr_48871_48937 = state_48827__$1;
(statearr_48871_48937[(2)] = null);

(statearr_48871_48937[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (28))){
var inst_48767 = (state_48827[(21)]);
var inst_48786 = (state_48827[(25)]);
var inst_48786__$1 = cljs.core.seq.call(null,inst_48767);
var state_48827__$1 = (function (){var statearr_48872 = state_48827;
(statearr_48872[(25)] = inst_48786__$1);

return statearr_48872;
})();
if(inst_48786__$1){
var statearr_48873_48938 = state_48827__$1;
(statearr_48873_48938[(1)] = (33));

} else {
var statearr_48874_48939 = state_48827__$1;
(statearr_48874_48939[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (25))){
var inst_48769 = (state_48827[(20)]);
var inst_48770 = (state_48827[(12)]);
var inst_48772 = (inst_48770 < inst_48769);
var inst_48773 = inst_48772;
var state_48827__$1 = state_48827;
if(cljs.core.truth_(inst_48773)){
var statearr_48875_48940 = state_48827__$1;
(statearr_48875_48940[(1)] = (27));

} else {
var statearr_48876_48941 = state_48827__$1;
(statearr_48876_48941[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (34))){
var state_48827__$1 = state_48827;
var statearr_48877_48942 = state_48827__$1;
(statearr_48877_48942[(2)] = null);

(statearr_48877_48942[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (17))){
var state_48827__$1 = state_48827;
var statearr_48878_48943 = state_48827__$1;
(statearr_48878_48943[(2)] = null);

(statearr_48878_48943[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (3))){
var inst_48825 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48827__$1,inst_48825);
} else {
if((state_val_48828 === (12))){
var inst_48754 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48879_48944 = state_48827__$1;
(statearr_48879_48944[(2)] = inst_48754);

(statearr_48879_48944[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (2))){
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48827__$1,(4),ch);
} else {
if((state_val_48828 === (23))){
var state_48827__$1 = state_48827;
var statearr_48880_48945 = state_48827__$1;
(statearr_48880_48945[(2)] = null);

(statearr_48880_48945[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (35))){
var inst_48809 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48881_48946 = state_48827__$1;
(statearr_48881_48946[(2)] = inst_48809);

(statearr_48881_48946[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (19))){
var inst_48726 = (state_48827[(7)]);
var inst_48730 = cljs.core.chunk_first.call(null,inst_48726);
var inst_48731 = cljs.core.chunk_rest.call(null,inst_48726);
var inst_48732 = cljs.core.count.call(null,inst_48730);
var inst_48704 = inst_48731;
var inst_48705 = inst_48730;
var inst_48706 = inst_48732;
var inst_48707 = (0);
var state_48827__$1 = (function (){var statearr_48882 = state_48827;
(statearr_48882[(14)] = inst_48706);

(statearr_48882[(15)] = inst_48704);

(statearr_48882[(16)] = inst_48705);

(statearr_48882[(17)] = inst_48707);

return statearr_48882;
})();
var statearr_48883_48947 = state_48827__$1;
(statearr_48883_48947[(2)] = null);

(statearr_48883_48947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (11))){
var inst_48704 = (state_48827[(15)]);
var inst_48726 = (state_48827[(7)]);
var inst_48726__$1 = cljs.core.seq.call(null,inst_48704);
var state_48827__$1 = (function (){var statearr_48884 = state_48827;
(statearr_48884[(7)] = inst_48726__$1);

return statearr_48884;
})();
if(inst_48726__$1){
var statearr_48885_48948 = state_48827__$1;
(statearr_48885_48948[(1)] = (16));

} else {
var statearr_48886_48949 = state_48827__$1;
(statearr_48886_48949[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (9))){
var inst_48756 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48887_48950 = state_48827__$1;
(statearr_48887_48950[(2)] = inst_48756);

(statearr_48887_48950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (5))){
var inst_48702 = cljs.core.deref.call(null,cs);
var inst_48703 = cljs.core.seq.call(null,inst_48702);
var inst_48704 = inst_48703;
var inst_48705 = null;
var inst_48706 = (0);
var inst_48707 = (0);
var state_48827__$1 = (function (){var statearr_48888 = state_48827;
(statearr_48888[(14)] = inst_48706);

(statearr_48888[(15)] = inst_48704);

(statearr_48888[(16)] = inst_48705);

(statearr_48888[(17)] = inst_48707);

return statearr_48888;
})();
var statearr_48889_48951 = state_48827__$1;
(statearr_48889_48951[(2)] = null);

(statearr_48889_48951[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (14))){
var state_48827__$1 = state_48827;
var statearr_48890_48952 = state_48827__$1;
(statearr_48890_48952[(2)] = null);

(statearr_48890_48952[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (45))){
var inst_48817 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48891_48953 = state_48827__$1;
(statearr_48891_48953[(2)] = inst_48817);

(statearr_48891_48953[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (26))){
var inst_48759 = (state_48827[(29)]);
var inst_48813 = (state_48827[(2)]);
var inst_48814 = cljs.core.seq.call(null,inst_48759);
var state_48827__$1 = (function (){var statearr_48892 = state_48827;
(statearr_48892[(31)] = inst_48813);

return statearr_48892;
})();
if(inst_48814){
var statearr_48893_48954 = state_48827__$1;
(statearr_48893_48954[(1)] = (42));

} else {
var statearr_48894_48955 = state_48827__$1;
(statearr_48894_48955[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (16))){
var inst_48726 = (state_48827[(7)]);
var inst_48728 = cljs.core.chunked_seq_QMARK_.call(null,inst_48726);
var state_48827__$1 = state_48827;
if(inst_48728){
var statearr_48895_48956 = state_48827__$1;
(statearr_48895_48956[(1)] = (19));

} else {
var statearr_48896_48957 = state_48827__$1;
(statearr_48896_48957[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (38))){
var inst_48806 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48897_48958 = state_48827__$1;
(statearr_48897_48958[(2)] = inst_48806);

(statearr_48897_48958[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (30))){
var state_48827__$1 = state_48827;
var statearr_48898_48959 = state_48827__$1;
(statearr_48898_48959[(2)] = null);

(statearr_48898_48959[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (10))){
var inst_48705 = (state_48827[(16)]);
var inst_48707 = (state_48827[(17)]);
var inst_48715 = cljs.core._nth.call(null,inst_48705,inst_48707);
var inst_48716 = cljs.core.nth.call(null,inst_48715,(0),null);
var inst_48717 = cljs.core.nth.call(null,inst_48715,(1),null);
var state_48827__$1 = (function (){var statearr_48899 = state_48827;
(statearr_48899[(26)] = inst_48716);

return statearr_48899;
})();
if(cljs.core.truth_(inst_48717)){
var statearr_48900_48960 = state_48827__$1;
(statearr_48900_48960[(1)] = (13));

} else {
var statearr_48901_48961 = state_48827__$1;
(statearr_48901_48961[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (18))){
var inst_48752 = (state_48827[(2)]);
var state_48827__$1 = state_48827;
var statearr_48902_48962 = state_48827__$1;
(statearr_48902_48962[(2)] = inst_48752);

(statearr_48902_48962[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (42))){
var state_48827__$1 = state_48827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48827__$1,(45),dchan);
} else {
if((state_val_48828 === (37))){
var inst_48695 = (state_48827[(11)]);
var inst_48786 = (state_48827[(25)]);
var inst_48795 = (state_48827[(23)]);
var inst_48795__$1 = cljs.core.first.call(null,inst_48786);
var inst_48796 = cljs.core.async.put_BANG_.call(null,inst_48795__$1,inst_48695,done);
var state_48827__$1 = (function (){var statearr_48903 = state_48827;
(statearr_48903[(23)] = inst_48795__$1);

return statearr_48903;
})();
if(cljs.core.truth_(inst_48796)){
var statearr_48904_48963 = state_48827__$1;
(statearr_48904_48963[(1)] = (39));

} else {
var statearr_48905_48964 = state_48827__$1;
(statearr_48905_48964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48828 === (8))){
var inst_48706 = (state_48827[(14)]);
var inst_48707 = (state_48827[(17)]);
var inst_48709 = (inst_48707 < inst_48706);
var inst_48710 = inst_48709;
var state_48827__$1 = state_48827;
if(cljs.core.truth_(inst_48710)){
var statearr_48906_48965 = state_48827__$1;
(statearr_48906_48965[(1)] = (10));

} else {
var statearr_48907_48966 = state_48827__$1;
(statearr_48907_48966[(1)] = (11));

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
});})(c__38562__auto___48912,cs,m,dchan,dctr,done))
;
return ((function (switch__38474__auto__,c__38562__auto___48912,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38475__auto__ = null;
var cljs$core$async$mult_$_state_machine__38475__auto____0 = (function (){
var statearr_48908 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48908[(0)] = cljs$core$async$mult_$_state_machine__38475__auto__);

(statearr_48908[(1)] = (1));

return statearr_48908;
});
var cljs$core$async$mult_$_state_machine__38475__auto____1 = (function (state_48827){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_48827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e48909){if((e48909 instanceof Object)){
var ex__38478__auto__ = e48909;
var statearr_48910_48967 = state_48827;
(statearr_48910_48967[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48909;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48968 = state_48827;
state_48827 = G__48968;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38475__auto__ = function(state_48827){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38475__auto____1.call(this,state_48827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38475__auto____0;
cljs$core$async$mult_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38475__auto____1;
return cljs$core$async$mult_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___48912,cs,m,dchan,dctr,done))
})();
var state__38564__auto__ = (function (){var statearr_48911 = f__38563__auto__.call(null);
(statearr_48911[(6)] = c__38562__auto___48912);

return statearr_48911;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___48912,cs,m,dchan,dctr,done))
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
var G__48970 = arguments.length;
switch (G__48970) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m,ch);
} else {
var m__35126__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m,ch);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m,ch);
} else {
var m__35126__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m,ch);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m);
} else {
var m__35126__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m,state_map);
} else {
var m__35126__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m,state_map);
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
var x__35125__auto__ = (((m == null))?null:m);
var m__35126__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,m,mode);
} else {
var m__35126__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35618__auto__ = [];
var len__35611__auto___48982 = arguments.length;
var i__35612__auto___48983 = (0);
while(true){
if((i__35612__auto___48983 < len__35611__auto___48982)){
args__35618__auto__.push((arguments[i__35612__auto___48983]));

var G__48984 = (i__35612__auto___48983 + (1));
i__35612__auto___48983 = G__48984;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((3) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35619__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__48976){
var map__48977 = p__48976;
var map__48977__$1 = ((((!((map__48977 == null)))?((((map__48977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48977):map__48977);
var opts = map__48977__$1;
var statearr_48979_48985 = state;
(statearr_48979_48985[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__48977,map__48977__$1,opts){
return (function (val){
var statearr_48980_48986 = state;
(statearr_48980_48986[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__48977,map__48977__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_48981_48987 = state;
(statearr_48981_48987[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq48972){
var G__48973 = cljs.core.first.call(null,seq48972);
var seq48972__$1 = cljs.core.next.call(null,seq48972);
var G__48974 = cljs.core.first.call(null,seq48972__$1);
var seq48972__$2 = cljs.core.next.call(null,seq48972__$1);
var G__48975 = cljs.core.first.call(null,seq48972__$2);
var seq48972__$3 = cljs.core.next.call(null,seq48972__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__48973,G__48974,G__48975,seq48972__$3);
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
if(typeof cljs.core.async.t_cljs$core$async48988 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48988 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta48989){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta48989 = meta48989;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48990,meta48989__$1){
var self__ = this;
var _48990__$1 = this;
return (new cljs.core.async.t_cljs$core$async48988(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta48989__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_48990){
var self__ = this;
var _48990__$1 = this;
return self__.meta48989;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta48989","meta48989",-626958397,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async48988.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async48988.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48988";

cljs.core.async.t_cljs$core$async48988.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async48988");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async48988 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async48988(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48989){
return (new cljs.core.async.t_cljs$core$async48988(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta48989));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async48988(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38562__auto___49152 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49092){
var state_val_49093 = (state_49092[(1)]);
if((state_val_49093 === (7))){
var inst_49007 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49094_49153 = state_49092__$1;
(statearr_49094_49153[(2)] = inst_49007);

(statearr_49094_49153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (20))){
var inst_49019 = (state_49092[(7)]);
var state_49092__$1 = state_49092;
var statearr_49095_49154 = state_49092__$1;
(statearr_49095_49154[(2)] = inst_49019);

(statearr_49095_49154[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (27))){
var state_49092__$1 = state_49092;
var statearr_49096_49155 = state_49092__$1;
(statearr_49096_49155[(2)] = null);

(statearr_49096_49155[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (1))){
var inst_48994 = (state_49092[(8)]);
var inst_48994__$1 = calc_state.call(null);
var inst_48996 = (inst_48994__$1 == null);
var inst_48997 = cljs.core.not.call(null,inst_48996);
var state_49092__$1 = (function (){var statearr_49097 = state_49092;
(statearr_49097[(8)] = inst_48994__$1);

return statearr_49097;
})();
if(inst_48997){
var statearr_49098_49156 = state_49092__$1;
(statearr_49098_49156[(1)] = (2));

} else {
var statearr_49099_49157 = state_49092__$1;
(statearr_49099_49157[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (24))){
var inst_49052 = (state_49092[(9)]);
var inst_49066 = (state_49092[(10)]);
var inst_49043 = (state_49092[(11)]);
var inst_49066__$1 = inst_49043.call(null,inst_49052);
var state_49092__$1 = (function (){var statearr_49100 = state_49092;
(statearr_49100[(10)] = inst_49066__$1);

return statearr_49100;
})();
if(cljs.core.truth_(inst_49066__$1)){
var statearr_49101_49158 = state_49092__$1;
(statearr_49101_49158[(1)] = (29));

} else {
var statearr_49102_49159 = state_49092__$1;
(statearr_49102_49159[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (4))){
var inst_49010 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49010)){
var statearr_49103_49160 = state_49092__$1;
(statearr_49103_49160[(1)] = (8));

} else {
var statearr_49104_49161 = state_49092__$1;
(statearr_49104_49161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (15))){
var inst_49037 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49037)){
var statearr_49105_49162 = state_49092__$1;
(statearr_49105_49162[(1)] = (19));

} else {
var statearr_49106_49163 = state_49092__$1;
(statearr_49106_49163[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (21))){
var inst_49042 = (state_49092[(12)]);
var inst_49042__$1 = (state_49092[(2)]);
var inst_49043 = cljs.core.get.call(null,inst_49042__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49044 = cljs.core.get.call(null,inst_49042__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49045 = cljs.core.get.call(null,inst_49042__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_49092__$1 = (function (){var statearr_49107 = state_49092;
(statearr_49107[(12)] = inst_49042__$1);

(statearr_49107[(13)] = inst_49044);

(statearr_49107[(11)] = inst_49043);

return statearr_49107;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_49092__$1,(22),inst_49045);
} else {
if((state_val_49093 === (31))){
var inst_49074 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49074)){
var statearr_49108_49164 = state_49092__$1;
(statearr_49108_49164[(1)] = (32));

} else {
var statearr_49109_49165 = state_49092__$1;
(statearr_49109_49165[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (32))){
var inst_49051 = (state_49092[(14)]);
var state_49092__$1 = state_49092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49092__$1,(35),out,inst_49051);
} else {
if((state_val_49093 === (33))){
var inst_49042 = (state_49092[(12)]);
var inst_49019 = inst_49042;
var state_49092__$1 = (function (){var statearr_49110 = state_49092;
(statearr_49110[(7)] = inst_49019);

return statearr_49110;
})();
var statearr_49111_49166 = state_49092__$1;
(statearr_49111_49166[(2)] = null);

(statearr_49111_49166[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (13))){
var inst_49019 = (state_49092[(7)]);
var inst_49026 = inst_49019.cljs$lang$protocol_mask$partition0$;
var inst_49027 = (inst_49026 & (64));
var inst_49028 = inst_49019.cljs$core$ISeq$;
var inst_49029 = (cljs.core.PROTOCOL_SENTINEL === inst_49028);
var inst_49030 = (inst_49027) || (inst_49029);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49030)){
var statearr_49112_49167 = state_49092__$1;
(statearr_49112_49167[(1)] = (16));

} else {
var statearr_49113_49168 = state_49092__$1;
(statearr_49113_49168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (22))){
var inst_49052 = (state_49092[(9)]);
var inst_49051 = (state_49092[(14)]);
var inst_49050 = (state_49092[(2)]);
var inst_49051__$1 = cljs.core.nth.call(null,inst_49050,(0),null);
var inst_49052__$1 = cljs.core.nth.call(null,inst_49050,(1),null);
var inst_49053 = (inst_49051__$1 == null);
var inst_49054 = cljs.core._EQ_.call(null,inst_49052__$1,change);
var inst_49055 = (inst_49053) || (inst_49054);
var state_49092__$1 = (function (){var statearr_49114 = state_49092;
(statearr_49114[(9)] = inst_49052__$1);

(statearr_49114[(14)] = inst_49051__$1);

return statearr_49114;
})();
if(cljs.core.truth_(inst_49055)){
var statearr_49115_49169 = state_49092__$1;
(statearr_49115_49169[(1)] = (23));

} else {
var statearr_49116_49170 = state_49092__$1;
(statearr_49116_49170[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (36))){
var inst_49042 = (state_49092[(12)]);
var inst_49019 = inst_49042;
var state_49092__$1 = (function (){var statearr_49117 = state_49092;
(statearr_49117[(7)] = inst_49019);

return statearr_49117;
})();
var statearr_49118_49171 = state_49092__$1;
(statearr_49118_49171[(2)] = null);

(statearr_49118_49171[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (29))){
var inst_49066 = (state_49092[(10)]);
var state_49092__$1 = state_49092;
var statearr_49119_49172 = state_49092__$1;
(statearr_49119_49172[(2)] = inst_49066);

(statearr_49119_49172[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (6))){
var state_49092__$1 = state_49092;
var statearr_49120_49173 = state_49092__$1;
(statearr_49120_49173[(2)] = false);

(statearr_49120_49173[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (28))){
var inst_49062 = (state_49092[(2)]);
var inst_49063 = calc_state.call(null);
var inst_49019 = inst_49063;
var state_49092__$1 = (function (){var statearr_49121 = state_49092;
(statearr_49121[(15)] = inst_49062);

(statearr_49121[(7)] = inst_49019);

return statearr_49121;
})();
var statearr_49122_49174 = state_49092__$1;
(statearr_49122_49174[(2)] = null);

(statearr_49122_49174[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (25))){
var inst_49088 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49123_49175 = state_49092__$1;
(statearr_49123_49175[(2)] = inst_49088);

(statearr_49123_49175[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (34))){
var inst_49086 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49124_49176 = state_49092__$1;
(statearr_49124_49176[(2)] = inst_49086);

(statearr_49124_49176[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (17))){
var state_49092__$1 = state_49092;
var statearr_49125_49177 = state_49092__$1;
(statearr_49125_49177[(2)] = false);

(statearr_49125_49177[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (3))){
var state_49092__$1 = state_49092;
var statearr_49126_49178 = state_49092__$1;
(statearr_49126_49178[(2)] = false);

(statearr_49126_49178[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (12))){
var inst_49090 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49092__$1,inst_49090);
} else {
if((state_val_49093 === (2))){
var inst_48994 = (state_49092[(8)]);
var inst_48999 = inst_48994.cljs$lang$protocol_mask$partition0$;
var inst_49000 = (inst_48999 & (64));
var inst_49001 = inst_48994.cljs$core$ISeq$;
var inst_49002 = (cljs.core.PROTOCOL_SENTINEL === inst_49001);
var inst_49003 = (inst_49000) || (inst_49002);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49003)){
var statearr_49127_49179 = state_49092__$1;
(statearr_49127_49179[(1)] = (5));

} else {
var statearr_49128_49180 = state_49092__$1;
(statearr_49128_49180[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (23))){
var inst_49051 = (state_49092[(14)]);
var inst_49057 = (inst_49051 == null);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49057)){
var statearr_49129_49181 = state_49092__$1;
(statearr_49129_49181[(1)] = (26));

} else {
var statearr_49130_49182 = state_49092__$1;
(statearr_49130_49182[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (35))){
var inst_49077 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
if(cljs.core.truth_(inst_49077)){
var statearr_49131_49183 = state_49092__$1;
(statearr_49131_49183[(1)] = (36));

} else {
var statearr_49132_49184 = state_49092__$1;
(statearr_49132_49184[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (19))){
var inst_49019 = (state_49092[(7)]);
var inst_49039 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49019);
var state_49092__$1 = state_49092;
var statearr_49133_49185 = state_49092__$1;
(statearr_49133_49185[(2)] = inst_49039);

(statearr_49133_49185[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (11))){
var inst_49019 = (state_49092[(7)]);
var inst_49023 = (inst_49019 == null);
var inst_49024 = cljs.core.not.call(null,inst_49023);
var state_49092__$1 = state_49092;
if(inst_49024){
var statearr_49134_49186 = state_49092__$1;
(statearr_49134_49186[(1)] = (13));

} else {
var statearr_49135_49187 = state_49092__$1;
(statearr_49135_49187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (9))){
var inst_48994 = (state_49092[(8)]);
var state_49092__$1 = state_49092;
var statearr_49136_49188 = state_49092__$1;
(statearr_49136_49188[(2)] = inst_48994);

(statearr_49136_49188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (5))){
var state_49092__$1 = state_49092;
var statearr_49137_49189 = state_49092__$1;
(statearr_49137_49189[(2)] = true);

(statearr_49137_49189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (14))){
var state_49092__$1 = state_49092;
var statearr_49138_49190 = state_49092__$1;
(statearr_49138_49190[(2)] = false);

(statearr_49138_49190[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (26))){
var inst_49052 = (state_49092[(9)]);
var inst_49059 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49052);
var state_49092__$1 = state_49092;
var statearr_49139_49191 = state_49092__$1;
(statearr_49139_49191[(2)] = inst_49059);

(statearr_49139_49191[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (16))){
var state_49092__$1 = state_49092;
var statearr_49140_49192 = state_49092__$1;
(statearr_49140_49192[(2)] = true);

(statearr_49140_49192[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (38))){
var inst_49082 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49141_49193 = state_49092__$1;
(statearr_49141_49193[(2)] = inst_49082);

(statearr_49141_49193[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (30))){
var inst_49052 = (state_49092[(9)]);
var inst_49044 = (state_49092[(13)]);
var inst_49043 = (state_49092[(11)]);
var inst_49069 = cljs.core.empty_QMARK_.call(null,inst_49043);
var inst_49070 = inst_49044.call(null,inst_49052);
var inst_49071 = cljs.core.not.call(null,inst_49070);
var inst_49072 = (inst_49069) && (inst_49071);
var state_49092__$1 = state_49092;
var statearr_49142_49194 = state_49092__$1;
(statearr_49142_49194[(2)] = inst_49072);

(statearr_49142_49194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (10))){
var inst_48994 = (state_49092[(8)]);
var inst_49015 = (state_49092[(2)]);
var inst_49016 = cljs.core.get.call(null,inst_49015,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_49017 = cljs.core.get.call(null,inst_49015,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_49018 = cljs.core.get.call(null,inst_49015,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_49019 = inst_48994;
var state_49092__$1 = (function (){var statearr_49143 = state_49092;
(statearr_49143[(7)] = inst_49019);

(statearr_49143[(16)] = inst_49016);

(statearr_49143[(17)] = inst_49018);

(statearr_49143[(18)] = inst_49017);

return statearr_49143;
})();
var statearr_49144_49195 = state_49092__$1;
(statearr_49144_49195[(2)] = null);

(statearr_49144_49195[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (18))){
var inst_49034 = (state_49092[(2)]);
var state_49092__$1 = state_49092;
var statearr_49145_49196 = state_49092__$1;
(statearr_49145_49196[(2)] = inst_49034);

(statearr_49145_49196[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (37))){
var state_49092__$1 = state_49092;
var statearr_49146_49197 = state_49092__$1;
(statearr_49146_49197[(2)] = null);

(statearr_49146_49197[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49093 === (8))){
var inst_48994 = (state_49092[(8)]);
var inst_49012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_48994);
var state_49092__$1 = state_49092;
var statearr_49147_49198 = state_49092__$1;
(statearr_49147_49198[(2)] = inst_49012);

(statearr_49147_49198[(1)] = (10));


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
});})(c__38562__auto___49152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38474__auto__,c__38562__auto___49152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38475__auto__ = null;
var cljs$core$async$mix_$_state_machine__38475__auto____0 = (function (){
var statearr_49148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49148[(0)] = cljs$core$async$mix_$_state_machine__38475__auto__);

(statearr_49148[(1)] = (1));

return statearr_49148;
});
var cljs$core$async$mix_$_state_machine__38475__auto____1 = (function (state_49092){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49149){if((e49149 instanceof Object)){
var ex__38478__auto__ = e49149;
var statearr_49150_49199 = state_49092;
(statearr_49150_49199[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49149;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49200 = state_49092;
state_49092 = G__49200;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38475__auto__ = function(state_49092){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38475__auto____1.call(this,state_49092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38475__auto____0;
cljs$core$async$mix_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38475__auto____1;
return cljs$core$async$mix_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38564__auto__ = (function (){var statearr_49151 = f__38563__auto__.call(null);
(statearr_49151[(6)] = c__38562__auto___49152);

return statearr_49151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49152,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__35125__auto__ = (((p == null))?null:p);
var m__35126__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35126__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__35125__auto__ = (((p == null))?null:p);
var m__35126__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,p,v,ch);
} else {
var m__35126__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__49202 = arguments.length;
switch (G__49202) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35125__auto__ = (((p == null))?null:p);
var m__35126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,p);
} else {
var m__35126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,p);
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
var x__35125__auto__ = (((p == null))?null:p);
var m__35126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,p,v);
} else {
var m__35126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,p,v);
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
var G__49206 = arguments.length;
switch (G__49206) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34442__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34442__auto__,mults){
return (function (p1__49204_SHARP_){
if(cljs.core.truth_(p1__49204_SHARP_.call(null,topic))){
return p1__49204_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__49204_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34442__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async49207 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49207 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta49208){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta49208 = meta49208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49209,meta49208__$1){
var self__ = this;
var _49209__$1 = this;
return (new cljs.core.async.t_cljs$core$async49207(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta49208__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49209){
var self__ = this;
var _49209__$1 = this;
return self__.meta49208;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta49208","meta49208",783540913,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async49207.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49207";

cljs.core.async.t_cljs$core$async49207.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async49207");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async49207 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async49207(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49208){
return (new cljs.core.async.t_cljs$core$async49207(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta49208));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async49207(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38562__auto___49327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49327,mults,ensure_mult,p){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49327,mults,ensure_mult,p){
return (function (state_49281){
var state_val_49282 = (state_49281[(1)]);
if((state_val_49282 === (7))){
var inst_49277 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49283_49328 = state_49281__$1;
(statearr_49283_49328[(2)] = inst_49277);

(statearr_49283_49328[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (20))){
var state_49281__$1 = state_49281;
var statearr_49284_49329 = state_49281__$1;
(statearr_49284_49329[(2)] = null);

(statearr_49284_49329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (1))){
var state_49281__$1 = state_49281;
var statearr_49285_49330 = state_49281__$1;
(statearr_49285_49330[(2)] = null);

(statearr_49285_49330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (24))){
var inst_49260 = (state_49281[(7)]);
var inst_49269 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49260);
var state_49281__$1 = state_49281;
var statearr_49286_49331 = state_49281__$1;
(statearr_49286_49331[(2)] = inst_49269);

(statearr_49286_49331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (4))){
var inst_49212 = (state_49281[(8)]);
var inst_49212__$1 = (state_49281[(2)]);
var inst_49213 = (inst_49212__$1 == null);
var state_49281__$1 = (function (){var statearr_49287 = state_49281;
(statearr_49287[(8)] = inst_49212__$1);

return statearr_49287;
})();
if(cljs.core.truth_(inst_49213)){
var statearr_49288_49332 = state_49281__$1;
(statearr_49288_49332[(1)] = (5));

} else {
var statearr_49289_49333 = state_49281__$1;
(statearr_49289_49333[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (15))){
var inst_49254 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49290_49334 = state_49281__$1;
(statearr_49290_49334[(2)] = inst_49254);

(statearr_49290_49334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (21))){
var inst_49274 = (state_49281[(2)]);
var state_49281__$1 = (function (){var statearr_49291 = state_49281;
(statearr_49291[(9)] = inst_49274);

return statearr_49291;
})();
var statearr_49292_49335 = state_49281__$1;
(statearr_49292_49335[(2)] = null);

(statearr_49292_49335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (13))){
var inst_49236 = (state_49281[(10)]);
var inst_49238 = cljs.core.chunked_seq_QMARK_.call(null,inst_49236);
var state_49281__$1 = state_49281;
if(inst_49238){
var statearr_49293_49336 = state_49281__$1;
(statearr_49293_49336[(1)] = (16));

} else {
var statearr_49294_49337 = state_49281__$1;
(statearr_49294_49337[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (22))){
var inst_49266 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
if(cljs.core.truth_(inst_49266)){
var statearr_49295_49338 = state_49281__$1;
(statearr_49295_49338[(1)] = (23));

} else {
var statearr_49296_49339 = state_49281__$1;
(statearr_49296_49339[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (6))){
var inst_49212 = (state_49281[(8)]);
var inst_49262 = (state_49281[(11)]);
var inst_49260 = (state_49281[(7)]);
var inst_49260__$1 = topic_fn.call(null,inst_49212);
var inst_49261 = cljs.core.deref.call(null,mults);
var inst_49262__$1 = cljs.core.get.call(null,inst_49261,inst_49260__$1);
var state_49281__$1 = (function (){var statearr_49297 = state_49281;
(statearr_49297[(11)] = inst_49262__$1);

(statearr_49297[(7)] = inst_49260__$1);

return statearr_49297;
})();
if(cljs.core.truth_(inst_49262__$1)){
var statearr_49298_49340 = state_49281__$1;
(statearr_49298_49340[(1)] = (19));

} else {
var statearr_49299_49341 = state_49281__$1;
(statearr_49299_49341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (25))){
var inst_49271 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49300_49342 = state_49281__$1;
(statearr_49300_49342[(2)] = inst_49271);

(statearr_49300_49342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (17))){
var inst_49236 = (state_49281[(10)]);
var inst_49245 = cljs.core.first.call(null,inst_49236);
var inst_49246 = cljs.core.async.muxch_STAR_.call(null,inst_49245);
var inst_49247 = cljs.core.async.close_BANG_.call(null,inst_49246);
var inst_49248 = cljs.core.next.call(null,inst_49236);
var inst_49222 = inst_49248;
var inst_49223 = null;
var inst_49224 = (0);
var inst_49225 = (0);
var state_49281__$1 = (function (){var statearr_49301 = state_49281;
(statearr_49301[(12)] = inst_49224);

(statearr_49301[(13)] = inst_49247);

(statearr_49301[(14)] = inst_49225);

(statearr_49301[(15)] = inst_49223);

(statearr_49301[(16)] = inst_49222);

return statearr_49301;
})();
var statearr_49302_49343 = state_49281__$1;
(statearr_49302_49343[(2)] = null);

(statearr_49302_49343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (3))){
var inst_49279 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49281__$1,inst_49279);
} else {
if((state_val_49282 === (12))){
var inst_49256 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49303_49344 = state_49281__$1;
(statearr_49303_49344[(2)] = inst_49256);

(statearr_49303_49344[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (2))){
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49281__$1,(4),ch);
} else {
if((state_val_49282 === (23))){
var state_49281__$1 = state_49281;
var statearr_49304_49345 = state_49281__$1;
(statearr_49304_49345[(2)] = null);

(statearr_49304_49345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (19))){
var inst_49212 = (state_49281[(8)]);
var inst_49262 = (state_49281[(11)]);
var inst_49264 = cljs.core.async.muxch_STAR_.call(null,inst_49262);
var state_49281__$1 = state_49281;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49281__$1,(22),inst_49264,inst_49212);
} else {
if((state_val_49282 === (11))){
var inst_49236 = (state_49281[(10)]);
var inst_49222 = (state_49281[(16)]);
var inst_49236__$1 = cljs.core.seq.call(null,inst_49222);
var state_49281__$1 = (function (){var statearr_49305 = state_49281;
(statearr_49305[(10)] = inst_49236__$1);

return statearr_49305;
})();
if(inst_49236__$1){
var statearr_49306_49346 = state_49281__$1;
(statearr_49306_49346[(1)] = (13));

} else {
var statearr_49307_49347 = state_49281__$1;
(statearr_49307_49347[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (9))){
var inst_49258 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49308_49348 = state_49281__$1;
(statearr_49308_49348[(2)] = inst_49258);

(statearr_49308_49348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (5))){
var inst_49219 = cljs.core.deref.call(null,mults);
var inst_49220 = cljs.core.vals.call(null,inst_49219);
var inst_49221 = cljs.core.seq.call(null,inst_49220);
var inst_49222 = inst_49221;
var inst_49223 = null;
var inst_49224 = (0);
var inst_49225 = (0);
var state_49281__$1 = (function (){var statearr_49309 = state_49281;
(statearr_49309[(12)] = inst_49224);

(statearr_49309[(14)] = inst_49225);

(statearr_49309[(15)] = inst_49223);

(statearr_49309[(16)] = inst_49222);

return statearr_49309;
})();
var statearr_49310_49349 = state_49281__$1;
(statearr_49310_49349[(2)] = null);

(statearr_49310_49349[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (14))){
var state_49281__$1 = state_49281;
var statearr_49314_49350 = state_49281__$1;
(statearr_49314_49350[(2)] = null);

(statearr_49314_49350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (16))){
var inst_49236 = (state_49281[(10)]);
var inst_49240 = cljs.core.chunk_first.call(null,inst_49236);
var inst_49241 = cljs.core.chunk_rest.call(null,inst_49236);
var inst_49242 = cljs.core.count.call(null,inst_49240);
var inst_49222 = inst_49241;
var inst_49223 = inst_49240;
var inst_49224 = inst_49242;
var inst_49225 = (0);
var state_49281__$1 = (function (){var statearr_49315 = state_49281;
(statearr_49315[(12)] = inst_49224);

(statearr_49315[(14)] = inst_49225);

(statearr_49315[(15)] = inst_49223);

(statearr_49315[(16)] = inst_49222);

return statearr_49315;
})();
var statearr_49316_49351 = state_49281__$1;
(statearr_49316_49351[(2)] = null);

(statearr_49316_49351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (10))){
var inst_49224 = (state_49281[(12)]);
var inst_49225 = (state_49281[(14)]);
var inst_49223 = (state_49281[(15)]);
var inst_49222 = (state_49281[(16)]);
var inst_49230 = cljs.core._nth.call(null,inst_49223,inst_49225);
var inst_49231 = cljs.core.async.muxch_STAR_.call(null,inst_49230);
var inst_49232 = cljs.core.async.close_BANG_.call(null,inst_49231);
var inst_49233 = (inst_49225 + (1));
var tmp49311 = inst_49224;
var tmp49312 = inst_49223;
var tmp49313 = inst_49222;
var inst_49222__$1 = tmp49313;
var inst_49223__$1 = tmp49312;
var inst_49224__$1 = tmp49311;
var inst_49225__$1 = inst_49233;
var state_49281__$1 = (function (){var statearr_49317 = state_49281;
(statearr_49317[(12)] = inst_49224__$1);

(statearr_49317[(17)] = inst_49232);

(statearr_49317[(14)] = inst_49225__$1);

(statearr_49317[(15)] = inst_49223__$1);

(statearr_49317[(16)] = inst_49222__$1);

return statearr_49317;
})();
var statearr_49318_49352 = state_49281__$1;
(statearr_49318_49352[(2)] = null);

(statearr_49318_49352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (18))){
var inst_49251 = (state_49281[(2)]);
var state_49281__$1 = state_49281;
var statearr_49319_49353 = state_49281__$1;
(statearr_49319_49353[(2)] = inst_49251);

(statearr_49319_49353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49282 === (8))){
var inst_49224 = (state_49281[(12)]);
var inst_49225 = (state_49281[(14)]);
var inst_49227 = (inst_49225 < inst_49224);
var inst_49228 = inst_49227;
var state_49281__$1 = state_49281;
if(cljs.core.truth_(inst_49228)){
var statearr_49320_49354 = state_49281__$1;
(statearr_49320_49354[(1)] = (10));

} else {
var statearr_49321_49355 = state_49281__$1;
(statearr_49321_49355[(1)] = (11));

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
});})(c__38562__auto___49327,mults,ensure_mult,p))
;
return ((function (switch__38474__auto__,c__38562__auto___49327,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49322[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49322[(1)] = (1));

return statearr_49322;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49281){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49281);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49323){if((e49323 instanceof Object)){
var ex__38478__auto__ = e49323;
var statearr_49324_49356 = state_49281;
(statearr_49324_49356[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49281);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49357 = state_49281;
state_49281 = G__49357;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49281){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49281);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49327,mults,ensure_mult,p))
})();
var state__38564__auto__ = (function (){var statearr_49325 = f__38563__auto__.call(null);
(statearr_49325[(6)] = c__38562__auto___49327);

return statearr_49325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49327,mults,ensure_mult,p))
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
var G__49359 = arguments.length;
switch (G__49359) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49362 = arguments.length;
switch (G__49362) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49365 = arguments.length;
switch (G__49365) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__38562__auto___49432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_49404){
var state_val_49405 = (state_49404[(1)]);
if((state_val_49405 === (7))){
var state_49404__$1 = state_49404;
var statearr_49406_49433 = state_49404__$1;
(statearr_49406_49433[(2)] = null);

(statearr_49406_49433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (1))){
var state_49404__$1 = state_49404;
var statearr_49407_49434 = state_49404__$1;
(statearr_49407_49434[(2)] = null);

(statearr_49407_49434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (4))){
var inst_49368 = (state_49404[(7)]);
var inst_49370 = (inst_49368 < cnt);
var state_49404__$1 = state_49404;
if(cljs.core.truth_(inst_49370)){
var statearr_49408_49435 = state_49404__$1;
(statearr_49408_49435[(1)] = (6));

} else {
var statearr_49409_49436 = state_49404__$1;
(statearr_49409_49436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (15))){
var inst_49400 = (state_49404[(2)]);
var state_49404__$1 = state_49404;
var statearr_49410_49437 = state_49404__$1;
(statearr_49410_49437[(2)] = inst_49400);

(statearr_49410_49437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (13))){
var inst_49393 = cljs.core.async.close_BANG_.call(null,out);
var state_49404__$1 = state_49404;
var statearr_49411_49438 = state_49404__$1;
(statearr_49411_49438[(2)] = inst_49393);

(statearr_49411_49438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (6))){
var state_49404__$1 = state_49404;
var statearr_49412_49439 = state_49404__$1;
(statearr_49412_49439[(2)] = null);

(statearr_49412_49439[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (3))){
var inst_49402 = (state_49404[(2)]);
var state_49404__$1 = state_49404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49404__$1,inst_49402);
} else {
if((state_val_49405 === (12))){
var inst_49390 = (state_49404[(8)]);
var inst_49390__$1 = (state_49404[(2)]);
var inst_49391 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_49390__$1);
var state_49404__$1 = (function (){var statearr_49413 = state_49404;
(statearr_49413[(8)] = inst_49390__$1);

return statearr_49413;
})();
if(cljs.core.truth_(inst_49391)){
var statearr_49414_49440 = state_49404__$1;
(statearr_49414_49440[(1)] = (13));

} else {
var statearr_49415_49441 = state_49404__$1;
(statearr_49415_49441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (2))){
var inst_49367 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_49368 = (0);
var state_49404__$1 = (function (){var statearr_49416 = state_49404;
(statearr_49416[(9)] = inst_49367);

(statearr_49416[(7)] = inst_49368);

return statearr_49416;
})();
var statearr_49417_49442 = state_49404__$1;
(statearr_49417_49442[(2)] = null);

(statearr_49417_49442[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (11))){
var inst_49368 = (state_49404[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49404,(10),Object,null,(9));
var inst_49377 = chs__$1.call(null,inst_49368);
var inst_49378 = done.call(null,inst_49368);
var inst_49379 = cljs.core.async.take_BANG_.call(null,inst_49377,inst_49378);
var state_49404__$1 = state_49404;
var statearr_49418_49443 = state_49404__$1;
(statearr_49418_49443[(2)] = inst_49379);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (9))){
var inst_49368 = (state_49404[(7)]);
var inst_49381 = (state_49404[(2)]);
var inst_49382 = (inst_49368 + (1));
var inst_49368__$1 = inst_49382;
var state_49404__$1 = (function (){var statearr_49419 = state_49404;
(statearr_49419[(10)] = inst_49381);

(statearr_49419[(7)] = inst_49368__$1);

return statearr_49419;
})();
var statearr_49420_49444 = state_49404__$1;
(statearr_49420_49444[(2)] = null);

(statearr_49420_49444[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (5))){
var inst_49388 = (state_49404[(2)]);
var state_49404__$1 = (function (){var statearr_49421 = state_49404;
(statearr_49421[(11)] = inst_49388);

return statearr_49421;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49404__$1,(12),dchan);
} else {
if((state_val_49405 === (14))){
var inst_49390 = (state_49404[(8)]);
var inst_49395 = cljs.core.apply.call(null,f,inst_49390);
var state_49404__$1 = state_49404;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49404__$1,(16),out,inst_49395);
} else {
if((state_val_49405 === (16))){
var inst_49397 = (state_49404[(2)]);
var state_49404__$1 = (function (){var statearr_49422 = state_49404;
(statearr_49422[(12)] = inst_49397);

return statearr_49422;
})();
var statearr_49423_49445 = state_49404__$1;
(statearr_49423_49445[(2)] = null);

(statearr_49423_49445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (10))){
var inst_49372 = (state_49404[(2)]);
var inst_49373 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_49404__$1 = (function (){var statearr_49424 = state_49404;
(statearr_49424[(13)] = inst_49372);

return statearr_49424;
})();
var statearr_49425_49446 = state_49404__$1;
(statearr_49425_49446[(2)] = inst_49373);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49404__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49405 === (8))){
var inst_49386 = (state_49404[(2)]);
var state_49404__$1 = state_49404;
var statearr_49426_49447 = state_49404__$1;
(statearr_49426_49447[(2)] = inst_49386);

(statearr_49426_49447[(1)] = (5));


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
});})(c__38562__auto___49432,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38474__auto__,c__38562__auto___49432,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49427[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49427[(1)] = (1));

return statearr_49427;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49404){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49428){if((e49428 instanceof Object)){
var ex__38478__auto__ = e49428;
var statearr_49429_49448 = state_49404;
(statearr_49429_49448[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49449 = state_49404;
state_49404 = G__49449;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49404){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49432,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38564__auto__ = (function (){var statearr_49430 = f__38563__auto__.call(null);
(statearr_49430[(6)] = c__38562__auto___49432);

return statearr_49430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49432,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__49452 = arguments.length;
switch (G__49452) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38562__auto___49506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49506,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49506,out){
return (function (state_49484){
var state_val_49485 = (state_49484[(1)]);
if((state_val_49485 === (7))){
var inst_49463 = (state_49484[(7)]);
var inst_49464 = (state_49484[(8)]);
var inst_49463__$1 = (state_49484[(2)]);
var inst_49464__$1 = cljs.core.nth.call(null,inst_49463__$1,(0),null);
var inst_49465 = cljs.core.nth.call(null,inst_49463__$1,(1),null);
var inst_49466 = (inst_49464__$1 == null);
var state_49484__$1 = (function (){var statearr_49486 = state_49484;
(statearr_49486[(9)] = inst_49465);

(statearr_49486[(7)] = inst_49463__$1);

(statearr_49486[(8)] = inst_49464__$1);

return statearr_49486;
})();
if(cljs.core.truth_(inst_49466)){
var statearr_49487_49507 = state_49484__$1;
(statearr_49487_49507[(1)] = (8));

} else {
var statearr_49488_49508 = state_49484__$1;
(statearr_49488_49508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (1))){
var inst_49453 = cljs.core.vec.call(null,chs);
var inst_49454 = inst_49453;
var state_49484__$1 = (function (){var statearr_49489 = state_49484;
(statearr_49489[(10)] = inst_49454);

return statearr_49489;
})();
var statearr_49490_49509 = state_49484__$1;
(statearr_49490_49509[(2)] = null);

(statearr_49490_49509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (4))){
var inst_49454 = (state_49484[(10)]);
var state_49484__$1 = state_49484;
return cljs.core.async.ioc_alts_BANG_.call(null,state_49484__$1,(7),inst_49454);
} else {
if((state_val_49485 === (6))){
var inst_49480 = (state_49484[(2)]);
var state_49484__$1 = state_49484;
var statearr_49491_49510 = state_49484__$1;
(statearr_49491_49510[(2)] = inst_49480);

(statearr_49491_49510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (3))){
var inst_49482 = (state_49484[(2)]);
var state_49484__$1 = state_49484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49484__$1,inst_49482);
} else {
if((state_val_49485 === (2))){
var inst_49454 = (state_49484[(10)]);
var inst_49456 = cljs.core.count.call(null,inst_49454);
var inst_49457 = (inst_49456 > (0));
var state_49484__$1 = state_49484;
if(cljs.core.truth_(inst_49457)){
var statearr_49493_49511 = state_49484__$1;
(statearr_49493_49511[(1)] = (4));

} else {
var statearr_49494_49512 = state_49484__$1;
(statearr_49494_49512[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (11))){
var inst_49454 = (state_49484[(10)]);
var inst_49473 = (state_49484[(2)]);
var tmp49492 = inst_49454;
var inst_49454__$1 = tmp49492;
var state_49484__$1 = (function (){var statearr_49495 = state_49484;
(statearr_49495[(10)] = inst_49454__$1);

(statearr_49495[(11)] = inst_49473);

return statearr_49495;
})();
var statearr_49496_49513 = state_49484__$1;
(statearr_49496_49513[(2)] = null);

(statearr_49496_49513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (9))){
var inst_49464 = (state_49484[(8)]);
var state_49484__$1 = state_49484;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49484__$1,(11),out,inst_49464);
} else {
if((state_val_49485 === (5))){
var inst_49478 = cljs.core.async.close_BANG_.call(null,out);
var state_49484__$1 = state_49484;
var statearr_49497_49514 = state_49484__$1;
(statearr_49497_49514[(2)] = inst_49478);

(statearr_49497_49514[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (10))){
var inst_49476 = (state_49484[(2)]);
var state_49484__$1 = state_49484;
var statearr_49498_49515 = state_49484__$1;
(statearr_49498_49515[(2)] = inst_49476);

(statearr_49498_49515[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49485 === (8))){
var inst_49465 = (state_49484[(9)]);
var inst_49454 = (state_49484[(10)]);
var inst_49463 = (state_49484[(7)]);
var inst_49464 = (state_49484[(8)]);
var inst_49468 = (function (){var cs = inst_49454;
var vec__49459 = inst_49463;
var v = inst_49464;
var c = inst_49465;
return ((function (cs,vec__49459,v,c,inst_49465,inst_49454,inst_49463,inst_49464,state_val_49485,c__38562__auto___49506,out){
return (function (p1__49450_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__49450_SHARP_);
});
;})(cs,vec__49459,v,c,inst_49465,inst_49454,inst_49463,inst_49464,state_val_49485,c__38562__auto___49506,out))
})();
var inst_49469 = cljs.core.filterv.call(null,inst_49468,inst_49454);
var inst_49454__$1 = inst_49469;
var state_49484__$1 = (function (){var statearr_49499 = state_49484;
(statearr_49499[(10)] = inst_49454__$1);

return statearr_49499;
})();
var statearr_49500_49516 = state_49484__$1;
(statearr_49500_49516[(2)] = null);

(statearr_49500_49516[(1)] = (2));


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
});})(c__38562__auto___49506,out))
;
return ((function (switch__38474__auto__,c__38562__auto___49506,out){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49501 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49501[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49501[(1)] = (1));

return statearr_49501;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49484){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49502){if((e49502 instanceof Object)){
var ex__38478__auto__ = e49502;
var statearr_49503_49517 = state_49484;
(statearr_49503_49517[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49518 = state_49484;
state_49484 = G__49518;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49484){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49506,out))
})();
var state__38564__auto__ = (function (){var statearr_49504 = f__38563__auto__.call(null);
(statearr_49504[(6)] = c__38562__auto___49506);

return statearr_49504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49506,out))
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
var G__49520 = arguments.length;
switch (G__49520) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38562__auto___49565 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49565,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49565,out){
return (function (state_49544){
var state_val_49545 = (state_49544[(1)]);
if((state_val_49545 === (7))){
var inst_49526 = (state_49544[(7)]);
var inst_49526__$1 = (state_49544[(2)]);
var inst_49527 = (inst_49526__$1 == null);
var inst_49528 = cljs.core.not.call(null,inst_49527);
var state_49544__$1 = (function (){var statearr_49546 = state_49544;
(statearr_49546[(7)] = inst_49526__$1);

return statearr_49546;
})();
if(inst_49528){
var statearr_49547_49566 = state_49544__$1;
(statearr_49547_49566[(1)] = (8));

} else {
var statearr_49548_49567 = state_49544__$1;
(statearr_49548_49567[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (1))){
var inst_49521 = (0);
var state_49544__$1 = (function (){var statearr_49549 = state_49544;
(statearr_49549[(8)] = inst_49521);

return statearr_49549;
})();
var statearr_49550_49568 = state_49544__$1;
(statearr_49550_49568[(2)] = null);

(statearr_49550_49568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (4))){
var state_49544__$1 = state_49544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49544__$1,(7),ch);
} else {
if((state_val_49545 === (6))){
var inst_49539 = (state_49544[(2)]);
var state_49544__$1 = state_49544;
var statearr_49551_49569 = state_49544__$1;
(statearr_49551_49569[(2)] = inst_49539);

(statearr_49551_49569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (3))){
var inst_49541 = (state_49544[(2)]);
var inst_49542 = cljs.core.async.close_BANG_.call(null,out);
var state_49544__$1 = (function (){var statearr_49552 = state_49544;
(statearr_49552[(9)] = inst_49541);

return statearr_49552;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49544__$1,inst_49542);
} else {
if((state_val_49545 === (2))){
var inst_49521 = (state_49544[(8)]);
var inst_49523 = (inst_49521 < n);
var state_49544__$1 = state_49544;
if(cljs.core.truth_(inst_49523)){
var statearr_49553_49570 = state_49544__$1;
(statearr_49553_49570[(1)] = (4));

} else {
var statearr_49554_49571 = state_49544__$1;
(statearr_49554_49571[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (11))){
var inst_49521 = (state_49544[(8)]);
var inst_49531 = (state_49544[(2)]);
var inst_49532 = (inst_49521 + (1));
var inst_49521__$1 = inst_49532;
var state_49544__$1 = (function (){var statearr_49555 = state_49544;
(statearr_49555[(8)] = inst_49521__$1);

(statearr_49555[(10)] = inst_49531);

return statearr_49555;
})();
var statearr_49556_49572 = state_49544__$1;
(statearr_49556_49572[(2)] = null);

(statearr_49556_49572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (9))){
var state_49544__$1 = state_49544;
var statearr_49557_49573 = state_49544__$1;
(statearr_49557_49573[(2)] = null);

(statearr_49557_49573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (5))){
var state_49544__$1 = state_49544;
var statearr_49558_49574 = state_49544__$1;
(statearr_49558_49574[(2)] = null);

(statearr_49558_49574[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (10))){
var inst_49536 = (state_49544[(2)]);
var state_49544__$1 = state_49544;
var statearr_49559_49575 = state_49544__$1;
(statearr_49559_49575[(2)] = inst_49536);

(statearr_49559_49575[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49545 === (8))){
var inst_49526 = (state_49544[(7)]);
var state_49544__$1 = state_49544;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49544__$1,(11),out,inst_49526);
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
});})(c__38562__auto___49565,out))
;
return ((function (switch__38474__auto__,c__38562__auto___49565,out){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49560[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49560[(1)] = (1));

return statearr_49560;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49544){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49561){if((e49561 instanceof Object)){
var ex__38478__auto__ = e49561;
var statearr_49562_49576 = state_49544;
(statearr_49562_49576[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49577 = state_49544;
state_49544 = G__49577;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49544){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49544);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49565,out))
})();
var state__38564__auto__ = (function (){var statearr_49563 = f__38563__auto__.call(null);
(statearr_49563[(6)] = c__38562__auto___49565);

return statearr_49563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49565,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49579 = (function (f,ch,meta49580){
this.f = f;
this.ch = ch;
this.meta49580 = meta49580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49581,meta49580__$1){
var self__ = this;
var _49581__$1 = this;
return (new cljs.core.async.t_cljs$core$async49579(self__.f,self__.ch,meta49580__$1));
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49581){
var self__ = this;
var _49581__$1 = this;
return self__.meta49580;
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async49582 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49582 = (function (f,ch,meta49580,_,fn1,meta49583){
this.f = f;
this.ch = ch;
this.meta49580 = meta49580;
this._ = _;
this.fn1 = fn1;
this.meta49583 = meta49583;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_49584,meta49583__$1){
var self__ = this;
var _49584__$1 = this;
return (new cljs.core.async.t_cljs$core$async49582(self__.f,self__.ch,self__.meta49580,self__._,self__.fn1,meta49583__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_49584){
var self__ = this;
var _49584__$1 = this;
return self__.meta49583;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__49578_SHARP_){
return f1.call(null,(((p1__49578_SHARP_ == null))?null:self__.f.call(null,p1__49578_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49580","meta49580",-1617757334,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async49579","cljs.core.async/t_cljs$core$async49579",635944290,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta49583","meta49583",323936680,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async49582.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49582.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49582";

cljs.core.async.t_cljs$core$async49582.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async49582");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async49582 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49582(f__$1,ch__$1,meta49580__$1,___$2,fn1__$1,meta49583){
return (new cljs.core.async.t_cljs$core$async49582(f__$1,ch__$1,meta49580__$1,___$2,fn1__$1,meta49583));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async49582(self__.f,self__.ch,self__.meta49580,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34430__auto__ = ret;
if(cljs.core.truth_(and__34430__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34430__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49579.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async49579.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49580","meta49580",-1617757334,null)], null);
});

cljs.core.async.t_cljs$core$async49579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49579";

cljs.core.async.t_cljs$core$async49579.cljs$lang$ctorPrWriter = (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async49579");
});

cljs.core.async.__GT_t_cljs$core$async49579 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async49579(f__$1,ch__$1,meta49580){
return (new cljs.core.async.t_cljs$core$async49579(f__$1,ch__$1,meta49580));
});

}

return (new cljs.core.async.t_cljs$core$async49579(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async49585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49585 = (function (f,ch,meta49586){
this.f = f;
this.ch = ch;
this.meta49586 = meta49586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49587,meta49586__$1){
var self__ = this;
var _49587__$1 = this;
return (new cljs.core.async.t_cljs$core$async49585(self__.f,self__.ch,meta49586__$1));
});

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49587){
var self__ = this;
var _49587__$1 = this;
return self__.meta49586;
});

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async49585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49586","meta49586",-36566720,null)], null);
});

cljs.core.async.t_cljs$core$async49585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49585";

cljs.core.async.t_cljs$core$async49585.cljs$lang$ctorPrWriter = (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async49585");
});

cljs.core.async.__GT_t_cljs$core$async49585 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async49585(f__$1,ch__$1,meta49586){
return (new cljs.core.async.t_cljs$core$async49585(f__$1,ch__$1,meta49586));
});

}

return (new cljs.core.async.t_cljs$core$async49585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async49588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async49588 = (function (p,ch,meta49589){
this.p = p;
this.ch = ch;
this.meta49589 = meta49589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49590,meta49589__$1){
var self__ = this;
var _49590__$1 = this;
return (new cljs.core.async.t_cljs$core$async49588(self__.p,self__.ch,meta49589__$1));
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49590){
var self__ = this;
var _49590__$1 = this;
return self__.meta49589;
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async49588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async49588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta49589","meta49589",1691703007,null)], null);
});

cljs.core.async.t_cljs$core$async49588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async49588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async49588";

cljs.core.async.t_cljs$core$async49588.cljs$lang$ctorPrWriter = (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.core.async/t_cljs$core$async49588");
});

cljs.core.async.__GT_t_cljs$core$async49588 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async49588(p__$1,ch__$1,meta49589){
return (new cljs.core.async.t_cljs$core$async49588(p__$1,ch__$1,meta49589));
});

}

return (new cljs.core.async.t_cljs$core$async49588(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__49592 = arguments.length;
switch (G__49592) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38562__auto___49632 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49632,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49632,out){
return (function (state_49613){
var state_val_49614 = (state_49613[(1)]);
if((state_val_49614 === (7))){
var inst_49609 = (state_49613[(2)]);
var state_49613__$1 = state_49613;
var statearr_49615_49633 = state_49613__$1;
(statearr_49615_49633[(2)] = inst_49609);

(statearr_49615_49633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (1))){
var state_49613__$1 = state_49613;
var statearr_49616_49634 = state_49613__$1;
(statearr_49616_49634[(2)] = null);

(statearr_49616_49634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (4))){
var inst_49595 = (state_49613[(7)]);
var inst_49595__$1 = (state_49613[(2)]);
var inst_49596 = (inst_49595__$1 == null);
var state_49613__$1 = (function (){var statearr_49617 = state_49613;
(statearr_49617[(7)] = inst_49595__$1);

return statearr_49617;
})();
if(cljs.core.truth_(inst_49596)){
var statearr_49618_49635 = state_49613__$1;
(statearr_49618_49635[(1)] = (5));

} else {
var statearr_49619_49636 = state_49613__$1;
(statearr_49619_49636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (6))){
var inst_49595 = (state_49613[(7)]);
var inst_49600 = p.call(null,inst_49595);
var state_49613__$1 = state_49613;
if(cljs.core.truth_(inst_49600)){
var statearr_49620_49637 = state_49613__$1;
(statearr_49620_49637[(1)] = (8));

} else {
var statearr_49621_49638 = state_49613__$1;
(statearr_49621_49638[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (3))){
var inst_49611 = (state_49613[(2)]);
var state_49613__$1 = state_49613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49613__$1,inst_49611);
} else {
if((state_val_49614 === (2))){
var state_49613__$1 = state_49613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49613__$1,(4),ch);
} else {
if((state_val_49614 === (11))){
var inst_49603 = (state_49613[(2)]);
var state_49613__$1 = state_49613;
var statearr_49622_49639 = state_49613__$1;
(statearr_49622_49639[(2)] = inst_49603);

(statearr_49622_49639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (9))){
var state_49613__$1 = state_49613;
var statearr_49623_49640 = state_49613__$1;
(statearr_49623_49640[(2)] = null);

(statearr_49623_49640[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (5))){
var inst_49598 = cljs.core.async.close_BANG_.call(null,out);
var state_49613__$1 = state_49613;
var statearr_49624_49641 = state_49613__$1;
(statearr_49624_49641[(2)] = inst_49598);

(statearr_49624_49641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (10))){
var inst_49606 = (state_49613[(2)]);
var state_49613__$1 = (function (){var statearr_49625 = state_49613;
(statearr_49625[(8)] = inst_49606);

return statearr_49625;
})();
var statearr_49626_49642 = state_49613__$1;
(statearr_49626_49642[(2)] = null);

(statearr_49626_49642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49614 === (8))){
var inst_49595 = (state_49613[(7)]);
var state_49613__$1 = state_49613;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49613__$1,(11),out,inst_49595);
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
});})(c__38562__auto___49632,out))
;
return ((function (switch__38474__auto__,c__38562__auto___49632,out){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49627 = [null,null,null,null,null,null,null,null,null];
(statearr_49627[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49627[(1)] = (1));

return statearr_49627;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49613){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49628){if((e49628 instanceof Object)){
var ex__38478__auto__ = e49628;
var statearr_49629_49643 = state_49613;
(statearr_49629_49643[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49644 = state_49613;
state_49613 = G__49644;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49613){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49632,out))
})();
var state__38564__auto__ = (function (){var statearr_49630 = f__38563__auto__.call(null);
(statearr_49630[(6)] = c__38562__auto___49632);

return statearr_49630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49632,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__49646 = arguments.length;
switch (G__49646) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__){
return (function (state_49709){
var state_val_49710 = (state_49709[(1)]);
if((state_val_49710 === (7))){
var inst_49705 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49711_49749 = state_49709__$1;
(statearr_49711_49749[(2)] = inst_49705);

(statearr_49711_49749[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (20))){
var inst_49675 = (state_49709[(7)]);
var inst_49686 = (state_49709[(2)]);
var inst_49687 = cljs.core.next.call(null,inst_49675);
var inst_49661 = inst_49687;
var inst_49662 = null;
var inst_49663 = (0);
var inst_49664 = (0);
var state_49709__$1 = (function (){var statearr_49712 = state_49709;
(statearr_49712[(8)] = inst_49661);

(statearr_49712[(9)] = inst_49686);

(statearr_49712[(10)] = inst_49663);

(statearr_49712[(11)] = inst_49664);

(statearr_49712[(12)] = inst_49662);

return statearr_49712;
})();
var statearr_49713_49750 = state_49709__$1;
(statearr_49713_49750[(2)] = null);

(statearr_49713_49750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (1))){
var state_49709__$1 = state_49709;
var statearr_49714_49751 = state_49709__$1;
(statearr_49714_49751[(2)] = null);

(statearr_49714_49751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (4))){
var inst_49650 = (state_49709[(13)]);
var inst_49650__$1 = (state_49709[(2)]);
var inst_49651 = (inst_49650__$1 == null);
var state_49709__$1 = (function (){var statearr_49715 = state_49709;
(statearr_49715[(13)] = inst_49650__$1);

return statearr_49715;
})();
if(cljs.core.truth_(inst_49651)){
var statearr_49716_49752 = state_49709__$1;
(statearr_49716_49752[(1)] = (5));

} else {
var statearr_49717_49753 = state_49709__$1;
(statearr_49717_49753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (15))){
var state_49709__$1 = state_49709;
var statearr_49721_49754 = state_49709__$1;
(statearr_49721_49754[(2)] = null);

(statearr_49721_49754[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (21))){
var state_49709__$1 = state_49709;
var statearr_49722_49755 = state_49709__$1;
(statearr_49722_49755[(2)] = null);

(statearr_49722_49755[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (13))){
var inst_49661 = (state_49709[(8)]);
var inst_49663 = (state_49709[(10)]);
var inst_49664 = (state_49709[(11)]);
var inst_49662 = (state_49709[(12)]);
var inst_49671 = (state_49709[(2)]);
var inst_49672 = (inst_49664 + (1));
var tmp49718 = inst_49661;
var tmp49719 = inst_49663;
var tmp49720 = inst_49662;
var inst_49661__$1 = tmp49718;
var inst_49662__$1 = tmp49720;
var inst_49663__$1 = tmp49719;
var inst_49664__$1 = inst_49672;
var state_49709__$1 = (function (){var statearr_49723 = state_49709;
(statearr_49723[(8)] = inst_49661__$1);

(statearr_49723[(10)] = inst_49663__$1);

(statearr_49723[(11)] = inst_49664__$1);

(statearr_49723[(12)] = inst_49662__$1);

(statearr_49723[(14)] = inst_49671);

return statearr_49723;
})();
var statearr_49724_49756 = state_49709__$1;
(statearr_49724_49756[(2)] = null);

(statearr_49724_49756[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (22))){
var state_49709__$1 = state_49709;
var statearr_49725_49757 = state_49709__$1;
(statearr_49725_49757[(2)] = null);

(statearr_49725_49757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (6))){
var inst_49650 = (state_49709[(13)]);
var inst_49659 = f.call(null,inst_49650);
var inst_49660 = cljs.core.seq.call(null,inst_49659);
var inst_49661 = inst_49660;
var inst_49662 = null;
var inst_49663 = (0);
var inst_49664 = (0);
var state_49709__$1 = (function (){var statearr_49726 = state_49709;
(statearr_49726[(8)] = inst_49661);

(statearr_49726[(10)] = inst_49663);

(statearr_49726[(11)] = inst_49664);

(statearr_49726[(12)] = inst_49662);

return statearr_49726;
})();
var statearr_49727_49758 = state_49709__$1;
(statearr_49727_49758[(2)] = null);

(statearr_49727_49758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (17))){
var inst_49675 = (state_49709[(7)]);
var inst_49679 = cljs.core.chunk_first.call(null,inst_49675);
var inst_49680 = cljs.core.chunk_rest.call(null,inst_49675);
var inst_49681 = cljs.core.count.call(null,inst_49679);
var inst_49661 = inst_49680;
var inst_49662 = inst_49679;
var inst_49663 = inst_49681;
var inst_49664 = (0);
var state_49709__$1 = (function (){var statearr_49728 = state_49709;
(statearr_49728[(8)] = inst_49661);

(statearr_49728[(10)] = inst_49663);

(statearr_49728[(11)] = inst_49664);

(statearr_49728[(12)] = inst_49662);

return statearr_49728;
})();
var statearr_49729_49759 = state_49709__$1;
(statearr_49729_49759[(2)] = null);

(statearr_49729_49759[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (3))){
var inst_49707 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49709__$1,inst_49707);
} else {
if((state_val_49710 === (12))){
var inst_49695 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49730_49760 = state_49709__$1;
(statearr_49730_49760[(2)] = inst_49695);

(statearr_49730_49760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (2))){
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49709__$1,(4),in$);
} else {
if((state_val_49710 === (23))){
var inst_49703 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49731_49761 = state_49709__$1;
(statearr_49731_49761[(2)] = inst_49703);

(statearr_49731_49761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (19))){
var inst_49690 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49732_49762 = state_49709__$1;
(statearr_49732_49762[(2)] = inst_49690);

(statearr_49732_49762[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (11))){
var inst_49661 = (state_49709[(8)]);
var inst_49675 = (state_49709[(7)]);
var inst_49675__$1 = cljs.core.seq.call(null,inst_49661);
var state_49709__$1 = (function (){var statearr_49733 = state_49709;
(statearr_49733[(7)] = inst_49675__$1);

return statearr_49733;
})();
if(inst_49675__$1){
var statearr_49734_49763 = state_49709__$1;
(statearr_49734_49763[(1)] = (14));

} else {
var statearr_49735_49764 = state_49709__$1;
(statearr_49735_49764[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (9))){
var inst_49697 = (state_49709[(2)]);
var inst_49698 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_49709__$1 = (function (){var statearr_49736 = state_49709;
(statearr_49736[(15)] = inst_49697);

return statearr_49736;
})();
if(cljs.core.truth_(inst_49698)){
var statearr_49737_49765 = state_49709__$1;
(statearr_49737_49765[(1)] = (21));

} else {
var statearr_49738_49766 = state_49709__$1;
(statearr_49738_49766[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (5))){
var inst_49653 = cljs.core.async.close_BANG_.call(null,out);
var state_49709__$1 = state_49709;
var statearr_49739_49767 = state_49709__$1;
(statearr_49739_49767[(2)] = inst_49653);

(statearr_49739_49767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (14))){
var inst_49675 = (state_49709[(7)]);
var inst_49677 = cljs.core.chunked_seq_QMARK_.call(null,inst_49675);
var state_49709__$1 = state_49709;
if(inst_49677){
var statearr_49740_49768 = state_49709__$1;
(statearr_49740_49768[(1)] = (17));

} else {
var statearr_49741_49769 = state_49709__$1;
(statearr_49741_49769[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (16))){
var inst_49693 = (state_49709[(2)]);
var state_49709__$1 = state_49709;
var statearr_49742_49770 = state_49709__$1;
(statearr_49742_49770[(2)] = inst_49693);

(statearr_49742_49770[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49710 === (10))){
var inst_49664 = (state_49709[(11)]);
var inst_49662 = (state_49709[(12)]);
var inst_49669 = cljs.core._nth.call(null,inst_49662,inst_49664);
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49709__$1,(13),out,inst_49669);
} else {
if((state_val_49710 === (18))){
var inst_49675 = (state_49709[(7)]);
var inst_49684 = cljs.core.first.call(null,inst_49675);
var state_49709__$1 = state_49709;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49709__$1,(20),out,inst_49684);
} else {
if((state_val_49710 === (8))){
var inst_49663 = (state_49709[(10)]);
var inst_49664 = (state_49709[(11)]);
var inst_49666 = (inst_49664 < inst_49663);
var inst_49667 = inst_49666;
var state_49709__$1 = state_49709;
if(cljs.core.truth_(inst_49667)){
var statearr_49743_49771 = state_49709__$1;
(statearr_49743_49771[(1)] = (10));

} else {
var statearr_49744_49772 = state_49709__$1;
(statearr_49744_49772[(1)] = (11));

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
});})(c__38562__auto__))
;
return ((function (switch__38474__auto__,c__38562__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____0 = (function (){
var statearr_49745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49745[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__);

(statearr_49745[(1)] = (1));

return statearr_49745;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____1 = (function (state_49709){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49746){if((e49746 instanceof Object)){
var ex__38478__auto__ = e49746;
var statearr_49747_49773 = state_49709;
(statearr_49747_49773[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49774 = state_49709;
state_49709 = G__49774;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__ = function(state_49709){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____1.call(this,state_49709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38475__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__))
})();
var state__38564__auto__ = (function (){var statearr_49748 = f__38563__auto__.call(null);
(statearr_49748[(6)] = c__38562__auto__);

return statearr_49748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__))
);

return c__38562__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__49776 = arguments.length;
switch (G__49776) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49779 = arguments.length;
switch (G__49779) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var G__49782 = arguments.length;
switch (G__49782) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38562__auto___49829 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49829,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49829,out){
return (function (state_49806){
var state_val_49807 = (state_49806[(1)]);
if((state_val_49807 === (7))){
var inst_49801 = (state_49806[(2)]);
var state_49806__$1 = state_49806;
var statearr_49808_49830 = state_49806__$1;
(statearr_49808_49830[(2)] = inst_49801);

(statearr_49808_49830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (1))){
var inst_49783 = null;
var state_49806__$1 = (function (){var statearr_49809 = state_49806;
(statearr_49809[(7)] = inst_49783);

return statearr_49809;
})();
var statearr_49810_49831 = state_49806__$1;
(statearr_49810_49831[(2)] = null);

(statearr_49810_49831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (4))){
var inst_49786 = (state_49806[(8)]);
var inst_49786__$1 = (state_49806[(2)]);
var inst_49787 = (inst_49786__$1 == null);
var inst_49788 = cljs.core.not.call(null,inst_49787);
var state_49806__$1 = (function (){var statearr_49811 = state_49806;
(statearr_49811[(8)] = inst_49786__$1);

return statearr_49811;
})();
if(inst_49788){
var statearr_49812_49832 = state_49806__$1;
(statearr_49812_49832[(1)] = (5));

} else {
var statearr_49813_49833 = state_49806__$1;
(statearr_49813_49833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (6))){
var state_49806__$1 = state_49806;
var statearr_49814_49834 = state_49806__$1;
(statearr_49814_49834[(2)] = null);

(statearr_49814_49834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (3))){
var inst_49803 = (state_49806[(2)]);
var inst_49804 = cljs.core.async.close_BANG_.call(null,out);
var state_49806__$1 = (function (){var statearr_49815 = state_49806;
(statearr_49815[(9)] = inst_49803);

return statearr_49815;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49806__$1,inst_49804);
} else {
if((state_val_49807 === (2))){
var state_49806__$1 = state_49806;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49806__$1,(4),ch);
} else {
if((state_val_49807 === (11))){
var inst_49786 = (state_49806[(8)]);
var inst_49795 = (state_49806[(2)]);
var inst_49783 = inst_49786;
var state_49806__$1 = (function (){var statearr_49816 = state_49806;
(statearr_49816[(10)] = inst_49795);

(statearr_49816[(7)] = inst_49783);

return statearr_49816;
})();
var statearr_49817_49835 = state_49806__$1;
(statearr_49817_49835[(2)] = null);

(statearr_49817_49835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (9))){
var inst_49786 = (state_49806[(8)]);
var state_49806__$1 = state_49806;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49806__$1,(11),out,inst_49786);
} else {
if((state_val_49807 === (5))){
var inst_49786 = (state_49806[(8)]);
var inst_49783 = (state_49806[(7)]);
var inst_49790 = cljs.core._EQ_.call(null,inst_49786,inst_49783);
var state_49806__$1 = state_49806;
if(inst_49790){
var statearr_49819_49836 = state_49806__$1;
(statearr_49819_49836[(1)] = (8));

} else {
var statearr_49820_49837 = state_49806__$1;
(statearr_49820_49837[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (10))){
var inst_49798 = (state_49806[(2)]);
var state_49806__$1 = state_49806;
var statearr_49821_49838 = state_49806__$1;
(statearr_49821_49838[(2)] = inst_49798);

(statearr_49821_49838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49807 === (8))){
var inst_49783 = (state_49806[(7)]);
var tmp49818 = inst_49783;
var inst_49783__$1 = tmp49818;
var state_49806__$1 = (function (){var statearr_49822 = state_49806;
(statearr_49822[(7)] = inst_49783__$1);

return statearr_49822;
})();
var statearr_49823_49839 = state_49806__$1;
(statearr_49823_49839[(2)] = null);

(statearr_49823_49839[(1)] = (2));


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
});})(c__38562__auto___49829,out))
;
return ((function (switch__38474__auto__,c__38562__auto___49829,out){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49824 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_49824[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49824[(1)] = (1));

return statearr_49824;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49806){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49806);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49825){if((e49825 instanceof Object)){
var ex__38478__auto__ = e49825;
var statearr_49826_49840 = state_49806;
(statearr_49826_49840[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49806);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49841 = state_49806;
state_49806 = G__49841;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49806);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49829,out))
})();
var state__38564__auto__ = (function (){var statearr_49827 = f__38563__auto__.call(null);
(statearr_49827[(6)] = c__38562__auto___49829);

return statearr_49827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49829,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__49843 = arguments.length;
switch (G__49843) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38562__auto___49909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49909,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49909,out){
return (function (state_49881){
var state_val_49882 = (state_49881[(1)]);
if((state_val_49882 === (7))){
var inst_49877 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49883_49910 = state_49881__$1;
(statearr_49883_49910[(2)] = inst_49877);

(statearr_49883_49910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (1))){
var inst_49844 = (new Array(n));
var inst_49845 = inst_49844;
var inst_49846 = (0);
var state_49881__$1 = (function (){var statearr_49884 = state_49881;
(statearr_49884[(7)] = inst_49845);

(statearr_49884[(8)] = inst_49846);

return statearr_49884;
})();
var statearr_49885_49911 = state_49881__$1;
(statearr_49885_49911[(2)] = null);

(statearr_49885_49911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (4))){
var inst_49849 = (state_49881[(9)]);
var inst_49849__$1 = (state_49881[(2)]);
var inst_49850 = (inst_49849__$1 == null);
var inst_49851 = cljs.core.not.call(null,inst_49850);
var state_49881__$1 = (function (){var statearr_49886 = state_49881;
(statearr_49886[(9)] = inst_49849__$1);

return statearr_49886;
})();
if(inst_49851){
var statearr_49887_49912 = state_49881__$1;
(statearr_49887_49912[(1)] = (5));

} else {
var statearr_49888_49913 = state_49881__$1;
(statearr_49888_49913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (15))){
var inst_49871 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49889_49914 = state_49881__$1;
(statearr_49889_49914[(2)] = inst_49871);

(statearr_49889_49914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (13))){
var state_49881__$1 = state_49881;
var statearr_49890_49915 = state_49881__$1;
(statearr_49890_49915[(2)] = null);

(statearr_49890_49915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (6))){
var inst_49846 = (state_49881[(8)]);
var inst_49867 = (inst_49846 > (0));
var state_49881__$1 = state_49881;
if(cljs.core.truth_(inst_49867)){
var statearr_49891_49916 = state_49881__$1;
(statearr_49891_49916[(1)] = (12));

} else {
var statearr_49892_49917 = state_49881__$1;
(statearr_49892_49917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (3))){
var inst_49879 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49881__$1,inst_49879);
} else {
if((state_val_49882 === (12))){
var inst_49845 = (state_49881[(7)]);
var inst_49869 = cljs.core.vec.call(null,inst_49845);
var state_49881__$1 = state_49881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49881__$1,(15),out,inst_49869);
} else {
if((state_val_49882 === (2))){
var state_49881__$1 = state_49881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49881__$1,(4),ch);
} else {
if((state_val_49882 === (11))){
var inst_49861 = (state_49881[(2)]);
var inst_49862 = (new Array(n));
var inst_49845 = inst_49862;
var inst_49846 = (0);
var state_49881__$1 = (function (){var statearr_49893 = state_49881;
(statearr_49893[(7)] = inst_49845);

(statearr_49893[(8)] = inst_49846);

(statearr_49893[(10)] = inst_49861);

return statearr_49893;
})();
var statearr_49894_49918 = state_49881__$1;
(statearr_49894_49918[(2)] = null);

(statearr_49894_49918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (9))){
var inst_49845 = (state_49881[(7)]);
var inst_49859 = cljs.core.vec.call(null,inst_49845);
var state_49881__$1 = state_49881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49881__$1,(11),out,inst_49859);
} else {
if((state_val_49882 === (5))){
var inst_49845 = (state_49881[(7)]);
var inst_49846 = (state_49881[(8)]);
var inst_49854 = (state_49881[(11)]);
var inst_49849 = (state_49881[(9)]);
var inst_49853 = (inst_49845[inst_49846] = inst_49849);
var inst_49854__$1 = (inst_49846 + (1));
var inst_49855 = (inst_49854__$1 < n);
var state_49881__$1 = (function (){var statearr_49895 = state_49881;
(statearr_49895[(12)] = inst_49853);

(statearr_49895[(11)] = inst_49854__$1);

return statearr_49895;
})();
if(cljs.core.truth_(inst_49855)){
var statearr_49896_49919 = state_49881__$1;
(statearr_49896_49919[(1)] = (8));

} else {
var statearr_49897_49920 = state_49881__$1;
(statearr_49897_49920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (14))){
var inst_49874 = (state_49881[(2)]);
var inst_49875 = cljs.core.async.close_BANG_.call(null,out);
var state_49881__$1 = (function (){var statearr_49899 = state_49881;
(statearr_49899[(13)] = inst_49874);

return statearr_49899;
})();
var statearr_49900_49921 = state_49881__$1;
(statearr_49900_49921[(2)] = inst_49875);

(statearr_49900_49921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (10))){
var inst_49865 = (state_49881[(2)]);
var state_49881__$1 = state_49881;
var statearr_49901_49922 = state_49881__$1;
(statearr_49901_49922[(2)] = inst_49865);

(statearr_49901_49922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49882 === (8))){
var inst_49845 = (state_49881[(7)]);
var inst_49854 = (state_49881[(11)]);
var tmp49898 = inst_49845;
var inst_49845__$1 = tmp49898;
var inst_49846 = inst_49854;
var state_49881__$1 = (function (){var statearr_49902 = state_49881;
(statearr_49902[(7)] = inst_49845__$1);

(statearr_49902[(8)] = inst_49846);

return statearr_49902;
})();
var statearr_49903_49923 = state_49881__$1;
(statearr_49903_49923[(2)] = null);

(statearr_49903_49923[(1)] = (2));


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
});})(c__38562__auto___49909,out))
;
return ((function (switch__38474__auto__,c__38562__auto___49909,out){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49904[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49904[(1)] = (1));

return statearr_49904;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49881){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49905){if((e49905 instanceof Object)){
var ex__38478__auto__ = e49905;
var statearr_49906_49924 = state_49881;
(statearr_49906_49924[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49925 = state_49881;
state_49881 = G__49925;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49909,out))
})();
var state__38564__auto__ = (function (){var statearr_49907 = f__38563__auto__.call(null);
(statearr_49907[(6)] = c__38562__auto___49909);

return statearr_49907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49909,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49927 = arguments.length;
switch (G__49927) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38562__auto___49997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___49997,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___49997,out){
return (function (state_49969){
var state_val_49970 = (state_49969[(1)]);
if((state_val_49970 === (7))){
var inst_49965 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
var statearr_49971_49998 = state_49969__$1;
(statearr_49971_49998[(2)] = inst_49965);

(statearr_49971_49998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (1))){
var inst_49928 = [];
var inst_49929 = inst_49928;
var inst_49930 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49969__$1 = (function (){var statearr_49972 = state_49969;
(statearr_49972[(7)] = inst_49930);

(statearr_49972[(8)] = inst_49929);

return statearr_49972;
})();
var statearr_49973_49999 = state_49969__$1;
(statearr_49973_49999[(2)] = null);

(statearr_49973_49999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (4))){
var inst_49933 = (state_49969[(9)]);
var inst_49933__$1 = (state_49969[(2)]);
var inst_49934 = (inst_49933__$1 == null);
var inst_49935 = cljs.core.not.call(null,inst_49934);
var state_49969__$1 = (function (){var statearr_49974 = state_49969;
(statearr_49974[(9)] = inst_49933__$1);

return statearr_49974;
})();
if(inst_49935){
var statearr_49975_50000 = state_49969__$1;
(statearr_49975_50000[(1)] = (5));

} else {
var statearr_49976_50001 = state_49969__$1;
(statearr_49976_50001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (15))){
var inst_49959 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
var statearr_49977_50002 = state_49969__$1;
(statearr_49977_50002[(2)] = inst_49959);

(statearr_49977_50002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (13))){
var state_49969__$1 = state_49969;
var statearr_49978_50003 = state_49969__$1;
(statearr_49978_50003[(2)] = null);

(statearr_49978_50003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (6))){
var inst_49929 = (state_49969[(8)]);
var inst_49954 = inst_49929.length;
var inst_49955 = (inst_49954 > (0));
var state_49969__$1 = state_49969;
if(cljs.core.truth_(inst_49955)){
var statearr_49979_50004 = state_49969__$1;
(statearr_49979_50004[(1)] = (12));

} else {
var statearr_49980_50005 = state_49969__$1;
(statearr_49980_50005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (3))){
var inst_49967 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49969__$1,inst_49967);
} else {
if((state_val_49970 === (12))){
var inst_49929 = (state_49969[(8)]);
var inst_49957 = cljs.core.vec.call(null,inst_49929);
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49969__$1,(15),out,inst_49957);
} else {
if((state_val_49970 === (2))){
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49969__$1,(4),ch);
} else {
if((state_val_49970 === (11))){
var inst_49933 = (state_49969[(9)]);
var inst_49937 = (state_49969[(10)]);
var inst_49947 = (state_49969[(2)]);
var inst_49948 = [];
var inst_49949 = inst_49948.push(inst_49933);
var inst_49929 = inst_49948;
var inst_49930 = inst_49937;
var state_49969__$1 = (function (){var statearr_49981 = state_49969;
(statearr_49981[(7)] = inst_49930);

(statearr_49981[(8)] = inst_49929);

(statearr_49981[(11)] = inst_49949);

(statearr_49981[(12)] = inst_49947);

return statearr_49981;
})();
var statearr_49982_50006 = state_49969__$1;
(statearr_49982_50006[(2)] = null);

(statearr_49982_50006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (9))){
var inst_49929 = (state_49969[(8)]);
var inst_49945 = cljs.core.vec.call(null,inst_49929);
var state_49969__$1 = state_49969;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49969__$1,(11),out,inst_49945);
} else {
if((state_val_49970 === (5))){
var inst_49933 = (state_49969[(9)]);
var inst_49930 = (state_49969[(7)]);
var inst_49937 = (state_49969[(10)]);
var inst_49937__$1 = f.call(null,inst_49933);
var inst_49938 = cljs.core._EQ_.call(null,inst_49937__$1,inst_49930);
var inst_49939 = cljs.core.keyword_identical_QMARK_.call(null,inst_49930,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_49940 = (inst_49938) || (inst_49939);
var state_49969__$1 = (function (){var statearr_49983 = state_49969;
(statearr_49983[(10)] = inst_49937__$1);

return statearr_49983;
})();
if(cljs.core.truth_(inst_49940)){
var statearr_49984_50007 = state_49969__$1;
(statearr_49984_50007[(1)] = (8));

} else {
var statearr_49985_50008 = state_49969__$1;
(statearr_49985_50008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (14))){
var inst_49962 = (state_49969[(2)]);
var inst_49963 = cljs.core.async.close_BANG_.call(null,out);
var state_49969__$1 = (function (){var statearr_49987 = state_49969;
(statearr_49987[(13)] = inst_49962);

return statearr_49987;
})();
var statearr_49988_50009 = state_49969__$1;
(statearr_49988_50009[(2)] = inst_49963);

(statearr_49988_50009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (10))){
var inst_49952 = (state_49969[(2)]);
var state_49969__$1 = state_49969;
var statearr_49989_50010 = state_49969__$1;
(statearr_49989_50010[(2)] = inst_49952);

(statearr_49989_50010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49970 === (8))){
var inst_49933 = (state_49969[(9)]);
var inst_49937 = (state_49969[(10)]);
var inst_49929 = (state_49969[(8)]);
var inst_49942 = inst_49929.push(inst_49933);
var tmp49986 = inst_49929;
var inst_49929__$1 = tmp49986;
var inst_49930 = inst_49937;
var state_49969__$1 = (function (){var statearr_49990 = state_49969;
(statearr_49990[(7)] = inst_49930);

(statearr_49990[(14)] = inst_49942);

(statearr_49990[(8)] = inst_49929__$1);

return statearr_49990;
})();
var statearr_49991_50011 = state_49969__$1;
(statearr_49991_50011[(2)] = null);

(statearr_49991_50011[(1)] = (2));


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
});})(c__38562__auto___49997,out))
;
return ((function (switch__38474__auto__,c__38562__auto___49997,out){
return (function() {
var cljs$core$async$state_machine__38475__auto__ = null;
var cljs$core$async$state_machine__38475__auto____0 = (function (){
var statearr_49992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49992[(0)] = cljs$core$async$state_machine__38475__auto__);

(statearr_49992[(1)] = (1));

return statearr_49992;
});
var cljs$core$async$state_machine__38475__auto____1 = (function (state_49969){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_49969);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e49993){if((e49993 instanceof Object)){
var ex__38478__auto__ = e49993;
var statearr_49994_50012 = state_49969;
(statearr_49994_50012[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49969);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50013 = state_49969;
state_49969 = G__50013;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
cljs$core$async$state_machine__38475__auto__ = function(state_49969){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38475__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38475__auto____1.call(this,state_49969);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38475__auto____0;
cljs$core$async$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38475__auto____1;
return cljs$core$async$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___49997,out))
})();
var state__38564__auto__ = (function (){var statearr_49995 = f__38563__auto__.call(null);
(statearr_49995[(6)] = c__38562__auto___49997);

return statearr_49995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___49997,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1521280399037
