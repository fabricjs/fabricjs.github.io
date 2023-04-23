import React from 'react'
import Layout from '../components/layoutFullWidth'
import { TeamMember } from '../components/TeamMember/TeamMember'
import andrea from '../images/andrea.png'
import shachar from '../images/shachar.jpg'
import steve from '../images/steve-eberhardt.jpg'
import juriy from '../images/juriy.png'
import stefan from '../images/stefan.png'

const TeamPage = () => (
  <Layout>
    <h1>Fabric.js Team</h1>
    <TeamMember name="Andrea Bogazzi" imgSrc={andrea}>
      <p>
        Andrea was born in 1979, Rome Italy.
        <br />
        Since 2005 he is working as a software developer.
        <br />
        He started with PHP, Javascript, HTML + CSS, using LAMP stack, moved on
        modern js and typescript since he joined Shutterstock in 2016.
        <br />
        He found Fabric.js out in 2015 of private interest and had fun with it,
        playing a big role in improving his Javascript and canvas skills.
        <br />
        To give back, he helps fix library bugs, adds features, and assists
        people with their issues. Since them he become a contributor, a
        maintainer and then the admin of the repo.
      </p>
    </TeamMember>
    <TeamMember name="Shachar Nencel" imgSrc={shachar}>
      <p>
        Shachar Nencel, aka ShaMan123, is from Israel.
        <br />
        Since 2017 he has been developing front-end projects.
        <br />
        Shachar loves open source and contributes wherever and whenever he can.
        <br />
        In 2021, while researching solutions for a product he was developing for
        his startup, he discovered Fabric.js.
        <br />
        After testing alternatives Fabric.js won 😉.
        <br />
        His tale began when he hit a wall because he had to support erasing, so
        he created the EraserBrush.
        <br />
        Since then he has been actively contributing to fabric, taking down more
        walls to make fabric better and easier.
        <br />
      </p>
    </TeamMember>
    <TeamMember name="Steve Eberhardt" imgSrc={steve}>
      <p>
        Steve (melchiar) was born in 1988 and lives in British Columbia, Canada.
        <br />
        He began experimenting with web design at age 12, and started coding on
        his old TI-83 Plus graphing calculator, along with dabbling in 3d
        graphics during the early days of Blender.
        <br />
        Steve now works as a developer for stoneycreekwinepress.com where he
        handles frontend web development and builds internal production software
        using C# and Adobe ExtendScript. He discovered Fabric in 2017, and used
        it to build the company`s LabelMaker Pro design platform.
        <br />
        You`ll see him around here contributing features and helping with bug
        reports and issues.
        <br />
      </p>
    </TeamMember>
    <h3>Original team members and onorable mentions</h3>
    <TeamMember name="Juriy Zaytsev" imgSrc={juriy}>
      <p>
        Juriy (also known as &quot;kangax&quot;) is a front-end web developer
        based in New York.
        <br />
        Juriy created Fabric.js in 2008, when starting to work on his startup —
        Printio.ru. He&lsquo;s been actively working on it up to 2016.
        <br />
        His adventures with Javascript started in 2008, and ever since he
        enjoyed working on various open source projects.
        <br />
        Up until 2010, Juriy has been a core developer of Prototype.js
        Javascript library.
        <br />
        He blogs Javascript, Fabric, and other front-end minutae at
        perfectionkills.com
        <br />
      </p>
    </TeamMember>
    <TeamMember name="Stefan Kienzle" imgSrc={stefan}>
      <p>
        Stefan (kienzle_s) is 29 years old, from Stuttgart, Germany.
        <br />
        Between 2005 and 2008 he studied business informatics at the
        Baden-Wuerttemberg Cooperative State University.
        <br />
        He&lsquo;s been working as a web developer at the German insurance
        company Württembergische Gemeinde-Versicherung a.G. since 2008.
        <br />
        Since 2010 Stefan has been using Fabric.js in a HTML5 project to draw
        interactive car accident sketches. During this time he learned a lot
        about Fabric.js and JavaScript.
        <br />
        In 2013 he was asked to participate as an active contributor in the
        Fabric.js github project. Since then he&lsquo;s been doing his best to
        improve the library and help others with the usage of Fabric.js.
        <br />
        Stefan is very interested in HTML5, CSS3 and JavaScript. At work (at the
        insurance company) he codes web applications by using the Oracle PL/SQL
        language and HTML/JavaScript.
        <br />
      </p>
    </TeamMember>
  </Layout>
)

export default TeamPage
