---
editUrl: false
next: false
prev: false
title: "animate"
---

## Call Signature

> **animate**(`options`): `ArrayAnimation`

Defined in: [src/util/animation/animate.ts:50](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/animation/animate.ts#L50)

Changes value(s) from startValue to endValue within a certain period of time,
invoking callbacks as the value(s) change.

### Parameters

#### options

`Partial`\<[`TAnimationBaseOptions`](/api/namespaces/util/type-aliases/tanimationbaseoptions/)\<`number`[]\> & [`TAnimationCallbacks`](/api/namespaces/util/type-aliases/tanimationcallbacks/)\<`number`[]\> & `object`\>

### Returns

`ArrayAnimation`

### Examples

```ts
animate({
  startValue: 1,
  endValue: 0,
  onChange: (v) => {
    obj.set('opacity', v);
    // since we are running in a requested frame we should call `renderAll` and not `requestRenderAll`
    canvas.renderAll();
  }
});
```

```ts
Using lists:
animate({
  startValue: [1, 2, 3],
  endValue: [2, 4, 6],
  onChange: ([x, y, zoom]) => {
    canvas.zoomToPoint(new Point(x, y), zoom);
    canvas.renderAll();
  }
});
```

## Call Signature

> **animate**(`options`): `ValueAnimation`

Defined in: [src/util/animation/animate.ts:51](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/animation/animate.ts#L51)

Changes value(s) from startValue to endValue within a certain period of time,
invoking callbacks as the value(s) change.

### Parameters

#### options

`Partial`\<[`TAnimationBaseOptions`](/api/namespaces/util/type-aliases/tanimationbaseoptions/)\<`number`\> & [`TAnimationCallbacks`](/api/namespaces/util/type-aliases/tanimationcallbacks/)\<`number`\> & `object`\>

### Returns

`ValueAnimation`

### Examples

```ts
animate({
  startValue: 1,
  endValue: 0,
  onChange: (v) => {
    obj.set('opacity', v);
    // since we are running in a requested frame we should call `renderAll` and not `requestRenderAll`
    canvas.renderAll();
  }
});
```

```ts
Using lists:
animate({
  startValue: [1, 2, 3],
  endValue: [2, 4, 6],
  onChange: ([x, y, zoom]) => {
    canvas.zoomToPoint(new Point(x, y), zoom);
    canvas.renderAll();
  }
});
```

## Call Signature

> **animate**\<`T`\>(`options`): `T` *extends* [`ArrayAnimationOptions`](/api/namespaces/util/type-aliases/arrayanimationoptions/) ? `ArrayAnimation` : `ValueAnimation`

Defined in: [src/util/animation/animate.ts:52](https://github.com/fabricjs/fabric.js/blob/8748628df7e9de00ba77413bfc3ad9e9fe9d4f30/src/util/animation/animate.ts#L52)

Changes value(s) from startValue to endValue within a certain period of time,
invoking callbacks as the value(s) change.

### Type Parameters

• **T** *extends* `Partial`\<[`TAnimationBaseOptions`](/api/namespaces/util/type-aliases/tanimationbaseoptions/)\<`number`\> & [`TAnimationCallbacks`](/api/namespaces/util/type-aliases/tanimationcallbacks/)\<`number`\> & `object`\> \| `Partial`\<[`TAnimationBaseOptions`](/api/namespaces/util/type-aliases/tanimationbaseoptions/)\<`number`[]\> & [`TAnimationCallbacks`](/api/namespaces/util/type-aliases/tanimationcallbacks/)\<`number`[]\> & `object`\>

### Parameters

#### options

`T`

### Returns

`T` *extends* [`ArrayAnimationOptions`](/api/namespaces/util/type-aliases/arrayanimationoptions/) ? `ArrayAnimation` : `ValueAnimation`

### Examples

```ts
animate({
  startValue: 1,
  endValue: 0,
  onChange: (v) => {
    obj.set('opacity', v);
    // since we are running in a requested frame we should call `renderAll` and not `requestRenderAll`
    canvas.renderAll();
  }
});
```

```ts
Using lists:
animate({
  startValue: [1, 2, 3],
  endValue: [2, 4, 6],
  onChange: ([x, y, zoom]) => {
    canvas.zoomToPoint(new Point(x, y), zoom);
    canvas.renderAll();
  }
});
```
