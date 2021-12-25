import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from '../Components/ServiceCard';
import design from '../img/design.svg';
import fullstack from '../img/full-stack.svg'
import intelligence from '../img/intelligence.svg';

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Areas of Interest'} span={'Areas of Interest'} />
                <div className="services">
                    <ServiceCard 
                        image={design} 
                        title={'Web Design'} 
                        paragraph={'I have experience in HTML/CSS styling through internship opportunities and course-work.'}
                    />
                    <div className="mid-card">
                        <ServiceCard 
                            image={fullstack} 
                            title={'Full Stack Development'} 
                            paragraph={'Am comfortable utilizing both front and backend services.  I have expereince with Full Stack development in React, Django, and Node JS. '}
                        />
                    </div>
                    <ServiceCard 
                        image={intelligence} 
                        title={'Machine Learning / AI'} 
                        paragraph={'Gained ML experience under the HACCS program.  Also completed a 500 level ML course @USC and worked on a project to predict best times to park on campus.'}
                    />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;
