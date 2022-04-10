const data = [
    {
        icon: "freecodecamp.jpg",
        name: "freecodecamp",
        description: `Offering some amazing tracks, freeCodeCamp is one of the top resources for learning HTML,
        CSS and JavaScript online. Plus...it's free! Can't really argue with that.`,
        link: "https://www.freecodecamp.org/",
        category: "onlineCourses",
    },
    {
        icon: "codecademy.png",
        name: "Codecademy",
        description: `Codecademy offers a number of free lessons for a variety of languages. To get the full
        courses, you typically need to sign up to the pro membership. But you can get a lot of
        learning done for free.`,
        link: "https://www.codecademy.com/",
        category: "onlineCourses",
    },
    {
        icon: "cs50.png",
        name: "CS50",
        description: `A brilliant resource for anyone who wants to learn some Computer Science. David J. Malan
        does an amazing job delivering the course in an engaging way.`,
        link: "https://cs50.harvard.edu/x/2020/",
        category: "onlineCourses",
    },
    {
        icon: "udacity.jpg",
        name: "Udacity",
        description: `Udacity offers an incredible array of free individual courses. They also offer paid
        nanodegree programmes if you're looking for something with more structure.`,
        link: "https://udacity.com/",
        category: "onlineCourses",
    },
    {
        icon: "bitdegree.png",
        name: "BitDegree",
        description: `BitDegree is the world's first blockchain-powered, smart-incentive based online education
        platform which will revolutionize global education and tech recruiting.`,
        link: "https://www.bitdegree.org/",
        category: "onlineCourses",
    },
    {
        icon: "udemy.png",
        name: "Udemy",
        description: `Udemy is an online learning and teaching marketplace with over 130000 courses and 35
        million students.`,
        link: "https://www.udemy.com",
        category: "onlineCourses",
    },
    {
        icon: "tutsplus.png",
        name: "Envato Tuts+",
        description: `Learn new creative and technical skills with 1,290+ video-based courses and short courses
        to help you develop. From code and web design courses to photography and design &
        illustration courses, it’s all here.`,
        link: "https://tutsplus.com/courses#price=free",
        category: "onlineCourses",
    },
    {
        icon: "khanacademy.jpg",
        name: "Khan Academy",
        description: `Khan Academy offers some amazing introductory courses to HTML, CSS and JavaScript. There
        is a good mixture of video lessons and coding challenges to keep you interested.`,
        link: "https://www.khanacademy.org/computing",
        category: "onlineCourses",
    },
    {
        icon: "frontendmasterts.jpg",
        name: "Frontend Masters Bootcamp",
        description: `The free Frontend Masters Bootcamp is a great way to get up and running with HTML, CSS,
        and JavaScript.`,
        link: "https://frontendmasters.com/bootcamp/",
        category: "onlineCourses",
    },
    {
        icon: "flexbox.io.png",
        name: "Wes Bos: Flexbox",
        description: `Flexbox makes CSS just work, which is no easy feat. Get a perfect introduction to it
        here.`,
        link: "https://flexbox.io/",
        category: "onlineCourses",
    },
    {
        icon: "cssgrid.png",
        name: "Wes Bos: CSS Grid",
        description: `CSS Grid will change how you create website layouts. Learn how for free from Wes Bos in
        this brilliant CSS Grid course.`,
        link: "https://cssgrid.io/",
        category: "onlineCourses",
    },
    {
        icon: "javascript30.png",
        name: "Wes Bos: JavaScript 30",
        description: `Wes Bos offers another amazing (and free) course to help you develop your JavaScript
        skills.`,
        link: "https://javascript30.com/",
        category: "onlineCourses",
    },
    {
        icon: "conquering responsive layout.png",
        name: "Conquering Responsive Layouts",
        description: `Kevin Powell takes you through everything you need to know to create responsive layouts
        in his brilliant 21-day course.`,
        link: "https://courses.kevinpowell.co/conquering-responsive-layouts",
        category: "onlineCourses",
    },
    {
        icon: "upcase by thoughtbot.jpg",
        name: "Upcase by thoughtbot",
        description: `thoughtbot have very kindly open sourced Upcase, their online learning platform. It's
        full of extremely useful "trails" to help you upskill with topics like Mastering Git and
        Design for Developers.`,
        link: "https://thoughtbot.com/upcase",
        category: "onlineCourses",
    },
    {
        icon: "generalassembly.png",
        name: "General Assembly Dash",
        description: `Dash is an amazing, free resource offered by General Assembly with engaging challenges
        that get harder as you progress.`,
        link: "https://dash.generalassemb.ly/",
        category: "interactiveTutorials",
    },
    {
        icon: "scrimba.jpg",
        name: "Scrimba",
        description: `Scrimba is an awesome learning platform that allows you to interact with the code
        directly in the screencast player. Subjects include HTML, CSS, JS, React, Vue, and more.
    `,
        link: "https://scrimba.com/",
        category: "interactiveTutorials",
    },
    {
        icon: "codepip.jpg",
        name: "Flexbox Froggy",
        description: `Once you've learned Flexbox, you can test your CSS skills with this fun, interactive
        Flexbox tutorial/challenge.`,
        link: "https://flexboxfroggy.com/",
        category: "interactiveTutorials",
    },
    {
        icon: "flexbox defense.jpg",
        name: "Flexbox Defense",
        description: `Another great interactive Flexbox challenge is Flexbox Defense. Once you've completed
        this and Flexbox Froggy you'll be a Flexbox ninja!`,
        link: "http://www.flexboxdefense.com/",
        category: "interactiveTutorials",
    },
    {
        icon: "codepip.jpg",
        name: "Grid Garden",
        description: `Test your CSS Grid chops with this interactive tutorial/challenge. It gets pretty tricky
        towards the end!`,
        link: "https://cssgridgarden.com/",
        category: "interactiveTutorials",
    },
    {
        icon: "css diner.jpg",
        name: "CSS Diner",
        description: `A valuable (and fun!) interactive challenge to help learn CSS selectors. `,
        link: "https://flukeout.github.io/",
        category: "interactiveTutorials",
    },
    {
        icon: "flexboxzombies.jpg",
        name: "Flexbox Zombies",
        description: `A really fun way to learn Flexbox. Make your way through a zombie-infested world with
        nothing more than a crossbow and your trusty Flexbox skills.`,
        link: "https://geddski.teachable.com/p/flexbox-zombies",
        category: "interactiveTutorials",
    },
    {
        icon: "sololearn.png",
        name: "SoloLearn",
        description: `A great platform for learning HTML, CSS, JS, and more. Small, interactive tutorials help
        you progress at a steady pace. There is also a large community where you can ask
        questions if you get stuck.`,
        link: "https://www.sololearn.com/",
        category: "interactiveTutorials",
    },
    {
        icon: "grasshopper.png",
        name: "Grasshopper",
        description: `Grasshopper is a fun app for helping beginners learn to code. Learn JavaScript through
        short, interactive lessons and move through the levels as you progress.`,
        link: "https://grasshopper.codes/",
        category: "interactiveTutorials",
    },
    {
        icon: "traversymedia.jpeg",
        name: "Traversy Media",
        description: `
        Brad has a comprehensive list of videos
        covering seemingly every programming topic.
        No matter what I'm learning, there's a
        walkthrough, along with the source code.
    `,
        link: "https://www.youtube.com/user/TechGuyWeb",
        category: "youtubeChannels",
    },
    {
        icon: "onlinetutorials.jpeg",
        name: "Online Tutorials",
        description: `
        If a CSS Ninja is what you aspire to be,
        ‘Online Tutorials’ is a channel you should
        be subscribing to right away.
    `,
        link: "https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog/videos",
        category: "youtubeChannels",
    },
    {
        icon: "codeexplained.jpeg",
        name: "Code Explained",
        description: `
        One of the best ways to move from being a
        JavaScript beginner to an intermediate is to
        build apps. If you are looking for
        code-along video tutorials on how to build
        fancy JavaScript apps, check out Code
        Explained.
    `,
        link: "https://www.youtube.com/channel/UC8n8ftV94ZU_DJLOLtrpORA",
        category: "youtubeChannels",
    },
    {
        icon: "aniakubow.jpeg",
        name: "Ania Kubów",
        description: `
        If building JavaScript games is what excites
        you the most, this channel is sure to
        further add up to your excitement.
        Minesweeper, Tetris, Candy Crush, Pac Man
        and of course, the classic snake game, this
        channel can help you build all of these.
    `,
        link: "https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw/videos",
        category: "youtubeChannels",
    },
    {
        icon: "thenetninja.jpeg",
        name: "The Net Ninja",
        description: `
        Black-belt your web development skills. Over
        1000 free programming tutorials
    `,
        link: "https://www.youtube.com/c/TheNetNinja/featured",
        category: "youtubeChannels",
    },
    {
        icon: "mozilladeveloper.jpeg",
        name: "Mozilla Developer",
        description: `
        If you're interested in web development
        Mozilla has this great new channel where
        different web devs dive into interesting CSS
        properties, site layout techniques, and
        leveraging the power of Firefox's developer
        tools.
    `,
        link: "https://m.youtube.com/channel/UCh5UlGiu9d6LegIeUCW4N1w?itct=CC0Q6p4EIhMImfLW4vfX5QIVCehgCh2Vdwxv&csn=1PfDXZn1F4n58gTApr3wAw&wlfg=true",
        category: "youtubeChannels",
    },
    {
        icon: "hiteshchiudhary.jpeg",
        name: "Hitesh Choudhary",
        description: `
        Hitesh Choudhary brings regular videos on
        various programming languages and discussing
        the latest market trends as well as doing a
        live session on Saturday where he takes your
        questions.
    `,
        link: "https://www.youtube.com/c/HiteshChoudharydotcom/playlists",
        category: "youtubeChannels",
    },
    {
        icon: "academind.jpeg",
        name: "Academind Channel",
        description: `
        Academind provides comprehensive video
        tutorials on website languages including
        JavaScript, Angular, React, Vue, Node js and
        etc. He provides crash courses also.
    `,
        link: "https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w/playlists",
        category: "youtubeChannels",
    },
    {
        icon: "edureka.jpeg",
        name: "edureka Channel",
        description: `
        Edureka is one of the youtube channels to
        learn development, as it covers a variety of
        videos from Tableau, Machine Learning,
        Python, Data Science and etc.
    `,
        link: "https://www.youtube.com/c/edurekaIN/playlists",
        category: "youtubeChannels",
    },
    {
        icon: "husseinnaseer.jpeg",
        name: "Hussein Nasser",
        description: `
        This channel discusses various software
        engineering topics with examples and adding
        fun elements to it.
    `,
        link: "https://www.youtube.com/c/HusseinNasser-software-engineering/about",
        category: "youtubeChannels",
    },
    {
        icon: "benawad.jpeg",
        name: "Ben Awad",
        description: `
        Open thoughts on various topics (not
        necessarily direct coding-related always).
        Knows his stuff and a nice touch of humor
        here and there.
    `,
        link: "https://www.youtube.com/user/99baddawg",
        category: "youtubeChannels",
    },
    {
        icon: "cleverprogrammer.jpeg",
        name: "Clever Programmer",
        description: `
        Great videos on languages, tools, practices,
        tips to become a developer. Lately a lot of
        live coding on the channel.
    `,
        link: "https://www.youtube.com/channel/UCqrILQNl5Ed9Dz6CGMyvMTQ",
        category: "youtubeChannels",
    },
    {
        icon: "codinggarden.jpeg",
        name: "Coding Garden",
        description: `
        Lots of live coding there, with live viewer
        interaction in the chat. Will answer your
        questions when possible. Might be fast-paced
        at times.
    `,
        link: "https://www.youtube.com/channel/UCLNgu_OupwoeESgtab33CCw",
        category: "youtubeChannels",
    },
    {
        icon: "amigoscode.jpg",
        name: "Amigoscode",
        description: `
        A very beautiful channel by a very
        experienced and beautiful Software engineer.
        Here you will find a lot of free programming
        tutorials and courses.
    `,
        link: "https://www.youtube.com/c/amigoscode/featured",
        category: "youtubeChannels",
    },
    {
        icon: "codercoder.jpeg",
        name: "Coder Coder",
        description: `
        Practical tips for the beginner web
        developer.
    `,
        link: "https://www.youtube.com/channel/UCzNf0liwUzMN6_pixbQlMhQ",
        category: "youtubeChannels",
    },
    {
        icon: "webdevsimplified.jpeg",
        name: "Web Dev Simplified",
        description: `
        High-quality content. Topics are deep
        researched and the content is
        well-thought-out and easy to follow.
    `,
        link: "https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw",
        category: "youtubeChannels",
    },
    {
        icon: "computerphile.jpeg",
        name: "Computerphile",
        description: `
        A must-have if you are in computers in
        general. A closer look at how things work,
        what's happening behind the scenes, and
        more.
    `,
        link: "https://www.youtube.com/user/Computerphile",
        category: "youtubeChannels",
    },
    {
        icon: "florinpop.jpeg",
        name: "Florin Pop",
        description: `
        Likes challenges, like doing X projects in X
        amount of time. Lot's of live coding mixed
        with separate videos on specific topics.
    `,
        link: "https://www.youtube.com/channel/UCeU-1X402kT-JlLdAitxSMA",
        category: "youtubeChannels",
    },
    {
        icon: "javascriptmastery.jpeg",
        name: "Javascript Mastery",
        description: `
        A must-have for full-stack JS engineers.
        Lots of awesome projects focusing on both
        sides of the stack and how to deploy them.
    `,
        link: "https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A",
        category: "youtubeChannels",
    },
    {
        icon: "csdojo.jpeg",
        name: "CS Dojo",
        description: `
        Awesome channel if you are learning
        algorithms and data structures. Would highly
        recommend especially if you are in the
        job-seeking phase and preparing for
        interviews.
    `,
        link: "https://www.youtube.com/channel/UCxX9wt5FWQUAAz4UrysqK9A",
        category: "youtubeChannels",
    },
    {
        icon: "thecodingtrain.jpeg",
        name: "The Coding Train",
        description: `
        Very enthusiastic about the topics. Surely
        knows his stuff. Usually fan interaction
        simultaneously during live coding sessions.
    `,
        link: "https://www.youtube.com/user/shiffman",
        category: "youtubeChannels",
    },
    {
        icon: "coltsteele.jpeg",
        name: "Colt Steele",
        description: `
        One of the best selling instructors on Udemy
        has an awesome YouTube channel. Visually
        pleasing and high-quality content.
    `,
        link: "https://www.youtube.com/channel/UCrqAGUPPMOdo0jfQ6grikZw",
        category: "youtubeChannels",
    },
    {
        icon: "learncodeacdemy.jpeg",
        name: "Learncode.academy",
        description: `
        Great content, knows his stuff. Has been
        inactive lately, tho lots of great resources
        there, especially yearly developer roadmaps.
    `,
        link: "https://www.youtube.com/user/learncodeacademy",
        category: "youtubeChannels",
    },
    {
        icon: "methmethmethod.jpeg",
        name: "Meth Meth Method",
        description: `
        High-quality content. Great if you are
        looking for advanced JS or learning Canvas.
        Lots of best practices and elegant code.
    `,
        link: "https://www.youtube.com/channel/UC8A0M0eDttdB11MHxX58vXQ",
        category: "youtubeChannels",
    },
    {
        icon: "tylerpotts.jpeg",
        name: "Tyler Potts",
        description: `
        If you want to learn about Game or Web
        Development, JavaScript, CSS, PHP or
        anything else relating to programming then
        subscribe to the channel.
    `,
        link: "https://www.youtube.com/c/TylerPotts/featured",
        category: "youtubeChannels",
    },
    {
        icon: "codingtech.jpeg",
        name: "Coding Tech",
        description: `
        This is basically TED for coders. A lot of
        awesome full-length tech talks posted there.
    `,
        link: "https://www.youtube.com/channel/UCtxCXg-UvSnTKPOzLH4wJaQ",
        category: "youtubeChannels",
    },
    {
        icon: "derekbanas.jpeg",
        name: "Derek Banas",
        description: `
        Among the first YouTube dev channels. Very
        detailed, tho pretty fast-paced cover of
        features. Great for refreshing the
        particular tech.
    `,
        link: "https://www.youtube.com/user/derekbanas",
        category: "youtubeChannels",
    },
    {
        icon: "leveluptuts.jpeg",
        name: "LevelUpTuts",
        description: `
        Great channel on a wide variety of tech.
        Lots of tutorials sorted in the playlists
        based on the experience level of the viewer.
    `,
        link: "https://www.youtube.com/user/LevelUpTuts",
        category: "youtubeChannels",
    },
    {
        icon: "googledeveloper.jpeg",
        name: "Google Developers",
        description: `
        Latest updates and future plans, news on
        cutting-edge tech. Also reports from events
        and interesting talks.
    `,
        link: "https://www.youtube.com/user/GoogleDevelopers",
        category: "youtubeChannels",
    },
    {
        icon: "chriscoiyer.jpeg",
        name: "Chris Coyier",
        description: `
        Founder of css-tricks.com. As you might
        guess - mainly front-end oriented stuff in
        the channel. Grid, responsive design and all
        the good stuff.
    `,
        link: "https://www.youtube.com/user/realcsstricks",
        category: "youtubeChannels",
    },
    {
        icon: "chrishawkes.jpeg",
        name: "Chris Hawkes",
        description: `
        Mainly thoughts on broader and open topics
        like tool comparisons, career tips, top tech
        lists, advice on how to's, opinions, etc.
    `,
        link: "https://www.youtube.com/user/noobtoprofessional",
        category: "youtubeChannels",
    },
    {
        icon: "jsconf.jpeg",
        name: "JSConf",
        description: `
        Lots of awesome talks on all the JS related
        topics. A great resource to follow along
        with modern trends and ever-evolving
        environment.
    `,
        link: "https://www.youtube.com/user/jsconfeu",
        category: "youtubeChannels",
    },
    {
        icon: "joshuafluke.jpeg",
        name: "Joshua Fluke",
        description: `
        It will help you on ways to structure your
        CV better and much more. Highly recommended
        from me.
    `,
        link: "https://www.youtube.com/user/Tychos1/videos",
        category: "youtubeChannels",
    },
    {
        icon: "honestcareers.jpeg",
        name: "Honest Careers",
        description: `
        They make videos that help you find your
        dream job. Whether that's digital work,
        working from home, or starting your first
        online business.
    `,
        link: "https://www.youtube.com/user/EngineeredTruth",
        category: "youtubeChannels",
    },
    {
        icon: "numberphile.jpeg",
        name: "Numberphile",
        description: `
        Everything around math and numbers. Awesome
        and enthusiastic hosts. Interesting topics
        and easy to follow.
    `,
        link: "https://www.youtube.com/user/numberphile",
        category: "youtubeChannels",
    },
    {
        icon: "coldfusion.jpeg",
        name: "ColdFusion",
        description: `
        Well-researched content in various tech
        fields. Quality audio and editing.
    `,
        link: "https://www.youtube.com/user/coldfustion",
        category: "youtubeChannels",
    },
    {
        icon: "easytutorials.jpeg",
        name: "Easy Tutorials",
        description: `
        This channel is created with the aim to help
        you to learn Website development, blogging,
        Digital Marketing and other technical
        things.
    `,
        link: "https://www.youtube.com/channel/UCkjoHfkLEy7ZT4bA2myJ8xA",
        category: "youtubeChannels",
    },
    {
        icon: "",
        name: "freeCodeCamp",
        description: `
        freeCodeCamp is an an open source community
        of busy people who learn to code and build
        projects for nonprofits. Their youtube
        channel is loaded with tutorials that take
        the shape of an online course, due to the
        length of the videos.
    `,
        link: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ/videos",
        category: "youtubeChannels",
    },
    {
        icon: "codingthemasterway.jpeg",
        name: "CodingTheSmartWay",
        description: `
        CodingTheSmartWay provides you with
        tutorials on fullstack web development with
        a small mixture of machine learning.
    `,
        link: "https://www.youtube.com/channel/UCLXQoK41TOcIsWtY-BgB_kQ/videos",
        category: "youtubeChannels",
    },
    {
        icon: "designcourse.jpeg",
        name: "Design Course",
        description: `
        Owned by Gary Simon, this channel has been
        around for about 8 years. Design Course
        provides you with videos that will help
        elevate your UI/UX skills using tools like
        photoshop and Adobe XD.
    `,
        link: "https://www.youtube.com/user/DesignCourse/videos",
        category: "youtubeChannels",
    },
    {
        icon: "wesbos.jpeg",
        name: "Wes Bos",
        description: `
        Wes Bos provides you with tutorials that
        will improve your web development skills.
    `,
        link: "https://www.youtube.com/user/wesbos/videos",
        category: "youtubeChannels",
    },
    {
        icon: "programmingwithmosh.jpeg",
        name: "Programming with Mosh",
        description: `
        Programming with Mosh provides you with
        tutorials that will help you become the best
        coder you can be. His channel is fully
        loader with both frontend and back end
        languages, libraries and framework.
    `,
        link: "https://www.youtube.com/user/programmingwithmosh/videos",
        category: "youtubeChannels",
    },
    {
        icon: "deved.jpeg",
        name: "Dev Ed",
        description: `
        From teaching frontend languages and
        libraries like javascript and react, backend
        runtime environment like node js, to
        teaching about design using tools like figma
        and photoshop.
    `,
        link: "https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q/videos",
        category: "youtubeChannels",
    },
    {
        icon: "techlead.jpeg",
        name: "Tech Lead",
        description: `
        Tech Lead channel does not teach your
        practical examples of how to write code.
        Rather, Patrick Shyu who is the creator of
        the channel pours out his knowledge of years
        of experience as a former tech lead in
        Google.
    `,
        link: "https://www.youtube.com/channel/UC4xKdmAXFh4ACyhpiQ_3qBw/videos",
        category: "youtubeChannels",
    },
    {
        icon: "codingaddict.jpeg",
        name: "Coding Addict",
        description: `
        This channel by John Smilga features a whole
        bunch of high quality tutorials on various
        topics such as Bootstrap, CSS, React, ES6,
        etc.
    `,
        link: "https://www.youtube.com/channel/UCMZFwxv5l-XtKi693qMJptA",
        category: "youtubeChannels",
    },
    {
        icon: "dcode.jpeg",
        name: "dcode",
        description: `
        reated by Dom, a web developer from
        Australia, the channel has 100s of awesome
        tutorials on technologies like JavaScript,
        Rust, PHP, CSS and many more.
    `,
        link: "https://www.youtube.com/channel/UCjX0FtIZBBVD3YoCcxnDC4g/videos",
        category: "youtubeChannels",
    },
    {
        icon: "fireship.jpeg",
        name: "Fireship",
        description: `
        High-intensity ⚡ code tutorials to help you
        build & ship your app faster.
    `,
        link: "https://www.youtube.com/c/AngularFirebase/featured",
        category: "youtubeChannels",
    },
    {
        icon: "codestacker.jpeg",
        name: "codeSTACKr",
        description: `
        The channel has some great content related
        to HTML, CSS, JavaScript, SASS, React.js and
        Node.js to name a few.
    `,
        link: "https://www.youtube.com/channel/UCDCHcqyeQgJ-jVSd6VJkbCw/videos",
        category: "youtubeChannels",
    },
    {
        icon: "codeevolution.jpeg",
        name: "Codevolution",
        description: `
        Tutorials on the latest tech in web
        development!
    `,
        link: "https://www.youtube.com/c/Codevolution/featured",
        category: "youtubeChannels",
    },
    {
        icon: "drewryan.jpeg",
        name: "Drew Ryan",
        description: `
        Learn how to develop modern websites with
        HTML5, CSS3, Bootstrap 4 and more!
    `,
        link: "https://www.youtube.com/user/DrewOnCue/featured",
        category: "youtubeChannels",
    },
    {
        icon: "tylermoore.jpeg",
        name: "Tyler Moore",
        description: `
        When it comes to Tyler Moore's channel, he
        focuses on teaching you how to build
        responsive and user friendly websites with
        the use of wordpress. This channel may be
        geared towards designers.
    `,
        link: "https://www.youtube.com/user/Conutant/videos",
        category: "youtubeChannels",
    },
    {
        icon: "frontenddevroadmap.png",
        name: "Front-end Developer Roadmap",
        description: `
        This brilliant roadmap by Kamran Ahmed gives
        an amazing overview of the front-end
        ecosystem and the potential routes you can
        take as a front-end developer.
    `,
        link: "https://roadmap.sh/frontend",
        category: "reading",
    },
    {
        icon: "shayhowe.jpg",
        name: "Shay Howe: Learn HTML & CSS",
        description: `
        Shay Howe has put together a seriously
        impressive guide to HTML & CSS. I would
        consider it required reading for anybody
        learning front-end web development.
    `,
        link: "https://learn.shayhowe.com/",
        category: "reading",
    },
    {
        icon: "bem.png",
        name: "BEM",
        description: `
        Without a defined structure, CSS can get
        pretty messy pretty quickly. BEM principles
        are only one possible solution, but I've
        found it to be the sanest approach to
        structuring CSS.
    `,
        link: "http://getbem.com/",
        category: "reading",
    },
    {
        icon: "itcss.png",
        name: "ITCSS",
        description: `
        Inverted Triangle CSS (ITCSS) is a great
        method for architecting your CSS code. If
        you're building medium to large projects,
        you might find it useful.
    `,
        link: "https://itcss.io/",
        category: "reading",
    },
    {
        icon: "you-dont-know-js.png",
        name: "You don't know JS",
        description: `
        Take a deep dive into JavaScript with this
        free series, which was originally funded on
        Kickstarter.
    `,
        link: "https://github.com/getify/You-Dont-Know-JS",
        category: "reading",
    },
    {
        icon: "eloquent.jpg",
        name: "Eloquent JavaScript",
        description: `
        Eloquent JavaScript be should high up on any
        beginner JavaScript developer's reading
        list. It is a great introduction to the
        language and touches on some more advanced
        features of the language.
    `,
        link: "https://eloquentjavascript.net/",
        category: "reading",
    },
    {
        icon: "jsdesignpatterns.jpg",
        name: "JavaScript Design Patterns",
        description: `
        This book is an amazing resource for
        learning the varying ways problems can be
        solved with design patterns and reusable
        solutions. Perfect for any new JavaScript
        developer wanting to boost their skills.
    `,
        link: "https://addyosmani.com/resources/essentialjsdesignpatterns/book/",
        category: "reading",
    },
    {
        icon: "codeanalogies.png",
        name: "Code Analogies",
        description: `
        If you're someone who learns coding
        principles best through analogies then this
        is the site for you. You'll find tons of
        programming concepts broken down using
        everyday examples.
    `,
        link: "http://www.codeanalogies.com/",
        category: "reading",
    },
    {
        icon: "trygit.png",
        name: "Try Git",
        description: `
        A series of valuable resources to help you
        get up-to-speed with version control and
        Git.
    `,
        link: "https://try.github.io/",
        category: "reading",
    },
    {
        icon: "33jsconcepts.jpg",
        name: "33 Concepts Every JavaScript Developer Should Know",
        description: `
        This goes in the reading section, but there
        are also plenty of videos linked in this
        resource. If you're a JavaScript developer
        (current or aspiring) this GitHub repo is a
        goldmine of information.
    `,
        link: "https://github.com/leonardomso/33-js-concepts",
        category: "reading",
    },
    {
        icon: "webdev.png",
        name: '"web.dev',
        description: `
        web.dev is a site created by Google to help
        developers learn how to create high quality
        websites. On top of being a learning
        resource it also provides site auditing and
        reporting tools.
    `,
        link: "https://web.dev/",
        category: "reading",
    },
    {
        icon: "cssanimationreading.svg",
        name: "CSS Animation",
        description: `
        Level up your CSS animation skills with
        these articles, tips, and tutorials
    `,
        link: "https://cssanimation.rocks/",
        category: "reading",
    },
    {
        icon: "internetingishard.svg",
        name: "Interneting is Hard",
        description: `
        An extremely comprehensive resource to help
        people learn HTML & CSS. The tutorials offer
        beautiful diagrams and hands-on examples.
    `,
        link: "https://internetingishard.com/",
        category: "reading",
    },
    {
        icon: "codercoder.png",
        name: "Coder Coder",
        description: `
        Coder Coder is a great learning resource
        aimed at self-taught web developers. It's
        run by Jessica Chan, who has also done a
        number of live coding sessions with Frontend
        Mentor challenges.
    `,
        link: "https://coder-coder.com/",
        category: "reading",
    },
    {
        icon: "a11ystyleguide.png",
        name: "A11y Style Guide",
        description: `
        The A11y Style Guide comes with
        pre-populated accessible components that
        include helpful links to related tools,
        articles, and WCAG guidelines to make your
        site more inclusive.
    `,
        link: "https://a11y-style-guide.com/style-guide",
        category: "reading",
    },
    {
        icon: "javascriptinfo.png",
        name: "JavaScript.info",
        description: `
        An extremely comprehensive resource that
        goes from basic to advanced concepts
        offering detailed explanations for every
        topic.
    `,
        link: "https://javascript.info/",
        category: "reading",
    },
    {
        icon: "30secondsofcode.png",
        name: "30 Seconds of Code",
        description: `
        Short code snippets for all your development
        needs. This website is a great resource to
        look through and learn some new tricks.
    `,
        link: "https://www.30secondsofcode.org/",
        category: "reading",
    },
    {
        icon: "marksheet.jpg",
        name: "MarkSheet",
        description: `
        MarkSheet is a nicely presented written HTML
        & CSS tutorial. It's written in an engaging
        way with lots of code snippets and simple
        explanations.
    `,
        link: "https://marksheet.io/",
        category: "reading",
    },
    {
        icon: "inclusivecomponents.png",
        name: "Inclusive Components",
        description: `
        This blog by Heydon Pickering will help you
        build better interfaces. Each post explores
        a common interface component and comes up
        with a better, more robust, and accessible
        version of it.
    `,
        link: "https://inclusive-components.design/",
        category: "reading",
    },
    {
        icon: "moderncsssolutions.png",
        name: "Modern CSS Solutions for Old CSS Problems",
        description: `
        This blog series by Stephanie Eckles will
        help you upgrade your CSS skills. Every post
        presents modern CSS techniques in an
        engaging, easy to understand manner that
        will help you grow as a developer.
    `,
        link: "https://moderncss.dev/",
        category: "reading",
    },
    {
        icon: "joshwcomeau.jpg",
        name: "Josh Comeau",
        description: `
        Josh Comeau has an incredible knack for
        explaining topics in an engaging way. Each
        article is beautifully presented and will
        have you reading all the way to the end.
    `,
        link: "https://joshwcomeau.com/",
        category: "reading",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "references",
    },
];

export default data;

// {
//     icon: "",
//     name: "",
//     description: ``,
//     link: "",
//     category: "",
// },
