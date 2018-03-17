// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__35067__auto__,writer__35068__auto__,opt__35069__auto__){
return cljs.core._write.call(null,writer__35068__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51770 = arguments.length;
var i__35612__auto___51771 = (0);
while(true){
if((i__35612__auto___51771 < len__35611__auto___51770)){
args__35618__auto__.push((arguments[i__35612__auto___51771]));

var G__51772 = (i__35612__auto___51771 + (1));
i__35612__auto___51771 = G__51772;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq51769){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51769));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51774 = arguments.length;
var i__35612__auto___51775 = (0);
while(true){
if((i__35612__auto___51775 < len__35611__auto___51774)){
args__35618__auto__.push((arguments[i__35612__auto___51775]));

var G__51776 = (i__35612__auto___51775 + (1));
i__35612__auto___51775 = G__51776;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq51773){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51773));
});

var g_QMARK__51777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_51778 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__51777){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__51777))
,null));
var mkg_51779 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__51777,g_51778){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__51777,g_51778))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__51777,g_51778,mkg_51779){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__51777).call(null,x);
});})(g_QMARK__51777,g_51778,mkg_51779))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__51777,g_51778,mkg_51779){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_51779).call(null,gfn);
});})(g_QMARK__51777,g_51778,mkg_51779))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__51777,g_51778,mkg_51779){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_51778).call(null,generator);
});})(g_QMARK__51777,g_51778,mkg_51779))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35704__auto___51799 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35704__auto___51799){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51800 = arguments.length;
var i__35612__auto___51801 = (0);
while(true){
if((i__35612__auto___51801 < len__35611__auto___51800)){
args__35618__auto__.push((arguments[i__35612__auto___51801]));

var G__51802 = (i__35612__auto___51801 + (1));
i__35612__auto___51801 = G__51802;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51799))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51799){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51799),args);
});})(g__35704__auto___51799))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35704__auto___51799){
return (function (seq51780){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51780));
});})(g__35704__auto___51799))
;


var g__35704__auto___51803 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35704__auto___51803){
return (function cljs$spec$gen$alpha$list(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51804 = arguments.length;
var i__35612__auto___51805 = (0);
while(true){
if((i__35612__auto___51805 < len__35611__auto___51804)){
args__35618__auto__.push((arguments[i__35612__auto___51805]));

var G__51806 = (i__35612__auto___51805 + (1));
i__35612__auto___51805 = G__51806;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51803))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51803){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51803),args);
});})(g__35704__auto___51803))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35704__auto___51803){
return (function (seq51781){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51781));
});})(g__35704__auto___51803))
;


var g__35704__auto___51807 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35704__auto___51807){
return (function cljs$spec$gen$alpha$map(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51808 = arguments.length;
var i__35612__auto___51809 = (0);
while(true){
if((i__35612__auto___51809 < len__35611__auto___51808)){
args__35618__auto__.push((arguments[i__35612__auto___51809]));

var G__51810 = (i__35612__auto___51809 + (1));
i__35612__auto___51809 = G__51810;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51807))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51807){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51807),args);
});})(g__35704__auto___51807))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35704__auto___51807){
return (function (seq51782){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51782));
});})(g__35704__auto___51807))
;


var g__35704__auto___51811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35704__auto___51811){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51812 = arguments.length;
var i__35612__auto___51813 = (0);
while(true){
if((i__35612__auto___51813 < len__35611__auto___51812)){
args__35618__auto__.push((arguments[i__35612__auto___51813]));

var G__51814 = (i__35612__auto___51813 + (1));
i__35612__auto___51813 = G__51814;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51811))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51811){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51811),args);
});})(g__35704__auto___51811))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35704__auto___51811){
return (function (seq51783){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51783));
});})(g__35704__auto___51811))
;


var g__35704__auto___51815 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35704__auto___51815){
return (function cljs$spec$gen$alpha$set(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51816 = arguments.length;
var i__35612__auto___51817 = (0);
while(true){
if((i__35612__auto___51817 < len__35611__auto___51816)){
args__35618__auto__.push((arguments[i__35612__auto___51817]));

var G__51818 = (i__35612__auto___51817 + (1));
i__35612__auto___51817 = G__51818;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51815))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51815){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51815),args);
});})(g__35704__auto___51815))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35704__auto___51815){
return (function (seq51784){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51784));
});})(g__35704__auto___51815))
;


