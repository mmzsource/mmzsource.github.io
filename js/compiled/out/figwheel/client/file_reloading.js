// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__34442__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34442__auto__){
return or__34442__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__34442__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
var or__34442__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__34442__auto____$1)){
return or__34442__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__51139_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__51139_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__51140 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__51141 = null;
var count__51142 = (0);
var i__51143 = (0);
while(true){
if((i__51143 < count__51142)){
var n = cljs.core._nth.call(null,chunk__51141,i__51143);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51144 = seq__51140;
var G__51145 = chunk__51141;
var G__51146 = count__51142;
var G__51147 = (i__51143 + (1));
seq__51140 = G__51144;
chunk__51141 = G__51145;
count__51142 = G__51146;
i__51143 = G__51147;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51140);
if(temp__4657__auto__){
var seq__51140__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51140__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__51140__$1);
var G__51148 = cljs.core.chunk_rest.call(null,seq__51140__$1);
var G__51149 = c__35281__auto__;
var G__51150 = cljs.core.count.call(null,c__35281__auto__);
var G__51151 = (0);
seq__51140 = G__51148;
chunk__51141 = G__51149;
count__51142 = G__51150;
i__51143 = G__51151;
continue;
} else {
var n = cljs.core.first.call(null,seq__51140__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__51152 = cljs.core.next.call(null,seq__51140__$1);
var G__51153 = null;
var G__51154 = (0);
var G__51155 = (0);
seq__51140 = G__51152;
chunk__51141 = G__51153;
count__51142 = G__51154;
i__51143 = G__51155;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__51165_51173 = cljs.core.seq.call(null,deps);
var chunk__51166_51174 = null;
var count__51167_51175 = (0);
var i__51168_51176 = (0);
while(true){
if((i__51168_51176 < count__51167_51175)){
var dep_51177 = cljs.core._nth.call(null,chunk__51166_51174,i__51168_51176);
topo_sort_helper_STAR_.call(null,dep_51177,(depth + (1)),state);

var G__51178 = seq__51165_51173;
var G__51179 = chunk__51166_51174;
var G__51180 = count__51167_51175;
var G__51181 = (i__51168_51176 + (1));
seq__51165_51173 = G__51178;
chunk__51166_51174 = G__51179;
count__51167_51175 = G__51180;
i__51168_51176 = G__51181;
continue;
} else {
var temp__4657__auto___51182 = cljs.core.seq.call(null,seq__51165_51173);
if(temp__4657__auto___51182){
var seq__51165_51183__$1 = temp__4657__auto___51182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51165_51183__$1)){
var c__35281__auto___51184 = cljs.core.chunk_first.call(null,seq__51165_51183__$1);
var G__51185 = cljs.core.chunk_rest.call(null,seq__51165_51183__$1);
var G__51186 = c__35281__auto___51184;
var G__51187 = cljs.core.count.call(null,c__35281__auto___51184);
var G__51188 = (0);
seq__51165_51173 = G__51185;
chunk__51166_51174 = G__51186;
count__51167_51175 = G__51187;
i__51168_51176 = G__51188;
continue;
} else {
var dep_51189 = cljs.core.first.call(null,seq__51165_51183__$1);
topo_sort_helper_STAR_.call(null,dep_51189,(depth + (1)),state);

var G__51190 = cljs.core.next.call(null,seq__51165_51183__$1);
var G__51191 = null;
var G__51192 = (0);
var G__51193 = (0);
seq__51165_51173 = G__51190;
chunk__51166_51174 = G__51191;
count__51167_51175 = G__51192;
i__51168_51176 = G__51193;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__51169){
var vec__51170 = p__51169;
var seq__51171 = cljs.core.seq.call(null,vec__51170);
var first__51172 = cljs.core.first.call(null,seq__51171);
var seq__51171__$1 = cljs.core.next.call(null,seq__51171);
var x = first__51172;
var xs = seq__51171__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__51170,seq__51171,first__51172,seq__51171__$1,x,xs,get_deps__$1){
return (function (p1__51156_SHARP_){
return clojure.set.difference.call(null,p1__51156_SHARP_,x);
});})(vec__51170,seq__51171,first__51172,seq__51171__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__51194 = cljs.core.seq.call(null,provides);
var chunk__51195 = null;
var count__51196 = (0);
var i__51197 = (0);
while(true){
if((i__51197 < count__51196)){
var prov = cljs.core._nth.call(null,chunk__51195,i__51197);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51198_51206 = cljs.core.seq.call(null,requires);
var chunk__51199_51207 = null;
var count__51200_51208 = (0);
var i__51201_51209 = (0);
while(true){
if((i__51201_51209 < count__51200_51208)){
var req_51210 = cljs.core._nth.call(null,chunk__51199_51207,i__51201_51209);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51210,prov);

var G__51211 = seq__51198_51206;
var G__51212 = chunk__51199_51207;
var G__51213 = count__51200_51208;
var G__51214 = (i__51201_51209 + (1));
seq__51198_51206 = G__51211;
chunk__51199_51207 = G__51212;
count__51200_51208 = G__51213;
i__51201_51209 = G__51214;
continue;
} else {
var temp__4657__auto___51215 = cljs.core.seq.call(null,seq__51198_51206);
if(temp__4657__auto___51215){
var seq__51198_51216__$1 = temp__4657__auto___51215;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51198_51216__$1)){
var c__35281__auto___51217 = cljs.core.chunk_first.call(null,seq__51198_51216__$1);
var G__51218 = cljs.core.chunk_rest.call(null,seq__51198_51216__$1);
var G__51219 = c__35281__auto___51217;
var G__51220 = cljs.core.count.call(null,c__35281__auto___51217);
var G__51221 = (0);
seq__51198_51206 = G__51218;
chunk__51199_51207 = G__51219;
count__51200_51208 = G__51220;
i__51201_51209 = G__51221;
continue;
} else {
var req_51222 = cljs.core.first.call(null,seq__51198_51216__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51222,prov);

var G__51223 = cljs.core.next.call(null,seq__51198_51216__$1);
var G__51224 = null;
var G__51225 = (0);
var G__51226 = (0);
seq__51198_51206 = G__51223;
chunk__51199_51207 = G__51224;
count__51200_51208 = G__51225;
i__51201_51209 = G__51226;
continue;
}
} else {
}
}
break;
}

var G__51227 = seq__51194;
var G__51228 = chunk__51195;
var G__51229 = count__51196;
var G__51230 = (i__51197 + (1));
seq__51194 = G__51227;
chunk__51195 = G__51228;
count__51196 = G__51229;
i__51197 = G__51230;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__51194);
if(temp__4657__auto__){
var seq__51194__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51194__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__51194__$1);
var G__51231 = cljs.core.chunk_rest.call(null,seq__51194__$1);
var G__51232 = c__35281__auto__;
var G__51233 = cljs.core.count.call(null,c__35281__auto__);
var G__51234 = (0);
seq__51194 = G__51231;
chunk__51195 = G__51232;
count__51196 = G__51233;
i__51197 = G__51234;
continue;
} else {
var prov = cljs.core.first.call(null,seq__51194__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__51202_51235 = cljs.core.seq.call(null,requires);
var chunk__51203_51236 = null;
var count__51204_51237 = (0);
var i__51205_51238 = (0);
while(true){
if((i__51205_51238 < count__51204_51237)){
var req_51239 = cljs.core._nth.call(null,chunk__51203_51236,i__51205_51238);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51239,prov);

var G__51240 = seq__51202_51235;
var G__51241 = chunk__51203_51236;
var G__51242 = count__51204_51237;
var G__51243 = (i__51205_51238 + (1));
seq__51202_51235 = G__51240;
chunk__51203_51236 = G__51241;
count__51204_51237 = G__51242;
i__51205_51238 = G__51243;
continue;
} else {
var temp__4657__auto___51244__$1 = cljs.core.seq.call(null,seq__51202_51235);
if(temp__4657__auto___51244__$1){
var seq__51202_51245__$1 = temp__4657__auto___51244__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51202_51245__$1)){
var c__35281__auto___51246 = cljs.core.chunk_first.call(null,seq__51202_51245__$1);
var G__51247 = cljs.core.chunk_rest.call(null,seq__51202_51245__$1);
var G__51248 = c__35281__auto___51246;
var G__51249 = cljs.core.count.call(null,c__35281__auto___51246);
var G__51250 = (0);
seq__51202_51235 = G__51247;
chunk__51203_51236 = G__51248;
count__51204_51237 = G__51249;
i__51205_51238 = G__51250;
continue;
} else {
var req_51251 = cljs.core.first.call(null,seq__51202_51245__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_51251,prov);

var G__51252 = cljs.core.next.call(null,seq__51202_51245__$1);
var G__51253 = null;
var G__51254 = (0);
var G__51255 = (0);
seq__51202_51235 = G__51252;
chunk__51203_51236 = G__51253;
count__51204_51237 = G__51254;
i__51205_51238 = G__51255;
continue;
}
} else {
}
}
break;
}

