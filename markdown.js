const markdown = `
# About Me

<img src="stdempimg.gif" alt="Profile Picture" class="profile-img">

## 👨‍💻 Who Am I?
Hi! I'm **Ketsaraporn Yaibua**, **Student ID 67183473** a Computer Science student (CSI) at Sripatum University.  I love building efficient, scalable, and user-friendly applications that solve real-world problems.  
My focus is on enhancing user experience and continuously learning new technologies to stay ahead in the field.

---

## 🛠 Skills & Expertise
- **Languages:** HTML, CSS, JavaScript, Java, C#
- **Frameworks:** React, Node.js
- **Version Control:** Git & GitHub
- **Other Tools:** Docker, Postman, SQL Server, Visual Studio Code

---

## 🎓 Education
**Bachelor’s Degree in Computer Science (Ongoing)**  
Faculty of Information Technology, Sripatum University  

---

## 💼 Projects I've Worked On
- **Web Application Development:** Built interactive web applications using **Vite and React**, 
incorporating animations, UI components, and state management for better user engagement.  
- **Software Projects:** Developed applications multipages  featuring 
**ball animation, image swapping, a calculator, a cart system, and UI components** like **Counter, Timer, and Todo List**.
and **SlideMeAdmin** for online presentation and management.  
---

## 🌟 Personal Philosophy
**Technology should simplify lives,** not complicate them.  
I strive to create seamless and meaningful digital experiences that truly make a difference.

---

## 📩 Contact Me
- **Email:** ketsaraporn.yai@spumail.net
- **LinkedIn:** [Ketsaraporn Yaibua](https://www.linkedin.com/in/ketsaraporn-yaibua-126145327)  
- **GitHub:** [github.com/ketsaraporn-k](https://github.com/ketsaraporn-k)  
- **Portfolio:** [multipages](https://ketsaraporn-k.github.io/_multipages/)
- **Our Project's Web:** [SlideMeAdmin](https://kketsaraporn.github.io/SlideMeAdmin/)  

Feel free to reach out if you're interested in collaborating or discussing exciting projects! 🚀
`;

document.getElementById('markdown-content').innerHTML = marked.parse(markdown);
