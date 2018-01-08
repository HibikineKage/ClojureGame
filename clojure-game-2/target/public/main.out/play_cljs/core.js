// Compiled by ClojureScript 1.9.473 {}
goog.provide('play_cljs.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('p5.core');
goog.require('p5.tiled_map');
goog.require('cljs.core.async');

/**
 * A screen object provides the basic lifecycle for a game.
 * Simple games may only need to have one screen. They are a useful way to
 * isolate different aspects of your game. For example, you could make one
 * screen display the title and menu, and another screen contain the game
 * itself.
 * 
 * You can create a screen by using `reify` like this:
 * 
 * ```
 * (def main-screen
 *   (reify p/Screen
 *  (on-show [this])
 *  (on-hide [this])
 *  (on-render [this])))
 * ```
 * @interface
 */
play_cljs.core.Screen = function(){};

/**
 * Runs once, when the screen first appears.
 */
play_cljs.core.on_show = (function play_cljs$core$on_show(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_show$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_show$arity$1(this$);
} else {
var x__7812__auto__ = (((this$ == null))?null:this$);
var m__7813__auto__ = (play_cljs.core.on_show[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,this$);
} else {
var m__7813__auto____$1 = (play_cljs.core.on_show["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-show",this$);
}
}
}
});

/**
 * Runs once, when the screen is no longer displayed.
 */
play_cljs.core.on_hide = (function play_cljs$core$on_hide(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_hide$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_hide$arity$1(this$);
} else {
var x__7812__auto__ = (((this$ == null))?null:this$);
var m__7813__auto__ = (play_cljs.core.on_hide[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,this$);
} else {
var m__7813__auto____$1 = (play_cljs.core.on_hide["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-hide",this$);
}
}
}
});

/**
 * Runs each time the game is ready to render another frame.
 */
play_cljs.core.on_render = (function play_cljs$core$on_render(this$){
if((!((this$ == null))) && (!((this$.play_cljs$core$Screen$on_render$arity$1 == null)))){
return this$.play_cljs$core$Screen$on_render$arity$1(this$);
} else {
var x__7812__auto__ = (((this$ == null))?null:this$);
var m__7813__auto__ = (play_cljs.core.on_render[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,this$);
} else {
var m__7813__auto____$1 = (play_cljs.core.on_render["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Screen.on-render",this$);
}
}
}
});


/**
 * A game object contains the internal renderer object and various bits of state
 * that are important to the overall execution of the game. Every play-cljs game
 * should create just one such object by calling [create-game](#create-game).
 * @interface
 */
play_cljs.core.Game = function(){};

/**
 * Creates the canvas element.
 */
play_cljs.core.start = (function play_cljs$core$start(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$start$arity$1 == null)))){
return game.play_cljs$core$Game$start$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.start[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.start["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.start",game);
}
}
}
});

/**
 * Renders the provided data structure.
 */
play_cljs.core.render = (function play_cljs$core$render(game,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$render$arity$2 == null)))){
return game.play_cljs$core$Game$render$arity$2(game,content);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.render[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,content);
} else {
var m__7813__auto____$1 = (play_cljs.core.render["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.render",game);
}
}
}
});

/**
 * Renders the provided data structure off-screen and associates it with the given name. Returns an [Image](#Image) object.
 */
play_cljs.core.pre_render = (function play_cljs$core$pre_render(game,image_name,width,height,content){
if((!((game == null))) && (!((game.play_cljs$core$Game$pre_render$arity$5 == null)))){
return game.play_cljs$core$Game$pre_render$arity$5(game,image_name,width,height,content);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.pre_render[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,image_name,width,height,content);
} else {
var m__7813__auto____$1 = (play_cljs.core.pre_render["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,image_name,width,height,content);
} else {
throw cljs.core.missing_protocol.call(null,"Game.pre-render",game);
}
}
}
});

/**
 * Loads an image. Returns an [Image](#Image) object.
 */
play_cljs.core.load_image = (function play_cljs$core$load_image(game,path){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_image$arity$2 == null)))){
return game.play_cljs$core$Game$load_image$arity$2(game,path);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.load_image[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,path);
} else {
var m__7813__auto____$1 = (play_cljs.core.load_image["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,path);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-image",game);
}
}
}
});

/**
 * Loads a tiled map. Returns a [TiledMap](#TiledMap) object.
 * A tiled map with the provided name must already be loaded
 * (see the TiledMap docs for details).
 */
play_cljs.core.load_tiled_map = (function play_cljs$core$load_tiled_map(game,map_name){
if((!((game == null))) && (!((game.play_cljs$core$Game$load_tiled_map$arity$2 == null)))){
return game.play_cljs$core$Game$load_tiled_map$arity$2(game,map_name);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.load_tiled_map[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,map_name);
} else {
var m__7813__auto____$1 = (play_cljs.core.load_tiled_map["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,map_name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.load-tiled-map",game);
}
}
}
});

/**
 * Returns the [Screen](#Screen) object currently being displayed.
 */
play_cljs.core.get_screen = (function play_cljs$core$get_screen(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_screen$arity$1 == null)))){
return game.play_cljs$core$Game$get_screen$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_screen[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_screen["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-screen",game);
}
}
}
});

/**
 * Sets the [Screen](#Screen) object to be displayed.
 */
play_cljs.core.set_screen = (function play_cljs$core$set_screen(game,screen){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_screen$arity$2 == null)))){
return game.play_cljs$core$Game$set_screen$arity$2(game,screen);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.set_screen[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,screen);
} else {
var m__7813__auto____$1 = (play_cljs.core.set_screen["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,screen);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-screen",game);
}
}
}
});

/**
 * Returns the internal renderer object.
 */
play_cljs.core.get_renderer = (function play_cljs$core$get_renderer(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_renderer$arity$1 == null)))){
return game.play_cljs$core$Game$get_renderer$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_renderer[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_renderer["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-renderer",game);
}
}
}
});

/**
 * Returns the internal canvas object.
 */
play_cljs.core.get_canvas = (function play_cljs$core$get_canvas(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_canvas$arity$1 == null)))){
return game.play_cljs$core$Game$get_canvas$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_canvas[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_canvas["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-canvas",game);
}
}
}
});

/**
 * Returns the total time transpired since the game started, in milliseconds.
 */
play_cljs.core.get_total_time = (function play_cljs$core$get_total_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_total_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_total_time$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_total_time[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_total_time["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-total-time",game);
}
}
}
});

/**
 * Returns the time since the last frame was rendered, in milliseconds.
 */
play_cljs.core.get_delta_time = (function play_cljs$core$get_delta_time(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_delta_time$arity$1 == null)))){
return game.play_cljs$core$Game$get_delta_time$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_delta_time[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_delta_time["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-delta-time",game);
}
}
}
});

/**
 * Returns a set containing the key codes for the keys currently being pressed.
 */
play_cljs.core.get_pressed_keys = (function play_cljs$core$get_pressed_keys(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_pressed_keys$arity$1 == null)))){
return game.play_cljs$core$Game$get_pressed_keys$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_pressed_keys[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_pressed_keys["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-pressed-keys",game);
}
}
}
});

/**
 * Returns the virtual width of the game.
 */
play_cljs.core.get_width = (function play_cljs$core$get_width(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_width$arity$1 == null)))){
return game.play_cljs$core$Game$get_width$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_width[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_width["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-width",game);
}
}
}
});

