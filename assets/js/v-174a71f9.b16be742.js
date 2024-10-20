"use strict";(self.webpackChunkangular_training_platform=self.webpackChunkangular_training_platform||[]).push([[6629],{7954:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(6252);const e=[(0,t.uE)('<h1 id="renderer2" tabindex="-1"><a class="header-anchor" href="#renderer2" aria-hidden="true">#</a> Renderer2</h1><p>Renderer2 is a utility class that provides methods to manipulate and interact with the DOM (Document Object Model). It is used to perform operations such as creating, modifying, and removing elements, applying styles, and listening to events.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component<span class="token punctuation">,</span> Renderer2<span class="token punctuation">,</span> ElementRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">&#39;app-example&#39;</span><span class="token punctuation">,</span>\n  template<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    &lt;button (click)=&quot;changeColor()&quot;&gt;Change Color&lt;/button&gt;\n  </span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">ExampleComponent</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">private</span> renderer<span class="token operator">:</span> Renderer2<span class="token punctuation">,</span> <span class="token keyword">private</span> el<span class="token operator">:</span> ElementRef<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n\n  <span class="token function">changeColor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> button <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>el<span class="token punctuation">.</span>nativeElement<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>renderer<span class="token punctuation">.</span><span class="token function">setStyle</span><span class="token punctuation">(</span>button<span class="token punctuation">,</span> <span class="token string">&#39;background-color&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;red&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3)],p={},o=(0,a(3744).Z)(p,[["render",function(n,s){return(0,t.wg)(),(0,t.iD)("div",null,e)}]])},7858:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-174a71f9","path":"/renderer2/","title":"Renderer2","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"renderer2/README.md"}')}}]);