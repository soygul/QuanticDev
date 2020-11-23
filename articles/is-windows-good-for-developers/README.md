# Is Windows Good for Developers Again?
Hello chaps, I am the QuanticDev, a senior software engineer. I have started my development career with Windows back in middle school. I mostly did PHP back then, along with some basic C/C++ using Borland C++ Builder 6, and it worked out great! However, since then, Windows became the underdog of software development. With the power of free and open-source software, Linux has taken over the server world. The easiest way to write server-side apps that target Linux is to use a Unix based system like macOS or Linux, and not Windows! In addition, Windows never had a great package manager. There were attempts like Chocolatey or Scoop, but they are no match to Homebrew on macOS or tens of different package managers found on Linux systems. Now that we have the second version of Windows Subsystem for Linux, as well as the shiny new Windows Package Manager called "winget", did the tables turn? Let's find out.

## Resources
You can find the video narration of this article on YouTube: Part #1 - GitHub Advantages, Alternatives, and Setup: [https://www.youtube.com/watch?v=QnHGGmLMKO0](https://www.youtube.com/watch?v=QnHGGmLMKO0){:target="_blank"}

<iframe width="560" height="315" src="https://www.youtube.com/embed/QnHGGmLMKO0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Video has additional tips for each principle discussed. If you want to read the comments or leave a comment, do so under the YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Windows Package Manager "winget" and user submitted package repositories:
* [https://github.com/microsoft/winget-cli](https://github.com/microsoft/winget-cli){:target="_blank"}
* [https://github.com/microsoft/winget-pkgs](https://github.com/microsoft/winget-pkgs){:target="_blank"}

Arch Linux WSL project used in this article:
* [https://github.com/yuk7/ArchWSL](https://github.com/yuk7/ArchWSL){:target="_blank"}

My separate [Cleanest Linux Productivity and Development Environment using Manjaro Linux](/articles/manjaro-linux-productivity-machine){:target="_blank"} article also referred to in this article.

## Windows Package Manager (winget)
**Tip: Next two section are transcripts from my live demonstrations of them. If you want to watch it, the link to the video is in resources section above.**

Before anything, you might remember that in my "Cleanest Linux Productivity and Development Environment using Manjaro Linux" article, I heavily criticized Window for not having a native package manager and not having access to essential utilities like Bash and other Unix tools. Now that Windows 10 May 2020 update is out, we can test and see if the situation is better. So, let's start by installing the new Windows Package Manager; winget. It is open-source and is hosted on GitHub, so I will head over to its GitHub page. It appears that the future versions of Windows will have it pre-installed, but for now, I will manually install it. Once the installation is done, I will search for some developer tools to install. I'll start by searching for Node.js. Searching for packages is easy but installing them is a bit quirky. You need to use the package ID instead of the package name. Once the Node.js package is installed, you will be greeted by the next quirk. The "node" command will not be available in your current PowerShell window. You will have to close it and open a new one to get "node" command to work.

Now let's go ahead and check if all the essential packages necessary for development are available in winget repositories. Go programming language is there. Python 3.8 is also in the repos. But I realize that they only have the latest versions and not the older but still supported ones. This is a deal-breaker for me since my projects routinely depend on certain versions of programming language tools. If winget does not add this feature, I would have to maintain versions manually.

I can also see that Chrome, DropBox, and Firefox are also in the winget repos. However, I cannot find IntelliJ, which is one of my favorite code editors. The winget GitHub page has a link to "winget-pkgs" repo which contains all current and candidate winget packages. [I can see that there is a discussion going on in the issue tracker to add IntelliJ to the repos](https://github.com/microsoft/winget-pkgs/pull/179){:target="_blank"}, which is good. There seems to be a ton of activity in winget-pkgs repo which means there are a ton of new packages added daily, and many other being updated.

## Windows Subsystem for Linux 2 (WSL 2)
Now that we investigated the new Windows Package Manager, I want to test the new Windows Subsystem for Linux, version 2. I will simply follow the command line instructions from WSL 2 website. It comes with an updated Linux kernel and has a bunch of other improvements. There is an open-source project on GitHub to bring Arch Linux to WSL, so I will go ahead and install it. Arch and Arch-based Manjaro Linux are my favorite Linux distros, so having direct access to them from Windows is a major stepping stone for me. WSL 2 uses a highly optimized virtualization engine with Hyper-V. WSL 2 boots to the Arch command line in less than a second on my machine! We seem to be the root user in the terminal so let's go ahead and install Node.js and npm so that we can compare the package installation process with Windows. The installation is quick. It seems that file system performance is near-native. This is a huge improvement over WSL version 1.

We have all our development tools ready both in Arch Linux Subsystem and on our host Windows system. I will go ahead and clone my open-source "js-api" project from my GitHub account to this machine. Once it is cloned, I will do "npm install" to install all missing packages and start my js-api server using "npm start". Thanks to having a fast SSD, everything is decently quick and seems to work well. I will repeat the same task on Arch, but with one of my even bigger (however unmaintained) open-source projects: KOAN.js. This project has both frontend and backend packages, so if there is any slowness in I/O operations, we should observe it. Even with substantially more dependencies, "npm install" is again as quick as it was on Windows. This tells me that both disk and network performance are near-native inside WSL 2 virtual machines.

## Downsides of WSL and winget
Even though winget in combination with WSL 2 + Arch is looking good, it is not all sunshine and rainbows. First off, winget does not have dependency management. This means that it just downloads and executes .exe files. Though dependency management is on their roadmap.

![winget Dependency Management](media/winget-dependency-management.png)

In addition, you can only find the latest versions of packages, and not the older stable ones. This might be a deal-breaker for many developers that want to pin their systems to specific versions of development tools.

![winget Package Versions](media/winget-package-versions.png)

In addition, WSL's distro selection is very limited. Though, WSL 2 switched to a fully flagged virtual machine approach, so I assume that the situation will improve over time.

## Is Window with WSL 2 and winget a Worthy Developer OS?
The answer is: not yet, but we are getting there. Both the new package manager and Linux subsystem are missing important functionality. But their roadmaps look bright. I understand that developers that are moving towards the business management side of things need Windows, mostly due to the business world's dependency on Microsoft Office. If you are on that boat, I would say investing in a Windows laptop and doing occasional programming on it using the Linux subsystem is an acceptable compromise. If you do not need the full Microsoft Office experience on native Windows, I still strongly recommend Manjaro Linux. Both for general productivity tasks and software development, it offers a near-perfect experience. If you want to check my dedicated article on it, the link is in the resources section above.

And that is about it for now. If there are worthy updates to WSL and winget in the future, I will review them again and write an updated article. I am planning to buy a compact Windows machine, maybe an Asus PN50 Mini PC with AMD Ryzen 7 4700U, to use it as my Premiere renderer machine. If I get one, I will set up QEMU + Arch Linux and compare it to WSL 2 workflow and let you guys know. If you want to check out the updates, you can follow me on Twitter or on YouTube.
