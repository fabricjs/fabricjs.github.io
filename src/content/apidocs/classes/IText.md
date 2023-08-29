# Class: IText<Props, SProps, EventSpec\>

**`Fires`**

changed

**`Fires`**

selection:changed

**`Fires`**

editing:entered

**`Fires`**

editing:exited

**`Fires`**

dragstart

**`Fires`**

drag drag event firing on the drag source

**`Fires`**

dragend

**`Fires`**

copy

**`Fires`**

cut

**`Fires`**

paste

#### Supported key combinations
```
  Move cursor:                    left, right, up, down
  Select character:               shift + left, shift + right
  Select text vertically:         shift + up, shift + down
  Move cursor by word:            alt + left, alt + right
  Select words:                   shift + alt + left, shift + alt + right
  Move cursor to line start/end:  cmd + left, cmd + right or home, end
  Select till start/end of line:  cmd + shift + left, cmd + shift + right or shift + home, shift + end
  Jump to start/end of text:      cmd + up, cmd + down
  Select till start/end of text:  cmd + shift + up, cmd + shift + down or shift + pgUp, shift + pgDown
  Delete character:               backspace
  Delete word:                    alt + backspace
  Delete line:                    cmd + backspace
  Forward delete:                 delete
  Copy text:                      ctrl/cmd + c
  Paste text:                     ctrl/cmd + v
  Cut text:                       ctrl/cmd + x
  Select entire text:             ctrl/cmd + a
  Quit editing                    tab or esc
```

