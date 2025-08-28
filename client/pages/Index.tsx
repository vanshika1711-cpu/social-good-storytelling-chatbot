import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Lightbulb, Users, FileText } from "lucide-react";

export default function Index() {
  const navigate = useNavigate();

  const handleStartChat = () => {
    navigate("/chat");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-social-blue-50 via-white to-social-green-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-social-blue-500 to-social-green-500 flex items-center justify-center">
            <MessageCircle className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Social Good Stories</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Local Voices into
            <span className="bg-gradient-to-r from-social-blue-600 to-social-green-600 bg-clip-text text-transparent"> Powerful Impact Stories</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Share your community needs, and let AI craft inspiring stories, calls to action, and blog posts.
          </p>

          {/* CTA Button */}
          <Button 
            onClick={handleStartChat}
            size="lg"
            className="h-16 px-12 text-lg font-semibold bg-gradient-to-r from-social-blue-600 to-social-green-600 hover:from-social-blue-700 hover:to-social-green-700 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Start Creating Your Story
          </Button>

          <p className="text-sm text-gray-500 mt-4">
            No technical skills needed • Free to use • AI-powered
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="h-16 w-16 bg-gradient-to-br from-social-blue-500 to-social-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Share Community Needs</h3>
            <p className="text-gray-600">
              Simply tell us about the challenges your community faces. Our AI understands local issues and amplifies your voice.
            </p>
          </div>

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="h-16 w-16 bg-gradient-to-br from-social-green-500 to-social-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Storytelling</h3>
            <p className="text-gray-600">
              Our advanced AI transforms your input into compelling narratives that inspire action and drive social change.
            </p>
          </div>

          <div className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20">
            <div className="h-16 w-16 bg-gradient-to-br from-social-blue-600 to-social-green-500 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready-to-Share Content</h3>
            <p className="text-gray-600">
              Get blog posts, flyers, and social media content ready for immediate use. Download PDFs or share links instantly.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-social-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Start the Chat</h3>
              <p className="text-gray-600 text-sm">Click the button above and begin describing your community's story</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-social-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Creates Content</h3>
              <p className="text-gray-600 text-sm">Watch as our AI generates compelling stories and calls to action</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 bg-gradient-to-r from-social-blue-500 to-social-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Share & Impact</h3>
              <p className="text-gray-600 text-sm">Download or share your content to make a real difference</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
