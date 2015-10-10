var index = function($){
	var i = 0;
	var abc = function(){
		i++;
	};
	return {
		sexChange:function(){
			alert($(this).val());
			//alert($(":radio[name='sex']:checked").val());
		},
		nameChange:function(){
			
		}
	};
}(jQuery);

$(function(){
	$(":radio[name='sex']").on("change",index.sexChange);
});


var abc= function (y){
	var x=y; // 这个是局部变量
	return function (){
		alert(x++); // 就是这里调用了闭包特性中的一级函数局部变量的x，并对它进行操作
		alert(y--); // 引用的参数变量也是自由变量
	}
}(5); // 初始化
//abc(); // "5" "5"
//abc(); // "6" "4"
//abc(); // "7" "3" 
//alert(abc);
/*(function($$){
	function sexChange(){
		//alert($(this).val());
		alert(15);
	}
	function nameChange(){
		
	}
	
	$$(":input").on("click",function(){
		alert(15);
	});
})(jQuery);*/