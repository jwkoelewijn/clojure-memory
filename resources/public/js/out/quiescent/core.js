// Compiled by ClojureScript 1.7.122 {}
goog.provide('quiescent.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
/**
 * Within a component lifecycle function, is be bound to the underlying ReactJS instance.
 */
quiescent.core._STAR_component_STAR_ = null;
/**
 * Mapping of public lifecycle API to internal ReactJS API.
 */
quiescent.core.lifecycle_impls = (function (){var basic = (function (impl){
return (function (){
var this__19009__auto__ = this;
var _STAR_component_STAR_21026 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__19009__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21026;
}});
});
var with_old_value = ((function (basic){
return (function (impl){
return ((function (basic){
return (function (prev_props,_){
var this__19009__auto__ = this;
var _STAR_component_STAR_21027 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__19009__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,prev_props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21027;
}});
;})(basic))
});})(basic))
;
var with_nil_old_value = ((function (basic,with_old_value){
return (function (impl){
return ((function (basic,with_old_value){
return (function (){
var this__19009__auto__ = this;
var _STAR_component_STAR_21028 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__19009__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),quiescent.core._STAR_component_STAR_.props.value,null,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21028;
}});
;})(basic,with_old_value))
});})(basic,with_old_value))
;
var with_callback = ((function (basic,with_old_value,with_nil_old_value){
return (function (impl){
return ((function (basic,with_old_value,with_nil_old_value){
return (function (cb){
var this__19009__auto__ = this;
var _STAR_component_STAR_21029 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__19009__auto__;

try{return cljs.core.apply.call(null,impl,quiescent.core._STAR_component_STAR_.getDOMNode(),cb,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21029;
}});
;})(basic,with_old_value,with_nil_old_value))
});})(basic,with_old_value,with_nil_old_value))
;
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-mount","on-mount",-1236735840),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),basic], null),new cljs.core.Keyword(null,"on-update","on-update",1680216496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),with_old_value], null),new cljs.core.Keyword(null,"on-unmount","on-unmount",245689269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),basic], null),new cljs.core.Keyword(null,"on-render","on-render",2096729391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981),with_old_value,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),with_nil_old_value], null),new cljs.core.Keyword(null,"will-enter","will-enter",-692415624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillEnter","componentWillEnter",395203025),with_callback], null),new cljs.core.Keyword(null,"did-enter","did-enter",-1814731189),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidEnter","componentDidEnter",1501589550),basic], null),new cljs.core.Keyword(null,"will-leave","will-leave",-1009838517),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentWillLeave","componentWillLeave",905096086),with_callback], null),new cljs.core.Keyword(null,"did-leave","did-leave",1577156642),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"componentDidLeave","componentDidLeave",-923423498),basic], null)], null);
})();
quiescent.core.build_lifecycle_impls = (function quiescent$core$build_lifecycle_impls(opts_map){
return cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core.merge_with,(function (_,___$1){
throw "Component definition should not provide handlers for both :on-render and (:on-mount | :on-update).";
})),cljs.core.map.call(null,(function (p__21040){
var vec__21041 = p__21040;
var key = cljs.core.nth.call(null,vec__21041,(0),null);
var impl = cljs.core.nth.call(null,vec__21041,(1),null);
var temp__4425__auto__ = quiescent.core.lifecycle_impls.call(null,key);
if(cljs.core.truth_(temp__4425__auto__)){
var impl_map = temp__4425__auto__;
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15444__auto__ = ((function (impl_map,temp__4425__auto__,vec__21041,key,impl){
return (function quiescent$core$build_lifecycle_impls_$_iter__21042(s__21043){
return (new cljs.core.LazySeq(null,((function (impl_map,temp__4425__auto__,vec__21041,key,impl){
return (function (){
var s__21043__$1 = s__21043;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__21043__$1);
if(temp__4425__auto____$1){
var s__21043__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__21043__$2)){
var c__15442__auto__ = cljs.core.chunk_first.call(null,s__21043__$2);
var size__15443__auto__ = cljs.core.count.call(null,c__15442__auto__);
var b__21045 = cljs.core.chunk_buffer.call(null,size__15443__auto__);
if((function (){var i__21044 = (0);
while(true){
if((i__21044 < size__15443__auto__)){
var vec__21048 = cljs.core._nth.call(null,c__15442__auto__,i__21044);
var method = cljs.core.nth.call(null,vec__21048,(0),null);
var impl_ctor = cljs.core.nth.call(null,vec__21048,(1),null);
cljs.core.chunk_append.call(null,b__21045,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,impl_ctor.call(null,impl)], null));

var G__21050 = (i__21044 + (1));
i__21044 = G__21050;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21045),quiescent$core$build_lifecycle_impls_$_iter__21042.call(null,cljs.core.chunk_rest.call(null,s__21043__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21045),null);
}
} else {
var vec__21049 = cljs.core.first.call(null,s__21043__$2);
var method = cljs.core.nth.call(null,vec__21049,(0),null);
var impl_ctor = cljs.core.nth.call(null,vec__21049,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [method,impl_ctor.call(null,impl)], null),quiescent$core$build_lifecycle_impls_$_iter__21042.call(null,cljs.core.rest.call(null,s__21043__$2)));
}
} else {
return null;
}
break;
}
});})(impl_map,temp__4425__auto__,vec__21041,key,impl))
,null,null));
});})(impl_map,temp__4425__auto__,vec__21041,key,impl))
;
return iter__15444__auto__.call(null,impl_map);
})());
} else {
return null;
}
}),opts_map));
});
/**
 * Return a factory function that will create a ReactElement, using the provided function as the
 *   'render' method for a ReactJS component, which is created and instantiated behind-the-scenes.
 * 
 *   The given render function should take a single immutable value as its first argument, and return
 *   a single ReactElement. Additional arguments to the returned factory function are
 *   /constant arguments/  which will be passed on as additional arguments to the  supplied render
 *   function, but will *not* be included in any calculations regarding whether the element should
 *   re-render. As such, they are suitable for values that will remain constant for  the lifetime of
 *   the rendered element, such as message channels and configuration objects.
 * 
 *   The optional 'opts' argument is a map which contains additional configuration keys:
 * 
 *   :keyfn - a single-argument function which is invoked at component construction time. It is
 *   passed the component's value, and returns the ReactJS key used to uniquely identify this
 *   component among its children.
 * 
 *   :name - the name of the element, used for debugging purposes.
 * 
 *   :on-mount - A function which will be invoked once, immediately after initial rendering occurs.
 *   It is passed the DOM node, the value and any constant args passed to the render fn. This maps
 *   to the 'componentDidMount' lifecycle method in ReactJS.
 * 
 *   :on-update - A function which will be invoked immediately after an update is flushed to the DOM,
 *   but not on the initial render. It is is passed the underlying DOM node, the value,
 *   the _old_ value, and any constant args passed to the render fn. This maps to the
 *   'componentDidUpdate' lifecycle method in ReactJS.
 * 
 *   :on-unmount - A function which will be invoked immediately before a the component is unmounted
 *   from the DOM. It is passed the underlying DOM node, the most recent value and the most recent
 *   constant args passed to the render fn. This maps to the 'componentWillUnmmount' lifecycle
 *   method in ReactJS.
 * 
 *   :on-render - A function which will be invoked immediately after the DOM is updated, both on the
 *   initial render and any subsequent updates. It is is passed the underlying DOM node, the
 *   value, the _old_  value (which will be nil in the case of the initial render) and any constant
 *   args passed to the render fn. This maps to both the 'componentDidMount' and
 *   'componentDidUpdate' lifecycle methods in ReactJS.
 * 
 *   :will-enter - A function invoked whenever this component is added to a ReactTransitionGroup.
 *   Invoked at the same time as :onMount. Is passed the underlying DOM node, a callback
 *   function, the value and any constant args passed to the render fn. Maps to the
 *   'componentWillEnter' lifecycle  method in ReactJS. See the ReactJS documentation at
 *   http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 *   :did-enter - A function invoked after the callback provided to :willEnter is called. It is
 *   passed the underlying DOM node, the value and any constant args passed to the render fn. Maps
 *   to the 'componentDidEnter' lifecycle method in ReactJS. See the ReactJS documentation at
 *   http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 *   :will-leave - A function invoked whenever this component is removed from a ReactTransitionGroup.
 *   Is passed the underlying DOM node, a callback function, the most recent value and the most
 *   recent constant args passed to the render fn. The DOM node will not be removed until the
 *   callback is called. Maps to the 'componentWillEnter' lifecycle method in ReactJS. See the
 *   ReactJS documentation at http://facebook.github.io/react/docs/animation.html for full
 *   documentation of the behavior.
 * 
 *   :did-leave - A function invoked after the callback provided to :willLeave is called (at the same
 *   time as :onUnMount). Is passed the underlying DOM node, the most recent value and the most
 *   recent constant args passed to the render fn. Maps to the 'componentDidLeave' lifecycle method
 *   in ReactJS. See the ReactJS  documentation at
 *   http://facebook.github.io/react/docs/animation.html for full documentation of the behavior.
 * 
 *   The *component* dynamic var will be bound to the underlying ReactJS component for all invocations
 *   of the render function and invocations of functions defined in the opts map.
 */
