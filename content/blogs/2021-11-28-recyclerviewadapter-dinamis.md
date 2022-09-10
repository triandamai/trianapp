---
author: Trian Damai
title: Dynamic Recyclerview Adapter
description: Recyclerview memudahkan kita dalam membuat sebuah tampilan list data.Namun recyclerview sendiri membutuhkan kofigurasi yang cukup melelahkan karena akan ada boilerplate ketika kita memiliki banyak tampilan menggunakan recyclerview.
slug: 2021-11-28-recyclerviewadapter-dinamis
createdAt: 2021-11-28 15:00
updatedAt: 2021-11-28 16:00
image: https://source.unsplash.com/INHtWKpBTsA/1600x900
tags:
    - Xml
    - Android
    - Java
prev_title: Mengenal Jetpack compose
prev_link: /article/2021-12-20-mengenal-jetpack-compose
next_title: Lazy Column & Lazy Grid
next_link: /article/2021-12-24-lazygrid-dalam-lazycoumn
---

Recyclerview memudahkan kita dalam membuat sebuah tampilan list data.Namun recyclerview sendiri membutuhkan kofigurasi yang cukup melelahkan karena akan ada boilerplate ketika kita memiliki banyak tampilan menggunakan recyclerview. Dari situ saya memiliki ide untuk membuar adapter recyclerview lebih dinamis dan mengurangi boilerplate.


## Memulai
Kita akan membuat sebuah project yang menampilkan list promo.
Untuk permulaan tambahkan dependensi pada project kita dengan

```groovy
 implementation 'com.github.triandamai:singleadapter:v1.0.15'
```
## Layout
Kita perlu membuat layout terlebih dahulu untuk membuat tampilan
Pertama kita membuat layout untuk item recyclerviewnya
`item_promo.xml`

```xml
 <com.trian.damai.ui.home.ItemPromo
        android:layout_height="wrap_content"
        android:layout_width="wrap_content">

        <androidx.cardview.widget.CardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_gravity="center">
            <TextView
                android:id="@+id/tv_promo"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_margin="8dp"
                android:text="@string/item_promo_text" />
            <Button
                android:id="@+id/btn_cek"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:layout_margin="8dp"
                android:text="@string/cek_promo" />

        </androidx.cardview.widget.CardView>
</<com.trian.damai.ui.home.ItemPromo>
     
```
Kemudian kita tambahkan recyclerview pada layout activity
`activity_main.xml`
```xml
<androidx.constraintlayout.widget.ConstraintLayout 
xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recycler_view"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        app:layoutManager="LinearLayoutManager"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```
## Adapter

### Membuat ItemPromo class
Jika kita perhatikan di layout `item_promo.xml` maka ada xml dengan tag `com.trian.damai.ui.home.ItemPromo`

itu adalah class yang perlu kita buat dimana di class tersebut akan kita gunakan untuk item view holdernya

```java
class ItemPromo extends Parent implements SingleAdapterRow<PromoModel> {
     Button btn ;
     TextView tv;

    @Override
    protected void onFinishInflate() {
        super.onFinishInflate();
       //disini inisiasi view
        btn = (Button) findViewById(R.id.btn_cek);
        tv = (Button) findViewById(R.id.tv_promo);

    }
    @Override
    public void bindView(PromoModel data, onEventClick<PromoModel> eventClick, int position) {
         // disini setdata ke view
         // contoh:
         tv.setText(data.getPromoCode());
         btn.setOnClickListener(new OnClickListener() {
             @Override
             public void onClick(View v) {
                 eventClick.onClick(onEventType.onDetail,data,position);
             }
         });
    }
}

```
### Membuat Model
Untuk menampung data kita perlu membuat sebuah class model `PromoModel`
```java

public class PromoModel{
  private String promoCode;
  private String id;
}

```
### Konfigurasi recyclerView Adapter
Setalah itu kita menginisiasikan recyclerview ke recyclerview adapternya
`MainActivity.java`
```java
public class TemperatureActivity extends AppCompatActivity {
    private SingleAdapter<PromoModel> promoAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        //Initialize the body ester machine Bluetooth module

        super.onCreate(savedInstanceState);
        setContentView(this, R.layout.activity_main);
        
        promoAdapter = new SingleAdapter<>(R.layout.item_promo, new onEventClick<PromoModel>() {
                @Override
                public void onClick(onEventType eventType, String payload, int position) {
                //logic here
                }
            }
        ).withRecyclerView(rv);
    }

    
}
```
untuk mengeset data ke adapter cukup dengan
```java
    List<PromoModel> data = new ArrayList<>();

    //setdata
    promoAdapter.setData(data);
```
## Penutup
Untuk source code bisa di dapat di [SingleAdapter](https://github.com/triandamai/singleadapter) saya sudah menggunakannya di beberapa aplikasi yang pernah saya buat,dan sebenarnya masih banyak kekurangan,Namun saya membuatnya berdasarkan pengalaman saya yang mengalami kendala ketika harus membuat banyak layout yang menampilkan sebuah list dalam recyclerview.
Sekian dari saya terimakasih dan semoga bermanfaat :-)