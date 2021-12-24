---
author: Trian Damai
title: Lazy Column dan Lazy Grid
description: Bagi yang sudah pernah menggunakan atau mencoba Jetpack Compose pasti akan menyadari bahwa ketika kita menggunakan Lazy Column dan Lazy Grid bersamaan maka tidak akan berhasil.
slug: 2021-12-24-lazygrid-dalam-lazycoumn
createdAt: 2021-12-24 15:00
updatedAt: 2021-12-24 16:00
image: https://source.unsplash.com/INHtWKpBTsA/1600x900
tags:
    - Xml
    - Android
    - Java
prev_title: Mengenal Jetpack compose
prev_link: /article/2021-12-20-mengenal-jetpack-compose
next_title: Dynamic RecyclerAdapter
next_link: /article/2021-11-28-dynamic-recyclerviewadapter
---

Mebuat List pada aplikasi merupaka hal yang hampir semua developer temui di android sendiri cukup mudah karena kita bisa membuatnya menggunakan `RecyclerView` atau `ListView` bahkan di Jetpack Compose sendiri pun sudah tersedia seperti `LazyColumn` `LazyRow` dan lain-lain namun suatu ketika kita akan menggunakan kombinasi kita akan mendapatkan masalah dimana    `LazyColumn` tidak bisa digabungnkan dengan `LazyGrid` 🤨. Saya terfikirkan bagaimana kita membuat kombinasi dari column dan grid layout.


## Memulai
Ketika kita akan menggunakan LazyGrid didalam LazyRow maka kita akan mendapatkan error 

```text
java.lang.IllegalStateException: Nesting scrollable in the same direction layouts like LazyColumn and Column(Modifier.verticalScroll()) is not allowed. If you want to add a header before the list of items please take a look on LazyColumn component which has a DSL api which allows to first add a header via item() function and then the list of items via items().
```
Setelah bolak-balik mencari jawaban di google saya mendapatkan solusi yang cukup tricky yaitu kita menggunakan `LazyColumn` dimana kita perlu membuat extension untuk item grid nya menggunakan DSL. Oke mari kita mulai
1. Pertama kita buat extension untuk `LazyList` nya

```kotlin
fun LazyListScope.gridItems(
    count:Int,
    columnCount:Int,
    horizontalArrangement:Arrangement.Horizontal=Arrangement.Start,
    itemContent:@Composable BoxScope.(Int)->Unit

){
    //ini dsl nya
    gridItems(
        data = List(count){it},
        columnCount=columnCount,
        horizontalArrangement = horizontalArrangement,
        itemContent = itemContent,
    )
}
```

2. Kemudian kita buat extension DSL nya
```kotlin
fun <T> LazyListScope.gridItems(
    data:List<T>,
    columnCount:Int,
    horizontalArrangement:Arrangement.Horizontal =Arrangement.Start,
    itemContent:@Composable BoxScope.(T)->Unit
){
    val rows = if(data.count() ==0) 0 else 1+(data.count() - 1) / columnCount
    items(rows){
        rowIndex->
        Row(horizontalArrangement = horizontalArrangement) {
            for(columnIndex in 0 until columnCount){
                val itemIndex = rowIndex*columnCount+columnIndex
                if(itemIndex < data.count()){
                    Box(
                        modifier = Modifier.weight(1f, fill = true),
                        propagateMinConstraints = true
                    ) {
                        itemContent.invoke(this,data[itemIndex])
                    }
                }else{
                    Spacer(Modifier.weight(1f, fill = true))
                }
            }
        }
    }
}
```
3. Setelah itu kita tinggal gunakan seperti berikut
```kotlin
    LazyColumn {
        item {
            Text(text = "Item LazyColumn biasa")
        }
        // items dengan count
        gridItems(10, nColumns = 4) { index -> 
            //item grid composable disini
            Text("item count")
            
        }
        // items dengan list
        gridItems(listOf(1,2,3), nColumns = 4) { item ->
            //item grid composable disini
            Text("item list")
        }
}
```
## 
Sekian terima kasih

### Referensi
- https://blog.logrocket.com/building-faster-android-apps-jetpack-compose
- https://developer.android.com/jetpack/compose/lists