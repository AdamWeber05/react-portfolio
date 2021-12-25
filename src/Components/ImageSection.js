import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Adam Weber</span></h4>
                <p className="paragraph">
                    I am a graduate of the University of South Carolina - GO GAMECOCKS! - and a software developer.  
                    Programming, for me, provides a great outlet for both problem solving and transforming the world we live in for the better.  
                    I love technology and I care about people - and when I develop code I am able to see the perfect blend of both.   
                </p>
                <p className="paragraph">
                    Outside of work, I enjoy being outdoors - the beach or the mountains, it doesn't matter to me.  I snowboard when I can, and enjoy playing and watching sports of all kinds.  If there is a pickup truck involved...count me IN!    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Age</p>
                        <p>School</p>
                        <p>Major </p>
                        <p>Minor </p>
                    </div>
                    <div className="info">
                        <p>: 22</p>
                        <p>: University of South Carolina </p>
                        <p>: Computer Information Systems </p>
                        <p>: Businesss Information Management </p>
                    </div>
                </div>
                <a href="../files/resume.pdf" download><PrimaryButton title={'Download Cv'}/></a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
