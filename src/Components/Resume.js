import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import SmallTitle from '../Components/SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from '../Components/ResumeItem';

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={'Resume'} span={'resume'} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Work Experience'} />
                </div>
                <div className="resume-content">
                    <ResumeItem 
                        year={'Summer/Fall 2021'} 
                        title={'Jacobs Software Developer, Part Time'}
                        subTitle={'Cyber and Intelligence Missions'}
                        text={''} 
                    />
                    <ResumeItem 
                        year={'Summer/Fall 2020'} 
                        title={'Jacobs Intern'}
                        subTitle={'Cyber and Intelligence Missions'}
                        text={'Tasked with creating a web application from scratch to replace a current system with updated needs.  Development within the Node JS framework and utilized MongoDB for the backend. '} 
                    />
                    <ResumeItem 
                        year={'Summer 2019'} 
                        title={'KeyW Corporation Intern'}
                        subTitle={'Defense Mission Sector'}
                        text={'Developed a dataflow monitoring system for Apache NiFi.  Researched and used API calls to get status information from NiFi processors. Utilized and gained experience with Amazon Web Services. '} 
                    />
                    <ResumeItem 
                        year={'Summer 2018'} 
                        title={'KeyW Corporation Intern'}
                        subTitle={'Defense Mission Sector'}
                        text={'Gained experience with Docker and ElasticSearch to monitor network data in the form of PCAP files.  Worked with data visualization tools including Kibana and Jupyter to display data graphically. '} 
                    />
                    <ResumeItem 
                        year={'January 2021 - May 2021'} 
                        title={'Capstone Project'}
                        subTitle={'Tidewater Boats'}
                        text={'Collaborated with a team of 4 to develop a web app for a recreational boat manufacturer.  Gained experience with Python and the Django Framework. '} 
                    />
                    <ResumeItem 
                        year={'August 2021 - December 2021'} 
                        title={'Capstone Project'}
                        subTitle={'React Native Development'}
                        text={'Worked individually to deveop a React Native Andriod App.  App included backend integration with firebase and a login system with authentication. '} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Awards and Recognition'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2017 - 2021'} 
                        title={'Computer Information Systems Degree'}
                        subTitle={'University of South Carolina'}
                        text={'Class of 2021.  Major in Computer Information Systems and Minor in Business Information Management'} 
                    />
                    <ResumeItem 
                        year={'2020 - 2021'} 
                        title={'Deans List'}
                        subTitle={'University of South Carolina'}
                        text={'Fall 2020, Spring 2021, Fall 2021 \n'} 
                    />
                    <ResumeItem 
                        year={'Fall 2020'} 
                        title={'Codeathon Participant'}
                        subTitle={'University of South Carolina'}
                        text={'Top 5 out of 200+ students'} 
                    />
                    <ResumeItem 
                        year={'Spring 2017'} 
                        title={'Eagle Scout Award'}
                        subTitle={'Boy Scouts of America'}
                        text={'Eagle Scout Awarded in April of 2017. Order of the Arrow Brotherhood member and troop OA representitive.'} 
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
