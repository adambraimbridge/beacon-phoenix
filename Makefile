install:
	origami-build-tools install --verbose

build:
	nbt build

clean:
	git clean -fxd

# Note: Environment variables can be found at ~/.next-development-keys.json
# https://github.com/Financial-Times/next-build-tools/blob/master/tasks/download-development-keys.js
run:
	nbt run --local

test:
	nbt verify --skip-layout-checks
	nbt build

watch:
	nbt build --dev --watch
