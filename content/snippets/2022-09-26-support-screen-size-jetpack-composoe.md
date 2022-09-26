---
author: Trian Damai
title: Support Multiple Screen Size Jetpack Compose
description: Multiple Screen Siize for Dp siize
slug: media-query-jetpack-compose
createdAt: 2022-09-17 21:26
updatedAt: 2022-09-17 21:26
image: https://source.unsplash.com/INHtWKpBTsA/1600x900
tags:
    - MYSQL
    - Docker
    - PHPMYADMIN
prev_title: Mengenal Jetpack compose
prev_link: /article/2021-12-20-mengenal-jetpack-compose
next_title: Lazy Column & Lazy Grid
next_link: /article/2021-12-24-lazygrid-dalam-lazycoumn
---
## Usages
```kotlin
@Composable
fun Component(){
    val ctx = LocalContext.current
    Text(
        modifier=Modifier.width(
            16.dp.from(ctx)
        ),
        style=TextStyle(
            fontSize=16.sp.from(ctx)
        )
    )
}
```

## Extensions

```kotlin

**
 * `Support Different Screen Size`
 * Author PT Cexup Telemedicine
 * Created by Trian Damai
 * 13/10/2021
 */
fun Dp.from(
    ctx:Context,
    defaultScreenWidth: Double = 375.0,
    defaultScreenHeight: Double = 812.0
): Dp{
    val density = ctx.resources.displayMetrics.density
    val currentW=  ctx.resources.displayMetrics.heightPixels.dp/density
    val currentH = ctx.resources.displayMetrics.widthPixels.dp/density
    val currentDiagonalScreen = sqrt(currentW.value.toDouble().pow(2)+currentH.value.toDouble().pow(2)).dp

    //now design using size with w = 375 h = 812
    val defWidth = defaultScreenWidth.pow(2)
    val defHeight = defaultScreenHeight.pow(2)
    val defScreenDiagonal = sqrt(defWidth + defHeight)

    val resultCompare = currentDiagonalScreen.value/defScreenDiagonal

    val result = (this.value*resultCompare).toInt()

    return  result.dp

}
/**
 * Media query for text unit multiple screen
 *
 **/

fun TextUnit.from(
    ctx: Context,
    defaultScreenWidth: Double = 375.0,
    defaultScreenHeight: Double = 812.0
): TextUnit{
    val density = ctx.resources.displayMetrics.density
    val currentW=  ctx.resources.displayMetrics.heightPixels.dp/density
    val currentH = ctx.resources.displayMetrics.widthPixels.dp/density
    val currentDiagonalScreen = sqrt(currentW.value.toDouble().pow(2)+currentH.value.toDouble().pow(2)).dp


    //now design using default size with w = 375 h = 812
    val defWidth = defaultScreenWidth.pow(2)
    val defHeight = defaultScreenHeight.pow(2)
    val defScreenDiagonal = sqrt(defWidth + defHeight)

    val resultCompare = currentDiagonalScreen.value/defScreenDiagonal
    val result = (this.value*resultCompare).toInt()

    return  result.sp

}
```

