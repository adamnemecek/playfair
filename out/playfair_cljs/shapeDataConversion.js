// Compiled by ClojureScript 0.0-2173
goog.provide('playfair_cljs.shapeDataConversion');
goog.require('cljs.core');
goog.require('playfair_cljs.math');
goog.require('playfair_cljs.math');
playfair_cljs.shapeDataConversion.shape_keys = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.Keyword(null,"line","line",1017226086)], null);
playfair_cljs.shapeDataConversion.get_pos_key = (function get_pos_key(shape_name){return shape_name.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rect","rect",1017400662),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null),new cljs.core.Keyword(null,"path","path",1017337751),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"y","y",1013904363)], null),new cljs.core.Keyword(null,"line","line",1017226086),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x1","x1",1013908011),new cljs.core.Keyword(null,"y1","y1",1013908042),new cljs.core.Keyword(null,"x2","x2",1013908012),new cljs.core.Keyword(null,"y2","y2",1013908043)], null),new cljs.core.Keyword(null,"circle","circle",3948654658),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"cy","cy",1013907432)], null)], null));
});
playfair_cljs.shapeDataConversion.rect_nodes = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015),new cljs.core.Keyword(null,"middle-right-node","middle-right-node",3976603069),new cljs.core.Keyword(null,"top-right-node","top-right-node",875619837),new cljs.core.Keyword(null,"bottom-center-node","bottom-center-node",2609391434),new cljs.core.Keyword(null,"middle-center-node","middle-center-node",1498126260),new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"bottom-left-node","bottom-left-node",4456976984),new cljs.core.Keyword(null,"middle-left-node","middle-left-node",3682637122),new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098)], null);
playfair_cljs.shapeDataConversion.circle_nodes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-node","top-node",4296511212),new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.Keyword(null,"bottom-node","bottom-node",4653566934),new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.Keyword(null,"left-node","left-node",2709524346)], null);
playfair_cljs.shapeDataConversion.line_nodes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-point","first-point",3184094117),new cljs.core.Keyword(null,"middle-point","middle-point",4048024266),new cljs.core.Keyword(null,"last-point","last-point",1861953291)], null);
playfair_cljs.shapeDataConversion.get_rect_node_points = (function get_rect_node_points(p__9630){var map__9632 = p__9630;var map__9632__$1 = ((cljs.core.seq_QMARK_.call(null,map__9632))?cljs.core.apply.call(null,cljs.core.hash_map,map__9632):map__9632);var height = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"height","height",4087841945));var width = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"width","width",1127031096));var y = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"x","x",1013904362));return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"middle-center-node","middle-center-node",1498126260),new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098),new cljs.core.Keyword(null,"top-right-node","top-right-node",875619837),new cljs.core.Keyword(null,"bottom-left-node","bottom-left-node",4456976984),new cljs.core.Keyword(null,"bottom-center-node","bottom-center-node",2609391434),new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"middle-left-node","middle-left-node",3682637122),new cljs.core.Keyword(null,"middle-right-node","middle-right-node",3976603069),new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(x + (width / 2)),new cljs.core.Keyword(null,"y","y",1013904363),(y + (height / 2))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(x + width),new cljs.core.Keyword(null,"y","y",1013904363),y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),(y + height)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(x + (width / 2)),new cljs.core.Keyword(null,"y","y",1013904363),(y + height)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(x + (width / 2)),new cljs.core.Keyword(null,"y","y",1013904363),y], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x,new cljs.core.Keyword(null,"y","y",1013904363),(y + (height / 2))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(x + width),new cljs.core.Keyword(null,"y","y",1013904363),(y + (height / 2))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(x + width),new cljs.core.Keyword(null,"y","y",1013904363),(y + height)], null)]);
});
playfair_cljs.shapeDataConversion.get_line_node_points = (function get_line_node_points(p__9633){var map__9635 = p__9633;var map__9635__$1 = ((cljs.core.seq_QMARK_.call(null,map__9635))?cljs.core.apply.call(null,cljs.core.hash_map,map__9635):map__9635);var y2 = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"y2","y2",1013908043));var x2 = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"x2","x2",1013908012));var y1 = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"y1","y1",1013908042));var x1 = cljs.core.get.call(null,map__9635__$1,new cljs.core.Keyword(null,"x1","x1",1013908011));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first-point","first-point",3184094117),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x1,new cljs.core.Keyword(null,"y","y",1013904363),y1], null),new cljs.core.Keyword(null,"middle-point","middle-point",4048024266),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),((x1 + x2) / 2),new cljs.core.Keyword(null,"y","y",1013904363),((y1 + y2) / 2)], null),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x2,new cljs.core.Keyword(null,"y","y",1013904363),y2], null)], null);
});
playfair_cljs.shapeDataConversion.get_circle_node_points = (function get_circle_node_points(p__9636){var map__9638 = p__9636;var map__9638__$1 = ((cljs.core.seq_QMARK_.call(null,map__9638))?cljs.core.apply.call(null,cljs.core.hash_map,map__9638):map__9638);var r = cljs.core.get.call(null,map__9638__$1,new cljs.core.Keyword(null,"r","r",1013904356));var cy = cljs.core.get.call(null,map__9638__$1,new cljs.core.Keyword(null,"cy","cy",1013907432));var cx = cljs.core.get.call(null,map__9638__$1,new cljs.core.Keyword(null,"cx","cx",1013907431));return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top-node","top-node",4296511212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cx,new cljs.core.Keyword(null,"y","y",1013904363),(cy - r)], null),new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cx,new cljs.core.Keyword(null,"y","y",1013904363),cy], null),new cljs.core.Keyword(null,"bottom-node","bottom-node",4653566934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),cx,new cljs.core.Keyword(null,"y","y",1013904363),(cy + r)], null),new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(cx + r),new cljs.core.Keyword(null,"y","y",1013904363),cy], null),new cljs.core.Keyword(null,"left-node","left-node",2709524346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),(cx - r),new cljs.core.Keyword(null,"y","y",1013904363),cy], null)], null);
});
playfair_cljs.shapeDataConversion.attrs_to_nodes = (function attrs_to_nodes(shape_key,pos_attrs){return shape_key.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rect","rect",1017400662),playfair_cljs.shapeDataConversion.get_rect_node_points.call(null,pos_attrs),new cljs.core.Keyword(null,"circle","circle",3948654658),playfair_cljs.shapeDataConversion.get_circle_node_points.call(null,pos_attrs),new cljs.core.Keyword(null,"line","line",1017226086),playfair_cljs.shapeDataConversion.get_line_node_points.call(null,pos_attrs)], null));
});
playfair_cljs.shapeDataConversion.nodes_to_attrs = (function nodes_to_attrs(shape_key,node_map){if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"rect","rect",1017400662)))
{var map__9644 = node_map;var map__9644__$1 = ((cljs.core.seq_QMARK_.call(null,map__9644))?cljs.core.apply.call(null,cljs.core.hash_map,map__9644):map__9644);var bottom_right_node = cljs.core.get.call(null,map__9644__$1,new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015));var top_left_node = cljs.core.get.call(null,map__9644__$1,new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(top_left_node),new cljs.core.Keyword(null,"y","y",1013904363),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(top_left_node),new cljs.core.Keyword(null,"height","height",4087841945),(new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(bottom_right_node) - new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(top_left_node)),new cljs.core.Keyword(null,"width","width",1127031096),(new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(bottom_right_node) - new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(top_left_node))], null);
} else
{if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"circle","circle",3948654658)))
{var map__9645 = node_map;var map__9645__$1 = ((cljs.core.seq_QMARK_.call(null,map__9645))?cljs.core.apply.call(null,cljs.core.hash_map,map__9645):map__9645);var top_node = cljs.core.get.call(null,map__9645__$1,new cljs.core.Keyword(null,"top-node","top-node",4296511212));var center_node = cljs.core.get.call(null,map__9645__$1,new cljs.core.Keyword(null,"center-node","center-node",2639619052));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1013907431),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(center_node),new cljs.core.Keyword(null,"cy","cy",1013907432),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(center_node),new cljs.core.Keyword(null,"r","r",1013904356),playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(top_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(top_node)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(center_node),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(center_node)], null))], null);
} else
{if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"line","line",1017226086)))
{var map__9646 = node_map;var map__9646__$1 = ((cljs.core.seq_QMARK_.call(null,map__9646))?cljs.core.apply.call(null,cljs.core.hash_map,map__9646):map__9646);var last_point = cljs.core.get.call(null,map__9646__$1,new cljs.core.Keyword(null,"last-point","last-point",1861953291));var first_point = cljs.core.get.call(null,map__9646__$1,new cljs.core.Keyword(null,"first-point","first-point",3184094117));return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",1013908011),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(first_point),new cljs.core.Keyword(null,"y1","y1",1013908042),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(first_point),new cljs.core.Keyword(null,"x2","x2",1013908012),new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(last_point),new cljs.core.Keyword(null,"y2","y2",1013908043),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(last_point)], null);
} else
{if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"path","path",1017337751)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1013904342),cljs.core.reduce.call(null,(function (accum,p__9647){var vec__9648 = p__9647;var p_type = cljs.core.nth.call(null,vec__9648,0,null);var x = cljs.core.nth.call(null,vec__9648,1,null);var y = cljs.core.nth.call(null,vec__9648,2,null);return [cljs.core.str(accum),cljs.core.str(((cljs.core._EQ_.call(null,accum,""))?"":" ")),cljs.core.str(p_type),cljs.core.str(" "),cljs.core.str(x),cljs.core.str(" "),cljs.core.str(y)].join('');
}),"",node_map)], null);
} else
{return null;
}
}
}
}
});
playfair_cljs.shapeDataConversion.rotate_point_around_point = (function rotate_point_around_point(p__9649,p__9650,rotate_val){var vec__9653 = p__9649;var origin_x = cljs.core.nth.call(null,vec__9653,0,null);var origin_y = cljs.core.nth.call(null,vec__9653,1,null);var vec__9654 = p__9650;var x = cljs.core.nth.call(null,vec__9654,0,null);var y = cljs.core.nth.call(null,vec__9654,1,null);var rotate_angle = (rotate_val * (2 * playfair_cljs.math.PI));var r = playfair_cljs.math.distance_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [origin_x,origin_y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));var current_angle = (((y > origin_y))?playfair_cljs.math.acos.call(null,((x - origin_x) / r)):((2 * playfair_cljs.math.PI) - playfair_cljs.math.acos.call(null,((x - origin_x) / r))));var new_angle = (rotate_angle + current_angle);if((cljs.core._EQ_.call(null,origin_x,x)) && (cljs.core._EQ_.call(null,origin_y,y)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(origin_x + (r * playfair_cljs.math.cos.call(null,new_angle))),(origin_y + (r * playfair_cljs.math.sin.call(null,new_angle)))], null);
}
});
playfair_cljs.shapeDataConversion.vector_to_nodes = (function vector_to_nodes(shape_key,p__9655,p__9656){var vec__9659 = p__9655;var x1 = cljs.core.nth.call(null,vec__9659,0,null);var y1 = cljs.core.nth.call(null,vec__9659,1,null);var vec__9660 = p__9656;var x2 = cljs.core.nth.call(null,vec__9660,0,null);var y2 = cljs.core.nth.call(null,vec__9660,1,null);if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"rect","rect",1017400662)))
{return playfair_cljs.shapeDataConversion.attrs_to_nodes.call(null,shape_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",1013904362),(function (){var x__3755__auto__ = x1;var y__3756__auto__ = x2;return ((x__3755__auto__ < y__3756__auto__) ? x__3755__auto__ : y__3756__auto__);
})(),new cljs.core.Keyword(null,"y","y",1013904363),(function (){var x__3755__auto__ = y1;var y__3756__auto__ = y2;return ((x__3755__auto__ < y__3756__auto__) ? x__3755__auto__ : y__3756__auto__);
})(),new cljs.core.Keyword(null,"height","height",4087841945),Math.abs.call(null,(y1 - y2)),new cljs.core.Keyword(null,"width","width",1127031096),Math.abs.call(null,(x1 - x2))], null));
} else
{if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"circle","circle",3948654658)))
{var mid_point = playfair_cljs.math.midpoint_formula.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null));var top_node = playfair_cljs.shapeDataConversion.rotate_point_around_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_point.call(null,0),mid_point.call(null,1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),.25);var bottom_node = playfair_cljs.shapeDataConversion.rotate_point_around_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_point.call(null,0),mid_point.call(null,1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null),.25);return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top-node","top-node",4296511212),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),top_node.call(null,0),new cljs.core.Keyword(null,"y","y",1013904363),top_node.call(null,1)], null),new cljs.core.Keyword(null,"center-node","center-node",2639619052),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),mid_point.call(null,0),new cljs.core.Keyword(null,"y","y",1013904363),mid_point.call(null,1)], null),new cljs.core.Keyword(null,"bottom-node","bottom-node",4653566934),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),bottom_node.call(null,0),new cljs.core.Keyword(null,"y","y",1013904363),bottom_node.call(null,1)], null),new cljs.core.Keyword(null,"left-node","left-node",2709524346),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x1,new cljs.core.Keyword(null,"y","y",1013904363),y1], null),new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),x2,new cljs.core.Keyword(null,"y","y",1013904363),y2], null)], null);
} else
{if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"line","line",1017226086)))
{return playfair_cljs.shapeDataConversion.attrs_to_nodes.call(null,shape_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",1013908011),x1,new cljs.core.Keyword(null,"y1","y1",1013908042),y1,new cljs.core.Keyword(null,"x2","x2",1013908012),x2,new cljs.core.Keyword(null,"y2","y2",1013908043),y2], null));
} else
{if(cljs.core._EQ_.call(null,shape_key,new cljs.core.Keyword(null,"path","path",1017337751)))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"M",new cljs.core.Keyword(null,"x","x",1013904362),x1,new cljs.core.Keyword(null,"y","y",1013904363),y1], null)], null);
} else
{return null;
}
}
}
}
});
playfair_cljs.shapeDataConversion.attrs_to_vectors = (function attrs_to_vectors(shape_key,attrs){var vector_nodes = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rect","rect",1017400662),shape_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098),new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015)], null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"circle","circle",3948654658),shape_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left-node","left-node",2709524346),new cljs.core.Keyword(null,"right-node","right-node",3874878085)], null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"line","line",1017226086),shape_key))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-point","first-point",3184094117),new cljs.core.Keyword(null,"last-point","last-point",1861953291)], null):null)));var nodes = playfair_cljs.shapeDataConversion.attrs_to_nodes.call(null,shape_key,attrs);var p1 = vector_nodes.call(null,0).call(null,nodes);var p2 = vector_nodes.call(null,1).call(null,nodes);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",1013904362).cljs$core$IFn$_invoke$arity$1(p2),new cljs.core.Keyword(null,"y","y",1013904363).cljs$core$IFn$_invoke$arity$1(p2)], null)], null);
});
playfair_cljs.shapeDataConversion.vectors_to_attrs = (function vectors_to_attrs(shape_key,p__9661,p__9662){var vec__9665 = p__9661;var x1 = cljs.core.nth.call(null,vec__9665,0,null);var y1 = cljs.core.nth.call(null,vec__9665,1,null);var vec__9666 = p__9662;var x2 = cljs.core.nth.call(null,vec__9666,0,null);var y2 = cljs.core.nth.call(null,vec__9666,1,null);return playfair_cljs.shapeDataConversion.nodes_to_attrs.call(null,shape_key,playfair_cljs.shapeDataConversion.vector_to_nodes.call(null,shape_key,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x1,y1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x2,y2], null)));
});
playfair_cljs.shapeDataConversion.get_opposite_node = (function get_opposite_node(node_key){return node_key.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"top-node","top-node",4296511212),new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098),new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.Keyword(null,"top-right-node","top-right-node",875619837),new cljs.core.Keyword(null,"left-node","left-node",2709524346),new cljs.core.Keyword(null,"bottom-left-node","bottom-left-node",4456976984),new cljs.core.Keyword(null,"bottom-node","bottom-node",4653566934),new cljs.core.Keyword(null,"first-point","first-point",3184094117),new cljs.core.Keyword(null,"bottom-center-node","bottom-center-node",2609391434),new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"middle-left-node","middle-left-node",3682637122),new cljs.core.Keyword(null,"middle-right-node","middle-right-node",3976603069),new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015),new cljs.core.Keyword(null,"last-point","last-point",1861953291)],[new cljs.core.Keyword(null,"bottom-node","bottom-node",4653566934),new cljs.core.Keyword(null,"bottom-right-node","bottom-right-node",2211335015),new cljs.core.Keyword(null,"left-node","left-node",2709524346),new cljs.core.Keyword(null,"bottom-left-node","bottom-left-node",4456976984),new cljs.core.Keyword(null,"right-node","right-node",3874878085),new cljs.core.Keyword(null,"top-right-node","top-right-node",875619837),new cljs.core.Keyword(null,"top-node","top-node",4296511212),new cljs.core.Keyword(null,"last-point","last-point",1861953291),new cljs.core.Keyword(null,"top-center-node","top-center-node",4151893876),new cljs.core.Keyword(null,"bottom-center-node","bottom-center-node",2609391434),new cljs.core.Keyword(null,"middle-right-node","middle-right-node",3976603069),new cljs.core.Keyword(null,"middle-left-node","middle-left-node",3682637122),new cljs.core.Keyword(null,"top-left-node","top-left-node",534564098),new cljs.core.Keyword(null,"first-point","first-point",3184094117)]));
});

//# sourceMappingURL=shapeDataConversion.js.map