# React 19 useEffect Double Run on Mount

This repository demonstrates a seemingly inexplicable issue where `useEffect` in React 19 runs twice during the initial render.  The issue is subtle and not immediately obvious.

## Problem

The `useEffect` hook, despite having its dependency array correctly set, executes twice on the initial mount of the component, leading to unexpected behavior and potential performance issues.

## Solution

The solution involves identifying and addressing the root cause of the double render.  Often this is an indirect update or implicit state change within the `useEffect` or a parent component causing an extra render cycle.   Sometimes changes to the browser configuration or even the order of hooks can unexpectedly cause such behavior.