<template>
  <div class="icon-list">
    <div class="nav-tabs">
      <ul class="tabs" @click="handleNavTabsClick">
        <li class="tabs-switch-item active">
          <span class="item-content">Font class</span>
        </li>
        <li class="tabs-switch-item"><span class="item-content">Unicode</span></li>
        <li class="tabs-switch-item"><span class="item-content">Symbol</span></li>
      </ul>
    </div>
    <div class="tabs-container">
      <div class="tabs-content active">
        <div class="article markdown">
          <h2>Unicode 引用</h2>
          <hr>

          <p>Unicode 是字体在网页端最原始的应用方式，特点是：</p>
          <ul>
            <li>兼容性最好，支持 IE6+，及所有现代浏览器。</li>
            <li>支持按字体的方式去动态调整图标大小，颜色等等。</li>
            <li>但是因为是字体，所以不支持多色。只能使用平台里单色的图标，就算项目里有多色图标也会自动去色。</li>
          </ul>
          <blockquote>
            <p>注意：新版 iconfont 支持多色图标，这些多色图标在 Unicode 模式下将不能使用，如果有需求建议使用symbol 的引用方式</p>
          </blockquote>
          <p>Unicode 使用步骤如下：</p>
          <h3>第一步：拷贝项目下面生成的 <code>@font-face</code></h3>
          <pre><code class="language-css"
          >@font-face {
  font-family: 'he-icon';
  src: url('iconfont.eot');
  src: url('iconfont.eot?#iefix') format('embedded-opentype'),
      url('iconfont.woff2') format('woff2'),
      url('iconfont.woff') format('woff'),
      url('iconfont.ttf') format('truetype'),
      url('iconfont.svg#he-icon') format('svg');
}
</code></pre>
          <h3>第二步：定义使用 iconfont 的样式</h3>
          <pre><code class="language-css"
          >.he-icon {
  font-family: "he-icon" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</code></pre>
          <h3>第三步：挑选相应图标并获取字体编码，应用于页面</h3>
          <pre>
<code class="language-html"
>&lt;span class="he-icon"&gt;&amp;#x33;&lt;/span&gt;
</code></pre>
          <blockquote>
            <p>"he-icon" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
          </blockquote>
        </div>
        <ul class="icon-list">
          <li class="icon-item">
            <div class="icon-show">
              <i class="he-icon he-check-circle"></i>
            </div>
            <div class="icon-name">check-circle</div>
            <div class="code-name">.he-check-circle</div>
          </li>
        </ul>
      </div>
      <div class="tabs-content">
        <div class="article markdown">
          <h2>font-class 引用</h2>
          <hr>

          <p>font-class 是 Unicode 使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。</p>
          <p>与 Unicode 使用方式相比，具有如下特点：</p>
          <ul>
            <li>兼容性良好，支持 IE8+，及所有现代浏览器。</li>
            <li>相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。</li>
            <li>因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。</li>
            <li>不过因为本质上还是使用的字体，所以多色图标还是不支持的。</li>
          </ul>
          <p>使用步骤如下：</p>
          <h3>第一步：引入项目下面生成的 fontclass 代码：</h3>
          <pre><code class="language-html">&lt;link rel="stylesheet" href="./iconfont.css"&gt;
</code></pre>
          <h3>第二步：挑选相应图标并获取类名，应用于页面：</h3>
          <pre><code class="language-html">&lt;span class="he-icon he-xxx"&gt;&lt;/span&gt;
</code></pre>
          <blockquote>
            <p>"
              he-icon" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
          </blockquote>
        </div>
        <ul class="icon-list">
          <li class="icon-item">
            <div class="icon-show">
              <i class="he-icon">&#xe77d;</i>
            </div>
            <div class="icon-name">check-circle</div>
            <div class="code-name">&amp;#xe77d;</div>
          </li>
        </ul>
      </div>
      <div class="tabs-content">
        <div class="article markdown">
          <h2>Symbol 引用</h2>
          <hr>

          <p>这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇<a href="">文章</a>
            这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：</p>
          <ul>
            <li>支持多色图标了，不再受单色限制。</li>
            <li>通过一些技巧，支持像字体那样，通过 <code>font-size</code>, <code>color</code> 来调整样式。</li>
            <li>兼容性较差，支持 IE9+，及现代浏览器。</li>
            <li>浏览器渲染 SVG 的性能一般，还不如 png。</li>
          </ul>
          <p>使用步骤如下：</p>
          <h3>第一步：引入项目下面生成的 symbol 代码：</h3>
          <pre><code class="language-html">&lt;script src="./iconfont.js"&gt;&lt;/script&gt;
</code></pre>
          <h3>第二步：加入通用 CSS 代码（引入一次就行）：</h3>
          <pre><code class="language-html">&lt;style&gt;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
&lt;/style&gt;
</code></pre>
          <h3>第三步：挑选相应图标并获取类名，应用于页面：</h3>
          <pre><code class="language-html">&lt;svg class="icon" aria-hidden="true"&gt;
  &lt;use xlink:href="#icon-xxx"&gt;&lt;/use&gt;
&lt;/svg&gt;
</code></pre>
        </div>
        <ul class="icon-list">
          <li class="icon-item">
            <div class="icon-show">
              <svg class="he-icon svg-icon" aria-hidden="true">
                <use xlink:href="#he-check-circle"></use>
              </svg>
            </div>
            <div class="icon-name">check-circle</div>
            <div class="code-name">#he-check-circle</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import '@/assets/fonts/antd/iconfont.css';
import '@/assets/css/icon.scss';
import '@/assets/fonts/antd/iconfont.js'

export default {
  name: 'Icon',
  methods: {
    /**
     * @doc tab导航按钮点击事件处理(事件代理方式)
     * @author Heanes
     * @time 2019-06-26 19:53:01 周三
     */
    handleNavTabsClick (event) {
      let target = event.target;
      if(target.parentNode.tagName.toUpperCase() === 'LI'){
        target = target.parentNode;
      }
      if (target.tagName.toUpperCase() === 'LI') {
        const pos = this.getChildIndexInParent(target);

        // 清除tab-nav激活样式
        for(const item of target.parentNode.children){
          item.classList.remove('active')
        }
        target.classList.add('active');

        const tabsContainer = document.getElementsByClassName('tabs-container');
        const tabsContents = tabsContainer[0].children;
        for(const item of tabsContents){
          item.classList.remove('active')
        }
        tabsContents[pos].classList.add('active');
      }
    },
    /**
     * @doc 获取元素在父元素中的位置
     * @param ele
     * @returns {number}
     * @author Heanes
     * @time 2019-06-26 19:44:42 周三
     */
    getChildIndexInParent (ele) {
      const parent = ele.parentNode;
      return Array.prototype.indexOf.call(parent.children, ele);
    }
  }
}
</script>

<style scoped>

</style>
