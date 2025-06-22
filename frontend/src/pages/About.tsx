
import React from 'react';
import { Users, Globe, Book, Heart, MapPin, Star, Target, Award, Code, Palette, Megaphone, DollarSign } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  const teamMembers = [
    {
      name: 'Enjifano Tamiru',
      role: 'Team Lead & Full-Stack Developer',
      region: 'Technology',
      description: 'Flutter, React (Next.js), Firebase, AI integration, backend architecture, leadership & coordination',
      icon: Code
    },
    {
      name: 'Bontu Dereje',
      role: 'Frontend Developer & Culture Lead',
      region: 'Development & Culture',
      description: 'React (Next.js), in-depth Oromo cultural food knowledge, recipe mapping, interface design',
      icon: Palette
    },
    {
      name: 'Bontu Kabeta',
      role: 'Content Creator & Marketing Strategist',
      region: 'Marketing',
      description: 'Content production, digital promotion & branding',
      icon: Megaphone
    },
    {
      name: 'Mosisa Rundasa',
      role: 'Finance & UI/UX Designer',
      region: 'Finance & Design',
      description: 'Financial planning, visual design, branding, user experience, and business strategy',
      icon: DollarSign
    }
  ];

  const achievements = [
    { icon: Book, label: 'Recipes Preserved', value: '500+' },
    { icon: Users, label: 'Community Members', value: '1,250+' },
    { icon: Globe, label: 'Countries Reached', value: '15+' },
    { icon: Star, label: 'User Reviews', value: '3,800+' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Cultural Preservation',
      description: 'Safeguarding traditional Oromo culinary heritage for future generations through digital storytelling and community engagement.'
    },
    {
      icon: Users,
      title: 'Community Connection',
      description: 'Building bridges between Oromo communities worldwide, connecting diaspora with their cultural roots through shared culinary experiences.'
    },
    {
      icon: Globe,
      title: 'Authentic Education',
      description: 'Providing accurate, culturally respectful information about Oromo cuisine, traditions, and the stories behind each dish.'
    },
    {
      icon: Target,
      title: 'Innovation & Tradition',
      description: 'Blending modern technology with traditional knowledge to make cultural learning accessible and engaging.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">OromoFood Hub</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are dedicated to preserving, celebrating, and sharing the rich culinary heritage of the Oromo people 
              through digital innovation and community collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                OromoFood Hub exists to bridge the gap between traditional knowledge and modern accessibility. 
                We believe that food is more than sustenance—it's culture, history, and identity passed down 
                through generations.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform serves as a living library where elders can share their wisdom, young people can 
                learn their heritage, and the global Oromo diaspora can stay connected to their roots through 
                the universal language of food.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                  <achievement.icon className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-gray-900 mb-1">{achievement.value}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every decision we make is guided by these core principles that honor our heritage 
              while embracing innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team combines cultural expertise, culinary mastery, and technological innovation 
              to bring you an authentic experience.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <member.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-amber-600 font-medium mb-1">{member.role}</div>
                  <div className="text-sm text-gray-500 mb-4 flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {member.region}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Together, we're building something bigger than a recipe database—we're preserving culture 
              and strengthening communities worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Recognition</h3>
              <p className="text-gray-600">
                Officially recognized by Oromo cultural organizations for our contribution 
                to heritage preservation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Connecting Oromo communities across 5 continents, from Ethiopia to North America, 
                Europe, and Australia.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Building</h3>
              <p className="text-gray-600">
                Facilitating connections between elders and youth, preserving knowledge 
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Joining Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Join Our Community</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Become part of a thriving community dedicated to preserving and sharing Oromo culinary heritage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">👁️ Viewer</h3>
              <p className="text-gray-600 text-sm">Browse, comment, and rate recipes from our community</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">👩🏽‍🍳 Contributor</h3>
              <p className="text-gray-600 text-sm">Upload recipes, stories, and videos to share your knowledge</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">🧓 Elder</h3>
              <p className="text-gray-600 text-sm">Verified cultural knowledge holders and wisdom keepers</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">🧑🏽‍🏫 Guide</h3>
              <p className="text-gray-600 text-sm">Moderate communities and teach through video content</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Join Process</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Sign Up</h4>
                <p className="text-gray-600 text-sm">Create account via email or Google, choose your region</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Set Profile</h4>
                <p className="text-gray-600 text-sm">Add your name, region, favorite dish, and role preference</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Join & Engage</h4>
                <p className="text-gray-600 text-sm">Connect with your regional community and start sharing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're an elder with recipes to share, a young person eager to learn, 
            or simply someone who appreciates authentic culture, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-amber-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-amber-700 hover:to-red-700 transition-all shadow-lg">
              Become a Contributor
            </button>
            <button className="border-2 border-amber-600 text-amber-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-amber-50 transition-all">
              Join Community
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