var g__35704__auto___51819 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35704__auto___51819){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51820 = arguments.length;
var i__35612__auto___51821 = (0);
while(true){
if((i__35612__auto___51821 < len__35611__auto___51820)){
args__35618__auto__.push((arguments[i__35612__auto___51821]));

var G__51822 = (i__35612__auto___51821 + (1));
i__35612__auto___51821 = G__51822;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51819))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51819){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51819),args);
});})(g__35704__auto___51819))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35704__auto___51819){
return (function (seq51785){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51785));
});})(g__35704__auto___51819))
;


var g__35704__auto___51823 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35704__auto___51823){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51824 = arguments.length;
var i__35612__auto___51825 = (0);
while(true){
if((i__35612__auto___51825 < len__35611__auto___51824)){
args__35618__auto__.push((arguments[i__35612__auto___51825]));

var G__51826 = (i__35612__auto___51825 + (1));
i__35612__auto___51825 = G__51826;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51823))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51823){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51823),args);
});})(g__35704__auto___51823))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35704__auto___51823){
return (function (seq51786){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51786));
});})(g__35704__auto___51823))
;


var g__35704__auto___51827 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35704__auto___51827){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51828 = arguments.length;
var i__35612__auto___51829 = (0);
while(true){
if((i__35612__auto___51829 < len__35611__auto___51828)){
args__35618__auto__.push((arguments[i__35612__auto___51829]));

var G__51830 = (i__35612__auto___51829 + (1));
i__35612__auto___51829 = G__51830;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51827))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51827){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51827),args);
});})(g__35704__auto___51827))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35704__auto___51827){
return (function (seq51787){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51787));
});})(g__35704__auto___51827))
;


var g__35704__auto___51831 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35704__auto___51831){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51832 = arguments.length;
var i__35612__auto___51833 = (0);
while(true){
if((i__35612__auto___51833 < len__35611__auto___51832)){
args__35618__auto__.push((arguments[i__35612__auto___51833]));

var G__51834 = (i__35612__auto___51833 + (1));
i__35612__auto___51833 = G__51834;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51831))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51831){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51831),args);
});})(g__35704__auto___51831))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35704__auto___51831){
return (function (seq51788){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51788));
});})(g__35704__auto___51831))
;


var g__35704__auto___51835 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35704__auto___51835){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51836 = arguments.length;
var i__35612__auto___51837 = (0);
while(true){
if((i__35612__auto___51837 < len__35611__auto___51836)){
args__35618__auto__.push((arguments[i__35612__auto___51837]));

var G__51838 = (i__35612__auto___51837 + (1));
i__35612__auto___51837 = G__51838;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51835))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51835){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51835),args);
});})(g__35704__auto___51835))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35704__auto___51835){
return (function (seq51789){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51789));
});})(g__35704__auto___51835))
;


var g__35704__auto___51839 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35704__auto___51839){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51840 = arguments.length;
var i__35612__auto___51841 = (0);
while(true){
if((i__35612__auto___51841 < len__35611__auto___51840)){
args__35618__auto__.push((arguments[i__35612__auto___51841]));

var G__51842 = (i__35612__auto___51841 + (1));
i__35612__auto___51841 = G__51842;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51839))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51839){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51839),args);
});})(g__35704__auto___51839))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35704__auto___51839){
return (function (seq51790){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51790));
});})(g__35704__auto___51839))
;


var g__35704__auto___51843 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35704__auto___51843){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51844 = arguments.length;
var i__35612__auto___51845 = (0);
while(true){
if((i__35612__auto___51845 < len__35611__auto___51844)){
args__35618__auto__.push((arguments[i__35612__auto___51845]));

var G__51846 = (i__35612__auto___51845 + (1));
i__35612__auto___51845 = G__51846;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51843))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51843){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51843),args);
});})(g__35704__auto___51843))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35704__auto___51843){
return (function (seq51791){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51791));
});})(g__35704__auto___51843))
;


