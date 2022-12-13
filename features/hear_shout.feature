Feature: Hear shout

  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

  Rule: Shouts can be heard by other users

    Scenario: Listener hears a message
      Given Lucy is located 15 metres from Sean
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean's message
    
  Rule: Shouts should only be heard if listener is within range

    Scenario: Listener is within close range
      Given Lucy is located 1 metre from Sean
      When Sean shouts "free coffee"
      Then Lucy hears Sean's message

    Scenario: Listener is not within range
      Given Lucy is located 16 metres from Sean
      When Sean shouts "free coffee"
      Then Lucy does not hear Sean's message

    Scenario: Listener is standing in the same place as the shout
      Given Lucy is standing 0 metres from Sean
      When Sean shouts "free coffee"
      Then Lucy hears Sean's message