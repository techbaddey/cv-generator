<template>
  <div class="cv-outter">
    <div id="cv-example" style="font-family: 'Quicksand', sans-serif">
      <div class="cv-left">
        <div class="cv-header">
          <h1>Oyinkansola Shoroye</h1>
          <p class="job-title">Frontend Developer</p>
          <div class="cv-header-contact">
            <div class="cv-header-contact__item">
              <PhoneIcon fillColor="#999999" :size="16" />
              <p>+234 812601550</p>
            </div>
            <div class="cv-header-contact__item">
              <EmailIcon fillColor="#999999" :size="16" />
              <p>oyinkansolashoroye@gmail.com</p>
            </div>
            <div class="cv-header-contact__item">
              <LocationIcon fillColor="#999999" :size="16" />
              <p>Lagos, Nigeria</p>
            </div>
          </div>
        </div>
        <div class="cv-body">
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Summary</h2>
            </div>
            <p class="cv-section__summary">
              I have a track record of developing complex and user-centric UIs
              and web apps, with 2+ years of professional experience. I have
              expertise in utilizing the latest frontend technologies and
              frameworks. Additionally, I have successfully completed projects
              for clients, resulting in a 20% increase in user satisfaction and
              a 15% increase in page loading speed.
            </p>
          </section>
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Professional Experience</h2>
            </div>
            <div class="experiances-items">
              <div class="experiance-item">
                <div class="experiance-item-header">
                  <h3>Frontend Developer Intern</h3>
                  <p>2022 - 2023</p>
                </div>
                <div class="experiance-item-subheader">
                  <h3>BuildLab Africa</h3>
                  <p>Lagos, Nigeria</p>
                </div>
                <div class="experiance-item-details">
                  <p>
                    Developed a custom online shopping web application using React that allowed individuals to shop for groceries without leaving their homes.
                  </p>
                  <p>
                    Collaborated with a remote team of 10+ product designers, managers, and developers to develop and refine the web applications. 
                  </p>
                  <p>
                    Participated in design review sessions and daily scrum meetings to discuss project milestones, requirements, and progress. 
                  </p>
                  <p>
                    Utilized Git version control to maintain and update code on a daily basis, while ensuring web accessibility and best practices in SEO. 
                  </p>
                  <p>
                    Achieved 95% customer satisfaction rate through responsive design and user-friendly navigation. 

                  </p>
                  <p>
                    Enhanced changes to a custom analytics system that improved data accuracy, leading to a 15% increase in customer engagement.

                  </p>
                </div>
              </div>
              <div class="experiance-item">
                <div class="experiance-item-header">
                  <h3>Freelancer</h3>
                  <p>2020 - 2023</p>
                </div>

                <div class="experiance-item-details">
                  <p>
                    Developed and maintained over 10+ websites using HTML, CSS, tailwind CSS,  JavaScript, React and VueJS.
                  </p>
                  <p>
                    Created responsive web designs using media queries and CSS to ensure cross-browser compatibility and improve usability across all devices.

                  </p>
                  <p>
                    Optimized existing websites for better performance, reducing loading times by an average of 20%.

                  </p>
                  <p>
                    Employed version control systems such as Git to manage code changes and collaborate with other developers.

                  </p>
                  <p>
                    Identified, analyzed, and resolved technical issues to ensure optimal website performance.

                  </p>
                  <p>
                    Implemented new features and corrected bugs in accordance with client requests.

                  </p>
                  
                </div>
              </div>
            </div>
          </section>
          <section class="cv-section" id="page-break">
            <div class="cv-section-title">
              <h2>Projects</h2>
            </div>
            <div class="project-items">
              <div class="project-item">
                <div class="project-item-header">
                  <h3>MyDomot</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Agritech Solution</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Website application development 
                  </p>

                  <p>Languages: HTML, CSS, JavaScript</p>
                  <p>
                    Front-End Technology: React JS
                  </p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>Admin Dashboard</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>custom e-commerce</h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Web application development 
                  </p>

                  <p>Language: HTML, CSS, JavaScript</p>
                  <p>
                    Front-End TechnologY: React.js
                  </p>
                </div>
              </div>
              <div class="project-item">
                <div class="project-item-header">
                  <h3>CV Generator</h3>
                </div>
                <div class="project-item-subheader">
                  <h4>Service as a Solution </h4>
                </div>
                <div class="project-item-details">
                  <p class="project-item-details-title">
                    Web application development 
                  </p>

                  <p>Language: HTML, CSS, JavaScript</p>
                  <p>Front-End Technologies: Vue JS</p>
                </div>
              </div>
            </div>
          </section>
          <section class="cv-section">
            <div class="cv-section-title">
              <h2>Education</h2>
            </div>
            <div class="experiances-items">
              <div class="experiance-item">
                <div class="experiance-item-header smaller-header">
                  <h3>Diploma degree, Frontend Engineering</h3>
                  <p>2022 - 2023</p>
                </div>
                <div class="experiance-item-subheader smaller-header">
                  <h3>AltSchool Africa</h3>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="cv-right" style="background-color: #fffasfsafas">
        <div class="cv-picture">
          <img
            style="border-radius: 50%"
            :src="require('@/assets/picture.jpeg')"
            alt="picture"
          />
        </div>
        <div class="cv-body">
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Skills</h2>
            </div>
            <div class="skill-items">
              <div class="skill-item">
                <div class="skill-item-title">
                  <h6>Tools</h6>
                </div>
                <div class="skill-item-details">
                  <p>JavaScript</p>
                  <p>Vue.js</p>
                  <p>TypeScript</p>
                  <p>React.js</p>
                  <p>C</p>
                  <p>Python</p>
                  <p>jQuery</p>
                  <p>HTML5</p>
                  <p>CSS3</p>
                  <p>TailwindCSS</p>
                  <p>SCSS</p>
                </div>
              </div>
              <div class="skill-item">
                <div class="skill-item-title">
                  <h6>Operating Systems</h6>
                </div>
                <div class="skill-item-details">
                  <p>Windows</p>
                  <p>Ubuntu</p>
                </div>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Languages</h2>
            </div>
            <div class="language-items">
              <div class="language-item">
                <div class="language-item-left">
                  <h4>English</h4>
                  <span>Native</span>
                </div>
                <div class="language-item-right">
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                </div>
              </div>
              <div class="language-item">
                <div class="language-item-left">
                  <h4>French</h4>
                  <span>Intermediate</span>
                </div>
                <div class="language-item-right">
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle circle-active"></div>
                  <div class="language-item-right__circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Hobbies</h2>
            </div>
            <div class="hobbie-items">
              <div class="hobbie-item">
                <p>Coding</p>
                <p>Writing</p>
                <p>Speaking</p>
                <p>Learning</p>
                <p>Traveling</p>
              </div>
            </div>
          </div>
          <div class="cv-section right-section">
            <div class="cv-section-title">
              <h2>Find Me Online</h2>
            </div>
            <div class="social-items">
              <div class="social-item">
                <div class="social-item-left">
                  <GithubIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>Github</p>
                  <a href="https://github.com/techbaddey" target="_blank">
                    @techbaddey
                  </a>
                </div>
              </div>
              <div class="social-item">
                <div class="social-item-left">
                  <LinkedInIcon :size="16" fillColor="#fff" />
                </div>
                <div class="social-item-right">
                  <p>LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/oynkansola-shoroye/"
                    target="_blank"
                  >
                    @Oyinkansola Shoroye
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PhoneIcon from "vue-material-design-icons/Phone.vue";
import LocationIcon from "vue-material-design-icons/MapMarker.vue";
import EmailIcon from "vue-material-design-icons/At.vue";
import html2pdf from "html2pdf.js";
import LinkedInIcon from "vue-material-design-icons/Linkedin.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";

export default {
  components: {
    PhoneIcon,
    LocationIcon,
    LinkedInIcon,
    GithubIcon,
    EmailIcon,
  },
  props: {
    userInfo: Object,
  },
  methods: {
    exportToPDF2() {
      html2pdf(document.getElementById("cv-example"), {
        filename: "cv-example.pdf",
        image: { type: "jpeg", quality: 1 },
        html2canvas: {
          dpi: 192,
          scale: 2,
          letterRendering: false,
          useCORS: true,
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
      });
    },
  },
};
</script>

<style>
.cv-outter {
  min-height: 297mm;
  width: 210mm;
  /* to centre page on screen*/
  margin: 80px auto 100px auto;
  border: 1px solid #ccc;
}
</style>
