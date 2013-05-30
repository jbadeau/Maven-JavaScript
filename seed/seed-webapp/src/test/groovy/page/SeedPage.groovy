package page

import geb.Page

class SeedPage extends Page {

	static at = { title == "Hello" }

	static content = {
		nameInput(wait: true) { $("input")[0] }
		nameOuput(wait: true) { $("span")[0] }
	}

	void enterName(String name) {
		nameInput = name
	}

	String getName(String name) {
		waitFor {
			nameOuput.text().equals(nameInput.value())
		}
		return nameOuput.text() 
	}
	
}
