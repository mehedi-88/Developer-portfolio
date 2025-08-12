// DMS MEHEDI Portfolio Website Configuration
// Edit this file to easily update website content

const CONFIG = {
    // Personal Information
    personal: {
        name: "DMS MEHEDI",
        title: "Digital Marketing Expert • Web Developer • Shopify Dropshipping Specialist",
        description: "Transforming businesses through strategic digital marketing, cutting-edge web development, and optimized Shopify solutions. Let's build your success story together.",
        bio: {
            short: "I'm a results-driven digital marketing expert, web developer, and Shopify dropshipping specialist with over 5 years of experience helping businesses achieve their online goals.",
            long: "My approach combines data-driven strategies with creative solutions, ensuring every project delivers measurable results. I specialize in creating high-converting websites, implementing effective marketing campaigns, and optimizing Shopify stores for maximum profitability."
        },
        stats: {
            experience: "5+",
            projects: "100+",
            satisfaction: "98%"
        },
        location: "Dhaka, Bangladesh",
        email: "dmsmehedis@gmail.com",
        phone: "+880 1817 938 342",
        responseTime: "Within 24 hours"
    },

    // Skills & Expertise
    skills: {
        "Digital Marketing": [
            "SEO",
            "Google Ads",
            "Facebook Ads",
            "Content Marketing",
            "Analytics"
        ],
        "Web Development": [
            "HTML/CSS",
            "JavaScript",
            "React",
            "Node.js",
            "WordPress"
        ],
        "Shopify & Dropshipping": [
            "Store Setup",
            "Product Research",
            "Conversion Optimization",
            "Marketing Automation"
        ]
    },

    // Services
    services: {
        "digital-marketing": {
            title: "Digital Marketing",
            icon: "fas fa-chart-line",
            description: "Strategic SEO, targeted advertising campaigns, and data-driven content marketing to boost your online presence and drive conversions.",
            features: [
                "Search Engine Optimization (SEO)",
                "Google Ads & Facebook Ads Management",
                "Content Marketing & Strategy",
                "Social Media Marketing",
                "Email Marketing Campaigns",
                "Analytics & Performance Tracking"
            ]
        },
        "web-development": {
            title: "Web Development",
            icon: "fas fa-code",
            description: "Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance and user experience.",
            features: [
                "Responsive Website Design",
                "Custom Web Applications",
                "Landing Page Optimization",
                "Performance & Speed Optimization",
                "SEO-Friendly Development",
                "Third-party Integrations"
            ]
        },
        "shopify-dropshipping": {
            title: "Shopify & Dropshipping",
            icon: "fas fa-shopping-cart",
            description: "Complete Shopify store setup, product research, and conversion optimization to maximize your dropshipping business success.",
            features: [
                "Shopify Store Setup & Design",
                "Product Research & Selection",
                "Conversion Rate Optimization",
                "Marketing Strategy & Ads",
                "Automation & Scaling",
                "Performance Analytics"
            ]
        }
    },

    // Pricing Plans
    pricing: {
        toggle: {
            monthly: "Monthly",
            yearly: "Yearly",
            discount: "Save 20%"
        },
        plans: [
            {
                name: "Starter",
                monthlyPrice: 299,
                yearlyPrice: 239,
                featured: false,
                features: [
                    "Basic SEO Setup",
                    "Social Media Management",
                    "Monthly Analytics Report",
                    "Email Support"
                ]
            },
            {
                name: "Pro",
                monthlyPrice: 599,
                yearlyPrice: 479,
                featured: true,
                badge: "Most Popular",
                features: [
                    "Advanced SEO & PPC",
                    "Content Marketing",
                    "Weekly Analytics Report",
                    "Priority Support",
                    "Custom Strategy"
                ]
            },
            {
                name: "Elite",
                monthlyPrice: 999,
                yearlyPrice: 799,
                featured: false,
                features: [
                    "Full-Service Marketing",
                    "Dedicated Account Manager",
                    "Daily Analytics Report",
                    "24/7 Support",
                    "Custom Solutions"
                ]
            }
        ]
    },

    // Portfolio Projects
    portfolio: {
        categories: ["All", "Marketing", "Web Development", "Shopify"],
        projects: [
            {
                id: 1,
                title: "E-commerce SEO Campaign",
                description: "Increased organic traffic by 300% for an online store",
                category: "marketing",
                tags: ["SEO", "E-commerce"],
                image: "images/portfolio/ecommerce-seo.jpg",
                results: "300% increase in organic traffic",
                tools: ["Google Analytics", "SEMrush", "Ahrefs"]
            },
            {
                id: 2,
                title: "Corporate Website Redesign",
                description: "Modern responsive website with 40% improvement in conversion",
                category: "web",
                tags: ["Web Design", "Responsive"],
                image: "images/portfolio/corporate-website.jpg",
                results: "40% improvement in conversion rate",
                tools: ["React", "Node.js", "Figma"]
            },
            {
                id: 3,
                title: "Dropshipping Store Setup",
                description: "Complete Shopify store generating $50K+ monthly revenue",
                category: "shopify",
                tags: ["Shopify", "Dropshipping"],
                image: "images/portfolio/shopify-store.jpg",
                results: "$50K+ monthly revenue",
                tools: ["Shopify", "Oberlo", "Klaviyo"]
            },
            {
                id: 4,
                title: "Facebook Ads Campaign",
                description: "ROAS of 4.2x for a local service business",
                category: "marketing",
                tags: ["Facebook Ads", "ROAS"],
                image: "images/portfolio/facebook-ads.jpg",
                results: "4.2x ROAS",
                tools: ["Facebook Ads Manager", "Pixel", "Analytics"]
            },
            {
                id: 5,
                title: "Landing Page Optimization",
                description: "Conversion rate increased from 2.1% to 8.7%",
                category: "web",
                tags: ["Landing Page", "CRO"],
                image: "images/portfolio/landing-page.jpg",
                results: "2.1% to 8.7% conversion improvement",
                tools: ["Google Optimize", "Hotjar", "VWO"]
            },
            {
                id: 6,
                title: "Product Research & Launch",
                description: "Identified winning products generating $100K+ profit",
                category: "shopify",
                tags: ["Product Research", "Launch"],
                image: "images/portfolio/product-research.jpg",
                results: "$100K+ profit generated",
                tools: ["Jungle Scout", "Helium 10", "AliExpress"]
            }
        ]
    },

    // Testimonials
    testimonials: [
        {
            id: 1,
            quote: "DMS MEHEDI transformed our online presence completely. Our website traffic increased by 400% and conversions improved dramatically. Highly recommended!",
            author: "Sarah Johnson",
            position: "CEO, TechStart Inc.",
            rating: 5,
            image: "images/testimonials/sarah-johnson.jpg"
        },
        {
            id: 2,
            quote: "Working with DMS MEHEDI on our Shopify store was incredible. He set up everything perfectly and our sales increased by 300% in the first month.",
            author: "Michael Chen",
            position: "Founder, FashionForward",
            rating: 5,
            image: "images/testimonials/michael-chen.jpg"
        },
        {
            id: 3,
            quote: "The digital marketing strategies implemented by DMS MEHEDI helped us achieve our revenue goals ahead of schedule. His expertise is unmatched!",
            author: "Emily Rodriguez",
            position: "Marketing Director, GrowthCo",
            rating: 5,
            image: "images/testimonials/emily-rodriguez.jpg"
        }
    ],

    // Contact Information
    contact: {
        form: {
            successMessage: "Thanks for your message! We've received it and will reply within 24 hours.",
            signature: "— DMS MEHEDI"
        },
        social: {
            linkedin: "https://linkedin.com/in/dmsmehedi",
            twitter: "https://twitter.com/dmsmehedi",
            facebook: "https://facebook.com/dmsmehedi",
            instagram: "https://instagram.com/dmsmehedi"
        }
    },

    // SEO & Meta
    seo: {
        title: "DMS MEHEDI - Digital Marketing Expert • Web Developer • Shopify Specialist",
        description: "Professional Digital Marketing Expert, Web Developer, and Shopify Dropshipping Specialist. Transform your business with data-driven strategies and cutting-edge web solutions.",
        keywords: "digital marketing, web development, shopify, dropshipping, SEO, google ads, facebook ads, bangladesh",
        ogImage: "images/og-image.jpg",
        twitterImage: "images/twitter-image.jpg"
    },

    // Animation Settings
    animations: {
        typingSpeed: {
            normal: 100,
            fast: 50,
            pause: 2000,
            delay: 500
        },
        scrollThreshold: 0.1,
        scrollMargin: "0px 0px -50px 0px"
    },

    // Performance Settings
    performance: {
        lazyLoading: true,
        debounceDelay: 100,
        intersectionThreshold: 0.1,
        formCooldown: 5000
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    // Make config available globally in browser
    window.PORTFOLIO_CONFIG = CONFIG;
}

// Utility functions for easy content updates
const ContentManager = {
    // Update personal information
    updatePersonalInfo: function(newInfo) {
        Object.assign(CONFIG.personal, newInfo);
        this.refreshContent();
    },

    // Update services
    updateService: function(serviceId, newData) {
        if (CONFIG.services[serviceId]) {
            Object.assign(CONFIG.services[serviceId], newData);
            this.refreshContent();
        }
    },

    // Add new portfolio project
    addPortfolioProject: function(project) {
        project.id = CONFIG.portfolio.projects.length + 1;
        CONFIG.portfolio.projects.push(project);
        this.refreshContent();
    },

    // Update testimonials
    updateTestimonial: function(id, newData) {
        const testimonial = CONFIG.testimonials.find(t => t.id === id);
        if (testimonial) {
            Object.assign(testimonial, newData);
            this.refreshContent();
        }
    },

    // Refresh website content
    refreshContent: function() {
        // This function can be called to refresh the website content
        // when configuration changes are made
        console.log('Configuration updated. Refresh the page to see changes.');
        
        // You can add more sophisticated content refresh logic here
        // For example, updating specific DOM elements without page reload
    },

    // Get configuration value by path
    get: function(path) {
        return path.split('.').reduce((obj, key) => obj && obj[key], CONFIG);
    },

    // Set configuration value by path
    set: function(path, value) {
        const keys = path.split('.');
        const lastKey = keys.pop();
        const obj = keys.reduce((obj, key) => obj[key] = obj[key] || {}, CONFIG);
        obj[lastKey] = value;
    }
};

// Make ContentManager available globally
window.ContentManager = ContentManager;

// Example usage:
// ContentManager.updatePersonalInfo({ name: "New Name" });
// ContentManager.addPortfolioProject({ title: "New Project", ... });
// ContentManager.get('personal.name');
// ContentManager.set('personal.name', 'New Name');

console.log('Portfolio Configuration Loaded');
console.log('Use ContentManager to easily update website content');
console.log('Example: ContentManager.updatePersonalInfo({ name: "New Name" })');