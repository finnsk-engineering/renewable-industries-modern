import AnimatedSection from \'@/components/AnimatedSection\';
import BlogCard from \'@/components/BlogCard\';
import { blogPosts } from \'@/data/blogPosts\';

const post = blogPosts[2];
const similarPosts = blogPosts.slice(0, 2);

const BatteryStorage = () => {
  return (
    <div className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{post.title}</h1>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <img src="https://renewableindustries.co/wp-content/uploads/2024/06/34e8c2d2c9ee46e64cc441ddd600edbf.avif" alt={post.title} className="w-full h-auto rounded-lg shadow-lg my-8" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p>It is, as Jason Froud knows all too well, a little-known but fundamentally important aspect of the power system.</p>
            <p>When you flick a switch, the electricity that illuminates the light in the room is new. Brand new.</p>
            <p>“Traditionally, you’ve had the electricity system that has generated the electricity at the moment that it’s used,” Mr Froud said.</p>
            <p>The need to meet demand with supply the instant it arises has been a defining characteristic of the electricity system ever since it was invented more than 100 years ago. But Mr Froud, a general manager at state-owned West Australian power provider Synergy, said this historic limitation of energy supply was changing.</p>
            <p>“With electricity storage coming into the market more and more, it’s almost turning electricity more into a traditional type of commodity,” he said. “You can store it and then use it when it’s required.”</p>
            
            <h2 className="text-white">Sun rises over coal’s demise</h2>
            <p>Like all electricity systems across Australia, WA’s main grid is grappling with tectonic shifts as part of the move away from conventional fossil fuel-fired generators to renewable sources.</p>
            <p>In recent weeks, a series of records have been broken in Australia’s main electricity systems, where renewable energy generation is reaching new highs. Simultaneously, coal-fired power production has plumbed new lows from one side of the continent to the other.</p>

            <h2 className="text-white">Batteries help ‘fill in blanks’</h2>
            <p>According to Dr Wonhas, this was posing challenges for the stability of the grid because many of the displaced coal- and gas-fired generators were still needed when the sun was not shining. But he said batteries and other forms of storage would be invaluable in helping to provide back-up.</p>
            <p>“I think we need to be much more strategic in what we do with storage,” Dr Wonhas said. “That means in the middle of the day this storage can really absorb some of that excess solar and then release it, in particular in the early evening period when power will be really important.”</p>
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

export default BatteryStorage;
