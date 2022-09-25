import { educationData } from '../data'


export default function About() {
    return (
        <div class="education">
            <div class="education-right">
                {educationData.map(({ date, location, title, content }) => (
                    <div class="education-item">
                        <h1 class="title">{title}</h1>
                        <h2 class="location">{location}</h2>
                        <h2 class="date">{date}</h2>
                        {content}
                    </div>
                ))}
            </div>
        </div>
    )
}
