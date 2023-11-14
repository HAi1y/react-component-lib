---
title: Introduction
---

The iOS Accessibility Simulator allows you to experience iOS Assistive Technology behaviors in a simple browser based environment. Currently the following features are supported.

### VoiceOver

VoiceOver is the screen reader for the iOS platform. Interact with the controls to simulate swipes in the corresponding direction.

1. **Right:** Swipe Right. Focus Forward.
2. **Left:** Swipe Left. Focus Forward.
3. **Rotor:** Bottle Cap. Cycle Rotor Setting.
4. **Up:** Swipe Up. Depends on Rotor Setting.
5. **Down:** Swipe Doen. Depends on Rotor Setting.
6. **Home:** Back to the Launcher.

Note: The Arrow Keys, Enter, H, and R also work. Without the limitations sometimes placed upon the UI for teaching purposes.

### Accessibility Inspector

The Accessibility Inspector allows you to explore the properties used in VoiceOver's calculation of an announcement. Setting these APIs to reasonable values is a fundamental part of building an accessible applicaiton. Considering the limitations of these APIs in design is also essential.

Another features of the Accessibility Inspector is information icons that link off to technical advice about the corresponding API.