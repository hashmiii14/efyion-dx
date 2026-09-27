/** The three rising dots from the Efyion Dx logo, used as a small brand marker. */
export default function DotMark({ className = '', light = false }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-end gap-[3px] group ${className}`}>
      <span className={`h-[5px] w-[5px] rounded-full transition-transform duration-300 group-hover:-translate-y-0.5 ${light ? 'bg-white/60' : 'bg-navy-900'}`} />
      <span className={`mb-[3px] h-[6px] w-[6px] rounded-full transition-transform duration-300 delay-75 group-hover:-translate-y-1 ${light ? 'bg-white/80' : 'bg-violet-600/70'}`} />
      <span className={`mb-[7px] h-[7px] w-[7px] rounded-full transition-transform duration-300 delay-150 group-hover:-translate-y-1.5 ${light ? 'bg-white' : 'bg-violet-600'}`} />
    </span>
  );
}
