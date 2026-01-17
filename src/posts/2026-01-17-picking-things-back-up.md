---
title: "Picking Things Back Up"
description: A long-overdue update on life, work, and an ongoing search for an always-on dev environment.
date: 2026-01-17T13:30:00+08:00
tags:
  - "Rebuilding My Digital Home"
  - "Life"
---

My last post went up on **2025-11-08**.  
Today is **2026-01-17**.

It’s been a while.

The silence here wasn’t intentional, but the last couple of months have been packed — in the very real, life-happens-all-at-once kind of way. I got married, requested a change of project at my consultancy, put more serious effort into job searching, and am also in the middle of moving out from my rental.

Individually, none of these are particularly dramatic. Put together, though, they made life feel constantly “in motion”. Most days were about context-switching and getting through the next thing on the list. Progress was happening, just not in a very visible or orderly way.

---

## An Old Want That Never Really Went Away

One thing that resurfaced during this period was an idea I’ve had for a long time:  
having an **always-on development environment** — something I can build with anywhere, anytime.

If I’m being honest, this is something I’ve wanted since I was a kid. The idea that I wouldn’t be tied to a single desk, a single machine, or a very specific setup to make things.

This also isn’t my first attempt at chasing that idea.

### Attempt #1: Coding on a Phone

I tried setting things up directly on a phone before. Technically possible, yes — but in practice, not great for me:

- It works much better on Android, while I daily-drive an iPhone
- The setup felt fragile and easy to break
- It never became something I actually wanted to return to

### Attempt #2: uConsole

I went further with this one and actually got a uConsole.

It was fun, and I don’t regret trying it, but there were a few friction points:

- Raspberry Pi 4 performance was limiting
- Despite being marketed as portable, it was still quite unwieldy
- And realistically… it looks like a homemade device — probably not something I’d enjoy explaining to airport security

It scratched the itch, but didn’t quite solve the problem.

---

## Hosted Options and Their Limits

There are also hosted environments like GitHub Codespaces, which I haven’t fully explored yet. From what I’ve seen though, most of these experiences are still very desktop-first.

If I need a laptop for it to feel usable, then it doesn’t fully line up with what I’m trying to achieve.

---

## A Direction Worth Exploring (For Now)

What I’m experimenting with now feels more promising — at least as a stepping stone.

The setup is fairly simple:

- A **small, cheap VPS**, always on
- Coding agents like **Claude Code**, **Codex**, and **OpenCode** running on it
- Most interaction happening through these agents
- Accessed via **SSH**, from basically any device

This is probably not the “best” implementation by any objective measure. But setting it up has already forced me to properly understand things I’d previously taken for granted — SSH, key management, Tailscale, and what it actually means to work remote-first.

I’m not entirely sure where this will lead, but that’s kind of the point.

One idea I’m playing with is building a **very simple, mobile-optimised UI** on top of this setup — something that makes interacting with it from a phone feel less like fighting a terminal. Whether I’ll have the time or energy to follow through on this… we’ll see.

---

## Back to Basics (With Less AI)

On the side, I’ve also been trying to slow things down a bit and go back to fundamentals.

I’m building a **simple expense tracker**, deliberately keeping AI assistance to a minimum. I can’t completely remove it at this point — let’s be honest — but I’m trying to rely more on my own reasoning and muscle memory.

Progress here is slow and very incremental. Features get added whenever I find a spare pocket of time. Maybe one day, when it’s in a reasonable state, I’ll host it on this site as well.

---

## Looking Ahead

That’s about it for now.

No big conclusions, no grand roadmap — just a small check-in to mark where I am right now. Still building, still experimenting, still figuring things out, just at a slightly messier pace.

Here’s hoping updates in 2026 will be a bit more consistent.
