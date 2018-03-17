// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e52853){if((e52853 instanceof Error)){
var e = e52853;
return "Error: Unable to stringify";
} else {
throw e52853;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__52856 = arguments.length;
switch (G__52856) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__52854_SHARP_){
if(typeof p1__52854_SHARP_ === 'string'){
return p1__52854_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__52854_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__35618__auto__ = [];
var len__35611__auto___52859 = arguments.length;
var i__35612__auto___52860 = (0);
while(true){
if((i__35612__auto___52860 < len__35611__auto___52859)){
args__35618__auto__.push((arguments[i__35612__auto___52860]));

var G__52861 = (i__35612__auto___52860 + (1));
i__35612__auto___52860 = G__52861;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq52858){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52858));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__35618__auto__ = [];
var len__35611__auto___52863 = arguments.length;
var i__35612__auto___52864 = (0);
while(true){
if((i__35612__auto___52864 < len__35611__auto___52863)){
args__35618__auto__.push((arguments[i__35612__auto___52864]));

var G__52865 = (i__35612__auto___52864 + (1));
i__35612__auto___52864 = G__52865;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq52862){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52862));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__52866){
var map__52867 = p__52866;
var map__52867__$1 = ((((!((map__52867 == null)))?((((map__52867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52867):map__52867);
var message = cljs.core.get.call(null,map__52867__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__52867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34442__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34430__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34430__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34430__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38562__auto___52946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___52946,ch){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___52946,ch){
return (function (state_52918){
var state_val_52919 = (state_52918[(1)]);
if((state_val_52919 === (7))){
var inst_52914 = (state_52918[(2)]);
var state_52918__$1 = state_52918;
var statearr_52920_52947 = state_52918__$1;
(statearr_52920_52947[(2)] = inst_52914);

(statearr_52920_52947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (1))){
var state_52918__$1 = state_52918;
var statearr_52921_52948 = state_52918__$1;
(statearr_52921_52948[(2)] = null);

(statearr_52921_52948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (4))){
var inst_52871 = (state_52918[(7)]);
var inst_52871__$1 = (state_52918[(2)]);
var state_52918__$1 = (function (){var statearr_52922 = state_52918;
(statearr_52922[(7)] = inst_52871__$1);

return statearr_52922;
})();
if(cljs.core.truth_(inst_52871__$1)){
var statearr_52923_52949 = state_52918__$1;
(statearr_52923_52949[(1)] = (5));

} else {
var statearr_52924_52950 = state_52918__$1;
(statearr_52924_52950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (15))){
var inst_52878 = (state_52918[(8)]);
var inst_52893 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52878);
var inst_52894 = cljs.core.first.call(null,inst_52893);
var inst_52895 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_52894);
var inst_52896 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52895)].join('');
var inst_52897 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_52896);
var state_52918__$1 = state_52918;
var statearr_52925_52951 = state_52918__$1;
(statearr_52925_52951[(2)] = inst_52897);

(statearr_52925_52951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (13))){
var inst_52902 = (state_52918[(2)]);
var state_52918__$1 = state_52918;
var statearr_52926_52952 = state_52918__$1;
(statearr_52926_52952[(2)] = inst_52902);

(statearr_52926_52952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (6))){
var state_52918__$1 = state_52918;
var statearr_52927_52953 = state_52918__$1;
(statearr_52927_52953[(2)] = null);

(statearr_52927_52953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (17))){
var inst_52900 = (state_52918[(2)]);
var state_52918__$1 = state_52918;
var statearr_52928_52954 = state_52918__$1;
(statearr_52928_52954[(2)] = inst_52900);

(statearr_52928_52954[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (3))){
var inst_52916 = (state_52918[(2)]);
var state_52918__$1 = state_52918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52918__$1,inst_52916);
} else {
if((state_val_52919 === (12))){
var inst_52877 = (state_52918[(9)]);
var inst_52891 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_52877,opts);
var state_52918__$1 = state_52918;
if(cljs.core.truth_(inst_52891)){
var statearr_52929_52955 = state_52918__$1;
(statearr_52929_52955[(1)] = (15));

} else {
var statearr_52930_52956 = state_52918__$1;
(statearr_52930_52956[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (2))){
var state_52918__$1 = state_52918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52918__$1,(4),ch);
} else {
if((state_val_52919 === (11))){
var inst_52878 = (state_52918[(8)]);
var inst_52883 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52884 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_52878);
var inst_52885 = cljs.core.async.timeout.call(null,(1000));
var inst_52886 = [inst_52884,inst_52885];
var inst_52887 = (new cljs.core.PersistentVector(null,2,(5),inst_52883,inst_52886,null));
var state_52918__$1 = state_52918;
return cljs.core.async.ioc_alts_BANG_.call(null,state_52918__$1,(14),inst_52887);
} else {
if((state_val_52919 === (9))){
var inst_52878 = (state_52918[(8)]);
var inst_52904 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_52905 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_52878);
var inst_52906 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_52905);
var inst_52907 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52906)].join('');
var inst_52908 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_52907);
var state_52918__$1 = (function (){var statearr_52931 = state_52918;
(statearr_52931[(10)] = inst_52904);

return statearr_52931;
})();
var statearr_52932_52957 = state_52918__$1;
(statearr_52932_52957[(2)] = inst_52908);

(statearr_52932_52957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (5))){
var inst_52871 = (state_52918[(7)]);
var inst_52873 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_52874 = (new cljs.core.PersistentArrayMap(null,2,inst_52873,null));
var inst_52875 = (new cljs.core.PersistentHashSet(null,inst_52874,null));
var inst_52876 = figwheel.client.focus_msgs.call(null,inst_52875,inst_52871);
var inst_52877 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_52876);
var inst_52878 = cljs.core.first.call(null,inst_52876);
var inst_52879 = figwheel.client.autoload_QMARK_.call(null);
var state_52918__$1 = (function (){var statearr_52933 = state_52918;
(statearr_52933[(8)] = inst_52878);

(statearr_52933[(9)] = inst_52877);

return statearr_52933;
})();
if(cljs.core.truth_(inst_52879)){
var statearr_52934_52958 = state_52918__$1;
(statearr_52934_52958[(1)] = (8));

} else {
var statearr_52935_52959 = state_52918__$1;
(statearr_52935_52959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (14))){
var inst_52889 = (state_52918[(2)]);
var state_52918__$1 = state_52918;
var statearr_52936_52960 = state_52918__$1;
(statearr_52936_52960[(2)] = inst_52889);

(statearr_52936_52960[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (16))){
var state_52918__$1 = state_52918;
var statearr_52937_52961 = state_52918__$1;
(statearr_52937_52961[(2)] = null);

(statearr_52937_52961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (10))){
var inst_52910 = (state_52918[(2)]);
var state_52918__$1 = (function (){var statearr_52938 = state_52918;
(statearr_52938[(11)] = inst_52910);

return statearr_52938;
})();
var statearr_52939_52962 = state_52918__$1;
(statearr_52939_52962[(2)] = null);

(statearr_52939_52962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52919 === (8))){
var inst_52877 = (state_52918[(9)]);
var inst_52881 = figwheel.client.reload_file_state_QMARK_.call(null,inst_52877,opts);
var state_52918__$1 = state_52918;
if(cljs.core.truth_(inst_52881)){
var statearr_52940_52963 = state_52918__$1;
(statearr_52940_52963[(1)] = (11));

} else {
var statearr_52941_52964 = state_52918__$1;
(statearr_52941_52964[(1)] = (12));

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
});})(c__38562__auto___52946,ch))
;
return ((function (switch__38474__auto__,c__38562__auto___52946,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38475__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38475__auto____0 = (function (){
var statearr_52942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52942[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38475__auto__);

(statearr_52942[(1)] = (1));

return statearr_52942;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38475__auto____1 = (function (state_52918){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_52918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e52943){if((e52943 instanceof Object)){
var ex__38478__auto__ = e52943;
var statearr_52944_52965 = state_52918;
(statearr_52944_52965[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e52943;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52966 = state_52918;
state_52918 = G__52966;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38475__auto__ = function(state_52918){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38475__auto____1.call(this,state_52918);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38475__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38475__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___52946,ch))
})();
var state__38564__auto__ = (function (){var statearr_52945 = f__38563__auto__.call(null);
(statearr_52945[(6)] = c__38562__auto___52946);

return statearr_52945;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___52946,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__52967_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__52967_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_52969 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_52969){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e52968){if((e52968 instanceof Error)){
var e = e52968;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_52969], null));
} else {
var e = e52968;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_52969))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__52970){
var map__52971 = p__52970;
var map__52971__$1 = ((((!((map__52971 == null)))?((((map__52971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52971):map__52971);
var opts = map__52971__$1;
var build_id = cljs.core.get.call(null,map__52971__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__52971,map__52971__$1,opts,build_id){
return (function (p__52973){
var vec__52974 = p__52973;
var seq__52975 = cljs.core.seq.call(null,vec__52974);
var first__52976 = cljs.core.first.call(null,seq__52975);
var seq__52975__$1 = cljs.core.next.call(null,seq__52975);
var map__52977 = first__52976;
var map__52977__$1 = ((((!((map__52977 == null)))?((((map__52977.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52977.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52977):map__52977);
var msg = map__52977__$1;
var msg_name = cljs.core.get.call(null,map__52977__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52975__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__52974,seq__52975,first__52976,seq__52975__$1,map__52977,map__52977__$1,msg,msg_name,_,map__52971,map__52971__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__52974,seq__52975,first__52976,seq__52975__$1,map__52977,map__52977__$1,msg,msg_name,_,map__52971,map__52971__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__52971,map__52971__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__52979){
var vec__52980 = p__52979;
var seq__52981 = cljs.core.seq.call(null,vec__52980);
var first__52982 = cljs.core.first.call(null,seq__52981);
var seq__52981__$1 = cljs.core.next.call(null,seq__52981);
var map__52983 = first__52982;
var map__52983__$1 = ((((!((map__52983 == null)))?((((map__52983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52983.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52983):map__52983);
var msg = map__52983__$1;
var msg_name = cljs.core.get.call(null,map__52983__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52981__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__52985){
var map__52986 = p__52985;
var map__52986__$1 = ((((!((map__52986 == null)))?((((map__52986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52986.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52986):map__52986);
var on_compile_warning = cljs.core.get.call(null,map__52986__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__52986__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__52986,map__52986__$1,on_compile_warning,on_compile_fail){
return (function (p__52988){
var vec__52989 = p__52988;
var seq__52990 = cljs.core.seq.call(null,vec__52989);
var first__52991 = cljs.core.first.call(null,seq__52990);
var seq__52990__$1 = cljs.core.next.call(null,seq__52990);
var map__52992 = first__52991;
var map__52992__$1 = ((((!((map__52992 == null)))?((((map__52992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52992.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52992):map__52992);
var msg = map__52992__$1;
var msg_name = cljs.core.get.call(null,map__52992__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__52990__$1;
var pred__52994 = cljs.core._EQ_;
var expr__52995 = msg_name;
if(cljs.core.truth_(pred__52994.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__52995))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__52994.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__52995))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__52986,map__52986__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__,msg_hist,msg_names,msg){
return (function (state_53084){
var state_val_53085 = (state_53084[(1)]);
if((state_val_53085 === (7))){
var inst_53004 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53004)){
var statearr_53086_53133 = state_53084__$1;
(statearr_53086_53133[(1)] = (8));

} else {
var statearr_53087_53134 = state_53084__$1;
(statearr_53087_53134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (20))){
var inst_53078 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53088_53135 = state_53084__$1;
(statearr_53088_53135[(2)] = inst_53078);

(statearr_53088_53135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (27))){
var inst_53074 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53089_53136 = state_53084__$1;
(statearr_53089_53136[(2)] = inst_53074);

(statearr_53089_53136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (1))){
var inst_52997 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_52997)){
var statearr_53090_53137 = state_53084__$1;
(statearr_53090_53137[(1)] = (2));

} else {
var statearr_53091_53138 = state_53084__$1;
(statearr_53091_53138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (24))){
var inst_53076 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53092_53139 = state_53084__$1;
(statearr_53092_53139[(2)] = inst_53076);

(statearr_53092_53139[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (4))){
var inst_53082 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53084__$1,inst_53082);
} else {
if((state_val_53085 === (15))){
var inst_53080 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53093_53140 = state_53084__$1;
(statearr_53093_53140[(2)] = inst_53080);

(statearr_53093_53140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (21))){
var inst_53033 = (state_53084[(2)]);
var inst_53034 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53035 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53034);
var state_53084__$1 = (function (){var statearr_53094 = state_53084;
(statearr_53094[(7)] = inst_53033);

return statearr_53094;
})();
var statearr_53095_53141 = state_53084__$1;
(statearr_53095_53141[(2)] = inst_53035);

(statearr_53095_53141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (31))){
var inst_53063 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53063)){
var statearr_53096_53142 = state_53084__$1;
(statearr_53096_53142[(1)] = (34));

} else {
var statearr_53097_53143 = state_53084__$1;
(statearr_53097_53143[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (32))){
var inst_53072 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53098_53144 = state_53084__$1;
(statearr_53098_53144[(2)] = inst_53072);

(statearr_53098_53144[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (33))){
var inst_53059 = (state_53084[(2)]);
var inst_53060 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53061 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53060);
var state_53084__$1 = (function (){var statearr_53099 = state_53084;
(statearr_53099[(8)] = inst_53059);

return statearr_53099;
})();
var statearr_53100_53145 = state_53084__$1;
(statearr_53100_53145[(2)] = inst_53061);

(statearr_53100_53145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (13))){
var inst_53018 = figwheel.client.heads_up.clear.call(null);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(16),inst_53018);
} else {
if((state_val_53085 === (22))){
var inst_53039 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53040 = figwheel.client.heads_up.append_warning_message.call(null,inst_53039);
var state_53084__$1 = state_53084;
var statearr_53101_53146 = state_53084__$1;
(statearr_53101_53146[(2)] = inst_53040);

(statearr_53101_53146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (36))){
var inst_53070 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53102_53147 = state_53084__$1;
(statearr_53102_53147[(2)] = inst_53070);

(statearr_53102_53147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (29))){
var inst_53050 = (state_53084[(2)]);
var inst_53051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53052 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53051);
var state_53084__$1 = (function (){var statearr_53103 = state_53084;
(statearr_53103[(9)] = inst_53050);

return statearr_53103;
})();
var statearr_53104_53148 = state_53084__$1;
(statearr_53104_53148[(2)] = inst_53052);

(statearr_53104_53148[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (6))){
var inst_52999 = (state_53084[(10)]);
var state_53084__$1 = state_53084;
var statearr_53105_53149 = state_53084__$1;
(statearr_53105_53149[(2)] = inst_52999);

(statearr_53105_53149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (28))){
var inst_53046 = (state_53084[(2)]);
var inst_53047 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53048 = figwheel.client.heads_up.display_warning.call(null,inst_53047);
var state_53084__$1 = (function (){var statearr_53106 = state_53084;
(statearr_53106[(11)] = inst_53046);

return statearr_53106;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(29),inst_53048);
} else {
if((state_val_53085 === (25))){
var inst_53044 = figwheel.client.heads_up.clear.call(null);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(28),inst_53044);
} else {
if((state_val_53085 === (34))){
var inst_53065 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(37),inst_53065);
} else {
if((state_val_53085 === (17))){
var inst_53024 = (state_53084[(2)]);
var inst_53025 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53026 = figwheel.client.auto_jump_to_error.call(null,opts,inst_53025);
var state_53084__$1 = (function (){var statearr_53107 = state_53084;
(statearr_53107[(12)] = inst_53024);

return statearr_53107;
})();
var statearr_53108_53150 = state_53084__$1;
(statearr_53108_53150[(2)] = inst_53026);

(statearr_53108_53150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (3))){
var inst_53016 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53016)){
var statearr_53109_53151 = state_53084__$1;
(statearr_53109_53151[(1)] = (13));

} else {
var statearr_53110_53152 = state_53084__$1;
(statearr_53110_53152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (12))){
var inst_53012 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53111_53153 = state_53084__$1;
(statearr_53111_53153[(2)] = inst_53012);

(statearr_53111_53153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (2))){
var inst_52999 = (state_53084[(10)]);
var inst_52999__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_53084__$1 = (function (){var statearr_53112 = state_53084;
(statearr_53112[(10)] = inst_52999__$1);

return statearr_53112;
})();
if(cljs.core.truth_(inst_52999__$1)){
var statearr_53113_53154 = state_53084__$1;
(statearr_53113_53154[(1)] = (5));

} else {
var statearr_53114_53155 = state_53084__$1;
(statearr_53114_53155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (23))){
var inst_53042 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53042)){
var statearr_53115_53156 = state_53084__$1;
(statearr_53115_53156[(1)] = (25));

} else {
var statearr_53116_53157 = state_53084__$1;
(statearr_53116_53157[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (35))){
var state_53084__$1 = state_53084;
var statearr_53117_53158 = state_53084__$1;
(statearr_53117_53158[(2)] = null);

(statearr_53117_53158[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (19))){
var inst_53037 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53037)){
var statearr_53118_53159 = state_53084__$1;
(statearr_53118_53159[(1)] = (22));

} else {
var statearr_53119_53160 = state_53084__$1;
(statearr_53119_53160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (11))){
var inst_53008 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53120_53161 = state_53084__$1;
(statearr_53120_53161[(2)] = inst_53008);

(statearr_53120_53161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (9))){
var inst_53010 = figwheel.client.heads_up.clear.call(null);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(12),inst_53010);
} else {
if((state_val_53085 === (5))){
var inst_53001 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_53084__$1 = state_53084;
var statearr_53121_53162 = state_53084__$1;
(statearr_53121_53162[(2)] = inst_53001);

(statearr_53121_53162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (14))){
var inst_53028 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53028)){
var statearr_53122_53163 = state_53084__$1;
(statearr_53122_53163[(1)] = (18));

} else {
var statearr_53123_53164 = state_53084__$1;
(statearr_53123_53164[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (26))){
var inst_53054 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_53084__$1 = state_53084;
if(cljs.core.truth_(inst_53054)){
var statearr_53124_53165 = state_53084__$1;
(statearr_53124_53165[(1)] = (30));

} else {
var statearr_53125_53166 = state_53084__$1;
(statearr_53125_53166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (16))){
var inst_53020 = (state_53084[(2)]);
var inst_53021 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53022 = figwheel.client.heads_up.display_exception.call(null,inst_53021);
var state_53084__$1 = (function (){var statearr_53126 = state_53084;
(statearr_53126[(13)] = inst_53020);

return statearr_53126;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(17),inst_53022);
} else {
if((state_val_53085 === (30))){
var inst_53056 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53057 = figwheel.client.heads_up.display_warning.call(null,inst_53056);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(33),inst_53057);
} else {
if((state_val_53085 === (10))){
var inst_53014 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53127_53167 = state_53084__$1;
(statearr_53127_53167[(2)] = inst_53014);

(statearr_53127_53167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (18))){
var inst_53030 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_53031 = figwheel.client.heads_up.display_exception.call(null,inst_53030);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(21),inst_53031);
} else {
if((state_val_53085 === (37))){
var inst_53067 = (state_53084[(2)]);
var state_53084__$1 = state_53084;
var statearr_53128_53168 = state_53084__$1;
(statearr_53128_53168[(2)] = inst_53067);

(statearr_53128_53168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53085 === (8))){
var inst_53006 = figwheel.client.heads_up.flash_loaded.call(null);
var state_53084__$1 = state_53084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53084__$1,(11),inst_53006);
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
});})(c__38562__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38474__auto__,c__38562__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto____0 = (function (){
var statearr_53129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53129[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto__);

(statearr_53129[(1)] = (1));

return statearr_53129;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto____1 = (function (state_53084){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_53084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e53130){if((e53130 instanceof Object)){
var ex__38478__auto__ = e53130;
var statearr_53131_53169 = state_53084;
(statearr_53131_53169[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53170 = state_53084;
state_53084 = G__53170;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto__ = function(state_53084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto____1.call(this,state_53084);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__,msg_hist,msg_names,msg))
})();
var state__38564__auto__ = (function (){var statearr_53132 = f__38563__auto__.call(null);
(statearr_53132[(6)] = c__38562__auto__);

return statearr_53132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__,msg_hist,msg_names,msg))
);

return c__38562__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38562__auto___53199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___53199,ch){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___53199,ch){
return (function (state_53185){
var state_val_53186 = (state_53185[(1)]);
if((state_val_53186 === (1))){
var state_53185__$1 = state_53185;
var statearr_53187_53200 = state_53185__$1;
(statearr_53187_53200[(2)] = null);

(statearr_53187_53200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53186 === (2))){
var state_53185__$1 = state_53185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53185__$1,(4),ch);
} else {
if((state_val_53186 === (3))){
var inst_53183 = (state_53185[(2)]);
var state_53185__$1 = state_53185;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53185__$1,inst_53183);
} else {
if((state_val_53186 === (4))){
var inst_53173 = (state_53185[(7)]);
var inst_53173__$1 = (state_53185[(2)]);
var state_53185__$1 = (function (){var statearr_53188 = state_53185;
(statearr_53188[(7)] = inst_53173__$1);

return statearr_53188;
})();
if(cljs.core.truth_(inst_53173__$1)){
var statearr_53189_53201 = state_53185__$1;
(statearr_53189_53201[(1)] = (5));

} else {
var statearr_53190_53202 = state_53185__$1;
(statearr_53190_53202[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53186 === (5))){
var inst_53173 = (state_53185[(7)]);
var inst_53175 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_53173);
var state_53185__$1 = state_53185;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53185__$1,(8),inst_53175);
} else {
if((state_val_53186 === (6))){
var state_53185__$1 = state_53185;
var statearr_53191_53203 = state_53185__$1;
(statearr_53191_53203[(2)] = null);

(statearr_53191_53203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53186 === (7))){
var inst_53181 = (state_53185[(2)]);
var state_53185__$1 = state_53185;
var statearr_53192_53204 = state_53185__$1;
(statearr_53192_53204[(2)] = inst_53181);

(statearr_53192_53204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53186 === (8))){
var inst_53177 = (state_53185[(2)]);
var state_53185__$1 = (function (){var statearr_53193 = state_53185;
(statearr_53193[(8)] = inst_53177);

return statearr_53193;
})();
var statearr_53194_53205 = state_53185__$1;
(statearr_53194_53205[(2)] = null);

(statearr_53194_53205[(1)] = (2));


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
});})(c__38562__auto___53199,ch))
;
return ((function (switch__38474__auto__,c__38562__auto___53199,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38475__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38475__auto____0 = (function (){
var statearr_53195 = [null,null,null,null,null,null,null,null,null];
(statearr_53195[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38475__auto__);

(statearr_53195[(1)] = (1));

return statearr_53195;
});
var figwheel$client$heads_up_plugin_$_state_machine__38475__auto____1 = (function (state_53185){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_53185);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e53196){if((e53196 instanceof Object)){
var ex__38478__auto__ = e53196;
var statearr_53197_53206 = state_53185;
(statearr_53197_53206[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53185);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53207 = state_53185;
state_53185 = G__53207;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38475__auto__ = function(state_53185){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38475__auto____1.call(this,state_53185);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38475__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38475__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___53199,ch))
})();
var state__38564__auto__ = (function (){var statearr_53198 = f__38563__auto__.call(null);
(statearr_53198[(6)] = c__38562__auto___53199);

return statearr_53198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___53199,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__){
return (function (state_53213){
var state_val_53214 = (state_53213[(1)]);
if((state_val_53214 === (1))){
var inst_53208 = cljs.core.async.timeout.call(null,(3000));
var state_53213__$1 = state_53213;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53213__$1,(2),inst_53208);
} else {
if((state_val_53214 === (2))){
var inst_53210 = (state_53213[(2)]);
var inst_53211 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_53213__$1 = (function (){var statearr_53215 = state_53213;
(statearr_53215[(7)] = inst_53210);

return statearr_53215;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53213__$1,inst_53211);
} else {
return null;
}
}
});})(c__38562__auto__))
;
return ((function (switch__38474__auto__,c__38562__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38475__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38475__auto____0 = (function (){
var statearr_53216 = [null,null,null,null,null,null,null,null];
(statearr_53216[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38475__auto__);

(statearr_53216[(1)] = (1));

return statearr_53216;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38475__auto____1 = (function (state_53213){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_53213);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e53217){if((e53217 instanceof Object)){
var ex__38478__auto__ = e53217;
var statearr_53218_53220 = state_53213;
(statearr_53218_53220[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53213);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53221 = state_53213;
state_53213 = G__53221;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38475__auto__ = function(state_53213){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38475__auto____1.call(this,state_53213);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38475__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38475__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__))
})();
var state__38564__auto__ = (function (){var statearr_53219 = f__38563__auto__.call(null);
(statearr_53219[(6)] = c__38562__auto__);

return statearr_53219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__))
);

return c__38562__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__,figwheel_version,temp__4657__auto__){
return (function (state_53228){
var state_val_53229 = (state_53228[(1)]);
if((state_val_53229 === (1))){
var inst_53222 = cljs.core.async.timeout.call(null,(2000));
var state_53228__$1 = state_53228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53228__$1,(2),inst_53222);
} else {
if((state_val_53229 === (2))){
var inst_53224 = (state_53228[(2)]);
var inst_53225 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_53226 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_53225);
var state_53228__$1 = (function (){var statearr_53230 = state_53228;
(statearr_53230[(7)] = inst_53224);

return statearr_53230;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53228__$1,inst_53226);
} else {
return null;
}
}
});})(c__38562__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__38474__auto__,c__38562__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto____0 = (function (){
var statearr_53231 = [null,null,null,null,null,null,null,null];
(statearr_53231[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto__);

(statearr_53231[(1)] = (1));

return statearr_53231;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto____1 = (function (state_53228){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_53228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e53232){if((e53232 instanceof Object)){
var ex__38478__auto__ = e53232;
var statearr_53233_53235 = state_53228;
(statearr_53233_53235[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53236 = state_53228;
state_53228 = G__53236;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto__ = function(state_53228){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto____1.call(this,state_53228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__,figwheel_version,temp__4657__auto__))
})();
var state__38564__auto__ = (function (){var statearr_53234 = f__38563__auto__.call(null);
(statearr_53234[(6)] = c__38562__auto__);

return statearr_53234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__,figwheel_version,temp__4657__auto__))
);

return c__38562__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__53237){
var map__53238 = p__53237;
var map__53238__$1 = ((((!((map__53238 == null)))?((((map__53238.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53238.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53238):map__53238);
var file = cljs.core.get.call(null,map__53238__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__53238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__53238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__53240 = "";
var G__53240__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53240),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__53240);
var G__53240__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53240__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__53240__$1);
if(cljs.core.truth_((function (){var and__34430__auto__ = line;
if(cljs.core.truth_(and__34430__auto__)){
return column;
} else {
return and__34430__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53240__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__53240__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__53241){
var map__53242 = p__53241;
var map__53242__$1 = ((((!((map__53242 == null)))?((((map__53242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53242.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53242):map__53242);
var ed = map__53242__$1;
var formatted_exception = cljs.core.get.call(null,map__53242__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__53242__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__53242__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__53244_53248 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__53245_53249 = null;
var count__53246_53250 = (0);
var i__53247_53251 = (0);
while(true){
if((i__53247_53251 < count__53246_53250)){
var msg_53252 = cljs.core._nth.call(null,chunk__53245_53249,i__53247_53251);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53252);

var G__53253 = seq__53244_53248;
var G__53254 = chunk__53245_53249;
var G__53255 = count__53246_53250;
var G__53256 = (i__53247_53251 + (1));
seq__53244_53248 = G__53253;
chunk__53245_53249 = G__53254;
count__53246_53250 = G__53255;
i__53247_53251 = G__53256;
continue;
} else {
var temp__4657__auto___53257 = cljs.core.seq.call(null,seq__53244_53248);
if(temp__4657__auto___53257){
var seq__53244_53258__$1 = temp__4657__auto___53257;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53244_53258__$1)){
var c__35281__auto___53259 = cljs.core.chunk_first.call(null,seq__53244_53258__$1);
var G__53260 = cljs.core.chunk_rest.call(null,seq__53244_53258__$1);
var G__53261 = c__35281__auto___53259;
var G__53262 = cljs.core.count.call(null,c__35281__auto___53259);
var G__53263 = (0);
seq__53244_53248 = G__53260;
chunk__53245_53249 = G__53261;
count__53246_53250 = G__53262;
i__53247_53251 = G__53263;
continue;
} else {
var msg_53264 = cljs.core.first.call(null,seq__53244_53258__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_53264);

var G__53265 = cljs.core.next.call(null,seq__53244_53258__$1);
var G__53266 = null;
var G__53267 = (0);
var G__53268 = (0);
seq__53244_53248 = G__53265;
chunk__53245_53249 = G__53266;
count__53246_53250 = G__53267;
i__53247_53251 = G__53268;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__53269){
var map__53270 = p__53269;
var map__53270__$1 = ((((!((map__53270 == null)))?((((map__53270.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53270.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53270):map__53270);
var w = map__53270__$1;
var message = cljs.core.get.call(null,map__53270__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__34430__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34430__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34430__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__53272 = cljs.core.seq.call(null,plugins);
var chunk__53273 = null;
var count__53274 = (0);
var i__53275 = (0);
while(true){
if((i__53275 < count__53274)){
var vec__53276 = cljs.core._nth.call(null,chunk__53273,i__53275);
var k = cljs.core.nth.call(null,vec__53276,(0),null);
var plugin = cljs.core.nth.call(null,vec__53276,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53282 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53272,chunk__53273,count__53274,i__53275,pl_53282,vec__53276,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_53282.call(null,msg_hist);
});})(seq__53272,chunk__53273,count__53274,i__53275,pl_53282,vec__53276,k,plugin))
);
} else {
}

var G__53283 = seq__53272;
var G__53284 = chunk__53273;
var G__53285 = count__53274;
var G__53286 = (i__53275 + (1));
seq__53272 = G__53283;
chunk__53273 = G__53284;
count__53274 = G__53285;
i__53275 = G__53286;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__53272);
if(temp__4657__auto__){
var seq__53272__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53272__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__53272__$1);
var G__53287 = cljs.core.chunk_rest.call(null,seq__53272__$1);
var G__53288 = c__35281__auto__;
var G__53289 = cljs.core.count.call(null,c__35281__auto__);
var G__53290 = (0);
seq__53272 = G__53287;
chunk__53273 = G__53288;
count__53274 = G__53289;
i__53275 = G__53290;
continue;
} else {
var vec__53279 = cljs.core.first.call(null,seq__53272__$1);
var k = cljs.core.nth.call(null,vec__53279,(0),null);
var plugin = cljs.core.nth.call(null,vec__53279,(1),null);
if(cljs.core.truth_(plugin)){
var pl_53291 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__53272,chunk__53273,count__53274,i__53275,pl_53291,vec__53279,k,plugin,seq__53272__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_53291.call(null,msg_hist);
});})(seq__53272,chunk__53273,count__53274,i__53275,pl_53291,vec__53279,k,plugin,seq__53272__$1,temp__4657__auto__))
);
} else {
}

var G__53292 = cljs.core.next.call(null,seq__53272__$1);
var G__53293 = null;
var G__53294 = (0);
var G__53295 = (0);
seq__53272 = G__53292;
chunk__53273 = G__53293;
count__53274 = G__53294;
i__53275 = G__53295;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__53297 = arguments.length;
switch (G__53297) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__53298_53303 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__53299_53304 = null;
var count__53300_53305 = (0);
var i__53301_53306 = (0);
while(true){
if((i__53301_53306 < count__53300_53305)){
var msg_53307 = cljs.core._nth.call(null,chunk__53299_53304,i__53301_53306);
figwheel.client.socket.handle_incoming_message.call(null,msg_53307);

var G__53308 = seq__53298_53303;
var G__53309 = chunk__53299_53304;
var G__53310 = count__53300_53305;
var G__53311 = (i__53301_53306 + (1));
seq__53298_53303 = G__53308;
chunk__53299_53304 = G__53309;
count__53300_53305 = G__53310;
i__53301_53306 = G__53311;
continue;
} else {
var temp__4657__auto___53312 = cljs.core.seq.call(null,seq__53298_53303);
if(temp__4657__auto___53312){
var seq__53298_53313__$1 = temp__4657__auto___53312;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53298_53313__$1)){
var c__35281__auto___53314 = cljs.core.chunk_first.call(null,seq__53298_53313__$1);
var G__53315 = cljs.core.chunk_rest.call(null,seq__53298_53313__$1);
var G__53316 = c__35281__auto___53314;
var G__53317 = cljs.core.count.call(null,c__35281__auto___53314);
var G__53318 = (0);
seq__53298_53303 = G__53315;
chunk__53299_53304 = G__53316;
count__53300_53305 = G__53317;
i__53301_53306 = G__53318;
continue;
} else {
var msg_53319 = cljs.core.first.call(null,seq__53298_53313__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_53319);

var G__53320 = cljs.core.next.call(null,seq__53298_53313__$1);
var G__53321 = null;
var G__53322 = (0);
var G__53323 = (0);
seq__53298_53303 = G__53320;
chunk__53299_53304 = G__53321;
count__53300_53305 = G__53322;
i__53301_53306 = G__53323;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53328 = arguments.length;
var i__35612__auto___53329 = (0);
while(true){
if((i__35612__auto___53329 < len__35611__auto___53328)){
args__35618__auto__.push((arguments[i__35612__auto___53329]));

var G__53330 = (i__35612__auto___53329 + (1));
i__35612__auto___53329 = G__53330;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__53325){
var map__53326 = p__53325;
var map__53326__$1 = ((((!((map__53326 == null)))?((((map__53326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53326):map__53326);
var opts = map__53326__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq53324){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53324));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e53331){if((e53331 instanceof Error)){
var e = e53331;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e53331;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__53332){
var map__53333 = p__53332;
var map__53333__$1 = ((((!((map__53333 == null)))?((((map__53333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53333.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53333):map__53333);
var msg_name = cljs.core.get.call(null,map__53333__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1521280403518
