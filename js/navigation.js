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
// console.log(content)