quiescent.core.component = (function quiescent$core$component(var_args){
var args21051 = [];
var len__15730__auto___21058 = arguments.length;
var i__15731__auto___21059 = (0);
while(true){
if((i__15731__auto___21059 < len__15730__auto___21058)){
args21051.push((arguments[i__15731__auto___21059]));

var G__21060 = (i__15731__auto___21059 + (1));
i__15731__auto___21059 = G__21060;
continue;
} else {
}
break;
}

var G__21053 = args21051.length;
switch (G__21053) {
case 1:
return quiescent.core.component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return quiescent.core.component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21051.length)].join('')));

}
});

quiescent.core.component.cljs$core$IFn$_invoke$arity$1 = (function (renderer){
return quiescent.core.component.call(null,renderer,cljs.core.PersistentArrayMap.EMPTY);
});

quiescent.core.component.cljs$core$IFn$_invoke$arity$2 = (function (renderer,opts){
var impl = cljs.core.merge.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960),(function (next_props,_){
var this__19009__auto__ = this;
var _STAR_component_STAR_21054 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__19009__auto__;

try{return cljs.core.not_EQ_.call(null,quiescent.core._STAR_component_STAR_.props.value,next_props.value);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21054;
}}),new cljs.core.Keyword(null,"render","render",-1408033454),(function (){
var this__19009__auto__ = this;
var _STAR_component_STAR_21055 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this__19009__auto__;

try{return cljs.core.apply.call(null,renderer,quiescent.core._STAR_component_STAR_.props.value,quiescent.core._STAR_component_STAR_.props.constants);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21055;
}})], null),quiescent.core.build_lifecycle_impls.call(null,opts));
var react_component = React.createClass(cljs.core.clj__GT_js.call(null,impl));
return ((function (impl,react_component){
return (function() { 
var G__21062__delegate = function (value,constant_args){
var props = {};
props.value = value;

props.constants = constant_args;

var temp__4425__auto___21063 = new cljs.core.Keyword(null,"keyfn","keyfn",780060332).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4425__auto___21063)){
var keyfn_21064 = temp__4425__auto___21063;
props.key = keyfn_21064.call(null,value);
} else {
}

return React.createElement(react_component,props);
};
var G__21062 = function (value,var_args){
var constant_args = null;
if (arguments.length > 1) {
var G__21065__i = 0, G__21065__a = new Array(arguments.length -  1);
while (G__21065__i < G__21065__a.length) {G__21065__a[G__21065__i] = arguments[G__21065__i + 1]; ++G__21065__i;}
  constant_args = new cljs.core.IndexedSeq(G__21065__a,0);
} 
return G__21062__delegate.call(this,value,constant_args);};
G__21062.cljs$lang$maxFixedArity = 1;
G__21062.cljs$lang$applyTo = (function (arglist__21066){
var value = cljs.core.first(arglist__21066);
var constant_args = cljs.core.rest(arglist__21066);
return G__21062__delegate(value,constant_args);
});
G__21062.cljs$core$IFn$_invoke$arity$variadic = G__21062__delegate;
return G__21062;
})()
;
;})(impl,react_component))
});

