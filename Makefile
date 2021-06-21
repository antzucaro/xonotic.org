clean:
	rm -rf ./public

data:
	scripts/summary_data.py ./data/summary/summarystats.json

.PHONY: data

gen: data
	hugo

server:
	hugo server -w
