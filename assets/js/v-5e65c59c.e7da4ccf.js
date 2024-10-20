"use strict";(self.webpackChunkangular_training_platform=self.webpackChunkangular_training_platform||[]).push([[5045],{5824:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});var t=a(9763),p=a(6252);const e={},o=(0,a(3744).Z)(e,[["ssrRender",(...n)=>(n[2].appContext.provides[p.Uc]._registeredComponents.add("C:\\Users\\soufasri\\OneDrive - NTT DATA EMEAL\\Desktop\\AsrihAngularAcademy\\docs\\node_modules\\@vuepress\\bundler-webpack\\dist\\vuepress-loader.cjs!C:\\Users\\soufasri\\OneDrive - NTT DATA EMEAL\\Desktop\\AsrihAngularAcademy\\docs\\node_modules\\vue-loader\\dist\\index.js??ruleSet[0].use[1]!C:\\Users\\soufasri\\OneDrive - NTT DATA EMEAL\\Desktop\\AsrihAngularAcademy\\docs\\src\\.vuepress\\.temp\\pages\\angular-animations\\index.html.vue"),function(n,s,a,p){s(`<div${(0,t.fq)(p)}><h1 id="angular-animations" tabindex="-1"><a class="header-anchor" href="#angular-animations" aria-hidden="true">#</a> Angular Animations</h1><p>Angular&#39;s animation system is built on CSS functionality in order to animate any property that the browser considers animatable. These properties includes positions, sizes, transforms, colors, borders etc. The Angular modules for animations are @angular/animations and @angular/platform-browser.</p><h3 id="installing-angular-animations" tabindex="-1"><a class="header-anchor" href="#installing-angular-animations" aria-hidden="true">#</a> Installing Angular Animations</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @angular/animations\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="importing-angular-animations" tabindex="-1"><a class="header-anchor" href="#importing-angular-animations" aria-hidden="true">#</a> Importing Angular Animations</h3><p>To use Angular animations in an Angular application, you need to import the BrowserAnimationsModule module in the app.module.ts file.</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> BrowserAnimationsModule <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/platform-browser/animations&#39;</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">NgModule</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  declarations<span class="token operator">:</span> <span class="token punctuation">[</span>\n    AppComponent\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  imports<span class="token operator">:</span> <span class="token punctuation">[</span>\n    BrowserModule<span class="token punctuation">,</span>\n    BrowserAnimationsModule\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  providers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  bootstrap<span class="token operator">:</span> <span class="token punctuation">[</span>AppComponent<span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppModule</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="animation-example" tabindex="-1"><a class="header-anchor" href="#animation-example" aria-hidden="true">#</a> Animation Example</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@angular/core&#39;</span><span class="token punctuation">;</span>\n\n<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  selector<span class="token operator">:</span> <span class="token string">&#39;app-root&#39;</span><span class="token punctuation">,</span>\n  templateUrl<span class="token operator">:</span> <span class="token string">&#39;./app.component.html&#39;</span><span class="token punctuation">,</span>\n  styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;./app.component.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  animations<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">trigger</span><span class="token punctuation">(</span><span class="token string">&#39;fadeInOut&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n      <span class="token function">transition</span><span class="token punctuation">(</span><span class="token string">&#39;:enter&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n        <span class="token function">style</span><span class="token punctuation">(</span><span class="token punctuation">{</span> opacity<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token function">animate</span><span class="token punctuation">(</span><span class="token string">&#39;1s&#39;</span><span class="token punctuation">,</span> <span class="token function">style</span><span class="token punctuation">(</span><span class="token punctuation">{</span> opacity<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      <span class="token function">transition</span><span class="token punctuation">(</span><span class="token string">&#39;:leave&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n        <span class="token function">animate</span><span class="token punctuation">(</span><span class="token string">&#39;1s&#39;</span><span class="token punctuation">,</span> <span class="token function">style</span><span class="token punctuation">(</span><span class="token punctuation">{</span> opacity<span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n      <span class="token punctuation">]</span><span class="token punctuation">)</span>\n    <span class="token punctuation">]</span><span class="token punctuation">)</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n  show <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n  <span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>show <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>show<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggle()<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Toggle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>show<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@fadeInOut</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Angular Animation Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>`)}(...n))]])},9813:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t=JSON.parse('{"key":"v-5e65c59c","path":"/angular-animations/","title":"Angular Animations","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"Installing Angular Animations","slug":"installing-angular-animations","link":"#installing-angular-animations","children":[]},{"level":3,"title":"Importing Angular Animations","slug":"importing-angular-animations","link":"#importing-angular-animations","children":[]},{"level":3,"title":"Animation Example","slug":"animation-example","link":"#animation-example","children":[]}],"git":{},"filePathRelative":"angular-animations/README.md"}')}}]);