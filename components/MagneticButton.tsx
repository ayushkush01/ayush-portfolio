'use client';

import { useRef, ReactNode, MouseEvent } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Props {
    children: ReactNode;
    className?: string;
    speed?: number;
    tollerance?: number;
    scale?: number;
    onClick?: () => void;
}

export default function MagneticButton({
    children,
    className = '',
    speed = 1,
    tollerance = 0.8,
    scale = 1.2,
    onClick,
}: Props) {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(
        (context, contextSafe) => {
            const xTo = gsap.quickTo(ref.current, 'x', {
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
            });
            const yTo = gsap.quickTo(ref.current, 'y', {
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
            });

            const handleMouseMove = contextSafe?.((e: MouseEvent) => {
                const { clientX, clientY } = e;
                const { height, width, left, top } =
                    ref.current?.getBoundingClientRect() || {
                        height: 0,
                        width: 0,
                        left: 0,
                        top: 0,
                    };
                const x = clientX - (left + width / 2);
                const y = clientY - (top + height / 2);

                xTo(x * speed);
                yTo(y * speed);
            });

            const handleMouseLeave = contextSafe?.(() => {
                xTo(0);
                yTo(0);
            });

            ref.current?.addEventListener('mousemove', handleMouseMove as any);
            ref.current?.addEventListener('mouseleave', handleMouseLeave as any);

            return () => {
                ref.current?.removeEventListener(
                    'mousemove',
                    handleMouseMove as any,
                );
                ref.current?.removeEventListener(
                    'mouseleave',
                    handleMouseLeave as any,
                );
            };
        },
        { scope: ref },
    );

    return (
        <div
            ref={ref}
            className={`${className} cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
