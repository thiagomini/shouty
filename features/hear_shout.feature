Feature: Hear shout
  Scenario: Listener is within range
    Given Lucy is located 15 metres from Sean
    When Sean shouts "free bagels at Sean's"
    Then Lucy hears Sean's message

  Scenario: Listener is within range
    Given Lucy is located 15 metres from Sean
    When Sean shouts "free coffee"
    Then Lucy hears Sean's message

  Scenario: Listener is not within range
    Given Lucy is located 16 metres from Sean
    When Sean shouts "free coffee"
    Then Lucy does not hear Sean's message
