"use client";
import { X, Minus, Plus } from "lucide-react";

export function CartDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  return <div className={`fixed inset-0 z-[70] pointer-events-none transition-opacity duration-500 ${open ? "opacity-100" : "opacity-0"}`}>
    <div className={`absolute inset-0 bg-black/35 transition-opacity ${open ? "opacity-100 pointer-events-auto" : "opacity-0"}`} onClick={onClose} />
    <aside className={`absolute right-0 top-0 h-full w-full max-w-[520px] bg-[var(--pearl)] text-[var(--graphite)] p-8 md:p-12 transition-transform duration-700 ease-[cubic-bezier(.2,.7,.2,1)] ${open ? "translate-x-0 pointer-events-auto" : "translate-x-full"}`}>
      <div className="flex justify-between items-center"><span className="eyebrow">YOUR BAG</span><button onClick={onClose}><X size={19} strokeWidth={1.2}/></button></div>
      <div className="mt-20 flex gap-6 items-center"><div className="w-24 aspect-square bg-[var(--stone)] grid place-items-center"><div className="w-14 h-14 rounded-full border-[13px] border-[#cbc9c4]" /></div><div className="flex-1"><div className="eyebrow">AUREL RING</div><p className="text-xs opacity-55 mt-2">Silver / Size 8</p><div className="flex justify-between mt-5"><div className="flex items-center gap-3"><Minus size={12}/><span>1</span><Plus size={12}/></div><span>$890</span></div></div></div>
      <div className="absolute bottom-10 left-8 right-8 md:left-12 md:right-12"><div className="flex justify-between border-t border-black/10 pt-5 text-xs"><span>SUBTOTAL</span><span>$890</span></div><button className="mt-5 w-full bg-[var(--black)] text-[var(--pearl)] py-5 text-[10px] tracking-[.18em]">CHECKOUT →</button></div>
    </aside>
  </div>;
}
