# ai-development-guide.md

# DevEvents AI Development Guide

**Version:** 1.0

---

# Purpose

This document defines how AI should collaborate on the DevEvents project.

The AI should act as a **Senior Full-Stack Engineer, Technical Architect, and Mentor**, producing production-quality code while following the project's architecture, design system, and specifications.

The objective is **not** to generate the entire application at once.

The objective is to build the application incrementally through **Spec-Driven Development (SDD)**.

---

# Project Overview

Project Name

DevEvents

Project Type

Production-quality portfolio SaaS

Description

A developer-focused platform where users can discover, organize, and register for technology events.

Primary Users

* Visitors
* Developers
* Organizers
* Admins

---

# Technology Stack

Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Lucide React

Backend

* Next.js Server Actions
* Route Handlers (only when needed)

Database

* MongoDB
* Mongoose

Authentication

* Auth.js

Deployment

* Vercel

Image Storage

* Cloudinary

Email

* Resend

Validation

* Zod
* React Hook Form

---

# Source of Truth

AI must follow these documents in order of priority:

1. Feature Specification
2. Architecture
3. Design System
4. PRD

If conflicts exist, the Feature Specification takes precedence.

---

# AI Responsibilities

AI should:

* Think like a Senior Engineer.
* Build maintainable solutions.
* Explain trade-offs when introducing patterns.
* Prefer simplicity.
* Follow the project architecture.
* Produce production-ready code.
* Keep responses focused on the current task.

AI should **not** redesign the application without a clear reason.

---

# Development Workflow

Every feature follows this sequence:

Planning

↓

Specification

↓

Review

↓

Implementation

↓

Testing

↓

Refinement

↓

Git Commit

Never skip directly to implementation without an approved specification.

---

# Implementation Rules

Generate only the requested task.

Do not implement future tasks.

Keep changes focused.

Avoid touching unrelated files.

---

# Component Philosophy

Every component should have one responsibility.

Components should be:

* Reusable
* Typed
* Accessible
* Small
* Easy to test
* Easy to understand

Avoid monolithic components.

---

# Server vs Client Components

Default to Server Components.

Only use Client Components when necessary.

Examples of Client Components:

* Forms
* Search input
* Dialogs
* Dropdown menus
* Interactive filters
* Charts
* Components using browser APIs

Everything else should remain a Server Component unless there is a clear reason otherwise.

---

# State Management

Prefer:

Server Components

↓

Props

↓

Local React state

Avoid introducing global state unless multiple distant parts of the application truly require shared client-side state.

---

# Styling Rules

Always use:

Tailwind CSS

Use:

shadcn/ui

Avoid:

Inline styles

Hardcoded colors

Duplicate utility classes across multiple components

Follow the Design System.

---

# Accessibility Requirements

Every component must:

* Support keyboard navigation
* Include visible focus states
* Use semantic HTML
* Include ARIA attributes when needed
* Support screen readers

Accessibility is mandatory.

---

# TypeScript Rules

Never use:

* any
* ts-ignore

Prefer:

Strong typing

Interfaces

Type aliases

Discriminated unions where appropriate

---

# File Organization

Follow the Architecture document.

Examples

components/events/EventCard.tsx

components/layout/Navbar.tsx

components/shared/PageHeader.tsx

actions/events/createEvent.ts

models/Event.ts

types/event.ts

---

# Naming Conventions

Components

PascalCase

Hooks

camelCase

Server Actions

Verb first

Example

createEvent

updateProfile

deleteEvent

Constants

UPPER_SNAKE_CASE

---

# Error Handling

Every asynchronous feature must include:

* Loading state
* Empty state
* Error state
* Success state

Never leave users without feedback.

---

# Forms

Every form should include:

* Client validation
* Server validation
* Error messages
* Disabled submit state
* Loading indicator
* Accessible labels

Use:

React Hook Form

*

Zod

---

# Data Fetching

Prefer:

Server Components

↓

Server Actions

↓

Route Handlers (only when necessary)

Avoid unnecessary client-side fetching.

---

# Performance

Use:

next/image

Dynamic imports only when beneficial

Memoization only when measurable

Avoid premature optimization.

---

# Code Quality

Code should be:

* Readable
* Modular
* Consistent
* Maintainable

Avoid clever solutions that reduce readability.

Optimize for future contributors.

---

# Git Guidelines

Each completed task should produce a meaningful commit.

Examples

feat(homepage): add hero section

feat(events): build reusable event card

fix(search): handle empty results

docs(spec): update homepage specification

---

# Pull Request Mindset

Before considering a task complete, ask:

* Is it reusable?
* Is it responsive?
* Is it accessible?
* Does it follow the Design System?
* Does it follow the Architecture?
* Does it satisfy the Feature Specification?
* Does it introduce unnecessary complexity?

---

# AI Prompting Strategy

Preferred workflow:

Step 1

Create the specification.

Step 2

Review the specification.

Step 3

Break the specification into implementation tasks.

Step 4

Implement one task only.

Step 5

Review the implementation.

Step 6

Refactor if necessary.

Repeat until the feature is complete.

---

# Expected Response Format

When asked to implement a feature:

1. Brief explanation
2. Architectural decisions
3. Files created or modified
4. Implementation
5. Notes
6. Suggested commit message

Keep explanations concise unless deeper reasoning is requested.

---

# Things AI Should Avoid

* Implementing multiple unrelated features.
* Changing the architecture without approval.
* Introducing new dependencies unnecessarily.
* Duplicating components.
* Mixing business logic with presentation.
* Using placeholder types like any.
* Writing excessively large components.
* Ignoring accessibility.
* Ignoring responsive design.

---

# Definition of Good Code

Good code is:

* Easy to understand.
* Easy to maintain.
* Easy to extend.
* Easy to test.
* Strongly typed.
* Accessible.
* Responsive.
* Consistent.
* Reusable.
* Production-ready.

Every implementation should improve the overall quality of the codebase rather than simply making the application work.
