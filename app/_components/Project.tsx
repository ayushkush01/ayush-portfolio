import TransitionLink from '@/components/TransitionLink';
import { cn } from '@/lib/utils';
import { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useRef } from 'react';

interface Props {
    index: number;
    project: IProject;
}

/*
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link">
    <path id="arrow-line" d="M15 3h6v6"></path>
    <path id="arrow-curb" d="M10 14 21 3"></path>
    <path id="box" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
</svg>

<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M39.9996 6.18259H10.2846C5.70915 6.18259 2 9.89172 2 14.4672V60.0324C2 64.6079 5.70914 68.317 10.2846 68.317H55.8498C60.4253 68.317 64.1344 64.6079 64.1344 60.0324V24.9401" stroke="#DDDDDD" stroke-width="3.10672" stroke-linecap="round"/>
<rect x="38.2451" y="30.0007" width="40.3874" height="3.10672" rx="1.55336" transform="rotate(-45 38.2451 30.0007)" fill="#DDDDDD"/>
<path d="M58.5561 3.23069L67.9426 1.59357C68.1983 1.54899 68.4231 1.76656 68.387 2.02352L67.0827 11.2992" stroke="#DDDDDD" stroke-width="2.07115" stroke-linecap="round"/>
</svg>

*/

gsap.registerPlugin(useGSAP);

const Project = ({ index, project }: Props) => {
    return (
        <TransitionLink
            href={`/projects/${project.slug}`}
            className="project-item group block py-12 border-b border-border/40 last:border-none transition-all hover:px-4"
        >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4">
                <div className="flex items-baseline gap-6">
                    <span className="font-mono text-primary/60 text-lg">
                        {(index + 1).toString().padStart(2, '0')}.
                    </span>
                    <h4 className="text-4xl md:text-6xl lg:text-7xl font-anton text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {project.title}
                    </h4>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                    {project.techStack.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-full border border-border bg-muted/20 text-xs md:text-sm text-muted-foreground group-hover:border-primary/30 group-hover:text-primary transition-colors">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </TransitionLink>
    );
};

export default Project;
