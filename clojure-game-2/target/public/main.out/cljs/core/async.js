// Compiled by ClojureScript 1.9.473 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args9740 = [];
var len__8257__auto___9746 = arguments.length;
var i__8258__auto___9747 = (0);
while(true){
if((i__8258__auto___9747 < len__8257__auto___9746)){
args9740.push((arguments[i__8258__auto___9747]));

var G__9748 = (i__8258__auto___9747 + (1));
i__8258__auto___9747 = G__9748;
continue;
} else {
}
break;
}

var G__9742 = args9740.length;
switch (G__9742) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9740.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9743 = (function (f,blockable,meta9744){
this.f = f;
this.blockable = blockable;
this.meta9744 = meta9744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9745,meta9744__$1){
var self__ = this;
var _9745__$1 = this;
return (new cljs.core.async.t_cljs$core$async9743(self__.f,self__.blockable,meta9744__$1));
});

cljs.core.async.t_cljs$core$async9743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9745){
var self__ = this;
var _9745__$1 = this;
return self__.meta9744;
});

cljs.core.async.t_cljs$core$async9743.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9744","meta9744",1356746200,null)], null);
});

cljs.core.async.t_cljs$core$async9743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9743";

cljs.core.async.t_cljs$core$async9743.cljs$lang$ctorPrWriter = (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async9743");
});

cljs.core.async.__GT_t_cljs$core$async9743 = (function cljs$core$async$__GT_t_cljs$core$async9743(f__$1,blockable__$1,meta9744){
return (new cljs.core.async.t_cljs$core$async9743(f__$1,blockable__$1,meta9744));
});

}

return (new cljs.core.async.t_cljs$core$async9743(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args9752 = [];
var len__8257__auto___9755 = arguments.length;
var i__8258__auto___9756 = (0);
while(true){
if((i__8258__auto___9756 < len__8257__auto___9755)){
args9752.push((arguments[i__8258__auto___9756]));

var G__9757 = (i__8258__auto___9756 + (1));
i__8258__auto___9756 = G__9757;
continue;
} else {
}
break;
}

var G__9754 = args9752.length;
switch (G__9754) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9752.length)].join('')));

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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
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
var args9759 = [];
var len__8257__auto___9762 = arguments.length;
var i__8258__auto___9763 = (0);
while(true){
if((i__8258__auto___9763 < len__8257__auto___9762)){
args9759.push((arguments[i__8258__auto___9763]));

var G__9764 = (i__8258__auto___9763 + (1));
i__8258__auto___9763 = G__9764;
continue;
} else {
}
break;
}

var G__9761 = args9759.length;
switch (G__9761) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9759.length)].join('')));

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
var args9766 = [];
var len__8257__auto___9769 = arguments.length;
var i__8258__auto___9770 = (0);
while(true){
if((i__8258__auto___9770 < len__8257__auto___9769)){
args9766.push((arguments[i__8258__auto___9770]));

var G__9771 = (i__8258__auto___9770 + (1));
i__8258__auto___9770 = G__9771;
continue;
} else {
}
break;
}

var G__9768 = args9766.length;
switch (G__9768) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9766.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9773 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9773);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9773,ret){
return (function (){
return fn1.call(null,val_9773);
});})(val_9773,ret))
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
var args9774 = [];
var len__8257__auto___9777 = arguments.length;
var i__8258__auto___9778 = (0);
while(true){
if((i__8258__auto___9778 < len__8257__auto___9777)){
args9774.push((arguments[i__8258__auto___9778]));

var G__9779 = (i__8258__auto___9778 + (1));
i__8258__auto___9778 = G__9779;
continue;
} else {
}
break;
}

var G__9776 = args9774.length;
switch (G__9776) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9774.length)].join('')));

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
var n__8067__auto___9781 = n;
var x_9782 = (0);
while(true){
if((x_9782 < n__8067__auto___9781)){
(a[x_9782] = (0));

var G__9783 = (x_9782 + (1));
x_9782 = G__9783;
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

var G__9784 = (i + (1));
i = G__9784;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9788 = (function (flag,meta9789){
this.flag = flag;
this.meta9789 = meta9789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9790,meta9789__$1){
var self__ = this;
var _9790__$1 = this;
return (new cljs.core.async.t_cljs$core$async9788(self__.flag,meta9789__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9790){
var self__ = this;
var _9790__$1 = this;
return self__.meta9789;
});})(flag))
;

cljs.core.async.t_cljs$core$async9788.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9788.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9789","meta9789",1619928267,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9788";

cljs.core.async.t_cljs$core$async9788.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async9788");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9788 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9788(flag__$1,meta9789){
return (new cljs.core.async.t_cljs$core$async9788(flag__$1,meta9789));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9788(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9794 = (function (flag,cb,meta9795){
this.flag = flag;
this.cb = cb;
this.meta9795 = meta9795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9796,meta9795__$1){
var self__ = this;
var _9796__$1 = this;
return (new cljs.core.async.t_cljs$core$async9794(self__.flag,self__.cb,meta9795__$1));
});

cljs.core.async.t_cljs$core$async9794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9796){
var self__ = this;
var _9796__$1 = this;
return self__.meta9795;
});

cljs.core.async.t_cljs$core$async9794.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async9794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9795","meta9795",927654526,null)], null);
});

cljs.core.async.t_cljs$core$async9794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9794";

cljs.core.async.t_cljs$core$async9794.cljs$lang$ctorPrWriter = (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async9794");
});

cljs.core.async.__GT_t_cljs$core$async9794 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9794(flag__$1,cb__$1,meta9795){
return (new cljs.core.async.t_cljs$core$async9794(flag__$1,cb__$1,meta9795));
});

}

return (new cljs.core.async.t_cljs$core$async9794(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__9797_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9797_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9798_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9798_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__7144__auto__ = wport;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9799 = (i + (1));
i = G__9799;
continue;
}
} else {
return null;
}
break;
}
})();
var or__7144__auto__ = ret;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__7132__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__7132__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__7132__auto__;
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
var args__8264__auto__ = [];
var len__8257__auto___9805 = arguments.length;
var i__8258__auto___9806 = (0);
while(true){
if((i__8258__auto___9806 < len__8257__auto___9805)){
args__8264__auto__.push((arguments[i__8258__auto___9806]));

var G__9807 = (i__8258__auto___9806 + (1));
i__8258__auto___9806 = G__9807;
continue;
} else {
}
break;
}

