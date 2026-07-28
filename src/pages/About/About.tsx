import "./About.css";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="about">
        
        <section className="first-about">

        <h1 className="about-title">about</h1>

        <p className="short-about">
            Hi, it's a pleasure to have you here!
            My full name is Guilherme Dorow. I'm 26 years old and I live on the magical island of Florianópolis, Santa Catarina, Brazil.
            This is a project I've been working on to improve my development skills and present myself to the job market. Below, you'll find more personal information about me, my studies, the story behind the name "GUIZOND," and much more.
            It's nice to meet you, and I hope you enjoy exploring my portfolio!
        </p>

        </section>
         
        <section className="second-about">

            <div className="top-row">
                <div className="short-text">
                    <p>
                        I think a great place to start is by explaining the name "GUIZOND."
                        It's not a particularly exciting story, but one day I wanted to change my username in a game. A friend of mine used to call me "Guizon," so I decided to add the "D" from my last name, and that's how "Guizond" was born.
                        Since then, I've used it in every game I play and across all my social media platforms. Over time, it became more than just a username, some people now know me as Guizond and even call me by that.
                        As the name became more recognized among my friends and online communities, I started using it as my personal brand. Today, "Guizond" represents not only my online identity but also my projects, creativity, and journey as a developer.
                    </p>
                    <p>
                        I've been studying through self-taught online courses focused on web development, front-end and back-end technologies, React, and databases. I also started an Associate's degree in Systems Analysis and Development to strengthen my technical foundation.
                        My goal is to become a full-stack developer, and I'm constantly learning and improving my skills through both academic studies and personal projects.
                    </p>
                </div>

                <div className="about-image">
                    <img src={profile} alt="profile" />
                </div>
            </div>

            <div className="bottom-text">
                <p>
                    On my <Link to="/projects" className="link">Projects</Link> page, you'll find a selection of the work I've created, and I keep adding new projects as I continue learning and building.
                    Right now, my main focus is revisiting my older projects and improving them by applying everything I've learned along the way. My goal is to turn each one into a cleaner, more polished, and more professional version of itself.
                </p>

                <p>
                    Although I haven't had the opportunity to work as a software developer yet, I've built my career in Customer Success and Customer Experience. Through these roles, I've gained valuable experience interacting directly with users, both in person and online, giving me a strong understanding of their needs and expectations.
                    More recently, while working at SaaS companies, I collaborated closely with development teams whenever customer issues required technical investigation or product improvements. This experience allowed me to better understand how developers approach problems while also contributing the customer's perspective.
                    I believe this combination gives me a unique point of view. Because I'm constantly exposed to the challenges users face, I can better understand their pain points and help bridge the gap between technical solutions and real user needs.
                </p>
                
                <p>
                    If you liked my work and the projects you've seen here, I'd love to hear from you! Feel free to reach out through any of my social media links below. I'm always open to connecting, collaborating, or discussing new opportunities.
                </p>
            </div>

        </section>
    </main>
  );
};