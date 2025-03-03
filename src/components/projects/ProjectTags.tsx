
import { cn } from '@/lib/utils';
import CodeCracker from '../ui/CodeCracker';

interface ProjectTagsProps {
  tags: string[];
  styles: {
    iconColor: string;
    hoverText: string;
    tagBg: string;
    tagText: string;
  };
  isDecoding: boolean;
}

const ProjectTags = ({ tags, styles, isDecoding }: ProjectTagsProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, tagIndex) => (
        <span 
          key={tagIndex} 
          className={cn(
            "px-2 py-1 text-xs rounded-sm transition-all duration-300 hover:shadow-sm",
            styles.tagBg,
            styles.tagText
          )}
        >
          <CodeCracker 
            text={tag}
            isDecoding={isDecoding}
          />
        </span>
      ))}
    </div>
  );
};

export default ProjectTags;
