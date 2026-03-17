export default function LiveBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Gradient mesh */}
      <div className="absolute inset-0 gradient-mesh"></div>

      {/* Glow blobs */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/20 blur-[140px] rounded-full top-20 left-20 animate-pulse"></div>

      <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full bottom-10 right-20 animate-pulse"></div>

      <div className="absolute w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full top-1/2 left-1/2 animate-pulse"></div>

    </div>
  );
}
