import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import artistPortrait from "@/assets/artist-portrait.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              About the Artist
            </h1>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              For over two decades, I've been capturing the world through paint and canvas, transforming 
              emotions and experiences into tangible works of art. Each brushstroke is a conversation 
              between intention and intuition.
            </p>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              My journey began in a small studio apartment, where curiosity and passion collided. 
              Today, my work has been featured in galleries across the country, and I'm honored to 
              have pieces in private collections worldwide.
            </p>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed">
              I believe art should evoke emotion and create connection. Whether it's the warmth of 
              a sunset or the depth of an abstract composition, my goal is to create pieces that 
              resonate with the soul.
            </p>
          </div>
          
          <div className="order-1 lg:order-2">
            <img
              src={artistPortrait}
              alt="Artist Portrait"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Artistic Journey */}
        <div className="bg-secondary rounded-lg p-8 md:p-12 mb-20">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-8">
            Artistic Journey
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">2020 - Present</h3>
              <p className="font-inter text-muted-foreground">
                Focused on contemporary abstract works, exploring the relationship between color, 
                texture, and emotion. Featured in multiple solo exhibitions.
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">2015 - 2020</h3>
              <p className="font-inter text-muted-foreground">
                Developed signature landscape series, combining impressionist techniques with modern 
                sensibilities. Participated in over 20 group exhibitions.
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">2010 - 2015</h3>
              <p className="font-inter text-muted-foreground">
                Studied classical portraiture and realism, mastering traditional techniques while 
                developing unique artistic voice.
              </p>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">2005 - 2010</h3>
              <p className="font-inter text-muted-foreground">
                Formal art education and early explorations in various mediums. First gallery 
                representation established.
              </p>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-6">
            Why I Paint
          </h2>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed mb-6">
            Art is my language for expressing what words cannot capture. Through color, form, and 
            texture, I seek to create visual poetry that speaks to the human experience.
          </p>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Every painting is an exploration—a journey into the unknown where inspiration meets 
            technique. I'm driven by the desire to create work that not only beautifies spaces 
            but also enriches lives and sparks meaningful connections.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
