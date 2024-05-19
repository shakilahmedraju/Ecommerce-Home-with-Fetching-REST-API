import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';



export default function OnlineDelivery() {
    
    const [data, setData] = useState([])

    const fetchTopProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const apidata = await response.json();
        setData(apidata);
    }
    useEffect(
        () => {
            fetchTopProducts()
        }, []
    )

    const componentRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (componentRef.current){
                const rect = componentRef.current.getBoundingClientRect();
                setIsAtTop(rect.top<=0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <div className="max-w-[1200px] mx-auto px-2" ref={componentRef}>
            <div className='flex my-3 items-center justify-between'>
                <div className='text-[25px] font-bold'>Restaurants with online food delivery in Kolkata</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[999999] bg-white w-full left-0' : ''}>
                <div className='max-w-[1200px] mx-auto flex my-4 gap-3'>
                    <div className='p-3 rounded-md shadow'>Filter</div>
                    <div className='p-3 rounded-md shadow'>Sort By</div>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                {
                    data.map(
                        (d,i) => {
                            return <Card {...d} key={i} />
                        }
                    ) 
                }
            </div>
        </div>
    )
    
}