// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.reporter');
goog.require('cljs.core');
goog.require('devtools.util');
devtools.reporter.issues_url = "https://github.com/binaryage/cljs-devtools/issues";
devtools.reporter.report_internal_error_BANG_ = (function devtools$reporter$report_internal_error_BANG_(var_args){
var args__35618__auto__ = [];
var len__35611__auto___55331 = arguments.length;
var i__35612__auto___55332 = (0);
while(true){
if((i__35612__auto___55332 < len__35611__auto___55331)){
args__35618__auto__.push((arguments[i__35612__auto___55332]));

var G__55333 = (i__35612__auto___55332 + (1));
i__35612__auto___55332 = G__55333;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((1) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((1)),(0),null)):null);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35619__auto__);
});

devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (e,p__55326){
var vec__55327 = p__55326;
var context = cljs.core.nth.call(null,vec__55327,(0),null);
var footer = cljs.core.nth.call(null,vec__55327,(1),null);
try{var message = (((e instanceof Error))?(function (){var or__34442__auto__ = e.message;
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return e;
}
})():e);
var header = ["%cCLJS DevTools Error%c%s","background-color:red;color:white;font-weight:bold;padding:0px 3px;border-radius:2px;","color:red",[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('')];
var context_msg = ["In ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.get_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(context)?[", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(context),"."].join(''):".")),"\n\n"].join('');
var footer_msg = ((!((footer == null)))?footer:["\n\n","---\n","Please report the issue here: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.reporter.issues_url)].join(''));
var details = [context_msg,e,footer_msg];
var c = console;
var group_collapsed = (c["groupCollapsed"]);
var log = (c["log"]);
var group_end = (c["groupEnd"]);
if(cljs.core.truth_(group_collapsed)){
} else {
throw (new Error("Assert failed: group-collapsed"));
}

if(cljs.core.truth_(log)){
} else {
throw (new Error("Assert failed: log"));
}

if(cljs.core.truth_(group_end)){
} else {
throw (new Error("Assert failed: group-end"));
}

group_collapsed.apply(c,header);

log.apply(c,details);

return group_end.call(c);
}catch (e55330){var e__$1 = e55330;
return console.error("FATAL: report-internal-error! failed",e__$1);
}});

devtools.reporter.report_internal_error_BANG_.cljs$lang$maxFixedArity = (1);

devtools.reporter.report_internal_error_BANG_.cljs$lang$applyTo = (function (seq55324){
var G__55325 = cljs.core.first.call(null,seq55324);
var seq55324__$1 = cljs.core.next.call(null,seq55324);
return devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__55325,seq55324__$1);
});


//# sourceMappingURL=reporter.js.map?rel=1521280406832
