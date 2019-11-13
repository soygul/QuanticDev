# Cleanest Linux Productivity and Development Environment using Manjaro Linux

## Resources
You can find the video narration of this text on YouTube: [https://www.youtube.com/watch?v=6A8rwX2J2HA](https://www.youtube.com/watch?v=6A8rwX2J2HA){:target="_blank"}

Video has additional tips for each principle discussed. If you want to leave a comment, do so under YouTube video. If you want to contribute to the article, make a pull request on GitHub.

Manjaro installation resources:
* Manjaro (recommended) Download: [https://manjaro.org](https://manjaro.org){:target="_blank"}
* Arch Linux (Linux veterans only!) Download: [https://www.archlinux.org](https://www.archlinux.org){:target="_blank"}
* Instructions for virtual-machine installation:
  * [https://manjaro.org/support/firststeps/#using-a-virtual-machine](https://manjaro.org/support/firststeps/#using-a-virtual-machine){:target="_blank"}
* Instructions for creating a bootable USB stick:
  * Download Etcher: [https://balena.io/etcher](https://balena.io/etcher){:target="_blank"}
  * Download Manjaro ISO (link above).
  * Start Etcher, and it will guide you through the ISO burn process. Supports Win/Mac/Linux.

## Article
Turn your laptop or desktop computer into a Linux productivity powerhouse using Manjaro Linux and this guide. Manjaro Linux (based on Arch) is my go-to distro for development and productivity, and my recommendation for most people for reasons discussed in the article. With this guide, you can kickstart your all-purpose development and work environment for free and start being productive right away.

### Why use Linux?
First off, why use Linux for software development? The answer is simple; if you write software, you will have to get familiar with Linux sooner than later. And unless you have a laser-like focus on user-interface and user-experience development, Linux will be all over your face. Other reasons:
* Forever free and open-source.
* You will host your serves on Linux (because it is free).
* Service providers like Amazon Web Services or Google Cloud offer Linux servers at the most reasonable prices.
* If you want to self-host, you are in the hands of Linux again.
* You want to use Docker or Kubernetes... oh Linux here I come.
* If you do not want to pay for Adobe Suite, you have:
  * GIMP for photo editing.
  * Inkscape for vector graphics.
  * DaVinci Resolve for video editing, which is probably the best of all video editors!
  * Blender for animations and visual effects. And they are all Linux natives. Not to mention the fact that free software like Blender is becoming the industry standard.

### Why NOT to use Linux?
Now the counter-arguments for not using Linux workstation would be:
* If you do iOS development and do not want to bother with Mac virtual machines.
* You really cannot live without Adobe Suite or AutoDesk products like AutoCAD.
* You like gaming on a computer.
* You are a UI/UX developer that needs a Mac more than air!
* Or you are just too cool for Linux!

While at it, let us compare two of the leading contenders to Linux:
* macOS:
  * Sweet spot between Windows level of app compatibility while still being a Unix system. You get the benefit of both worlds but:
  * It cannot be installed on non-Apple hardware without a major headache.
  * Forever expensive.
* Windows:
  * Legendary backward compatibility.
  * Pretty much any app will work on Windows. Exception being Unix utilities, Bash, and similar.

Now, what do I use? I am personally using both Mac and Linux. Mac for work and some of my personal stuff, and Linux for my web apps. Complete change of environment re-energizes me, so when I am bored on my Mac, and my productivity hits bottom, I switch to my Linux machine.

Either way, I would recommend first installing it in a virtual machine using VirtualBox, VMware, or Qemu so you can get a test drive for free. At the end of the day, all the tools and apps you will need are free. See the description below for instruction on how to prepare a virtual machine, or a USB stick to install on a real computer.

### Package Managers
Package management requires special mention. You should use an operating system with a good package manager. Why, because you will use a variety of productivity tools, and you will want to stick with specific versions of those tools during your projects. Your options are either to use a dumb operating system with no proper package manager and manually manage all your tools and their versions. Or use a proper OS and let the package manager organize it for you.

In my experience, Arch Linux and derivatives, especially Manjaro Linux, have the best of the best package managers. You can find any package and their supported version in main package repositories, and user-submitted ones. Honorable mentions when it comes to package management are:
* macOS: Homebrew package manager has all the packages, but not all the versions of all things. For instance, no old Unity editor long-term support versions, which you might be depending on. However, it is getting better.
* Windows: Chocolatey package manager has the most common packages, but it has a lot of stuff missing. It also has bare minimum versioning support. However, it is also getting better.

### Why Manjaro?
I recommend Manjaro Linux (which is built on Arch Linux) along with Xfce Desktop Environment. It has all the goodies of Arch Linux plus a graphical installer and a good list of built-in software to make your life easier. Also, Xfce is the most stable and mature desktop environment, in my opinion. Way more so than Gnome and KDE, if you have experience with them. As you get more experienced, you can switch to Arch with i3 window managers for a barebones Linux experience.

### Hardware Setup
I recommend a minimalist hardware setup with a Lenovo (ex-IBM) T-series laptop, headphones, and an optional mouse. I advise a laptop over a desktop since it is very liberating and helps you maintain your productivity for longer periods of time via making you mobile. For instance, you can move your entire office to a coffee shop, meetings, interviews, presentations, conferences, etc.

### OS Installation
I will start by booting my virtual machine with the Manjaro ISO connected. It will boot to a ready to use live environment. You can explore around before installing. If the text is too small, go to Start > Configuration > Display and set a more appropriate resolution. You can mess with hi-dpi settings later. Continue by clicking "Install" on the welcome screen.

Enable full-disk encryption if you will have sensitive information on your computer, just in case it gets lost or stolen. However, full-disk encryption is generally problematic on Linux in my experience. It might break in the future, especially after a major upgrade, so beware. Most of the time, it will be fixable.

The graphical installer used by Manjaro is called Calamares and is pretty much the industry standard for installing Linux. Follow the instructions to select the time zone, language, office suite, etc. and wait for the installer to finish. If you are not sure what to choose, Google around first so you will make conscious choices. After reboot, you will be ready for action.

Now it is time to install all the packages necessary to turn this machine into a productivity powerhouse. Manjaro is bundled with "pacman" which is the default package manager in Arch Linux. You can also use the graphical package manager, which I will do in this video. 

### App Installations
Let us go ahead and apply updates before starting to install apps. You do not need to restart your computer unless the kernel was updated. Also, you need to go to settings and enable AUR (Arch User Repository) to be able to get the user or company submitted packages. After that, we will install:
* Nodejs, Go, and Python as our primary programming language runtimes.
* Visual Studio Code as our code editor. On a side note, IntelliJ IDEA is even better, but it is paid (though free for students and open-source projects).
* VirtualBox in case we need to use Windows or macOS for testing or building stuff.
* GIMP for photo editing.
* Inkscape for vector graphics.
* DaVinci Resolve for video editing. Probably the best video editor!
* Blender for animation and visual effects.
* Chrome just in case we want to test our web apps on Chrome. Firefox is there by default.
* Dropbox to save personal files and config backups.
* (Optional) Steam for games.
* (Optional) Android Studio for Android development.
* (Optional) Unity Editor with Android and WebGL packages, in case we want to develop Mobile and Web games.

Package manager will ask you to select optional dependencies. Do not forget to select "npm" for Nodejs. You will be asked to select the VirtualBox modules matching your kernel version. You can check the "Manjaro Configuration Manager" tool on the taskbar for you currently installed kernel version.

The rest of what you need will already be preinstalled, so wait for the installation to finish, and we will start being productive!

### Use Case Example: Software Development
As an exercise, try creating a React app using create-react-app command line tool. You can simply use the terminal and Visual Studio Code editor to create your app. Visit the video to watch me doing this exercise.

### Use Case Example: General Productivity
As a general productivity exercise, create a cube in Inkspace. Add it to the background of blank picture in GIMP along with a headline. Use it in a document in LibreOffice with an appropriate title. Save everything to Dropbox and share the link with your friends. You can also consult the video to watch me do this for you.

### Tips
* Put all your environment variables in ~/.profile file. Keep a backup of that file for future reference.
* Make a note of changes you make to configuration files so you can restore your settings on a new system easily. You can automate this via creating a Bash script, which can also help you learn some Bash scripting.
* Always use a cloud file backup service to keep all important files backed-up, including your configuration modifications. You might need to reinstall your OS from time to time, especially if you are experimenting!

### Questions
If you have any questions, you can check out Manjaro and Arch forums and wikis. They both have large and helpful communities. On the other hand, 99% of the time, you will not need to visit the forums since you can find answers to most issues on Google anyway.
