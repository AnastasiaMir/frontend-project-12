start:
	npx start-server -s ./frontend/build
	
install:
	npm ci

build:
	rm -rf ./frontend/build
	npm run build
