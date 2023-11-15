---
title: Solution - Information Grouping
---
Information Grouping combines the user experience benefits of both approaches with an important technical consideration: you're not actually moving accessibility focus to the input element.

This means that you are responsible for the associated assistive technology behaviors. Controls like Switch and TextField utilize private APIs and so their behavior can only be closely replicated by public accessibility APIs. 

The list of these behaviors is longer than you might think:

1. Label
2. Value 
3. State information - "Is Editing"
4. Error Information
5. Cursor Position and associated Custom Rotor concerns.

Sharing these in the appropriate order and in the appropriate place is important. However, if you put this information in the correct order in AccessibilityValue it works very close to the native behavior and updates the user at the appropriate times as state, value, and error change.

Ensure that your Error Information is concise otherwise the announcement gets very verbose. In fact limiting this to one sentence is likely a good idea.