// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_47769 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__47770 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47771 = null;
var count__47772 = (0);
var i__47773 = (0);
while(true){
if((i__47773 < count__47772)){
var vec__47774 = cljs.core._nth.call(null,chunk__47771,i__47773);
var effect_key = cljs.core.nth.call(null,vec__47774,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47774,(1),null);
var temp__4655__auto___47790 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47790)){
var effect_fn_47791 = temp__4655__auto___47790;
effect_fn_47791.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47792 = seq__47770;
var G__47793 = chunk__47771;
var G__47794 = count__47772;
var G__47795 = (i__47773 + (1));
seq__47770 = G__47792;
chunk__47771 = G__47793;
count__47772 = G__47794;
i__47773 = G__47795;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47770);
if(temp__4657__auto__){
var seq__47770__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47770__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__47770__$1);
var G__47796 = cljs.core.chunk_rest.call(null,seq__47770__$1);
var G__47797 = c__35281__auto__;
var G__47798 = cljs.core.count.call(null,c__35281__auto__);
var G__47799 = (0);
seq__47770 = G__47796;
chunk__47771 = G__47797;
count__47772 = G__47798;
i__47773 = G__47799;
continue;
} else {
var vec__47777 = cljs.core.first.call(null,seq__47770__$1);
var effect_key = cljs.core.nth.call(null,vec__47777,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47777,(1),null);
var temp__4655__auto___47800 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47800)){
var effect_fn_47801 = temp__4655__auto___47800;
effect_fn_47801.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47802 = cljs.core.next.call(null,seq__47770__$1);
var G__47803 = null;
var G__47804 = (0);
var G__47805 = (0);
seq__47770 = G__47802;
chunk__47771 = G__47803;
count__47772 = G__47804;
i__47773 = G__47805;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__36927__auto___47806 = re_frame.interop.now.call(null);
var duration__36928__auto___47807 = (end__36927__auto___47806 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__36928__auto___47807,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__36927__auto___47806);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_47769;
}} else {
var seq__47780 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__47781 = null;
var count__47782 = (0);
var i__47783 = (0);
while(true){
if((i__47783 < count__47782)){
var vec__47784 = cljs.core._nth.call(null,chunk__47781,i__47783);
var effect_key = cljs.core.nth.call(null,vec__47784,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47784,(1),null);
var temp__4655__auto___47808 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47808)){
var effect_fn_47809 = temp__4655__auto___47808;
effect_fn_47809.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47810 = seq__47780;
var G__47811 = chunk__47781;
var G__47812 = count__47782;
var G__47813 = (i__47783 + (1));
seq__47780 = G__47810;
chunk__47781 = G__47811;
count__47782 = G__47812;
i__47783 = G__47813;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47780);
if(temp__4657__auto__){
var seq__47780__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47780__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__47780__$1);
var G__47814 = cljs.core.chunk_rest.call(null,seq__47780__$1);
var G__47815 = c__35281__auto__;
var G__47816 = cljs.core.count.call(null,c__35281__auto__);
var G__47817 = (0);
seq__47780 = G__47814;
chunk__47781 = G__47815;
count__47782 = G__47816;
i__47783 = G__47817;
continue;
} else {
var vec__47787 = cljs.core.first.call(null,seq__47780__$1);
var effect_key = cljs.core.nth.call(null,vec__47787,(0),null);
var effect_value = cljs.core.nth.call(null,vec__47787,(1),null);
var temp__4655__auto___47818 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___47818)){
var effect_fn_47819 = temp__4655__auto___47818;
effect_fn_47819.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__47820 = cljs.core.next.call(null,seq__47780__$1);
var G__47821 = null;
var G__47822 = (0);
var G__47823 = (0);
seq__47780 = G__47820;
chunk__47781 = G__47821;
count__47782 = G__47822;
i__47783 = G__47823;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__47824 = cljs.core.seq.call(null,value);
var chunk__47825 = null;
var count__47826 = (0);
var i__47827 = (0);
while(true){
if((i__47827 < count__47826)){
var map__47828 = cljs.core._nth.call(null,chunk__47825,i__47827);
var map__47828__$1 = ((((!((map__47828 == null)))?((((map__47828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47828):map__47828);
var effect = map__47828__$1;
var ms = cljs.core.get.call(null,map__47828__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47828__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47824,chunk__47825,count__47826,i__47827,map__47828,map__47828__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47824,chunk__47825,count__47826,i__47827,map__47828,map__47828__$1,effect,ms,dispatch))
,ms);
}

var G__47832 = seq__47824;
var G__47833 = chunk__47825;
var G__47834 = count__47826;
var G__47835 = (i__47827 + (1));
seq__47824 = G__47832;
chunk__47825 = G__47833;
count__47826 = G__47834;
i__47827 = G__47835;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47824);
if(temp__4657__auto__){
var seq__47824__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47824__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__47824__$1);
var G__47836 = cljs.core.chunk_rest.call(null,seq__47824__$1);
var G__47837 = c__35281__auto__;
var G__47838 = cljs.core.count.call(null,c__35281__auto__);
var G__47839 = (0);
seq__47824 = G__47836;
chunk__47825 = G__47837;
count__47826 = G__47838;
i__47827 = G__47839;
continue;
} else {
var map__47830 = cljs.core.first.call(null,seq__47824__$1);
var map__47830__$1 = ((((!((map__47830 == null)))?((((map__47830.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47830.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47830):map__47830);
var effect = map__47830__$1;
var ms = cljs.core.get.call(null,map__47830__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__47830__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__47824,chunk__47825,count__47826,i__47827,map__47830,map__47830__$1,effect,ms,dispatch,seq__47824__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__47824,chunk__47825,count__47826,i__47827,map__47830,map__47830__$1,effect,ms,dispatch,seq__47824__$1,temp__4657__auto__))
,ms);
}

var G__47840 = cljs.core.next.call(null,seq__47824__$1);
var G__47841 = null;
var G__47842 = (0);
var G__47843 = (0);
seq__47824 = G__47840;
chunk__47825 = G__47841;
count__47826 = G__47842;
i__47827 = G__47843;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__47844 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__47845 = null;
var count__47846 = (0);
var i__47847 = (0);
while(true){
if((i__47847 < count__47846)){
var event = cljs.core._nth.call(null,chunk__47845,i__47847);
re_frame.router.dispatch.call(null,event);

var G__47848 = seq__47844;
var G__47849 = chunk__47845;
var G__47850 = count__47846;
var G__47851 = (i__47847 + (1));
seq__47844 = G__47848;
chunk__47845 = G__47849;
count__47846 = G__47850;
i__47847 = G__47851;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47844);
if(temp__4657__auto__){
var seq__47844__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47844__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__47844__$1);
var G__47852 = cljs.core.chunk_rest.call(null,seq__47844__$1);
var G__47853 = c__35281__auto__;
var G__47854 = cljs.core.count.call(null,c__35281__auto__);
var G__47855 = (0);
seq__47844 = G__47852;
chunk__47845 = G__47853;
count__47846 = G__47854;
i__47847 = G__47855;
continue;
} else {
var event = cljs.core.first.call(null,seq__47844__$1);
re_frame.router.dispatch.call(null,event);

var G__47856 = cljs.core.next.call(null,seq__47844__$1);
var G__47857 = null;
var G__47858 = (0);
var G__47859 = (0);
seq__47844 = G__47856;
chunk__47845 = G__47857;
count__47846 = G__47858;
i__47847 = G__47859;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__47860 = cljs.core.seq.call(null,value);
var chunk__47861 = null;
var count__47862 = (0);
var i__47863 = (0);
while(true){
if((i__47863 < count__47862)){
var event = cljs.core._nth.call(null,chunk__47861,i__47863);
clear_event.call(null,event);

var G__47864 = seq__47860;
var G__47865 = chunk__47861;
var G__47866 = count__47862;
var G__47867 = (i__47863 + (1));
seq__47860 = G__47864;
chunk__47861 = G__47865;
count__47862 = G__47866;
i__47863 = G__47867;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47860);
if(temp__4657__auto__){
var seq__47860__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47860__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__47860__$1);
var G__47868 = cljs.core.chunk_rest.call(null,seq__47860__$1);
var G__47869 = c__35281__auto__;
var G__47870 = cljs.core.count.call(null,c__35281__auto__);
var G__47871 = (0);
seq__47860 = G__47868;
chunk__47861 = G__47869;
count__47862 = G__47870;
i__47863 = G__47871;
continue;
} else {
var event = cljs.core.first.call(null,seq__47860__$1);
clear_event.call(null,event);

var G__47872 = cljs.core.next.call(null,seq__47860__$1);
var G__47873 = null;
var G__47874 = (0);
var G__47875 = (0);
seq__47860 = G__47872;
chunk__47861 = G__47873;
count__47862 = G__47874;
i__47863 = G__47875;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1521280397341
