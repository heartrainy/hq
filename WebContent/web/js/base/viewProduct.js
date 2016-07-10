//avalon初始化
var mv = avalon.define({
	$id: "bodyController",
	closeDialog: function(){
		window.parent.layer.close(window.parent.viewDialog);
	}
});
avalon.scan();