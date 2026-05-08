---
title: "Building Z.AI MCP Extensions for Zed"
description: A draft note on using Zed, Zed Agent, and GLM models to build Zed MCP extensions for the Z.AI MCP servers.
date: 2026-05-09T21:00:00+08:00
tags:
  - "AI"
  - "Zed"
  - "MCP"
  - "Side Project"
---

I have been using **Zed** a lot more recently.

Part of that is because the editor itself feels fast and focused. But the bigger reason is **Zed Agent**. Having an agent built directly into the editor changes the rhythm of how I work. I can stay close to the code, ask for changes, inspect the result, and keep moving without constantly switching contexts.

As usual, my go-to models have been the **GLM models** from Z.AI.

The reason is very practical: I managed to get one of the early bird subscriptions, and for my kind of usage it is effectively unlimited. That makes it much easier to experiment freely. I can ask the model to explore, rewrite, generate, review, and retry without feeling like every prompt needs to be carefully rationed.

That freedom matters more than I expected.

## The MCP Problem

Along with the GLM subscription, Z.AI provides access to a few MCP servers.

In my case, that means:

- three remote MCP servers
- one local MCP server

On paper, this should be perfect for Zed Agent. MCP is exactly the kind of interface that should let the agent reach outside the editor and use tools in a structured way.

In practice, I kept running into the same issue:

**the remote MCP servers would consistently fail to connect in Zed.**

Maybe this will be fixed eventually. In the past, I probably would have stopped there, waited for an upstream fix, and moved on to something else.

There was also another obvious excuse: Zed is built in Rust, and Rust is not a language I know deeply yet.

But this time, that felt like part of the point.

## Turning the Problem Into a Project

Instead of waiting, I decided to treat the issue as a small systems project:

> What if I built Zed MCP extensions for the Z.AI MCP servers myself?

The slightly recursive part is that I wanted to do it using:

- Zed
- Zed Agent
- Z.AI's GLM models
- the broken MCP workflow as the thing I was trying to improve

That made the project interesting beyond the actual extension code. It became a test of whether the agentic workflow was good enough to help me work in a codebase and language I was not fully comfortable with.

The answer so far is: yes, but only if I stay involved.

## Rust, Zed Extensions, and AI as a Guide

The main challenge was not "can an AI write code?"

It can.

The harder question was whether it could help me understand the shape of a Zed extension well enough to make deliberate changes.

This is where the workflow started to feel useful. I could ask the model to explain the extension structure, identify what Zed expects, generate a first pass, then review and tighten the result myself.

That loop was much more valuable than just asking for finished code.

I still had to pay attention to:

- what the extension manifest actually declares
- how command execution is wired
- how the MCP server is launched
- what assumptions the generated code was making
- where the model was guessing

The model gave me speed. It did not remove the need for judgment.

## Building a Skill Along the Way

After repeating the same prompts a few times, I noticed another problem.

I was teaching the model the same context over and over again:

- how Zed extensions are structured
- what files matter
- what MCP-specific details to check
- what commands to run while testing
- what failure modes to watch for

So I turned that repeated context into a **Skill**.

The goal of the skill is simple: make future Zed MCP extension work start from a better baseline.

Instead of re-explaining the project shape every time, the skill can encode the development loop and the checks that matter. It becomes a small piece of reusable process, not just a pile of notes.

That might be the most interesting part of the whole experiment.

The extension solves one problem. The skill improves how quickly I can solve the next similar problem.

## The Strange Feedback Loop

There is something funny about using an agent to build tooling for that same agent.

I started with a broken MCP connection.

Then I used Zed Agent and GLM to build Zed extensions that make those MCP tools easier to use.

Then I created a skill so the agent could help build more of those extensions faster.

It is a very small example, but it points at something larger:

> AI development workflows are becoming self-improving systems, as long as the developer keeps shaping the loop.

Not autonomous in the magical sense.

More like a workshop where the tools can help you build better tools, and those better tools make the next round of work less painful.

## What I Learned

This project reminded me of a few things.

First, rough edges in tooling are often good project ideas. If something breaks in your actual workflow often enough, fixing it teaches you more than building a random demo.

Second, AI makes unfamiliar codebases less intimidating, but it does not make them risk-free. The model can give you a map, but you still need to check where the roads actually are.

Third, skills and reusable prompts are underrated. A good skill is not just a prompt shortcut. It is a way to preserve hard-won context so the next session starts with fewer repeated mistakes.

And finally, the best AI projects are still grounded in a real annoyance.

In this case, the annoyance was simple:

> I wanted the Z.AI MCP servers to work properly inside Zed.

So I started building the missing bridge myself.

## What's Next

The next step is to clean up the extensions, test the connection flow more carefully, and decide how much of the work should be published.

I also want to keep improving the skill as I learn more about Zed extension development. If the skill becomes useful enough, it may end up being the more reusable artifact than the extensions themselves.

For now, this is still a work in progress.

But it already feels like the right kind of project: small, practical, slightly uncomfortable, and directly connected to how I actually build things.
