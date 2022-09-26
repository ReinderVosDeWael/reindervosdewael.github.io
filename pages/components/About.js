import Image from 'next/image'
import { aboutData } from '../data'
import {forwardRef } from 'react'

const About = forwardRef((props, ref) => {
    const profileImageSrc = aboutData['profileImageSrc']
    const description = aboutData['description']
    const aboutItems = aboutData['aboutItems']
    
    return (
        <div class="about" ref={ref}>
            <div class="about_content">
                <div class="about_left">
                    <div class="about_profile_image_container">
                        <Image
                            src={profileImageSrc}
                            alt="Profile Image"
                        />
                    </div>
                </div>

                <div class="about_right">
                    <div class="about_title_container">
                        <h1 class="about_title">About me</h1>
                    </div>
                    <div class="about_description">
                        {description}
                    </div>

                    <div class="about_list_container">
                        <ul class="about_list">
                            {aboutItems.map(({ label, text, Icon }, idx) => (
                                <li class="about_list_item" key={idx}>
                                    {Icon && <Icon class="about_icons" />}
                                    <span class="about_labels">{label}:</span>
                                    <span class="about_text">{text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
})
export default About