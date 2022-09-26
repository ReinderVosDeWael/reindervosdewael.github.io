import { experienceData } from '../data'
import { educationData } from '../data'


export default function Experience() {
    // const data = [experienceData, educationData]
    // const titles = ["Experience", "Education"]

    // TODO: This could be looped over experience and education to reduce code duplication.
    return (
        <>
            <div class="experience">
                <div class="experience_content">
                    <div class="experience_left">
                        <h1 class="section_title">
                            Experience
                        </h1>
                    </div>
                    <div class="experience_right">
                        {experienceData.map(({ date, location, title, content }) => (
                            <div class="experience_item">
                                <h1 class="experience_title">{title}</h1>
                                <span class="experience_location">{location}</span>
                                <span>  •  </span>
                                <span class="experience_date">{date}</span>
                                <p>{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            <div class="experience">
                <div class="experience_content">
                    <div class="experience_left">
                        <h1 class="section_title">
                            Education
                        </h1>
                    </div>
                    <div class="experience_right">
                        {educationData.map(({ date, location, title, content }) => (
                            <div class="experience_item">
                                <h1 class="experience_title">{title}</h1>
                                <span class="experience_location">{location}</span>
                                <span>  •  </span>
                                <span class="experience_date">{date}</span>
                                <p>{content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
