
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';

interface ProjectTagsProps {
  tags: string[];
  projectType: "professional" | "personal";
  isDecoding: boolean;
}

const ProjectTags = ({ tags, projectType, isDecoding }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, tagIndex) => (
        <span 
          key={tagIndex} 
          className={cn(
            "px-2 py-1 text-xs rounded-sm transition-all duration-300 hover:shadow-sm",
            projectType === "professional" 
              ? "bg-[#9b87f5]/10 text-[#9b87f5] hover:bg-[#9b87f5]/30 hover:shadow-[#9b87f5] group-hover:border border-[#9b87f5]/50"
              : "bg-mw-green/10 text-mw-green hover:bg-mw-green/30 hover:shadow-mw-green group-hover:border border-mw-green/50"
          )}
        >
          <CodeCracker 
            text={tag}
            isDecoding={isDecoding}
            skipAnimation={true} // Skip animation for tags
          />
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
