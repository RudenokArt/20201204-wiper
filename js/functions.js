let content ={
	page: 'brand',
	sql:'SELECT * FROM `catalog_brand`',
}
startPage();
function startPage () {
	hidePopup();
	catalogName();
	getContentData();
}
function catalogName () { // название каталога
	$.post('php/catalog-name.php',{data:'data'}, 
		(data)=>{$('.navigation-catlog').html(data)});
}
function getContentData () {
	$.post('php/select.php',{data:content.sql}, parseContentData);
	//
}
function parseContentData (data) {
	let arr=JSON.parse(data);
	contentTable(arr);
}
function contentTable (arr) {
	let table='';
	for (var i = 0; i < arr.length; i++) {
		table=table+
		'<div class="col-md-3">'+
		'<div class="content-item">'+
		'<div class="admin">'+
		'<button class="edit_button col-sm-4" value="'+arr[i][0]+'">'+
		'<i class="glyphicon glyphicon-pencil" aria-hidden="true"></i>'+
		'</button>'+
		'<button class="delete_button col-sm-4 offset-sm-4" value="'+arr[i][0]+'">'+
		'<i class="glyphicon glyphicon-remove" aria-hidden="true"></i>'+
		'</button>'+
		'</div>'+
		'<img src="picture/'+arr[i][0]+'.jpg" alt=" ">'+
		'<p>'+arr[i][1]+'</p>'+
		'</div>'+
		'</div>';
	}
	$('.content-main').html(table);
}
function hidePopup () {
	$('.wrapper-popup').hide();
	$('form').hide();
	$('.warning').html('');
}
function showPopup (form) {
	$('.wrapper-popup').show();
	$(form).show();
	$('.add-id')[0].value=Math.round(Math.random()*10000000);
	content.form=form;
}
function submitForm () {
	let form=$(content.form);
	let check=checkForm(form);
	if (check==false) {
		$('.warning').html('Заполните все поля формы!');
	}
	else{
		$('.warning').html('');
		form[0].submit();
	}
}
function checkForm (form) {
	let arr=$(form).children('.form-control');
	let check=true;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].value==''||arr[i].value==null||arr[i].value==undefined){
			check=false;
		}
	}
	return check;
}
function categorySelect () {
	console.log(this)
}
function itemSelect (e) {
	e.stopPropagation(); 
	let task=this.className.split('_');
	task=task[0];
	sql='SELECT * FROM `catalog_'+content.page+'`  WHERE id="'+this.value+'"';
	$.post('php/select.php',{data:sql},(data)=>{dataParse(data,task);});
}
function dataParse (data,task) {
	let arr=JSON.parse(data);
	if (task=='delete') {itemDelete(arr[0]);}
	if (task=='edit') {itemEdit(arr[0]);}
}
function itemEdit (item) {
	showPopup('.'+content.page+'-form-edit');
	$('.edit-id')[0].value=item.id;
	$('.edit-brand')[0].value=item.brand;
}
function itemDelete (item) {
	let sql='DELETE FROM `catalog_'+content.page+'` WHERE id="'+item.id+'"';
	let ask=confirm('Удалить?');
	if(ask){
		$.post('php/sql.php',{data:sql}, getContentData);
		$.post('php/remove-file.php',{data:item.id}, (data)=>console.log(data));
	}
}