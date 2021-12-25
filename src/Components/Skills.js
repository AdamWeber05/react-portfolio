import React from 'react'
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'Technology Skill Sets'} span={'Technology Skill Sets'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'Javascript'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'HTML'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'CSS'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'Python'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'C++'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'Java'}
                            width={'100%'}
                        />
                        <ProgressBar 
                            title={'AWS'}
                            width={'100%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
