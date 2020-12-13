let content ={
	page: 'brend',
}
startPage();
function startPage () {
	catalogName();
	hidePopup();
}
function catalogName () { // название каталога
$.post('php/catalog-name.php',{data:'data'}, 
	(data)=>{$('.navigation-catlog').html(data)});
}
function hidePopup () {
	$('.wrapper-popup').hide();
	$('.form').hide();
}
function showPopup (form) {
	$('.wrapper-popup').show();
	$(form).show();
	content.form=form;
}
function submitForm () {
	let form=$(content.form);
	console.log(content.form);
	console.log(form);
	form[0].submit();
}