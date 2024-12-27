# GgDb

The project `GgDb` offers an interface to access relational data. It can
be implemented agains relational databases like `Sqlite` or `Rljson`.

## Run the tests

```bash
npm run test
```

## Publish the package

Open `package.json` and increase `version`.

Build, test and publish:

```bash
npm run build # No build errors?
npm run test # No tests are failing? 100% coverage?
npm publish --dry-run # No unwanted files published?
npm publish
```
