// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__46823__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46823 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46824__i = 0, G__46824__a = new Array(arguments.length -  0);
while (G__46824__i < G__46824__a.length) {G__46824__a[G__46824__i] = arguments[G__46824__i + 0]; ++G__46824__i;}
  args = new cljs.core.IndexedSeq(G__46824__a,0,null);
} 
return G__46823__delegate.call(this,args);};
G__46823.cljs$lang$maxFixedArity = 0;
G__46823.cljs$lang$applyTo = (function (arglist__46825){
var args = cljs.core.seq(arglist__46825);
return G__46823__delegate(args);
});
G__46823.cljs$core$IFn$_invoke$arity$variadic = G__46823__delegate;
return G__46823;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__46826__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__46826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__46827__i = 0, G__46827__a = new Array(arguments.length -  0);
while (G__46827__i < G__46827__a.length) {G__46827__a[G__46827__i] = arguments[G__46827__i + 0]; ++G__46827__i;}
  args = new cljs.core.IndexedSeq(G__46827__a,0,null);
} 
return G__46826__delegate.call(this,args);};
G__46826.cljs$lang$maxFixedArity = 0;
G__46826.cljs$lang$applyTo = (function (arglist__46828){
var args = cljs.core.seq(arglist__46828);
return G__46826__delegate(args);
});
G__46826.cljs$core$IFn$_invoke$arity$variadic = G__46826__delegate;
return G__46826;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1521280394850
