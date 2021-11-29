---
author: Trian Damai
title: Dynamic Recyclerview Adapter
description: Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML.
slug: 2021-11-28-dynamic-recyclerviewadapter
createdAt: 2021-11-28 15:00
updatedAt: 2021-11-28 16:00
image: https://source.unsplash.com/INHtWKpBTsA/1600x900
tags:
    - Xml
    - Android
    - Java
prev_title: Writing Markdown
prev_link: /article/2021-11-27-writing-with-markdown
next_title: Dynamic RecyclerAdapter
next_link: /article/2021-11-28-dynamic-recyclerviewadapter
---

 Markdown is a lightweight markup language with plain-text-formatting syntax. Its design allows it to be converted to many output formats, but the original tool by the same name only supports HTML. Markdown is often used to format readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.

## History

John Gruber created the Markdown language in 2004 in collaboration with Aaron Swartz on the syntax, with the goal of enabling people "to write using an easy-to-read and easy-to-write plain text format". Its key design goal is readability. That the language be readable as-is.

> To write using an easy-to-read and easy-to-write plain text format

To this end, its main inspiration is the existing conventions for marking up plain text in email, though it also draws from earlier markup languages, notably setext, Textile, and reStructuredText.

### Getting Started
```groovy
 implementation 'com.github.triandamai:singleadapter:v1.0.15'
```
### Create Model Data
```java

public class PromoModel{
  private String product;
  private int disc:
}

```
### Making Adapter

```java
SingleAdapter<PromoModel> promoAdapter = 
new SingleAdapter<>(R.layout.item_food_promo, new onEventClick<PromoModel>() {
        @Override
        public void onClick(onEventType eventType, String payload, int position) {

        }
    }
).withRecyclerView(rv);
```
### Create Item Layout
```java
class ItemPromo extends Parent implements SingleAdapterRow<PromoModel> {

}

```
```xml
 <com.trian.damai.ui.home.ItemPromo
        android:layout_height="wrap_content"
        android:layout_width="wrap_content">

        <androidx.cardview.widget.CardView
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
         ...
```
## Markdown Flavours

There are several different versions of markdown

### CommonMark

From 2012, a group of people including Jeff Atwood and John MacFarlane launched what Atwood characterized as a standardization effort. A community website now aims to "document various tools and resources available to document authors and developers, as well as implementors of the various markdown implementations".

### GitHub Flavored Markdown (GFM)

In 2017, GitHub released a formal specification of their GitHub Flavored Markdown (GFM) that is based on CommonMark. It follows the CommonMark specification exactly except for tables, strikethrough, autolinks and task lists, which the GitHub spec has added as extensions.

![unsplash](https://source.unsplash.com/3igFnx0L2pY/640x360)

### Markdown Extra

Markdown Extra is a lightweight markup language based on Markdown implemented in PHP (originally), Python and Ruby. It adds features not available with plain Markdown syntax. Markdown Extra is supported in some content management systems such as, for example, Drupal.

Markdown Extra adds the following features to Markdown:

- markdown markup inside HTML blocks
- elements with id/class attribute
- "fenced code blocks" that span multiple lines of code
- tables
- definition lists
- footnotes
- abbreviations