import { StyledProjectTile } from './styles/ProjectTile.styled';
import 'aos/dist/aos.css';

function ProjectTile(props) {
  return (
    <StyledProjectTile>
      <div id="aboveCircle">
        <img
          src={`${process.env.PUBLIC_URL}/images/${props.img}`}
          alt="A project made by Philip Clark"
          width="300px"
          height="auto"
        ></img>
        <div id="text">
          <h1 data-aos="fade-up" data-aos-delay="500">
            {props.title}
          </h1>
          <figure id="circle" data-aos="circle" data-aos-delay="400" />
          <h2 data-aos="fade-up" data-aos-delay="600">
            {props.subtitle}
          </h2>
          <p data-aos="fade-up" data-aos-delay="700">
            {props.paragraph}
          </p>
          <a
            target="_blank"
            referrerPolicy="no-referrer"
            href={props.link}
            id="button"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            View Project
          </a>
        </div>
      </div>
    </StyledProjectTile>
  );
}
export default ProjectTile;
