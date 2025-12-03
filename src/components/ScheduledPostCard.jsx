export default function ScheduledPostCard({ post }) {
  return (
    <div className="p-5 bg-white rounded-xl border shadow-sm">
      <h3 className="text-gray-900 font-medium">{post.text}</h3>

      <p className="text-gray-600 text-sm mt-2">
        Scheduled for: {new Date(post.date).toLocaleString()}
      </p>

      <div className="mt-3">
        <span className="text-xs bg-gray-200 px-2 py-1 rounded">
          {post.platform.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