var g__35704__auto___51847 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35704__auto___51847){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51848 = arguments.length;
var i__35612__auto___51849 = (0);
while(true){
if((i__35612__auto___51849 < len__35611__auto___51848)){
args__35618__auto__.push((arguments[i__35612__auto___51849]));

var G__51850 = (i__35612__auto___51849 + (1));
i__35612__auto___51849 = G__51850;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51847))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51847){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51847),args);
});})(g__35704__auto___51847))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35704__auto___51847){
return (function (seq51792){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51792));
});})(g__35704__auto___51847))
;


var g__35704__auto___51851 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35704__auto___51851){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51852 = arguments.length;
var i__35612__auto___51853 = (0);
while(true){
if((i__35612__auto___51853 < len__35611__auto___51852)){
args__35618__auto__.push((arguments[i__35612__auto___51853]));

var G__51854 = (i__35612__auto___51853 + (1));
i__35612__auto___51853 = G__51854;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51851))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51851){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51851),args);
});})(g__35704__auto___51851))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35704__auto___51851){
return (function (seq51793){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51793));
});})(g__35704__auto___51851))
;


var g__35704__auto___51855 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35704__auto___51855){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51856 = arguments.length;
var i__35612__auto___51857 = (0);
while(true){
if((i__35612__auto___51857 < len__35611__auto___51856)){
args__35618__auto__.push((arguments[i__35612__auto___51857]));

var G__51858 = (i__35612__auto___51857 + (1));
i__35612__auto___51857 = G__51858;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51855))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51855){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51855),args);
});})(g__35704__auto___51855))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35704__auto___51855){
return (function (seq51794){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51794));
});})(g__35704__auto___51855))
;


var g__35704__auto___51859 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35704__auto___51859){
return (function cljs$spec$gen$alpha$return(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51860 = arguments.length;
var i__35612__auto___51861 = (0);
while(true){
if((i__35612__auto___51861 < len__35611__auto___51860)){
args__35618__auto__.push((arguments[i__35612__auto___51861]));

var G__51862 = (i__35612__auto___51861 + (1));
i__35612__auto___51861 = G__51862;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51859))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51859){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51859),args);
});})(g__35704__auto___51859))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35704__auto___51859){
return (function (seq51795){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51795));
});})(g__35704__auto___51859))
;


var g__35704__auto___51863 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35704__auto___51863){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51864 = arguments.length;
var i__35612__auto___51865 = (0);
while(true){
if((i__35612__auto___51865 < len__35611__auto___51864)){
args__35618__auto__.push((arguments[i__35612__auto___51865]));

var G__51866 = (i__35612__auto___51865 + (1));
i__35612__auto___51865 = G__51866;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51863))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51863){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51863),args);
});})(g__35704__auto___51863))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35704__auto___51863){
return (function (seq51796){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51796));
});})(g__35704__auto___51863))
;


var g__35704__auto___51867 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35704__auto___51867){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51868 = arguments.length;
var i__35612__auto___51869 = (0);
while(true){
if((i__35612__auto___51869 < len__35611__auto___51868)){
args__35618__auto__.push((arguments[i__35612__auto___51869]));

var G__51870 = (i__35612__auto___51869 + (1));
i__35612__auto___51869 = G__51870;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51867))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51867){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51867),args);
});})(g__35704__auto___51867))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35704__auto___51867){
return (function (seq51797){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51797));
});})(g__35704__auto___51867))
;


var g__35704__auto___51871 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35704__auto___51871){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51872 = arguments.length;
var i__35612__auto___51873 = (0);
while(true){
if((i__35612__auto___51873 < len__35611__auto___51872)){
args__35618__auto__.push((arguments[i__35612__auto___51873]));

var G__51874 = (i__35612__auto___51873 + (1));
i__35612__auto___51873 = G__51874;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35704__auto___51871))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35704__auto___51871){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35704__auto___51871),args);
});})(g__35704__auto___51871))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35704__auto___51871){
return (function (seq51798){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51798));
});})(g__35704__auto___51871))
;