var G__51256 = cljs.core.next.call(null,seq__51194__$1);
var G__51257 = null;
var G__51258 = (0);
var G__51259 = (0);
seq__51194 = G__51256;
chunk__51195 = G__51257;
count__51196 = G__51258;
i__51197 = G__51259;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__51260_51264 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__51261_51265 = null;
var count__51262_51266 = (0);
var i__51263_51267 = (0);
while(true){
if((i__51263_51267 < count__51262_51266)){
var ns_51268 = cljs.core._nth.call(null,chunk__51261_51265,i__51263_51267);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51268);

var G__51269 = seq__51260_51264;
var G__51270 = chunk__51261_51265;
var G__51271 = count__51262_51266;
var G__51272 = (i__51263_51267 + (1));
seq__51260_51264 = G__51269;
chunk__51261_51265 = G__51270;
count__51262_51266 = G__51271;
i__51263_51267 = G__51272;
continue;
} else {
var temp__4657__auto___51273 = cljs.core.seq.call(null,seq__51260_51264);
if(temp__4657__auto___51273){
var seq__51260_51274__$1 = temp__4657__auto___51273;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51260_51274__$1)){
var c__35281__auto___51275 = cljs.core.chunk_first.call(null,seq__51260_51274__$1);
var G__51276 = cljs.core.chunk_rest.call(null,seq__51260_51274__$1);
var G__51277 = c__35281__auto___51275;
var G__51278 = cljs.core.count.call(null,c__35281__auto___51275);
var G__51279 = (0);
seq__51260_51264 = G__51276;
chunk__51261_51265 = G__51277;
count__51262_51266 = G__51278;
i__51263_51267 = G__51279;
continue;
} else {
var ns_51280 = cljs.core.first.call(null,seq__51260_51274__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_51280);

var G__51281 = cljs.core.next.call(null,seq__51260_51274__$1);
var G__51282 = null;
var G__51283 = (0);
var G__51284 = (0);
seq__51260_51264 = G__51281;
chunk__51261_51265 = G__51282;
count__51262_51266 = G__51283;
i__51263_51267 = G__51284;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__34442__auto__ = goog.require__;
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__51285__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__51285 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51286__i = 0, G__51286__a = new Array(arguments.length -  0);
while (G__51286__i < G__51286__a.length) {G__51286__a[G__51286__i] = arguments[G__51286__i + 0]; ++G__51286__i;}
  args = new cljs.core.IndexedSeq(G__51286__a,0,null);
} 
return G__51285__delegate.call(this,args);};
G__51285.cljs$lang$maxFixedArity = 0;
G__51285.cljs$lang$applyTo = (function (arglist__51287){
var args = cljs.core.seq(arglist__51287);
return G__51285__delegate(args);
});
G__51285.cljs$core$IFn$_invoke$arity$variadic = G__51285__delegate;
return G__51285;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__51288_SHARP_,p2__51289_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51288_SHARP_)].join('')),p2__51289_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__51290_SHARP_,p2__51291_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__51290_SHARP_)].join(''),p2__51291_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__51292 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__51292.addCallback(((function (G__51292){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__51292))
);

G__51292.addErrback(((function (G__51292){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__51292))
);

return G__51292;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__51293 = cljs.core._EQ_;
var expr__51294 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__51293.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__51294))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__51293,expr__51294){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__51293,expr__51294))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__51293,expr__51294){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e51296){if((e51296 instanceof Error)){
var e = e51296;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51296;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__51293,expr__51294))
} else {
if(cljs.core.truth_(pred__51293.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__51294))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51293.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__51294))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__51293.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__51294))){
return ((function (pred__51293,expr__51294){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e51297){if((e51297 instanceof Error)){
var e = e51297;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e51297;

}
}})());
});
;})(pred__51293,expr__51294))
} else {
return ((function (pred__51293,expr__51294){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__51293,expr__51294))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__51298,callback){
var map__51299 = p__51298;
var map__51299__$1 = ((((!((map__51299 == null)))?((((map__51299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51299.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51299):map__51299);
var file_msg = map__51299__$1;
var request_url = cljs.core.get.call(null,map__51299__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__51299,map__51299__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__51299,map__51299__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__){
return (function (state_51323){
var state_val_51324 = (state_51323[(1)]);
if((state_val_51324 === (7))){
var inst_51319 = (state_51323[(2)]);
var state_51323__$1 = state_51323;
var statearr_51325_51342 = state_51323__$1;
(statearr_51325_51342[(2)] = inst_51319);

(statearr_51325_51342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (1))){
var state_51323__$1 = state_51323;
var statearr_51326_51343 = state_51323__$1;
(statearr_51326_51343[(2)] = null);

(statearr_51326_51343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (4))){
var inst_51303 = (state_51323[(7)]);
var inst_51303__$1 = (state_51323[(2)]);
var state_51323__$1 = (function (){var statearr_51327 = state_51323;
(statearr_51327[(7)] = inst_51303__$1);

return statearr_51327;
})();
if(cljs.core.truth_(inst_51303__$1)){
var statearr_51328_51344 = state_51323__$1;
(statearr_51328_51344[(1)] = (5));

} else {
var statearr_51329_51345 = state_51323__$1;
(statearr_51329_51345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (6))){
var state_51323__$1 = state_51323;
var statearr_51330_51346 = state_51323__$1;
(statearr_51330_51346[(2)] = null);

(statearr_51330_51346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (3))){
var inst_51321 = (state_51323[(2)]);
var state_51323__$1 = state_51323;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51323__$1,inst_51321);
} else {
if((state_val_51324 === (2))){
var state_51323__$1 = state_51323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51323__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_51324 === (11))){
var inst_51315 = (state_51323[(2)]);
var state_51323__$1 = (function (){var statearr_51331 = state_51323;
(statearr_51331[(8)] = inst_51315);

return statearr_51331;
})();
var statearr_51332_51347 = state_51323__$1;
(statearr_51332_51347[(2)] = null);

(statearr_51332_51347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (9))){
var inst_51307 = (state_51323[(9)]);
var inst_51309 = (state_51323[(10)]);
var inst_51311 = inst_51309.call(null,inst_51307);
var state_51323__$1 = state_51323;
var statearr_51333_51348 = state_51323__$1;
(statearr_51333_51348[(2)] = inst_51311);

(statearr_51333_51348[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (5))){
var inst_51303 = (state_51323[(7)]);
var inst_51305 = figwheel.client.file_reloading.blocking_load.call(null,inst_51303);
var state_51323__$1 = state_51323;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51323__$1,(8),inst_51305);
} else {
if((state_val_51324 === (10))){
var inst_51307 = (state_51323[(9)]);
var inst_51313 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_51307);
var state_51323__$1 = state_51323;
var statearr_51334_51349 = state_51323__$1;
(statearr_51334_51349[(2)] = inst_51313);

(statearr_51334_51349[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51324 === (8))){
var inst_51303 = (state_51323[(7)]);
var inst_51309 = (state_51323[(10)]);
var inst_51307 = (state_51323[(2)]);
var inst_51308 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_51309__$1 = cljs.core.get.call(null,inst_51308,inst_51303);
var state_51323__$1 = (function (){var statearr_51335 = state_51323;
(statearr_51335[(9)] = inst_51307);

(statearr_51335[(10)] = inst_51309__$1);

return statearr_51335;
})();
if(cljs.core.truth_(inst_51309__$1)){
var statearr_51336_51350 = state_51323__$1;
(statearr_51336_51350[(1)] = (9));

} else {
var statearr_51337_51351 = state_51323__$1;
(statearr_51337_51351[(1)] = (10));

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
});})(c__38562__auto__))
;
return ((function (switch__38474__auto__,c__38562__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38475__auto__ = null;
var figwheel$client$file_reloading$state_machine__38475__auto____0 = (function (){
var statearr_51338 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51338[(0)] = figwheel$client$file_reloading$state_machine__38475__auto__);

(statearr_51338[(1)] = (1));

return statearr_51338;
});
var figwheel$client$file_reloading$state_machine__38475__auto____1 = (function (state_51323){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_51323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e51339){if((e51339 instanceof Object)){
var ex__38478__auto__ = e51339;
var statearr_51340_51352 = state_51323;
(statearr_51340_51352[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51339;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51353 = state_51323;
state_51323 = G__51353;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38475__auto__ = function(state_51323){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38475__auto____1.call(this,state_51323);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38475__auto____0;
figwheel$client$file_reloading$state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38475__auto____1;
return figwheel$client$file_reloading$state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__))
})();
var state__38564__auto__ = (function (){var statearr_51341 = f__38563__auto__.call(null);
(statearr_51341[(6)] = c__38562__auto__);

return statearr_51341;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__))
);

return c__38562__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__51354,callback){
var map__51355 = p__51354;
var map__51355__$1 = ((((!((map__51355 == null)))?((((map__51355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51355.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51355):map__51355);
var file_msg = map__51355__$1;
var namespace = cljs.core.get.call(null,map__51355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__51355,map__51355__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__51355,map__51355__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__51357){
var map__51358 = p__51357;
var map__51358__$1 = ((((!((map__51358 == null)))?((((map__51358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51358):map__51358);
var file_msg = map__51358__$1;
var namespace = cljs.core.get.call(null,map__51358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__51360){
var map__51361 = p__51360;
var map__51361__$1 = ((((!((map__51361 == null)))?((((map__51361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51361):map__51361);
var file_msg = map__51361__$1;
var namespace = cljs.core.get.call(null,map__51361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34430__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__34430__auto__){
var or__34442__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
var or__34442__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34442__auto____$1)){
return or__34442__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34430__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__51363,callback){
var map__51364 = p__51363;
var map__51364__$1 = ((((!((map__51364 == null)))?((((map__51364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51364):map__51364);
var file_msg = map__51364__$1;
var request_url = cljs.core.get.call(null,map__51364__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__51364__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__38562__auto___51414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto___51414,out){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto___51414,out){
return (function (state_51399){
var state_val_51400 = (state_51399[(1)]);
if((state_val_51400 === (1))){
var inst_51373 = cljs.core.seq.call(null,files);
var inst_51374 = cljs.core.first.call(null,inst_51373);
var inst_51375 = cljs.core.next.call(null,inst_51373);
var inst_51376 = files;
var state_51399__$1 = (function (){var statearr_51401 = state_51399;
(statearr_51401[(7)] = inst_51375);

(statearr_51401[(8)] = inst_51374);

(statearr_51401[(9)] = inst_51376);

return statearr_51401;
})();
var statearr_51402_51415 = state_51399__$1;
(statearr_51402_51415[(2)] = null);

(statearr_51402_51415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (2))){
var inst_51382 = (state_51399[(10)]);
var inst_51376 = (state_51399[(9)]);
var inst_51381 = cljs.core.seq.call(null,inst_51376);
var inst_51382__$1 = cljs.core.first.call(null,inst_51381);
var inst_51383 = cljs.core.next.call(null,inst_51381);
var inst_51384 = (inst_51382__$1 == null);
var inst_51385 = cljs.core.not.call(null,inst_51384);
var state_51399__$1 = (function (){var statearr_51403 = state_51399;
(statearr_51403[(11)] = inst_51383);

(statearr_51403[(10)] = inst_51382__$1);

return statearr_51403;
})();
if(inst_51385){
var statearr_51404_51416 = state_51399__$1;
(statearr_51404_51416[(1)] = (4));

} else {
var statearr_51405_51417 = state_51399__$1;
(statearr_51405_51417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (3))){
var inst_51397 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51399__$1,inst_51397);
} else {
if((state_val_51400 === (4))){
var inst_51382 = (state_51399[(10)]);
var inst_51387 = figwheel.client.file_reloading.reload_js_file.call(null,inst_51382);
var state_51399__$1 = state_51399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51399__$1,(7),inst_51387);
} else {
if((state_val_51400 === (5))){
var inst_51393 = cljs.core.async.close_BANG_.call(null,out);
var state_51399__$1 = state_51399;
var statearr_51406_51418 = state_51399__$1;
(statearr_51406_51418[(2)] = inst_51393);

(statearr_51406_51418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (6))){
var inst_51395 = (state_51399[(2)]);
var state_51399__$1 = state_51399;
var statearr_51407_51419 = state_51399__$1;
(statearr_51407_51419[(2)] = inst_51395);

(statearr_51407_51419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51400 === (7))){
var inst_51383 = (state_51399[(11)]);
var inst_51389 = (state_51399[(2)]);
var inst_51390 = cljs.core.async.put_BANG_.call(null,out,inst_51389);
var inst_51376 = inst_51383;
var state_51399__$1 = (function (){var statearr_51408 = state_51399;
(statearr_51408[(12)] = inst_51390);

(statearr_51408[(9)] = inst_51376);

return statearr_51408;
})();
var statearr_51409_51420 = state_51399__$1;
(statearr_51409_51420[(2)] = null);

(statearr_51409_51420[(1)] = (2));


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
});})(c__38562__auto___51414,out))
;
return ((function (switch__38474__auto__,c__38562__auto___51414,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto____0 = (function (){
var statearr_51410 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51410[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto__);

(statearr_51410[(1)] = (1));

return statearr_51410;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto____1 = (function (state_51399){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_51399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e51411){if((e51411 instanceof Object)){
var ex__38478__auto__ = e51411;
var statearr_51412_51421 = state_51399;
(statearr_51412_51421[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51422 = state_51399;
state_51399 = G__51422;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto__ = function(state_51399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto____1.call(this,state_51399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto___51414,out))
})();
var state__38564__auto__ = (function (){var statearr_51413 = f__38563__auto__.call(null);
(statearr_51413[(6)] = c__38562__auto___51414);

return statearr_51413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto___51414,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__51423,opts){
var map__51424 = p__51423;
var map__51424__$1 = ((((!((map__51424 == null)))?((((map__51424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51424.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51424):map__51424);
var eval_body = cljs.core.get.call(null,map__51424__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__51424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34430__auto__ = eval_body;
if(cljs.core.truth_(and__34430__auto__)){
return typeof eval_body === 'string';
} else {
return and__34430__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e51426){var e = e51426;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__51427_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51427_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__51428){
var vec__51429 = p__51428;
var k = cljs.core.nth.call(null,vec__51429,(0),null);
var v = cljs.core.nth.call(null,vec__51429,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__51432){
var vec__51433 = p__51432;
var k = cljs.core.nth.call(null,vec__51433,(0),null);
var v = cljs.core.nth.call(null,vec__51433,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__51439,p__51440){
var map__51441 = p__51439;
var map__51441__$1 = ((((!((map__51441 == null)))?((((map__51441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51441.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51441):map__51441);
var opts = map__51441__$1;
var before_jsload = cljs.core.get.call(null,map__51441__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__51441__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__51441__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__51442 = p__51440;
var map__51442__$1 = ((((!((map__51442 == null)))?((((map__51442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51442):map__51442);
var msg = map__51442__$1;
var files = cljs.core.get.call(null,map__51442__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__51442__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__51442__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38562__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38563__auto__ = (function (){var switch__38474__auto__ = ((function (c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_51596){
var state_val_51597 = (state_51596[(1)]);
if((state_val_51597 === (7))){
var inst_51457 = (state_51596[(7)]);
var inst_51456 = (state_51596[(8)]);
var inst_51458 = (state_51596[(9)]);
var inst_51459 = (state_51596[(10)]);
var inst_51464 = cljs.core._nth.call(null,inst_51457,inst_51459);
var inst_51465 = figwheel.client.file_reloading.eval_body.call(null,inst_51464,opts);
var inst_51466 = (inst_51459 + (1));
var tmp51598 = inst_51457;
var tmp51599 = inst_51456;
var tmp51600 = inst_51458;
var inst_51456__$1 = tmp51599;
var inst_51457__$1 = tmp51598;
var inst_51458__$1 = tmp51600;
var inst_51459__$1 = inst_51466;
var state_51596__$1 = (function (){var statearr_51601 = state_51596;
(statearr_51601[(7)] = inst_51457__$1);

(statearr_51601[(8)] = inst_51456__$1);

(statearr_51601[(9)] = inst_51458__$1);

(statearr_51601[(10)] = inst_51459__$1);

(statearr_51601[(11)] = inst_51465);

return statearr_51601;
})();
var statearr_51602_51685 = state_51596__$1;
(statearr_51602_51685[(2)] = null);

(statearr_51602_51685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (20))){
var inst_51499 = (state_51596[(12)]);
var inst_51507 = figwheel.client.file_reloading.sort_files.call(null,inst_51499);
var state_51596__$1 = state_51596;
var statearr_51603_51686 = state_51596__$1;
(statearr_51603_51686[(2)] = inst_51507);

(statearr_51603_51686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (27))){
var state_51596__$1 = state_51596;
var statearr_51604_51687 = state_51596__$1;
(statearr_51604_51687[(2)] = null);

(statearr_51604_51687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (1))){
var inst_51448 = (state_51596[(13)]);
var inst_51445 = before_jsload.call(null,files);
var inst_51446 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_51447 = (function (){return ((function (inst_51448,inst_51445,inst_51446,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51436_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51436_SHARP_);
});
;})(inst_51448,inst_51445,inst_51446,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51448__$1 = cljs.core.filter.call(null,inst_51447,files);
var inst_51449 = cljs.core.not_empty.call(null,inst_51448__$1);
var state_51596__$1 = (function (){var statearr_51605 = state_51596;
(statearr_51605[(14)] = inst_51446);

(statearr_51605[(15)] = inst_51445);

(statearr_51605[(13)] = inst_51448__$1);

return statearr_51605;
})();
if(cljs.core.truth_(inst_51449)){
var statearr_51606_51688 = state_51596__$1;
(statearr_51606_51688[(1)] = (2));

} else {
var statearr_51607_51689 = state_51596__$1;
(statearr_51607_51689[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (24))){
var state_51596__$1 = state_51596;
var statearr_51608_51690 = state_51596__$1;
(statearr_51608_51690[(2)] = null);

(statearr_51608_51690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (39))){
var inst_51549 = (state_51596[(16)]);
var state_51596__$1 = state_51596;
var statearr_51609_51691 = state_51596__$1;
(statearr_51609_51691[(2)] = inst_51549);

(statearr_51609_51691[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (46))){
var inst_51591 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
var statearr_51610_51692 = state_51596__$1;
(statearr_51610_51692[(2)] = inst_51591);

(statearr_51610_51692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (4))){
var inst_51493 = (state_51596[(2)]);
var inst_51494 = cljs.core.List.EMPTY;
var inst_51495 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_51494);
var inst_51496 = (function (){return ((function (inst_51493,inst_51494,inst_51495,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51437_SHARP_){
var and__34430__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__51437_SHARP_);
if(cljs.core.truth_(and__34430__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__51437_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__51437_SHARP_)));
} else {
return and__34430__auto__;
}
});
;})(inst_51493,inst_51494,inst_51495,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51497 = cljs.core.filter.call(null,inst_51496,files);
var inst_51498 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_51499 = cljs.core.concat.call(null,inst_51497,inst_51498);
var state_51596__$1 = (function (){var statearr_51611 = state_51596;
(statearr_51611[(12)] = inst_51499);

(statearr_51611[(17)] = inst_51495);

(statearr_51611[(18)] = inst_51493);

return statearr_51611;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_51612_51693 = state_51596__$1;
(statearr_51612_51693[(1)] = (16));

} else {
var statearr_51613_51694 = state_51596__$1;
(statearr_51613_51694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (15))){
var inst_51483 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
var statearr_51614_51695 = state_51596__$1;
(statearr_51614_51695[(2)] = inst_51483);

(statearr_51614_51695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (21))){
var inst_51509 = (state_51596[(19)]);
var inst_51509__$1 = (state_51596[(2)]);
var inst_51510 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_51509__$1);
var state_51596__$1 = (function (){var statearr_51615 = state_51596;
(statearr_51615[(19)] = inst_51509__$1);

return statearr_51615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_51596__$1,(22),inst_51510);
} else {
if((state_val_51597 === (31))){
var inst_51594 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_51596__$1,inst_51594);
} else {
if((state_val_51597 === (32))){
var inst_51549 = (state_51596[(16)]);
var inst_51554 = inst_51549.cljs$lang$protocol_mask$partition0$;
var inst_51555 = (inst_51554 & (64));
var inst_51556 = inst_51549.cljs$core$ISeq$;
var inst_51557 = (cljs.core.PROTOCOL_SENTINEL === inst_51556);
var inst_51558 = (inst_51555) || (inst_51557);
var state_51596__$1 = state_51596;
if(cljs.core.truth_(inst_51558)){
var statearr_51616_51696 = state_51596__$1;
(statearr_51616_51696[(1)] = (35));

} else {
var statearr_51617_51697 = state_51596__$1;
(statearr_51617_51697[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (40))){
var inst_51571 = (state_51596[(20)]);
var inst_51570 = (state_51596[(2)]);
var inst_51571__$1 = cljs.core.get.call(null,inst_51570,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_51572 = cljs.core.get.call(null,inst_51570,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_51573 = cljs.core.not_empty.call(null,inst_51571__$1);
var state_51596__$1 = (function (){var statearr_51618 = state_51596;
(statearr_51618[(21)] = inst_51572);

(statearr_51618[(20)] = inst_51571__$1);

return statearr_51618;
})();
if(cljs.core.truth_(inst_51573)){
var statearr_51619_51698 = state_51596__$1;
(statearr_51619_51698[(1)] = (41));

} else {
var statearr_51620_51699 = state_51596__$1;
(statearr_51620_51699[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (33))){
var state_51596__$1 = state_51596;
var statearr_51621_51700 = state_51596__$1;
(statearr_51621_51700[(2)] = false);

(statearr_51621_51700[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (13))){
var inst_51469 = (state_51596[(22)]);
var inst_51473 = cljs.core.chunk_first.call(null,inst_51469);
var inst_51474 = cljs.core.chunk_rest.call(null,inst_51469);
var inst_51475 = cljs.core.count.call(null,inst_51473);
var inst_51456 = inst_51474;
var inst_51457 = inst_51473;
var inst_51458 = inst_51475;
var inst_51459 = (0);
var state_51596__$1 = (function (){var statearr_51622 = state_51596;
(statearr_51622[(7)] = inst_51457);

(statearr_51622[(8)] = inst_51456);

(statearr_51622[(9)] = inst_51458);

(statearr_51622[(10)] = inst_51459);

return statearr_51622;
})();
var statearr_51623_51701 = state_51596__$1;
(statearr_51623_51701[(2)] = null);

(statearr_51623_51701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (22))){
var inst_51509 = (state_51596[(19)]);
var inst_51512 = (state_51596[(23)]);
var inst_51513 = (state_51596[(24)]);
var inst_51517 = (state_51596[(25)]);
var inst_51512__$1 = (state_51596[(2)]);
var inst_51513__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51512__$1);
var inst_51514 = (function (){var all_files = inst_51509;
var res_SINGLEQUOTE_ = inst_51512__$1;
var res = inst_51513__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_51509,inst_51512,inst_51513,inst_51517,inst_51512__$1,inst_51513__$1,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__51438_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__51438_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_51509,inst_51512,inst_51513,inst_51517,inst_51512__$1,inst_51513__$1,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51515 = cljs.core.filter.call(null,inst_51514,inst_51512__$1);
var inst_51516 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_51517__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_51516);
var inst_51518 = cljs.core.not_empty.call(null,inst_51517__$1);
var state_51596__$1 = (function (){var statearr_51624 = state_51596;
(statearr_51624[(26)] = inst_51515);

(statearr_51624[(23)] = inst_51512__$1);

(statearr_51624[(24)] = inst_51513__$1);

(statearr_51624[(25)] = inst_51517__$1);

return statearr_51624;
})();
if(cljs.core.truth_(inst_51518)){
var statearr_51625_51702 = state_51596__$1;
(statearr_51625_51702[(1)] = (23));

} else {
var statearr_51626_51703 = state_51596__$1;
(statearr_51626_51703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (36))){
var state_51596__$1 = state_51596;
var statearr_51627_51704 = state_51596__$1;
(statearr_51627_51704[(2)] = false);

(statearr_51627_51704[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (41))){
var inst_51571 = (state_51596[(20)]);
var inst_51575 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_51576 = cljs.core.map.call(null,inst_51575,inst_51571);
var inst_51577 = cljs.core.pr_str.call(null,inst_51576);
var inst_51578 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51577)].join('');
var inst_51579 = figwheel.client.utils.log.call(null,inst_51578);
var state_51596__$1 = state_51596;
var statearr_51628_51705 = state_51596__$1;
(statearr_51628_51705[(2)] = inst_51579);

(statearr_51628_51705[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (43))){
var inst_51572 = (state_51596[(21)]);
var inst_51582 = (state_51596[(2)]);
var inst_51583 = cljs.core.not_empty.call(null,inst_51572);
var state_51596__$1 = (function (){var statearr_51629 = state_51596;
(statearr_51629[(27)] = inst_51582);

return statearr_51629;
})();
if(cljs.core.truth_(inst_51583)){
var statearr_51630_51706 = state_51596__$1;
(statearr_51630_51706[(1)] = (44));

} else {
var statearr_51631_51707 = state_51596__$1;
(statearr_51631_51707[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (29))){
var inst_51509 = (state_51596[(19)]);
var inst_51515 = (state_51596[(26)]);
var inst_51512 = (state_51596[(23)]);
var inst_51549 = (state_51596[(16)]);
var inst_51513 = (state_51596[(24)]);
var inst_51517 = (state_51596[(25)]);
var inst_51545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_51548 = (function (){var all_files = inst_51509;
var res_SINGLEQUOTE_ = inst_51512;
var res = inst_51513;
var files_not_loaded = inst_51515;
var dependencies_that_loaded = inst_51517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51549,inst_51513,inst_51517,inst_51545,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51547){
var map__51632 = p__51547;
var map__51632__$1 = ((((!((map__51632 == null)))?((((map__51632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51632.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51632):map__51632);
var namespace = cljs.core.get.call(null,map__51632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51549,inst_51513,inst_51517,inst_51545,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51549__$1 = cljs.core.group_by.call(null,inst_51548,inst_51515);
var inst_51551 = (inst_51549__$1 == null);
var inst_51552 = cljs.core.not.call(null,inst_51551);
var state_51596__$1 = (function (){var statearr_51634 = state_51596;
(statearr_51634[(16)] = inst_51549__$1);

(statearr_51634[(28)] = inst_51545);

return statearr_51634;
})();
if(inst_51552){
var statearr_51635_51708 = state_51596__$1;
(statearr_51635_51708[(1)] = (32));

} else {
var statearr_51636_51709 = state_51596__$1;
(statearr_51636_51709[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (44))){
var inst_51572 = (state_51596[(21)]);
var inst_51585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_51572);
var inst_51586 = cljs.core.pr_str.call(null,inst_51585);
var inst_51587 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51586)].join('');
var inst_51588 = figwheel.client.utils.log.call(null,inst_51587);
var state_51596__$1 = state_51596;
var statearr_51637_51710 = state_51596__$1;
(statearr_51637_51710[(2)] = inst_51588);

(statearr_51637_51710[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (6))){
var inst_51490 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
var statearr_51638_51711 = state_51596__$1;
(statearr_51638_51711[(2)] = inst_51490);

(statearr_51638_51711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (28))){
var inst_51515 = (state_51596[(26)]);
var inst_51542 = (state_51596[(2)]);
var inst_51543 = cljs.core.not_empty.call(null,inst_51515);
var state_51596__$1 = (function (){var statearr_51639 = state_51596;
(statearr_51639[(29)] = inst_51542);

return statearr_51639;
})();
if(cljs.core.truth_(inst_51543)){
var statearr_51640_51712 = state_51596__$1;
(statearr_51640_51712[(1)] = (29));

} else {
var statearr_51641_51713 = state_51596__$1;
(statearr_51641_51713[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (25))){
var inst_51513 = (state_51596[(24)]);
var inst_51529 = (state_51596[(2)]);
var inst_51530 = cljs.core.not_empty.call(null,inst_51513);
var state_51596__$1 = (function (){var statearr_51642 = state_51596;
(statearr_51642[(30)] = inst_51529);

return statearr_51642;
})();
if(cljs.core.truth_(inst_51530)){
var statearr_51643_51714 = state_51596__$1;
(statearr_51643_51714[(1)] = (26));

} else {
var statearr_51644_51715 = state_51596__$1;
(statearr_51644_51715[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (34))){
var inst_51565 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
if(cljs.core.truth_(inst_51565)){
var statearr_51645_51716 = state_51596__$1;
(statearr_51645_51716[(1)] = (38));

} else {
var statearr_51646_51717 = state_51596__$1;
(statearr_51646_51717[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (17))){
var state_51596__$1 = state_51596;
var statearr_51647_51718 = state_51596__$1;
(statearr_51647_51718[(2)] = recompile_dependents);

(statearr_51647_51718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (3))){
var state_51596__$1 = state_51596;
var statearr_51648_51719 = state_51596__$1;
(statearr_51648_51719[(2)] = null);

(statearr_51648_51719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (12))){
var inst_51486 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
var statearr_51649_51720 = state_51596__$1;
(statearr_51649_51720[(2)] = inst_51486);

(statearr_51649_51720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (2))){
var inst_51448 = (state_51596[(13)]);
var inst_51455 = cljs.core.seq.call(null,inst_51448);
var inst_51456 = inst_51455;
var inst_51457 = null;
var inst_51458 = (0);
var inst_51459 = (0);
var state_51596__$1 = (function (){var statearr_51650 = state_51596;
(statearr_51650[(7)] = inst_51457);

(statearr_51650[(8)] = inst_51456);

(statearr_51650[(9)] = inst_51458);

(statearr_51650[(10)] = inst_51459);

return statearr_51650;
})();
var statearr_51651_51721 = state_51596__$1;
(statearr_51651_51721[(2)] = null);

(statearr_51651_51721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (23))){
var inst_51509 = (state_51596[(19)]);
var inst_51515 = (state_51596[(26)]);
var inst_51512 = (state_51596[(23)]);
var inst_51513 = (state_51596[(24)]);
var inst_51517 = (state_51596[(25)]);
var inst_51520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_51522 = (function (){var all_files = inst_51509;
var res_SINGLEQUOTE_ = inst_51512;
var res = inst_51513;
var files_not_loaded = inst_51515;
var dependencies_that_loaded = inst_51517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51513,inst_51517,inst_51520,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51521){
var map__51652 = p__51521;
var map__51652__$1 = ((((!((map__51652 == null)))?((((map__51652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51652):map__51652);
var request_url = cljs.core.get.call(null,map__51652__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51513,inst_51517,inst_51520,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51523 = cljs.core.reverse.call(null,inst_51517);
var inst_51524 = cljs.core.map.call(null,inst_51522,inst_51523);
var inst_51525 = cljs.core.pr_str.call(null,inst_51524);
var inst_51526 = figwheel.client.utils.log.call(null,inst_51525);
var state_51596__$1 = (function (){var statearr_51654 = state_51596;
(statearr_51654[(31)] = inst_51520);

return statearr_51654;
})();
var statearr_51655_51722 = state_51596__$1;
(statearr_51655_51722[(2)] = inst_51526);

(statearr_51655_51722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (35))){
var state_51596__$1 = state_51596;
var statearr_51656_51723 = state_51596__$1;
(statearr_51656_51723[(2)] = true);

(statearr_51656_51723[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (19))){
var inst_51499 = (state_51596[(12)]);
var inst_51505 = figwheel.client.file_reloading.expand_files.call(null,inst_51499);
var state_51596__$1 = state_51596;
var statearr_51657_51724 = state_51596__$1;
(statearr_51657_51724[(2)] = inst_51505);

(statearr_51657_51724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (11))){
var state_51596__$1 = state_51596;
var statearr_51658_51725 = state_51596__$1;
(statearr_51658_51725[(2)] = null);

(statearr_51658_51725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (9))){
var inst_51488 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
var statearr_51659_51726 = state_51596__$1;
(statearr_51659_51726[(2)] = inst_51488);

(statearr_51659_51726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (5))){
var inst_51458 = (state_51596[(9)]);
var inst_51459 = (state_51596[(10)]);
var inst_51461 = (inst_51459 < inst_51458);
var inst_51462 = inst_51461;
var state_51596__$1 = state_51596;
if(cljs.core.truth_(inst_51462)){
var statearr_51660_51727 = state_51596__$1;
(statearr_51660_51727[(1)] = (7));

} else {
var statearr_51661_51728 = state_51596__$1;
(statearr_51661_51728[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (14))){
var inst_51469 = (state_51596[(22)]);
var inst_51478 = cljs.core.first.call(null,inst_51469);
var inst_51479 = figwheel.client.file_reloading.eval_body.call(null,inst_51478,opts);
var inst_51480 = cljs.core.next.call(null,inst_51469);
var inst_51456 = inst_51480;
var inst_51457 = null;
var inst_51458 = (0);
var inst_51459 = (0);
var state_51596__$1 = (function (){var statearr_51662 = state_51596;
(statearr_51662[(7)] = inst_51457);

(statearr_51662[(8)] = inst_51456);

(statearr_51662[(9)] = inst_51458);

(statearr_51662[(10)] = inst_51459);

(statearr_51662[(32)] = inst_51479);

return statearr_51662;
})();
var statearr_51663_51729 = state_51596__$1;
(statearr_51663_51729[(2)] = null);

(statearr_51663_51729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (45))){
var state_51596__$1 = state_51596;
var statearr_51664_51730 = state_51596__$1;
(statearr_51664_51730[(2)] = null);

(statearr_51664_51730[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (26))){
var inst_51509 = (state_51596[(19)]);
var inst_51515 = (state_51596[(26)]);
var inst_51512 = (state_51596[(23)]);
var inst_51513 = (state_51596[(24)]);
var inst_51517 = (state_51596[(25)]);
var inst_51532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_51534 = (function (){var all_files = inst_51509;
var res_SINGLEQUOTE_ = inst_51512;
var res = inst_51513;
var files_not_loaded = inst_51515;
var dependencies_that_loaded = inst_51517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51513,inst_51517,inst_51532,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__51533){
var map__51665 = p__51533;
var map__51665__$1 = ((((!((map__51665 == null)))?((((map__51665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51665.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51665):map__51665);
var namespace = cljs.core.get.call(null,map__51665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__51665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51513,inst_51517,inst_51532,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51535 = cljs.core.map.call(null,inst_51534,inst_51513);
var inst_51536 = cljs.core.pr_str.call(null,inst_51535);
var inst_51537 = figwheel.client.utils.log.call(null,inst_51536);
var inst_51538 = (function (){var all_files = inst_51509;
var res_SINGLEQUOTE_ = inst_51512;
var res = inst_51513;
var files_not_loaded = inst_51515;
var dependencies_that_loaded = inst_51517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51513,inst_51517,inst_51532,inst_51534,inst_51535,inst_51536,inst_51537,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_51509,inst_51515,inst_51512,inst_51513,inst_51517,inst_51532,inst_51534,inst_51535,inst_51536,inst_51537,state_val_51597,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_51539 = setTimeout(inst_51538,(10));
var state_51596__$1 = (function (){var statearr_51667 = state_51596;
(statearr_51667[(33)] = inst_51532);

(statearr_51667[(34)] = inst_51537);

return statearr_51667;
})();
var statearr_51668_51731 = state_51596__$1;
(statearr_51668_51731[(2)] = inst_51539);

(statearr_51668_51731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (16))){
var state_51596__$1 = state_51596;
var statearr_51669_51732 = state_51596__$1;
(statearr_51669_51732[(2)] = reload_dependents);

(statearr_51669_51732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (38))){
var inst_51549 = (state_51596[(16)]);
var inst_51567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_51549);
var state_51596__$1 = state_51596;
var statearr_51670_51733 = state_51596__$1;
(statearr_51670_51733[(2)] = inst_51567);

(statearr_51670_51733[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (30))){
var state_51596__$1 = state_51596;
var statearr_51671_51734 = state_51596__$1;
(statearr_51671_51734[(2)] = null);

(statearr_51671_51734[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (10))){
var inst_51469 = (state_51596[(22)]);
var inst_51471 = cljs.core.chunked_seq_QMARK_.call(null,inst_51469);
var state_51596__$1 = state_51596;
if(inst_51471){
var statearr_51672_51735 = state_51596__$1;
(statearr_51672_51735[(1)] = (13));

} else {
var statearr_51673_51736 = state_51596__$1;
(statearr_51673_51736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (18))){
var inst_51503 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
if(cljs.core.truth_(inst_51503)){
var statearr_51674_51737 = state_51596__$1;
(statearr_51674_51737[(1)] = (19));

} else {
var statearr_51675_51738 = state_51596__$1;
(statearr_51675_51738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (42))){
var state_51596__$1 = state_51596;
var statearr_51676_51739 = state_51596__$1;
(statearr_51676_51739[(2)] = null);

(statearr_51676_51739[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (37))){
var inst_51562 = (state_51596[(2)]);
var state_51596__$1 = state_51596;
var statearr_51677_51740 = state_51596__$1;
(statearr_51677_51740[(2)] = inst_51562);

(statearr_51677_51740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51597 === (8))){
var inst_51456 = (state_51596[(8)]);
var inst_51469 = (state_51596[(22)]);
var inst_51469__$1 = cljs.core.seq.call(null,inst_51456);
var state_51596__$1 = (function (){var statearr_51678 = state_51596;
(statearr_51678[(22)] = inst_51469__$1);

return statearr_51678;
})();
if(inst_51469__$1){
var statearr_51679_51741 = state_51596__$1;
(statearr_51679_51741[(1)] = (10));

} else {
var statearr_51680_51742 = state_51596__$1;
(statearr_51680_51742[(1)] = (11));

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
}
});})(c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38474__auto__,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto____0 = (function (){
var statearr_51681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51681[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto__);

(statearr_51681[(1)] = (1));

return statearr_51681;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto____1 = (function (state_51596){
while(true){
var ret_value__38476__auto__ = (function (){try{while(true){
var result__38477__auto__ = switch__38474__auto__.call(null,state_51596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38477__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38477__auto__;
}
break;
}
}catch (e51682){if((e51682 instanceof Object)){
var ex__38478__auto__ = e51682;
var statearr_51683_51743 = state_51596;
(statearr_51683_51743[(5)] = ex__38478__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_51596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e51682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38476__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51744 = state_51596;
state_51596 = G__51744;
continue;
} else {
return ret_value__38476__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto__ = function(state_51596){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto____1.call(this,state_51596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38475__auto__;
})()
;})(switch__38474__auto__,c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38564__auto__ = (function (){var statearr_51684 = f__38563__auto__.call(null);
(statearr_51684[(6)] = c__38562__auto__);

return statearr_51684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38564__auto__);
});})(c__38562__auto__,map__51441,map__51441__$1,opts,before_jsload,on_jsload,reload_dependents,map__51442,map__51442__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38562__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__51747,link){
var map__51748 = p__51747;
var map__51748__$1 = ((((!((map__51748 == null)))?((((map__51748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51748):map__51748);
var file = cljs.core.get.call(null,map__51748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__51748,map__51748__$1,file){
return (function (p1__51745_SHARP_,p2__51746_SHARP_){
if(cljs.core._EQ_.call(null,p1__51745_SHARP_,p2__51746_SHARP_)){
return p1__51745_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__51748,map__51748__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__51751){
var map__51752 = p__51751;
var map__51752__$1 = ((((!((map__51752 == null)))?((((map__51752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51752.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51752):map__51752);
var match_length = cljs.core.get.call(null,map__51752__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__51752__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__51750_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__51750_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__51754_SHARP_,p2__51755_SHARP_){
return cljs.core.assoc.call(null,p1__51754_SHARP_,cljs.core.get.call(null,p2__51755_SHARP_,key),p2__51755_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_51756 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_51756);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_51756);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__51757,p__51758){
var map__51759 = p__51757;
var map__51759__$1 = ((((!((map__51759 == null)))?((((map__51759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51759.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51759):map__51759);
var on_cssload = cljs.core.get.call(null,map__51759__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__51760 = p__51758;
var map__51760__$1 = ((((!((map__51760 == null)))?((((map__51760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51760.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__51760):map__51760);
var files_msg = map__51760__$1;
var files = cljs.core.get.call(null,map__51760__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1521280401446