quiescent.core.component.cljs$lang$maxFixedArity = 2;
/**
 * Remove a mounted Element from the given DOM node.
 */
quiescent.core.unmount = (function quiescent$core$unmount(node){
return React.unmountComponentAtNode(node);
});
var factory_21067 = React.createFactory(React.addons.CSSTransitionGroup);
/**
 * Return a CSSTransitionGroup ReactElement, with the specified transition options and children.
 *  Options must contain at least a :transitionName key.
 * 
 *  Note that unlike DOM factories, children is a single argument containing a seq of children, not
 *  a vararg.
 * 
 *  See http://facebook.github.io/react/docs/animation.html for details on how CSSTransitionGroup
 *  works.
 */
quiescent.core.CSSTransitionGroup = ((function (factory_21067){
return (function quiescent$core$CSSTransitionGroup(opts,children){
return factory_21067.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"children","children",-940561982),children)));
});})(factory_21067))
;
var factory_21068 = React.createFactory(React.addons.TransitionGroup);
/**
 * Return a TransitionGroup ReactElement, with the specified properties and children.
 * 
 *  Note that unlike DOM factories, children is a single argument containing a seq of children, not
 *  a vararg.
 * 
 *  See http://facebook.github.io/react/docs/animation.html for details on how TransitionGroup
 *  works.
 */
