search={staus:'a'};
$('#n-search, #a-search').click(searchStatus);
function searchStatus (e) {
	$('.input-search').attr('placeholder',e.target.innerHTML);
	search.staus=e.target.id.split('-')[0];
}
$('#a-search').trigger('click');
$('.button-search').click(redirect);
function redirect () {
	let value = $('.input-search')[0].value;
	console.log(value);
	if(value!=''){
		if (search.staus=='a') {
			document.location.href=
			'https://vegaavto.ru/parts/brands/'+value;
		}
		if (search.staus=='n') {
			document.location.href=
			'https://vegaavto.ru/shop/search?search_string='+value;
		}
	}
}
