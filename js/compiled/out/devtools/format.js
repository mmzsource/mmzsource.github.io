// Compiled by ClojureScript 1.9.908 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__35125__auto__ = (((value == null))?null:value);
var m__35126__auto__ = (devtools.format._header[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,value);
} else {
var m__35126__auto____$1 = (devtools.format._header["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__35125__auto__ = (((value == null))?null:value);
var m__35126__auto__ = (devtools.format._has_body[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,value);
} else {
var m__35126__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__35125__auto__ = (((value == null))?null:value);
var m__35126__auto__ = (devtools.format._body[goog.typeOf(x__35125__auto__)]);
if(!((m__35126__auto__ == null))){
return m__35126__auto__.call(null,value);
} else {
var m__35126__auto____$1 = (devtools.format._body["_"]);
if(!((m__35126__auto____$1 == null))){
return m__35126__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53348 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53348["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53349 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53349["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53350 = temp__4655__auto____$2;
return (o53350["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53351 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53351["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53352 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53352["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53353 = temp__4655__auto____$2;
return (o53353["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53354 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53354["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53355 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53355["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53356 = temp__4655__auto____$2;
return (o53356["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53357 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53357["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53358 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53358["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53359 = temp__4655__auto____$2;
return (o53359["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53360 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53360["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53361 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53361["templating"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53362 = temp__4655__auto____$2;
return (o53362["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53363 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53363["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53364 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53364["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53365 = temp__4655__auto____$2;
return (o53365["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4655__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__4655__auto__)){
var o53366 = temp__4655__auto__;
var temp__4655__auto____$1 = (o53366["formatters"]);
if(cljs.core.truth_(temp__4655__auto____$1)){
var o53367 = temp__4655__auto____$1;
var temp__4655__auto____$2 = (o53367["markup"]);
if(cljs.core.truth_(temp__4655__auto____$2)){
var o53368 = temp__4655__auto____$2;
return (o53368["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53370 = arguments.length;
var i__35612__auto___53371 = (0);
while(true){
if((i__35612__auto___53371 < len__35611__auto___53370)){
args__35618__auto__.push((arguments[i__35612__auto___53371]));

var G__53372 = (i__35612__auto___53371 + (1));
i__35612__auto___53371 = G__53372;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq53369){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53369));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53374 = arguments.length;
var i__35612__auto___53375 = (0);
while(true){
if((i__35612__auto___53375 < len__35611__auto___53374)){
args__35618__auto__.push((arguments[i__35612__auto___53375]));

var G__53376 = (i__35612__auto___53375 + (1));
i__35612__auto___53375 = G__53376;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq53373){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53373));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53378 = arguments.length;
var i__35612__auto___53379 = (0);
while(true){
if((i__35612__auto___53379 < len__35611__auto___53378)){
args__35618__auto__.push((arguments[i__35612__auto___53379]));

var G__53380 = (i__35612__auto___53379 + (1));
i__35612__auto___53379 = G__53380;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq53377){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53377));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53382 = arguments.length;
var i__35612__auto___53383 = (0);
while(true){
if((i__35612__auto___53383 < len__35611__auto___53382)){
args__35618__auto__.push((arguments[i__35612__auto___53383]));

var G__53384 = (i__35612__auto___53383 + (1));
i__35612__auto___53383 = G__53384;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq53381){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53381));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53386 = arguments.length;
var i__35612__auto___53387 = (0);
while(true){
if((i__35612__auto___53387 < len__35611__auto___53386)){
args__35618__auto__.push((arguments[i__35612__auto___53387]));

var G__53388 = (i__35612__auto___53387 + (1));
i__35612__auto___53387 = G__53388;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq53385){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53385));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53390 = arguments.length;
var i__35612__auto___53391 = (0);
while(true){
if((i__35612__auto___53391 < len__35611__auto___53390)){
args__35618__auto__.push((arguments[i__35612__auto___53391]));

var G__53392 = (i__35612__auto___53391 + (1));
i__35612__auto___53391 = G__53392;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq53389){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53389));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53394 = arguments.length;
var i__35612__auto___53395 = (0);
while(true){
if((i__35612__auto___53395 < len__35611__auto___53394)){
args__35618__auto__.push((arguments[i__35612__auto___53395]));

var G__53396 = (i__35612__auto___53395 + (1));
i__35612__auto___53395 = G__53396;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq53393){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53393));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53404 = arguments.length;
var i__35612__auto___53405 = (0);
while(true){
if((i__35612__auto___53405 < len__35611__auto___53404)){
args__35618__auto__.push((arguments[i__35612__auto___53405]));

var G__53406 = (i__35612__auto___53405 + (1));
i__35612__auto___53405 = G__53406;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((1) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35619__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__53400){
var vec__53401 = p__53400;
var state_override = cljs.core.nth.call(null,vec__53401,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__53401,state_override){
return (function (p1__53397_SHARP_){
return cljs.core.merge.call(null,p1__53397_SHARP_,state_override);
});})(vec__53401,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq53398){
var G__53399 = cljs.core.first.call(null,seq53398);
var seq53398__$1 = cljs.core.next.call(null,seq53398);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__53399,seq53398__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53408 = arguments.length;
var i__35612__auto___53409 = (0);
while(true){
if((i__35612__auto___53409 < len__35611__auto___53408)){
args__35618__auto__.push((arguments[i__35612__auto___53409]));

var G__53410 = (i__35612__auto___53409 + (1));
i__35612__auto___53409 = G__53410;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((0) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__35619__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq53407){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53407));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__35618__auto__ = [];
var len__35611__auto___53413 = arguments.length;
var i__35612__auto___53414 = (0);
while(true){
if((i__35612__auto___53414 < len__35611__auto___53413)){
args__35618__auto__.push((arguments[i__35612__auto___53414]));

var G__53415 = (i__35612__auto___53414 + (1));
i__35612__auto___53414 = G__53415;
continue;
} else {
}
break;
}

var argseq__35619__auto__ = ((((1) < args__35618__auto__.length))?(new cljs.core.IndexedSeq(args__35618__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35619__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq53411){
var G__53412 = cljs.core.first.call(null,seq53411);
var seq53411__$1 = cljs.core.next.call(null,seq53411);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__53412,seq53411__$1);
});


//# sourceMappingURL=format.js.map?rel=1521280403730
