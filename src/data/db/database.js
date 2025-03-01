import Mock from "../mock";

const database = {
  teamMembers: [
    { name: "Bogdan Bitfoi", user: "bitfoi" },
    { name: "Vlad Blaj", user: "blaj" }
  ],
  companyInformation: {
    companyName: "Bitlads Software",
    aboutContent:
      "Everything we do is about you. We create industry standard IT Software. Inspire us with your idea, sit back, and let us bring it to life. ",
    socialLinks: {
      facebook: "https://www.facebook.com/bogdan.bitfoi",
      twitter: "https://twitter.com",
      pinterest: "",
      behance: "",
      linkedin: "",
      dribbble: "",
      github: "https://github.com"
    },
    brandImage: "/images/brand-image.png"
  },
  bitfoi_information: {
    name: "Bogdan Bitfoi",
    age: "",
    phone: "",
    nationality: "Romanian",
    language: "Romanian, English, French",
    email: "bogdan.bitfoi@gmail.com",
    address: "Cluj-Napoca, Cluj",
    freelanceStatus: "Available",
    aboutImage: "/images/about-image-bitfoi.png",
    aboutImageLg: "/images/about-image-bitfoi-lg.png",
    cvfile: "/files/BogdanBitfoi.pdf",
    aboutMe: "",
    skills: [
      {
        title: "Java",
        value: 95
      },
      {
        title: "ReactJS",
        value: 20
      },
      {
        title: "Spring",
        value: 90
      },
      {
        title: "Python",
        value: 40
      },
      {
        title: "Microsoft .NET",
        value: 40
      }
    ],
    experience: {
      workingExperience: [
        {
          id: 1,
          year: "2019 - Present",
          position: "Java Software Engineer",
          company: "Aera Technology",
          details:
            "Worked on Aera's own product, helping clients mainly with supply-chain and AI-driven decisions for a better company " +
            "(such as cuts and investments in a specific department)."
        },
        {
          id: 2,
          year: "2018 - 2019",
          position: "Java Software Engineer",
          company: ".msg Systems",
          details:
            "Java developer working on a product called iRe - Intelligent Reinsurance." +
            "The product is built on a micro-service architecture, and handles use cases such as uploading Excel representing insurance premiums," +
            " uploads of losses and reinsurance programs (include formulas for splitting the bill amongst multiple other external companies) and all accounting related to the operations."
        },
        {
          id: 3,
          year: "2016 - 2018",
          position: "Software Engineer",
          company: "Hewlett Packard Enterprise",
          details:
            "Software engineer for the Server Automation product.The product manages data centers - thousands of machines - by performing automatic tasks on them," +
            " such as operating system " +
            "installation, operating system and software patching etc."
        },
        {
          id: 4,
          year: "2015 - 2016",
          position: ".NET Software Developer",
          company: "Evozon Systems SRL",
          details: "Software Development"
        }
      ],
      educationExperience: [
        {
          id: 1,
          year: "2015 - 2017",
          graduation: "Master in Software Engineering",
          university: "Babes Bolyai University, Cluj-Napoca",
          details:
            "Thesis: Efficiency differences between Docker containers and Virtual Machines. A series of benchmarks to determine which technology is better in which cases."
        },
        {
          id: 2,
          year: "2012 - 2015",
          graduation:
            "Bachelor Degree, Computer Science English Specialization",
          university:
            "Babes Bolyai University, Faculty of Mathematics and Computer Science",
          details:
            "Thesis: Shading Algorithms in nVIDIA's CG. A 3D world built in Unity, with objects that use shaders written by me. " +
            "Some of these shaders were used to compute the ambient, diffuse or specular lighting. " +
            "Others were used to normal map and texture map objects' surfaces to add an illusion of complexity of the polygons."
        },
        {
          id: 3,
          year: "2008 - 2012",
          graduation: "High School Diploma",
          university: "Tiberiu Popoviciu HighSchool, Cluj-Napoca",
          details: "Specialization in Software Engineering."
        }
      ]
    }
  },
  blaj_information: {
    name: "Vlad Blaj",
    age: "",
    phone: "",
    nationality: "Romanian",
    language: "Romanian, English, German",
    email: "vlad.blaj@bitladssoftware.com",
    address: "Cluj, Cluj-Napoca",
    freelanceStatus: "Available",
    aboutImage: "/images/about-image-vlad.jpg",
    aboutImageLg: "/images/about-image-vlad-lg.jpg",
    cvfile: "/files/VladBlajCV.pdf",
    aboutMe:
      "Hi there, I'm Vlad Blaj - a passionate developer with over 6 years experience in web development and mobile development. " +
      "I knew at an early age I wanted to be part of this industry. " +
      "Since then I've been working on improving myself becoming more efficient in the things I do and I’m having a lot of fun along the way. " +
      "I am committed to the goals I set, well organized and I want to help you grow your business.",
    skills: [
      {
        title: "Java",
        value: 90
      },
      {
        title: "ReactJS",
        value: 90
      },
      {
        title: "React Mobile",
        value: 70
      },
      {
        title: "Spring",
        value: 80
      },
      {
        title: "Python",
        value: 50
      },
      {
        title: "Redux",
        value: 95
      }
    ],
    experience: {
      workingExperience: [
        {
          id: 1,
          year: "2019 - Present",
          position: "Full Stack Software Developer",
          company: "Aera Technology",
          details: `Aera is a Cognitive Operating System that connects you with your business and autonomously
orchestrates your operations. It enables this by creating processes with a drag and drop system
which transform to executable programs. \n
● Improved process throughput execution by 40% by creating a Scheduler capable of
executing high amounts of tasks across multiple nodes spread across multiple time zones.\n
● Optimized processes execution time by an average of 60% by creating a Java Profiler
capable of analyzing and gathering data about different Aera Client Processes.\n
Skills: Spring, React, Spring Boot, React, Typescript, Redux, Apache Cassandra, Kafka, Redis,
Quartz, AWS, Microservices`
        },
        {
          id: 2,
          year: "2017 - 2019",
          position: "Software Developer",
          company: ".msg Systems",
          details: `Designed and developed a Web and Mobile Application used by Hilti’s sales staff before, during
and after customer visits to identify potential agreements and contact Hilti customers to evaluate
and redefine existing agreements.\n 
● Increased KPIs target values by 30% by creating a KPI aggregator tool for different
sales and prices.\n
Skills: Java 8, Spring Boot, React, Hana Cloud Platform, Apache Olingo, SAP HANA, Junit, Mockito,
JIRA, Bamboo, Flyway, Swagger, Hibernate, Microservices `
        },
        {
          id: 3,
          year: "2014 - 2017",
          position: "Software Developer",
          company: ".msg Systems",
          details: `The client needed a tool to view filter and process candidates for different hiring positions.
Previously Excel sheets were used to aggregate and process candidates. I developed and
optimized a React Application which can process large number of candidates.\n 
● Increased the hiring speed process and the number of candidates which could be
processed during a hiring period by 50%.\n
Skills: Java, Spring, Hibernate, React, Liferay, Selenium, MySql `
        }
      ],
      educationExperience: [
        {
          id: 1,
          year: "2015 - 2017",
          graduation: "Software engineering Masters Degree",
          university: "Babes Bolyai University, Cluj-Napoca",
          details: `Thesis: Improved "Detecting Energy Leak Bugs in Android Applications"\n 
          ● Optimized and increased the static analysis speed by more than 40%. \n 
          Skills: Java, ANTLR, MySql`
        },
        {
          id: 2,
          year: "2012 - 2015",
          graduation:
            "Bachelor Degree, Computer Science English Specialization",
          university:
            "Babes Bolyai University, Faculty of Mathematics and Computer Science",
          details: `Thesis: Detecting Energy Leak Bugs in Android Applications.\n
I developed a program using Java 8 which will detect and signal the presence of no-sleep-energybugs (battery drain bugs). It is a static analysis of the source code of an android project.\n
● Reduced battery usage for different Android Applications by more than 15%.\n
Skills: ANTLR 4.5, IntelliJ Plugin Development API, Java`
        },
        {
          id: 3,
          year: "2008 - 2011",
          graduation: "High School Diploma",
          university: "Andrei Saguna College, Brasov",
          details:
            "Intensive Computer Science Mathematics Technology of communication and information."
        }
      ]
    }
  },
  services: [
    {
      title: "Server Side Development",
      icon: "color-pallet",
      details:
        "We deliver highly scalable programs tailored for each customers use case. We can work with a handful of databases from relational to non relational." +
        " We can make use of different event distributed streaming platforms and by following a strict code architecture we can create highly robust programs."
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "React and Java(Spring) are our way to go programming languages. We provide high quality services ranging from developing a responsive website from scratch to optimizing code" +
        "for search engine rankings. We can quickly make use of any new tool with which we were not previously accustomed wit. We have a lot of experience in the area " +
        "of dynamic front-end apps or single page application apps."
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Thanks to React Native we can deliver apps for both iOS and Android in no time. Thanks to the available technologies it is painless to create Interactive UIs for a variety of" +
        " platforms including Windows."
    }
  ],
  reviews: [
    {
      id: 1,
      content:
        "Ever since I met Bogdan, I was amazed with the ease and straightforwardness with which he would solve the most complex of problems, computer science-related and not only." +
        "He has an unmatched capability to decompose, analyse and conclude any issue, no matter the degree of difficulty or field of debate..",
      author: {
        name: "Iuliu Visovan",
        designation: "React Native Developer, Amsterdam Platform Creation."
      }
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Samson Music",
      subtitle: "Music Organizing Youtube App.",
      imageUrl: "/images/portfolio-image-1.png",
      largeImageUrl: ["/images/portfolio-image-1-lg.png"],
      url: "https://github.com/SMash93/samson"
    },
    {
      id: 2,
      title: "Trading Bot",
      subtitle: "Binance Trading Bot.",
      imageUrl: "/images/portfolio-image-2.png",
      largeImageUrl: ["/images/portfolio-image-2.png"],
      url: "https://github.com/SMash93/crypto-bot"
    }
  ],
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020"
    }
  ],
  contactInfo: {
    phoneNumbers: ["+40-754-921-191", "+40-756-777-033"],
    emailAddress: [
      "vlad.blaj@bitladssoftware.com",
      "bogdan.bitfoi.dev@gmail.com"
    ],
    address: "Cluj-Napoca, Cluj, Romania"
  }
};
Mock.onGet("/api/team-members").reply(() => {
  const response = database.teamMembers;
  return [200, response];
});

Mock.onGet("/api/information").reply(config => {
  const response = database[`${config.params.user}_information`];
  return [200, response];
});
Mock.onGet("/api/company-information").reply(() => {
  const response = database.companyInformation;
  return [200, response];
});

Mock.onGet("/api/services").reply(() => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(() => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(() => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(() => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(() => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(() => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(() => {
  const response = database.contactInfo;
  return [200, response];
});
