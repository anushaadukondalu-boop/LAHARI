<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>B.Com Semester 6 Learning Portal</title>

    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>

<body>

<header>
    <h1>B.Com Semester 6 – Learning Portal</h1>
    <p>Distraction-Free YouTube Learning by Syllabus</p>
</header>

<nav>
    <ul>
        <li><a href="#" onclick="loadSection('ccma')">CCMA</a></li>
        <li><a href="#" onclick="loadSection('gst')">GST</a></li>
        <li><a href="#" onclick="loadSection('research')">Research</a></li>
        <li><a href="#" onclick="loadSection('english')">English</a></li>
        <li><a href="#" onclick="loadSection('telugu')">Telugu</a></li>
    </ul>
</nav>

<main>

    <section id="welcome">
        <h2>Welcome Students</h2>
        <p>
            Select a subject above to start learning strictly according to
            B.Com Semester 6 syllabus without YouTube distractions.
        </p>
    </section>

    <section id="videoSection" style="display:none;">
        <h2 id="sectionTitle"></h2>
        <div id="videoContainer" class="video-container"></div>
    </section>

</main>

<footer>
    <p>© 2026 B.Com Learning Portal | Videos Powered by YouTube</p>
</footer>

<script src="script.js"></script>

</body>
</html>
