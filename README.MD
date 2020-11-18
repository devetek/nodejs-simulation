## Background

to prove, nodejs behavior when execute high cpu intensive and do API call

## Development

Prepare 3 terminals, 1 for running server, 2 for do load test, 3  for monitoring resources.

Execute command below in each monitors:
```sh
Terminal 1: make run-dev
Terminal 2: make timeout-test-no
Terminal 3: htop
```

## Target
Collecting resource usage durung loadtest and getting client experience.