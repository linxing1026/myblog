import{_ as p,o as e,c as o,a as n,t as l,F as c,e as s,d as a}from"./app.88860582.js";const u={},i=s(`<h1 id="vue3\u5FEB\u901F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#vue3\u5FEB\u901F\u4E0A\u624B" aria-hidden="true">#</a> Vue3\u5FEB\u901F\u4E0A\u624B</h1><h2 id="vue3\u7684\u65B0\u7279\u6027" tabindex="-1"><a class="header-anchor" href="#vue3\u7684\u65B0\u7279\u6027" aria-hidden="true">#</a> Vue3\u7684\u65B0\u7279\u6027</h2><ol><li><p>Compisition API(\u7EC4\u5408API)</p><ul><li>setup\u914D\u7F6E</li><li>ref reactive</li><li>watch watchEffect</li><li>provide inject</li></ul></li><li><p>\u65B0\u5185\u7F6E\u7EC4\u4EF6</p><ul><li>Fragment</li><li>Teleport</li><li>Suspense</li></ul></li></ol><h2 id="vue3\u521B\u5EFA\u5DE5\u7A0B" tabindex="-1"><a class="header-anchor" href="#vue3\u521B\u5EFA\u5DE5\u7A0B" aria-hidden="true">#</a> Vue3\u521B\u5EFA\u5DE5\u7A0B</h2><ol><li>\u901A\u8FC7vue-cli</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vue create project-name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ol start="2"><li>\u901A\u8FC7vite</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm init vue@latest
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h1 id="\u5E38\u7528\u7684compisition-api" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684compisition-api" aria-hidden="true">#</a> \u5E38\u7528\u7684Compisition API</h1><h2 id="setup" tabindex="-1"><a class="header-anchor" href="#setup" aria-hidden="true">#</a> setup</h2><ol><li>vue3\u4E2D\u4E00\u4E2A\u65B0\u7684\u914D\u7F6E\u9879\uFF0C\u503C\u662F\u4E00\u4E2A\u51FD\u6570</li></ol><h2 id="ref" tabindex="-1"><a class="header-anchor" href="#ref" aria-hidden="true">#</a> ref</h2>`,12),r=n("li",null,"\u4F5C\u7528\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u54CD\u5E94\u5F0F\u5BF9\u8C61",-1),k=a("\u8BED\u6CD5\uFF1A const x = ref(value); "),d=n("li",null,"\u521B\u5EFA\u4E00\u4E2A\u5305\u542B\u54CD\u5E94\u5F0F\u5BF9\u8C61\u7684\u5F15\u7528\u5BF9\u8C61",-1),b=n("li",null,"JS\u4E2D\u64CD\u4F5C\u6570\u636E\uFF1Ax.value = xxx;",-1),h=a("\u6A21\u677F\u4E2D\u8BFB\u53D6\u6570\u636E\uFF1A\u4E0D\u7528.value,\u76F4\u63A5\uFF1A"),m=n("li",null,[a("\u6CE8\uFF1A "),n("ul",null,[n("li",null,"\u5B9A\u4E49\u6570\u636E\u7C7B\u578B\u53EF\u4EE5\u662F\u57FA\u672C\u7C7B\u578B\uFF0C\u53EF\u4EE5\u7684\u5BF9\u8C61"),n("li",null,"\u57FA\u672C\u7C7B\u578B\u54CD\u5E94\u5F0F\u7684\u5B9E\u73B0\u4F9D\u9760 Object.defineProperty()\u7684 get set\u5B9E\u73B0"),n("li",null,"\u5BF9\u8C61\u7C7B\u578B\u7684\u6570\u636E\u8C03\u7528\u4E86 reactive\u51FD\u6570\uFF0C\u672C\u8D28\u662F\u901A\u8FC7 Proxy")])],-1),f=s(`<h2 id="reactive" tabindex="-1"><a class="header-anchor" href="#reactive" aria-hidden="true">#</a> reactive</h2><ul><li>\u4F5C\u7528\uFF1A\u5B9A\u4E49\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B\u7684\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u57FA\u672C\u7C7B\u578B\u4E0D\u8981\u4F7F\u7528reactive</li><li>reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u662F\u201C\u6DF1\u5C42\u6B21\u7684\u201D\u3002</li><li>\u5185\u90E8\u57FA\u4E8E ES6 \u7684 Proxy \u5B9E\u73B0\uFF0C\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u64CD\u4F5C\u6E90\u5BF9\u8C61\u5185\u90E8\u6570\u636E\u8FDB\u884C\u64CD\u4F5C\u3002</li></ul><h2 id="setup\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9" tabindex="-1"><a class="header-anchor" href="#setup\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9" aria-hidden="true">#</a> setup\u7684\u4E24\u4E2A\u6CE8\u610F\u70B9</h2><ul><li><p>setup\u6267\u884C\u7684\u65F6\u673A</p><ul><li>\u5728beforeCreate\u4E4B\u524D\u6267\u884C\u4E00\u6B21\uFF0Cthis\u662Fundefined\u3002</li></ul></li><li><p>setup\u7684\u53C2\u6570</p><ul><li>props\uFF1A\u503C\u4E3A\u5BF9\u8C61\uFF0C\u5305\u542B\uFF1A\u7EC4\u4EF6\u5916\u90E8\u4F20\u9012\u8FC7\u6765\uFF0C\u4E14\u7EC4\u4EF6\u5185\u90E8\u58F0\u660E\u63A5\u6536\u4E86\u7684\u5C5E\u6027\u3002</li><li>context\uFF1A\u4E0A\u4E0B\u6587\u5BF9\u8C61 <ul><li>attrs: \u503C\u4E3A\u5BF9\u8C61\uFF0C\u5305\u542B\uFF1A\u7EC4\u4EF6\u5916\u90E8\u4F20\u9012\u8FC7\u6765\uFF0C\u4F46\u6CA1\u6709\u5728props\u914D\u7F6E\u4E2D\u58F0\u660E\u7684\u5C5E\u6027, \u76F8\u5F53\u4E8E <code>this.$attrs</code>\u3002</li><li>slots: \u6536\u5230\u7684\u63D2\u69FD\u5185\u5BB9, \u76F8\u5F53\u4E8E <code>this.$slots</code>\u3002</li><li>emit: \u5206\u53D1\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684\u51FD\u6570, \u76F8\u5F53\u4E8E <code>this.$emit</code>\u3002</li></ul></li></ul></li></ul><h2 id="\u8BA1\u7B97\u4E0E\u76D1\u89C6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u7B97\u4E0E\u76D1\u89C6\u51FD\u6570" aria-hidden="true">#</a> \u8BA1\u7B97\u4E0E\u76D1\u89C6\u51FD\u6570</h2><h3 id="_1-\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_1-\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> 1.\u8BA1\u7B97\u5C5E\u6027</h3><ul><li>\u4E0Evue2.x\u4E2D\u914D\u7F6E\u4E00\u6837</li></ul><h3 id="_2-watch\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_2-watch\u51FD\u6570" aria-hidden="true">#</a> 2.watch\u51FD\u6570</h3><ul><li><p>\u4E0EVue2.x\u4E2Dwatch\u914D\u7F6E\u529F\u80FD\u4E00\u81F4</p></li><li><p>\u4E24\u4E2A\u5C0F\u201C\u5751\u201D\uFF1A</p><ul><li>\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u65F6\uFF1AoldValue\u65E0\u6CD5\u6B63\u786E\u83B7\u53D6\u3001\u5F3A\u5236\u5F00\u542F\u4E86\u6DF1\u5EA6\u76D1\u89C6\uFF08deep\u914D\u7F6E\u5931\u6548\uFF09\u3002</li><li>\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u4E2D\u67D0\u4E2A\u5C5E\u6027\u65F6\uFF1Adeep\u914D\u7F6E\u6709\u6548\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u60C5\u51B5\u4E00\uFF1A\u76D1\u89C6ref\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E</span>
<span class="token function">watch</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sum\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u60C5\u51B5\u4E8C\uFF1A\u76D1\u89C6\u591A\u4E2Aref\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span>sum<span class="token punctuation">,</span>msg<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;sum\u6216msg\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span> 

<span class="token comment">/* \u60C5\u51B5\u4E09\uFF1A\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E
			\u82E5watch\u76D1\u89C6\u7684\u662Freactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u5219\u65E0\u6CD5\u6B63\u786E\u83B7\u5F97oldValue\uFF01\uFF01
			\u82E5watch\u76D1\u89C6\u7684\u662Freactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u5219\u5F3A\u5236\u5F00\u542F\u4E86\u6DF1\u5EA6\u76D1\u89C6 
*/</span>
<span class="token function">watch</span><span class="token punctuation">(</span>person<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//\u6B64\u5904\u7684deep\u914D\u7F6E\u4E0D\u518D\u594F\u6548</span>

<span class="token comment">//\u60C5\u51B5\u56DB\uFF1A\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>job<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person\u7684job\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> 

<span class="token comment">//\u60C5\u51B5\u4E94\uFF1A\u76D1\u89C6reactive\u5B9A\u4E49\u7684\u54CD\u5E94\u5F0F\u6570\u636E\u4E2D\u7684\u67D0\u4E9B\u5C5E\u6027</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>job<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person\u7684job\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">immediate</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//\u7279\u6B8A\u60C5\u51B5</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>person<span class="token punctuation">.</span>job<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">newValue<span class="token punctuation">,</span>oldValue</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;person\u7684job\u53D8\u5316\u4E86&#39;</span><span class="token punctuation">,</span>newValue<span class="token punctuation">,</span>oldValue<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">deep</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">//\u6B64\u5904\u7531\u4E8E\u76D1\u89C6\u7684\u662Freactive\u7D20\u5B9A\u4E49\u7684\u5BF9\u8C61\u4E2D\u7684\u67D0\u4E2A\u5C5E\u6027\uFF0C\u6240\u4EE5deep\u914D\u7F6E\u6709\u6548</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h3 id="_3-watcheffect\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_3-watcheffect\u51FD\u6570" aria-hidden="true">#</a> 3.watchEffect\u51FD\u6570</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//watchEffect\u6240\u6307\u5B9A\u7684\u56DE\u8C03\u4E2D\u7528\u5230\u7684\u6570\u636E\u53EA\u8981\u53D1\u751F\u53D8\u5316\uFF0C\u5219\u76F4\u63A5\u91CD\u65B0\u6267\u884C\u56DE\u8C03\u3002</span>
<span class="token function">watchEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> x1 <span class="token operator">=</span> sum<span class="token punctuation">.</span>value
    <span class="token keyword">const</span> x2 <span class="token operator">=</span> person<span class="token punctuation">.</span>age
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;watchEffect\u914D\u7F6E\u7684\u56DE\u8C03\u6267\u884C\u4E86&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></li></ul>`,9);function v(t,g){return e(),o(c,null,[i,n("ul",null,[r,n("li",null,[k,n("ul",null,[d,b,n("li",null,[h,n("div",null,l(t.x),1)])])]),m]),f],64)}var w=p(u,[["render",v],["__file","vue3.html.vue"]]);export{w as default};
