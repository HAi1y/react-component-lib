---
title: Solution 1 - Focus Everything
---

One solution is to behave like the Arrow Key on a keyboard. This means that all elements are individually focusable. 

```
	textField.accessibilityLabel = label.text
```

Notice that you hear the word UserName twice. 

### Pros
- Very simple to implement.
- Resolves WCAG issues.
- Everything responds to Touch to Explore gestures.

### Cons
- Linear Navigation experience gets worse for every Input Field.
- Touch to Expolore experience relies on locality to create informational relationships.

