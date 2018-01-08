// Compiled by ClojureScript 1.9.473 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__13064_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__13064_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__13069 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__13070 = null;
var count__13071 = (0);
var i__13072 = (0);
while(true){
if((i__13072 < count__13071)){
var s = cljs.core._nth.call(null,chunk__13070,i__13072);
var temp__4657__auto___13073 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___13073)){
var sheet_13074 = temp__4657__auto___13073;
var temp__4657__auto___13075__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13074.href,changed);
if(cljs.core.truth_(temp__4657__auto___13075__$1)){
var href_uri_13076 = temp__4657__auto___13075__$1;
sheet_13074.ownerNode.href = href_uri_13076.makeUnique().toString();
} else {
}
} else {
}

var G__13077 = seq__13069;
var G__13078 = chunk__13070;
var G__13079 = count__13071;
var G__13080 = (i__13072 + (1));
seq__13069 = G__13077;
chunk__13070 = G__13078;
count__13071 = G__13079;
i__13072 = G__13080;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13069);
if(temp__4657__auto__){
var seq__13069__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13069__$1)){
var c__7963__auto__ = cljs.core.chunk_first.call(null,seq__13069__$1);
var G__13081 = cljs.core.chunk_rest.call(null,seq__13069__$1);
var G__13082 = c__7963__auto__;
var G__13083 = cljs.core.count.call(null,c__7963__auto__);
var G__13084 = (0);
seq__13069 = G__13081;
chunk__13070 = G__13082;
count__13071 = G__13083;
i__13072 = G__13084;
continue;
} else {
var s = cljs.core.first.call(null,seq__13069__$1);
var temp__4657__auto___13085__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___13085__$1)){
var sheet_13086 = temp__4657__auto___13085__$1;
var temp__4657__auto___13087__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_13086.href,changed);
if(cljs.core.truth_(temp__4657__auto___13087__$2)){
var href_uri_13088 = temp__4657__auto___13087__$2;
sheet_13086.ownerNode.href = href_uri_13088.makeUnique().toString();
} else {
}
} else {
}

var G__13089 = cljs.core.next.call(null,seq__13069__$1);
var G__13090 = null;
var G__13091 = (0);
var G__13092 = (0);
seq__13069 = G__13089;
chunk__13070 = G__13090;
count__13071 = G__13091;
i__13072 = G__13092;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__13097 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__13098 = null;
var count__13099 = (0);
var i__13100 = (0);
while(true){
if((i__13100 < count__13099)){
var s = cljs.core._nth.call(null,chunk__13098,i__13100);
var temp__4657__auto___13101 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___13101)){
var image_13102 = temp__4657__auto___13101;
var temp__4657__auto___13103__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_13102.src,changed);
if(cljs.core.truth_(temp__4657__auto___13103__$1)){
var href_uri_13104 = temp__4657__auto___13103__$1;
image_13102.src = href_uri_13104.makeUnique().toString();
} else {
}
} else {
}

var G__13105 = seq__13097;
var G__13106 = chunk__13098;
var G__13107 = count__13099;
var G__13108 = (i__13100 + (1));
seq__13097 = G__13105;
chunk__13098 = G__13106;
count__13099 = G__13107;
i__13100 = G__13108;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13097);
if(temp__4657__auto__){
var seq__13097__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13097__$1)){
var c__7963__auto__ = cljs.core.chunk_first.call(null,seq__13097__$1);
var G__13109 = cljs.core.chunk_rest.call(null,seq__13097__$1);
var G__13110 = c__7963__auto__;
var G__13111 = cljs.core.count.call(null,c__7963__auto__);
var G__13112 = (0);
seq__13097 = G__13109;
chunk__13098 = G__13110;
count__13099 = G__13111;
i__13100 = G__13112;
continue;
} else {
var s = cljs.core.first.call(null,seq__13097__$1);
var temp__4657__auto___13113__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___13113__$1)){
var image_13114 = temp__4657__auto___13113__$1;
var temp__4657__auto___13115__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_13114.src,changed);
if(cljs.core.truth_(temp__4657__auto___13115__$2)){
var href_uri_13116 = temp__4657__auto___13115__$2;
image_13114.src = href_uri_13116.makeUnique().toString();
} else {
}
} else {
}

