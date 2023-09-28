import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section class="bg-white py-20" id="about">
      <div class="align-element grid  md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            On my website, you can find a diverse range of projects that I have
            created as a beginner front-end developer. I focus on building
            attractive, interactive, and responsive websites, utilizing skills
            in HTML, CSS, JavaScript, including the React framework. Each
            showcased project is not only an opportunity for me to grow but also
            a chance to explore new perspectives in the field of front-end
            development. I warmly invite you to explore my work and discover how
            front-end can enhance the visual and functional aspects of projects.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
