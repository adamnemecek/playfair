// Compiled by ClojureScript 0.0-2173
goog.provide('that_new');
goog.require('cljs.core');
goog.require('playfair_cljs.shapes');
goog.require('playfair_cljs.shapes');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('playfair_cljs.math');
goog.require('playfair_cljs.math');
goog.require('playfair_cljs.debug');
goog.require('playfair_cljs.debug');
new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-center-node","middle-center-node",1498126260),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.Keyword(null,"guide","guide",1112616558),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"centered","centered",4456450854),true], null)),playfair_cljs.shapes.make_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null),new cljs.core.Keyword(null,"top-node","top-node",4296511212),.86),playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-left-node","middle-left-node",3682637122),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16,0], null),new cljs.core.Keyword(null,"guide","guide",1112616558),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"centered","centered",4456450854),true], null)),playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null)], null)),playfair_cljs.shapes.make_for.call(null,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [playfair_cljs.shapes.make_rotate.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),0], null),new cljs.core.Keyword(null,"first-point","first-point",3184094117),0.02),playfair_cljs.shapes.make_draw.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertically","vertically",1219453685),true], null)),playfair_cljs.shapes.make_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),1], null),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),1], null)], null)),playfair_cljs.shapes.make_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),1], null),6,0)], null))], null);
that_new.make_draw = (function make_draw(shape_key,p__8631,p__8632,options_vec){var vec__8635 = p__8631;var x = cljs.core.nth.call(null,vec__8635,0,null);var y = cljs.core.nth.call(null,vec__8635,1,null);var vec__8636 = p__8632;var diffX = cljs.core.nth.call(null,vec__8636,0,null);var diffY = cljs.core.nth.call(null,vec__8636,1,null);return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"draw","draw",1016996022),new cljs.core.Keyword(null,"shape","shape",1123304211),shape_key], null),cljs.core.zipmap.call(null,(((x instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-node","from-node",1048241591),new cljs.core.Keyword(null,"from-shape","from-shape",2082768688)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)),cljs.core.zipmap.call(null,(((diffX instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-node","to-node",4107897222),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669),new cljs.core.Keyword(null,"diffY","diffY",1109485670)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [diffX,diffY], null)),cljs.core.zipmap.call(null,options_vec,cljs.core.repeat.call(null,cljs.core.count.call(null,options_vec),true)));
});
that_new.make_scale = (function make_scale(shape_lookup,node,scale_val){return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"scale","scale",1123155132),new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872),shape_lookup,new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"scale-val","scale-val",3429794704),scale_val], null);
});
that_new.make_for = (function make_for(times,steps_vec){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"step-name","step-name",2312562782),new cljs.core.Keyword(null,"for","for",1014005819),new cljs.core.Keyword(null,"times","times",1124268728),times,new cljs.core.Keyword(null,"for-steps","for-steps",1009839253),steps_vec], null);
});
that_new.make_rotate = (function make_rotate(shape_lookup,node,rotate_val){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872),shape_lookup,new cljs.core.Keyword(null,"node","node",1017291124),node,new cljs.core.Keyword(null,"rotate-val","rotate-val",934012705),rotate_val], null);
});
that_new.make_move = (function make_move(shape_lookup,diffX,diffY){return cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872),shape_lookup], null),cljs.core.zipmap.call(null,(((diffX instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-node","from-node",1048241591)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"diffX","diffX",1109485669)], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [diffX], null)),((cljs.core.vector_QMARK_.call(null,diffY))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"to-node","to-node",4107897222),diffY.call(null,0),new cljs.core.Keyword(null,"to-shape","to-shape",2442812737),diffY.call(null,1)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"diffY","diffY",1109485670),diffY], null)));
});
that_new.conj_in = (function conj_in(x,lookup_vec,added_val){return cljs.core.assoc_in.call(null,x,lookup_vec,cljs.core.conj.call(null,cljs.core.get_in.call(null,x,lookup_vec),added_val));
});
that_new.conj_in.call(null,that_new.cs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tommy","tommy",1124447728),"tom"], null));
that_new.make_draw_cs = (function make_draw_cs(canvas_state,p__8637){var map__8643 = p__8637;var map__8643__$1 = ((cljs.core.seq_QMARK_.call(null,map__8643))?cljs.core.apply.call(null,cljs.core.hash_map,map__8643):map__8643);var draw_map = map__8643__$1;var diffY = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"diffY","diffY",1109485670));var diffX = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"diffX","diffX",1109485669));var to_shape = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"to-shape","to-shape",2442812737));var to_node = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"to-node","to-node",4107897222));var y = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"x","x",1013904362));var from_shape = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"from-shape","from-shape",2082768688));var from_node = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"from-node","from-node",1048241591));var shape_lookup = cljs.core.get.call(null,map__8643__$1,new cljs.core.Keyword(null,"shape-lookup","shape-lookup",2731806872));var map__8644 = (cljs.core.truth_(from_node)?(function (){var vec__8646 = from_shape;var from_shape_key = cljs.core.nth.call(null,vec__8646,0,null);var from_shape_index = cljs.core.nth.call(null,vec__8646,1,null);return cljs.core.get_in.call(null,canvas_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_shape_key,from_shape_index,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296),from_node], null));
})():new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null));var map__8644__$1 = ((cljs.core.seq_QMARK_.call(null,map__8644))?cljs.core.apply.call(null,cljs.core.hash_map,map__8644):map__8644);var y__$1 = cljs.core.get.call(null,map__8644__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x__$1 = cljs.core.get.call(null,map__8644__$1,new cljs.core.Keyword(null,"x","x",1013904362));var map__8645 = (cljs.core.truth_(to_node)?(function (){var vec__8647 = to_shape;var to_shape_key = cljs.core.nth.call(null,vec__8647,0,null);var to_shape_index = cljs.core.nth.call(null,vec__8647,1,null);var to_point = cljs.core.get_in.call(null,canvas_state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [to_shape_key,to_shape_index,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296),to_node], null));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(cljs.core.truth_(new cljs.core.Keyword(null,"horizontally","horizontally",3086095395).cljs$core$IFn$_invoke$arity$1(draw_map))?0:(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(to_point) - x__$1)),new cljs.core.Keyword(null,"y","y",1013904363),(cljs.core.truth_(new cljs.core.Keyword(null,"vertically","vertically",1219453685).cljs$core$IFn$_invoke$arity$1(draw_map))?0:(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(to_point) - y__$1))], null);
})():null);var map__8645__$1 = ((cljs.core.seq_QMARK_.call(null,map__8645))?cljs.core.apply.call(null,cljs.core.hash_map,map__8645):map__8645);var diffY__$1 = cljs.core.get.call(null,map__8645__$1,new cljs.core.Keyword(null,"diffY","diffY",1109485670));var diffX__$1 = cljs.core.get.call(null,map__8645__$1,new cljs.core.Keyword(null,"diffX","diffX",1109485669));var pos_attrs = (cljs.core.truth_(new cljs.core.Keyword(null,"centered","centered",4456450854).cljs$core$IFn$_invoke$arity$1(draw_map))?that_new.vector_to_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + diffX__$1),(y__$1 + diffY__$1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 - diffX__$1),(y__$1 - diffY__$1)], null)):that_new.vector_to_nodes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,y__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x__$1 + diffX__$1),(y__$1 + diffY__$1)], null)));return that_new.conj_in.call(null,canvas_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_lookup], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shape-name","shape-name",1699536041),that_new.shape_key,new cljs.core.Keyword(null,"position-attrs","position-attrs",2552349296),pos_attrs,new cljs.core.Keyword(null,"visual-attrs","visual-attrs",1512932167),cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fill","fill",1017047285),"#1F1E1D",new cljs.core.Keyword(null,"className","className",1004015509),"shape",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#1F1E1D",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",2937970144),3], null),(cljs.core.truth_(new cljs.core.Keyword(null,"guide","guide",1112616558).cljs$core$IFn$_invoke$arity$1(draw_map))?new cljs.core.Keyword(null,"vis-attrs","vis-attrs",1159306279).cljs$core$IFn$_invoke$arity$1(draw_map):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",1004015509),"guide",new cljs.core.Keyword(null,"stroke","stroke",4416891306),"#225E79",new cljs.core.Keyword(null,"fill","fill",1017047285),"#3BA3D0",new cljs.core.Keyword(null,"strokeWidth","strokeWidth",2937970144),2], null))),new cljs.core.Keyword(null,"active","active",3885920888),new cljs.core.Keyword(null,"active","active",3885920888).cljs$core$IFn$_invoke$arity$1(draw_map)], null));
});
that_new.cs = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"circle","circle",3948654658),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path","path",1017337751),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"line","line",1017226086),cljs.core.PersistentVector.EMPTY], null);
that_new.make_draw_cs.call(null,that_new.cs,that_new.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-center-node","middle-center-node",1498126260),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guide","guide",1112616558),new cljs.core.Keyword(null,"centered","centered",4456450854)], null)));
that_new.pre_app_state = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [that_new.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-center-node","middle-center-node",1498126260),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guide","guide",1112616558),new cljs.core.Keyword(null,"centered","centered",4456450854)], null)),that_new.make_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null),new cljs.core.Keyword(null,"top-node","top-node",4296511212),.86),that_new.make_draw.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"middle-left-node","middle-left-node",3682637122),new cljs.core.Keyword(null,"canvas","canvas",3941165258)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [16,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guide","guide",1112616558),new cljs.core.Keyword(null,"centered","centered",4456450854)], null)),that_new.make_draw.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null)], null)),that_new.make_for.call(null,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [that_new.make_rotate.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),0], null),new cljs.core.Keyword(null,"first-point","first-point",3184094117),0.02),that_new.make_draw.call(null,new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),0], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),0], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertically","vertically",1219453685)], null)),that_new.make_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",1017226086),1], null),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),1], null)], null)),that_new.make_move.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",3948654658),1], null),6,0)], null))], null);

//# sourceMappingURL=that_new.js.map