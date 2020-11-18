SHELL := /bin/bash

run-dev:
	@node timeout/server.js

timeout-test-with:
	( \
		for ((i=1;i<=100;i++)); \
		do sleep 1; curl -v -m 1 "localhost:8080" & curl -v -m 1 "localhost:8080" & curl -v -m 1 "localhost:8080" & \
		done; \
	)

timeout-test-no:
	( \
		for ((i=1;i!=0;i++)); \
		do sleep 1; curl -v "localhost:8080" && curl -v "localhost:8080" && curl -v "localhost:8080" & \
		done; \
	)