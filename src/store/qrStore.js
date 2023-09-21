import { create } from 'zustand';

const useQrStore = create((set) => ({
    qrElement: null,
    qrRef: null,
    updateQrElement(qrElement){
       console.log(qrElement)
       return set((state) => ({ qrElement}) )
    },
    updateQrRef(ref){
        return set((state) => ({qrRef:ref }) )
    }
}))

export { useQrStore };