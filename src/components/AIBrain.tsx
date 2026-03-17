export default function AIBrain() {
  return (
    <div className="absolute inset-0 flex justify-center items-center pointer-events-none">

      <div className="w-[400px] h-[400px] rounded-full border border-lime-400/20 animate-pulse blur-2xl"></div>

      <div className="absolute w-[300px] h-[300px] rounded-full border border-lime-400/30 animate-spin-slow"></div>

      <div className="absolute w-[200px] h-[200px] rounded-full border border-lime-400/40 animate-spin-reverse"></div>

    </div>
  );
}