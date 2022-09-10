---
author: Trian Damai
title: Mengenal Jetpack Compose
description: Jetpack compose adalah modern UI toolkit dari google untuk membuat aplikasi android.
slug: 2021-12-20-mengenal-jetpack-compose
createdAt: 2021-11-28 15:00
updatedAt: 2021-11-28 16:00
image: https://1.bp.blogspot.com/-9MiK78CFMLM/YQFurOq9AII/AAAAAAAAQ1A/lKj5GiDnO_MkPLb72XqgnvD5uxOsHO-eACLcBGAsYHQ/s0/Android-Compose-1.0-header-v2.png
tags:
    - Jetpack Compose
    - Android
    - Kotlin
prev_title: Lazy Column & Lazy Grid
prev_link: /article/2021-12-24-lazygrid-dalam-lazycoumn
next_title: Dynamic RecyclerAdapter
next_link: /article/2021-11-28-recyclerviewadapter-dinamis
---

Jetpack compose adalah ui toolkit terbaru dari google yang menggunakan pendakatan deklarative UI. beberapa waktu lalu tepatnya [21 july 2021](https://android-developers.googleblog.com/2021/07/jetpack-compose-announcement.html) google mengumumkan versi stabil dari jetpack compose,sebenarnya saya sudah mulai mencoba jetpack compose dari versi beta hanya untuk percobaan dan belajar saja namun saat diumumkan versi stabilnya saya mulai menggunakannya pada projek-projek saya baik pribadi maupun projek dari kantor, saya ingin membagikan pengalaman saya tentang jetpack compose.

## Apa itu Jetpack Compose
Salah satu perbedaan yang paling mencolok antara jetpack compose dengan xml adalah untuk membuat UI tidak perlu menggunakan xml melainkan kita akan menggukana kotlin secara keseluruhan mulai dari typography,color
Untuk membuat UI kita cukup menggunakan `composable` function:<br>

```kotlin{1,2}[component.kt]
@Composable
fun Composable() {
    Text("Halo Dunia!")
}
```
Apabila kita sudah familiar dengan layout dengan xml seperti `TextView`,`LinearLayout`,`RelativeLayout`, dll, maka di jetpack compose sudah tidak ada lagi😟. Setiap elemnt ui akan menggunakan `composable` function yang ditandai dengan anotasi `@Composable`.
Seperti saya sebut sebelumnya jetpack compose menggunakan pendakatan deklative UI mirip dengan `React Native` ,`Vue`,`Flutter` dimana kita merepresentasikan ui berdasarkan state <br>

```kotlin
@Composable
fun Title(message: String?) {
  if(message == null) {
    Text("error")
  } else {
    Text(message)
  }
}
```
Mendefinisikan state bisa dengan `remember` dan `mutableState`

```kotlin
@Composable
fun Counter() {
    var count by remember{ mutableStateOf(0) }
    Button(onClick={
        count++
    }){
        Text("counter ${count}")
    }
}
```

Cukup Menarik Bukan? Compose menjanjikan potensi yang cukup besar untuk masa depan Android development menggunakan kotlin.
Okey sekarang bagaimana kita membuat sebuah aplikasi menggunakan Jetpack Compose?

## Menggunakan Jetpack Compose
Untuk menggunakan jetpack compose tidak ada perbaedaan dengan menggunakan xml.
Seperti biasa cukup menambahkan dependency
```groovy
// build.gradle.kts
implementation("androidx.compose.ui:ui:1.0.1")
implementation("androidx.compose.ui:ui-tooling:1.0.1")
implementation("androidx.compose.foundation:foundation:1.0.1")
implementation("androidx.compose.material:material:1.0.1")
```
Untuk menggunakan compose Kawan-kawan ada 2 opsi yaitu full jetpack compose atau kita tambahkan di layout xml yang sudah ada, Namun saya tidak akan mebahas disini akan saya bahas di lain waktu. Pada activity atau fragment kita cukup kita gunakan dengan cara:

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            //Compose dimulai dari sini

            Text("Hello world!")
        }
    }
}
```
Jetpack compose sudah menyediakan layout predefine seperti `Column`,`Row`,`Box` dan masih banyak lagi dan kita masih bisa meng-customnya lagi sesuai dengan kebutuhan.

## Navigasi
Hal yang menjadi pertimbangan bagi saya ketika membuat aplikasi adalah navigasi,Ya navigasi merupakan hal yang cukup krusial jetpack compose sendiri sudah menyediakan library untuk navigasi dan penggunaanya pun cukup mudah
```groovy
 implementation "androidx.navigation:navigation-compose:"
```
Untuk membuat route kita definisikan seperti berikut:

```kotlin
class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            //Compose dimulai dari sini
            //definiskan navigation controller
            val navController = rememberNavController()

            //navigasi graph
           NavHost(navController = navController, startDestination = "profile") {
                composable("profile") { Profile(/*...*/) }
                composable("friendslist") { FriendsList(/*...*/) }
            }
        }
    }
}

```
Untuk menavigasi bisa menggunakan fungsi `navigate()`

```kotlin

@Composable
fun Profile(navController: NavController) {
    /*...*/
    Button(onClick = { navController.navigate("friends") }) {
        Text(text = "Navigate next")
    }
    /*...*/
}
```

## Jetpack compose dengan library yang sudah ada

Jetpack compose merupakan hal baru kita sebagai developer tidak serta merta langsung bisa menerima dan beralih karena banyak faktor seperti library yang kita pakai belum mendukung jetpack compose,atau aplikasi kita yang sudah cukup besar dan complex.
Oleh karena itu Jetpack Compose sendiri masih sangat mendukung library lama,bahkan kita masih bisa menggunakan layout xml di jetpack compose berikut contoh ketika saya membuat `NumberPicker` yang memang dari jetpack compose belum ada:

```kotlin

@RequiresApi(Build.VERSION_CODES.Q)
@Composable
fun MyNumberPicker(
    min: Int,
    max: Int,
    value:Int=0,
    items: Array<String>,
    onValueChange: (old: Int, new: Int) -> Unit,
) {
    AndroidView({
        NumberPicker(
            ContextThemeWrapper(it, R.style.Chart).apply { }

        )
    }, update = {
            view ->
            //logic disini
        view.maxValue = max
        view.minValue = min
        view.displayedValues = items
        view.value = value
        view.setOnValueChangedListener { _, oldval, newval ->
            onValueChange(oldval, newval)
        }
    })
}
```
Untuk menggunakan layout/component lama kiat cukup menggunakan `AndroidView()` yang mana merupakan composable function yang sudah disediakan oleh tim dari jetpack.

## Penutup
Jetpack Compose memberikan dampak besar dalam dunia Android development karena mempercepat proses development. Saya sudah menggunakan Jetpack compose untuk Kantor tempat saya bekerja,saya dan tim memutuskan menggunakan Jetpack Compose secara menyeluruh dengan me-Recode aplikasi dari nol. dan hasilnya cukup mengesankan. dari segelintir kelebihan bukan berarti Jetpack compose sudah sempurna dan jauh dari bug 😅 masih cukup banyak bug dan kurangnya fitur atau library-library pendukung karena masih cukup awal. Apakah Jetpack Compose akan spenuhnya menggantikan xml? Saya rasa tidak untuk dalam waktu dekat ini.
Sekian terimakasih. 

### Referensi
- https://blog.logrocket.com/building-faster-android-apps-jetpack-compose
- https://developer.android.com/jetpack/compose?hl=id
