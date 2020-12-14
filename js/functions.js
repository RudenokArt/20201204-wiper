let content ={
	page: 'brand',
	sql:'SELECT * FROM `catalog_brand`',
	brand:'',
	parent:'',
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
		'<div class="content-item" id="'+arr[i][0]+'">'+
		'<div class="admin">'+
		'<button class="edit_button col-sm-4" value="'+arr[i][0]+'">'+
		'<i class="glyphicon glyphicon-pencil" aria-hidden="true"></i>'+
		'</button>'+
		'<button class="delete_button col-sm-4 offset-sm-4" value="'+arr[i][0]+'">'+
		'<i class="glyphicon glyphicon-remove" aria-hidden="true"></i>'+
		'</button>'+
		'</div>'+
		'<img src="picture/'+arr[i][0]+'.jpg" alt=" ">'+
		'<p>'+itemParser(arr[i][1])[0]+'</p>'+
		'<p>'+itemDiscriber(itemParser(arr[i][1]))+'</p>'+
		'</div>'+
		'</div>';
	}
	$('.content-main').html(table);
}
function itemParser (str) {
	let arr=str.split(';');
	return arr;
}
function itemDiscriber (arr) {
	let describe="";
	if (arr[1]!=''&&arr[1]!=undefined&&arr[1]!=null)
		{describe=describe+'годы выпуска: '+arr[1];}
	if (arr[2]!=''&&arr[2]!=undefined&&arr[2]!=null)
		{describe=describe+'<br>тип кузова: '+arr[2];}
	if (arr[3]!=''&&arr[3]!=undefined&&arr[3]!=null)
		{describe=describe+'<br>тип двигателя: '+arr[3];}
	return describe;
}
function hidePopup () {
	$('.wrapper-popup').hide();
	$('form').hide();
	$('.warning').html('');
}
function showPopup (form) {
	$('.wrapper-popup').show();
	$(form).show();
	$('.add-id').attr('value',Math.round(Math.random()*10000000));
	$('.page-id').attr('value',content.pageId);
	$('.page-list').attr('value',content.page);
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
	if (content.page=='brand') {
		content.parent='brand';
		content.page='model';
	}
	let item;
	if(this.title==''||this.title==undefined||this.title==null){item=this.id;}
	else{item=this.title};
	content.sql='SELECT * FROM `catalog_'+content.page+'`'+
	' WHERE `'+content.parent+'`="'+item+'"';
	let SQL='SELECT * FROM `catalog_'+content.parent+'`'+
	' WHERE `id`="'+item+'"';
	$.post('php/select.php',{data:SQL},(data)=>{dataParse(data,'content');});
}
function itemSelect (e) {
	e.stopPropagation(); 
	let task=this.className.split('_');
	task=task[0];
	let sql='SELECT * FROM `catalog_'+content.page+'`  WHERE `id`="'+this.value+'"';
	$.post('php/select.php',{data:sql},(data)=>{dataParse(data,task);});
}
function dataParse (data,task) {
	let arr=JSON.parse(data);
	if (task=='delete') {itemDelete(arr[0]);}
	else if (task=='edit') {itemEdit(arr[0]);}
	else if (task=='content'){
		let node=$('.navigation-'+content.parent);
		node.unbind();
		node.attr('title',arr[0].id);
		node.html('&#8594'+arr[0][content.parent]);
		node.click(categorySelect);
		content[content.parent]=arr[0].brand;
		content.pageId=arr[0].id;
		getContentData();
	}
}
function itemEdit (item) {
	showPopup('.'+content.page+'-form-edit');
	$('.edit-id').attr('value',item.id);
	$('.edit-brand').attr('value',item.brand);
	$('.edit-model').attr('value',item.model);
}
function itemDelete (item) {
	let sql='DELETE FROM `catalog_'+content.page+'` WHERE id="'+item.id+'"';
	let ask=confirm('Удалить?');
	if(ask){
		$.post('php/sql.php',{data:sql}, getContentData);
		$.post('php/remove-file.php',{data:item.id}, (data)=>console.log(data));
	}
}
function rootBack () {
	content.page='brand';
	content.sql='SELECT * FROM `catalog_brand`';
	content.brand='';
	content.parent='';
	getContentData();
	navigation(1);
}
function navigation (step) {
	let arr=$('.navigation').children('span');
	for (var i = step; i < arr.length; i++) {
		arr[i].innerHTML='';
	}
}