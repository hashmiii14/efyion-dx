/** The three rising dots from the Efyion Dx logo, used as a small brand marker. */
export default function DotMark({ className = '', light = false }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-end gap-[3px] ${className}`}>
      <span className={`h-[5px] w-[5px] rounded-full ${light ? 'bg-white/60' : 'bg-navy-900'}`} />
      <span className={`mb-[3px] h-[6px] w-[6px] rounded-full ${light ? 'bg-white/80' : 'bg-blue-500/70'}`} />
      <span className={`mb-[7px] h-[7px] w-[7px] rounded-full ${light ? 'bg-white' : 'bg-blue-600'}`} />
    </span>
  );
}
