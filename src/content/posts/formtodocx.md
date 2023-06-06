---
title: 'FormToDocx'
createdAt: '6 June 2023'
heroImage: '../../../public/placeholder-hero.jpg'
description: 'Application turning Google Form Data to Microsoft Word Docx.'
---

FormToDocx is an application created for turning Google Form Data which collected at Google Spreadsheet to Microsoft Word Docx
without using Google Docx first.

### Why?

The process when using google docx method.
&nbsp;

```
Google Form --> Google Spreadsheet --> Google Docx --> Microsoft Word Docx File.
```

&nbsp;
This might look simple but there is a catch.
By using this method, there is a problem when turning Google Docx to Microsoft Docx.
The problem is when turning Google Docx(Templating) to Microsoft Docx(Wanted Result).
It created a lot of miss placing character which is appered more when language is not English.
This created a ton of problem when using it in ton of data (Using Automatic Templating).
Which created more work than it should be so I created this app to address this type of problem.
&nbsp;
The new process would be.
&nbsp;

```
Google Form --> Google Spreadsheet --> Microsoft Word Docx(Templating) --> Microsfot Word Docx(Result)
```

&nbsp;
By using some script to fetch data from Spreadsheet and put it in Microsoft Word Template and by not using
Google Docx there would not be a problem when put data to template.
&nbsp;

### Constraint

This application using Google Drive api to fetch all Spreadsheets that user have. And this api can be used in
2 ways. First, It need to be approved by Google(Which is harder). Secondly, Using api inside a organization(Which is easier).
That means this app can be used in University only.

### Download

<a href="/placeholder-hero.jpg" download>Download</a>
