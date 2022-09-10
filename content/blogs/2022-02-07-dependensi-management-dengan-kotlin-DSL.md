---
author: Trian Damai
title: Dependensi management dengan kotlin DSL
description: Saat ini gradle merupakan pusat utama untuk managament dependensi dan konfigurasi.
slug: 2022-02-07-dependensi-management-dengan-kotlin-DSL
createdAt: 2022-02-07 10:30
updatedAt: 2022-02-07 10:30
image: https://miro.medium.com/max/1400/1*4ClhGUTyUOz_YVIioIKNsQ.png
tags:
    - Gradle
    - Android
    - Kotlin
    - DSL
prev_title: Lazy Column & Lazy Grid
prev_link: /article/2021-12-24-lazygrid-dalam-lazycoumn
next_title: Dynamic RecyclerAdapter
next_link: /article/2021-11-28-recyclerviewadapter-dinamis
---

## Intro
Saya menggunakan Gradle sudah sejak pertama kali belajar bahasa pemrograman java. Gradle menjadi tempat untuk kita mengature dependensi, konfigurasi data, build type dsb.
Dan me-maintain dependensi untuk project yang menggunakan lebih dari 1 module sangatlah menguras waktu dan ribet pastinya, Kali ini saya akan berbagi bagaiman saya mengatur dependensi dengan kotlin DSL.

## Permasalahan
Diperusahaan tempat saya bekerja saat ini menggunakan aplikasi multi module dan otomatis kita menggunakan build.gardle yang berbeda setiap modulenya tetapi ada beberapa menggunakan dependensi yang sama.

katakanlah kita neniliki 2 module yaitu component dan app yang sama-sama menggunakan dependensi untuk ui tooling seperti [Jetpack compose](https://trian.app/)

- Module app kita deklarasikan dependensi
```kotlin
    implementation("androidx.compose.ui:ui:1.2.0-alpha02")
    implementation("androidx.compose.material:material:1.2.0-alpha02")
    implementation("androidx.compose.ui:ui-tooling-preview:1.2.0-alpha02")

    implementation("androidx.compose.ui:ui-tooling:1.2.0-alpha02")
```
- Kemudian pada module component kita deklarasikan dependensi yang sama

```kotlin
    implementation("androidx.compose.ui:ui:1.2.0-alpha02")
    implementation("androidx.compose.material:material:1.2.0-alpha02")
    implementation("androidx.compose.ui:ui-tooling-preview:1.2.0-alpha02")
    implementation("androidx.compose.ui:ui-tooling:1.2.0-alpha02")
```

Setelah kita mendefinisikan versi dependensi di setiap build.gradle akan menimbulkan masalah dimana setiap ada perubahan versi dari dependensi maka akan terjadi bentrok antar modul, Setiap ada perubahan maka kita harus merubah modul lai secara manual.

## Menggunakan project root gradle
Alternatif lain kita bisa mendefiniskan dependensi di root-level build.gradle

```groovy
ext { 
    compileSdkVersion = 28  
    versions = [
            composeVersion = "1.2.0-alpha02"
    ]
  
    deps = [
       composeLib: "androidx.compose.material:material:${versions.composeVersion}",
  ]
}
```

penggunakan setiap module cukup dengan

```groovy
implementation deps.composeLib
```

Cara ini bisa mengatasi untuk maslah upgrade versi setiap dependensi. Tetapi cara ini tidak bisa untuk otomatis mendeteksi pembaruan versi dependensi. Oleh karena itu kita bisa menggunakan cara yang menggunakan `buildSrc` dengan kotlin DSL

## apa itu buildSrc
`buildSrc` adalah sebuah direktori di level projek root dimana berisi informasi build. kita bisa gunakan direktori ini untuk mngeaktifkan `kotlin-dsl` dan membuat logic untuk mengkostumisasi konfigurasi untuk gradle antar projek dan saat ini merupakan yang paling banyak digunakan karena kemampuannya untuk melakukan testing.

seperti dari dokumentasi gradle:


The directory `buildSrc` is treated as an included build. Upon discovery of the directory, Gradle automatically compiles and tests this code and puts it in the classpath of your build script. For multi-project builds there can be only one buildSrc directory, which has to sit in the root project directory. buildSrc should be preferred over script plugins as it is easier to maintain, refactor and test the code — [Gradle Docs](https://docs.gradle.org/current/userguide/organizing_gradle_projects.html#sec:build_sources)


cara membuat `buildSrc` direktori:<br>
<b>Klik kanan di project -> new -> Directory -> buildSrc</b>


## Mengaktifkan Kotlin DSL di `buildSrc`
Buat sebuah file gradle di direktori buildSrc dengan nama `build.gradle.kts` kemudian kita aktifkan opsi `kotlin-dsl`

```kotlin
import org.gradle.kotlin.dsl.`kotlin-dsl`

plugins {
    `kotlin-dsl`
}

repositories {
    mavenCentral()
}
```

## Membuat file kumpulan dependensi
pada direktori `buildSrc` buat sebuah file baru dengan nama file bebas kali ini saya menggunakan nama `Dependencie.kt` kemudian kita definisikan object depensdensinya
```kotlin
object Libs{
    const val composeVersion = "1.2.0-alpha02"
    val compose by lazy{"androidx.compose.material:material:$composeVersion"}
}

object ConfigData {
    const val compileSdkVersion = 30
    const val buildToolsVersion = "30.0.3"
    const val minSdkVersion = 21
    const val targetSdkVersion = 30
    const val versionCode = 1
    const val versionName = "1.0"
}
```
Kemudian kita bisa menggunakannya di setiap modul 

```kotlin
plugins {
    id("com.android.application")
    kotlin("android")
}

android {
    compileSdkVersion(ConfigData.compileSdkVersion)
    buildToolsVersion(ConfigData.buildToolsVersion)

    defaultConfig {
        applicationId = "app.trian.dsl"
        minSdkVersion(ConfigData.minSdkVersion)
        targetSdkVersion(ConfigData.targetSdkVersion)
        versionCode = ConfigData.versionCode
        versionName = ConfigData.versionName
        ...
    }


   ...
}

dependencies {

    implementation(Libs.compose)
}
```

### Referensi
- https://betterprogramming.pub/gradle-dependency-management-with-buildsrc-and-kotlin-dsl-1de958eab166
- https://github.com/trianapp/tudu
