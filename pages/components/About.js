import Image from 'next/image'
import { aboutData } from '../data'

export default function About() {
    const profileImageSrc = aboutData['profileImageSrc']
    const description = aboutData['description']
    const aboutItems = aboutData['aboutItems']

    return (
        <div class="about">
            <div class="about_left">
                <div class="about_profile_image_container">
                    <Image
                        src={profileImageSrc}
                        alt="Profile Image"
                    />
                </div>
            </div>
            
            <div class="about_right">
                <div class="about_description">
                    {description}
                </div>

                <div class="about_items">
                    <ul class="about_list">
                        {aboutItems.map(({ label, text, Icon }, idx) => (
                            <li class="about_list_item" key={idx}>
                                {Icon && <Icon className="h-5 w-5 text-white" />}
                                <span class="about_labels">{label}:</span>
                                <span class="about_text">{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )

}