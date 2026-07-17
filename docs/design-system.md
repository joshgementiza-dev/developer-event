# design-system.md

# DevEvents Design System

**Version:** 1.0

---

# Brand Personality

DevEvents should feel like a blend of:

* GitHub
* Vercel
* Linear
* Stripe Dashboard
* Raycast

Keywords

* Modern
* Technical
* Minimal
* Premium
* Professional

---

# Design Principles

* Simplicity over decoration
* Content first
* Consistent spacing
* Accessible interactions
* Reusable components
* Mobile-first responsive design

---

# Color System

## Primary

Purple


Used for:

* Primary buttons
* Links
* Active states

---

## Secondary

Blue

Used for:

* Highlights
* Information
* Secondary actions

---

## Success

Green

---

## Warning

Amber

---

## Error

Red

---

## Neutral

Slate / Zinc palette

---

# Theme

Dark theme first.

Future support:

* Light Theme
* System Theme

---

# Typography

## Font

Geist

Fallback

Inter

---

## Scale

Display

Hero

H1

H2

H3

Body Large

Body

Small

Caption

---

# Border Radius

Buttons

Medium

Cards

Large

Dialogs

Extra Large

Badges

Pill

---

# Spacing

Use an **8-point spacing system**.

Examples

4px

8px

16px

24px

32px

48px

64px

96px

---

# Shadows

Use subtle elevation.

Cards

Small shadow

Dialogs

Medium shadow

Dropdowns

Medium shadow

---

# Layout

Container

Max Width

1280px

Section Padding

Desktop

96px

Tablet

72px

Mobile

48px

---

# Grid

Desktop

12 columns

Tablet

8 columns

Mobile

4 columns

---

# Icons

Lucide React

Use icons consistently.

Never mix icon libraries.

---

# Motion

Use subtle animation.

Hover

150–200ms

Page transitions

Short and unobtrusive

Avoid excessive animation.

---

# Components

## Buttons

Variants

* Primary
* Secondary
* Outline
* Ghost
* Destructive

Sizes

* Small
* Medium
* Large

---

## Cards

Types

* Event Card
* Speaker Card
* Organizer Card
* Statistic Card
* Ticket Card

---

## Forms

Use shadcn/ui.

Every form includes:

* Label
* Description (optional)
* Validation
* Error message
* Disabled state

---

## Navigation

Desktop

Top navigation

Mobile

Hamburger menu

Dashboard

Persistent sidebar

---

# Images

Rounded corners

Consistent aspect ratios

Use optimized Next.js Image component.

---

# Responsive Breakpoints

Mobile

< 768px

Tablet

768px–1023px

Desktop

1024px+

---

# Accessibility

* Keyboard navigation
* Visible focus states
* Semantic HTML
* ARIA labels when required
* Color contrast
* Screen reader support

---

# Naming Conventions

Components

PascalCase

Examples

EventCard

HeroSection

SpeakerCard

Files

kebab-case for routes

PascalCase for React components

---

# Component Rules

Every reusable component should:

* Have a single responsibility
* Accept typed props
* Avoid hardcoded data
* Support loading state where appropriate
* Support empty state where appropriate
* Be composable

---

# UI Principles

Every screen should answer:

* What is this page?
* What can the user do?
* What should the user do next?

Maintain consistent spacing, typography, and interactions across the application.

The design system is the single source of truth for all future UI specifications and implementations.



## Colors

Primary: #7C3AED
Primary Hover: #6D28D9

Background: #09090B
Surface: #18181B
Surface Elevated: #27272A

Text Primary: #FAFAFA
Text Secondary: #A1A1AA

Border: #27272A

Success: #22C55E
Warning: #F59E0B
Error: #EF4444