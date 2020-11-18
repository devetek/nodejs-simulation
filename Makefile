timeout-test-with:
	( \
		for ((i=1;i<=100;i++)); \
		do curl -v -m 1 "localhost:8080"; \
		done; \
	)

timeout-test-no:
	( \
		for ((i=1;i<=100;i++)); \
		do  curl -v "localhost:8080"; \
		done; \
	)