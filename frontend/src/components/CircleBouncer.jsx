import React, { useRef, useEffect, useState } from "react";

const MovingImages = ({ imageUrl }) => {
    const canvasRef = useRef(null);
    const imageRef = useRef(null);
    const [images, setImages] = useState([]); // Array to store images
    const imageSize = 50; // size of the image
    const canvasSize = 400; // size of the canvas

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

        const createImage = () => {
            return {
                x: Math.random() * (canvasSize - imageSize), // initial x-coordinate
                y: Math.random() * (canvasSize - imageSize), // initial y-coordinate
                dx: Math.random() * 4 - 2, // random horizontal velocity
                dy: Math.random() * 4 - 2, // random vertical velocity
            };
        };

        const animate = () => {
            // Update positions of existing images
            const updatedImages = images.map((img) => {
                img.x += img.dx;
                img.y += img.dy;

                // Check bounds to prevent image from moving out of canvas
                if (img.x + imageSize > canvasSize || img.x < 0) {
                    img.dx = -img.dx;
                    img.x += img.dx * 2; // move image back inside canvas
                }
                if (img.y + imageSize > canvasSize || img.y < 0) {
                    img.dy = -img.dy;
                    img.y += img.dy * 2; // move image back inside canvas
                }

                return img;
            });

            // Check if any image touches the border, then add a new image
            const touchesBorder = images.some(
                (img) =>
                    img.x + imageSize >= canvasSize ||
                    img.x <= 0 ||
                    img.y + imageSize >= canvasSize ||
                    img.y <= 0
            );
            if (touchesBorder) {
                console.log("touched border");
                setImages((prevImages) => [...prevImages, createImage()]);
            }

            // Clear canvas
            ctx.clearRect(0, 0, canvasSize, canvasSize);

            // Draw images
            updatedImages.forEach((img) => {
                ctx.drawImage(imageRef.current, img.x, img.y, imageSize, imageSize);
            });

            // Request next animation frame
            requestAnimationFrame(animate);
        };

        loadImage().then(() => {
            // Initialize with one image
            setImages([createImage()]);

            // Start animation
            animate();
        });
    }, [imageUrl]); // Re-run effect if imageUrl changes

    return <canvas ref={canvasRef} width={canvasSize} height={canvasSize} />;
};

export default MovingImages;
