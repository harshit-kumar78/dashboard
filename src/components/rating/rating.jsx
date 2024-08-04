import React, { useEffect, useRef } from 'react'

const Rating = ({ val }) => {
    const ratingRef = useRef(null);

    useEffect(() => {
        if (ratingRef.current) {
            if (ratingRef.current) {
                const stars = ratingRef.current.querySelectorAll('.star');
                for (let i = 0; i < val; i++) {
                    stars[i].classList.add('filled');
                }

            }
        }
    }, [val]);


    return (
        <div class="rating" ref={ratingRef}>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
            <span class="star">&#9733;</span>
        </div>
    )
}

export default Rating