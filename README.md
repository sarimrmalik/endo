<img width="1440" alt="image" src="https://github.com/sarimrmalik/endo/assets/60831757/2cf3d4d6-9266-4f38-a4b5-ea78c9bb60da">

<h1 align="center">Endo</h1>

<p align="center">
  Dead-simple menubar app for taking notes on your mac. 
</p>

## Introduction

This is a [Next.js](https://nextjs.org/) and [Tauri](https://tauri.app/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`tauri init`](https://tauri.app/v1/guides/getting-started/setup/next-js/#create-the-rust-project). The text editor is an instance of [Tiptap](https://tiptap.dev/). The CSS is primarily [Tailwind](https://tailwindcss.com/docs).

_Note: This repo is tested for macOS primarily, running on Windows may require additional debugging._

## Getting Started

First, make sure you are set up to run a Rust project. [Check documentation here](https://tauri.app/v1/guides/getting-started/prerequisites#setting-up-macos).

Clone the repo, install depedancies, and run the development server:

```bash
npm install
npm run tauri dev
```

The local instance of the app should show in your menubar at this point.

If you want to run the frontend only:

```bash
npm run dev
```

The local dev server will run on `http://localhost:3000`.

## Build an app

To build an app ready to be installed and used locally, run the following code

```bash
npm run tauri build
```

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Features

- [x] Add global keyboard shortcut to toggle app
- [x] `esc` hides app
- [x] Add support for images
- [ ] Add global reminders (reminders for tasks that are on a longer timescale) e.g: "Follow up with Adam on Monday"
- [ ] Add timer in footer
- [ ] Add Supabase backend
