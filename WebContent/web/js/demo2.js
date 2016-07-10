//avalon初始化
var mv = avalon.define({
	$id: "bodyController",
	returnBack: function(){
		window.parent.mv.changeDialog("main");
	}
});
avalon.scan();