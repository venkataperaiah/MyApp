export function useCaptcha() {
    const a = Math.random() * 10;
    const b = Math.random() * 10;
    const c = Math.random() * 10;
    const d = Math.random() * 10;
    const e = Math.random() * 10;
    const f = Math.random() * 10;
    
    const code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(d)} ${Math.round(e)} ${Math.round(f)}`;
    return code;
}
