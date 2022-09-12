(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{514:function(t,s,a){t.exports=a.p+"assets/img/git.dd6f1ff1.jpg"},711:function(t,s,a){"use strict";a.r(s);var e=a(3),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。")])]),t._v(" "),e("h2",{attrs:{id:"git-基本操作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-基本操作流程"}},[t._v("#")]),t._v(" git 基本操作流程")]),t._v(" "),e("img",{attrs:{src:a(514),alt:"images",title:"Git基本流程"}}),t._v(" "),e("ul",[e("li",[t._v("创建本地仓库"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git init")])])])]),t._v(" "),e("li",[t._v("提交到缓存区"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git add . 全部上传到缓存区")]),t._v(" "),e("code",[t._v("<br>")]),t._v(" "),e("strong",[t._v("git add 指定文件")])])])]),t._v(" "),e("li",[t._v("提交到本地仓库"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git commit -m 'some message'")])])])]),t._v(" "),e("li",[t._v("链接本地仓库与远端仓库，远程库名一般写成："),e("strong",[t._v("origin")]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("ssh：git remote add 远程库名 git@gitee.com:用户名/仓库名.git")]),t._v(" "),e("code",[t._v("<br>")]),t._v(" "),e("strong",[t._v("https：git remote add 远程库名 https://gitee.com/用户名/仓库名.git")])])])]),t._v(" "),e("li",[t._v("提交远程仓库"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("第一次推送加上-u命令，之后推送可简写成：git push")]),t._v(" "),e("code",[t._v("<br>")]),t._v(" "),e("strong",[t._v("git push -u 远程库名 分支名")])])])]),t._v(" "),e("li",[t._v("查看远端仓库信息"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git remote -v")])])])]),t._v(" "),e("li",[t._v("远端仓库重新命名"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git remote rename oldName newName")])])])]),t._v(" "),e("li",[t._v("移除远端仓库"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git remote rm 远程库名")])])])]),t._v(" "),e("li",[t._v("查看分支"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git branch")])])])]),t._v(" "),e("li",[t._v("创建分支并切换"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git checkout -b xxx")])])])]),t._v(" "),e("li",[t._v("切换分支"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git checkout xxx")])])])]),t._v(" "),e("li",[t._v("删除分支"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git branch -d xxx")])])])]),t._v(" "),e("li",[t._v("删除远程分支"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git push -d xxx")])])])]),t._v(" "),e("li",[t._v("合并分支"),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[e("strong",[t._v("git merge xxx")])])])])]),t._v(" "),e("h2",{attrs:{id:"配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),e("p",[t._v("全局配置用户信息")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('git config --global user.name "xxx"\ngit config --global user.email "email address"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h2",{attrs:{id:"推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送"}},[t._v("#")]),t._v(" 推送")]),t._v(" "),e("ul",[e("li",[t._v("git推送的完整写法如下：\n"),e("ul",[e("li",[e("code",[t._v("git push @remoteName @localBranch:@remoteBranch")])])])])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("  // eg.remoteName:origin  localBranch:ceshi  remoteBranch:test\n  git push origin ceshi:test\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("如果本地分支与远程分支名字一样的话，可以简写。例如本地和远程的分支名都是master")])]),t._v(" "),e("div",{staticClass:"language-git line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-git"}},[e("code",[t._v("  git push origin master\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("指令 "),e("strong",[t._v("-f")]),t._v(" 为强制推送")])]),t._v(" "),e("h2",{attrs:{id:"克隆分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#克隆分支"}},[t._v("#")]),t._v(" 克隆分支")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("普通克隆方式")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone <远程仓库地址>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("这种方式默认克隆主分支 "),e("code",[t._v("master")]),t._v("，克隆后本地只有一个分支")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("strong",[t._v("克隆指定分支")])])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone -b <指定分支名> <远程仓库地址>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("会自动在克隆该分支在本地，同样克隆后本地只有这一个分支。")]),t._v(" "),e("h2",{attrs:{id:"分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[t._v("#")]),t._v(" 分支")]),t._v(" "),e("ul",[e("li",[t._v("查看本地所有分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("查看远程所有分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -r\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("查看本地和远程分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -a\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("切换分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout 分支名\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("创建并切换到新建分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b 新建分支名\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("删除分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -d 分支名\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("删除远程分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git push origin -d 分支名\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("重命名分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -m 旧名字 新名字\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("将当前分支重命名")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -m 新名字\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("推送本地分支到远程库分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.先切换到要推送的分支上\ngit checkout login\n\n2.初次推送，会在云端创建，远程库分支名和本地名称相同可简写\ngit push -u origin login\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("ul",[e("li",[t._v("查看各个分支最后一个提交对象的信息")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch -v\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("拉取远程分支并创建本地分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout -b 本地分支名 origin/远程分支名\n\ngit fetch origin <branch-name>:<local-branch-name>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("h2",{attrs:{id:"合并分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[t._v("#")]),t._v(" 合并分支")]),t._v(" "),e("ul",[e("li",[t._v("1.先使用 "),e("code",[t._v("git status")]),t._v("查看工作区状态，保证 "),e("code",[t._v("working tree clean")])]),t._v(" "),e("li",[t._v("2.先使用 "),e("code",[t._v("git checkout 分支名")]),t._v("切换到要合并的分支上")]),t._v(" "),e("li",[t._v("3.使用 "),e("code",[t._v("git merge 分支名")]),t._v("合并分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout master\ngit merge login\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("ul",[e("li",[t._v("查看哪些分支已经合并到当前分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch --merged\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("查看哪些分支没有合并到当前分支")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git branch --no-merged\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h2",{attrs:{id:"状态查询"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态查询"}},[t._v("#")]),t._v(" 状态查询")]),t._v(" "),e("ul",[e("li",[t._v("查看状态\n"),e("ul",[e("li",[e("code",[t._v("git status")])])])]),t._v(" "),e("li",[t._v("查看历史操作记录\n"),e("ul",[e("li",[e("code",[t._v("git reflog")])])])]),t._v(" "),e("li",[t._v("查看日志\n"),e("ul",[e("li",[e("code",[t._v("git log")])])])])]),t._v(" "),e("h2",{attrs:{id:"撤销更改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销更改"}},[t._v("#")]),t._v(" 撤销更改")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("撤销工作区修改")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git checkout -- <file>")])])])]),t._v(" "),e("li",[e("p",[t._v("暂存区文件撤销 (不覆盖工作区)")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git reset HEAD")])])])]),t._v(" "),e("li",[e("p",[t._v("版本回退")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("git reset --(soft | mixed | hard ) < HEAD ~(num) >|commitID")])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("指令")]),t._v(" "),e("th",[t._v("作用范围")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("--hard")]),t._v(" "),e("td",[t._v("回退全部，包括HEAD，index，working tree")])]),t._v(" "),e("tr",[e("td",[t._v("--mixed")]),t._v(" "),e("td",[t._v("回退部分,包括HEAD，index")])]),t._v(" "),e("tr",[e("td",[t._v("--soft")]),t._v(" "),e("td",[t._v("只回退HEAD")])])])])])]),t._v(" "),e("h2",{attrs:{id:"分支命名规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支命名规范"}},[t._v("#")]),t._v(" 分支命名规范")]),t._v(" "),e("p",[e("strong",[t._v("master 分支")])]),t._v(" "),e("ol",[e("li",[t._v("主分支，用于部署生产环境的分支，确保稳定性。")]),t._v(" "),e("li",[t._v("master分支一般由develop以及hotfix分支合并，任何情况下都不能直接修改代码。")])]),t._v(" "),e("p",[e("strong",[t._v("develop 分支")])]),t._v(" "),e("ol",[e("li",[t._v("develop为开发分支，通常情况下，保存最新完成以及bug修复后的代码。")]),t._v(" "),e("li",[t._v("开发新功能时，feature分支都是基于develop分支下创建的。")])]),t._v(" "),e("p",[e("strong",[t._v("feature 分支")])]),t._v(" "),e("ol",[e("li",[t._v("开发新功能，基本上以develop为基础创建feature分支。")]),t._v(" "),e("li",[t._v("分支命名：feature/ 开头的为特性分支， 命名规则: feature/user_module、 feature/cart_module。")])]),t._v(" "),e("p",[e("strong",[t._v("release分支")])]),t._v(" "),e("ol",[e("li",[t._v("release 为预上线分支，发布提测阶段，会release分支代码为基准提测。")])]),t._v(" "),e("p",[e("strong",[t._v("hotfix分支")])]),t._v(" "),e("ol",[e("li",[t._v("分支命名：hotfix/ 开头的为修复分支，它的命名规则与 feature 分支类似。")]),t._v(" "),e("li",[t._v("线上出现紧急问题时，需要及时修复，以master分支为基线，创建hotfix分支，修复完成后，需要合并到master分支和develop分支。")])]),t._v(" "),e("h2",{attrs:{id:"忽略文件-gitignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#忽略文件-gitignore"}},[t._v("#")]),t._v(" 忽略文件 .gitignore")]),t._v(" "),e("p",[t._v("这个文件的作用，会去忽略一些不需要纳入Git管理这种，我们也不希望出现在未跟踪文件列表。")]),t._v(" "),e("p",[t._v("那么我们来看看如何配置该文件信息。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("# 此行为注释 会被Git忽略")]),t._v(" "),e("p",[t._v("# 忽略 node_modules/ 目录下所有的文件 "),e("code",[t._v("<br>")]),t._v("\nnode_modules")]),t._v(" "),e("p",[t._v("# 忽略所有.vscode结尾的文件 "),e("code",[t._v("<br>")]),t._v("\n.vscode")]),t._v(" "),e("p",[t._v("# 忽略所有.md结尾的文件 "),e("code",[t._v("<br>")]),t._v("\n*.md")]),t._v(" "),e("p",[t._v("# 但README.md 除外 "),e("code",[t._v("<br>")]),t._v("\n!README.md")]),t._v(" "),e("p",[t._v("# 会忽略 doc/something.txt 但不会忽略doc/images/arch.txt "),e("code",[t._v("<br>")]),t._v("\ndoc/*.txt")]),t._v(" "),e("p",[t._v("# 忽略 doc/ 目录下所有扩展名为txt文件 "),e("code",[t._v("<br>")])]),t._v(" "),e("p",[t._v("doc/**/*.txt")])]),e("h2",{attrs:{id:"将现有-git-仓库中的子目录分离为独立仓库并保留其提交历史"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#将现有-git-仓库中的子目录分离为独立仓库并保留其提交历史"}},[t._v("#")]),t._v(" 将现有 git 仓库中的子目录分离为独立仓库并保留其提交历史")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" subtree "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" -P "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name-of-folder"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" -b "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name-of-new-branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("运行后，git 会遍历原仓库中所有的历史提交，挑选出与指定路径相关的 commit 并存入名为 name-of-new-branch 的临时分支中。另外需要注意的是，如果你在使用 Windows，且该文件夹深度 > 1，你必须使用斜杠 / 作为目录分隔符而不是默认的反斜杠 \\。")])]),e("h2",{attrs:{id:"创建空分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建空分支"}},[t._v("#")]),t._v(" 创建空分支")]),t._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --orphan "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name-of-new-branch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("使用 "),e("code",[t._v("git checkout --orphan 分支名")]),t._v(" 创建的分支会把原分支的内容拷贝过来，因为要创建空分支，所以需要使用 "),e("code",[t._v("git rm -rf .")]),t._v("来清除拷贝的内容。")])]),e("h2",{attrs:{id:"提交规范"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交规范"}},[t._v("#")]),t._v(" 提交规范")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("ol",[e("li",[t._v("feat 增加新功能")]),t._v(" "),e("li",[t._v("fix 修复问题/BUG")]),t._v(" "),e("li",[t._v("style 代码风格相关无影响运行结果的")]),t._v(" "),e("li",[t._v("perf 优化/性能提升")]),t._v(" "),e("li",[t._v("refactor 重构")]),t._v(" "),e("li",[t._v("revert 撤销修改")]),t._v(" "),e("li",[t._v("test 测试相关")]),t._v(" "),e("li",[t._v("docs 文档/注释")]),t._v(" "),e("li",[t._v("chore 依赖更新/脚手架配置修改等")]),t._v(" "),e("li",[t._v("workflow 工作流改进")]),t._v(" "),e("li",[t._v("ci 持续集成")]),t._v(" "),e("li",[t._v("types 类型定义文件更改")]),t._v(" "),e("li",[t._v("wip 开发中")])])])])}),[],!1,null,null,null);s.default=i.exports}}]);