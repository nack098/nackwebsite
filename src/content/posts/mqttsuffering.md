---
title: 'Suffering from MQTT'
createdAt: '24 June 2023'
heroImage: '/mqtt.jpg'
description: 'Doing MQTT broker went pretty wrong.'
---

Photo by Jakub Zerdzicki: https://www.pexels.com/photo/smart-home-mockup-16859997/

#### Client order

Due to my client want me to build a platform where iot developer can come and use
this broker. This broker need to have a admin panel for admin.

#### My attempt.

I just learn how to code in C# not for to long ago so I think. I will use ASP.net with MQTTnet
but due to my lack of knowledge with ASP.net make this attempt pretty hard. I tried about 1-2 weeks.
but nothing came out of it.

#### Current Solution

So I have to change how I work abit. Firstly, I decided to go back and use typescript which is my most prefer language.
Next, The MQTT broker I used Aedes. And for structure of project it will be MVC pattern.

1. View
   Using NextJS

2. Controller
   Using NodeJS

3. Model
   Using MySQL with prisma as ORM

Controller will host 2 server 1. MQTT broker server 2. Backend server.
Controller will open 1 port for websocket to comunicate with Mqtt server.
