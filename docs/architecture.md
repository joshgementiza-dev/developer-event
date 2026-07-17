# architecture.md

# DevEvents Architecture

---

# 1. Purpose

This document defines the technical architecture of DevEvents.

Its goals are:

* Keep the codebase scalable.
* Encourage reusable components.
* Maintain consistency.
* Follow modern Next.js App Router best practices.
* Minimize technical debt.

This document should be referenced before implementing any feature.

---

# 2. Tech Stack

## Framework

* Next.js

## Language

* TypeScript

## Styling

* Tailwind CSS
* shadcn/ui

## Database

* MongoDB
* Mongoose

## Authentication

* Auth.js

## Deployment

* Vercel

---

# 3. Architecture Principles

### Server First

Prefer **Server Components**.

Only use Client Components when required.

Examples:

* Forms
* Search interactions
* Dialogs
* Dropdowns
* Charts
* State-heavy components

---

### Component Driven

Everything reusable should become a component.

Never duplicate UI.

---

### Feature Based

Organize files by feature rather than by type whenever practical.

---

### Type Safe

Every prop, function, API response, and database model should have TypeScript types.

---

### Scalable

Assume the application will grow to hundreds of components.

Design accordingly.

---

# 4. Folder Structure

```text
src/
│
├── app/
│
├── components/
│   ├── layout/
│   ├── shared/
│   ├── events/
│   ├── speakers/
│   ├── organizers/
│   ├── dashboard/
│   ├── forms/
│   └── ui/
│
├── actions/
│
├── data/
│
├── hooks/
│
├── lib/
│
├── models/
│
├── services/
│
├── types/
│
├── utils/
│
└── constants/
```

---

# 5. Route Groups

```text
app/

(marketing)

(auth)

dashboard

organizer

admin

api
```

---

## Marketing

Public pages.

Examples

* Home
* Events
* Blog
* Speakers
* Organizers

---

## Auth

Authentication pages.

* Login
* Register
* Forgot Password

---

## Dashboard

Developer-only pages.

---

## Organizer

Organizer dashboard.

---

## Admin

Administration panel.

---

# 6. Component Organization

## layout

Global UI.

Examples

* Navbar
* Footer
* Sidebar
* Container

---

## shared

Reusable UI across multiple features.

Examples

* EmptyState
* LoadingState
* PageHeader
* SectionHeading

---

## events

Only event-related components.

Examples

* EventCard
* EventGrid
* EventHero
* EventSchedule

---

## speakers

Speaker components.

---

## organizers

Organizer components.

---

## dashboard

Dashboard widgets.

---

## forms

Reusable forms.

---

## ui

Generated shadcn/ui components.

Never modify generated components directly unless absolutely necessary.

---

# 7. Data Flow

Preferred flow:

```text
Database
      │
Server Action
      │
Server Component
      │
Client Component (if needed)
      │
User
```

Avoid unnecessary client-side fetching.

---

# 8. State Management

## Local State

React useState.

---

## Form State

React Hook Form + Zod.

---

## Server State

Server Components.

---

## Global State

Avoid introducing a global state library unless a clear need emerges.

---

# 9. Server Actions

Use Server Actions for:

* Creating events
* Updating events
* Deleting events
* Registering users
* Updating profiles

Prefer Server Actions before creating API routes.

---

# 10. API Routes

Use Route Handlers only when necessary.

Examples

* Webhooks
* Third-party integrations
* Public API endpoints

---

# 11. Validation

All user input must be validated.

Use:

* Zod
* React Hook Form

Never trust client-side validation alone.

---

# 12. Database Models

Primary collections:

* User
* Event
* Category
* Speaker
* Organizer
* Registration
* Favorite

Future:

* Certificate
* Notification
* Review

---

# 13. Authentication

Roles:

Visitor

↓

Developer

↓

Organizer

↓

Admin

Authorization should be enforced on the server.

Never rely only on hiding UI.

---

# 14. Naming Conventions

## Components

PascalCase

Example

EventCard.tsx

---

## Hooks

camelCase

Example

useEventSearch.ts

---

## Server Actions

Verb first.

Examples

createEvent.ts

updateProfile.ts

deleteEvent.ts

---

## Types

Suffix with Type when helpful.

Examples

EventType

UserRole

RegistrationStatus

---

## Constants

UPPER_SNAKE_CASE.

---

# 15. Error Handling

Every async operation should support:

* Loading
* Empty
* Error
* Success

Never leave blank screens.

---

# 16. Performance

Use:

* next/image
* Dynamic imports when appropriate
* Lazy loading
* Memoization only when necessary

Do not optimize prematurely.

---

# 17. Accessibility

Every page should include:

* Semantic HTML
* Keyboard support
* Visible focus indicators
* ARIA labels where needed

Accessibility is a requirement, not an enhancement.

---

# 18. Testing Strategy

Manual testing throughout development.

Before release:

* Responsive testing
* Accessibility review
* Cross-browser testing
* Authentication flow
* CRUD flow
* Form validation

Future:

* Unit tests
* Integration tests
* End-to-end tests

---

# 19. Git Workflow

Main branches:

```text
main
develop
feature/*
```

Example feature branch:

```text
feature/homepage
feature/event-card
feature/authentication
```

Commit after each completed task.

Example:

```text
feat(homepage): add hero section
feat(events): create reusable event card
fix(search): handle empty results
docs(spec): update homepage specification
```

---

# 20. AI Development Rules

When using AI:

* Build one feature at a time.
* Always reference the relevant spec.
* Never generate the entire application in one prompt.
* Reuse existing components whenever possible.
* Follow the Design System.
* Follow this Architecture document.
* Explain trade-offs when introducing new patterns.
* Prefer maintainability over clever implementations.

---

# 21. Development Workflow

Every feature follows the same lifecycle:

```text
PRD
      ↓
Design System
      ↓
Architecture
      ↓
Feature Spec
      ↓
Task Breakdown
      ↓
Implementation
      ↓
Manual Review
      ↓
Testing
      ↓
Git Commit
      ↓
Next Feature
```

No implementation should begin without an approved feature specification.

---

# 22. Definition of Ready

A feature is ready to implement when:

* Requirements are clear.
* UI behavior is defined.
* Components are identified.
* Data requirements are known.
* Acceptance criteria are written.
* Tasks are broken into manageable units.

---

# 23. Definition of Done

A feature is complete when:

* It satisfies its specification.
* It follows the design system.
* It follows this architecture.
* It is responsive.
* It is accessible.
* It has no TypeScript errors.
* It has no linting errors.
* It has been manually tested.
* It is committed with a meaningful Git message.

This document is the technical contract for DevEvents. Any architectural changes should be intentional, documented, and reflected here before implementation.
