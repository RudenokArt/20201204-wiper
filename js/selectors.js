$('.close-popup-button').click(()=>{hidePopup();});
$('.catalog-name-button').click(()=>{showPopup('.catalog-form');});
$('.brand-add').click(()=>{showPopup('.brand-form');});
$('.brand-list-add').click(()=>{showPopup('.list-form');});
$('.submit-popup-button').click(submitForm);
$('body').delegate('.content-item','click',categorySelect);
$('body').delegate('.delete_button','click',itemSelect);
$('body').delegate('.edit_button','click',itemSelect);