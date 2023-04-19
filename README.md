# Vitest Bug

This repository demonstrates how Vitest ignores capturing test coverage and fails to validate coverage thresholds.

To run, install dependencies:

```sh
npm ci
```

and run:

```sh
npm test
```

## Expect Behavior

- Vitest creates a coverage report based on given configurations in `vitest.conf.js`
- Test should fail because coverage can't be at 100% due to missing test for `if` statement.

## Actual Behavior

Test passes, no coverage report was created.