/**
 * Returns the virtual height of the game.
 */
play_cljs.core.get_height = (function play_cljs$core$get_height(game){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_height$arity$1 == null)))){
return game.play_cljs$core$Game$get_height$arity$1(game);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_height[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_height["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-height",game);
}
}
}
});

/**
 * Sets the virtual width and height of the game.
 */
play_cljs.core.set_size = (function play_cljs$core$set_size(game,width,height){
if((!((game == null))) && (!((game.play_cljs$core$Game$set_size$arity$3 == null)))){
return game.play_cljs$core$Game$set_size$arity$3(game,width,height);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.set_size[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,width,height);
} else {
var m__7813__auto____$1 = (play_cljs.core.set_size["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,width,height);
} else {
throw cljs.core.missing_protocol.call(null,"Game.set-size",game);
}
}
}
});

/**
 * Gets the asset with the given name.
 */
play_cljs.core.get_asset = (function play_cljs$core$get_asset(game,name){
if((!((game == null))) && (!((game.play_cljs$core$Game$get_asset$arity$2 == null)))){
return game.play_cljs$core$Game$get_asset$arity$2(game,name);
} else {
var x__7812__auto__ = (((game == null))?null:game);
var m__7813__auto__ = (play_cljs.core.get_asset[goog.typeOf(x__7812__auto__)]);
if(!((m__7813__auto__ == null))){
return m__7813__auto__.call(null,game,name);
} else {
var m__7813__auto____$1 = (play_cljs.core.get_asset["_"]);
if(!((m__7813__auto____$1 == null))){
return m__7813__auto____$1.call(null,game,name);
} else {
throw cljs.core.missing_protocol.call(null,"Game.get-asset",game);
}
}
}
});

