"use strict";(self.webpackChunkangular_training_platform=self.webpackChunkangular_training_platform||[]).push([[7465],{7206:(e,n,a)=>{a.r(n),a.d(n,{default:()=>h});var o=a(6252);const s=a.p+"assets/img/devtools-component-tree.5c82001a.png",t=a.p+"assets/img/devtools-component-source.c81d81ee.png",r=a.p+"assets/img/vscode-breakpoint.7fb26c3d.png",l=(0,o._)("h1",{id:"debugging",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#debugging","aria-hidden":"true"},"#"),(0,o.Uk)(" Debugging")],-1),i=(0,o._)("h4",{id:"debug-with-your-browser-s-developer-tools",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#debug-with-your-browser-s-developer-tools","aria-hidden":"true"},"#"),(0,o.Uk)(" Debug with your browser's Developer Tools")],-1),p=(0,o._)("p",null,"The Developer Tools can be invoked by pressing F12 on your keyboard and offer a panel of features such as a JS console, network request traces and so on.",-1),u=(0,o._)("p",null,[(0,o.Uk)("The "),(0,o._)("em",null,"Sources"),(0,o.Uk)(" tab of the Developer Tools enable you to open any source file by name (Ctrl + P) as long as you are not in a production build where files are minified. This is where you can place breakpoints.")],-1),c={href:"https://angular.io/guide/devtools",target:"_blank",rel:"noopener noreferrer"},d=(0,o.uE)('<p><img src="'+s+'" alt="Angular DevTools component tree"></p><p><img src="'+t+'" alt="Component source in Chrome DevTools"></p><h4 id="debug-with-vscode-only-for-locally-served-application" tabindex="-1"><a class="header-anchor" href="#debug-with-vscode-only-for-locally-served-application" aria-hidden="true">#</a> Debug with VSCode (only for locally served application)</h4><p>VSCode allows you to natively debug your development application on Chrome or Edge. To do that, you first need to create a launch configuration for debugging. VSCode can create such a file automatically by following these steps:</p><ul><li>Press <em>F5</em> on your keyboard or clic on <em>create a launch.json file</em> in the debug panel (left sidebar).</li><li>After a quick scan of the projet, VSCode will suggest relevent debug configurations. Choose <em>Chrome</em>.</li><li>A new file located in <em>.vscode/launch.json</em> will be created.</li><li>Open that file and change the port from the default value to the one used by the development server (4200 is the common value).</li></ul><p>Here is a sample <em>.vscode/launch.json</em>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0.2.0&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;configurations&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;pwa-chrome&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;request&quot;</span><span class="token operator">:</span> <span class="token string">&quot;launch&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Launch Chrome against localhost&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:4200&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;webRoot&quot;</span><span class="token operator">:</span> <span class="token string">&quot;${workspaceFolder}&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Once you have a launch configuration and a running development server, press <em>F5</em>. This will open your app in a new browser window and enable debugging features in VSCode. To verify that, please add a breakpoint in the app component and launch a debug session. The debugger should break on your breakpoint.</p><p><img src="'+r+'" alt="debug vscode"></p>',9),g={},h=(0,a(3744).Z)(g,[["render",function(e,n){const a=(0,o.up)("ExternalLinkIcon");return(0,o.wg)(),(0,o.iD)("div",null,[l,i,p,u,(0,o._)("p",null,[(0,o.Uk)("Alternatively, Angular provides a browser extension for Chrome called "),(0,o._)("a",c,[(0,o.Uk)("Angular DevTools"),(0,o.Wm)(a)]),(0,o.Uk)('. It adds Angular specific debugging and profiling capabilities. The following screenshot illustrates the component tree feature of Angular DevTools. When the developer clicks on the "<>" button surrounded in red, he gets access to the source code of the component where he can place breakpoints.')]),d])}]])},7537:(e,n,a)=>{a.r(n),a.d(n,{data:()=>o});const o=JSON.parse('{"key":"v-62d28eba","path":"/debugging/","title":"Debugging","lang":"en-US","frontmatter":{},"headers":[],"git":{},"filePathRelative":"debugging/README.md"}')}}]);