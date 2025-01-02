"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './card'; // Ensure this path is correct

export default function LearnMore(): JSX.Element {
    const [index, setIndex] = useState(0);

    return (
        <div
            className="w-screen h-screen relative flex items-center justify-center"
            style={{ 
                backgroundImage: "url('/main-bg.webp')", // Adjust the path to your image
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <motion.div style={{ width: 150, height: 150, position: "relative" }}>
                <AnimatePresence initial={false}>
                    <Card
                        key={index + 1}
                        frontCard={true} // Ensure you render the front card as needed
                        index={index}
                        setIndex={setIndex}
                        drag={true}
                    />
                </AnimatePresence>
            </motion.div>
        </div>
    );
}