var argseq__8265__auto__ = ((((1) < args__8264__auto__.length))?(new cljs.core.IndexedSeq(args__8264__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8265__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9802){
var map__9803 = p__9802;
var map__9803__$1 = ((((!((map__9803 == null)))?((((map__9803.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9803.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9803):map__9803);
var opts = map__9803__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9800){
var G__9801 = cljs.core.first.call(null,seq9800);
var seq9800__$1 = cljs.core.next.call(null,seq9800);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9801,seq9800__$1);
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
var args9808 = [];
var len__8257__auto___9858 = arguments.length;
var i__8258__auto___9859 = (0);
while(true){
if((i__8258__auto___9859 < len__8257__auto___9858)){
args9808.push((arguments[i__8258__auto___9859]));

var G__9860 = (i__8258__auto___9859 + (1));
i__8258__auto___9859 = G__9860;
continue;
} else {
}
break;
}

var G__9810 = args9808.length;
switch (G__9810) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9808.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__9695__auto___9862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___9862){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___9862){
return (function (state_9834){
var state_val_9835 = (state_9834[(1)]);
if((state_val_9835 === (7))){
var inst_9830 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9836_9863 = state_9834__$1;
(statearr_9836_9863[(2)] = inst_9830);

(statearr_9836_9863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (1))){
var state_9834__$1 = state_9834;
var statearr_9837_9864 = state_9834__$1;
(statearr_9837_9864[(2)] = null);

(statearr_9837_9864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (4))){
var inst_9813 = (state_9834[(7)]);
var inst_9813__$1 = (state_9834[(2)]);
var inst_9814 = (inst_9813__$1 == null);
var state_9834__$1 = (function (){var statearr_9838 = state_9834;
(statearr_9838[(7)] = inst_9813__$1);

return statearr_9838;
})();
if(cljs.core.truth_(inst_9814)){
var statearr_9839_9865 = state_9834__$1;
(statearr_9839_9865[(1)] = (5));

} else {
var statearr_9840_9866 = state_9834__$1;
(statearr_9840_9866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (13))){
var state_9834__$1 = state_9834;
var statearr_9841_9867 = state_9834__$1;
(statearr_9841_9867[(2)] = null);

(statearr_9841_9867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (6))){
var inst_9813 = (state_9834[(7)]);
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9834__$1,(11),to,inst_9813);
} else {
if((state_val_9835 === (3))){
var inst_9832 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9834__$1,inst_9832);
} else {
if((state_val_9835 === (12))){
var state_9834__$1 = state_9834;
var statearr_9842_9868 = state_9834__$1;
(statearr_9842_9868[(2)] = null);

(statearr_9842_9868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (2))){
var state_9834__$1 = state_9834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9834__$1,(4),from);
} else {
if((state_val_9835 === (11))){
var inst_9823 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
if(cljs.core.truth_(inst_9823)){
var statearr_9843_9869 = state_9834__$1;
(statearr_9843_9869[(1)] = (12));

} else {
var statearr_9844_9870 = state_9834__$1;
(statearr_9844_9870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (9))){
var state_9834__$1 = state_9834;
var statearr_9845_9871 = state_9834__$1;
(statearr_9845_9871[(2)] = null);

(statearr_9845_9871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (5))){
var state_9834__$1 = state_9834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9846_9872 = state_9834__$1;
(statearr_9846_9872[(1)] = (8));

} else {
var statearr_9847_9873 = state_9834__$1;
(statearr_9847_9873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (14))){
var inst_9828 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9848_9874 = state_9834__$1;
(statearr_9848_9874[(2)] = inst_9828);

(statearr_9848_9874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (10))){
var inst_9820 = (state_9834[(2)]);
var state_9834__$1 = state_9834;
var statearr_9849_9875 = state_9834__$1;
(statearr_9849_9875[(2)] = inst_9820);

(statearr_9849_9875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9835 === (8))){
var inst_9817 = cljs.core.async.close_BANG_.call(null,to);
var state_9834__$1 = state_9834;
var statearr_9850_9876 = state_9834__$1;
(statearr_9850_9876[(2)] = inst_9817);

(statearr_9850_9876[(1)] = (10));


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
});})(c__9695__auto___9862))
;
return ((function (switch__9583__auto__,c__9695__auto___9862){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_9854 = [null,null,null,null,null,null,null,null];
(statearr_9854[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_9854[(1)] = (1));

return statearr_9854;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_9834){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_9834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e9855){if((e9855 instanceof Object)){
var ex__9587__auto__ = e9855;
var statearr_9856_9877 = state_9834;
(statearr_9856_9877[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9878 = state_9834;
state_9834 = G__9878;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_9834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_9834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___9862))
})();
var state__9697__auto__ = (function (){var statearr_9857 = f__9696__auto__.call(null);
(statearr_9857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___9862);

return statearr_9857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___9862))
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
var process = ((function (jobs,results){
return (function (p__10066){
var vec__10067 = p__10066;
var v = cljs.core.nth.call(null,vec__10067,(0),null);
var p = cljs.core.nth.call(null,vec__10067,(1),null);
var job = vec__10067;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__9695__auto___10253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___10253,res,vec__10067,v,p,job,jobs,results){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___10253,res,vec__10067,v,p,job,jobs,results){
return (function (state_10074){
var state_val_10075 = (state_10074[(1)]);
if((state_val_10075 === (1))){
var state_10074__$1 = state_10074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10074__$1,(2),res,v);
} else {
if((state_val_10075 === (2))){
var inst_10071 = (state_10074[(2)]);
var inst_10072 = cljs.core.async.close_BANG_.call(null,res);
var state_10074__$1 = (function (){var statearr_10076 = state_10074;
(statearr_10076[(7)] = inst_10071);

return statearr_10076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10074__$1,inst_10072);
} else {
return null;
}
}
});})(c__9695__auto___10253,res,vec__10067,v,p,job,jobs,results))
;
return ((function (switch__9583__auto__,c__9695__auto___10253,res,vec__10067,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0 = (function (){
var statearr_10080 = [null,null,null,null,null,null,null,null];
(statearr_10080[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__);

(statearr_10080[(1)] = (1));

return statearr_10080;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1 = (function (state_10074){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10081){if((e10081 instanceof Object)){
var ex__9587__auto__ = e10081;
var statearr_10082_10254 = state_10074;
(statearr_10082_10254[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10255 = state_10074;
state_10074 = G__10255;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = function(state_10074){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1.call(this,state_10074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___10253,res,vec__10067,v,p,job,jobs,results))
})();
var state__9697__auto__ = (function (){var statearr_10083 = f__9696__auto__.call(null);
(statearr_10083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___10253);

return statearr_10083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___10253,res,vec__10067,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__10084){
var vec__10085 = p__10084;
var v = cljs.core.nth.call(null,vec__10085,(0),null);
var p = cljs.core.nth.call(null,vec__10085,(1),null);
var job = vec__10085;
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
var n__8067__auto___10256 = n;
var __10257 = (0);
while(true){
if((__10257 < n__8067__auto___10256)){
var G__10088_10258 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__10088_10258) {
case "compute":
var c__9695__auto___10260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10257,c__9695__auto___10260,G__10088_10258,n__8067__auto___10256,jobs,results,process,async){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (__10257,c__9695__auto___10260,G__10088_10258,n__8067__auto___10256,jobs,results,process,async){
return (function (state_10101){
var state_val_10102 = (state_10101[(1)]);
if((state_val_10102 === (1))){
var state_10101__$1 = state_10101;
var statearr_10103_10261 = state_10101__$1;
(statearr_10103_10261[(2)] = null);

(statearr_10103_10261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10102 === (2))){
var state_10101__$1 = state_10101;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10101__$1,(4),jobs);
} else {
if((state_val_10102 === (3))){
var inst_10099 = (state_10101[(2)]);
var state_10101__$1 = state_10101;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10101__$1,inst_10099);
} else {
if((state_val_10102 === (4))){
var inst_10091 = (state_10101[(2)]);
var inst_10092 = process.call(null,inst_10091);
var state_10101__$1 = state_10101;
if(cljs.core.truth_(inst_10092)){
var statearr_10104_10262 = state_10101__$1;
(statearr_10104_10262[(1)] = (5));

} else {
var statearr_10105_10263 = state_10101__$1;
(statearr_10105_10263[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10102 === (5))){
var state_10101__$1 = state_10101;
var statearr_10106_10264 = state_10101__$1;
(statearr_10106_10264[(2)] = null);

(statearr_10106_10264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10102 === (6))){
var state_10101__$1 = state_10101;
var statearr_10107_10265 = state_10101__$1;
(statearr_10107_10265[(2)] = null);

(statearr_10107_10265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10102 === (7))){
var inst_10097 = (state_10101[(2)]);
var state_10101__$1 = state_10101;
var statearr_10108_10266 = state_10101__$1;
(statearr_10108_10266[(2)] = inst_10097);

(statearr_10108_10266[(1)] = (3));


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
});})(__10257,c__9695__auto___10260,G__10088_10258,n__8067__auto___10256,jobs,results,process,async))
;
return ((function (__10257,switch__9583__auto__,c__9695__auto___10260,G__10088_10258,n__8067__auto___10256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0 = (function (){
var statearr_10112 = [null,null,null,null,null,null,null];
(statearr_10112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__);

(statearr_10112[(1)] = (1));

return statearr_10112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1 = (function (state_10101){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10101);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10113){if((e10113 instanceof Object)){
var ex__9587__auto__ = e10113;
var statearr_10114_10267 = state_10101;
(statearr_10114_10267[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10101);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10268 = state_10101;
state_10101 = G__10268;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = function(state_10101){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1.call(this,state_10101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__;
})()
;})(__10257,switch__9583__auto__,c__9695__auto___10260,G__10088_10258,n__8067__auto___10256,jobs,results,process,async))
})();
var state__9697__auto__ = (function (){var statearr_10115 = f__9696__auto__.call(null);
(statearr_10115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___10260);

return statearr_10115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(__10257,c__9695__auto___10260,G__10088_10258,n__8067__auto___10256,jobs,results,process,async))
);


break;
case "async":
var c__9695__auto___10269 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__10257,c__9695__auto___10269,G__10088_10258,n__8067__auto___10256,jobs,results,process,async){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (__10257,c__9695__auto___10269,G__10088_10258,n__8067__auto___10256,jobs,results,process,async){
return (function (state_10128){
var state_val_10129 = (state_10128[(1)]);
if((state_val_10129 === (1))){
var state_10128__$1 = state_10128;
var statearr_10130_10270 = state_10128__$1;
(statearr_10130_10270[(2)] = null);

(statearr_10130_10270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10129 === (2))){
var state_10128__$1 = state_10128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10128__$1,(4),jobs);
} else {
if((state_val_10129 === (3))){
var inst_10126 = (state_10128[(2)]);
var state_10128__$1 = state_10128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10128__$1,inst_10126);
} else {
if((state_val_10129 === (4))){
var inst_10118 = (state_10128[(2)]);
var inst_10119 = async.call(null,inst_10118);
var state_10128__$1 = state_10128;
if(cljs.core.truth_(inst_10119)){
var statearr_10131_10271 = state_10128__$1;
(statearr_10131_10271[(1)] = (5));

} else {
var statearr_10132_10272 = state_10128__$1;
(statearr_10132_10272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10129 === (5))){
var state_10128__$1 = state_10128;
var statearr_10133_10273 = state_10128__$1;
(statearr_10133_10273[(2)] = null);

(statearr_10133_10273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10129 === (6))){
var state_10128__$1 = state_10128;
var statearr_10134_10274 = state_10128__$1;
(statearr_10134_10274[(2)] = null);

(statearr_10134_10274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10129 === (7))){
var inst_10124 = (state_10128[(2)]);
var state_10128__$1 = state_10128;
var statearr_10135_10275 = state_10128__$1;
(statearr_10135_10275[(2)] = inst_10124);

(statearr_10135_10275[(1)] = (3));


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
});})(__10257,c__9695__auto___10269,G__10088_10258,n__8067__auto___10256,jobs,results,process,async))
;
return ((function (__10257,switch__9583__auto__,c__9695__auto___10269,G__10088_10258,n__8067__auto___10256,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0 = (function (){
var statearr_10139 = [null,null,null,null,null,null,null];
(statearr_10139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__);

(statearr_10139[(1)] = (1));

return statearr_10139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1 = (function (state_10128){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10140){if((e10140 instanceof Object)){
var ex__9587__auto__ = e10140;
var statearr_10141_10276 = state_10128;
(statearr_10141_10276[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10277 = state_10128;
state_10128 = G__10277;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = function(state_10128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1.call(this,state_10128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__;
})()
;})(__10257,switch__9583__auto__,c__9695__auto___10269,G__10088_10258,n__8067__auto___10256,jobs,results,process,async))
})();
var state__9697__auto__ = (function (){var statearr_10142 = f__9696__auto__.call(null);
(statearr_10142[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___10269);

return statearr_10142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(__10257,c__9695__auto___10269,G__10088_10258,n__8067__auto___10256,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__10278 = (__10257 + (1));
__10257 = G__10278;
continue;
} else {
}
break;
}

var c__9695__auto___10279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___10279,jobs,results,process,async){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___10279,jobs,results,process,async){
return (function (state_10164){
var state_val_10165 = (state_10164[(1)]);
if((state_val_10165 === (1))){
var state_10164__$1 = state_10164;
var statearr_10166_10280 = state_10164__$1;
(statearr_10166_10280[(2)] = null);

(statearr_10166_10280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10165 === (2))){
var state_10164__$1 = state_10164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10164__$1,(4),from);
} else {
if((state_val_10165 === (3))){
var inst_10162 = (state_10164[(2)]);
var state_10164__$1 = state_10164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10164__$1,inst_10162);
} else {
if((state_val_10165 === (4))){
var inst_10145 = (state_10164[(7)]);
var inst_10145__$1 = (state_10164[(2)]);
var inst_10146 = (inst_10145__$1 == null);
var state_10164__$1 = (function (){var statearr_10167 = state_10164;
(statearr_10167[(7)] = inst_10145__$1);

return statearr_10167;
})();
if(cljs.core.truth_(inst_10146)){
var statearr_10168_10281 = state_10164__$1;
(statearr_10168_10281[(1)] = (5));

} else {
var statearr_10169_10282 = state_10164__$1;
(statearr_10169_10282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10165 === (5))){
var inst_10148 = cljs.core.async.close_BANG_.call(null,jobs);
var state_10164__$1 = state_10164;
var statearr_10170_10283 = state_10164__$1;
(statearr_10170_10283[(2)] = inst_10148);

(statearr_10170_10283[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10165 === (6))){
var inst_10150 = (state_10164[(8)]);
var inst_10145 = (state_10164[(7)]);
var inst_10150__$1 = cljs.core.async.chan.call(null,(1));
var inst_10151 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_10152 = [inst_10145,inst_10150__$1];
var inst_10153 = (new cljs.core.PersistentVector(null,2,(5),inst_10151,inst_10152,null));
var state_10164__$1 = (function (){var statearr_10171 = state_10164;
(statearr_10171[(8)] = inst_10150__$1);

return statearr_10171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10164__$1,(8),jobs,inst_10153);
} else {
if((state_val_10165 === (7))){
var inst_10160 = (state_10164[(2)]);
var state_10164__$1 = state_10164;
var statearr_10172_10284 = state_10164__$1;
(statearr_10172_10284[(2)] = inst_10160);

(statearr_10172_10284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10165 === (8))){
var inst_10150 = (state_10164[(8)]);
var inst_10155 = (state_10164[(2)]);
var state_10164__$1 = (function (){var statearr_10173 = state_10164;
(statearr_10173[(9)] = inst_10155);

return statearr_10173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10164__$1,(9),results,inst_10150);
} else {
if((state_val_10165 === (9))){
var inst_10157 = (state_10164[(2)]);
var state_10164__$1 = (function (){var statearr_10174 = state_10164;
(statearr_10174[(10)] = inst_10157);

return statearr_10174;
})();
var statearr_10175_10285 = state_10164__$1;
(statearr_10175_10285[(2)] = null);

(statearr_10175_10285[(1)] = (2));


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
});})(c__9695__auto___10279,jobs,results,process,async))
;
return ((function (switch__9583__auto__,c__9695__auto___10279,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0 = (function (){
var statearr_10179 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_10179[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__);

(statearr_10179[(1)] = (1));

return statearr_10179;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1 = (function (state_10164){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10180){if((e10180 instanceof Object)){
var ex__9587__auto__ = e10180;
var statearr_10181_10286 = state_10164;
(statearr_10181_10286[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10287 = state_10164;
state_10164 = G__10287;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = function(state_10164){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1.call(this,state_10164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___10279,jobs,results,process,async))
})();
var state__9697__auto__ = (function (){var statearr_10182 = f__9696__auto__.call(null);
(statearr_10182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___10279);

return statearr_10182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___10279,jobs,results,process,async))
);


var c__9695__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto__,jobs,results,process,async){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto__,jobs,results,process,async){
return (function (state_10220){
var state_val_10221 = (state_10220[(1)]);
if((state_val_10221 === (7))){
var inst_10216 = (state_10220[(2)]);
var state_10220__$1 = state_10220;
var statearr_10222_10288 = state_10220__$1;
(statearr_10222_10288[(2)] = inst_10216);

(statearr_10222_10288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (20))){
var state_10220__$1 = state_10220;
var statearr_10223_10289 = state_10220__$1;
(statearr_10223_10289[(2)] = null);

(statearr_10223_10289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (1))){
var state_10220__$1 = state_10220;
var statearr_10224_10290 = state_10220__$1;
(statearr_10224_10290[(2)] = null);

(statearr_10224_10290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (4))){
var inst_10185 = (state_10220[(7)]);
var inst_10185__$1 = (state_10220[(2)]);
var inst_10186 = (inst_10185__$1 == null);
var state_10220__$1 = (function (){var statearr_10225 = state_10220;
(statearr_10225[(7)] = inst_10185__$1);

return statearr_10225;
})();
if(cljs.core.truth_(inst_10186)){
var statearr_10226_10291 = state_10220__$1;
(statearr_10226_10291[(1)] = (5));

} else {
var statearr_10227_10292 = state_10220__$1;
(statearr_10227_10292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (15))){
var inst_10198 = (state_10220[(8)]);
var state_10220__$1 = state_10220;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10220__$1,(18),to,inst_10198);
} else {
if((state_val_10221 === (21))){
var inst_10211 = (state_10220[(2)]);
var state_10220__$1 = state_10220;
var statearr_10228_10293 = state_10220__$1;
(statearr_10228_10293[(2)] = inst_10211);

(statearr_10228_10293[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (13))){
var inst_10213 = (state_10220[(2)]);
var state_10220__$1 = (function (){var statearr_10229 = state_10220;
(statearr_10229[(9)] = inst_10213);

return statearr_10229;
})();
var statearr_10230_10294 = state_10220__$1;
(statearr_10230_10294[(2)] = null);

(statearr_10230_10294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (6))){
var inst_10185 = (state_10220[(7)]);
var state_10220__$1 = state_10220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10220__$1,(11),inst_10185);
} else {
if((state_val_10221 === (17))){
var inst_10206 = (state_10220[(2)]);
var state_10220__$1 = state_10220;
if(cljs.core.truth_(inst_10206)){
var statearr_10231_10295 = state_10220__$1;
(statearr_10231_10295[(1)] = (19));

} else {
var statearr_10232_10296 = state_10220__$1;
(statearr_10232_10296[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (3))){
var inst_10218 = (state_10220[(2)]);
var state_10220__$1 = state_10220;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10220__$1,inst_10218);
} else {
if((state_val_10221 === (12))){
var inst_10195 = (state_10220[(10)]);
var state_10220__$1 = state_10220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10220__$1,(14),inst_10195);
} else {
if((state_val_10221 === (2))){
var state_10220__$1 = state_10220;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10220__$1,(4),results);
} else {
if((state_val_10221 === (19))){
var state_10220__$1 = state_10220;
var statearr_10233_10297 = state_10220__$1;
(statearr_10233_10297[(2)] = null);

(statearr_10233_10297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (11))){
var inst_10195 = (state_10220[(2)]);
var state_10220__$1 = (function (){var statearr_10234 = state_10220;
(statearr_10234[(10)] = inst_10195);

return statearr_10234;
})();
var statearr_10235_10298 = state_10220__$1;
(statearr_10235_10298[(2)] = null);

(statearr_10235_10298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (9))){
var state_10220__$1 = state_10220;
var statearr_10236_10299 = state_10220__$1;
(statearr_10236_10299[(2)] = null);

(statearr_10236_10299[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (5))){
var state_10220__$1 = state_10220;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10237_10300 = state_10220__$1;
(statearr_10237_10300[(1)] = (8));

} else {
var statearr_10238_10301 = state_10220__$1;
(statearr_10238_10301[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (14))){
var inst_10198 = (state_10220[(8)]);
var inst_10200 = (state_10220[(11)]);
var inst_10198__$1 = (state_10220[(2)]);
var inst_10199 = (inst_10198__$1 == null);
var inst_10200__$1 = cljs.core.not.call(null,inst_10199);
var state_10220__$1 = (function (){var statearr_10239 = state_10220;
(statearr_10239[(8)] = inst_10198__$1);

(statearr_10239[(11)] = inst_10200__$1);

return statearr_10239;
})();
if(inst_10200__$1){
var statearr_10240_10302 = state_10220__$1;
(statearr_10240_10302[(1)] = (15));

} else {
var statearr_10241_10303 = state_10220__$1;
(statearr_10241_10303[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (16))){
var inst_10200 = (state_10220[(11)]);
var state_10220__$1 = state_10220;
var statearr_10242_10304 = state_10220__$1;
(statearr_10242_10304[(2)] = inst_10200);

(statearr_10242_10304[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (10))){
var inst_10192 = (state_10220[(2)]);
var state_10220__$1 = state_10220;
var statearr_10243_10305 = state_10220__$1;
(statearr_10243_10305[(2)] = inst_10192);

(statearr_10243_10305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (18))){
var inst_10203 = (state_10220[(2)]);
var state_10220__$1 = state_10220;
var statearr_10244_10306 = state_10220__$1;
(statearr_10244_10306[(2)] = inst_10203);

(statearr_10244_10306[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10221 === (8))){
var inst_10189 = cljs.core.async.close_BANG_.call(null,to);
var state_10220__$1 = state_10220;
var statearr_10245_10307 = state_10220__$1;
(statearr_10245_10307[(2)] = inst_10189);

(statearr_10245_10307[(1)] = (10));


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
});})(c__9695__auto__,jobs,results,process,async))
;
return ((function (switch__9583__auto__,c__9695__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0 = (function (){
var statearr_10249 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__);

(statearr_10249[(1)] = (1));

return statearr_10249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1 = (function (state_10220){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10220);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10250){if((e10250 instanceof Object)){
var ex__9587__auto__ = e10250;
var statearr_10251_10308 = state_10220;
(statearr_10251_10308[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10220);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10309 = state_10220;
state_10220 = G__10309;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__ = function(state_10220){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1.call(this,state_10220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__9584__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto__,jobs,results,process,async))
})();
var state__9697__auto__ = (function (){var statearr_10252 = f__9696__auto__.call(null);
(statearr_10252[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto__);

return statearr_10252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto__,jobs,results,process,async))
);

return c__9695__auto__;
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
var args10310 = [];
var len__8257__auto___10313 = arguments.length;
var i__8258__auto___10314 = (0);
while(true){
if((i__8258__auto___10314 < len__8257__auto___10313)){
args10310.push((arguments[i__8258__auto___10314]));

var G__10315 = (i__8258__auto___10314 + (1));
i__8258__auto___10314 = G__10315;
continue;
} else {
}
break;
}

var G__10312 = args10310.length;
switch (G__10312) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10310.length)].join('')));

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
var args10317 = [];
var len__8257__auto___10320 = arguments.length;
var i__8258__auto___10321 = (0);
while(true){
if((i__8258__auto___10321 < len__8257__auto___10320)){
args10317.push((arguments[i__8258__auto___10321]));

var G__10322 = (i__8258__auto___10321 + (1));
i__8258__auto___10321 = G__10322;
continue;
} else {
}
break;
}

var G__10319 = args10317.length;
switch (G__10319) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10317.length)].join('')));

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
var args10324 = [];
var len__8257__auto___10377 = arguments.length;
var i__8258__auto___10378 = (0);
while(true){
if((i__8258__auto___10378 < len__8257__auto___10377)){
args10324.push((arguments[i__8258__auto___10378]));

var G__10379 = (i__8258__auto___10378 + (1));
i__8258__auto___10378 = G__10379;
continue;
} else {
}
break;
}

var G__10326 = args10324.length;
switch (G__10326) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10324.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__9695__auto___10381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___10381,tc,fc){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___10381,tc,fc){
return (function (state_10352){
var state_val_10353 = (state_10352[(1)]);
if((state_val_10353 === (7))){
var inst_10348 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
var statearr_10354_10382 = state_10352__$1;
(statearr_10354_10382[(2)] = inst_10348);

(statearr_10354_10382[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (1))){
var state_10352__$1 = state_10352;
var statearr_10355_10383 = state_10352__$1;
(statearr_10355_10383[(2)] = null);

(statearr_10355_10383[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (4))){
var inst_10329 = (state_10352[(7)]);
var inst_10329__$1 = (state_10352[(2)]);
var inst_10330 = (inst_10329__$1 == null);
var state_10352__$1 = (function (){var statearr_10356 = state_10352;
(statearr_10356[(7)] = inst_10329__$1);

return statearr_10356;
})();
if(cljs.core.truth_(inst_10330)){
var statearr_10357_10384 = state_10352__$1;
(statearr_10357_10384[(1)] = (5));

} else {
var statearr_10358_10385 = state_10352__$1;
(statearr_10358_10385[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (13))){
var state_10352__$1 = state_10352;
var statearr_10359_10386 = state_10352__$1;
(statearr_10359_10386[(2)] = null);

(statearr_10359_10386[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (6))){
var inst_10329 = (state_10352[(7)]);
var inst_10335 = p.call(null,inst_10329);
var state_10352__$1 = state_10352;
if(cljs.core.truth_(inst_10335)){
var statearr_10360_10387 = state_10352__$1;
(statearr_10360_10387[(1)] = (9));

} else {
var statearr_10361_10388 = state_10352__$1;
(statearr_10361_10388[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (3))){
var inst_10350 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10352__$1,inst_10350);
} else {
if((state_val_10353 === (12))){
var state_10352__$1 = state_10352;
var statearr_10362_10389 = state_10352__$1;
(statearr_10362_10389[(2)] = null);

(statearr_10362_10389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (2))){
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10352__$1,(4),ch);
} else {
if((state_val_10353 === (11))){
var inst_10329 = (state_10352[(7)]);
var inst_10339 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10352__$1,(8),inst_10339,inst_10329);
} else {
if((state_val_10353 === (9))){
var state_10352__$1 = state_10352;
var statearr_10363_10390 = state_10352__$1;
(statearr_10363_10390[(2)] = tc);

(statearr_10363_10390[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (5))){
var inst_10332 = cljs.core.async.close_BANG_.call(null,tc);
var inst_10333 = cljs.core.async.close_BANG_.call(null,fc);
var state_10352__$1 = (function (){var statearr_10364 = state_10352;
(statearr_10364[(8)] = inst_10332);

return statearr_10364;
})();
var statearr_10365_10391 = state_10352__$1;
(statearr_10365_10391[(2)] = inst_10333);

(statearr_10365_10391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (14))){
var inst_10346 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
var statearr_10366_10392 = state_10352__$1;
(statearr_10366_10392[(2)] = inst_10346);

(statearr_10366_10392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (10))){
var state_10352__$1 = state_10352;
var statearr_10367_10393 = state_10352__$1;
(statearr_10367_10393[(2)] = fc);

(statearr_10367_10393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10353 === (8))){
var inst_10341 = (state_10352[(2)]);
var state_10352__$1 = state_10352;
if(cljs.core.truth_(inst_10341)){
var statearr_10368_10394 = state_10352__$1;
(statearr_10368_10394[(1)] = (12));

} else {
var statearr_10369_10395 = state_10352__$1;
(statearr_10369_10395[(1)] = (13));

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
});})(c__9695__auto___10381,tc,fc))
;
return ((function (switch__9583__auto__,c__9695__auto___10381,tc,fc){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_10373 = [null,null,null,null,null,null,null,null,null];
(statearr_10373[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_10373[(1)] = (1));

return statearr_10373;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_10352){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10374){if((e10374 instanceof Object)){
var ex__9587__auto__ = e10374;
var statearr_10375_10396 = state_10352;
(statearr_10375_10396[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10397 = state_10352;
state_10352 = G__10397;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_10352){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_10352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___10381,tc,fc))
})();
var state__9697__auto__ = (function (){var statearr_10376 = f__9696__auto__.call(null);
(statearr_10376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___10381);

return statearr_10376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___10381,tc,fc))
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
var c__9695__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto__){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto__){
return (function (state_10461){
var state_val_10462 = (state_10461[(1)]);
if((state_val_10462 === (7))){
var inst_10457 = (state_10461[(2)]);
var state_10461__$1 = state_10461;
var statearr_10463_10484 = state_10461__$1;
(statearr_10463_10484[(2)] = inst_10457);

(statearr_10463_10484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (1))){
var inst_10441 = init;
var state_10461__$1 = (function (){var statearr_10464 = state_10461;
(statearr_10464[(7)] = inst_10441);

return statearr_10464;
})();
var statearr_10465_10485 = state_10461__$1;
(statearr_10465_10485[(2)] = null);

(statearr_10465_10485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (4))){
var inst_10444 = (state_10461[(8)]);
var inst_10444__$1 = (state_10461[(2)]);
var inst_10445 = (inst_10444__$1 == null);
var state_10461__$1 = (function (){var statearr_10466 = state_10461;
(statearr_10466[(8)] = inst_10444__$1);

return statearr_10466;
})();
if(cljs.core.truth_(inst_10445)){
var statearr_10467_10486 = state_10461__$1;
(statearr_10467_10486[(1)] = (5));

} else {
var statearr_10468_10487 = state_10461__$1;
(statearr_10468_10487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (6))){
var inst_10444 = (state_10461[(8)]);
var inst_10441 = (state_10461[(7)]);
var inst_10448 = (state_10461[(9)]);
var inst_10448__$1 = f.call(null,inst_10441,inst_10444);
var inst_10449 = cljs.core.reduced_QMARK_.call(null,inst_10448__$1);
var state_10461__$1 = (function (){var statearr_10469 = state_10461;
(statearr_10469[(9)] = inst_10448__$1);

return statearr_10469;
})();
if(inst_10449){
var statearr_10470_10488 = state_10461__$1;
(statearr_10470_10488[(1)] = (8));

} else {
var statearr_10471_10489 = state_10461__$1;
(statearr_10471_10489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (3))){
var inst_10459 = (state_10461[(2)]);
var state_10461__$1 = state_10461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10461__$1,inst_10459);
} else {
if((state_val_10462 === (2))){
var state_10461__$1 = state_10461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10461__$1,(4),ch);
} else {
if((state_val_10462 === (9))){
var inst_10448 = (state_10461[(9)]);
var inst_10441 = inst_10448;
var state_10461__$1 = (function (){var statearr_10472 = state_10461;
(statearr_10472[(7)] = inst_10441);

return statearr_10472;
})();
var statearr_10473_10490 = state_10461__$1;
(statearr_10473_10490[(2)] = null);

(statearr_10473_10490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (5))){
var inst_10441 = (state_10461[(7)]);
var state_10461__$1 = state_10461;
var statearr_10474_10491 = state_10461__$1;
(statearr_10474_10491[(2)] = inst_10441);

(statearr_10474_10491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (10))){
var inst_10455 = (state_10461[(2)]);
var state_10461__$1 = state_10461;
var statearr_10475_10492 = state_10461__$1;
(statearr_10475_10492[(2)] = inst_10455);

(statearr_10475_10492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10462 === (8))){
var inst_10448 = (state_10461[(9)]);
var inst_10451 = cljs.core.deref.call(null,inst_10448);
var state_10461__$1 = state_10461;
var statearr_10476_10493 = state_10461__$1;
(statearr_10476_10493[(2)] = inst_10451);

(statearr_10476_10493[(1)] = (10));


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
});})(c__9695__auto__))
;
return ((function (switch__9583__auto__,c__9695__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__9584__auto__ = null;
var cljs$core$async$reduce_$_state_machine__9584__auto____0 = (function (){
var statearr_10480 = [null,null,null,null,null,null,null,null,null,null];
(statearr_10480[(0)] = cljs$core$async$reduce_$_state_machine__9584__auto__);

(statearr_10480[(1)] = (1));

return statearr_10480;
});
var cljs$core$async$reduce_$_state_machine__9584__auto____1 = (function (state_10461){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10481){if((e10481 instanceof Object)){
var ex__9587__auto__ = e10481;
var statearr_10482_10494 = state_10461;
(statearr_10482_10494[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10495 = state_10461;
state_10461 = G__10495;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__9584__auto__ = function(state_10461){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__9584__auto____1.call(this,state_10461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__9584__auto____0;
cljs$core$async$reduce_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__9584__auto____1;
return cljs$core$async$reduce_$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto__))
})();
var state__9697__auto__ = (function (){var statearr_10483 = f__9696__auto__.call(null);
(statearr_10483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto__);

return statearr_10483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto__))
);

return c__9695__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__9695__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto__,f__$1){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto__,f__$1){
return (function (state_10515){
var state_val_10516 = (state_10515[(1)]);
if((state_val_10516 === (1))){
var inst_10510 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_10515__$1 = state_10515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10515__$1,(2),inst_10510);
} else {
if((state_val_10516 === (2))){
var inst_10512 = (state_10515[(2)]);
var inst_10513 = f__$1.call(null,inst_10512);
var state_10515__$1 = state_10515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10515__$1,inst_10513);
} else {
return null;
}
}
});})(c__9695__auto__,f__$1))
;
return ((function (switch__9583__auto__,c__9695__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__9584__auto__ = null;
var cljs$core$async$transduce_$_state_machine__9584__auto____0 = (function (){
var statearr_10520 = [null,null,null,null,null,null,null];
(statearr_10520[(0)] = cljs$core$async$transduce_$_state_machine__9584__auto__);

(statearr_10520[(1)] = (1));

return statearr_10520;
});
var cljs$core$async$transduce_$_state_machine__9584__auto____1 = (function (state_10515){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10521){if((e10521 instanceof Object)){
var ex__9587__auto__ = e10521;
var statearr_10522_10524 = state_10515;
(statearr_10522_10524[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10525 = state_10515;
state_10515 = G__10525;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__9584__auto__ = function(state_10515){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__9584__auto____1.call(this,state_10515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__9584__auto____0;
cljs$core$async$transduce_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__9584__auto____1;
return cljs$core$async$transduce_$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto__,f__$1))
})();
var state__9697__auto__ = (function (){var statearr_10523 = f__9696__auto__.call(null);
(statearr_10523[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto__);

return statearr_10523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto__,f__$1))
);

return c__9695__auto__;
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
var args10526 = [];
var len__8257__auto___10578 = arguments.length;
var i__8258__auto___10579 = (0);
while(true){
if((i__8258__auto___10579 < len__8257__auto___10578)){
args10526.push((arguments[i__8258__auto___10579]));

var G__10580 = (i__8258__auto___10579 + (1));
i__8258__auto___10579 = G__10580;
continue;
} else {
}
break;
}

var G__10528 = args10526.length;
switch (G__10528) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10526.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__9695__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto__){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto__){
return (function (state_10553){
var state_val_10554 = (state_10553[(1)]);
if((state_val_10554 === (7))){
var inst_10535 = (state_10553[(2)]);
var state_10553__$1 = state_10553;
var statearr_10555_10582 = state_10553__$1;
(statearr_10555_10582[(2)] = inst_10535);

(statearr_10555_10582[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (1))){
var inst_10529 = cljs.core.seq.call(null,coll);
var inst_10530 = inst_10529;
var state_10553__$1 = (function (){var statearr_10556 = state_10553;
(statearr_10556[(7)] = inst_10530);

return statearr_10556;
})();
var statearr_10557_10583 = state_10553__$1;
(statearr_10557_10583[(2)] = null);

(statearr_10557_10583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (4))){
var inst_10530 = (state_10553[(7)]);
var inst_10533 = cljs.core.first.call(null,inst_10530);
var state_10553__$1 = state_10553;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10553__$1,(7),ch,inst_10533);
} else {
if((state_val_10554 === (13))){
var inst_10547 = (state_10553[(2)]);
var state_10553__$1 = state_10553;
var statearr_10558_10584 = state_10553__$1;
(statearr_10558_10584[(2)] = inst_10547);

(statearr_10558_10584[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (6))){
var inst_10538 = (state_10553[(2)]);
var state_10553__$1 = state_10553;
if(cljs.core.truth_(inst_10538)){
var statearr_10559_10585 = state_10553__$1;
(statearr_10559_10585[(1)] = (8));

} else {
var statearr_10560_10586 = state_10553__$1;
(statearr_10560_10586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (3))){
var inst_10551 = (state_10553[(2)]);
var state_10553__$1 = state_10553;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10553__$1,inst_10551);
} else {
if((state_val_10554 === (12))){
var state_10553__$1 = state_10553;
var statearr_10561_10587 = state_10553__$1;
(statearr_10561_10587[(2)] = null);

(statearr_10561_10587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (2))){
var inst_10530 = (state_10553[(7)]);
var state_10553__$1 = state_10553;
if(cljs.core.truth_(inst_10530)){
var statearr_10562_10588 = state_10553__$1;
(statearr_10562_10588[(1)] = (4));

} else {
var statearr_10563_10589 = state_10553__$1;
(statearr_10563_10589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (11))){
var inst_10544 = cljs.core.async.close_BANG_.call(null,ch);
var state_10553__$1 = state_10553;
var statearr_10564_10590 = state_10553__$1;
(statearr_10564_10590[(2)] = inst_10544);

(statearr_10564_10590[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (9))){
var state_10553__$1 = state_10553;
if(cljs.core.truth_(close_QMARK_)){
var statearr_10565_10591 = state_10553__$1;
(statearr_10565_10591[(1)] = (11));

} else {
var statearr_10566_10592 = state_10553__$1;
(statearr_10566_10592[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (5))){
var inst_10530 = (state_10553[(7)]);
var state_10553__$1 = state_10553;
var statearr_10567_10593 = state_10553__$1;
(statearr_10567_10593[(2)] = inst_10530);

(statearr_10567_10593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (10))){
var inst_10549 = (state_10553[(2)]);
var state_10553__$1 = state_10553;
var statearr_10568_10594 = state_10553__$1;
(statearr_10568_10594[(2)] = inst_10549);

(statearr_10568_10594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10554 === (8))){
var inst_10530 = (state_10553[(7)]);
var inst_10540 = cljs.core.next.call(null,inst_10530);
var inst_10530__$1 = inst_10540;
var state_10553__$1 = (function (){var statearr_10569 = state_10553;
(statearr_10569[(7)] = inst_10530__$1);

return statearr_10569;
})();
var statearr_10570_10595 = state_10553__$1;
(statearr_10570_10595[(2)] = null);

(statearr_10570_10595[(1)] = (2));


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
});})(c__9695__auto__))
;
return ((function (switch__9583__auto__,c__9695__auto__){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_10574 = [null,null,null,null,null,null,null,null];
(statearr_10574[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_10574[(1)] = (1));

return statearr_10574;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_10553){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10553);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e10575){if((e10575 instanceof Object)){
var ex__9587__auto__ = e10575;
var statearr_10576_10596 = state_10553;
(statearr_10576_10596[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10553);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10597 = state_10553;
state_10553 = G__10597;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_10553){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_10553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto__))
})();
var state__9697__auto__ = (function (){var statearr_10577 = f__9696__auto__.call(null);
(statearr_10577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto__);

return statearr_10577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto__))
);

return c__9695__auto__;
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
var x__7812__auto__ = (((_ == null))?null:_);
var m__7813__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,_);
} else {
var m__7813__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,_);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7813__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m,ch);
} else {
var m__7813__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m,ch);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m);
} else {
var m__7813__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async10823 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10823 = (function (ch,cs,meta10824){
this.ch = ch;
this.cs = cs;
this.meta10824 = meta10824;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10825,meta10824__$1){
var self__ = this;
var _10825__$1 = this;
return (new cljs.core.async.t_cljs$core$async10823(self__.ch,self__.cs,meta10824__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10825){
var self__ = this;
var _10825__$1 = this;
return self__.meta10824;
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10824","meta10824",1025214661,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10823.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10823.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10823";

cljs.core.async.t_cljs$core$async10823.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async10823");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10823 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10823(ch__$1,cs__$1,meta10824){
return (new cljs.core.async.t_cljs$core$async10823(ch__$1,cs__$1,meta10824));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10823(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__9695__auto___11048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___11048,cs,m,dchan,dctr,done){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___11048,cs,m,dchan,dctr,done){
return (function (state_10960){
var state_val_10961 = (state_10960[(1)]);
if((state_val_10961 === (7))){
var inst_10956 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_10962_11049 = state_10960__$1;
(statearr_10962_11049[(2)] = inst_10956);

(statearr_10962_11049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (20))){
var inst_10859 = (state_10960[(7)]);
var inst_10871 = cljs.core.first.call(null,inst_10859);
var inst_10872 = cljs.core.nth.call(null,inst_10871,(0),null);
var inst_10873 = cljs.core.nth.call(null,inst_10871,(1),null);
var state_10960__$1 = (function (){var statearr_10963 = state_10960;
(statearr_10963[(8)] = inst_10872);

return statearr_10963;
})();
if(cljs.core.truth_(inst_10873)){
var statearr_10964_11050 = state_10960__$1;
(statearr_10964_11050[(1)] = (22));

} else {
var statearr_10965_11051 = state_10960__$1;
(statearr_10965_11051[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (27))){
var inst_10828 = (state_10960[(9)]);
var inst_10903 = (state_10960[(10)]);
var inst_10901 = (state_10960[(11)]);
var inst_10908 = (state_10960[(12)]);
var inst_10908__$1 = cljs.core._nth.call(null,inst_10901,inst_10903);
var inst_10909 = cljs.core.async.put_BANG_.call(null,inst_10908__$1,inst_10828,done);
var state_10960__$1 = (function (){var statearr_10966 = state_10960;
(statearr_10966[(12)] = inst_10908__$1);

return statearr_10966;
})();
if(cljs.core.truth_(inst_10909)){
var statearr_10967_11052 = state_10960__$1;
(statearr_10967_11052[(1)] = (30));

} else {
var statearr_10968_11053 = state_10960__$1;
(statearr_10968_11053[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (1))){
var state_10960__$1 = state_10960;
var statearr_10969_11054 = state_10960__$1;
(statearr_10969_11054[(2)] = null);

(statearr_10969_11054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (24))){
var inst_10859 = (state_10960[(7)]);
var inst_10878 = (state_10960[(2)]);
var inst_10879 = cljs.core.next.call(null,inst_10859);
var inst_10837 = inst_10879;
var inst_10838 = null;
var inst_10839 = (0);
var inst_10840 = (0);
var state_10960__$1 = (function (){var statearr_10970 = state_10960;
(statearr_10970[(13)] = inst_10840);

(statearr_10970[(14)] = inst_10878);

(statearr_10970[(15)] = inst_10839);

(statearr_10970[(16)] = inst_10838);

(statearr_10970[(17)] = inst_10837);

return statearr_10970;
})();
var statearr_10971_11055 = state_10960__$1;
(statearr_10971_11055[(2)] = null);

(statearr_10971_11055[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (39))){
var state_10960__$1 = state_10960;
var statearr_10975_11056 = state_10960__$1;
(statearr_10975_11056[(2)] = null);

(statearr_10975_11056[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (4))){
var inst_10828 = (state_10960[(9)]);
var inst_10828__$1 = (state_10960[(2)]);
var inst_10829 = (inst_10828__$1 == null);
var state_10960__$1 = (function (){var statearr_10976 = state_10960;
(statearr_10976[(9)] = inst_10828__$1);

return statearr_10976;
})();
if(cljs.core.truth_(inst_10829)){
var statearr_10977_11057 = state_10960__$1;
(statearr_10977_11057[(1)] = (5));

} else {
var statearr_10978_11058 = state_10960__$1;
(statearr_10978_11058[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (15))){
var inst_10840 = (state_10960[(13)]);
var inst_10839 = (state_10960[(15)]);
var inst_10838 = (state_10960[(16)]);
var inst_10837 = (state_10960[(17)]);
var inst_10855 = (state_10960[(2)]);
var inst_10856 = (inst_10840 + (1));
var tmp10972 = inst_10839;
var tmp10973 = inst_10838;
var tmp10974 = inst_10837;
var inst_10837__$1 = tmp10974;
var inst_10838__$1 = tmp10973;
var inst_10839__$1 = tmp10972;
var inst_10840__$1 = inst_10856;
var state_10960__$1 = (function (){var statearr_10979 = state_10960;
(statearr_10979[(13)] = inst_10840__$1);

(statearr_10979[(18)] = inst_10855);

(statearr_10979[(15)] = inst_10839__$1);

(statearr_10979[(16)] = inst_10838__$1);

(statearr_10979[(17)] = inst_10837__$1);

return statearr_10979;
})();
var statearr_10980_11059 = state_10960__$1;
(statearr_10980_11059[(2)] = null);

(statearr_10980_11059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (21))){
var inst_10882 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_10984_11060 = state_10960__$1;
(statearr_10984_11060[(2)] = inst_10882);

(statearr_10984_11060[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (31))){
var inst_10908 = (state_10960[(12)]);
var inst_10912 = done.call(null,null);
var inst_10913 = cljs.core.async.untap_STAR_.call(null,m,inst_10908);
var state_10960__$1 = (function (){var statearr_10985 = state_10960;
(statearr_10985[(19)] = inst_10912);

return statearr_10985;
})();
var statearr_10986_11061 = state_10960__$1;
(statearr_10986_11061[(2)] = inst_10913);

(statearr_10986_11061[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (32))){
var inst_10903 = (state_10960[(10)]);
var inst_10901 = (state_10960[(11)]);
var inst_10900 = (state_10960[(20)]);
var inst_10902 = (state_10960[(21)]);
var inst_10915 = (state_10960[(2)]);
var inst_10916 = (inst_10903 + (1));
var tmp10981 = inst_10901;
var tmp10982 = inst_10900;
var tmp10983 = inst_10902;
var inst_10900__$1 = tmp10982;
var inst_10901__$1 = tmp10981;
var inst_10902__$1 = tmp10983;
var inst_10903__$1 = inst_10916;
var state_10960__$1 = (function (){var statearr_10987 = state_10960;
(statearr_10987[(10)] = inst_10903__$1);

(statearr_10987[(11)] = inst_10901__$1);

(statearr_10987[(20)] = inst_10900__$1);

(statearr_10987[(22)] = inst_10915);

(statearr_10987[(21)] = inst_10902__$1);

return statearr_10987;
})();
var statearr_10988_11062 = state_10960__$1;
(statearr_10988_11062[(2)] = null);

(statearr_10988_11062[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (40))){
var inst_10928 = (state_10960[(23)]);
var inst_10932 = done.call(null,null);
var inst_10933 = cljs.core.async.untap_STAR_.call(null,m,inst_10928);
var state_10960__$1 = (function (){var statearr_10989 = state_10960;
(statearr_10989[(24)] = inst_10932);

return statearr_10989;
})();
var statearr_10990_11063 = state_10960__$1;
(statearr_10990_11063[(2)] = inst_10933);

(statearr_10990_11063[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (33))){
var inst_10919 = (state_10960[(25)]);
var inst_10921 = cljs.core.chunked_seq_QMARK_.call(null,inst_10919);
var state_10960__$1 = state_10960;
if(inst_10921){
var statearr_10991_11064 = state_10960__$1;
(statearr_10991_11064[(1)] = (36));

} else {
var statearr_10992_11065 = state_10960__$1;
(statearr_10992_11065[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (13))){
var inst_10849 = (state_10960[(26)]);
var inst_10852 = cljs.core.async.close_BANG_.call(null,inst_10849);
var state_10960__$1 = state_10960;
var statearr_10993_11066 = state_10960__$1;
(statearr_10993_11066[(2)] = inst_10852);

(statearr_10993_11066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (22))){
var inst_10872 = (state_10960[(8)]);
var inst_10875 = cljs.core.async.close_BANG_.call(null,inst_10872);
var state_10960__$1 = state_10960;
var statearr_10994_11067 = state_10960__$1;
(statearr_10994_11067[(2)] = inst_10875);

(statearr_10994_11067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (36))){
var inst_10919 = (state_10960[(25)]);
var inst_10923 = cljs.core.chunk_first.call(null,inst_10919);
var inst_10924 = cljs.core.chunk_rest.call(null,inst_10919);
var inst_10925 = cljs.core.count.call(null,inst_10923);
var inst_10900 = inst_10924;
var inst_10901 = inst_10923;
var inst_10902 = inst_10925;
var inst_10903 = (0);
var state_10960__$1 = (function (){var statearr_10995 = state_10960;
(statearr_10995[(10)] = inst_10903);

(statearr_10995[(11)] = inst_10901);

(statearr_10995[(20)] = inst_10900);

(statearr_10995[(21)] = inst_10902);

return statearr_10995;
})();
var statearr_10996_11068 = state_10960__$1;
(statearr_10996_11068[(2)] = null);

(statearr_10996_11068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (41))){
var inst_10919 = (state_10960[(25)]);
var inst_10935 = (state_10960[(2)]);
var inst_10936 = cljs.core.next.call(null,inst_10919);
var inst_10900 = inst_10936;
var inst_10901 = null;
var inst_10902 = (0);
var inst_10903 = (0);
var state_10960__$1 = (function (){var statearr_10997 = state_10960;
(statearr_10997[(10)] = inst_10903);

(statearr_10997[(11)] = inst_10901);

(statearr_10997[(20)] = inst_10900);

(statearr_10997[(21)] = inst_10902);

(statearr_10997[(27)] = inst_10935);

return statearr_10997;
})();
var statearr_10998_11069 = state_10960__$1;
(statearr_10998_11069[(2)] = null);

(statearr_10998_11069[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (43))){
var state_10960__$1 = state_10960;
var statearr_10999_11070 = state_10960__$1;
(statearr_10999_11070[(2)] = null);

(statearr_10999_11070[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (29))){
var inst_10944 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11000_11071 = state_10960__$1;
(statearr_11000_11071[(2)] = inst_10944);

(statearr_11000_11071[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (44))){
var inst_10953 = (state_10960[(2)]);
var state_10960__$1 = (function (){var statearr_11001 = state_10960;
(statearr_11001[(28)] = inst_10953);

return statearr_11001;
})();
var statearr_11002_11072 = state_10960__$1;
(statearr_11002_11072[(2)] = null);

(statearr_11002_11072[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (6))){
var inst_10892 = (state_10960[(29)]);
var inst_10891 = cljs.core.deref.call(null,cs);
var inst_10892__$1 = cljs.core.keys.call(null,inst_10891);
var inst_10893 = cljs.core.count.call(null,inst_10892__$1);
var inst_10894 = cljs.core.reset_BANG_.call(null,dctr,inst_10893);
var inst_10899 = cljs.core.seq.call(null,inst_10892__$1);
var inst_10900 = inst_10899;
var inst_10901 = null;
var inst_10902 = (0);
var inst_10903 = (0);
var state_10960__$1 = (function (){var statearr_11003 = state_10960;
(statearr_11003[(10)] = inst_10903);

(statearr_11003[(11)] = inst_10901);

(statearr_11003[(20)] = inst_10900);

(statearr_11003[(29)] = inst_10892__$1);

(statearr_11003[(21)] = inst_10902);

(statearr_11003[(30)] = inst_10894);

return statearr_11003;
})();
var statearr_11004_11073 = state_10960__$1;
(statearr_11004_11073[(2)] = null);

(statearr_11004_11073[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (28))){
var inst_10900 = (state_10960[(20)]);
var inst_10919 = (state_10960[(25)]);
var inst_10919__$1 = cljs.core.seq.call(null,inst_10900);
var state_10960__$1 = (function (){var statearr_11005 = state_10960;
(statearr_11005[(25)] = inst_10919__$1);

return statearr_11005;
})();
if(inst_10919__$1){
var statearr_11006_11074 = state_10960__$1;
(statearr_11006_11074[(1)] = (33));

} else {
var statearr_11007_11075 = state_10960__$1;
(statearr_11007_11075[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (25))){
var inst_10903 = (state_10960[(10)]);
var inst_10902 = (state_10960[(21)]);
var inst_10905 = (inst_10903 < inst_10902);
var inst_10906 = inst_10905;
var state_10960__$1 = state_10960;
if(cljs.core.truth_(inst_10906)){
var statearr_11008_11076 = state_10960__$1;
(statearr_11008_11076[(1)] = (27));

} else {
var statearr_11009_11077 = state_10960__$1;
(statearr_11009_11077[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (34))){
var state_10960__$1 = state_10960;
var statearr_11010_11078 = state_10960__$1;
(statearr_11010_11078[(2)] = null);

(statearr_11010_11078[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (17))){
var state_10960__$1 = state_10960;
var statearr_11011_11079 = state_10960__$1;
(statearr_11011_11079[(2)] = null);

(statearr_11011_11079[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (3))){
var inst_10958 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10960__$1,inst_10958);
} else {
if((state_val_10961 === (12))){
var inst_10887 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11012_11080 = state_10960__$1;
(statearr_11012_11080[(2)] = inst_10887);

(statearr_11012_11080[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (2))){
var state_10960__$1 = state_10960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10960__$1,(4),ch);
} else {
if((state_val_10961 === (23))){
var state_10960__$1 = state_10960;
var statearr_11013_11081 = state_10960__$1;
(statearr_11013_11081[(2)] = null);

(statearr_11013_11081[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (35))){
var inst_10942 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11014_11082 = state_10960__$1;
(statearr_11014_11082[(2)] = inst_10942);

(statearr_11014_11082[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (19))){
var inst_10859 = (state_10960[(7)]);
var inst_10863 = cljs.core.chunk_first.call(null,inst_10859);
var inst_10864 = cljs.core.chunk_rest.call(null,inst_10859);
var inst_10865 = cljs.core.count.call(null,inst_10863);
var inst_10837 = inst_10864;
var inst_10838 = inst_10863;
var inst_10839 = inst_10865;
var inst_10840 = (0);
var state_10960__$1 = (function (){var statearr_11015 = state_10960;
(statearr_11015[(13)] = inst_10840);

(statearr_11015[(15)] = inst_10839);

(statearr_11015[(16)] = inst_10838);

(statearr_11015[(17)] = inst_10837);

return statearr_11015;
})();
var statearr_11016_11083 = state_10960__$1;
(statearr_11016_11083[(2)] = null);

(statearr_11016_11083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (11))){
var inst_10859 = (state_10960[(7)]);
var inst_10837 = (state_10960[(17)]);
var inst_10859__$1 = cljs.core.seq.call(null,inst_10837);
var state_10960__$1 = (function (){var statearr_11017 = state_10960;
(statearr_11017[(7)] = inst_10859__$1);

return statearr_11017;
})();
if(inst_10859__$1){
var statearr_11018_11084 = state_10960__$1;
(statearr_11018_11084[(1)] = (16));

} else {
var statearr_11019_11085 = state_10960__$1;
(statearr_11019_11085[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (9))){
var inst_10889 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11020_11086 = state_10960__$1;
(statearr_11020_11086[(2)] = inst_10889);

(statearr_11020_11086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (5))){
var inst_10835 = cljs.core.deref.call(null,cs);
var inst_10836 = cljs.core.seq.call(null,inst_10835);
var inst_10837 = inst_10836;
var inst_10838 = null;
var inst_10839 = (0);
var inst_10840 = (0);
var state_10960__$1 = (function (){var statearr_11021 = state_10960;
(statearr_11021[(13)] = inst_10840);

(statearr_11021[(15)] = inst_10839);

(statearr_11021[(16)] = inst_10838);

(statearr_11021[(17)] = inst_10837);

return statearr_11021;
})();
var statearr_11022_11087 = state_10960__$1;
(statearr_11022_11087[(2)] = null);

(statearr_11022_11087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (14))){
var state_10960__$1 = state_10960;
var statearr_11023_11088 = state_10960__$1;
(statearr_11023_11088[(2)] = null);

(statearr_11023_11088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (45))){
var inst_10950 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11024_11089 = state_10960__$1;
(statearr_11024_11089[(2)] = inst_10950);

(statearr_11024_11089[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (26))){
var inst_10892 = (state_10960[(29)]);
var inst_10946 = (state_10960[(2)]);
var inst_10947 = cljs.core.seq.call(null,inst_10892);
var state_10960__$1 = (function (){var statearr_11025 = state_10960;
(statearr_11025[(31)] = inst_10946);

return statearr_11025;
})();
if(inst_10947){
var statearr_11026_11090 = state_10960__$1;
(statearr_11026_11090[(1)] = (42));

} else {
var statearr_11027_11091 = state_10960__$1;
(statearr_11027_11091[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (16))){
var inst_10859 = (state_10960[(7)]);
var inst_10861 = cljs.core.chunked_seq_QMARK_.call(null,inst_10859);
var state_10960__$1 = state_10960;
if(inst_10861){
var statearr_11028_11092 = state_10960__$1;
(statearr_11028_11092[(1)] = (19));

} else {
var statearr_11029_11093 = state_10960__$1;
(statearr_11029_11093[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (38))){
var inst_10939 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11030_11094 = state_10960__$1;
(statearr_11030_11094[(2)] = inst_10939);

(statearr_11030_11094[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (30))){
var state_10960__$1 = state_10960;
var statearr_11031_11095 = state_10960__$1;
(statearr_11031_11095[(2)] = null);

(statearr_11031_11095[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (10))){
var inst_10840 = (state_10960[(13)]);
var inst_10838 = (state_10960[(16)]);
var inst_10848 = cljs.core._nth.call(null,inst_10838,inst_10840);
var inst_10849 = cljs.core.nth.call(null,inst_10848,(0),null);
var inst_10850 = cljs.core.nth.call(null,inst_10848,(1),null);
var state_10960__$1 = (function (){var statearr_11032 = state_10960;
(statearr_11032[(26)] = inst_10849);

return statearr_11032;
})();
if(cljs.core.truth_(inst_10850)){
var statearr_11033_11096 = state_10960__$1;
(statearr_11033_11096[(1)] = (13));

} else {
var statearr_11034_11097 = state_10960__$1;
(statearr_11034_11097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (18))){
var inst_10885 = (state_10960[(2)]);
var state_10960__$1 = state_10960;
var statearr_11035_11098 = state_10960__$1;
(statearr_11035_11098[(2)] = inst_10885);

(statearr_11035_11098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (42))){
var state_10960__$1 = state_10960;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10960__$1,(45),dchan);
} else {
if((state_val_10961 === (37))){
var inst_10828 = (state_10960[(9)]);
var inst_10928 = (state_10960[(23)]);
var inst_10919 = (state_10960[(25)]);
var inst_10928__$1 = cljs.core.first.call(null,inst_10919);
var inst_10929 = cljs.core.async.put_BANG_.call(null,inst_10928__$1,inst_10828,done);
var state_10960__$1 = (function (){var statearr_11036 = state_10960;
(statearr_11036[(23)] = inst_10928__$1);

return statearr_11036;
})();
if(cljs.core.truth_(inst_10929)){
var statearr_11037_11099 = state_10960__$1;
(statearr_11037_11099[(1)] = (39));

} else {
var statearr_11038_11100 = state_10960__$1;
(statearr_11038_11100[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10961 === (8))){
var inst_10840 = (state_10960[(13)]);
var inst_10839 = (state_10960[(15)]);
var inst_10842 = (inst_10840 < inst_10839);
var inst_10843 = inst_10842;
var state_10960__$1 = state_10960;
if(cljs.core.truth_(inst_10843)){
var statearr_11039_11101 = state_10960__$1;
(statearr_11039_11101[(1)] = (10));

} else {
var statearr_11040_11102 = state_10960__$1;
(statearr_11040_11102[(1)] = (11));

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
});})(c__9695__auto___11048,cs,m,dchan,dctr,done))
;
return ((function (switch__9583__auto__,c__9695__auto___11048,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__9584__auto__ = null;
var cljs$core$async$mult_$_state_machine__9584__auto____0 = (function (){
var statearr_11044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11044[(0)] = cljs$core$async$mult_$_state_machine__9584__auto__);

(statearr_11044[(1)] = (1));

return statearr_11044;
});
var cljs$core$async$mult_$_state_machine__9584__auto____1 = (function (state_10960){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_10960);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11045){if((e11045 instanceof Object)){
var ex__9587__auto__ = e11045;
var statearr_11046_11103 = state_10960;
(statearr_11046_11103[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10960);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11104 = state_10960;
state_10960 = G__11104;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__9584__auto__ = function(state_10960){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__9584__auto____1.call(this,state_10960);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__9584__auto____0;
cljs$core$async$mult_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__9584__auto____1;
return cljs$core$async$mult_$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___11048,cs,m,dchan,dctr,done))
})();
var state__9697__auto__ = (function (){var statearr_11047 = f__9696__auto__.call(null);
(statearr_11047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___11048);

return statearr_11047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___11048,cs,m,dchan,dctr,done))
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
var args11105 = [];
var len__8257__auto___11108 = arguments.length;
var i__8258__auto___11109 = (0);
while(true){
if((i__8258__auto___11109 < len__8257__auto___11108)){
args11105.push((arguments[i__8258__auto___11109]));

var G__11110 = (i__8258__auto___11109 + (1));
i__8258__auto___11109 = G__11110;
continue;
} else {
}
break;
}

var G__11107 = args11105.length;
switch (G__11107) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11105.length)].join('')));

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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m,ch);
} else {
var m__7813__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m,ch);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m,ch);
} else {
var m__7813__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m,ch);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m);
} else {
var m__7813__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m,state_map);
} else {
var m__7813__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m,state_map);
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
var x__7812__auto__ = (((m == null))?null:m);
var m__7813__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,m,mode);
} else {
var m__7813__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__8264__auto__ = [];
var len__8257__auto___11122 = arguments.length;
var i__8258__auto___11123 = (0);
while(true){
if((i__8258__auto___11123 < len__8257__auto___11122)){
args__8264__auto__.push((arguments[i__8258__auto___11123]));

var G__11124 = (i__8258__auto___11123 + (1));
i__8258__auto___11123 = G__11124;
continue;
} else {
}
break;
}

var argseq__8265__auto__ = ((((3) < args__8264__auto__.length))?(new cljs.core.IndexedSeq(args__8264__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8265__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__11116){
var map__11117 = p__11116;
var map__11117__$1 = ((((!((map__11117 == null)))?((((map__11117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11117):map__11117);
var opts = map__11117__$1;
var statearr_11119_11125 = state;
(statearr_11119_11125[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__11117,map__11117__$1,opts){
return (function (val){
var statearr_11120_11126 = state;
(statearr_11120_11126[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__11117,map__11117__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_11121_11127 = state;
(statearr_11121_11127[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq11112){
var G__11113 = cljs.core.first.call(null,seq11112);
var seq11112__$1 = cljs.core.next.call(null,seq11112);
var G__11114 = cljs.core.first.call(null,seq11112__$1);
var seq11112__$2 = cljs.core.next.call(null,seq11112__$1);
var G__11115 = cljs.core.first.call(null,seq11112__$2);
var seq11112__$3 = cljs.core.next.call(null,seq11112__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__11113,G__11114,G__11115,seq11112__$3);
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
if(typeof cljs.core.async.t_cljs$core$async11295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11295 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta11296){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta11296 = meta11296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11297,meta11296__$1){
var self__ = this;
var _11297__$1 = this;
return (new cljs.core.async.t_cljs$core$async11295(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta11296__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11297){
var self__ = this;
var _11297__$1 = this;
return self__.meta11296;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta11296","meta11296",1791301671,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async11295.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11295";

cljs.core.async.t_cljs$core$async11295.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async11295");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async11295 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async11295(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11296){
return (new cljs.core.async.t_cljs$core$async11295(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta11296));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async11295(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9695__auto___11462 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11399){
var state_val_11400 = (state_11399[(1)]);
if((state_val_11400 === (7))){
var inst_11314 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11401_11463 = state_11399__$1;
(statearr_11401_11463[(2)] = inst_11314);

(statearr_11401_11463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (20))){
var inst_11326 = (state_11399[(7)]);
var state_11399__$1 = state_11399;
var statearr_11402_11464 = state_11399__$1;
(statearr_11402_11464[(2)] = inst_11326);

(statearr_11402_11464[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (27))){
var state_11399__$1 = state_11399;
var statearr_11403_11465 = state_11399__$1;
(statearr_11403_11465[(2)] = null);

(statearr_11403_11465[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (1))){
var inst_11301 = (state_11399[(8)]);
var inst_11301__$1 = calc_state.call(null);
var inst_11303 = (inst_11301__$1 == null);
var inst_11304 = cljs.core.not.call(null,inst_11303);
var state_11399__$1 = (function (){var statearr_11404 = state_11399;
(statearr_11404[(8)] = inst_11301__$1);

return statearr_11404;
})();
if(inst_11304){
var statearr_11405_11466 = state_11399__$1;
(statearr_11405_11466[(1)] = (2));

} else {
var statearr_11406_11467 = state_11399__$1;
(statearr_11406_11467[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (24))){
var inst_11359 = (state_11399[(9)]);
var inst_11373 = (state_11399[(10)]);
var inst_11350 = (state_11399[(11)]);
var inst_11373__$1 = inst_11350.call(null,inst_11359);
var state_11399__$1 = (function (){var statearr_11407 = state_11399;
(statearr_11407[(10)] = inst_11373__$1);

return statearr_11407;
})();
if(cljs.core.truth_(inst_11373__$1)){
var statearr_11408_11468 = state_11399__$1;
(statearr_11408_11468[(1)] = (29));

} else {
var statearr_11409_11469 = state_11399__$1;
(statearr_11409_11469[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (4))){
var inst_11317 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11317)){
var statearr_11410_11470 = state_11399__$1;
(statearr_11410_11470[(1)] = (8));

} else {
var statearr_11411_11471 = state_11399__$1;
(statearr_11411_11471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (15))){
var inst_11344 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11344)){
var statearr_11412_11472 = state_11399__$1;
(statearr_11412_11472[(1)] = (19));

} else {
var statearr_11413_11473 = state_11399__$1;
(statearr_11413_11473[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (21))){
var inst_11349 = (state_11399[(12)]);
var inst_11349__$1 = (state_11399[(2)]);
var inst_11350 = cljs.core.get.call(null,inst_11349__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11351 = cljs.core.get.call(null,inst_11349__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11352 = cljs.core.get.call(null,inst_11349__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_11399__$1 = (function (){var statearr_11414 = state_11399;
(statearr_11414[(12)] = inst_11349__$1);

(statearr_11414[(13)] = inst_11351);

(statearr_11414[(11)] = inst_11350);

return statearr_11414;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_11399__$1,(22),inst_11352);
} else {
if((state_val_11400 === (31))){
var inst_11381 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11381)){
var statearr_11415_11474 = state_11399__$1;
(statearr_11415_11474[(1)] = (32));

} else {
var statearr_11416_11475 = state_11399__$1;
(statearr_11416_11475[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (32))){
var inst_11358 = (state_11399[(14)]);
var state_11399__$1 = state_11399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11399__$1,(35),out,inst_11358);
} else {
if((state_val_11400 === (33))){
var inst_11349 = (state_11399[(12)]);
var inst_11326 = inst_11349;
var state_11399__$1 = (function (){var statearr_11417 = state_11399;
(statearr_11417[(7)] = inst_11326);

return statearr_11417;
})();
var statearr_11418_11476 = state_11399__$1;
(statearr_11418_11476[(2)] = null);

(statearr_11418_11476[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (13))){
var inst_11326 = (state_11399[(7)]);
var inst_11333 = inst_11326.cljs$lang$protocol_mask$partition0$;
var inst_11334 = (inst_11333 & (64));
var inst_11335 = inst_11326.cljs$core$ISeq$;
var inst_11336 = (cljs.core.PROTOCOL_SENTINEL === inst_11335);
var inst_11337 = (inst_11334) || (inst_11336);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11337)){
var statearr_11419_11477 = state_11399__$1;
(statearr_11419_11477[(1)] = (16));

} else {
var statearr_11420_11478 = state_11399__$1;
(statearr_11420_11478[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (22))){
var inst_11359 = (state_11399[(9)]);
var inst_11358 = (state_11399[(14)]);
var inst_11357 = (state_11399[(2)]);
var inst_11358__$1 = cljs.core.nth.call(null,inst_11357,(0),null);
var inst_11359__$1 = cljs.core.nth.call(null,inst_11357,(1),null);
var inst_11360 = (inst_11358__$1 == null);
var inst_11361 = cljs.core._EQ_.call(null,inst_11359__$1,change);
var inst_11362 = (inst_11360) || (inst_11361);
var state_11399__$1 = (function (){var statearr_11421 = state_11399;
(statearr_11421[(9)] = inst_11359__$1);

(statearr_11421[(14)] = inst_11358__$1);

return statearr_11421;
})();
if(cljs.core.truth_(inst_11362)){
var statearr_11422_11479 = state_11399__$1;
(statearr_11422_11479[(1)] = (23));

} else {
var statearr_11423_11480 = state_11399__$1;
(statearr_11423_11480[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (36))){
var inst_11349 = (state_11399[(12)]);
var inst_11326 = inst_11349;
var state_11399__$1 = (function (){var statearr_11424 = state_11399;
(statearr_11424[(7)] = inst_11326);

return statearr_11424;
})();
var statearr_11425_11481 = state_11399__$1;
(statearr_11425_11481[(2)] = null);

(statearr_11425_11481[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (29))){
var inst_11373 = (state_11399[(10)]);
var state_11399__$1 = state_11399;
var statearr_11426_11482 = state_11399__$1;
(statearr_11426_11482[(2)] = inst_11373);

(statearr_11426_11482[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (6))){
var state_11399__$1 = state_11399;
var statearr_11427_11483 = state_11399__$1;
(statearr_11427_11483[(2)] = false);

(statearr_11427_11483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (28))){
var inst_11369 = (state_11399[(2)]);
var inst_11370 = calc_state.call(null);
var inst_11326 = inst_11370;
var state_11399__$1 = (function (){var statearr_11428 = state_11399;
(statearr_11428[(7)] = inst_11326);

(statearr_11428[(15)] = inst_11369);

return statearr_11428;
})();
var statearr_11429_11484 = state_11399__$1;
(statearr_11429_11484[(2)] = null);

(statearr_11429_11484[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (25))){
var inst_11395 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11430_11485 = state_11399__$1;
(statearr_11430_11485[(2)] = inst_11395);

(statearr_11430_11485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (34))){
var inst_11393 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11431_11486 = state_11399__$1;
(statearr_11431_11486[(2)] = inst_11393);

(statearr_11431_11486[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (17))){
var state_11399__$1 = state_11399;
var statearr_11432_11487 = state_11399__$1;
(statearr_11432_11487[(2)] = false);

(statearr_11432_11487[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (3))){
var state_11399__$1 = state_11399;
var statearr_11433_11488 = state_11399__$1;
(statearr_11433_11488[(2)] = false);

(statearr_11433_11488[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (12))){
var inst_11397 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11399__$1,inst_11397);
} else {
if((state_val_11400 === (2))){
var inst_11301 = (state_11399[(8)]);
var inst_11306 = inst_11301.cljs$lang$protocol_mask$partition0$;
var inst_11307 = (inst_11306 & (64));
var inst_11308 = inst_11301.cljs$core$ISeq$;
var inst_11309 = (cljs.core.PROTOCOL_SENTINEL === inst_11308);
var inst_11310 = (inst_11307) || (inst_11309);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11310)){
var statearr_11434_11489 = state_11399__$1;
(statearr_11434_11489[(1)] = (5));

} else {
var statearr_11435_11490 = state_11399__$1;
(statearr_11435_11490[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (23))){
var inst_11358 = (state_11399[(14)]);
var inst_11364 = (inst_11358 == null);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11364)){
var statearr_11436_11491 = state_11399__$1;
(statearr_11436_11491[(1)] = (26));

} else {
var statearr_11437_11492 = state_11399__$1;
(statearr_11437_11492[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (35))){
var inst_11384 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
if(cljs.core.truth_(inst_11384)){
var statearr_11438_11493 = state_11399__$1;
(statearr_11438_11493[(1)] = (36));

} else {
var statearr_11439_11494 = state_11399__$1;
(statearr_11439_11494[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (19))){
var inst_11326 = (state_11399[(7)]);
var inst_11346 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11326);
var state_11399__$1 = state_11399;
var statearr_11440_11495 = state_11399__$1;
(statearr_11440_11495[(2)] = inst_11346);

(statearr_11440_11495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (11))){
var inst_11326 = (state_11399[(7)]);
var inst_11330 = (inst_11326 == null);
var inst_11331 = cljs.core.not.call(null,inst_11330);
var state_11399__$1 = state_11399;
if(inst_11331){
var statearr_11441_11496 = state_11399__$1;
(statearr_11441_11496[(1)] = (13));

} else {
var statearr_11442_11497 = state_11399__$1;
(statearr_11442_11497[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (9))){
var inst_11301 = (state_11399[(8)]);
var state_11399__$1 = state_11399;
var statearr_11443_11498 = state_11399__$1;
(statearr_11443_11498[(2)] = inst_11301);

(statearr_11443_11498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (5))){
var state_11399__$1 = state_11399;
var statearr_11444_11499 = state_11399__$1;
(statearr_11444_11499[(2)] = true);

(statearr_11444_11499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (14))){
var state_11399__$1 = state_11399;
var statearr_11445_11500 = state_11399__$1;
(statearr_11445_11500[(2)] = false);

(statearr_11445_11500[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (26))){
var inst_11359 = (state_11399[(9)]);
var inst_11366 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11359);
var state_11399__$1 = state_11399;
var statearr_11446_11501 = state_11399__$1;
(statearr_11446_11501[(2)] = inst_11366);

(statearr_11446_11501[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (16))){
var state_11399__$1 = state_11399;
var statearr_11447_11502 = state_11399__$1;
(statearr_11447_11502[(2)] = true);

(statearr_11447_11502[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (38))){
var inst_11389 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11448_11503 = state_11399__$1;
(statearr_11448_11503[(2)] = inst_11389);

(statearr_11448_11503[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (30))){
var inst_11359 = (state_11399[(9)]);
var inst_11351 = (state_11399[(13)]);
var inst_11350 = (state_11399[(11)]);
var inst_11376 = cljs.core.empty_QMARK_.call(null,inst_11350);
var inst_11377 = inst_11351.call(null,inst_11359);
var inst_11378 = cljs.core.not.call(null,inst_11377);
var inst_11379 = (inst_11376) && (inst_11378);
var state_11399__$1 = state_11399;
var statearr_11449_11504 = state_11399__$1;
(statearr_11449_11504[(2)] = inst_11379);

(statearr_11449_11504[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (10))){
var inst_11301 = (state_11399[(8)]);
var inst_11322 = (state_11399[(2)]);
var inst_11323 = cljs.core.get.call(null,inst_11322,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_11324 = cljs.core.get.call(null,inst_11322,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_11325 = cljs.core.get.call(null,inst_11322,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_11326 = inst_11301;
var state_11399__$1 = (function (){var statearr_11450 = state_11399;
(statearr_11450[(16)] = inst_11323);

(statearr_11450[(7)] = inst_11326);

(statearr_11450[(17)] = inst_11325);

(statearr_11450[(18)] = inst_11324);

return statearr_11450;
})();
var statearr_11451_11505 = state_11399__$1;
(statearr_11451_11505[(2)] = null);

(statearr_11451_11505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (18))){
var inst_11341 = (state_11399[(2)]);
var state_11399__$1 = state_11399;
var statearr_11452_11506 = state_11399__$1;
(statearr_11452_11506[(2)] = inst_11341);

(statearr_11452_11506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (37))){
var state_11399__$1 = state_11399;
var statearr_11453_11507 = state_11399__$1;
(statearr_11453_11507[(2)] = null);

(statearr_11453_11507[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11400 === (8))){
var inst_11301 = (state_11399[(8)]);
var inst_11319 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11301);
var state_11399__$1 = state_11399;
var statearr_11454_11508 = state_11399__$1;
(statearr_11454_11508[(2)] = inst_11319);

(statearr_11454_11508[(1)] = (10));


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
});})(c__9695__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__9583__auto__,c__9695__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__9584__auto__ = null;
var cljs$core$async$mix_$_state_machine__9584__auto____0 = (function (){
var statearr_11458 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11458[(0)] = cljs$core$async$mix_$_state_machine__9584__auto__);

(statearr_11458[(1)] = (1));

return statearr_11458;
});
var cljs$core$async$mix_$_state_machine__9584__auto____1 = (function (state_11399){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_11399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11459){if((e11459 instanceof Object)){
var ex__9587__auto__ = e11459;
var statearr_11460_11509 = state_11399;
(statearr_11460_11509[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11459;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11510 = state_11399;
state_11399 = G__11510;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__9584__auto__ = function(state_11399){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__9584__auto____1.call(this,state_11399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__9584__auto____0;
cljs$core$async$mix_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__9584__auto____1;
return cljs$core$async$mix_$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__9697__auto__ = (function (){var statearr_11461 = f__9696__auto__.call(null);
(statearr_11461[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___11462);

return statearr_11461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___11462,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__7812__auto__ = (((p == null))?null:p);
var m__7813__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7813__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__7812__auto__ = (((p == null))?null:p);
var m__7813__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,p,v,ch);
} else {
var m__7813__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args11511 = [];
var len__8257__auto___11514 = arguments.length;
var i__8258__auto___11515 = (0);
while(true){
if((i__8258__auto___11515 < len__8257__auto___11514)){
args11511.push((arguments[i__8258__auto___11515]));

var G__11516 = (i__8258__auto___11515 + (1));
i__8258__auto___11515 = G__11516;
continue;
} else {
}
break;
}

var G__11513 = args11511.length;
switch (G__11513) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11511.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7812__auto__ = (((p == null))?null:p);
var m__7813__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,p);
} else {
var m__7813__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,p);
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
var x__7812__auto__ = (((p == null))?null:p);
var m__7813__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,p,v);
} else {
var m__7813__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,p,v);
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
var args11519 = [];
var len__8257__auto___11644 = arguments.length;
var i__8258__auto___11645 = (0);
while(true){
if((i__8258__auto___11645 < len__8257__auto___11644)){
args11519.push((arguments[i__8258__auto___11645]));

var G__11646 = (i__8258__auto___11645 + (1));
i__8258__auto___11645 = G__11646;
continue;
} else {
}
break;
}

var G__11521 = args11519.length;
switch (G__11521) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11519.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__7144__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__7144__auto__,mults){
return (function (p1__11518_SHARP_){
if(cljs.core.truth_(p1__11518_SHARP_.call(null,topic))){
return p1__11518_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__11518_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__7144__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async11522 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11522 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta11523){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta11523 = meta11523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11524,meta11523__$1){
var self__ = this;
var _11524__$1 = this;
return (new cljs.core.async.t_cljs$core$async11522(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta11523__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11524){
var self__ = this;
var _11524__$1 = this;
return self__.meta11523;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta11523","meta11523",1815277938,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async11522.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11522";

cljs.core.async.t_cljs$core$async11522.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async11522");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async11522 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async11522(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11523){
return (new cljs.core.async.t_cljs$core$async11522(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta11523));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async11522(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__9695__auto___11648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___11648,mults,ensure_mult,p){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___11648,mults,ensure_mult,p){
return (function (state_11596){
var state_val_11597 = (state_11596[(1)]);
if((state_val_11597 === (7))){
var inst_11592 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
var statearr_11598_11649 = state_11596__$1;
(statearr_11598_11649[(2)] = inst_11592);

(statearr_11598_11649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (20))){
var state_11596__$1 = state_11596;
var statearr_11599_11650 = state_11596__$1;
(statearr_11599_11650[(2)] = null);

(statearr_11599_11650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (1))){
var state_11596__$1 = state_11596;
var statearr_11600_11651 = state_11596__$1;
(statearr_11600_11651[(2)] = null);

(statearr_11600_11651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (24))){
var inst_11575 = (state_11596[(7)]);
var inst_11584 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11575);
var state_11596__$1 = state_11596;
var statearr_11601_11652 = state_11596__$1;
(statearr_11601_11652[(2)] = inst_11584);

(statearr_11601_11652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (4))){
var inst_11527 = (state_11596[(8)]);
var inst_11527__$1 = (state_11596[(2)]);
var inst_11528 = (inst_11527__$1 == null);
var state_11596__$1 = (function (){var statearr_11602 = state_11596;
(statearr_11602[(8)] = inst_11527__$1);

return statearr_11602;
})();
if(cljs.core.truth_(inst_11528)){
var statearr_11603_11653 = state_11596__$1;
(statearr_11603_11653[(1)] = (5));

} else {
var statearr_11604_11654 = state_11596__$1;
(statearr_11604_11654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (15))){
var inst_11569 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
var statearr_11605_11655 = state_11596__$1;
(statearr_11605_11655[(2)] = inst_11569);

(statearr_11605_11655[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (21))){
var inst_11589 = (state_11596[(2)]);
var state_11596__$1 = (function (){var statearr_11606 = state_11596;
(statearr_11606[(9)] = inst_11589);

return statearr_11606;
})();
var statearr_11607_11656 = state_11596__$1;
(statearr_11607_11656[(2)] = null);

(statearr_11607_11656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (13))){
var inst_11551 = (state_11596[(10)]);
var inst_11553 = cljs.core.chunked_seq_QMARK_.call(null,inst_11551);
var state_11596__$1 = state_11596;
if(inst_11553){
var statearr_11608_11657 = state_11596__$1;
(statearr_11608_11657[(1)] = (16));

} else {
var statearr_11609_11658 = state_11596__$1;
(statearr_11609_11658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (22))){
var inst_11581 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
if(cljs.core.truth_(inst_11581)){
var statearr_11610_11659 = state_11596__$1;
(statearr_11610_11659[(1)] = (23));

} else {
var statearr_11611_11660 = state_11596__$1;
(statearr_11611_11660[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (6))){
var inst_11527 = (state_11596[(8)]);
var inst_11577 = (state_11596[(11)]);
var inst_11575 = (state_11596[(7)]);
var inst_11575__$1 = topic_fn.call(null,inst_11527);
var inst_11576 = cljs.core.deref.call(null,mults);
var inst_11577__$1 = cljs.core.get.call(null,inst_11576,inst_11575__$1);
var state_11596__$1 = (function (){var statearr_11612 = state_11596;
(statearr_11612[(11)] = inst_11577__$1);

(statearr_11612[(7)] = inst_11575__$1);

return statearr_11612;
})();
if(cljs.core.truth_(inst_11577__$1)){
var statearr_11613_11661 = state_11596__$1;
(statearr_11613_11661[(1)] = (19));

} else {
var statearr_11614_11662 = state_11596__$1;
(statearr_11614_11662[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (25))){
var inst_11586 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
var statearr_11615_11663 = state_11596__$1;
(statearr_11615_11663[(2)] = inst_11586);

(statearr_11615_11663[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (17))){
var inst_11551 = (state_11596[(10)]);
var inst_11560 = cljs.core.first.call(null,inst_11551);
var inst_11561 = cljs.core.async.muxch_STAR_.call(null,inst_11560);
var inst_11562 = cljs.core.async.close_BANG_.call(null,inst_11561);
var inst_11563 = cljs.core.next.call(null,inst_11551);
var inst_11537 = inst_11563;
var inst_11538 = null;
var inst_11539 = (0);
var inst_11540 = (0);
var state_11596__$1 = (function (){var statearr_11616 = state_11596;
(statearr_11616[(12)] = inst_11538);

(statearr_11616[(13)] = inst_11540);

(statearr_11616[(14)] = inst_11539);

(statearr_11616[(15)] = inst_11562);

(statearr_11616[(16)] = inst_11537);

return statearr_11616;
})();
var statearr_11617_11664 = state_11596__$1;
(statearr_11617_11664[(2)] = null);

(statearr_11617_11664[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (3))){
var inst_11594 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11596__$1,inst_11594);
} else {
if((state_val_11597 === (12))){
var inst_11571 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
var statearr_11618_11665 = state_11596__$1;
(statearr_11618_11665[(2)] = inst_11571);

(statearr_11618_11665[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (2))){
var state_11596__$1 = state_11596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11596__$1,(4),ch);
} else {
if((state_val_11597 === (23))){
var state_11596__$1 = state_11596;
var statearr_11619_11666 = state_11596__$1;
(statearr_11619_11666[(2)] = null);

(statearr_11619_11666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (19))){
var inst_11527 = (state_11596[(8)]);
var inst_11577 = (state_11596[(11)]);
var inst_11579 = cljs.core.async.muxch_STAR_.call(null,inst_11577);
var state_11596__$1 = state_11596;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11596__$1,(22),inst_11579,inst_11527);
} else {
if((state_val_11597 === (11))){
var inst_11551 = (state_11596[(10)]);
var inst_11537 = (state_11596[(16)]);
var inst_11551__$1 = cljs.core.seq.call(null,inst_11537);
var state_11596__$1 = (function (){var statearr_11620 = state_11596;
(statearr_11620[(10)] = inst_11551__$1);

return statearr_11620;
})();
if(inst_11551__$1){
var statearr_11621_11667 = state_11596__$1;
(statearr_11621_11667[(1)] = (13));

} else {
var statearr_11622_11668 = state_11596__$1;
(statearr_11622_11668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (9))){
var inst_11573 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
var statearr_11623_11669 = state_11596__$1;
(statearr_11623_11669[(2)] = inst_11573);

(statearr_11623_11669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (5))){
var inst_11534 = cljs.core.deref.call(null,mults);
var inst_11535 = cljs.core.vals.call(null,inst_11534);
var inst_11536 = cljs.core.seq.call(null,inst_11535);
var inst_11537 = inst_11536;
var inst_11538 = null;
var inst_11539 = (0);
var inst_11540 = (0);
var state_11596__$1 = (function (){var statearr_11624 = state_11596;
(statearr_11624[(12)] = inst_11538);

(statearr_11624[(13)] = inst_11540);

(statearr_11624[(14)] = inst_11539);

(statearr_11624[(16)] = inst_11537);

return statearr_11624;
})();
var statearr_11625_11670 = state_11596__$1;
(statearr_11625_11670[(2)] = null);

(statearr_11625_11670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (14))){
var state_11596__$1 = state_11596;
var statearr_11629_11671 = state_11596__$1;
(statearr_11629_11671[(2)] = null);

(statearr_11629_11671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (16))){
var inst_11551 = (state_11596[(10)]);
var inst_11555 = cljs.core.chunk_first.call(null,inst_11551);
var inst_11556 = cljs.core.chunk_rest.call(null,inst_11551);
var inst_11557 = cljs.core.count.call(null,inst_11555);
var inst_11537 = inst_11556;
var inst_11538 = inst_11555;
var inst_11539 = inst_11557;
var inst_11540 = (0);
var state_11596__$1 = (function (){var statearr_11630 = state_11596;
(statearr_11630[(12)] = inst_11538);

(statearr_11630[(13)] = inst_11540);

(statearr_11630[(14)] = inst_11539);

(statearr_11630[(16)] = inst_11537);

return statearr_11630;
})();
var statearr_11631_11672 = state_11596__$1;
(statearr_11631_11672[(2)] = null);

(statearr_11631_11672[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (10))){
var inst_11538 = (state_11596[(12)]);
var inst_11540 = (state_11596[(13)]);
var inst_11539 = (state_11596[(14)]);
var inst_11537 = (state_11596[(16)]);
var inst_11545 = cljs.core._nth.call(null,inst_11538,inst_11540);
var inst_11546 = cljs.core.async.muxch_STAR_.call(null,inst_11545);
var inst_11547 = cljs.core.async.close_BANG_.call(null,inst_11546);
var inst_11548 = (inst_11540 + (1));
var tmp11626 = inst_11538;
var tmp11627 = inst_11539;
var tmp11628 = inst_11537;
var inst_11537__$1 = tmp11628;
var inst_11538__$1 = tmp11626;
var inst_11539__$1 = tmp11627;
var inst_11540__$1 = inst_11548;
var state_11596__$1 = (function (){var statearr_11632 = state_11596;
(statearr_11632[(12)] = inst_11538__$1);

(statearr_11632[(13)] = inst_11540__$1);

(statearr_11632[(17)] = inst_11547);

(statearr_11632[(14)] = inst_11539__$1);

(statearr_11632[(16)] = inst_11537__$1);

return statearr_11632;
})();
var statearr_11633_11673 = state_11596__$1;
(statearr_11633_11673[(2)] = null);

(statearr_11633_11673[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (18))){
var inst_11566 = (state_11596[(2)]);
var state_11596__$1 = state_11596;
var statearr_11634_11674 = state_11596__$1;
(statearr_11634_11674[(2)] = inst_11566);

(statearr_11634_11674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11597 === (8))){
var inst_11540 = (state_11596[(13)]);
var inst_11539 = (state_11596[(14)]);
var inst_11542 = (inst_11540 < inst_11539);
var inst_11543 = inst_11542;
var state_11596__$1 = state_11596;
if(cljs.core.truth_(inst_11543)){
var statearr_11635_11675 = state_11596__$1;
(statearr_11635_11675[(1)] = (10));

} else {
var statearr_11636_11676 = state_11596__$1;
(statearr_11636_11676[(1)] = (11));

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
});})(c__9695__auto___11648,mults,ensure_mult,p))
;
return ((function (switch__9583__auto__,c__9695__auto___11648,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_11640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11640[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_11640[(1)] = (1));

return statearr_11640;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_11596){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_11596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11641){if((e11641 instanceof Object)){
var ex__9587__auto__ = e11641;
var statearr_11642_11677 = state_11596;
(statearr_11642_11677[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11678 = state_11596;
state_11596 = G__11678;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_11596){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_11596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___11648,mults,ensure_mult,p))
})();
var state__9697__auto__ = (function (){var statearr_11643 = f__9696__auto__.call(null);
(statearr_11643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___11648);

return statearr_11643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___11648,mults,ensure_mult,p))
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
var args11679 = [];
var len__8257__auto___11682 = arguments.length;
var i__8258__auto___11683 = (0);
while(true){
if((i__8258__auto___11683 < len__8257__auto___11682)){
args11679.push((arguments[i__8258__auto___11683]));

var G__11684 = (i__8258__auto___11683 + (1));
i__8258__auto___11683 = G__11684;
continue;
} else {
}
break;
}

var G__11681 = args11679.length;
switch (G__11681) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11679.length)].join('')));

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
var args11686 = [];
var len__8257__auto___11689 = arguments.length;
var i__8258__auto___11690 = (0);
while(true){
if((i__8258__auto___11690 < len__8257__auto___11689)){
args11686.push((arguments[i__8258__auto___11690]));

var G__11691 = (i__8258__auto___11690 + (1));
i__8258__auto___11690 = G__11691;
continue;
} else {
}
break;
}

var G__11688 = args11686.length;
switch (G__11688) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11686.length)].join('')));

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
var args11693 = [];
var len__8257__auto___11764 = arguments.length;
var i__8258__auto___11765 = (0);
while(true){
if((i__8258__auto___11765 < len__8257__auto___11764)){
args11693.push((arguments[i__8258__auto___11765]));

var G__11766 = (i__8258__auto___11765 + (1));
i__8258__auto___11765 = G__11766;
continue;
} else {
}
break;
}

var G__11695 = args11693.length;
switch (G__11695) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11693.length)].join('')));

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
var c__9695__auto___11768 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___11768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___11768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11734){
var state_val_11735 = (state_11734[(1)]);
if((state_val_11735 === (7))){
var state_11734__$1 = state_11734;
var statearr_11736_11769 = state_11734__$1;
(statearr_11736_11769[(2)] = null);

(statearr_11736_11769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (1))){
var state_11734__$1 = state_11734;
var statearr_11737_11770 = state_11734__$1;
(statearr_11737_11770[(2)] = null);

(statearr_11737_11770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (4))){
var inst_11698 = (state_11734[(7)]);
var inst_11700 = (inst_11698 < cnt);
var state_11734__$1 = state_11734;
if(cljs.core.truth_(inst_11700)){
var statearr_11738_11771 = state_11734__$1;
(statearr_11738_11771[(1)] = (6));

} else {
var statearr_11739_11772 = state_11734__$1;
(statearr_11739_11772[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (15))){
var inst_11730 = (state_11734[(2)]);
var state_11734__$1 = state_11734;
var statearr_11740_11773 = state_11734__$1;
(statearr_11740_11773[(2)] = inst_11730);

(statearr_11740_11773[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (13))){
var inst_11723 = cljs.core.async.close_BANG_.call(null,out);
var state_11734__$1 = state_11734;
var statearr_11741_11774 = state_11734__$1;
(statearr_11741_11774[(2)] = inst_11723);

(statearr_11741_11774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (6))){
var state_11734__$1 = state_11734;
var statearr_11742_11775 = state_11734__$1;
(statearr_11742_11775[(2)] = null);

(statearr_11742_11775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (3))){
var inst_11732 = (state_11734[(2)]);
var state_11734__$1 = state_11734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11734__$1,inst_11732);
} else {
if((state_val_11735 === (12))){
var inst_11720 = (state_11734[(8)]);
var inst_11720__$1 = (state_11734[(2)]);
var inst_11721 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11720__$1);
var state_11734__$1 = (function (){var statearr_11743 = state_11734;
(statearr_11743[(8)] = inst_11720__$1);

return statearr_11743;
})();
if(cljs.core.truth_(inst_11721)){
var statearr_11744_11776 = state_11734__$1;
(statearr_11744_11776[(1)] = (13));

} else {
var statearr_11745_11777 = state_11734__$1;
(statearr_11745_11777[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (2))){
var inst_11697 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_11698 = (0);
var state_11734__$1 = (function (){var statearr_11746 = state_11734;
(statearr_11746[(7)] = inst_11698);

(statearr_11746[(9)] = inst_11697);

return statearr_11746;
})();
var statearr_11747_11778 = state_11734__$1;
(statearr_11747_11778[(2)] = null);

(statearr_11747_11778[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (11))){
var inst_11698 = (state_11734[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11734,(10),Object,null,(9));
var inst_11707 = chs__$1.call(null,inst_11698);
var inst_11708 = done.call(null,inst_11698);
var inst_11709 = cljs.core.async.take_BANG_.call(null,inst_11707,inst_11708);
var state_11734__$1 = state_11734;
var statearr_11748_11779 = state_11734__$1;
(statearr_11748_11779[(2)] = inst_11709);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11734__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (9))){
var inst_11698 = (state_11734[(7)]);
var inst_11711 = (state_11734[(2)]);
var inst_11712 = (inst_11698 + (1));
var inst_11698__$1 = inst_11712;
var state_11734__$1 = (function (){var statearr_11749 = state_11734;
(statearr_11749[(7)] = inst_11698__$1);

(statearr_11749[(10)] = inst_11711);

return statearr_11749;
})();
var statearr_11750_11780 = state_11734__$1;
(statearr_11750_11780[(2)] = null);

(statearr_11750_11780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (5))){
var inst_11718 = (state_11734[(2)]);
var state_11734__$1 = (function (){var statearr_11751 = state_11734;
(statearr_11751[(11)] = inst_11718);

return statearr_11751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11734__$1,(12),dchan);
} else {
if((state_val_11735 === (14))){
var inst_11720 = (state_11734[(8)]);
var inst_11725 = cljs.core.apply.call(null,f,inst_11720);
var state_11734__$1 = state_11734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11734__$1,(16),out,inst_11725);
} else {
if((state_val_11735 === (16))){
var inst_11727 = (state_11734[(2)]);
var state_11734__$1 = (function (){var statearr_11752 = state_11734;
(statearr_11752[(12)] = inst_11727);

return statearr_11752;
})();
var statearr_11753_11781 = state_11734__$1;
(statearr_11753_11781[(2)] = null);

(statearr_11753_11781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (10))){
var inst_11702 = (state_11734[(2)]);
var inst_11703 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_11734__$1 = (function (){var statearr_11754 = state_11734;
(statearr_11754[(13)] = inst_11702);

return statearr_11754;
})();
var statearr_11755_11782 = state_11734__$1;
(statearr_11755_11782[(2)] = inst_11703);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11734__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11735 === (8))){
var inst_11716 = (state_11734[(2)]);
var state_11734__$1 = state_11734;
var statearr_11756_11783 = state_11734__$1;
(statearr_11756_11783[(2)] = inst_11716);

(statearr_11756_11783[(1)] = (5));


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
});})(c__9695__auto___11768,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__9583__auto__,c__9695__auto___11768,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_11760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11760[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_11760[(1)] = (1));

return statearr_11760;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_11734){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_11734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11761){if((e11761 instanceof Object)){
var ex__9587__auto__ = e11761;
var statearr_11762_11784 = state_11734;
(statearr_11762_11784[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11761;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11785 = state_11734;
state_11734 = G__11785;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_11734){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_11734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___11768,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__9697__auto__ = (function (){var statearr_11763 = f__9696__auto__.call(null);
(statearr_11763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___11768);

return statearr_11763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___11768,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args11787 = [];
var len__8257__auto___11845 = arguments.length;
var i__8258__auto___11846 = (0);
while(true){
if((i__8258__auto___11846 < len__8257__auto___11845)){
args11787.push((arguments[i__8258__auto___11846]));

var G__11847 = (i__8258__auto___11846 + (1));
i__8258__auto___11846 = G__11847;
continue;
} else {
}
break;
}

var G__11789 = args11787.length;
switch (G__11789) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11787.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9695__auto___11849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___11849,out){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___11849,out){
return (function (state_11821){
var state_val_11822 = (state_11821[(1)]);
if((state_val_11822 === (7))){
var inst_11801 = (state_11821[(7)]);
var inst_11800 = (state_11821[(8)]);
var inst_11800__$1 = (state_11821[(2)]);
var inst_11801__$1 = cljs.core.nth.call(null,inst_11800__$1,(0),null);
var inst_11802 = cljs.core.nth.call(null,inst_11800__$1,(1),null);
var inst_11803 = (inst_11801__$1 == null);
var state_11821__$1 = (function (){var statearr_11823 = state_11821;
(statearr_11823[(7)] = inst_11801__$1);

(statearr_11823[(9)] = inst_11802);

(statearr_11823[(8)] = inst_11800__$1);

return statearr_11823;
})();
if(cljs.core.truth_(inst_11803)){
var statearr_11824_11850 = state_11821__$1;
(statearr_11824_11850[(1)] = (8));

} else {
var statearr_11825_11851 = state_11821__$1;
(statearr_11825_11851[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (1))){
var inst_11790 = cljs.core.vec.call(null,chs);
var inst_11791 = inst_11790;
var state_11821__$1 = (function (){var statearr_11826 = state_11821;
(statearr_11826[(10)] = inst_11791);

return statearr_11826;
})();
var statearr_11827_11852 = state_11821__$1;
(statearr_11827_11852[(2)] = null);

(statearr_11827_11852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (4))){
var inst_11791 = (state_11821[(10)]);
var state_11821__$1 = state_11821;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11821__$1,(7),inst_11791);
} else {
if((state_val_11822 === (6))){
var inst_11817 = (state_11821[(2)]);
var state_11821__$1 = state_11821;
var statearr_11828_11853 = state_11821__$1;
(statearr_11828_11853[(2)] = inst_11817);

(statearr_11828_11853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (3))){
var inst_11819 = (state_11821[(2)]);
var state_11821__$1 = state_11821;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11821__$1,inst_11819);
} else {
if((state_val_11822 === (2))){
var inst_11791 = (state_11821[(10)]);
var inst_11793 = cljs.core.count.call(null,inst_11791);
var inst_11794 = (inst_11793 > (0));
var state_11821__$1 = state_11821;
if(cljs.core.truth_(inst_11794)){
var statearr_11830_11854 = state_11821__$1;
(statearr_11830_11854[(1)] = (4));

} else {
var statearr_11831_11855 = state_11821__$1;
(statearr_11831_11855[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (11))){
var inst_11791 = (state_11821[(10)]);
var inst_11810 = (state_11821[(2)]);
var tmp11829 = inst_11791;
var inst_11791__$1 = tmp11829;
var state_11821__$1 = (function (){var statearr_11832 = state_11821;
(statearr_11832[(10)] = inst_11791__$1);

(statearr_11832[(11)] = inst_11810);

return statearr_11832;
})();
var statearr_11833_11856 = state_11821__$1;
(statearr_11833_11856[(2)] = null);

(statearr_11833_11856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (9))){
var inst_11801 = (state_11821[(7)]);
var state_11821__$1 = state_11821;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11821__$1,(11),out,inst_11801);
} else {
if((state_val_11822 === (5))){
var inst_11815 = cljs.core.async.close_BANG_.call(null,out);
var state_11821__$1 = state_11821;
var statearr_11834_11857 = state_11821__$1;
(statearr_11834_11857[(2)] = inst_11815);

(statearr_11834_11857[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (10))){
var inst_11813 = (state_11821[(2)]);
var state_11821__$1 = state_11821;
var statearr_11835_11858 = state_11821__$1;
(statearr_11835_11858[(2)] = inst_11813);

(statearr_11835_11858[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11822 === (8))){
var inst_11791 = (state_11821[(10)]);
var inst_11801 = (state_11821[(7)]);
var inst_11802 = (state_11821[(9)]);
var inst_11800 = (state_11821[(8)]);
var inst_11805 = (function (){var cs = inst_11791;
var vec__11796 = inst_11800;
var v = inst_11801;
var c = inst_11802;
return ((function (cs,vec__11796,v,c,inst_11791,inst_11801,inst_11802,inst_11800,state_val_11822,c__9695__auto___11849,out){
return (function (p1__11786_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__11786_SHARP_);
});
;})(cs,vec__11796,v,c,inst_11791,inst_11801,inst_11802,inst_11800,state_val_11822,c__9695__auto___11849,out))
})();
var inst_11806 = cljs.core.filterv.call(null,inst_11805,inst_11791);
var inst_11791__$1 = inst_11806;
var state_11821__$1 = (function (){var statearr_11836 = state_11821;
(statearr_11836[(10)] = inst_11791__$1);

return statearr_11836;
})();
var statearr_11837_11859 = state_11821__$1;
(statearr_11837_11859[(2)] = null);

(statearr_11837_11859[(1)] = (2));


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
});})(c__9695__auto___11849,out))
;
return ((function (switch__9583__auto__,c__9695__auto___11849,out){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_11841 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11841[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_11841[(1)] = (1));

return statearr_11841;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_11821){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_11821);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11842){if((e11842 instanceof Object)){
var ex__9587__auto__ = e11842;
var statearr_11843_11860 = state_11821;
(statearr_11843_11860[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11821);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11861 = state_11821;
state_11821 = G__11861;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_11821){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_11821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___11849,out))
})();
var state__9697__auto__ = (function (){var statearr_11844 = f__9696__auto__.call(null);
(statearr_11844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___11849);

return statearr_11844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___11849,out))
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
var args11862 = [];
var len__8257__auto___11911 = arguments.length;
var i__8258__auto___11912 = (0);
while(true){
if((i__8258__auto___11912 < len__8257__auto___11911)){
args11862.push((arguments[i__8258__auto___11912]));

var G__11913 = (i__8258__auto___11912 + (1));
i__8258__auto___11912 = G__11913;
continue;
} else {
}
break;
}

var G__11864 = args11862.length;
switch (G__11864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11862.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9695__auto___11915 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___11915,out){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___11915,out){
return (function (state_11888){
var state_val_11889 = (state_11888[(1)]);
if((state_val_11889 === (7))){
var inst_11870 = (state_11888[(7)]);
var inst_11870__$1 = (state_11888[(2)]);
var inst_11871 = (inst_11870__$1 == null);
var inst_11872 = cljs.core.not.call(null,inst_11871);
var state_11888__$1 = (function (){var statearr_11890 = state_11888;
(statearr_11890[(7)] = inst_11870__$1);

return statearr_11890;
})();
if(inst_11872){
var statearr_11891_11916 = state_11888__$1;
(statearr_11891_11916[(1)] = (8));

} else {
var statearr_11892_11917 = state_11888__$1;
(statearr_11892_11917[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (1))){
var inst_11865 = (0);
var state_11888__$1 = (function (){var statearr_11893 = state_11888;
(statearr_11893[(8)] = inst_11865);

return statearr_11893;
})();
var statearr_11894_11918 = state_11888__$1;
(statearr_11894_11918[(2)] = null);

(statearr_11894_11918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (4))){
var state_11888__$1 = state_11888;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11888__$1,(7),ch);
} else {
if((state_val_11889 === (6))){
var inst_11883 = (state_11888[(2)]);
var state_11888__$1 = state_11888;
var statearr_11895_11919 = state_11888__$1;
(statearr_11895_11919[(2)] = inst_11883);

(statearr_11895_11919[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (3))){
var inst_11885 = (state_11888[(2)]);
var inst_11886 = cljs.core.async.close_BANG_.call(null,out);
var state_11888__$1 = (function (){var statearr_11896 = state_11888;
(statearr_11896[(9)] = inst_11885);

return statearr_11896;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11888__$1,inst_11886);
} else {
if((state_val_11889 === (2))){
var inst_11865 = (state_11888[(8)]);
var inst_11867 = (inst_11865 < n);
var state_11888__$1 = state_11888;
if(cljs.core.truth_(inst_11867)){
var statearr_11897_11920 = state_11888__$1;
(statearr_11897_11920[(1)] = (4));

} else {
var statearr_11898_11921 = state_11888__$1;
(statearr_11898_11921[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (11))){
var inst_11865 = (state_11888[(8)]);
var inst_11875 = (state_11888[(2)]);
var inst_11876 = (inst_11865 + (1));
var inst_11865__$1 = inst_11876;
var state_11888__$1 = (function (){var statearr_11899 = state_11888;
(statearr_11899[(8)] = inst_11865__$1);

(statearr_11899[(10)] = inst_11875);

return statearr_11899;
})();
var statearr_11900_11922 = state_11888__$1;
(statearr_11900_11922[(2)] = null);

(statearr_11900_11922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (9))){
var state_11888__$1 = state_11888;
var statearr_11901_11923 = state_11888__$1;
(statearr_11901_11923[(2)] = null);

(statearr_11901_11923[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (5))){
var state_11888__$1 = state_11888;
var statearr_11902_11924 = state_11888__$1;
(statearr_11902_11924[(2)] = null);

(statearr_11902_11924[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (10))){
var inst_11880 = (state_11888[(2)]);
var state_11888__$1 = state_11888;
var statearr_11903_11925 = state_11888__$1;
(statearr_11903_11925[(2)] = inst_11880);

(statearr_11903_11925[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11889 === (8))){
var inst_11870 = (state_11888[(7)]);
var state_11888__$1 = state_11888;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11888__$1,(11),out,inst_11870);
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
});})(c__9695__auto___11915,out))
;
return ((function (switch__9583__auto__,c__9695__auto___11915,out){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_11907 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11907[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_11907[(1)] = (1));

return statearr_11907;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_11888){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_11888);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11908){if((e11908 instanceof Object)){
var ex__9587__auto__ = e11908;
var statearr_11909_11926 = state_11888;
(statearr_11909_11926[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11908;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11927 = state_11888;
state_11888 = G__11927;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_11888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_11888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___11915,out))
})();
var state__9697__auto__ = (function (){var statearr_11910 = f__9696__auto__.call(null);
(statearr_11910[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___11915);

return statearr_11910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___11915,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11935 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11935 = (function (f,ch,meta11936){
this.f = f;
this.ch = ch;
this.meta11936 = meta11936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11937,meta11936__$1){
var self__ = this;
var _11937__$1 = this;
return (new cljs.core.async.t_cljs$core$async11935(self__.f,self__.ch,meta11936__$1));
});

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11937){
var self__ = this;
var _11937__$1 = this;
return self__.meta11936;
});

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11938 = (function (f,ch,meta11936,_,fn1,meta11939){
this.f = f;
this.ch = ch;
this.meta11936 = meta11936;
this._ = _;
this.fn1 = fn1;
this.meta11939 = meta11939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11940,meta11939__$1){
var self__ = this;
var _11940__$1 = this;
return (new cljs.core.async.t_cljs$core$async11938(self__.f,self__.ch,self__.meta11936,self__._,self__.fn1,meta11939__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11940){
var self__ = this;
var _11940__$1 = this;
return self__.meta11939;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11938.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11928_SHARP_){
return f1.call(null,(((p1__11928_SHARP_ == null))?null:self__.f.call(null,p1__11928_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11938.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11936","meta11936",75418218,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11935","cljs.core.async/t_cljs$core$async11935",-1703620610,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11939","meta11939",1346952042,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11938.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11938.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11938";

cljs.core.async.t_cljs$core$async11938.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async11938");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11938 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11938(f__$1,ch__$1,meta11936__$1,___$2,fn1__$1,meta11939){
return (new cljs.core.async.t_cljs$core$async11938(f__$1,ch__$1,meta11936__$1,___$2,fn1__$1,meta11939));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11938(self__.f,self__.ch,self__.meta11936,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__7132__auto__ = ret;
if(cljs.core.truth_(and__7132__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__7132__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11935.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11936","meta11936",75418218,null)], null);
});

cljs.core.async.t_cljs$core$async11935.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11935.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11935";

cljs.core.async.t_cljs$core$async11935.cljs$lang$ctorPrWriter = (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async11935");
});

cljs.core.async.__GT_t_cljs$core$async11935 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11935(f__$1,ch__$1,meta11936){
return (new cljs.core.async.t_cljs$core$async11935(f__$1,ch__$1,meta11936));
});

}

return (new cljs.core.async.t_cljs$core$async11935(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11944 = (function (f,ch,meta11945){
this.f = f;
this.ch = ch;
this.meta11945 = meta11945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11946,meta11945__$1){
var self__ = this;
var _11946__$1 = this;
return (new cljs.core.async.t_cljs$core$async11944(self__.f,self__.ch,meta11945__$1));
});

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11946){
var self__ = this;
var _11946__$1 = this;
return self__.meta11945;
});

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11945","meta11945",1847623885,null)], null);
});

cljs.core.async.t_cljs$core$async11944.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11944.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11944";

cljs.core.async.t_cljs$core$async11944.cljs$lang$ctorPrWriter = (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async11944");
});

cljs.core.async.__GT_t_cljs$core$async11944 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11944(f__$1,ch__$1,meta11945){
return (new cljs.core.async.t_cljs$core$async11944(f__$1,ch__$1,meta11945));
});

}

return (new cljs.core.async.t_cljs$core$async11944(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11950 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11950 = (function (p,ch,meta11951){
this.p = p;
this.ch = ch;
this.meta11951 = meta11951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11952,meta11951__$1){
var self__ = this;
var _11952__$1 = this;
return (new cljs.core.async.t_cljs$core$async11950(self__.p,self__.ch,meta11951__$1));
});

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11952){
var self__ = this;
var _11952__$1 = this;
return self__.meta11951;
});

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async11950.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11951","meta11951",-1266448389,null)], null);
});

cljs.core.async.t_cljs$core$async11950.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11950.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11950";

cljs.core.async.t_cljs$core$async11950.cljs$lang$ctorPrWriter = (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"cljs.core.async/t_cljs$core$async11950");
});

cljs.core.async.__GT_t_cljs$core$async11950 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11950(p__$1,ch__$1,meta11951){
return (new cljs.core.async.t_cljs$core$async11950(p__$1,ch__$1,meta11951));
});

}

return (new cljs.core.async.t_cljs$core$async11950(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args11953 = [];
var len__8257__auto___11997 = arguments.length;
var i__8258__auto___11998 = (0);
while(true){
if((i__8258__auto___11998 < len__8257__auto___11997)){
args11953.push((arguments[i__8258__auto___11998]));

var G__11999 = (i__8258__auto___11998 + (1));
i__8258__auto___11998 = G__11999;
continue;
} else {
}
break;
}

var G__11955 = args11953.length;
switch (G__11955) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args11953.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9695__auto___12001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___12001,out){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___12001,out){
return (function (state_11976){
var state_val_11977 = (state_11976[(1)]);
if((state_val_11977 === (7))){
var inst_11972 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11978_12002 = state_11976__$1;
(statearr_11978_12002[(2)] = inst_11972);

(statearr_11978_12002[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (1))){
var state_11976__$1 = state_11976;
var statearr_11979_12003 = state_11976__$1;
(statearr_11979_12003[(2)] = null);

(statearr_11979_12003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (4))){
var inst_11958 = (state_11976[(7)]);
var inst_11958__$1 = (state_11976[(2)]);
var inst_11959 = (inst_11958__$1 == null);
var state_11976__$1 = (function (){var statearr_11980 = state_11976;
(statearr_11980[(7)] = inst_11958__$1);

return statearr_11980;
})();
if(cljs.core.truth_(inst_11959)){
var statearr_11981_12004 = state_11976__$1;
(statearr_11981_12004[(1)] = (5));

} else {
var statearr_11982_12005 = state_11976__$1;
(statearr_11982_12005[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (6))){
var inst_11958 = (state_11976[(7)]);
var inst_11963 = p.call(null,inst_11958);
var state_11976__$1 = state_11976;
if(cljs.core.truth_(inst_11963)){
var statearr_11983_12006 = state_11976__$1;
(statearr_11983_12006[(1)] = (8));

} else {
var statearr_11984_12007 = state_11976__$1;
(statearr_11984_12007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (3))){
var inst_11974 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11976__$1,inst_11974);
} else {
if((state_val_11977 === (2))){
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11976__$1,(4),ch);
} else {
if((state_val_11977 === (11))){
var inst_11966 = (state_11976[(2)]);
var state_11976__$1 = state_11976;
var statearr_11985_12008 = state_11976__$1;
(statearr_11985_12008[(2)] = inst_11966);

(statearr_11985_12008[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (9))){
var state_11976__$1 = state_11976;
var statearr_11986_12009 = state_11976__$1;
(statearr_11986_12009[(2)] = null);

(statearr_11986_12009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (5))){
var inst_11961 = cljs.core.async.close_BANG_.call(null,out);
var state_11976__$1 = state_11976;
var statearr_11987_12010 = state_11976__$1;
(statearr_11987_12010[(2)] = inst_11961);

(statearr_11987_12010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (10))){
var inst_11969 = (state_11976[(2)]);
var state_11976__$1 = (function (){var statearr_11988 = state_11976;
(statearr_11988[(8)] = inst_11969);

return statearr_11988;
})();
var statearr_11989_12011 = state_11976__$1;
(statearr_11989_12011[(2)] = null);

(statearr_11989_12011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11977 === (8))){
var inst_11958 = (state_11976[(7)]);
var state_11976__$1 = state_11976;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11976__$1,(11),out,inst_11958);
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
});})(c__9695__auto___12001,out))
;
return ((function (switch__9583__auto__,c__9695__auto___12001,out){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_11993 = [null,null,null,null,null,null,null,null,null];
(statearr_11993[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_11993[(1)] = (1));

return statearr_11993;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_11976){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_11976);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e11994){if((e11994 instanceof Object)){
var ex__9587__auto__ = e11994;
var statearr_11995_12012 = state_11976;
(statearr_11995_12012[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11976);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12013 = state_11976;
state_11976 = G__12013;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_11976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_11976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___12001,out))
})();
var state__9697__auto__ = (function (){var statearr_11996 = f__9696__auto__.call(null);
(statearr_11996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___12001);

return statearr_11996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___12001,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args12014 = [];
var len__8257__auto___12017 = arguments.length;
var i__8258__auto___12018 = (0);
while(true){
if((i__8258__auto___12018 < len__8257__auto___12017)){
args12014.push((arguments[i__8258__auto___12018]));

var G__12019 = (i__8258__auto___12018 + (1));
i__8258__auto___12018 = G__12019;
continue;
} else {
}
break;
}

var G__12016 = args12014.length;
switch (G__12016) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12014.length)].join('')));

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
var c__9695__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto__){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto__){
return (function (state_12186){
var state_val_12187 = (state_12186[(1)]);
if((state_val_12187 === (7))){
var inst_12182 = (state_12186[(2)]);
var state_12186__$1 = state_12186;
var statearr_12188_12229 = state_12186__$1;
(statearr_12188_12229[(2)] = inst_12182);

(statearr_12188_12229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (20))){
var inst_12152 = (state_12186[(7)]);
var inst_12163 = (state_12186[(2)]);
var inst_12164 = cljs.core.next.call(null,inst_12152);
var inst_12138 = inst_12164;
var inst_12139 = null;
var inst_12140 = (0);
var inst_12141 = (0);
var state_12186__$1 = (function (){var statearr_12189 = state_12186;
(statearr_12189[(8)] = inst_12138);

(statearr_12189[(9)] = inst_12139);

(statearr_12189[(10)] = inst_12141);

(statearr_12189[(11)] = inst_12163);

(statearr_12189[(12)] = inst_12140);

return statearr_12189;
})();
var statearr_12190_12230 = state_12186__$1;
(statearr_12190_12230[(2)] = null);

(statearr_12190_12230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (1))){
var state_12186__$1 = state_12186;
var statearr_12191_12231 = state_12186__$1;
(statearr_12191_12231[(2)] = null);

(statearr_12191_12231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (4))){
var inst_12127 = (state_12186[(13)]);
var inst_12127__$1 = (state_12186[(2)]);
var inst_12128 = (inst_12127__$1 == null);
var state_12186__$1 = (function (){var statearr_12192 = state_12186;
(statearr_12192[(13)] = inst_12127__$1);

return statearr_12192;
})();
if(cljs.core.truth_(inst_12128)){
var statearr_12193_12232 = state_12186__$1;
(statearr_12193_12232[(1)] = (5));

} else {
var statearr_12194_12233 = state_12186__$1;
(statearr_12194_12233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (15))){
var state_12186__$1 = state_12186;
var statearr_12198_12234 = state_12186__$1;
(statearr_12198_12234[(2)] = null);

(statearr_12198_12234[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (21))){
var state_12186__$1 = state_12186;
var statearr_12199_12235 = state_12186__$1;
(statearr_12199_12235[(2)] = null);

(statearr_12199_12235[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (13))){
var inst_12138 = (state_12186[(8)]);
var inst_12139 = (state_12186[(9)]);
var inst_12141 = (state_12186[(10)]);
var inst_12140 = (state_12186[(12)]);
var inst_12148 = (state_12186[(2)]);
var inst_12149 = (inst_12141 + (1));
var tmp12195 = inst_12138;
var tmp12196 = inst_12139;
var tmp12197 = inst_12140;
var inst_12138__$1 = tmp12195;
var inst_12139__$1 = tmp12196;
var inst_12140__$1 = tmp12197;
var inst_12141__$1 = inst_12149;
var state_12186__$1 = (function (){var statearr_12200 = state_12186;
(statearr_12200[(8)] = inst_12138__$1);

(statearr_12200[(14)] = inst_12148);

(statearr_12200[(9)] = inst_12139__$1);

(statearr_12200[(10)] = inst_12141__$1);

(statearr_12200[(12)] = inst_12140__$1);

return statearr_12200;
})();
var statearr_12201_12236 = state_12186__$1;
(statearr_12201_12236[(2)] = null);

(statearr_12201_12236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (22))){
var state_12186__$1 = state_12186;
var statearr_12202_12237 = state_12186__$1;
(statearr_12202_12237[(2)] = null);

(statearr_12202_12237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (6))){
var inst_12127 = (state_12186[(13)]);
var inst_12136 = f.call(null,inst_12127);
var inst_12137 = cljs.core.seq.call(null,inst_12136);
var inst_12138 = inst_12137;
var inst_12139 = null;
var inst_12140 = (0);
var inst_12141 = (0);
var state_12186__$1 = (function (){var statearr_12203 = state_12186;
(statearr_12203[(8)] = inst_12138);

(statearr_12203[(9)] = inst_12139);

(statearr_12203[(10)] = inst_12141);

(statearr_12203[(12)] = inst_12140);

return statearr_12203;
})();
var statearr_12204_12238 = state_12186__$1;
(statearr_12204_12238[(2)] = null);

(statearr_12204_12238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (17))){
var inst_12152 = (state_12186[(7)]);
var inst_12156 = cljs.core.chunk_first.call(null,inst_12152);
var inst_12157 = cljs.core.chunk_rest.call(null,inst_12152);
var inst_12158 = cljs.core.count.call(null,inst_12156);
var inst_12138 = inst_12157;
var inst_12139 = inst_12156;
var inst_12140 = inst_12158;
var inst_12141 = (0);
var state_12186__$1 = (function (){var statearr_12205 = state_12186;
(statearr_12205[(8)] = inst_12138);

(statearr_12205[(9)] = inst_12139);

(statearr_12205[(10)] = inst_12141);

(statearr_12205[(12)] = inst_12140);

return statearr_12205;
})();
var statearr_12206_12239 = state_12186__$1;
(statearr_12206_12239[(2)] = null);

(statearr_12206_12239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (3))){
var inst_12184 = (state_12186[(2)]);
var state_12186__$1 = state_12186;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12186__$1,inst_12184);
} else {
if((state_val_12187 === (12))){
var inst_12172 = (state_12186[(2)]);
var state_12186__$1 = state_12186;
var statearr_12207_12240 = state_12186__$1;
(statearr_12207_12240[(2)] = inst_12172);

(statearr_12207_12240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (2))){
var state_12186__$1 = state_12186;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12186__$1,(4),in$);
} else {
if((state_val_12187 === (23))){
var inst_12180 = (state_12186[(2)]);
var state_12186__$1 = state_12186;
var statearr_12208_12241 = state_12186__$1;
(statearr_12208_12241[(2)] = inst_12180);

(statearr_12208_12241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (19))){
var inst_12167 = (state_12186[(2)]);
var state_12186__$1 = state_12186;
var statearr_12209_12242 = state_12186__$1;
(statearr_12209_12242[(2)] = inst_12167);

(statearr_12209_12242[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (11))){
var inst_12138 = (state_12186[(8)]);
var inst_12152 = (state_12186[(7)]);
var inst_12152__$1 = cljs.core.seq.call(null,inst_12138);
var state_12186__$1 = (function (){var statearr_12210 = state_12186;
(statearr_12210[(7)] = inst_12152__$1);

return statearr_12210;
})();
if(inst_12152__$1){
var statearr_12211_12243 = state_12186__$1;
(statearr_12211_12243[(1)] = (14));

} else {
var statearr_12212_12244 = state_12186__$1;
(statearr_12212_12244[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (9))){
var inst_12174 = (state_12186[(2)]);
var inst_12175 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_12186__$1 = (function (){var statearr_12213 = state_12186;
(statearr_12213[(15)] = inst_12174);

return statearr_12213;
})();
if(cljs.core.truth_(inst_12175)){
var statearr_12214_12245 = state_12186__$1;
(statearr_12214_12245[(1)] = (21));

} else {
var statearr_12215_12246 = state_12186__$1;
(statearr_12215_12246[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (5))){
var inst_12130 = cljs.core.async.close_BANG_.call(null,out);
var state_12186__$1 = state_12186;
var statearr_12216_12247 = state_12186__$1;
(statearr_12216_12247[(2)] = inst_12130);

(statearr_12216_12247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (14))){
var inst_12152 = (state_12186[(7)]);
var inst_12154 = cljs.core.chunked_seq_QMARK_.call(null,inst_12152);
var state_12186__$1 = state_12186;
if(inst_12154){
var statearr_12217_12248 = state_12186__$1;
(statearr_12217_12248[(1)] = (17));

} else {
var statearr_12218_12249 = state_12186__$1;
(statearr_12218_12249[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (16))){
var inst_12170 = (state_12186[(2)]);
var state_12186__$1 = state_12186;
var statearr_12219_12250 = state_12186__$1;
(statearr_12219_12250[(2)] = inst_12170);

(statearr_12219_12250[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12187 === (10))){
var inst_12139 = (state_12186[(9)]);
var inst_12141 = (state_12186[(10)]);
var inst_12146 = cljs.core._nth.call(null,inst_12139,inst_12141);
var state_12186__$1 = state_12186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12186__$1,(13),out,inst_12146);
} else {
if((state_val_12187 === (18))){
var inst_12152 = (state_12186[(7)]);
var inst_12161 = cljs.core.first.call(null,inst_12152);
var state_12186__$1 = state_12186;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12186__$1,(20),out,inst_12161);
} else {
if((state_val_12187 === (8))){
var inst_12141 = (state_12186[(10)]);
var inst_12140 = (state_12186[(12)]);
var inst_12143 = (inst_12141 < inst_12140);
var inst_12144 = inst_12143;
var state_12186__$1 = state_12186;
if(cljs.core.truth_(inst_12144)){
var statearr_12220_12251 = state_12186__$1;
(statearr_12220_12251[(1)] = (10));

} else {
var statearr_12221_12252 = state_12186__$1;
(statearr_12221_12252[(1)] = (11));

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
});})(c__9695__auto__))
;
return ((function (switch__9583__auto__,c__9695__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__9584__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__9584__auto____0 = (function (){
var statearr_12225 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12225[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__9584__auto__);

(statearr_12225[(1)] = (1));

return statearr_12225;
});
var cljs$core$async$mapcat_STAR__$_state_machine__9584__auto____1 = (function (state_12186){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_12186);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e12226){if((e12226 instanceof Object)){
var ex__9587__auto__ = e12226;
var statearr_12227_12253 = state_12186;
(statearr_12227_12253[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12186);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12254 = state_12186;
state_12186 = G__12254;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__9584__auto__ = function(state_12186){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__9584__auto____1.call(this,state_12186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__9584__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__9584__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto__))
})();
var state__9697__auto__ = (function (){var statearr_12228 = f__9696__auto__.call(null);
(statearr_12228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto__);

return statearr_12228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto__))
);

return c__9695__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args12255 = [];
var len__8257__auto___12258 = arguments.length;
var i__8258__auto___12259 = (0);
while(true){
if((i__8258__auto___12259 < len__8257__auto___12258)){
args12255.push((arguments[i__8258__auto___12259]));

var G__12260 = (i__8258__auto___12259 + (1));
i__8258__auto___12259 = G__12260;
continue;
} else {
}
break;
}

var G__12257 = args12255.length;
switch (G__12257) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12255.length)].join('')));

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
var args12262 = [];
var len__8257__auto___12265 = arguments.length;
var i__8258__auto___12266 = (0);
while(true){
if((i__8258__auto___12266 < len__8257__auto___12265)){
args12262.push((arguments[i__8258__auto___12266]));

var G__12267 = (i__8258__auto___12266 + (1));
i__8258__auto___12266 = G__12267;
continue;
} else {
}
break;
}

var G__12264 = args12262.length;
switch (G__12264) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12262.length)].join('')));

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
var args12269 = [];
var len__8257__auto___12320 = arguments.length;
var i__8258__auto___12321 = (0);
while(true){
if((i__8258__auto___12321 < len__8257__auto___12320)){
args12269.push((arguments[i__8258__auto___12321]));

var G__12322 = (i__8258__auto___12321 + (1));
i__8258__auto___12321 = G__12322;
continue;
} else {
}
break;
}

var G__12271 = args12269.length;
switch (G__12271) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12269.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9695__auto___12324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___12324,out){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___12324,out){
return (function (state_12295){
var state_val_12296 = (state_12295[(1)]);
if((state_val_12296 === (7))){
var inst_12290 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12297_12325 = state_12295__$1;
(statearr_12297_12325[(2)] = inst_12290);

(statearr_12297_12325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (1))){
var inst_12272 = null;
var state_12295__$1 = (function (){var statearr_12298 = state_12295;
(statearr_12298[(7)] = inst_12272);

return statearr_12298;
})();
var statearr_12299_12326 = state_12295__$1;
(statearr_12299_12326[(2)] = null);

(statearr_12299_12326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (4))){
var inst_12275 = (state_12295[(8)]);
var inst_12275__$1 = (state_12295[(2)]);
var inst_12276 = (inst_12275__$1 == null);
var inst_12277 = cljs.core.not.call(null,inst_12276);
var state_12295__$1 = (function (){var statearr_12300 = state_12295;
(statearr_12300[(8)] = inst_12275__$1);

return statearr_12300;
})();
if(inst_12277){
var statearr_12301_12327 = state_12295__$1;
(statearr_12301_12327[(1)] = (5));

} else {
var statearr_12302_12328 = state_12295__$1;
(statearr_12302_12328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (6))){
var state_12295__$1 = state_12295;
var statearr_12303_12329 = state_12295__$1;
(statearr_12303_12329[(2)] = null);

(statearr_12303_12329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (3))){
var inst_12292 = (state_12295[(2)]);
var inst_12293 = cljs.core.async.close_BANG_.call(null,out);
var state_12295__$1 = (function (){var statearr_12304 = state_12295;
(statearr_12304[(9)] = inst_12292);

return statearr_12304;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12295__$1,inst_12293);
} else {
if((state_val_12296 === (2))){
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12295__$1,(4),ch);
} else {
if((state_val_12296 === (11))){
var inst_12275 = (state_12295[(8)]);
var inst_12284 = (state_12295[(2)]);
var inst_12272 = inst_12275;
var state_12295__$1 = (function (){var statearr_12305 = state_12295;
(statearr_12305[(10)] = inst_12284);

(statearr_12305[(7)] = inst_12272);

return statearr_12305;
})();
var statearr_12306_12330 = state_12295__$1;
(statearr_12306_12330[(2)] = null);

(statearr_12306_12330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (9))){
var inst_12275 = (state_12295[(8)]);
var state_12295__$1 = state_12295;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12295__$1,(11),out,inst_12275);
} else {
if((state_val_12296 === (5))){
var inst_12272 = (state_12295[(7)]);
var inst_12275 = (state_12295[(8)]);
var inst_12279 = cljs.core._EQ_.call(null,inst_12275,inst_12272);
var state_12295__$1 = state_12295;
if(inst_12279){
var statearr_12308_12331 = state_12295__$1;
(statearr_12308_12331[(1)] = (8));

} else {
var statearr_12309_12332 = state_12295__$1;
(statearr_12309_12332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (10))){
var inst_12287 = (state_12295[(2)]);
var state_12295__$1 = state_12295;
var statearr_12310_12333 = state_12295__$1;
(statearr_12310_12333[(2)] = inst_12287);

(statearr_12310_12333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12296 === (8))){
var inst_12272 = (state_12295[(7)]);
var tmp12307 = inst_12272;
var inst_12272__$1 = tmp12307;
var state_12295__$1 = (function (){var statearr_12311 = state_12295;
(statearr_12311[(7)] = inst_12272__$1);

return statearr_12311;
})();
var statearr_12312_12334 = state_12295__$1;
(statearr_12312_12334[(2)] = null);

(statearr_12312_12334[(1)] = (2));


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
});})(c__9695__auto___12324,out))
;
return ((function (switch__9583__auto__,c__9695__auto___12324,out){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_12316 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12316[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_12316[(1)] = (1));

return statearr_12316;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_12295){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_12295);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e12317){if((e12317 instanceof Object)){
var ex__9587__auto__ = e12317;
var statearr_12318_12335 = state_12295;
(statearr_12318_12335[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12295);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12317;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12336 = state_12295;
state_12295 = G__12336;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_12295){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_12295);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___12324,out))
})();
var state__9697__auto__ = (function (){var statearr_12319 = f__9696__auto__.call(null);
(statearr_12319[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___12324);

return statearr_12319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___12324,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args12337 = [];
var len__8257__auto___12407 = arguments.length;
var i__8258__auto___12408 = (0);
while(true){
if((i__8258__auto___12408 < len__8257__auto___12407)){
args12337.push((arguments[i__8258__auto___12408]));

var G__12409 = (i__8258__auto___12408 + (1));
i__8258__auto___12408 = G__12409;
continue;
} else {
}
break;
}

var G__12339 = args12337.length;
switch (G__12339) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12337.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9695__auto___12411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___12411,out){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___12411,out){
return (function (state_12377){
var state_val_12378 = (state_12377[(1)]);
if((state_val_12378 === (7))){
var inst_12373 = (state_12377[(2)]);
var state_12377__$1 = state_12377;
var statearr_12379_12412 = state_12377__$1;
(statearr_12379_12412[(2)] = inst_12373);

(statearr_12379_12412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (1))){
var inst_12340 = (new Array(n));
var inst_12341 = inst_12340;
var inst_12342 = (0);
var state_12377__$1 = (function (){var statearr_12380 = state_12377;
(statearr_12380[(7)] = inst_12342);

(statearr_12380[(8)] = inst_12341);

return statearr_12380;
})();
var statearr_12381_12413 = state_12377__$1;
(statearr_12381_12413[(2)] = null);

(statearr_12381_12413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (4))){
var inst_12345 = (state_12377[(9)]);
var inst_12345__$1 = (state_12377[(2)]);
var inst_12346 = (inst_12345__$1 == null);
var inst_12347 = cljs.core.not.call(null,inst_12346);
var state_12377__$1 = (function (){var statearr_12382 = state_12377;
(statearr_12382[(9)] = inst_12345__$1);

return statearr_12382;
})();
if(inst_12347){
var statearr_12383_12414 = state_12377__$1;
(statearr_12383_12414[(1)] = (5));

} else {
var statearr_12384_12415 = state_12377__$1;
(statearr_12384_12415[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (15))){
var inst_12367 = (state_12377[(2)]);
var state_12377__$1 = state_12377;
var statearr_12385_12416 = state_12377__$1;
(statearr_12385_12416[(2)] = inst_12367);

(statearr_12385_12416[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (13))){
var state_12377__$1 = state_12377;
var statearr_12386_12417 = state_12377__$1;
(statearr_12386_12417[(2)] = null);

(statearr_12386_12417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (6))){
var inst_12342 = (state_12377[(7)]);
var inst_12363 = (inst_12342 > (0));
var state_12377__$1 = state_12377;
if(cljs.core.truth_(inst_12363)){
var statearr_12387_12418 = state_12377__$1;
(statearr_12387_12418[(1)] = (12));

} else {
var statearr_12388_12419 = state_12377__$1;
(statearr_12388_12419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (3))){
var inst_12375 = (state_12377[(2)]);
var state_12377__$1 = state_12377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12377__$1,inst_12375);
} else {
if((state_val_12378 === (12))){
var inst_12341 = (state_12377[(8)]);
var inst_12365 = cljs.core.vec.call(null,inst_12341);
var state_12377__$1 = state_12377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12377__$1,(15),out,inst_12365);
} else {
if((state_val_12378 === (2))){
var state_12377__$1 = state_12377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12377__$1,(4),ch);
} else {
if((state_val_12378 === (11))){
var inst_12357 = (state_12377[(2)]);
var inst_12358 = (new Array(n));
var inst_12341 = inst_12358;
var inst_12342 = (0);
var state_12377__$1 = (function (){var statearr_12389 = state_12377;
(statearr_12389[(10)] = inst_12357);

(statearr_12389[(7)] = inst_12342);

(statearr_12389[(8)] = inst_12341);

return statearr_12389;
})();
var statearr_12390_12420 = state_12377__$1;
(statearr_12390_12420[(2)] = null);

(statearr_12390_12420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (9))){
var inst_12341 = (state_12377[(8)]);
var inst_12355 = cljs.core.vec.call(null,inst_12341);
var state_12377__$1 = state_12377;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12377__$1,(11),out,inst_12355);
} else {
if((state_val_12378 === (5))){
var inst_12342 = (state_12377[(7)]);
var inst_12350 = (state_12377[(11)]);
var inst_12345 = (state_12377[(9)]);
var inst_12341 = (state_12377[(8)]);
var inst_12349 = (inst_12341[inst_12342] = inst_12345);
var inst_12350__$1 = (inst_12342 + (1));
var inst_12351 = (inst_12350__$1 < n);
var state_12377__$1 = (function (){var statearr_12391 = state_12377;
(statearr_12391[(12)] = inst_12349);

(statearr_12391[(11)] = inst_12350__$1);

return statearr_12391;
})();
if(cljs.core.truth_(inst_12351)){
var statearr_12392_12421 = state_12377__$1;
(statearr_12392_12421[(1)] = (8));

} else {
var statearr_12393_12422 = state_12377__$1;
(statearr_12393_12422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (14))){
var inst_12370 = (state_12377[(2)]);
var inst_12371 = cljs.core.async.close_BANG_.call(null,out);
var state_12377__$1 = (function (){var statearr_12395 = state_12377;
(statearr_12395[(13)] = inst_12370);

return statearr_12395;
})();
var statearr_12396_12423 = state_12377__$1;
(statearr_12396_12423[(2)] = inst_12371);

(statearr_12396_12423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (10))){
var inst_12361 = (state_12377[(2)]);
var state_12377__$1 = state_12377;
var statearr_12397_12424 = state_12377__$1;
(statearr_12397_12424[(2)] = inst_12361);

(statearr_12397_12424[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12378 === (8))){
var inst_12350 = (state_12377[(11)]);
var inst_12341 = (state_12377[(8)]);
var tmp12394 = inst_12341;
var inst_12341__$1 = tmp12394;
var inst_12342 = inst_12350;
var state_12377__$1 = (function (){var statearr_12398 = state_12377;
(statearr_12398[(7)] = inst_12342);

(statearr_12398[(8)] = inst_12341__$1);

return statearr_12398;
})();
var statearr_12399_12425 = state_12377__$1;
(statearr_12399_12425[(2)] = null);

(statearr_12399_12425[(1)] = (2));


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
});})(c__9695__auto___12411,out))
;
return ((function (switch__9583__auto__,c__9695__auto___12411,out){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_12403 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12403[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_12403[(1)] = (1));

return statearr_12403;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_12377){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_12377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e12404){if((e12404 instanceof Object)){
var ex__9587__auto__ = e12404;
var statearr_12405_12426 = state_12377;
(statearr_12405_12426[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12404;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12427 = state_12377;
state_12377 = G__12427;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_12377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_12377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___12411,out))
})();
var state__9697__auto__ = (function (){var statearr_12406 = f__9696__auto__.call(null);
(statearr_12406[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___12411);

return statearr_12406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___12411,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args12428 = [];
var len__8257__auto___12502 = arguments.length;
var i__8258__auto___12503 = (0);
while(true){
if((i__8258__auto___12503 < len__8257__auto___12502)){
args12428.push((arguments[i__8258__auto___12503]));

var G__12504 = (i__8258__auto___12503 + (1));
i__8258__auto___12503 = G__12504;
continue;
} else {
}
break;
}

var G__12430 = args12428.length;
switch (G__12430) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12428.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__9695__auto___12506 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto___12506,out){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto___12506,out){
return (function (state_12472){
var state_val_12473 = (state_12472[(1)]);
if((state_val_12473 === (7))){
var inst_12468 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
var statearr_12474_12507 = state_12472__$1;
(statearr_12474_12507[(2)] = inst_12468);

(statearr_12474_12507[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (1))){
var inst_12431 = [];
var inst_12432 = inst_12431;
var inst_12433 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_12472__$1 = (function (){var statearr_12475 = state_12472;
(statearr_12475[(7)] = inst_12432);

(statearr_12475[(8)] = inst_12433);

return statearr_12475;
})();
var statearr_12476_12508 = state_12472__$1;
(statearr_12476_12508[(2)] = null);

(statearr_12476_12508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (4))){
var inst_12436 = (state_12472[(9)]);
var inst_12436__$1 = (state_12472[(2)]);
var inst_12437 = (inst_12436__$1 == null);
var inst_12438 = cljs.core.not.call(null,inst_12437);
var state_12472__$1 = (function (){var statearr_12477 = state_12472;
(statearr_12477[(9)] = inst_12436__$1);

return statearr_12477;
})();
if(inst_12438){
var statearr_12478_12509 = state_12472__$1;
(statearr_12478_12509[(1)] = (5));

} else {
var statearr_12479_12510 = state_12472__$1;
(statearr_12479_12510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (15))){
var inst_12462 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
var statearr_12480_12511 = state_12472__$1;
(statearr_12480_12511[(2)] = inst_12462);

(statearr_12480_12511[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (13))){
var state_12472__$1 = state_12472;
var statearr_12481_12512 = state_12472__$1;
(statearr_12481_12512[(2)] = null);

(statearr_12481_12512[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (6))){
var inst_12432 = (state_12472[(7)]);
var inst_12457 = inst_12432.length;
var inst_12458 = (inst_12457 > (0));
var state_12472__$1 = state_12472;
if(cljs.core.truth_(inst_12458)){
var statearr_12482_12513 = state_12472__$1;
(statearr_12482_12513[(1)] = (12));

} else {
var statearr_12483_12514 = state_12472__$1;
(statearr_12483_12514[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (3))){
var inst_12470 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12472__$1,inst_12470);
} else {
if((state_val_12473 === (12))){
var inst_12432 = (state_12472[(7)]);
var inst_12460 = cljs.core.vec.call(null,inst_12432);
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12472__$1,(15),out,inst_12460);
} else {
if((state_val_12473 === (2))){
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12472__$1,(4),ch);
} else {
if((state_val_12473 === (11))){
var inst_12436 = (state_12472[(9)]);
var inst_12440 = (state_12472[(10)]);
var inst_12450 = (state_12472[(2)]);
var inst_12451 = [];
var inst_12452 = inst_12451.push(inst_12436);
var inst_12432 = inst_12451;
var inst_12433 = inst_12440;
var state_12472__$1 = (function (){var statearr_12484 = state_12472;
(statearr_12484[(7)] = inst_12432);

(statearr_12484[(8)] = inst_12433);

(statearr_12484[(11)] = inst_12450);

(statearr_12484[(12)] = inst_12452);

return statearr_12484;
})();
var statearr_12485_12515 = state_12472__$1;
(statearr_12485_12515[(2)] = null);

(statearr_12485_12515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (9))){
var inst_12432 = (state_12472[(7)]);
var inst_12448 = cljs.core.vec.call(null,inst_12432);
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12472__$1,(11),out,inst_12448);
} else {
if((state_val_12473 === (5))){
var inst_12433 = (state_12472[(8)]);
var inst_12436 = (state_12472[(9)]);
var inst_12440 = (state_12472[(10)]);
var inst_12440__$1 = f.call(null,inst_12436);
var inst_12441 = cljs.core._EQ_.call(null,inst_12440__$1,inst_12433);
var inst_12442 = cljs.core.keyword_identical_QMARK_.call(null,inst_12433,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_12443 = (inst_12441) || (inst_12442);
var state_12472__$1 = (function (){var statearr_12486 = state_12472;
(statearr_12486[(10)] = inst_12440__$1);

return statearr_12486;
})();
if(cljs.core.truth_(inst_12443)){
var statearr_12487_12516 = state_12472__$1;
(statearr_12487_12516[(1)] = (8));

} else {
var statearr_12488_12517 = state_12472__$1;
(statearr_12488_12517[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (14))){
var inst_12465 = (state_12472[(2)]);
var inst_12466 = cljs.core.async.close_BANG_.call(null,out);
var state_12472__$1 = (function (){var statearr_12490 = state_12472;
(statearr_12490[(13)] = inst_12465);

return statearr_12490;
})();
var statearr_12491_12518 = state_12472__$1;
(statearr_12491_12518[(2)] = inst_12466);

(statearr_12491_12518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (10))){
var inst_12455 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
var statearr_12492_12519 = state_12472__$1;
(statearr_12492_12519[(2)] = inst_12455);

(statearr_12492_12519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (8))){
var inst_12432 = (state_12472[(7)]);
var inst_12436 = (state_12472[(9)]);
var inst_12440 = (state_12472[(10)]);
var inst_12445 = inst_12432.push(inst_12436);
var tmp12489 = inst_12432;
var inst_12432__$1 = tmp12489;
var inst_12433 = inst_12440;
var state_12472__$1 = (function (){var statearr_12493 = state_12472;
(statearr_12493[(7)] = inst_12432__$1);

(statearr_12493[(8)] = inst_12433);

(statearr_12493[(14)] = inst_12445);

return statearr_12493;
})();
var statearr_12494_12520 = state_12472__$1;
(statearr_12494_12520[(2)] = null);

(statearr_12494_12520[(1)] = (2));


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
});})(c__9695__auto___12506,out))
;
return ((function (switch__9583__auto__,c__9695__auto___12506,out){
return (function() {
var cljs$core$async$state_machine__9584__auto__ = null;
var cljs$core$async$state_machine__9584__auto____0 = (function (){
var statearr_12498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12498[(0)] = cljs$core$async$state_machine__9584__auto__);

(statearr_12498[(1)] = (1));

return statearr_12498;
});
var cljs$core$async$state_machine__9584__auto____1 = (function (state_12472){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_12472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e12499){if((e12499 instanceof Object)){
var ex__9587__auto__ = e12499;
var statearr_12500_12521 = state_12472;
(statearr_12500_12521[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12522 = state_12472;
state_12472 = G__12522;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
cljs$core$async$state_machine__9584__auto__ = function(state_12472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__9584__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__9584__auto____1.call(this,state_12472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__9584__auto____0;
cljs$core$async$state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__9584__auto____1;
return cljs$core$async$state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto___12506,out))
})();
var state__9697__auto__ = (function (){var statearr_12501 = f__9696__auto__.call(null);
(statearr_12501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto___12506);

return statearr_12501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto___12506,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map