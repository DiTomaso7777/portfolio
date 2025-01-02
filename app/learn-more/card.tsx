import { FC, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface CardProps {
    drag: boolean;
    frontCard: boolean;
    setIndex: (index: number) => void;
    index: number;
}

const Card: FC<CardProps> = ({ drag, frontCard, setIndex, index }) => {
    const [exitX, setExitX] = useState(0);
    const x = useMotionValue(0);
    const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], { clamp: false });

    const variantsFrontCard = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom: number) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };

    const variantsBackCard = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_: any, info: any) {
        if (info.offset.x < -100) {
            setExitX(-250);
            setIndex(index + 1);
        } else if (info.offset.x > 100) {
            setExitX(250);
            setIndex(index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: 300, // Increased width
                height: 200, // Increased height
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab",
                borderRadius: 30,
                overflow: "hidden" // To ensure child elements fit nicely
            }}
            whileTap={{ cursor: "grabbing" }}
            drag={drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            variants={frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={{
                type: frontCard ? "spring" : "tween",
                stiffness: frontCard ? 300 : undefined,
                damping: frontCard ? 20 : undefined,
                scale: { duration: frontCard ? undefined : 0.2 },
                opacity: { duration: frontCard ? undefined : 0.4 }
            }}
        >
            <motion.div
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: "#fff",
                    display: 'flex',
                    flexDirection: 'column'
                }}
            >
                <div style={{ height: '25%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {/* Top Content */}
                    <h2 style={{ margin: 0 }}>Top Content</h2>
                </div>
                <div style={{ height: '70%', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid #ccc' }}>
                    {/* Bottom Text */}
                    <p style={{ margin: 0 }}>This is the bottom text area with a line above it.</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

// Default export
export default Card;
