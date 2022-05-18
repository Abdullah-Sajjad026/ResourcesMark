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
        icon: "htmlrefio.png",
        name: "HTML Reference",
        description: `
        A free HTML reference featuring all elements
        and attributes. It's a great website to
        refer back to if you need to check up on
        something HTML-related.
    `,
        link: "https://htmlreference.io/",
        category: "references",
    },
    {
        icon: "cssrefio.png",
        name: "CSS Reference",
        description: `
        A free visual guide to CSS. It features the
        most popular properties and explains them
        with illustrated and animated examples.
    `,
        link: "https://cssreference.io/",
        category: "references",
    },
    {
        icon: "mdn.jpg",
        name: "MDN",
        description: `
        MDN is an incredible resource from Mozilla
        for HTML, CSS, JavaScript and beyond. Useful
        for beginners and seniors alike. You'll
        often find yourself coming back throughout
        your development journey.
    `,
        link: "https://developer.mozilla.org/",
        category: "references",
    },
    {
        icon: "emmet.svg",
        name: "Emmet Cheat Sheet",
        description: `
        This cheat sheet will be a valuable resource
        in your early days of using Emmet.
    `,
        link: "https://docs.emmet.io/cheat-sheet/",
        category: "references",
    },
    {
        icon: "htmlcheatsheetcom.png",
        name: "HTML Cheat Sheet",
        description: `
        Although called HTML Cheat Sheet, this site
        is also a great resource for CSS and
        JavaScript. Perfect for when you're getting
        started as a front-end developer.
    `,
        link: "https://htmlcheatsheet.com/",
        category: "references",
    },
    {
        icon: "css tricks.jpg",
        name: "HTML Entity Reference by CSS-Tricks",
        description: `
        Super useful reference, gives you HTML
        entitiy name, numeric code, hex code and ISO
        code.
    `,
        link: "https://css-tricks.com/snippets/html/glyphs/",
        category: "references",
    },
    {
        icon: "codrops.png",
        name: "Codrops CSS Reference",
        description: `
        A great reference for CSS from Codrops. Be
        sure to have a look if you need a hand.
    `,
        link: "https://tympanus.net/codrops/css_reference/",
        category: "references",
    },
    {
        icon: "accessibilitymatters.jpg",
        name: "Accessibility Matters",
        description: `
        Your site needs to be usable by everyone.
        Accessibility Matters is a great resource,
        offering HTML patterns to help teach you the
        ins and outs of accessible markup.
    `,
        link: "http://www.a11ymatters.com/",
        category: "references",
    },
    {
        icon: "caniuse.png",
        name: "Can I Use",
        description: `
        Can I Use will tell you what the browser
        support is like for the latest and greatest
        advances in front-end technologies.
    `,
        link: "https://caniuse.com/",
        category: "references",
    },
    {
        icon: "airbnb.png",
        name: "Airbnb CSS Styleguide",
        description: `
        For a little insight into how a large
        company, such as Airbnb, structures their
        CSS, have a read through their CSS
        styleguide. It will give you plenty of tips
        and tricks.
    `,
        link: "https://github.com/airbnb/css",
        category: "references",
    },
    {
        icon: "airbnb.png",
        name: "Airbnb JavaScript Styleguide",
        description: `
        Like the CSS style guide, Airbnb's
        JavaScript style guide is very insightful.
        They also include their style guide for
        React inside it.
    `,
        link: "https://github.com/airbnb/javascript",
        category: "references",
    },
    {
        icon: "suerherojs.png",
        name: "Superhero.js",
        description: `
        Some resource-ception here with
        Superhero.js. The site has an amazing
        collection of articles, videos and
        presentations on all things JavaScript.
        Definitely worth checking out!
    `,
        link: "http://superherojs.com/",
        category: "references",
    },
    {
        icon: "websitesetupjs.png",
        name: "Website Setup JS Cheat Sheet",
        description: `
        A great, in-depth JavaScript cheat sheet
        that is a one-stop-shop reference guide for
        the language.
    `,
        link: "https://websitesetup.org/javascript-cheat-sheet/",
        category: "references",
    },
    {
        icon: "css tricks.jpg",
        name: "SVG Compendium",
        description: `
        The definitive resource for all things SVG.
        Be sure to bookmark this article and come
        back to it whenever you need.
    `,
        link: "https://css-tricks.com/mega-list-svg-information/",
        category: "references",
    },
    {
        icon: "flexboxcheatsheetmalven.png",
        name: "Flexbox Cheat Sheet",
        description: `
        This is a great visual cheat sheet to help
        you get to grips with Flexbox. Well-worth a
        bookmark!
    `,
        link: "https://flexbox.malven.co/",
        category: "references",
    },
    {
        icon: "gridmalven.png",
        name: "Grid Cheat Sheet",
        description: `
        This CSS Grid cheat sheet will prove a
        valuable resource in the early days of
        building Grid layouts.
    `,
        link: "http://grid.malven.co/",
        category: "references",
    },
    {
        icon: "css tricks.jpg",
        name: "A Complete Guide to Flexbox",
        description: `
        This complete guide explains everything
        about flexbox, focusing on all the different
        possible properties for the parent element
        (the flex container) and the child elements
        (the flex items).
    `,
        link: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        category: "references",
    },
    {
        icon: "frontendmentor.jpg",
        name: "Frontend Mentor",
        description: `
        Improve your front-end coding skills by
        building real projects. Join over 70,000
        developers building projects, reviewing code
        & helping each other get better.
    `,
        link: "https://www.frontendmentor.io",
        category: "challenges",
    },
    {
        icon: "codewars.jpg",
        name: "Codewars",
        description: `
        Build your understanding of JavaScript
        through logic-based challenges. Codewars is
        a great place to improve your
        problem-solving skills.
    `,
        link: "https://www.codewars.com/",
        category: "challenges",
    },
    {
        icon: "30secondsofinterviews.jpg",
        name: "30 Seconds of Interviews",
        description: `
        30 Seconds of Interviews is a great place to
        come if you want to test yourself with
        dev-related questions. Perfect for some last
        minute interview prep!
    `,
        link: "https://30secondsofinterviews.org/",
        category: "challenges",
    },
    {
        icon: "regexone.png",
        name: "RegexOne",
        description: `
        It is always useful to keep your regular
        expression game sharp. You never know when
        you might need it! RegexOne is a great
        practice ground for boosting your skills.
    `,
        link: "https://regexone.com/",
        category: "challenges",
    },
    {
        icon: "jskatas.png",
        name: "ES6 Katas",
        description: `Practice your ES6 by fixing failing tests.`,
        link: "http://es6katas.org/",
        category: "challenges",
    },
    {
        icon: "regexcrossword.svg",
        name: "Regex Crossword",
        description: `
        A fun spin practicing regex. Build your
        skills by playing Regex Crossword.
    `,
        link: "https://regexcrossword.com/",
        category: "challenges",
    },
    {
        icon: "exercism.png",
        name: "Exercism",
        description: `
        If you learn better by problem-solving,
        Exercism is an incredible resource. Out of
        the front-end languages, you can only do
        challenges for JavaScript, but the track
        will help you become a JS master!
    `,
        link: "https://exercism.io/",
        category: "challenges",
    },
    {
        icon: "cssbattle.png",
        name: "CSSBattle",
        description: `
        CSS code-golfing is here! Use your CSS
        skills to replicate targets with the least
        code possible.
    `,
        link: "https://cssbattle.dev/",
        category: "challenges",
    },
    {
        icon: "jsquestions.png",
        name: "JavaScript Questions",
        description: `
        Want to put your JavaSript knowledge to the
        test? This awesome collection of JavaScript
        questions created by Lydia Hallie will
        definitely do that!
    `,
        link: "https://github.com/lydiahallie/javascript-questions#readme",
        category: "challenges",
    },
    {
        icon: "devto.png",
        name: "Dev.to",
        description: `
        Dev.to is a vibrant community of developers
        writing articles and helping each other out.
        The codebase itself is open source, so
        anyone in the community can get involved and
        contribute.
    `,
        link: "https://dev.to/",
        category: "communities",
    },
    {
        icon: "css tricks.jpg",
        name: "CSS Tricks",
        description: `
        CSS Tricks focuses mostly on...you guessed
        it: CSS. However, many articles go beyond
        CSS and it is a truly incredible resource.
    `,
        link: "https://css-tricks.com/",
        category: "communities",
    },
    {
        icon: "hashnode.jpg",
        name: "Hashnode",
        description: `
        Hashnode is a free content creation platform
        and community that allows you to publish
        articles on your own domain and helps you
        stay connected with a growing developer
        community.
    `,
        link: "https://hashnode.com/community",
        category: "communities",
    },
    {
        icon: "freecodecamp.jpg",
        name: "freeCodeCamp News",
        description: `
        freeCodeCamp News is a great place to read
        articles for developers of all levels and
        stacks.
    `,
        link: "https://www.freecodecamp.org/news/",
        category: "communities",
    },
    {
        icon: "smashingmagazine.png",
        name: "Smashing Magazine",
        description: `
        A very popular web design and development
        blog, writing about all things coding and
        designing.
    `,
        link: "https://www.smashingmagazine.com/",
        category: "communities",
    },
    {
        icon: "codrops.png",
        name: "Codrops",
        description: `
        Another blog, writing articles and tutorials
        about latest web trends, techniques and new
        possibilities.
    `,
        link: "http://tympanus.net/codrops/",
        category: "communities",
    },
    {
        icon: "sitepoint.jpg",
        name: "Sitepoint",
        description: `
        A hub for web developers to share their
        passion for building incredible Internet
        things.
    `,
        link: "http://www.sitepoint.com/",
        category: "communities",
    },
    {
        icon: "webdesignerdepot.png",
        name: "Web Designer Depot",
        description: `
        The very best in web design news, views,
        techniques, and resources.
    `,
        link: "http://www.webdesignerdepot.com/",
        category: "communities",
    },
    {
        icon: "frontendfront.png",
        name: "Front End Front",
        description: `
        A place where front-end developers can ask
        questions, share links, and show their work.
    `,
        link: "https://frontendfront.com/",
        category: "communities",
    },
    {
        icon: "heydesigner.png",
        name: "Hey Designer",
        description: `
        Curated articles for designers and front-end
        developers.
    `,
        link: "http://heydesigner.com/",
        category: "communities",
    },
    {
        icon: "designernews.png",
        name: "Designer News",
        description: `
        A community of people in design and tech, to
        discuss and share interesting things in the
        industry.
    `,
        link: "https://www.designernews.co/",
        category: "communities",
    },
    {
        icon: "stackoverflow.png",
        name: "Stack Overflow",
        description: `
        Stack Overflow is the mecca for coding Q&A.
        It is the world's largest developer
        community and is an amazing resource for any
        developer.
    `,
        link: "https://stackoverflow.com/",
        category: "communities",
    },
    {
        icon: "tanirascia.jpg",
        name: "Tania Rascia's Blog",
        description: `
        Posts, tutorials, snippets, musings, and
        everything else. Useful
    `,
        link: "https://www.taniarascia.com/",
        category: "communities",
    },
    {
        icon: "discord.png",
        name: "Discord",
        description: `
        Discord is the easiest way to talk over
        voice, video, and text. Talk, chat, hang
        out, and stay close with communities.
    `,
        link: "https://discord.com/",
        category: "communities",
    },
    {
        icon: "codeproject.png",
        name: "Code Project",
        description: `
        Code Project is a community for computer
        programmers with articles on different
        topics and programming languages such as web
        development, software development, C++,
        Java, and other topics.
    `,
        link: "https://www.codeproject.com/?cat=23",
        category: "communities",
    },
    {
        icon: "vscode.jpg",
        name: "Visual Studio Code",
        description: `
        Visual Studio Code is a code editor
        redefined and optimized for building and
        debugging modern web and cloud applications.
    `,
        link: "https://code.visualstudio.com/",
        category: "tools",
    },
    {
        icon: "atom.png",
        name: "Atom",
        description: `Yet Another Code Editor. <br /><br /><br />`,
        link: "https://atom.io/",
        category: "tools",
    },
    {
        icon: "sublime.png",
        name: "Sublime Text",
        description: `Yet Another Code Editor. <br /><br /><br />`,
        link: "https://sublimetext.com",
        category: "tools",
    },
    {
        icon: "/resources/icons/brackets.jpg",
        name: "Brackets",
        description: `Yet Another Code Editor. <br /><br /><br />`,
        link: "https://brackets.io/",
        category: "tools",
    },
    {
        icon: "codepen.png",
        name: "Codepen",
        description: `
        CodePen is an online community for testing
        and showcasing user-created HTML, CSS and
        JavaScript code snippets.
    `,
        link: "https://codepen.io",
        category: "tools",
    },
    {
        icon: "emmet.svg",
        name: "Emmet",
        description: `
        Emmet is a plugin for many popular text
        editors which greatly improves HTML & CSS
        workflow.
    `,
        link: "https://emmet.io/",
        category: "tools",
    },
    {
        icon: "git.png",
        name: "Git",
        description: `
        Git is a free and open source distributed
        version control system designed to handle
        everything from small to very large projects
        with speed and efficiency.
    `,
        link: "https://git-scm.com/",
        category: "tools",
    },
    {
        icon: "github.png",
        name: "GitHub",
        description: `
        GitHub, Inc. is a subsidiary of Microsoft
        which provides hosting for software
        development and version control using Git.
    `,
        link: "https://www.github.com/",
        category: "tools",
    },
    {
        icon: "gitlab.png",
        name: "GitLab",
        description: `
        GitLab is an open source end-to-end software
        development platform with built-in version
        control, issue tracking, code review, CI/CD,
        and more
    `,
        link: "https://about.gitlab.com/",
        category: "tools",
    },
    {
        icon: "figma.png",
        name: "Figma",
        description: `
        Figma is a vector graphics editor and
        prototyping tool which is primarily
        web-based, with additional offline features
        enabled by desktop applications for macOS
        and Windows.
    `,
        link: "https://www.figma.com/",
        category: "tools",
    },
    {
        icon: "insomnia.jpg",
        name: "Insomnia",
        description: `
        Insomnia is a great application to help you
        work with APIs as a developer. It's really
        easy to customize to suit your own workflows
        and preferences.
    `,
        link: "https://insomnia.rest/",
        category: "tools",
    },
    {
        icon: "codesandbox.png",
        name: "CodeSandbox",
        description: `
        CodeSandbox is an amazing tool to help you
        prototype ideas with code. Quickly spin up
        new sandboxes with pre-configured templates
        and easily share your code with others.
    `,
        link: "https://codesandbox.io/",
        category: "tools",
    },
    {
        icon: "hyper.png",
        name: "Hyper",
        description: `
        Hyper is a beautiful and fast Electron-based
        terminal created by the team at Vercel. It's
        fully extensible and easy to customize to
        help speed up your workflow.
    `,
        link: "https://hyper.is/",
        category: "tools",
    },
    {
        icon: "animatecss.png",
        name: "Animate.css",
        description: `
        Just-add-water CSS animations. A simple CSS
        library that lates you add animations with
        ease.
    `,
        link: "http://daneden.github.io/animate.css/",
        category: "css",
    },
    {
        icon: "responsivegridsystem.png",
        name: "Responsive Grid System",
        description: `
        A quick, flexible and easy fluid grid for
        spectacularly easy responsive web design.
    `,
        link: "http://www.responsivegridsystem.com/",
        category: "css",
    },
    {
        icon: "cssforthosewhohatecss.png",
        name: "CSS for People Who Hate CSS",
        description: `
        Excellent guide on how to write better,
        cleaner and more reusable CSS code.
    `,
        link: "http://paulcpederson.com/articles/css-for-people-who-hate-css",
        category: "css",
    },
    {
        icon: "clippy.png",
        name: "Clippy",
        description: `
        A small tool to help you using the new and
        powerful clip-path property.
    `,
        link: "http://bennettfeely.com/clippy/",
        category: "css",
    },
    {
        icon: "cubic.png",
        name: "Cubic-bezier function generator",
        description: `
        A tool for visually generating timing
        animation functions to use in CSS
        transitions and animations.
    `,
        link: "http://cubic-bezier.com/#.17,.67,.83,.67",
        category: "css",
    },
    {
        icon: "csseasingfunctiond.png",
        name: "CSS easing functions",
        description: `
        An amazing collection of easing functions bo
        be used in CSS transitions and animations.
    `,
        link: "http://easings.net/",
        category: "css",
    },
    {
        icon: "animista.png",
        name: "Animista",
        description: `
        Animista is a place where you can play with
        a collection of ready to use CSS animations,
        tweak them and download only those you will
        actually use.
    `,
        link: "https://animista.net/",
        category: "css",
    },
    {
        icon: "freefrontend.jpg",
        name: "Free Frontend",
        description: `
        Free hand-picked HTML, CSS and JavaScript
        (jQuery, React, Vue) code examples,
        tutorials and articles.
    `,
        link: "https://freefrontend.com/",
        category: "css",
    },
    {
        icon: "purecss.png",
        name: "Pure.css",
        description: `
        A set of small, responsive CSS modules that
        you can use in every web project.
    `,
        link: "https://purecss.io/",
        category: "css",
    },
    {
        icon: "keyframes.png",
        name: "Keyframes.app",
        description: `
        Dead simple visual tools to help you
        generate CSS for your projects.
    `,
        link: "https://keyframes.app/",
        category: "css",
    },
    {
        icon: "loadingio.png",
        name: "LOADING.IO",
        description: `
        Service for making ajax loaders / loading
        gifs / preloaders and animated icons, live
        background, animated text in GIF / SVG /
        APNG / CSS.
    `,
        link: "https://loading.io/",
        category: "css",
    },
    {
        icon: "cssvalues.png",
        name: "CSS Values",
        description: `
        Web app to search the syntax and all
        possible values for any valid CSS property.
    `,
        link: "https://cssvalues.com/",
        category: "css",
    },
    {
        icon: "normalizecss.png",
        name: "Normalize.css",
        description: `
        Normalize.css makes browsers render all
        elements more consistently and in line with
        modern standards.
    `,
        link: "https://necolas.github.io/normalize.css/",
        category: "css",
    },
    {
        icon: "fancyborradius.jpg",
        name: "fancy-border-radius",
        description: `
        A visual generator to build organic looking
        shapes with the help of CSS3 border-radius
        property.
    `,
        link: "https://9elements.github.io/fancy-border-radius/",
        category: "css",
    },
    {
        icon: "cssboxshadowgen.png",
        name: "CSS Box Shadow Generator",
        description: `
        Generate CSS3 Box Shadow code for your Div,
        Frame, Buttons or any other HTML element
        with Outline, and Inset (inner) type shadow
        effects
    `,
        link: "https://brumm.af/shadows",
        category: "css",
    },
    {
        icon: "reactjs.png",
        name: "React",
        description: `
        React is a JavaScript library from Facebook.
        It re-defined how front-end developers build
        the interactive user interfaces. Now a very
        mature library, it has a strong ecosystem of
        developers and packages.
    `,
        link: "https://reactjs.org/",
        category: "frameworks",
    },
    {
        icon: "angular.png",
        name: "Angular",
        description: `
        Angular is a TypeScript-based open-source
        web application framework led by the Angular
        Team at Google and by a community of
        individuals and corporations.
    `,
        link: "https://angular.io/",
        category: "frameworks",
    },
    {
        icon: "tailwindcss.png",
        name: "Tailwind CSS",
        description: `
        Tailwind CSS is a highly customizable,
        low-level CSS framework that gives you all
        of the building blocks you need to build
        bespoke designs.
    `,
        link: "https://tailwindcss.com/",
        category: "frameworks",
    },
    {
        icon: "vuejs.png",
        name: "Vue.js",
        description: `
        Vue.js is a very popular JavaScript
        framework. It offers a beautiful syntax and
        is a pleasure to work with. It has a strong
        ecosystem around it and so is a great choice
        on the front-end.
    `,
        link: "https://vuejs.org/",
        category: "frameworks",
    },
    {
        icon: "nextjs.jpg",
        name: "Next.js",
        description: `
        Next.js is a React framework that helps you
        build server-side rendered applications with
        zero configuration. There are lots of
        benefits to building Next applications, so
        it's well worth checking out.
    `,
        link: "https://nextjs.org/",
        category: "frameworks",
    },
    {
        icon: "gatsby.png",
        name: "GatsbyJS",
        description: `
        Gatsby is a free and open-source framework
        based on React that helps developers build
        blazing-fast websites and apps
    `,
        link: "https://www.gatsbyjs.org/",
        category: "frameworks",
    },
    {
        icon: "bootstrap.jpg",
        name: "Bootstrap",
        description: `
        Bootstrap is the most well-known front-end
        component library. It's a very well-written
        tool, perfect for rapid prototyping or web
        development.
    `,
        link: "https://getbootstrap.com/",
        category: "frameworks",
    },
    {
        icon: "foundation.jpg",
        name: "Foundation",
        description: `
        Foundation is another well-written front-end
        framework. It's very simple to use and you
        can build complex interfaces in no time at
        all.
    `,
        link: "https://foundation.zurb.com/",
        category: "frameworks",
    },
    {
        icon: "materialize.png",
        name: "Materialize",
        description: `
        If you like Google's Material Design, then
        you'll love Materialize. It's a great
        library for quick development using Material
        Design principles.
    `,
        link: "https://materializecss.com/",
        category: "frameworks",
    },
    {
        icon: "bulma.png",
        name: "Bulma",
        description: `
        Bulma is a nice CSS framework based on
        Flexbox. It makes building mobile-first,
        responsive layouts is a breeze.
    `,
        link: "https://bulma.io/",
        category: "frameworks",
    },
    {
        icon: "jquery.png",
        name: "jQuery",
        description: `
        With the massive adoption of JS frameworks,
        the need for jQuery in new projects is
        dwindling. But, for new front-end developers
        and for building smaller sites, it is still
        very much worthwhile to learn.
    `,
        link: "https://jquery.com/",
        category: "frameworks",
    },
    {
        icon: "reactnative.png",
        name: "React Native",
        description: `
        React Native allows developers to build out
        native mobile apps in JavaScript. It is a
        very powerful tool, especially for small
        teams building out their first apps.
    `,
        link: "https://facebook.github.io/react-native/",
        category: "frameworks",
    },
    {
        icon: "parsleyjs.png",
        name: "Parsley",
        description: `
        Parsley allows you to add extremely simple
        client-side validations to your forms that
        are easily customizable
    `,
        link: "http://parsleyjs.org/",
        category: "frameworks",
    },
    {
        icon: "dribbble.png",
        name: "Dribbble",
        description: `
        The ultimate design inspiration resource,
        not just for web design. The show and tell
        for designers.
    `,
        link: "https://dribbble.com/",
        category: "inspiration",
    },
    {
        icon: "landbook.jpg",
        name: "Land Book",
        description: `
        Product landing page gallery. My #1
        inspiration resource when I build a landing
        page.
    `,
        link: "http://land-book.com/",
        category: "inspiration",
    },
    {
        icon: "onepagelove.png",
        name: "One Page Love",
        description: `
        The ultimate showcase of delicious One Page
        websites.
    `,
        link: "https://onepagelove.com/",
        category: "inspiration",
    },
    {
        icon: "siteinspire.png",
        name: "Site Inspire",
        description: `
        A showcase of the finest web and interactive
        design. Currently over 4900 websites.
    `,
        link: "http://www.siteinspire.com/",
        category: "inspiration",
    },
    {
        icon: "calltoidea.png",
        name: "Call To idea",
        description: `
        Get quick inspiration for common website
        elements such as forms, sliders,
        navigations, etc.
    `,
        link: "http://www.calltoidea.com/",
        category: "inspiration",
    },
    {
        icon: "mediaqueries.png",
        name: "Media Queries",
        description: `
        A collection of responsively designed
        websites for inspiration.
    `,
        link: "http://mediaqueri.es/",
        category: "inspiration",
    },
    {
        icon: "awwwards.png",
        name: "Awwwards",
        description: `
        Awwwards has an incredible gallery of
        websites to look around. The sites on here
        are pushing the boundaries of what's
        possible on the web. So it's a great place
        to get ideas.
    `,
        link: "https://www.awwwards.com/",
        category: "inspiration",
    },
    {
        icon: "",
        name: "",
        description: ``,
        link: "",
        category: "inspiration",
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
