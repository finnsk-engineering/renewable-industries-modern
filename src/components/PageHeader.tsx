import AnimatedSection from './AnimatedSection';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="bg-secondary/10 py-16 md:py-24">
            <AnimatedSection className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight">{title}</h1>
                {subtitle && <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">{subtitle}</p>}
            </AnimatedSection>
        </div>
    );
}

export default PageHeader;