p5.disableFriendlyErrors = true;
play_cljs.core.update_opts = (function play_cljs$core$update_opts(opts,parent_opts,defaults){
var parent_opts__$1 = cljs.core.merge.call(null,defaults,parent_opts);
return cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,defaults,cljs.core.dissoc.call(null,parent_opts__$1,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)),opts),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(parent_opts__$1)),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(parent_opts__$1));
});
play_cljs.core.basic_defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"scale-x","scale-x",-13535878),(1),new cljs.core.Keyword(null,"scale-y","scale-y",1326124277),(1)], null);
play_cljs.core.text_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),(32),new cljs.core.Keyword(null,"font","font",-1506159249),"Helvetica",new cljs.core.Keyword(null,"halign","halign",-1113968481),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"valign","valign",1485197511),new cljs.core.Keyword(null,"baseline","baseline",1151033280),new cljs.core.Keyword(null,"leading","leading",-1239035032),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"normal","normal",-1519123858)], null));
play_cljs.core.img_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sx","sx",-403071592),(0),new cljs.core.Keyword(null,"sy","sy",227523849),(0)], null));
play_cljs.core.rgb_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-r","max-r",1711699344),(255),new cljs.core.Keyword(null,"max-g","max-g",-1655662483),(255),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(255),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.core.hsb_defaults = cljs.core.merge.call(null,play_cljs.core.basic_defaults,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-h","max-h",1409940394),(360),new cljs.core.Keyword(null,"max-s","max-s",781928940),(100),new cljs.core.Keyword(null,"max-b","max-b",-1756758912),(100),new cljs.core.Keyword(null,"max-a","max-a",2065821478),(1)], null));
play_cljs.core.halign__GT_constant = (function play_cljs$core$halign__GT_constant(renderer,halign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"left","left",-399115937),renderer.LEFT,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"right","right",-452581833),renderer.RIGHT], null),halign);
});
play_cljs.core.valign__GT_constant = (function play_cljs$core$valign__GT_constant(renderer,valign){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"top","top",-1856271961),renderer.TOP,new cljs.core.Keyword(null,"center","center",-748944368),renderer.CENTER,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),renderer.BOTTOM,new cljs.core.Keyword(null,"baseline","baseline",1151033280),renderer.BASELINE], null),valign);
});
play_cljs.core.style__GT_constant = (function play_cljs$core$style__GT_constant(renderer,style){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"normal","normal",-1519123858),renderer.NORMAL,new cljs.core.Keyword(null,"italic","italic",32599196),renderer.ITALIC,new cljs.core.Keyword(null,"bold","bold",-116809535),renderer.BOLD], null),style);
});
if(typeof play_cljs.core.draw_sketch_BANG_ !== 'undefined'){
} else {
play_cljs.core.draw_sketch_BANG_ = (function (){var method_table__8077__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8078__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8079__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8080__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8081__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"play-cljs.core","draw-sketch!"),((function (method_table__8077__auto__,prefer_table__8078__auto__,method_cache__8079__auto__,cached_hierarchy__8080__auto__,hierarchy__8081__auto__){
return (function (game,renderer,content,parent_opts){
return cljs.core.first.call(null,content);
});})(method_table__8077__auto__,prefer_table__8078__auto__,method_cache__8079__auto__,cached_hierarchy__8080__auto__,hierarchy__8081__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8081__auto__,method_table__8077__auto__,prefer_table__8078__auto__,method_cache__8079__auto__,cached_hierarchy__8080__auto__));
})();
}
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"div","div",1057191632),(function (game,renderer,content,parent_opts){
var vec__12525 = content;
var seq__12526 = cljs.core.seq.call(null,vec__12525);
var first__12527 = cljs.core.first.call(null,seq__12526);
var seq__12526__$1 = cljs.core.next.call(null,seq__12526);
var command = first__12527;
var first__12527__$1 = cljs.core.first.call(null,seq__12526__$1);
var seq__12526__$2 = cljs.core.next.call(null,seq__12526__$1);
var opts = first__12527__$1;
var children = seq__12526__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"text","text",-1790561697),(function (game,renderer,content,parent_opts){
var vec__12528 = content;
var seq__12529 = cljs.core.seq.call(null,vec__12528);
var first__12530 = cljs.core.first.call(null,seq__12529);
var seq__12529__$1 = cljs.core.next.call(null,seq__12529);
var command = first__12530;
var first__12530__$1 = cljs.core.first.call(null,seq__12529__$1);
var seq__12529__$2 = cljs.core.next.call(null,seq__12529__$1);
var opts = first__12530__$1;
var children = seq__12529__$2;
var map__12531 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.text_defaults);
var map__12531__$1 = ((((!((map__12531 == null)))?((((map__12531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12531):map__12531);
var opts__$1 = map__12531__$1;
var value = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"value","value",305978217));
var x = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var size = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var font = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"font","font",-1506159249));
var halign = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"halign","halign",-1113968481));
var valign = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"valign","valign",1485197511));
var leading = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"leading","leading",-1239035032));
var style = cljs.core.get.call(null,map__12531__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var G__12533_12534 = renderer;
G__12533_12534.textSize(size);

G__12533_12534.textFont(font);

G__12533_12534.textAlign(play_cljs.core.halign__GT_constant.call(null,renderer,halign),play_cljs.core.valign__GT_constant.call(null,renderer,valign));

G__12533_12534.textLeading(leading);

G__12533_12534.textStyle(play_cljs.core.style__GT_constant.call(null,renderer,style));

G__12533_12534.text(value,x,y);


return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"arc","arc",252411045),(function (game,renderer,content,parent_opts){
var vec__12535 = content;
var seq__12536 = cljs.core.seq.call(null,vec__12535);
var first__12537 = cljs.core.first.call(null,seq__12536);
var seq__12536__$1 = cljs.core.next.call(null,seq__12536);
var command = first__12537;
var first__12537__$1 = cljs.core.first.call(null,seq__12536__$1);
var seq__12536__$2 = cljs.core.next.call(null,seq__12536__$1);
var opts = first__12537__$1;
var children = seq__12536__$2;
var map__12538 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12538__$1 = ((((!((map__12538 == null)))?((((map__12538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12538.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12538):map__12538);
var opts__$1 = map__12538__$1;
var x = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var start = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.call(null,map__12538__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
renderer.arc(x,y,width,height,start,stop);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),(function (game,renderer,content,parent_opts){
var vec__12540 = content;
var seq__12541 = cljs.core.seq.call(null,vec__12540);
var first__12542 = cljs.core.first.call(null,seq__12541);
var seq__12541__$1 = cljs.core.next.call(null,seq__12541);
var command = first__12542;
var first__12542__$1 = cljs.core.first.call(null,seq__12541__$1);
var seq__12541__$2 = cljs.core.next.call(null,seq__12541__$1);
var opts = first__12542__$1;
var children = seq__12541__$2;
var map__12543 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12543__$1 = ((((!((map__12543 == null)))?((((map__12543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12543.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12543):map__12543);
var opts__$1 = map__12543__$1;
var x = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12543__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.ellipse(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"line","line",212345235),(function (game,renderer,content,parent_opts){
var vec__12545 = content;
var seq__12546 = cljs.core.seq.call(null,vec__12545);
var first__12547 = cljs.core.first.call(null,seq__12546);
var seq__12546__$1 = cljs.core.next.call(null,seq__12546);
var command = first__12547;
var first__12547__$1 = cljs.core.first.call(null,seq__12546__$1);
var seq__12546__$2 = cljs.core.next.call(null,seq__12546__$1);
var opts = first__12547__$1;
var children = seq__12546__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12548 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12548__$1 = ((((!((map__12548 == null)))?((((map__12548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12548.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12548):map__12548);
var opts__$2 = map__12548__$1;
var x1 = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12548__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
renderer.line(x1,y1,x2,y2);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"point","point",1813198264),(function (game,renderer,content,parent_opts){
var vec__12550 = content;
var seq__12551 = cljs.core.seq.call(null,vec__12550);
var first__12552 = cljs.core.first.call(null,seq__12551);
var seq__12551__$1 = cljs.core.next.call(null,seq__12551);
var command = first__12552;
var first__12552__$1 = cljs.core.first.call(null,seq__12551__$1);
var seq__12551__$2 = cljs.core.next.call(null,seq__12551__$1);
var opts = first__12552__$1;
var children = seq__12551__$2;
var map__12553 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12553__$1 = ((((!((map__12553 == null)))?((((map__12553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12553.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12553):map__12553);
var opts__$1 = map__12553__$1;
var x = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12553__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
renderer.point(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"quad","quad",432820757),(function (game,renderer,content,parent_opts){
var vec__12555 = content;
var seq__12556 = cljs.core.seq.call(null,vec__12555);
var first__12557 = cljs.core.first.call(null,seq__12556);
var seq__12556__$1 = cljs.core.next.call(null,seq__12556);
var command = first__12557;
var first__12557__$1 = cljs.core.first.call(null,seq__12556__$1);
var seq__12556__$2 = cljs.core.next.call(null,seq__12556__$1);
var opts = first__12557__$1;
var children = seq__12556__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12558 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12558__$1 = ((((!((map__12558 == null)))?((((map__12558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12558):map__12558);
var opts__$2 = map__12558__$1;
var x1 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y4 = cljs.core.get.call(null,map__12558__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
renderer.quad(x1,y1,x2,y2,x3,y3,x4,y4);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rect","rect",-108902628),(function (game,renderer,content,parent_opts){
var vec__12560 = content;
var seq__12561 = cljs.core.seq.call(null,vec__12560);
var first__12562 = cljs.core.first.call(null,seq__12561);
var seq__12561__$1 = cljs.core.next.call(null,seq__12561);
var command = first__12562;
var first__12562__$1 = cljs.core.first.call(null,seq__12561__$1);
var seq__12561__$2 = cljs.core.next.call(null,seq__12561__$1);
var opts = first__12562__$1;
var children = seq__12561__$2;
var map__12563 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12563__$1 = ((((!((map__12563 == null)))?((((map__12563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12563.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12563):map__12563);
var opts__$1 = map__12563__$1;
var x = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12563__$1,new cljs.core.Keyword(null,"height","height",1025178622));
renderer.rect(x,y,width,height);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"triangle","triangle",-1828376667),(function (game,renderer,content,parent_opts){
var vec__12565 = content;
var seq__12566 = cljs.core.seq.call(null,vec__12565);
var first__12567 = cljs.core.first.call(null,seq__12566);
var seq__12566__$1 = cljs.core.next.call(null,seq__12566);
var command = first__12567;
var first__12567__$1 = cljs.core.first.call(null,seq__12566__$1);
var seq__12566__$2 = cljs.core.next.call(null,seq__12566__$1);
var opts = first__12567__$1;
var children = seq__12566__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12568 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12568__$1 = ((((!((map__12568 == null)))?((((map__12568.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12568.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12568):map__12568);
var opts__$2 = map__12568__$1;
var x1 = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y1 = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var x2 = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x3 = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var y3 = cljs.core.get.call(null,map__12568__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
renderer.triangle(x1,y1,x2,y2,x3,y3);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"image","image",-58725096),(function (game,renderer,content,parent_opts){
var vec__12570 = content;
var seq__12571 = cljs.core.seq.call(null,vec__12570);
var first__12572 = cljs.core.first.call(null,seq__12571);
var seq__12571__$1 = cljs.core.next.call(null,seq__12571);
var command = first__12572;
var first__12572__$1 = cljs.core.first.call(null,seq__12571__$1);
var seq__12571__$2 = cljs.core.next.call(null,seq__12571__$1);
var opts = first__12572__$1;
var children = seq__12571__$2;
var map__12573 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.img_defaults);
var map__12573__$1 = ((((!((map__12573 == null)))?((((map__12573.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12573.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12573):map__12573);
var opts__$1 = map__12573__$1;
var x = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var scale_x = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"scale-x","scale-x",-13535878));
var swidth = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"swidth","swidth",-976864420));
var flip_x = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var sheight = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"sheight","sheight",1322250621));
var height = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var flip_y = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var y = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var sy = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"sy","sy",227523849));
var width = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var scale_y = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"scale-y","scale-y",1326124277));
var sx = cljs.core.get.call(null,map__12573__$1,new cljs.core.Keyword(null,"sx","sx",-403071592));
var value__$1 = (function (){var or__7144__auto__ = value;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
var or__7144__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__7144__auto____$1)){
return or__7144__auto____$1;
} else {
return play_cljs.core.load_image.call(null,game,name);
}
}
})();
var swidth__$1 = (function (){var or__7144__auto__ = swidth;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
return value__$1.width;
}
})();
var sheight__$1 = (function (){var or__7144__auto__ = sheight;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
return value__$1.height;
}
})();
renderer.push();

renderer.translate(x,y);

renderer.scale(scale_x,scale_y);

if(cljs.core.truth_(flip_x)){
renderer.scale((-1),(1));

renderer.translate((- swidth__$1),(0));
} else {
}

if(cljs.core.truth_(flip_y)){
renderer.scale((1),(-1));

renderer.translate((0),(- sheight__$1));
} else {
}

renderer.image(value__$1,(0),(0),(function (){var or__7144__auto__ = width;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
return swidth__$1;
}
})(),(function (){var or__7144__auto__ = height;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
return sheight__$1;
}
})(),sx,sy,swidth__$1,sheight__$1);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"animation","animation",-1248293244),(function (game,renderer,content,parent_opts){
var vec__12575 = content;
var seq__12576 = cljs.core.seq.call(null,vec__12575);
var first__12577 = cljs.core.first.call(null,seq__12576);
var seq__12576__$1 = cljs.core.next.call(null,seq__12576);
var command = first__12577;
var first__12577__$1 = cljs.core.first.call(null,seq__12576__$1);
var seq__12576__$2 = cljs.core.next.call(null,seq__12576__$1);
var opts = first__12577__$1;
var children = seq__12576__$2;
var map__12578 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12578__$1 = ((((!((map__12578 == null)))?((((map__12578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12578):map__12578);
var opts__$1 = map__12578__$1;
var duration = cljs.core.get.call(null,map__12578__$1,new cljs.core.Keyword(null,"duration","duration",1444101068));
var images = cljs.core.vec.call(null,children);
var cycle_time = cljs.core.mod.call(null,play_cljs.core.get_total_time.call(null,game),(duration * cljs.core.count.call(null,images)));
var index = ((cycle_time / duration) | (0));
var image = cljs.core.get.call(null,images,index);
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,image,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (game,renderer,content,parent_opts){
var vec__12580 = content;
var seq__12581 = cljs.core.seq.call(null,vec__12580);
var first__12582 = cljs.core.first.call(null,seq__12581);
var seq__12581__$1 = cljs.core.next.call(null,seq__12581);
var command = first__12582;
var first__12582__$1 = cljs.core.first.call(null,seq__12581__$1);
var seq__12581__$2 = cljs.core.next.call(null,seq__12581__$1);
var opts = first__12582__$1;
var children = seq__12581__$2;
var map__12583 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12583__$1 = ((((!((map__12583 == null)))?((((map__12583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12583):map__12583);
var opts__$1 = map__12583__$1;
var grayscale = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.fill(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.fill(color);
} else {
if(cljs.core.truth_(colors)){
var vec__12585_12588 = colors;
var n1_12589 = cljs.core.nth.call(null,vec__12585_12588,(0),null);
var n2_12590 = cljs.core.nth.call(null,vec__12585_12588,(1),null);
var n3_12591 = cljs.core.nth.call(null,vec__12585_12588,(2),null);
renderer.fill(n1_12589,n2_12590,n3_12591);
} else {
renderer.noFill();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(function (game,renderer,content,parent_opts){
var vec__12592 = content;
var seq__12593 = cljs.core.seq.call(null,vec__12592);
var first__12594 = cljs.core.first.call(null,seq__12593);
var seq__12593__$1 = cljs.core.next.call(null,seq__12593);
var command = first__12594;
var first__12594__$1 = cljs.core.first.call(null,seq__12593__$1);
var seq__12593__$2 = cljs.core.next.call(null,seq__12593__$1);
var opts = first__12594__$1;
var children = seq__12593__$2;
var map__12595 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12595__$1 = ((((!((map__12595 == null)))?((((map__12595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12595.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12595):map__12595);
var opts__$1 = map__12595__$1;
var grayscale = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"grayscale","grayscale",-1069788285));
var color = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var colors = cljs.core.get.call(null,map__12595__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
renderer.push();

if(cljs.core.truth_(grayscale)){
renderer.stroke(grayscale);
} else {
if(cljs.core.truth_(color)){
renderer.stroke(color);
} else {
if(cljs.core.truth_(colors)){
var vec__12597_12600 = colors;
var n1_12601 = cljs.core.nth.call(null,vec__12597_12600,(0),null);
var n2_12602 = cljs.core.nth.call(null,vec__12597_12600,(1),null);
var n3_12603 = cljs.core.nth.call(null,vec__12597_12600,(2),null);
renderer.stroke(n1_12601,n2_12602,n3_12603);
} else {
renderer.noStroke();

}
}
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"bezier","bezier",-539235327),(function (game,renderer,content,parent_opts){
var vec__12604 = content;
var seq__12605 = cljs.core.seq.call(null,vec__12604);
var first__12606 = cljs.core.first.call(null,seq__12605);
var seq__12605__$1 = cljs.core.next.call(null,seq__12605);
var command = first__12606;
var first__12606__$1 = cljs.core.first.call(null,seq__12605__$1);
var seq__12605__$2 = cljs.core.next.call(null,seq__12605__$1);
var opts = first__12606__$1;
var children = seq__12605__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12607 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12607__$1 = ((((!((map__12607 == null)))?((((map__12607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12607.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12607):map__12607);
var opts__$2 = map__12607__$1;
var x1 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12607__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__7132__auto__ = x1;
if(cljs.core.truth_(and__7132__auto__)){
var and__7132__auto____$1 = y1;
if(cljs.core.truth_(and__7132__auto____$1)){
var and__7132__auto____$2 = x2;
if(cljs.core.truth_(and__7132__auto____$2)){
var and__7132__auto____$3 = y2;
if(cljs.core.truth_(and__7132__auto____$3)){
var and__7132__auto____$4 = x3;
if(cljs.core.truth_(and__7132__auto____$4)){
var and__7132__auto____$5 = y3;
if(cljs.core.truth_(and__7132__auto____$5)){
var and__7132__auto____$6 = x4;
if(cljs.core.truth_(and__7132__auto____$6)){
return y4;
} else {
return and__7132__auto____$6;
}
} else {
return and__7132__auto____$5;
}
} else {
return and__7132__auto____$4;
}
} else {
return and__7132__auto____$3;
}
} else {
return and__7132__auto____$2;
}
} else {
return and__7132__auto____$1;
}
} else {
return and__7132__auto__;
}
})())){
renderer.bezier(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__7132__auto__ = z1;
if(cljs.core.truth_(and__7132__auto__)){
var and__7132__auto____$1 = z2;
if(cljs.core.truth_(and__7132__auto____$1)){
var and__7132__auto____$2 = z3;
if(cljs.core.truth_(and__7132__auto____$2)){
return z4;
} else {
return and__7132__auto____$2;
}
} else {
return and__7132__auto____$1;
}
} else {
return and__7132__auto__;
}
})())){
renderer.bezier(z1,z2,z3,z4);
} else {
throw "Invalid args for bezier";

}
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"curve","curve",-569677866),(function (game,renderer,content,parent_opts){
var vec__12609 = content;
var seq__12610 = cljs.core.seq.call(null,vec__12609);
var first__12611 = cljs.core.first.call(null,seq__12610);
var seq__12610__$1 = cljs.core.next.call(null,seq__12610);
var command = first__12611;
var first__12611__$1 = cljs.core.first.call(null,seq__12610__$1);
var seq__12610__$2 = cljs.core.next.call(null,seq__12610__$1);
var opts = first__12611__$1;
var children = seq__12610__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12612 = cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,cljs.core.update.call(null,opts__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x3","x3",-1314178287),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y3","y3",-42815418),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"x4","x4",1510536137),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(opts__$1)),new cljs.core.Keyword(null,"y4","y4",1391924217),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(opts__$1));
var map__12612__$1 = ((((!((map__12612 == null)))?((((map__12612.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12612.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12612):map__12612);
var opts__$2 = map__12612__$1;
var x1 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247));
var y4 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"y4","y4",1391924217));
var z3 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"z3","z3",-396848871));
var y2 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var x2 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var z2 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"z2","z2",1901955525));
var y3 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"y3","y3",-42815418));
var x4 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"x4","x4",1510536137));
var y1 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"y1","y1",589123466));
var z1 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"z1","z1",2018608080));
var x3 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"x3","x3",-1314178287));
var z4 = cljs.core.get.call(null,map__12612__$1,new cljs.core.Keyword(null,"z4","z4",-2097408617));
if(cljs.core.truth_((function (){var and__7132__auto__ = x1;
if(cljs.core.truth_(and__7132__auto__)){
var and__7132__auto____$1 = y1;
if(cljs.core.truth_(and__7132__auto____$1)){
var and__7132__auto____$2 = x2;
if(cljs.core.truth_(and__7132__auto____$2)){
var and__7132__auto____$3 = y2;
if(cljs.core.truth_(and__7132__auto____$3)){
var and__7132__auto____$4 = x3;
if(cljs.core.truth_(and__7132__auto____$4)){
var and__7132__auto____$5 = y3;
if(cljs.core.truth_(and__7132__auto____$5)){
var and__7132__auto____$6 = x4;
if(cljs.core.truth_(and__7132__auto____$6)){
return y4;
} else {
return and__7132__auto____$6;
}
} else {
return and__7132__auto____$5;
}
} else {
return and__7132__auto____$4;
}
} else {
return and__7132__auto____$3;
}
} else {
return and__7132__auto____$2;
}
} else {
return and__7132__auto____$1;
}
} else {
return and__7132__auto__;
}
})())){
renderer.curve(x1,y1,x2,y2,x3,y3,x4,y4);
} else {
if(cljs.core.truth_((function (){var and__7132__auto__ = z1;
if(cljs.core.truth_(and__7132__auto__)){
var and__7132__auto____$1 = z2;
if(cljs.core.truth_(and__7132__auto____$1)){
var and__7132__auto____$2 = z3;
if(cljs.core.truth_(and__7132__auto____$2)){
return z4;
} else {
return and__7132__auto____$2;
}
} else {
return and__7132__auto____$1;
}
} else {
return and__7132__auto__;
}
})())){
renderer.curve(z1,z2,z3,z4);
} else {
throw "Invalid args for curve";

}
}

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$2);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"rgb","rgb",1432123467),(function (game,renderer,content,parent_opts){
var vec__12614 = content;
var seq__12615 = cljs.core.seq.call(null,vec__12614);
var first__12616 = cljs.core.first.call(null,seq__12615);
var seq__12615__$1 = cljs.core.next.call(null,seq__12615);
var command = first__12616;
var first__12616__$1 = cljs.core.first.call(null,seq__12615__$1);
var seq__12615__$2 = cljs.core.next.call(null,seq__12615__$1);
var opts = first__12616__$1;
var children = seq__12615__$2;
var map__12617 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.rgb_defaults);
var map__12617__$1 = ((((!((map__12617 == null)))?((((map__12617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12617):map__12617);
var opts__$1 = map__12617__$1;
var max_r = cljs.core.get.call(null,map__12617__$1,new cljs.core.Keyword(null,"max-r","max-r",1711699344));
var max_g = cljs.core.get.call(null,map__12617__$1,new cljs.core.Keyword(null,"max-g","max-g",-1655662483));
var max_b = cljs.core.get.call(null,map__12617__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12617__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.push();

renderer.colorMode(renderer.RGB,max_r,max_g,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"hsb","hsb",-753472031),(function (game,renderer,content,parent_opts){
var vec__12619 = content;
var seq__12620 = cljs.core.seq.call(null,vec__12619);
var first__12621 = cljs.core.first.call(null,seq__12620);
var seq__12620__$1 = cljs.core.next.call(null,seq__12620);
var command = first__12621;
var first__12621__$1 = cljs.core.first.call(null,seq__12620__$1);
var seq__12620__$2 = cljs.core.next.call(null,seq__12620__$1);
var opts = first__12621__$1;
var children = seq__12620__$2;
var map__12622 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.hsb_defaults);
var map__12622__$1 = ((((!((map__12622 == null)))?((((map__12622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12622):map__12622);
var opts__$1 = map__12622__$1;
var max_h = cljs.core.get.call(null,map__12622__$1,new cljs.core.Keyword(null,"max-h","max-h",1409940394));
var max_s = cljs.core.get.call(null,map__12622__$1,new cljs.core.Keyword(null,"max-s","max-s",781928940));
var max_b = cljs.core.get.call(null,map__12622__$1,new cljs.core.Keyword(null,"max-b","max-b",-1756758912));
var max_a = cljs.core.get.call(null,map__12622__$1,new cljs.core.Keyword(null,"max-a","max-a",2065821478));
renderer.push();

renderer.colorMode(renderer.HSB,max_h,max_s,max_b,max_a);

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.pop();
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"tiled-map","tiled-map",1087696322),(function (game,renderer,content,parent_opts){
var vec__12624 = content;
var seq__12625 = cljs.core.seq.call(null,vec__12624);
var first__12626 = cljs.core.first.call(null,seq__12625);
var seq__12625__$1 = cljs.core.next.call(null,seq__12625);
var command = first__12626;
var first__12626__$1 = cljs.core.first.call(null,seq__12625__$1);
var seq__12625__$2 = cljs.core.next.call(null,seq__12625__$1);
var opts = first__12626__$1;
var children = seq__12625__$2;
var map__12627 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var map__12627__$1 = ((((!((map__12627 == null)))?((((map__12627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12627.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12627):map__12627);
var opts__$1 = map__12627__$1;
var value = cljs.core.get.call(null,map__12627__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__12627__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var x = cljs.core.get.call(null,map__12627__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12627__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var value__$1 = (function (){var or__7144__auto__ = value;
if(cljs.core.truth_(or__7144__auto__)){
return or__7144__auto__;
} else {
var or__7144__auto____$1 = play_cljs.core.get_asset.call(null,game,name);
if(cljs.core.truth_(or__7144__auto____$1)){
return or__7144__auto____$1;
} else {
return play_cljs.core.load_tiled_map.call(null,game,name);
}
}
})();
value__$1.draw(x,y);

return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"shape","shape",1190694006),(function (game,renderer,content,parent_opts){
var vec__12629 = content;
var seq__12630 = cljs.core.seq.call(null,vec__12629);
var first__12631 = cljs.core.first.call(null,seq__12630);
var seq__12630__$1 = cljs.core.next.call(null,seq__12630);
var command = first__12631;
var first__12631__$1 = cljs.core.first.call(null,seq__12630__$1);
var seq__12630__$2 = cljs.core.next.call(null,seq__12630__$1);
var opts = first__12631__$1;
var children = seq__12630__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":shape requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginShape();

var G__12635_12642 = points;
var vec__12636_12643 = G__12635_12642;
var seq__12637_12644 = cljs.core.seq.call(null,vec__12636_12643);
var first__12638_12645 = cljs.core.first.call(null,seq__12637_12644);
var seq__12637_12646__$1 = cljs.core.next.call(null,seq__12637_12644);
var x_12647 = first__12638_12645;
var first__12638_12648__$1 = cljs.core.first.call(null,seq__12637_12646__$1);
var seq__12637_12649__$2 = cljs.core.next.call(null,seq__12637_12646__$1);
var y_12650 = first__12638_12648__$1;
var rest_12651 = seq__12637_12649__$2;
var G__12635_12652__$1 = G__12635_12642;
while(true){
var vec__12639_12653 = G__12635_12652__$1;
var seq__12640_12654 = cljs.core.seq.call(null,vec__12639_12653);
var first__12641_12655 = cljs.core.first.call(null,seq__12640_12654);
var seq__12640_12656__$1 = cljs.core.next.call(null,seq__12640_12654);
var x_12657__$1 = first__12641_12655;
var first__12641_12658__$1 = cljs.core.first.call(null,seq__12640_12656__$1);
var seq__12640_12659__$2 = cljs.core.next.call(null,seq__12640_12656__$1);
var y_12660__$1 = first__12641_12658__$1;
var rest_12661__$1 = seq__12640_12659__$2;
renderer.vertex(x_12657__$1,y_12660__$1);

if(rest_12661__$1){
var G__12662 = rest_12661__$1;
G__12635_12652__$1 = G__12662;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endShape(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"contour","contour",-943960423),(function (game,renderer,content,parent_opts){
var vec__12663 = content;
var seq__12664 = cljs.core.seq.call(null,vec__12663);
var first__12665 = cljs.core.first.call(null,seq__12664);
var seq__12664__$1 = cljs.core.next.call(null,seq__12664);
var command = first__12665;
var first__12665__$1 = cljs.core.first.call(null,seq__12664__$1);
var seq__12664__$2 = cljs.core.next.call(null,seq__12664__$1);
var opts = first__12665__$1;
var children = seq__12664__$2;
var opts__$1 = play_cljs.core.update_opts.call(null,opts,parent_opts,play_cljs.core.basic_defaults);
var points = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,points))){
throw ":contour requires :points to contain a seq'able with an even number of values (x and y pairs)";
} else {
renderer.beginContour();

var G__12669_12676 = points;
var vec__12670_12677 = G__12669_12676;
var seq__12671_12678 = cljs.core.seq.call(null,vec__12670_12677);
var first__12672_12679 = cljs.core.first.call(null,seq__12671_12678);
var seq__12671_12680__$1 = cljs.core.next.call(null,seq__12671_12678);
var x_12681 = first__12672_12679;
var first__12672_12682__$1 = cljs.core.first.call(null,seq__12671_12680__$1);
var seq__12671_12683__$2 = cljs.core.next.call(null,seq__12671_12680__$1);
var y_12684 = first__12672_12682__$1;
var rest_12685 = seq__12671_12683__$2;
var G__12669_12686__$1 = G__12669_12676;
while(true){
var vec__12673_12687 = G__12669_12686__$1;
var seq__12674_12688 = cljs.core.seq.call(null,vec__12673_12687);
var first__12675_12689 = cljs.core.first.call(null,seq__12674_12688);
var seq__12674_12690__$1 = cljs.core.next.call(null,seq__12674_12688);
var x_12691__$1 = first__12675_12689;
var first__12675_12692__$1 = cljs.core.first.call(null,seq__12674_12690__$1);
var seq__12674_12693__$2 = cljs.core.next.call(null,seq__12674_12690__$1);
var y_12694__$1 = first__12675_12692__$1;
var rest_12695__$1 = seq__12674_12693__$2;
renderer.vertex(x_12691__$1,y_12694__$1);

if(rest_12695__$1){
var G__12696 = rest_12695__$1;
G__12669_12686__$1 = G__12696;
continue;
} else {
}
break;
}

play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,children,opts__$1);

return renderer.endContour(renderer.CLOSE);

}
}));
cljs.core._add_method.call(null,play_cljs.core.draw_sketch_BANG_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (game,renderer,content,parent_opts){
if(cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,content))){
return cljs.core.run_BANG_.call(null,(function (p1__12697_SHARP_){
return play_cljs.core.draw_sketch_BANG_.call(null,game,renderer,p1__12697_SHARP_,parent_opts);
}),content);
} else {
if((cljs.core.first.call(null,content) == null)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid sketch command: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,content))].join('')));

}
}
}));
/**
 * Returns a game object.
 */
play_cljs.core.create_game = (function play_cljs$core$create_game(width,height){
var renderer = (new p5((function (_){
return null;
})));
var hidden_state_atom = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"screen","screen",1990059748),null,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),null,new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),(0),new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(0),new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.PersistentArrayMap.EMPTY], null));
var setup_finished_QMARK_ = cljs.core.async.promise_chan.call(null);
var preloads = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
if(typeof play_cljs.core.t_play_cljs$core12798 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {play_cljs.core.Game}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
play_cljs.core.t_play_cljs$core12798 = (function (width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,meta12799){
this.width = width;
this.height = height;
this.renderer = renderer;
this.hidden_state_atom = hidden_state_atom;
this.setup_finished_QMARK_ = setup_finished_QMARK_;
this.preloads = preloads;
this.meta12799 = meta12799;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
play_cljs.core.t_play_cljs$core12798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_12800,meta12799__$1){
var self__ = this;
var _12800__$1 = this;
return (new play_cljs.core.t_play_cljs$core12798(self__.width,self__.height,self__.renderer,self__.hidden_state_atom,self__.setup_finished_QMARK_,self__.preloads,meta12799__$1));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (_12800){
var self__ = this;
var _12800__$1 = this;
return self__.meta12799;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$ = cljs.core.PROTOCOL_SENTINEL;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_screen$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$set_size$arity$3 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,width__$1,height__$1){
var self__ = this;
var this$__$1 = this;
return self__.renderer.resizeCanvas(width__$1,height__$1);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_canvas$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"canvas","canvas",-1798817489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$pre_render$arity$5 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,image_name,width__$1,height__$1,content){
var self__ = this;
var this$__$1 = this;
var object = self__.renderer.createGraphics(width__$1,height__$1);
play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,object,content,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,image_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$load_image$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,path){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadImage(path,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,path,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_width$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.width;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_asset$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (game,name){
var self__ = this;
var game__$1 = this;
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.hidden_state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assets","assets",210278279),name], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_height$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer.height;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$start$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
self__.renderer.setup = ((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var canvas_wrapper_12898 = self__.renderer.createCanvas(self__.width,self__.height);
var canvas_12899 = canvas_wrapper_12898.canvas;
canvas_12899.removeAttribute("style");

cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"canvas","canvas",-1798817489),canvas_12899);

return cljs.core.async.put_BANG_.call(null,self__.setup_finished_QMARK_,true);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

cljs.core.run_BANG_.call(null,goog.events.unlistenByKey,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom)));

return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"listeners","listeners",394544445),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(window,"keydown",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.conj,e.keyCode);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"keyup",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (e){
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(91),null,(93),null], null), null),e.keyCode)){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
} else {
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.disj,e.keyCode);
}
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
),goog.events.listen(window,"blur",((function (this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142),cljs.core.PersistentHashSet.EMPTY);
});})(this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
)], null));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_delta_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_pressed_keys$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"pressed-keys","pressed-keys",1612079142).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$render$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,content){
var self__ = this;
var this$__$1 = this;
return play_cljs.core.draw_sketch_BANG_.call(null,this$__$1,self__.renderer,content,cljs.core.PersistentArrayMap.EMPTY);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$load_tiled_map$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,map_name){
var self__ = this;
var this$__$1 = this;
var finished_loading_QMARK_ = cljs.core.async.promise_chan.call(null);
var _ = cljs.core.swap_BANG_.call(null,self__.preloads,cljs.core.conj,finished_loading_QMARK_);
var object = self__.renderer.loadTiledMap(map_name,((function (finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return cljs.core.async.put_BANG_.call(null,finished_loading_QMARK_,true);
});})(finished_loading_QMARK_,_,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.update,new cljs.core.Keyword(null,"assets","assets",210278279),cljs.core.assoc,map_name,object);

return object;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$set_screen$arity$2 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$,screen){
var self__ = this;
var this$__$1 = this;
var c__9695__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
var f__9696__auto__ = (function (){var switch__9583__auto__ = ((function (c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (state_12861){
var state_val_12862 = (state_12861[(1)]);
if((state_val_12862 === (7))){
var inst_12855 = (state_12861[(2)]);
var inst_12856 = cljs.core.PersistentVector.EMPTY;
var inst_12857 = cljs.core.reset_BANG_.call(null,self__.preloads,inst_12856);
var inst_12858 = (function (){return ((function (inst_12855,inst_12856,inst_12857,state_val_12862,c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,((function (inst_12855,inst_12856,inst_12857,state_val_12862,c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (hidden_state){
var time = self__.renderer.millis();
return cljs.core.assoc.call(null,hidden_state,new cljs.core.Keyword(null,"total-time","total-time",-1657781641),time,new cljs.core.Keyword(null,"delta-time","delta-time",-1123875803),(time - new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(hidden_state)));
});})(inst_12855,inst_12856,inst_12857,state_val_12862,c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

self__.renderer.clear();

return play_cljs.core.on_render.call(null,screen);
});
;})(inst_12855,inst_12856,inst_12857,state_val_12862,c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var inst_12859 = self__.renderer.draw = inst_12858;
var state_12861__$1 = (function (){var statearr_12863 = state_12861;
(statearr_12863[(7)] = inst_12857);

(statearr_12863[(8)] = inst_12855);

return statearr_12863;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12861__$1,inst_12859);
} else {
if((state_val_12862 === (1))){
var state_12861__$1 = state_12861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12861__$1,(2),self__.setup_finished_QMARK_);
} else {
if((state_val_12862 === (4))){
var inst_12804 = (state_12861[(9)]);
var inst_12808 = play_cljs.core.on_hide.call(null,inst_12804);
var state_12861__$1 = state_12861;
var statearr_12864_12900 = state_12861__$1;
(statearr_12864_12900[(2)] = inst_12808);

(statearr_12864_12900[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (15))){
var inst_12833 = (state_12861[(10)]);
var inst_12837 = cljs.core.chunk_first.call(null,inst_12833);
var inst_12838 = cljs.core.chunk_rest.call(null,inst_12833);
var inst_12839 = cljs.core.count.call(null,inst_12837);
var inst_12819 = inst_12838;
var inst_12820 = inst_12837;
var inst_12821 = inst_12839;
var inst_12822 = (0);
var state_12861__$1 = (function (){var statearr_12865 = state_12861;
(statearr_12865[(11)] = inst_12820);

(statearr_12865[(12)] = inst_12821);

(statearr_12865[(13)] = inst_12819);

(statearr_12865[(14)] = inst_12822);

return statearr_12865;
})();
var statearr_12866_12901 = state_12861__$1;
(statearr_12866_12901[(2)] = null);

(statearr_12866_12901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (13))){
var state_12861__$1 = state_12861;
var statearr_12867_12902 = state_12861__$1;
(statearr_12867_12902[(2)] = null);

(statearr_12867_12902[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (6))){
var inst_12821 = (state_12861[(12)]);
var inst_12822 = (state_12861[(14)]);
var inst_12824 = (inst_12822 < inst_12821);
var inst_12825 = inst_12824;
var state_12861__$1 = state_12861;
if(cljs.core.truth_(inst_12825)){
var statearr_12868_12903 = state_12861__$1;
(statearr_12868_12903[(1)] = (8));

} else {
var statearr_12869_12904 = state_12861__$1;
(statearr_12869_12904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (17))){
var inst_12848 = (state_12861[(2)]);
var state_12861__$1 = state_12861;
var statearr_12870_12905 = state_12861__$1;
(statearr_12870_12905[(2)] = inst_12848);

(statearr_12870_12905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (3))){
var state_12861__$1 = state_12861;
var statearr_12871_12906 = state_12861__$1;
(statearr_12871_12906[(2)] = null);

(statearr_12871_12906[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (12))){
var inst_12833 = (state_12861[(10)]);
var inst_12835 = cljs.core.chunked_seq_QMARK_.call(null,inst_12833);
var state_12861__$1 = state_12861;
if(inst_12835){
var statearr_12875_12907 = state_12861__$1;
(statearr_12875_12907[(1)] = (15));

} else {
var statearr_12876_12908 = state_12861__$1;
(statearr_12876_12908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (2))){
var inst_12804 = (state_12861[(9)]);
var inst_12802 = (state_12861[(2)]);
var inst_12804__$1 = play_cljs.core.get_screen.call(null,this$__$1);
var inst_12805 = (inst_12804__$1 == null);
var state_12861__$1 = (function (){var statearr_12877 = state_12861;
(statearr_12877[(9)] = inst_12804__$1);

(statearr_12877[(15)] = inst_12802);

return statearr_12877;
})();
if(cljs.core.truth_(inst_12805)){
var statearr_12878_12909 = state_12861__$1;
(statearr_12878_12909[(1)] = (3));

} else {
var statearr_12879_12910 = state_12861__$1;
(statearr_12879_12910[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (11))){
var inst_12820 = (state_12861[(11)]);
var inst_12821 = (state_12861[(12)]);
var inst_12819 = (state_12861[(13)]);
var inst_12822 = (state_12861[(14)]);
var inst_12829 = (state_12861[(2)]);
var inst_12830 = (inst_12822 + (1));
var tmp12872 = inst_12820;
var tmp12873 = inst_12821;
var tmp12874 = inst_12819;
var inst_12819__$1 = tmp12874;
var inst_12820__$1 = tmp12872;
var inst_12821__$1 = tmp12873;
var inst_12822__$1 = inst_12830;
var state_12861__$1 = (function (){var statearr_12880 = state_12861;
(statearr_12880[(11)] = inst_12820__$1);

(statearr_12880[(12)] = inst_12821__$1);

(statearr_12880[(16)] = inst_12829);

(statearr_12880[(13)] = inst_12819__$1);

(statearr_12880[(14)] = inst_12822__$1);

return statearr_12880;
})();
var statearr_12881_12911 = state_12861__$1;
(statearr_12881_12911[(2)] = null);

(statearr_12881_12911[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (9))){
var inst_12819 = (state_12861[(13)]);
var inst_12833 = (state_12861[(10)]);
var inst_12833__$1 = cljs.core.seq.call(null,inst_12819);
var state_12861__$1 = (function (){var statearr_12882 = state_12861;
(statearr_12882[(10)] = inst_12833__$1);

return statearr_12882;
})();
if(inst_12833__$1){
var statearr_12883_12912 = state_12861__$1;
(statearr_12883_12912[(1)] = (12));

} else {
var statearr_12884_12913 = state_12861__$1;
(statearr_12884_12913[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (5))){
var inst_12810 = (state_12861[(2)]);
var inst_12811 = cljs.core.swap_BANG_.call(null,self__.hidden_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),screen);
var inst_12812 = play_cljs.core.on_show.call(null,screen);
var inst_12817 = cljs.core.deref.call(null,self__.preloads);
var inst_12818 = cljs.core.seq.call(null,inst_12817);
var inst_12819 = inst_12818;
var inst_12820 = null;
var inst_12821 = (0);
var inst_12822 = (0);
var state_12861__$1 = (function (){var statearr_12885 = state_12861;
(statearr_12885[(17)] = inst_12811);

(statearr_12885[(11)] = inst_12820);

(statearr_12885[(12)] = inst_12821);

(statearr_12885[(18)] = inst_12810);

(statearr_12885[(13)] = inst_12819);

(statearr_12885[(19)] = inst_12812);

(statearr_12885[(14)] = inst_12822);

return statearr_12885;
})();
var statearr_12886_12914 = state_12861__$1;
(statearr_12886_12914[(2)] = null);

(statearr_12886_12914[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (14))){
var inst_12851 = (state_12861[(2)]);
var state_12861__$1 = state_12861;
var statearr_12887_12915 = state_12861__$1;
(statearr_12887_12915[(2)] = inst_12851);

(statearr_12887_12915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (16))){
var inst_12833 = (state_12861[(10)]);
var inst_12842 = cljs.core.first.call(null,inst_12833);
var state_12861__$1 = state_12861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12861__$1,(18),inst_12842);
} else {
if((state_val_12862 === (10))){
var inst_12853 = (state_12861[(2)]);
var state_12861__$1 = state_12861;
var statearr_12888_12916 = state_12861__$1;
(statearr_12888_12916[(2)] = inst_12853);

(statearr_12888_12916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (18))){
var inst_12833 = (state_12861[(10)]);
var inst_12844 = (state_12861[(2)]);
var inst_12845 = cljs.core.next.call(null,inst_12833);
var inst_12819 = inst_12845;
var inst_12820 = null;
var inst_12821 = (0);
var inst_12822 = (0);
var state_12861__$1 = (function (){var statearr_12889 = state_12861;
(statearr_12889[(11)] = inst_12820);

(statearr_12889[(20)] = inst_12844);

(statearr_12889[(12)] = inst_12821);

(statearr_12889[(13)] = inst_12819);

(statearr_12889[(14)] = inst_12822);

return statearr_12889;
})();
var statearr_12890_12917 = state_12861__$1;
(statearr_12890_12917[(2)] = null);

(statearr_12890_12917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12862 === (8))){
var inst_12820 = (state_12861[(11)]);
var inst_12822 = (state_12861[(14)]);
var inst_12827 = cljs.core._nth.call(null,inst_12820,inst_12822);
var state_12861__$1 = state_12861;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12861__$1,(11),inst_12827);
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
});})(c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;
return ((function (switch__9583__auto__,c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function() {
var play_cljs$core$create_game_$_state_machine__9584__auto__ = null;
var play_cljs$core$create_game_$_state_machine__9584__auto____0 = (function (){
var statearr_12894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12894[(0)] = play_cljs$core$create_game_$_state_machine__9584__auto__);

(statearr_12894[(1)] = (1));

return statearr_12894;
});
var play_cljs$core$create_game_$_state_machine__9584__auto____1 = (function (state_12861){
while(true){
var ret_value__9585__auto__ = (function (){try{while(true){
var result__9586__auto__ = switch__9583__auto__.call(null,state_12861);
if(cljs.core.keyword_identical_QMARK_.call(null,result__9586__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__9586__auto__;
}
break;
}
}catch (e12895){if((e12895 instanceof Object)){
var ex__9587__auto__ = e12895;
var statearr_12896_12918 = state_12861;
(statearr_12896_12918[(5)] = ex__9587__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__9585__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12919 = state_12861;
state_12861 = G__12919;
continue;
} else {
return ret_value__9585__auto__;
}
break;
}
});
play_cljs$core$create_game_$_state_machine__9584__auto__ = function(state_12861){
switch(arguments.length){
case 0:
return play_cljs$core$create_game_$_state_machine__9584__auto____0.call(this);
case 1:
return play_cljs$core$create_game_$_state_machine__9584__auto____1.call(this,state_12861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
play_cljs$core$create_game_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$0 = play_cljs$core$create_game_$_state_machine__9584__auto____0;
play_cljs$core$create_game_$_state_machine__9584__auto__.cljs$core$IFn$_invoke$arity$1 = play_cljs$core$create_game_$_state_machine__9584__auto____1;
return play_cljs$core$create_game_$_state_machine__9584__auto__;
})()
;})(switch__9583__auto__,c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
})();
var state__9697__auto__ = (function (){var statearr_12897 = f__9696__auto__.call(null);
(statearr_12897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__9695__auto__);

return statearr_12897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__9697__auto__);
});})(c__9695__auto__,this$__$1,renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
);

return c__9695__auto__;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_total_time$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword(null,"total-time","total-time",-1657781641).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.hidden_state_atom));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.prototype.play_cljs$core$Game$get_renderer$arity$1 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.renderer;
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.getBasis = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"width","width",1256460050,null),new cljs.core.Symbol(null,"height","height",-1629257147,null),cljs.core.with_meta(new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("js","p5","js/p5",-237683270,null)], null)),new cljs.core.Symbol(null,"hidden-state-atom","hidden-state-atom",1737146278,null),new cljs.core.Symbol(null,"setup-finished?","setup-finished?",386963073,null),new cljs.core.Symbol(null,"preloads","preloads",-1034105580,null),new cljs.core.Symbol(null,"meta12799","meta12799",600065835,null)], null);
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.t_play_cljs$core12798.cljs$lang$type = true;

play_cljs.core.t_play_cljs$core12798.cljs$lang$ctorStr = "play-cljs.core/t_play_cljs$core12798";

play_cljs.core.t_play_cljs$core12798.cljs$lang$ctorPrWriter = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function (this__7755__auto__,writer__7756__auto__,opt__7757__auto__){
return cljs.core._write.call(null,writer__7756__auto__,"play-cljs.core/t_play_cljs$core12798");
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

play_cljs.core.__GT_t_play_cljs$core12798 = ((function (renderer,hidden_state_atom,setup_finished_QMARK_,preloads){
return (function play_cljs$core$create_game_$___GT_t_play_cljs$core12798(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta12799){
return (new play_cljs.core.t_play_cljs$core12798(width__$1,height__$1,renderer__$1,hidden_state_atom__$1,setup_finished_QMARK___$1,preloads__$1,meta12799));
});})(renderer,hidden_state_atom,setup_finished_QMARK_,preloads))
;

}

return (new play_cljs.core.t_play_cljs$core12798(width,height,renderer,hidden_state_atom,setup_finished_QMARK_,preloads,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=core.js.map