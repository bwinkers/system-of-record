# History of how this was made

## Create directory to use

The directory name should match the name of the repo you will be creating.
The directory name will be used by `cdk init` in naming  the created files.

```
mkdir system-of-record
cd system-of-record
```

## Initialize Git

```
git init
```

## Create Docs

README.md
docs/how-this-was-created.md (this doc)

## Initialize CDK app

This will create a CDK app with files named after the directory.

```
cdk init app --language=typescript
```

## Save our work

I created a repo on Github using their web interface. I then pointed my local repo at it and pushed up the changes.

```
git remote add origin git@github.com:bwinkers/system-of-record.git
git push -u origin master
```

## The main stack file

There primary stack file is in the `/bin` directory of the generated project. It will be named after the CDK project



