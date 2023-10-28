# Linux

Created: 16.12.2021  
Edited: 28.10.2023

All commands short descriptions: https://tldr.sh/

Current reading: **The Linux Commands Handbook** by Flavio Copes

Try to learn core commands that you will use 90% of the time.

Here are some of the most commonly used and essential Bash commands:

1. pwd (Print Working Directory): Shows your current directory.

2. ls (List): Lists the files and directories in the current directory.

3. cd (Change Directory): Allows you to change to a different directory.

4. touch (Create Empty File): Creates an empty file.

5. mkdir (Make Directory): Creates a new directory.

6. rm (Remove): Deletes files and directories. Use with caution.

7. cp (Copy): Copies files and directories.

8. mv (Move): Moves or renames files and directories.

9. cat (Concatenate): Displays the contents of a file.

10. more and less: Paginate and view file content one screen at a time.

11. head and tail: Display the beginning or end of a file.

12. grep (Global Regular Expression Print): Searches for text patterns in files.

13. find: Searches for files and directories within a specified location.

14. echo: Prints text or variables to the terminal.

15. ps (Process Status): Lists currently running processes.

16. kill: Terminates processes, usually by their process ID (PID).

17. chmod (Change Mode): Modifies file permissions.

18. chown (Change Owner): Changes the owner of a file or directory.

19. history: Displays a history of previously entered commands.

20. tar (Tape Archive): Used to create and extract tar archives.

21. ssh (Secure Shell): Connects to a remote server securely.

22. scp (Secure Copy): Copies files securely between local and remote systems.

23. wget and curl: Download files from the internet.

24. df (Disk Free): Displays disk space usage.

25. du (Disk Usage): Shows directory sizes.

These are just a few of the fundamental Bash commands. To learn more about each command and its options,
you can use the manual pages by running `man` followed by the command name, e.g., `man ls` for information on the `ls` command.
Additionally, you can use the `--help` option with many commands to see a brief list of available options and how to use them, e.g., `ls --help`.

---
The Linux "core" (called kernel) was born in 1991 in Finland.

Linux powers the vast majority of the servers that compose the Internet. It's the base which
everything is built upon. Android is based on Linux (its modified version).

Linux offers **the freedom to do whatever you want with your computer** (unlike Microsoft or Apple).
There's no single commercial company that can dictate what goes into Linux.

There's not just "one Linux", instead, we have distributions.
For example **Debian, Red Hat, and Ubuntu** are probably the most popular.

Under the hood macOS is a UNIX Operating System, and it shares a lot of the same ideas and software that a GNU/Linux system uses (free alternative to UNIX).

UNIX is an umbrella term that groups many operating systems used in big corporations and institutions, starting from the 70's.

The majority of the time you will run a Linux in the cloud via a **VPS (Virtual Private Server)** like DigitalOcean or AWS.

A **shell** is a command interpreter that exposes to the user an interface to work with the underlying operating system.
Shells let you perform things in a more optimized way than a UI could ever possibly let you do.
Command line tools can offer many different configuration options without being too complex to use.

There are many different kind of shells. Focus on Unix shells which you will find commonly on Linux and macOS computers.
A few shells dominating the space: **Bash, Csh, Zsh, Fish** and many more!

All shells originate from the **Bourne Shell**, called `sh` created by Steve Bourne. **Bash means Bourne-again shell**.

If you use Mac, open your Mac terminal, by default it's running `zsh`. You can set up your system to run any kind of shell.