var g__35717__auto___51896 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35717__auto___51896){
return (function cljs$spec$gen$alpha$any(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51897 = arguments.length;
var i__35612__auto___51898 = (0);
while(true){
if((i__35612__auto___51898 < len__35611__auto___51897)){
args__35618__auto__.push((arguments[i__35612__auto___51898]));

var G__51899 = (i__35612__auto___51898 + (1));
i__35612__auto___51898 = G__51899;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51896))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51896){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51896);
});})(g__35717__auto___51896))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35717__auto___51896){
return (function (seq51875){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51875));
});})(g__35717__auto___51896))
;


var g__35717__auto___51900 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35717__auto___51900){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51901 = arguments.length;
var i__35612__auto___51902 = (0);
while(true){
if((i__35612__auto___51902 < len__35611__auto___51901)){
args__35618__auto__.push((arguments[i__35612__auto___51902]));

var G__51903 = (i__35612__auto___51902 + (1));
i__35612__auto___51902 = G__51903;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51900))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51900){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51900);
});})(g__35717__auto___51900))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35717__auto___51900){
return (function (seq51876){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51876));
});})(g__35717__auto___51900))
;


var g__35717__auto___51904 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35717__auto___51904){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51905 = arguments.length;
var i__35612__auto___51906 = (0);
while(true){
if((i__35612__auto___51906 < len__35611__auto___51905)){
args__35618__auto__.push((arguments[i__35612__auto___51906]));

var G__51907 = (i__35612__auto___51906 + (1));
i__35612__auto___51906 = G__51907;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51904))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51904){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51904);
});})(g__35717__auto___51904))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35717__auto___51904){
return (function (seq51877){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51877));
});})(g__35717__auto___51904))
;


var g__35717__auto___51908 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35717__auto___51908){
return (function cljs$spec$gen$alpha$char(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51909 = arguments.length;
var i__35612__auto___51910 = (0);
while(true){
if((i__35612__auto___51910 < len__35611__auto___51909)){
args__35618__auto__.push((arguments[i__35612__auto___51910]));

var G__51911 = (i__35612__auto___51910 + (1));
i__35612__auto___51910 = G__51911;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51908))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51908){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51908);
});})(g__35717__auto___51908))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35717__auto___51908){
return (function (seq51878){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51878));
});})(g__35717__auto___51908))
;


var g__35717__auto___51912 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35717__auto___51912){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51913 = arguments.length;
var i__35612__auto___51914 = (0);
while(true){
if((i__35612__auto___51914 < len__35611__auto___51913)){
args__35618__auto__.push((arguments[i__35612__auto___51914]));

var G__51915 = (i__35612__auto___51914 + (1));
i__35612__auto___51914 = G__51915;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51912))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51912){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51912);
});})(g__35717__auto___51912))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35717__auto___51912){
return (function (seq51879){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51879));
});})(g__35717__auto___51912))
;


var g__35717__auto___51916 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35717__auto___51916){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51917 = arguments.length;
var i__35612__auto___51918 = (0);
while(true){
if((i__35612__auto___51918 < len__35611__auto___51917)){
args__35618__auto__.push((arguments[i__35612__auto___51918]));

var G__51919 = (i__35612__auto___51918 + (1));
i__35612__auto___51918 = G__51919;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51916))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51916){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51916);
});})(g__35717__auto___51916))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35717__auto___51916){
return (function (seq51880){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51880));
});})(g__35717__auto___51916))
;


var g__35717__auto___51920 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35717__auto___51920){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51921 = arguments.length;
var i__35612__auto___51922 = (0);
while(true){
if((i__35612__auto___51922 < len__35611__auto___51921)){
args__35618__auto__.push((arguments[i__35612__auto___51922]));

var G__51923 = (i__35612__auto___51922 + (1));
i__35612__auto___51922 = G__51923;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51920))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51920){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51920);
});})(g__35717__auto___51920))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35717__auto___51920){
return (function (seq51881){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51881));
});})(g__35717__auto___51920))
;


