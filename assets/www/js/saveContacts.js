window.onload = function() {
			document.addEventListener("deviceready", onDeviceReady, false);
		}

		function onDeviceReady() {
			document.getElementById('btnSave').addEventListener('click',
					saveContact, false);
		}

		function saveContact() {
			var fullName = document.getElementById('first').value + " "
					+ document.getElementById('last').value;
			var note = document.getElementById('note').value;
			
			

			var theContact = navigator.contacts.create({
				"displayName" : fullName
			});
			theContact.note = note;
			

			theContact.save();
		}