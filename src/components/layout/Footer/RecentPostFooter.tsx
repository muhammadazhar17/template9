import Image from "next/image"
export default function RecentPostsSection() {
  const posts = [
    { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost1.png" },
    { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost2.png" },
    { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost3.png" },
  ];

  return (
    <div className="w-full max-w-xs px-4 md:px-6 lg:px-8 mb-12">
      <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-6">Recent Posts</h3>
      {posts.map((post, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center mb-6">
          <Image src={post.image} alt="" className="w-16 h-16 object-cover mb-4 md:mb-0 md:mr-4" />
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-sm md:text-base lg:text-lg mb-2">{post.title}</h4>
            <p className="text-xs md:text-sm text-gray-400">{post.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
