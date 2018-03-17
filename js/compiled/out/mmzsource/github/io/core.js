// Compiled by ClojureScript 1.9.908 {}
goog.provide('mmzsource.github.io.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('mmzsource.github.io.events');
goog.require('mmzsource.github.io.views');
goog.require('mmzsource.github.io.config');
mmzsource.github.io.core.dev_setup = (function mmzsource$github$io$core$dev_setup(){
if(mmzsource.github.io.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
mmzsource.github.io.core.mount_root = (function mmzsource$github$io$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmzsource.github.io.views.main_panel], null),document.getElementById("app"));
});
mmzsource.github.io.core.init = (function mmzsource$github$io$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("mmzsource.github.io.events","initialize-db","mmzsource.github.io.events/initialize-db",524617037)], null));

mmzsource.github.io.core.dev_setup.call(null);

return mmzsource.github.io.core.mount_root.call(null);
});
goog.exportSymbol('mmzsource.github.io.core.init', mmzsource.github.io.core.init);
mmzsource.github.io.core.init.call(null);

//# sourceMappingURL=core.js.map?rel=1521280401512
