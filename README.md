# Get NPM Package Version

## Example

`.github/workflow/build.yml`
```yml
name: Get package version from package.json

on: worflow_dispatch

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v1

      - name: Read package.json
        id: pkg-ver
        uses: koitococo/get-npm-version@v1
        with:
          path: ./path/to/your/package.json # Optional, default to ./package.json

      - name: Use result
        run: echo "${{ steps.pkg-ver.outputs.version }}"
```