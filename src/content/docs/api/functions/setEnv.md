---
editUrl: false
next: false
prev: false
title: "setEnv"
---

> **setEnv**(`value`): `void`

Defined in: [src/env/index.ts:29](https://github.com/fabricjs/fabric.js/blob/8206f10a405480a7ba988ff6cfdde6412c1f13f8/src/env/index.ts#L29)

Sets the environment variables used by fabric.\
This is exposed for special cases, such as configuring a test environment, and should be used with care.

**CAUTION**: Must be called before using the package.

## Parameters

### value

`TFabricEnv`

## Returns

`void`

## Example

```ts
import { getEnv, setEnv } from 'fabric';
// we want fabric to use the `window` and `document` objects exposed by the environment we are running in.
setEnv({ ...getEnv(), window, document });
// done with setup, using fabric is now safe
```
