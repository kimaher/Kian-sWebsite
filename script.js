
addEventListener('DOMContentLoaded', init);

function init(){
    const about = document.querySelector('#about');
    const project = document.querySelector('#projects');
    const linkedin = document.querySelector('#linkedin');
    const github = document.querySelector('#github');
    const resume = document.querySelector('#resume');
    about.addEventListener('click', doAbout);
    project.addEventListener('click', doProjects);
    linkedin.addEventListener('click', () => {
        window.open('https://www.linkedin.com/in/kian-maher-a07175275/', '_blank');
    });
    github.addEventListener('click', () => {
        window.open('https://github.com/kimaher', '_blank');
    });
    resume.addEventListener('click', () => {
        window.open('Resume.pdf', '_blank');
    });
}

function doAbout(){
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML = `
        <h2>About Me</h2>
        <p>I’m an aspiring software engineer with a solid foundation in C, C++, Java, and modern web development tools. I’m especially passionate about the intersection of machine learning, artificial intelligence, and computer security—fields where technology can both innovate and safeguard. As I approach graduation, I’m looking to launch my career in an entry-level software engineering role where I can build impactful systems and continue growing in these cutting-edge domains.</p>
        <section class="education">
            <h2>Education</h2>
            <p><strong>University of California, San Diego</strong> — B.S. in Computer Science<br>
            <em>Expected Graduation: 2026</em></p>
            <p>Transferred from UC Davis in 2024 after completing foundational coursework in Computer Science and Engineering.</p>
            <p><strong>Relevant Coursework:</strong></p>
            <ul>
                <li>Data Structures & Algorithms</li>
                <li>Computer Architecture</li>
                <li>Operating Systems</li>
                <li>Probabilistic Models</li>
                <li>Machine Learning</li>
                <li>Circuits and Systems</li>
                <li>Software Engineering</li>
            </ul>
        </section>
        `;
}

function doProjects(){
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.innerHTML = `
<section class="projects">
  <h2>Projects</h2>
  <ol class="project-list">

    <li>
      <a href="https://github.com/cse110-sp25-group29/cse110-sp25-group29" target="_blank">Business Card Editor</a>
      <ul>
        <li>Built an interactive dual-canvas editor with JavaScript, HTML5 Canvas, and DOM manipulation for dynamic card design featuring text, images, and shapes.</li>
        <li>Implemented persistent storage by serializing card data to JSON and using LocalStorage, with import/export support for JSON, JPEG, and PDF formats via PDFKit.</li>
        <li>Built drag-and-drop and file dialog upload features using the File API, including validation and error handling for intuitive user interaction.</li>
      </ul>
    </li>

    <li>
      <h3>Coding Tutorial Website: <em>Front-end Developer</em></h3>
      <ul>
        <li>Developed a coding tutorial website to teach middle schoolers how to code using JavaScript, HTML, and CSS, with SASS to streamline and simplify the codebase.</li>
        <li>Implemented client-side interactions with a backend database using SQL/NoSQL queries to store and retrieve user progress and tutorial data.</li>
        <li>Delivered a fully functional website incrementally through iterative development cycles, following the Software Development Life Cycle (SDLC) phases, including planning, design, development, testing, and deployment, ensuring the project met high-quality standards.</li>
      </ul>
    </li>
  </ol>
</section>
        `;
}