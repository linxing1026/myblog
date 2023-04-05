import{_ as n,e as s}from"./app.88860582.js";const a={},e=s(`<h1 id="ts\u5B66\u4E60\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#ts\u5B66\u4E60\u7B14\u8BB0" aria-hidden="true">#</a> ts\u5B66\u4E60\u7B14\u8BB0</h1><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><ul><li>unknown\u8868\u793A\u672A\u77E5\u7C7B\u578B\u7684\u503C</li><li>any\u662F\u4EFB\u610F\u7C7B\u578B\u7684\u503C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> e<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">;</span>
e <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
e <span class="token operator">=</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> s<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> d<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>d\u7684\u7C7B\u578B\u662Fany\uFF0C\u5B83\u53EF\u4EE5\u8D4B\u503C\u7ED9\u4EFB\u610F\u53D8\u91CF\u3002unknown\u5B9E\u9645\u662F\u4E00\u4E2A\u7C7B\u578B\u5B89\u5168\u7684any\uFF0C\u4E0D\u80FD\u76F4\u63A5\u8D4B\u503C\u7ED9\u5176\u4ED6\u53D8\u91CF</p><ul><li>\u7C7B\u578B\u65AD\u8A00 \u53EF\u4EE5\u7528\u6765\u544A\u8BC9\u89E3\u6790\u5668\u53D8\u91CF\u7684\u5B9E\u9645\u7C7B\u578B</li></ul><ol><li>\u53D8\u91CF as \u7C7B\u578B</li><li>&lt;\u7C7B\u578B&gt; \u53D8\u91CF</li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>s <span class="token operator">=</span> o <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
s <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span> o
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>void \u7528\u6765\u8868\u793A\u7A7A\uFF0C\u4EE5\u51FD\u6570\u4E3A\u4F8B\uFF0C\u5C31\u8868\u793A\u6CA1\u6709\u8FD4\u56DE\u503C\u7684\u51FD\u6570</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>never \u8868\u793A\u6C38\u8FDC\u4E0D\u4F1A\u8FD4\u56DE\u7ED3\u679C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">fn2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">never</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>[propName: string]: any \u8868\u793A\u4EFB\u610F\u7C7B\u578B\u7684\u5C5E\u6027</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>propName<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">}</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span><span class="token string">&#39;lisi&#39;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u8BBE\u7F6E\u51FD\u6570\u7ED3\u6784\u7684\u7C7B\u578B\u58F0\u660E\uFF1A(\u5F62\u53C2\uFF1A\u7C7B\u578B\uFF0C\u5F62\u53C2\uFF1A\u7C7B\u578B...) =&gt; \u8FD4\u56DE\u503C</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> <span class="token function-variable function">d</span><span class="token operator">:</span> <span class="token punctuation">(</span>a<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6570\u7EC4\u7684\u8868\u793A \u7C7B\u578B[] Array&lt;\u7C7B\u578B&gt;</li><li>\u679A\u4E3E</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">enum</span> Gender<span class="token punctuation">{</span>
  Male <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
  Female <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> gender<span class="token operator">:</span> Gender<span class="token punctuation">}</span>
i <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;lisi&#39;</span><span class="token punctuation">,</span>
  gender<span class="token operator">:</span> Gender<span class="token punctuation">.</span>Male
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><ul><li>\u7C7B\u578B\u522B\u540D</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">myType</span> <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span> <span class="token operator">|</span> <span class="token number">4</span> <span class="token operator">|</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> k<span class="token operator">:</span> myType<span class="token punctuation">;</span>
k <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,20);function p(t,l){return e}var c=n(a,[["render",p],["__file","ts.html.vue"]]);export{c as default};