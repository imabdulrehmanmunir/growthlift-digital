// Case study projects - text-heavy format for better SEO and storytelling
export const demos = [
  {
    id: 1,
    name: 'Friends Gym Pk',
    type: 'Fitness Platform',
    imageHorizontal: "/public/friends-gym-h.png",
    imageVertical: "/public/friends-gym-v.png",
    tag: 'React & Vite',
    description: 'A modern, multi-page fitness platform built with React.js and Vite, delivering lightning-fast load times and seamless user experience.',
    caseStudy: {
      problem: 'The fitness industry was rapidly going digital, but many gym platforms suffered from sluggish performance and poor user engagement. Friends Gym Pk needed a solution that could handle dynamic content, multiple membership tiers, class scheduling, and user dashboards while maintaining exceptional performance across all devices.',
      solution: 'We built a comprehensive fitness platform using React.js front-end with Vite for blazing-fast development and production builds. The application features dynamic routing for seamless navigation between member profiles, class schedules, booking systems, and workout tracking. We implemented performance optimization techniques including code splitting, lazy loading, and image optimization to ensure sub-2-second load times even on slower connections. The modern UI uses component-based architecture for maintainability and scalability.',
    },
    gradientFrom: '#1a472a',
    gradientTo: '#2d5a3d',
    accentColor: '#00FF88',
  },
  {
    id: 2,
    name: 'CampusSwap',
    type: 'Mobile Commerce App',
    imageHorizontal: "/public/campusswap-h.png",
    imageVertical: "/public/campusswap-v.png",
    tag: 'Android & Firebase',
    description: 'A secure Android application with real-time database management and an advanced Admin Dashboard, built with Java and Firebase for educational commerce.',
    caseStudy: {
      problem: 'Campus marketplaces needed a dedicated mobile solution for student-to-student transactions. CampusSwap required a robust Android application that could handle user authentication, product listings, secure transactions, and an administrative backend—all with real-time data synchronization and stringent security requirements.',
      solution: 'We developed a native Android application using Java with Firebase integration for real-time database management and cloud storage. The platform features a comprehensive Admin Dashboard built with secure authentication, transaction monitoring, and user management capabilities. Firebase Realtime Database provides instant data synchronization across all clients, while Firebase Authentication ensures secure user access. The application includes product listing management, in-app messaging, secure payment gateway integration, and detailed analytics—all optimized for smooth performance on various Android devices and network conditions.',
    },
    gradientFrom: '#0d2a4d',
    gradientTo: '#1a4a7d',
    accentColor: '#00B4FF',
  },
];
