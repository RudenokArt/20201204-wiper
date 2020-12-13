let page={
	status:'brand',
	table: 'brand',
	sql: 'SELECT * FROM `catalog_brand` ORDER BY `brand`',
}
loadPage();// старт загрузки страницы каталога
function loadPage () {
	getLocalStorage();
	getContent(page.sql);
	getCatalogName();
	fillInputs();
}
function getLocalStorage () {
	let SQL=localStorage.getItem('sql');
	if (SQL!=null&&SQL!=undefined&&SQL!='') {
		page.sql=SQL;
	}
	let STATUS=localStorage.getItem('status');
	if (STATUS!=null&&STATUS!=undefined&&STATUS!='') {
		page.status=STATUS;
	}
	let TABLE=localStorage.getItem('table');
	if (TABLE!=null&&TABLE!=undefined&&TABLE!='') {
		page.table=TABLE;
	}
	let location=localStorage.getItem('location');
	if (location==''||location==undefined||location==null) {
		location='<div class="location">'+
		'<span class="location-catalog"></span>'+
		'<span class="arrow-model"></span>'+
		'<span class="location-model"></span>'+
		'<span class="arrow-modification"></span>'+
		'<span class="location-modification"></span>'+
		'<span class="arrow-detail"></span>'+
		'<span class="location-detail"></span>'+
		'</div>';
	}
	$('.location').html(location);
}
function getCatalogName() { // получить текущее имя каталога
	let catalog='';
	$.post('php/catalog-name.php', {data:''}, setCatalogName);
}
function setCatalogName (data) { // заполнить имя каталога
	$('.location-catalog').html(data);
	$('.catalog-name').html(data);
	page.catalogName=data;
}
function changeCatalogName () { // изменить название каталога
	let ask=prompt('Изменить название каталога?', page.catalogName);
	if (ask!=null&&ask!=''&&ask!=undefined){
		$.post('php/new-catalog-name.php', {data:ask}, (data)=>console.log(data));
		getCatalogName();
	}
}	
function getContent (sql) { // загрузка каталога из базы
	$.post('php/select.php', {data:sql}, setContent);
	editorViev ('.editor-'+page.table);
}
function setContent (sql) { // парсинг данных каталога из json
	let arr=JSON.parse(sql);
	contentTable(arr);
}
function contentTable (arr) { // отрисовка таблицы каталога
	let content='';
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].discribe==undefined) {arr[i].discribe='';}
		if (arr[i][3]==undefined){arr[i][3]='';}
		content=content+
		'<div class="content-item col-lg-3 col-md-5 col-sm-12" id="'+
		arr[i][1]+'" title="'+arr[i][3]+'">'+
		'<div class="content-item-tab">'+
		'<img src="picture/'+page.table+'-'+arr[i][0]+'.jpg" alt="">'+
		'<div>'+arr[i].discribe+'</div>'+
		'<button class="delete" value="'+arr[i][0]+'" title="удалить">'+
		'<i class="glyphicon glyphicon-remove" aria-hidden="true"></i></button> '+
		'<button class="edit" value="'+arr[i][0]+'" title="редактировать">'+
		'<i class="glyphicon glyphicon-pencil" aria-hidden="true"></i></button> '+
		'<button class="picture-edit" value="'+arr[i][0]+'" title="Загрузить изображение">'+
		'<i class="glyphicon glyphicon-picture" aria-hidden="true"></i></button><br>'+
		arr[i][1]+
		'</div></div>';
	}
	$('.content').html(content);
}
function addPicture (e) {//загрузка картинки
	e.stopPropagation();
	$('.table-name')[0].value=page.table;
	$('.picture-name')[0].value=e.target.value;
	let node=$('.picture-file')[0];
	let form=$('.picture-form');
	$('.picture-file').change(function (){form.submit();});
	node.click();
}
function categorySelect () { // выбор категори по клику в каталоге
	page.status=this.id.trim();
	if (page.table=='brand') {
		page.table='model';
		page.sql='SELECT * FROM `catalog_model` WHERE `brand`="'+page.status+'" ORDER BY `model`';
		$('.location-model').html(page.status);
		$('.arrow-model').html('&#8594');
		// editorViev ('.editor-model');
	}
	else if (page.table=='model') {
		page.table='modification';
		page.sql='SELECT * FROM `catalog_modification` WHERE `model`="'+page.status+'" ORDER BY `modification`';
		$('.location-modification').html(page.status);
		$('.arrow-modification').html('&#8594');
		// editorViev ('.editor-modification');
	}
	else if (page.table=='modification') {
		page.table='detail';
		page.sql='SELECT * FROM `catalog_detail` WHERE `modification`="'+page.status+'" ORDER BY `detail`';
		$('.location-detail').html(page.status);
		$('.arrow-detail').html('&#8594');
		// editorViev ('.editor-detail');
	}
	else if(page.table=='detail'){
		document.location.href = 'https://vegaavto.ru/parts/brands/'+this.title;
	}
	setLocalStorage();
	fillInputs();
	getContent(page.sql);	
}
function setLocalStorage () {
	localStorage.setItem('sql',page.sql);
	localStorage.setItem('status',page.status);
	localStorage.setItem('table',page.table); 
	localStorage.setItem('location',$('.location')[0].innerHTML);// параметры поля Location
}
function editItem (e) { // редактировать элемент
	e.stopPropagation();
	if (page.table=='brand'||page.table=='model'||page.table=='modification') {
		let button=e.target;
		let div=$(button).parent();
		let arr=[button.value,div[0].id];
		let ask=prompt('Изменить?', arr[1]);
		if(ask!=null&&ask!=''&&ask!=undefined){
			let arr=[page.table,ask,page.status,button.value];
			let str=JSON.stringify(arr);
			$.post('php/edit-item.php', {data:str}, ()=>getContent(page.sql));
		}
	} else{
		let SQL='SELECT * FROM `catalog_detail` WHERE `id`="'+e.target.value+'"';
		let str='';
		$.post('php/select.php', {data:SQL}, displayEditPopup);
	}
}
function displayEditPopup (data) { // модальное окно для редактирования
	let item=JSON.parse(data);
	popupDisplay('flex');
	let arr=($('.popup-form').children('input'));
	arr[0].value=item[0].id;
	arr[1].value=item[0].modification;
	arr[2].value=item[0].detail;
	arr[3].value=item[0].article;
	arr=($('.popup-form').children('textarea'));
	arr[0].value=item[0].discribe;
}
function fillInputs () {//Заполнить скрытые инпуты
	let arr=$('.column-name');
	for (var i = 0; i < arr.length; i++) {
		arr[i].value=page.status;
	}
}
function backPage () {// выход из подкатегории на уровень выше
	let node=this.className;
	let html=this.innerHTML;
	
	if (node=='location-catalog'){
		$('.location-detail').html('');
		$('.arrow-detail').html('');
		$('.location-modification').html('');
		$('.arrow-modification').html('');
		$('.location-model').html('');
		$('.arrow-model').html('');
		page.brand='brand';
		page.table='brand';
		page.sql= 'SELECT * FROM `catalog_brand` ORDER BY `brand`';
		getContent(page.sql);
	}
	if (node=='location-model') {
		$('.location-modification').html('');
		$('.arrow-modification').html('');
		$('.location-detail').html('');
		$('.arrow-detail').html('');
		page.status=html.trim();
		page.table='model';
		page.sql='SELECT * FROM `catalog_model` WHERE `brand`="'+page.status+' "ORDER BY `model`';
		getContent(page.sql);
		// editorViev ('.editor-model');
	}
	if (node=='location-modification') {
		$('.location-detail').html('');
		$('.arrow-detail').html('');
		page.status=html.trim();
		page.table='modification';
		page.sql='SELECT * FROM `catalog_modification` WHERE `model`="'+page.status+'" ORDER BY `modification`';
		getContent(page.sql);
		// editorViev ('.editor-modification');
	}
	setLocalStorage();
	fillInputs();
}
function editorViev (node) {
	$('.editor').css('display','none');
	$(node).css('display','block');
}
function itemDelete (e) { // Удалить элемент
	e.stopPropagation();
	let ask=confirm('Удалить?');
	if(ask){
		let arr=[this.value, page.status, page.table];
		let str=JSON.stringify(arr);
		$.post('php/delete-item.php', {data:str}, 
			(data)=>{alert(data);	getContent(page.sql);});
	}
}
function addItem () {
	if (page.table=='brand'||page.table=='model'||page.table=='modification'){
		let ask=prompt('Наименование: ', 'Name');
		if (ask!=null&&ask!=''&&ask!=undefined){
			let arr=[page.table,page.status,ask];
			let str=JSON.stringify(arr);
			$.post('php/new-item.php', {data:str}, ()=>{getContent(page.sql);});
		}
	}else{popupDisplay('flex');}// добавить элемент
}
function popupDisplay (show) { // окно добавить элемент
	fillInputs();
	$('.wrapper-popup').css('display',show);
}
function serealiseForm () { // сохранить элемент
	let arr=$('.popup-form').children('input');
	let check=true;
	for (var i = 2; i <=3; i++) {
		if (arr[i].value==''||arr[i].value==null||arr[i].value==undefined){
			check=false;
		}
	}
	if (check==false) {
		$('.warning').html('Не заполнено Наименование или Артикул!');
	}
	else {
		$('.warning').html('');
		if(arr[0].value!=null&&arr[0].value!=undefined&&arr[0].value!=''){
			$.post('php/edit-detail.php',
				$('.popup-form').serialize(),
				()=>{popupDisplay('none');getContent(page.sql);cleanPopUp();});
		}else{
			$.post('php/new-detail.php',
				$('.popup-form').serialize(),
				()=>{popupDisplay('none');getContent(page.sql);});
		}
	}
}
function cleanPopUp () {
	let arr=$('.popup-form').children('input');
	for (var i = 0; i < arr.length; i++) {
		arr[i].value='';
	}
	let area=$('.popup-form').children('textarea');
	area[0].value='';// очистить модальное окно
}