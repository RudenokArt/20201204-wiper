<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="css/resset.css">
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<link rel="stylesheet/less" type="text/css" href="css/style.less" />
	<link rel="stylesheet/less" type="text/css" href="css/user.less" />
	<script src="//cdn.jsdelivr.net/npm/less" ></script>
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/user.less">
	<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
	<title>catalog</title>
</head>
<body>
	
	<div class="container">
		<div class="content-editor">
			<div class="page-status"></div>
			<div class="location"></div>
			<div class="catalog-name-wrapper">
				<span class="catalog-name"></span>
				<button class="catalog-name-button">Изменить название каталога</button>
			</div>
		
		</div>
		<div class="wrapper-content">
			<div class="content"></div>
		</div>
	</div>
	<div class="wrapper-popup">
		<div class="popup">
			<div class="container">
				<div class="row">
					<div class="col-sm-12">
						<div class="col-sm-8"><br>КАРТОЧКА ТОВАРА</div>
						<div class="col-sm-2 offset-sm-2">
							<button class="close-button" title="Закрыть">
								<i class="glyphicon glyphicon-remove-circle" aria-hidden="true"></i>
							</button>
						</div> 
						
					</div>
				</div>
			</div>
			<form class="popup-form">
				<input type="text" name="id" class="item-id">
				<input type="text" name="modification" class="column-name">
				Наименование:<br>
				<input type="text" name="detail" placeholder="Наименование"><br>
				Артикул:<br>
				<input type="text" name="article" placeholder="Артикул"><br>
				Описание:<br>
				<textarea name="discribe" rows="3">Описание</textarea>
			</form>
			<div class="warning"></div>
			<button class="serealise-button" title="Сохранить">
				<i class="glyphicon glyphicon-ok-circle" aria-hidden="true"></i>
			</button>
		</div>
	</div>
	<div class="picture-loader">
		<form action="php/image.php" enctype="multipart/form-data" method="post" class="picture-form">
			<input type="file" name="myfile" class="picture-file">
			<input type="text" name="table" class="table-name">
			<input type="text" name="picture" class="picture-name">
		</form>
	</div>
	


	
	
	<script src="js/functions.js"></script>
	<script src="js/selectors.js"></script>
</body>
</html>