start:
	npx start-server -s ./frontend/build
	
install:
	npm ci

build:
	rm -rf ./frontend/build
	npm run build
lint:
	rm -rf ./frontend/build
	npx eslint .

lint-fix:
	rm -rf ./frontend/build
	npx eslint --fix .