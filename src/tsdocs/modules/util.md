# Namespace: util

## Namespaces

- [ease](/apidocs/modules/util.ease.md)
- [string](/apidocs/modules/util.string.md)

## Type Aliases

### AnimationOptions

 **AnimationOptions**\<`T`\>: `T` extends [`TColorArg`](/apidocs/modules.md#tcolorarg) ? [`ColorAnimationOptions`](/apidocs/modules/util.md#coloranimationoptions) : `T` extends `number`[] ? [`ArrayAnimationOptions`](/apidocs/modules/util.md#arrayanimationoptions) : [`ValueAnimationOptions`](/apidocs/modules/util.md#valueanimationoptions)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `number`[] \| [`TColorArg`](/apidocs/modules.md#tcolorarg) |

#### Defined in

[src/util/animation/types.ts:132](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L132)

___

### AnimationState

 **AnimationState**: ``"pending"`` \| ``"running"`` \| ``"completed"`` \| ``"aborted"``

#### Defined in

[src/util/animation/types.ts:4](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L4)

___

### ArrayAnimationOptions

 **ArrayAnimationOptions**: [`TAnimationOptions`](/apidocs/modules/util.md#tanimationoptions)\<`number`[]\>

#### Defined in

[src/util/animation/types.ts:124](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L124)

___

### ColorAnimationOptions

 **ColorAnimationOptions**: [`TAnimationOptions`](/apidocs/modules/util.md#tanimationoptions)\<[`TColorArg`](/apidocs/modules.md#tcolorarg), `string`, `number`[]\>

#### Defined in

[src/util/animation/types.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L126)

___

### EnlivenObjectOptions

 **EnlivenObjectOptions**: [`Abortable`](/apidocs/modules.md#abortable) & \{ `reviver?`: \<T\>(`serializedObj`: `Record`\<`string`, `any`\>, `instance`: `T`) => `void`  }

#### Defined in

[src/util/misc/objectEnlive.ts:59](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectEnlive.ts#L59)

___

### LoadImageOptions

 **LoadImageOptions**: [`Abortable`](/apidocs/modules.md#abortable) & \{ `crossOrigin?`: [`TCrossOrigin`](/apidocs/modules.md#tcrossorigin)  }

#### Defined in

[src/util/misc/objectEnlive.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectEnlive.ts#L11)

___

### TAbortCallback

 **TAbortCallback**\<`T`\>: [`TOnAnimationChangeCallback`](/apidocs/modules/util.md#tonanimationchangecallback)\<`T`, `boolean`\>

Called on each step to determine if animation should abort

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/util/animation/types.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L23)

___

### TAnimation

 **TAnimation**\<`T`\>: `T` extends [`TColorArg`](/apidocs/modules.md#tcolorarg) ? `ColorAnimation` : `T` extends `number`[] ? `ArrayAnimation` : `ValueAnimation`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| `number`[] \| [`TColorArg`](/apidocs/modules.md#tcolorarg) |

#### Defined in

[src/util/animation/animate.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/animate.ts#L11)

___

### TAnimationBaseOptions

 **TAnimationBaseOptions**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `delay` | `number` | Delay to start the animation in ms **`Default`** ```ts 0 ``` |
| `duration` | `number` | Duration of the animation in ms **`Default`** ```ts 500 ``` |
| `easing` | [`TEasingFunction`](/apidocs/modules/util.md#teasingfunction)\<`T`\> | Easing function **`Default`** ```ts {defaultEasing} ``` |
| `target` | `unknown` | The object this animation is being performed on |

#### Defined in

[src/util/animation/types.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L50)

___

### TAnimationCallbacks

 **TAnimationCallbacks**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `abort` | [`TAbortCallback`](/apidocs/modules/util.md#tabortcallback)\<`T`\> | Function called at each frame. If it returns true, abort |
| `onChange` | [`TOnAnimationChangeCallback`](/apidocs/modules/util.md#tonanimationchangecallback)\<`T`\> | Called at each frame of the animation |
| `onComplete` | [`TOnAnimationChangeCallback`](/apidocs/modules/util.md#tonanimationchangecallback)\<`T`\> | Called after the last frame of the animation |
| `onStart` | `VoidFunction` | Called when the animation starts |

#### Defined in

[src/util/animation/types.ts:75](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L75)

___

### TAnimationOptions

 **TAnimationOptions**\<`T`, `TCallback`, `TEasing`\>: `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`TEasing`\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`TCallback`\> & \{ `endValue`: `T` ; `startValue`: `T`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TCallback` | `T` |
| `TEasing` | `T` |

#### Defined in

[src/util/animation/types.ts:105](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L105)

___

### TArcCommand

 **TArcCommand**: `TCommand8`\<[`TParsedArcCommand`](/apidocs/modules/util.md#tparsedarccommand)\> \| [`TArcCommandSingleFlag`](/apidocs/modules/util.md#tarccommandsingleflag)\<[`TParsedArcCommand`](/apidocs/modules/util.md#tparsedarccommand)\>

#### Defined in

[src/util/path/typedefs.ts:258](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L258)

___

### TArcCommandSingleFlag

 **TArcCommandSingleFlag**\<`T`\>: \`$\{T[0]} $\{T[1]} $\{T[2]} $\{T[3]} $\{T[4]}$\{T[5]} $\{T[6]} $\{T[7]}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TParsedArcCommand`](/apidocs/modules/util.md#tparsedarccommand) |

#### Defined in

[src/util/path/typedefs.ts:256](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L256)

___

### TBaseAnimationOptions

 **TBaseAnimationOptions**\<`T`, `TCallback`, `TEasing`\>: `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`TEasing`\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`TCallback`\>\> & \{ `byValue`: `T` ; `startValue`: `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TCallback` | `T` |
| `TEasing` | `T` |

#### Defined in

[src/util/animation/types.ts:98](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L98)

___

### TClosePathCommand

 **TClosePathCommand**: `TCommand1`\<[`TParsedClosePathCommand`](/apidocs/modules/util.md#tparsedclosepathcommand)\>

#### Defined in

[src/util/path/typedefs.ts:147](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L147)

___

### TComplexParsedCommand

 **TComplexParsedCommand**: [`TParsedMoveToCommand`](/apidocs/modules/util.md#tparsedmovetocommand) \| [`TParsedLineCommand`](/apidocs/modules/util.md#tparsedlinecommand) \| [`TParsedHorizontalLineCommand`](/apidocs/modules/util.md#tparsedhorizontallinecommand) \| [`TParsedVerticalLineCommand`](/apidocs/modules/util.md#tparsedverticallinecommand) \| [`TParsedClosePathCommand`](/apidocs/modules/util.md#tparsedclosepathcommand) \| [`TParsedCubicCurveCommand`](/apidocs/modules/util.md#tparsedcubiccurvecommand) \| [`TParsedCubicCurveShortcutCommand`](/apidocs/modules/util.md#tparsedcubiccurveshortcutcommand) \| [`TParsedQuadraticCurveCommand`](/apidocs/modules/util.md#tparsedquadraticcurvecommand) \| [`TParsedQuadraticCurveShortcutCommand`](/apidocs/modules/util.md#tparsedquadraticcurveshortcutcommand) \| [`TParsedArcCommand`](/apidocs/modules/util.md#tparsedarccommand)

Any old valid SVG path command

#### Defined in

[src/util/path/typedefs.ts:269](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L269)

___

### TComplexPathData

 **TComplexPathData**: [`TComplexParsedCommand`](/apidocs/modules/util.md#tcomplexparsedcommand)[]

A series of path commands

#### Defined in

[src/util/path/typedefs.ts:284](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L284)

___

### TComposeMatrixArgs

 **TComposeMatrixArgs**: [`TTranslateMatrixArgs`](/apidocs/modules/util.md#ttranslatematrixargs) & [`TRotateMatrixArgs`](/apidocs/modules/util.md#trotatematrixargs) & [`TScaleMatrixArgs`](/apidocs/modules/util.md#tscalematrixargs)

#### Defined in

[src/util/misc/matrix.ts:27](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L27)

___

### TCubicCurveCommand

 **TCubicCurveCommand**: `TCommand7`\<[`TParsedCubicCurveCommand`](/apidocs/modules/util.md#tparsedcubiccurvecommand)\>

#### Defined in

[src/util/path/typedefs.ts:171](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L171)

___

### TCubicCurveShortcutCommand

 **TCubicCurveShortcutCommand**: `TCommand5`\<[`TParsedCubicCurveShortcutCommand`](/apidocs/modules/util.md#tparsedcubiccurveshortcutcommand)\>

#### Defined in

[src/util/path/typedefs.ts:191](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L191)

___

### TCurveInfo

 **TCurveInfo**\<`C`\>: [`TPathSegmentInfoCommon`](/apidocs/modules/util.md#tpathsegmentinfocommon)\<`C`\> & \{ `angleFinder`: (`pct`: `number`) => `number` ; `iterator`: (`pct`: `number`) => [`Point`](/apidocs/classes/Point.md) ; `length`: `number`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `string` |

#### Defined in

[src/util/path/typedefs.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L11)

___

### TEasingFunction

 **TEasingFunction**\<`T`\>: `T` extends `number`[] ? (`timeElapsed`: `number`, `startValue`: `number`, `byValue`: `number`, `duration`: `number`, `index`: `number`) => `number` : (`timeElapsed`: `number`, `startValue`: `number`, `byValue`: `number`, `duration`: `number`) => `number`

An easing function used to calculate the current value

**`See`**

AnimationBase#calculate

**`Param`**

ms elapsed since start

**`Param`**

**`Param`**

**`Param`**

in ms

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `unknown` |

#### Defined in

[src/util/animation/types.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L35)

___

### TEndPathInfo

 **TEndPathInfo**: [`TPathSegmentInfoCommon`](/apidocs/modules/util.md#tpathsegmentinfocommon)\<``"Z"``\> & \{ `destX`: `number` ; `destY`: `number`  }

#### Defined in

[src/util/path/typedefs.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L28)

___

### THorizontalLineCommand

 **THorizontalLineCommand**: `TCommand2`\<[`TParsedHorizontalLineCommand`](/apidocs/modules/util.md#tparsedhorizontallinecommand)\>

#### Defined in

[src/util/path/typedefs.ts:131](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L131)

___

### TLineCommand

 **TLineCommand**: `TCommand3`\<[`TParsedLineCommand`](/apidocs/modules/util.md#tparsedlinecommand)\>

#### Defined in

[src/util/path/typedefs.ts:123](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L123)

___

### TMoveToCommand

 **TMoveToCommand**: `TCommand3`\<[`TParsedMoveToCommand`](/apidocs/modules/util.md#tparsedmovetocommand)\>

#### Defined in

[src/util/path/typedefs.ts:115](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L115)

___

### TOnAnimationChangeCallback

 **TOnAnimationChangeCallback**\<`T`, `R`\>: (`value`: `T`, `valueProgress`: `number`, `durationProgress`: `number`) => `R`

Callback called every frame

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `R` | `void` |

#### Type declaration

(`value`, `valueProgress`, `durationProgress`): `R`

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `T` | current value of the animation. |
| `valueProgress` | `number` | ∈ [0, 1], the current animation progress reflected on value, normalized. 0 is the starting value and 1 is the ending value. |
| `durationProgress` | `number` | ∈ [0, 1], the current animation duration normalized to 1. |

##### Returns

`R`

#### Defined in

[src/util/animation/types.ts:13](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L13)

___

### TParsedAbsoluteArcCommand

 **TParsedAbsoluteArcCommand**: [command: "A", radiusX: number, radiusY: number, rotation: TRadian, largeArc: 0 \| 1, sweep: 0 \| 1, endX: number, endY: number]

#### Defined in

[src/util/path/typedefs.ts:231](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L231)

___

### TParsedAbsoluteClosePathCommand

 **TParsedAbsoluteClosePathCommand**: [command: "Z"]

#### Defined in

[src/util/path/typedefs.ts:141](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L141)

___

### TParsedAbsoluteCubicCurveCommand

 **TParsedAbsoluteCubicCurveCommand**: [command: "C", controlPoint1X: number, controlPoint1Y: number, controlPoint2X: number, controlPoint2Y: number, endX: number, endY: number]

#### Defined in

[src/util/path/typedefs.ts:149](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L149)

___

### TParsedAbsoluteCubicCurveShortcutCommand

 **TParsedAbsoluteCubicCurveShortcutCommand**: [command: "S", controlPoint2X: number, controlPoint2Y: number, endX: number, endY: number]

#### Defined in

[src/util/path/typedefs.ts:173](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L173)

___

### TParsedAbsoluteHorizontalLineCommand

 **TParsedAbsoluteHorizontalLineCommand**: [command: "H", x: number]

#### Defined in

[src/util/path/typedefs.ts:125](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L125)

___

### TParsedAbsoluteLineCommand

 **TParsedAbsoluteLineCommand**: [command: "L", x: number, y: number]

#### Defined in

[src/util/path/typedefs.ts:117](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L117)

___

### TParsedAbsoluteMoveToCommand

 **TParsedAbsoluteMoveToCommand**: [command: "M", x: number, y: number]

Begin parsed SVG path commands
Read about commands at [https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths|MDN](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths|MDN)

#### Defined in

[src/util/path/typedefs.ts:105](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L105)

___

### TParsedAbsoluteQuadraticCurveCommand

 **TParsedAbsoluteQuadraticCurveCommand**: [command: "Q", controlPointX: number, controlPointY: number, endX: number, endY: number]

#### Defined in

[src/util/path/typedefs.ts:194](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L194)

___

### TParsedAbsoluteQuadraticCurveShortcutCommand

 **TParsedAbsoluteQuadraticCurveShortcutCommand**: [command: "T", endX: number, endY: number]

#### Defined in

[src/util/path/typedefs.ts:214](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L214)

___

### TParsedAbsoluteVerticalLineCommand

 **TParsedAbsoluteVerticalLineCommand**: [command: "V", y: number]

#### Defined in

[src/util/path/typedefs.ts:133](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L133)

___

### TParsedArcCommand

 **TParsedArcCommand**: [`TParsedAbsoluteArcCommand`](/apidocs/modules/util.md#tparsedabsolutearccommand) \| [`TParsedRelativeArcCommand`](/apidocs/modules/util.md#tparsedrelativearccommand)

#### Defined in

[src/util/path/typedefs.ts:252](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L252)

___

### TParsedClosePathCommand

 **TParsedClosePathCommand**: [`TParsedAbsoluteClosePathCommand`](/apidocs/modules/util.md#tparsedabsoluteclosepathcommand) \| [`TParsedRelativeClosePathCommand`](/apidocs/modules/util.md#tparsedrelativeclosepathcommand)

#### Defined in

[src/util/path/typedefs.ts:143](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L143)

___

### TParsedCommand

 **TParsedCommand**: [command: string] \| [command: string, arg1: number] \| [command: string, arg1: number, arg2: number] \| [command: string, arg1: number, arg2: number, arg3: number] \| [command: string, arg1: number, arg2: number, arg3: number, arg4: number] \| [command: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number] \| [command: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number] \| [command: string, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number]

A parsed command of any length (even impossible ones)

#### Defined in

[src/util/path/typedefs.ts:51](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L51)

___

### TParsedCubicCurveCommand

 **TParsedCubicCurveCommand**: [`TParsedAbsoluteCubicCurveCommand`](/apidocs/modules/util.md#tparsedabsolutecubiccurvecommand) \| [`TParsedRelativeCubicCurveCommand`](/apidocs/modules/util.md#tparsedrelativecubiccurvecommand)

#### Defined in

[src/util/path/typedefs.ts:167](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L167)

___

### TParsedCubicCurveShortcutCommand

 **TParsedCubicCurveShortcutCommand**: [`TParsedAbsoluteCubicCurveShortcutCommand`](/apidocs/modules/util.md#tparsedabsolutecubiccurveshortcutcommand) \| [`TParsedRelativeCubicCurveShortcutCommand`](/apidocs/modules/util.md#tparsedrelativecubiccurveshortcutcommand)

#### Defined in

[src/util/path/typedefs.ts:187](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L187)

___

### TParsedHorizontalLineCommand

 **TParsedHorizontalLineCommand**: [`TParsedAbsoluteHorizontalLineCommand`](/apidocs/modules/util.md#tparsedabsolutehorizontallinecommand) \| [`TParsedRelativeHorizontalLineCommand`](/apidocs/modules/util.md#tparsedrelativehorizontallinecommand)

#### Defined in

[src/util/path/typedefs.ts:127](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L127)

___

### TParsedLineCommand

 **TParsedLineCommand**: [`TParsedAbsoluteLineCommand`](/apidocs/modules/util.md#tparsedabsolutelinecommand) \| [`TParsedRelativeLineCommand`](/apidocs/modules/util.md#tparsedrelativelinecommand)

#### Defined in

[src/util/path/typedefs.ts:119](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L119)

___

### TParsedMoveToCommand

 **TParsedMoveToCommand**: [`TParsedAbsoluteMoveToCommand`](/apidocs/modules/util.md#tparsedabsolutemovetocommand) \| [`TParsedRelativeMoveToCommand`](/apidocs/modules/util.md#tparsedrelativemovetocommand)

#### Defined in

[src/util/path/typedefs.ts:111](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L111)

___

### TParsedQuadraticCurveCommand

 **TParsedQuadraticCurveCommand**: [`TParsedAbsoluteQuadraticCurveCommand`](/apidocs/modules/util.md#tparsedabsolutequadraticcurvecommand) \| [`TParsedRelativeQuadraticCurveCommand`](/apidocs/modules/util.md#tparsedrelativequadraticcurvecommand)

#### Defined in

[src/util/path/typedefs.ts:208](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L208)

___

### TParsedQuadraticCurveShortcutCommand

 **TParsedQuadraticCurveShortcutCommand**: [`TParsedAbsoluteQuadraticCurveShortcutCommand`](/apidocs/modules/util.md#tparsedabsolutequadraticcurveshortcutcommand) \| [`TParsedRelativeQuadraticCurveShortcutCommand`](/apidocs/modules/util.md#tparsedrelativequadraticcurveshortcutcommand)

#### Defined in

[src/util/path/typedefs.ts:224](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L224)

___

### TParsedRelativeArcCommand

 **TParsedRelativeArcCommand**: [command: "a", radiusX: number, radiusY: number, rotation: TRadian, largeArc: 0 \| 1, sweep: 0 \| 1, endDX: number, endDY: number]

#### Defined in

[src/util/path/typedefs.ts:241](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L241)

___

### TParsedRelativeClosePathCommand

 **TParsedRelativeClosePathCommand**: [command: "z"]

#### Defined in

[src/util/path/typedefs.ts:142](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L142)

___

### TParsedRelativeCubicCurveCommand

 **TParsedRelativeCubicCurveCommand**: [command: "c", controlPoint1DX: number, controlPoint1DY: number, controlPoint2DX: number, controlPoint2DY: number, endDX: number, endDY: number]

#### Defined in

[src/util/path/typedefs.ts:158](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L158)

___

### TParsedRelativeCubicCurveShortcutCommand

 **TParsedRelativeCubicCurveShortcutCommand**: [command: "s", controlPoint2DX: number, controlPoint2DY: number, endDX: number, endDY: number]

#### Defined in

[src/util/path/typedefs.ts:180](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L180)

___

### TParsedRelativeHorizontalLineCommand

 **TParsedRelativeHorizontalLineCommand**: [command: "h", dx: number]

#### Defined in

[src/util/path/typedefs.ts:126](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L126)

___

### TParsedRelativeLineCommand

 **TParsedRelativeLineCommand**: [command: "l", dx: number, dy: number]

#### Defined in

[src/util/path/typedefs.ts:118](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L118)

___

### TParsedRelativeMoveToCommand

 **TParsedRelativeMoveToCommand**: [command: "m", dx: number, dy: number]

#### Defined in

[src/util/path/typedefs.ts:106](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L106)

___

### TParsedRelativeQuadraticCurveCommand

 **TParsedRelativeQuadraticCurveCommand**: [command: "q", controlPointDX: number, controlPointDY: number, endDX: number, endDY: number]

#### Defined in

[src/util/path/typedefs.ts:201](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L201)

___

### TParsedRelativeQuadraticCurveShortcutCommand

 **TParsedRelativeQuadraticCurveShortcutCommand**: [command: "t", endDX: number, endDY: number]

#### Defined in

[src/util/path/typedefs.ts:219](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L219)

___

### TParsedRelativeVerticalLineCommand

 **TParsedRelativeVerticalLineCommand**: [command: "v", dy: number]

#### Defined in

[src/util/path/typedefs.ts:134](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L134)

___

### TParsedVerticalLineCommand

 **TParsedVerticalLineCommand**: [`TParsedAbsoluteVerticalLineCommand`](/apidocs/modules/util.md#tparsedabsoluteverticallinecommand) \| [`TParsedRelativeVerticalLineCommand`](/apidocs/modules/util.md#tparsedrelativeverticallinecommand)

#### Defined in

[src/util/path/typedefs.ts:135](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L135)

___

### TPathSegmentCommandInfo

 **TPathSegmentCommandInfo**: `Object`

Relevant info to calculate path length/points on path
for each command type in a simplified parsed path

#### Type declaration

| Name | Type |
| :------ | :------ |
| `C` | [`TCurveInfo`](/apidocs/modules/util.md#tcurveinfo)\<``"C"``\> |
| `L` | [`TPathSegmentInfoCommon`](/apidocs/modules/util.md#tpathsegmentinfocommon)\<``"L"``\> |
| `M` | [`TPathSegmentInfoCommon`](/apidocs/modules/util.md#tpathsegmentinfocommon)\<``"M"``\> |
| `Q` | [`TCurveInfo`](/apidocs/modules/util.md#tcurveinfo)\<``"Q"``\> |
| `Z` | [`TEndPathInfo`](/apidocs/modules/util.md#tendpathinfo) |

#### Defined in

[src/util/path/typedefs.ts:37](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L37)

___

### TPathSegmentInfo

 **TPathSegmentInfo**: [`TPathSegmentCommandInfo`](/apidocs/modules/util.md#tpathsegmentcommandinfo)[keyof [`TPathSegmentCommandInfo`](/apidocs/modules/util.md#tpathsegmentcommandinfo)]

#### Defined in

[src/util/path/typedefs.ts:45](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L45)

___

### TPathSegmentInfoCommon

 **TPathSegmentInfoCommon**\<`C`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `string` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `command?` | `C` |
| `length` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Defined in

[src/util/path/typedefs.ts:4](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L4)

___

### TPointAngle

 **TPointAngle**: [`XY`](/apidocs/interfaces/XY.md) & \{ `angle`: [`TRadian`](/apidocs/modules.md#tradian)  }

A point (vector) and angle between the vector and x-axis

#### Defined in

[src/util/path/typedefs.ts:305](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L305)

___

### TProjectStrokeOnPointsOptions

 **TProjectStrokeOnPointsOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `scaleX` | `number` | - |
| `scaleY` | `number` | - |
| `skewX` | [`TDegree`](/apidocs/modules.md#tdegree) | - |
| `skewY` | [`TDegree`](/apidocs/modules.md#tdegree) | - |
| `strokeLineCap` | `CanvasLineCap` | - |
| `strokeLineJoin` | `CanvasLineJoin` | - |
| `strokeMiterLimit` | `number` | https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-miterlimit |
| `strokeUniform` | `boolean` | - |
| `strokeWidth` | `number` | - |

#### Defined in

[src/util/misc/projectStroke/types.ts:4](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/projectStroke/types.ts#L4)

___

### TProjection

 **TProjection**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `angle?` | [`TRadian`](/apidocs/modules.md#tradian) |
| `bisector?` | [`Point`](/apidocs/classes/Point.md) |
| `originPoint` | [`Point`](/apidocs/classes/Point.md) |
| `projectedPoint` | [`Point`](/apidocs/classes/Point.md) |

#### Defined in

[src/util/misc/projectStroke/types.ts:19](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/projectStroke/types.ts#L19)

___

### TQrDecomposeOut

 **TQrDecomposeOut**: `Required`\<`Omit`\<[`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\>

#### Defined in

[src/util/misc/matrix.ts:31](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L31)

___

### TQuadraticCurveCommand

 **TQuadraticCurveCommand**: `TCommand5`\<[`TParsedQuadraticCurveCommand`](/apidocs/modules/util.md#tparsedquadraticcurvecommand)\>

#### Defined in

[src/util/path/typedefs.ts:212](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L212)

___

### TQuadraticCurveShortcutCommand

 **TQuadraticCurveShortcutCommand**: `TCommand3`\<[`TParsedQuadraticCurveShortcutCommand`](/apidocs/modules/util.md#tparsedquadraticcurveshortcutcommand)\>

#### Defined in

[src/util/path/typedefs.ts:228](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L228)

___

### TRotateMatrixArgs

 **TRotateMatrixArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `angle?` | [`TDegree`](/apidocs/modules.md#tdegree) |

#### Defined in

[src/util/misc/matrix.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L9)

___

### TScaleMatrixArgs

 **TScaleMatrixArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `flipX?` | `boolean` |
| `flipY?` | `boolean` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `skewX?` | [`TDegree`](/apidocs/modules.md#tdegree) |
| `skewY?` | [`TDegree`](/apidocs/modules.md#tdegree) |

#### Defined in

[src/util/misc/matrix.ts:18](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L18)

___

### TSimpleParsedCommand

 **TSimpleParsedCommand**: [`TParsedAbsoluteMoveToCommand`](/apidocs/modules/util.md#tparsedabsolutemovetocommand) \| [`TParsedAbsoluteLineCommand`](/apidocs/modules/util.md#tparsedabsolutelinecommand) \| [`TParsedAbsoluteClosePathCommand`](/apidocs/modules/util.md#tparsedabsoluteclosepathcommand) \| [`TParsedAbsoluteCubicCurveCommand`](/apidocs/modules/util.md#tparsedabsolutecubiccurvecommand) \| [`TParsedAbsoluteQuadraticCurveCommand`](/apidocs/modules/util.md#tparsedabsolutequadraticcurvecommand)

Any SVG command that all Fabric functions can understand

#### Defined in

[src/util/path/typedefs.ts:290](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L290)

___

### TSimplePathData

 **TSimplePathData**: [`TSimpleParsedCommand`](/apidocs/modules/util.md#tsimpleparsedcommand)[]

A series of simple paths

#### Defined in

[src/util/path/typedefs.ts:300](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L300)

___

### TTranslateMatrixArgs

 **TTranslateMatrixArgs**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `translateX?` | `number` |
| `translateY?` | `number` |

#### Defined in

[src/util/misc/matrix.ts:13](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L13)

___

### TVerticalLineCommand

 **TVerticalLineCommand**: `TCommand2`\<[`TParsedVerticalLineCommand`](/apidocs/modules/util.md#tparsedverticallinecommand)\>

#### Defined in

[src/util/path/typedefs.ts:139](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/typedefs.ts#L139)

___

### TextStyleArray

 **TextStyleArray**: \{ `end`: `number` ; `start`: `number` ; `style`: [`TextStyleDeclaration`](/apidocs/modules.md#textstyledeclaration)  }[]

#### Defined in

[src/util/misc/textStyles.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/textStyles.ts#L8)

___

### ValueAnimationOptions

 **ValueAnimationOptions**: [`TAnimationOptions`](/apidocs/modules/util.md#tanimationoptions)\<`number`\>

#### Defined in

[src/util/animation/types.ts:122](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/types.ts#L122)

## Functions

### addTransformToObject

**addTransformToObject**(`object`, `transform`): `void`

given an object and a transform, apply the transform to the object.
this is equivalent to change the space where the object is drawn.
Adding to an object a transform that scale by 2 is like scaling it by 2.
This is used when removing an object from an active selection for example.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the object you want to transform |
| `transform` | [`TMat2D`](/apidocs/modules.md#tmat2d) | the destination transform |

#### Returns

`void`

#### Defined in

[src/util/misc/objectTransforms.ts:43](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectTransforms.ts#L43)

___

### animate

**animate**(`options`): `ArrayAnimation`

Changes value(s) from startValue to endValue within a certain period of time,
invoking callbacks as the value(s) change.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`number`[]\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`number`[]\> & \{ `endValue`: `number`[] ; `startValue`: `number`[]  }\> |

#### Returns

`ArrayAnimation`

**`Example`**

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

**`Example`**

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

#### Defined in

[src/util/animation/animate.ts:50](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/animate.ts#L50)

**animate**(`options`): `ValueAnimation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`number`\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`number`\> & \{ `endValue`: `number` ; `startValue`: `number`  }\> |

#### Returns

`ValueAnimation`

#### Defined in

[src/util/animation/animate.ts:51](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/animate.ts#L51)

**animate**\<`T`\>(`options`): `T` extends [`ArrayAnimationOptions`](/apidocs/modules/util.md#arrayanimationoptions) ? `ArrayAnimation` : `ValueAnimation`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`number`\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`number`\> & \{ `endValue`: `number` ; `startValue`: `number`  }\> \| `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`number`[]\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`number`[]\> & \{ `endValue`: `number`[] ; `startValue`: `number`[]  }\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `T` |

#### Returns

`T` extends [`ArrayAnimationOptions`](/apidocs/modules/util.md#arrayanimationoptions) ? `ArrayAnimation` : `ValueAnimation`

#### Defined in

[src/util/animation/animate.ts:52](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/animate.ts#L52)

___

### animateColor

**animateColor**(`options`): `ColorAnimation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Partial`\<[`TAnimationBaseOptions`](/apidocs/modules/util.md#tanimationbaseoptions)\<`number`[]\> & [`TAnimationCallbacks`](/apidocs/modules/util.md#tanimationcallbacks)\<`string`\> & \{ `endValue`: [`TColorArg`](/apidocs/modules.md#tcolorarg) ; `startValue`: [`TColorArg`](/apidocs/modules.md#tcolorarg)  }\> |

#### Returns

`ColorAnimation`

#### Defined in

[src/util/animation/animate.ts:70](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/animate.ts#L70)

___

### applyTransformToObject

**applyTransformToObject**(`object`, `transform`): `void`

discard an object transform state and apply the one from the matrix.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the object you want to transform |
| `transform` | [`TMat2D`](/apidocs/modules.md#tmat2d) | the destination transform |

#### Returns

`void`

#### Defined in

[src/util/misc/objectTransforms.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectTransforms.ts#L54)

___

### calcAngleBetweenVectors

**calcAngleBetweenVectors**(`a`, `b`): [`TRadian`](/apidocs/modules.md#tradian)

Calculates the angle between 2 vectors

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Point`](/apidocs/classes/Point.md) |
| `b` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

[`TRadian`](/apidocs/modules.md#tradian)

the angle in radians from `a` to `b`

#### Defined in

[src/util/misc/vectors.ts:39](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L39)

___

### calcDimensionsMatrix

**calcDimensionsMatrix**(`options`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Returns a transform matrix starting from an object of the same kind of
the one returned from qrDecompose, useful also if you want to calculate some
transformations from an object that is not enlived yet.
is called DimensionsTransformMatrix because those properties are the one that influence
the size of the resulting box of the object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TScaleMatrixArgs`](/apidocs/modules/util.md#tscalematrixargs) |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix

#### Defined in

[src/util/misc/matrix.ts:272](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L272)

___

### calcPlaneChangeMatrix

**calcPlaneChangeMatrix**(`from?`, `to?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

We are actually looking for the transformation from the destination plane to the source plane (change of basis matrix)\
The object will exist on the destination plane and we want it to seem unchanged by it so we invert the destination matrix (`to`) and then apply the source matrix (`from`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `from?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `iMatrix` |
| `to?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `iMatrix` |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

#### Defined in

[src/util/misc/planeChange.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/planeChange.ts#L15)

___

### calcVectorRotation

**calcVectorRotation**(`v`): [`TRadian`](/apidocs/modules.md#tradian)

Calculates the angle between the x axis and the vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

[`TRadian`](/apidocs/modules.md#tradian)

the angle in radians of `v`

#### Defined in

[src/util/misc/vectors.ts:47](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L47)

___

### cancelAnimFrame

**cancelAnimFrame**(`handle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handle` | `number` |

#### Returns

`void`

#### Defined in

[src/util/animation/AnimationFrameProvider.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/AnimationFrameProvider.ts#L7)

___

### capValue

**capValue**(`min`, `value`, `max`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `value` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[src/util/misc/capValue.ts:1](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/capValue.ts#L1)

___

### composeMatrix

**composeMatrix**(`options`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Returns a transform matrix starting from an object of the same kind of
the one returned from qrDecompose, useful also if you want to calculate some
transformations from an object that is not enlived yet

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs) |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

transform matrix

#### Defined in

[src/util/misc/matrix.ts:306](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L306)

___

### copyCanvasElement

**copyCanvasElement**(`canvas`): `HTMLCanvasElement`

Creates a canvas element that is a copy of another and is also painted

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `HTMLCanvasElement` | to copy size and content of |

#### Returns

`HTMLCanvasElement`

initialized canvas element

#### Defined in

[src/util/misc/dom.ts:28](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/dom.ts#L28)

___

### cos

**cos**(`angle`): `number`

Calculate the cos of an angle, avoiding returning floats for known results
This function is here just to avoid getting 0.999999999999999 when dealing
with numbers that are really 1 or 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TRadian`](/apidocs/modules.md#tradian) | the angle |

#### Returns

`number`

the cosin value for angle.

#### Defined in

[src/util/misc/cos.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/cos.ts#L11)

___

### createCanvasElement

**createCanvasElement**(): `HTMLCanvasElement`

Creates canvas element

#### Returns

`HTMLCanvasElement`

initialized canvas element

#### Defined in

[src/util/misc/dom.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/dom.ts#L8)

___

### createImage

**createImage**(): `HTMLImageElement`

Creates image element (works on client and node)

#### Returns

`HTMLImageElement`

HTML image element

#### Defined in

[src/util/misc/dom.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/dom.ts#L20)

___

### createRotateMatrix

**createRotateMatrix**(`angle?`, `pivotPoint?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Generate a rotation matrix around around a point (x,y), defaulting to (0,0)

A matrix in the form of
[cos(a) -sin(a) -x*cos(a)+y*sin(a)+x]
[sin(a)  cos(a) -x*sin(a)-y*cos(a)+y]
[0       0      1                 ]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TRotateMatrixArgs`](/apidocs/modules/util.md#trotatematrixargs) | rotation in degrees |
| `pivotPoint?` | `Partial`\<[`XY`](/apidocs/interfaces/XY.md)\> | pivot point to rotate around |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

matrix

#### Defined in

[src/util/misc/matrix.ts:167](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L167)

___

### createScaleMatrix

**createScaleMatrix**(`x`, `y?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Generate a scale matrix around the point (0,0)

A matrix in the form of
[x 0 0]
[0 y 0]
[0 0 1]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | scale on X axis |
| `y?` | `number` | `x` | scale on Y axis |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

matrix

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#scale

#### Defined in

[src/util/misc/matrix.ts:198](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L198)

___

### createSkewXMatrix

**createSkewXMatrix**(`skewValue`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Generate a skew matrix for the X axis

A matrix in the form of
[1 x 0]
[0 1 0]
[0 0 1]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skewValue` | [`TDegree`](/apidocs/modules.md#tdegree) | translation on X axis |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

matrix

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#skewx

#### Defined in

[src/util/misc/matrix.ts:226](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L226)

___

### createSkewYMatrix

**createSkewYMatrix**(`skewValue`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Generate a skew matrix for the Y axis

A matrix in the form of
[1 0 0]
[y 1 0]
[0 0 1]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skewValue` | [`TDegree`](/apidocs/modules.md#tdegree) | translation on Y axis |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

matrix

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#skewy

#### Defined in

[src/util/misc/matrix.ts:248](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L248)

___

### createTranslateMatrix

**createTranslateMatrix**(`x`, `y?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Generate a translation matrix

A translation matrix in the form of
[ 1 0 x ]
[ 0 1 y ]
[ 0 0 1 ]

See

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x` | `number` | `undefined` | translation on X axis |
| `y?` | `number` | `0` | translation on Y axis |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

matrix

**`Link`**

https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform#translate for more details

#### Defined in

[src/util/misc/matrix.ts:145](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L145)

___

### createVector

**createVector**(`from`, `to`): [`Point`](/apidocs/classes/Point.md)

Creates a vector from points represented as a point

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | [`XY`](/apidocs/interfaces/XY.md) |
| `to` | [`XY`](/apidocs/interfaces/XY.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

vector

#### Defined in

[src/util/misc/vectors.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L24)

___

### crossProduct

**crossProduct**(`a`, `b`): `number`

Cross product of two vectors in 2D

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Point`](/apidocs/classes/Point.md) |
| `b` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`number`

the magnitude of Z vector

#### Defined in

[src/util/misc/vectors.ts:74](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L74)

___

### degreesToRadians

**degreesToRadians**(`degrees`): [`TRadian`](/apidocs/modules.md#tradian)

Transforms degrees to radians.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `degrees` | [`TDegree`](/apidocs/modules.md#tdegree) | value in degrees |

#### Returns

[`TRadian`](/apidocs/modules.md#tradian)

value in radians

#### Defined in

[src/util/misc/radiansDegreesConversion.ts:9](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/radiansDegreesConversion.ts#L9)

___

### dotProduct

**dotProduct**(`a`, `b`): `number`

Dot product of two vectors in 2D

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | [`Point`](/apidocs/classes/Point.md) |
| `b` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`number`

#### Defined in

[src/util/misc/vectors.ts:83](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L83)

___

### enlivenObjectEnlivables

**enlivenObjectEnlivables**\<`R`\>(`serializedObject`, `options?`): `Promise`\<`R`\>

Creates corresponding fabric instances residing in an object, e.g. `clipPath`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `Record`\<`string`, ``null`` \| [`Pattern`](/apidocs/classes/Pattern.md) \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"linear"``, ``"linear"``\> \| [`Gradient`](/apidocs/classes/Gradient.md)\<``"radial"``, ``"radial"``\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serializedObject` | `any` |
| `options?` | [`Abortable`](/apidocs/modules.md#abortable) |

#### Returns

`Promise`\<`R`\>

the input object with enlived values

#### Defined in

[src/util/misc/objectEnlive.ts:124](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectEnlive.ts#L124)

___

### enlivenObjects

**enlivenObjects**\<`T`\>(`objects`, `options?`): `Promise`\<`T`[]\>

Creates corresponding fabric instances from their object representations

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> \| [`BaseFilter`](/apidocs/classes/filters.BaseFilter.md) \| [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objects` | `any`[] | Objects to enliven |
| `options?` | [`EnlivenObjectOptions`](/apidocs/modules/util.md#enlivenobjectoptions) |  |

#### Returns

`Promise`\<`T`[]\>

#### Defined in

[src/util/misc/objectEnlive.ts:79](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectEnlive.ts#L79)

___

### findScaleToCover

**findScaleToCover**(`source`, `destination`): `number`

Finds the scale for the object source to cover entirely the object destination,
keeping aspect ratio intact.
respect the total allowed area for the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`TSize`](/apidocs/modules.md#tsize) | natural unscaled size of the object |
| `destination` | [`TSize`](/apidocs/modules.md#tsize) | natural unscaled size of the object |

#### Returns

`number`

scale factor to apply to source to cover destination

#### Defined in

[src/util/misc/findScaleTo.ts:25](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/findScaleTo.ts#L25)

___

### findScaleToFit

**findScaleToFit**(`source`, `destination`): `number`

Finds the scale for the object source to fit inside the object destination,
keeping aspect ratio intact.
respect the total allowed area for the cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | [`TSize`](/apidocs/modules.md#tsize) | natural unscaled size of the object |
| `destination` | [`TSize`](/apidocs/modules.md#tsize) | natural unscaled size of the object |

#### Returns

`number`

scale factor to apply to source to fit into destination

#### Defined in

[src/util/misc/findScaleTo.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/findScaleTo.ts#L11)

___

### getBoundsOfCurve

**getBoundsOfCurve**(`begx`, `begy`, `cp1x`, `cp1y`, `cp2x`, `cp2y`, `endx`, `endy`): [`TRectBounds`](/apidocs/modules.md#trectbounds)

Calculate bounding box of a cubic Bezier curve
Taken from http://jsbin.com/ivomiq/56/edit (no credits available)
TODO: can we normalize this with the starting points set at 0 and then translated the bbox?

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `begx` | `number` | starting point |
| `begy` | `number` |  |
| `cp1x` | `number` | first control point |
| `cp1y` | `number` |  |
| `cp2x` | `number` | second control point |
| `cp2y` | `number` |  |
| `endx` | `number` | end of bezier |
| `endy` | `number` |  |

#### Returns

[`TRectBounds`](/apidocs/modules.md#trectbounds)

the rectangular bounds

#### Defined in

[src/util/path/index.ts:221](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L221)

___

### getOrthonormalVector

**getOrthonormalVector**(`v`, `counterClockwise?`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `v` | [`Point`](/apidocs/classes/Point.md) | `undefined` |  |
| `counterClockwise?` | `boolean` | `true` | the direction of the orthogonal vector, defaults to `true` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

the unit orthogonal vector

#### Defined in

[src/util/misc/vectors.ts:62](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L62)

___

### getPathSegmentsInfo

**getPathSegmentsInfo**(`path`): [`TPathSegmentInfo`](/apidocs/modules/util.md#tpathsegmentinfo)[]

Run over a parsed and simplified path and extract some information (length of each command and starting point)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata) | parsed path commands |

#### Returns

[`TPathSegmentInfo`](/apidocs/modules/util.md#tpathsegmentinfo)[]

path commands information

#### Defined in

[src/util/path/index.ts:682](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L682)

___

### getPointOnPath

**getPointOnPath**(`path`, `distance`, `infos?`): `undefined` \| [`TPointAngle`](/apidocs/modules/util.md#tpointangle)

Get the point on the path that is distance along the path

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata) |
| `distance` | `number` |
| `infos` | [`TPathSegmentInfo`](/apidocs/modules/util.md#tpathsegmentinfo)[] |

#### Returns

`undefined` \| [`TPointAngle`](/apidocs/modules/util.md#tpointangle)

#### Defined in

[src/util/path/index.ts:790](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L790)

___

### getPointer

**getPointer**(`event`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/util/dom_event.ts:15](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/dom_event.ts#L15)

___

### getRandomInt

**getRandomInt**(`min`, `max`): `number`

Returns random number between 2 specified ones.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `min` | `number` | lower limit |
| `max` | `number` | upper limit |

#### Returns

`number`

random value (between min and max)

#### Defined in

[src/util/internals/getRandomInt.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/internals/getRandomInt.ts#L7)

___

### getRegularPolygonPath

**getRegularPolygonPath**(`numVertexes`, `radius`): [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

Returns an array of path commands to create a regular polygon

#### Parameters

| Name | Type |
| :------ | :------ |
| `numVertexes` | `number` |
| `radius` | `number` |

#### Returns

[`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

An array of SVG path commands

#### Defined in

[src/util/path/index.ts:1000](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L1000)

___

### getSmoothPathFromPoints

**getSmoothPathFromPoints**(`points`, `correction?`): [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

Converts points to a smooth SVG path

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `points` | [`Point`](/apidocs/classes/Point.md)[] | `undefined` | Array of points |
| `correction?` | `number` | `0` | Apply a correction to the path (usually we use `width / 1000`). If value is undefined 0 is used as the correction value. |

#### Returns

[`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

An array of SVG path commands

#### Defined in

[src/util/path/index.ts:905](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L905)

___

### getSvgAttributes

**getSvgAttributes**(`type`): `string`[]

Returns array of attributes for given svg that fabric parses

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | [`SVGElementName`](/apidocs/modules.md#svgelementname) | Type of svg element (eg. 'circle') |

#### Returns

`string`[]

string names of supported attributes

#### Defined in

[src/util/misc/svgParsing.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/svgParsing.ts#L17)

___

### getUnitVector

**getUnitVector**(`v`): [`Point`](/apidocs/classes/Point.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

vector representing the unit vector pointing to the direction of `v`

#### Defined in

[src/util/misc/vectors.ts:54](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L54)

___

### groupSVGElements

**groupSVGElements**(`elements`, `options?`): [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

TODO experiment with different layout manager and svg results ( fixed fit content )
Groups SVG elements (usually those retrieved from SVG document)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `elements` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>[] | FabricObject(s) parsed from svg, to group |
| `options?` | `Partial`\<[`GroupProps`](/apidocs/interfaces/GroupProps.md)\> | - |

#### Returns

[`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\>

**`Static`**

#### Defined in

[src/util/misc/groupSVGElements.ts:12](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/groupSVGElements.ts#L12)

___

### hasStyleChanged

**hasStyleChanged**(`prevStyle`, `thisStyle`, `forTextSpans?`): `boolean`

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `prevStyle` | `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\> | `undefined` | first style to compare |
| `thisStyle` | `Partial`\<[`CompleteTextStyleDeclaration`](/apidocs/modules.md#completetextstyledeclaration)\> | `undefined` | second style to compare |
| `forTextSpans` | `boolean` | `false` | whether to check overline, underline, and line-through properties |

#### Returns

`boolean`

true if the style changed

#### Defined in

[src/util/misc/textStyles.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/textStyles.ts#L20)

___

### invertTransform

**invertTransform**(`t`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Invert transformation t

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`TMat2D`](/apidocs/modules.md#tmat2d) | The transform |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

The inverted transform

#### Defined in

[src/util/misc/matrix.ts:57](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L57)

___

### isBetweenVectors

**isBetweenVectors**(`t`, `a`, `b`): `boolean`

Checks if the vector is between two others. It is considered
to be inside when the vector to be tested is between the
initial vector and the final vector (included) in a counterclockwise direction.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `t` | [`Point`](/apidocs/classes/Point.md) | vector to be tested |
| `a` | [`Point`](/apidocs/classes/Point.md) | initial vector |
| `b` | [`Point`](/apidocs/classes/Point.md) | final vector |

#### Returns

`boolean`

true if the vector is among the others

#### Defined in

[src/util/misc/vectors.ts:94](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L94)

___

### isIdentityMatrix

**isIdentityMatrix**(`mat`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mat` | [`TMat2D`](/apidocs/modules.md#tmat2d) |

#### Returns

`boolean`

#### Defined in

[src/util/misc/matrix.ts:35](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L35)

___

### isTouchEvent

**isTouchEvent**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`TPointerEvent`](/apidocs/modules.md#tpointerevent) |

#### Returns

`boolean`

#### Defined in

[src/util/dom_event.ts:22](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/dom_event.ts#L22)

___

### isTransparent

**isTransparent**(`ctx`, `x`, `y`, `tolerance`): `boolean`

Returns true if context has transparent pixel
at specified location (taking tolerance into account)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | context |
| `x` | `number` | x coordinate in canvasElementCoordinate, not fabric space. integer |
| `y` | `number` | y coordinate in canvasElementCoordinate, not fabric space. integer |
| `tolerance` | `number` | Tolerance pixels around the point, not alpha tolerance, integer |

#### Returns

`boolean`

true if transparent

#### Defined in

[src/util/misc/isTransparent.ts:10](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/isTransparent.ts#L10)

___

### joinPath

**joinPath**(`pathData`, `fractionDigits?`): `string`

Join path commands to go back to svg format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pathData` | [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata) | fabricJS parsed path commands |
| `fractionDigits?` | `number` | number of fraction digits to "leave" |

#### Returns

`string`

joined path 'M 0 0 L 20 30'

#### Defined in

[src/util/path/index.ts:1027](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L1027)

___

### loadImage

**loadImage**(`url`, `options?`): `Promise`\<`HTMLImageElement`\>

Loads image element from given url and resolve it, or catch.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL representing an image |
| `options?` | [`LoadImageOptions`](/apidocs/modules/util.md#loadimageoptions) | image loading options |

#### Returns

`Promise`\<`HTMLImageElement`\>

the loaded image.

#### Defined in

[src/util/misc/objectEnlive.ts:24](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectEnlive.ts#L24)

___

### magnitude

**magnitude**(`point`): `number`

return the magnitude of a vector

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) |

#### Returns

`number`

#### Defined in

[src/util/misc/vectors.ts:31](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L31)

___

### makeBoundingBoxFromPoints

**makeBoundingBoxFromPoints**(`points`): [`TBBox`](/apidocs/modules.md#tbbox)

Calculates bounding box (left, top, width, height) from given `points`

#### Parameters

| Name | Type |
| :------ | :------ |
| `points` | [`XY`](/apidocs/interfaces/XY.md)[] |

#### Returns

[`TBBox`](/apidocs/modules.md#tbbox)

Object with left, top, width, height properties

#### Defined in

[src/util/misc/boundingBoxFromPoints.ts:10](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/boundingBoxFromPoints.ts#L10)

___

### makePathSimpler

**makePathSimpler**(`path`): [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

This function takes a parsed SVG path and makes it simpler for fabricJS logic.
Simplification consist of:
- All commands converted to absolute (lowercase to uppercase)
- S converted to C
- T converted to Q
- A converted to C

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`TComplexPathData`](/apidocs/modules/util.md#tcomplexpathdata) | the array of commands of a parsed SVG path for `Path` |

#### Returns

[`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

the simplified array of commands of a parsed SVG path for `Path`
TODO: figure out how to remove the type assertions in a nice way

#### Defined in

[src/util/path/index.ts:351](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L351)

___

### matrixToSVG

**matrixToSVG**(`transform`): `string`

given an array of 6 number returns something like `"matrix(...numbers)"`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`TMat2D`](/apidocs/modules.md#tmat2d) | an array with 6 numbers |

#### Returns

`string`

transform matrix for svg

#### Defined in

[src/util/misc/svgParsing.ts:128](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/svgParsing.ts#L128)

___

### mergeClipPaths

**mergeClipPaths**(`c1`, `c2`): [`Group`](/apidocs/classes/Group.md)

Merges 2 clip paths into one visually equal clip path

**IMPORTANT**:\
Does **NOT** clone the arguments, clone them proir if necessary.

Creates a wrapper (group) that contains one clip path and is clipped by the other so content is kept where both overlap.
Use this method if both the clip paths may have nested clip paths of their own, so assigning one to the other's clip path property is not possible.

In order to handle the `inverted` property we follow logic described in the following cases:\
**(1)** both clip paths are inverted - the clip paths pass the inverted prop to the wrapper and loose it themselves.\
**(2)** one is inverted and the other isn't - the wrapper shouldn't become inverted and the inverted clip path must clip the non inverted one to produce an identical visual effect.\
**(3)** both clip paths are not inverted - wrapper and clip paths remain unchanged.

#### Parameters

| Name | Type |
| :------ | :------ |
| `c1` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |
| `c2` | [`FabricObject`](/apidocs/classes/FabricObject.md)\<`Partial`\<[`FabricObjectProps`](/apidocs/interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |

#### Returns

[`Group`](/apidocs/classes/Group.md)

merged clip path

**`Member Of`**

fabric.util

#### Defined in

[src/util/misc/mergeClipPaths.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/mergeClipPaths.ts#L23)

___

### multiplyTransformMatrices

**multiplyTransformMatrices**(`a`, `b`, `is2x2?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Multiply matrix A by matrix B to nest transformations

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`TMat2D`](/apidocs/modules.md#tmat2d) | First transformMatrix |
| `b` | [`TMat2D`](/apidocs/modules.md#tmat2d) | Second transformMatrix |
| `is2x2?` | `boolean` | flag to multiply matrices as 2x2 matrices |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

The product of the two transform matrices

#### Defined in

[src/util/misc/matrix.ts:73](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L73)

___

### multiplyTransformMatrixArray

**multiplyTransformMatrixArray**(`matrices`, `is2x2?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

Multiplies matrices such that a matrix defines the plane for the rest of the matrices **after** it

`multiplyTransformMatrixArray([A, B, C, D])` is equivalent to `A(B(C(D)))`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `matrices` | (`undefined` \| ``null`` \| ``false`` \| [`TMat2D`](/apidocs/modules.md#tmat2d))[] | an array of matrices |
| `is2x2?` | `boolean` | flag to multiply matrices as 2x2 matrices |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

the multiplication product

#### Defined in

[src/util/misc/matrix.ts:96](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L96)

___

### parsePath

**parsePath**(`pathString`): [`TComplexPathData`](/apidocs/modules/util.md#tcomplexpathdata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pathString` | `string` |

#### Returns

[`TComplexPathData`](/apidocs/modules/util.md#tcomplexpathdata)

An array of SVG path commands

**`Example`**

```ts
parsePath('M 3 4 Q 3 5 2 1 4 0 Q 9 12 2 1 4 0') === [
  ['M', 3, 4],
  ['Q', 3, 5, 2, 1, 4, 0],
  ['Q', 9, 12, 2, 1, 4, 0],
];
```

#### Defined in

[src/util/path/index.ts:844](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L844)

___

### parsePreserveAspectRatioAttribute

**parsePreserveAspectRatioAttribute**(`attribute`): `TPreserveArParsed`

Parse preserveAspectRatio attribute from element
https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attribute` | `string` | to be parsed |

#### Returns

`TPreserveArParsed`

an object containing align and meetOrSlice attribute

#### Defined in

[src/util/misc/svgParsing.ts:108](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/svgParsing.ts#L108)

___

### parseUnit

**parseUnit**(`value`, `fontSize?`): `number`

Converts from attribute value to pixel value if applicable.
Returns converted pixels or original value not converted.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `string` | `undefined` | number to operate on |
| `fontSize` | `number` | `DEFAULT_SVG_FONT_SIZE` |  |

#### Returns

`number`

#### Defined in

[src/util/misc/svgParsing.ts:53](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/svgParsing.ts#L53)

___

### pick

**pick**\<`T`\>(`source`, `keys?`): `Partial`\<`T`\>

Populates an object with properties of another object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Record`\<`string`, `any`\> |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `source` | `T` | `undefined` | Source object |
| `keys` | keyof `T`[] | `[]` | - |

#### Returns

`Partial`\<`T`\>

object populated with the picked keys

#### Defined in

[src/util/misc/pick.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/pick.ts#L7)

___

### projectStrokeOnPoints

**projectStrokeOnPoints**(`points`, `options`, `openPath?`): [`TProjection`](/apidocs/modules/util.md#tprojection)[]

Used to calculate object's bounding box

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `points` | [`XY`](/apidocs/interfaces/XY.md)[] | `undefined` |
| `options` | [`TProjectStrokeOnPointsOptions`](/apidocs/modules/util.md#tprojectstrokeonpointsoptions) | `undefined` |
| `openPath` | `boolean` | `false` |

#### Returns

[`TProjection`](/apidocs/modules/util.md#tprojection)[]

**`See`**

https://github.com/fabricjs/fabric.js/pull/8344

#### Defined in

[src/util/misc/projectStroke/index.ts:16](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/projectStroke/index.ts#L16)

___

### qrDecompose

**qrDecompose**(`a`): `Required`\<`Omit`\<[`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\>

Decomposes standard 2x3 matrix into transform components

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `a` | [`TMat2D`](/apidocs/modules.md#tmat2d) | transformMatrix |

#### Returns

`Required`\<`Omit`\<[`TComposeMatrixArgs`](/apidocs/modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\>

Components of transform

#### Defined in

[src/util/misc/matrix.ts:114](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L114)

___

### radiansToDegrees

**radiansToDegrees**(`radians`): [`TDegree`](/apidocs/modules.md#tdegree)

Transforms radians to degrees.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `radians` | [`TRadian`](/apidocs/modules.md#tradian) | value in radians |

#### Returns

[`TDegree`](/apidocs/modules.md#tdegree)

value in degrees

#### Defined in

[src/util/misc/radiansDegreesConversion.ts:17](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/radiansDegreesConversion.ts#L17)

___

### removeFromArray

**removeFromArray**\<`T`\>(`array`, `value`): `T`[]

Removes value from an array.
Presence of value (and its position in an array) is determined via `Array.prototype.indexOf`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T`[] |
| `value` | `T` |

#### Returns

`T`[]

original array

#### Defined in

[src/util/internals/removeFromArray.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/internals/removeFromArray.ts#L8)

___

### removeTransformFromObject

**removeTransformFromObject**(`object`, `transform`): `void`

given an object and a transform, apply the inverse transform to the object,
this is equivalent to remove from that object that transformation, so that
added in a space with the removed transform, the object will be the same as before.
Removing from an object a transform that scale by 2 is like scaling it by 1/2.
Removing from an object a transform that rotate by 30deg is like rotating by 30deg
in the opposite direction.
This util is used to add objects inside transformed groups or nested groups.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | the object you want to transform |
| `transform` | [`TMat2D`](/apidocs/modules.md#tmat2d) | the destination transform |

#### Returns

`void`

#### Defined in

[src/util/misc/objectTransforms.ts:23](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectTransforms.ts#L23)

___

### removeTransformMatrixForSvgParsing

**removeTransformMatrixForSvgParsing**(`object`, `preserveAspectRatioOptions?`): `void`

This function is an helper for svg import. it removes the transform matrix
and set to object properties that fabricjs can handle

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `FabricObjectWithTransformMatrix` |
| `preserveAspectRatioOptions?` | `any` |

#### Returns

`void`

#### Defined in

[src/util/transform_matrix_removal.ts:40](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/transform_matrix_removal.ts#L40)

___

### request

**request**(`url`, `options?`): `XMLHttpRequest`

Cross-browser abstraction for sending XMLHttpRequest

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | URL to send XMLHttpRequest to |
| `options?` | `requestOptions` | Options object |

#### Returns

`XMLHttpRequest`

request

**`Deprecated`**

this has to go away, we can use a modern browser method to do the same.

#### Defined in

[src/util/internals/dom_request.ts:20](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/internals/dom_request.ts#L20)

___

### requestAnimFrame

**requestAnimFrame**(`callback`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `FrameRequestCallback` |

#### Returns

`number`

#### Defined in

[src/util/animation/AnimationFrameProvider.ts:3](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/animation/AnimationFrameProvider.ts#L3)

___

### resetObjectTransform

**resetObjectTransform**(`target`): `void`

reset an object transform state to neutral. Top and left are not accounted for

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | object to transform |

#### Returns

`void`

#### Defined in

[src/util/misc/objectTransforms.ts:71](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectTransforms.ts#L71)

___

### rotatePoint

**rotatePoint**(`point`, `origin`, `radians`): [`Point`](/apidocs/classes/Point.md)

Rotates `point` around `origin` with `radians`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | - |
| `origin` | [`Point`](/apidocs/classes/Point.md) | The origin of the rotation |
| `radians` | [`TRadian`](/apidocs/modules.md#tradian) | The radians of the angle for the rotation |

#### Returns

[`Point`](/apidocs/classes/Point.md)

The new rotated point

**`Deprecated`**

use the Point.rotate

#### Defined in

[src/util/misc/rotatePoint.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/rotatePoint.ts#L11)

___

### rotateVector

**rotateVector**(`vector`, `radians`): [`Point`](/apidocs/classes/Point.md)

Rotates `vector` with `radians`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `vector` | [`Point`](/apidocs/classes/Point.md) | The vector to rotate (x and y) |
| `radians` | [`TRadian`](/apidocs/modules.md#tradian) | The radians of the angle for the rotation |

#### Returns

[`Point`](/apidocs/classes/Point.md)

The new rotated point

#### Defined in

[src/util/misc/vectors.ts:14](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/vectors.ts#L14)

___

### saveObjectTransform

**saveObjectTransform**(`target`): `Object`

Extract Object transform values

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> | object to read from |

#### Returns

`Object`

Components of transform

| Name | Type |
| :------ | :------ |
| `angle` | [`TDegree`](/apidocs/modules.md#tdegree) |
| `flipX` | `boolean` |
| `flipY` | `boolean` |
| `left` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `skewX` | `number` |
| `skewY` | `number` |
| `top` | `number` |

#### Defined in

[src/util/misc/objectTransforms.ts:86](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectTransforms.ts#L86)

___

### sendObjectToPlane

**sendObjectToPlane**(`object`, `from?`, `to?`): [`TMat2D`](/apidocs/modules.md#tmat2d)

A util that abstracts applying transform to objects.\
Sends `object` to the destination coordinate plane by applying the relevant transformations.\
Changes the space/plane where `object` is drawn.\
From the canvas/viewer's perspective `object` remains unchanged.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `FabricObject`\<`Partial`\<`ObjectProps`\>, [`SerializedObjectProps`](/apidocs/interfaces/SerializedObjectProps.md), [`ObjectEvents`](/apidocs/interfaces/ObjectEvents.md)\> |  |
| `from?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | plane matrix containing object. Passing `undefined` is equivalent to passing the identity matrix, which means `object` is a direct child of canvas. |
| `to?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | destination plane matrix to contain object. Passing `undefined` means `object` should be sent to the canvas coordinate plane. |

#### Returns

[`TMat2D`](/apidocs/modules.md#tmat2d)

the transform matrix that was applied to `object`

**`Example`**

```ts
let obj, obj2;
let clipPath = new Circle({ radius: 50 });
obj.clipPath = clipPath;
// render
sendObjectToPlane(clipPath, obj.calcTransformMatrix(), obj2.calcTransformMatrix());
obj.clipPath = undefined;
obj2.clipPath = clipPath;
// render, clipPath now clips obj2 but seems unchanged from the eyes of the viewer
```

**`Example`**

```ts
let obj, existingObj;
let clipPath = new Circle({ radius: 50 });
obj.clipPath = clipPath;
let transformTo = multiplyTransformMatrices(obj.calcTransformMatrix(), clipPath.calcTransformMatrix());
sendObjectToPlane(existingObj, existingObj.group?.calcTransformMatrix(), transformTo);
clipPath.clipPath = existingObj;
```

#### Defined in

[src/util/misc/planeChange.ts:81](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/planeChange.ts#L81)

___

### sendPointToPlane

**sendPointToPlane**(`point`, `from?`, `to?`): [`Point`](/apidocs/classes/Point.md)

Sends a point from the source coordinate plane to the destination coordinate plane.\
From the canvas/viewer's perspective the point remains unchanged.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | `undefined` |  |
| `from?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `iMatrix` | plane matrix containing object. Passing `undefined` is equivalent to passing the identity matrix, which means `point` exists in the canvas coordinate plane. |
| `to?` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `iMatrix` | destination plane matrix to contain object. Passing `undefined` means `point` should be sent to the canvas coordinate plane. |

#### Returns

[`Point`](/apidocs/classes/Point.md)

transformed point

**`Example`**

```ts
var obj = new Rect({ left: 20, top: 20, width: 60, height: 60, strokeWidth: 0 });
var group = new Group([obj], { strokeWidth: 0 });
var sentPoint1 = sendPointToPlane(new Point(50, 50), undefined, group.calcTransformMatrix());
var sentPoint2 = sendPointToPlane(new Point(50, 50), iMatrix, group.calcTransformMatrix());
console.log(sentPoint1, sentPoint2) //  both points print (0,0) which is the center of group
```

#### Defined in

[src/util/misc/planeChange.ts:36](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/planeChange.ts#L36)

___

### sendVectorToPlane

**sendVectorToPlane**(`point`, `from?`, `to?`): [`Point`](/apidocs/classes/Point.md)

See [sendPointToPlane](/apidocs/modules/util.md#sendpointtoplane)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `point` | [`Point`](/apidocs/classes/Point.md) | `undefined` |
| `from` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `iMatrix` |
| `to` | [`TMat2D`](/apidocs/modules.md#tmat2d) | `iMatrix` |

#### Returns

[`Point`](/apidocs/classes/Point.md)

#### Defined in

[src/util/misc/planeChange.ts:45](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/planeChange.ts#L45)

___

### setStyle

**setStyle**(`element`, `styles`): `void`

wrapper for setting element's style

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `HTMLElement` |
| `styles` | `string` \| `Record`\<`string`, `string`\> |

#### Returns

`void`

#### Defined in

[src/util/dom_style.ts:8](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/dom_style.ts#L8)

___

### sin

**sin**(`angle`): `number`

Calculate the cos of an angle, avoiding returning floats for known results
This function is here just to avoid getting 0.999999999999999 when dealing
with numbers that are really 1 or 0.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TRadian`](/apidocs/modules.md#tradian) | the angle |

#### Returns

`number`

the sin value for angle.

#### Defined in

[src/util/misc/sin.ts:11](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/sin.ts#L11)

___

### sizeAfterTransform

**sizeAfterTransform**(`width`, `height`, `t`): [`Point`](/apidocs/classes/Point.md)

given a width and height, return the size of the bounding box
that can contains the box with width/height with applied transform.
Use to calculate the boxes around objects for controls.

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `height` | `number` |
| `t` | [`TMat2D`](/apidocs/modules.md#tmat2d) |

#### Returns

[`Point`](/apidocs/classes/Point.md)

size

#### Defined in

[src/util/misc/objectTransforms.ts:107](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/objectTransforms.ts#L107)

___

### stylesFromArray

**stylesFromArray**(`styles`, `text`): [`TextStyle`](/apidocs/modules.md#textstyle)

Returns the object form of the styles property with styles that are assigned per
character rather than grouped by range. This format is more verbose, and is
only used during runtime (not for serialization/storage)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles` | [`TextStyle`](/apidocs/modules.md#textstyle) \| [`TextStyleArray`](/apidocs/modules/util.md#textstylearray) | the serialized form of a text object's styles |
| `text` | `string` | the text string that the styles are applied to |

#### Returns

[`TextStyle`](/apidocs/modules.md#textstyle)

#### Defined in

[src/util/misc/textStyles.ts:97](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/textStyles.ts#L97)

___

### stylesToArray

**stylesToArray**(`styles`, `text`): [`TextStyleArray`](/apidocs/modules/util.md#textstylearray)

Returns the array form of a text object's inline styles property with styles grouped in ranges
rather than per character. This format is less verbose, and is better suited for storage
so it is used in serialization (not during runtime).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles` | [`TextStyle`](/apidocs/modules.md#textstyle) | per character styles for a text object |
| `text` | `string` | the text string that the styles are applied to |

#### Returns

[`TextStyleArray`](/apidocs/modules/util.md#textstylearray)

#### Defined in

[src/util/misc/textStyles.ts:47](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/textStyles.ts#L47)

___

### toDataURL

**toDataURL**(`canvasEl`, `format`, `quality`): `string`

since 2.6.0 moved from canvas instance to utility.
possibly useless

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvasEl` | `HTMLCanvasElement` | to copy size and content of |
| `format` | [`ImageFormat`](/apidocs/modules.md#imageformat) | 'jpeg' or 'png', in some browsers 'webp' is ok too |
| `quality` | `number` | <= 1 and > 0 |

#### Returns

`string`

data url

#### Defined in

[src/util/misc/dom.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/dom.ts#L46)

___

### toFixed

**toFixed**(`number`, `fractionDigits`): `number`

A wrapper around Number#toFixed, which contrary to native method returns number, not string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `number` | `string` \| `number` | number to operate on |
| `fractionDigits` | `number` | number of fraction digits to "leave" |

#### Returns

`number`

#### Defined in

[src/util/misc/toFixed.ts:7](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/toFixed.ts#L7)

___

### transformPath

**transformPath**(`path`, `transform`, `pathOffset?`): [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

Transform a path by transforming each segment.
it has to be a simplified path or it won't work.
WARNING: this depends from pathOffset for correct operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata) | fabricJS parsed and simplified path commands |
| `transform` | [`TMat2D`](/apidocs/modules.md#tmat2d) | matrix that represent the transformation |
| `pathOffset?` | [`Point`](/apidocs/classes/Point.md) | `Path.pathOffset` |

#### Returns

[`TSimplePathData`](/apidocs/modules/util.md#tsimplepathdata)

the transformed path

#### Defined in

[src/util/path/index.ts:961](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/path/index.ts#L961)

___

### transformPoint

**transformPoint**(`p`, `t`, `ignoreOffset?`): [`Point`](/apidocs/classes/Point.md)

Apply transform t to point p

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `p` | [`XY`](/apidocs/interfaces/XY.md) | The point to transform |
| `t` | [`TMat2D`](/apidocs/modules.md#tmat2d) | The transform |
| `ignoreOffset?` | `boolean` | Indicates that the offset should not be applied |

#### Returns

[`Point`](/apidocs/classes/Point.md)

The transformed point

**`Deprecated`**

use [Point#transform](/apidocs/classes/Point.md#transform)

#### Defined in

[src/util/misc/matrix.ts:46](https://github.com/fabricjs/fabric.js/blob/b24e8cbdf/src/util/misc/matrix.ts#L46)
