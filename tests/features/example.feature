Feature: Playwright cucumber examples

  Scenario: Playwright title is visible
    Given I open browser
    When I navigate to Playwright web site
    Then I see the "<title>" title

    Examples:
      | title          |
      | Playwright     |

  Scenario: Check Get started link redirection
    Given I open browser
    When I navigate to Playwright web site
    When I click to Get Started
    Then I see the "<title>" title

    Examples:
      | title           |
      | Installation    | 