// Compiled by ClojureScript 1.9.473 {}
goog.provide('clojure_game_2.core');
goog.require('cljs.core');
goog.require('play_cljs.core');
if(typeof clojure_game_2.core.game !== 'undefined'){
} else {
clojure_game_2.core.game = play_cljs.core.create_game.call(null,(640),(480));
}
if(typeof clojure_game_2.core.state !== 'undefined'){
} else {
clojure_game_2.core.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
clojure_game_2.core.main_screen = (function (){
if(typeof clojure_game_2.core.t_clojure_game_2$core13215 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Screen}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
clojure_game_2.core.t_clojure_game_2$core13215 = (function (meta13216){
this.meta13216 = meta13216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
clojure_game_2.core.t_clojure_game_2$core13215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13217,meta13216__$1){
var self__ = this;
var _13217__$1 = this;
return (new clojure_game_2.core.t_clojure_game_2$core13215(meta13216__$1));
});

clojure_game_2.core.t_clojure_game_2$core13215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13217){
var self__ = this;
var _13217__$1 = this;
return self__.meta13216;
});

clojure_game_2.core.t_clojure_game_2$core13215.prototype.play_cljs$core$Screen$ = cljs.core.PROTOCOL_SENTINEL;

clojure_game_2.core.t_clojure_game_2$core13215.prototype.play_cljs$core$Screen$on_show$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.reset_BANG_.call(null,clojure_game_2.core.state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-x","text-x",-1791964043),(20),new cljs.core.Keyword(null,"text-y","text-y",-1680264360),(30)], null));
});

clojure_game_2.core.t_clojure_game_2$core13215.prototype.play_cljs$core$Screen$on_hide$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
});

clojure_game_2.core.t_clojure_game_2$core13215.prototype.play_cljs$core$Screen$on_render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
play_cljs.core.render.call(null,clojure_game_2.core.game,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"lightblue"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(640),new cljs.core.Keyword(null,"height","height",1025178622),(480)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"black"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),"Hello, world!",new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"text-x","text-x",-1791964043).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojure_game_2.core.state)),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"text-y","text-y",-1680264360).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clojure_game_2.core.state)),new cljs.core.Keyword(null,"size","size",1098693007),(16),new cljs.core.Keyword(null,"font","font",-1506159249),"Georgia",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"italic","italic",32599196)], null)], null)], null)], null));

return cljs.core.swap_BANG_.call(null,clojure_game_2.core.state,cljs.core.update,new cljs.core.Keyword(null,"text-x","text-x",-1791964043),cljs.core.inc);
});

clojure_game_2.core.t_clojure_game_2$core13215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta13216","meta13216",-501243119,null)], null);
});

clojure_game_2.core.t_clojure_game_2$core13215.cljs$lang$type = true;

clojure_game_2.core.t_clojure_game_2$core13215.cljs$lang$ctorStr = "clojure-game-2.core/t_clojure_game_2$core13215";

clojure_game_2.core.t_clojure_game_2$core13215.cljs$lang$ctorPrWriter = (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"clojure-game-2.core/t_clojure_game_2$core13215");
});

clojure_game_2.core.__GT_t_clojure_game_2$core13215 = (function clojure_game_2$core$__GT_t_clojure_game_2$core13215(meta13216){
return (new clojure_game_2.core.t_clojure_game_2$core13215(meta13216));
});

}

return (new clojure_game_2.core.t_clojure_game_2$core13215(cljs.core.PersistentArrayMap.EMPTY));
})()
;
var G__13218_13219 = clojure_game_2.core.game;
play_cljs.core.start.call(null,G__13218_13219);

play_cljs.core.set_screen.call(null,G__13218_13219,clojure_game_2.core.main_screen);


//# sourceMappingURL=core.js.map