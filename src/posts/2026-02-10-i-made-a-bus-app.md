---
title: "I Made* a Bus App"
description: A long-overdue update on life, work, and some thoughts after building something with AI.
date: 2026-02-10T22:30:00+08:00
tags:
  - "Projects"
---

I made\* a bus app.

It’s called **My Bus Assistant**, and you can try it here:  
https://my-bus-assistant.minggliangg.com/

The asterisk is important. I’ll explain.

## Why a bus app?

I take the bus almost every day — to work, back home, and occasionally elsewhere when I’m feeling adventurous.

Like most people, I already check arrival timings pretty often. And like most developers, I eventually thought:  
“Okay, what if I just build my own?”

Not because existing apps are bad, but because this felt like a good excuse to:

- build something real
- solve a problem I actually have
- and experiment with a setup I’ve been thinking about for a while

## What does it do?

Nothing revolutionary.

It shows:

- real-time bus arrival timings
- bus service routes
- nearby bus stops
- plus a few small quality-of-life things

It’s intentionally simple. The goal wasn’t to out-feature anyone — just to make something usable and see how far I could take it.

## How it’s built (at a glance)

The app pulls real-time data from the LTA DataMall API.

Structurally, it’s a Turborepo monorepo using Bun as the runtime and package manager.

Frontend-wise, I’m using React 19, Vite, Tailwind CSS v4, TanStack Router, and Zustand.

There’s a small Hono backend that acts as a proxy layer so I’m not exposing the LTA API directly.

Everything is self-hosted on my own VPS and managed behind Cloudflare.

Pretty standard stuff, just wired together carefully.

## So… the asterisk

Here’s where things get a bit more interesting.

I didn’t write most of the code by hand.

That doesn’t mean I pressed a button and magically got an app.

What I _did_ do was:

- decide what to build
- define the main features
- review the generated code
- fix or reject things that didn’t make sense
- and keep the overall direction consistent

The AI wrote a lot of code.  
I was still very much responsible for the outcome.

In practice, it felt less like “AI coding for me” and more like “me reviewing a very fast, very literal junior engineer”.

## The workflow

Most of the work happened through CLI tools and OpenCode.

I ended up using a mix of models:

- Opus for planning and breaking things down
- GLM-4.7 for implementation
- Codex for reviewing and tightening things up

When I’m on my laptop, I run everything locally. When I’m away, I tunnel into my VPS using Tailscale and make changes directly from the terminal.

It’s not perfect, but it does mean I can build or tweak things almost anywhere, as long as I have a connection.

## Some thoughts after building this

I don’t think AI replaces developers.

But I _do_ think it changes the baseline.

If you’re comfortable reviewing code, spotting bad ideas, and giving clear direction, these tools let you:

- move much faster
- try things you wouldn’t normally have time for
- and build end-to-end systems with surprisingly little friction

On the flip side, if your value mostly comes from:

- process
- ceremony
- or being the person who slows everything down

Then yeah — this should probably feel a bit uncomfortable.

This project isn’t impressive because it uses AI.  
It’s interesting because it shows what’s possible when someone who knows what they want leverages it properly.

## What’s next

The app isn’t finished, and it probably never will be.

There are features I want to improve, ideas I want to test, and bigger questions I’m still thinking about — especially around what an “always-on” personal dev environment should look like.

This bus app is just one small experiment.

But it’s a very real one.
