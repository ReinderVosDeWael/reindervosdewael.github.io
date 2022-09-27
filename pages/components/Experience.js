import {experienceData} from '../data';
import {educationData} from '../data';


export default function Experience() {
  // const data = [experienceData, educationData]
  // const titles = ["Experience", "Education"]

  // TODO: This could be looped over experience and education to reduce code duplication.
  return (
    <>
      <div className="experience">
        <div className="experience_content">
          <div className="experience_left">
            <h1 className="section_title">
                            Experience
            </h1>
          </div>
          <div className="experience_right">
            {experienceData.map(({date, location, title, content}) => (
              <div className="experience_item">
                <h1 className="experience_title">{title}</h1>
                <span className="experience_location">{location}</span>
                <span>  •  </span>
                <span className="experience_date">{date}</span>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="experience">
        <div className="experience_content">
          <div className="experience_left">
            <h1 className="section_title">
                            Education
            </h1>
          </div>
          <div className="experience_right">
            {educationData.map(({date, location, title, content}) => (
              <div className="experience_item">
                <h1 className="experience_title">{title}</h1>
                <span className="experience_location">{location}</span>
                <span>  •  </span>
                <span className="experience_date">{date}</span>
                <p>{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
