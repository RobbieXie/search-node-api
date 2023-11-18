# 开源搜索引擎API

因为OpenAI的横空出世，大家都习惯于使用OpenAI来问问题，但是OpenAI有一个致命的问题，就是只知道他训练的知识，而不知道新的知识，比如你问他今天深圳的天气如何，问他一些热点新闻，他是没有任何概念的。

### 解决办法

通常我们为了让大模型“感知“到新的知识，我们需要将新的知识材料提供给他大模型学习，因此基于软件开发第一定律，没有什么是做不到的，如果做不到，就加一层，如果还是做不到，就在加一层，咋们这个层就是一个通过搜索获取当前最新信息的层，将摘要给到大模型学习，然后大模型基于这些个新学习的知识来回答你的问题。

### 方案对比

为什么不直接使用 Google search API，而要自己造轮子，其原因就是一是因为巨硬们提供的API都是要付费的，免费计划也需要绑visa卡等，特别麻烦，因此还不如自己动手实现一个免费的。

### 原理

原理很简单，使用 无头浏览器(puppeteer chrome) 去访问 baidu，bing 等搜索网站，分析网页内容，提取url,title,摘要。

## 已支持的搜索引擎

baidu/bing/google/duckduckgo/yahoo

## 使用方式

Docker:
docker run -d -p your_port:3000 talentxiet/search-node-api-docker:v1.5

http api:
```js
curl --location 'http://localhost:3000' \
--header 'Content-Type: application/json' \
--data '{
    "q":"亚运会dota2中",
    "engine":"bing"
}'

{
    "q": "nihao",
    "results": [
        {
            "href": "https://baike.baidu.com/item/你好/32416",
            "title": "你好（汉语词语）_百度百科",
            "abstract": "你好是一个汉语词语，拼音是nǐ hǎo，是汉语中打招呼的敬语常用词语，作为一般对话的 开场白 。. 这也是个最基本的汉语词语。. 主要用于打招呼、请教别人问题时，或者单纯表示礼貌的时候等。. 中文名. 你好. 外文名. 英文：Hello. 法文：Bonjour. 俄文：Привет."
        },
        {
            "href": "https://www.zhihu.com/question/516667003",
            "title": "你知道Nihao Mobile吗？ - 知乎",
            "abstract": "Dec 30, 2022 · Nihao Mobile隶属于广东星鼎通信科技有限公司，是中华人民共和国工业和信息化部（简称工信部）合法授权经营的移动通讯运营商，仅为居住在中国的外籍人士及港澳台同胞提供移动通讯服务。"
        },
        {
            "href": "https://dictionary.hantrainerpro.com/chinese-english/translation-nihao_hello.htm",
            "title": "English translation of 你好 ( ni hao / nĭ hăo ) - hello in Chinese",
            "abstract": "你好 ( ni hao / nĭ hăo ) (English translation: \"hello\") as Chinese character including stroke order, Pinyin phonetic script, pronunciation in Mandarin, example sentence and English meaning."
        },
        {
            "href": "https://en.wiktionary.org/wiki/%E4%BD%A0%E5%A5%BD",
            "title": "你好 - Wiktionary, the free dictionary",
            "abstract": "Sep 1, 2023 · From modern Mandarin 你好 ( nǐ hǎo, “hello”). Pronunciation[edit] ( Tokyo)ニ イハオ[níꜜìhàò] ( Atamadaka – [1]) [1] IPA ( key) : [ɲ̟iːha̠o̞] Interjectionedit. 你好 ( ニイハオ) • ( nīhao ) ( informal, rare) hi, hello (in a Chinese context) 1967, リービ英雄, 我的中 …"
        },
        {
            "href": "https://zhuanlan.zhihu.com/p/142587325",
            "title": "你好 - 知乎",
            "abstract": "May 21, 2020 · 丹麦语 的你好 Jó napot 匈牙利 的你好. Boa tarde 葡萄牙语的你好. Saluton. 世界语\"你好\"最常见的说法，来自拉丁语。. 日语--こんにちは 罗马音 :kon ni chi wa. 藏文:扎喜德勒 泰文 :萨瓦迪卡. 发布于 2020-05-21 01:32. 汉语. 你好 - 汉语词语 免费编辑 修改义项名  …"
        }
    ]
}
```

# 开源共建

参考了searchEngineTool项目
让我们一起改进，把这个搜索API做得更加好用一些。
