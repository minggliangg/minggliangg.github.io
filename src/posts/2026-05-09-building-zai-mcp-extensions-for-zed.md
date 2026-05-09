---
title: "Building Z.AI MCP Extensions for Zed"
description: Notes on using Claude Code, GLM models, and MCP tooling to build Zed MCP extensions for the Z.AI MCP servers.
date: 2026-05-09T21:00:00+08:00
tags:
  - "AI"
  - "Zed"
  - "MCP"
  - "Side Project"
---

I have been using **Zed** a lot more recently.

Part of that is because the editor itself feels fast and focused. But the bigger reason is **Zed Agent**. Having an agent directly inside the editor changes the rhythm of how I work. I can stay close to the code, ask for changes, inspect the result, and keep moving without constantly switching contexts.

As usual, my go-to models have been the **GLM models** from Z.AI.

I managed to get one of the early bird subscriptions, which for my kind of usage is effectively unlimited. That freedom made experimentation much easier. I could ask the model to explore, retry, rewrite, and review without worrying too much about usage limits.

## The MCP Problem

Along with the subscription, Z.AI also provides access to a few MCP servers.

In my case, that meant:

- three remote MCP servers
- one local MCP server

This sounded perfect for Zed Agent.

In practice, the remote MCP servers consistently failed to connect properly inside Zed.

Normally I probably would have waited for an upstream fix and moved on. There was also another obvious excuse: Zed extensions are built with Rust, which is not a language I know deeply yet.

But this time, the problem itself felt interesting enough to turn into a project.

## Bootstrapping the Extensions

Ironically, I was not initially using Zed Agent to build the extensions.

Instead, I used **Claude Code** together with the GLM models and the already-working MCP setup inside that environment to bootstrap the solution.

The process was surprisingly straightforward.

I first gave the model three things to study:

1. an existing Zed MCP extension implementation
2. the Z.AI MCP documentation
3. the Zed extension documentation

From there, I got **GLM 5.1** to start planning the extension structure and connection flow.

Once the plan looked reasonable, I delegated the work to a lead GLM 5.1 agent, which then spawned additional agents using Claude Code's experimental Agent Swarm feature.

The first extension still required a fair amount of review and steering from my side. The models were fast, but they still made assumptions that needed checking:

- how the extension manifest was structured
- how MCP commands were launched
- how Zed expected the server process to behave
- where the generated code was simply guessing

The workflow worked well, but only because I stayed involved.

## Turning the Workflow Into a Skill

After the first extension was completed, I noticed something else.

A lot of the valuable work was not actually the extension itself. It was the accumulated context:

- what files mattered
- what failure modes to check
- how Zed extensions were structured
- what debugging flow worked best
- what mistakes the models tended to make

Since I still had context window remaining, I asked the lead agent to convert what we learned into a reusable **Skill** while referencing the final working extension.

Some context had already disappeared along with the spawned agents that had terminated, but enough remained to preserve the important patterns.

That became the real accelerator.

Once the skill existed, the next two extensions were dramatically faster to build. Most of the setup, structure, and validation flow had already been encoded into the workflow.

The first extension solved the problem once.

The skill made solving similar problems faster afterwards.

## The Strange Feedback Loop

There is something slightly funny about the entire setup.

I used:

- Claude Code
- GLM models
- MCP tools
- agent swarms

to build extensions that improved MCP support inside Zed so I could continue using Zed Agent more effectively.

Then I turned the lessons from building those extensions into a reusable skill so future extensions could be built faster.

It is a very small example, but it feels like a glimpse of where AI-assisted development workflows are heading:

> developers building systems that continuously improve how they themselves build software.

Not autonomous software engineering in the magical sense.

More like building better workshops for yourself over time.

## Open Source

I ended up making everything public in case anyone else is experimenting with Zed MCP integrations or Z.AI tooling.

### Extensions

- https://github.com/minggliangg/zed-mcp-server-zai-web-reader
- https://github.com/minggliangg/zed-mcp-server-zai-web-search
- https://github.com/minggliangg/zed-mcp-server-zai-zread

### Skill

- https://github.com/minggliangg/zed-mcp-extension

I have also submitted pull requests to add the extensions into the official Zed marketplace. Hopefully they make it through review.

For now, this is still a work in progress.

But it already feels like the right kind of project: small, practical, slightly uncomfortable, and directly connected to how I actually build things.
