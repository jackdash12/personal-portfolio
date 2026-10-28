Personal Portfolio Website
---------------------------------------
1. Project Overview
---------------------------------------
This project involves designing and developing a personal portfolio website from scratch using HTML, CSS, and JavaScript. The website introduces me as a Computer Science student and showcases my skills, projects, professional goals, and contact information.

Project Objectives

Establish a professional online presence.

Showcase my technical skills and learning progress.

Present projects in an organized format.

Apply responsive web design and JavaScript interactivity.

Publish a functional website using GitHub Pages.

---------------------------------------
2. Target Audience
---------------------------------------

The target audience includes potential employers, internship recruiters, technology professionals, instructors, classmates, and other visitors interested in my work.

The site is designed to help visitors understand my interests, skills, and experience level quickly.

---------------------------------------
3. Content Strategy
---------------------------------------

The website uses five main sections:

Home: Introduces me and my field of study.

About: Describes my background, interests, and career goals.

Skills: Lists technologies and skills I am learning or using.

Projects: Showcases my portfolio website and other genuine work.

Contact: Provides a way for visitors to reach me.

The writing style is professional, concise, and suitable for a student portfolio. The content will be updated as I gain experience.

---------------------------------------
4. Part 1 — Content Planning
---------------------------------------

1. What is your full name as you want it displayed professionally?

Answer: Jack Gold

2. What is the purpose of your portfolio website?

Answer: To introduce myself professionally, showcase my technical skills and projects, and provide information about my background and career goals.

3. Who is the target audience?

Answer: Potential employers, internship recruiters, technology professionals, instructors, classmates, and visitors interested in my work.

4. What skills do you want to highlight?

Answer: HTML, CSS, JavaScript, responsive web design, and problem-solving skills that I am developing through practice.

5. What projects or work will you showcase?

Answer: My personal portfolio website is my initial project. I will add school assignments and personal projects as I complete them.

6. How will you describe yourself in a short professional bio?

Answer: I am a Computer Programming & Information Systems Student developing my programming, problem-solving, and web development skills. I am interested in learning how technology can solve practical problems and building projects that demonstrate my growing technical knowledge.

7. What pages will your site include?

Answer: The website uses a single-page layout with Home, About, Skills, Projects, and Contact sections. Navigation links let visitors move directly to each section.

8. What is your career goal or desired role?

Answer: My goal is to continue developing my technical skills and prepare for opportunities in the technology field. My specific desired role is to become a web developer.

9. What technologies or tools do you have experience with?

Answer: HTML, CSS, and JavaScript are used to build this website. Visual Studio 2022 is my development environment, and GitHub and GitHub Pages will be used to store and publish the project.

10. What achievements or experiences are worth highlighting?

Answer: Developing this portfolio demonstrates my work in planning, building, testing, and documenting a website. Other achievements, education, coursework, and experience will be included when applicable.

11. What call-to-action should visitors take?

Answer: Visitors are encouraged to explore my projects and use the Email Me button to contact me.

12. Will you include a resume? In what format?***

Answer: Not yet

13. What social or professional links will you include?

Answer: 

github   - https://github.com/jackdash12 

LinkedIn - https://www.linkedin.com/in/jack-gold-347528392/ 

---------------------------------------
5. Part 2 — Design Planning
---------------------------------------

1. What overall style will best represent you?

Answer: A modern, minimalist, professional design that emphasizes readability and presents technical work clearly.

2. What color scheme will you use and why?

