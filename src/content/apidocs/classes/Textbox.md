# Class: Textbox<Props, SProps, EventSpec\>

Textbox class, based on IText, allows the user to resize the text rectangle
and wraps lines automatically. Textboxes have their Y scaling locked, the
user can only change width. Height is adjusted automatically based on the
wrapping of lines.

## Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](../modules.md#toptions)<[`TextboxProps`](../interfaces/TextboxProps.md)\> = `Partial`<[`TextboxProps`](../interfaces/TextboxProps.md)\> |
| `SProps` | extends [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md) = [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md) |
| `EventSpec` | extends `ITextEvents` = `ITextEvents` |

## Hierarchy

- [`IText`](IText.md)<`Props`, `SProps`, `EventSpec`\>

  ↳ **`Textbox`**

## Implements

- `UniqueTextboxProps`

## Table of contents

### Constructors

- [constructor](Textbox.md#constructor)

### Properties

- [CACHE\_FONT\_SIZE](Textbox.md#cache_font_size)
- [MIN\_TEXT\_WIDTH](Textbox.md#min_text_width)
- [\_\_charBounds](Textbox.md#__charbounds)
- [\_\_corner](Textbox.md#__corner)
- [\_\_lineHeights](Textbox.md#__lineheights)
- [\_\_lineWidths](Textbox.md#__linewidths)
- [\_\_owningGroup](Textbox.md#__owninggroup)
- [\_\_selectionStartOnMouseDown](Textbox.md#__selectionstartonmousedown)
- [\_cacheCanvas](Textbox.md#_cachecanvas)
- [\_cacheContext](Textbox.md#_cachecontext)
- [\_controlsVisibility](Textbox.md#_controlsvisibility)
- [\_currentCursorOpacity](Textbox.md#_currentcursoropacity)
- [\_fontSizeFraction](Textbox.md#_fontsizefraction)
- [\_fontSizeMult](Textbox.md#_fontsizemult)
- [\_forceClearCache](Textbox.md#_forceclearcache)
- [\_originalOriginX](Textbox.md#_originaloriginx)
- [\_originalOriginY](Textbox.md#_originaloriginy)
- [\_reNewline](Textbox.md#_renewline)
- [\_reSpace](Textbox.md#_respace)
- [\_reSpaceAndTab](Textbox.md#_respaceandtab)
- [\_reSpacesAndTabs](Textbox.md#_respacesandtabs)
- [\_reWords](Textbox.md#_rewords)
- [\_savedProps](Textbox.md#_savedprops)
- [\_scaling](Textbox.md#_scaling)
- [\_selectionDirection](Textbox.md#_selectiondirection)
- [\_styleMap](Textbox.md#_stylemap)
- [\_text](Textbox.md#_text)
- [\_textLines](Textbox.md#_textlines)
- [\_transformDone](Textbox.md#_transformdone)
- [\_unwrappedTextLines](Textbox.md#_unwrappedtextlines)
- [\_wordJoiners](Textbox.md#_wordjoiners)
- [aCoords](Textbox.md#acoords)
- [absolutePositioned](Textbox.md#absolutepositioned)
- [activeOn](Textbox.md#activeon)
- [angle](Textbox.md#angle)
- [backgroundColor](Textbox.md#backgroundcolor)
- [borderColor](Textbox.md#bordercolor)
- [borderDashArray](Textbox.md#borderdasharray)
- [borderOpacityWhenMoving](Textbox.md#borderopacitywhenmoving)
- [borderScaleFactor](Textbox.md#borderscalefactor)
- [cacheHeight](Textbox.md#cacheheight)
- [cacheTranslationX](Textbox.md#cachetranslationx)
- [cacheTranslationY](Textbox.md#cachetranslationy)
- [cacheWidth](Textbox.md#cachewidth)
- [caching](Textbox.md#caching)
- [canvas](Textbox.md#canvas)
- [centeredRotation](Textbox.md#centeredrotation)
- [centeredScaling](Textbox.md#centeredscaling)
- [charSpacing](Textbox.md#charspacing)
- [clipPath](Textbox.md#clippath)
- [clipPathId](Textbox.md#clippathid)
- [colorProperties](Textbox.md#colorproperties)
- [compositionColor](Textbox.md#compositioncolor)
- [compositionEnd](Textbox.md#compositionend)
- [compositionStart](Textbox.md#compositionstart)
- [controls](Textbox.md#controls)
- [cornerColor](Textbox.md#cornercolor)
- [cornerDashArray](Textbox.md#cornerdasharray)
- [cornerSize](Textbox.md#cornersize)
- [cornerStrokeColor](Textbox.md#cornerstrokecolor)
- [cornerStyle](Textbox.md#cornerstyle)
- [ctrlKeysMapDown](Textbox.md#ctrlkeysmapdown)
- [ctrlKeysMapUp](Textbox.md#ctrlkeysmapup)
- [cursorColor](Textbox.md#cursorcolor)
- [cursorDelay](Textbox.md#cursordelay)
- [cursorDuration](Textbox.md#cursorduration)
- [cursorOffsetCache](Textbox.md#cursoroffsetcache)
- [cursorWidth](Textbox.md#cursorwidth)
- [deltaY](Textbox.md#deltay)
- [direction](Textbox.md#direction)
- [dirty](Textbox.md#dirty)
- [draggableTextDelegate](Textbox.md#draggabletextdelegate)
- [dynamicMinWidth](Textbox.md#dynamicminwidth)
- [editable](Textbox.md#editable)
- [editingBorderColor](Textbox.md#editingbordercolor)
- [evented](Textbox.md#evented)
- [excludeFromExport](Textbox.md#excludefromexport)
- [fill](Textbox.md#fill)
- [fillRule](Textbox.md#fillrule)
- [flipX](Textbox.md#flipx)
- [flipY](Textbox.md#flipy)
- [fontFamily](Textbox.md#fontfamily)
- [fontSize](Textbox.md#fontsize)
- [fontStyle](Textbox.md#fontstyle)
- [fontWeight](Textbox.md#fontweight)
- [globalCompositeOperation](Textbox.md#globalcompositeoperation)
- [group](Textbox.md#group)
- [hasBorders](Textbox.md#hasborders)
- [hasControls](Textbox.md#hascontrols)
- [height](Textbox.md#height)
- [hiddenTextarea](Textbox.md#hiddentextarea)
- [hiddenTextareaContainer](Textbox.md#hiddentextareacontainer)
- [hoverCursor](Textbox.md#hovercursor)
- [inCompositionMode](Textbox.md#incompositionmode)
- [includeDefaultValues](Textbox.md#includedefaultvalues)
- [initialized](Textbox.md#initialized)
- [inverted](Textbox.md#inverted)
- [isEditing](Textbox.md#isediting)
- [isMoving](Textbox.md#ismoving)
- [isWrapping](Textbox.md#iswrapping)
- [keysMap](Textbox.md#keysmap)
- [keysMapRtl](Textbox.md#keysmaprtl)
- [left](Textbox.md#left)
- [lineCoords](Textbox.md#linecoords)
- [lineHeight](Textbox.md#lineheight)
- [linethrough](Textbox.md#linethrough)
- [lockMovementX](Textbox.md#lockmovementx)
- [lockMovementY](Textbox.md#lockmovementy)
- [lockRotation](Textbox.md#lockrotation)
- [lockScalingFlip](Textbox.md#lockscalingflip)
- [lockScalingX](Textbox.md#lockscalingx)
- [lockScalingY](Textbox.md#lockscalingy)
- [lockSkewingX](Textbox.md#lockskewingx)
- [lockSkewingY](Textbox.md#lockskewingy)
- [matrixCache](Textbox.md#matrixcache)
- [minScaleLimit](Textbox.md#minscalelimit)
- [minWidth](Textbox.md#minwidth)
- [moveCursor](Textbox.md#movecursor)
- [noScaleCache](Textbox.md#noscalecache)
- [oCoords](Textbox.md#ocoords)
- [objectCaching](Textbox.md#objectcaching)
- [offsets](Textbox.md#offsets)
- [opacity](Textbox.md#opacity)
- [originX](Textbox.md#originx)
- [originY](Textbox.md#originy)
- [overline](Textbox.md#overline)
- [ownCaching](Textbox.md#owncaching)
- [ownMatrixCache](Textbox.md#ownmatrixcache)
- [padding](Textbox.md#padding)
- [paintFirst](Textbox.md#paintfirst)
- [path](Textbox.md#path)
- [pathAlign](Textbox.md#pathalign)
- [pathSide](Textbox.md#pathside)
- [pathStartOffset](Textbox.md#pathstartoffset)
- [perPixelTargetFind](Textbox.md#perpixeltargetfind)
- [scaleX](Textbox.md#scalex)
- [scaleY](Textbox.md#scaley)
- [selectable](Textbox.md#selectable)
- [selected](Textbox.md#selected)
- [selectionBackgroundColor](Textbox.md#selectionbackgroundcolor)
- [selectionColor](Textbox.md#selectioncolor)
- [selectionEnd](Textbox.md#selectionend)
- [selectionStart](Textbox.md#selectionstart)
- [shadow](Textbox.md#shadow)
- [skewX](Textbox.md#skewx)
- [skewY](Textbox.md#skewy)
- [snapAngle](Textbox.md#snapangle)
- [snapThreshold](Textbox.md#snapthreshold)
- [splitByGrapheme](Textbox.md#splitbygrapheme)
- [stroke](Textbox.md#stroke)
- [strokeDashArray](Textbox.md#strokedasharray)
- [strokeDashOffset](Textbox.md#strokedashoffset)
- [strokeLineCap](Textbox.md#strokelinecap)
- [strokeLineJoin](Textbox.md#strokelinejoin)
- [strokeMiterLimit](Textbox.md#strokemiterlimit)
- [strokeUniform](Textbox.md#strokeuniform)
- [strokeWidth](Textbox.md#strokewidth)
- [styles](Textbox.md#styles)
- [subscript](Textbox.md#subscript)
- [superscript](Textbox.md#superscript)
- [text](Textbox.md#text)
- [textAlign](Textbox.md#textalign)
- [textBackgroundColor](Textbox.md#textbackgroundcolor)
- [textLines](Textbox.md#textlines)
- [top](Textbox.md#top)
- [touchCornerSize](Textbox.md#touchcornersize)
- [transparentCorners](Textbox.md#transparentcorners)
- [underline](Textbox.md#underline)
- [visible](Textbox.md#visible)
- [width](Textbox.md#width)
- [zoomX](Textbox.md#zoomx)
- [zoomY](Textbox.md#zoomy)
- [ATTRIBUTE\_NAMES](Textbox.md#attribute_names)
- [\_styleProperties](Textbox.md#_styleproperties)
- [cacheProperties](Textbox.md#cacheproperties)
- [genericFonts](Textbox.md#genericfonts)
- [ownDefaults](Textbox.md#owndefaults)
- [stateProperties](Textbox.md#stateproperties)
- [textLayoutProperties](Textbox.md#textlayoutproperties)
- [type](Textbox.md#type)

### Accessors

- [type](Textbox.md#type-1)

### Methods

- [\_\_getCursorBoundariesOffsets](Textbox.md#__getcursorboundariesoffsets)
- [\_animate](Textbox.md#_animate)
- [\_animateCursor](Textbox.md#_animatecursor)
- [\_applyPatternForTransformedGradient](Textbox.md#_applypatternfortransformedgradient)
- [\_applyPatternGradientTransform](Textbox.md#_applypatterngradienttransform)
- [\_applyPatternGradientTransformText](Textbox.md#_applypatterngradienttransformtext)
- [\_calcTextareaPosition](Textbox.md#_calctextareaposition)
- [\_calculateCurrentDimensions](Textbox.md#_calculatecurrentdimensions)
- [\_clearCache](Textbox.md#_clearcache)
- [\_constrainScale](Textbox.md#_constrainscale)
- [\_createBaseClipPathSVGMarkup](Textbox.md#_createbaseclippathsvgmarkup)
- [\_createBaseSVGMarkup](Textbox.md#_createbasesvgmarkup)
- [\_createCacheCanvas](Textbox.md#_createcachecanvas)
- [\_deleteLineStyle](Textbox.md#_deletelinestyle)
- [\_deleteStyleDeclaration](Textbox.md#_deletestyledeclaration)
- [\_drawBorders](Textbox.md#_drawborders)
- [\_drawClipPath](Textbox.md#_drawclippath)
- [\_exitEditing](Textbox.md#_exitediting)
- [\_findCenterFromElement](Textbox.md#_findcenterfromelement)
- [\_findCrossPoints](Textbox.md#_findcrosspoints)
- [\_findTargetCorner](Textbox.md#_findtargetcorner)
- [\_fireSelectionChanged](Textbox.md#_fireselectionchanged)
- [\_generateStyleMap](Textbox.md#_generatestylemap)
- [\_getCacheCanvasDimensions](Textbox.md#_getcachecanvasdimensions)
- [\_getCoords](Textbox.md#_getcoords)
- [\_getCurrentCharIndex](Textbox.md#_getcurrentcharindex)
- [\_getCursorBoundaries](Textbox.md#_getcursorboundaries)
- [\_getCursorBoundariesOffsets](Textbox.md#_getcursorboundariesoffsets)
- [\_getFontDeclaration](Textbox.md#_getfontdeclaration)
- [\_getGraphemeBox](Textbox.md#_getgraphemebox)
- [\_getImageLines](Textbox.md#_getimagelines)
- [\_getIndexOnLine](Textbox.md#_getindexonline)
- [\_getLeftOffset](Textbox.md#_getleftoffset)
- [\_getLeftTopCoords](Textbox.md#_getlefttopcoords)
- [\_getLineLeftOffset](Textbox.md#_getlineleftoffset)
- [\_getLineStyle](Textbox.md#_getlinestyle)
- [\_getNonTransformedDimensions](Textbox.md#_getnontransformeddimensions)
- [\_getSelectionForOffset](Textbox.md#_getselectionforoffset)
- [\_getStyleDeclaration](Textbox.md#_getstyledeclaration)
- [\_getTopOffset](Textbox.md#_gettopoffset)
- [\_getTransformedDimensions](Textbox.md#_gettransformeddimensions)
- [\_getWidthBeforeCursor](Textbox.md#_getwidthbeforecursor)
- [\_getWidthOfCharSpacing](Textbox.md#_getwidthofcharspacing)
- [\_limitCacheSize](Textbox.md#_limitcachesize)
- [\_measureChar](Textbox.md#_measurechar)
- [\_measureLine](Textbox.md#_measureline)
- [\_measureWord](Textbox.md#_measureword)
- [\_mouseDownHandler](Textbox.md#_mousedownhandler)
- [\_mouseDownHandlerBefore](Textbox.md#_mousedownhandlerbefore)
- [\_move](Textbox.md#_move)
- [\_moveCursorLeftOrRight](Textbox.md#_movecursorleftorright)
- [\_moveCursorUpOrDown](Textbox.md#_movecursorupordown)
- [\_moveLeft](Textbox.md#_moveleft)
- [\_moveRight](Textbox.md#_moveright)
- [\_removeCacheCanvas](Textbox.md#_removecachecanvas)
- [\_removeDefaultValues](Textbox.md#_removedefaultvalues)
- [\_removeExtraneousStyles](Textbox.md#_removeextraneousstyles)
- [\_removeShadow](Textbox.md#_removeshadow)
- [\_render](Textbox.md#_render)
- [\_renderBackground](Textbox.md#_renderbackground)
- [\_renderChar](Textbox.md#_renderchar)
- [\_renderChars](Textbox.md#_renderchars)
- [\_renderControls](Textbox.md#_rendercontrols)
- [\_renderCursor](Textbox.md#_rendercursor)
- [\_renderFill](Textbox.md#_renderfill)
- [\_renderPaintInOrder](Textbox.md#_renderpaintinorder)
- [\_renderSelection](Textbox.md#_renderselection)
- [\_renderStroke](Textbox.md#_renderstroke)
- [\_renderText](Textbox.md#_rendertext)
- [\_renderTextCommon](Textbox.md#_rendertextcommon)
- [\_renderTextDecoration](Textbox.md#_rendertextdecoration)
- [\_renderTextFill](Textbox.md#_rendertextfill)
- [\_renderTextLine](Textbox.md#_rendertextline)
- [\_renderTextLinesBackground](Textbox.md#_rendertextlinesbackground)
- [\_renderTextStroke](Textbox.md#_rendertextstroke)
- [\_resetOrigin](Textbox.md#_resetorigin)
- [\_restoreEditingProps](Textbox.md#_restoreeditingprops)
- [\_saveEditingProps](Textbox.md#_saveeditingprops)
- [\_set](Textbox.md#_set)
- [\_setClippingProperties](Textbox.md#_setclippingproperties)
- [\_setEditingProps](Textbox.md#_seteditingprops)
- [\_setFillStyles](Textbox.md#_setfillstyles)
- [\_setGraphemeOnPath](Textbox.md#_setgraphemeonpath)
- [\_setLineDash](Textbox.md#_setlinedash)
- [\_setLineStyle](Textbox.md#_setlinestyle)
- [\_setObject](Textbox.md#_setobject)
- [\_setOpacity](Textbox.md#_setopacity)
- [\_setOptions](Textbox.md#_setoptions)
- [\_setOriginToCenter](Textbox.md#_setorigintocenter)
- [\_setScript](Textbox.md#_setscript)
- [\_setShadow](Textbox.md#_setshadow)
- [\_setStrokeStyles](Textbox.md#_setstrokestyles)
- [\_setStyleDeclaration](Textbox.md#_setstyledeclaration)
- [\_setTextStyles](Textbox.md#_settextstyles)
- [\_setupCompositeOperation](Textbox.md#_setupcompositeoperation)
- [\_splitText](Textbox.md#_splittext)
- [\_splitTextIntoLines](Textbox.md#_splittextintolines)
- [\_toSVG](Textbox.md#_tosvg)
- [\_updateAndFire](Textbox.md#_updateandfire)
- [\_updateCacheCanvas](Textbox.md#_updatecachecanvas)
- [\_updateTextarea](Textbox.md#_updatetextarea)
- [\_wrapLine](Textbox.md#_wrapline)
- [\_wrapText](Textbox.md#_wraptext)
- [abortCursorAnimation](Textbox.md#abortcursoranimation)
- [addPaintOrder](Textbox.md#addpaintorder)
- [animate](Textbox.md#animate)
- [blur](Textbox.md#blur)
- [calcACoords](Textbox.md#calcacoords)
- [calcLineCoords](Textbox.md#calclinecoords)
- [calcOCoords](Textbox.md#calcocoords)
- [calcOwnMatrix](Textbox.md#calcownmatrix)
- [calcTextHeight](Textbox.md#calctextheight)
- [calcTextWidth](Textbox.md#calctextwidth)
- [calcTransformMatrix](Textbox.md#calctransformmatrix)
- [canDrop](Textbox.md#candrop)
- [cleanStyle](Textbox.md#cleanstyle)
- [clearContextTop](Textbox.md#clearcontexttop)
- [clone](Textbox.md#clone)
- [cloneAsImage](Textbox.md#cloneasimage)
- [complexity](Textbox.md#complexity)
- [containsPoint](Textbox.md#containspoint)
- [copy](Textbox.md#copy)
- [dispose](Textbox.md#dispose)
- [doubleClickHandler](Textbox.md#doubleclickhandler)
- [drawBorders](Textbox.md#drawborders)
- [drawCacheOnCanvas](Textbox.md#drawcacheoncanvas)
- [drawClipPathOnCache](Textbox.md#drawclippathoncache)
- [drawControls](Textbox.md#drawcontrols)
- [drawControlsConnectingLines](Textbox.md#drawcontrolsconnectinglines)
- [drawObject](Textbox.md#drawobject)
- [drawSelectionBackground](Textbox.md#drawselectionbackground)
- [enlargeSpaces](Textbox.md#enlargespaces)
- [enterEditing](Textbox.md#enterediting)
- [exitEditing](Textbox.md#exitediting)
- [findCommonAncestors](Textbox.md#findcommonancestors)
- [findLineBoundaryLeft](Textbox.md#findlineboundaryleft)
- [findLineBoundaryRight](Textbox.md#findlineboundaryright)
- [findWordBoundaryLeft](Textbox.md#findwordboundaryleft)
- [findWordBoundaryRight](Textbox.md#findwordboundaryright)
- [fire](Textbox.md#fire)
- [forEachControl](Textbox.md#foreachcontrol)
- [fromGraphemeToStringSelection](Textbox.md#fromgraphemetostringselection)
- [fromStringToGraphemeSelection](Textbox.md#fromstringtographemeselection)
- [get](Textbox.md#get)
- [get2DCursorLocation](Textbox.md#get2dcursorlocation)
- [getActiveControl](Textbox.md#getactivecontrol)
- [getAncestors](Textbox.md#getancestors)
- [getBoundingRect](Textbox.md#getboundingrect)
- [getCanvasRetinaScaling](Textbox.md#getcanvasretinascaling)
- [getCenterPoint](Textbox.md#getcenterpoint)
- [getCompleteStyleDeclaration](Textbox.md#getcompletestyledeclaration)
- [getCoords](Textbox.md#getcoords)
- [getCurrentCharColor](Textbox.md#getcurrentcharcolor)
- [getCurrentCharFontSize](Textbox.md#getcurrentcharfontsize)
- [getDownCursorOffset](Textbox.md#getdowncursoroffset)
- [getGraphemeDataForRender](Textbox.md#getgraphemedataforrender)
- [getHeightOfChar](Textbox.md#getheightofchar)
- [getHeightOfLine](Textbox.md#getheightofline)
- [getLineWidth](Textbox.md#getlinewidth)
- [getMinWidth](Textbox.md#getminwidth)
- [getObjectOpacity](Textbox.md#getobjectopacity)
- [getObjectScaling](Textbox.md#getobjectscaling)
- [getParent](Textbox.md#getparent)
- [getPointByOrigin](Textbox.md#getpointbyorigin)
- [getRelativeCenterPoint](Textbox.md#getrelativecenterpoint)
- [getRelativeX](Textbox.md#getrelativex)
- [getRelativeXY](Textbox.md#getrelativexy)
- [getRelativeY](Textbox.md#getrelativey)
- [getScaledHeight](Textbox.md#getscaledheight)
- [getScaledWidth](Textbox.md#getscaledwidth)
- [getSelectedText](Textbox.md#getselectedtext)
- [getSelectionStartFromPointer](Textbox.md#getselectionstartfrompointer)
- [getSelectionStyles](Textbox.md#getselectionstyles)
- [getStyleAtPosition](Textbox.md#getstyleatposition)
- [getSvgCommons](Textbox.md#getsvgcommons)
- [getSvgFilter](Textbox.md#getsvgfilter)
- [getSvgStyles](Textbox.md#getsvgstyles)
- [getSvgTransform](Textbox.md#getsvgtransform)
- [getTotalAngle](Textbox.md#gettotalangle)
- [getTotalObjectScaling](Textbox.md#gettotalobjectscaling)
- [getUpCursorOffset](Textbox.md#getupcursoroffset)
- [getValueOfPropertyAt](Textbox.md#getvalueofpropertyat)
- [getViewportTransform](Textbox.md#getviewporttransform)
- [getX](Textbox.md#getx)
- [getXY](Textbox.md#getxy)
- [getY](Textbox.md#gety)
- [graphemeSplit](Textbox.md#graphemesplit)
- [handleFiller](Textbox.md#handlefiller)
- [hasCommonAncestors](Textbox.md#hascommonancestors)
- [hasFill](Textbox.md#hasfill)
- [hasStroke](Textbox.md#hasstroke)
- [initBehavior](Textbox.md#initbehavior)
- [initDelayedCursor](Textbox.md#initdelayedcursor)
- [initDimensions](Textbox.md#initdimensions)
- [initHiddenTextarea](Textbox.md#inithiddentextarea)
- [insertCharStyleObject](Textbox.md#insertcharstyleobject)
- [insertChars](Textbox.md#insertchars)
- [insertNewStyleBlock](Textbox.md#insertnewstyleblock)
- [insertNewlineStyleObject](Textbox.md#insertnewlinestyleobject)
- [intersectsWithObject](Textbox.md#intersectswithobject)
- [intersectsWithRect](Textbox.md#intersectswithrect)
- [isCacheDirty](Textbox.md#iscachedirty)
- [isContainedWithinObject](Textbox.md#iscontainedwithinobject)
- [isContainedWithinRect](Textbox.md#iscontainedwithinrect)
- [isControlVisible](Textbox.md#iscontrolvisible)
- [isDescendantOf](Textbox.md#isdescendantof)
- [isEmptyStyles](Textbox.md#isemptystyles)
- [isEndOfWrapping](Textbox.md#isendofwrapping)
- [isInFrontOf](Textbox.md#isinfrontof)
- [isNotVisible](Textbox.md#isnotvisible)
- [isOnScreen](Textbox.md#isonscreen)
- [isOverlapping](Textbox.md#isoverlapping)
- [isPartiallyOnScreen](Textbox.md#ispartiallyonscreen)
- [isTripleClick](Textbox.md#istripleclick)
- [isType](Textbox.md#istype)
- [measureLine](Textbox.md#measureline)
- [missingNewlineOffset](Textbox.md#missingnewlineoffset)
- [mouseUpHandler](Textbox.md#mouseuphandler)
- [moveCursorDown](Textbox.md#movecursordown)
- [moveCursorLeft](Textbox.md#movecursorleft)
- [moveCursorLeftWithShift](Textbox.md#movecursorleftwithshift)
- [moveCursorLeftWithoutShift](Textbox.md#movecursorleftwithoutshift)
- [moveCursorRight](Textbox.md#movecursorright)
- [moveCursorRightWithShift](Textbox.md#movecursorrightwithshift)
- [moveCursorRightWithoutShift](Textbox.md#movecursorrightwithoutshift)
- [moveCursorUp](Textbox.md#movecursorup)
- [moveCursorWithShift](Textbox.md#movecursorwithshift)
- [moveCursorWithoutShift](Textbox.md#movecursorwithoutshift)
- [needsItsOwnCache](Textbox.md#needsitsowncache)
- [off](Textbox.md#off)
- [on](Textbox.md#on)
- [onCompositionEnd](Textbox.md#oncompositionend)
- [onCompositionStart](Textbox.md#oncompositionstart)
- [onCompositionUpdate](Textbox.md#oncompositionupdate)
- [onDeselect](Textbox.md#ondeselect)
- [onDragStart](Textbox.md#ondragstart)
- [onInput](Textbox.md#oninput)
- [onKeyDown](Textbox.md#onkeydown)
- [onKeyUp](Textbox.md#onkeyup)
- [onMouseDown](Textbox.md#onmousedown)
- [onSelect](Textbox.md#onselect)
- [once](Textbox.md#once)
- [paste](Textbox.md#paste)
- [removeChars](Textbox.md#removechars)
- [removeStyle](Textbox.md#removestyle)
- [removeStyleFromTo](Textbox.md#removestylefromto)
- [render](Textbox.md#render)
- [renderCache](Textbox.md#rendercache)
- [renderCursor](Textbox.md#rendercursor)
- [renderCursorAt](Textbox.md#rendercursorat)
- [renderCursorOrSelection](Textbox.md#rendercursororselection)
- [renderDragSourceEffect](Textbox.md#renderdragsourceeffect)
- [renderDropTargetEffect](Textbox.md#renderdroptargeteffect)
- [renderSelection](Textbox.md#renderselection)
- [restartCursorIfNeeded](Textbox.md#restartcursorifneeded)
- [rotate](Textbox.md#rotate)
- [scale](Textbox.md#scale)
- [scaleToHeight](Textbox.md#scaletoheight)
- [scaleToWidth](Textbox.md#scaletowidth)
- [searchWordBoundary](Textbox.md#searchwordboundary)
- [selectAll](Textbox.md#selectall)
- [selectLine](Textbox.md#selectline)
- [selectWord](Textbox.md#selectword)
- [set](Textbox.md#set)
- [setControlVisible](Textbox.md#setcontrolvisible)
- [setControlsVisibility](Textbox.md#setcontrolsvisibility)
- [setCoords](Textbox.md#setcoords)
- [setCursorByClick](Textbox.md#setcursorbyclick)
- [setOnGroup](Textbox.md#setongroup)
- [setOptions](Textbox.md#setoptions)
- [setPathInfo](Textbox.md#setpathinfo)
- [setPositionByOrigin](Textbox.md#setpositionbyorigin)
- [setRelativeX](Textbox.md#setrelativex)
- [setRelativeXY](Textbox.md#setrelativexy)
- [setRelativeY](Textbox.md#setrelativey)
- [setSelectionEnd](Textbox.md#setselectionend)
- [setSelectionStart](Textbox.md#setselectionstart)
- [setSelectionStartEndWithShift](Textbox.md#setselectionstartendwithshift)
- [setSelectionStyles](Textbox.md#setselectionstyles)
- [setSubscript](Textbox.md#setsubscript)
- [setSuperscript](Textbox.md#setsuperscript)
- [setX](Textbox.md#setx)
- [setXY](Textbox.md#setxy)
- [setY](Textbox.md#sety)
- [shiftLineStyles](Textbox.md#shiftlinestyles)
- [shouldCache](Textbox.md#shouldcache)
- [shouldStartDragging](Textbox.md#shouldstartdragging)
- [strokeBorders](Textbox.md#strokeborders)
- [styleHas](Textbox.md#stylehas)
- [toCanvasElement](Textbox.md#tocanvaselement)
- [toClipPathSVG](Textbox.md#toclippathsvg)
- [toDataURL](Textbox.md#todataurl)
- [toDatalessObject](Textbox.md#todatalessobject)
- [toJSON](Textbox.md#tojson)
- [toObject](Textbox.md#toobject)
- [toSVG](Textbox.md#tosvg)
- [toString](Textbox.md#tostring)
- [toggle](Textbox.md#toggle)
- [transform](Textbox.md#transform)
- [transformMatrixKey](Textbox.md#transformmatrixkey)
- [translateToCenterPoint](Textbox.md#translatetocenterpoint)
- [translateToGivenOrigin](Textbox.md#translatetogivenorigin)
- [translateToOriginPoint](Textbox.md#translatetooriginpoint)
- [tripleClickHandler](Textbox.md#tripleclickhandler)
- [updateFromTextArea](Textbox.md#updatefromtextarea)
- [updateSelectionOnMouseMove](Textbox.md#updateselectiononmousemove)
- [updateTextareaPosition](Textbox.md#updatetextareaposition)
- [willDrawShadow](Textbox.md#willdrawshadow)
- [wordSplit](Textbox.md#wordsplit)
- [\_fromObject](Textbox.md#_fromobject)
- [fromElement](Textbox.md#fromelement)
- [fromObject](Textbox.md#fromobject)
- [getDefaults](Textbox.md#getdefaults)

## Constructors

### constructor

• **new Textbox**<`Props`, `SProps`, `EventSpec`\>(`text`, `options?`)

Constructor

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Props` | extends [`TOptions`](../modules.md#toptions)<[`TextboxProps`](../interfaces/TextboxProps.md)\> = `Partial`<[`TextboxProps`](../interfaces/TextboxProps.md)\> |
| `SProps` | extends [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md)<`SProps`\> = [`SerializedTextboxProps`](../interfaces/SerializedTextboxProps.md) |
| `EventSpec` | extends [`ObjectEvents`](../interfaces/ObjectEvents.md)<`EventSpec`\> & { `changed`: { `action`: `string` ; `index`: `number`  } ; `editing:entered`: { `e`: [`TPointerEvent`](../modules.md#tpointerevent)  } ; `editing:exited`: `never` ; `selection:changed`: `never` ; `tripleclick`: [`TPointerEventInfo`](../interfaces/TPointerEventInfo.md)<[`TPointerEvent`](../modules.md#tpointerevent)\>  } = `ITextEvents` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | Text string |
| `options?` | `Props` | Options object |

#### Inherited from

[IText](IText.md).[constructor](IText.md#constructor)

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

[IText](IText.md).[CACHE_FONT_SIZE](IText.md#cache_font_size)

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

[IText](IText.md).[MIN_TEXT_WIDTH](IText.md#min_text_width)

#### Defined in

[src/shapes/Text/Text.ts:387](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L387)

___

### \_\_charBounds

• `Protected` **\_\_charBounds**: [`GraphemeBBox`](../modules.md#graphemebbox)[][] = `[]`

contains characters bounding boxes
This variable is considered to be protected.
But for how mixins are implemented right now, we can't leave it private

#### Inherited from

[IText](IText.md).[__charBounds](IText.md#__charbounds)

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

[IText](IText.md).[__corner](IText.md#__corner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L115)

___

### \_\_lineHeights

• **\_\_lineHeights**: `number`[]

#### Inherited from

[IText](IText.md).[__lineHeights](IText.md#__lineheights)

#### Defined in

[src/shapes/Text/Text.ts:407](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L407)

___

### \_\_lineWidths

• **\_\_lineWidths**: `number`[]

#### Inherited from

[IText](IText.md).[__lineWidths](IText.md#__linewidths)

#### Defined in

[src/shapes/Text/Text.ts:408](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L408)

___

### \_\_owningGroup

• `Optional` **\_\_owningGroup**: [`Group`](Group.md)

A reference to the parent of the object
Used to keep the original parent ref when the object has been added to an ActiveSelection, hence loosing the `group` ref

#### Inherited from

[IText](IText.md).[__owningGroup](IText.md#__owninggroup)

#### Defined in

[src/shapes/Object/StackedObject.ts:45](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L45)

___

### \_\_selectionStartOnMouseDown

• `Protected` **\_\_selectionStartOnMouseDown**: `number`

#### Inherited from

[IText](IText.md).[__selectionStartOnMouseDown](IText.md#__selectionstartonmousedown)

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

[IText](IText.md).[_cacheCanvas](IText.md#_cachecanvas)

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

[IText](IText.md).[_cacheContext](IText.md#_cachecontext)

#### Defined in

[src/shapes/Object/Object.ts:172](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L172)

___

### \_controlsVisibility

• **\_controlsVisibility**: `Record`<`string`, `boolean`\>

a map of control visibility for this object.
this was left when controls were introduced to not break the api too much
this takes priority over the generic control visibility

#### Inherited from

[IText](IText.md).[_controlsVisibility](IText.md#_controlsvisibility)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:122](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L122)

___

### \_currentCursorOpacity

• `Protected` **\_currentCursorOpacity**: `number` = `1`

#### Inherited from

[IText](IText.md).[_currentCursorOpacity](IText.md#_currentcursoropacity)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L69)

___

### \_fontSizeFraction

• `Private` **\_fontSizeFraction**: `number`

#### Inherited from

[IText](IText.md).[_fontSizeFraction](IText.md#_fontsizefraction)

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

[IText](IText.md).[_fontSizeMult](IText.md#_fontsizemult)

#### Defined in

[src/shapes/Text/Text.ts:335](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L335)

___

### \_forceClearCache

• `Protected` **\_forceClearCache**: `boolean`

#### Inherited from

[IText](IText.md).[_forceClearCache](IText.md#_forceclearcache)

#### Defined in

[src/shapes/Text/StyledText.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L25)

___

### \_originalOriginX

• `Optional` **\_originalOriginX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

[IText](IText.md).[_originalOriginX](IText.md#_originaloriginx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:39](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L39)

___

### \_originalOriginY

• `Optional` **\_originalOriginY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

[IText](IText.md).[_originalOriginY](IText.md#_originaloriginy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:41](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L41)

___

### \_reNewline

• `Private` **\_reNewline**: `RegExp`

#### Inherited from

[IText](IText.md).[_reNewline](IText.md#_renewline)

#### Defined in

[src/shapes/Text/Text.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L140)

___

### \_reSpace

• `Protected` **\_reSpace**: `RegExp`

#### Inherited from

[IText](IText.md).[_reSpace](IText.md#_respace)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L66)

___

### \_reSpaceAndTab

• `Private` **\_reSpaceAndTab**: `RegExp`

Use this regular expression to filter for whitespace that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

[IText](IText.md).[_reSpaceAndTab](IText.md#_respaceandtab)

#### Defined in

[src/shapes/Text/Text.ts:154](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L154)

___

### \_reSpacesAndTabs

• `Private` **\_reSpacesAndTabs**: `RegExp`

Use this regular expression to filter for whitespaces that is not a new line.
Mostly used when text is 'justify' aligned.

#### Inherited from

[IText](IText.md).[_reSpacesAndTabs](IText.md#_respacesandtabs)

#### Defined in

[src/shapes/Text/Text.ts:147](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L147)

___

### \_reWords

• `Private` **\_reWords**: `RegExp`

Use this regular expression to filter consecutive groups of non spaces.
Mostly used when text is 'justify' aligned.

#### Inherited from

[IText](IText.md).[_reWords](IText.md#_rewords)

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

[IText](IText.md).[_savedProps](IText.md#_savedprops)

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

[IText](IText.md).[_scaling](IText.md#_scaling)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:144](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L144)

___

### \_selectionDirection

• `Protected` **\_selectionDirection**: ``null`` \| ``"left"`` \| ``"right"``

#### Inherited from

[IText](IText.md).[_selectionDirection](IText.md#_selectiondirection)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L85)

___

### \_styleMap

• **\_styleMap**: `StyleMap`

#### Defined in

[src/shapes/Textbox.ts:87](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L87)

___

### \_text

• **\_text**: `string`[]

#### Inherited from

[IText](IText.md).[_text](IText.md#_text)

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

[IText](IText.md).[_textLines](IText.md#_textlines)

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

[IText](IText.md).[_transformDone](IText.md#_transformdone)

#### Defined in

[src/shapes/Object/Object.ts:263](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L263)

___

### \_unwrappedTextLines

• **\_unwrappedTextLines**: `string`[][]

#### Inherited from

[IText](IText.md).[_unwrappedTextLines](IText.md#_unwrappedtextlines)

#### Defined in

[src/shapes/Text/Text.ts:404](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L404)

___

### \_wordJoiners

• **\_wordJoiners**: `RegExp`

#### Implementation of

UniqueTextboxProps.\_wordJoiners

#### Defined in

[src/shapes/Textbox.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L85)

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

[IText](IText.md).[aCoords](IText.md#acoords)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L67)

___

### absolutePositioned

• **absolutePositioned**: `boolean`

#### Inherited from

[IText](IText.md).[absolutePositioned](IText.md#absolutepositioned)

#### Defined in

[src/shapes/Object/Object.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L136)

___

### activeOn

• **activeOn**: ``"down"`` \| ``"up"``

#### Inherited from

[IText](IText.md).[activeOn](IText.md#activeon)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L91)

___

### angle

• **angle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[IText](IText.md).[angle](IText.md#angle)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:29](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L29)

___

### backgroundColor

• **backgroundColor**: `string`

#### Inherited from

[IText](IText.md).[backgroundColor](IText.md#backgroundcolor)

#### Defined in

[src/shapes/Object/Object.ts:123](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L123)

___

### borderColor

• **borderColor**: `string`

#### Inherited from

[IText](IText.md).[borderColor](IText.md#bordercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L81)

___

### borderDashArray

• **borderDashArray**: ``null`` \| `number`[]

#### Inherited from

[IText](IText.md).[borderDashArray](IText.md#borderdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:82](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L82)

___

### borderOpacityWhenMoving

• **borderOpacityWhenMoving**: `number`

#### Inherited from

[IText](IText.md).[borderOpacityWhenMoving](IText.md#borderopacitywhenmoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L83)

___

### borderScaleFactor

• **borderScaleFactor**: `number`

#### Inherited from

[IText](IText.md).[borderScaleFactor](IText.md#borderscalefactor)

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

[IText](IText.md).[cacheHeight](IText.md#cacheheight)

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

[IText](IText.md).[cacheTranslationX](IText.md#cachetranslationx)

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

[IText](IText.md).[cacheTranslationY](IText.md#cachetranslationy)

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

[IText](IText.md).[cacheWidth](IText.md#cachewidth)

#### Defined in

[src/shapes/Object/Object.ts:192](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L192)

___

### caching

• **caching**: `boolean`

Indicates whether internal text char widths can be cached

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[caching](IText.md#caching)

#### Defined in

[src/shapes/IText/IText.ts:197](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L197)

___

### canvas

• `Optional` **canvas**: [`Canvas`](Canvas.md)

#### Inherited from

[IText](IText.md).[canvas](IText.md#canvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:146](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L146)

___

### centeredRotation

• **centeredRotation**: `boolean`

#### Inherited from

[IText](IText.md).[centeredRotation](IText.md#centeredrotation)

#### Defined in

[src/shapes/Object/Object.ts:137](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L137)

___

### centeredScaling

• **centeredScaling**: ``false``

#### Inherited from

[IText](IText.md).[centeredScaling](IText.md#centeredscaling)

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

[IText](IText.md).[charSpacing](IText.md#charspacing)

#### Defined in

[src/shapes/Text/Text.ts:343](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L343)

___

### clipPath

• `Optional` **clipPath**: `FabricObject`<`Partial`<`ObjectProps`\>, [`SerializedObjectProps`](../interfaces/SerializedObjectProps.md), [`ObjectEvents`](../interfaces/ObjectEvents.md)\>

#### Inherited from

[IText](IText.md).[clipPath](IText.md#clippath)

#### Defined in

[src/shapes/Object/Object.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L134)

___

### clipPathId

• `Optional` **clipPathId**: `string`

When an object is being exported as SVG as a clippath, a reference inside the SVG is needed.
This reference is a UID in the fabric namespace and is temporary stored here.

#### Inherited from

[IText](IText.md).[clipPathId](IText.md#clippathid)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:14](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L14)

___

### colorProperties

• **colorProperties**: `string`[]

List of properties to consider for animating colors.

#### Inherited from

[IText](IText.md).[colorProperties](IText.md#colorproperties)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L20)

___

### compositionColor

• **compositionColor**: `string`

#### Inherited from

[IText](IText.md).[compositionColor](IText.md#compositioncolor)

#### Defined in

[src/shapes/IText/IText.ts:190](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L190)

___

### compositionEnd

• **compositionEnd**: `number`

#### Inherited from

[IText](IText.md).[compositionEnd](IText.md#compositionend)

#### Defined in

[src/shapes/IText/IText.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L129)

___

### compositionStart

• **compositionStart**: `number`

#### Inherited from

[IText](IText.md).[compositionStart](IText.md#compositionstart)

#### Defined in

[src/shapes/IText/IText.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L127)

___

### controls

• **controls**: `TControlSet`

holds the controls for the object.
controls are added by default_controls.js

#### Inherited from

[IText](IText.md).[controls](IText.md#controls)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L128)

___

### cornerColor

• **cornerColor**: `string`

#### Inherited from

[IText](IText.md).[cornerColor](IText.md#cornercolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L75)

___

### cornerDashArray

• **cornerDashArray**: ``null`` \| `number`[]

#### Inherited from

[IText](IText.md).[cornerDashArray](IText.md#cornerdasharray)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:78](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L78)

___

### cornerSize

• **cornerSize**: `number`

#### Inherited from

[IText](IText.md).[cornerSize](IText.md#cornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:72](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L72)

___

### cornerStrokeColor

• **cornerStrokeColor**: `string`

#### Inherited from

[IText](IText.md).[cornerStrokeColor](IText.md#cornerstrokecolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:76](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L76)

___

### cornerStyle

• **cornerStyle**: ``"circle"`` \| ``"rect"``

#### Inherited from

[IText](IText.md).[cornerStyle](IText.md#cornerstyle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:77](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L77)

___

### ctrlKeysMapDown

• **ctrlKeysMapDown**: `TKeyMapIText`

For functionalities on keyDown + ctrl || cmd

#### Inherited from

[IText](IText.md).[ctrlKeysMapDown](IText.md#ctrlkeysmapdown)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:42](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L42)

___

### ctrlKeysMapUp

• **ctrlKeysMapUp**: `TKeyMapIText`

For functionalities on keyUp + ctrl || cmd

#### Inherited from

[IText](IText.md).[ctrlKeysMapUp](IText.md#ctrlkeysmapup)

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

#### Inherited from

[IText](IText.md).[cursorColor](IText.md#cursorcolor)

#### Defined in

[src/shapes/IText/IText.ts:174](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L174)

___

### cursorDelay

• **cursorDelay**: `number`

Delay between cursor blink (in ms)

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[cursorDelay](IText.md#cursordelay)

#### Defined in

[src/shapes/IText/IText.ts:181](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L181)

___

### cursorDuration

• **cursorDuration**: `number`

Duration of cursor fade in (in ms)

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[cursorDuration](IText.md#cursorduration)

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

[IText](IText.md).[cursorOffsetCache](IText.md#cursoroffsetcache)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:74](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L74)

___

### cursorWidth

• **cursorWidth**: `number`

Width of cursor (in px)

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[cursorWidth](IText.md#cursorwidth)

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

[IText](IText.md).[deltaY](IText.md#deltay)

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

[IText](IText.md).[direction](IText.md#direction)

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

[IText](IText.md).[dirty](IText.md#dirty)

#### Defined in

[src/shapes/Object/Object.ts:162](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L162)

___

### draggableTextDelegate

• `Protected` **draggableTextDelegate**: `DraggableTextDelegate`

#### Inherited from

[IText](IText.md).[draggableTextDelegate](IText.md#draggabletextdelegate)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L34)

___

### dynamicMinWidth

• **dynamicMinWidth**: `number`

Minimum calculated width of a textbox, in pixels.
fixed to 2 so that an empty textbox cannot go to 0
and is still selectable without text.

**`Default`**

```ts

```

#### Implementation of

UniqueTextboxProps.dynamicMinWidth

#### Defined in

[src/shapes/Textbox.ts:75](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L75)

___

### editable

• **editable**: `boolean`

Indicates whether a text can be edited

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[editable](IText.md#editable)

#### Defined in

[src/shapes/IText/IText.ts:150](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L150)

___

### editingBorderColor

• **editingBorderColor**: `string`

Border color of text object while it's in editing mode

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[editingBorderColor](IText.md#editingbordercolor)

#### Defined in

[src/shapes/IText/IText.ts:157](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L157)

___

### evented

• **evented**: `boolean`

#### Inherited from

[IText](IText.md).[evented](IText.md#evented)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L89)

___

### excludeFromExport

• **excludeFromExport**: `boolean`

#### Inherited from

[IText](IText.md).[excludeFromExport](IText.md#excludefromexport)

#### Defined in

[src/shapes/Object/Object.ts:130](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L130)

___

### fill

• **fill**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[IText](IText.md).[fill](IText.md#fill)

#### Defined in

[src/shapes/Object/Object.ts:113](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L113)

___

### fillRule

• **fillRule**: `CanvasFillRule`

#### Inherited from

[IText](IText.md).[fillRule](IText.md#fillrule)

#### Defined in

[src/shapes/Object/Object.ts:114](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L114)

___

### flipX

• **flipX**: `boolean`

#### Inherited from

[IText](IText.md).[flipX](IText.md#flipx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:21](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L21)

___

### flipY

• **flipY**: `boolean`

#### Inherited from

[IText](IText.md).[flipY](IText.md#flipy)

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

[IText](IText.md).[fontFamily](IText.md#fontfamily)

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

[IText](IText.md).[fontSize](IText.md#fontsize)

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

[IText](IText.md).[fontStyle](IText.md#fontstyle)

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

[IText](IText.md).[fontWeight](IText.md#fontweight)

#### Defined in

[src/shapes/Text/Text.ts:177](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L177)

___

### globalCompositeOperation

• **globalCompositeOperation**: `GlobalCompositeOperation`

#### Inherited from

[IText](IText.md).[globalCompositeOperation](IText.md#globalcompositeoperation)

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

[IText](IText.md).[group](IText.md#group)

#### Defined in

[src/shapes/Object/Object.ts:245](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L245)

___

### hasBorders

• **hasBorders**: `boolean`

#### Inherited from

[IText](IText.md).[hasBorders](IText.md#hasborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:85](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L85)

___

### hasControls

• **hasControls**: `boolean`

#### Inherited from

[IText](IText.md).[hasControls](IText.md#hascontrols)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:79](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L79)

___

### height

• **height**: `number`

#### Inherited from

[IText](IText.md).[height](IText.md#height)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:20](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L20)

___

### hiddenTextarea

• **hiddenTextarea**: ``null`` \| `HTMLTextAreaElement`

#### Inherited from

[IText](IText.md).[hiddenTextarea](IText.md#hiddentextarea)

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

[IText](IText.md).[hiddenTextareaContainer](IText.md#hiddentextareacontainer)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L54)

___

### hoverCursor

• **hoverCursor**: ``null`` \| `string`

#### Inherited from

[IText](IText.md).[hoverCursor](IText.md#hovercursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L93)

___

### inCompositionMode

• `Protected` **inCompositionMode**: `boolean`

Helps determining when the text is in composition, so that the cursor
rendering is altered.

#### Inherited from

[IText](IText.md).[inCompositionMode](IText.md#incompositionmode)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L64)

___

### includeDefaultValues

• **includeDefaultValues**: `boolean`

#### Inherited from

[IText](IText.md).[includeDefaultValues](IText.md#includedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:129](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L129)

___

### initialized

• `Optional` **initialized**: ``true``

#### Inherited from

[IText](IText.md).[initialized](IText.md#initialized)

#### Defined in

[src/shapes/Text/Text.ts:409](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L409)

___

### inverted

• **inverted**: `boolean`

#### Inherited from

[IText](IText.md).[inverted](IText.md#inverted)

#### Defined in

[src/shapes/Object/Object.ts:135](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L135)

___

### isEditing

• **isEditing**: `boolean`

Indicates whether text is in editing mode

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[isEditing](IText.md#isediting)

#### Defined in

[src/shapes/IText/IText.ts:143](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L143)

___

### isMoving

• `Optional` **isMoving**: `boolean`

internal boolean to signal the code that the object is
part of the move action.

#### Inherited from

[IText](IText.md).[isMoving](IText.md#ismoving)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:134](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L134)

___

### isWrapping

• **isWrapping**: `boolean`

#### Defined in

[src/shapes/Textbox.ts:89](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L89)

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

[IText](IText.md).[keysMap](IText.md#keysmap)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L30)

___

### keysMapRtl

• **keysMapRtl**: `TKeyMapIText`

#### Inherited from

[IText](IText.md).[keysMapRtl](IText.md#keysmaprtl)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:32](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L32)

___

### left

• **left**: `number`

#### Inherited from

[IText](IText.md).[left](IText.md#left)

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

[IText](IText.md).[lineCoords](IText.md#linecoords)

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

[IText](IText.md).[lineHeight](IText.md#lineheight)

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

[IText](IText.md).[linethrough](IText.md#linethrough)

#### Defined in

[src/shapes/Text/Text.ts:205](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L205)

___

### lockMovementX

• **lockMovementX**: `boolean`

#### Inherited from

[IText](IText.md).[lockMovementX](IText.md#lockmovementx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:63](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L63)

___

### lockMovementY

• **lockMovementY**: `boolean`

#### Inherited from

[IText](IText.md).[lockMovementY](IText.md#lockmovementy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L64)

___

### lockRotation

• **lockRotation**: `boolean`

#### Inherited from

[IText](IText.md).[lockRotation](IText.md#lockrotation)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L65)

___

### lockScalingFlip

• **lockScalingFlip**: `boolean`

#### Inherited from

[IText](IText.md).[lockScalingFlip](IText.md#lockscalingflip)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:70](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L70)

___

### lockScalingX

• **lockScalingX**: `boolean`

#### Inherited from

[IText](IText.md).[lockScalingX](IText.md#lockscalingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L66)

___

### lockScalingY

• **lockScalingY**: `boolean`

#### Inherited from

[IText](IText.md).[lockScalingY](IText.md#lockscalingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:67](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L67)

___

### lockSkewingX

• **lockSkewingX**: `boolean`

#### Inherited from

[IText](IText.md).[lockSkewingX](IText.md#lockskewingx)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:68](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L68)

___

### lockSkewingY

• **lockSkewingY**: `boolean`

#### Inherited from

[IText](IText.md).[lockSkewingY](IText.md#lockskewingy)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:69](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L69)

___

### matrixCache

• `Optional` **matrixCache**: `TMatrixCache`

storage cache for object full transform matrix

#### Inherited from

[IText](IText.md).[matrixCache](IText.md#matrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L86)

___

### minScaleLimit

• **minScaleLimit**: `number`

#### Inherited from

[IText](IText.md).[minScaleLimit](IText.md#minscalelimit)

#### Defined in

[src/shapes/Object/Object.ts:108](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L108)

___

### minWidth

• **minWidth**: `number`

Minimum width of textbox, in pixels.

**`Default`**

```ts

```

#### Implementation of

UniqueTextboxProps.minWidth

#### Defined in

[src/shapes/Textbox.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L66)

___

### moveCursor

• **moveCursor**: ``null`` \| `string`

#### Inherited from

[IText](IText.md).[moveCursor](IText.md#movecursor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:94](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L94)

___

### noScaleCache

• **noScaleCache**: `boolean`

#### Inherited from

[IText](IText.md).[noScaleCache](IText.md#noscalecache)

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

[IText](IText.md).[oCoords](IText.md#ocoords)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L105)

___

### objectCaching

• **objectCaching**: `boolean`

#### Inherited from

[IText](IText.md).[objectCaching](IText.md#objectcaching)

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

[IText](IText.md).[offsets](IText.md#offsets)

#### Defined in

[src/shapes/Text/Text.ts:328](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L328)

___

### opacity

• **opacity**: `number`

#### Inherited from

[IText](IText.md).[opacity](IText.md#opacity)

#### Defined in

[src/shapes/Object/Object.ts:110](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L110)

___

### originX

• **originX**: [`TOriginX`](../modules.md#toriginx)

#### Inherited from

[IText](IText.md).[originX](IText.md#originx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L27)

___

### originY

• **originY**: [`TOriginY`](../modules.md#toriginy)

#### Inherited from

[IText](IText.md).[originY](IText.md#originy)

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

[IText](IText.md).[overline](IText.md#overline)

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

[IText](IText.md).[ownCaching](IText.md#owncaching)

#### Defined in

[src/shapes/Object/Object.ts:254](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L254)

___

### ownMatrixCache

• `Optional` **ownMatrixCache**: `TMatrixCache`

storage cache for object transform matrix

#### Inherited from

[IText](IText.md).[ownMatrixCache](IText.md#ownmatrixcache)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:81](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L81)

___

### padding

• **padding**: `number`

#### Inherited from

[IText](IText.md).[padding](IText.md#padding)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:54](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L54)

___

### paintFirst

• **paintFirst**: ``"fill"`` \| ``"stroke"``

#### Inherited from

[IText](IText.md).[paintFirst](IText.md#paintfirst)

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

[IText](IText.md).[path](IText.md#path)

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

[IText](IText.md).[pathAlign](IText.md#pathalign)

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

[IText](IText.md).[pathSide](IText.md#pathside)

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

[IText](IText.md).[pathStartOffset](IText.md#pathstartoffset)

#### Defined in

[src/shapes/Text/Text.ts:300](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L300)

___

### perPixelTargetFind

• **perPixelTargetFind**: `boolean`

#### Inherited from

[IText](IText.md).[perPixelTargetFind](IText.md#perpixeltargetfind)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:90](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L90)

___

### scaleX

• **scaleX**: `number`

#### Inherited from

[IText](IText.md).[scaleX](IText.md#scalex)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:23](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L23)

___

### scaleY

• **scaleY**: `number`

#### Inherited from

[IText](IText.md).[scaleY](IText.md#scaley)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:24](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L24)

___

### selectable

• **selectable**: `boolean`

#### Inherited from

[IText](IText.md).[selectable](IText.md#selectable)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:88](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L88)

___

### selected

• `Protected` **selected**: `boolean`

#### Inherited from

[IText](IText.md).[selected](IText.md#selected)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L73)

___

### selectionBackgroundColor

• **selectionBackgroundColor**: `string`

#### Inherited from

[IText](IText.md).[selectionBackgroundColor](IText.md#selectionbackgroundcolor)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:86](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L86)

___

### selectionColor

• **selectionColor**: `string`

Color of text selection

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[selectionColor](IText.md#selectioncolor)

#### Defined in

[src/shapes/IText/IText.ts:136](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L136)

___

### selectionEnd

• **selectionEnd**: `number`

Index where text selection ends

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[selectionEnd](IText.md#selectionend)

#### Defined in

[src/shapes/IText/IText.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L125)

___

### selectionStart

• **selectionStart**: `number`

Index where text selection starts (or where cursor is when there is no selection)

**`Default`**

```ts

```

#### Inherited from

[IText](IText.md).[selectionStart](IText.md#selectionstart)

#### Defined in

[src/shapes/IText/IText.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L118)

___

### shadow

• **shadow**: ``null`` \| [`Shadow`](Shadow.md)

#### Inherited from

[IText](IText.md).[shadow](IText.md#shadow)

#### Defined in

[src/shapes/Object/Object.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L125)

___

### skewX

• **skewX**: `number`

#### Inherited from

[IText](IText.md).[skewX](IText.md#skewx)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:25](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L25)

___

### skewY

• **skewY**: `number`

#### Inherited from

[IText](IText.md).[skewY](IText.md#skewy)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L26)

___

### snapAngle

• `Optional` **snapAngle**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[IText](IText.md).[snapAngle](IText.md#snapangle)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:60](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L60)

___

### snapThreshold

• `Optional` **snapThreshold**: [`TDegree`](../modules.md#tdegree)

#### Inherited from

[IText](IText.md).[snapThreshold](IText.md#snapthreshold)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:61](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L61)

___

### splitByGrapheme

• **splitByGrapheme**: `boolean`

Use this boolean property in order to split strings that have no white space concept.
this is a cheap way to help with chinese/japanese

**`Since`**

2.6.0

#### Implementation of

UniqueTextboxProps.splitByGrapheme

#### Defined in

[src/shapes/Textbox.ts:83](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L83)

___

### stroke

• **stroke**: ``null`` \| `string` \| [`TFiller`](../modules.md#tfiller)

#### Inherited from

[IText](IText.md).[stroke](IText.md#stroke)

#### Defined in

[src/shapes/Object/Object.ts:115](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L115)

___

### strokeDashArray

• **strokeDashArray**: ``null`` \| `number`[]

#### Inherited from

[IText](IText.md).[strokeDashArray](IText.md#strokedasharray)

#### Defined in

[src/shapes/Object/Object.ts:116](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L116)

___

### strokeDashOffset

• **strokeDashOffset**: `number`

#### Inherited from

[IText](IText.md).[strokeDashOffset](IText.md#strokedashoffset)

#### Defined in

[src/shapes/Object/Object.ts:117](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L117)

___

### strokeLineCap

• **strokeLineCap**: `CanvasLineCap`

#### Inherited from

[IText](IText.md).[strokeLineCap](IText.md#strokelinecap)

#### Defined in

[src/shapes/Object/Object.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L118)

___

### strokeLineJoin

• **strokeLineJoin**: `CanvasLineJoin`

#### Inherited from

[IText](IText.md).[strokeLineJoin](IText.md#strokelinejoin)

#### Defined in

[src/shapes/Object/Object.ts:119](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L119)

___

### strokeMiterLimit

• **strokeMiterLimit**: `number`

#### Inherited from

[IText](IText.md).[strokeMiterLimit](IText.md#strokemiterlimit)

#### Defined in

[src/shapes/Object/Object.ts:120](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L120)

___

### strokeUniform

• **strokeUniform**: `boolean`

#### Inherited from

[IText](IText.md).[strokeUniform](IText.md#strokeuniform)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:31](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L31)

___

### strokeWidth

• **strokeWidth**: `number`

#### Inherited from

[IText](IText.md).[strokeWidth](IText.md#strokewidth)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:30](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L30)

___

### styles

• **styles**: [`TextStyle`](../modules.md#textstyle)

#### Inherited from

[IText](IText.md).[styles](IText.md#styles)

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

[IText](IText.md).[subscript](IText.md#subscript)

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

[IText](IText.md).[superscript](IText.md#superscript)

#### Defined in

[src/shapes/Text/Text.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L232)

___

### text

• **text**: `string`

#### Inherited from

[IText](IText.md).[text](IText.md#text)

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

[IText](IText.md).[textAlign](IText.md#textalign)

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

[IText](IText.md).[textBackgroundColor](IText.md#textbackgroundcolor)

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

[IText](IText.md).[textLines](IText.md#textlines)

#### Defined in

[src/shapes/Text/Text.ts:395](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L395)

___

### top

• **top**: `number`

#### Inherited from

[IText](IText.md).[top](IText.md#top)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:17](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L17)

___

### touchCornerSize

• **touchCornerSize**: `number`

#### Inherited from

[IText](IText.md).[touchCornerSize](IText.md#touchcornersize)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:73](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L73)

___

### transparentCorners

• **transparentCorners**: `boolean`

#### Inherited from

[IText](IText.md).[transparentCorners](IText.md#transparentcorners)

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

[IText](IText.md).[underline](IText.md#underline)

#### Defined in

[src/shapes/Text/Text.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L191)

___

### visible

• **visible**: `boolean`

#### Inherited from

[IText](IText.md).[visible](IText.md#visible)

#### Defined in

[src/shapes/Object/Object.ts:127](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L127)

___

### width

• **width**: `number`

#### Inherited from

[IText](IText.md).[width](IText.md#width)

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

[IText](IText.md).[zoomX](IText.md#zoomx)

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

[IText](IText.md).[zoomY](IText.md#zoomy)

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

[IText](IText.md).[ATTRIBUTE_NAMES](IText.md#attribute_names)

#### Defined in

[src/shapes/Text/Text.ts:1800](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1800)

___

### \_styleProperties

▪ `Static` **\_styleProperties**: readonly `StylePropertiesType`[] = `styleProperties`

#### Inherited from

[IText](IText.md).[_styleProperties](IText.md#_styleproperties)

#### Defined in

[src/shapes/Text/StyledText.ts:26](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/StyledText.ts#L26)

___

### cacheProperties

▪ `Static` **cacheProperties**: `string`[]

#### Inherited from

[IText](IText.md).[cacheProperties](IText.md#cacheproperties)

#### Defined in

[src/shapes/Text/Text.ts:411](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L411)

___

### genericFonts

▪ `Static` **genericFonts**: `string`[]

#### Inherited from

[IText](IText.md).[genericFonts](IText.md#genericfonts)

#### Defined in

[src/shapes/Text/Text.ts:1784](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1784)

___

### ownDefaults

▪ `Static` **ownDefaults**: `Record`<`string`, `any`\> = `textboxDefaultValues`

#### Overrides

[IText](IText.md).[ownDefaults](IText.md#owndefaults)

#### Defined in

[src/shapes/Textbox.ts:95](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L95)

___

### stateProperties

▪ `Static` **stateProperties**: `string`[] = `stateProperties`

This list of properties is used to check if the state of an object is changed.
This state change now is only used for children of groups to understand if a group
needs its cache regenerated during a .set call

#### Inherited from

[IText](IText.md).[stateProperties](IText.md#stateproperties)

#### Defined in

[src/shapes/Object/Object.ts:145](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L145)

___

### textLayoutProperties

▪ `Static` **textLayoutProperties**: `string`[]

Properties that requires a text layout recalculation when changed

#### Overrides

[IText](IText.md).[textLayoutProperties](IText.md#textlayoutproperties)

#### Defined in

[src/shapes/Textbox.ts:93](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L93)

___

### type

▪ `Static` **type**: `string` = `'Textbox'`

#### Overrides

[IText](IText.md).[type](IText.md#type)

#### Defined in

[src/shapes/Textbox.ts:91](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L91)

## Accessors

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Inherited from

IText.type

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

#### Inherited from

[IText](IText.md).[__getCursorBoundariesOffsets](IText.md#__getcursorboundariesoffsets)

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

[IText](IText.md).[_animate](IText.md#_animate)

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

[IText](IText.md).[_animateCursor](IText.md#_animatecursor)

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

[IText](IText.md).[_applyPatternForTransformedGradient](IText.md#_applypatternfortransformedgradient)

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

[IText](IText.md).[_applyPatternGradientTransform](IText.md#_applypatterngradienttransform)

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

[IText](IText.md).[_applyPatternGradientTransformText](IText.md#_applypatterngradienttransformtext)

#### Defined in

[src/shapes/Text/Text.ts:1244](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1244)

___

### \_calcTextareaPosition

▸ `Private` **_calcTextareaPosition**(): { `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| { `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

#### Returns

{ `charHeight?`: `undefined` = charHeight; `fontSize?`: `undefined` ; `left`: `string` = '1px'; `top`: `string` = '1px' } \| { `charHeight`: `number` = charHeight; `fontSize`: `string` ; `left`: `string` ; `top`: `string`  }

style contains style for hiddenTextarea

#### Inherited from

[IText](IText.md).[_calcTextareaPosition](IText.md#_calctextareaposition)

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

[IText](IText.md).[_calculateCurrentDimensions](IText.md#_calculatecurrentdimensions)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:809](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L809)

___

### \_clearCache

▸ `Private` **_clearCache**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_clearCache](IText.md#_clearcache)

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

[IText](IText.md).[_constrainScale](IText.md#_constrainscale)

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

[IText](IText.md).[_createBaseClipPathSVGMarkup](IText.md#_createbaseclippathsvgmarkup)

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

[IText](IText.md).[_createBaseSVGMarkup](IText.md#_createbasesvgmarkup)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:179](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L179)

___

### \_createCacheCanvas

▸ `Private` **_createCacheCanvas**(): `void`

Create a the canvas used to keep the cached copy of the object

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_createCacheCanvas](IText.md#_createcachecanvas)

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

[IText](IText.md).[_deleteLineStyle](IText.md#_deletelinestyle)

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

#### Overrides

[IText](IText.md).[_deleteStyleDeclaration](IText.md#_deletestyledeclaration)

#### Defined in

[src/shapes/Textbox.ts:270](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L270)

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

[IText](IText.md).[_drawBorders](IText.md#_drawborders)

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

[IText](IText.md).[_drawClipPath](IText.md#_drawclippath)

#### Defined in

[src/shapes/Object/Object.ts:943](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L943)

___

### \_exitEditing

▸ `Protected` **_exitEditing**(): `void`

runs the actual logic that exits from editing state, see [exitEditing](IText.md#exitediting)

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_exitEditing](IText.md#_exitediting)

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

[IText](IText.md).[_findCenterFromElement](IText.md#_findcenterfromelement)

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

[IText](IText.md).[_findCrossPoints](IText.md#_findcrosspoints)

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

[IText](IText.md).[_findTargetCorner](IText.md#_findtargetcorner)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:191](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L191)

___

### \_fireSelectionChanged

▸ `Private` **_fireSelectionChanged**(): `void`

Fires the even of selection changed

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_fireSelectionChanged](IText.md#_fireselectionchanged)

#### Defined in

[src/shapes/IText/IText.ts:282](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L282)

___

### \_generateStyleMap

▸ `Private` **_generateStyleMap**(`textInfo`): `StyleMap`

Generate an object that translates the style object so that it is
broken up by visual lines (new lines and automatic wrapping).
The original text styles object is broken up by actual lines (new lines only),
which is only sufficient for Text / IText

#### Parameters

| Name | Type |
| :------ | :------ |
| `textInfo` | `TextLinesInfo` |

#### Returns

`StyleMap`

#### Defined in

[src/shapes/Textbox.ts:140](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L140)

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

[IText](IText.md).[_getCacheCanvasDimensions](IText.md#_getcachecanvasdimensions)

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

[IText](IText.md).[_getCoords](IText.md#_getcoords)

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

#### Inherited from

[IText](IText.md).[_getCurrentCharIndex](IText.md#_getcurrentcharindex)

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

#### Inherited from

[IText](IText.md).[_getCursorBoundaries](IText.md#_getcursorboundaries)

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

#### Inherited from

[IText](IText.md).[_getCursorBoundariesOffsets](IText.md#_getcursorboundariesoffsets)

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

[IText](IText.md).[_getFontDeclaration](IText.md#_getfontdeclaration)

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

[IText](IText.md).[_getGraphemeBox](IText.md#_getgraphemebox)

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

[IText](IText.md).[_getImageLines](IText.md#_getimagelines)

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

[IText](IText.md).[_getIndexOnLine](IText.md#_getindexonline)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:416](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L416)

___

### \_getLeftOffset

▸ `Private` **_getLeftOffset**(): `number`

#### Returns

`number`

Left offset

#### Inherited from

[IText](IText.md).[_getLeftOffset](IText.md#_getleftoffset)

#### Defined in

[src/shapes/Text/Text.ts:1047](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1047)

___

### \_getLeftTopCoords

▸ `Private` **_getLeftTopCoords**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

#### Inherited from

[IText](IText.md).[_getLeftTopCoords](IText.md#_getlefttopcoords)

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

[IText](IText.md).[_getLineLeftOffset](IText.md#_getlineleftoffset)

#### Defined in

[src/shapes/Text/Text.ts:1444](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1444)

___

### \_getLineStyle

▸ `Private` **_getLineStyle**(`lineIndex`): `boolean`

probably broken need a fix
Returns the real style line that correspond to the wrapped lineIndex line
Used just to verify if the line does exist or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

`boolean`

if the line exists or not

#### Overrides

[IText](IText.md).[_getLineStyle](IText.md#_getlinestyle)

#### Defined in

[src/shapes/Textbox.ts:285](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L285)

___

### \_getNonTransformedDimensions

▸ `Private` **_getNonTransformedDimensions**(): [`Point`](Point.md)

Calculate object dimensions from its properties

#### Returns

[`Point`](Point.md)

dimensions

#### Inherited from

[IText](IText.md).[_getNonTransformedDimensions](IText.md#_getnontransformeddimensions)

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

[IText](IText.md).[_getSelectionForOffset](IText.md#_getselectionforoffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:377](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L377)

___

### \_getStyleDeclaration

▸ `Private` **_getStyleDeclaration**(`lineIndex`, `charIndex`): `Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |
| `charIndex` | `number` |

#### Returns

`Partial`<[`CompleteTextStyleDeclaration`](../modules.md#completetextstyledeclaration)\>

#### Overrides

[IText](IText.md).[_getStyleDeclaration](IText.md#_getstyledeclaration)

#### Defined in

[src/shapes/Textbox.ts:232](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L232)

___

### \_getTopOffset

▸ `Private` **_getTopOffset**(): `number`

#### Returns

`number`

Top offset

#### Inherited from

[IText](IText.md).[_getTopOffset](IText.md#_gettopoffset)

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

[IText](IText.md).[_getTransformedDimensions](IText.md#_gettransformeddimensions)

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

[IText](IText.md).[_getWidthBeforeCursor](IText.md#_getwidthbeforecursor)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:328](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L328)

___

### \_getWidthOfCharSpacing

▸ **_getWidthOfCharSpacing**(): `number`

#### Returns

`number`

#### Inherited from

[IText](IText.md).[_getWidthOfCharSpacing](IText.md#_getwidthofcharspacing)

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

[IText](IText.md).[_limitCacheSize](IText.md#_limitcachesize)

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

[IText](IText.md).[_measureChar](IText.md#_measurechar)

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

[IText](IText.md).[_measureLine](IText.md#_measureline)

#### Defined in

[src/shapes/Text/Text.ts:880](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L880)

___

### \_measureWord

▸ **_measureWord**(`word`, `lineIndex`, `charOffset?`): `number`

Helper function to measure a string of text, given its lineIndex and charIndex offset
It gets called when charBounds are not available yet.
Override if necessary
Use with [wordSplit](Textbox.md#wordsplit)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `word` | `string`[] | `undefined` |
| `lineIndex` | `number` | `undefined` |
| `charOffset` | `number` | `0` |

#### Returns

`number`

#### Defined in

[src/shapes/Textbox.ts:375](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L375)

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

[IText](IText.md).[_mouseDownHandler](IText.md#_mousedownhandler)

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

[IText](IText.md).[_mouseDownHandlerBefore](IText.md#_mousedownhandlerbefore)

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

[IText](IText.md).[_move](IText.md#_move)

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

[IText](IText.md).[_moveCursorLeftOrRight](IText.md#_movecursorleftorright)

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

[IText](IText.md).[_moveCursorUpOrDown](IText.md#_movecursorupordown)

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

[IText](IText.md).[_moveLeft](IText.md#_moveleft)

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

[IText](IText.md).[_moveRight](IText.md#_moveright)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:579](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L579)

___

### \_removeCacheCanvas

▸ **_removeCacheCanvas**(): `void`

Remove cacheCanvas and its dimensions from the objects

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_removeCacheCanvas](IText.md#_removecachecanvas)

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

[IText](IText.md).[_removeDefaultValues](IText.md#_removedefaultvalues)

#### Defined in

[src/shapes/Object/Object.ts:589](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L589)

___

### \_removeExtraneousStyles

▸ **_removeExtraneousStyles**(): `void`

#### Returns

`void`

#### Overrides

[IText](IText.md).[_removeExtraneousStyles](IText.md#_removeextraneousstyles)

#### Defined in

[src/shapes/Textbox.ts:533](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L533)

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

[IText](IText.md).[_removeShadow](IText.md#_removeshadow)

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

[IText](IText.md).[_render](IText.md#_render)

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

[IText](IText.md).[_renderBackground](IText.md#_renderbackground)

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

[IText](IText.md).[_renderChar](IText.md#_renderchar)

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

[IText](IText.md).[_renderChars](IText.md#_renderchars)

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

[IText](IText.md).[_renderControls](IText.md#_rendercontrols)

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

#### Inherited from

[IText](IText.md).[_renderCursor](IText.md#_rendercursor)

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

[IText](IText.md).[_renderFill](IText.md#_renderfill)

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

[IText](IText.md).[_renderPaintInOrder](IText.md#_renderpaintinorder)

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

#### Inherited from

[IText](IText.md).[_renderSelection](IText.md#_renderselection)

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

[IText](IText.md).[_renderStroke](IText.md#_renderstroke)

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

[IText](IText.md).[_renderText](IText.md#_rendertext)

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

[IText](IText.md).[_renderTextCommon](IText.md#_rendertextcommon)

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

[IText](IText.md).[_renderTextDecoration](IText.md#_rendertextdecoration)

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

[IText](IText.md).[_renderTextFill](IText.md#_rendertextfill)

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

[IText](IText.md).[_renderTextLine](IText.md#_rendertextline)

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

[IText](IText.md).[_renderTextLinesBackground](IText.md#_rendertextlinesbackground)

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

[IText](IText.md).[_renderTextStroke](IText.md#_rendertextstroke)

#### Defined in

[src/shapes/Text/Text.ts:1105](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1105)

___

### \_resetOrigin

▸ `Private` **_resetOrigin**(): `void`

Resets the origin/position of the object to it's original origin

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_resetOrigin](IText.md#_resetorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:246](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L246)

___

### \_restoreEditingProps

▸ `Private` **_restoreEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_restoreEditingProps](IText.md#_restoreeditingprops)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:638](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L638)

___

### \_saveEditingProps

▸ `Private` **_saveEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_saveEditingProps](IText.md#_saveeditingprops)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:622](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L622)

___

### \_set

▸ `Private` **_set**(`key`, `value`): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

While editing handle differently

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `any` |

#### Returns

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](IText.md).[_set](IText.md#_set)

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

[IText](IText.md).[_setClippingProperties](IText.md#_setclippingproperties)

#### Defined in

[src/shapes/Object/Object.ts:1083](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1083)

___

### \_setEditingProps

▸ `Private` **_setEditingProps**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_setEditingProps](IText.md#_seteditingprops)

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
| `style` | `Pick`<[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>, ``"fill"``\> | with ill defined |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `offsetX` | `number` |
| `offsetY` | `number` |

#### Inherited from

[IText](IText.md).[_setFillStyles](IText.md#_setfillstyles)

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

[IText](IText.md).[_setGraphemeOnPath](IText.md#_setgraphemeonpath)

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

[IText](IText.md).[_setLineDash](IText.md#_setlinedash)

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

#### Overrides

[IText](IText.md).[_setLineStyle](IText.md#_setlinestyle)

#### Defined in

[src/shapes/Textbox.ts:296](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L296)

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

[IText](IText.md).[_setObject](IText.md#_setobject)

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

[IText](IText.md).[_setOpacity](IText.md#_setopacity)

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

[IText](IText.md).[_setOptions](IText.md#_setoptions)

#### Defined in

[src/CommonMethods.ts:9](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/CommonMethods.ts#L9)

___

### \_setOriginToCenter

▸ `Private` **_setOriginToCenter**(): `void`

Sets the origin/position of the object to it's center point

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_setOriginToCenter](IText.md#_setorigintocenter)

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

[IText](IText.md).[_setScript](IText.md#_setscript)

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

[IText](IText.md).[_setShadow](IText.md#_setshadow)

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

[IText](IText.md).[_setStrokeStyles](IText.md#_setstrokestyles)

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

#### Overrides

[IText](IText.md).[_setStyleDeclaration](IText.md#_setstyledeclaration)

#### Defined in

[src/shapes/Textbox.ts:253](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L253)

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

[IText](IText.md).[_setTextStyles](IText.md#_settextstyles)

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

[IText](IText.md).[_setupCompositeOperation](IText.md#_setupcompositeoperation)

#### Defined in

[src/shapes/Object/Object.ts:1524](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1524)

___

### \_splitText

▸ `Private` **_splitText**(): `TextLinesInfo`

Divides text into lines of text and lines of graphemes.

#### Returns

`TextLinesInfo`

#### Inherited from

[IText](IText.md).[_splitText](IText.md#_splittext)

#### Defined in

[src/shapes/Text/Text.ts:446](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L446)

___

### \_splitTextIntoLines

▸ **_splitTextIntoLines**(`text`): `TextLinesInfo`

Gets lines of text to render in the Textbox. This function calculates
text wrapping on the fly every time it is called.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | text to split |

#### Returns

`TextLinesInfo`

Array of lines in the Textbox.

#### Overrides

[IText](IText.md).[_splitTextIntoLines](IText.md#_splittextintolines)

#### Defined in

[src/shapes/Textbox.ts:517](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L517)

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

[IText](IText.md).[_toSVG](IText.md#_tosvg)

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

#### Inherited from

[IText](IText.md).[_updateAndFire](IText.md#_updateandfire)

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

[IText](IText.md).[_updateCacheCanvas](IText.md#_updatecachecanvas)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:164](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L164)

___

### \_updateTextarea

▸ `Private` **_updateTextarea**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[_updateTextarea](IText.md#_updatetextarea)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:502](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L502)

___

### \_wrapLine

▸ `Private` **_wrapLine**(`lineIndex`, `desiredWidth`, `graphemeData`, `reservedSpace?`): `string`[][]

Wraps a line of text using the width of the Textbox as desiredWidth
and leveraging the known width o words from GraphemeData

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `lineIndex` | `number` | `undefined` |  |
| `desiredWidth` | `number` | `undefined` | width you want to wrap the line to |
| `graphemeData` | [`GraphemeData`](../modules.md#graphemedata) | `undefined` | an object containing all the lines' words width. |
| `reservedSpace` | `number` | `0` | space to remove from wrapping for custom functionalities |

#### Returns

`string`[][]

Array of line(s) into which the given text is wrapped
to.

#### Defined in

[src/shapes/Textbox.ts:414](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L414)

___

### \_wrapText

▸ **_wrapText**(`lines`, `desiredWidth`): `string`[][]

Wraps text using the 'width' property of Textbox. First this function
splits text on newlines, so we preserve newlines entered by the user.
Then it wraps each line using the width of the Textbox by calling
_wrapLine().

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lines` | `string`[] | The string array of text that is split into lines |
| `desiredWidth` | `number` | width you want to wrap to |

#### Returns

`string`[][]

Array of lines

#### Defined in

[src/shapes/Textbox.ts:310](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L310)

___

### abortCursorAnimation

▸ **abortCursorAnimation**(): `void`

Aborts cursor animation, clears all timeouts and clear textarea context if necessary

#### Returns

`void`

#### Inherited from

[IText](IText.md).[abortCursorAnimation](IText.md#abortcursoranimation)

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

[IText](IText.md).[addPaintOrder](IText.md#addpaintorder)

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

[IText](IText.md).[animate](IText.md#animate)

#### Defined in

[src/shapes/Object/AnimatableObject.ts:34](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/AnimatableObject.ts#L34)

___

### blur

▸ **blur**(): `void`

Override this method to customize cursor behavior on textbox blur

#### Returns

`void`

#### Inherited from

[IText](IText.md).[blur](IText.md#blur)

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

[IText](IText.md).[calcACoords](IText.md#calcacoords)

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

[IText](IText.md).[calcLineCoords](IText.md#calclinecoords)

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

[IText](IText.md).[calcOCoords](IText.md#calcocoords)

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

[IText](IText.md).[calcOwnMatrix](IText.md#calcownmatrix)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:767](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L767)

___

### calcTextHeight

▸ **calcTextHeight**(): `number`

Calculate text box height

#### Returns

`number`

#### Inherited from

[IText](IText.md).[calcTextHeight](IText.md#calctextheight)

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

[IText](IText.md).[calcTextWidth](IText.md#calctextwidth)

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

[IText](IText.md).[calcTransformMatrix](IText.md#calctransformmatrix)

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

[IText](IText.md).[canDrop](IText.md#candrop)

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

[IText](IText.md).[cleanStyle](IText.md#cleanstyle)

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

[IText](IText.md).[clearContextTop](IText.md#clearcontexttop)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:592](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L592)

___

### clone

▸ **clone**(`propertiesToInclude?`): `Promise`<[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>\>

Clones an instance.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `propertiesToInclude?` | `string`[] | Any properties that you might want to additionally include in the output |

#### Returns

`Promise`<[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>\>

#### Inherited from

[IText](IText.md).[clone](IText.md#clone)

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

[IText](IText.md).[cloneAsImage](IText.md#cloneasimage)

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

[IText](IText.md).[complexity](IText.md#complexity)

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

[IText](IText.md).[containsPoint](IText.md#containspoint)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:357](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L357)

___

### copy

▸ **copy**(): `void`

Copies selected text

#### Returns

`void`

#### Inherited from

[IText](IText.md).[copy](IText.md#copy)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:295](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L295)

___

### dispose

▸ **dispose**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[dispose](IText.md#dispose)

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

[IText](IText.md).[doubleClickHandler](IText.md#doubleclickhandler)

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

[IText](IText.md).[drawBorders](IText.md#drawborders)

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

[IText](IText.md).[drawCacheOnCanvas](IText.md#drawcacheoncanvas)

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

[IText](IText.md).[drawClipPathOnCache](IText.md#drawclippathoncache)

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

[IText](IText.md).[drawControls](IText.md#drawcontrols)

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

[IText](IText.md).[drawControlsConnectingLines](IText.md#drawcontrolsconnectinglines)

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

[IText](IText.md).[drawObject](IText.md#drawobject)

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

[IText](IText.md).[drawSelectionBackground](IText.md#drawselectionbackground)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:352](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L352)

___

### enlargeSpaces

▸ **enlargeSpaces**(): `void`

Enlarge space boxes and shift the others

#### Returns

`void`

#### Inherited from

[IText](IText.md).[enlargeSpaces](IText.md#enlargespaces)

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

[IText](IText.md).[enterEditing](IText.md#enterediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:378](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L378)

___

### exitEditing

▸ **exitEditing**(): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

Exits from editing state and fires relevant events

#### Returns

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](IText.md).[exitEditing](IText.md#exitediting)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:681](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L681)

___

### findCommonAncestors

▸ **findCommonAncestors**<`T`, `S`\>(`other`, `strict?`): `AncestryComparison`<`S`\>

Compare ancestors

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`, `T`\> |
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

[IText](IText.md).[findCommonAncestors](IText.md#findcommonancestors)

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

[IText](IText.md).[findLineBoundaryLeft](IText.md#findlineboundaryleft)

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

[IText](IText.md).[findLineBoundaryRight](IText.md#findlineboundaryright)

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

[IText](IText.md).[findWordBoundaryLeft](IText.md#findwordboundaryleft)

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

[IText](IText.md).[findWordBoundaryRight](IText.md#findwordboundaryright)

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

[IText](IText.md).[fire](IText.md#fire)

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

[IText](IText.md).[forEachControl](IText.md#foreachcontrol)

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

[IText](IText.md).[fromGraphemeToStringSelection](IText.md#fromgraphemetostringselection)

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

[IText](IText.md).[fromStringToGraphemeSelection](IText.md#fromstringtographemeselection)

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

[IText](IText.md).[get](IText.md#get)

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

#### Inherited from

[IText](IText.md).[get2DCursorLocation](IText.md#get2dcursorlocation)

#### Defined in

[src/shapes/IText/IText.ts:334](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L334)

___

### getActiveControl

▸ **getActiveControl**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Inherited from

[IText](IText.md).[getActiveControl](IText.md#getactivecontrol)

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

[IText](IText.md).[getAncestors](IText.md#getancestors)

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

[IText](IText.md).[getBoundingRect](IText.md#getboundingrect)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:540](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L540)

___

### getCanvasRetinaScaling

▸ **getCanvasRetinaScaling**(): `number`

#### Returns

`number`

#### Inherited from

[IText](IText.md).[getCanvasRetinaScaling](IText.md#getcanvasretinascaling)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:599](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L599)

___

### getCenterPoint

▸ **getCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to canvas

#### Returns

[`Point`](Point.md)

#### Inherited from

[IText](IText.md).[getCenterPoint](IText.md#getcenterpoint)

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

[IText](IText.md).[getCompleteStyleDeclaration](IText.md#getcompletestyledeclaration)

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

[IText](IText.md).[getCoords](IText.md#getcoords)

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

#### Inherited from

[IText](IText.md).[getCurrentCharColor](IText.md#getcurrentcharcolor)

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

#### Inherited from

[IText](IText.md).[getCurrentCharFontSize](IText.md#getcurrentcharfontsize)

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

[IText](IText.md).[getDownCursorOffset](IText.md#getdowncursoroffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:345](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L345)

___

### getGraphemeDataForRender

▸ **getGraphemeDataForRender**(`lines`): [`GraphemeData`](../modules.md#graphemedata)

For each line of text terminated by an hard line stop,
measure each word width and extract the largest word from all.
The returned words here are the one that at the end will be rendered.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lines` | `string`[] | the lines we need to measure |

#### Returns

[`GraphemeData`](../modules.md#graphemedata)

#### Defined in

[src/shapes/Textbox.ts:329](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L329)

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

[IText](IText.md).[getHeightOfChar](IText.md#getheightofchar)

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

[IText](IText.md).[getHeightOfLine](IText.md#getheightofline)

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

[IText](IText.md).[getLineWidth](IText.md#getlinewidth)

#### Defined in

[src/shapes/Text/Text.ts:1504](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1504)

___

### getMinWidth

▸ **getMinWidth**(): `number`

#### Returns

`number`

#### Defined in

[src/shapes/Textbox.ts:529](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L529)

___

### getObjectOpacity

▸ **getObjectOpacity**(): `number`

Return the object opacity counting also the group property

#### Returns

`number`

#### Inherited from

[IText](IText.md).[getObjectOpacity](IText.md#getobjectopacity)

#### Defined in

[src/shapes/Object/Object.ts:659](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L659)

___

### getObjectScaling

▸ **getObjectScaling**(): [`Point`](Point.md)

Return the object scale factor counting also the group scaling

#### Returns

[`Point`](Point.md)

#### Inherited from

[IText](IText.md).[getObjectScaling](IText.md#getobjectscaling)

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

[IText](IText.md).[getParent](IText.md#getparent)

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

[IText](IText.md).[getPointByOrigin](IText.md#getpointbyorigin)

#### Defined in

[src/shapes/Object/ObjectOrigin.ts:198](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectOrigin.ts#L198)

___

### getRelativeCenterPoint

▸ **getRelativeCenterPoint**(): [`Point`](Point.md)

Returns the center coordinates of the object relative to it's parent

#### Returns

[`Point`](Point.md)

#### Inherited from

[IText](IText.md).[getRelativeCenterPoint](IText.md#getrelativecenterpoint)

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

[IText](IText.md).[getRelativeX](IText.md#getrelativex)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:128](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L128)

___

### getRelativeXY

▸ **getRelativeXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x,y position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in parent's coordinate plane

#### Inherited from

[IText](IText.md).[getRelativeXY](IText.md#getrelativexy)

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

[IText](IText.md).[getRelativeY](IText.md#getrelativey)

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

[IText](IText.md).[getScaledHeight](IText.md#getscaledheight)

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

[IText](IText.md).[getScaledWidth](IText.md#getscaledwidth)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:549](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L549)

___

### getSelectedText

▸ **getSelectedText**(): `string`

Returns selected text

#### Returns

`string`

#### Inherited from

[IText](IText.md).[getSelectedText](IText.md#getselectedtext)

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

[IText](IText.md).[getSelectionStartFromPointer](IText.md#getselectionstartfrompointer)

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

#### Inherited from

[IText](IText.md).[getSelectionStyles](IText.md#getselectionstyles)

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

[IText](IText.md).[getStyleAtPosition](IText.md#getstyleatposition)

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

[IText](IText.md).[getSvgCommons](IText.md#getsvgcommons)

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

[IText](IText.md).[getSvgFilter](IText.md#getsvgfilter)

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

[IText](IText.md).[getSvgStyles](IText.md#getsvgstyles)

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

[IText](IText.md).[getSvgTransform](IText.md#getsvgtransform)

#### Defined in

[src/shapes/Object/FabricObjectSVGExportMixin.ts:103](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/FabricObjectSVGExportMixin.ts#L103)

___

### getTotalAngle

▸ **getTotalAngle**(): [`TDegree`](../modules.md#tdegree)

Returns the object angle relative to canvas counting also the group property

#### Returns

[`TDegree`](../modules.md#tdegree)

#### Inherited from

[IText](IText.md).[getTotalAngle](IText.md#gettotalangle)

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

[IText](IText.md).[getTotalObjectScaling](IText.md#gettotalobjectscaling)

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

[IText](IText.md).[getUpCursorOffset](IText.md#getupcursoroffset)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:390](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L390)

___

### getValueOfPropertyAt

▸ **getValueOfPropertyAt**<`T`\>(`lineIndex`, `charIndex`, `property`): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>[`T`]

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

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>[`T`]

the value of 'property'

#### Inherited from

[IText](IText.md).[getValueOfPropertyAt](IText.md#getvalueofpropertyat)

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

[IText](IText.md).[getViewportTransform](IText.md#getviewporttransform)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:655](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L655)

___

### getX

▸ **getX**(): `number`

#### Returns

`number`

x position according to object's [originX](Object.md#originx) property in canvas coordinate plane

#### Inherited from

[IText](IText.md).[getX](IText.md#getx)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:99](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L99)

___

### getXY

▸ **getXY**(): [`Point`](Point.md)

#### Returns

[`Point`](Point.md)

x position according to object's [originX](Object.md#originx) [originY](Object.md#originy) properties in canvas coordinate plane

#### Inherited from

[IText](IText.md).[getXY](IText.md#getxy)

#### Defined in

[src/shapes/Object/ObjectGeometry.ts:159](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/ObjectGeometry.ts#L159)

___

### getY

▸ **getY**(): `number`

#### Returns

`number`

y position according to object's [originY](Object.md#originy) property in canvas coordinate plane

#### Inherited from

[IText](IText.md).[getY](IText.md#gety)

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

[IText](IText.md).[graphemeSplit](IText.md#graphemesplit)

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

[IText](IText.md).[handleFiller](IText.md#handlefiller)

#### Defined in

[src/shapes/Text/Text.ts:1265](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1265)

___

### hasCommonAncestors

▸ **hasCommonAncestors**<`T`\>(`other`, `strict?`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` |  |
| `strict?` | `boolean` | checks only ancestors that are objects (without canvas) |

#### Returns

`boolean`

#### Inherited from

[IText](IText.md).[hasCommonAncestors](IText.md#hascommonancestors)

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

[IText](IText.md).[hasFill](IText.md#hasfill)

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

[IText](IText.md).[hasStroke](IText.md#hasstroke)

#### Defined in

[src/shapes/Object/Object.ts:814](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L814)

___

### initBehavior

▸ **initBehavior**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[initBehavior](IText.md#initbehavior)

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

[IText](IText.md).[initDelayedCursor](IText.md#initdelayedcursor)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:173](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L173)

___

### initDimensions

▸ `Private` **initDimensions**(): `void`

Unlike superclass's version of this function, Textbox does not update
its width.

#### Returns

`void`

#### Overrides

[IText](IText.md).[initDimensions](IText.md#initdimensions)

#### Defined in

[src/shapes/Textbox.ts:111](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L111)

___

### initHiddenTextarea

▸ **initHiddenTextarea**(): `void`

Initializes hidden textarea (needed to bring up keyboard in iOS)

#### Returns

`void`

#### Inherited from

[IText](IText.md).[initHiddenTextarea](IText.md#inithiddentextarea)

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

[IText](IText.md).[insertCharStyleObject](IText.md#insertcharstyleobject)

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

[IText](IText.md).[insertChars](IText.md#insertchars)

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

[IText](IText.md).[insertNewStyleBlock](IText.md#insertnewstyleblock)

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

[IText](IText.md).[insertNewlineStyleObject](IText.md#insertnewlinestyleobject)

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

[IText](IText.md).[intersectsWithObject](IText.md#intersectswithobject)

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

[IText](IText.md).[intersectsWithRect](IText.md#intersectswithrect)

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

[IText](IText.md).[isCacheDirty](IText.md#iscachedirty)

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

[IText](IText.md).[isContainedWithinObject](IText.md#iscontainedwithinobject)

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

[IText](IText.md).[isContainedWithinRect](IText.md#iscontainedwithinrect)

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

[IText](IText.md).[isControlVisible](IText.md#iscontrolvisible)

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

[IText](IText.md).[isDescendantOf](IText.md#isdescendantof)

#### Defined in

[src/shapes/Object/StackedObject.ts:64](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L64)

___

### isEmptyStyles

▸ **isEmptyStyles**(`lineIndex`): `boolean`

Returns true if object has no styling or no styling in a line

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | , lineIndex is on wrapped lines. |

#### Returns

`boolean`

#### Overrides

[IText](IText.md).[isEmptyStyles](IText.md#isemptystyles)

#### Defined in

[src/shapes/Textbox.ts:190](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L190)

___

### isEndOfWrapping

▸ **isEndOfWrapping**(`lineIndex`): `boolean`

Detect if the text line is ended with an hard break
text and itext do not have wrapping, return false

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `lineIndex` | `number` | text to split |

#### Returns

`boolean`

#### Overrides

[IText](IText.md).[isEndOfWrapping](IText.md#isendofwrapping)

#### Defined in

[src/shapes/Textbox.ts:486](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L486)

___

### isInFrontOf

▸ **isInFrontOf**<`T`\>(`other`): `undefined` \| `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`, `T`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `other` | `T` | object to compare against |

#### Returns

`undefined` \| `boolean`

if objects do not share a common ancestor or they are strictly equal it is impossible to determine which is in front of the other; in such cases the function returns `undefined`

#### Inherited from

[IText](IText.md).[isInFrontOf](IText.md#isinfrontof)

#### Defined in

[src/shapes/Object/StackedObject.ts:178](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/StackedObject.ts#L178)

___

### isNotVisible

▸ **isNotVisible**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IText](IText.md).[isNotVisible](IText.md#isnotvisible)

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

[IText](IText.md).[isOnScreen](IText.md#isonscreen)

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

[IText](IText.md).[isOverlapping](IText.md#isoverlapping)

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

[IText](IText.md).[isPartiallyOnScreen](IText.md#ispartiallyonscreen)

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

[IText](IText.md).[isTripleClick](IText.md#istripleclick)

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

[IText](IText.md).[isType](IText.md#istype)

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

[IText](IText.md).[measureLine](IText.md#measureline)

#### Defined in

[src/shapes/Text/Text.ts:863](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L863)

___

### missingNewlineOffset

▸ **missingNewlineOffset**(`lineIndex`): ``1`` \| ``0``

Detect if a line has a linebreak and so we need to account for it when moving
and counting style.

#### Parameters

| Name | Type |
| :------ | :------ |
| `lineIndex` | `number` |

#### Returns

``1`` \| ``0``

Number

#### Overrides

[IText](IText.md).[missingNewlineOffset](IText.md#missingnewlineoffset)

#### Defined in

[src/shapes/Textbox.ts:503](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L503)

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

[IText](IText.md).[mouseUpHandler](IText.md#mouseuphandler)

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

[IText](IText.md).[moveCursorDown](IText.md#movecursordown)

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

[IText](IText.md).[moveCursorLeft](IText.md#movecursorleft)

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

[IText](IText.md).[moveCursorLeftWithShift](IText.md#movecursorleftwithshift)

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

[IText](IText.md).[moveCursorLeftWithoutShift](IText.md#movecursorleftwithoutshift)

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

[IText](IText.md).[moveCursorRight](IText.md#movecursorright)

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

[IText](IText.md).[moveCursorRightWithShift](IText.md#movecursorrightwithshift)

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

[IText](IText.md).[moveCursorRightWithoutShift](IText.md#movecursorrightwithoutshift)

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

[IText](IText.md).[moveCursorUp](IText.md#movecursorup)

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

[IText](IText.md).[moveCursorWithShift](IText.md#movecursorwithshift)

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

[IText](IText.md).[moveCursorWithoutShift](IText.md#movecursorwithoutshift)

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

[IText](IText.md).[needsItsOwnCache](IText.md#needsitsowncache)

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

[IText](IText.md).[off](IText.md#off)

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

[IText](IText.md).[off](IText.md#off)

#### Defined in

[src/Observable.ts:125](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L125)

▸ **off**(): `void`

unsubscribe all event listeners

#### Returns

`void`

#### Inherited from

[IText](IText.md).[off](IText.md#off)

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

[IText](IText.md).[on](IText.md#on)

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

[IText](IText.md).[on](IText.md#on)

#### Defined in

[src/Observable.ts:27](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L27)

___

### onCompositionEnd

▸ **onCompositionEnd**(): `void`

Composition end

#### Returns

`void`

#### Inherited from

[IText](IText.md).[onCompositionEnd](IText.md#oncompositionend)

#### Defined in

[src/shapes/IText/ITextKeyBehavior.ts:281](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextKeyBehavior.ts#L281)

___

### onCompositionStart

▸ **onCompositionStart**(): `void`

Composition start

#### Returns

`void`

#### Inherited from

[IText](IText.md).[onCompositionStart](IText.md#oncompositionstart)

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

[IText](IText.md).[onCompositionUpdate](IText.md#oncompositionupdate)

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

[IText](IText.md).[onDeselect](IText.md#ondeselect)

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

[IText](IText.md).[onDragStart](IText.md#ondragstart)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:65](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L65)

___

### onInput

▸ **onInput**(`this`, `e`): `void`

Handles onInput event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `this` | [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\> & { `hiddenTextarea`: `HTMLTextAreaElement`  } | - |
| `e` | `Event` | Event object |

#### Returns

`void`

#### Inherited from

[IText](IText.md).[onInput](IText.md#oninput)

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

[IText](IText.md).[onKeyDown](IText.md#onkeydown)

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

[IText](IText.md).[onKeyUp](IText.md#onkeyup)

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

[IText](IText.md).[onMouseDown](IText.md#onmousedown)

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

[IText](IText.md).[onSelect](IText.md#onselect)

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

[IText](IText.md).[once](IText.md#once)

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

[IText](IText.md).[once](IText.md#once)

#### Defined in

[src/Observable.ts:66](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/Observable.ts#L66)

___

### paste

▸ **paste**(): `void`

Pastes text

#### Returns

`void`

#### Inherited from

[IText](IText.md).[paste](IText.md#paste)

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

[IText](IText.md).[removeChars](IText.md#removechars)

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

[IText](IText.md).[removeStyle](IText.md#removestyle)

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

[IText](IText.md).[removeStyleFromTo](IText.md#removestylefromto)

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

#### Inherited from

[IText](IText.md).[render](IText.md#render)

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

[IText](IText.md).[renderCache](IText.md#rendercache)

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

#### Inherited from

[IText](IText.md).[renderCursor](IText.md#rendercursor)

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

#### Inherited from

[IText](IText.md).[renderCursorAt](IText.md#rendercursorat)

#### Defined in

[src/shapes/IText/IText.ts:479](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L479)

___

### renderCursorOrSelection

▸ **renderCursorOrSelection**(): `void`

Renders cursor or selection (depending on what exists)
it does on the contextTop. If contextTop is not available, do nothing.

#### Returns

`void`

#### Inherited from

[IText](IText.md).[renderCursorOrSelection](IText.md#rendercursororselection)

#### Defined in

[src/shapes/IText/IText.ts:369](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L369)

___

### renderDragSourceEffect

▸ **renderDragSourceEffect**(): `void`

Renders drag start text selection

#### Returns

`void`

#### Inherited from

[IText](IText.md).[renderDragSourceEffect](IText.md#renderdragsourceeffect)

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

#### Inherited from

[IText](IText.md).[renderDropTargetEffect](IText.md#renderdroptargeteffect)

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

#### Inherited from

[IText](IText.md).[renderSelection](IText.md#renderselection)

#### Defined in

[src/shapes/IText/IText.ts:534](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/IText.ts#L534)

___

### restartCursorIfNeeded

▸ **restartCursorIfNeeded**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[restartCursorIfNeeded](IText.md#restartcursorifneeded)

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

[IText](IText.md).[rotate](IText.md#rotate)

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

[IText](IText.md).[scale](IText.md#scale)

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

[IText](IText.md).[scaleToHeight](IText.md#scaletoheight)

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

[IText](IText.md).[scaleToWidth](IText.md#scaletowidth)

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

[IText](IText.md).[searchWordBoundary](IText.md#searchwordboundary)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:317](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L317)

___

### selectAll

▸ **selectAll**(): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

Selects entire text

#### Returns

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](IText.md).[selectAll](IText.md#selectall)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:213](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L213)

___

### selectLine

▸ **selectLine**(`selectionStart`): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

Selects a line based on the index

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selectionStart` | `number` | Index of a character |

#### Returns

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](IText.md).[selectLine](IText.md#selectline)

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

[IText](IText.md).[selectWord](IText.md#selectword)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:342](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L342)

___

### set

▸ **set**(`key`, `value?`): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |
| `value?` | `any` |

#### Returns

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](IText.md).[set](IText.md#set)

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

[IText](IText.md).[setControlVisible](IText.md#setcontrolvisible)

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

[IText](IText.md).[setControlsVisibility](IText.md#setcontrolsvisibility)

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

[IText](IText.md).[setCoords](IText.md#setcoords)

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

[IText](IText.md).[setCursorByClick](IText.md#setcursorbyclick)

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

[IText](IText.md).[setOnGroup](IText.md#setongroup)

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

[IText](IText.md).[setOptions](IText.md#setoptions)

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

[IText](IText.md).[setPathInfo](IText.md#setpathinfo)

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

[IText](IText.md).[setPositionByOrigin](IText.md#setpositionbyorigin)

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

[IText](IText.md).[setRelativeX](IText.md#setrelativex)

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

[IText](IText.md).[setRelativeXY](IText.md#setrelativexy)

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

[IText](IText.md).[setRelativeY](IText.md#setrelativey)

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

#### Inherited from

[IText](IText.md).[setSelectionEnd](IText.md#setselectionend)

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

#### Inherited from

[IText](IText.md).[setSelectionStart](IText.md#setselectionstart)

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

[IText](IText.md).[setSelectionStartEndWithShift](IText.md#setselectionstartendwithshift)

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

#### Inherited from

[IText](IText.md).[setSelectionStyles](IText.md#setselectionstyles)

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

[IText](IText.md).[setSubscript](IText.md#setsubscript)

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

[IText](IText.md).[setSuperscript](IText.md#setsuperscript)

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

[IText](IText.md).[setX](IText.md#setx)

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

[IText](IText.md).[setXY](IText.md#setxy)

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

[IText](IText.md).[setY](IText.md#sety)

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

[IText](IText.md).[shiftLineStyles](IText.md#shiftlinestyles)

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

[IText](IText.md).[shouldCache](IText.md#shouldcache)

#### Defined in

[src/shapes/Object/Object.ts:866](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L866)

___

### shouldStartDragging

▸ **shouldStartDragging**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[IText](IText.md).[shouldStartDragging](IText.md#shouldstartdragging)

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

[IText](IText.md).[strokeBorders](IText.md#strokeborders)

#### Defined in

[src/shapes/Object/InteractiveObject.ts:376](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/InteractiveObject.ts#L376)

___

### styleHas

▸ **styleHas**(`property`, `lineIndex`): `boolean`

Returns true if object has a style property or has it on a specified line

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `StylePropertiesType` |
| `lineIndex` | `number` |

#### Returns

`boolean`

#### Overrides

[IText](IText.md).[styleHas](IText.md#stylehas)

#### Defined in

[src/shapes/Textbox.ts:175](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L175)

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

#### Inherited from

[IText](IText.md).[toCanvasElement](IText.md#tocanvaselement)

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

[IText](IText.md).[toClipPathSVG](IText.md#toclippathsvg)

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

[IText](IText.md).[toDataURL](IText.md#todataurl)

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

[IText](IText.md).[toDatalessObject](IText.md#todatalessobject)

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

[IText](IText.md).[toJSON](IText.md#tojson)

#### Defined in

[src/shapes/Object/Object.ts:1484](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L1484)

___

### toObject

▸ **toObject**<`T`, `K`\>(`propertiesToInclude?`): `Pick`<`T`, `K`\> & `SProps`

Returns object representation of an instance

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Omit`<`Props` & [`TClassProperties`](../modules.md#tclassproperties)<[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>\>, keyof `SProps`\> |
| `K` | extends `string` \| `number` \| `symbol` = `never` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `propertiesToInclude?` | `K`[] | `[]` | Any properties that you might want to additionally include in the output |

#### Returns

`Pick`<`T`, `K`\> & `SProps`

object representation of an instance

**`Method`**

toObject

#### Overrides

[IText](IText.md).[toObject](IText.md#toobject)

#### Defined in

[src/shapes/Textbox.ts:556](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L556)

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

[IText](IText.md).[toSVG](IText.md#tosvg)

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

[IText](IText.md).[toString](IText.md#tostring)

#### Defined in

[src/shapes/Text/Text.ts:570](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L570)

___

### toggle

▸ **toggle**(`property`): [`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

Toggles specified property from `true` to `false` or from `false` to `true`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `property` | `string` | Property to toggle |

#### Returns

[`Textbox`](Textbox.md)<`Props`, `SProps`, `EventSpec`\>

#### Inherited from

[IText](IText.md).[toggle](IText.md#toggle)

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

[IText](IText.md).[transform](IText.md#transform)

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

[IText](IText.md).[transformMatrixKey](IText.md#transformmatrixkey)

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

[IText](IText.md).[translateToCenterPoint](IText.md#translatetocenterpoint)

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

[IText](IText.md).[translateToGivenOrigin](IText.md#translatetogivenorigin)

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

[IText](IText.md).[translateToOriginPoint](IText.md#translatetooriginpoint)

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

[IText](IText.md).[tripleClickHandler](IText.md#tripleclickhandler)

#### Defined in

[src/shapes/IText/ITextClickBehavior.ts:118](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextClickBehavior.ts#L118)

___

### updateFromTextArea

▸ `Private` **updateFromTextArea**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[updateFromTextArea](IText.md#updatefromtextarea)

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

[IText](IText.md).[updateSelectionOnMouseMove](IText.md#updateselectiononmousemove)

#### Defined in

[src/shapes/IText/ITextBehavior.ts:410](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/IText/ITextBehavior.ts#L410)

___

### updateTextareaPosition

▸ `Private` **updateTextareaPosition**(): `void`

#### Returns

`void`

#### Inherited from

[IText](IText.md).[updateTextareaPosition](IText.md#updatetextareaposition)

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

[IText](IText.md).[willDrawShadow](IText.md#willdrawshadow)

#### Defined in

[src/shapes/Object/Object.ts:879](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Object/Object.ts#L879)

___

### wordSplit

▸ **wordSplit**(`value`): `string`[]

Override this method to customize word splitting
Use with [_measureWord](Textbox.md#_measureword)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`string`[]

array of words

#### Defined in

[src/shapes/Textbox.ts:399](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L399)

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

[IText](IText.md).[_fromObject](IText.md#_fromobject)

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

[IText](IText.md).[fromElement](IText.md#fromelement)

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

[IText](IText.md).[fromObject](IText.md#fromobject)

#### Defined in

[src/shapes/Text/Text.ts:1898](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Text/Text.ts#L1898)

___

### getDefaults

▸ `Static` **getDefaults**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `controls` | { `bl`: [`Control`](Control.md) ; `br`: [`Control`](Control.md) ; `mb`: [`Control`](Control.md) ; `ml`: [`Control`](Control.md) ; `mr`: [`Control`](Control.md) ; `mt`: [`Control`](Control.md) ; `mtr`: [`Control`](Control.md) ; `tl`: [`Control`](Control.md) ; `tr`: [`Control`](Control.md)  } |
| `controls.bl` | [`Control`](Control.md) |
| `controls.br` | [`Control`](Control.md) |
| `controls.mb` | [`Control`](Control.md) |
| `controls.ml` | [`Control`](Control.md) |
| `controls.mr` | [`Control`](Control.md) |
| `controls.mt` | [`Control`](Control.md) |
| `controls.mtr` | [`Control`](Control.md) |
| `controls.tl` | [`Control`](Control.md) |
| `controls.tr` | [`Control`](Control.md) |

#### Overrides

[IText](IText.md).[getDefaults](IText.md#getdefaults)

#### Defined in

[src/shapes/Textbox.ts:97](https://github.com/fabricjs/fabric.js/blob/a4453620e/src/shapes/Textbox.ts#L97)
