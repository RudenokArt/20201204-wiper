<?php include_once 'header-admin.php' ?>

<body>
	<div class="catalog-decoration">
		<div class="container">
			<div class="row">
				<div class="col-sm-2 catalog-image"></div>
				<div class="col-sm-2 catalog-discribe"></div>
			</div>
		</div>
	</div>
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
					<button class="item-add">Добавить элемент</button>
				</div>
				<div class="col-sm-4 offset-sm-1">
					<button class="brand-list-add">Добавить список</button>
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
					<h3>Добавление АВТО</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="add-id" style="display: none;">
					<input type="text" class="form-control" name="brand" placeholder="Введите название авто">
				</form>
				<form action="php/new-model.php" enctype="multipart/form-data" method="POST" class="model-form">
					<h3>Добавление МОДЕЛИ</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="add-id" style="display: none;">
					<input type="text"name="pageId"class="page-id"style="display: none;">
					<input type="text" class="form-control" name="model" placeholder="модель;г.в.">
				</form>
				<form action="php/new-detail.php" enctype="multipart/form-data" method="POST" class="detail-form">
					<h3>Добавление ДЕТАЛИ</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="add-id" style="display: none;">
					<input type="text"name="pageId"class="page-id"style="display: none;">
					<input type="text" class="form-control" name="detail" placeholder="деталь;артикул">
				</form>
				<form action="php/new-modification.php" enctype="multipart/form-data" method="POST" class="modification-form">
					<h3>Добавление МОДИФИКАЦИИ</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="add-id" style="display: none;">
					<input type="text"name="pageId"class="page-id"style="display: none;">
					<input type="text" class="form-control" name="modification" placeholder="модификация;объем двигателя;мощность">
				</form>
				<form action="php/edit-brand.php" enctype="multipart/form-data" method="POST" class="brand-form-edit">
					<h3>Редактирование АВТО</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="edit-id" style="display:none;">
					<input type="text" class="edit-brand form-control" name="brand">
				</form>
				<form action="php/edit-model.php" enctype="multipart/form-data" method="POST" class="model-form-edit">
					<h3>Редактирование МОДЕЛИ</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="edit-id" style="display:none;">
					<input type="text"name="pageId"class="page-id"style="display:none;">
					<input type="text" class="edit-model form-control" name="model">
				</form>
				<form action="php/edit-modification.php" enctype="multipart/form-data" method="POST" class="modification-form-edit">
					<h3>Редактирование МОДИФИКАЦИЙ</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="edit-id" style="display:none;">
					<input type="text"name="pageId"class="page-id"style="display:none;">
					<input type="text" class="edit-modification form-control" name="modification">
				</form>
				<form action="php/edit-detail.php" enctype="multipart/form-data" method="POST" class="detail-form-edit">
					<h3>Редактирование ДЕТАЛЕЙ</h3>
					<p>
						Загрузить изображение
						<input type="file" name="myfile">
					</p>
					<input type="text" name="id" class="edit-id" style="display:none;">
					<input type="text"name="pageId"class="page-id"style="display:none;">
					<input type="text" class="edit-detail form-control" name="detail">
				</form>
				<form action="php/brand-list.php" method="POST" class="brand-list-form">
					<h3>Загрузка списка АВТО</h3>
					<textarea name="list" cols="50" rows="10" class="form-control"></textarea>
				</form>
				<form action="php/model-list.php" method="POST" class="model-list-form">
					<h3>Загрузка списка МОДЕЛЕЙ</h3>
					<input type="text"name="pageId"class="page-id"style="display:none;">
					<textarea name="list" cols="50" rows="10" class="form-control"></textarea>
				</form>
				<form action="php/modification-list.php" method="POST" class="modification-list-form">
					<h3>Загрузка списка МОДИФИКАЦИЙ</h3>
					<input type="text"name="pageId"class="page-id"style="display:none;">
					<textarea name="list" cols="50" rows="10" class="form-control"></textarea>
				</form>
				<form action="php/detail-list.php" method="POST" class="detail-list-form">
					<h3>Загрузка списка ДЕТАЛЕЙ</h3>
					<input type="text"name="pageId"class="page-id"style="display:none;">
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
	<?php include_once 'footer.php' ?>
