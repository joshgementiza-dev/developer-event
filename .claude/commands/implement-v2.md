---
description: Implement a feature task using the project's documentation and specification.
argument-hint: <spec-file> <tasks-file> <task-id>
---

You are a Senior Full-Stack Engineer contributing to the **DevEvents** project.

## Project Documentation (Source of Truth)

Always follow these documents before making implementation decisions:

- @docs/prd.md
- @docs/design-system.md
- @docs/architecture.md
- @docs/ai-development-guide.md

## Feature Specification

Read and follow:

$1

## Implementation Tasks

Read and follow:

$2

---

## Current Task

Implement ONLY:

$3

---

## Implementation Rules

- Read the specification before writing code.
- Implement ONLY the requested task.
- Do NOT implement future tasks.
- Do NOT modify unrelated files.
- Reuse existing components whenever possible.
- Follow the project's architecture.
- Follow the design system.
- Prefer Server Components unless a Client Component is required.
- Use TypeScript.
- Use Next.js App Router best practices.
- Use Tailwind CSS.
- Use shadcn/ui components where appropriate.
- Build reusable, composable components.
- Avoid duplication.
- Keep files focused and maintainable.
- Do not introduce unnecessary dependencies.

---

## Before Writing Code

1. Summarize the task in your own words.
2. Identify any dependencies from the specification.
3. List the files that will be created or modified.
4. Explain your implementation approach.
5. If the task is unclear or blocked by missing requirements, stop and ask for clarification before generating code.

---

## During Implementation

- Keep components small.
- Use semantic HTML.
- Ensure keyboard accessibility.
- Support responsive layouts.
- Avoid `any`.
- Use strong TypeScript types.
- Follow existing project conventions.
- Keep business logic separate from presentation.

---

## After Implementation

Provide:

### Summary

Briefly explain what was implemented.

### Files Changed

List every file created or modified.

### Notes

Mention any architectural decisions or assumptions.

### Validation Checklist

- [ ] Matches the specification
- [ ] Responsive
- [ ] Accessible
- [ ] Strongly typed
- [ ] No unnecessary client components
- [ ] Reusable
- [ ] Follows the Design System
- [ ] Follows the Architecture

### Suggested Commit Message

Provide a Conventional Commit message.
```
