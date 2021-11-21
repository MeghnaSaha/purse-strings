export const formatMoney = (amt, withCurr) => {
    return (amt < 0 ? '-' : '+') + (withCurr ? ' INR ' : '') + Math.abs(amt);
}