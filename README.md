# Sprout

UMaine cos420 - Software engineering - group 3 repo
Spring 2019

Dating app repositoy

## Table of contents

- [Installation](#installation)
- [Run the Application](#run-the-application)
  - [Android](#android)
  - [iOS](#ios)
- [Guidelines for Commits](#guidelines-for-commits)
  - [New Branch/Switch Branch](#new-branchswitch-branch)
  - [Stage Changes](#stage-changes)
  - [Commit Changes](#commit-changes)
  - [Push Changes](#push-changes)
- [Team Members](#team-members)

# Installation

Make sure you have installed Node.js and can run `npm` in the terminal or command line. Please also install `yarn` to make your life a lot easier. To check existing or installed Node.js environment open the terminal/command line and type in

```sh
node -v
npm -v
yarn -v
```

After that, clone the GitHub repository using

```sh
git clone https://github.com/Enoinoo/Sprout
```

Go into `Sprout/` foler

```sh
cd Sprout
```

Then use this command to install required packages

```sh
yarn
```

You might have to install Expo CLI manually, using

```sh
npm install -g expo-cli
```

# Run the Application

First start the application using

```sh
npm start
```

Make sure the connection mode is on `Tunnel`, then

## Android

Download the Expo App, then scan the QR code in the terminal or command line through the app. Then you should be able to see the home screen on your device.

## iOS

Press `e` in the terminal or command line, enter your email address or phone number, then follow the instructions.

# Guidelines for Commits

By default, you will be on `master` branch. You should always keep your local repository up to date using

```sh
git pull
```

## New Branch/Switch Branch

If you want to work on a new feature, create a new branch and do so there after keeping your local repo up to date (keep in mind that there are some naming conventions with branches, for example no spaces), using

```sh
git checkout -b [name_of_your_new_branch]
```

You can make sure you are on the correct branch using

```sh
git branch
```

If you already have a local branch and/or would like to switch between branches, use

```sh
git checkout [name_of_the_branch]
```

## Stage Changes

After you have made some changes, you can see which files are altered using

```sh
git status
```

You can stage your files for commit using

```sh
git add [name_of_your_file_or_directory]
```

Keep in mind that the shortcut for staging all files is

```sh
git add -A
```

If you want to unstage some changes, you can use

```sh
git checkout -- [name_of_your_file]
```

You can always check the status again to see which files will be commited

## Commit Changes

To commit the changes to your local branch, the easiest way is to use

```sh
git commit -m "your message for the commit"
```

Keep in mind that multiple commits can be made locally before pushing to GitHub.

## Push Changes

After that, pushing your local branch and commits can be done using

```sh
git push origin [name_of_your_branch]
```

# Team Members

Enoch Lin  
Matthew Loewen  
Kody Moseley  
Noah Monto  
Andrew Piccirillo  
Taidgh Robinson
