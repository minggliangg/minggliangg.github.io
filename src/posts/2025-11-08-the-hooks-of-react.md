---
title: "The Hooks of React"
tags: "Learnings"
description: Rediscovering React Hooks through official documentation and uncovering useful patterns I'd never seen in production code
date: 2025-11-08T20:30:00+08:00
---

It's been a hectic two weeks since my last post. Things are slowly chugging along, and today I'd like to share something I've been reading (or rather, revisiting): **React Hooks**.

The concept of **React Hooks** isn’t new to me — but most of what I’d learned so far came from diving straight into projects and figuring things out through patterns that previous developers had already used or implemented. This is actually the first time I’ve read through the official reference, and I was pleasantly surprised to discover a few things that even some experienced tech leads rarely mention or use.

The [official React Hooks reference](https://react.dev/reference/react/hooks) lists all the built-in hooks and provides clear examples of how they can and should be used.

Here are two things that stood out to me:

## 1. The _cleanup_ function in `useEffect`

The _cleanup_ function is an optional function that you can return inside a `useEffect`. Its purpose is to **undo or dispose of side effects** that were set up when the effect first ran — ensuring the effect’s lifecycle remains predictable and memory-safe.

For example, in this case of setting up a timer to call `fetchData()` every five seconds:

```js
useEffect(() => {
  const id = setInterval(fetchData, 5000);
  return () => clearInterval(id);
}, []);
```

The cleanup function ensures that once the component is removed from the screen, the task stops running — preventing potential memory leaks or unwanted behavior.

## 2. `useDeferredValue` and `useTransition`

These two performance-related hooks are really interesting, and honestly, it’s a bit sad to realize I haven’t seen them used in any of my past projects. While they’re not something you’d reach for in every component, I’m sure there have been cases where these hooks could’ve made the user experience noticeably smoother.

---

Learning (or re-learning) React Hooks through the official documentation was a refreshing reminder that even familiar tools can surprise you when you take the time to revisit their foundations.