var G__13117 = cljs.core.next.call(null,seq__13097__$1);
var G__13118 = null;
var G__13119 = (0);
var G__13120 = (0);
seq__13097 = G__13117;
chunk__13098 = G__13118;
count__13099 = G__13119;
i__13100 = G__13120;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__13123){
var map__13126 = p__13123;
var map__13126__$1 = ((((!((map__13126 == null)))?((((map__13126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13126.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13126):map__13126);
var on_jsload = cljs.core.get.call(null,map__13126__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__13126,map__13126__$1,on_jsload){
return (function (p1__13121_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__13121_SHARP_,".js");
});})(map__13126,map__13126__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__13126,map__13126__$1,on_jsload){
return (function (p1__13122_SHARP_){
return goog.Uri.parse(p1__13122_SHARP_).makeUnique();
});})(js_files,map__13126,map__13126__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__13126,map__13126__$1,on_jsload){
return (function() { 
var G__13128__delegate = function (_){
return on_jsload.call(null);
};
var G__13128 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__13129__i = 0, G__13129__a = new Array(arguments.length -  0);
while (G__13129__i < G__13129__a.length) {G__13129__a[G__13129__i] = arguments[G__13129__i + 0]; ++G__13129__i;}
  _ = new cljs.core.IndexedSeq(G__13129__a,0);
} 
return G__13128__delegate.call(this,_);};
G__13128.cljs$lang$maxFixedArity = 0;
G__13128.cljs$lang$applyTo = (function (arglist__13130){
var _ = cljs.core.seq(arglist__13130);
return G__13128__delegate(_);
});
G__13128.cljs$core$IFn$_invoke$arity$variadic = G__13128__delegate;
return G__13128;
})()
;})(js_files,map__13126,map__13126__$1,on_jsload))
,((function (js_files,map__13126,map__13126__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__13126,map__13126__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),cljs.core.str.cljs$core$IFn$_invoke$arity$1("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__13135_13139 = cljs.core.seq.call(null,things_to_log);
var chunk__13136_13140 = null;
var count__13137_13141 = (0);
var i__13138_13142 = (0);
while(true){
if((i__13138_13142 < count__13137_13141)){
var t_13143 = cljs.core._nth.call(null,chunk__13136_13140,i__13138_13142);
console.log(t_13143);

var G__13144 = seq__13135_13139;
var G__13145 = chunk__13136_13140;
var G__13146 = count__13137_13141;
var G__13147 = (i__13138_13142 + (1));
seq__13135_13139 = G__13144;
chunk__13136_13140 = G__13145;
count__13137_13141 = G__13146;
i__13138_13142 = G__13147;
continue;
} else {
var temp__4657__auto___13148 = cljs.core.seq.call(null,seq__13135_13139);
if(temp__4657__auto___13148){
var seq__13135_13149__$1 = temp__4657__auto___13148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13135_13149__$1)){
var c__7963__auto___13150 = cljs.core.chunk_first.call(null,seq__13135_13149__$1);
var G__13151 = cljs.core.chunk_rest.call(null,seq__13135_13149__$1);
var G__13152 = c__7963__auto___13150;
var G__13153 = cljs.core.count.call(null,c__7963__auto___13150);
var G__13154 = (0);
seq__13135_13139 = G__13151;
chunk__13136_13140 = G__13152;
count__13137_13141 = G__13153;
i__13138_13142 = G__13154;
continue;
} else {
var t_13155 = cljs.core.first.call(null,seq__13135_13149__$1);
console.log(t_13155);

var G__13156 = cljs.core.next.call(null,seq__13135_13149__$1);
var G__13157 = null;
var G__13158 = (0);
var G__13159 = (0);
seq__13135_13139 = G__13156;
chunk__13136_13140 = G__13157;
count__13137_13141 = G__13158;
i__13138_13142 = G__13159;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return (typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined');
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__13160_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13160_SHARP_)].join('');
}),changed);
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__13162 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__13162);

adzerk.boot_reload.reload.reload_css.call(null,G__13162);

adzerk.boot_reload.reload.reload_img.call(null,G__13162);

return G__13162;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map