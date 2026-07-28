import { useState } from "react";
import "./Projects.css";
import projectsPage from "./project-images/projectsPage.png";
import loginPage from "./project-images/loginPage.png";
import homePage from "./project-images/homePage.png";

interface Project {
  id: number;
  title: string;
  description: string;
  demoUrl?: string;
  demoCredentials?: {
    email: string;
    password: string;
  };
  images: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Dashboard",
    description:
      "This project was created while I was working at a SaaS company. During a period of lower demand, our team realized that we didn't have a centralized place to store and access important information. Most of our documentation was scattered across Google Docs and Google Sheets, making it difficult to find and manage what we needed efficiently.\n\nSince I had always wanted to become a developer, I brought up the idea of creating an internal platform to organize this information. My manager liked the idea, so I started working on it. Throughout the development process, I regularly gathered feedback from him, making improvements and adding features based on the team's needs.\n\nOnce the project reached a usable state, we officially started using it as part of our daily workflow. It was the first time I had built something that wasn't just a learning exercise, but a real tool used by other people. Seeing my work provide value to the team was incredibly rewarding and reinforced my decision to pursue a career in software development.\n\nLooking back today, there are many things I would build differently, but that's part of the learning process. Every project reflects the knowledge I had at the time, and this one represents an important milestone in my journey as a developer.\n\nThe project is still online and available to explore. You can create your own account or use the demo credentials below:",
    demoUrl: "https://opendashzd.vercel.app",
    demoCredentials: {
      email: "testedeuso@dash.com",
      password: "123456",
    },
    images: [loginPage, homePage, projectsPage],
  },
  {
    id: 2,
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis porta elit, eu facilisis ipsum. Vestibulum pretium maximus mauris. Ut id ante ac est congue aliquet in eget. Vestibulum ultricies ac nisi ac gravida laoreet ex orci, id vestibulum sapien consectetur et. Aliquam quis ultricies orci, sit amet efficitur ante. Quisque faucibus vel lectus sed euismod.",
    images: [],
  },
];

export default function Projects() {
  const [openIds, setOpenIds] = useState<number[]>([]);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  function toggleProject(id: number) {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((openId) => openId !== id) : [...prev, id]
    );
  }

  return (
    <main className="projects">
      <section className="first-projects">
        <h1 className="projects-title">projects</h1>

        <p className="short-projects">
          Hi! Here you'll find a glimpse of the projects I've worked on so far. This page is always evolving, and I'll keep updating it as I create new projects, learn new technologies, and improve my existing work.
        </p>
      </section>

      <section className="second-projects">
        <div className="projects-list">
          {projects.map((project) => {
            const isOpen = openIds.includes(project.id);
            return (
              <div
                key={project.id}
                className={`project-card-wrapper ${isOpen ? "expanded" : ""}`}
              >
                <button
                  className={`project-card ${isOpen ? "active" : ""}`}
                  onClick={() => toggleProject(project.id)}
                >
                  {project.title.toUpperCase()}
                </button>

                <div className={`project-details ${isOpen ? "open" : ""}`}>
                  <div className="project-details-inner">
                    <h2>{project.title}</h2>
                    {project.description.split("\n\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                    {project.demoUrl && (
                      <p className="project-demo-info">
                        Demo:{" "}
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link"
                        >
                          {project.demoUrl}
                        </a>
                      </p>
                    )}
                    {project.demoCredentials && (
                      <p className="project-demo-info">
                        Email: {project.demoCredentials.email}
                        <br />
                        Password: {project.demoCredentials.password}
                      </p>
                    )}
                    <div className="project-images">
                      {project.images.length > 0 ? (
                        project.images.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="project-image"
                            onClick={() => setExpandedImage(src)}
                          />
                        ))
                      ) : (
                        <>
                          <div className="project-image-placeholder" />
                          <div className="project-image-placeholder" />
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {expandedImage && (
        <div
          className="image-lightbox-overlay"
          onClick={() => setExpandedImage(null)}
        >
          <img
            src={expandedImage}
            alt="Expanded view"
            className="image-lightbox-img"
          />
          <button
            className="image-lightbox-close"
            onClick={() => setExpandedImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
      )}
    </main>
  );
}