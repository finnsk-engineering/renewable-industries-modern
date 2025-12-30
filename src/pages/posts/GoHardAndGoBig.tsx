import AnimatedSection from '@/components/AnimatedSection';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogPosts';

const post = blogPosts[0];
const similarPosts = blogPosts.slice(1, 3);

const GoHardAndGoBig = () => {
  return (
    <div className="bg-dark text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{post.title}</h1>
          <p className="text-gray-400">By Adam Morton</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <img src="https://renewableindustries.co/wp-content/uploads/2024/06/2500-scaled.avif" alt={post.title} className="w-full h-auto rounded-lg shadow-lg my-8" />
        </AnimatedSection>

        <AnimatedSection>
          <div className="prose prose-invert prose-lg max-w-none space-y-6">
            <p>For a brief period over several weekends this spring, the state of South Australia, which has a population of 1.8 million, did something no other place of a similar size can claim: generate enough energy from solar panels on the roofs of houses to meet virtually all its electricity needs.</p>
            <p>This is a new phenomenon, but it has been coming for a while – since solar photovoltaic cells started to be installed at a rapid pace across Australia in the early 2010s. Roughly one in three Australian households, more than 3.6m homes, now generate electricity domestically. In South Australia, the most advanced state for rooftop solar, the proportion is nearly 50%.</p>
            <p>No other country comes close at installing small solar systems on a per capita basis. “It’s absolutely extraordinary by world standards,” said Dr Dylan McConnell, an energy systems analyst at the University of New South Wales. “We’re streets ahead.”</p>
            <p>There was no overarching plan that made Australia the world leader in household solar PV. Analysts mostly agreed that it was a happy accident, the result of a range of uncoordinated policies across tiers of government. Many were subsidy schemes that were derided as too generous and gradually scaled back, but the most important – an easy-to-access, upfront national rebate available to everyone – endured. It has helped make panels cost-effective and easy to install.</p>
            <p>Sean Jamieson, a pilot with the airline Jetstar, said the setup had been “incredibly beneficial”, in part because his family uses a range of energy-hungry equipment, including a pool and hot tub. He said it has continued to make sense.</p>
            <p>“I’m looking at paying it off [through savings on what annual power bills would otherwise have been] in three or four years, so it’s been a great investment,” he said of the household energy system. “Generally, solar is just a no-brainer in South Australia. We’ve got a lot of sunshine and the most expensive electricity in Australia, and in the beginning it was heavily subsidised.”</p>
            <p>The fall in cost has been significant. The sums vary depending on geography, but the SolarQuotes comparison site suggests many Australians can get a 6kW solar system for about A$6,000 (£3,100). The panels are likely to have paid for themselves within five years.</p>
            <p>Tristan Edis, an analyst with the consultants Green Energy Markets, said the lesson for those watching on was pretty simple: the generous early subsidies worked. “It really was this fortuitous accident that happened,” he said. “The message from it is pretty clear: go hard and go big, or don’t bother.”</p>
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

export default GoHardAndGoBig;
