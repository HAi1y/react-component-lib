---
title: Solution - Focus inputs
---

Another solution is to focus just the TextField. This is a similar experience as using the tab key on a website. 

```
textField.accessibilityLabel = label.text
textField.accessibilityValue = value + ", " + errors.toString() 
label.isAccessibilityElement = false
```
Note that we've carefully structured this information. The accessibilityLabel remains a concise name for the input field while the accessibilityValue receives the extra information regarding error messaging only after the current value has been shared.

This has the added benefit of reporting error messaging updates for the currently focused Input Field for free! 

### Pros

- Linear Navigation users avoid duplicating information.
- Structural relationships do not rely on focus order.
- Accessibility Value updates communicate changes in error messaging.

### Cons

- Information is visible but not focusable with Touch to Explore.

