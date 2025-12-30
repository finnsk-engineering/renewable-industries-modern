import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const post = blogPosts[1];
const similarPosts = [blogPosts[0], blogPosts[2]];

const AustraliaBestSolar = () => {
  return (
    <div className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{post.title}</h1>
          <p className="text-gray-400">By John Grimes</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <img src="https://renewableindustries.co/wp-content/uploads/2024/06/person-near-alternative-energy-plant-1-scaled-1.webp" alt={post.title} className="w-full h-auto rounded-lg shadow-lg my-8" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p>Australia has the best solar resources in the world, the best innovators in the world, and leads the world in solar rooftop installations.</p>
            <p>A whopping 3.9 million solar systems have been installed across Australia – cutting electricity bills and helping save the planet. Until now, Australia lagged in one critical area – we let other countries take our innovation, commercialise it and then sell back to us.</p>
            <p>It’s been a very long time coming but finally, someone is prepared to put the light on the hill when comes to getting Australia making again. Halleluiah, baby. We are finally moving from a dig-and-ship export economy to a circular economy.</p>
            <p>It started in the 1950s when the Commonwealth Science and Industry Research Organisation (CSIRO) led the world to use solar power in heating water and created the world’s first solar hot water systems.</p>
            <p>In the late 1980s Professor Martin Green and his team at UNSW were pushing the limits of physics and chemistry when they developed the world’s first solar photovoltaic system with 20 per cent efficiency.</p>
            <p>Australia has a history of being the smartest people in the room, but failing to commercialise the research. China did not miss its shot and now provides about 90 per cent of the world’s solar panels.</p>
            <p>We thank China for dramatically driving down the price of solar panels – making solar panels that are readily accessible to everyday working Australians. But, in the process, Australia missed that trillion-dollar opportunity and now it’s time to get back in the game.</p>
            <p>The Albanese Government has finally turned off the brain drain and is investing in manufacturing the products of the future, such as solar photovoltaic panels.</p>
            <p>We won’t just dig and ship. Australia will add value to the critical and strategic minerals vested in this great southern land. We will add value from silica to seed crystals (in the case of mono-crystalline panels), to silicon ingots and wafers, to putting them side-by-side to make what we know as solar PV panels.</p>
            <p>Finally, Australia has the chance to fulfil its solar potential. To lead in research, and then turn that research into the products that will power the whole world. It has been a very long time coming, and took vision and leadership to make it real. A bright day for Australia indeed.</p>
          </div>
        </AnimatedSection>

         <AnimatedSection className="mt-16">
            <h2 className="text-3xl font-bold text-white mb-8 border-t border-slate-800 pt-8">Similar Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {similarPosts.map((p, i) => <BlogCard key={i} post={p} />)}
            </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AustraliaBestSolar;
