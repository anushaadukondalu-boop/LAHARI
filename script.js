const data = {

    "B.Com General": {
        "English": {
            "English by Nisa - Part A": "https://youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D",
            "English by Nisa - Part B": "https://youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8"
        },
        "Cost Control and Management Accounting": {
            "Hasham Ali Khan Part 1": "https://youtube.com/playlist?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v",
            "Hasham Ali Khan Part 2": "https://youtube.com/playlist?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog"
        },
        "Theory and Practice of GST": {
            "GST - Hasham Ali Khan": "https://youtube.com/playlist?list=PLWJDzVuPkXAkNpdAIqufc2JxDoxjENrsj"
        }
    },

    "B.Com Honours": {
        "International Finance": {
            "Hasham Ali Khan": "https://youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf"
        }
    },

    "B.Com Computer Applications": {
        "Cybersecurity": {
            "Cybersecurity Full Course": "https://youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo"
        }
    },

    "B.Com Business Analytics": {
        "Research Methodology & Project": {
            "Devika’s Commerce": "https://youtube.com/playlist?list=PLLhSIFfDZcUWRlgiXMkd1rNeLSz1You4O"
        }
    }

};

let currentLevel = "course";
let currentCourse = "";
let currentSubject = "";

function loadCourses() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    for (let course in data) {
        let btn = document.createElement("button");
        btn.innerText = course;
        btn.onclick = () => loadSubjects(course);
        content.appendChild(btn);
    }

    document.getElementById("backBtn").style.display = "none";
}

function loadSubjects(course) {
    currentCourse = course;
    currentLevel = "subject";

    const content = document.getElementById("content");
    content.innerHTML = "";

    for (let subject in data[course]) {
        let btn = document.createElement("button");
        btn.innerText = subject;
        btn.onclick = () => loadLinks(subject);
        content.appendChild(btn);
    }

    document.getElementById("backBtn").style.display = "block";
}

function loadLinks(subject) {
    currentSubject = subject;
    currentLevel = "links";

    const content = document.getElementById("content");
    content.innerHTML = "";

    let links = data[currentCourse][subject];

    for (let title in links) {
        let btn = document.createElement("button");
        btn.innerText = title;
        btn.onclick = () => window.open(links[title], "_blank");
        content.appendChild(btn);
    }
}

function goBack() {
    if (currentLevel === "links") {
        loadSubjects(currentCourse);
    } else if (currentLevel === "subject") {
        loadCourses();
    }
}

loadCourses();
