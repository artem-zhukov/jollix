$(document).ready(function(){
	$(".box ul").hide();
	$("h3 span").click(function(){
		$(this).parent().next().slideToggle();
	});

});

function Menu() {
	var menu = document.getElementById('main__clickForm').style;
	if (menu.display == '' || menu.display == 'none') {
	 menu.display = 'block';
 }else if(menu.display == 'block'){
	 menu.display = 'none';
 }
};

function addMenu() {
	var menu = document.getElementById('addMenu').style;
	if (menu.display == '' || menu.display == 'none') {
	 menu.display = 'block';
	 }else if(menu.display == 'block'){
		 menu.display = 'none';
 	}
 }
