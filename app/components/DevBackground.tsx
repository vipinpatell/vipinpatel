export default function DevBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* GRID */}
      <div className="absolute inset-0 
        bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),
            linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:60px_60px]"
      />

      {/* FLOATING SYMBOLS */}
      {symbols.map((item, i) => (
        <span
          key={i}
          className="absolute text-cyan-400 opacity-20 animate-float select-none"
          style={{
            left: item.x,
            top: item.y,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.char}
        </span>
      ))}
    </div>
  );
}

const symbols = [
  { char: "< />", x: "10%", y: "20%", delay: "0s", duration: "14s", size: "22px" },
  { char: "{ }", x: "70%", y: "30%", delay: "2s", duration: "18s", size: "26px" },
  { char: "const", x: "40%", y: "70%", delay: "4s", duration: "20s", size: "20px" },
  { char: "=>", x: "80%", y: "60%", delay: "1s", duration: "16s", size: "24px" },
  { char: ";", x: "25%", y: "50%", delay: "3s", duration: "12s", size: "28px" },
];
