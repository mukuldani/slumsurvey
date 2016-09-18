//DatePicker
$(function () {
	$('#datetimepicker1').datetimepicker();
});

$(function () {
	$('#datetimepicker2').datetimepicker();
});

//DropDown
$(document.body).on('click', '.dropdown-menu li', function (event) {

	var $target = $(event.currentTarget);

	$target.closest('.btn-group')
		.find('[data-bind="label"]').text($target.text())
		.end()
		.children('.dropdown-toggle').dropdown('toggle');

	return false;

});

//Member table
function addMember(tableID) {

	var table = document.getElementById(tableID);
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);

	var row = table.insertRow(rowCount);
	var cell1 = row.insertCell(0);
	var element1 = document.createElement("input");
	element1.type = "checkbox";
	element1.name = "chkbox[]";
	cell1.appendChild(element1);

	var cell2 = row.insertCell(1);
	var element2 = document.createElement("input");
	element2.type = "text";
	element2.name = "txtbox[]";
	cell2.appendChild(element2);

	//cell3.innerHTML = rowCount + 1;
	var cell3 = row.insertCell(1);
	var element3 = document.createElement("input");
	element3.type = "text";
	element3.name = "txtbox[]";
	cell3.appendChild(element3);

	//cell3.innerHTML = rowCount + 1;
	var cell4 = row.insertCell(1);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.name = "txtbox[]";
	cell4.appendChild(element4);

	//cell3.innerHTML = rowCount + 1;
	var cell4 = row.insertCell(1);
	var element4 = document.createElement("input");
	element4.type = "text";
	element4.name = "txtbox[]";
	cell4.appendChild(element4);

	//cell3.innerHTML = rowCount + 1;
	var cell5 = row.insertCell(1);
	var element5 = document.createElement("input");
	element5.type = "text";
	element5.name = "txtbox[]";
	cell5.appendChild(element5);

}

function deleteMember(tableID) {
	try {
		var table = document.getElementById(tableID);
		var rowCount = table.rows.length;

		for (var i = 0; i < rowCount; i++) {
			var row = table.rows[i];
			var chkbox = row.cells[0].childNodes[0];
			if (null != chkbox && true == chkbox.checked) {
				if (rowCount <= 1) {
					alert("Cannot delete all the rows.");
					break;
				}
				table.deleteRow(i);
				rowCount--;
				i--;
			}


		}
	} catch (e) {
		alert(e);
	}
}


//Next page traverse
function nextPage() {
	var currentHref = window.location.href;
	var a = currentHref.lastIndexOf("/");
	var currentLocation = currentHref.substr(0,a);
	var sendingLocation = currentLocation + "/otherDetails.html";
	window.location = sendingLocation;
}