site = {};
site.todo = {};
site.todo.remove = function () {

	$('ul').on('click', 'li', function () {
		$(this).toggleClass('completed');
		store();
	});

	$('ul').on('click', '.edit', function (event) {
		$(this).parent('li.tasks').find('.edit').hide();
		$(this).parent('li.tasks').find('.save').show();
		// $(this).parent('li.tasks').find('.task-edit').focus();
		$(this).parent('li.tasks').find('.task-display').hide();
		$(this).parent('li.tasks').find(".task-edit").show().val($(this).parent('li.tasks').find('.task-display').text());
		store();
		event.stopPropagation();
	});

	$('ul').on('click', '.save', function (event) {
		$(this).parent('li.tasks').find('.save').hide();
		$(this).parent('li.tasks').find('.edit').show();
		$(this).parent('li.tasks').find('.task-edit').hide();
		$(this).parent('li.tasks').find(".task-display").show().text($(this).parent('li.tasks').find('.task-edit').val());
		store();
		event.stopPropagation();
	});

	$('ul').on('click', '.delete', function (event) {
		$(this).parent().fadeOut('slow', function () {
			$(this).remove();
			store();
		});
		event.stopPropagation();
	});

	$('#task-input').keypress(function (event) {
		if (event.which === 13) {
			let todoItem = $('#task-input').val().trim();
			$('#task-input').val('');
			if (todoItem !== '') {
				$('#task-input').val('');
				$('ul').append('<li class="tasks">' +
					'<span class="task-display">' + todoItem + '</span>' +
					'<input type="text" class="task-edit" style="display:none">' +
					'<span class="delete"><i class="fas fa-trash-alt"></i></span>' +
					'<span class="edit"><i id="edit-icon" class="fas fa-edit"></i></span>' +
					'<span class="save" style="display:none"><i id="save-icon" class="fas fa-save"></i></span>' +
					'</li>');
				store();
			}
		}
	});

	$('#add-btn').click(function () {
		let todoItem = $('#task-input').val().trim();
		$('#task-input').val('');
		if (todoItem !== '') {
			$('#task-input').val('');
			$('ul').append('<li class="tasks">' +
				'<span class="task-display">' + todoItem + '</span>' +
				'<input type="text" class="task-edit" style="display:none">' +
				'<span class="delete"><i class="fas fa-trash-alt"></i></span>' +
				'<span class="edit"><i id="edit-icon" class="fas fa-edit"></i></span>' +
				'<span class="save" style="display:none"><i id="save-icon" class="fas fa-save"></i></span>' +
				'</li>');
			store();
		}
	});

//	function edit() {
//		$(this).parent('li.tasks').find('.task-display').hide();
//		$(this).parent('li.tasks').find(".task-edit").show().val($(this).parent('li.tasks').find('.task-display').text());
//	};
//
//	function save() {
//		$(this).parent('li.tasks').find('.task-edit').hide();
//		$(this).parent('li.tasks').find(".task-display").show().text($(this).parent('li.tasks').find('.task-edit').val());
//	};

	function store() {
		window.sessionStorage.myitems = $('#list').html();
	}

	function getValues() {
		let storedValues = window.sessionStorage.myitems;
		if (!storedValues) {
			$('#list').html('<li class="tasks">' +
				'<span class="task-display">' + todoItem + '</span>' +
				'<input type="text" class="task-edit" style="display:none">' +
				'<span class="delete"><i class="fas fa-trash-alt"></i></span>' +
				'<span class="edit"><i id="edit-icon" class="fas fa-edit"></i></span>' +
				'<span class="save" style="display:none"><i id="save-icon" class="fas fa-save"></i></span>' +
				'</li>');
		} else {
			$('#list').html(storedValues);
		}
	}

	getValues();
};

$(document).ready(function () {
	site.todo.remove();
});