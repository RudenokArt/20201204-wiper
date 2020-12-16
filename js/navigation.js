function backRoot () {
	content.page='brand';
	content.brand='';
	content.brandId='';
	content.model='';
	content.modelId='';
	content.modification='';
	content.modificationId='';
	content.detail='';
	content.detailId='';
	$('.navigation-brand').html('');
	$('.navigation-brand').attr('');
	$('.navigation-model').html('');
	$('.navigation-model').attr('');
	$('.navigation-modification').html('');
	$('.navigation-modification').attr('');
	getContentData();
}
function backBrand () {
	content.page='model';
	content.model='';
	content.modelId='';
	content.modification='';
	content.modificationId='';
	content.detail='';
	content.detailId='';
	$('.navigation-model').html('');
	$('.navigation-model').attr('');
	$('.navigation-modification').html('');
	$('.navigation-modification').attr('');
	getContentData();
}
function backModel () {
	content.page='modification';
	content.modification='';
	content.modificationId='';
	content.detail='';
	content.detailId='';
	$('.navigation-modification').html('');
	$('.navigation-modification').attr('');
	getContentData();
}
function setLocalStorage () {
	for (let key in content) {
		if(key!='sql'){
			localStorage.setItem(key,content[key]);
		}		
	}
	localStorage.setItem('check','true');
}
function checkLocalStorage () {
	if (localStorage.check=='true') {
		content.page=localStorage.page;
		content.brand=localStorage.brand;
		content.brandId=localStorage.brandId;
		content.model=localStorage.model;
		content.modelId=localStorage.modelId;
		content.modification=localStorage.modification;
		content.modificationId=localStorage.modificationId;
		content.detail=localStorage.detail;
		content.detailId=localStorage.detalId;
	}
}
function setLocalStorage () {
	for (let key in content) {
		if(key!='sql'){
			localStorage.setItem(key,content[key]);
		}		
	}
	localStorage.setItem('check','true');
	setNavigation()
}
function setNavigation () {
	if (content.brand!='') {
		$('.navigation-brand').html(' &#8594 '+content.brand.split(';')[0]);
		$('.navigation-brand').attr('title',content.brandId);
	}
	if (content.model!='') {
		$('.navigation-model').html(' &#8594 '+content.model.split(';')[0]);
		$('.navigation-model').attr('title',content.modelId);
	}
	if (content.modification!='') {
		$('.navigation-modification').html(' &#8594 '+content.modification.split(';')[0]);
		$('.navigation-modification').attr('title',content.modificationId);
	}
}




// console.log(content)