var g__35717__auto___51924 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35717__auto___51924){
return (function cljs$spec$gen$alpha$double(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51925 = arguments.length;
var i__35612__auto___51926 = (0);
while(true){
if((i__35612__auto___51926 < len__35611__auto___51925)){
args__35618__auto__.push((arguments[i__35612__auto___51926]));

var G__51927 = (i__35612__auto___51926 + (1));
i__35612__auto___51926 = G__51927;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51924))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51924){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51924);
});})(g__35717__auto___51924))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35717__auto___51924){
return (function (seq51882){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51882));
});})(g__35717__auto___51924))
;


var g__35717__auto___51928 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35717__auto___51928){
return (function cljs$spec$gen$alpha$int(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51929 = arguments.length;
var i__35612__auto___51930 = (0);
while(true){
if((i__35612__auto___51930 < len__35611__auto___51929)){
args__35618__auto__.push((arguments[i__35612__auto___51930]));

var G__51931 = (i__35612__auto___51930 + (1));
i__35612__auto___51930 = G__51931;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51928))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51928){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51928);
});})(g__35717__auto___51928))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35717__auto___51928){
return (function (seq51883){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51883));
});})(g__35717__auto___51928))
;


var g__35717__auto___51932 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35717__auto___51932){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51933 = arguments.length;
var i__35612__auto___51934 = (0);
while(true){
if((i__35612__auto___51934 < len__35611__auto___51933)){
args__35618__auto__.push((arguments[i__35612__auto___51934]));

var G__51935 = (i__35612__auto___51934 + (1));
i__35612__auto___51934 = G__51935;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51932))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51932){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51932);
});})(g__35717__auto___51932))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35717__auto___51932){
return (function (seq51884){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51884));
});})(g__35717__auto___51932))
;


var g__35717__auto___51936 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35717__auto___51936){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51937 = arguments.length;
var i__35612__auto___51938 = (0);
while(true){
if((i__35612__auto___51938 < len__35611__auto___51937)){
args__35618__auto__.push((arguments[i__35612__auto___51938]));

var G__51939 = (i__35612__auto___51938 + (1));
i__35612__auto___51938 = G__51939;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51936))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51936){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51936);
});})(g__35717__auto___51936))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35717__auto___51936){
return (function (seq51885){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51885));
});})(g__35717__auto___51936))
;


var g__35717__auto___51940 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35717__auto___51940){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51941 = arguments.length;
var i__35612__auto___51942 = (0);
while(true){
if((i__35612__auto___51942 < len__35611__auto___51941)){
args__35618__auto__.push((arguments[i__35612__auto___51942]));

var G__51943 = (i__35612__auto___51942 + (1));
i__35612__auto___51942 = G__51943;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51940))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51940){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51940);
});})(g__35717__auto___51940))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35717__auto___51940){
return (function (seq51886){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51886));
});})(g__35717__auto___51940))
;


var g__35717__auto___51944 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35717__auto___51944){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51945 = arguments.length;
var i__35612__auto___51946 = (0);
while(true){
if((i__35612__auto___51946 < len__35611__auto___51945)){
args__35618__auto__.push((arguments[i__35612__auto___51946]));

var G__51947 = (i__35612__auto___51946 + (1));
i__35612__auto___51946 = G__51947;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51944))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51944){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51944);
});})(g__35717__auto___51944))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35717__auto___51944){
return (function (seq51887){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51887));
});})(g__35717__auto___51944))
;


var g__35717__auto___51948 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35717__auto___51948){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51949 = arguments.length;
var i__35612__auto___51950 = (0);
while(true){
if((i__35612__auto___51950 < len__35611__auto___51949)){
args__35618__auto__.push((arguments[i__35612__auto___51950]));

var G__51951 = (i__35612__auto___51950 + (1));
i__35612__auto___51950 = G__51951;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51948))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51948){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51948);
});})(g__35717__auto___51948))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35717__auto___51948){
return (function (seq51888){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51888));
});})(g__35717__auto___51948))
;


var g__35717__auto___51952 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35717__auto___51952){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51953 = arguments.length;
var i__35612__auto___51954 = (0);
while(true){
if((i__35612__auto___51954 < len__35611__auto___51953)){
args__35618__auto__.push((arguments[i__35612__auto___51954]));

var G__51955 = (i__35612__auto___51954 + (1));
i__35612__auto___51954 = G__51955;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51952))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51952){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51952);
});})(g__35717__auto___51952))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35717__auto___51952){
return (function (seq51889){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51889));
});})(g__35717__auto___51952))
;