#### Supported mouse/touch combination
```
  Position cursor:                click/touch
  Create selection:               click/touch & drag
  Create selection:               click & shift + click
  Select word:                    double click
  Select line:                    triple click
```

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](../modules.md#toptions)<[`ITextProps`](../interfaces/ITextProps.md)\> = `Partial`<[`ITextProps`](../interfaces/ITextProps.md)\> |
| `SProps` | extends [`SerializedITextProps`](../interfaces/SerializedITextProps.md) = [`SerializedITextProps`](../interfaces/SerializedITextProps.md) |
| `EventSpec` | extends `ITextEvents` = `ITextEvents` |

## Hierarchy

- `ITextClickBehavior`<`Props`, `SProps`, `EventSpec`\>

  ↳ **`IText`**

  ↳↳ [`Textbox`](Textbox.md)

## Implements

- `UniqueITextProps`

## Table of contents

### Constructors

- [constructor](IText.md#constructor)

### Properties

- [CACHE\_FONT\_SIZE](IText.md#cache_font_size)
- [MIN\_TEXT\_WIDTH](IText.md#min_text_width)
- [\_\_charBounds](IText.md#__charbounds)
- [\_\_corner](IText.md#__corner)
- [\_\_lineHeights](IText.md#__lineheights)
- [\_\_lineWidths](IText.md#__linewidths)
- [\_\_owningGroup](IText.md#__owninggroup)
- [\_\_selectionStartOnMouseDown](IText.md#__selectionstartonmousedown)
- [\_cacheCanvas](IText.md#_cachecanvas)
- [\_cacheContext](IText.md#_cachecontext)
- [\_controlsVisibility](IText.md#_controlsvisibility)
- [\_currentCursorOpacity](IText.md#_currentcursoropacity)
- [\_fontSizeFraction](IText.md#_fontsizefraction)
- [\_fontSizeMult](IText.md#_fontsizemult)
- [\_forceClearCache](IText.md#_forceclearcache)
- [\_originalOriginX](IText.md#_originaloriginx)
- [\_originalOriginY](IText.md#_originaloriginy)
- [\_reNewline](IText.md#_renewline)
- [\_reSpace](IText.md#_respace)
- [\_reSpaceAndTab](IText.md#_respaceandtab)
- [\_reSpacesAndTabs](IText.md#_respacesandtabs)
- [\_reWords](IText.md#_rewords)
- [\_savedProps](IText.md#_savedprops)
- [\_scaling](IText.md#_scaling)
- [\_selectionDirection](IText.md#_selectiondirection)
- [\_text](IText.md#_text)
- [\_textLines](IText.md#_textlines)
- [\_transformDone](IText.md#_transformdone)
- [\_unwrappedTextLines](IText.md#_unwrappedtextlines)
- [aCoords](IText.md#acoords)
- [absolutePositioned](IText.md#absolutepositioned)
- [activeOn](IText.md#activeon)
- [angle](IText.md#angle)
- [backgroundColor](IText.md#backgroundcolor)
- [borderColor](IText.md#bordercolor)
- [borderDashArray](IText.md#borderdasharray)
- [borderOpacityWhenMoving](IText.md#borderopacitywhenmoving)
- [borderScaleFactor](IText.md#borderscalefactor)
- [cacheHeight](IText.md#cacheheight)
- [cacheTranslationX](IText.md#cachetranslationx)
- [cacheTranslationY](IText.md#cachetranslationy)
- [cacheWidth](IText.md#cachewidth)
- [caching](IText.md#caching)
- [canvas](IText.md#canvas)
- [centeredRotation](IText.md#centeredrotation)
- [centeredScaling](IText.md#centeredscaling)
- [charSpacing](IText.md#charspacing)
- [clipPath](IText.md#clippath)
- [clipPathId](IText.md#clippathid)
- [colorProperties](IText.md#colorproperties)
- [compositionColor](IText.md#compositioncolor)
- [compositionEnd](IText.md#compositionend)
- [compositionStart](IText.md#compositionstart)
- [controls](IText.md#controls)
- [cornerColor](IText.md#cornercolor)
- [cornerDashArray](IText.md#cornerdasharray)
- [cornerSize](IText.md#cornersize)
- [cornerStrokeColor](IText.md#cornerstrokecolor)
- [cornerStyle](IText.md#cornerstyle)
- [ctrlKeysMapDown](IText.md#ctrlkeysmapdown)
- [ctrlKeysMapUp](IText.md#ctrlkeysmapup)
- [cursorColor](IText.md#cursorcolor)
- [cursorDelay](IText.md#cursordelay)
- [cursorDuration](IText.md#cursorduration)
- [cursorOffsetCache](IText.md#cursoroffsetcache)
- [cursorWidth](IText.md#cursorwidth)
- [deltaY](IText.md#deltay)
- [direction](IText.md#direction)
- [dirty](IText.md#dirty)
- [draggableTextDelegate](IText.md#draggabletextdelegate)
- [editable](IText.md#editable)
- [editingBorderColor](IText.md#editingbordercolor)
- [evented](IText.md#evented)
- [excludeFromExport](IText.md#excludefromexport)
- [fill](IText.md#fill)
- [fillRule](IText.md#fillrule)
- [flipX](IText.md#flipx)
- [flipY](IText.md#flipy)
- [fontFamily](IText.md#fontfamily)
- [fontSize](IText.md#fontsize)
- [fontStyle](IText.md#fontstyle)
- [fontWeight](IText.md#fontweight)
- [globalCompositeOperation](IText.md#globalcompositeoperation)
- [group](IText.md#group)
- [hasBorders](IText.md#hasborders)
- [hasControls](IText.md#hascontrols)
- [height](IText.md#height)
- [hiddenTextarea](IText.md#hiddentextarea)
- [hiddenTextareaContainer](IText.md#hiddentextareacontainer)
- [hoverCursor](IText.md#hovercursor)
- [inCompositionMode](IText.md#incompositionmode)
- [includeDefaultValues](IText.md#includedefaultvalues)
- [initialized](IText.md#initialized)
- [inverted](IText.md#inverted)
- [isEditing](IText.md#isediting)
- [isMoving](IText.md#ismoving)
- [keysMap](IText.md#keysmap)
- [keysMapRtl](IText.md#keysmaprtl)
- [left](IText.md#left)
- [lineCoords](IText.md#linecoords)
- [lineHeight](IText.md#lineheight)
- [linethrough](IText.md#linethrough)
- [lockMovementX](IText.md#lockmovementx)
- [lockMovementY](IText.md#lockmovementy)
- [lockRotation](IText.md#lockrotation)
- [lockScalingFlip](IText.md#lockscalingflip)
- [lockScalingX](IText.md#lockscalingx)
- [lockScalingY](IText.md#lockscalingy)
- [lockSkewingX](IText.md#lockskewingx)
- [lockSkewingY](IText.md#lockskewingy)
- [matrixCache](IText.md#matrixcache)
- [minScaleLimit](IText.md#minscalelimit)
- [moveCursor](IText.md#movecursor)
- [noScaleCache](IText.md#noscalecache)
- [oCoords](IText.md#ocoords)
- [objectCaching](IText.md#objectcaching)
- [offsets](IText.md#offsets)
- [opacity](IText.md#opacity)
- [originX](IText.md#originx)
- [originY](IText.md#originy)
- [overline](IText.md#overline)
- [ownCaching](IText.md#owncaching)
- [ownMatrixCache](IText.md#ownmatrixcache)
- [padding](IText.md#padding)
- [paintFirst](IText.md#paintfirst)
- [path](IText.md#path)
- [pathAlign](IText.md#pathalign)
- [pathSide](IText.md#pathside)
- [pathStartOffset](IText.md#pathstartoffset)
- [perPixelTargetFind](IText.md#perpixeltargetfind)
- [scaleX](IText.md#scalex)
- [scaleY](IText.md#scaley)
- [selectable](IText.md#selectable)
- [selected](IText.md#selected)
- [selectionBackgroundColor](IText.md#selectionbackgroundcolor)
- [selectionColor](IText.md#selectioncolor)
- [selectionEnd](IText.md#selectionend)
- [selectionStart](IText.md#selectionstart)
- [shadow](IText.md#shadow)
- [skewX](IText.md#skewx)
- [skewY](IText.md#skewy)
- [snapAngle](IText.md#snapangle)
- [snapThreshold](IText.md#snapthreshold)
- [stroke](IText.md#stroke)
- [strokeDashArray](IText.md#strokedasharray)
- [strokeDashOffset](IText.md#strokedashoffset)
- [strokeLineCap](IText.md#strokelinecap)
- [strokeLineJoin](IText.md#strokelinejoin)
- [strokeMiterLimit](IText.md#strokemiterlimit)
- [strokeUniform](IText.md#strokeuniform)
- [strokeWidth](IText.md#strokewidth)
- [styles](IText.md#styles)
- [subscript](IText.md#subscript)
- [superscript](IText.md#superscript)
- [text](IText.md#text)
- [textAlign](IText.md#textalign)
- [textBackgroundColor](IText.md#textbackgroundcolor)
- [textLines](IText.md#textlines)
- [top](IText.md#top)
- [touchCornerSize](IText.md#touchcornersize)
- [transparentCorners](IText.md#transparentcorners)
- [underline](IText.md#underline)
- [visible](IText.md#visible)
- [width](IText.md#width)
- [zoomX](IText.md#zoomx)
- [zoomY](IText.md#zoomy)
- [ATTRIBUTE\_NAMES](IText.md#attribute_names)
- [\_styleProperties](IText.md#_styleproperties)
- [cacheProperties](IText.md#cacheproperties)
- [genericFonts](IText.md#genericfonts)
- [ownDefaults](IText.md#owndefaults)
- [stateProperties](IText.md#stateproperties)
- [textLayoutProperties](IText.md#textlayoutproperties)
- [type](IText.md#type)

### Accessors

- [type](IText.md#type-1)

### Methods

- [\_\_getCursorBoundariesOffsets](IText.md#__getcursorboundariesoffsets)
- [\_animate](IText.md#_animate)
- [\_animateCursor](IText.md#_animatecursor)
- [\_applyPatternForTransformedGradient](IText.md#_applypatternfortransformedgradient)
- [\_applyPatternGradientTransform](IText.md#_applypatterngradienttransform)
- [\_applyPatternGradientTransformText](IText.md#_applypatterngradienttransformtext)
- [\_calcTextareaPosition](IText.md#_calctextareaposition)
- [\_calculateCurrentDimensions](IText.md#_calculatecurrentdimensions)
- [\_clearCache](IText.md#_clearcache)
- [\_constrainScale](IText.md#_constrainscale)
- [\_createBaseClipPathSVGMarkup](IText.md#_createbaseclippathsvgmarkup)
- [\_createBaseSVGMarkup](IText.md#_createbasesvgmarkup)
- [\_createCacheCanvas](IText.md#_createcachecanvas)
- [\_deleteLineStyle](IText.md#_deletelinestyle)
- [\_deleteStyleDeclaration](IText.md#_deletestyledeclaration)
- [\_drawBorders](IText.md#_drawborders)
- [\_drawClipPath](IText.md#_drawclippath)
- [\_exitEditing](IText.md#_exitediting)
- [\_findCenterFromElement](IText.md#_findcenterfromelement)
- [\_findCrossPoints](IText.md#_findcrosspoints)
- [\_findTargetCorner](IText.md#_findtargetcorner)
- [\_fireSelectionChanged](IText.md#_fireselectionchanged)
- [\_getCacheCanvasDimensions](IText.md#_getcachecanvasdimensions)
- [\_getCoords](IText.md#_getcoords)
- [\_getCurrentCharIndex](IText.md#_getcurrentcharindex)
- [\_getCursorBoundaries](IText.md#_getcursorboundaries)
- [\_getCursorBoundariesOffsets](IText.md#_getcursorboundariesoffsets)
- [\_getFontDeclaration](IText.md#_getfontdeclaration)
- [\_getGraphemeBox](IText.md#_getgraphemebox)
- [\_getImageLines](IText.md#_getimagelines)
- [\_getIndexOnLine](IText.md#_getindexonline)
- [\_getLeftOffset](IText.md#_getleftoffset)
- [\_getLeftTopCoords](IText.md#_getlefttopcoords)
- [\_getLineLeftOffset](IText.md#_getlineleftoffset)
- [\_getLineStyle](IText.md#_getlinestyle)
- [\_getNonTransformedDimensions](IText.md#_getnontransformeddimensions)
- [\_getSelectionForOffset](IText.md#_getselectionforoffset)
- [\_getStyleDeclaration](IText.md#_getstyledeclaration)
- [\_getTopOffset](IText.md#_gettopoffset)
- [\_getTransformedDimensions](IText.md#_gettransformeddimensions)
- [\_getWidthBeforeCursor](IText.md#_getwidthbeforecursor)
- [\_getWidthOfCharSpacing](IText.md#_getwidthofcharspacing)
- [\_limitCacheSize](IText.md#_limitcachesize)
- [\_measureChar](IText.md#_measurechar)
- [\_measureLine](IText.md#_measureline)
- [\_mouseDownHandler](IText.md#_mousedownhandler)
- [\_mouseDownHandlerBefore](IText.md#_mousedownhandlerbefore)
- [\_move](IText.md#_move)
- [\_moveCursorLeftOrRight](IText.md#_movecursorleftorright)
- [\_moveCursorUpOrDown](IText.md#_movecursorupordown)
- [\_moveLeft](IText.md#_moveleft)
- [\_moveRight](IText.md#_moveright)
- [\_removeCacheCanvas](IText.md#_removecachecanvas)
- [\_removeDefaultValues](IText.md#_removedefaultvalues)
- [\_removeExtraneousStyles](IText.md#_removeextraneousstyles)
- [\_removeShadow](IText.md#_removeshadow)
- [\_render](IText.md#_render)
- [\_renderBackground](IText.md#_renderbackground)
- [\_renderChar](IText.md#_renderchar)
- [\_renderChars](IText.md#_renderchars)
- [\_renderControls](IText.md#_rendercontrols)
- [\_renderCursor](IText.md#_rendercursor)
- [\_renderFill](IText.md#_renderfill)
- [\_renderPaintInOrder](IText.md#_renderpaintinorder)
- [\_renderSelection](IText.md#_renderselection)
- [\_renderStroke](IText.md#_renderstroke)
- [\_renderText](IText.md#_rendertext)
- [\_renderTextCommon](IText.md#_rendertextcommon)
- [\_renderTextDecoration](IText.md#_rendertextdecoration)
- [\_renderTextFill](IText.md#_rendertextfill)
- [\_renderTextLine](IText.md#_rendertextline)
- [\_renderTextLinesBackground](IText.md#_rendertextlinesbackground)
- [\_renderTextStroke](IText.md#_rendertextstroke)
- [\_resetOrigin](IText.md#_resetorigin)
- [\_restoreEditingProps](IText.md#_restoreeditingprops)
- [\_saveEditingProps](IText.md#_saveeditingprops)
- [\_set](IText.md#_set)
- [\_setClippingProperties](IText.md#_setclippingproperties)
- [\_setEditingProps](IText.md#_seteditingprops)
- [\_setFillStyles](IText.md#_setfillstyles)
- [\_setGraphemeOnPath](IText.md#_setgraphemeonpath)
- [\_setLineDash](IText.md#_setlinedash)
- [\_setLineStyle](IText.md#_setlinestyle)
- [\_setObject](IText.md#_setobject)
- [\_setOpacity](IText.md#_setopacity)
- [\_setOptions](IText.md#_setoptions)
- [\_setOriginToCenter](IText.md#_setorigintocenter)
- [\_setScript](IText.md#_setscript)
- [\_setShadow](IText.md#_setshadow)
- [\_setStrokeStyles](IText.md#_setstrokestyles)
- [\_setStyleDeclaration](IText.md#_setstyledeclaration)
- [\_setTextStyles](IText.md#_settextstyles)
- [\_setupCompositeOperation](IText.md#_setupcompositeoperation)
- [\_splitText](IText.md#_splittext)
- [\_splitTextIntoLines](IText.md#_splittextintolines)
- [\_toSVG](IText.md#_tosvg)
- [\_updateAndFire](IText.md#_updateandfire)
- [\_updateCacheCanvas](IText.md#_updatecachecanvas)
- [\_updateTextarea](IText.md#_updatetextarea)
- [abortCursorAnimation](IText.md#abortcursoranimation)
- [addPaintOrder](IText.md#addpaintorder)
- [animate](IText.md#animate)
- [blur](IText.md#blur)
- [calcACoords](IText.md#calcacoords)
- [calcLineCoords](IText.md#calclinecoords)
- [calcOCoords](IText.md#calcocoords)
- [calcOwnMatrix](IText.md#calcownmatrix)
- [calcTextHeight](IText.md#calctextheight)
- [calcTextWidth](IText.md#calctextwidth)
- [calcTransformMatrix](IText.md#calctransformmatrix)
- [canDrop](IText.md#candrop)
- [cleanStyle](IText.md#cleanstyle)
- [clearContextTop](IText.md#clearcontexttop)
- [clone](IText.md#clone)
- [cloneAsImage](IText.md#cloneasimage)
- [complexity](IText.md#complexity)
- [containsPoint](IText.md#containspoint)
- [copy](IText.md#copy)
- [dispose](IText.md#dispose)
- [doubleClickHandler](IText.md#doubleclickhandler)
- [drawBorders](IText.md#drawborders)
- [drawCacheOnCanvas](IText.md#drawcacheoncanvas)
- [drawClipPathOnCache](IText.md#drawclippathoncache)
- [drawControls](IText.md#drawcontrols)
- [drawControlsConnectingLines](IText.md#drawcontrolsconnectinglines)
- [drawObject](IText.md#drawobject)
- [drawSelectionBackground](IText.md#drawselectionbackground)
- [enlargeSpaces](IText.md#enlargespaces)
- [enterEditing](IText.md#enterediting)
- [exitEditing](IText.md#exitediting)
- [findCommonAncestors](IText.md#findcommonancestors)
- [findLineBoundaryLeft](IText.md#findlineboundaryleft)
- [findLineBoundaryRight](IText.md#findlineboundaryright)
- [findWordBoundaryLeft](IText.md#findwordboundaryleft)
- [findWordBoundaryRight](IText.md#findwordboundaryright)
- [fire](IText.md#fire)
- [forEachControl](IText.md#foreachcontrol)
- [fromGraphemeToStringSelection](IText.md#fromgraphemetostringselection)
- [fromStringToGraphemeSelection](IText.md#fromstringtographemeselection)
- [get](IText.md#get)
- [get2DCursorLocation](IText.md#get2dcursorlocation)
- [getActiveControl](IText.md#getactivecontrol)
- [getAncestors](IText.md#getancestors)
- [getBoundingRect](IText.md#getboundingrect)
- [getCanvasRetinaScaling](IText.md#getcanvasretinascaling)
- [getCenterPoint](IText.md#getcenterpoint)
- [getCompleteStyleDeclaration](IText.md#getcompletestyledeclaration)
- [getCoords](IText.md#getcoords)
- [getCurrentCharColor](IText.md#getcurrentcharcolor)
- [getCurrentCharFontSize](IText.md#getcurrentcharfontsize)
- [getDownCursorOffset](IText.md#getdowncursoroffset)
- [getHeightOfChar](IText.md#getheightofchar)
- [getHeightOfLine](IText.md#getheightofline)
- [getLineWidth](IText.md#getlinewidth)
- [getObjectOpacity](IText.md#getobjectopacity)
- [getObjectScaling](IText.md#getobjectscaling)
- [getParent](IText.md#getparent)
- [getPointByOrigin](IText.md#getpointbyorigin)
- [getRelativeCenterPoint](IText.md#getrelativecenterpoint)
- [getRelativeX](IText.md#getrelativex)
- [getRelativeXY](IText.md#getrelativexy)
- [getRelativeY](IText.md#getrelativey)
- [getScaledHeight](IText.md#getscaledheight)
- [getScaledWidth](IText.md#getscaledwidth)
- [getSelectedText](IText.md#getselectedtext)
- [getSelectionStartFromPointer](IText.md#getselectionstartfrompointer)
- [getSelectionStyles](IText.md#getselectionstyles)
- [getStyleAtPosition](IText.md#getstyleatposition)
- [getSvgCommons](IText.md#getsvgcommons)
- [getSvgFilter](IText.md#getsvgfilter)
- [getSvgStyles](IText.md#getsvgstyles)
- [getSvgTransform](IText.md#getsvgtransform)
- [getTotalAngle](IText.md#gettotalangle)
- [getTotalObjectScaling](IText.md#gettotalobjectscaling)
- [getUpCursorOffset](IText.md#getupcursoroffset)
- [getValueOfPropertyAt](IText.md#getvalueofpropertyat)
- [getViewportTransform](IText.md#getviewporttransform)
- [getX](IText.md#getx)
- [getXY](IText.md#getxy)
- [getY](IText.md#gety)
- [graphemeSplit](IText.md#graphemesplit)
- [handleFiller](IText.md#handlefiller)
- [hasCommonAncestors](IText.md#hascommonancestors)
- [hasFill](IText.md#hasfill)
- [hasStroke](IText.md#hasstroke)
- [initBehavior](IText.md#initbehavior)
- [initDelayedCursor](IText.md#initdelayedcursor)
- [initDimensions](IText.md#initdimensions)
- [initHiddenTextarea](IText.md#inithiddentextarea)
- [insertCharStyleObject](IText.md#insertcharstyleobject)
- [insertChars](IText.md#insertchars)
- [insertNewStyleBlock](IText.md#insertnewstyleblock)
- [insertNewlineStyleObject](IText.md#insertnewlinestyleobject)
- [intersectsWithObject](IText.md#intersectswithobject)
- [intersectsWithRect](IText.md#intersectswithrect)
- [isCacheDirty](IText.md#iscachedirty)
- [isContainedWithinObject](IText.md#iscontainedwithinobject)
- [isContainedWithinRect](IText.md#iscontainedwithinrect)
- [isControlVisible](IText.md#iscontrolvisible)
- [isDescendantOf](IText.md#isdescendantof)
- [isEmptyStyles](IText.md#isemptystyles)
- [isEndOfWrapping](IText.md#isendofwrapping)
- [isInFrontOf](IText.md#isinfrontof)
- [isNotVisible](IText.md#isnotvisible)
- [isOnScreen](IText.md#isonscreen)
- [isOverlapping](IText.md#isoverlapping)
- [isPartiallyOnScreen](IText.md#ispartiallyonscreen)
- [isTripleClick](IText.md#istripleclick)
- [isType](IText.md#istype)
- [measureLine](IText.md#measureline)
- [missingNewlineOffset](IText.md#missingnewlineoffset)
- [mouseUpHandler](IText.md#mouseuphandler)
- [moveCursorDown](IText.md#movecursordown)
- [moveCursorLeft](IText.md#movecursorleft)
- [moveCursorLeftWithShift](IText.md#movecursorleftwithshift)
- [moveCursorLeftWithoutShift](IText.md#movecursorleftwithoutshift)
- [moveCursorRight](IText.md#movecursorright)
- [moveCursorRightWithShift](IText.md#movecursorrightwithshift)
- [moveCursorRightWithoutShift](IText.md#movecursorrightwithoutshift)
- [moveCursorUp](IText.md#movecursorup)
- [moveCursorWithShift](IText.md#movecursorwithshift)
- [moveCursorWithoutShift](IText.md#movecursorwithoutshift)
- [needsItsOwnCache](IText.md#needsitsowncache)
- [off](IText.md#off)
- [on](IText.md#on)
- [onCompositionEnd](IText.md#oncompositionend)
- [onCompositionStart](IText.md#oncompositionstart)
- [onCompositionUpdate](IText.md#oncompositionupdate)
- [onDeselect](IText.md#ondeselect)
- [onDragStart](IText.md#ondragstart)
- [onInput](IText.md#oninput)
- [onKeyDown](IText.md#onkeydown)
- [onKeyUp](IText.md#onkeyup)
- [onMouseDown](IText.md#onmousedown)
- [onSelect](IText.md#onselect)
- [once](IText.md#once)
- [paste](IText.md#paste)
- [removeChars](IText.md#removechars)
- [removeStyle](IText.md#removestyle)
- [removeStyleFromTo](IText.md#removestylefromto)
- [render](IText.md#render)
- [renderCache](IText.md#rendercache)
- [renderCursor](IText.md#rendercursor)
- [renderCursorAt](IText.md#rendercursorat)
- [renderCursorOrSelection](IText.md#rendercursororselection)
- [renderDragSourceEffect](IText.md#renderdragsourceeffect)
- [renderDropTargetEffect](IText.md#renderdroptargeteffect)
- [renderSelection](IText.md#renderselection)
- [restartCursorIfNeeded](IText.md#restartcursorifneeded)
- [rotate](IText.md#rotate)
- [scale](IText.md#scale)
- [scaleToHeight](IText.md#scaletoheight)
- [scaleToWidth](IText.md#scaletowidth)
- [searchWordBoundary](IText.md#searchwordboundary)
- [selectAll](IText.md#selectall)
- [selectLine](IText.md#selectline)
- [selectWord](IText.md#selectword)
- [set](IText.md#set)
- [setControlVisible](IText.md#setcontrolvisible)
- [setControlsVisibility](IText.md#setcontrolsvisibility)
- [setCoords](IText.md#setcoords)
- [setCursorByClick](IText.md#setcursorbyclick)
- [setOnGroup](IText.md#setongroup)
- [setOptions](IText.md#setoptions)
- [setPathInfo](IText.md#setpathinfo)
- [setPositionByOrigin](IText.md#setpositionbyorigin)
- [setRelativeX](IText.md#setrelativex)
- [setRelativeXY](IText.md#setrelativexy)
- [setRelativeY](IText.md#setrelativey)
- [setSelectionEnd](IText.md#setselectionend)
- [setSelectionStart](IText.md#setselectionstart)
- [setSelectionStartEndWithShift](IText.md#setselectionstartendwithshift)
- [setSelectionStyles](IText.md#setselectionstyles)
- [setSubscript](IText.md#setsubscript)
- [setSuperscript](IText.md#setsuperscript)
- [setX](IText.md#setx)
- [setXY](IText.md#setxy)
- [setY](IText.md#sety)
- [shiftLineStyles](IText.md#shiftlinestyles)
- [shouldCache](IText.md#shouldcache)
- [shouldStartDragging](IText.md#shouldstartdragging)
- [strokeBorders](IText.md#strokeborders)
- [styleHas](IText.md#stylehas)
- [toCanvasElement](IText.md#tocanvaselement)
- [toClipPathSVG](IText.md#toclippathsvg)
- [toDataURL](IText.md#todataurl)
- [toDatalessObject](IText.md#todatalessobject)
- [toJSON](IText.md#tojson)
- [toObject](IText.md#toobject)
- [toSVG](IText.md#tosvg)
- [toString](IText.md#tostring)
- [toggle](IText.md#toggle)
- [transform](IText.md#transform)
- [transformMatrixKey](IText.md#transformmatrixkey)
- [translateToCenterPoint](IText.md#translatetocenterpoint)
- [translateToGivenOrigin](IText.md#translatetogivenorigin)
- [translateToOriginPoint](IText.md#translatetooriginpoint)
- [tripleClickHandler](IText.md#tripleclickhandler)
- [updateFromTextArea](IText.md#updatefromtextarea)
- [updateSelectionOnMouseMove](IText.md#updateselectiononmousemove)
- [updateTextareaPosition](IText.md#updatetextareaposition)
- [willDrawShadow](IText.md#willdrawshadow)
- [\_fromObject](IText.md#_fromobject)
- [fromElement](IText.md#fromelement)
- [fromObject](IText.md#fromobject)
- [getDefaults](IText.md#getdefaults)

## Constructors

### constructor

• **new IText**<`Props`, `SProps`, `EventSpec`\>(`text`, `options?`)

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](../modules.md#toptions)<[`ITextProps`](../interfaces/ITextProps.md)\> = `Partial`<[`ITextProps`](../interfaces/ITextProps.md)\> |
| `SProps` | extends [`SerializedITextProps`](../interfaces/SerializedITextProps.md) = [`SerializedITextProps`](../interfaces/SerializedITextProps.md) |
| `EventSpec` | extends [`ObjectEvents`](../interfaces/ObjectEvents.md)<`EventSpec`\> & { `changed`: { `action`: `string` ; `index`: `number`  } ; `editing:entered`: { `e`: [`TPointerEvent`](../modules.md#tpointerevent)  } ; `editing:exited`: `never` ; `selection:changed`: `never` ; `tripleclick`: [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>  } = `ITextEvents` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text string |
| `options?` | `Props` | Options object |

#### Overrides

ITextClickBehavior&lt;Props, SProps, EventSpec\&gt;.constructor

#### Defined in

[src/shapes/IText/IText.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L219)

## Properties

### CACHE\_FONT\_SIZE

• `Private` `Readonly` **CACHE\_FONT\_SIZE**: `number`

use this size when measuring text. To avoid IE11 rounding errors

**`Default`**

```ts
@readonly
@private
```

#### Inherited from

ITextClickBehavior.CACHE\_FONT\_SIZE

#### Defined in

[src/shapes/Text/Text.ts:380](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L380)

___

### MIN\_TEXT\_WIDTH

• **MIN\_TEXT\_WIDTH**: `number`

contains the min text width to avoid getting 0

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.MIN\_TEXT\_WIDTH

#### Defined in

[src/shapes/Text/Text.ts:387](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L387)

___

### \_\_charBounds

• `Protected` **\_\_charBounds**: [`GraphemeBBox`](../modules.md#graphemebbox)[][] = `[]`

contains characters bounding boxes
This variable is considered to be protected.
But for how mixins are implemented right now, we can't leave it private

#### Inherited from

ITextClickBehavior.\_\_charBounds

#### Defined in

[src/shapes/Text/Text.ts:371](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L371)

___

### \_\_corner

• `Optional` **\_\_corner**: `string`

keeps the value of the last hovered corner during mouse move.
0 is no corner, or 'mt', 'ml', 'mtr' etc..
It should be private, but there is no harm in using it as
a read-only property.
this isn't cleaned automatically. Non selected objects may have wrong values

#### Inherited from

ITextClickBehavior.\_\_corner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_lineHeights

• **\_\_lineHeights**: `number`[]

#### Inherited from

ITextClickBehavior.\_\_lineHeights

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L407)

___

### \_\_lineWidths

• **\_\_lineWidths**: `number`[]

#### Inherited from

ITextClickBehavior.\_\_lineWidths

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L408)

___

### \_\_owningGroup

• `Optional` **\_\_owningGroup**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

ITextClickBehavior.\_\_owningGroup

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L45)

___

### \_\_selectionStartOnMouseDown

• `Protected` **\_\_selectionStartOnMouseDown**: `number`

#### Inherited from

ITextClickBehavior.\_\_selectionStartOnMouseDown

#### Defined in

[src/shapes/IText/ITextBehavior.ts:71](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L71)

___

### \_cacheCanvas

• `Optional` `Private` **\_cacheCanvas**: `HTMLCanvasElement`

A reference to the HTMLCanvasElement that is used to contain the cache of the object
this canvas element is resized and cleared as needed
Is marked private, you can read it, don't use it since it is handled by fabric
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.\_cacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:183](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L183)

___

### \_cacheContext

• `Private` **\_cacheContext**: ``null`` \| `CanvasRenderingContext2D` = `null`

Quick access for the _cacheCanvas rendering context
This is part of the objectCaching feature
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.\_cacheContext

#### Defined in

[src/shapes/Object/Object.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L172)

___

### \_controlsVisibility

• **\_controlsVisibility**: `Record`<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

ITextClickBehavior.\_controlsVisibility

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_currentCursorOpacity

• `Protected` **\_currentCursorOpacity**: `number` = `1`

#### Inherited from

ITextClickBehavior.\_currentCursorOpacity

#### Defined in

[src/shapes/IText/ITextBehavior.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L69)

___

### \_fontSizeFraction

• `Private` **\_fontSizeFraction**: `number`

#### Inherited from

ITextClickBehavior.\_fontSizeFraction

#### Defined in

[src/shapes/Text/Text.ts:323](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L323)

___

### \_fontSizeMult

• **\_fontSizeMult**: `number`

Text Line proportion to font Size (in pixels)

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.\_fontSizeMult

#### Defined in

[src/shapes/Text/Text.ts:335](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L335)

___

### \_forceClearCache

• `Protected` **\_forceClearCache**: `boolean`

#### Inherited from

ITextClickBehavior.\_forceClearCache

#### Defined in

[src/shapes/Text/StyledText.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L25)

___

### \_originalOriginX

• `Optional` **\_originalOriginX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

ITextClickBehavior.\_originalOriginX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L39)

___

### \_originalOriginY

• `Optional` **\_originalOriginY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

ITextClickBehavior.\_originalOriginY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L41)

___

### \_reNewline

• `Private` **\_reNewline**: `RegExp`

#### Inherited from

ITextClickBehavior.\_reNewline

#### Defined in

[src/shapes/Text/Text.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L140)

___

### \_reSpace

• `Protected` **\_reSpace**: `RegExp`

#### Inherited from

ITextClickBehavior.\_reSpace

#### Defined in

[src/shapes/IText/ITextBehavior.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L66)

___

### \_reSpaceAndTab

• `Private` **\_reSpaceAndTab**: `RegExp`

Use this regular expression to filter for whitespace that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

ITextClickBehavior.\_reSpaceAndTab

#### Defined in

[src/shapes/Text/Text.ts:154](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L154)

___

### \_reSpacesAndTabs

• `Private` **\_reSpacesAndTabs**: `RegExp`

Use this regular expression to filter for whitespaces that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

ITextClickBehavior.\_reSpacesAndTabs

#### Defined in

[src/shapes/Text/Text.ts:147](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L147)

___

### \_reWords

• `Private` **\_reWords**: `RegExp`

Use this regular expression to filter consecutive groups of non spaces.
Mostly used when text is 'justify' aligned.

#### Inherited from

ITextClickBehavior.\_reWords

#### Defined in

[src/shapes/Text/Text.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L161)

___

### \_savedProps

• `Protected` `Optional` **\_savedProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `borderColor` | `string` |
| `defaultCursor?` | `string` |
| `hasControls` | `boolean` |
| `hoverCursor` | ``null`` \| `string` |
| `lockMovementX` | `boolean` |
| `lockMovementY` | `boolean` |
| `moveCursor?` | `string` |
| `selectable` | `boolean` |

#### Inherited from

ITextClickBehavior.\_savedProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L75)

___

### \_scaling

• `Optional` **\_scaling**: `boolean`

A boolean used from the gesture module to keep tracking of a scaling
action when there is no scaling transform in place.
This is an edge case and is used twice in all codebase.
Probably added to keep track of some performance issues

**`TODO`**

use git blame to investigate why it was added
DON'T USE IT. WE WILL TRY TO REMOVE IT

#### Inherited from

ITextClickBehavior.\_scaling

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_selectionDirection

• `Protected` **\_selectionDirection**: ``null`` \| ``"left"`` \| ``"right"``

#### Inherited from

ITextClickBehavior.\_selectionDirection

#### Defined in

[src/shapes/IText/ITextBehavior.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L85)

___

### \_text

• **\_text**: `string`[]

#### Inherited from

ITextClickBehavior.\_text

#### Defined in

[src/shapes/Text/Text.ts:405](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L405)

___

### \_textLines

• **\_textLines**: `string`[][]

same as textlines, but each line is an array of graphemes as split by splitByGrapheme

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.\_textLines

#### Defined in

[src/shapes/Text/Text.ts:402](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L402)

___

### \_transformDone

• `Optional` `Private` **\_transformDone**: `boolean`

Private. indicates if the object inside a group is on a transformed context or not
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.\_transformDone

#### Defined in

[src/shapes/Object/Object.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L263)

___

### \_unwrappedTextLines

• **\_unwrappedTextLines**: `string`[][]

#### Inherited from

ITextClickBehavior.\_unwrappedTextLines

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L404)

___

### aCoords

• **aCoords**: [`TCornerPoint`](../modules.md#tcornerpoint)

Describe object's corner position in canvas object absolute coordinates
properties are tl,tr,bl,br and describe the four main corner.
each property is an object with x, y, instance of Fabric.Point.
The coordinates depends from this properties: width, height, scaleX, scaleY
skewX, skewY, angle, strokeWidth, top, left.
Those coordinates are useful to understand where an object is. They get updated
with lineCoords or oCoords in interactive cases but they do not need to be updated when zoom or panning change.
The coordinates get updated with

**`Method`**

setCoords.
You can calculate them without updating with

**`Method`**

calcACoords();

#### Inherited from

ITextClickBehavior.aCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L67)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

#### Inherited from

ITextClickBehavior.absolutePositioned

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L136)

___

### activeOn

• **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

ITextClickBehavior.activeOn

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

ITextClickBehavior.angle

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

• **backgroundColor**: `string`

#### Inherited from

ITextClickBehavior.backgroundColor

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L123)

___

### borderColor

• **borderColor**: `string`

#### Inherited from

ITextClickBehavior.borderColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

ITextClickBehavior.borderDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

#### Inherited from

ITextClickBehavior.borderOpacityWhenMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

#### Inherited from

ITextClickBehavior.borderScaleFactor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L84)

___

### cacheHeight

• `Optional` `Private` **cacheHeight**: `number`

Size of the cache canvas, height
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.cacheHeight

#### Defined in

[src/shapes/Object/Object.ts:201](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L201)

___

### cacheTranslationX

• `Optional` `Private` **cacheTranslationX**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.cacheTranslationX

#### Defined in

[src/shapes/Object/Object.ts:228](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L228)

___

### cacheTranslationY

• `Optional` `Private` **cacheTranslationY**: `number`

translation of the cacheCanvas away from the center, for subpixel accuracy and crispness
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.cacheTranslationY

#### Defined in

[src/shapes/Object/Object.ts:237](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L237)

___

### cacheWidth

• `Optional` `Private` **cacheWidth**: `number`

Size of the cache canvas, width
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.cacheWidth

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L192)

___

### caching

• **caching**: `boolean`

Indicates whether internal text char widths can be cached

**`Default`**

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:197](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L197)

___

### canvas

• `Optional` **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

ITextClickBehavior.canvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

• **centeredRotation**: `boolean`

#### Inherited from

ITextClickBehavior.centeredRotation

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L137)

___

### centeredScaling

• **centeredScaling**: ``false``

#### Inherited from

ITextClickBehavior.centeredScaling

#### Defined in

[src/shapes/Object/InteractiveObject.ts:58](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L58)

___

### charSpacing

• **charSpacing**: `number`

additional space between characters
expressed in thousands of em unit

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.charSpacing

#### Defined in

[src/shapes/Text/Text.ts:343](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L343)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

ITextClickBehavior.clipPath

#### Defined in

[src/shapes/Object/Object.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L134)

___

### clipPathId

• `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

ITextClickBehavior.clipPathId

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

• **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

ITextClickBehavior.colorProperties

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L20)

___

### compositionColor

• **compositionColor**: `string`

#### Defined in

[src/shapes/IText/IText.ts:190](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L190)

___

### compositionEnd

• **compositionEnd**: `number`

#### Overrides

ITextClickBehavior.compositionEnd

#### Defined in

[src/shapes/IText/IText.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L129)

___

### compositionStart

• **compositionStart**: `number`

#### Overrides

ITextClickBehavior.compositionStart

#### Defined in

[src/shapes/IText/IText.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L127)

___

### controls

• **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

ITextClickBehavior.controls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

• **cornerColor**: `string`

#### Inherited from

ITextClickBehavior.cornerColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

ITextClickBehavior.cornerDashArray

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

• **cornerSize**: `number`

#### Inherited from

ITextClickBehavior.cornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

#### Inherited from

ITextClickBehavior.cornerStrokeColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

ITextClickBehavior.cornerStyle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L77)

___

### ctrlKeysMapDown

• **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

ITextClickBehavior.ctrlKeysMapDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:42](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L42)

___

### ctrlKeysMapUp

• **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

ITextClickBehavior.ctrlKeysMapUp

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L37)

___

### cursorColor

• **cursorColor**: `string`

Color of text cursor color in editing mode.
if not set (default) will take color from the text.
if set to a color value that fabric can understand, it will
be used instead of the color of the text at the current position.

**`Default`**

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:174](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L174)

___

### cursorDelay

• **cursorDelay**: `number`

Delay between cursor blink (in ms)

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.cursorDelay

#### Defined in

[src/shapes/IText/IText.ts:181](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L181)

___

### cursorDuration

• **cursorDuration**: `number`

Duration of cursor fade in (in ms)

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.cursorDuration

#### Defined in

[src/shapes/IText/IText.ts:188](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L188)

___

### cursorOffsetCache

• `Protected` **cursorOffsetCache**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `left?` | `number` |
| `top?` | `number` |

#### Inherited from

ITextClickBehavior.cursorOffsetCache

#### Defined in

[src/shapes/IText/ITextBehavior.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L74)

___

### cursorWidth

• **cursorWidth**: `number`

Width of cursor (in px)

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.cursorWidth

#### Defined in

[src/shapes/IText/IText.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L164)

___

### deltaY

• **deltaY**: `number`

Baseline shift, styles only, keep at 0 for the main text object

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.deltaY

#### Defined in

[src/shapes/Text/Text.ts:350](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L350)

___

### direction

• **direction**: `CanvasDirection`

WARNING: EXPERIMENTAL. NOT SUPPORTED YET
determine the direction of the text.
This has to be set manually together with textAlign and originX for proper
experience.
some interesting link for the future
https://www.w3.org/International/questions/qa-bidi-unicode-controls

**`Since`**

4.5.0

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.direction

#### Defined in

[src/shapes/Text/Text.ts:363](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L363)

___

### dirty

• **dirty**: `boolean`

When set to `true`, object's cache will be rerendered next render call.
since 1.7.0

**`Default`**

```ts
true
```

#### Inherited from

ITextClickBehavior.dirty

#### Defined in

[src/shapes/Object/Object.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L162)

___

### draggableTextDelegate

• `Protected` **draggableTextDelegate**: `DraggableTextDelegate`

#### Inherited from

ITextClickBehavior.draggableTextDelegate

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L34)

___

### editable

• **editable**: `boolean`

Indicates whether a text can be edited

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.editable

#### Defined in

[src/shapes/IText/IText.ts:150](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L150)

___

### editingBorderColor

• **editingBorderColor**: `string`

Border color of text object while it's in editing mode

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.editingBorderColor

#### Defined in

[src/shapes/IText/IText.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L157)

___

### evented

• **evented**: `boolean`

#### Inherited from

ITextClickBehavior.evented

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

#### Inherited from

ITextClickBehavior.excludeFromExport

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L130)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

ITextClickBehavior.fill

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L113)

___

### fillRule

• **fillRule**: `CanvasFillRule`

#### Inherited from

ITextClickBehavior.fillRule

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L114)

___

### flipX

• **flipX**: `boolean`

#### Inherited from

ITextClickBehavior.flipX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

ITextClickBehavior.flipY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:22](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L22)

___

### fontFamily

• **fontFamily**: `string`

Font family

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontFamily

#### Defined in

[src/shapes/Text/Text.ts:184](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L184)

___

### fontSize

• **fontSize**: `number`

Font size (in pixels)

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontSize

#### Defined in

[src/shapes/Text/Text.ts:170](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L170)

___

### fontStyle

• **fontStyle**: `string`

Font style . Possible values: "", "normal", "italic" or "oblique".

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontStyle

#### Defined in

[src/shapes/Text/Text.ts:220](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L220)

___

### fontWeight

• **fontWeight**: `string`

Font weight (e.g. bold, normal, 400, 600, 800)

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.fontWeight

#### Defined in

[src/shapes/Text/Text.ts:177](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L177)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

ITextClickBehavior.globalCompositeOperation

#### Defined in

[src/shapes/Object/Object.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L122)

___

### group

• `Optional` `Private` **group**: [`Group`](Group.md)

A reference to the parent of the object, usually a Group

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.group

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L245)

___

### hasBorders

• **hasBorders**: `boolean`

#### Inherited from

ITextClickBehavior.hasBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

• **hasControls**: `boolean`

#### Inherited from

ITextClickBehavior.hasControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

• **height**: `number`

#### Inherited from

ITextClickBehavior.height

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hiddenTextarea

• **hiddenTextarea**: ``null`` \| `HTMLTextAreaElement`

#### Inherited from

ITextClickBehavior.hiddenTextarea

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:44](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L44)

___

### hiddenTextareaContainer

• `Optional` **hiddenTextareaContainer**: ``null`` \| `HTMLElement`

DOM container to append the hiddenTextarea.
An alternative to attaching to the document.body.
Useful to reduce laggish redraw of the full document.body tree and
also with modals event capturing that won't let the textarea take focus.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.hiddenTextareaContainer

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L54)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

#### Inherited from

ITextClickBehavior.hoverCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L93)

___

### inCompositionMode

• `Protected` **inCompositionMode**: `boolean`

Helps determining when the text is in composition, so that the cursor
rendering is altered.

#### Inherited from

ITextClickBehavior.inCompositionMode

#### Defined in

[src/shapes/IText/ITextBehavior.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L64)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

#### Inherited from

ITextClickBehavior.includeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L129)

___

### initialized

• `Optional` **initialized**: ``true``

#### Inherited from

ITextClickBehavior.initialized

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L409)

___

### inverted

• **inverted**: `boolean`

#### Inherited from

ITextClickBehavior.inverted

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L135)

___

### isEditing

• **isEditing**: `boolean`

Indicates whether text is in editing mode

**`Default`**

```ts

```

#### Overrides

ITextClickBehavior.isEditing

#### Defined in

[src/shapes/IText/IText.ts:143](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L143)

___

### isMoving

• `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

ITextClickBehavior.isMoving

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L134)

___

### keysMap

• **keysMap**: `TKeyMapIText`

For functionalities on keyDown
Map a special key to a function of the instance/prototype
If you need different behavior for ESC or TAB or arrows, you have to change
this map setting the name of a function that you build on the IText or
your prototype.
the map change will affect all Instances unless you need for only some text Instances
in that case you have to clone this object and assign your Instance.
this.keysMap = Object.assign({}, this.keysMap);
The function must be in IText.prototype.myFunction And will receive event as args[0]

#### Inherited from

ITextClickBehavior.keysMap

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L30)

___

### keysMapRtl

• **keysMapRtl**: `TKeyMapIText`

#### Inherited from

ITextClickBehavior.keysMapRtl

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L32)

___

### left

• **left**: `number`

#### Inherited from

ITextClickBehavior.left

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L18)

___

### lineCoords

• **lineCoords**: [`TCornerPoint`](../modules.md#tcornerpoint)

Describe object's corner position in canvas element coordinates.
includes padding. Used of object detection.
set and refreshed with setCoords.
Those could go away

**`Todo`**

investigate how to get rid of those

#### Inherited from

ITextClickBehavior.lineCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L76)

___

### lineHeight

• **lineHeight**: `number`

Line height

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.lineHeight

#### Defined in

[src/shapes/Text/Text.ts:227](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L227)

___

### linethrough

• **linethrough**: `boolean`

Text decoration linethrough.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.linethrough

#### Defined in

[src/shapes/Text/Text.ts:205](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L205)

___

### lockMovementX

• **lockMovementX**: `boolean`

#### Inherited from

ITextClickBehavior.lockMovementX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

• **lockMovementY**: `boolean`

#### Inherited from

ITextClickBehavior.lockMovementY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

• **lockRotation**: `boolean`

#### Inherited from

ITextClickBehavior.lockRotation

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

#### Inherited from

ITextClickBehavior.lockScalingFlip

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

• **lockScalingX**: `boolean`

#### Inherited from

ITextClickBehavior.lockScalingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

• **lockScalingY**: `boolean`

#### Inherited from

ITextClickBehavior.lockScalingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

#### Inherited from

ITextClickBehavior.lockSkewingX

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

#### Inherited from

ITextClickBehavior.lockSkewingY

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

• `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

ITextClickBehavior.matrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L86)

___

### minScaleLimit

• **minScaleLimit**: `number`

#### Inherited from

ITextClickBehavior.minScaleLimit

#### Defined in

[src/shapes/Object/Object.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L108)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

#### Inherited from

ITextClickBehavior.moveCursor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

• **noScaleCache**: `boolean`

#### Inherited from

ITextClickBehavior.noScaleCache

#### Defined in

[src/shapes/Object/InteractiveObject.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L57)

___

### oCoords

• **oCoords**: `Record`<`string`, `TOCoord`\>

Describe object's corner position in canvas element coordinates.
properties are depending on control keys and padding the main controls.
each property is an object with x, y and corner.
The `corner` property contains in a similar manner the 4 points of the
interactive area of the corner.
The coordinates depends from the controls positionHandler and are used
to draw and locate controls

#### Inherited from

ITextClickBehavior.oCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

• **objectCaching**: `boolean`

#### Inherited from

ITextClickBehavior.objectCaching

#### Defined in

[src/shapes/Object/Object.ts:132](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L132)

___

### offsets

• `Private` **offsets**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `linethrough` | `number` |
| `overline` | `number` |
| `underline` | `number` |

#### Inherited from

ITextClickBehavior.offsets

#### Defined in

[src/shapes/Text/Text.ts:328](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L328)

___

### opacity

• **opacity**: `number`

#### Inherited from

ITextClickBehavior.opacity

#### Defined in

[src/shapes/Object/Object.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L110)

___

### originX

• **originX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

ITextClickBehavior.originX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

• **originY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

ITextClickBehavior.originY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:28](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L28)

___

### overline

• **overline**: `boolean`

Text decoration overline.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.overline

#### Defined in

[src/shapes/Text/Text.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L198)

___

### ownCaching

• `Optional` `Private` **ownCaching**: `boolean`

Indicate if the object is sitting on a cache dedicated to it
or is part of a larger cache for many object ( a group for example)

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.ownCaching

#### Defined in

[src/shapes/Object/Object.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L254)

___

### ownMatrixCache

• `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

ITextClickBehavior.ownMatrixCache

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L81)

___

### padding

• **padding**: `number`

#### Inherited from

ITextClickBehavior.padding

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L54)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

ITextClickBehavior.paintFirst

#### Defined in

[src/shapes/Object/Object.ts:112](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L112)

___

### path

• `Optional` **path**: [`Path`](Path.md)<`Partial`<[`PathProps`](../interfaces/PathProps.md)\>, [`SerializedPathProps`](../interfaces/SerializedPathProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Path that the text should follow.
since 4.6.0 the path will be drawn automatically.
if you want to make the path visible, give it a stroke and strokeWidth or fill value
if you want it to be hidden, assign visible = false to the path.
This feature is in BETA, and SVG import/export is not yet supported.

**`Example`**

```ts
const textPath = new Text('Text on a path', {
    top: 150,
    left: 150,
    textAlign: 'center',
    charSpacing: -50,
    path: new Path('M 0 0 C 50 -100 150 -100 200 0', {
        strokeWidth: 1,
        visible: false
    }),
    pathSide: 'left',
    pathStartOffset: 0
});
```

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.path

#### Defined in

[src/shapes/Text/Text.ts:292](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L292)

___

### pathAlign

• **pathAlign**: [`TPathAlign`](../modules.md#tpathalign)

How text is aligned to the path. This property determines
the perpendicular position of each character relative to the path.
(one of "baseline", "center", "ascender", "descender")
This feature is in BETA, and its behavior may change

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.pathAlign

#### Defined in

[src/shapes/Text/Text.ts:318](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L318)

___

### pathSide

• **pathSide**: [`TPathSide`](../modules.md#tpathside)

Which side of the path the text should be drawn on.
Only used when text has a path

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.pathSide

#### Defined in

[src/shapes/Text/Text.ts:308](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L308)

___

### pathStartOffset

• **pathStartOffset**: `number`

Offset amount for text path starting position
Only used when text has a path

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.pathStartOffset

#### Defined in

[src/shapes/Text/Text.ts:300](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L300)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

#### Inherited from

ITextClickBehavior.perPixelTargetFind

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

ITextClickBehavior.scaleX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

ITextClickBehavior.scaleY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

• **selectable**: `boolean`

#### Inherited from

ITextClickBehavior.selectable

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L88)

___

### selected

• `Protected` **selected**: `boolean`

#### Inherited from

ITextClickBehavior.selected

#### Defined in

[src/shapes/IText/ITextBehavior.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L73)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

#### Inherited from

ITextClickBehavior.selectionBackgroundColor

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L86)

___

### selectionColor

• **selectionColor**: `string`

Color of text selection

**`Default`**

```ts

```

#### Defined in

[src/shapes/IText/IText.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L136)

___

### selectionEnd

• **selectionEnd**: `number`

Index where text selection ends

**`Default`**

```ts

```

#### Implementation of

UniqueITextProps.selectionEnd

#### Overrides

ITextClickBehavior.selectionEnd

#### Defined in

[src/shapes/IText/IText.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L125)

___

### selectionStart

• **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

**`Default`**

```ts

```

#### Implementation of

UniqueITextProps.selectionStart

#### Overrides

ITextClickBehavior.selectionStart

#### Defined in

[src/shapes/IText/IText.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L118)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](Shadow.md)

#### Inherited from

ITextClickBehavior.shadow

#### Defined in

[src/shapes/Object/Object.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L125)

___

### skewX

• **skewX**: `number`

#### Inherited from

ITextClickBehavior.skewX

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

• **skewY**: `number`

#### Inherited from

ITextClickBehavior.skewY

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

ITextClickBehavior.snapAngle

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

ITextClickBehavior.snapThreshold

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L61)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

ITextClickBehavior.stroke

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L115)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

ITextClickBehavior.strokeDashArray

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L116)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

#### Inherited from

ITextClickBehavior.strokeDashOffset

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L117)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

#### Inherited from

ITextClickBehavior.strokeLineCap

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L118)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

ITextClickBehavior.strokeLineJoin

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L119)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

#### Inherited from

ITextClickBehavior.strokeMiterLimit

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L120)

___

### strokeUniform

• **strokeUniform**: `boolean`

#### Inherited from

ITextClickBehavior.strokeUniform

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

ITextClickBehavior.strokeWidth

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L30)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle)

#### Inherited from

ITextClickBehavior.styles

#### Defined in

[src/shapes/Text/Text.ts:268](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L268)

___

### subscript

• **subscript**: `Object`

Subscript schema object (minimum overlap)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseline` | `number` | baseline-shift factor (downwards) **`Default`** ```ts 0.11 ``` |
| `size` | `number` | fontSize factor **`Default`** ```ts 0.6 ``` |

#### Inherited from

ITextClickBehavior.subscript

#### Defined in

[src/shapes/Text/Text.ts:248](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L248)

___

### superscript

• **superscript**: `Object`

Superscript schema object (minimum overlap)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `baseline` | `number` | baseline-shift factor (upwards) **`Default`** ```ts -0.35 ``` |
| `size` | `number` | fontSize factor **`Default`** ```ts 0.6 ``` |

#### Inherited from

ITextClickBehavior.superscript

#### Defined in

[src/shapes/Text/Text.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L232)

___

### text

• **text**: `string`

#### Inherited from

ITextClickBehavior.text

#### Defined in

[src/shapes/Text/Text.ts:163](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L163)

___

### textAlign

• **textAlign**: `string`

Text alignment. Possible values: "left", "center", "right", "justify",
"justify-left", "justify-center" or "justify-right".

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.textAlign

#### Defined in

[src/shapes/Text/Text.ts:213](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L213)

___

### textBackgroundColor

• **textBackgroundColor**: `string`

Background color of text lines

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.textBackgroundColor

#### Defined in

[src/shapes/Text/Text.ts:266](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L266)

___

### textLines

• **textLines**: `string`[]

contains the the text of the object, divided in lines as they are displayed
on screen. Wrapping will divide the text independently of line breaks

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.textLines

#### Defined in

[src/shapes/Text/Text.ts:395](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L395)

___

### top

• **top**: `number`

#### Inherited from

ITextClickBehavior.top

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

• **touchCornerSize**: `number`

#### Inherited from

ITextClickBehavior.touchCornerSize

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

• **transparentCorners**: `boolean`

#### Inherited from

ITextClickBehavior.transparentCorners

#### Defined in

[src/shapes/Object/InteractiveObject.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L74)

___

### underline

• **underline**: `boolean`

Text decoration underline.

**`Default`**

```ts

```

#### Inherited from

ITextClickBehavior.underline

#### Defined in

[src/shapes/Text/Text.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L191)

___

### visible

• **visible**: `boolean`

#### Inherited from

ITextClickBehavior.visible

#### Defined in

[src/shapes/Object/Object.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L127)

___

### width

• **width**: `number`

#### Inherited from

ITextClickBehavior.width

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:19](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L19)

___

### zoomX

• `Optional` `Private` **zoomX**: `number`

zoom level used on the cacheCanvas to draw the cache, X axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.zoomX

#### Defined in

[src/shapes/Object/Object.ts:210](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L210)

___

### zoomY

• `Optional` `Private` **zoomY**: `number`

zoom level used on the cacheCanvas to draw the cache, Y axe
since 1.7.0

**`Default`**

```ts
undefined
@private
```

#### Inherited from

ITextClickBehavior.zoomY

#### Defined in

[src/shapes/Object/Object.ts:219](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L219)

___

### ATTRIBUTE\_NAMES

▪ `Static` **ATTRIBUTE\_NAMES**: `string`[]

List of attribute names to account for when parsing SVG element (used by [fromElement](Text.md#fromelement))

**`Static`**

**`Member Of`**

Text
@see: http://www.w3.org/TR/SVG/text.html#TextElement

#### Inherited from

ITextClickBehavior.ATTRIBUTE\_NAMES

#### Defined in

[src/shapes/Text/Text.ts:1800](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1800)

___

### \_styleProperties

▪ `Static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

ITextClickBehavior.\_styleProperties

#### Defined in

[src/shapes/Text/StyledText.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L26)

___

### cacheProperties

▪ `Static` **cacheProperties**: `string`[]

#### Inherited from

ITextClickBehavior.cacheProperties

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L411)

___

### genericFonts

▪ `Static` **genericFonts**: `string`[]

#### Inherited from

ITextClickBehavior.genericFonts

#### Defined in

[src/shapes/Text/Text.ts:1784](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1784)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `iTextDefaultValues`

#### Overrides

ITextClickBehavior.ownDefaults

#### Defined in

[src/shapes/IText/IText.ts:199](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L199)

___

### stateProperties

▪ `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

ITextClickBehavior.stateProperties

#### Defined in

[src/shapes/Object/Object.ts:145](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L145)

___

### textLayoutProperties

▪ `Static` `Protected` **textLayoutProperties**: `string`[] = `textLayoutProperties`

Properties that requires a text layout recalculation when changed

#### Inherited from

ITextClickBehavior.textLayoutProperties

#### Defined in

[src/shapes/Text/Text.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L135)

___

### type

▪ `Static` **type**: `string` = `'IText'`

#### Overrides

ITextClickBehavior.type

#### Defined in

[src/shapes/IText/IText.ts:205](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L205)

## Accessors

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Overrides

ITextClickBehavior.type

#### Defined in

[src/shapes/IText/IText.ts:207](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L207)

## Methods

### \_\_getCursorBoundariesOffsets

▸ `Private` **__getCursorBoundariesOffsets**(`index`): `Object`

Calculates cursor left/top offset relative to instance's center point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index from start |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/shapes/IText/IText.ts:434](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L434)

___

### \_animate

▸ `Private` **_animate**<`T`\>(`key`, `endValue`, `options?`): [`TAnimation`](../modules/util.md#tanimation)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](../modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | Property to animate |
| `endValue` | `T` | - |
| `options?` | `Partial`<[`AnimationOptions`](../modules/util.md#animationoptions)<`T`\>\> | Options object |

#### Returns

[`TAnimation`](../modules/util.md#tanimation)<`T`\>

#### Inherited from

ITextClickBehavior.\_animate

#### Defined in

[src/shapes/Object/AnimatableObject.ts:50](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L50)

___

### \_animateCursor

▸ `Private` **_animateCursor**(`«destructured»`): `ValueAnimation`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `delay?` | `number` |
| › `duration` | `number` |
| › `onComplete?` | [`TOnAnimationChangeCallback`](../modules/util.md#tonanimationchangecallback)<`number`, `void`\> |
| › `toValue` | `number` |

#### Returns

`ValueAnimation`

#### Inherited from

ITextClickBehavior.\_animateCursor

#### Defined in

[src/shapes/IText/ITextBehavior.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L120)

___

### \_applyPatternForTransformedGradient

▸ `Private` **_applyPatternForTransformedGradient**(`ctx`, `filler`): `void`

This function try to patch the missing gradientTransform on canvas gradients.
transforming a context to transform the gradient, is going to transform the stroke too.
we want to transform the gradient but not the stroke operation, so we create
a transformed gradient on a pattern and then we use the pattern instead of the gradient.
this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
is limited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](../modules.md#tfiller) |  |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_applyPatternForTransformedGradient

#### Defined in

[src/shapes/Object/Object.ts:1254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1254)

___

### \_applyPatternGradientTransform

▸ `Private` **_applyPatternGradientTransform**(`ctx`, `filler`): `Object`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `filler` | [`TFiller`](../modules.md#tfiller) | [Pattern](Pattern.md) or [Gradient](Gradient.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

ITextClickBehavior.\_applyPatternGradientTransform

#### Defined in

[src/shapes/Object/Object.ts:1151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1151)

___

### \_applyPatternGradientTransformText

▸ `Private` **_applyPatternGradientTransformText**(`filler`): `CanvasPattern`

This function try to patch the missing gradientTransform on canvas gradients.
transforming a context to transform the gradient, is going to transform the stroke too.
we want to transform the gradient but not the stroke operation, so we create
a transformed gradient on a pattern and then we use the pattern instead of the gradient.
this method has drawbacks: is slow, is in low resolution, needs a patch for when the size
is limited.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filler` | [`TFiller`](../modules.md#tfiller) | a fabric gradient instance |

#### Returns

`CanvasPattern`

a pattern to use as fill/stroke style

#### Inherited from

ITextClickBehavior.\_applyPatternGradientTransformText

#### Defined in

[src/shapes/Text/Text.ts:1244](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1244)

___

### \_calcTextareaPosition

▸ `Private` **_calcTextareaPosition**(): { `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| { `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

#### Returns

{ `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| { `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

style contains style for hiddenTextarea

#### Inherited from

ITextClickBehavior.\_calcTextareaPosition

#### Defined in

[src/shapes/IText/ITextBehavior.ts:559](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L559)

___

### \_calculateCurrentDimensions

▸ `Private` **_calculateCurrentDimensions**(`options?`): [`Point`](Point.md)

Calculate object dimensions for controls box, including padding and canvas zoom.
and active selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | transform options |

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

ITextClickBehavior.\_calculateCurrentDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:809](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L809)

___

### \_clearCache

▸ `Private` **_clearCache**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_clearCache

#### Defined in

[src/shapes/Text/Text.ts:1490](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1490)

___

### \_constrainScale

▸ `Private` **_constrainScale**(`value`): `number`

Makes sure the scale is valid and modifies it if necessary
@todo: this is a control action issue, not a geometry one

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

constrained value;

#### Inherited from

ITextClickBehavior.\_constrainScale

#### Defined in

[src/shapes/Object/Object.ts:674](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L674)

___

### \_createBaseClipPathSVGMarkup

▸ `Private` **_createBaseClipPathSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.\_createBaseClipPathSVGMarkup

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:158](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L158)

___

### \_createBaseSVGMarkup

▸ `Private` **_createBaseSVGMarkup**(`this`, `objectMarkup`, `«destructured»?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |
| `objectMarkup` | `string`[] |
| `«destructured»` | `Object` |
| › `additionalTransform?` | `string` |
| › `noStyle?` | `boolean` |
| › `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |
| › `withShadow?` | `boolean` |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.\_createBaseSVGMarkup

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

▸ `Private` **_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_createCacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:318](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L318)

___

### \_deleteLineStyle

▸ `Protected` **_deleteLineStyle**(`lineIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_deleteLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:317](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L317)

___

### \_deleteStyleDeclaration

▸ `Private` **_deleteStyleDeclaration**(`lineIndex`, `charIndex`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_deleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:295](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L295)

___

### \_drawBorders

▸ `Private` **_drawBorders**(`ctx`, `size`, `styleOverride?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](Point.md) |  |
| `styleOverride` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_drawBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:386](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L386)

___

### \_drawClipPath

▸ **_drawClipPath**(`ctx`, `clipPath?`): `void`

Prepare clipPath state and cache and draw it on instance's cache

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `clipPath?` | `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_drawClipPath

#### Defined in

[src/shapes/Object/Object.ts:943](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L943)

___

### \_exitEditing

▸ `Protected` **_exitEditing**(): `void`

runs the actual logic that exits from editing state, see [exitEditing](IText.md#exitediting)

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_exitEditing

#### Defined in

[src/shapes/IText/ITextBehavior.ts:663](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L663)

___

### \_findCenterFromElement

▸ `Private` **_findCenterFromElement**(): [`Point`](Point.md)

This function is an helper for svg import. it returns the center of the object in the svg
untransformed coordinates

#### Returns

[`Point`](Point.md)

center point from element coordinates

#### Inherited from

ITextClickBehavior.\_findCenterFromElement

#### Defined in

[src/shapes/Object/Object.ts:1302](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1302)

___

### \_findCrossPoints

▸ `Private` **_findCrossPoints**(`point`, `lines`): `number`

Helper method to determine how many cross points are between the 4 object edges
and the horizontal line determined by a point on canvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | Point to check |
| `lines` | `TBBoxLines` | Coordinates of the object being evaluated |

#### Returns

`number`

number of crossPoint

#### Inherited from

ITextClickBehavior.\_findCrossPoints

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:494](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L494)

___

### \_findTargetCorner

▸ `Private` **_findTargetCorner**(`pointer`, `forTouch?`): `string`

Determines which corner is under the mouse cursor, represented by `pointer`.
This function is return a corner only if the object is the active one.
This is done to avoid selecting corner of non active object and activating transformations
rather than drag action. The default behavior of fabricJS is that if you want to transform
an object, first you select it to show the control set

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `pointer` | [`Point`](Point.md) | `undefined` | The pointer indicating the mouse position |
| `forTouch` | `boolean` | `false` | indicates if we are looking for interaction area with a touch action |

#### Returns

`string`

corner code (tl, tr, bl, br, etc.), or 0 if nothing is found.

#### Inherited from

ITextClickBehavior.\_findTargetCorner

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_fireSelectionChanged

▸ `Private` **_fireSelectionChanged**(): `void`

Fires the even of selection changed

#### Returns

`void`

#### Overrides

ITextClickBehavior.\_fireSelectionChanged

#### Defined in

[src/shapes/IText/IText.ts:282](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L282)

___

### \_getCacheCanvasDimensions

▸ `Private` **_getCacheCanvasDimensions**(): [`TCacheCanvasDimensions`](../modules.md#tcachecanvasdimensions)

Return the dimension and the zoom level needed to create a cache canvas
big enough to host the object to be cached.

#### Returns

[`TCacheCanvasDimensions`](../modules.md#tcachecanvasdimensions)

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

ITextClickBehavior.\_getCacheCanvasDimensions

#### Defined in

[src/shapes/Text/Text.ts:587](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L587)

___

### \_getCoords

▸ **_getCoords**(`absolute?`, `calculate?`): [`TCornerPoint`](../modules.md#tcornerpoint)

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `absolute` | `boolean` | `false` | will return aCoords if true or lineCoords |
| `calculate` | `boolean` | `false` | will calculate the coords or use the one that are attached to the object instance |

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

{tl, tr, br, bl} points

#### Inherited from

ITextClickBehavior.\_getCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:215](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L215)

___

### \_getCurrentCharIndex

▸ `Private` **_getCurrentCharIndex**(): `Object`

Returns the cursor position for the getCurrent.. functions

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `c` | `number` |
| `l` | `number` |

#### Defined in

[src/shapes/IText/IText.ts:682](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L682)

___

### \_getCursorBoundaries

▸ `Private` **_getCursorBoundaries**(`index?`, `skipCaching?`): `CursorBoundaries`

Returns cursor boundaries (left, top, leftOffset, topOffset)
left/top are left/top of entire text box
leftOffset/topOffset are offset from that left/top point of a text box

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index?` | `number` | index from start |
| `skipCaching?` | `boolean` |  |

#### Returns

`CursorBoundaries`

#### Overrides

ITextClickBehavior.\_getCursorBoundaries

#### Defined in

[src/shapes/IText/IText.ts:395](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L395)

___

### \_getCursorBoundariesOffsets

▸ `Private` **_getCursorBoundariesOffsets**(`index`, `skipCaching?`): `Object`

Caches and returns cursor left/top offset relative to instance's center point

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | index from start |
| `skipCaching?` | `boolean` |  |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `left` | `number` |
| `top` | `number` |

#### Defined in

[src/shapes/IText/IText.ts:416](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L416)

___

### \_getFontDeclaration

▸ **_getFontDeclaration**(`«destructured»?`, `forMeasuring?`): `string`

return font declaration string for canvas context

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Partial`<`Pick`<`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>, ``"fontFamily"`` \| ``"fontSize"`` \| ``"fontStyle"`` \| ``"fontWeight"``\>\> |
| `forMeasuring?` | `boolean` |

#### Returns

`string`

font declaration formatted for canvas context.

#### Inherited from

ITextClickBehavior.\_getFontDeclaration

#### Defined in

[src/shapes/Text/Text.ts:1647](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1647)

___

### \_getGraphemeBox

▸ **_getGraphemeBox**(`grapheme`, `lineIndex`, `charIndex`, `prevGrapheme?`, `skipLeft?`): [`GraphemeBBox`](../modules.md#graphemebbox)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `grapheme` | `string` | to be measured |
| `lineIndex` | `number` | index of the line where the char is |
| `charIndex` | `number` | position in the line |
| `prevGrapheme?` | `string` | character preceding the one to be measured |
| `skipLeft?` | `boolean` | - |

#### Returns

[`GraphemeBBox`](../modules.md#graphemebbox)

grapheme bbox

#### Inherited from

ITextClickBehavior.\_getGraphemeBox

#### Defined in

[src/shapes/Text/Text.ts:972](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L972)

___

### \_getImageLines

▸ `Private` **_getImageLines**(`lineCoords`): `TBBoxLines`

Method that returns an object with the object edges in it, given the coordinates of the corners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineCoords` | [`TCornerPoint`](../modules.md#tcornerpoint) | or aCoords Coordinates of the object corners |

#### Returns

`TBBoxLines`

#### Inherited from

ITextClickBehavior.\_getImageLines

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:448](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L448)

___

### \_getIndexOnLine

▸ `Private` **_getIndexOnLine**(`lineIndex`, `width`): `number`

for a given width it founds the matching character.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `width` | `number` |

#### Returns

`number`

#### Inherited from

ITextClickBehavior.\_getIndexOnLine

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:416](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L416)

___

### \_getLeftOffset

▸ `Private` **_getLeftOffset**(): `number`

#### Returns

`number`

Left offset

#### Inherited from

ITextClickBehavior.\_getLeftOffset

#### Defined in

[src/shapes/Text/Text.ts:1047](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1047)

___

### \_getLeftTopCoords

▸ `Private` **_getLeftTopCoords**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.\_getLeftTopCoords

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:270](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L270)

___

### \_getLineLeftOffset

▸ `Private` **_getLineLeftOffset**(`lineIndex`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | index text line |

#### Returns

`number`

Line left offset

#### Inherited from

ITextClickBehavior.\_getLineLeftOffset

#### Defined in

[src/shapes/Text/Text.ts:1444](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1444)

___

### \_getLineStyle

▸ `Private` **_getLineStyle**(`lineIndex`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

if the line exists or not

#### Inherited from

ITextClickBehavior.\_getLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:304](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L304)

___

### \_getNonTransformedDimensions

▸ `Private` **_getNonTransformedDimensions**(): [`Point`](Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

ITextClickBehavior.\_getNonTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:798](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L798)

___

### \_getSelectionForOffset

▸ **_getSelectionForOffset**(`e`, `isRight`): `number`

private
Helps finding if the offset should be counted from Start or End

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |
| `isRight` | `boolean` |  |

#### Returns

`number`

#### Inherited from

ITextClickBehavior.\_getSelectionForOffset

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:377](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L377)

___

### \_getStyleDeclaration

▸ **_getStyleDeclaration**(`lineIndex`, `charIndex`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

get the reference, not a clone, of the style object for a given character,
if not style is set for a pre det

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

style object a REFERENCE to the existing one or a new empty object

#### Inherited from

ITextClickBehavior.\_getStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:249](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L249)

___

### \_getTopOffset

▸ `Private` **_getTopOffset**(): `number`

#### Returns

`number`

Top offset

#### Inherited from

ITextClickBehavior.\_getTopOffset

#### Defined in

[src/shapes/Text/Text.ts:1055](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1055)

___

### \_getTransformedDimensions

▸ `Private` **_getTransformedDimensions**(`options?`): [`Point`](Point.md)

Calculate object bounding box dimensions from its properties scale, skew.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

ITextClickBehavior.\_getTransformedDimensions

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:53](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L53)

___

### \_getWidthBeforeCursor

▸ `Private` **_getWidthBeforeCursor**(`lineIndex`, `charIndex`): `number`

Finds the width in pixels before the cursor on the same line

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`number`

widthBeforeCursor width before cursor

#### Inherited from

ITextClickBehavior.\_getWidthBeforeCursor

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:328](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L328)

___

### \_getWidthOfCharSpacing

▸ **_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

ITextClickBehavior.\_getWidthOfCharSpacing

#### Defined in

[src/shapes/Text/Text.ts:1514](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1514)

___

### \_limitCacheSize

▸ **_limitCacheSize**(`dims`): `any`

Limit the cache dimensions so that X * Y do not cross config.perfLimitSizeTotal
and each side do not cross fabric.cacheSideLimit
those numbers are configurable so that you can get as much detail as you want
making bargain with performances.

#### Parameters

| Name | Type |
| :------ | :------ |
| `dims` | `any` |

#### Returns

`any`

.width width of canvas

.height height of canvas

.zoomX zoomX zoom value to unscale the canvas before drawing cache

.zoomY zoomY zoom value to unscale the canvas before drawing cache

#### Inherited from

ITextClickBehavior.\_limitCacheSize

#### Defined in

[src/shapes/Object/Object.ts:341](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L341)

___

### \_measureChar

▸ `Private` **_measureChar**(`_char`, `charStyle`, `previousChar?`, `prevCharStyle?`): `Object`

measure and return the width of a single character.
possibly overridden to accommodate different measure logic or
to hook some external lib for character measurement

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `_char` | `string` | - |
| `charStyle` | [`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration) | style of char to be measured |
| `previousChar?` | `string` | previous char |
| `prevCharStyle?` | [`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration) \| `Record`<`string`, `never`\> | style of previous char |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `kernedWidth` | `number` |
| `width` | `number` |

#### Inherited from

ITextClickBehavior.\_measureChar

#### Defined in

[src/shapes/Text/Text.ts:791](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L791)

___

### \_measureLine

▸ **_measureLine**(`lineIndex`): `Object`

measure every grapheme of a line, populating __charBounds

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`Object`

object.width total width of characters

object.numOfSpaces length of chars that match this._reSpacesAndTabs

| Name | Type |
| :------ | :------ |
| `numOfSpaces` | `number` |
| `width` | `number` |

#### Inherited from

ITextClickBehavior.\_measureLine

#### Defined in

[src/shapes/Text/Text.ts:880](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L880)

___

### \_mouseDownHandler

▸ **_mouseDownHandler**(`«destructured»`): `void`

Default event handler for the basic functionalities needed on _mouseDown
can be overridden to do something different.
Scope of this implementation is: find the click position, set selectionStart
find selectionEnd, initialize the drawing of either cursor or selection area
initializing a mousedDown on a text area will cancel fabricjs knowledge of
current compositionMode. It will be set to false.

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_mouseDownHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:133](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L133)

___

### \_mouseDownHandlerBefore

▸ **_mouseDownHandlerBefore**(`«destructured»`): `void`

Default event handler for the basic functionalities needed on mousedown:before
can be overridden to do something different.
Scope of this implementation is: verify the object is already selected when mousing down

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_mouseDownHandlerBefore

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:168](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L168)

___

### \_move

▸ `Private` **_move**(`e`, `prop`, `direction`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `prop` | ``"selectionStart"`` \| ``"selectionEnd"`` |
| `direction` | ``"Left"`` \| ``"Right"`` |

#### Returns

`boolean`

true if a change happened

**`Todo`**

refactor not to use method name composition

#### Inherited from

ITextClickBehavior.\_move

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:548](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L548)

___

### \_moveCursorLeftOrRight

▸ **_moveCursorLeftOrRight**(`direction`, `e`): `void`

Moves cursor right or Left, fires event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | ``"Left"`` \| ``"Right"`` | 'Left', 'Right' |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_moveCursorLeftOrRight

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L638)

___

### \_moveCursorUpOrDown

▸ **_moveCursorUpOrDown**(`direction`, `e`): `void`

Moves cursor up or down, fires the events

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `direction` | ``"Up"`` \| ``"Down"`` | 'Up' or 'Down' |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_moveCursorUpOrDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:477](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L477)

___

### \_moveLeft

▸ `Private` **_moveLeft**(`e`, `prop`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `prop` | ``"selectionStart"`` \| ``"selectionEnd"`` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.\_moveLeft

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:572](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L572)

___

### \_moveRight

▸ `Private` **_moveRight**(`e`, `prop`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |
| `prop` | ``"selectionStart"`` \| ``"selectionEnd"`` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.\_moveRight

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:579](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L579)

___

### \_removeCacheCanvas

▸ **_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_removeCacheCanvas

#### Defined in

[src/shapes/Object/Object.ts:797](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L797)

___

### \_removeDefaultValues

▸ `Private` **_removeDefaultValues**<`T`\>(`object`): `Partial`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `T` |

#### Returns

`Partial`<`T`\>

#### Inherited from

ITextClickBehavior.\_removeDefaultValues

#### Defined in

[src/shapes/Object/Object.ts:589](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L589)

___

### \_removeExtraneousStyles

▸ `Private` **_removeExtraneousStyles**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_removeExtraneousStyles

#### Defined in

[src/shapes/IText/ITextBehavior.ts:703](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L703)

___

### \_removeShadow

▸ `Private` **_removeShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_removeShadow

#### Defined in

[src/shapes/Object/Object.ts:1137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1137)

___

### \_render

▸ `Private` **_render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_render

#### Defined in

[src/shapes/Text/Text.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L599)

___

### \_renderBackground

▸ `Private` **_renderBackground**(`ctx`): `void`

Draws a background for the object big as its untransformed dimensions

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderBackground

#### Defined in

[src/shapes/Object/Object.ts:1005](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1005)

___

### \_renderChar

▸ `Private` **_renderChar**(`method`, `ctx`, `lineIndex`, `charIndex`, `_char`, `left`, `top`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | ``"fillText"`` \| ``"strokeText"`` |  |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `lineIndex` | `number` |  |
| `charIndex` | `number` |  |
| `_char` | `string` |  |
| `left` | `number` | Left coordinate |
| `top` | `number` | Top coordinate |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderChar

#### Defined in

[src/shapes/Text/Text.ts:1342](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1342)

___

### \_renderChars

▸ `Private` **_renderChars**(`method`, `ctx`, `line`, `left`, `top`, `lineIndex`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | ``"fillText"`` \| ``"strokeText"`` | fillText or strokeText. |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `line` | `any`[] | Content of the line, splitted in an array by grapheme |
| `left` | `number` |  |
| `top` | `number` |  |
| `lineIndex` | `number` |  |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderChars

#### Defined in

[src/shapes/Text/Text.ts:1131](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1131)

___

### \_renderControls

▸ **_renderControls**(`ctx`, `styleOverride?`): `void`

Renders controls and borders for the object
the context here is not transformed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `styleOverride?` | `TStyleOverride` | properties to override the object style |

#### Returns

`void`

**`Todo`**

move to interactivity

#### Inherited from

ITextClickBehavior.\_renderControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:412](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L412)

___

### \_renderCursor

▸ **_renderCursor**(`ctx`, `boundaries`, `selectionStart`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `boundaries` | `CursorBoundaries` |
| `selectionStart` | `number` |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:493](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L493)

___

### \_renderFill

▸ `Private` **_renderFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderFill

#### Defined in

[src/shapes/Object/Object.ts:1204](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1204)

___

### \_renderPaintInOrder

▸ `Private` **_renderPaintInOrder**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderPaintInOrder

#### Defined in

[src/shapes/Object/Object.ts:1179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1179)

___

### \_renderSelection

▸ `Private` **_renderSelection**(`ctx`, `selection`, `boundaries`): `void`

Renders text selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | transformed context to draw on |
| `selection` | `Object` |  |
| `selection.selectionEnd` | `number` | - |
| `selection.selectionStart` | `number` | - |
| `boundaries` | `CursorBoundaries` | Object with left/top/leftOffset/topOffset |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:571](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L571)

___

### \_renderStroke

▸ `Private` **_renderStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderStroke

#### Defined in

[src/shapes/Object/Object.ts:1223](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1223)

___

### \_renderText

▸ `Private` **_renderText**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderText

#### Defined in

[src/shapes/Text/Text.ts:614](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L614)

___

### \_renderTextCommon

▸ `Private` **_renderTextCommon**(`ctx`, `method`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `method` | ``"fillText"`` \| ``"strokeText"`` | Method name ("fillText" or "strokeText") |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextCommon

#### Defined in

[src/shapes/Text/Text.ts:1064](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1064)

___

### \_renderTextDecoration

▸ `Private` **_renderTextDecoration**(`ctx`, `type`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `type` | ``"overline"`` \| ``"underline"`` \| ``"linethrough"`` | - |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextDecoration

#### Defined in

[src/shapes/Text/Text.ts:1541](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1541)

___

### \_renderTextFill

▸ `Private` **_renderTextFill**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextFill

#### Defined in

[src/shapes/Text/Text.ts:1093](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1093)

___

### \_renderTextLine

▸ `Private` **_renderTextLine**(`method`, `ctx`, `line`, `left`, `top`, `lineIndex`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `method` | ``"fillText"`` \| ``"strokeText"`` | Method name ("fillText" or "strokeText") |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `line` | `string`[] | Text to render |
| `left` | `number` | Left position of text |
| `top` | `number` | Top position of text |
| `lineIndex` | `number` | Index of a line in a text |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextLine

#### Defined in

[src/shapes/Text/Text.ts:683](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L683)

___

### \_renderTextLinesBackground

▸ `Private` **_renderTextLinesBackground**(`ctx`): `void`

Renders the text background for lines, taking care of style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextLinesBackground

#### Defined in

[src/shapes/Text/Text.ts:699](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L699)

___

### \_renderTextStroke

▸ `Private` **_renderTextStroke**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_renderTextStroke

#### Defined in

[src/shapes/Text/Text.ts:1105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1105)

___

### \_resetOrigin

▸ `Private` **_resetOrigin**(): `void`

Resets the origin/position of the object to it's original origin

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_resetOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:246](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L246)

___

### \_restoreEditingProps

▸ `Private` **_restoreEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_restoreEditingProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L638)

___

### \_saveEditingProps

▸ `Private` **_saveEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_saveEditingProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:622](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L622)

___

### \_set

▸ `Private` **_set**(`key`, `value`): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

While editing handle differently

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Overrides

ITextClickBehavior.\_set

#### Defined in

[src/shapes/IText/IText.ts:230](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L230)

___

### \_setClippingProperties

▸ **_setClippingProperties**(`ctx`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setClippingProperties

#### Defined in

[src/shapes/Object/Object.ts:1083](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1083)

___

### \_setEditingProps

▸ `Private` **_setEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setEditingProps

#### Defined in

[src/shapes/IText/ITextBehavior.ts:449](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L449)

___

### \_setFillStyles

▸ **_setFillStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a ill style, and fill
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`<[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> | with ill defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

ITextClickBehavior.\_setFillStyles

#### Defined in

[src/shapes/Text/Text.ts:1327](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1327)

___

### \_setGraphemeOnPath

▸ `Private` **_setGraphemeOnPath**(`positionInPath`, `graphemeInfo`): `void`

Calculate the angle  and the left,top position of the char that follow a path.
It appends it to graphemeInfo to be reused later at rendering

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionInPath` | `number` | to be measured |
| `graphemeInfo` | [`GraphemeBBox`](../modules.md#graphemebbox) | current grapheme box information |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setGraphemeOnPath

#### Defined in

[src/shapes/Text/Text.ts:953](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L953)

___

### \_setLineDash

▸ `Private` **_setLineDash**(`ctx`, `dashArray?`): `void`

Sets line dash

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to set the dash line on |
| `dashArray?` | ``null`` \| `number`[] | array representing dashes |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setLineDash

#### Defined in

[src/shapes/Object/Object.ts:1095](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1095)

___

### \_setLineStyle

▸ `Private` **_setLineStyle**(`lineIndex`): `void`

Set the line style to an empty object so that is initialized

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setLineStyle

#### Defined in

[src/shapes/Text/StyledText.ts:313](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L313)

___

### \_setObject

▸ `Private` **_setObject**(`obj`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Record`<`string`, `any`\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setObject

#### Defined in

[src/CommonMethods.ts:18](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L18)

___

### \_setOpacity

▸ `Private` **_setOpacity**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setOpacity

#### Defined in

[src/shapes/Object/Object.ts:1022](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1022)

___

### \_setOptions

▸ `Protected` **_setOptions**(`options?`): `void`

Sets object's properties from options, for initialization only

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | Options object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setOptions

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setOriginToCenter

▸ `Private` **_setOriginToCenter**(): `void`

Sets the origin/position of the object to it's center point

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setOriginToCenter

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:228](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L228)

___

### \_setScript

▸ `Private` **_setScript**(`start`, `end`, `schema`): `void`

Applies 'schema' at given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |
| `schema` | `Object` |  |
| `schema.baseline` | `number` | - |
| `schema.size` | `number` | - |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setScript

#### Defined in

[src/shapes/Text/Text.ts:1417](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1417)

___

### \_setShadow

▸ `Private` **_setShadow**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setShadow

#### Defined in

[src/shapes/Object/Object.ts:1110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1110)

___

### \_setStrokeStyles

▸ **_setStrokeStyles**(`ctx`, `style`): `Object`

This function prepare the canvas for a stroke style, and stroke and strokeWidth
need to be sent in as defined

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |  |
| `style` | `Pick`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration), ``"strokeWidth"`` \| ``"stroke"``\> | with stroke and strokeWidth defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

ITextClickBehavior.\_setStrokeStyles

#### Defined in

[src/shapes/Text/Text.ts:1305](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1305)

___

### \_setStyleDeclaration

▸ `Private` **_setStyleDeclaration**(`lineIndex`, `charIndex`, `style`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |
| `style` | `object` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:281](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L281)

___

### \_setTextStyles

▸ `Private` **_setTextStyles**(`ctx`, `charStyle?`, `forMeasuring?`): `void`

Set the font parameter of the context with the object properties or with charStyle

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `charStyle?` | `any` | object with font style properties |
| `forMeasuring?` | `boolean` | - |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setTextStyles

#### Defined in

[src/shapes/Text/Text.ts:634](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L634)

___

### \_setupCompositeOperation

▸ **_setupCompositeOperation**(`ctx`): `void`

Sets canvas globalCompositeOperation for specific object
custom composition operation for the particular object can be specified using globalCompositeOperation property

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Rendering canvas context |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_setupCompositeOperation

#### Defined in

[src/shapes/Object/Object.ts:1524](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1524)

___

### \_splitText

▸ `Private` **_splitText**(): `TextLinesInfo`

Divides text into lines of text and lines of graphemes.

#### Returns

`TextLinesInfo`

#### Inherited from

ITextClickBehavior.\_splitText

#### Defined in

[src/shapes/Text/Text.ts:446](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L446)

___

### \_splitTextIntoLines

▸ **_splitTextIntoLines**(`text`): `TextLinesInfo`

Returns the text as an array of lines.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | text to split |

#### Returns

`TextLinesInfo`

Lines in the text

#### Inherited from

ITextClickBehavior.\_splitTextIntoLines

#### Defined in

[src/shapes/Text/Text.ts:1715](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1715)

___

### \_toSVG

▸ **_toSVG**(`reviver?`): `string`[]

Returns svg representation of an instance
This function is implemented in each subclass
This is just because typescript otherwise cryies all the time

#### Parameters

| Name | Type |
| :------ | :------ |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) |

#### Returns

`string`[]

an array of strings with the specific svg representation
of the instance

#### Inherited from

ITextClickBehavior.\_toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L120)

___

### \_updateAndFire

▸ `Private` **_updateAndFire**(`property`, `index`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | ``"selectionStart"`` \| ``"selectionEnd"`` | 'selectionStart' or 'selectionEnd' |
| `index` | `number` | new position of property |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:267](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L267)

___

### \_updateCacheCanvas

▸ `Private` **_updateCacheCanvas**(): `boolean`

Update width and height of the canvas for cache
returns true or false if canvas needed resize.

#### Returns

`boolean`

true if the canvas has been resized

#### Inherited from

ITextClickBehavior.\_updateCacheCanvas

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L164)

___

### \_updateTextarea

▸ `Private` **_updateTextarea**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.\_updateTextarea

#### Defined in

[src/shapes/IText/ITextBehavior.ts:502](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L502)

___

### abortCursorAnimation

▸ **abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

ITextClickBehavior.abortCursorAnimation

#### Defined in

[src/shapes/IText/ITextBehavior.ts:181](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L181)

___

### addPaintOrder

▸ **addPaintOrder**(`this`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.addPaintOrder

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:249](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L249)

___

### animate

▸ **animate**<`T`\>(`animatable`, `options?`): `Record`<`string`, [`TAnimation`](../modules/util.md#tanimation)<`T`\>\>

Animates object's properties

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `number` \| [`TColorArg`](../modules.md#tcolorarg) \| `number`[] |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `animatable` | `Record`<`string`, `T`\> | map of keys and end values |
| `options?` | `Partial`<[`AnimationOptions`](../modules/util.md#animationoptions)<`T`\>\> |  |

#### Returns

`Record`<`string`, [`TAnimation`](../modules/util.md#tanimation)<`T`\>\>

map of animation contexts

As object — multiple properties

object.animate({ left: ..., top: ... });
object.animate({ left: ..., top: ... }, { duration: ... });

**`Tutorial`**

[http://fabricjs.com/fabric-intro-part-2#animation](http://fabricjs.com/fabric-intro-part-2#animation)

#### Inherited from

ITextClickBehavior.animate

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L34)

___

### blur

▸ **blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

ITextClickBehavior.blur

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L106)

___

### calcACoords

▸ **calcACoords**(): [`TCornerPoint`](../modules.md#tcornerpoint)

Calculates the coordinates of the 4 corner of the bbox, in absolute coordinates.
those never change with zoom or viewport changes.

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

#### Inherited from

ITextClickBehavior.calcACoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:664](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L664)

___

### calcLineCoords

▸ **calcLineCoords**(): [`TCornerPoint`](../modules.md#tcornerpoint)

return the coordinate of the 4 corners of the bounding box in HTMLCanvasElement coordinates
used for bounding box interactivity with the mouse

#### Returns

[`TCornerPoint`](../modules.md#tcornerpoint)

#### Inherited from

ITextClickBehavior.calcLineCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:618](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L618)

___

### calcOCoords

▸ **calcOCoords**(): `Record`<`string`, `TOCoord`\>

Calculates the coordinates of the center of each control plus the corners of the control itself
This basically just delegates to each control positionHandler
WARNING: changing what is passed to positionHandler is a breaking change, since position handler
is a public api and should be done just if extremely necessary

#### Returns

`Record`<`string`, `TOCoord`\>

#### Inherited from

ITextClickBehavior.calcOCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:236](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L236)

___

### calcOwnMatrix

▸ **calcOwnMatrix**(): [`TMat2D`](../modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties, this matrix does not include the group transformation

#### Returns

[`TMat2D`](../modules.md#tmat2d)

transform matrix for the object

#### Inherited from

ITextClickBehavior.calcOwnMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:767](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L767)

___

### calcTextHeight

▸ **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

ITextClickBehavior.calcTextHeight

#### Defined in

[src/shapes/Text/Text.ts:1033](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1033)

___

### calcTextWidth

▸ `Private` **calcTextWidth**(): `number`

calculate and return the text Width measuring each line.

#### Returns

`number`

Maximum width of Text object

#### Inherited from

ITextClickBehavior.calcTextWidth

#### Defined in

[src/shapes/Text/Text.ts:662](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L662)

___

### calcTransformMatrix

▸ **calcTransformMatrix**(`skipGroup?`): [`TMat2D`](../modules.md#tmat2d)

calculate transform matrix that represents the current transformations from the
object's properties.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipGroup?` | `boolean` | `false` | return transform matrix for object not counting parent transformations There are some situation in which this is useful to avoid the fake rotation. |

#### Returns

[`TMat2D`](../modules.md#tmat2d)

transform matrix for the object

#### Inherited from

ITextClickBehavior.calcTransformMatrix

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:739](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L739)

___

### canDrop

▸ **canDrop**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drop target

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.canDrop

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L72)

___

### cleanStyle

▸ **cleanStyle**(`property`): `undefined` \| ``false``

Check if characters in a text have a value for a property
whose value matches the textbox's value for that property.  If so,
the character-level property is deleted.  If the character
has no other properties, then it is also deleted.  Finally,
if the line containing that character has no other characters
then it also is deleted.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `StylePropertiesType` | The property to compare between characters and text. |

#### Returns

`undefined` \| ``false``

#### Inherited from

ITextClickBehavior.cleanStyle

#### Defined in

[src/shapes/Text/StyledText.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L99)

___

### clearContextTop

▸ **clearContextTop**(`restoreManually?`): `undefined` \| `CanvasRenderingContext2D`

Clears the canvas.contextTop in a specific area that corresponds to the object's bounding box
that is in the canvas.contextContainer.
This function is used to clear pieces of contextTop where we render ephemeral effects on top of the object.
Example: blinking cursor text selection, drag effects.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `restoreManually?` | `boolean` | When true won't restore the context after clear, in order to draw something else. |

#### Returns

`undefined` \| `CanvasRenderingContext2D`

canvas.contextTop that is either still transformed
with the object transformMatrix, or restored to neutral transform

**`Todo`**

discuss swapping restoreManually with a renderCallback, but think of async issues

#### Inherited from

ITextClickBehavior.clearContextTop

#### Defined in

[src/shapes/Object/InteractiveObject.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L592)

___

### clone

▸ **clone**(`propertiesToInclude?`): `Promise`<[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`<[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

ITextClickBehavior.clone

#### Defined in

[src/shapes/Object/Object.ts:1311](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1311)

___

### cloneAsImage

▸ **cloneAsImage**(`options?`): [`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Creates an instance of Image out of an object
makes use of toCanvasElement.
Once this method was based on toDataUrl and loadImage, so it also had a quality
and format option. toCanvasElement is faster and produce no loss of quality.
If you need to get a real Jpeg or Png from an object, using toDataURL is the right way to do it.
toCanvasElement and then toBlob from the obtained canvas is also a good option.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `any` | for clone as image, passed to toDataURL |

#### Returns

[`Image`](Image.md)<`Partial`<[`ImageProps`](../interfaces/ImageProps.md)\>, [`SerializedImageProps`](../interfaces/SerializedImageProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

Object cloned as image.

**`Todo`**

fix the export type, it could not be Image but the type that getClass return for 'image'.

#### Inherited from

ITextClickBehavior.cloneAsImage

#### Defined in

[src/shapes/Object/Object.ts:1337](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1337)

___

### complexity

▸ **complexity**(): `number`

Returns complexity of an instance

#### Returns

`number`

complexity

#### Inherited from

ITextClickBehavior.complexity

#### Defined in

[src/shapes/Text/Text.ts:1780](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1780)

___

### containsPoint

▸ **containsPoint**(`point`, `lines?`, `absolute?`, `calculate?`): `boolean`

Checks if point is inside the object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | `undefined` | Point to check against |
| `lines?` | `TBBoxLines` | `undefined` | object returned from |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if point is inside the object

**`Method`**

_getImageLines

#### Inherited from

ITextClickBehavior.containsPoint

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:357](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L357)

___

### copy

▸ **copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

ITextClickBehavior.copy

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:295](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L295)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Overrides

ITextClickBehavior.dispose

#### Defined in

[src/shapes/IText/IText.ts:689](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L689)

___

### doubleClickHandler

▸ **doubleClickHandler**(`options`): `void`

Default handler for double click, select a word

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.doubleClickHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L108)

___

### drawBorders

▸ **drawBorders**(`ctx`, `options`, `styleOverride?`): `void`

Draws borders of an object's bounding box.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `options` | `Required`<`Omit`<[`TComposeMatrixArgs`](../modules/util.md#tcomposematrixargs), ``"flipX"`` \| ``"flipY"``\>\> | object representing current object parameters |
| `styleOverride?` | `TStyleOverride` | object to override the object style |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.drawBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:450](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L450)

___

### drawCacheOnCanvas

▸ **drawCacheOnCanvas**(`this`, `ctx`): `void`

Paint the cached copy of the object on the target context.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> | - |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.drawCacheOnCanvas

#### Defined in

[src/shapes/Object/Object.ts:961](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L961)

___

### drawClipPathOnCache

▸ **drawClipPathOnCache**(`ctx`, `clipPath`): `void`

Execute the drawing operation for an object clipPath

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `clipPath` | `TCachedFabricObject`<`FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\> |  |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.drawClipPathOnCache

#### Defined in

[src/shapes/Object/Object.ts:890](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L890)

___

### drawControls

▸ **drawControls**(`ctx`, `styleOverride?`): `void`

Draws corners of an object's bounding box.
Requires public properties: width, height
Requires public options: cornerSize, padding

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `styleOverride` | `Partial`<`Pick`<`InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>, ``"cornerStyle"`` \| ``"cornerSize"`` \| ``"cornerColor"`` \| ``"cornerStrokeColor"`` \| ``"cornerDashArray"`` \| ``"transparentCorners"``\>\> | object to override the object style |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.drawControls

#### Defined in

[src/shapes/Object/InteractiveObject.ts:514](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L514)

___

### drawControlsConnectingLines

▸ **drawControlsConnectingLines**(`ctx`, `size`): `void`

Draws lines from a borders of an object's bounding box to controls that have `withConnection` property set.
Requires public properties: width, height
Requires public options: padding, borderColor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |
| `size` | [`Point`](Point.md) | object size x = width, y = height |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.drawControlsConnectingLines

#### Defined in

[src/shapes/Object/InteractiveObject.ts:484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L484)

___

### drawObject

▸ **drawObject**(`ctx`, `forClipping?`): `void`

Execute the drawing operation for an object on a specified context

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |
| `forClipping?` | `boolean` | apply clipping styles |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.drawObject

#### Defined in

[src/shapes/Object/Object.ts:922](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L922)

___

### drawSelectionBackground

▸ **drawSelectionBackground**(`ctx`): `void`

Draws a colored layer behind the object, inside its selection borders.
Requires public options: padding, selectionBackgroundColor
this function is called when the context is transformed
has checks to be skipped when the object is on a staticCanvas

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to draw on |

#### Returns

`void`

**`Todo`**

evaluate if make this disappear in favor of a pre-render hook for objects
this was added by Andrea Bogazzi to make possible some feature for work reasons
it seemed a good option, now is an edge case

#### Inherited from

ITextClickBehavior.drawSelectionBackground

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L352)

___

### enlargeSpaces

▸ **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

ITextClickBehavior.enlargeSpaces

#### Defined in

[src/shapes/Text/Text.ts:481](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L481)

___

### enterEditing

▸ **enterEditing**(`e?`): `void`

Enters editing state

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`TPointerEvent`](../modules.md#tpointerevent) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.enterEditing

#### Defined in

[src/shapes/IText/ITextBehavior.ts:378](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L378)

___

### exitEditing

▸ **exitEditing**(): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.exitEditing

#### Defined in

[src/shapes/IText/ITextBehavior.ts:681](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L681)

___

### findCommonAncestors

▸ **findCommonAncestors**<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`, `T`\> |
| `S` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `S` | finds only ancestors that are objects (without canvas) |

#### Returns

`AncestryComparison`<`S`\>

an object that represent the ancestry situation.

#### Inherited from

ITextClickBehavior.findCommonAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L99)

___

### findLineBoundaryLeft

▸ **findLineBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current line according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

ITextClickBehavior.findLineBoundaryLeft

#### Defined in

[src/shapes/IText/ITextBehavior.ts:282](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L282)

___

### findLineBoundaryRight

▸ **findLineBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current line according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

ITextClickBehavior.findLineBoundaryRight

#### Defined in

[src/shapes/IText/ITextBehavior.ts:299](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L299)

___

### findWordBoundaryLeft

▸ **findWordBoundaryLeft**(`startFrom`): `number`

Find new selection index representing start of current word according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

ITextClickBehavior.findWordBoundaryLeft

#### Defined in

[src/shapes/IText/ITextBehavior.ts:234](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L234)

___

### findWordBoundaryRight

▸ **findWordBoundaryRight**(`startFrom`): `number`

Find new selection index representing end of current word according to current selection index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startFrom` | `number` | Current selection index |

#### Returns

`number`

New selection index

#### Inherited from

ITextClickBehavior.findWordBoundaryRight

#### Defined in

[src/shapes/IText/ITextBehavior.ts:258](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L258)

___

### fire

▸ **fire**<`K`\>(`eventName`, `options?`): `void`

Fires event with an optional options object

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name to fire |
| `options?` | `EventSpec`[`K`] | Options object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.fire

#### Defined in

[src/Observable.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L159)

___

### forEachControl

▸ **forEachControl**(`fn`): `void`

Calls a function for each control. The function gets called,
with the control, the control's key and the object that is calling the iterator

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | (`control`: [`Control`](Control.md), `key`: `string`, `fabricObject`: `InteractiveFabricObject`<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>) => `any` | function to iterate over the controls over |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.forEachControl

#### Defined in

[src/shapes/Object/InteractiveObject.ts:330](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L330)

___

### fromGraphemeToStringSelection

▸ **fromGraphemeToStringSelection**(`start`, `end`, `graphemes`): `Object`

convert from fabric to textarea values

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `graphemes` | `string`[] |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `selectionEnd` | `number` |
| `selectionStart` | `number` |

#### Inherited from

ITextClickBehavior.fromGraphemeToStringSelection

#### Defined in

[src/shapes/IText/ITextBehavior.ts:481](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L481)

___

### fromStringToGraphemeSelection

▸ **fromStringToGraphemeSelection**(`start`, `end`, `text`): `Object`

convert from textarea to grapheme indexes

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `text` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `selectionEnd` | `number` |
| `selectionStart` | `number` |

#### Inherited from

ITextClickBehavior.fromStringToGraphemeSelection

#### Defined in

[src/shapes/IText/ITextBehavior.ts:464](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L464)

___

### get

▸ **get**(`property`): `any`

Basic getter

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property name |

#### Returns

`any`

value of a property

#### Inherited from

ITextClickBehavior.get

#### Defined in

[src/CommonMethods.ts:59](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L59)

___

### get2DCursorLocation

▸ **get2DCursorLocation**(`selectionStart?`, `skipWrapping?`): `Object`

Returns 2d representation (lineIndex and charIndex) of cursor (or selection start)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart?` | `number` | Optional index. When not given, current selectionStart is used. |
| `skipWrapping?` | `boolean` | consider the location for unwrapped lines. useful to manage styles. |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `charIndex` | `number` |
| `lineIndex` | `number` |

#### Overrides

ITextClickBehavior.get2DCursorLocation

#### Defined in

[src/shapes/IText/IText.ts:334](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L334)

___

### getActiveControl

▸ **getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

ITextClickBehavior.getActiveControl

#### Defined in

[src/shapes/Object/InteractiveObject.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L176)

___

### getAncestors

▸ **getAncestors**<`T`\>(`strict?`): `Ancestors`<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | returns only ancestors that are objects (without canvas) |

#### Returns

`Ancestors`<`T`\>

ancestors (excluding `ActiveSelection`) from bottom to top

#### Inherited from

ITextClickBehavior.getAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L80)

___

### getBoundingRect

▸ **getBoundingRect**(`absolute?`, `calculate?`): [`TBBox`](../modules.md#tbbox)

Returns coordinates of object's bounding rectangle (left, top, width, height)
the box is intended as aligned to axis of canvas.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of .lineCoords / .aCoords |

#### Returns

[`TBBox`](../modules.md#tbbox)

Object with left, top, width, height properties

#### Inherited from

ITextClickBehavior.getBoundingRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:540](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L540)

___

### getCanvasRetinaScaling

▸ **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getCanvasRetinaScaling

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L599)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.getCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L173)

___

### getCompleteStyleDeclaration

▸ **getCompleteStyleDeclaration**(`lineIndex`, `charIndex`): [`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)

return a new object that contains all the style property for a character
the object returned is newly created

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | of the line where the character is |
| `charIndex` | `number` | position of the character on the line |

#### Returns

[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)

style object

#### Inherited from

ITextClickBehavior.getCompleteStyleDeclaration

#### Defined in

[src/shapes/Text/StyledText.ts:264](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L264)

___

### getCoords

▸ **getCoords**(`absolute?`, `calculate?`): [`Point`](Point.md)[]

return correct set of coordinates for intersection
this will return either aCoords or lineCoords.
The coords are returned in an array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `absolute` | `boolean` | `false` | will return aCoords if true or lineCoords |
| `calculate` | `boolean` | `false` | will return aCoords if true or lineCoords |

#### Returns

[`Point`](Point.md)[]

[tl, tr, br, bl] of points

#### Inherited from

ITextClickBehavior.getCoords

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:237](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L237)

___

### getCurrentCharColor

▸ **getCurrentCharColor**(): ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

High level function to know the color of the cursor.
the currentChar is the one that precedes the cursor
Returns color (fill) of char at the current cursor
if the text object has a pattern or gradient for filler, it will return that.
Unused by the library, is for the end user

#### Returns

``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

Character color (fill)

#### Defined in

[src/shapes/IText/IText.ts:673](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L673)

___

### getCurrentCharFontSize

▸ **getCurrentCharFontSize**(): `number`

High level function to know the height of the cursor.
the currentChar is the one that precedes the cursor
Returns fontSize of char at the current cursor
Unused from the library, is for the end user

#### Returns

`number`

Character font size

#### Defined in

[src/shapes/IText/IText.ts:660](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L660)

___

### getDownCursorOffset

▸ **getDownCursorOffset**(`e`, `isRight`): `number`

Gets start offset of a selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |
| `isRight` | `boolean` |  |

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getDownCursorOffset

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:345](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L345)

___

### getHeightOfChar

▸ **getHeightOfChar**(`line`, `_char`): `number`

Computes height of character at given position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `line` | `number` | the line index number |
| `_char` | `number` | the character index number |

#### Returns

`number`

fontSize of the character

#### Inherited from

ITextClickBehavior.getHeightOfChar

#### Defined in

[src/shapes/Text/Text.ts:855](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L855)

___

### getHeightOfLine

▸ **getHeightOfLine**(`lineIndex`): `number`

Calculate height of line at 'lineIndex'

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | index of line to calculate |

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getHeightOfLine

#### Defined in

[src/shapes/Text/Text.ts:1014](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1014)

___

### getLineWidth

▸ `Private` **getLineWidth**(`lineIndex`): `number`

Measure a single line given its index. Used to calculate the initial
text bounding box. The values are calculated and stored in __lineWidths cache.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | line number |

#### Returns

`number`

Line width

#### Inherited from

ITextClickBehavior.getLineWidth

#### Defined in

[src/shapes/Text/Text.ts:1504](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1504)

___

### getObjectOpacity

▸ **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getObjectOpacity

#### Defined in

[src/shapes/Object/Object.ts:659](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L659)

___

### getObjectScaling

▸ **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.getObjectScaling

#### Defined in

[src/shapes/Object/Object.ts:628](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L628)

___

### getParent

▸ **getParent**<`T`\>(`strict?`): `undefined` \| `TAncestor`

Returns instance's parent **EXCLUDING** `ActiveSelection`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `boolean` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strict?` | `T` | exclude canvas as well |

#### Returns

`undefined` \| `TAncestor`

#### Inherited from

ITextClickBehavior.getParent

#### Defined in

[src/shapes/Object/StackedObject.ts:51](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L51)

___

### getPointByOrigin

▸ **getPointByOrigin**(`originX`, `originY`): [`Point`](Point.md)

Returns the coordinates of the object as if it has a different origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.getPointByOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L198)

___

### getRelativeCenterPoint

▸ **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.getRelativeCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:184](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L184)

___

### getRelativeX

▸ **getRelativeX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getX](Object.md#getx)

#### Inherited from

ITextClickBehavior.getRelativeX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L128)

___

### getRelativeXY

▸ **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in parent's coordinate plane

#### Inherited from

ITextClickBehavior.getRelativeXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:189](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L189)

___

### getRelativeY

▸ **getRelativeY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in parent's coordinate plane\
if parent is canvas then this property is identical to [getY](Object.md#gety)

#### Inherited from

ITextClickBehavior.getRelativeY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L144)

___

### getScaledHeight

▸ **getScaledHeight**(): `number`

Returns height of an object bounding box counting transformations

#### Returns

`number`

height value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

ITextClickBehavior.getScaledHeight

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:558](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L558)

___

### getScaledWidth

▸ **getScaledWidth**(): `number`

Returns width of an object's bounding box counting transformations

#### Returns

`number`

width value

**`Todo`**

shouldn't this account for group transform and return the actual size in canvas coordinate plane?

#### Inherited from

ITextClickBehavior.getScaledWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L549)

___

### getSelectedText

▸ **getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

ITextClickBehavior.getSelectedText

#### Defined in

[src/shapes/IText/ITextBehavior.ts:225](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L225)

___

### getSelectionStartFromPointer

▸ **getSelectionStartFromPointer**(`e`): `number`

Returns index of a character corresponding to where an object was clicked

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |

#### Returns

`number`

Index of a character

#### Inherited from

ITextClickBehavior.getSelectionStartFromPointer

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:243](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L243)

___

### getSelectionStyles

▸ **getSelectionStyles**(`startIndex?`, `endIndex?`, `complete?`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[]

Gets style of a current selection/cursor (at the start position)
if startIndex or endIndex are not provided, selectionStart or selectionEnd will be used.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `startIndex` | `number` | Start index to get styles at |
| `endIndex` | `number` | End index to get styles at, if not specified selectionEnd or startIndex + 1 |
| `complete?` | `boolean` | get full style or not |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[]

styles an array with one, zero or more Style objects

#### Overrides

ITextClickBehavior.getSelectionStyles

#### Defined in

[src/shapes/IText/IText.ts:307](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L307)

___

### getStyleAtPosition

▸ `Private` **getStyleAtPosition**(`position`, `complete?`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

Gets style of a current selection/cursor position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | to get styles at |
| `complete?` | `boolean` | full style if true |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

style Style object at a specified index

#### Inherited from

ITextClickBehavior.getStyleAtPosition

#### Defined in

[src/shapes/Text/StyledText.ts:221](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L221)

___

### getSvgCommons

▸ **getSvgCommons**(`this`): `string`

Returns id attribute for svg output

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> & { `id?`: `string`  } |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.getSvgCommons

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:84](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L84)

___

### getSvgFilter

▸ **getSvgFilter**(`this`): `string`

Returns filter for svg shadow

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.getSvgFilter

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L76)

___

### getSvgStyles

▸ **getSvgStyles**(`this`, `skipShadow?`): `string`

Returns styles-string for svg-export

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `skipShadow?` | `boolean` | a boolean to skip shadow filter output |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.getSvgStyles

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L21)

___

### getSvgTransform

▸ **getSvgTransform**(`this`, `full?`, `additionalTransform?`): `string`

Returns transform-string for svg-export

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | `undefined` |
| `full?` | `boolean` | `undefined` |
| `additionalTransform` | `string` | `''` |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.getSvgTransform

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

▸ **getTotalAngle**(): [`TDegree`](../modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../modules.md#tdegree)

#### Inherited from

ITextClickBehavior.getTotalAngle

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:607](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L607)

___

### getTotalObjectScaling

▸ **getTotalObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling, zoom and retina

#### Returns

[`Point`](Point.md)

object with scaleX and scaleY properties

#### Inherited from

ITextClickBehavior.getTotalObjectScaling

#### Defined in

[src/shapes/Object/Object.ts:645](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L645)

___

### getUpCursorOffset

▸ **getUpCursorOffset**(`e`, `isRight`): `number`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |
| `isRight` | `boolean` |  |

#### Returns

`number`

#### Inherited from

ITextClickBehavior.getUpCursorOffset

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:390](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L390)

___

### getValueOfPropertyAt

▸ **getValueOfPropertyAt**<`T`\>(`lineIndex`, `charIndex`, `property`): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>[`T`]

Retrieves the value of property at given character position

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `StylePropertiesType` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | the line number |
| `charIndex` | `number` | the character number |
| `property` | `T` | the property name |

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>[`T`]

the value of 'property'

#### Inherited from

ITextClickBehavior.getValueOfPropertyAt

#### Defined in

[src/shapes/Text/Text.ts:1528](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1528)

___

### getViewportTransform

▸ **getViewportTransform**(): [`TMat2D`](../modules.md#tmat2d)

Retrieves viewportTransform from Object's canvas if possible

#### Returns

[`TMat2D`](../modules.md#tmat2d)

**`Method`**

getViewportTransform

**`Member Of`**

FabricObject.prototype

#### Inherited from

ITextClickBehavior.getViewportTransform

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L655)

___

### getX

▸ **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in canvas coordinate plane

#### Inherited from

ITextClickBehavior.getX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L99)

___

### getXY

▸ **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in canvas coordinate plane

#### Inherited from

ITextClickBehavior.getXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L159)

___

### getY

▸ **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in canvas coordinate plane

#### Inherited from

ITextClickBehavior.getY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L113)

___

### graphemeSplit

▸ **graphemeSplit**(`value`): `string`[]

Override this method to customize grapheme splitting

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`[]

array of graphemes

**`Todo`**

the util `graphemeSplit` needs to be injectable in some way.
is more comfortable to inject the correct util rather than having to override text
in the middle of the prototype chain

#### Inherited from

ITextClickBehavior.graphemeSplit

#### Defined in

[src/shapes/Text/Text.ts:1706](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1706)

___

### handleFiller

▸ **handleFiller**<`T`\>(`ctx`, `property`, `filler`): `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``"fill"`` \| ``"stroke"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` |
| `property` | \`${T}Style\` |
| `filler` | `string` \| [`TFiller`](../modules.md#tfiller) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

ITextClickBehavior.handleFiller

#### Defined in

[src/shapes/Text/Text.ts:1265](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1265)

___

### hasCommonAncestors

▸ **hasCommonAncestors**<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.hasCommonAncestors

#### Defined in

[src/shapes/Object/StackedObject.ts:168](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L168)

___

### hasFill

▸ **hasFill**(): ``null`` \| `boolean` \| ``""``

return true if the object will draw a fill
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when fill happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the fill is invisible.

#### Returns

``null`` \| `boolean` \| ``""``

Boolean

**`Since`**

3.0.0

#### Inherited from

ITextClickBehavior.hasFill

#### Defined in

[src/shapes/Object/Object.ts:830](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L830)

___

### hasStroke

▸ **hasStroke**(): ``null`` \| `boolean` \| ``""``

return true if the object will draw a stroke
Does not consider text styles. This is just a shortcut used at rendering time
We want it to be an approximation and be fast.
wrote to avoid extra caching, it has to return true when stroke happens,
can guess when it will not happen at 100% chance, does not matter if it misses
some use case where the stroke is invisible.

#### Returns

``null`` \| `boolean` \| ``""``

Boolean

**`Since`**

3.0.0

#### Inherited from

ITextClickBehavior.hasStroke

#### Defined in

[src/shapes/Object/Object.ts:814](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L814)

___

### initBehavior

▸ **initBehavior**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.initBehavior

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:36](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L36)

___

### initDelayedCursor

▸ **initDelayedCursor**(`restart?`): `void`

Initializes delayed cursor

#### Parameters

| Name | Type |
| :------ | :------ |
| `restart?` | `boolean` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.initDelayedCursor

#### Defined in

[src/shapes/IText/ITextBehavior.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L173)

___

### initDimensions

▸ `Private` **initDimensions**(): `void`

Initialize text dimensions. Render all text on given context
or on a offscreen canvas to get the text width with measureText.
Updates this.width and this.height with the proper values.
Does not return dimensions.

#### Returns

`void`

#### Overrides

ITextClickBehavior.initDimensions

#### Defined in

[src/shapes/IText/IText.ts:294](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L294)

___

### initHiddenTextarea

▸ **initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

ITextClickBehavior.initHiddenTextarea

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:63](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L63)

___

### insertCharStyleObject

▸ **insertCharStyleObject**(`lineIndex`, `charIndex`, `quantity`, `copiedStyle?`): `void`

Inserts style object for a given line/char index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | Index of a line |
| `charIndex` | `number` | Index of a char |
| `quantity` | `number` | number Style object to insert, if given |
| `copiedStyle?` | `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[] | array of style objects |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.insertCharStyleObject

#### Defined in

[src/shapes/IText/ITextBehavior.ts:867](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L867)

___

### insertChars

▸ **insertChars**(`text`, `style`, `start`, `end?`): `void`

insert characters at start position, before start position.
start  equal 1 it means the text get inserted between actual grapheme 0 and 1
if style array is provided, it must be as the same length of text in graphemes
if end is provided and is bigger than start, old text is replaced.
start/end ar per grapheme position in _text array.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `text` | `string` | `undefined` | text to insert |
| `style` | `undefined` \| `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[] | `undefined` | array of style objects |
| `start` | `number` | `undefined` |  |
| `end` | `number` | `start` | default to start + 1 |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.insertChars

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1017](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L1017)

___

### insertNewStyleBlock

▸ **insertNewStyleBlock**(`insertedText`, `start`, `copiedStyle?`): `void`

Inserts style object(s)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `insertedText` | `string`[] | Characters at the location where style is inserted |
| `start` | `number` | cursor index for inserting style |
| `copiedStyle?` | `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>[] | array of style objects to insert. |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.insertNewStyleBlock

#### Defined in

[src/shapes/IText/ITextBehavior.ts:925](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L925)

___

### insertNewlineStyleObject

▸ **insertNewlineStyleObject**(`lineIndex`, `charIndex`, `qty`, `copiedStyle?`): `void`

Handle insertion of more consecutive style lines for when one or more
newlines gets added to the text. Since current style needs to be shifted
first we shift the current style of the number lines needed, then we add
new lines from the last to the first.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | Index of a line |
| `charIndex` | `number` | Index of a char |
| `qty` | `number` | number of lines to add |
| `copiedStyle?` | `Object` | Array of objects styles |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.insertNewlineStyleObject

#### Defined in

[src/shapes/IText/ITextBehavior.ts:801](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L801)

___

### intersectsWithObject

▸ **intersectsWithObject**(`other`, `absolute?`, `calculate?`): `boolean`

Checks if object intersects with another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of calculating them |

#### Returns

`boolean`

true if object intersects with another object

#### Inherited from

ITextClickBehavior.intersectsWithObject

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:277](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L277)

___

### intersectsWithRect

▸ **intersectsWithRect**(`pointTL`, `pointBR`, `absolute?`, `calculate?`): `boolean`

Checks if object intersects with an area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](Point.md) | top-left point of area |
| `pointBR` | [`Point`](Point.md) | bottom-right point of area |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object intersects with an area formed by 2 points

#### Inherited from

ITextClickBehavior.intersectsWithRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:255](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L255)

___

### isCacheDirty

▸ **isCacheDirty**(`skipCanvas?`): `boolean`

Check if cache is dirty

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `skipCanvas` | `boolean` | `false` | skip canvas checks because this object is painted on parent canvas. |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isCacheDirty

#### Defined in

[src/shapes/Object/Object.ts:975](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L975)

___

### isContainedWithinObject

▸ **isContainedWithinObject**(`other`, `absolute?`, `calculate?`): `boolean`

Checks if object is fully contained within area of another object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `other` | `ObjectGeometry`<[`ObjectEvents`](../interfaces/ObjectEvents.md)\> | `undefined` | Object to test |
| `absolute?` | `boolean` | `false` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of store ones |

#### Returns

`boolean`

true if object is fully contained within area of another object

#### Inherited from

ITextClickBehavior.isContainedWithinObject

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:302](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L302)

___

### isContainedWithinRect

▸ **isContainedWithinRect**(`pointTL`, `pointBR`, `absolute?`, `calculate?`): `boolean`

Checks if object is fully contained within area formed by 2 points

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pointTL` | [`Point`](Point.md) | top-left point of area |
| `pointBR` | [`Point`](Point.md) | bottom-right point of area |
| `absolute?` | `boolean` | use coordinates without viewportTransform |
| `calculate?` | `boolean` | use coordinates of current position instead of stored one |

#### Returns

`boolean`

true if object is fully contained within area formed by 2 points

#### Inherited from

ITextClickBehavior.isContainedWithinRect

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:326](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L326)

___

### isControlVisible

▸ **isControlVisible**(`controlKey`): `boolean`

Returns true if the specified control is visible, false otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are usually 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr', but since the control api allow for any control name, can be any string. |

#### Returns

`boolean`

true if the specified control is visible, false otherwise

#### Inherited from

ITextClickBehavior.isControlVisible

#### Defined in

[src/shapes/Object/InteractiveObject.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L549)

___

### isDescendantOf

▸ **isDescendantOf**(`target`): `boolean`

Checks if object is descendant of target
Should be used instead of [contains](StaticCanvas.md#contains) or [contains](StaticCanvas.md#contains) for performance reasons

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `TAncestor` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isDescendantOf

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L64)

___

### isEmptyStyles

▸ **isEmptyStyles**(`lineIndex?`): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex?` | `number` | , lineIndex is on wrapped lines. |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isEmptyStyles

#### Defined in

[src/shapes/Text/StyledText.ts:37](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L37)

___

### isEndOfWrapping

▸ **isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isEndOfWrapping

#### Defined in

[src/shapes/Text/Text.ts:525](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L525)

___

### isInFrontOf

▸ **isInFrontOf**<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

ITextClickBehavior.isInFrontOf

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

▸ **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isNotVisible

#### Defined in

[src/shapes/Object/Object.ts:737](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L737)

___

### isOnScreen

▸ **isOnScreen**(`calculate?`): `boolean`

Checks if object is contained within the canvas with current viewportTransform
the check is done stopping at first point that appears on screen

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `calculate?` | `boolean` | `false` | use coordinates of current position instead of .aCoords |

#### Returns

`boolean`

true if object is fully or partially contained within canvas

#### Inherited from

ITextClickBehavior.isOnScreen

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L376)

___

### isOverlapping

▸ **isOverlapping**<`T`\>(`other`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ObjectGeometry`<[`ObjectEvents`](../interfaces/ObjectEvents.md), `T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | `T` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isOverlapping

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:341](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L341)

___

### isPartiallyOnScreen

▸ **isPartiallyOnScreen**(`calculate?`): `boolean`

Checks if object is partially contained within the canvas with current viewportTransform

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `calculate?` | `boolean` | use coordinates of current position instead of stored ones |

#### Returns

`boolean`

true if object is partially contained within canvas

#### Inherited from

ITextClickBehavior.isPartiallyOnScreen

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:425](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L425)

___

### isTripleClick

▸ **isTripleClick**(`newPointer`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newPointer` | [`XY`](../interfaces/XY.md) |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isTripleClick

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:96](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L96)

___

### isType

▸ **isType**(`...types`): `boolean`

Returns true if any of the specified types is identical to the type of an instance

#### Parameters

| Name | Type |
| :------ | :------ |
| `...types` | `string`[] |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.isType

#### Defined in

[src/shapes/Object/Object.ts:1465](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1465)

___

### measureLine

▸ **measureLine**(`lineIndex`): `Object`

measure a text line measuring all characters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | line number |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `numOfSpaces` | `number` |
| `width` | `number` |

#### Inherited from

ITextClickBehavior.measureLine

#### Defined in

[src/shapes/Text/Text.ts:863](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L863)

___

### missingNewlineOffset

▸ **missingNewlineOffset**(`lineIndex`): `number`

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.
It return always for text and Itext.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`number`

Number

#### Inherited from

ITextClickBehavior.missingNewlineOffset

#### Defined in

[src/shapes/Text/Text.ts:536](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L536)

___

### mouseUpHandler

▸ `Private` **mouseUpHandler**(`«destructured»`): `void`

standard handler for mouse up, overridable

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.mouseUpHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:181](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L181)

___

### moveCursorDown

▸ **moveCursorDown**(`e`): `void`

Moves cursor down

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.moveCursorDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:451](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L451)

___

### moveCursorLeft

▸ **moveCursorLeft**(`e`): `void`

Moves cursor left

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.moveCursorLeft

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:535](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L535)

___

### moveCursorLeftWithShift

▸ **moveCursorLeftWithShift**(`e`): `undefined` \| `boolean`

Moves cursor left while keeping selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

ITextClickBehavior.moveCursorLeftWithShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:607](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L607)

___

### moveCursorLeftWithoutShift

▸ **moveCursorLeftWithoutShift**(`e`): `boolean`

Moves cursor left without keeping selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.moveCursorLeftWithoutShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:587](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L587)

___

### moveCursorRight

▸ **moveCursorRight**(`e`): `void`

Moves cursor right

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.moveCursorRight

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:623](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L623)

___

### moveCursorRightWithShift

▸ **moveCursorRightWithShift**(`e`): `undefined` \| `boolean`

Moves cursor right while keeping selection

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `KeyboardEvent` |

#### Returns

`undefined` \| `boolean`

#### Inherited from

ITextClickBehavior.moveCursorRightWithShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:655](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L655)

___

### moveCursorRightWithoutShift

▸ **moveCursorRightWithoutShift**(`e`): `boolean`

Moves cursor right without keeping selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.moveCursorRightWithoutShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:671](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L671)

___

### moveCursorUp

▸ **moveCursorUp**(`e`): `void`

Moves cursor up

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.moveCursorUp

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:465](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L465)

___

### moveCursorWithShift

▸ **moveCursorWithShift**(`offset`): `boolean`

Moves cursor with shift

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.moveCursorWithShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:503](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L503)

___

### moveCursorWithoutShift

▸ **moveCursorWithoutShift**(`offset`): `boolean`

Moves cursor up without shift

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.moveCursorWithoutShift

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:520](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L520)

___

### needsItsOwnCache

▸ **needsItsOwnCache**(): `boolean`

When set to `true`, force the object to have its own cache, even if it is inside a group
it may be needed when your object behave in a particular way on the cache and always needs
its own isolated canvas to render correctly.
Created to be overridden
since 1.7.12

#### Returns

`boolean`

Boolean

#### Inherited from

ITextClickBehavior.needsItsOwnCache

#### Defined in

[src/shapes/Object/Object.ts:842](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L842)

___

### off

▸ **off**<`K`\>(`eventName`, `handler`): `void`

unsubscribe an event listener

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`any`\> | event listener to unsubscribe |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.off

#### Defined in

[src/Observable.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L120)

▸ **off**(`handlers`): `void`

unsubscribe event listeners

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> | handlers key/value pairs (eg. {'after:render': handler, 'selection:cleared': handler}) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.off

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

ITextClickBehavior.off

#### Defined in

[src/Observable.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L129)

___

### on

▸ **on**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

on

#### Inherited from

ITextClickBehavior.on

#### Defined in

[src/Observable.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L23)

▸ **on**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

ITextClickBehavior.on

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### onCompositionEnd

▸ **onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onCompositionEnd

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:281](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L281)

___

### onCompositionStart

▸ **onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onCompositionStart

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:274](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L274)

___

### onCompositionUpdate

▸ **onCompositionUpdate**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `CompositionEvent` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onCompositionUpdate

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:285](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L285)

___

### onDeselect

▸ **onDeselect**(`options?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.e?` | [`TPointerEvent`](../modules.md#tpointerevent) |
| `options.object?` | [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.onDeselect

#### Defined in

[src/shapes/IText/ITextBehavior.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L111)

___

### onDragStart

▸ **onDragStart**(`e`): `boolean`

override this method to control whether instance should/shouldn't become a drag source,

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`boolean`

should handle event

**`See`**

also DraggableTextDelegate#isActive

#### Inherited from

ITextClickBehavior.onDragStart

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L65)

___

### onInput

▸ **onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\> & { `hiddenTextarea`: `HTMLTextAreaElement`  } | - |
| `e` | `Event` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onInput

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:167](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L167)

___

### onKeyDown

▸ **onKeyDown**(`e`): `void`

Handles keydown event
only used for arrows and combination of modifier keys.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onKeyDown

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L115)

___

### onKeyUp

▸ **onKeyUp**(`e`): `void`

Handles keyup event
We handle KeyUp because ie11 and edge have difficulties copy/pasting
if a copy/cut event fired, keyup is dismissed

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | `KeyboardEvent` | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onKeyUp

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:147](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L147)

___

### onMouseDown

▸ `Private` **onMouseDown**(`options`): `void`

Default event handler to simulate triple click

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.onMouseDown

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:80](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L80)

___

### onSelect

▸ **onSelect**(`options?`): `boolean`

This callback function is called every time _discardActiveObject or _setActiveObject
try to to select this object. If the function returns true, the process is cancelled

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Object` | options sent from the upper functions |
| `options.e?` | [`TPointerEvent`](../modules.md#tpointerevent) | event if the process is generated by an event |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.onSelect

#### Defined in

[src/shapes/Object/InteractiveObject.ts:637](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L637)

___

### once

▸ **once**<`K`, `E`\>(`eventName`, `handler`): `VoidFunction`

Observes specified event **once**

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |
| `E` | `E` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `K` | Event name (eg. 'after:render') |
| `handler` | `TEventCallback`<`E`\> | Function that receives a notification when an event of the specified type occurs |

#### Returns

`VoidFunction`

disposer

**`Alias`**

once

#### Inherited from

ITextClickBehavior.once

#### Defined in

[src/Observable.ts:62](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L62)

▸ **once**(`handlers`): `VoidFunction`

#### Parameters

| Name | Type |
| :------ | :------ |
| `handlers` | `EventRegistryObject`<`EventSpec`\> |

#### Returns

`VoidFunction`

#### Inherited from

ITextClickBehavior.once

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

___

### paste

▸ **paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

ITextClickBehavior.paste

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L317)

___

### removeChars

▸ **removeChars**(`start`, `end?`): `void`

Removes characters from start/end
start/end ar per grapheme position in _text array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` |  |
| `end` | `number` | default to start + 1 |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.removeChars

#### Defined in

[src/shapes/IText/ITextBehavior.ts:995](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L995)

___

### removeStyle

▸ **removeStyle**(`property`): `void`

Remove a style property or properties from all individual character styles
in a text object.  Deletes the character style object if it contains no other style
props.  Deletes a line style object if it contains no other character styles.

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `StylePropertiesType` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.removeStyle

#### Defined in

[src/shapes/Text/StyledText.ts:161](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L161)

___

### removeStyleFromTo

▸ **removeStyleFromTo**(`start`, `end`): `void`

remove and reflow a style block from start to end.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | linear start position for removal (included in removal) |
| `end` | `number` | linear end position for removal ( excluded from removal ) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.removeStyleFromTo

#### Defined in

[src/shapes/IText/ITextBehavior.ts:716](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L716)

___

### render

▸ `Private` **render**(`ctx`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context to render on |

#### Returns

`void`

#### Overrides

ITextClickBehavior.render

#### Defined in

[src/shapes/IText/IText.ts:345](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L345)

___

### renderCache

▸ **renderCache**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.renderCache

#### Defined in

[src/shapes/Object/Object.ts:783](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L783)

___

### renderCursor

▸ **renderCursor**(`ctx`, `boundaries`): `void`

Renders cursor

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | transformed context to draw on |
| `boundaries` | `CursorBoundaries` |  |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:489](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L489)

___

### renderCursorAt

▸ **renderCursorAt**(`selectionStart`): `void`

Renders cursor on context Top, outside the animation cycle, on request
Used for the drag/drop effect.
If contextTop is not available, do nothing.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectionStart` | `number` |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:479](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L479)

___

### renderCursorOrSelection

▸ **renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Overrides

ITextClickBehavior.renderCursorOrSelection

#### Defined in

[src/shapes/IText/IText.ts:369](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L369)

___

### renderDragSourceEffect

▸ **renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Overrides

ITextClickBehavior.renderDragSourceEffect

#### Defined in

[src/shapes/IText/IText.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L549)

___

### renderDropTargetEffect

▸ **renderDropTargetEffect**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `DragEvent` |

#### Returns

`void`

#### Overrides

ITextClickBehavior.renderDropTargetEffect

#### Defined in

[src/shapes/IText/IText.ts:559](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L559)

___

### renderSelection

▸ **renderSelection**(`ctx`, `boundaries`): `void`

Renders text selection

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | transformed context to draw on |
| `boundaries` | `CursorBoundaries` | Object with left/top/leftOffset/topOffset |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:534](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L534)

___

### restartCursorIfNeeded

▸ **restartCursorIfNeeded**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.restartCursorIfNeeded

#### Defined in

[src/shapes/IText/ITextBehavior.ts:200](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L200)

___

### rotate

▸ **rotate**(`angle`): `void`

Sets "angle" of an instance with centered rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `angle` | [`TDegree`](../modules.md#tdegree) | Angle value (in degrees) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.rotate

#### Defined in

[src/shapes/Object/Object.ts:1493](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1493)

___

### scale

▸ **scale**(`value`): `void`

Scales an object (equally by x and y)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | Scale factor |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.scale

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:567](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L567)

___

### scaleToHeight

▸ **scaleToHeight**(`value`, `absolute?`): `void`

Scales an object to a given height, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `value` | `number` | `undefined` | New height value |
| `absolute` | `boolean` | `false` | ignore viewport |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.scaleToHeight

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L592)

___

### scaleToWidth

▸ **scaleToWidth**(`value`, `absolute?`): `void`

Scales an object to a given width, with respect to bounding box (scaling by x/y equally)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | New width value |
| `absolute?` | `boolean` | ignore viewport |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.scaleToWidth

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:579](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L579)

___

### searchWordBoundary

▸ **searchWordBoundary**(`selectionStart`, `direction`): `number`

Finds index corresponding to beginning or end of a word

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |
| `direction` | ``1`` \| ``-1`` | 1 or -1 |

#### Returns

`number`

Index of the beginning or end of a word

#### Inherited from

ITextClickBehavior.searchWordBoundary

#### Defined in

[src/shapes/IText/ITextBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L317)

___

### selectAll

▸ **selectAll**(): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.selectAll

#### Defined in

[src/shapes/IText/ITextBehavior.ts:213](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L213)

___

### selectLine

▸ **selectLine**(`selectionStart`): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

Selects a line based on the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.selectLine

#### Defined in

[src/shapes/IText/ITextBehavior.ts:363](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L363)

___

### selectWord

▸ **selectWord**(`selectionStart`): `void`

Selects a word based on the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.selectWord

#### Defined in

[src/shapes/IText/ITextBehavior.ts:342](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L342)

___

### set

▸ **set**(`key`, `value?`): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.set

#### Defined in

[src/shapes/Text/Text.ts:1749](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1749)

___

### setControlVisible

▸ **setControlVisible**(`controlKey`, `visible`): `void`

Sets the visibility of the specified control.
please do not use.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `controlKey` | `string` | The key of the control. Possible values are 'tl', 'tr', 'br', 'bl', 'ml', 'mt', 'mr', 'mb', 'mtr'. but since the control api allow for any control name, can be any string. |
| `visible` | `boolean` | true to set the specified control visible, false otherwise |

#### Returns

`void`

**`Todo`**

discuss this overlap of priority here with the team. Andrea Bogazzi for details

#### Inherited from

ITextClickBehavior.setControlVisible

#### Defined in

[src/shapes/Object/InteractiveObject.ts:564](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L564)

___

### setControlsVisibility

▸ **setControlsVisibility**(`options?`): `void`

Sets the visibility state of object controls, this is just a bulk option for setControlVisible;

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `boolean`\> | with an optional key per control example: {Boolean} [options.bl] true to enable the bottom-left control, false to disable it |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setControlsVisibility

#### Defined in

[src/shapes/Object/InteractiveObject.ts:576](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L576)

___

### setCoords

▸ **setCoords**(): `void`

Sets corner and controls position coordinates based on current angle, width and height, left and top.
oCoords are used to find the corners
aCoords are used to quickly find an object on the canvas
lineCoords are used to quickly find object during pointer events.
See [https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords](https://github.com/fabricjs/fabric.js/wiki/When-to-call-setCoords) and [http://fabricjs.com/fabric-gotchas](http://fabricjs.com/fabric-gotchas)

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setCoords

#### Defined in

[src/shapes/Object/InteractiveObject.ts:319](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L319)

___

### setCursorByClick

▸ **setCursorByClick**(`e`): `void`

Changes cursor location in a text depending on passed pointer (x/y) object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) | Event object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setCursorByClick

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:222](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L222)

___

### setOnGroup

▸ **setOnGroup**(): `void`

This callback function is called by the parent group of an object every
time a non-delegated property changes on the group. It is passed the key
and value as parameters. Not adding in this function's signature to avoid
Travis build error about unused variables.

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setOnGroup

#### Defined in

[src/shapes/Object/Object.ts:1515](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1515)

___

### setOptions

▸ `Protected` **setOptions**(`options?`): `void`

Sets object's properties from options, for class constructor only.
Needs to be overridden for different defaults.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | `Record`<`string`, `any`\> | Options object |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setOptions

#### Defined in

[src/shapes/Object/Object.ts:494](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L494)

___

### setPathInfo

▸ **setPathInfo**(): `void`

If text has a path, it will add the extra information needed
for path and text calculations

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setPathInfo

#### Defined in

[src/shapes/Text/Text.ts:435](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L435)

___

### setPositionByOrigin

▸ **setPositionByOrigin**(`pos`, `originX`, `originY`): `void`

Sets the position of the object taking into consideration the object's origin

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pos` | [`Point`](Point.md) | The new position of the object |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setPositionByOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:213](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L213)

___

### setRelativeX

▸ **setRelativeX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](Object.md#originx) property in parent's coordinate plane\ if parent is canvas then this method is identical to [setX](Object.md#setx) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setRelativeX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L136)

___

### setRelativeXY

▸ **setRelativeXY**(`point`, `originX?`, `originY?`): `void`

As [setXY](Object.md#setxy), but in current parent's coordinate plane (the current group if any or the canvas)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | position according to object's originX originY properties in parent's coordinate plane |
| `originX?` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setRelativeXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:199](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L199)

___

### setRelativeY

▸ **setRelativeY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](Object.md#originy) property in parent's coordinate plane\ if parent is canvas then this property is identical to [setY](Object.md#sety) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setRelativeY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:152](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L152)

___

### setSelectionEnd

▸ **setSelectionEnd**(`index`): `void`

Sets selection end (right boundary of a selection)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to set selection end to |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:257](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L257)

___

### setSelectionStart

▸ **setSelectionStart**(`index`): `void`

Sets selection start (left boundary of a selection)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `index` | `number` | Index to set selection start to |

#### Returns

`void`

#### Defined in

[src/shapes/IText/IText.ts:248](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L248)

___

### setSelectionStartEndWithShift

▸ **setSelectionStartEndWithShift**(`start`, `end`, `newSelection`): `void`

Set the selectionStart and selectionEnd according to the new position of cursor
mimic the key - mouse navigation when shift is pressed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |
| `newSelection` | `number` |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setSelectionStartEndWithShift

#### Defined in

[src/shapes/IText/ITextBehavior.ts:1044](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L1044)

___

### setSelectionStyles

▸ **setSelectionStyles**(`styles?`, `startIndex?`, `endIndex?`): `void`

Sets style of a current selection, if no selection exist, do not set anything.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `styles?` | `object` | Styles object |
| `startIndex?` | `number` | Start index to get styles at |
| `endIndex?` | `number` | End index to get styles at, if not specified selectionEnd or startIndex + 1 |

#### Returns

`void`

#### Overrides

ITextClickBehavior.setSelectionStyles

#### Defined in

[src/shapes/IText/IText.ts:321](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L321)

___

### setSubscript

▸ **setSubscript**(`start`, `end`): `void`

Turns the character into an 'inferior figure' (i.e. 'subscript')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setSubscript

#### Defined in

[src/shapes/Text/Text.ts:1406](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1406)

___

### setSuperscript

▸ **setSuperscript**(`start`, `end`): `void`

Turns the character into a 'superior figure' (i.e. 'superscript')

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | selection start |
| `end` | `number` | selection end |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setSuperscript

#### Defined in

[src/shapes/Text/Text.ts:1397](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1397)

___

### setX

▸ **setX**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | x position according to object's [originX](Object.md#originx) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setX

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:106](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L106)

___

### setXY

▸ **setXY**(`point`, `originX?`, `originY?`): `void`

Set an object position to a particular point, the point is intended in absolute ( canvas ) coordinate.
You can specify originX and originY values,
that otherwise are the object's current values.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | position in canvas coordinate plane |
| `originX?` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY?` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

`void`

**`Example`**

Set object's bottom left corner to point (5,5) on canvas
```ts
object.setXY(new Point(5, 5), 'left', 'bottom').
```

#### Inherited from

ITextClickBehavior.setXY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:176](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L176)

___

### setY

▸ **setY**(`value`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `number` | y position according to object's [originY](Object.md#originy) property in canvas coordinate plane |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.setY

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L120)

___

### shiftLineStyles

▸ **shiftLineStyles**(`lineIndex`, `offset`): `void`

Shifts line styles up or down

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | Index of a line |
| `offset` | `number` | Can any number? |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.shiftLineStyles

#### Defined in

[src/shapes/IText/ITextBehavior.ts:778](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L778)

___

### shouldCache

▸ **shouldCache**(): `boolean`

Decide if the object should cache or not. Create its own cache level
objectCaching is a global flag, wins over everything
needsItsOwnCache should be used when the object drawing method requires
a cache step. None of the fabric classes requires it.
Generally you do not cache objects in groups because the group outside is cached.
Read as: cache if is needed, or if the feature is enabled but we are not already caching.

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.shouldCache

#### Defined in

[src/shapes/Object/Object.ts:866](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L866)

___

### shouldStartDragging

▸ **shouldStartDragging**(): `boolean`

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.shouldStartDragging

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:57](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L57)

___

### strokeBorders

▸ **strokeBorders**(`ctx`, `size`): `void`

override this function in order to customize the drawing of the control box, e.g. rounded corners, different border style.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | ctx is rotated and translated so that (0,0) is at object's center |
| `size` | [`Point`](Point.md) | the control box size used |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.strokeBorders

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L376)

___

### styleHas

▸ **styleHas**(`property`, `lineIndex?`): `boolean`

Returns true if object has a style property or has it ina specified line
This function is used to detect if a text will use a particular property or not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `StylePropertiesType` | to check for |
| `lineIndex?` | `number` | to check the style on |

#### Returns

`boolean`

#### Inherited from

ITextClickBehavior.styleHas

#### Defined in

[src/shapes/Text/StyledText.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L66)

___

### toCanvasElement

▸ **toCanvasElement**(`options?`): `HTMLCanvasElement`

block cursor/selection logic while rendering the exported canvas

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `any` |

#### Returns

`HTMLCanvasElement`

**`Todo`**

this workaround should be replaced with a more robust solution

#### Overrides

ITextClickBehavior.toCanvasElement

#### Defined in

[src/shapes/IText/IText.ts:357](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L357)

___

### toClipPathSVG

▸ **toClipPathSVG**(`this`, `reviver?`): `string`

Returns svg clipPath representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

ITextClickBehavior.toClipPathSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:143](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L143)

___

### toDataURL

▸ **toDataURL**(`options?`): `string`

Converts an object into a data-url-like string

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `any` | Options object |

#### Returns

`string`

Returns a data: URL containing a representation of the object in the format specified by options.format

#### Inherited from

ITextClickBehavior.toDataURL

#### Defined in

[src/shapes/Object/Object.ts:1452](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1452)

___

### toDatalessObject

▸ **toDatalessObject**(`propertiesToInclude?`): `any`

Returns (dataless) object representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `any`[] | Any properties that you might want to additionally include in the output |

#### Returns

`any`

Object representation of an instance

#### Inherited from

ITextClickBehavior.toDatalessObject

#### Defined in

[src/shapes/Object/Object.ts:580](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L580)

___

### toJSON

▸ **toJSON**(): `any`

Returns a JSON representation of an instance

#### Returns

`any`

JSON

#### Inherited from

ITextClickBehavior.toJSON

#### Defined in

[src/shapes/Object/Object.ts:1484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1484)

___

### toObject

▸ **toObject**<`T`, `K`\>(`propertiesToInclude?`): `Pick`<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`<`Props` & [`TClassProperties`](../modules.md#tclassproperties)<[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`<`T`, `K`\> & `SProps`

Object representation of an instance

#### Inherited from

ITextClickBehavior.toObject

#### Defined in

[src/shapes/Text/Text.ts:1738](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1738)

___

### toSVG

▸ **toSVG**(`this`, `reviver?`): `string`

Returns svg representation of an instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | `FabricObjectSVGExportMixin` & [`Object`](Object.md)<`Partial`<[`FabricObjectProps`](../interfaces/FabricObjectProps.md)\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\> | - |
| `reviver?` | [`TSVGReviver`](../modules.md#tsvgreviver) | Method for further parsing of svg representation. |

#### Returns

`string`

svg representation of an instance

#### Inherited from

ITextClickBehavior.toSVG

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L129)

___

### toString

▸ **toString**(): `string`

Returns string representation of an instance

#### Returns

`string`

String representation of text object

#### Inherited from

ITextClickBehavior.toString

#### Defined in

[src/shapes/Text/Text.ts:570](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L570)

___

### toggle

▸ **toggle**(`property`): [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

ITextClickBehavior.toggle

#### Defined in

[src/CommonMethods.ts:46](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L46)

___

### transform

▸ **transform**(`ctx`): `void`

Transforms context when rendering an object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ctx` | `CanvasRenderingContext2D` | Context |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.transform

#### Defined in

[src/shapes/Object/Object.ts:502](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L502)

___

### transformMatrixKey

▸ **transformMatrixKey**(`skipGroup?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `skipGroup` | `boolean` | `false` |

#### Returns

`string`

#### Inherited from

ITextClickBehavior.transformMatrixKey

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:696](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L696)

___

### translateToCenterPoint

▸ **translateToCenterPoint**(`point`, `originX`, `originY`): [`Point`](Point.md)

Translates the coordinates from origin to center coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | The point which corresponds to the originX and originY params |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.translateToCenterPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:126](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L126)

___

### translateToGivenOrigin

▸ **translateToGivenOrigin**(`point`, `fromOriginX`, `fromOriginY`, `toOriginX`, `toOriginY`): [`Point`](Point.md)

Translates the coordinates from a set of origin to another (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point` | [`Point`](Point.md) | The point which corresponds to the originX and originY params |
| `fromOriginX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `fromOriginY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |
| `toOriginX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `toOriginY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.translateToGivenOrigin

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:98](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L98)

___

### translateToOriginPoint

▸ **translateToOriginPoint**(`center`, `originX`, `originY`): [`Point`](Point.md)

Translates the coordinates from center to origin coordinates (based on the object's dimensions)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `center` | [`Point`](Point.md) | The point which corresponds to center of the object |
| `originX` | [`TOriginX`](../modules.md#toriginx) | Horizontal origin: 'left', 'center' or 'right' |
| `originY` | [`TOriginY`](../modules.md#toriginy) | Vertical origin: 'top', 'center' or 'bottom' |

#### Returns

[`Point`](Point.md)

#### Inherited from

ITextClickBehavior.translateToOriginPoint

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:151](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L151)

___

### tripleClickHandler

▸ **tripleClickHandler**(`options`): `void`

Default handler for triple click, select a line

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\> |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.tripleClickHandler

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L118)

___

### updateFromTextArea

▸ `Private` **updateFromTextArea**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.updateFromTextArea

#### Defined in

[src/shapes/IText/ITextBehavior.ts:522](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L522)

___

### updateSelectionOnMouseMove

▸ **updateSelectionOnMouseMove**(`e`): `void`

called by [textEditingManager](Canvas.md#texteditingmanager)

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | [`TPointerEvent`](../modules.md#tpointerevent) |

#### Returns

`void`

#### Inherited from

ITextClickBehavior.updateSelectionOnMouseMove

#### Defined in

[src/shapes/IText/ITextBehavior.ts:410](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L410)

___

### updateTextareaPosition

▸ `Private` **updateTextareaPosition**(): `void`

#### Returns

`void`

#### Inherited from

ITextClickBehavior.updateTextareaPosition

#### Defined in

[src/shapes/IText/ITextBehavior.ts:547](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L547)

___

### willDrawShadow

▸ **willDrawShadow**(): `boolean`

Check if this object or a child object will cast a shadow
used by Group.shouldCache to know if child has a shadow recursively

#### Returns

`boolean`

**`Deprecated`**

#### Inherited from

ITextClickBehavior.willDrawShadow

#### Defined in

[src/shapes/Object/Object.ts:879](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L879)

___

### \_fromObject

▸ `Static` **_fromObject**<`S`\>(`object`, `«destructured»?`): `Promise`<`S`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `Record`<`string`, `unknown`\> |
| `«destructured»` | [`Abortable`](../modules.md#abortable) & { `extraParam?`: `string`  } |

#### Returns

`Promise`<`S`\>

#### Inherited from

ITextClickBehavior.\_fromObject

#### Defined in

[src/shapes/Object/Object.ts:1553](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1553)

___

### fromElement

▸ `Static` **fromElement**(`element`, `options?`, `cssRules?`): `Promise`<[`Text`](Text.md)<{ `fontSize`: `number` ; `left`: `number` ; `linethrough`: `boolean` ; `overline`: `boolean` ; `signal?`: `AbortSignal` ; `strokeWidth`: `number` = 0; `top`: `number` ; `underline`: `boolean`  }, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

Returns Text instance from an SVG element (<b>not yet implemented</b>)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | `HTMLElement` | Element to parse |
| `options?` | [`Abortable`](../modules.md#abortable) | Options object |
| `cssRules?` | `CSSRules` | - |

#### Returns

`Promise`<[`Text`](Text.md)<{ `fontSize`: `number` ; `left`: `number` ; `linethrough`: `boolean` ; `overline`: `boolean` ; `signal?`: `AbortSignal` ; `strokeWidth`: `number` = 0; `top`: `number` ; `underline`: `boolean`  }, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>\>

**`Static`**

**`Member Of`**

Text

#### Inherited from

ITextClickBehavior.fromElement

#### Defined in

[src/shapes/Text/Text.ts:1821](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1821)

___

### fromObject

▸ `Static` **fromObject**<`T`, `S`\>(`object`): `Promise`<`S`\>

Returns Text instance from an object representation

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`TOptions`](../modules.md#toptions)<[`SerializedTextProps`](../interfaces/SerializedTextProps.md)\> |
| `S` | extends [`Text`](Text.md)<`Partial`<[`TextProps`](../interfaces/TextProps.md)\>, [`SerializedTextProps`](../interfaces/SerializedTextProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md), `S`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `object` | `T` | plain js Object to create an instance from |

#### Returns

`Promise`<`S`\>

#### Inherited from

ITextClickBehavior.fromObject

#### Defined in

[src/shapes/Text/Text.ts:1898](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1898)

___

### getDefaults

▸ `Static` **getDefaults**(): `Object`

#### Returns

`Object`

#### Overrides

ITextClickBehavior.getDefaults

#### Defined in

[src/shapes/IText/IText.ts:201](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L201)
