// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('mmzsource.github.io.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__53337__delegate = function (x){
if(cljs.core.truth_(mmzsource.github.io.core.mount_root)){
return cljs.core.apply.call(null,mmzsource.github.io.core.mount_root,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mmzsource.github.io.core/mount-root' is missing");
}
};
var G__53337 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__53338__i = 0, G__53338__a = new Array(arguments.length -  0);
while (G__53338__i < G__53338__a.length) {G__53338__a[G__53338__i] = arguments[G__53338__i + 0]; ++G__53338__i;}
  x = new cljs.core.IndexedSeq(G__53338__a,0,null);
} 
return G__53337__delegate.call(this,x);};
G__53337.cljs$lang$maxFixedArity = 0;
G__53337.cljs$lang$applyTo = (function (arglist__53339){
var x = cljs.core.seq(arglist__53339);
return G__53337__delegate(x);
});
G__53337.cljs$core$IFn$_invoke$arity$variadic = G__53337__delegate;
return G__53337;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1521280403569
