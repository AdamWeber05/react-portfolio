import reactnative from '../img/portImages/login.PNG';
import react from '../img/portImages/tracker.PNG';
import js from '../img/portImages/jstracker.PNG';
import django from '../img/portImages/django.PNG';

const portfolios = [
    {
        id: 1,
        category: 'React JS',
        image: reactnative,
        link1: 'https://github.com/AdamWeber05/react-native',
        title: 'React Native App',
        text: 'Native Andriod App with firebase backend'
    },
    {
        id: 2,
        category: 'React JS',
        image: react,
        link1: 'https://github.com/AdamWeber05/react-event-tracker',
        title: 'React App',
        text: 'React App utilizing Google Maps API and NASA EONET API'
    },
    {
        id: 3,
        category: 'Javascript',
        image: js,
        link1: 'https://github.com/AdamWeber05/Natural-Event-Tracker',
        title: 'JS/HTML/CSS Website',
        text: 'Natural Event tracker website utilizing NASA EONET API'
    },
    {
        id: 4,
        category: 'Django',
        image: django,
        link1: 'https://github.com/AdamWeber05/django-capstone',
        title: 'Tidewater Boat App',
        text: 'App created in Django Framework for a local boat manufacturer to track boat production'
    }
]

export default portfolios;