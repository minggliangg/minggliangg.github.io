---
title: "To R.A.G. or not to R.A.G...."
description: An experiment building a local AI assistant for home appliance manuals — and what it taught me about the limits of RAG.
date: 2026-03-14T21:00:00.00+08:00
tags:
  - "AI"
  - "LLM"
  - "Side Project"
  - "iOS"
---

## A Small Problem at Home

This project started in a very unglamorous way.

I was standing in front of a washing machine.

Not building one.  
Not repairing one.

Just trying to figure out how to use one specific function.

Like many modern appliances, the washing machine had *many* modes and buttons — most of which I had no idea how to use properly. Naturally, the answer was probably in the manual somewhere… but that manual was either buried in a drawer or lost somewhere in the void.

And even if I had found it, I would still have to flip through pages of instructions just to answer a simple question.

That's when a thought occurred to me:

> What if I could just ask my phone?

---

## The Idea: A Home Appliance "Grimoire"

The idea became **Home Grimoire**.

A sort of *spellbook* for the modern home — except instead of spells, it contains manuals for all the appliances in the house.

The concept was simple:

- Store appliance manuals locally on the phone
- Use an LLM to answer questions about them
- Ask questions naturally like  
  *"How do I clean the washing machine filter?"*  
  or  
  *"What does Eco mode actually do?"*

The manuals become a knowledge base, and the LLM becomes the interpreter.

Since I wanted everything to stay local and private, I decided this should be an **iOS app**.

That also meant I could experiment with **Apple's Foundation Models**, which made the project even more interesting.

---

## Where the Idea Really Came From

Ironically, the project itself was born out of another experiment that didn't quite go as planned.

Recently I had been playing with the **Raspberry Pi AI HAT+ 2**, hoping to build some interesting local AI applications with it.

But I quickly ran into limitations.

The tooling around it — particularly the reliance on `hailo-ollama` — made the ecosystem quite restrictive. It felt like there were interesting possibilities there, but the path to building something useful wasn't as smooth as I had hoped.

So I put that idea aside for a while.

But the *problem* I wanted to solve — practical everyday AI assistance — was still interesting.

And that's how **Home Grimoire** was born.

*(Don't worry, Pi AI HAT+2 — I'll come back for you someday.)*

---

## Naturally... I Chose RAG

If you read anything about LLM applications today, one architecture appears almost everywhere:

**Retrieval Augmented Generation (RAG).**

The idea sounds perfect for this use case.

1. Store manuals as documents
2. Convert them into embeddings
3. Retrieve the most relevant chunks
4. Feed those chunks into the model
5. Generate an answer

In theory, it's elegant.

In practice... things got messy.

---

## When RAG Starts Falling Apart

The biggest issue I ran into was **reliability**.

Sometimes the system worked beautifully.

You ask a question, it retrieves the correct section of the manual, and the model gives a clean answer.

Other times:

- the wrong chunk is retrieved
- the context is incomplete
- the model fills in the gaps

Which means...

**hallucinations.**

Even though the manual exists in the system, the answer generated might still be partially wrong.

This was particularly frustrating because manuals are supposed to be **precise documents**.

If the model confidently tells you to do something incorrect with an appliance, that's not great.

---

## A Realisation: RAG Isn't a Silver Bullet

While debugging this, I started reading more about how LLM applications actually work in production.

One realisation stood out:

> **RAG is not the universal solution it's often presented as.**

In many cases — especially when the dataset is small — it can actually be simpler and more reliable to:

- load the relevant data directly into context
- or design structured prompting around it

For something like appliance manuals, the dataset is often **small enough** that clever context management might outperform a complicated retrieval system.

Sometimes the "clever architecture" is actually overengineering.

---

## The AI Development Stack

Another interesting aspect of this project was how it was built.

Not just the app — but the *development workflow itself*.

This project was essentially a **multi-AI collaboration**:

- **Claude** — planning and architectural thinking
- **Codex** — reviewing implementation ideas
- **GLM** — the workhorse generating large chunks of code

And me in the middle trying to glue everything together.

It's fascinating how this kind of workflow is starting to emerge — where the developer acts more like a conductor than a solo performer.

---

## What This Project Taught Me

Even though Home Grimoire is still a rough prototype, the project already taught me a lot about building LLM applications:

1. **Simple problems don't always need complex AI architectures**
2. **Retrieval quality is everything in RAG**
3. **Small datasets behave very differently from large knowledge bases**
4. **LLM applications require careful system design, not just model calls**

Perhaps the most important lesson is this:

> Building with LLMs is less about the model and more about the **system around the model**.

---

## What's Next

Home Grimoire is still very much an experiment.

There are still many directions I could take it:

- exploring better document chunking strategies
- testing structured extraction from manuals
- experimenting with hybrid approaches instead of pure RAG
- improving how context is loaded into the model

But even at this early stage, the project has already served its purpose.

It forced me to confront a simple question:

> **To R.A.G., or not to R.A.G.?**

And as it turns out...

The answer is: **it depends.**

---

If you've built anything similar — or have thoughts about RAG vs context loading — I'd love to hear about it.
