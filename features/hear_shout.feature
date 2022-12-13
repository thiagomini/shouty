Feature: Hear shout

  Shouty allows users to "hear" other users "shouts" as long as they are close enough to each other.

  Rule: Shouts can be heard by other users

    Scenario: Listener hears a message
      Given a person named Lucy
      And a person named Sean
      When Sean shouts "free bagels at Sean's"
      Then Lucy hears Sean's message
    
  Rule: Shouts should only be heard if listener is within range

    Scenario: Listener is within close range
      Given the range is 100 metres
      And people are located at
        | name     | Lucy | Sean |
        | location | 0    | 50   |
      When Sean shouts
      Then Lucy hears Sean's message

    Scenario: Listener is out of range
      Given the range is 100 metres
      And people are located at
        | name     | Lucy | Sean |
        | location | 0    | 101   |
      When Sean shouts
      Then Lucy does not hear Sean's message

    Scenario: Listener is standing in the same place as the shout
      Given the range is 15 metres
      And people are located at
        | name     | Lucy | Sean |
        | location | 0    | 0   |
      When Sean shouts
      Then Lucy hears Sean's message
  
  Rule: Listener should be able to hear multiple shouts from the same person

    Scenario: Listener hears multiple shouts
      Given a person named Lucy
      And a person named Sean
      When Sean shouts "Free bagels!"
      And Sean shouts "Free toast!"
      Then Lucy hears hears the follwing messages:
        | Free bagels! |
        | Free toast!  |
