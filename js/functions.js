let content={
	page:'brand',
	brand:'',
	brandId:'',
	model:'',
	modelId:'',
	modification:'',
	modificationId:'',
	detail:'',
	detailId:'',
	sql(){
		if (this.page=='brand') 
			{return 'SELECT * FROM `catalog_brand`';}
		else if (this.page=='model') 
			{return 'SELECT * FROM `catalog_model` WHERE brand="'+this.brandId+'"';}
		else if (this.page=='modification') 
			{return 'SELECT * FROM `catalog_modification` WHERE model="'+this.modelId+'"';}
		else if (this.page=='detail') 
			{return 'SELECT * FROM `catalog_detail` WHERE modification="'+this.modificationId+'"';}
	}
}
pageOnLoad();
function pageOnLoad () {
	checkLocalStorage();
	hidePopup();
	catalogName();
	getContentData();
}
function hidePopup () {
	$('.wrapper-popup').hide();
	$('form').hide();
	$('.warning').html('');
}
function catalogName () {
	$.post('php/catalog-name.php',{data:'data'}, 
		(data)=>{$('.navigation-catlog').html(data);});
}
function showPopup (form) {
	$('.wrapper-popup').show();
	$(form).show();
	$('.add-id').attr('value',Math.round(Math.random()*10000000));
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
function getContentData () {
	$.post('php/select.php',{data:content.sql()}, parseContentData);
	setLocalStorage();
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
	if (content.page=='model') {
		let describe="";
		if (arr[1]!=''&&arr[1]!=undefined&&arr[1]!=null)
			{describe=describe+'годы выпуска: '+arr[1];}
		if (arr[2]!=''&&arr[2]!=undefined&&arr[2]!=null)
			{describe=describe+'<br>тип кузова: '+arr[2];}
		if (arr[3]!=''&&arr[3]!=undefined&&arr[3]!=null)
			{describe=describe+'<br>тип двигателя: '+arr[3];}
		return describe;
	}
	else if (content.page=='modification') {
		let describe="";
		if (arr[1]!=''&&arr[1]!=undefined&&arr[1]!=null)
			{describe=describe+'Модель двигателя: '+arr[1];}
		if (arr[2]!=''&&arr[2]!=undefined&&arr[2]!=null)
			{describe=describe+'<br>Объем двигателя: '+arr[2];}
		if (arr[3]!=''&&arr[3]!=undefined&&arr[3]!=null)
			{describe=describe+'<br>Тип двигателя: '+arr[3];}
		if (arr[3]!=''&&arr[3]!=undefined&&arr[3]!=null)
			{describe=describe+'<br>Мощность л.с.: '+arr[4];}
		return describe;
	}
	else if (content.page=='detail') {
		let describe="";
		if (arr[1]!=''&&arr[1]!=undefined&&arr[1]!=null)
			{describe=describe+'Артикул: '+arr[1];}
		return describe;
	}
	else return'';
}
function itemDelete (data,itemId) {
	let arr={};
	let check=true;
	try {arr=JSON.parse(data);} catch(e) {console.log(e);}
	if(arr.length>0){check=false;}
	let SQL='DELETE FROM `catalog_'+content.page+'` WHERE `id`="'+itemId+'"';
	let ask=confirm('Удалить?');
	if(ask==true&&check==true){
		$.post('php/remove-file.php',{data:this.value}, sqlQuery(SQL));
	} else{alert('Удаление запрещено! Каталог содерижт вложенные элементы.')}
}
function sqlQuery (SQL) {
	$.post('php/sql.php',{data:SQL}, getContentData);
	//
}
function itemSelect (e) {
	e.stopPropagation();
	let sql='SELECT * FROM `catalog_'+content.page+'`  WHERE `id`="'+this.value+'"';
	$.post('php/select.php',{data:sql},(data)=>{editItem(data);});
}
function editItem(data){
	showPopup('.'+content.page+'-form-edit');
	let item=JSON.parse(data);
	item=item[0];
	$('.edit-id').attr('value',item.id);
	$('.edit-brand').attr('value',item.brand);
	$('.edit-model').attr('value',item.model);
	$('.edit-modification').attr('value',item.modification);
	$('.edit-detail').attr('value',item.detail);
}
function categorySelect () {
	let sql='SELECT * FROM `catalog_'+content.page+'`  WHERE `id`="'+this.id+'"';
	$.post('php/select.php',{data:sql},(data)=>{pageCategory(data);});
}
function pageCategory (data) {
	let item=JSON.parse(data);
	if(content.page=='brand'){
		content.page='model';
		content.brand=item[0].brand;
		content.brandId=item[0].id;
		$('.page-id').attr('value',content.brandId);
		$('.navigation-brand').html(' &#8594 '+content.brand.split(';')[0]);
		$('.navigation-brand').attr('title',content.brandId);
	}
	else if(content.page=='model'){
		content.page='modification';
		content.model=item[0].model;
		content.modelId=item[0].id;
		$('.page-id').attr('value',content.modelId);
		$('.navigation-model').html(' &#8594 '+content.model.split(';')[0]);
		$('.navigation-model').attr('title',content.modelId);
	}
	else if(content.page=='modification'){
		content.page='detail';
		content.modification=item[0].modification;
		content.modificationId=item[0].id;
		$('.page-id').attr('value',content.modificationId);
		$('.navigation-modification').html(' &#8594 '+content.modification.split(';')[0]);
		$('.navigation-modification').attr('title',content.modificationId);
	}
	else if (content.page=='detail') {
		document.location.href='https://vegaavto.ru/parts/brands/'+item[0].detail.split(';')[1];
		
	}
	getContentData();
}
function checkDelete (e) {
	e.stopPropagation();
	let itemId=this.value;
	let table;
	if (content.page=='brand') {table='model';}
	if (content.page=='model') {table='modification';}
	if (content.page=='modification') {table='detail';}
	let SQL='SELECT * FROM `catalog_'+table+'` WHERE `'+content.page+'`="'+itemId+'"';
	$.post('php/select.php',{data:SQL}, (data)=>{itemDelete(data,itemId)})
}

//           console.log(content)