quiescent.core.TransitionGroup = ((function (factory_21068){
return (function quiescent$core$TransitionGroup(props,children){
return factory_21068.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,props,new cljs.core.Keyword(null,"children","children",-940561982),children)));
});})(factory_21068))
;
/**
 * Wrapper component used to mix-in lifecycle access
 */
quiescent.core.WrapperComponent = React.createClass({"render": (function (){
var this$ = this;
return (this$.props["wrappee"]);
}), "componentDidUpdate": (function (prev_props,prev_state){
var this$ = this;
var temp__4425__auto__ = (this$.props["onUpdate"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_21069 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21069;
}} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["onMount"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_21070 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21070;
}} else {
return null;
}
}), "componentWillMount": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["onWillMount"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_21071 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21071;
}} else {
return null;
}
}), "componentWillUpdate": (function (_,___$1){
var this$ = this;
var temp__4425__auto__ = (this$.props["onWillUpdate"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_21072 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null);
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21072;
}} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4425__auto__ = (this$.props["onWillUnmount"]);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
var _STAR_component_STAR_21073 = quiescent.core._STAR_component_STAR_;
quiescent.core._STAR_component_STAR_ = this$;

try{return f.call(null,this$.getDOMNode());
}finally {quiescent.core._STAR_component_STAR_ = _STAR_component_STAR_21073;
}} else {
return null;
}
})});
var did_warn_21076 = cljs.core.atom.call(null,false);
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 *  methods at component creation time.
 * 
 *  Create a wrapper function for a compoment implementing multiple
 *  lifecycle functions. Lifecycle functions are specified as any number
 *  of additional key-value pairs passed as arguments to this function.
 * 
 *  Valid keys and values include:
 * 
 *  :onUpdate - will call the provided function,
 *              passing the rendered DOM node as a single arg
 *  :onMount - will call the provided function,
 *             passing the rendered DOM node as a single arg
 *  :onWillUpdate - will call the provided function with no arguments
 *  :onWillMount - will call the provided function with no arguments
 *  :onWillUnmount - will call the provided function with no arguments
 */