var g__35717__auto___51956 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35717__auto___51956){
return (function cljs$spec$gen$alpha$string(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51957 = arguments.length;
var i__35612__auto___51958 = (0);
while(true){
if((i__35612__auto___51958 < len__35611__auto___51957)){
args__35618__auto__.push((arguments[i__35612__auto___51958]));

var G__51959 = (i__35612__auto___51958 + (1));
i__35612__auto___51958 = G__51959;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51956))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51956){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51956);
});})(g__35717__auto___51956))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35717__auto___51956){
return (function (seq51890){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51890));
});})(g__35717__auto___51956))
;


var g__35717__auto___51960 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35717__auto___51960){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51961 = arguments.length;
var i__35612__auto___51962 = (0);
while(true){
if((i__35612__auto___51962 < len__35611__auto___51961)){
args__35618__auto__.push((arguments[i__35612__auto___51962]));

var G__51963 = (i__35612__auto___51962 + (1));
i__35612__auto___51962 = G__51963;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51960))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51960){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51960);
});})(g__35717__auto___51960))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35717__auto___51960){
return (function (seq51891){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51891));
});})(g__35717__auto___51960))
;


var g__35717__auto___51964 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35717__auto___51964){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51965 = arguments.length;
var i__35612__auto___51966 = (0);
while(true){
if((i__35612__auto___51966 < len__35611__auto___51965)){
args__35618__auto__.push((arguments[i__35612__auto___51966]));

var G__51967 = (i__35612__auto___51966 + (1));
i__35612__auto___51966 = G__51967;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51964))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51964){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51964);
});})(g__35717__auto___51964))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35717__auto___51964){
return (function (seq51892){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51892));
});})(g__35717__auto___51964))
;


var g__35717__auto___51968 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35717__auto___51968){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51969 = arguments.length;
var i__35612__auto___51970 = (0);
while(true){
if((i__35612__auto___51970 < len__35611__auto___51969)){
args__35618__auto__.push((arguments[i__35612__auto___51970]));

var G__51971 = (i__35612__auto___51970 + (1));
i__35612__auto___51970 = G__51971;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51968))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51968){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51968);
});})(g__35717__auto___51968))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35717__auto___51968){
return (function (seq51893){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51893));
});})(g__35717__auto___51968))
;


var g__35717__auto___51972 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35717__auto___51972){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51973 = arguments.length;
var i__35612__auto___51974 = (0);
while(true){
if((i__35612__auto___51974 < len__35611__auto___51973)){
args__35618__auto__.push((arguments[i__35612__auto___51974]));

var G__51975 = (i__35612__auto___51974 + (1));
i__35612__auto___51974 = G__51975;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51972))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51972){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51972);
});})(g__35717__auto___51972))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35717__auto___51972){
return (function (seq51894){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51894));
});})(g__35717__auto___51972))
;


var g__35717__auto___51976 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35717__auto___51976){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51977 = arguments.length;
var i__35612__auto___51978 = (0);
while(true){
if((i__35612__auto___51978 < len__35611__auto___51977)){
args__35618__auto__.push((arguments[i__35612__auto___51978]));

var G__51979 = (i__35612__auto___51978 + (1));
i__35612__auto___51978 = G__51979;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});})(g__35717__auto___51976))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35717__auto___51976){
return (function (args){
return cljs.core.deref.call(null,g__35717__auto___51976);
});})(g__35717__auto___51976))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35717__auto___51976){
return (function (seq51895){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51895));
});})(g__35717__auto___51976))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__35618__auto__ = [];
var len__35611__auto___51982 = arguments.length;
var i__35612__auto___51983 = (0);
while(true){
if((i__35612__auto___51983 < len__35611__auto___51982)){
args__35618__auto__.push((arguments[i__35612__auto___51983]));

var G__51984 = (i__35612__auto___51983 + (1));
i__35612__auto___51983 = G__51984;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__51980_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__51980_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq51981){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq51981));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__51985_SHARP_){
return (new Date(p1__51985_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1521280401812
