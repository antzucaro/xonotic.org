clean:
	rm -r ./public/*

gen:
	hugo

server:
	hugo server -w
