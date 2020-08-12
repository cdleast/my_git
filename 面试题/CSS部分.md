#### 1、calc, support, media各自的含义及用法？

* @support主要是用于检测浏览器是否支持CSS的某个属性，其实就是条件判断，如果支持某个属性，你可以写一套样式，如果不支持某个属性，你也可以提供另外一套样式作为替补。
* calc() 函数用于动态计算长度值。 calc()函数支持 "+", "-", "*", "/" 运算；
* @media 查询，你可以针对不同的媒体类型定义不同的样式。

### 2、css水平、垂直居中的写法，请至少写出4种？

* *水平居中*

```css
行内元素: text-align: center
块级元素: margin: 0 auto
position:absolute +left:50%+ transform:translateX(-50%)
display:flex + justify-content: center
```

* *垂直居中*

```css
设置line-height 等于height
position：absolute +top:50%+ transform:translateY(-50%)
display:flex + align-items: center
display:table+display:table-cell + vertical-align: middle;
```

### 3、1rem、1em、1vh、1px各自代表的含义？

* rem：是全部的长度都相对于根元素<html>元素。通常做法是给html元素设置一个字体大小，然后其他元素的长度单位就为rem。
* em：子元素字体大小的em是相对于父元素字体大小，元素的width/height/padding/margin用em的话是相对于该元素的font-size
* Vh：全称是 Viewport Width 和 Viewport Height，视窗的宽度和高度，相当于 屏幕宽度和高度的 1%，不过，处理宽度的时候%单位更合适，处理高度的 话 vh 单位更好
* px：像素（Pixel）。相对长度单位。像素px是相对于显示器屏幕分辨率而言的

### 4、画一条0.5px的直线？

```css
height: 1px;
transform: scale(0.5);
```

### 5、画一个三角形？

```css
.a{
    width: 0;
    height: 0;
    border-width: 100px;
    border-style: solid;
    border-color: transparent #0099CC transparent transparent;
    transform: rotate(90deg); /*顺时针旋转90°*/
 }

<div class="a"></div>
```

### 6、说一下盒模型？

* 盒模型的组成，由里向外content,padding,border,margin.
* 在IE盒子模型中，width表示content+padding+border这三个部分的宽度
* 在标准的盒子模型中，width指content部分的宽度
* box-sizing的使用

```css
box-sizing: content-box 是W3C盒子模型
box-sizing: border-box 是IE盒子模型
```

* box-sizing的默认属性是content-box



