//注意，只有通过该函数设置transform才能通过它获取，css添加的获取不了
function cssTransform(element,attr,val){
	if(!element.transform){
		element.transform = {};
	}
	if( typeof val == "undefined" ){
		if( !element.transform[attr] ){
			switch(attr){
				case"scale":
					element.transform[attr] = 1;
					break;
				case"scaleX":
					element.transform[attr] = 1;
					break;
				case"scaleY":
					element.transform[attr] = 1;
					break;
				case"scaleZ":
					element.transform[attr] = 1;
					break;
				default:
					element.transform[attr] = 0;
			}
		}
		return element.transform[attr];
	}else{
		element.transform[attr] = val;
		var transformVal = "";
		for( var s in element.transform ){
			switch(s){
				case "scale":
				case "scaleX":
				case "scaleY":
				case "scaleZ":
					transformVal += " "+s+"("+element.transform[s]+")";
					break;
				case "rotate":
				case "rotateX":
				case "rotatey":
				case "rotateZ":
				case "skewX":
				case "skewY":
					transformVal += " "+s+"("+element.transform[s]+"deg)";
					break;
				default:
					transformVal += " "+s+"("+element.transform[s]+"px)";
			}
		}
		element.style.webkitTransform = element.style.transform = transformVal;
	}
}