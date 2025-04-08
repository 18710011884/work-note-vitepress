import{c as i,o as a,ae as t,j as n,k as e,g as p}from"./chunks/framework.BaCCgiqy.js";const l=["src"],g=JSON.parse('{"title":"智慧班组 3.0","description":"","frontmatter":{},"headers":[],"relativePath":"IOS/Object-C/teammeeting.md","filePath":"IOS/Object-C/teammeeting.md"}'),h={name:"IOS/Object-C/teammeeting.md"},c=Object.assign(h,{setup(k){return(o,s)=>(a(),i("div",null,[s[0]||(s[0]=t(`<h1 id="智慧班组-3-0" tabindex="-1">智慧班组 3.0 <a class="header-anchor" href="#智慧班组-3-0" aria-label="Permalink to &quot;智慧班组 3.0&quot;">​</a></h1><h2 id="一、会议事项相关改动" tabindex="-1">一、会议事项相关改动 <a class="header-anchor" href="#一、会议事项相关改动" aria-label="Permalink to &quot;一、会议事项相关改动&quot;">​</a></h2><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//普通会议详情页面</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;会议详情&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //常显</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;字幕&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     //&quot;app:meeting:groupFill&quot; &amp;&amp; meetingStatus=2 &amp;&amp; captionFlag=1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;事项统计&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //&quot;app:meeting:matterStat&quot; &amp;&amp; meetingStatus&gt;0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//看板会议详情页面</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;会议详情&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //常显</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;字幕&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">     //meetingStatus=2,3,5 &amp;&amp; captionFlag=1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;事项统计&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //meetingStatus=2,3,5 &amp;&amp;</span></span></code></pre></div><h4 id="_1-会议详情-会议事项" tabindex="-1">1.会议详情-会议事项 <a class="header-anchor" href="#_1-会议详情-会议事项" aria-label="Permalink to &quot;1.会议详情-会议事项&quot;">​</a></h4><p>① 领料</p><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//新增领料申请</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/meeting/stMeetingHis/app/pickApply&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数名: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;meetingId&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       &quot;pickApplyDetail&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //list的json串吧,跟之前归档提交一样</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">       </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//领料详情  </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/meeting/apply/app&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数名: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;meetingId&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //接口参数由领料单id变更为会议id</span></span></code></pre></div><p>② 生命体征</p><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//填写和查看填写结果都调用h5页面</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//填写生命体征</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">域名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/signsCollection?userType=app&amp;token=XXXX&amp;meetingId=XXXX&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//查看填写结果</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">域名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/signsCollection?userType=app&amp;token=XXXX&amp;meetingId=XXXX&amp;finished=1&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//需要注入&#39;setExamState&#39;方法接收前端回调退出h5页面</span></span></code></pre></div><h4 id="_2-事项统计-会议事项" tabindex="-1">2.事项统计-会议事项 <a class="header-anchor" href="#_2-事项统计-会议事项" aria-label="Permalink to &quot;2.事项统计-会议事项&quot;">​</a></h4><p>① 签到</p><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//签到结果查询</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/meeting/stMeetingHis/signList&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数名:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;meetingId&quot;</span></span></code></pre></div><p>② 领料</p><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;finished&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //提示错误&quot;未完成无法查看详情&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;finished&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //领料详情 上边有</span></span></code></pre></div><p>③ 每日一题</p><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;finished&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //提示错误&quot;未完成无法查看详情&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;finished&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//查看每日一题内容</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">域名</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/matterQuestionInfo?userType=app&amp;token=XXXX&amp;meetingId=XXXX&quot;</span></span></code></pre></div><p>④ 生命体征</p><div class="language-objective-c vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">objective-c</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subCount&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //提示错误&quot;暂无提交信息&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;subCount&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //生命体征已填写的信息列表</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/meeting/stMeetingUserHealth/query&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">参数名: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;meetingId&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:_meetingId,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       @&quot;flag&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">@&quot;1&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//0查个人 1查全部人</span></span></code></pre></div>`,17)),n("img",{src:e(p)("/img/iosImg/healthlist.jpg"),alt:"图片描述"},null,8,l)]))}});export{g as __pageData,c as default};
