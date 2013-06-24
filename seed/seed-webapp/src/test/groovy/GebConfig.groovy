/*
 This is the Geb configuration file.
 See: http://www.gebish.org/manual/current/configuration.html
 */

import org.openqa.selenium.chrome.ChromeDriver
import org.openqa.selenium.firefox.FirefoxDriver

// See: https://code.google.com/p/selenium/wiki/FirefoxDriver
driver = { new FirefoxDriver() }

environments {

	baseUrl = "http://localhost:8080/"

	// run as "mvn -Dgeb.env=chrome test"
	// See: http://code.google.com/p/selenium/wiki/ChromeDriver
	chrome {
		driver = { new ChromeDriver() }
	}

}
