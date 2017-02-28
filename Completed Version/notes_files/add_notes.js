   	var i = 0;
        function AddTextBox()
	 {
            var textboxes=document.getElementsByTagName("textarea");
            var bTextPresent=true;
            for (var j = 0; j < textboxes.length; j++)
                if (textboxes[j].value.toString().trim() == "")
                    bTextPresent = false;
            if (bTextPresent) 
	    {
                var tableRow = document.createElement("tr");
                var tdCell = document.createElement("td");
                var txtbox = document.createElement("textarea");
                txtbox.type = "text";
                txtbox.id = "txtbox" + i.toString();
                i++;
                tdCell.appendChild(txtbox);
                tableRow.appendChild(tdCell);
                document.getElementById("tblTextBoxes").appendChild(tableRow);
            }
            else
                alert("Empty Notes Field.Please enter notes to add a new note.");
        }
	var blink_speed = 500;
	var t = setInterval(
	function () 
	{ 
		var ele = document.getElementById('blinker');
	 	ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
	}
	,blink_speed);