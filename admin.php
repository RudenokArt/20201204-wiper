<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<script src="https://code.jquery.com/jquery-1.12.1.min.js"></script>
	<link rel="stylesheet/less" type="text/css" href="css/style.less" />
	<script src="//cdn.jsdelivr.net/npm/less" ></script>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
	<link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet">

	<link rel="stylesheet" href="css/style.less">


	<title>Document</title>
</head>
<body>
	<div class="container">
		<div class="row">
			<div class="col-sm-12">
				<div class="navigation">
					<span class="navigation-catlog"></span>
					<span class="navigation-brand"></span>
					<span class="navigation-model"></span>
					<span class="navigation-modification"></span>
					<span class="navigation-detail"></span>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-sm-6">
				<h2 class="navigation-catlog">catalog</h2>
			</div>
			<div class="col-sm-6">
				<div class="admin">
					<button class="catalog-name-button">
						Изменить название каталога
					</button>
				</div>
			</div>
		</div>
		<div class="admin">
			<div class="row">
				<div class="col-sm-4 offset-sm-1">
					<button class="brand-add">Добавить авто</button>
				</div>
				<div class="col-sm-4 offset-sm-1">
					<button class="brand-list-add">Добавить авто списком</button>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row">
			<div class="content-main"></div>
		</div>
	</div>
	<div class="wrapper-popup">
		<div class="popup">
			<div class="close-popup">
				<button class="close-popup-button">
					<i class="glyphicon glyphicon-remove" aria-hidden="true"></i>
				</button>
			</div>
			<div class="container">
				<form action="php/new-catalog-name.php" method="POST" class="catalog-form">
					<input type="text" class="form-control" name="catalog" placeholder="Введите название каталога">
				</form>
				<form action="php/new-brand.php" enctype="multipart/form-data" method="POST" class="brand-form">
					<h3>Добавление элемента</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="add-id" style="/*display: none*/;">
					<input type="text" class="form-control" name="brand" placeholder="Введите название авто">
				</form>
				<form action="php/edit-brand.php" enctype="multipart/form-data" method="POST" class="brand-form-edit">
					<h3>Редактирование элемента</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="edit-id" style="display: none;">
					<input type="text" class="edit-brand form-control" name="brand">
				</form>
				<form action="php/new-list.php" method="POST" class="list-form">
					<h3>Загрузка списка</h3>
					<textarea name="list" cols="50" rows="10" class="form-control"></textarea>
				</form>

				<div class="warning"></div>
			</div>
			<div class="submit-popup">
				<button class="submit-popup-button">
					<i class="glyphicon glyphicon-ok" aria-hidden="true"></i>
				</button>
			</div>
		</div>
	</div>
	
	<script src="js/functions.js"></script>
	<script src="js/selectors.js"></script>
</body>
</html>
