
# Linux Notes

Created: 16.12.2021  
Edited: 04.12.2022

All commands short descriptions: https://tldr.sh/

Learn in 20% of the time the 80% of core commands that you will use the 90% of the time

Current reading: **The Linux Commands Handbook** by Flavio Copes

---

Linux powers the vast majority of the servers that compose the Internet. It's the base upon which
everything is built upon. But not just that. Android is based on (a modified version of) Linux.

The Linux "core" (called kernel) was born in 1991 in Finland.

There's one thing about Linux that corporations like Microsoft and Apple, or Google, will never be able to
offer: **the freedom to do whatever you want with your computer**.
There's no single commercial company that can dictate what goes into Linux, or the project priorities.

There's not just "one Linux", instead, we have distributions.

A "distro" is made by a company or organization and packages the Linux core with additional programs and tooling.
For example you have **Debian, Red Hat, and Ubuntu**, probably the most popular.

If you use a Mac you need to know that under the hood macOS is a UNIX Operating System, and it
shares a lot of the same ideas and software that a GNU/Linux system uses, because GNU/Linux is a free alternative to UNIX.

> UNIX is an umbrella term that groups many operating systems used in big corporations and institutions, starting from the 70's

The vast majority of the time you will run a Linux computer in the cloud via a **VPS (Virtual Private Server)** like DigitalOcean.

A **shell** is a command interpreter that exposes to the user an interface to work with the underlying operating system.
Shells let you perform things in a more optimized way than a GUI (Graphical User Interface) could ever possibly let you do.
Command line tools can offer many different configuration options without being too complex to use.

There are many different kind of shells. We will focus on Unix shells, the ones that you will find commonly on Linux and macOS computers.
A few shells dominating the space: Bash, Csh, Zsh, Fish and many more!

All shells originate from the Bourne Shell, called `sh`. "Bourne" because its creator was Steve Bourne. Bash means Bourne-again shell.

If you use a Mac, try opening your Mac terminal. That by default is running ZSH. (or, pre-Catalina, Bash)
You can set up your system to run any kind of shell, for example I use the Fish shell.
