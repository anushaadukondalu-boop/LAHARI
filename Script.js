const data = {

    "B.Com General": {
        "English": {
            "English by Nisa - Part A":
                "https://youtube.com/playlist?list=PLUJXB7al70IB4mDWQIPyriRRylnwjPU2D",
            "English by Nisa - Part B":
                "https://youtube.com/playlist?list=PLUJXB7al70IBdkE4oiI4d40mycUq4JnQ8",
            "Sara’s Learning Point":
                "https://youtube.com/playlist?list=PLjNdhMBtsxpwAyVG7o59hqSCUYKKHvz-Y",
            "Dandu Venkatramulu":
                "https://youtube.com/playlist?list=PLyjVm5GfnmY6rkPqkpH7psUaOBb44ShwS",
            "Educare":
                "https://youtube.com/playlist?list=PLbBCm7TkLCKJtzjewd_X4NrbTBd4eCy_M",
            "PCV English":
                "https://youtube.com/playlist?list=PLldWy7gu4R757w2-mkgFz7HDzDVhp-GkT"
        },

        "Telugu": {
            "Dandu Venkatramulu":
                "https://youtube.com/playlist?list=PLyjVm5GfnmY6UUa5iLn-GQNPkW7y1CeMh",
            "Matrubhasha":
                "https://youtube.com/playlist?list=PL7noKDJp4ZRKVkWtOlT6edyqABvC-zjNI"
        },

        "Cost Control and Management Accounting": {
            "Hasham Ali Khan - Part 1":
                "https://youtube.com/playlist?list=PLWJDzVuPkXAllmGP19jfhneNUdgOy1g2v",
            "Hasham Ali Khan - Part 2":
                "https://youtube.com/playlist?list=PLWJDzVuPkXAlg4vnE3ZhB7UVp9JWl6Mog",
            "Devika’s Commerce":
                "https://youtube.com/playlist?list=PLLhSIFfDZcUVaBuGIMvQFx1OVGzfhbPeC"
        },

        "Theory and Practice of GST": {
            "Hasham Ali Khan":
                "https://youtube.com/playlist?list=PLWJDzVuPkXAkNpdAIqufc2JxDoxjENrsj"
        },

        "Accounting Standards": {
            "Devika’s Commerce":
                "https://youtube.com/playlist?list=PLLhSIFfDZcUXO81uWFy_F6O4ZX0JfTYkV",
            "Hasham Ali Khan":
                "https://youtube.com/playlist?list=PLWJDzVuPkXAmAI6CfaLfYpQVvQFhXzxC6"
        },

        "Research Methodology & Project": {
            "Devika’s Commerce":
                "https://youtube.com/playlist?list=PLLhSIFfDZcUWRlgiXMkd1rNeLSz1You4O",
            "Lakshya Commerce":
                "https://youtube.com/playlist?list=PLjMjkIR4-dvIAvboLjtq6sSi_1_wk2VgD",
            "Pooja Singh":
                "https://youtube.com/playlist?list=PLk3poRqYftlhDGto5oSxeNeFWHzajbVuA"
        }
    },

    "B.Com Honours": {
        "English": {},

        "International Finance": {
            "Hasham Ali Khan":
                "https://youtube.com/playlist?list=PLWJDzVuPkXAnNpRjN6InK65R7ndvpYZUf"
        },

        "Cost Control and Management Accounting": {},
        "Theory and Practice of GST": {},
        "Accounting Standards": {},
        "Research Methodology & Project": {}
    },

    "B.Com Computer Applications": {
        "English": {},
        "Telugu": {},
        "Cost Control and Management Accounting": {},
        "Theory and Practice of GST": {},

        "Cybersecurity": {
            "Cybersecurity Full Course":
                "https://youtube.com/playlist?list=PLtfg0YD2YYUQMZp4bRkeZI0JXWHGqh8vo"
        },

        "Research Methodology & Project": {}
    },

    "B.Com Business Analytics": {
        "English": {},
        "Telugu": {},
        "Cost Control and Management Accounting": {},
        "Theory and Practice of GST": {},

        "Business Application of Emerging Technologies": {},

        "Research Methodology & Project": {}
    }
};


let currentLevel = "course";
let currentCourse = "";

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
    currentLevel = "links";

    const content = document.getElementById("content");
    content.innerHTML = "";

    let links = data[currentCourse][subject];

    if (Object.keys(links).length === 0) {
        content.innerHTML = "<h3>No links added yet.</h3>";
        return;
    }

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
