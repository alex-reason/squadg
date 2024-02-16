import img4 from './Miroodles - Sticker.png';
import img5 from './Miroodles - Sticker (1).png';
import img6 from './Miroodles - Sticker (3).png';
import about1Img from './about-1.png';
import about2Img from './about-2.png';
import about3Img from './about-3.jpg';

export const aboutData = [
    {
        title: 'track your workouts',
        details: [
            'You will be able to record your workouts.',
            'Each workout you do gains you points.'
        ],
        btn: true,
        image: img5,
        alt: 'by Pablo Stanley from blush',
        id: 'aboutData1',
        screenshot: about1Img,
    },
    {
        title: 'progress with friends',
        details: [
            'Seeing friends and their progress may help motivate you.',
            'Or make it a friendly competition!'
        ],
        image: img6,
        alt: 'by Pablo Stanley from blush',
        id: 'aboutData2',
        screenshot: about2Img,
    },

    {
        title: 'level up your workout game',
        details: [
            'Level up after reaching certain points.',
            'Unlock new features after reaching enough levels.'
        ],
        image: img4,
        alt: 'by Pablo Stanley from blush',
        id: 'aboutData3',
        screenshot: about3Img,
    },
] as const;


export const cardioPoints = {
    running: 0.8,
    walking: 5,
    cardio: 0.45
};

export const fullBodyPoints = {
    sports: 0.5,
    yoga: 0.5,
    pilates: 1,
    cycling: 1
};
export const toningPoints = {
    lowerbody: 0.3,
    upperbody: 0.3,
    core: 0.2
}