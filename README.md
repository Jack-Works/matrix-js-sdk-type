-   Maybe you need @types/matrix-js-sdk (https://github.com/matrix-org/matrix-js-sdk/issues/983#issuecomment-593534506)

this package is generated from the `matrix-js-sdk` code base by [generate-matrix-js-sdk-type](https://github.com/Jack-Works/generate-matrix-js-sdk-type).

Current commit hash of matrix-js-sdk: [fa9921e0](https://github.com/matrix-org/matrix-js-sdk/commit/50591552) (v8.4.1+)

Please don't modify any file by hand in the `dts` folder.

How to use:

```ts
// @ts-ignore
import _matrix from 'matrix-js-sdk'
const matrix: typeof import('matrix-js-sdk-type/dts/matrix.d') = _matrix
```

now the matrix is typed.
