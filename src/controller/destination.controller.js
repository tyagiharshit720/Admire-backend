import usePrams from 'use-params';

export const destination=async(req, res) => {
   const { type } = usePrams(req);
}
export const itinerary=async(req,res)=>{
    const { place } = usePrams(req);
     
}
