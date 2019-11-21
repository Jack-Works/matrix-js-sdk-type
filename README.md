this package is generated from the `matrix-js-sdk` code base by [generate-matrix-js-sdk-type](https://github.com/Jack-Works/generate-matrix-js-sdk-type).

Please don't modify any file by hand in the `dts` folder.

How to use:

```ts
// @ts-ignore
import _matrix from 'matrix-js-sdk'
const matrix: typeof import('matrix-js-sdk-type/dts/matrix.d') = _matrix
```

now the matrix is typed.

Problems:

src/client.js
Symbol `Promise` is reported as SymbolAccessibility: NotAccessible so the `.d.ts` can not be generated
