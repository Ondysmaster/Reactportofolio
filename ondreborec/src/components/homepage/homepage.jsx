import React from 'react';
import NavigationMenu from "../navigation/navigation";
import Skill from "../skills/skillset";
import './homepage-style.css';
import Carousel from "../carousel/carousel";
function HomePage() {
    return (
        <div>
            <section id="section1">
                <NavigationMenu/>
                <h2>Dovednosti</h2>
                {
                    <Skill/>
                }
            </section>

            <section id="section2">
                <h2>Moje práce</h2>
                {
                    <Carousel></Carousel>

                }
            </section>
            <section id="section3">
                <h2>Sekce 3</h2>
                {<p>Sekce3</p>}
            </section>

        </div>
    );
}
export default HomePage;