package spec

import page.SeedPage;
import geb.spock.GebReportingSpec

import spock.lang.*


@Stepwise
class SeedSpec extends GebReportingSpec {

	def "go to seed"() {
		given:
		to SeedPage

		when:
		enterName "Zangief"

		then:
		assert getName().equals("Zangief")
	}

}