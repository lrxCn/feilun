export const counter = ({get,set}) => ({
  count:1,
  increase(){
    const { count } = get();
    set({ count: count+1})
  },
  decrease(){
    const { count } = get();
    set({ count: count-1})
  },
})