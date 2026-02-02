import React from 'react';

interface LandingPageProps {
    onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">

            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                            <i className="fa-solid fa-file-lines text-lg mx-1"></i>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-slate-800">InsightHub</span>
                    </div>

                    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-500">
                        <a href="#features" className="hover:text-blue-600 transition-colors">Features</a>
                        <a href="#how-it-works" className="hover:text-blue-600 transition-colors">How it Works</a>

                    </div>

                    <div>
                        <button
                            onClick={onStart}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-20 px-6 container mx-auto text-center">
                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
                    <i className="fa-solid fa-wand-magic-sparkles"></i>
                    <span>AI-Powered Research Assistant</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                    Summarize Research Papers<br />
                    <span className="text-blue-600">in Seconds</span>
                </h1>

                <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Upload your academic papers and get instant AI-generated summaries, key insights, and semantic search across all your documents.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
                    <button
                        onClick={onStart}
                        className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-transform hover:-translate-y-0.5"
                    >
                        Get Started Free <i className="fa-solid fa-arrow-right ml-2"></i>
                    </button>
                    <button
                        className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors"
                    >
                        See Demo
                    </button>
                </div>

                <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-cloud-arrow-up text-blue-500"></i>
                        <span>Drag & Drop Upload</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-magnifying-glass text-blue-500"></i>
                        <span>Semantic Search</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <i className="fa-solid fa-wand-magic-sparkles text-blue-500"></i>
                        <span>AI Summaries</span>
                    </div>
                </div>
            </header>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
                        <p className="text-slate-500">Get started in minutes with our simple four-step process.</p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28%] left-[10%] right-[10%] h-[2px] bg-slate-200 -z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {[
                                { step: '01', icon: 'fa-cloud-arrow-up', title: 'Upload Your Paper', desc: "Drag and drop your PDF research paper or click to browse. We'll handle the rest." },
                                { step: '02', icon: 'fa-microchip', title: 'AI Processing', desc: 'Our AI analyzes your paper, extracting key information and generating summaries.' },
                                { step: '03', icon: 'fa-file-circle-check', title: 'Get Insights', desc: 'View comprehensive summaries, key findings, methodology, and conclusions.' },
                                { step: '04', icon: 'fa-comments', title: 'Ask Questions', desc: 'Chat with our AI to dive deeper into any aspect of your research papers.' },
                            ].map((item, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center group">
                                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center mb-6 relative hover:-translate-y-2 transition-transform duration-300">
                                        <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold border-4 border-slate-50">
                                            {item.step}
                                        </div>
                                        <i className={`fa-solid ${item.icon} text-2xl text-blue-600`}></i>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">{item.title}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed px-2">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Everything You Need for Research</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Powerful features designed to help you understand and organize academic papers efficiently.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { icon: 'fa-cloud-arrow-up', title: 'Easy Upload', desc: 'Simply drag and drop your research papers. We support PDF files up to 10MB with instant processing.' },
                            { icon: 'fa-file-lines', title: 'Smart Summarizer', desc: 'Get concise, accurate summaries of your research papers powered by advanced AI technology.' },
                            { icon: 'fa-lightbulb', title: 'Key Insights', desc: 'Automatically extract methodology, findings, and conclusions from your uploaded papers.' },
                            { icon: 'fa-magnifying-glass', title: 'Semantic Search', desc: 'Find exactly what you answer with meaning, not just keywords across all documents.' },
                            { icon: 'fa-comments', title: 'Chat with AI', desc: 'Ask questions in English, Hindi, or Marathi and get voice responses from your personal research assistant.' },
                            { icon: 'fa-table-columns', title: 'Dashboard', desc: 'Organize and manage all your research documents in one clean, intuitive interface.' },
                        ].map((feat, idx) => (
                            <div key={idx} className="p-8 border border-slate-100 rounded-2xl hover:shadow-lg hover:border-slate-200 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-xl group-hover:scale-110 transition-transform">
                                    <i className={`fa-solid ${feat.icon}`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feat.title}</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Research?</h2>
                    <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg">
                        Join thousands of researchers who save hours every week with InsightHub. Start for free, no credit card required.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button
                            onClick={onStart}
                            className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-500 transition-colors"
                        >
                            Start Free Trial <i className="fa-solid fa-arrow-right ml-2"></i>
                        </button>
                        <button
                            className="px-8 py-4 bg-transparent border border-slate-700 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors"
                        >
                            Contact Sales
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-white pt-16 pb-8 border-t border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                        <div className="col-span-2 md:col-span-1">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="bg-blue-600 p-1.5 rounded-lg text-white">
                                    <i className="fa-solid fa-file-lines text-sm mx-1"></i>
                                </div>
                                <span className="text-xl font-bold tracking-tight text-slate-800">InsightHub</span>
                            </div>
                            <p className="text-slate-500 text-sm leading-relaxed">
                                AI-powered research paper analysis for academics and professionals.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-blue-600">Features</a></li>

                                <li><a href="#" className="hover:text-blue-600">API</a></li>
                                <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Resources</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-blue-600">Documentation</a></li>
                                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                                <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                                <li><a href="#" className="hover:text-blue-600">Community</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
                            <ul className="space-y-2 text-sm text-slate-500">
                                <li><a href="#" className="hover:text-blue-600">About</a></li>
                                <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                                <li><a href="#" className="hover:text-blue-600">Privacy</a></li>
                                <li><a href="#" className="hover:text-blue-600">Terms</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                        <div>&copy; 2024 InsightHub Inc. All rights reserved.</div>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#"><i className="fa-brands fa-twitter hover:text-blue-600"></i></a>
                            <a href="#"><i className="fa-brands fa-github hover:text-blue-600"></i></a>
                            <a href="#"><i className="fa-brands fa-linkedin hover:text-blue-600"></i></a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default LandingPage;
