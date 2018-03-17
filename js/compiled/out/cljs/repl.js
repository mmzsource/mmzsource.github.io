// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__52565){
var map__52566 = p__52565;
var map__52566__$1 = ((((!((map__52566 == null)))?((((map__52566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52566):map__52566);
var m = map__52566__$1;
var n = cljs.core.get.call(null,map__52566__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__52566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52568_52590 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52569_52591 = null;
var count__52570_52592 = (0);
var i__52571_52593 = (0);
while(true){
if((i__52571_52593 < count__52570_52592)){
var f_52594 = cljs.core._nth.call(null,chunk__52569_52591,i__52571_52593);
cljs.core.println.call(null,"  ",f_52594);

var G__52595 = seq__52568_52590;
var G__52596 = chunk__52569_52591;
var G__52597 = count__52570_52592;
var G__52598 = (i__52571_52593 + (1));
seq__52568_52590 = G__52595;
chunk__52569_52591 = G__52596;
count__52570_52592 = G__52597;
i__52571_52593 = G__52598;
continue;
} else {
var temp__4657__auto___52599 = cljs.core.seq.call(null,seq__52568_52590);
if(temp__4657__auto___52599){
var seq__52568_52600__$1 = temp__4657__auto___52599;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52568_52600__$1)){
var c__35281__auto___52601 = cljs.core.chunk_first.call(null,seq__52568_52600__$1);
var G__52602 = cljs.core.chunk_rest.call(null,seq__52568_52600__$1);
var G__52603 = c__35281__auto___52601;
var G__52604 = cljs.core.count.call(null,c__35281__auto___52601);
var G__52605 = (0);
seq__52568_52590 = G__52602;
chunk__52569_52591 = G__52603;
count__52570_52592 = G__52604;
i__52571_52593 = G__52605;
continue;
} else {
var f_52606 = cljs.core.first.call(null,seq__52568_52600__$1);
cljs.core.println.call(null,"  ",f_52606);

var G__52607 = cljs.core.next.call(null,seq__52568_52600__$1);
var G__52608 = null;
var G__52609 = (0);
var G__52610 = (0);
seq__52568_52590 = G__52607;
chunk__52569_52591 = G__52608;
count__52570_52592 = G__52609;
i__52571_52593 = G__52610;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_52611 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34442__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34442__auto__)){
return or__34442__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_52611);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_52611)))?cljs.core.second.call(null,arglists_52611):arglists_52611));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__52572_52612 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__52573_52613 = null;
var count__52574_52614 = (0);
var i__52575_52615 = (0);
while(true){
if((i__52575_52615 < count__52574_52614)){
var vec__52576_52616 = cljs.core._nth.call(null,chunk__52573_52613,i__52575_52615);
var name_52617 = cljs.core.nth.call(null,vec__52576_52616,(0),null);
var map__52579_52618 = cljs.core.nth.call(null,vec__52576_52616,(1),null);
var map__52579_52619__$1 = ((((!((map__52579_52618 == null)))?((((map__52579_52618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52579_52618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52579_52618):map__52579_52618);
var doc_52620 = cljs.core.get.call(null,map__52579_52619__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52621 = cljs.core.get.call(null,map__52579_52619__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52617);

cljs.core.println.call(null," ",arglists_52621);

if(cljs.core.truth_(doc_52620)){
cljs.core.println.call(null," ",doc_52620);
} else {
}

var G__52622 = seq__52572_52612;
var G__52623 = chunk__52573_52613;
var G__52624 = count__52574_52614;
var G__52625 = (i__52575_52615 + (1));
seq__52572_52612 = G__52622;
chunk__52573_52613 = G__52623;
count__52574_52614 = G__52624;
i__52575_52615 = G__52625;
continue;
} else {
var temp__4657__auto___52626 = cljs.core.seq.call(null,seq__52572_52612);
if(temp__4657__auto___52626){
var seq__52572_52627__$1 = temp__4657__auto___52626;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52572_52627__$1)){
var c__35281__auto___52628 = cljs.core.chunk_first.call(null,seq__52572_52627__$1);
var G__52629 = cljs.core.chunk_rest.call(null,seq__52572_52627__$1);
var G__52630 = c__35281__auto___52628;
var G__52631 = cljs.core.count.call(null,c__35281__auto___52628);
var G__52632 = (0);
seq__52572_52612 = G__52629;
chunk__52573_52613 = G__52630;
count__52574_52614 = G__52631;
i__52575_52615 = G__52632;
continue;
} else {
var vec__52581_52633 = cljs.core.first.call(null,seq__52572_52627__$1);
var name_52634 = cljs.core.nth.call(null,vec__52581_52633,(0),null);
var map__52584_52635 = cljs.core.nth.call(null,vec__52581_52633,(1),null);
var map__52584_52636__$1 = ((((!((map__52584_52635 == null)))?((((map__52584_52635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52584_52635.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52584_52635):map__52584_52635);
var doc_52637 = cljs.core.get.call(null,map__52584_52636__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_52638 = cljs.core.get.call(null,map__52584_52636__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_52634);

cljs.core.println.call(null," ",arglists_52638);

if(cljs.core.truth_(doc_52637)){
cljs.core.println.call(null," ",doc_52637);
} else {
}

var G__52639 = cljs.core.next.call(null,seq__52572_52627__$1);
var G__52640 = null;
var G__52641 = (0);
var G__52642 = (0);
seq__52572_52612 = G__52639;
chunk__52573_52613 = G__52640;
count__52574_52614 = G__52641;
i__52575_52615 = G__52642;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__52586 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__52587 = null;
var count__52588 = (0);
var i__52589 = (0);
while(true){
if((i__52589 < count__52588)){
var role = cljs.core._nth.call(null,chunk__52587,i__52589);
var temp__4657__auto___52643__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52643__$1)){
var spec_52644 = temp__4657__auto___52643__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_52644));
} else {
}

var G__52645 = seq__52586;
var G__52646 = chunk__52587;
var G__52647 = count__52588;
var G__52648 = (i__52589 + (1));
seq__52586 = G__52645;
chunk__52587 = G__52646;
count__52588 = G__52647;
i__52589 = G__52648;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__52586);
if(temp__4657__auto____$1){
var seq__52586__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52586__$1)){
var c__35281__auto__ = cljs.core.chunk_first.call(null,seq__52586__$1);
var G__52649 = cljs.core.chunk_rest.call(null,seq__52586__$1);
var G__52650 = c__35281__auto__;
var G__52651 = cljs.core.count.call(null,c__35281__auto__);
var G__52652 = (0);
seq__52586 = G__52649;
chunk__52587 = G__52650;
count__52588 = G__52651;
i__52589 = G__52652;
continue;
} else {
var role = cljs.core.first.call(null,seq__52586__$1);
var temp__4657__auto___52653__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___52653__$2)){
var spec_52654 = temp__4657__auto___52653__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_52654));
} else {
}

var G__52655 = cljs.core.next.call(null,seq__52586__$1);
var G__52656 = null;
var G__52657 = (0);
var G__52658 = (0);
seq__52586 = G__52655;
chunk__52587 = G__52656;
count__52588 = G__52657;
i__52589 = G__52658;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1521280402958
