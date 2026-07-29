import "./Home.css";
import profile from "../../assets/profile.png";

export default function Home() {
  return (
    <main className="home">
      
      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">GUIZOND</h1>
      </section>

      {/* ABOUT PREVIEW */}
        <section className="about-preview">
        <div className="home-about-inner">
            <div className="home-about-image">
              <img src={profile} alt="profile" />
            </div>

            <div className="about-text">
            <p>
                Hi, my name is Guilherme. I'm 26 years old and I currently live in Florianópolis, Santa Catarina. I'm currently studying to become a dev. My preferred area is front-end development, but I'm studying and working hard to become a well-rounded full-stack developer.
            </p>

            <p>
                I'm very into gaming, watching anime, and watching movies, especially horror movies. I admit I'm more of a night person — I get that strange feeling that I'm more productive and at my peak during the nighttime.
            </p> 

            <p>
                I think that's about it for now. If you want to know more about me, check that section.
            </p>
            </div>
        </div>
        </section>

    </main>
  );
}