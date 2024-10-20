"use strict";(self.webpackChunkangular_training_platform=self.webpackChunkangular_training_platform||[]).push([[2487],{3278:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var e=a(9763),t=a(6252);const p={},o=(0,a(3744).Z)(p,[["ssrRender",(...n)=>(n[2].appContext.provides[t.Uc]._registeredComponents.add("C:\\Users\\soufasri\\OneDrive - NTT DATA EMEAL\\Desktop\\AsrihAngularAcademy\\docs\\node_modules\\@vuepress\\bundler-webpack\\dist\\vuepress-loader.cjs!C:\\Users\\soufasri\\OneDrive - NTT DATA EMEAL\\Desktop\\AsrihAngularAcademy\\docs\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!C:\\Users\\soufasri\\OneDrive - NTT DATA EMEAL\\Desktop\\AsrihAngularAcademy\\docs\\src\\.vuepress\\.temp\\pages\\scope\\index.html.vue"),function(n,s,a,t){s(`<div${(0,e.fq)(t)}><h1 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> Scope</h1><p>In Angular, the scope of a variable determines where it can be accessed:</p><ul><li><strong>Global Scope</strong>: Accessible anywhere in the application.</li><li><strong>Local Scope</strong>: Accessible only within a specific function or block.</li><li><strong>Component Scope</strong>: Accessible within a component and its child components.</li></ul><h3 id="global-scope" tabindex="-1"><a class="header-anchor" href="#global-scope" aria-hidden="true">#</a> Global Scope</h3><p>Accessible from anywhere in the application; defined outside any function or block.</p><p>Example :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// Global Scope</span>\n<span class="token keyword">let</span> globalVariable <span class="token operator">=</span> <span class="token string">&#39;Global Variable&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>globalVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Global Variable</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example in Angular :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>\n\n<span class="token comment">// Global Scope</span>\n<span class="token keyword">let</span> globalVariable <span class="token operator">=</span> <span class="token string">&#39;Global Variable&#39;</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">&#39;app-root&#39;</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">&#39;./app.component.html&#39;</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./app.component.css&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n  title <span class="token operator">=</span> globalVariable<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--app.component.html--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="local-scope" tabindex="-1"><a class="header-anchor" href="#local-scope" aria-hidden="true">#</a> Local Scope</h3><p>Accessible only within the function or block where defined.</p><p>Example :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Local Scope</span>\n  <span class="token keyword">let</span> localVariable <span class="token operator">=</span> <span class="token string">&#39;Local Variable&#39;</span><span class="token punctuation">;</span>\n  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Local Variable</span>\n<span class="token punctuation">}</span>\n\n<span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Error: localVariable is not defined</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Example in Angular :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">&#39;app-root&#39;</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">&#39;./app.component.html&#39;</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./app.component.css&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">testFunction</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Local Scope</span>\n    <span class="token keyword">let</span> localVariable <span class="token operator">=</span> <span class="token string">&#39;Local Variable&#39;</span><span class="token punctuation">;</span>\n    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>localVariable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Output: Local Variable</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--app.component.html--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>testFunction()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test Function<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="component-scope" tabindex="-1"><a class="header-anchor" href="#component-scope" aria-hidden="true">#</a> Component Scope</h3><p>Accessible within the component and its children.</p><p>Example :</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">&#39;app-root&#39;</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">&#39;./app.component.html&#39;</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./app.component.css&#39;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n  <span class="token comment">// Component Scope</span>\n  title <span class="token operator">=</span> <span class="token string">&#39;app&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--app.component.html--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>{{ title }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div>`)}(...n))]])},299:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e=JSON.parse('{"key":"v-d8fcbed8","path":"/scope/","title":"Scope","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Global Scope","slug":"global-scope","link":"#global-scope","children":[]},{"level":3,"title":"Local Scope","slug":"local-scope","link":"#local-scope","children":[]},{"level":3,"title":"Component Scope","slug":"component-scope","link":"#component-scope","children":[]}],"git":{},"filePathRelative":"scope/README.md"}')}}]);