quiescent.core.wrapper = ((function (did_warn_21076){
return (function quiescent$core$wrapper(var_args){
var args__15737__auto__ = [];
var len__15730__auto___21077 = arguments.length;
var i__15731__auto___21078 = (0);
while(true){
if((i__15731__auto___21078 < len__15730__auto___21077)){
args__15737__auto__.push((arguments[i__15731__auto___21078]));

var G__21079 = (i__15731__auto___21078 + (1));
i__15731__auto___21078 = G__21079;
continue;
} else {
}
break;
}

var argseq__15738__auto__ = ((((1) < args__15737__auto__.length))?(new cljs.core.IndexedSeq(args__15737__auto__.slice((1)),(0))):null);
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__15738__auto__);
});})(did_warn_21076))
;

quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic = ((function (did_warn_21076){
return (function (child,kvs){
if(cljs.core.truth_(cljs.core.deref.call(null,did_warn_21076))){
} else {
cljs.core.reset_BANG_.call(null,did_warn_21076,true);

console.log("WARNING: Quiescent's wrapping functionality is deprecated. Please see the\n      release notes for v0.2. Instead, define lifecycle hooks at component creation time.");
}

var props = cljs.core.clj__GT_js.call(null,cljs.core.apply.call(null,cljs.core.array_map,new cljs.core.Keyword(null,"wrappee","wrappee",876822573),child,kvs));
var temp__4425__auto___21080 = (child.props["key"]);
if(cljs.core.truth_(temp__4425__auto___21080)){
var key_21081 = temp__4425__auto___21080;
(props["key"] = key_21081);
} else {
}

return React.createElement(quiescent.core.WrapperComponent,props);
});})(did_warn_21076))
;

quiescent.core.wrapper.cljs$lang$maxFixedArity = (1);

quiescent.core.wrapper.cljs$lang$applyTo = ((function (did_warn_21076){
return (function (seq21074){
var G__21075 = cljs.core.first.call(null,seq21074);
var seq21074__$1 = cljs.core.next.call(null,seq21074);
return quiescent.core.wrapper.cljs$core$IFn$_invoke$arity$variadic(G__21075,seq21074__$1);
});})(did_warn_21076))
;
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidUpdate lifecycle event.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_update = (function quiescent$core$on_update(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidMount lifecycle event.
 * 
 * The function will be passed the rendered DOM node.
 */
quiescent.core.on_mount = (function quiescent$core$on_mount(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentDidMount AND the componentDidUpdate lifecycle events.
 * 
 *   The function will be passed the rendered DOM node.
 */
quiescent.core.on_render = (function quiescent$core$on_render(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onMount","onMount",-876858467),f,new cljs.core.Keyword(null,"onUpdate","onUpdate",-315358968),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillMount lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_mount = (function quiescent$core$on_will_mount(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillUpdate lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_update = (function quiescent$core$on_will_update(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillMount AND the componentWillUpdate lifecycle events.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_render = (function quiescent$core$on_will_render(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillMount","onWillMount",-2065876946),f,new cljs.core.Keyword(null,"onWillUpdate","onWillUpdate",1307659073),f);
});
/**
 * DEPRECATED. Wrappers do not work properly. Prefer adding lifecycle
 * methods at component creation time.
 * 
 * Wrap a component, specifying a function to be called on the
 * componentWillUnmount lifecycle event.
 * 
 * The function will be called with no arguments.
 */
quiescent.core.on_will_unmount = (function quiescent$core$on_will_unmount(child,f){
return quiescent.core.wrapper.call(null,child,new cljs.core.Keyword(null,"onWillUnmount","onWillUnmount",-16104606),f);
});
/**
 * Given an Element, immediately render it, rooted to the
 * specified DOM node.
 */
quiescent.core.render = (function quiescent$core$render(element,node){
return React.render(element,node);
});
/**
 * DEPRECATED: Use 'unmount' instead.
 */
quiescent.core.unmount_at_node = (function quiescent$core$unmount_at_node(node){
return quiescent.core.unmount.call(null,node);
});

//# sourceMappingURL=core.js.map