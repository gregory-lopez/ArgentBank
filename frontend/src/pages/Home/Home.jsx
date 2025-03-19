import React from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';
import Hero from '../../components/Hero/Hero';
import featureData from '../../datas/featureData';
import heroData from '../../datas/heroData';
import './home.scss'; 

const Home = () => {
  return (
    <main className="main-home">
      <section className="hero-main">
      <Hero
        title={heroData.title}
        subtitles={heroData.subtitles}
        description={heroData.description}
      />
      </section>
      <section className="features-main">
        <h2 className='sr-only'>Features</h2>
        {featureData.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </section>
    </main>
    
  );
};

export default Home;
