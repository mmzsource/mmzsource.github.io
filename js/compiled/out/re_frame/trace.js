// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-trace#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__47455){
var map__47456 = p__47455;
var map__47456__$1 = ((((!((map__47456 == null)))?((((map__47456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47456.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47456):map__47456);
var operation = cljs.core.get.call(null,map__47456__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__47456__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__47456__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__47456__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__34442__auto__ = child_of;
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__47458_47470 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__47459_47471 = null;
var count__47460_47472 = (0);
var i__47461_47473 = (0);
while(true){
if((i__47461_47473 < count__47460_47472)){
var vec__47462_47474 = cljs.core._nth.call(null,chunk__47459_47471,i__47461_47473);
var k_47475 = cljs.core.nth.call(null,vec__47462_47474,(0),null);
var cb_47476 = cljs.core.nth.call(null,vec__47462_47474,(1),null);
try{cb_47476.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e47465){var e_47477 = e47465;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_47475,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_47477);
}
var G__47478 = seq__47458_47470;
var G__47479 = chunk__47459_47471;
var G__47480 = count__47460_47472;
var G__47481 = (i__47461_47473 + (1));
seq__47458_47470 = G__47478;
chunk__47459_47471 = G__47479;
count__47460_47472 = G__47480;
i__47461_47473 = G__47481;
continue;
} else {
var temp__4657__auto___47482 = cljs.core.seq.call(null,seq__47458_47470);
if(temp__4657__auto___47482){
var seq__47458_47483__$1 = temp__4657__auto___47482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47458_47483__$1)){
var c__35281__auto___47484 = cljs.core.chunk_first.call(null,seq__47458_47483__$1);
var G__47485 = cljs.core.chunk_rest.call(null,seq__47458_47483__$1);
var G__47486 = c__35281__auto___47484;
var G__47487 = cljs.core.count.call(null,c__35281__auto___47484);
var G__47488 = (0);
seq__47458_47470 = G__47485;
chunk__47459_47471 = G__47486;
count__47460_47472 = G__47487;
i__47461_47473 = G__47488;
continue;
} else {
var vec__47466_47489 = cljs.core.first.call(null,seq__47458_47483__$1);
var k_47490 = cljs.core.nth.call(null,vec__47466_47489,(0),null);
var cb_47491 = cljs.core.nth.call(null,vec__47466_47489,(1),null);
try{cb_47491.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e47469){var e_47492 = e47469;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_47490,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_47492);
}
var G__47493 = cljs.core.next.call(null,seq__47458_47483__$1);
var G__47494 = null;
var G__47495 = (0);
var G__47496 = (0);
seq__47458_47470 = G__47493;
chunk__47459_47471 = G__47494;
count__47460_47472 = G__47495;
i__47461_47473 = G__47496;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (10)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1521280396519