Answer: The website uses dark navy (#0B1120), light text (#F1F5F9), and blue accents (#60A5FA). This palette creates a consistent, technology-focused appearance and helps important links stand out.

3. What fonts will you use for headings and body text?

Answer: The website uses the Inter sans-serif font for both headings and body text to create a clean, modern, and professional appearance. Inter provides good readability and gives the portfolio a sleek, minimalist look. Arial and Helvetica are included as fallback fonts if Inter cannot load.

4. How will your design reflect your personality or field?

Answer: The structured layout, navy background, blue accents, and project cards create a clean, technology-focused appearance. The design prioritizes usability over unnecessary decoration.

5. What layout will your homepage follow?

Answer: The homepage begins with an introduction and two calls to action. Visitors can then explore the About, Skills, Projects, and Contact sections, followed by the footer.

6. How will you organize project sections visually?

Answer: Projects are displayed in cards with titles, descriptions, technologies, and status labels where appropriate. Consistent spacing, borders, and colors make the cards easy to scan.

7. Will the site be mobile-friendly? How will you ensure responsiveness?

Answer: Yes. CSS Grid, flexible widths, and media queries adapt the layout to different screen sizes. A collapsible navigation menu supports smaller screens.

8. What visual hierarchy will guide visitors?

Answer: Large headings establish section importance, smaller headings organize information, and blue accents highlight links and calls to action. Spacing separates content into readable sections.

9. How will consistency be maintained across pages?

Answer: The single-page layout uses shared CSS variables, typography, button styles, card styles, and spacing. The navigation and footer remain consistent throughout.

10. How will accessibility be considered?

Answer: The website uses semantic HTML, a skip-to-content link, visible keyboard focus indicators, descriptive navigation labels, readable text, responsive layouts, and reduced-motion support. Contrast and keyboard operation will be checked during testing.

11. Will you use icons, images, or illustrations? Why?

Answer: The initial design emphasizes typography, color, and CSS-created visual elements to keep the site lightweight. Relevant project screenshots or personal imagery may be added when available.

12. What portfolio websites inspired your design?

Answer: The design follows general modern portfolio principles, including simple navigation, clear introductions, and project-focused layouts.

---------------------------------------
6. Part 3 — Interactivity Planning
---------------------------------------

1. What interactive elements will your site include?

Answer: Navigation links, calls-to-action, hover effects, a responsive mobile menu, and navigation highlighting based on the visible section.

2. Will your site include a contact form? How will it work?

Answer: The initial version uses an Email Me link to open an email composition window through the selected email service. It does not require a backend or collect visitor data. A contact form could be added later using a suitable form service.

3. What JavaScript features will you implement?

Answer: JavaScript controls the mobile navigation menu, updates accessibility attributes, closes the menu after selection or when Escape is pressed, updates the copyright year, and highlights the current section using the Intersection Observer API.

4. How will users receive feedback from interactions?

Answer: Buttons and cards provide hover feedback. The mobile menu changes state when opened or closed, and the active navigation link changes as visitors scroll through the page. The email link opens the configured email service.

5. How does interactivity improve the user experience?

Answer: Interactivity makes navigation more intuitive, supports mobile usability, helps visitors identify their current section, and makes the website responsive without adding unnecessary complexity.

---------------------------------------
7. Information Organization
---------------------------------------

The website follows this hierarchy:

Header
Portfolio logo
Main navigation
Main content
Home
About
Skills
Projects
Contact
Footer
Copyright year
Professional name

This structure makes the information easy to scan and allows visitors to reach important content quickly.

---------------------------------------
8. Visual Design and Wireframe
---------------------------------------

The desktop layout uses a horizontal navigation bar, a prominent introduction, and clearly separated content sections.

```text
+------------------------------------------------------+
|  LOGO                              NAVIGATION        |
+------------------------------------------------------+
|                                                      |
|  INTRODUCTION                                        |
|  Hello, I'm [Your Name].                             |
|  Computer Science Student                            |
|  Brief professional introduction                     |
|  [Explore My Projects]  [Contact Me]                 |
|                                                      |
+------------------------------------------------------+
|  ABOUT ME                                            |
|  Background, interests, and career goals             |
+------------------------------------------------------+
|  SKILLS & TECHNOLOGIES                               |
|  [HTML]       [CSS]       [JavaScript]               |
+------------------------------------------------------+
|  PROJECTS                                            |
|  [Project Card 1]              [Project Card 2]      |
+------------------------------------------------------+
|  CONTACT                                             |
|  [Email Me]                                          |
+------------------------------------------------------+
|  FOOTER                                              |
+------------------------------------------------------+
```

The mobile layout stacks content vertically and uses a collapsible navigation menu to fit smaller screens.

```text
+------------------------------+
|  LOGO                  MENU  |
+------------------------------+
|  INTRODUCTION                |
|  Hello, I'm [Your Name].     |
|  Computer Science Student    |
|  [Explore Projects]          |
|  [Contact Me]                |
+------------------------------+
|  ABOUT ME                    |
|  Background and goals        |
+------------------------------+
|  SKILLS                      |
|  [HTML]                      |
|  [CSS]                       |
|  [JavaScript]                |
+------------------------------+
|  PROJECTS                    |
|  [Project Card 1]            |
|  [Project Card 2]            |
+------------------------------+
|  CONTACT                     |
|  [Email Me]                  |
+------------------------------+
|  FOOTER                      |
+------------------------------+
```

Design Rationale

The wireframes illustrate the planned information hierarchy and responsive layout. The desktop design places navigation horizontally and arranges project cards side by side where space permits. The mobile design stacks the sections vertically to improve readability and usability on smaller screens.

---------------------------------------
9. Technical Overview
---------------------------------------

Technologies
HTML5: Structures the content using semantic elements.

CSS3: Controls colors, typography, layouts, and responsiveness.

JavaScript: Implements interactive interface features.

Visual Studio 2022: Development environment.

GitHub: Stores and manages the source code.

GitHub Pages: Hosts the published website.

Project File Structure

personal-portfolio/
 
        index.html
 
         style.css

         script.js
 
         README.md

Testing Strategy

Verify that all navigation links reach the correct sections.

Test the email link.

Test the mobile menu and keyboard controls.

Review the layout at desktop and mobile widths.

Check the browser console for errors.

Verify that the published website loads correctly.

---------------------------------------
10. External Resources
---------------------------------------

GitHub Pages documentation: https://docs.github.com/en/pages

MDN HTML documentation: https://developer.mozilla.org/en-US/docs/Web/HTML

MDN CSS documentation: https://developer.mozilla.org/en-US/docs/Web/CSS

MDN JavaScript documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript

MDN Intersection Observer API: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

The website uses plain HTML, CSS, and JavaScript without an external framework.

---------------------------------------
11. Timeline and Project Milestones
---------------------------------------
Milestone	Tasks	Status
1. Planning	Answer questions and plan content	(Finished)
2. Design	Select colors, typography, layout, and wireframes	(Finished)
3. Development	Create HTML, CSS, and JavaScript files	(Working)
4. Testing	Test navigation, links, responsiveness, and accessibility	(inprogess)
5. Documentation	Complete and review README	(In progress)
6. Deployment	Publish through GitHub Pages	(Completed)
7. Final review	Verify the repository and website links	Pending (inprogess)

---------------------------------------
12. Conclusion
---------------------------------------

This project applies web development fundamentals to a personal portfolio built from scratch. It combines content planning, visual design, responsive implementation, JavaScript interactivity, documentation, and deployment. The portfolio will grow as I gain experience and complete additional projects.
