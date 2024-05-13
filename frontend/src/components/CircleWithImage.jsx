import React, { useRef, useEffect } from "react";

const CircleWithImage = ({ imageUrl, radius }) => {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const loadImage = () => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = imageUrl;
                imageRef.current = img;
            });
        };

        const drawCircleWithImage = async () => {
            try {
                const image = await loadImage();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.beginPath();
                ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
                ctx.closePath();
                ctx.clip(); // Clip the image to the circle
                ctx.drawImage(image, canvas.width / 2 - radius, canvas.height / 2 - radius, radius * 2, radius * 2);
            } catch (error) {
                console.error("Error loading image:", error);
            }
        };

        drawCircleWithImage();
    }, [imageUrl, radius]);

    return <canvas ref={canvasRef} width={radius * 2} height={radius * 2} />;
};

export default CircleWithImage;
