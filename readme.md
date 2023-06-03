# Spytab

A native javascript web application that detects when you try to leave

## How it works

This is a native js application listening for events that indicate the loss of focus on the current tab. Similar methods are often used on online exam applications. This is a binary system that detects leaving and alerts immediately. In production systems, these events are logged and a tolerance is specified so the student is not punished for clicking out for a couple of seconds to close a popup for example.

## References

- https://developer.mozilla.org/en-US/docs/Web/API/Element/blur_event
- https://developer.mozilla.org/en-US/docs/Web/API/Document/visibilitychange_event
