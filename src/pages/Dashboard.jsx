// import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AccountCard from "../components/AccountCard";
import ScheduledPostCard from "../components/ScheduledPostCard";
// import api from "../utils/api";

export default function Dashboard() {
    const linkedinPages = [];
    const scheduledPosts = [];
//   const [linkedinPages, setLinkedinPages] = useState([]);
//   const [scheduledPosts, setScheduledPosts] = useState([]);

//   const fetchLinkedinPages = async () => {
//     try {
//       const res = await api.get("/linkedin/pages");
//       setLinkedinPages(res.data.pages || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const fetchScheduledPosts = async () => {
//     try {
//       const res = await api.get("/posts/scheduled");
//       setScheduledPosts(res.data.posts || []);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     fetchLinkedinPages();
//     fetchScheduledPosts();
//   }, []);

  const connectLinkedIn = async () => {
    const res = "/linkedin/url"
    window.location.href = res.data.url;
  };

  return (
    <>
      <Sidebar />
      <Topbar />

      <main className="ml-64 mt-20 p-10 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Welcome Back 👋</h1>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 bg-white border rounded-xl shadow">
            <h2 className="text-2xl font-bold">{scheduledPosts.length}</h2>
            <p className="text-gray-600">Scheduled Posts</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow">
            <h2 className="text-2xl font-bold">{linkedinPages.length}</h2>
            <p className="text-gray-600">LinkedIn Pages Connected</p>
          </div>

          <div className="p-6 bg-white border rounded-xl shadow">
            <h2 className="text-2xl font-bold">1</h2>
            <p className="text-gray-600">Active Integrations</p>
          </div>
        </div>

        {/* Connect Accounts */}
        <h2 className="text-xl font-semibold mb-4">Connected Accounts</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Linkedin */}
          <AccountCard
            icon="🔗"
            title="LinkedIn Pages"
            description="Connect and manage LinkedIn Company Pages"
            onClick={connectLinkedIn}
          />

          {/* Facebook */}
          <AccountCard
            icon="📘"
            title="Facebook Pages"
            description="Connect Facebook Pages (Coming Soon)"
            onClick={() => alert("Coming Soon")}
          />

          {/* X */}
          <AccountCard
            icon="🐦"
            title="X / Twitter"
            description="Connect Twitter Account (Coming Soon)"
            onClick={() => alert("Coming Soon")}
          />
        </div>

        {/* LinkedIn Pages */}
        <h2 className="text-xl font-semibold mt-16 mb-4">Your LinkedIn Pages</h2>

        {linkedinPages.length === 0 ? (
          <p className="text-gray-500">No LinkedIn pages connected.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {linkedinPages.map((page) => (
              <div key={page.orgId} className="p-6 bg-white border rounded-xl shadow">
                <h3 className="font-semibold">{page.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Page ID: {page.orgId}</p>
              </div>
            ))}
          </div>
        )}

        {/* Scheduled Posts */}
        <h2 className="text-xl font-semibold mt-16 mb-4">Scheduled Posts</h2>

        {scheduledPosts.length === 0 ? (
          <p className="text-gray-500">No scheduled posts.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scheduledPosts.map((post) => (
              <ScheduledPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
