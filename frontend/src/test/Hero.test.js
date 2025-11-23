import React from 'react';
import {getAllByAltText, render,screen} from '@testing-library/react';
import  '@testing-library/jest-dom/';
import Hero from '../landing_page/home/Hero';

//test suite

describe('Hero component' , ()=>{
    test('Renders hero image', ()=>{
        render(<Hero/>);
        const HeroImage = screen.getByAltText("HeroImage");
        expect(HeroImage).toBeInTheDocument();
        expect(HeroImage).toHaveAttribute("src" ,"/media/homeHero.png")
    });
});
