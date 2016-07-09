//分别是:奇数行默认颜色,偶数行颜色,鼠标放上时奇偶行颜色
var aBgColor = ["#EBEBEB","#EBE0EA","#B9E9C3","#B9E9C3","orange"];

//从前面iHead行开始变色，直到倒数iEnd行结束
function addTableListener(o,iHead,iEnd,single) {
	o.style.cursor = "normal";
	iHead = iHead > o.rows.length?0:iHead;
	iEnd = iEnd > o.rows.length?0:iEnd;
	for (var i=iHead;i<o.rows.length-iEnd ;i++ ) {
		if (i % 2 == 0) {
			initTrBgColor(o.rows[i],true);
		} else {
			initTrBgColor(o.rows[i],false);
		}
	}
	for (var i=iHead;i<o.rows.length-iEnd ;i++ ) {
		o.rows[i].onmouseover = function(){setTrBgColor(this,true)}
		o.rows[i].onmouseout = function(){setTrBgColor(this,false)}
		o.rows[i].onclick = function(){clickTrBgColor(o,this,single)}
	}
}
function setTrBgColor(oTr,b) {
	if (oTr.style.backgroundColor != aBgColor[4])
		oTr.rowIndex % 2 != 0 ? oTr.style.backgroundColor = b ? aBgColor[3] : aBgColor[1] : oTr.style.backgroundColor = b ? aBgColor[2] : aBgColor[0];
}
function initTrBgColor(oTr,b) {
	oTr.rowIndex % 2 != 0 ? oTr.style.backgroundColor = aBgColor[1] : oTr.style.backgroundColor = aBgColor[0];
}
function clickTrBgColor(o,oTr,single) {
	if (single != undefined) {
		if (single == true) {
			for (var i=0;i<o.rows.length;i++ ) {
				if (i % 2 == 0) {
					initTrBgColor(o.rows[i],true);
				} else {
					initTrBgColor(o.rows[i],false);
				}
			}
			if (oTr.style.backgroundColor != aBgColor[4]) {
				oTr.style.backgroundColor = aBgColor[4];
			} else {
				var b = true;
				oTr.rowIndex % 2 != 0 ? oTr.style.backgroundColor = b ? aBgColor[3] : aBgColor[1] : oTr.style.backgroundColor = b ? aBgColor[2] : aBgColor[0];
			}
		} else if (single == false) {
			if (oTr.style.backgroundColor != aBgColor[4]) {
				oTr.style.backgroundColor = aBgColor[4];
			} else {
				var b = true;
				oTr.rowIndex % 2 != 0 ? oTr.style.backgroundColor = b ? aBgColor[3] : aBgColor[1] : oTr.style.backgroundColor = b ? aBgColor[2] : aBgColor[0];
			}
		}
	}
}
//此行在代码中引入
//window.onload = function(){addTableListener(document.getElementById("tbColor"),0,0);}
