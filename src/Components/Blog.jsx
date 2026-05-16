// import React from 'react';

// // Example blog posts array with different background colors
// const blogPosts = [
//   {
//     id: 1,
//     title: 'Understanding the MERN Stack',
//     description: 'The MERN stack is a collection of technologies used for building web applications. It consists of MongoDB, Express.js, React.js, and Node.js...',
//     link: 'https://example.com/mern-stack-post',
//     colorClass: 'bg-violet-200', // Unique color for this card
//   },
//   {
//     id: 2,
//     title: 'TailwindCSS: A Modern CSS Framework',
//     description: 'TailwindCSS is a utility-first CSS framework that enables rapid UI development. In this post, we explore its features and how it helps developers...',
//     link: 'https://example.com/tailwindcss-post',
//     colorClass: 'bg-orange-200', // Unique color for this card
//   },
//   {
//     id: 3,
//     title: 'Best Practices for Writing Clean Code',
//     description: 'Writing clean code is essential for maintainable and scalable applications. In this blog, we share some tips and best practices for clean coding...',
//     link: 'https://example.com/clean-code-post',
//     colorClass: 'bg-pink-200', // Unique color for this card
//   },
//   {
//     id: 4,
//     title: 'How to Build a Chat Application using MERN',
//     description: 'Building a real-time chat application using the MERN stack involves setting up WebSocket connections, managing state with React, and handling MongoDB for persistence...',
//     link: 'https://example.com/chat-app-post',
//     colorClass: 'bg-green-200', // Unique color for this card
//   },
// ];

// const Blog = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto px-4 md:px-20 py-10">
//       <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">My Blog</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogPosts.map((post) => (
//           <div
//             key={post.id}
//             className={`${post.colorClass} rounded-lg shadow-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-xl`}
//           >
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
//             <p className="text-gray-600 mb-4">{post.description}</p>
//             <a
//               href={post.link}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
//             >
//               Read More
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Blog;
